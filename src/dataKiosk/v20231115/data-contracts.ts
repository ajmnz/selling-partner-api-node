/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** A list of error responses returned when a request is unsuccessful. */
export interface ErrorList {
  errors: Error[];
}

/** Error response returned when the request is unsuccessful. */
export interface Error {
  /** An error code that identifies the type of error that occurred. */
  code: string;
  /** A message that describes the error condition in a human-readable form. */
  message: string;
  /** Additional details that can help the caller understand or fix the issue. */
  details?: string;
}

/** Detailed information about the query. */
export interface Query {
  /** The query identifier. This identifier is unique only in combination with a selling partner account ID. */
  queryId: string;
  /** The submitted query. */
  query: string;
  /**
   * The date and time when the query was created, in ISO 8601 date time format.
   * @format date-time
   */
  createdTime: string;
  /** The processing status of the query. */
  processingStatus: "CANCELLED" | "DONE" | "FATAL" | "IN_PROGRESS" | "IN_QUEUE";
  /**
   * The date and time when the query processing started, in ISO 8601 date time format.
   * @format date-time
   */
  processingStartTime?: string;
  /**
   * The date and time when the query processing completed, in ISO 8601 date time format.
   * @format date-time
   */
  processingEndTime?: string;
  /** The data document identifier. This identifier is only present when there is data available as a result of the query. This identifier is unique only in combination with a selling partner account ID. Pass this identifier into the `getDocument` operation to get the information required to retrieve the data document's contents. */
  dataDocumentId?: string;
  /** The error document identifier. This identifier is only present when an error occurs during query processing. This identifier is unique only in combination with a selling partner account ID. Pass this identifier into the `getDocument` operation to get the information required to retrieve the error document's contents. */
  errorDocumentId?: string;
  /** When a query produces results that are not included in the data document, pagination occurs. This means the results are divided into pages. To retrieve the next page, you must pass a `CreateQuerySpecification` object with `paginationToken` set to this object's `nextToken` and with `query` set to this object's `query` in the subsequent `createQuery` request. When there are no more pages to fetch, the `nextToken` field will be absent. */
  pagination?: {
    /** A token that can be used to fetch the next page of results. */
    nextToken?: string;
  };
}

/** A list of queries. */
export type QueryList = Query[];

/** Information required to create the query. */
export interface CreateQuerySpecification {
  /** The GraphQL query to submit. A query must be at most 8000 characters after unnecessary whitespace is removed. */
  query: string;
  /** A token to fetch a certain page of query results when there are multiple pages of query results available. The value of this token must be fetched from the `pagination.nextToken` field of the `Query` object, and the `query` field for this object must also be set to the `query` field of the same `Query` object. A `Query` object can be retrieved from either the `getQueries` or `getQuery` operation. In the absence of this token value, the first page of query results will be requested. */
  paginationToken?: string;
}

/** The response for the `createQuery` operation. */
export interface CreateQueryResponse {
  /** The identifier for the query. This identifier is unique only in combination with a selling partner account ID. */
  queryId: string;
}

/** The response for the `getQueries` operation. */
export interface GetQueriesResponse {
  /** The Data Kiosk queries. */
  queries: QueryList;
  /** When a request has results that are not included in this response, pagination occurs. This means the results are divided into pages. To retrieve the next page, you must pass the `nextToken` as the `paginationToken` query parameter in the subsequent `getQueries` request. All other parameters must be provided with the same values that were provided with the request that generated this token, with the exception of `pageSize` which can be modified between calls to `getQueries`. When there are no more pages to fetch, the `nextToken` field will be absent. */
  pagination?: {
    /** A token that can be used to fetch the next page of results. */
    nextToken?: string;
  };
}

/** The response for the `getDocument` operation. */
export interface GetDocumentResponse {
  /** The identifier for the Data Kiosk document. This identifier is unique only in combination with a selling partner account ID. */
  documentId: string;
  /**
   * A presigned URL that can be used to retrieve the Data Kiosk document. This URL expires after 5 minutes. If the Data Kiosk document is compressed, the `Content-Encoding` header will indicate the compression algorithm.
   *
   * **Note:** Most HTTP clients are capable of automatically decompressing downloaded files based on the `Content-Encoding` header.
   */
  documentUrl: string;
}
