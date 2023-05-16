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

/** Request schema. */
export interface GetMyFeesEstimateRequest {
  /** A product, marketplace, and proposed price used to request estimated fees. */
  FeesEstimateRequest?: FeesEstimateRequest;
}

/** Request for estimated fees for a list of products. */
export type GetMyFeesEstimatesRequest = FeesEstimateByIdRequest[];

/** A product, marketplace, and proposed price used to request estimated fees. */
export interface FeesEstimateByIdRequest {
  /** A product, marketplace, and proposed price used to request estimated fees. */
  FeesEstimateRequest?: FeesEstimateRequest;
  /** The type of product identifier used in a `FeesEstimateByIdRequest`. */
  IdType: IdType;
  /** The item identifier. */
  IdValue: string;
}

/** A product, marketplace, and proposed price used to request estimated fees. */
export interface FeesEstimateRequest {
  /** A marketplace identifier. */
  MarketplaceId: string;
  /** When true, the offer is fulfilled by Amazon. */
  IsAmazonFulfilled?: boolean;
  /** The product price that the fee estimate is based on. */
  PriceToEstimateFees: PriceToEstimateFees;
  /** A unique identifier provided by the caller to track this request. */
  Identifier: string;
  /** An optional enrollment program to return the estimated fees when the offer is fulfilled by Amazon (IsAmazonFulfilled is set to true). */
  OptionalFulfillmentProgram?: OptionalFulfillmentProgram;
}

export interface GetMyFeesEstimateResponse {
  /** The payload for the operation. */
  payload?: GetMyFeesEstimateResult;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** Response schema. */
export interface GetMyFeesEstimateResult {
  /** The item's estimated fees. */
  FeesEstimateResult?: FeesEstimateResult;
}

/** Estimated fees for a list of products. */
export type GetMyFeesEstimatesResponse = FeesEstimateResult[];

export interface Points {
  /** @format int32 */
  PointsNumber?: number;
  PointsMonetaryValue?: MoneyType;
}

/** A list of error responses returned when a request is unsuccessful. */
export interface GetMyFeesEstimatesErrorList {
  errors: Error[];
}

/** A list of error responses returned when a request is unsuccessful. */
export type ErrorList = Error[];

export interface Error {
  /** An error code that identifies the type of error that occurred. */
  code: string;
  /** A message that describes the error condition. */
  message: string;
  /** Additional information that can help the caller understand or fix the issue. */
  details?: string;
}

/** An item identifier and the estimated fees for the item. */
export interface FeesEstimateResult {
  /** The status of the fee request. Possible values: Success, ClientError, ServiceError. */
  Status?: string;
  /** Information used to identify a fees estimate request. */
  FeesEstimateIdentifier?: FeesEstimateIdentifier;
  /** The total estimated fees for an item and a list of details. */
  FeesEstimate?: FeesEstimate;
  /** An error object with a type, code, and message. */
  Error?: FeesEstimateError;
}

/** An item identifier, marketplace, time of request, and other details that identify an estimate. */
export interface FeesEstimateIdentifier {
  /** A marketplace identifier. */
  MarketplaceId?: string;
  /** The seller identifier. */
  SellerId?: string;
  /** The type of product identifier used in a `FeesEstimateByIdRequest`. */
  IdType?: IdType;
  /** The item identifier. */
  IdValue?: string;
  /** When true, the offer is fulfilled by Amazon. */
  IsAmazonFulfilled?: boolean;
  /** The item price on which the fee estimate is based. */
  PriceToEstimateFees?: PriceToEstimateFees;
  /** A unique identifier provided by the caller to track this request. */
  SellerInputIdentifier?: string;
  /** An optional enrollment program to return the estimated fees when the offer is fulfilled by Amazon (IsAmazonFulfilled is set to true). */
  OptionalFulfillmentProgram?: OptionalFulfillmentProgram;
}

/** Price information for an item, used to estimate fees. */
export interface PriceToEstimateFees {
  /** The price of the item. */
  ListingPrice: MoneyType;
  /** The shipping cost. */
  Shipping?: MoneyType;
  /** The number of Amazon Points offered with the purchase of an item. */
  Points?: Points;
}

/** The total estimated fees for an item and a list of details. */
export interface FeesEstimate {
  /**
   * The time at which the fees were estimated. This defaults to the time the request is made.
   * @format date-time
   */
  TimeOfFeesEstimation: string;
  /** Total estimated fees for a given item, price, and fulfillment channel. */
  TotalFeesEstimate?: MoneyType;
  /** A list of other fees that contribute to a given fee. */
  FeeDetailList?: FeeDetailList;
}

/** A list of other fees that contribute to a given fee. */
export type FeeDetailList = FeeDetail[];

/** An unexpected error occurred during this operation. */
export interface FeesEstimateError {
  /** An error type, identifying either the receiver or the sender as the originator of the error. */
  Type: string;
  /** An error code that identifies the type of error that occurred. */
  Code: string;
  /** A message that describes the error condition. */
  Message: string;
  /** Additional information that can help the caller understand or fix the issue. */
  Detail: FeesEstimateErrorDetail;
}

/** Additional information that can help the caller understand or fix the issue. */
export type FeesEstimateErrorDetail = object[];

/** The type of fee, fee amount, and other details. */
export interface FeeDetail {
  /** The type of fee charged to a seller. */
  FeeType: string;
  /** The amount charged for a given fee. */
  FeeAmount: MoneyType;
  /** The promotion amount for a given fee. */
  FeePromotion?: MoneyType;
  /** The tax amount for a given fee. */
  TaxAmount?: MoneyType;
  /** The final fee amount for a given fee. */
  FinalFee: MoneyType;
  /** A list of other fees that contribute to a given fee. */
  IncludedFeeDetailList?: IncludedFeeDetailList;
}

/** A list of other fees that contribute to a given fee. */
export type IncludedFeeDetailList = IncludedFeeDetail[];

/** The type of fee, fee amount, and other details. */
export interface IncludedFeeDetail {
  /** The type of fee charged to a seller. */
  FeeType: string;
  /** The amount charged for a given fee. */
  FeeAmount: MoneyType;
  /** The promotion amount for a given fee. */
  FeePromotion?: MoneyType;
  /** The tax amount for a given fee. */
  TaxAmount?: MoneyType;
  /** The final fee amount for a given fee. */
  FinalFee: MoneyType;
}

export interface MoneyType {
  /** The currency code in ISO 4217 format. */
  CurrencyCode?: string;
  /** The monetary value. */
  Amount?: number;
}

/** An optional enrollment program to return the estimated fees when the offer is fulfilled by Amazon (IsAmazonFulfilled is set to true). */
export enum OptionalFulfillmentProgram {
  FBA_CORE = "FBA_CORE",
  FBA_SNL = "FBA_SNL",
  FBA_EFN = "FBA_EFN",
}

/** The type of product identifier used in a `FeesEstimateByIdRequest`. */
export enum IdType {
  ASIN = "ASIN",
  SellerSKU = "SellerSKU",
}
