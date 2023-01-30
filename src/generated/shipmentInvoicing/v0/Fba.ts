import {
  GetInvoiceStatusResponse,
  GetShipmentDetailsResponse,
  SubmitInvoiceRequest,
  SubmitInvoiceResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "../../../http-client";

export class Fba<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns the shipment details required to issue an invoice for the specified shipment. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1.133 | 25 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags shipmentInvoice
   * @name GetShipmentDetails
   * @request GET:/fba/outbound/brazil/v0/shipments/{shipmentId}
   */
  getShipmentDetails = (shipmentId: string, params: RequestParams = {}) =>
    this.http.request<GetShipmentDetailsResponse, GetShipmentDetailsResponse>({
      path: `/fba/outbound/brazil/v0/shipments/${shipmentId}`,
      method: "GET",
      code: "get:/fba/outbound/brazil/v0/shipments/{shipmentId}",
      format: "json",
      ...params,
    });
  /**
   * @description Submits a shipment invoice document for a given shipment. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1.133 | 25 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags shipmentInvoice
   * @name SubmitInvoice
   * @request POST:/fba/outbound/brazil/v0/shipments/{shipmentId}/invoice
   */
  submitInvoice = (
    shipmentId: string,
    body: SubmitInvoiceRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<SubmitInvoiceResponse, SubmitInvoiceResponse>({
      path: `/fba/outbound/brazil/v0/shipments/${shipmentId}/invoice`,
      method: "POST",
      code: "post:/fba/outbound/brazil/v0/shipments/{shipmentId}/invoice",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns the invoice status for the shipment you specify. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1.133 | 25 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags shipmentInvoice
   * @name GetInvoiceStatus
   * @request GET:/fba/outbound/brazil/v0/shipments/{shipmentId}/invoice/status
   */
  getInvoiceStatus = (shipmentId: string, params: RequestParams = {}) =>
    this.http.request<GetInvoiceStatusResponse, GetInvoiceStatusResponse>({
      path: `/fba/outbound/brazil/v0/shipments/${shipmentId}/invoice/status`,
      method: "GET",
      code: "get:/fba/outbound/brazil/v0/shipments/{shipmentId}/invoice/status",
      format: "json",
      ...params,
    });
}
