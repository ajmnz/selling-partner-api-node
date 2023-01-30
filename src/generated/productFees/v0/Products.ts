import {
  GetMyFeesEstimateRequest,
  GetMyFeesEstimateResponse,
  GetMyFeesEstimatesErrorList,
  GetMyFeesEstimatesRequest,
  GetMyFeesEstimatesResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "../../../http-client";

export class Products<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns the estimated fees for the item indicated by the specified seller SKU in the marketplace specified in the request body. You can call `getMyFeesEstimateForSKU` for an item on behalf of a selling partner before the selling partner sets the item's price. The selling partner can then take any estimated fees into account. Each fees estimate request must include an original identifier. This identifier is included in the fees estimate so that you can correlate a fees estimate with the original request. **Note:** The identifier value is only an estimate, actual costs may vary. Search "fees" in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags fees
   * @name GetMyFeesEstimateForSku
   * @request POST:/products/fees/v0/listings/{SellerSKU}/feesEstimate
   */
  getMyFeesEstimateForSku = (
    sellerSku: string,
    body: GetMyFeesEstimateRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<GetMyFeesEstimateResponse, GetMyFeesEstimateResponse>({
      path: `/products/fees/v0/listings/${sellerSku}/feesEstimate`,
      method: "POST",
      code: "post:/products/fees/v0/listings/{SellerSKU}/feesEstimate",
      body: body,
      format: "json",
      ...params,
    });
  /**
   * @description Returns the estimated fees for the item indicated by the specified ASIN in the marketplace specified in the request body. You can call `getMyFeesEstimateForASIN` for an item on behalf of a selling partner before the selling partner sets the item's price. The selling partner can then take estimated fees into account. Each fees request must include an original identifier. This identifier is included in the fees estimate so you can correlate a fees estimate with the original request. **Note:** This identifier value is only an estimate, actual costs may vary. Search "fees" in [Seller Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date information. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags fees
   * @name GetMyFeesEstimateForAsin
   * @request POST:/products/fees/v0/items/{Asin}/feesEstimate
   */
  getMyFeesEstimateForAsin = (
    asin: string,
    body: GetMyFeesEstimateRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<GetMyFeesEstimateResponse, GetMyFeesEstimateResponse>({
      path: `/products/fees/v0/items/${asin}/feesEstimate`,
      method: "POST",
      code: "post:/products/fees/v0/items/{Asin}/feesEstimate",
      body: body,
      format: "json",
      ...params,
    });
  /**
   * @description Returns the estimated fees for a list of products. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags fees
   * @name GetMyFeesEstimates
   * @request POST:/products/fees/v0/feesEstimate
   */
  getMyFeesEstimates = (body: GetMyFeesEstimatesRequest, params: RequestParams = {}) =>
    this.http.request<GetMyFeesEstimatesResponse, GetMyFeesEstimatesErrorList>({
      path: `/products/fees/v0/feesEstimate`,
      method: "POST",
      code: "post:/products/fees/v0/feesEstimate",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
