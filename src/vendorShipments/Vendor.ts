import type {
  GetShipmentDetailsResponse,
  GetShipmentLabels,
  SubmitShipmentConfirmationsRequest,
  SubmitShipmentConfirmationsResponse,
  SubmitShipments,
} from "./data-contracts";
import type { HttpClient, RequestParams } from "../http-client";
import { ContentType } from "../http-client";

export class Vendor<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Submits one or more shipment confirmations for vendor orders. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags vendorShipping
   * @name SubmitShipmentConfirmations
   * @request POST:/vendor/shipping/v1/shipmentConfirmations
   */
  submitShipmentConfirmations = (
    body: SubmitShipmentConfirmationsRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<
      SubmitShipmentConfirmationsResponse,
      SubmitShipmentConfirmationsResponse
    >({
      path: `/vendor/shipping/v1/shipmentConfirmations`,
      method: "POST",
      code: "post:/vendor/shipping/v1/shipmentConfirmations",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Submits one or more shipment request for vendor Orders. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags vendorShipping
   * @name SubmitShipments
   * @request POST:/vendor/shipping/v1/shipments
   */
  submitShipments = (body: SubmitShipments, params: RequestParams = {}) =>
    this.http.request<
      SubmitShipmentConfirmationsResponse,
      SubmitShipmentConfirmationsResponse
    >({
      path: `/vendor/shipping/v1/shipments`,
      method: "POST",
      code: "post:/vendor/shipping/v1/shipments",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns the Details about Shipment, Carrier Details,  status of the shipment, container details and other details related to shipment based on the filter parameters value that you specify. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags vendorShipping
   * @name GetShipmentDetails
   * @request GET:/vendor/shipping/v1/shipments
   */
  getShipmentDetails = (
    query?: {
      /**
       * The limit to the number of records returned. Default value is 50 records.
       * @format int64
       * @min 1
       * @max 50
       */
      limit?: number;
      /** Sort in ascending or descending order by purchase order creation date. */
      sortOrder?: "ASC" | "DESC";
      /** Used for pagination when there are more shipments than the specified result size limit. */
      nextToken?: string;
      /**
       * Get Shipment Details that became available after this timestamp will be included in the result. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      createdAfter?: string;
      /**
       * Get Shipment Details that became available before this timestamp will be included in the result. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      createdBefore?: string;
      /**
       * Get Shipment Details by passing Shipment confirmed create Date Before. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      shipmentConfirmedBefore?: string;
      /**
       * Get Shipment Details by passing Shipment confirmed create Date After. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      shipmentConfirmedAfter?: string;
      /**
       * Get Shipment Details by passing Package label create Date by buyer. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      packageLabelCreatedBefore?: string;
      /**
       * Get Shipment Details by passing Package label create Date After by buyer. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      packageLabelCreatedAfter?: string;
      /**
       * Get Shipment Details by passing Shipped Date Before. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      shippedBefore?: string;
      /**
       * Get Shipment Details by passing Shipped Date After. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      shippedAfter?: string;
      /**
       * Get Shipment Details by passing Estimated Delivery Date Before. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      estimatedDeliveryBefore?: string;
      /**
       * Get Shipment Details by passing Estimated Delivery Date Before. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      estimatedDeliveryAfter?: string;
      /**
       * Get Shipment Details by passing Shipment Delivery Date Before. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      shipmentDeliveryBefore?: string;
      /**
       * Get Shipment Details by passing Shipment Delivery Date After. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      shipmentDeliveryAfter?: string;
      /**
       * Get Shipment Details by passing Before Requested pickup date. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      requestedPickUpBefore?: string;
      /**
       * Get Shipment Details by passing After Requested pickup date. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      requestedPickUpAfter?: string;
      /**
       * Get Shipment Details by passing Before scheduled pickup date. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      scheduledPickUpBefore?: string;
      /**
       * Get Shipment Details by passing After Scheduled pickup date. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      scheduledPickUpAfter?: string;
      /** Get Shipment Details by passing Current shipment status. */
      currentShipmentStatus?: string;
      /** Get Shipment Details by passing Vendor Shipment ID */
      vendorShipmentIdentifier?: string;
      /** Get Shipment Details by passing buyer Reference ID */
      buyerReferenceNumber?: string;
      /** Get Shipping Details based on buyer warehouse code. This value should be same as 'shipToParty.partyId' in the Shipment. */
      buyerWarehouseCode?: string;
      /** Get Shipping Details based on vendor warehouse code. This value should be same as 'sellingParty.partyId' in the Shipment. */
      sellerWarehouseCode?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetShipmentDetailsResponse, GetShipmentDetailsResponse>({
      path: `/vendor/shipping/v1/shipments`,
      method: "GET",
      code: "get:/vendor/shipping/v1/shipments",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns transport Labels based on the filters that you specify. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags vendorShipping
   * @name GetShipmentLabels
   * @request GET:/vendor/shipping/v1/transportLabels
   */
  getShipmentLabels = (
    query?: {
      /**
       * The limit to the number of records returned. Default value is 50 records.
       * @format int64
       * @min 1
       * @max 50
       */
      limit?: number;
      /** Sort in ascending or descending order by transport label creation date. */
      sortOrder?: "ASC" | "DESC";
      /** Used for pagination when there are more transport label than the specified result size limit. */
      nextToken?: string;
      /**
       * transport Labels that became available after this timestamp will be included in the result. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      labelCreatedAfter?: string;
      /**
       * transport Labels that became available before this timestamp will be included in the result. Must be in ISO-8601 date/time format.
       * @format date-time
       */
      labelcreatedBefore?: string;
      /** Get transport labels by passing Buyer Reference Number to retreive the corresponding transport label. */
      buyerReferenceNumber?: string;
      /** Get transport labels by passing Vendor Shipment ID to retreive the corresponding transport label. */
      vendorShipmentIdentifier?: string;
      /** Get Shipping labels based Vendor Warehouse code. This value should be same as 'shipFromParty.partyId' in the Shipment. */
      sellerWarehouseCode?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetShipmentLabels, GetShipmentLabels>({
      path: `/vendor/shipping/v1/transportLabels`,
      method: "GET",
      code: "get:/vendor/shipping/v1/transportLabels",
      query,
      format: "json",
      ...params,
    });
}
