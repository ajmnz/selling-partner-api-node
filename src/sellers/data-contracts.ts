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
  /** An error code that identifies the type of error that occured. */
  code: string;
  /** A message that describes the error condition in a human-readable form. */
  message: string;
  /** Additional details that can help the caller understand or fix the issue. */
  details?: string;
}

/** A list of error responses returned when a request is unsuccessful. */
export type ErrorList = Error[];

export interface MarketplaceParticipation {
  /** Detailed information about an Amazon market where a seller can list items for sale and customers can view and purchase items. */
  marketplace: Marketplace;
  /** Detailed information that is specific to a seller in a Marketplace. */
  participation: Participation;
}

/** List of marketplace participations. */
export type MarketplaceParticipationList = MarketplaceParticipation[];

/** The response schema for the getMarketplaceParticipations operation. */
export interface GetMarketplaceParticipationsResponse {
  /** The payload for the getMarketplaceParticipations operation. */
  payload?: MarketplaceParticipationList;
  /** Encountered errors for the getMarketplaceParticipations operation. */
  errors?: ErrorList;
}

/** Detailed information about an Amazon market where a seller can list items for sale and customers can view and purchase items. */
export interface Marketplace {
  /** The encrypted marketplace value. */
  id: string;
  /** Marketplace name. */
  name: string;
  /**
   * The ISO 3166-1 alpha-2 format country code of the marketplace.
   * @pattern ^([A-Z]{2})$
   */
  countryCode: string;
  /** The ISO 4217 format currency code of the marketplace. */
  defaultCurrencyCode: string;
  /** The ISO 639-1 format language code of the marketplace. */
  defaultLanguageCode: string;
  /** The domain name of the marketplace. */
  domainName: string;
}

/** Detailed information that is specific to a seller in a Marketplace. */
export interface Participation {
  isParticipating: boolean;
  /** Specifies if the seller has suspended listings. True if the seller Listing Status is set to Inactive, otherwise False. */
  hasSuspendedListings: boolean;
}
