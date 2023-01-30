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

/** An error response returned when the request is unsuccessful. */
export interface Error {
  /** An error code that identifies the type of error that occurred. */
  code: string;
  /** A message that describes the error condition in a human-readable form. */
  message: string;
  /** Additional details that can help the caller understand or fix the issue. */
  details?: string;
}

/** A list of error responses returned when a request is unsuccessful. */
export interface ErrorList {
  errors: Error[];
}

/** Response schema. */
export interface CreateFeedResponse {
  /** The identifier for the feed. This identifier is unique only in combination with a seller ID. */
  feedId: string;
}

/** Detailed information about the feed. */
export interface Feed {
  /** The identifier for the feed. This identifier is unique only in combination with a seller ID. */
  feedId: string;
  /** The feed type. */
  feedType: string;
  /** A list of identifiers for the marketplaces that the feed is applied to. */
  marketplaceIds?: string[];
  /**
   * The date and time when the feed was created, in ISO 8601 date time format.
   * @format date-time
   */
  createdTime: string;
  /** The processing status of the feed. */
  processingStatus: "CANCELLED" | "DONE" | "FATAL" | "IN_PROGRESS" | "IN_QUEUE";
  /**
   * The date and time when feed processing started, in ISO 8601 date time format.
   * @format date-time
   */
  processingStartTime?: string;
  /**
   * The date and time when feed processing completed, in ISO 8601 date time format.
   * @format date-time
   */
  processingEndTime?: string;
  /** The identifier for the feed document. This identifier is unique only in combination with a seller ID. */
  resultFeedDocumentId?: string;
}

/** A list of feeds. */
export type FeedList = Feed[];

/** Response schema. */
export interface GetFeedsResponse {
  /** The feeds. */
  feeds: FeedList;
  /** Returned when the number of results exceeds pageSize. To get the next page of results, call the getFeeds operation with this token as the only parameter. */
  nextToken?: string;
}

/** Information required for the feed document. */
export interface FeedDocument {
  /** The identifier for the feed document. This identifier is unique only in combination with a seller ID. */
  feedDocumentId: string;
  /** A presigned URL for the feed document. If `compressionAlgorithm` is not returned, you can download the feed directly from this URL. This URL expires after 5 minutes. */
  url: string;
  /** If the feed document contents have been compressed, the compression algorithm used is returned in this property and you must decompress the feed when you download. Otherwise, you can download the feed directly. Refer to [Step 7. Download the feed processing report](doc:feeds-api-v2021-06-30-use-case-guide#step-7-download-the-feed-processing-report) in the use case guide, where sample code is provided. */
  compressionAlgorithm?: "GZIP";
}

/** Additional options to control the feed. These vary by feed type. */
export type FeedOptions = Record<string, string>;

/** Information required to create the feed. */
export interface CreateFeedSpecification {
  /** The feed type. */
  feedType: string;
  /**
   * A list of identifiers for marketplaces that you want the feed to be applied to.
   * @maxItems 25
   * @minItems 1
   */
  marketplaceIds: string[];
  /** The document identifier returned by the createFeedDocument operation. Upload the feed document contents before calling the createFeed operation. */
  inputFeedDocumentId: string;
  /** Additional options to control the feed. These vary by feed type. */
  feedOptions?: FeedOptions;
}

/** Specifies the content type for the createFeedDocument operation. */
export interface CreateFeedDocumentSpecification {
  /** The content type of the feed. */
  contentType: string;
}

/** Information required to upload a feed document's contents. */
export interface CreateFeedDocumentResponse {
  /** The identifier of the feed document. */
  feedDocumentId: string;
  /** The presigned URL for uploading the feed contents. This URL expires after 5 minutes. */
  url: string;
}
