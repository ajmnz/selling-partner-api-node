import { GetTransactionResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "../../../http-client";

export class Vendor<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns the status of the transaction indicated by the specified transactionId. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags vendorTransaction
   * @name GetTransactionStatus
   * @request GET:/vendor/directFulfillment/transactions/v1/transactions/{transactionId}
   */
  getTransactionStatus = (transactionId: string, params: RequestParams = {}) =>
    this.http.request<GetTransactionResponse, GetTransactionResponse>({
      path: `/vendor/directFulfillment/transactions/v1/transactions/${transactionId}`,
      method: "GET",
      code: "get:/vendor/directFulfillment/transactions/v1/transactions/{transactionId}",
      format: "json",
      ...params,
    });
}
