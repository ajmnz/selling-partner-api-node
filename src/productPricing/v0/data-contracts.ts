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

/** The request associated with the `getItemOffersBatch` API call. */
export interface GetItemOffersBatchRequest {
  /** A list of `getListingOffers` batched requests to run. */
  requests?: ItemOffersRequestList;
}

/** The request associated with the `getListingOffersBatch` API call. */
export interface GetListingOffersBatchRequest {
  /** A list of `getListingOffers` batched requests to run. */
  requests?: ListingOffersRequestList;
}

/**
 * A list of `getListingOffers` batched requests to run.
 * @maxItems 20
 * @minItems 1
 */
export type ListingOffersRequestList = ListingOffersRequest[];

/**
 * A list of `getListingOffers` batched requests to run.
 * @maxItems 20
 * @minItems 1
 */
export type ItemOffersRequestList = ItemOffersRequest[];

export interface BatchOffersRequestParams {
  /** A marketplace identifier. Specifies the marketplace for which prices are returned. */
  MarketplaceId: MarketplaceId;
  /** Filters the offer listings to be considered based on item condition. Possible values: New, Used, Collectible, Refurbished, Club. */
  ItemCondition: ItemCondition;
  /** Indicates whether to request Consumer or Business offers. Default is Consumer. */
  CustomerType?: CustomerType;
}

export type ItemOffersRequest = BatchRequest & BatchOffersRequestParams;

export type ListingOffersRequest = BatchRequest & BatchOffersRequestParams;

/** The response associated with the `getItemOffersBatch` API call. */
export interface GetItemOffersBatchResponse {
  /** A list of `getItemOffers` batched responses. */
  responses?: ItemOffersResponseList;
}

/** The response associated with the `getListingOffersBatch` API call. */
export interface GetListingOffersBatchResponse {
  /** A list of `getListingOffers` batched responses. */
  responses?: ListingOffersResponseList;
}

/**
 * A list of `getItemOffers` batched responses.
 * @maxItems 20
 * @minItems 1
 */
export type ItemOffersResponseList = ItemOffersResponse[];

/**
 * A list of `getListingOffers` batched responses.
 * @maxItems 20
 * @minItems 1
 */
export type ListingOffersResponseList = ListingOffersResponse[];

export interface BatchOffersResponse {
  /** A mapping of additional HTTP headers to send/receive for the individual batch request. */
  headers?: HttpResponseHeaders;
  /** The HTTP status line associated with the response.  For more information, consult [RFC 2616](https://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html). */
  status?: GetOffersHttpStatusLine;
  /** The response schema for the `getListingOffers` and `getItemOffers` operations. */
  body: GetOffersResponse;
}

export type ItemOffersRequestParams = BatchOffersRequestParams & {
  /** The Amazon Standard Identification Number (ASIN) of the item. This is the same Asin passed as a request parameter. */
  Asin?: string;
};

export type ItemOffersResponse = BatchOffersResponse & {
  request: ItemOffersRequestParams;
};

export type ListingOffersRequestParams = BatchOffersRequestParams & {
  /** The seller stock keeping unit (SKU) of the item. This is the same SKU passed as a path parameter. */
  SellerSKU: string;
};

export type ListingOffersResponse = BatchOffersResponse & {
  request?: ListingOffersRequestParams;
};

/** A list of error responses returned when a request is unsuccessful. */
export interface Errors {
  /** One or more unexpected errors occurred during the operation. */
  errors: ErrorList;
}

/** The response schema for the `getPricing` and `getCompetitivePricing` operations. */
export interface GetPricingResponse {
  /** The payload for the getPricing and getCompetitivePricing operations. */
  payload?: PriceList;
  /** One or more unexpected errors occurred during the operation. */
  errors?: ErrorList;
}

/** The response schema for the `getListingOffers` and `getItemOffers` operations. */
export interface GetOffersResponse {
  /** The payload for the `getListingOffers` and `getItemOffers` operations. */
  payload?: GetOffersResult;
  /** One or more unexpected errors occurred during the operation. */
  errors?: ErrorList;
}

/** @maxItems 20 */
export type PriceList = Price[];

export interface GetOffersResult {
  /** A marketplace identifier. */
  MarketplaceID: string;
  /** The Amazon Standard Identification Number (ASIN) of the item. */
  ASIN?: string;
  /** The stock keeping unit (SKU) of the item. */
  SKU?: string;
  /** The condition of the item. */
  ItemCondition: ConditionType;
  /** The status of the operation. */
  status: string;
  /** Metadata that identifies the item. */
  Identifier: ItemIdentifier;
  /** Pricing information about the item. */
  Summary: Summary;
  /** A list of offer details. The list is the same length as the TotalOfferCount in the Summary or 20, whichever is less. */
  Offers: OfferDetailList;
}

/** A mapping of additional HTTP headers to send/receive for the individual batch request. */
export type HttpRequestHeaders = Record<string, string>;

/** A mapping of additional HTTP headers to send/receive for the individual batch request. */
export interface HttpResponseHeaders {
  /** The timestamp that the API request was received.  For more information, consult [RFC 2616 Section 14](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). */
  Date?: string;
  /** Unique request reference ID. */
  "x-amzn-RequestId"?: string;
  [key: string]: any;
}

/** The HTTP status line associated with the response.  For more information, consult [RFC 2616](https://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html). */
export interface GetOffersHttpStatusLine {
  /**
   * The HTTP response Status Code.
   * @min 100
   * @max 599
   */
  statusCode?: number;
  /** The HTTP response Reason-Phase. */
  reasonPhrase?: string;
}

/**
 * The URI associated with the individual APIs being called as part of the batch request.
 * @minLength 6
 * @maxLength 512
 */
export type HttpUri = string;

/** The HTTP method associated with the individual APIs being called as part of the batch request. */
export enum HttpMethod {
  GET = "GET",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
  POST = "POST",
}

/** Common properties of batch requests against individual APIs. */
export interface BatchRequest {
  /**
   * The resource path of the operation you are calling in batch without any query parameters.
   *
   * If you are calling `getItemOffersBatch`, supply the path of `getItemOffers`.
   *
   * **Example:** `/products/pricing/v0/items/B000P6Q7MY/offers`
   *
   * If you are calling `getListingOffersBatch`, supply the path of `getListingOffers`.
   *
   * **Example:** `/products/pricing/v0/listings/B000P6Q7MY/offers`
   */
  uri: string;
  /** The HTTP method associated with the individual APIs being called as part of the batch request. */
  method: HttpMethod;
  /** A mapping of additional HTTP headers to send/receive for the individual batch request. */
  headers?: HttpRequestHeaders;
}

export interface Price {
  /** The status of the operation. */
  status: string;
  /** The seller stock keeping unit (SKU) of the item. */
  SellerSKU?: string;
  /** The Amazon Standard Identification Number (ASIN) of the item. */
  ASIN?: string;
  /** An item. */
  Product?: Product;
}

/** An item. */
export interface Product {
  /** Specifies the identifiers used to uniquely identify an item. */
  Identifiers: IdentifierType;
  /** A list of product attributes if they are applicable to the product that is returned. */
  AttributeSets?: AttributeSetList;
  /** A list that contains product variation information, if applicable. */
  Relationships?: RelationshipList;
  /** Competitive pricing information for the item. */
  CompetitivePricing?: CompetitivePricingType;
  /** A list of sales rank information for the item, by category. */
  SalesRankings?: SalesRankList;
  /** A list of offers. */
  Offers?: OffersList;
}

/** Specifies the identifiers used to uniquely identify an item. */
export interface IdentifierType {
  /** Indicates the item is identified by MarketPlaceId and ASIN. */
  MarketplaceASIN: ASINIdentifier;
  /** Indicates the item is identified by MarketPlaceId, SellerId, and SellerSKU. */
  SKUIdentifier?: SellerSKUIdentifier;
}

export interface ASINIdentifier {
  /** A marketplace identifier. */
  MarketplaceId: string;
  /** The Amazon Standard Identification Number (ASIN) of the item. */
  ASIN: string;
}

export interface SellerSKUIdentifier {
  /** A marketplace identifier. */
  MarketplaceId: string;
  /** The seller identifier submitted for the operation. */
  SellerId: string;
  /** The seller stock keeping unit (SKU) of the item. */
  SellerSKU: string;
}

/** A list of product attributes if they are applicable to the product that is returned. */
export type AttributeSetList = object[];

/** A list that contains product variation information, if applicable. */
export type RelationshipList = object[];

/** Competitive pricing information for the item. */
export interface CompetitivePricingType {
  /** A list of competitive pricing information. */
  CompetitivePrices: CompetitivePriceList;
  /** The number of active offer listings for the item that was submitted. The listing count is returned by condition, one for each listing condition value that is returned. */
  NumberOfOfferListings: NumberOfOfferListingsList;
  /** The trade-in value of the item in the trade-in program. */
  TradeInValue?: MoneyType;
}

/** A list of competitive pricing information. */
export type CompetitivePriceList = CompetitivePriceType[];

export interface CompetitivePriceType {
  /**
   * The pricing model for each price that is returned.
   *
   * Possible values:
   *
   * * 1 - New Buy Box Price.
   * * 2 - Used Buy Box Price.
   */
  CompetitivePriceId: string;
  /** Pricing information for a given CompetitivePriceId value. */
  Price: PriceType;
  /** Indicates the condition of the item whose pricing information is returned. Possible values are: New, Used, Collectible, Refurbished, or Club. */
  condition?: string;
  /** Indicates the subcondition of the item whose pricing information is returned. Possible values are: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, or Other. */
  subcondition?: string;
  /** Indicates the type of customer that the offer is valid for.<br><br>When the offer type is B2C in a quantity discount, the seller is winning the Buy Box because others do not have inventory at that quantity, not because they have a quantity discount on the ASIN. */
  offerType?: OfferCustomerType;
  /**
   * Indicates at what quantity this price becomes active.
   * @format int32
   */
  quantityTier?: number;
  /** Indicates the type of quantity discount this price applies to. */
  quantityDiscountType?: QuantityDiscountType;
  /** The seller identifier for the offer. */
  sellerId?: string;
  /**  Indicates whether or not the pricing information is for an offer listing that belongs to the requester. The requester is the seller associated with the SellerId that was submitted with the request. Possible values are: true and false. */
  belongsToRequester?: boolean;
}

/** The number of active offer listings for the item that was submitted. The listing count is returned by condition, one for each listing condition value that is returned. */
export type NumberOfOfferListingsList = OfferListingCountType[];

/** The number of offer listings with the specified condition. */
export interface OfferListingCountType {
  /**
   * The number of offer listings.
   * @format int32
   */
  Count: number;
  /** The condition of the item. */
  condition: string;
}

export interface MoneyType {
  /** The currency code in ISO 4217 format. */
  CurrencyCode?: string;
  /** The monetary value. */
  Amount?: number;
}

/** A list of sales rank information for the item, by category. */
export type SalesRankList = SalesRankType[];

export interface SalesRankType {
  /**  Identifies the item category from which the sales rank is taken. */
  ProductCategoryId: string;
  /**
   * The sales rank of the item within the item category.
   * @format int32
   */
  Rank: number;
}

export interface PriceType {
  /** The value calculated by adding ListingPrice + Shipping - Points. Note that if the landed price is not returned, the listing price represents the product with the lowest landed price. */
  LandedPrice?: MoneyType;
  /** The listing price of the item including any promotions that apply. */
  ListingPrice: MoneyType;
  /** The shipping cost of the product. Note that the shipping cost is not always available. */
  Shipping?: MoneyType;
  /** The number of Amazon Points offered with the purchase of an item, and their monetary value. */
  Points?: Points;
}

/** A list of offers. */
export type OffersList = OfferType[];

export interface OfferType {
  /** Indicates the type of customer that the offer is valid for. */
  offerType?: OfferCustomerType;
  /** Contains pricing information that includes promotions and contains the shipping cost. */
  BuyingPrice: PriceType;
  /** The current price excluding any promotions that apply to the product. Excludes the shipping cost. */
  RegularPrice: MoneyType;
  /** The current listing price for Business buyers. */
  businessPrice?: MoneyType;
  quantityDiscountPrices?: QuantityDiscountPriceType[];
  /**
   * The fulfillment channel for the offer listing. Possible values:
   *
   * * Amazon - Fulfilled by Amazon.
   * * Merchant - Fulfilled by the seller.
   */
  FulfillmentChannel: string;
  /** The item condition for the offer listing. Possible values: New, Used, Collectible, Refurbished, or Club. */
  ItemCondition: string;
  /** The item subcondition for the offer listing. Possible values: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, or Other. */
  ItemSubCondition: string;
  /** The seller stock keeping unit (SKU) of the item. */
  SellerSKU: string;
}

export enum OfferCustomerType {
  B2C = "B2C",
  B2B = "B2B",
}

/** Contains pricing information that includes special pricing when buying in bulk. */
export interface QuantityDiscountPriceType {
  /**
   * Indicates at what quantity this price becomes active.
   * @format int32
   */
  quantityTier: number;
  /** Indicates the type of quantity discount this price applies to. */
  quantityDiscountType: QuantityDiscountType;
  /** The price at this quantity tier. */
  listingPrice: MoneyType;
}

export enum QuantityDiscountType {
  QUANTITY_DISCOUNT = "QUANTITY_DISCOUNT",
}

export interface Points {
  /**
   * The number of points.
   * @format int32
   */
  PointsNumber?: number;
  /** The monetary value of the points. */
  PointsMonetaryValue?: MoneyType;
}

/** Indicates the condition of the item. Possible values: New, Used, Collectible, Refurbished, Club. */
export enum ConditionType {
  New = "New",
  Used = "Used",
  Collectible = "Collectible",
  Refurbished = "Refurbished",
  Club = "Club",
}

/** Information that identifies an item. */
export interface ItemIdentifier {
  /** A marketplace identifier. Specifies the marketplace from which prices are returned. */
  MarketplaceId: string;
  /** The Amazon Standard Identification Number (ASIN) of the item. */
  ASIN?: string;
  /** The seller stock keeping unit (SKU) of the item. */
  SellerSKU?: string;
  /** The condition of the item. */
  ItemCondition: ConditionType;
}

/** Contains price information about the product, including the LowestPrices and BuyBoxPrices, the ListPrice, the SuggestedLowerPricePlusShipping, and NumberOfOffers and NumberOfBuyBoxEligibleOffers. */
export interface Summary {
  /**
   * The number of unique offers contained in NumberOfOffers.
   * @format int32
   */
  TotalOfferCount: number;
  /** A list that contains the total number of offers for the item for the given conditions and fulfillment channels. */
  NumberOfOffers?: NumberOfOffers;
  /** A list of the lowest prices for the item. */
  LowestPrices?: LowestPrices;
  /** A list of item prices. */
  BuyBoxPrices?: BuyBoxPrices;
  /** The list price of the item as suggested by the manufacturer. */
  ListPrice?: MoneyType;
  /** This price is based on competitive prices from other retailers (excluding other Amazon sellers). The offer may be ineligible for the Buy Box if the seller's price + shipping (minus Amazon Points) is greater than this competitive price. */
  CompetitivePriceThreshold?: MoneyType;
  /** The suggested lower price of the item, including shipping and Amazon Points. The suggested lower price is based on a range of factors, including historical selling prices, recent Buy Box-eligible prices, and input from customers for your products. */
  SuggestedLowerPricePlusShipping?: MoneyType;
  /** A list that contains the sales rank of the item in the given product categories. */
  SalesRankings?: SalesRankList;
  /** A list that contains the total number of offers that are eligible for the Buy Box for the given conditions and fulfillment channels. */
  BuyBoxEligibleOffers?: BuyBoxEligibleOffers;
  /**
   * When the status is ActiveButTooSoonForProcessing, this is the time when the offers will be available for processing.
   * @format date-time
   */
  OffersAvailableTime?: string;
}

export type BuyBoxEligibleOffers = OfferCountType[];

export type BuyBoxPrices = BuyBoxPriceType[];

export type LowestPrices = LowestPriceType[];

export type NumberOfOffers = OfferCountType[];

/** The total number of offers for the specified condition and fulfillment channel. */
export interface OfferCountType {
  /** Indicates the condition of the item. For example: New, Used, Collectible, Refurbished, or Club. */
  condition?: string;
  /** Indicates whether the item is fulfilled by Amazon or by the seller. */
  fulfillmentChannel?: FulfillmentChannelType;
  /**
   * The number of offers in a fulfillment channel that meet a specific condition.
   * @format int32
   */
  OfferCount?: number;
}

/** Indicates whether the item is fulfilled by Amazon or by the seller (merchant). */
export enum FulfillmentChannelType {
  Amazon = "Amazon",
  Merchant = "Merchant",
}

export interface LowestPriceType {
  /** Indicates the condition of the item. For example: New, Used, Collectible, Refurbished, or Club. */
  condition: string;
  /** Indicates whether the item is fulfilled by Amazon or by the seller. */
  fulfillmentChannel: string;
  /** Indicates the type of customer that the offer is valid for. */
  offerType?: OfferCustomerType;
  /**
   * Indicates at what quantity this price becomes active.
   * @format int32
   */
  quantityTier?: number;
  /** Indicates the type of quantity discount this price applies to. */
  quantityDiscountType?: QuantityDiscountType;
  /** The value calculated by adding ListingPrice + Shipping - Points. */
  LandedPrice?: MoneyType;
  /** The price of the item. */
  ListingPrice: MoneyType;
  /** The shipping cost. */
  Shipping?: MoneyType;
  /** The number of Amazon Points offered with the purchase of an item. */
  Points?: Points;
}

export interface BuyBoxPriceType {
  /** Indicates the condition of the item. For example: New, Used, Collectible, Refurbished, or Club. */
  condition: string;
  /** Indicates the type of customer that the offer is valid for.<br><br>When the offer type is B2C in a quantity discount, the seller is winning the Buy Box because others do not have inventory at that quantity, not because they have a quantity discount on the ASIN. */
  offerType?: OfferCustomerType;
  /**
   * Indicates at what quantity this price becomes active.
   * @format int32
   */
  quantityTier?: number;
  /** Indicates the type of quantity discount this price applies to. */
  quantityDiscountType?: QuantityDiscountType;
  /** The value calculated by adding ListingPrice + Shipping - Points. */
  LandedPrice: MoneyType;
  /** The price of the item. */
  ListingPrice: MoneyType;
  /** The shipping cost. */
  Shipping: MoneyType;
  /** The number of Amazon Points offered with the purchase of an item. */
  Points?: Points;
  /** The seller identifier for the offer. */
  sellerId?: string;
}

/** @maxItems 20 */
export type OfferDetailList = OfferDetail[];

export interface OfferDetail {
  /** When true, this is the seller's offer. */
  MyOffer?: boolean;
  /** Indicates the type of customer that the offer is valid for. */
  offerType?: OfferCustomerType;
  /** The subcondition of the item. Subcondition values: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, or Other. */
  SubCondition: string;
  /** The seller identifier for the offer. */
  SellerId?: string;
  /** Information about the condition of the item. */
  ConditionNotes?: string;
  /** Information about the seller's feedback, including the percentage of positive feedback, and the total number of ratings received. */
  SellerFeedbackRating?: SellerFeedbackType;
  /** The maximum time within which the item will likely be shipped once an order has been placed. */
  ShippingTime: DetailedShippingTimeType;
  /** The price of the item. */
  ListingPrice: MoneyType;
  quantityDiscountPrices?: QuantityDiscountPriceType[];
  /** The number of Amazon Points offered with the purchase of an item. */
  Points?: Points;
  /** The shipping cost. */
  Shipping: MoneyType;
  /** The state and country from where the item is shipped. */
  ShipsFrom?: ShipsFromType;
  /** When true, the offer is fulfilled by Amazon. */
  IsFulfilledByAmazon: boolean;
  /** Amazon Prime information. */
  PrimeInformation?: PrimeInformationType;
  /** When true, the offer is currently in the Buy Box. There can be up to two Buy Box winners at any time per ASIN, one that is eligible for Prime and one that is not eligible for Prime. */
  IsBuyBoxWinner?: boolean;
  /** When true, the seller of the item is eligible to win the Buy Box. */
  IsFeaturedMerchant?: boolean;
}

/** Amazon Prime information. */
export interface PrimeInformationType {
  /** Indicates whether the offer is an Amazon Prime offer. */
  IsPrime: boolean;
  /** Indicates whether the offer is an Amazon Prime offer throughout the entire marketplace where it is listed. */
  IsNationalPrime: boolean;
}

/** Information about the seller's feedback, including the percentage of positive feedback, and the total number of ratings received. */
export interface SellerFeedbackType {
  /**
   * The percentage of positive feedback for the seller in the past 365 days.
   * @format double
   */
  SellerPositiveFeedbackRating?: number;
  /**
   * The number of ratings received about the seller.
   * @format int64
   */
  FeedbackCount: number;
}

/** A list of error responses returned when a request is unsuccessful. */
export type ErrorList = Error[];

/** The time range in which an item will likely be shipped once an order has been placed. */
export interface DetailedShippingTimeType {
  /**
   * The minimum time, in hours, that the item will likely be shipped after the order has been placed.
   * @format int64
   */
  minimumHours?: number;
  /**
   * The maximum time, in hours, that the item will likely be shipped after the order has been placed.
   * @format int64
   */
  maximumHours?: number;
  /** The date when the item will be available for shipping. Only displayed for items that are not currently available for shipping. */
  availableDate?: string;
  /** Indicates whether the item is available for shipping now, or on a known or an unknown date in the future. If known, the availableDate property indicates the date that the item will be available for shipping. Possible values: NOW, FUTURE_WITHOUT_DATE, FUTURE_WITH_DATE. */
  availabilityType?: "NOW" | "FUTURE_WITHOUT_DATE" | "FUTURE_WITH_DATE";
}

/** The state and country from where the item is shipped. */
export interface ShipsFromType {
  /** The state from where the item is shipped. */
  State?: string;
  /** The country from where the item is shipped. */
  Country?: string;
}

/** A marketplace identifier. Specifies the marketplace for which prices are returned. */
export type MarketplaceId = string;

/** Filters the offer listings to be considered based on item condition. Possible values: New, Used, Collectible, Refurbished, Club. */
export enum ItemCondition {
  New = "New",
  Used = "Used",
  Collectible = "Collectible",
  Refurbished = "Refurbished",
  Club = "Club",
}

/** The Amazon Standard Identification Number (ASIN) of the item. */
export type Asin = string;

/** Indicates whether to request Consumer or Business offers. Default is Consumer. */
export enum CustomerType {
  Consumer = "Consumer",
  Business = "Business",
}

/** Error response returned when the request is unsuccessful. */
export interface Error {
  /** An error code that identifies the type of error that occurred. */
  code: string;
  /** A message that describes the error condition in a human-readable form. */
  message: string;
  /** Additional information that can help the caller understand or fix the issue. */
  details?: string;
}
