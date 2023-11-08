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

/** The response schema for the createUploadDestination operation. */
export interface CreateUploadDestinationResponse {
  /** Information about an upload destination. */
  payload?: UploadDestination;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** Information about an upload destination. */
export interface UploadDestination {
  /** The unique identifier for the upload destination. */
  uploadDestinationId?: string;
  /** The URL for the upload destination. */
  url?: string;
  /** The headers to include in the upload request. */
  headers?: object;
}

/** A list of error responses returned when a request is unsuccessful. */
export type ErrorList = Error[];

/** Error response returned when the request is unsuccessful. */
export interface Error {
  /** An error code that identifies the type of error that occurred. */
  code: string;
  /** A message that describes the error condition in a human-readable form. */
  message: string;
  /** Additional details that can help the caller understand or fix the issue. */
  details?: string;
}
