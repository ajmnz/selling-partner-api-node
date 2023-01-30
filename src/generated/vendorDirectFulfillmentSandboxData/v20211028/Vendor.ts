import {
  ErrorList,
  GenerateOrderScenarioRequest,
  TransactionReference,
  TransactionStatus,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "../../../http-client";

export class Vendor<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Submits a request to generate test order data for Vendor Direct Fulfillment API entities.
   *
   * @tags vendorDFSandbox
   * @name GenerateOrderScenarios
   * @request POST:/vendor/directFulfillment/sandbox/2021-10-28/orders
   */
  generateOrderScenarios = (
    body: GenerateOrderScenarioRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<TransactionReference, ErrorList>({
      path: `/vendor/directFulfillment/sandbox/2021-10-28/orders`,
      method: "POST",
      code: "post:/vendor/directFulfillment/sandbox/2021-10-28/orders",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns the status of the transaction indicated by the specified transactionId. If the transaction was successful, also returns the requested test order data.
   *
   * @tags vendorDFSandboxtransactionstatus
   * @name GetOrderScenarios
   * @request GET:/vendor/directFulfillment/sandbox/2021-10-28/transactions/{transactionId}
   */
  getOrderScenarios = (transactionId: string, params: RequestParams = {}) =>
    this.http.request<TransactionStatus, ErrorList>({
      path: `/vendor/directFulfillment/sandbox/2021-10-28/transactions/${transactionId}`,
      method: "GET",
      code: "get:/vendor/directFulfillment/sandbox/2021-10-28/transactions/{transactionId}",
      format: "json",
      ...params,
    });
}
