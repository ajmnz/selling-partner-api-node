import type {
  CancelFeedResponse,
  CreateFeedDocumentResponse,
  CreateFeedDocumentSpecification,
  CreateFeedResponse,
  CreateFeedSpecification,
  GetFeedDocumentResponse,
  GetFeedResponse,
  GetFeedsResponse,
} from "./data-contracts";
import type { HttpClient, RequestParams } from "../../http-client";
import { ContentType } from "../../http-client";

export class Feeds<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Effective June 27, 2023, the `getFeeds` operation will no longer be available in the Selling Partner API for Feeds v2020-09-04 and all calls to it will fail. Integrations that rely on this operation should migrate to [Feeds v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/feeds-api-v2021-06-30-reference) to avoid service disruption.
   *
   * @tags feeds
   * @name GetFeeds
   * @request GET:/feeds/2020-09-04/feeds
   * @deprecated
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
    this.http.request<GetFeedsResponse, GetFeedsResponse>({
      path: `/feeds/2020-09-04/feeds`,
      method: "GET",
      code: "get:/feeds/2020-09-04/feeds",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Effective June 27, 2023, the `createFeed` operation will no longer be available in the Selling Partner API for Feeds v2020-09-04 and all calls to it will fail. Integrations that rely on this operation should migrate to [Feeds v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/feeds-api-v2021-06-30-reference) to avoid service disruption.
   *
   * @tags feeds
   * @name CreateFeed
   * @request POST:/feeds/2020-09-04/feeds
   * @deprecated
   */
  createFeed = (body: CreateFeedSpecification, params: RequestParams = {}) =>
    this.http.request<CreateFeedResponse, CreateFeedResponse>({
      path: `/feeds/2020-09-04/feeds`,
      method: "POST",
      code: "post:/feeds/2020-09-04/feeds",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Effective June 27, 2023, the `getFeed` operation will no longer be available in the Selling Partner API for Feeds v2020-09-04 and all calls to it will fail. Integrations that rely on this operation should migrate to [Feeds v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/feeds-api-v2021-06-30-reference) to avoid service disruption.
   *
   * @tags feeds
   * @name GetFeed
   * @request GET:/feeds/2020-09-04/feeds/{feedId}
   * @deprecated
   */
  getFeed = (feedId: string, params: RequestParams = {}) =>
    this.http.request<GetFeedResponse, GetFeedResponse>({
      path: `/feeds/2020-09-04/feeds/${feedId}`,
      method: "GET",
      code: "get:/feeds/2020-09-04/feeds/{feedId}",
      format: "json",
      ...params,
    });
  /**
   * @description Effective June 27, 2023, the `cancelFeed` operation will no longer be available in the Selling Partner API for Feeds v2020-09-04 and all calls to it will fail. Integrations that rely on this operation should migrate to [Feeds v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/feeds-api-v2021-06-30-reference) to avoid service disruption.
   *
   * @tags feeds
   * @name CancelFeed
   * @request DELETE:/feeds/2020-09-04/feeds/{feedId}
   * @deprecated
   */
  cancelFeed = (feedId: string, params: RequestParams = {}) =>
    this.http.request<CancelFeedResponse, CancelFeedResponse>({
      path: `/feeds/2020-09-04/feeds/${feedId}`,
      method: "DELETE",
      code: "delete:/feeds/2020-09-04/feeds/{feedId}",
      format: "json",
      ...params,
    });
  /**
   * @description Effective June 27, 2023, the `createFeedDocument` operation will no longer be available in the Selling Partner API for Feeds v2020-09-04 and all calls to it will fail. Integrations that rely on this operation should migrate to [Feeds v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/feeds-api-v2021-06-30-reference) to avoid service disruption.
   *
   * @tags feeds
   * @name CreateFeedDocument
   * @request POST:/feeds/2020-09-04/documents
   * @deprecated
   */
  createFeedDocument = (
    body: CreateFeedDocumentSpecification,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateFeedDocumentResponse, CreateFeedDocumentResponse>({
      path: `/feeds/2020-09-04/documents`,
      method: "POST",
      code: "post:/feeds/2020-09-04/documents",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Effective June 27, 2023, the `getFeedDocument` operation will no longer be available in the Selling Partner API for Feeds v2020-09-04 and all calls to it will fail. Integrations that rely on this operation should migrate to [Feeds v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/feeds-api-v2021-06-30-reference) to avoid service disruption.
   *
   * @tags feeds
   * @name GetFeedDocument
   * @request GET:/feeds/2020-09-04/documents/{feedDocumentId}
   * @deprecated
   */
  getFeedDocument = (feedDocumentId: string, params: RequestParams = {}) =>
    this.http.request<GetFeedDocumentResponse, GetFeedDocumentResponse>({
      path: `/feeds/2020-09-04/documents/${feedDocumentId}`,
      method: "GET",
      code: "get:/feeds/2020-09-04/documents/{feedDocumentId}",
      format: "json",
      ...params,
    });
}
