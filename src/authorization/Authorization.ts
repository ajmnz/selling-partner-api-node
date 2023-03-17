import type { GetAuthorizationCodeResponse } from "./data-contracts";
import type { HttpClient, RequestParams } from "../http-client";

export class Authorization<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description With the getAuthorizationCode operation, you can request a Login With Amazon (LWA) authorization code that will allow you to call a Selling Partner API on behalf of a seller who has already authorized you to call Amazon Marketplace Web Service (Amazon MWS). You specify a developer ID, an MWS auth token, and a seller ID. Taken together, these represent the Amazon MWS authorization that the seller previously granted you. The operation returns an LWA authorization code that can be exchanged for a refresh token and access token representing authorization to call the Selling Partner API on the seller's behalf. By using this API, sellers who have already authorized you for Amazon MWS do not need to re-authorize you for the Selling Partner API. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags authorization
   * @name GetAuthorizationCode
   * @summary Returns the Login with Amazon (LWA) authorization code for an existing Amazon MWS authorization.
   * @request GET:/authorization/v1/authorizationCode
   */
  getAuthorizationCode = (
    query: {
      /** The seller ID of the seller for whom you are requesting Selling Partner API authorization. This must be the seller ID of the seller who authorized your application on the Marketplace Appstore. */
      sellingPartnerId: string;
      /** Your developer ID. This must be one of the developer ID values that you provided when you registered your application in Developer Central. */
      developerId: string;
      /** The MWS Auth Token that was generated when the seller authorized your application on the Marketplace Appstore. */
      mwsAuthToken: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetAuthorizationCodeResponse, GetAuthorizationCodeResponse>({
      path: `/authorization/v1/authorizationCode`,
      method: "GET",
      code: "get:/authorization/v1/authorizationCode",
      query,
      format: "json",
      ...params,
    });
}
