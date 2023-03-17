import type {
  ErrorList,
  SmallAndLightEligibility,
  SmallAndLightEnrollment,
  SmallAndLightFeePreviewRequest,
  SmallAndLightFeePreviews,
} from "./data-contracts";
import type { HttpClient, RequestParams } from "../http-client";
import { ContentType } from "../http-client";

export class Fba<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns the Small and Light enrollment status for the item indicated by the specified seller SKU in the specified marketplace. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags smallAndLight
   * @name GetSmallAndLightEnrollmentBySellerSku
   * @request GET:/fba/smallAndLight/v1/enrollments/{sellerSKU}
   */
  getSmallAndLightEnrollmentBySellerSku = (
    sellerSku: string,
    query: {
      /**
       * The marketplace for which the enrollment status is retrieved. Note: Accepts a single marketplace only.
       * @maxItems 1
       */
      marketplaceIds: string[];
    },
    params: RequestParams = {}
  ) =>
    this.http.request<SmallAndLightEnrollment, ErrorList>({
      path: `/fba/smallAndLight/v1/enrollments/${sellerSku}`,
      method: "GET",
      code: "get:/fba/smallAndLight/v1/enrollments/{sellerSKU}",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Enrolls the item indicated by the specified seller SKU in the Small and Light program in the specified marketplace. If the item is not eligible, the ineligibility reasons are returned. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags smallAndLight
   * @name PutSmallAndLightEnrollmentBySellerSku
   * @request PUT:/fba/smallAndLight/v1/enrollments/{sellerSKU}
   */
  putSmallAndLightEnrollmentBySellerSku = (
    sellerSku: string,
    query: {
      /**
       * The marketplace in which to enroll the item. Note: Accepts a single marketplace only.
       * @maxItems 1
       */
      marketplaceIds: string[];
    },
    params: RequestParams = {}
  ) =>
    this.http.request<SmallAndLightEnrollment, ErrorList>({
      path: `/fba/smallAndLight/v1/enrollments/${sellerSku}`,
      method: "PUT",
      code: "put:/fba/smallAndLight/v1/enrollments/{sellerSKU}",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Removes the item indicated by the specified seller SKU from the Small and Light program in the specified marketplace. If the item is not eligible for disenrollment, the ineligibility reasons are returned. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags smallAndLight
   * @name DeleteSmallAndLightEnrollmentBySellerSku
   * @request DELETE:/fba/smallAndLight/v1/enrollments/{sellerSKU}
   */
  deleteSmallAndLightEnrollmentBySellerSku = (
    sellerSku: string,
    query: {
      /**
       * The marketplace in which to remove the item from the Small and Light program. Note: Accepts a single marketplace only.
       * @maxItems 1
       */
      marketplaceIds: string[];
    },
    params: RequestParams = {}
  ) =>
    this.http.request<void, ErrorList>({
      path: `/fba/smallAndLight/v1/enrollments/${sellerSku}`,
      method: "DELETE",
      code: "delete:/fba/smallAndLight/v1/enrollments/{sellerSKU}",
      query,
      ...params,
    });
  /**
   * @description Returns the Small and Light program eligibility status of the item indicated by the specified seller SKU in the specified marketplace. If the item is not eligible, the ineligibility reasons are returned. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags smallAndLight
   * @name GetSmallAndLightEligibilityBySellerSku
   * @request GET:/fba/smallAndLight/v1/eligibilities/{sellerSKU}
   */
  getSmallAndLightEligibilityBySellerSku = (
    sellerSku: string,
    query: {
      /**
       * The marketplace for which the eligibility status is retrieved. NOTE: Accepts a single marketplace only.
       * @maxItems 1
       */
      marketplaceIds: string[];
    },
    params: RequestParams = {}
  ) =>
    this.http.request<SmallAndLightEligibility, ErrorList>({
      path: `/fba/smallAndLight/v1/eligibilities/${sellerSku}`,
      method: "GET",
      code: "get:/fba/smallAndLight/v1/eligibilities/{sellerSKU}",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns the Small and Light fee estimates for the specified items. You must include a marketplaceId parameter to retrieve the proper fee estimates for items to be sold in that marketplace. The ordering of items in the response will mirror the order of the items in the request. Duplicate ASIN/price combinations are removed. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 3 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags smallAndLight
   * @name GetSmallAndLightFeePreview
   * @request POST:/fba/smallAndLight/v1/feePreviews
   */
  getSmallAndLightFeePreview = (
    body: SmallAndLightFeePreviewRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<SmallAndLightFeePreviews, ErrorList>({
      path: `/fba/smallAndLight/v1/feePreviews`,
      method: "POST",
      code: "post:/fba/smallAndLight/v1/feePreviews",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
