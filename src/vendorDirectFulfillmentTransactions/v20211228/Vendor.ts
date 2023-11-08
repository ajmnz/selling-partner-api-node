import type { Error, ErrorList, TransactionStatus } from "./data-contracts";
import type { HttpClient, RequestParams } from "../../http-client";

export class Vendor<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns the status of the transaction indicated by the specified transactionId. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags vendorTransaction
   * @name GetTransactionStatus
   * @request GET:/vendor/directFulfillment/transactions/2021-12-28/transactions/{transactionId}
   */
  getTransactionStatus = (transactionId: string, params: RequestParams = {}) =>
    this.http.request<TransactionStatus, ErrorList | Error>({
      path: `/vendor/directFulfillment/transactions/2021-12-28/transactions/${transactionId}`,
      method: "GET",
      code: "get:/vendor/directFulfillment/transactions/2021-12-28/transactions/{transactionId}",
      format: "json",
      ...params,
    });
}
