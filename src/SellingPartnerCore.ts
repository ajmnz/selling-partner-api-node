import { aws4Interceptor } from "aws4-axios";
import axios from "axios";

import { HttpClient } from "./http-client";
import type {
  Credentials,
  LwaResponse,
  SellingPartnerOptions,
  StsResponse,
} from "./types";

export class SellingPartnerCore {
  /**
   * Client options
   */
  private options: SellingPartnerOptions;

  /**
   * The http client instance
   */
  protected httpClient: HttpClient;

  /**
   * Credentials to call the SP API
   */
  private credentials?: Credentials;

  /**
   * Endpoints and their restore rate
   */
  private restoreRates: Record<string, number> = {};

  /**
   * Debug flag
   */
  private debug: boolean;

  /**
   * Default restore rate
   */
  private defaultRestoreRate = 60;

  constructor(options: SellingPartnerOptions) {
    options.handleRateLimits = options.handleRateLimits !== false;
    options.debug = Boolean(options.debug);

    if (options.defaultRateLimitWaitSeconds) {
      this.defaultRestoreRate = options.defaultRateLimitWaitSeconds;
    }

    this.options = options;
    this.debug = options.debug;

    let baseURL = "https://sellingpartnerapi-na.amazon.com";
    switch (options.region) {
      case "eu-west-1":
        baseURL = "https://sellingpartnerapi-eu.amazon.com";
        break;
      case "us-east-1":
        baseURL = "https://sellingpartnerapi-na.amazon.com";
        break;
      case "us-west-2":
        baseURL = "https://sellingpartnerapi-fe.amazon.com";
        break;
      default:
        throw new Error("Invalid region");
    }

    this.log(`BaseURL set to '${baseURL}' from region '${options.region}'`);

    this.httpClient = new HttpClient({
      baseURL,
    });

    // Add AWS signature interceptor

    this.httpClient.instance.interceptors.request.use(async (config) => {
      if (!config.headers) {
        config.headers = {};
      }

      const { accessKeyId, secretAccessKey, sessionToken, accessToken } =
        await this.authenticate();

      config.headers!["x-amz-access-token"] = accessToken;

      this.log(`Executing '${config.url}'`);

      return aws4Interceptor(
        {
          region: this.options.region,
          service: "execute-api",
        },
        {
          accessKeyId,
          secretAccessKey,
          sessionToken,
        }
      )(config);
    });

    // Add rate-limit controller interceptor

    if (options.handleRateLimits) {
      this.log("Client is handling rate limits");

      this.httpClient.instance.interceptors.response.use(
        (response) => {
          const code = (response.config as any).code;

          if (code) {
            const rateLimitHeader = response.headers["x-amzn-ratelimit-limit"];
            const restoreRate = Number(rateLimitHeader ?? 1 / this.defaultRestoreRate);
            if (restoreRate) {
              this.log(`Restore rate '${code}': ${1 / restoreRate}`);
              // Add a little margin
              this.restoreRates[code] = 1 / restoreRate + 10;
            }
          }

          return response;
        },
        async (error) => {
          if (!axios.isAxiosError(error)) {
            throw error;
          }

          const code = (error.config as any).code;

          if (error.response?.status === 429 && code) {
            const restoreRate = this.restoreRates[code];

            this.log(
              `Rate limited. Waiting ${
                restoreRate ?? this.defaultRestoreRate
              } seconds for '${code}' before retrying`
            );

            await this.wait((restoreRate ?? this.defaultRestoreRate) * 1000);
            return this.httpClient.instance(error.config);
          }

          throw error;
        }
      );
    } else {
      this.log("Client is not handling rate limits");
    }
  }

  /**
   * Get an access token by calling the LWA service
   */
  private async getAccessToken() {
    this.log("[auth] Getting access token from LWA");

    const params = new URLSearchParams();
    params.append("grant_type", "refresh_token");
    params.append("refresh_token", this.options.credentials.refreshToken);
    params.append("client_id", this.options.credentials.clientId);
    params.append("client_secret", this.options.credentials.clientSecret);

    const res = await axios.post<LwaResponse>(
      "https://api.amazon.com/auth/o2/token",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const expireAt = new Date();
    expireAt.setSeconds(res.data.expires_in);

    this.log("[auth] Access token acquired");

    return {
      accessToken: res.data.access_token,
      expireAt,
    };
  }

  /**
   * Assume the role and get an accessKeyId, secretAccessKey and
   * sessionToken to further use in all requests
   */
  private async assumeRole() {
    this.log("[auth] Assuming role via STS");

    const tmpAxios = axios.create();
    tmpAxios.interceptors.request.use(
      aws4Interceptor(
        { service: "sts" },
        {
          accessKeyId: this.options.credentials.accessKey,
          secretAccessKey: this.options.credentials.secretKey,
        }
      )
    );

    const res = await tmpAxios.get<StsResponse>("https://sts.amazonaws.com", {
      headers: {
        Accept: "application/json",
      },
      params: {
        Version: "2011-06-15",
        Action: "AssumeRole",
        RoleSessionName: this.options.credentials.roleSessionName ?? "sp-api-node",
        RoleArn: this.options.credentials.roleArn,
        DurationSeconds: 3600,
      },
    });

    this.log("[auth] Role assumed successfully");

    const creds = res.data.AssumeRoleResponse.AssumeRoleResult.Credentials;

    return {
      accessKeyId: creds.AccessKeyId,
      secretAccessKey: creds.SecretAccessKey,
      sessionToken: creds.SessionToken,
    };
  }

  /**
   * Get an access token from LWA and then assume
   * the role via STS
   */
  private async authenticate(force = false) {
    this.log("[auth] Running authentication flow");

    const now = new Date();
    now.setMinutes(now.getMinutes() + 10);

    if (!force && this.credentials && now > this.credentials.expireAt) {
      this.log(
        `[auth] Stopping authentication flow. Credentials still valid until ${this.credentials.expireAt.toISOString()}`
      );
      return this.credentials;
    }

    // 1) Call LWA with the refresh scope

    const { accessToken, expireAt } = await this.getAccessToken();

    // 2) Call STS and assume role

    const { accessKeyId, secretAccessKey, sessionToken } = await this.assumeRole();

    this.credentials = {
      expireAt,
      accessKeyId,
      secretAccessKey,
      sessionToken,
      accessToken,
    };

    return this.credentials;
  }

  /**
   * Logget for debug mode
   */
  private log(message: string) {
    if (this.debug) {
      // eslint-disable-next-line no-console
      console.log(`[SellingPartner] ${message}`);
    }
  }

  /**
   * Wait a given amount of time (in ms)
   */
  private wait(ms: number) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(""), ms);
    });
  }
}
