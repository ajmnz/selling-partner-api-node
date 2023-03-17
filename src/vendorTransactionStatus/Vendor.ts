import type { GetTransactionResponse } from "./data-contracts";
import type { HttpClient, RequestParams } from "../http-client";

export class Vendor<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns the status of the transaction that you specify. **Usage Plans:** | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable | The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags vendorTransaction
   * @name GetTransaction
   * @request GET:/vendor/transactions/v1/transactions/{transactionId}
   */
  getTransaction = (transactionId: string, params: RequestParams = {}) =>
    this.http.request<GetTransactionResponse, GetTransactionResponse>({
      path: `/vendor/transactions/v1/transactions/${transactionId}`,
      method: "GET",
      code: "get:/vendor/transactions/v1/transactions/{transactionId}",
      format: "json",
      ...params,
    });
}
