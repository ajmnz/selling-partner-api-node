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

/** A marketplace identifier. */
export type MarketplaceId = string;

/** Identifies an item in the given marketplace. SellerSKU is qualified by the seller's SellerId, which is included with every operation that you submit. */
export type SellerSKU = string;

/** Error response returned when the request is unsuccessful. */
export interface Error {
  /** An error code that identifies the type of error that occurred. */
  code: string;
  /** A message that describes the error condition in a human-readable form. */
  message: string;
  /** Additional information that can help the caller understand or fix the issue. */
  details?: string;
}

/** A list of error responses returned when a request is unsuccessful. */
export interface ErrorList {
  errors?: Error[];
}

/** The Small and Light enrollment status of the item. */
export enum SmallAndLightEnrollmentStatus {
  ENROLLED = "ENROLLED",
  NOT_ENROLLED = "NOT_ENROLLED",
}

/** The Small and Light eligibility status of the item. */
export enum SmallAndLightEligibilityStatus {
  ELIGIBLE = "ELIGIBLE",
  NOT_ELIGIBLE = "NOT_ELIGIBLE",
}

/** The Small and Light enrollment status of the item indicated by the specified seller SKU. */
export interface SmallAndLightEnrollment {
  /** A marketplace identifier. */
  marketplaceId: MarketplaceId;
  /** Identifies an item in the given marketplace. SellerSKU is qualified by the seller's SellerId, which is included with every operation that you submit. */
  sellerSKU: SellerSKU;
  /** The Small and Light enrollment status of the item. */
  status: SmallAndLightEnrollmentStatus;
}

/** The Small and Light eligibility status of the item indicated by the specified seller SKU. */
export interface SmallAndLightEligibility {
  /** A marketplace identifier. */
  marketplaceId: MarketplaceId;
  /** Identifies an item in the given marketplace. SellerSKU is qualified by the seller's SellerId, which is included with every operation that you submit. */
  sellerSKU: SellerSKU;
  /** The Small and Light eligibility status of the item. */
  status: SmallAndLightEligibilityStatus;
}

/** Request schema for submitting items for which to retrieve fee estimates. */
export interface SmallAndLightFeePreviewRequest {
  /** A marketplace identifier. */
  marketplaceId: MarketplaceId;
  /**
   * A list of items for which to retrieve fee estimates (limit: 25).
   * @maxItems 25
   */
  items: Item[];
}

export interface SmallAndLightFeePreviews {
  /** A list of fee estimates for the requested items. The order of the fee estimates will follow the same order as the items in the request, with duplicates removed. */
  data?: FeePreview[];
}

/** An item to be sold. */
export interface Item {
  /** The Amazon Standard Identification Number (ASIN) value used to identify the item. */
  asin: string;
  /** The price that the seller plans to charge for the item. */
  price: MoneyType;
}

/** The fee estimate for a specific item. */
export interface FeePreview {
  /** The Amazon Standard Identification Number (ASIN) value used to identify the item. */
  asin?: string;
  /** The price that the seller plans to charge for the item. */
  price?: MoneyType;
  /** A list of the Small and Light fees for the item. */
  feeBreakdown?: FeeLineItem[];
  /** The total fees charged if the item participated in the Small and Light program. */
  totalFees?: MoneyType;
  /** One or more unexpected errors occurred during the getSmallAndLightFeePreview operation. */
  errors?: Error[];
}

/** Fee details for a specific fee. */
export interface FeeLineItem {
  /** The type of fee charged to the seller. */
  feeType:
    | "FBAWeightBasedFee"
    | "FBAPerOrderFulfillmentFee"
    | "FBAPerUnitFulfillmentFee"
    | "Commission";
  /** Amount charged to the seller for the specific fee type. */
  feeCharge: MoneyType;
}

export interface MoneyType {
  /** The currency code in ISO 4217 format. */
  currencyCode?: string;
  /** The monetary value. */
  amount?: number;
}
