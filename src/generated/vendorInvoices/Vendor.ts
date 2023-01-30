import { SubmitInvoicesRequest, SubmitInvoicesResponse } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "../../http-client";

export class Vendor<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Submit new invoices to Amazon. **Usage Plans:** | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable | The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags vendorPayments
   * @name SubmitInvoices
   * @request POST:/vendor/payments/v1/invoices
   */
  submitInvoices = (body: SubmitInvoicesRequest, params: RequestParams = {}) =>
    this.http.request<SubmitInvoicesResponse, SubmitInvoicesResponse>({
      path: `/vendor/payments/v1/invoices`,
      method: "POST",
      code: "post:/vendor/payments/v1/invoices",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
