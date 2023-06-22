import type {
  ErrorList,
  GetSellingPartnerMetricsRequest,
  GetSellingPartnerMetricsResponse,
  ListOfferMetricsRequest,
  ListOfferMetricsResponse,
  ListOffersRequest,
  ListOffersResponse,
} from "./data-contracts";
import type { HttpClient, RequestParams } from "../http-client";
import { ContentType } from "../http-client";

export class Replenishment<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns aggregated replenishment program metrics for a selling partner. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags sellingpartners
   * @name GetSellingPartnerMetrics
   * @request POST:/replenishment/2022-11-07/sellingPartners/metrics/search
   */
  getSellingPartnerMetrics = (
    body: GetSellingPartnerMetricsRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<GetSellingPartnerMetricsResponse, ErrorList>({
      path: `/replenishment/2022-11-07/sellingPartners/metrics/search`,
      method: "POST",
      code: "post:/replenishment/2022-11-07/sellingPartners/metrics/search",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns aggregated replenishment program metrics for a selling partner's offers. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags offers
   * @name ListOfferMetrics
   * @request POST:/replenishment/2022-11-07/offers/metrics/search
   */
  listOfferMetrics = (body: ListOfferMetricsRequest, params: RequestParams = {}) =>
    this.http.request<ListOfferMetricsResponse, ErrorList>({
      path: `/replenishment/2022-11-07/offers/metrics/search`,
      method: "POST",
      code: "post:/replenishment/2022-11-07/offers/metrics/search",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns the details of a selling partner's replenishment program offers. Note that this operation only supports sellers at this time. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags offers
   * @name ListOffers
   * @request POST:/replenishment/2022-11-07/offers/search
   */
  listOffers = (body: ListOffersRequest, params: RequestParams = {}) =>
    this.http.request<ListOffersResponse, ErrorList>({
      path: `/replenishment/2022-11-07/offers/search`,
      method: "POST",
      code: "post:/replenishment/2022-11-07/offers/search",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
