import type {
  CancelShipmentResponse,
  CreateShipmentRequest,
  CreateShipmentResponse,
  GetAccountResponse,
  GetRatesRequest,
  GetRatesResponse,
  GetShipmentResponse,
  GetTrackingInformationResponse,
  PurchaseLabelsRequest,
  PurchaseLabelsResponse,
  PurchaseShipmentRequest,
  PurchaseShipmentResponse,
  RetrieveShippingLabelRequest,
  RetrieveShippingLabelResponse,
} from "./data-contracts";
import type { HttpClient, RequestParams } from "../http-client";
import { ContentType } from "../http-client";

export class Shipping<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Create a new shipment. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 15 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags shipping
   * @name CreateShipment
   * @request POST:/shipping/v1/shipments
   */
  createShipment = (body: CreateShipmentRequest, params: RequestParams = {}) =>
    this.http.request<CreateShipmentResponse, CreateShipmentResponse>({
      path: `/shipping/v1/shipments`,
      method: "POST",
      code: "post:/shipping/v1/shipments",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Return the entire shipment object for the shipmentId. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 15 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags shipping
   * @name GetShipment
   * @request GET:/shipping/v1/shipments/{shipmentId}
   */
  getShipment = (shipmentId: string, params: RequestParams = {}) =>
    this.http.request<GetShipmentResponse, GetShipmentResponse>({
      path: `/shipping/v1/shipments/${shipmentId}`,
      method: "GET",
      code: "get:/shipping/v1/shipments/{shipmentId}",
      format: "json",
      ...params,
    });
  /**
   * @description Cancel a shipment by the given shipmentId. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 15 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags shipping
   * @name CancelShipment
   * @request POST:/shipping/v1/shipments/{shipmentId}/cancel
   */
  cancelShipment = (shipmentId: string, params: RequestParams = {}) =>
    this.http.request<CancelShipmentResponse, CancelShipmentResponse>({
      path: `/shipping/v1/shipments/${shipmentId}/cancel`,
      method: "POST",
      code: "post:/shipping/v1/shipments/{shipmentId}/cancel",
      format: "json",
      ...params,
    });
  /**
   * @description Purchase shipping labels based on a given rate. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 15 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags shipping
   * @name PurchaseLabels
   * @request POST:/shipping/v1/shipments/{shipmentId}/purchaseLabels
   */
  purchaseLabels = (
    shipmentId: string,
    body: PurchaseLabelsRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<PurchaseLabelsResponse, PurchaseLabelsResponse>({
      path: `/shipping/v1/shipments/${shipmentId}/purchaseLabels`,
      method: "POST",
      code: "post:/shipping/v1/shipments/{shipmentId}/purchaseLabels",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieve shipping label based on the shipment id and tracking id. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 15 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags shipping
   * @name RetrieveShippingLabel
   * @request POST:/shipping/v1/shipments/{shipmentId}/containers/{trackingId}/label
   */
  retrieveShippingLabel = (
    shipmentId: string,
    trackingId: string,
    body: RetrieveShippingLabelRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<RetrieveShippingLabelResponse, RetrieveShippingLabelResponse>({
      path: `/shipping/v1/shipments/${shipmentId}/containers/${trackingId}/label`,
      method: "POST",
      code: "post:/shipping/v1/shipments/{shipmentId}/containers/{trackingId}/label",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Purchase shipping labels. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 15 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags shipping
   * @name PurchaseShipment
   * @request POST:/shipping/v1/purchaseShipment
   */
  purchaseShipment = (body: PurchaseShipmentRequest, params: RequestParams = {}) =>
    this.http.request<PurchaseShipmentResponse, PurchaseShipmentResponse>({
      path: `/shipping/v1/purchaseShipment`,
      method: "POST",
      code: "post:/shipping/v1/purchaseShipment",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get service rates. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 15 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags shipping
   * @name GetRates
   * @request POST:/shipping/v1/rates
   */
  getRates = (body: GetRatesRequest, params: RequestParams = {}) =>
    this.http.request<GetRatesResponse, GetRatesResponse>({
      path: `/shipping/v1/rates`,
      method: "POST",
      code: "post:/shipping/v1/rates",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Verify if the current account is valid. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 15 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags shipping
   * @name GetAccount
   * @request GET:/shipping/v1/account
   */
  getAccount = (params: RequestParams = {}) =>
    this.http.request<GetAccountResponse, GetAccountResponse>({
      path: `/shipping/v1/account`,
      method: "GET",
      code: "get:/shipping/v1/account",
      format: "json",
      ...params,
    });
  /**
   * @description Return the tracking information of a shipment. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags shipping
   * @name GetTrackingInformation
   * @request GET:/shipping/v1/tracking/{trackingId}
   */
  getTrackingInformation = (trackingId: string, params: RequestParams = {}) =>
    this.http.request<GetTrackingInformationResponse, GetTrackingInformationResponse>({
      path: `/shipping/v1/tracking/${trackingId}`,
      method: "GET",
      code: "get:/shipping/v1/tracking/{trackingId}",
      format: "json",
      ...params,
    });
}
