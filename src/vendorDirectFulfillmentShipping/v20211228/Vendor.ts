import type {
  CreateContainerLabelRequest,
  CreateContainerLabelResponse,
  CreateShippingLabelsRequest,
  CustomerInvoice,
  CustomerInvoiceList,
  ErrorList,
  PackingSlip,
  PackingSlipList,
  ShippingLabel,
  ShippingLabelList,
  SubmitShipmentConfirmationsRequest,
  SubmitShipmentStatusUpdatesRequest,
  SubmitShippingLabelsRequest,
  TransactionReference,
} from "./data-contracts";
import type { HttpClient, RequestParams } from "../../http-client";
import { ContentType } from "../../http-client";

export class Vendor<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns a list of shipping labels created during the time frame that you specify. You define that time frame using the createdAfter and createdBefore parameters. You must use both of these parameters. The date range to search must not be more than 7 days. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags vendorShippingLabels
   * @name GetShippingLabels
   * @request GET:/vendor/directFulfillment/shipping/2021-12-28/shippingLabels
   */
  getShippingLabels = (
    query: {
      /** The vendor warehouseId for order fulfillment. If not specified, the result will contain orders for all warehouses. */
      shipFromPartyId?: string;
      /**
       * The limit to the number of records returned.
       * @min 1
       * @max 100
       */
      limit?: number;
      /**
       * Shipping labels that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      createdAfter: string;
      /**
       * Shipping labels that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      createdBefore: string;
      /**
       * Sort ASC or DESC by order creation date.
       * @default "ASC"
       */
      sortOrder?: "ASC" | "DESC";
      /** Used for pagination when there are more ship labels than the specified result size limit. The token value is returned in the previous API call. */
      nextToken?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<ShippingLabelList, ErrorList>({
      path: `/vendor/directFulfillment/shipping/2021-12-28/shippingLabels`,
      method: "GET",
      code: "get:/vendor/directFulfillment/shipping/2021-12-28/shippingLabels",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a shipping label for a purchase order and returns a transactionId for reference. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags vendorShippingLabels
   * @name SubmitShippingLabelRequest
   * @request POST:/vendor/directFulfillment/shipping/2021-12-28/shippingLabels
   */
  submitShippingLabelRequest = (
    body: SubmitShippingLabelsRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<TransactionReference, ErrorList>({
      path: `/vendor/directFulfillment/shipping/2021-12-28/shippingLabels`,
      method: "POST",
      code: "post:/vendor/directFulfillment/shipping/2021-12-28/shippingLabels",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a shipping label for the purchaseOrderNumber that you specify. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags vendorShippingLabels
   * @name GetShippingLabel
   * @request GET:/vendor/directFulfillment/shipping/2021-12-28/shippingLabels/{purchaseOrderNumber}
   */
  getShippingLabel = (purchaseOrderNumber: string, params: RequestParams = {}) =>
    this.http.request<ShippingLabel, ErrorList>({
      path: `/vendor/directFulfillment/shipping/2021-12-28/shippingLabels/${purchaseOrderNumber}`,
      method: "GET",
      code: "get:/vendor/directFulfillment/shipping/2021-12-28/shippingLabels/{purchaseOrderNumber}",
      format: "json",
      ...params,
    });
  /**
   * @description Creates shipping labels for a purchase order and returns the labels. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags vendorShippingLabels
   * @name CreateShippingLabels
   * @request POST:/vendor/directFulfillment/shipping/2021-12-28/shippingLabels/{purchaseOrderNumber}
   */
  createShippingLabels = (
    purchaseOrderNumber: string,
    body: CreateShippingLabelsRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<ShippingLabel, ErrorList>({
      path: `/vendor/directFulfillment/shipping/2021-12-28/shippingLabels/${purchaseOrderNumber}`,
      method: "POST",
      code: "post:/vendor/directFulfillment/shipping/2021-12-28/shippingLabels/{purchaseOrderNumber}",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Submits one or more shipment confirmations for vendor orders. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags vendorShipping
   * @name SubmitShipmentConfirmations
   * @request POST:/vendor/directFulfillment/shipping/2021-12-28/shipmentConfirmations
   */
  submitShipmentConfirmations = (
    body: SubmitShipmentConfirmationsRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<TransactionReference, ErrorList>({
      path: `/vendor/directFulfillment/shipping/2021-12-28/shipmentConfirmations`,
      method: "POST",
      code: "post:/vendor/directFulfillment/shipping/2021-12-28/shipmentConfirmations",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description This operation is only to be used by Vendor-Own-Carrier (VOC) vendors. Calling this API submits a shipment status update for the package that a vendor has shipped. It will provide the Amazon customer visibility on their order, when the package is outside of Amazon Network visibility. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags vendorShipping
   * @name SubmitShipmentStatusUpdates
   * @request POST:/vendor/directFulfillment/shipping/2021-12-28/shipmentStatusUpdates
   */
  submitShipmentStatusUpdates = (
    body: SubmitShipmentStatusUpdatesRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<TransactionReference, ErrorList>({
      path: `/vendor/directFulfillment/shipping/2021-12-28/shipmentStatusUpdates`,
      method: "POST",
      code: "post:/vendor/directFulfillment/shipping/2021-12-28/shipmentStatusUpdates",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a list of customer invoices created during a time frame that you specify. You define the time frame using the createdAfter and createdBefore parameters. You must use both of these parameters. The date range to search must be no more than 7 days. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags customerInvoices
   * @name GetCustomerInvoices
   * @request GET:/vendor/directFulfillment/shipping/2021-12-28/customerInvoices
   */
  getCustomerInvoices = (
    query: {
      /** The vendor warehouseId for order fulfillment. If not specified, the result will contain orders for all warehouses. */
      shipFromPartyId?: string;
      /**
       * The limit to the number of records returned
       * @min 1
       * @max 100
       */
      limit?: number;
      /**
       * Orders that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      createdAfter: string;
      /**
       * Orders that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      createdBefore: string;
      /** Sort ASC or DESC by order creation date. */
      sortOrder?: "ASC" | "DESC";
      /** Used for pagination when there are more orders than the specified result size limit. The token value is returned in the previous API call. */
      nextToken?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<CustomerInvoiceList, ErrorList>({
      path: `/vendor/directFulfillment/shipping/2021-12-28/customerInvoices`,
      method: "GET",
      code: "get:/vendor/directFulfillment/shipping/2021-12-28/customerInvoices",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a customer invoice based on the purchaseOrderNumber that you specify. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags customerInvoices
   * @name GetCustomerInvoice
   * @request GET:/vendor/directFulfillment/shipping/2021-12-28/customerInvoices/{purchaseOrderNumber}
   */
  getCustomerInvoice = (purchaseOrderNumber: string, params: RequestParams = {}) =>
    this.http.request<CustomerInvoice, ErrorList>({
      path: `/vendor/directFulfillment/shipping/2021-12-28/customerInvoices/${purchaseOrderNumber}`,
      method: "GET",
      code: "get:/vendor/directFulfillment/shipping/2021-12-28/customerInvoices/{purchaseOrderNumber}",
      format: "json",
      ...params,
    });
  /**
   * @description Returns a list of packing slips for the purchase orders that match the criteria specified. Date range to search must not be more than 7 days. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags vendorShipping
   * @name GetPackingSlips
   * @request GET:/vendor/directFulfillment/shipping/2021-12-28/packingSlips
   */
  getPackingSlips = (
    query: {
      /** The vendor warehouseId for order fulfillment. If not specified the result will contain orders for all warehouses. */
      shipFromPartyId?: string;
      /**
       * The limit to the number of records returned
       * @min 1
       * @max 100
       */
      limit?: number;
      /**
       * Packing slips that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      createdAfter: string;
      /**
       * Packing slips that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      createdBefore: string;
      /**
       * Sort ASC or DESC by packing slip creation date.
       * @default "ASC"
       */
      sortOrder?: "ASC" | "DESC";
      /** Used for pagination when there are more packing slips than the specified result size limit. The token value is returned in the previous API call. */
      nextToken?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<PackingSlipList, ErrorList>({
      path: `/vendor/directFulfillment/shipping/2021-12-28/packingSlips`,
      method: "GET",
      code: "get:/vendor/directFulfillment/shipping/2021-12-28/packingSlips",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a packing slip based on the purchaseOrderNumber that you specify. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags vendorShipping
   * @name GetPackingSlip
   * @request GET:/vendor/directFulfillment/shipping/2021-12-28/packingSlips/{purchaseOrderNumber}
   */
  getPackingSlip = (purchaseOrderNumber: string, params: RequestParams = {}) =>
    this.http.request<PackingSlip, ErrorList>({
      path: `/vendor/directFulfillment/shipping/2021-12-28/packingSlips/${purchaseOrderNumber}`,
      method: "GET",
      code: "get:/vendor/directFulfillment/shipping/2021-12-28/packingSlips/{purchaseOrderNumber}",
      format: "json",
      ...params,
    });
  /**
   * @description Creates container (pallet) label for provided shipment package association
   *
   * @tags createContainerLabel
   * @name CreateContainerLabel
   * @request POST:/vendor/directFulfillment/shipping/2021-12-28/containerLabel
   */
  createContainerLabel = (
    body: CreateContainerLabelRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateContainerLabelResponse, ErrorList>({
      path: `/vendor/directFulfillment/shipping/2021-12-28/containerLabel`,
      method: "POST",
      code: "post:/vendor/directFulfillment/shipping/2021-12-28/containerLabel",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
