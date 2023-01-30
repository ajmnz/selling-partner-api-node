import { GetMarketplaceParticipationsResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "../../http-client";

export class Sellers<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns a list of marketplaces that the seller submitting the request can sell in and information about the seller's participation in those marketplaces. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | .016 | 15 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags sellers
   * @name GetMarketplaceParticipations
   * @request GET:/sellers/v1/marketplaceParticipations
   */
  getMarketplaceParticipations = (params: RequestParams = {}) =>
    this.http.request<
      GetMarketplaceParticipationsResponse,
      GetMarketplaceParticipationsResponse
    >({
      path: `/sellers/v1/marketplaceParticipations`,
      method: "GET",
      code: "get:/sellers/v1/marketplaceParticipations",
      format: "json",
      ...params,
    });
}
