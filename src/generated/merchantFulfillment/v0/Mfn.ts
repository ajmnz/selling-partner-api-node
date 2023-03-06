import {
  CancelShipmentResponse,
  CreateShipmentRequest,
  CreateShipmentResponse,
  GetAdditionalSellerInputsRequest,
  GetAdditionalSellerInputsResponse,
  GetEligibleShipmentServicesRequest,
  GetEligibleShipmentServicesResponse,
  GetShipmentResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "../../../http-client";

export class Mfn<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns a list of shipping service offers that satisfy the specified shipment request details. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags merchantFulfillment
   * @name GetEligibleShipmentServicesOld
   * @request POST:/mfn/v0/eligibleServices
   */
  getEligibleShipmentServicesOld = (
    body: GetEligibleShipmentServicesRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<
      GetEligibleShipmentServicesResponse,
      GetEligibleShipmentServicesResponse
    >({
      path: `/mfn/v0/eligibleServices`,
      method: "POST",
      code: "post:/mfn/v0/eligibleServices",
      body: body,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a list of shipping service offers that satisfy the specified shipment request details. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags merchantFulfillment
   * @name GetEligibleShipmentServices
   * @request POST:/mfn/v0/eligibleShippingServices
   */
  getEligibleShipmentServices = (
    body: GetEligibleShipmentServicesRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<
      GetEligibleShipmentServicesResponse,
      GetEligibleShipmentServicesResponse
    >({
      path: `/mfn/v0/eligibleShippingServices`,
      method: "POST",
      code: "post:/mfn/v0/eligibleShippingServices",
      body: body,
      format: "json",
      ...params,
    });
  /**
   * @description Returns the shipment information for an existing shipment. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags merchantFulfillment
   * @name GetShipment
   * @request GET:/mfn/v0/shipments/{shipmentId}
   */
  getShipment = (shipmentId: string, params: RequestParams = {}) =>
    this.http.request<GetShipmentResponse, GetShipmentResponse>({
      path: `/mfn/v0/shipments/${shipmentId}`,
      method: "GET",
      code: "get:/mfn/v0/shipments/{shipmentId}",
      format: "json",
      ...params,
    });
  /**
   * @description Cancel the shipment indicated by the specified shipment identifier. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags merchantFulfillment
   * @name CancelShipment
   * @request DELETE:/mfn/v0/shipments/{shipmentId}
   */
  cancelShipment = (shipmentId: string, params: RequestParams = {}) =>
    this.http.request<CancelShipmentResponse, CancelShipmentResponse>({
      path: `/mfn/v0/shipments/${shipmentId}`,
      method: "DELETE",
      code: "delete:/mfn/v0/shipments/{shipmentId}",
      format: "json",
      ...params,
    });
  /**
   * @description Cancel the shipment indicated by the specified shipment identifer. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags merchantFulfillment
   * @name CancelShipmentOld
   * @request PUT:/mfn/v0/shipments/{shipmentId}/cancel
   */
  cancelShipmentOld = (shipmentId: string, params: RequestParams = {}) =>
    this.http.request<CancelShipmentResponse, CancelShipmentResponse>({
      path: `/mfn/v0/shipments/${shipmentId}/cancel`,
      method: "PUT",
      code: "put:/mfn/v0/shipments/{shipmentId}/cancel",
      format: "json",
      ...params,
    });
  /**
   * @description Create a shipment with the information provided. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags merchantFulfillment
   * @name CreateShipment
   * @request POST:/mfn/v0/shipments
   */
  createShipment = (body: CreateShipmentRequest, params: RequestParams = {}) =>
    this.http.request<CreateShipmentResponse, CreateShipmentResponse>({
      path: `/mfn/v0/shipments`,
      method: "POST",
      code: "post:/mfn/v0/shipments",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Get a list of additional seller inputs required for a ship method. This is generally used for international shipping. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags merchantFulfillment
   * @name GetAdditionalSellerInputsOld
   * @request POST:/mfn/v0/sellerInputs
   */
  getAdditionalSellerInputsOld = (
    body: GetAdditionalSellerInputsRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<
      GetAdditionalSellerInputsResponse,
      GetAdditionalSellerInputsResponse
    >({
      path: `/mfn/v0/sellerInputs`,
      method: "POST",
      code: "post:/mfn/v0/sellerInputs",
      body: body,
      format: "json",
      ...params,
    });
  /**
   * @description Gets a list of additional seller inputs required for a ship method. This is generally used for international shipping. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags merchantFulfillment
   * @name GetAdditionalSellerInputs
   * @request POST:/mfn/v0/additionalSellerInputs
   */
  getAdditionalSellerInputs = (
    body: GetAdditionalSellerInputsRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<
      GetAdditionalSellerInputsResponse,
      GetAdditionalSellerInputsResponse
    >({
      path: `/mfn/v0/additionalSellerInputs`,
      method: "POST",
      code: "post:/mfn/v0/additionalSellerInputs",
      body: body,
      format: "json",
      ...params,
    });
}
