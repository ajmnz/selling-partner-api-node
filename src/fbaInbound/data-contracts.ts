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

/** The response schema for the getItemEligibilityPreview operation. */
export interface GetItemEligibilityPreviewResponse {
  /** The payload for the getItemEligibilityPreview operation. */
  payload?: ItemEligibilityPreview;
  /** An unexpected condition occurred during the GetItemEligibilityPreview operation. */
  errors?: ErrorList;
}

/** The response object which contains the ASIN, marketplaceId if required, eligibility program, the eligibility status (boolean), and a list of ineligibility reason codes. */
export interface ItemEligibilityPreview {
  /** The ASIN for which eligibility was determined. */
  asin: string;
  /** The marketplace for which eligibility was determined. */
  marketplaceId?: string;
  /** The program for which eligibility was determined. */
  program: "INBOUND" | "COMMINGLING";
  /** Indicates if the item is eligible for the program. */
  isEligibleForProgram: boolean;
  /** Potential Ineligibility Reason Codes. */
  ineligibilityReasonList?: (
    | "FBA_INB_0004"
    | "FBA_INB_0006"
    | "FBA_INB_0007"
    | "FBA_INB_0008"
    | "FBA_INB_0009"
    | "FBA_INB_0010"
    | "FBA_INB_0011"
    | "FBA_INB_0012"
    | "FBA_INB_0013"
    | "FBA_INB_0014"
    | "FBA_INB_0015"
    | "FBA_INB_0016"
    | "FBA_INB_0017"
    | "FBA_INB_0018"
    | "FBA_INB_0019"
    | "FBA_INB_0034"
    | "FBA_INB_0035"
    | "FBA_INB_0036"
    | "FBA_INB_0037"
    | "FBA_INB_0038"
    | "FBA_INB_0050"
    | "FBA_INB_0051"
    | "FBA_INB_0053"
    | "FBA_INB_0055"
    | "FBA_INB_0056"
    | "FBA_INB_0059"
    | "FBA_INB_0065"
    | "FBA_INB_0066"
    | "FBA_INB_0067"
    | "FBA_INB_0068"
    | "FBA_INB_0095"
    | "FBA_INB_0097"
    | "FBA_INB_0098"
    | "FBA_INB_0099"
    | "FBA_INB_0100"
    | "FBA_INB_0103"
    | "FBA_INB_0104"
    | "FBA_INB_0197"
    | "UNKNOWN_INB_ERROR_CODE"
  )[];
}

/** A list of error responses returned when a request is unsuccessful. */
export type ErrorList = Error[];

/** Error response returned when the request is unsuccessful. */
export interface Error {
  /** An error code that identifies the type of error that occurred. */
  code: string;
  /** A message that describes the error condition in a human-readable form. */
  message?: string;
  /** Additional information that can help the caller understand or fix the issue. */
  details?: string;
}
