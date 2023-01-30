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

/** A list of restrictions for the specified Amazon catalog item. */
export interface RestrictionList {
  restrictions: Restriction[];
}

/** A listing restriction, optionally qualified by a condition, with a list of reasons for the restriction. */
export interface Restriction {
  /** A marketplace identifier. Identifies the Amazon marketplace where the restriction is enforced. */
  marketplaceId: string;
  /** The condition that applies to the restriction. */
  conditionType?:
    | "new_new"
    | "new_open_box"
    | "new_oem"
    | "refurbished_refurbished"
    | "used_like_new"
    | "used_very_good"
    | "used_good"
    | "used_acceptable"
    | "collectible_like_new"
    | "collectible_very_good"
    | "collectible_good"
    | "collectible_acceptable"
    | "club_club";
  /** A list of reasons for the restriction. */
  reasons?: Reason[];
}

/** A reason for the restriction, including path forward links that may allow Selling Partners to remove the restriction, if available. */
export interface Reason {
  /** A message describing the reason for the restriction. */
  message: string;
  /** A code indicating why the listing is restricted. */
  reasonCode?: "APPROVAL_REQUIRED" | "ASIN_NOT_FOUND" | "NOT_ELIGIBLE";
  /** A list of path forward links that may allow Selling Partners to remove the restriction. */
  links?: Link[];
}

/** A link to resources related to a listing restriction. */
export interface Link {
  /**
   * The URI of the related resource.
   * @format uri
   */
  resource: string;
  /** The HTTP verb used to interact with the related resource. */
  verb: "GET";
  /** The title of the related resource. */
  title?: string;
  /** The media type of the related resource. */
  type?: string;
}

/** A list of error responses returned when a request is unsuccessful. */
export type ErrorList = Error[];

/** Error response returned when the request is unsuccessful. */
export interface Error {
  /** An error code that identifies the type of error that occurred. */
  code: string;
  /** A message that describes the error condition. */
  message: string;
  /** Additional details that can help the caller understand or fix the issue. */
  details?: string;
}
