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
  /** A JSON object containing structured listings item attribute data keyed by attribute name. */
  attributes?: ItemAttributes;
  /** The issues associated with the listings item. */
  issues?: ItemIssues;
  /** Offer details for the listings item. */
  offers?: ItemOffers;
  /** The fulfillment availability for the listings item. */
  fulfillmentAvailability?: FulfillmentAvailability[];
  /** The vendor procurement information for the listings item. */
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
  /** The fulfillment network stock keeping unit is an identifier used by Amazon fulfillment centers to identify each unique item. */
  fnSku?: string;
  /** The name or title associated with an Amazon catalog item. */
  itemName: string;
  /**
   * The date the listings item was created in ISO 8601 format.
   * @format date-time
   */
  createdDate: string;
  /**
   * The date the listings item was last updated in ISO 8601 format.
   * @format date-time
   */
  lastUpdatedDate: string;
  /** The main image for the listings item. */
  mainImage?: ItemImage;
}

/** The image for the listings item. */
export interface ItemImage {
  /** The link, or URL, to the image. */
  link: string;
  /** The height of the image in pixels. */
  height: number;
  /** The width of the image in pixels. */
  width: number;
}

/** A JSON object containing structured listings item attribute data keyed by attribute name. */
export type ItemAttributes = Record<string, any>;

/** The issues associated with the listings item. */
export type ItemIssues = Issue[];

/** An issue with a listings item. */
export interface Issue {
  /** An issue code that identifies the type of issue. */
  code: string;
  /** A message that describes the issue. */
  message: string;
  /** The severity of the issue. */
  severity: "ERROR" | "WARNING" | "INFO";
  /** The names of the attributes associated with the issue, if applicable. */
  attributeNames?: string[];
  /**
   * List of issue categories.
   *
   * Possible vales:
   *
   * * `INVALID_ATTRIBUTE` - Indicating an invalid attribute in the listing.
   *
   * * `MISSING_ATTRIBUTE` - Highlighting a missing attribute in the listing.
   *
   * * `INVALID_IMAGE` - Signifying an invalid image in the listing.
   *
   * * `MISSING_IMAGE` - Noting the absence of an image in the listing.
   *
   * * `INVALID_PRICE` - Pertaining to issues with the listing's price-related attributes.
   *
   * * `MISSING_PRICE` - Pointing out the absence of a price attribute in the listing.
   *
   * * `DUPLICATE` - Identifying listings with potential duplicate problems, such as this ASIN potentially being a duplicate of another ASIN.
   *
   * * `QUALIFICATION_REQUIRED` - Indicating that the listing requires qualification-related approval.
   * @example ["INVALID_ATTRIBUTE"]
   */
  categories: string[];
  /** This field provides information about the enforcement actions taken by Amazon that affect the publishing or status of a listing. It also includes details about any associated exemptions. */
  enforcements?: IssueEnforcements;
}

/** This field provides information about the enforcement actions taken by Amazon that affect the publishing or status of a listing. It also includes details about any associated exemptions. */
export interface IssueEnforcements {
  /** List of enforcement actions taken by Amazon that affect the publishing or status of a listing. */
  actions: IssueEnforcementAction[];
  /** The "exemption" field serves to convey the status of enforcement actions by Amazon. */
  exemption: IssueExemption;
}

/** The enforcement action taken by Amazon that affect the publishing or status of a listing */
export interface IssueEnforcementAction {
  /**
   * The enforcement action name.
   *
   * Possible values:
   *
   * * `LISTING_SUPPRESSED` - This enforcement takes down the current listing item's buyability.
   *
   * * `ATTRIBUTE_SUPPRESSED` - An attribute's value on the listing item is invalid, which causes it to be rejected by Amazon.
   *
   * * `CATALOG_ITEM_REMOVED` - This catalog item is inactive on Amazon, and all offers against it in the applicable marketplace are non-buyable.
   *
   * * `SEARCH_SUPPRESSED` - This value indicates that the catalog item is hidden from search results.
   * @example "LISTING_SUPPRESSED"
   */
  action: string;
}

/** Conveying the status of the listed enforcement actions and, if applicable, provides information about the exemption's expiry date. */
export interface IssueExemption {
  /** This field indicates the current exemption status for the listed enforcement actions. It can take values such as `EXEMPT`, signifying permanent exemption, `EXEMPT_UNTIL_EXPIRY_DATE` indicating temporary exemption until a specified date, or `NOT_EXEMPT` signifying no exemptions, and enforcement actions were already applied. */
  status: "EXEMPT" | "EXEMPT_UNTIL_EXPIRY_DATE" | "NOT_EXEMPT";
  /**
   * This field represents the timestamp, following the ISO 8601 format, which specifies the date when temporary exemptions, if applicable, will expire, and Amazon will begin enforcing the listed actions.
   * @format date-time
   * @example "2023-10-28T00:36:48.914Z"
   */
  expiryDate?: string;
}

/** Offer details for the listings item. */
export type ItemOffers = ItemOfferByMarketplace[];

/** Offer details of a listings item for an Amazon marketplace. */
export interface ItemOfferByMarketplace {
  /** The Amazon marketplace identifier. */
  marketplaceId: string;
  /** Type of offer for the listings item. */
  offerType: "B2C" | "B2B";
  /** The purchase price of the listings item */
  price: Money;
  /** The number of Amazon Points offered with the purchase of an item, and their monetary value. Note that the `Points` element is only returned in Japan (JP). */
  points?: Points;
}

/** The vendor procurement information for the listings item. */
export interface ItemProcurement {
  /** The price (numeric value) that you want Amazon to pay you for this product. */
  costPrice: Money;
}

/** The fulfillment availability details for the listings item. */
export interface FulfillmentAvailability {
  /** The code of the fulfillment network that will be used. */
  fulfillmentChannelCode: string;
  /**
   * The quantity of the item you are making available for sale.
   * @min 0
   */
  quantity?: number;
}

/** The currency type and amount. */
export interface Money {
  /** Three-digit currency code in ISO 4217 format. */
  currencyCode: string;
  /** The currency amount. */
  amount: Decimal;
}

/** A decimal number with no loss of precision. Useful when precision loss is unnaceptable, as with currencies. Follows RFC7159 for number representation. */
export type Decimal = string;

/** The number of Amazon Points offered with the purchase of an item, and their monetary value. Note that the `Points` element is only returned in Japan (JP). */
export interface Points {
  pointsNumber: number;
}

/** Individual JSON Patch operation for an HTTP PATCH request. */
export interface PatchOperation {
  /** Type of JSON Patch operation. Supported JSON Patch operations include add, replace, and delete. Refer to [JavaScript Object Notation (JSON) Patch](https://tools.ietf.org/html/rfc6902) for more information. */
  op: "add" | "replace" | "delete";
  /** JSON Pointer path of the element to patch. Refer to [JavaScript Object Notation (JSON) Patch](https://tools.ietf.org/html/rfc6902) for more information. */
  path: string;
  /** JSON value to add, replace, or delete. */
  value?: Record<string, any>[];
}

/** The request body schema for the `patchListingsItem` operation. */
export interface ListingsItemPatchRequest {
  /** The Amazon product type of the listings item. */
  productType: string;
  /**
   * One or more JSON Patch operations to perform on the listings item.
   * @minItems 1
   */
  patches: PatchOperation[];
}

/** The request body schema for the `putListingsItem` operation. */
export interface ListingsItemPutRequest {
  /** The Amazon product type of the listings item. */
  productType: string;
  /** The name of the requirements set for the provided data. */
  requirements?: "LISTING" | "LISTING_PRODUCT_ONLY" | "LISTING_OFFER_ONLY";
  /** A JSON object containing structured listings item attribute data keyed by attribute name. */
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
