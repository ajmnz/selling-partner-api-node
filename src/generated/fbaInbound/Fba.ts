import { GetItemEligibilityPreviewResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "../../http-client";

export class Fba<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description This operation gets an eligibility preview for an item that you specify. You can specify the type of eligibility preview that you want (INBOUND or COMMINGLING). For INBOUND previews, you can specify the marketplace in which you want to determine the item's eligibility. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags fbaInbound
   * @name GetItemEligibilityPreview
   * @request GET:/fba/inbound/v1/eligibility/itemPreview
   */
  getItemEligibilityPreview = (
    query: {
      /**
       * The identifier for the marketplace in which you want to determine eligibility. Required only when program=INBOUND.
       * @maxItems 1
       */
      marketplaceIds?: string[];
      /** The ASIN of the item for which you want an eligibility preview. */
      asin: string;
      /** The program that you want to check eligibility against. */
      program: "INBOUND" | "COMMINGLING";
    },
    params: RequestParams = {}
  ) =>
    this.http.request<
      GetItemEligibilityPreviewResponse,
      GetItemEligibilityPreviewResponse
    >({
      path: `/fba/inbound/v1/eligibility/itemPreview`,
      method: "GET",
      code: "get:/fba/inbound/v1/eligibility/itemPreview",
      query: query,
      format: "json",
      ...params,
    });
}
