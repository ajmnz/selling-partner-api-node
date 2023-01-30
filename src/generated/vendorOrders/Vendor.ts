import {
  GetPurchaseOrderResponse,
  GetPurchaseOrdersResponse,
  GetPurchaseOrdersStatusResponse,
  SubmitAcknowledgementRequest,
  SubmitAcknowledgementResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "../../http-client";

export class Vendor<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns a list of purchase orders created or changed during the time frame that you specify. You define the time frame using the createdAfter, createdBefore, changedAfter and changedBefore parameters. The date range to search must not be more than 7 days. You can choose to get only the purchase order numbers by setting includeDetails to false. You can then use the getPurchaseOrder operation to receive details for a specific purchase order. **Usage Plans:** | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable | The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags vendorOrders
   * @name GetPurchaseOrders
   * @request GET:/vendor/orders/v1/purchaseOrders
   */
  getPurchaseOrders = (
    query?: {
      /**
       * The limit to the number of records returned. Default value is 100 records.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /**
       * Purchase orders that became available after this time will be included in the result. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      createdAfter?: string;
      /**
       * Purchase orders that became available before this time will be included in the result. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      createdBefore?: string;
      /** Sort in ascending or descending order by purchase order creation date. */
      sortOrder?: "ASC" | "DESC";
      /** Used for pagination when there is more purchase orders than the specified result size limit. The token value is returned in the previous API call */
      nextToken?: string;
      /**
       * When true, returns purchase orders with complete details. Otherwise, only purchase order numbers are returned. Default value is true.
       * @format boolean
       */
      includeDetails?: string;
      /**
       * Purchase orders that changed after this timestamp will be included in the result. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      changedAfter?: string;
      /**
       * Purchase orders that changed before this timestamp will be included in the result. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      changedBefore?: string;
      /** Current state of the purchase order item. If this value is Cancelled, this API will return purchase orders which have one or more items cancelled by Amazon with updated item quantity as zero. */
      poItemState?: "Cancelled";
      /**
       * When true, returns purchase orders which were modified after the order was placed. Vendors are required to pull the changed purchase order and fulfill the updated purchase order and not the original one. Default value is false.
       * @format boolean
       */
      isPOChanged?: string;
      /** Filters purchase orders based on the purchase order state. */
      purchaseOrderState?: "New" | "Acknowledged" | "Closed";
      /** Filters purchase orders based on the specified ordering vendor code. This value should be same as 'sellingParty.partyId' in the purchase order. If not included in the filter, all purchase orders for all of the vendor codes that exist in the vendor group used to authorize the API client application are returned. */
      orderingVendorCode?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetPurchaseOrdersResponse, GetPurchaseOrdersResponse>({
      path: `/vendor/orders/v1/purchaseOrders`,
      method: "GET",
      code: "get:/vendor/orders/v1/purchaseOrders",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a purchase order based on the purchaseOrderNumber value that you specify. **Usage Plans:** | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable | The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags vendorOrders
   * @name GetPurchaseOrder
   * @request GET:/vendor/orders/v1/purchaseOrders/{purchaseOrderNumber}
   */
  getPurchaseOrder = (purchaseOrderNumber: string, params: RequestParams = {}) =>
    this.http.request<GetPurchaseOrderResponse, GetPurchaseOrderResponse>({
      path: `/vendor/orders/v1/purchaseOrders/${purchaseOrderNumber}`,
      method: "GET",
      code: "get:/vendor/orders/v1/purchaseOrders/{purchaseOrderNumber}",
      format: "json",
      ...params,
    });
  /**
   * @description Submits acknowledgements for one or more purchase orders. **Usage Plans:** | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable | The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags vendorOrders
   * @name SubmitAcknowledgement
   * @request POST:/vendor/orders/v1/acknowledgements
   */
  submitAcknowledgement = (
    body: SubmitAcknowledgementRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<SubmitAcknowledgementResponse, SubmitAcknowledgementResponse>({
      path: `/vendor/orders/v1/acknowledgements`,
      method: "POST",
      code: "post:/vendor/orders/v1/acknowledgements",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns purchase order statuses based on the filters that you specify. Date range to search must not be more than 7 days. You can return a list of purchase order statuses using the available filters, or a single purchase order status by providing the purchase order number. **Usage Plans:** | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable | The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags vendorOrders
   * @name GetPurchaseOrdersStatus
   * @request GET:/vendor/orders/v1/purchaseOrdersStatus
   */
  getPurchaseOrdersStatus = (
    query?: {
      /**
       * The limit to the number of records returned. Default value is 100 records.
       * @format int64
       * @min 1
       * @max 100
       */
      limit?: number;
      /** Sort in ascending or descending order by purchase order creation date. */
      sortOrder?: "ASC" | "DESC";
      /** Used for pagination when there are more purchase orders than the specified result size limit. */
      nextToken?: string;
      /**
       * Purchase orders that became available after this timestamp will be included in the result. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      createdAfter?: string;
      /**
       * Purchase orders that became available before this timestamp will be included in the result. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      createdBefore?: string;
      /**
       * Purchase orders for which the last purchase order update happened after this timestamp will be included in the result. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      updatedAfter?: string;
      /**
       * Purchase orders for which the last purchase order update happened before this timestamp will be included in the result. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      updatedBefore?: string;
      /** Provides purchase order status for the specified purchase order number. */
      purchaseOrderNumber?: string;
      /** Filters purchase orders based on the specified purchase order status. If not included in filter, this will return purchase orders for all statuses. */
      purchaseOrderStatus?: "OPEN" | "CLOSED";
      /** Filters purchase orders based on their item confirmation status. If the item confirmation status is not included in the filter, purchase orders for all confirmation statuses are included. */
      itemConfirmationStatus?:
        | "ACCEPTED"
        | "PARTIALLY_ACCEPTED"
        | "REJECTED"
        | "UNCONFIRMED";
      /** Filters purchase orders based on the purchase order's item receive status. If the item receive status is not included in the filter, purchase orders for all receive statuses are included. */
      itemReceiveStatus?: "NOT_RECEIVED" | "PARTIALLY_RECEIVED" | "RECEIVED";
      /** Filters purchase orders based on the specified ordering vendor code. This value should be same as 'sellingParty.partyId' in the purchase order. If not included in filter, all purchase orders for all the vendor codes that exist in the vendor group used to authorize API client application are returned. */
      orderingVendorCode?: string;
      /** Filters purchase orders for a specific buyer's Fulfillment Center/warehouse by providing ship to location id here. This value should be same as 'shipToParty.partyId' in the purchase order. If not included in filter, this will return purchase orders for all the buyer's warehouses used for vendor group purchase orders. */
      shipToPartyId?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetPurchaseOrdersStatusResponse, GetPurchaseOrdersStatusResponse>({
      path: `/vendor/orders/v1/purchaseOrdersStatus`,
      method: "GET",
      code: "get:/vendor/orders/v1/purchaseOrdersStatus",
      query: query,
      format: "json",
      ...params,
    });
}
