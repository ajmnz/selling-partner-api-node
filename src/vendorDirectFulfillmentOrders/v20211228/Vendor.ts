import type {
  ErrorList,
  Order,
  OrderList,
  SubmitAcknowledgementRequest,
  TransactionId,
} from "./data-contracts";
import type { HttpClient, RequestParams } from "../../http-client";
import { ContentType } from "../../http-client";

export class Vendor<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns a list of purchase orders created during the time frame that you specify. You define the time frame using the createdAfter and createdBefore parameters. You must use both parameters. You can choose to get only the purchase order numbers by setting the includeDetails parameter to false. In that case, the operation returns a list of purchase order numbers. You can then call the getOrder operation to return the details of a specific order. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags vendorOrders
   * @name GetOrders
   * @request GET:/vendor/directFulfillment/orders/2021-12-28/purchaseOrders
   */
  getOrders = (
    query: {
      /** The vendor warehouse identifier for the fulfillment warehouse. If not specified, the result will contain orders for all warehouses. */
      shipFromPartyId?: string;
      /** Returns only the purchase orders that match the specified status. If not specified, the result will contain orders that match any status. */
      status?: "NEW" | "SHIPPED" | "ACCEPTED" | "CANCELLED";
      /**
       * The limit to the number of purchase orders returned.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /**
       * Purchase orders that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      createdAfter: string;
      /**
       * Purchase orders that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      createdBefore: string;
      /** Sort the list in ascending or descending order by order creation date. */
      sortOrder?: "ASC" | "DESC";
      /** Used for pagination when there are more orders than the specified result size limit. The token value is returned in the previous API call. */
      nextToken?: string;
      /**
       * When true, returns the complete purchase order details. Otherwise, only purchase order numbers are returned.
       * @format boolean
       * @default "true"
       */
      includeDetails?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<OrderList, ErrorList>({
      path: `/vendor/directFulfillment/orders/2021-12-28/purchaseOrders`,
      method: "GET",
      code: "get:/vendor/directFulfillment/orders/2021-12-28/purchaseOrders",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns purchase order information for the purchaseOrderNumber that you specify. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags vendorOrders
   * @name GetOrder
   * @request GET:/vendor/directFulfillment/orders/2021-12-28/purchaseOrders/{purchaseOrderNumber}
   */
  getOrder = (purchaseOrderNumber: string, params: RequestParams = {}) =>
    this.http.request<Order, ErrorList>({
      path: `/vendor/directFulfillment/orders/2021-12-28/purchaseOrders/${purchaseOrderNumber}`,
      method: "GET",
      code: "get:/vendor/directFulfillment/orders/2021-12-28/purchaseOrders/{purchaseOrderNumber}",
      format: "json",
      ...params,
    });
  /**
   * @description Submits acknowledgements for one or more purchase orders. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags vendorOrders
   * @name SubmitAcknowledgement
   * @request POST:/vendor/directFulfillment/orders/2021-12-28/acknowledgements
   */
  submitAcknowledgement = (
    body: SubmitAcknowledgementRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<TransactionId, ErrorList>({
      path: `/vendor/directFulfillment/orders/2021-12-28/acknowledgements`,
      method: "POST",
      code: "post:/vendor/directFulfillment/orders/2021-12-28/acknowledgements",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
