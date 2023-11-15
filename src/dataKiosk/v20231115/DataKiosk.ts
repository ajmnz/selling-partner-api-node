import type {
  CreateQueryResponse,
  CreateQuerySpecification,
  ErrorList,
  GetDocumentResponse,
  GetQueriesResponse,
  Query,
} from "./data-contracts";
import type { HttpClient, RequestParams } from "../../http-client";
import { ContentType } from "../../http-client";

export class DataKiosk<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns details for the Data Kiosk queries that match the specified filters. See the `createQuery` operation for details about query retention. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags queries
   * @name GetQueries
   * @request GET:/dataKiosk/2023-11-15/queries
   */
  getQueries = (
    query?: {
      /**
       * A list of processing statuses used to filter queries.
       * @minItems 1
       */
      processingStatuses?: (
        | "CANCELLED"
        | "DONE"
        | "FATAL"
        | "IN_PROGRESS"
        | "IN_QUEUE"
      )[];
      /**
       * The maximum number of queries to return in a single call.
       * @min 1
       * @max 100
       * @default 10
       */
      pageSize?: number;
      /**
       * The earliest query creation date and time for queries to include in the response, in ISO 8601 date time format. The default is 90 days ago.
       * @format date-time
       */
      createdSince?: string;
      /**
       * The latest query creation date and time for queries to include in the response, in ISO 8601 date time format. The default is the time of the `getQueries` request.
       * @format date-time
       */
      createdUntil?: string;
      /** A token to fetch a certain page of results when there are multiple pages of results available. The value of this token is fetched from the `pagination.nextToken` field returned in the `GetQueriesResponse` object. All other parameters must be provided with the same values that were provided with the request that generated this token, with the exception of `pageSize` which can be modified between calls to `getQueries`. In the absence of this token value, `getQueries` returns the first page of results. */
      paginationToken?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetQueriesResponse, ErrorList>({
      path: `/dataKiosk/2023-11-15/queries`,
      method: "GET",
      code: "get:/dataKiosk/2023-11-15/queries",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a Data Kiosk query request. **Note:** The retention of a query varies based on the fields requested. Each field within a schema is annotated with a `@resultRetention` directive that defines how long a query containing that field will be retained. When a query contains multiple fields with different retentions, the shortest (minimum) retention is applied. The retention of a query's resulting documents always matches the retention of the query. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags queries
   * @name CreateQuery
   * @request POST:/dataKiosk/2023-11-15/queries
   */
  createQuery = (body: CreateQuerySpecification, params: RequestParams = {}) =>
    this.http.request<CreateQueryResponse, ErrorList>({
      path: `/dataKiosk/2023-11-15/queries`,
      method: "POST",
      code: "post:/dataKiosk/2023-11-15/queries",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Cancels the query specified by the `queryId` parameter. Only queries with a non-terminal `processingStatus` (`IN_QUEUE`, `IN_PROGRESS`) can be cancelled. Cancelling a query that already has a `processingStatus` of `CANCELLED` will no-op. Cancelled queries are returned in subsequent calls to the `getQuery` and `getQueries` operations. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags queries
   * @name CancelQuery
   * @request DELETE:/dataKiosk/2023-11-15/queries/{queryId}
   */
  cancelQuery = (queryId: string, params: RequestParams = {}) =>
    this.http.request<void, ErrorList>({
      path: `/dataKiosk/2023-11-15/queries/${queryId}`,
      method: "DELETE",
      code: "delete:/dataKiosk/2023-11-15/queries/{queryId}",
      ...params,
    });
  /**
   * @description Returns query details for the query specified by the `queryId` parameter. See the `createQuery` operation for details about query retention. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2.0 | 15 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags queries
   * @name GetQuery
   * @request GET:/dataKiosk/2023-11-15/queries/{queryId}
   */
  getQuery = (queryId: string, params: RequestParams = {}) =>
    this.http.request<Query, ErrorList>({
      path: `/dataKiosk/2023-11-15/queries/${queryId}`,
      method: "GET",
      code: "get:/dataKiosk/2023-11-15/queries/{queryId}",
      format: "json",
      ...params,
    });
  /**
   * @description Returns the information required for retrieving a Data Kiosk document's contents. See the `createQuery` operation for details about document retention. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags queries
   * @name GetDocument
   * @request GET:/dataKiosk/2023-11-15/documents/{documentId}
   */
  getDocument = (documentId: string, params: RequestParams = {}) =>
    this.http.request<GetDocumentResponse, ErrorList>({
      path: `/dataKiosk/2023-11-15/documents/${documentId}`,
      method: "GET",
      code: "get:/dataKiosk/2023-11-15/documents/{documentId}",
      format: "json",
      ...params,
    });
}
