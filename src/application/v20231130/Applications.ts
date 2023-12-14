import type { ErrorList } from "./data-contracts";
import type { HttpClient, RequestParams } from "../../http-client";

export class Applications<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Rotates application client secrets for a developer application. Developers must register a destination queue in the developer console before calling this operation. When this operation is called a new client secret is generated and sent to the developer-registered queue. For more information, refer to [Rotate your application client secret](https://developer-docs.amazon.com/sp-api/docs/application-management-api-v2023-11-30-use-case-guide). **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 1 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags Applications
   * @name RotateApplicationClientSecret
   * @request POST:/applications/2023-11-30/clientSecret
   */
  rotateApplicationClientSecret = (params: RequestParams = {}) =>
    this.http.request<void, ErrorList>({
      path: `/applications/2023-11-30/clientSecret`,
      method: "POST",
      code: "post:/applications/2023-11-30/clientSecret",
      ...params,
    });
}
