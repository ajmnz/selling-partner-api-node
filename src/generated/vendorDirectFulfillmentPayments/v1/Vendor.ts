import { SubmitInvoiceRequest, SubmitInvoiceResponse } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "../../../http-client";

export class Vendor<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Submits one or more invoices for a vendor's direct fulfillment orders. **Usage Plans:** | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable | The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags vendorInvoice
   * @name SubmitInvoice
   * @request POST:/vendor/directFulfillment/payments/v1/invoices
   */
  submitInvoice = (body: SubmitInvoiceRequest, params: RequestParams = {}) =>
    this.http.request<SubmitInvoiceResponse, SubmitInvoiceResponse>({
      path: `/vendor/directFulfillment/payments/v1/invoices`,
      method: "POST",
      code: "post:/vendor/directFulfillment/payments/v1/invoices",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
