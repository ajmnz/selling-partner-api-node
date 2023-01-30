import {
  CreateFeedDocumentResponse,
  CreateFeedDocumentSpecification,
  CreateFeedResponse,
  CreateFeedSpecification,
  ErrorList,
  Feed,
  FeedDocument,
  GetFeedsResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "../../../http-client";

export class Feeds<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns feed details for the feeds that match the filters that you specify. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags feeds
   * @name GetFeeds
   * @request GET:/feeds/2021-06-30/feeds
   */
  getFeeds = (
    query?: {
      /**
       * A list of feed types used to filter feeds. When feedTypes is provided, the other filter parameters (processingStatuses, marketplaceIds, createdSince, createdUntil) and pageSize may also be provided. Either feedTypes or nextToken is required.
       * @maxItems 10
       * @minItems 1
       */
      feedTypes?: string[];
      /**
       * A list of marketplace identifiers used to filter feeds. The feeds returned will match at least one of the marketplaces that you specify.
       * @maxItems 10
       * @minItems 1
       */
      marketplaceIds?: string[];
      /**
       * The maximum number of feeds to return in a single call.
       * @min 1
       * @max 100
       * @default 10
       */
      pageSize?: number;
      /**
       * A list of processing statuses used to filter feeds.
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
       * The earliest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is 90 days ago. Feeds are retained for a maximum of 90 days.
       * @format date-time
       */
      createdSince?: string;
      /**
       * The latest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is now.
       * @format date-time
       */
      createdUntil?: string;
      /** A string token returned in the response to your previous request. nextToken is returned when the number of results exceeds the specified pageSize value. To get the next page of results, call the getFeeds operation and include this token as the only parameter. Specifying nextToken with any other parameters will cause the request to fail. */
      nextToken?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetFeedsResponse, ErrorList>({
      path: `/feeds/2021-06-30/feeds`,
      method: "GET",
      code: "get:/feeds/2021-06-30/feeds",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a feed. Upload the contents of the feed document before calling this operation. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.0083 | 15 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags feeds
   * @name CreateFeed
   * @request POST:/feeds/2021-06-30/feeds
   */
  createFeed = (body: CreateFeedSpecification, params: RequestParams = {}) =>
    this.http.request<CreateFeedResponse, ErrorList>({
      path: `/feeds/2021-06-30/feeds`,
      method: "POST",
      code: "post:/feeds/2021-06-30/feeds",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Cancels the feed that you specify. Only feeds with processingStatus=IN_QUEUE can be cancelled. Cancelled feeds are returned in subsequent calls to the getFeed and getFeeds operations. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags feeds
   * @name CancelFeed
   * @request DELETE:/feeds/2021-06-30/feeds/{feedId}
   */
  cancelFeed = (feedId: string, params: RequestParams = {}) =>
    this.http.request<void, ErrorList>({
      path: `/feeds/2021-06-30/feeds/${feedId}`,
      method: "DELETE",
      code: "delete:/feeds/2021-06-30/feeds/{feedId}",
      ...params,
    });
  /**
   * @description Returns feed details (including the resultDocumentId, if available) for the feed that you specify. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2.0 | 15 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags feeds
   * @name GetFeed
   * @request GET:/feeds/2021-06-30/feeds/{feedId}
   */
  getFeed = (feedId: string, params: RequestParams = {}) =>
    this.http.request<Feed, ErrorList>({
      path: `/feeds/2021-06-30/feeds/${feedId}`,
      method: "GET",
      code: "get:/feeds/2021-06-30/feeds/{feedId}",
      format: "json",
      ...params,
    });
  /**
   * @description Creates a feed document for the feed type that you specify. This operation returns a presigned URL for uploading the feed document contents. It also returns a feedDocumentId value that you can pass in with a subsequent call to the createFeed operation. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.0083 | 15 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags feeds
   * @name CreateFeedDocument
   * @request POST:/feeds/2021-06-30/documents
   */
  createFeedDocument = (
    body: CreateFeedDocumentSpecification,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateFeedDocumentResponse, ErrorList>({
      path: `/feeds/2021-06-30/documents`,
      method: "POST",
      code: "post:/feeds/2021-06-30/documents",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns the information required for retrieving a feed document's contents. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags feeds
   * @name GetFeedDocument
   * @request GET:/feeds/2021-06-30/documents/{feedDocumentId}
   */
  getFeedDocument = (feedDocumentId: string, params: RequestParams = {}) =>
    this.http.request<FeedDocument, ErrorList>({
      path: `/feeds/2021-06-30/documents/${feedDocumentId}`,
      method: "GET",
      code: "get:/feeds/2021-06-30/documents/{feedDocumentId}",
      format: "json",
      ...params,
    });
}
