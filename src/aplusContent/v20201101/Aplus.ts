import type {
  ErrorList,
  GetContentDocumentResponse,
  ListContentDocumentAsinRelationsResponse,
  PostContentDocumentApprovalSubmissionResponse,
  PostContentDocumentAsinRelationsRequest,
  PostContentDocumentAsinRelationsResponse,
  PostContentDocumentRequest,
  PostContentDocumentResponse,
  PostContentDocumentSuspendSubmissionResponse,
  SearchContentDocumentsResponse,
  SearchContentPublishRecordsResponse,
  ValidateContentDocumentAsinRelationsResponse,
} from "./data-contracts";
import type { HttpClient, RequestParams } from "../../http-client";
import { ContentType } from "../../http-client";

export class Aplus<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns a list of all A+ Content documents assigned to a selling partner. This operation returns only the metadata of the A+ Content documents. Call the getContentDocument operation to get the actual contents of the A+ Content documents. **Usage Plans:** | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable | The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags aplusContent
   * @name SearchContentDocuments
   * @request GET:/aplus/2020-11-01/contentDocuments
   */
  searchContentDocuments = (
    query: {
      /**
       * The identifier for the marketplace where the A+ Content is published.
       * @minLength 1
       */
      marketplaceId: string;
      /**
       * A page token from the nextPageToken response element returned by your previous call to this operation. nextPageToken is returned when the results of a call exceed the page size. To get the next page of results, call the operation and include pageToken as the only parameter. Specifying pageToken with any other parameter will cause the request to fail. When no nextPageToken value is returned there are no more pages to return. A pageToken value is not usable across different operations.
       * @minLength 1
       */
      pageToken?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<SearchContentDocumentsResponse, ErrorList>({
      path: `/aplus/2020-11-01/contentDocuments`,
      method: "GET",
      code: "get:/aplus/2020-11-01/contentDocuments",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a new A+ Content document. **Usage Plans:** | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable | The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags aplusContent
   * @name CreateContentDocument
   * @request POST:/aplus/2020-11-01/contentDocuments
   */
  createContentDocument = (
    query: {
      /**
       * The identifier for the marketplace where the A+ Content is published.
       * @minLength 1
       */
      marketplaceId: string;
    },
    postContentDocumentRequest: PostContentDocumentRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<PostContentDocumentResponse, ErrorList>({
      path: `/aplus/2020-11-01/contentDocuments`,
      method: "POST",
      code: "post:/aplus/2020-11-01/contentDocuments",
      query,
      body: postContentDocumentRequest,
      format: "json",
      ...params,
    });
  /**
   * @description Returns an A+ Content document, if available. **Usage Plans:** | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable | The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags aplusContent
   * @name GetContentDocument
   * @request GET:/aplus/2020-11-01/contentDocuments/{contentReferenceKey}
   */
  getContentDocument = (
    contentReferenceKey: string,
    query: {
      /**
       * The identifier for the marketplace where the A+ Content is published.
       * @minLength 1
       */
      marketplaceId: string;
      /**
       * The set of A+ Content data types to include in the response.
       * @minItems 1
       * @uniqueItems true
       */
      includedDataSet: ("CONTENTS" | "METADATA")[];
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetContentDocumentResponse, ErrorList>({
      path: `/aplus/2020-11-01/contentDocuments/${contentReferenceKey}`,
      method: "GET",
      code: "get:/aplus/2020-11-01/contentDocuments/{contentReferenceKey}",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Updates an existing A+ Content document. **Usage Plans:** | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable | The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags aplusContent
   * @name UpdateContentDocument
   * @request POST:/aplus/2020-11-01/contentDocuments/{contentReferenceKey}
   */
  updateContentDocument = (
    contentReferenceKey: string,
    query: {
      /**
       * The identifier for the marketplace where the A+ Content is published.
       * @minLength 1
       */
      marketplaceId: string;
    },
    postContentDocumentRequest: PostContentDocumentRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<PostContentDocumentResponse, ErrorList>({
      path: `/aplus/2020-11-01/contentDocuments/${contentReferenceKey}`,
      method: "POST",
      code: "post:/aplus/2020-11-01/contentDocuments/{contentReferenceKey}",
      query,
      body: postContentDocumentRequest,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a list of ASINs related to the specified A+ Content document, if available. If you do not include the asinSet parameter, the operation returns all ASINs related to the content document. **Usage Plans:** | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable | The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags aplusContent
   * @name ListContentDocumentAsinRelations
   * @request GET:/aplus/2020-11-01/contentDocuments/{contentReferenceKey}/asins
   */
  listContentDocumentAsinRelations = (
    contentReferenceKey: string,
    query: {
      /**
       * The identifier for the marketplace where the A+ Content is published.
       * @minLength 1
       */
      marketplaceId: string;
      /**
       * The set of A+ Content data types to include in the response. If you do not include this parameter, the operation returns the related ASINs without metadata.
       * @minItems 0
       * @uniqueItems true
       */
      includedDataSet?: "METADATA"[];
      /**
       * The set of ASINs.
       * @uniqueItems true
       */
      asinSet?: string[];
      /**
       * A page token from the nextPageToken response element returned by your previous call to this operation. nextPageToken is returned when the results of a call exceed the page size. To get the next page of results, call the operation and include pageToken as the only parameter. Specifying pageToken with any other parameter will cause the request to fail. When no nextPageToken value is returned there are no more pages to return. A pageToken value is not usable across different operations.
       * @minLength 1
       */
      pageToken?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<ListContentDocumentAsinRelationsResponse, ErrorList>({
      path: `/aplus/2020-11-01/contentDocuments/${contentReferenceKey}/asins`,
      method: "GET",
      code: "get:/aplus/2020-11-01/contentDocuments/{contentReferenceKey}/asins",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Replaces all ASINs related to the specified A+ Content document, if available. This may add or remove ASINs, depending on the current set of related ASINs. Removing an ASIN has the side effect of suspending the content document from that ASIN. **Usage Plans:** | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable | The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags aplusContent
   * @name PostContentDocumentAsinRelations
   * @request POST:/aplus/2020-11-01/contentDocuments/{contentReferenceKey}/asins
   */
  postContentDocumentAsinRelations = (
    contentReferenceKey: string,
    query: {
      /**
       * The identifier for the marketplace where the A+ Content is published.
       * @minLength 1
       */
      marketplaceId: string;
    },
    postContentDocumentAsinRelationsRequest: PostContentDocumentAsinRelationsRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<PostContentDocumentAsinRelationsResponse, ErrorList>({
      path: `/aplus/2020-11-01/contentDocuments/${contentReferenceKey}/asins`,
      method: "POST",
      code: "post:/aplus/2020-11-01/contentDocuments/{contentReferenceKey}/asins",
      query,
      body: postContentDocumentAsinRelationsRequest,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Checks if the A+ Content document is valid for use on a set of ASINs. **Usage Plans:** | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable | The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags aplusContent
   * @name ValidateContentDocumentAsinRelations
   * @request POST:/aplus/2020-11-01/contentAsinValidations
   */
  validateContentDocumentAsinRelations = (
    query: {
      /**
       * The identifier for the marketplace where the A+ Content is published.
       * @minLength 1
       */
      marketplaceId: string;
      /**
       * The set of ASINs.
       * @uniqueItems true
       */
      asinSet?: string[];
    },
    postContentDocumentRequest: PostContentDocumentRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<ValidateContentDocumentAsinRelationsResponse, ErrorList>({
      path: `/aplus/2020-11-01/contentAsinValidations`,
      method: "POST",
      code: "post:/aplus/2020-11-01/contentAsinValidations",
      query,
      body: postContentDocumentRequest,
      format: "json",
      ...params,
    });
  /**
   * @description Searches for A+ Content publishing records, if available. **Usage Plans:** | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable | The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags aplusContent
   * @name SearchContentPublishRecords
   * @request GET:/aplus/2020-11-01/contentPublishRecords
   */
  searchContentPublishRecords = (
    query: {
      /**
       * The identifier for the marketplace where the A+ Content is published.
       * @minLength 1
       */
      marketplaceId: string;
      /**
       * The Amazon Standard Identification Number (ASIN).
       * @minLength 10
       */
      asin: string;
      /**
       * A page token from the nextPageToken response element returned by your previous call to this operation. nextPageToken is returned when the results of a call exceed the page size. To get the next page of results, call the operation and include pageToken as the only parameter. Specifying pageToken with any other parameter will cause the request to fail. When no nextPageToken value is returned there are no more pages to return. A pageToken value is not usable across different operations.
       * @minLength 1
       */
      pageToken?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<SearchContentPublishRecordsResponse, ErrorList>({
      path: `/aplus/2020-11-01/contentPublishRecords`,
      method: "GET",
      code: "get:/aplus/2020-11-01/contentPublishRecords",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Submits an A+ Content document for review, approval, and publishing. **Usage Plans:** | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable | The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags aplusContent
   * @name PostContentDocumentApprovalSubmission
   * @request POST:/aplus/2020-11-01/contentDocuments/{contentReferenceKey}/approvalSubmissions
   */
  postContentDocumentApprovalSubmission = (
    contentReferenceKey: string,
    query: {
      /**
       * The identifier for the marketplace where the A+ Content is published.
       * @minLength 1
       */
      marketplaceId: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<PostContentDocumentApprovalSubmissionResponse, ErrorList>({
      path: `/aplus/2020-11-01/contentDocuments/${contentReferenceKey}/approvalSubmissions`,
      method: "POST",
      code: "post:/aplus/2020-11-01/contentDocuments/{contentReferenceKey}/approvalSubmissions",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Submits a request to suspend visible A+ Content. This neither deletes the content document nor the ASIN relations. **Usage Plans:** | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable | The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags aplusContent
   * @name PostContentDocumentSuspendSubmission
   * @request POST:/aplus/2020-11-01/contentDocuments/{contentReferenceKey}/suspendSubmissions
   */
  postContentDocumentSuspendSubmission = (
    contentReferenceKey: string,
    query: {
      /**
       * The identifier for the marketplace where the A+ Content is published.
       * @minLength 1
       */
      marketplaceId: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<PostContentDocumentSuspendSubmissionResponse, ErrorList>({
      path: `/aplus/2020-11-01/contentDocuments/${contentReferenceKey}/suspendSubmissions`,
      method: "POST",
      code: "post:/aplus/2020-11-01/contentDocuments/{contentReferenceKey}/suspendSubmissions",
      query,
      format: "json",
      ...params,
    });
}
