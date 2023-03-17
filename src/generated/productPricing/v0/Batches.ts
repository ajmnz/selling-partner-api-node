import {
  Errors,
  GetItemOffersBatchRequest,
  GetItemOffersBatchResponse,
  GetListingOffersBatchRequest,
  GetListingOffersBatchResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "../../../http-client";

export class Batches<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns the lowest priced offers for a batch of items based on ASIN. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags productPricing
   * @name GetItemOffersBatch
   * @request POST:/batches/products/pricing/v0/itemOffers
   */
  getItemOffersBatch = (
    getItemOffersBatchRequestBody: GetItemOffersBatchRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<GetItemOffersBatchResponse, Errors>({
      path: `/batches/products/pricing/v0/itemOffers`,
      method: "POST",
      code: "post:/batches/products/pricing/v0/itemOffers",
      body: getItemOffersBatchRequestBody,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns the lowest priced offers for a batch of listings by SKU. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags productPricing
   * @name GetListingOffersBatch
   * @request POST:/batches/products/pricing/v0/listingOffers
   */
  getListingOffersBatch = (
    getListingOffersBatchRequestBody: GetListingOffersBatchRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<GetListingOffersBatchResponse, Errors>({
      path: `/batches/products/pricing/v0/listingOffers`,
      method: "POST",
      code: "post:/batches/products/pricing/v0/listingOffers",
      body: getListingOffersBatchRequestBody,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
