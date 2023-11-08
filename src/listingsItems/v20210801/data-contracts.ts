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

/** A listings item. */
export interface Item {
  /** A selling partner provided identifier for an Amazon listing. */
  sku: string;
  /** Summary details of a listings item. */
  summaries?: ItemSummaries;
  /** JSON object containing structured listings item attribute data keyed by attribute name. */
  attributes?: ItemAttributes;
  /** Issues associated with the listings item. */
  issues?: ItemIssues;
  /** Offer details for the listings item. */
  offers?: ItemOffers;
  /** Fulfillment availability for the listings item. */
  fulfillmentAvailability?: FulfillmentAvailability[];
  /** Vendor procurement information for the listings item. */
  procurement?: ItemProcurement[];
}

/** Summary details of a listings item. */
export type ItemSummaries = ItemSummaryByMarketplace[];

/** Summary details of a listings item for an Amazon marketplace. */
export interface ItemSummaryByMarketplace {
  /** A marketplace identifier. Identifies the Amazon marketplace for the listings item. */
  marketplaceId: string;
  /** Amazon Standard Identification Number (ASIN) of the listings item. */
  asin: string;
  /** The Amazon product type of the listings item. */
  productType: string;
  /** Identifies the condition of the listings item. */
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
  /** Statuses that apply to the listings item. */
  status: ("BUYABLE" | "DISCOVERABLE")[];
  /** Fulfillment network stock keeping unit is an identifier used by Amazon fulfillment centers to identify each unique item. */
  fnSku?: string;
  /** Name, or title, associated with an Amazon catalog item. */
  itemName: string;
  /**
   * Date the listings item was created, in ISO 8601 format.
   * @format date-time
   */
  createdDate: string;
  /**
   * Date the listings item was last updated, in ISO 8601 format.
   * @format date-time
   */
  lastUpdatedDate: string;
  /** Main image for the listings item. */
  mainImage?: ItemImage;
}

/** Image for the listings item. */
export interface ItemImage {
  /** Link, or URL, for the image. */
  link: string;
  /** Height of the image in pixels. */
  height: number;
  /** Width of the image in pixels. */
  width: number;
}

/** JSON object containing structured listings item attribute data keyed by attribute name. */
export type ItemAttributes = Record<string, any>;

/** Issues associated with the listings item. */
export type ItemIssues = Issue[];

/** An issue with a listings item. */
export interface Issue {
  /** An issue code that identifies the type of issue. */
  code: string;
  /** A message that describes the issue. */
  message: string;
  /** The severity of the issue. */
  severity: "ERROR" | "WARNING" | "INFO";
  /** Names of the attributes associated with the issue, if applicable. */
  attributeNames?: string[];
}

/** Offer details for the listings item. */
export type ItemOffers = ItemOfferByMarketplace[];

/** Offer details of a listings item for an Amazon marketplace. */
export interface ItemOfferByMarketplace {
  /** Amazon marketplace identifier. */
  marketplaceId: string;
  /** Type of offer for the listings item. */
  offerType: "B2C" | "B2B";
  /** Purchase price of the listings item */
  price: Money;
  /** The number of Amazon Points offered with the purchase of an item, and their monetary value. Note that the Points element is only returned in Japan (JP). */
  points?: Points;
}

/** Vendor procurement information for the listings item. */
export interface ItemProcurement {
  /** The price (numeric value) that you want Amazon to pay you for this product. */
  costPrice: Money;
}

/** Fulfillment availability details for the listings item. */
export interface FulfillmentAvailability {
  /** Designates which fulfillment network will be used. */
  fulfillmentChannelCode: string;
  /**
   * The quantity of the item you are making available for sale.
   * @min 0
   */
  quantity?: number;
}

/** The currency type and the amount. */
export interface Money {
  /** Three-digit currency code. In ISO 4217 format. */
  currencyCode: string;
  /** The currency amount. */
  amount: Decimal;
}

/** A decimal number with no loss of precision. Useful when precision loss is unnaceptable, as with currencies. Follows RFC7159 for number representation. */
export type Decimal = string;

/** The number of Amazon Points offered with the purchase of an item, and their monetary value. Note that the Points element is only returned in Japan (JP). */
export interface Points {
  pointsNumber: number;
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
