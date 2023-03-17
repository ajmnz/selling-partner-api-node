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

/** The request body for the getFeaturedOfferExpectedPriceBatch operation. */
export interface GetFeaturedOfferExpectedPriceBatchRequest {
  /** A batched list of featured offer expected price requests. */
  requests?: FeaturedOfferExpectedPriceRequestList;
}

/**
 * A batched list of featured offer expected price requests.
 * @minItems 1
 */
export type FeaturedOfferExpectedPriceRequestList = FeaturedOfferExpectedPriceRequest[];

/** An individual featured offer expected price request for a particular SKU. */
export type FeaturedOfferExpectedPriceRequest = BatchRequest &
  FeaturedOfferExpectedPriceRequestParams;

/** The parameters for an individual request. */
export interface FeaturedOfferExpectedPriceRequestParams {
  /** A marketplace identifier. Specifies the marketplace for which data is returned. */
  marketplaceId: MarketplaceId;
  /** The seller SKU of the item. */
  sku: Sku;
}

/** The response schema for the getFeaturedOfferExpectedPriceBatch operation. */
export interface GetFeaturedOfferExpectedPriceBatchResponse {
  /** A batched list of featured offer expected price responses. */
  responses?: FeaturedOfferExpectedPriceResponseList;
}

/**
 * A batched list of featured offer expected price responses.
 * @minItems 1
 */
export type FeaturedOfferExpectedPriceResponseList = FeaturedOfferExpectedPriceResponse[];

export type FeaturedOfferExpectedPriceResponse = BatchResponse & {
  /** Use these request parameters to map the response back to the request. */
  request: FeaturedOfferExpectedPriceRequestParams;
  /** The featured offer expected price response data for a requested SKU. */
  body?: FeaturedOfferExpectedPriceResponseBody;
};

/** A list of error responses returned when a request is unsuccessful. */
export interface Errors {
  /** One or more unexpected errors occurred during the operation. */
  errors: ErrorList;
}

/** The featured offer expected price response data for a requested SKU. */
export interface FeaturedOfferExpectedPriceResponseBody {
  /** Metadata that identifies the target offer for which the featured offer expected price result data was computed. */
  offerIdentifier: OfferIdentifier;
  /** The featured offer expected price results for the requested target offer. */
  featuredOfferExpectedPriceResults?: FeaturedOfferExpectedPriceResultList;
  /** The errors that occurred if the operation was not successful (HTTP status code non-200). */
  errors?: ErrorList;
}

/** A list of featured offer expected price results for the requested offer. */
export type FeaturedOfferExpectedPriceResultList = FeaturedOfferExpectedPriceResult[];

/** The featured offer expected price result data for the requested offer. */
export interface FeaturedOfferExpectedPriceResult {
  /** The item price at or below which the target offer may be featured. */
  featuredOfferExpectedPrice?: FeaturedOfferExpectedPrice;
  /** The status of the featured offer expected price computation. Possible values include VALID_FOEP, NO_COMPETING_OFFER, OFFER_NOT_ELIGIBLE, OFFER_NOT_FOUND. */
  resultStatus: string;
  /** The offer that will likely be the featured offer if the target offer is priced above its featured offer expected price. If the target offer is currently the featured offer, this property will be different than currentFeaturedOffer. */
  competingFeaturedOffer?: FeaturedOffer;
  /** The offer that is currently the featured offer. If the target offer is not currently featured, this property will be equal to competingFeaturedOffer. */
  currentFeaturedOffer?: FeaturedOffer;
}

/** The item price at or below which the target offer may be featured. */
export interface FeaturedOfferExpectedPrice {
  /** A computed listing price at or below which a seller can expect to become the featured offer (before applicable promotions). */
  listingPrice: MoneyType;
  /** The number of Amazon Points offered with the purchase of an item, and their monetary value. */
  points?: Points;
}

export interface FeaturedOffer {
  /** An offer identifier used to identify the merchant of the featured offer. Since this may not belong to the requester, the SKU field will be omitted. */
  offerIdentifier: OfferIdentifier;
  /** The item condition. */
  condition?: Condition;
  /** The current active price of the offer. */
  price?: Price;
}

/** A mapping of additional HTTP headers to send/receive for an individual request within a batch. */
export type HttpHeaders = Record<string, string>;

/** The HTTP status line associated with the response to an individual request within a batch. For more information, consult [RFC 2616](https://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html). */
export interface HttpStatusLine {
  /**
   * The HTTP response Status-Code.
   * @min 100
   * @max 599
   */
  statusCode?: number;
  /** The HTTP response Reason-Phase. */
  reasonPhrase?: string;
}

/** Additional HTTP body information associated with an individual request within a batch. */
export type HttpBody = any;

/** The HTTP method associated with an individual request within a batch. */
export enum HttpMethod {
  GET = "GET",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
  POST = "POST",
}

/** The common properties for individual requests within a batch. */
export interface BatchRequest {
  /** The URI associated with an individual request within a batch. For FeaturedOfferExpectedPrice, this should be '/products/pricing/2022-05-01/offer/featuredOfferExpectedPrice'. */
  uri: string;
  /** The HTTP method associated with an individual request within a batch. */
  method: HttpMethod;
  /** Additional HTTP body information associated with an individual request within a batch. */
  body?: HttpBody;
  /** A mapping of additional HTTP headers to send/receive for an individual request within a batch. */
  headers?: HttpHeaders;
}

/** The common properties for responses to individual requests within a batch. */
export interface BatchResponse {
  /** A mapping of additional HTTP headers to send/receive for an individual request within a batch. */
  headers: HttpHeaders;
  /** The HTTP status line associated with the response to an individual request within a batch. For more information, consult [RFC 2616](https://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html). */
  status: HttpStatusLine;
}

/** Identifies an offer from a particular seller on an ASIN. */
export interface OfferIdentifier {
  /** A marketplace identifier. */
  marketplaceId: MarketplaceId;
  /** The seller identifier for the offer. */
  sellerId?: string;
  /** The seller stock keeping unit (SKU) of the item. This will only be present for the target offer, which belongs to the requesting seller. */
  sku?: string;
  /** The Amazon identifier for the item. */
  asin: Asin;
  /** The fulfillment type for the offer. */
  fulfillmentType?: FulfillmentType;
}

export interface MoneyType {
  /** The currency code in ISO 4217 format. */
  currencyCode?: string;
  /** The monetary value. */
  amount?: number;
}

export interface Price {
  /** The listing price of the item excluding any promotions. */
  listingPrice: MoneyType;
  /** The shipping cost of the product. Note that the shipping cost is not always available. */
  shippingPrice?: MoneyType;
  /** The number of Amazon Points offered with the purchase of an item, and their monetary value. */
  points?: Points;
}

export interface Points {
  /**
   * The number of points.
   * @format int32
   */
  pointsNumber?: number;
  /** The monetary value of the points. */
  pointsMonetaryValue?: MoneyType;
}

/** Indicates whether the item is fulfilled by Amazon or by the seller (merchant). */
export enum FulfillmentType {
  AFN = "AFN",
  MFN = "MFN",
}

/** A marketplace identifier. Specifies the marketplace for which data is returned. */
export type MarketplaceId = string;

/** The seller SKU of the item. */
export type Sku = string;

/** The condition of the item. */
export enum Condition {
  New = "New",
  Used = "Used",
  Collectible = "Collectible",
  Refurbished = "Refurbished",
  Club = "Club",
}

/** The Amazon Standard Identification Number (ASIN) of the item. */
export type Asin = string;

/** A list of error responses returned when a request is unsuccessful. */
export type ErrorList = Error[];

/** Error response returned when the request is unsuccessful. */
export interface Error {
  /** An error code that identifies the type of error that occurred. */
  code: string;
  /** A message that describes the error condition. */
  message: string;
  /** Additional information that can help the caller understand or fix the issue. */
  details?: string;
}
