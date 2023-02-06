export interface AssumeRoleCredentials {
  clientId: string;
  clientSecret: string;
  roleArn: string;
  accessKey: string;
  secretKey: string;
  refreshToken: string;
  roleSessionName?: string;
}

export interface Credentials {
  expireAt: Date;
  accessToken: string;
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken: string;
}

export interface SellingPartnerOptions {
  /**
   * Selling Partner API endpoints are associated with a particular AWS Region.
   * The AWS Region is important because it is part of the credential scope,
   * which is required for calculating a signature when calling the Selling Partner API.
   */
  region: "us-east-1" | "eu-west-1" | "us-west-2";

  credentials: AssumeRoleCredentials;

  debug?: boolean;

  handleRateLimits?: boolean;

  defaultRateLimitWaitSeconds?: number;
}

export interface LwaResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
}

export interface StsResponse {
  AssumeRoleResponse: {
    AssumeRoleResult: {
      AssumedRoleUser: {
        Arn: string;
        AssumedRoleId: string;
      };
      Credentials: {
        AccessKeyId: string;
        Expiration: number;
        SecretAccessKey: string;
        SessionToken: string;
      };
      PackedPolicySize: null;
      SourceIdentify: null;
    };
    ResponseMetadata: {
      RequestId: string;
    };
  };
}
