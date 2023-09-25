import type {
  ConfirmShipmentErrorResponse,
  ConfirmShipmentRequest,
  GetOrderAddressResponse,
  GetOrderBuyerInfoResponse,
  GetOrderItemsBuyerInfoResponse,
  GetOrderItemsResponse,
  GetOrderRegulatedInfoResponse,
  GetOrderResponse,
  GetOrdersResponse,
  UpdateShipmentStatusErrorResponse,
  UpdateShipmentStatusRequest,
  UpdateVerificationStatusErrorResponse,
  UpdateVerificationStatusRequest,
} from "./data-contracts";
import type { HttpClient, RequestParams } from "../../http-client";
import { ContentType } from "../../http-client";

export class Orders<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns orders created or updated during the time frame indicated by the specified parameters. You can also apply a range of filtering criteria to narrow the list of orders returned. If NextToken is present, that will be used to retrieve the orders instead of other criteria. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 20 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags ordersV0
   * @name GetOrders
   * @request GET:/orders/v0/orders
   */
  getOrders = (
    query: {
      /** A date used for selecting orders created after (or at) a specified time. Only orders placed after the specified time are returned. Either the CreatedAfter parameter or the LastUpdatedAfter parameter is required. Both cannot be empty. The date must be in ISO 8601 format. */
      CreatedAfter?: string;
      /** A date used for selecting orders created before (or at) a specified time. Only orders placed before the specified time are returned. The date must be in ISO 8601 format. */
      CreatedBefore?: string;
      /** A date used for selecting orders that were last updated after (or at) a specified time. An update is defined as any change in order status, including the creation of a new order. Includes updates made by Amazon and by the seller. The date must be in ISO 8601 format. */
      LastUpdatedAfter?: string;
      /** A date used for selecting orders that were last updated before (or at) a specified time. An update is defined as any change in order status, including the creation of a new order. Includes updates made by Amazon and by the seller. The date must be in ISO 8601 format. */
      LastUpdatedBefore?: string;
      /**
       * A list of `OrderStatus` values used to filter the results.
       *
       * **Possible values:**
       * - `PendingAvailability` (This status is available for pre-orders only. The order has been placed, payment has not been authorized, and the release date of the item is in the future.)
       * - `Pending` (The order has been placed but payment has not been authorized.)
       * - `Unshipped` (Payment has been authorized and the order is ready for shipment, but no items in the order have been shipped.)
       * - `PartiallyShipped` (One or more, but not all, items in the order have been shipped.)
       * - `Shipped` (All items in the order have been shipped.)
       * - `InvoiceUnconfirmed` (All items in the order have been shipped. The seller has not yet given confirmation to Amazon that the invoice has been shipped to the buyer.)
       * - `Canceled` (The order has been canceled.)
       * - `Unfulfillable` (The order cannot be fulfilled. This state applies only to Multi-Channel Fulfillment orders.)
       */
      OrderStatuses?: string[];
      /**
       * A list of MarketplaceId values. Used to select orders that were placed in the specified marketplaces.
       *
       * See the [Selling Partner API Developer Guide](doc:marketplace-ids) for a complete list of marketplaceId values.
       * @maxItems 50
       */
      MarketplaceIds: string[];
      /** A list that indicates how an order was fulfilled. Filters the results by fulfillment channel. Possible values: AFN (Fulfillment by Amazon); MFN (Fulfilled by the seller). */
      FulfillmentChannels?: string[];
      /** A list of payment method values. Used to select orders paid using the specified payment methods. Possible values: COD (Cash on delivery); CVS (Convenience store payment); Other (Any payment method other than COD or CVS). */
      PaymentMethods?: string[];
      /** The email address of a buyer. Used to select orders that contain the specified email address. */
      BuyerEmail?: string;
      /** An order identifier that is specified by the seller. Used to select only the orders that match the order identifier. If SellerOrderId is specified, then FulfillmentChannels, OrderStatuses, PaymentMethod, LastUpdatedAfter, LastUpdatedBefore, and BuyerEmail cannot be specified. */
      SellerOrderId?: string;
      /** A number that indicates the maximum number of orders that can be returned per page. Value must be 1 - 100. Default 100. */
      MaxResultsPerPage?: number;
      /**
       * A list of `EasyShipShipmentStatus` values. Used to select Easy Ship orders with statuses that match the specified values. If `EasyShipShipmentStatus` is specified, only Amazon Easy Ship orders are returned.
       *
       * **Possible values:**
       * - `PendingSchedule` (The package is awaiting the schedule for pick-up.)
       * - `PendingPickUp` (Amazon has not yet picked up the package from the seller.)
       * - `PendingDropOff` (The seller will deliver the package to the carrier.)
       * - `LabelCanceled` (The seller canceled the pickup.)
       * - `PickedUp` (Amazon has picked up the package from the seller.)
       * - `DroppedOff` (The package is delivered to the carrier by the seller.)
       * - `AtOriginFC` (The packaged is at the origin fulfillment center.)
       * - `AtDestinationFC` (The package is at the destination fulfillment center.)
       * - `Delivered` (The package has been delivered.)
       * - `RejectedByBuyer` (The package has been rejected by the buyer.)
       * - `Undeliverable` (The package cannot be delivered.)
       * - `ReturningToSeller` (The package was not delivered and is being returned to the seller.)
       * - `ReturnedToSeller` (The package was not delivered and was returned to the seller.)
       * - `Lost` (The package is lost.)
       * - `OutForDelivery` (The package is out for delivery.)
       * - `Damaged` (The package was damaged by the carrier.)
       */
      EasyShipShipmentStatuses?: string[];
      /**
       * A list of `ElectronicInvoiceStatus` values. Used to select orders with electronic invoice statuses that match the specified values.
       *
       * **Possible values:**
       * - `NotRequired` (Electronic invoice submission is not required for this order.)
       * - `NotFound` (The electronic invoice was not submitted for this order.)
       * - `Processing` (The electronic invoice is being processed for this order.)
       * - `Errored` (The last submitted electronic invoice was rejected for this order.)
       * - `Accepted` (The last submitted electronic invoice was submitted and accepted.)
       */
      ElectronicInvoiceStatuses?: string[];
      /** A string token returned in the response of your previous request. */
      NextToken?: string;
      /**
       * A list of AmazonOrderId values. An AmazonOrderId is an Amazon-defined order identifier, in 3-7-7 format.
       * @maxItems 50
       */
      AmazonOrderIds?: string[];
      /** Denotes the recommended sourceId where the order should be fulfilled from. */
      ActualFulfillmentSupplySourceId?: string;
      /** When true, this order is marked to be picked up from a store rather than delivered. */
      IsISPU?: boolean;
      /** The store chain store identifier. Linked to a specific store in a store chain. */
      StoreChainStoreId?: string;
      /** A date used for selecting orders with a earliest delivery date before (or at) a specified time. The date must be in ISO 8601 format. */
      EarliestDeliveryDateBefore?: string;
      /** A date used for selecting orders with a earliest delivery date after (or at) a specified time. The date must be in ISO 8601 format. */
      EarliestDeliveryDateAfter?: string;
      /** A date used for selecting orders with a latest delivery date before (or at) a specified time. The date must be in ISO 8601 format. */
      LatestDeliveryDateBefore?: string;
      /** A date used for selecting orders with a latest delivery date after (or at) a specified time. The date must be in ISO 8601 format. */
      LatestDeliveryDateAfter?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetOrdersResponse, GetOrdersResponse>({
      path: `/orders/v0/orders`,
      method: "GET",
      code: "get:/orders/v0/orders",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns the order that you specify. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 20 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags ordersV0
   * @name GetOrder
   * @request GET:/orders/v0/orders/{orderId}
   */
  getOrder = (orderId: string, params: RequestParams = {}) =>
    this.http.request<GetOrderResponse, GetOrderResponse>({
      path: `/orders/v0/orders/${orderId}`,
      method: "GET",
      code: "get:/orders/v0/orders/{orderId}",
      format: "json",
      ...params,
    });
  /**
   * @description Returns buyer information for the order that you specify. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 20 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags ordersV0
   * @name GetOrderBuyerInfo
   * @request GET:/orders/v0/orders/{orderId}/buyerInfo
   */
  getOrderBuyerInfo = (orderId: string, params: RequestParams = {}) =>
    this.http.request<GetOrderBuyerInfoResponse, GetOrderBuyerInfoResponse>({
      path: `/orders/v0/orders/${orderId}/buyerInfo`,
      method: "GET",
      code: "get:/orders/v0/orders/{orderId}/buyerInfo",
      format: "json",
      ...params,
    });
  /**
   * @description Returns the shipping address for the order that you specify. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 20 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags ordersV0
   * @name GetOrderAddress
   * @request GET:/orders/v0/orders/{orderId}/address
   */
  getOrderAddress = (orderId: string, params: RequestParams = {}) =>
    this.http.request<GetOrderAddressResponse, GetOrderAddressResponse>({
      path: `/orders/v0/orders/${orderId}/address`,
      method: "GET",
      code: "get:/orders/v0/orders/{orderId}/address",
      format: "json",
      ...params,
    });
  /**
   * @description Returns detailed order item information for the order that you specify. If NextToken is provided, it's used to retrieve the next page of order items. __Note__: When an order is in the Pending state (the order has been placed but payment has not been authorized), the getOrderItems operation does not return information about pricing, taxes, shipping charges, gift status or promotions for the order items in the order. After an order leaves the Pending state (this occurs when payment has been authorized) and enters the Unshipped, Partially Shipped, or Shipped state, the getOrderItems operation returns information about pricing, taxes, shipping charges, gift status and promotions for the order items in the order. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags ordersV0
   * @name GetOrderItems
   * @request GET:/orders/v0/orders/{orderId}/orderItems
   */
  getOrderItems = (
    orderId: string,
    query?: {
      /** A string token returned in the response of your previous request. */
      NextToken?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetOrderItemsResponse, GetOrderItemsResponse>({
      path: `/orders/v0/orders/${orderId}/orderItems`,
      method: "GET",
      code: "get:/orders/v0/orders/{orderId}/orderItems",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns buyer information for the order items in the order that you specify. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags ordersV0
   * @name GetOrderItemsBuyerInfo
   * @request GET:/orders/v0/orders/{orderId}/orderItems/buyerInfo
   */
  getOrderItemsBuyerInfo = (
    orderId: string,
    query?: {
      /** A string token returned in the response of your previous request. */
      NextToken?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetOrderItemsBuyerInfoResponse, GetOrderItemsBuyerInfoResponse>({
      path: `/orders/v0/orders/${orderId}/orderItems/buyerInfo`,
      method: "GET",
      code: "get:/orders/v0/orders/{orderId}/orderItems/buyerInfo",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Update the shipment status for an order that you specify. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 15 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags shipment
   * @name UpdateShipmentStatus
   * @request POST:/orders/v0/orders/{orderId}/shipment
   */
  updateShipmentStatus = (
    orderId: string,
    payload: UpdateShipmentStatusRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<void, UpdateShipmentStatusErrorResponse>({
      path: `/orders/v0/orders/${orderId}/shipment`,
      method: "POST",
      code: "post:/orders/v0/orders/{orderId}/shipment",
      body: payload,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Returns regulated information for the order that you specify. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags ordersV0
   * @name GetOrderRegulatedInfo
   * @request GET:/orders/v0/orders/{orderId}/regulatedInfo
   */
  getOrderRegulatedInfo = (orderId: string, params: RequestParams = {}) =>
    this.http.request<GetOrderRegulatedInfoResponse, GetOrderRegulatedInfoResponse>({
      path: `/orders/v0/orders/${orderId}/regulatedInfo`,
      method: "GET",
      code: "get:/orders/v0/orders/{orderId}/regulatedInfo",
      format: "json",
      ...params,
    });
  /**
   * @description Updates (approves or rejects) the verification status of an order containing regulated products. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags ordersV0
   * @name UpdateVerificationStatus
   * @request PATCH:/orders/v0/orders/{orderId}/regulatedInfo
   */
  updateVerificationStatus = (
    orderId: string,
    payload: UpdateVerificationStatusRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<void, UpdateVerificationStatusErrorResponse>({
      path: `/orders/v0/orders/${orderId}/regulatedInfo`,
      method: "PATCH",
      code: "patch:/orders/v0/orders/{orderId}/regulatedInfo",
      body: payload,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Updates the shipment confirmation status for a specified order. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags ordersV0
   * @name ConfirmShipment
   * @request POST:/orders/v0/orders/{orderId}/shipmentConfirmation
   */
  confirmShipment = (
    orderId: string,
    payload: ConfirmShipmentRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<void, ConfirmShipmentErrorResponse>({
      path: `/orders/v0/orders/${orderId}/shipmentConfirmation`,
      method: "POST",
      code: "post:/orders/v0/orders/{orderId}/shipmentConfirmation",
      body: payload,
      type: ContentType.Json,
      ...params,
    });
}
