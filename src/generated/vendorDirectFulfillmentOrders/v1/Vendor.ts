import {
  GetOrderResponse,
  GetOrdersResponse,
  SubmitAcknowledgementRequest,
  SubmitAcknowledgementResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "../../../http-client";

export class Vendor<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns a list of purchase orders created during the time frame that you specify. You define the time frame using the createdAfter and createdBefore parameters. You must use both parameters. You can choose to get only the purchase order numbers by setting the includeDetails parameter to false. In that case, the operation returns a list of purchase order numbers. You can then call the getOrder operation to return the details of a specific order. **Usage Plans:** | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable | The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags vendorOrders
   * @name GetOrders
   * @request GET:/vendor/directFulfillment/orders/v1/purchaseOrders
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
    this.http.request<GetOrdersResponse, GetOrdersResponse>({
      path: `/vendor/directFulfillment/orders/v1/purchaseOrders`,
      method: "GET",
      code: "get:/vendor/directFulfillment/orders/v1/purchaseOrders",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns purchase order information for the purchaseOrderNumber that you specify. **Usage Plans:** | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable | The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags vendorOrders
   * @name GetOrder
   * @request GET:/vendor/directFulfillment/orders/v1/purchaseOrders/{purchaseOrderNumber}
   */
  getOrder = (purchaseOrderNumber: string, params: RequestParams = {}) =>
    this.http.request<GetOrderResponse, GetOrderResponse>({
      path: `/vendor/directFulfillment/orders/v1/purchaseOrders/${purchaseOrderNumber}`,
      method: "GET",
      code: "get:/vendor/directFulfillment/orders/v1/purchaseOrders/{purchaseOrderNumber}",
      format: "json",
      ...params,
    });
  /**
   * @description Submits acknowledgements for one or more purchase orders. **Usage Plans:** | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable | The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags vendorOrders
   * @name SubmitAcknowledgement
   * @request POST:/vendor/directFulfillment/orders/v1/acknowledgements
   */
  submitAcknowledgement = (
    body: SubmitAcknowledgementRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<SubmitAcknowledgementResponse, SubmitAcknowledgementResponse>({
      path: `/vendor/directFulfillment/orders/v1/acknowledgements`,
      method: "POST",
      code: "post:/vendor/directFulfillment/orders/v1/acknowledgements",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
