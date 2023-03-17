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

/** Error response returned when the request is unsuccessful. */
export interface Error {
  /** An error code that identifies the type of error that occurred. */
  code: string;
  /** A message that describes the error condition. */
  message: string;
  /** Additional details that can help the caller understand or fix the issue. */
  details?: string;
}

/** A list of error responses returned when a request is unsuccessful. */
export interface ErrorList {
  errors: Error[];
}

/** An issue with a listings item. */
export interface Issue {
  /** An issue code that identifies the type of issue. */
  code: string;
  /** A message that describes the issue. */
  message: string;
  /** The severity of the issue. */
  severity: "ERROR" | "WARNING" | "INFO";
  /** Name of the attribute associated with the issue, if applicable. */
  attributeName?: string;
}

/** Individual JSON Patch operation for an HTTP PATCH request. */
export interface PatchOperation {
  /** Type of JSON Patch operation. Supported JSON Patch operations include add, replace, and delete. See <https://tools.ietf.org/html/rfc6902>. */
  op: "add" | "replace" | "delete";
  /** JSON Pointer path of the element to patch. See <https://tools.ietf.org/html/rfc6902>. */
  path: string;
  /** JSON value to add, replace, or delete. */
  value?: Record<string, any>[];
}

/** The request body schema for the patchListingsItem operation. */
export interface ListingsItemPatchRequest {
  /** The Amazon product type of the listings item. */
  productType: string;
  /**
   * One or more JSON Patch operations to perform on the listings item.
   * @minItems 1
   */
  patches: PatchOperation[];
}

/** The request body schema for the putListingsItem operation. */
export interface ListingsItemPutRequest {
  /** The Amazon product type of the listings item. */
  productType: string;
  /** The name of the requirements set for the provided data. */
  requirements?: "LISTING" | "LISTING_PRODUCT_ONLY" | "LISTING_OFFER_ONLY";
  /** JSON object containing structured listings item attribute data keyed by attribute name. */
  attributes: Record<string, any>;
}

/** Response containing the results of a submission to the Selling Partner API for Listings Items. */
export interface ListingsItemSubmissionResponse {
  /** A selling partner provided identifier for an Amazon listing. */
  sku: string;
  /** The status of the listings item submission. */
  status: "ACCEPTED" | "INVALID";
  /** The unique identifier of the listings item submission. */
  submissionId: string;
  /** Listings item issues related to the listings item submission. */
  issues?: Issue[];
}
