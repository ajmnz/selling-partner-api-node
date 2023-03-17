import type {
  Errors,
  GetFeaturedOfferExpectedPriceBatchRequest,
  GetFeaturedOfferExpectedPriceBatchResponse,
} from "./data-contracts";
import type { HttpClient, RequestParams } from "../../http-client";
import { ContentType } from "../../http-client";

export class Batches<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns the set of responses that correspond to the batched list of up to 40 requests defined in the request body. The response for each successful (HTTP status code 200) request in the set includes the computed listing price at or below which a seller can expect to become the featured offer (before applicable promotions). This is called the featured offer expected price (FOEP). Featured offer is not guaranteed, because competing offers may change, and different offers may be featured based on other factors, including fulfillment capabilities to a specific customer. The response to an unsuccessful request includes the available error text. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags productPricing
   * @name GetFeaturedOfferExpectedPriceBatch
   * @request POST:/batches/products/pricing/2022-05-01/offer/featuredOfferExpectedPrice
   */
  getFeaturedOfferExpectedPriceBatch = (
    getFeaturedOfferExpectedPriceBatchRequestBody: GetFeaturedOfferExpectedPriceBatchRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<GetFeaturedOfferExpectedPriceBatchResponse, Errors>({
      path: `/batches/products/pricing/2022-05-01/offer/featuredOfferExpectedPrice`,
      method: "POST",
      code: "post:/batches/products/pricing/2022-05-01/offer/featuredOfferExpectedPrice",
      body: getFeaturedOfferExpectedPriceBatchRequestBody,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
