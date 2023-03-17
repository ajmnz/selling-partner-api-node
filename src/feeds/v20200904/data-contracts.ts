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
export type ErrorList = Error[];

/** Response schema. */
export interface CancelFeedResponse {
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

export interface CreateFeedResult {
  /** The identifier for the feed. This identifier is unique only in combination with a seller ID. */
  feedId: string;
}

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

export type FeedList = Feed[];

/** Response schema. */
export interface GetFeedsResponse {
  payload?: FeedList;
  /** Returned when the number of results exceeds pageSize. To get the next page of results, call the getFeeds operation with this token as the only parameter. */
  nextToken?: string;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** Response schema. */
export interface GetFeedResponse {
  payload?: Feed;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** Encryption details for required client-side encryption and decryption of document contents. */
export interface FeedDocumentEncryptionDetails {
  /** The encryption standard required to encrypt or decrypt the document contents. */
  standard: "AES";
  /** The vector to encrypt or decrypt the document contents using Cipher Block Chaining (CBC). */
  initializationVector: string;
  /** The encryption key used to encrypt or decrypt the document contents. */
  key: string;
}

export interface FeedDocument {
  /** The identifier for the feed document. This identifier is unique only in combination with a seller ID. */
  feedDocumentId: string;
  /** A presigned URL for the feed document. If `compressionAlgorithm` is not returned, you can download the feed directly from this URL. This URL expires after 5 minutes. */
  url: string;
  /** Encryption details for required client-side encryption and decryption of document contents. */
  encryptionDetails: FeedDocumentEncryptionDetails;
  /** If the feed document contents have been compressed, the compression algorithm used is returned in this property and you must decompress the feed when you download. Otherwise, you can download the feed directly. Refer to [Step 6. Download and decrypt the feed processing report](doc:feeds-api-v2020-09-04-use-case-guide#step-6-download-and-decrypt-the-feed-processing-report) in the use case guide, where sample code is provided. */
  compressionAlgorithm?: "GZIP";
}

/** Response schema. */
export interface GetFeedDocumentResponse {
  payload?: FeedDocument;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** Response schema. */
export interface CreateFeedResponse {
  payload?: CreateFeedResult;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** Additional options to control the feed. For feeds that use the feedOptions parameter, you can find the parameter values in the feed description in [feedType values](https://github.com/amzn/selling-partner-api-docs/blob/main/references/feeds-api/feedtype-values.md). */
export type FeedOptions = Record<string, string>;

export interface CreateFeedSpecification {
  /** The feed type. */
  feedType: string;
  /**
   * A list of identifiers for marketplaces that you want the feed to be applied to.
   * @maxItems 25
   * @minItems 1
   */
  marketplaceIds: string[];
  /** The document identifier returned by the createFeedDocument operation. Encrypt and upload the feed document contents before calling the createFeed operation. */
  inputFeedDocumentId: string;
  /** Additional options to control the feed. For feeds that use the feedOptions parameter, you can find the parameter values in the feed description in [feedType values](https://github.com/amzn/selling-partner-api-docs/blob/main/references/feeds-api/feedtype-values.md). */
  feedOptions?: FeedOptions;
}

export interface CreateFeedDocumentSpecification {
  /** The content type of the feed. */
  contentType: string;
}

/** The response for the createFeedDocument operation. */
export interface CreateFeedDocumentResponse {
  /** Information required to encrypt and upload a feed document's contents. */
  payload?: CreateFeedDocumentResult;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** Information required to encrypt and upload a feed document's contents. */
export interface CreateFeedDocumentResult {
  /** The identifier of the feed document. */
  feedDocumentId: string;
  /** The presigned URL for uploading the feed contents. This URL expires after 5 minutes. */
  url: string;
  /** Encryption details for required client-side encryption and decryption of document contents. */
  encryptionDetails: FeedDocumentEncryptionDetails;
}
