import { GetInventorySummariesResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "../../http-client";

export class Fba<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns a list of inventory summaries. The summaries returned depend on the presence or absence of the `startDateTime` and `sellerSkus` parameters: - All inventory summaries with available details are returned when the `startDateTime` and `sellerSkus` parameters are omitted. - When `startDateTime` is provided, the operation returns inventory summaries that have had changes after the date and time specified. The `sellerSkus` parameter is ignored. **Important:** To avoid errors, use both `startDateTime` and `nextToken` to get the next page of inventory summaries that have changed after the date and time specified. - When the `sellerSkus` parameter is provided, the operation returns inventory summaries for only the specified `sellerSkus`. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 2 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags fbaInventory
   * @name GetInventorySummaries
   * @request GET:/fba/inventory/v1/summaries
   */
  getInventorySummaries = (
    query: {
      /**
       * true to return inventory summaries with additional summarized inventory details and quantities. Otherwise, returns inventory summaries only (default value).
       * @default false
       */
      details?: boolean;
      /** The granularity type for the inventory aggregation level. */
      granularityType: "Marketplace";
      /** The granularity ID for the inventory aggregation level. */
      granularityId: string;
      /**
       * A start date and time in ISO8601 format. If specified, all inventory summaries that have changed since then are returned. You must specify a date and time that is no earlier than 18 months prior to the date and time when you call the API. Note: Changes in inboundWorkingQuantity, inboundShippedQuantity and inboundReceivingQuantity are not detected.
       * @format date-time
       */
      startDateTime?: string;
      /**
       * A list of seller SKUs for which to return inventory summaries. You may specify up to 50 SKUs.
       * @maxItems 50
       */
      sellerSkus?: string[];
      /** String token returned in the response of your previous request. */
      nextToken?: string;
      /**
       * The marketplace ID for the marketplace for which to return inventory summaries.
       * @maxItems 1
       */
      marketplaceIds: string[];
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetInventorySummariesResponse, GetInventorySummariesResponse>({
      path: `/fba/inventory/v1/summaries`,
      method: "GET",
      code: "get:/fba/inventory/v1/summaries",
      query: query,
      format: "json",
      ...params,
    });
}
