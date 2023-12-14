import type {
  CancelShipmentResponse,
  DirectPurchaseRequest,
  DirectPurchaseResponse,
  ErrorList,
  GenerateCollectionFormRequest,
  GenerateCollectionFormResponse,
  GetAccessPointsResponse,
  GetAdditionalInputsResponse,
  GetCarrierAccountFormInputsResponse,
  GetCarrierAccountsRequest,
  GetCarrierAccountsResponse,
  GetCollectionFormHistoryRequest,
  GetCollectionFormHistoryResponse,
  GetCollectionFormResponse,
  GetRatesRequest,
  GetRatesResponse,
  GetShipmentDocumentsResponse,
  GetTrackingResponse,
  GetUnmanifestedShipmentsRequest,
  GetUnmanifestedShipmentsResponse,
  LinkCarrierAccountRequest,
  LinkCarrierAccountResponse,
  OneClickShipmentRequest,
  OneClickShipmentResponse,
  PurchaseShipmentRequest,
  PurchaseShipmentResponse,
  UnlinkCarrierAccountRequest,
  UnlinkCarrierAccountResponse,
} from "./data-contracts";
import type { HttpClient, RequestParams } from "../../http-client";
import { ContentType } from "../../http-client";

export class Shipping<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns the available shipping service offerings. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags shipping
   * @name GetRates
   * @request POST:/shipping/v2/shipments/rates
   */
  getRates = (body: GetRatesRequest, params: RequestParams = {}) =>
    this.http.request<GetRatesResponse, ErrorList>({
      path: `/shipping/v2/shipments/rates`,
      method: "POST",
      code: "post:/shipping/v2/shipments/rates",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Purchases the shipping service for a shipment using the best fit service offering. Returns purchase related details and documents. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags shipping
   * @name DirectPurchaseShipment
   * @request POST:/shipping/v2/shipments/directPurchase
   */
  directPurchaseShipment = (body: DirectPurchaseRequest, params: RequestParams = {}) =>
    this.http.request<DirectPurchaseResponse, ErrorList>({
      path: `/shipping/v2/shipments/directPurchase`,
      method: "POST",
      code: "post:/shipping/v2/shipments/directPurchase",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Purchases a shipping service and returns purchase related details and documents. Note: You must complete the purchase within 10 minutes of rate creation by the shipping service provider. If you make the request after the 10 minutes have expired, you will receive an error response with the error code equal to "TOKEN_EXPIRED". If you receive this error response, you must get the rates for the shipment again. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags shipping
   * @name PurchaseShipment
   * @request POST:/shipping/v2/shipments
   */
  purchaseShipment = (body: PurchaseShipmentRequest, params: RequestParams = {}) =>
    this.http.request<PurchaseShipmentResponse, ErrorList>({
      path: `/shipping/v2/shipments`,
      method: "POST",
      code: "post:/shipping/v2/shipments",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Purchases a shipping service identifier and returns purchase-related details and documents. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags shipping
   * @name OneClickShipment
   * @request POST:/shipping/v2/oneClickShipment
   */
  oneClickShipment = (body: OneClickShipmentRequest, params: RequestParams = {}) =>
    this.http.request<OneClickShipmentResponse, ErrorList>({
      path: `/shipping/v2/oneClickShipment`,
      method: "POST",
      code: "post:/shipping/v2/oneClickShipment",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns tracking information for a purchased shipment. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags shipping
   * @name GetTracking
   * @request GET:/shipping/v2/tracking
   */
  getTracking = (
    query: {
      /** A carrier-generated tracking identifier originally returned by the purchaseShipment operation. */
      trackingId: string;
      /** A carrier identifier originally returned by the getRates operation for the selected rate. */
      carrierId: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetTrackingResponse, ErrorList>({
      path: `/shipping/v2/tracking`,
      method: "GET",
      code: "get:/shipping/v2/tracking",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns the shipping documents associated with a package in a shipment. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags shipping
   * @name GetShipmentDocuments
   * @request GET:/shipping/v2/shipments/{shipmentId}/documents
   */
  getShipmentDocuments = (
    shipmentId: string,
    query: {
      /** The package client reference identifier originally provided in the request body parameter for the getRates operation. */
      packageClientReferenceId: string;
      /** The file format of the document. Must be one of the supported formats returned by the getRates operation. */
      format?: string;
      /** The resolution of the document (for example, 300 means 300 dots per inch). Must be one of the supported resolutions returned in the response to the getRates operation. */
      dpi?: number;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetShipmentDocumentsResponse, ErrorList>({
      path: `/shipping/v2/shipments/${shipmentId}/documents`,
      method: "GET",
      code: "get:/shipping/v2/shipments/{shipmentId}/documents",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Cancels a purchased shipment. Returns an empty object if the shipment is successfully cancelled. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags shipping
   * @name CancelShipment
   * @request PUT:/shipping/v2/shipments/{shipmentId}/cancel
   */
  cancelShipment = (shipmentId: string, params: RequestParams = {}) =>
    this.http.request<CancelShipmentResponse, ErrorList>({
      path: `/shipping/v2/shipments/${shipmentId}/cancel`,
      method: "PUT",
      code: "put:/shipping/v2/shipments/{shipmentId}/cancel",
      format: "json",
      ...params,
    });
  /**
   * @description Returns the JSON schema to use for providing additional inputs when needed to purchase a shipping offering. Call the getAdditionalInputs operation when the response to a previous call to the getRates operation indicates that additional inputs are required for the rate (shipping offering) that you want to purchase. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags shipping
   * @name GetAdditionalInputs
   * @request GET:/shipping/v2/shipments/additionalInputs/schema
   */
  getAdditionalInputs = (
    query: {
      /** The request token returned in the response to the getRates operation. */
      requestToken: string;
      /** The rate identifier for the shipping offering (rate) returned in the response to the getRates operation. */
      rateId: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetAdditionalInputsResponse, ErrorList>({
      path: `/shipping/v2/shipments/additionalInputs/schema`,
      method: "GET",
      code: "get:/shipping/v2/shipments/additionalInputs/schema",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description This API will return a list of input schema required to register a shipper account with the carrier. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags shipping
   * @name GetCarrierAccountFormInputs
   * @request GET:/shipping/v2/carrierAccountFormInputs
   */
  getCarrierAccountFormInputs = (params: RequestParams = {}) =>
    this.http.request<GetCarrierAccountFormInputsResponse, ErrorList>({
      path: `/shipping/v2/carrierAccountFormInputs`,
      method: "GET",
      code: "get:/shipping/v2/carrierAccountFormInputs",
      format: "json",
      ...params,
    });
  /**
   * @description This API will return Get all carrier accounts for a merchant. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags shipping
   * @name GetCarrierAccounts
   * @request PUT:/shipping/v2/carrierAccounts
   */
  getCarrierAccounts = (body: GetCarrierAccountsRequest, params: RequestParams = {}) =>
    this.http.request<GetCarrierAccountsResponse, ErrorList>({
      path: `/shipping/v2/carrierAccounts`,
      method: "PUT",
      code: "put:/shipping/v2/carrierAccounts",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description This API associates/links the specified carrier account with the merchant. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags shipping
   * @name LinkCarrierAccount
   * @request PUT:/shipping/v2/carrierAccounts/{carrierId}
   */
  linkCarrierAccount = (
    carrierId: string,
    body: LinkCarrierAccountRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<LinkCarrierAccountResponse, ErrorList>({
      path: `/shipping/v2/carrierAccounts/${carrierId}`,
      method: "PUT",
      code: "put:/shipping/v2/carrierAccounts/{carrierId}",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description This API Unlink the specified carrier account with the merchant. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags shipping
   * @name UnlinkCarrierAccount
   * @request PUT:/shipping/v2/carrierAccounts/{carrierId}/unlink
   */
  unlinkCarrierAccount = (
    carrierId: string,
    body: UnlinkCarrierAccountRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<UnlinkCarrierAccountResponse, ErrorList>({
      path: `/shipping/v2/carrierAccounts/${carrierId}/unlink`,
      method: "PUT",
      code: "put:/shipping/v2/carrierAccounts/{carrierId}/unlink",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description This API  Call to generate the collection form. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags shipping
   * @name GenerateCollectionForm
   * @request POST:/shipping/v2/collectionForms
   */
  generateCollectionForm = (
    body: GenerateCollectionFormRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<GenerateCollectionFormResponse, ErrorList>({
      path: `/shipping/v2/collectionForms`,
      method: "POST",
      code: "post:/shipping/v2/collectionForms",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description This API Call to get the history of the previously generated collection forms. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags shipping
   * @name GetCollectionFormHistory
   * @request PUT:/shipping/v2/collectionForms/history
   */
  getCollectionFormHistory = (
    body: GetCollectionFormHistoryRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<GetCollectionFormHistoryResponse, ErrorList>({
      path: `/shipping/v2/collectionForms/history`,
      method: "PUT",
      code: "put:/shipping/v2/collectionForms/history",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description This API Get all unmanifested carriers with shipment locations. Any locations which has unmanifested shipments with an eligible carrier for manifesting shall be returned. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags shipping
   * @name GetUnmanifestedShipments
   * @request PUT:/shipping/v2/unmanifestedShipments
   */
  getUnmanifestedShipments = (
    body: GetUnmanifestedShipmentsRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<GetUnmanifestedShipmentsResponse, ErrorList>({
      path: `/shipping/v2/unmanifestedShipments`,
      method: "PUT",
      code: "put:/shipping/v2/unmanifestedShipments",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description This API reprint a collection form. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags shipping
   * @name GetCollectionForm
   * @request GET:/shipping/v2/collectionForms/{collectionFormId}
   */
  getCollectionForm = (collectionFormId: string, params: RequestParams = {}) =>
    this.http.request<GetCollectionFormResponse, ErrorList>({
      path: `/shipping/v2/collectionForms/${collectionFormId}`,
      method: "GET",
      code: "get:/shipping/v2/collectionForms/{collectionFormId}",
      format: "json",
      ...params,
    });
  /**
   * @description Returns a list of access points in proximity of input postal code. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 80 | 100 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags shipping
   * @name GetAccessPoints
   * @request GET:/shipping/v2/accessPoints
   */
  getAccessPoints = (
    query: {
      /** @example "HELIX" */
      accessPointTypes: (
        | "HELIX"
        | "CAMPUS_LOCKER"
        | "OMNI_LOCKER"
        | "ODIN_LOCKER"
        | "DOBBY_LOCKER"
        | "CORE_LOCKER"
        | "3P"
        | "CAMPUS_ROOM"
      )[];
      /** @example "US" */
      countryCode: string;
      /** @example "EX332JL" */
      postalCode: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetAccessPointsResponse, ErrorList>({
      path: `/shipping/v2/accessPoints`,
      method: "GET",
      code: "get:/shipping/v2/accessPoints",
      query,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
