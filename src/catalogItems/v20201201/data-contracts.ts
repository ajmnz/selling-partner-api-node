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

/** An item in the Amazon catalog. */
export interface Item {
  /** Amazon Standard Identification Number (ASIN) is the unique identifier for an item in the Amazon catalog. */
  asin: ItemAsin;
  /** A JSON object that contains structured item attribute data keyed by attribute name. Catalog item attributes are available only to brand owners and conform to the related product type definitions available in the Selling Partner API for Product Type Definitions. */
  attributes?: ItemAttributes;
  /** Identifiers associated with the item in the Amazon catalog, such as UPC and EAN identifiers. */
  identifiers?: ItemIdentifiers;
  /** Images for an item in the Amazon catalog. All image variants are provided to brand owners. Otherwise, a thumbnail of the "MAIN" image variant is provided. */
  images?: ItemImages;
  /** Product types associated with the Amazon catalog item. */
  productTypes?: ItemProductTypes;
  /** Sales ranks of an Amazon catalog item. */
  salesRanks?: ItemSalesRanks;
  /** Summary details of an Amazon catalog item. */
  summaries?: ItemSummaries;
  /** Variation details by marketplace for an Amazon catalog item (variation relationships). */
  variations?: ItemVariations;
  /** Vendor details associated with an Amazon catalog item. Vendor details are available to vendors only. */
  vendorDetails?: ItemVendorDetails;
}

/** Amazon Standard Identification Number (ASIN) is the unique identifier for an item in the Amazon catalog. */
export type ItemAsin = string;

/** A JSON object that contains structured item attribute data keyed by attribute name. Catalog item attributes are available only to brand owners and conform to the related product type definitions available in the Selling Partner API for Product Type Definitions. */
export type ItemAttributes = Record<string, any>;

/** Identifiers associated with the item in the Amazon catalog, such as UPC and EAN identifiers. */
export type ItemIdentifiers = ItemIdentifiersByMarketplace[];

/** Identifiers associated with the item in the Amazon catalog for the indicated Amazon marketplace. */
export interface ItemIdentifiersByMarketplace {
  /** Amazon marketplace identifier. */
  marketplaceId: string;
  /** Identifiers associated with the item in the Amazon catalog for the indicated Amazon marketplace. */
  identifiers: ItemIdentifier[];
}

/** Identifier associated with the item in the Amazon catalog, such as a UPC or EAN identifier. */
export interface ItemIdentifier {
  /** Type of identifier, such as UPC, EAN, or ISBN. */
  identifierType: string;
  /** Identifier. */
  identifier: string;
}

/** Images for an item in the Amazon catalog. All image variants are provided to brand owners. Otherwise, a thumbnail of the "MAIN" image variant is provided. */
export type ItemImages = ItemImagesByMarketplace[];

/** Images for an item in the Amazon catalog for the indicated Amazon marketplace. */
export interface ItemImagesByMarketplace {
  /** Amazon marketplace identifier. */
  marketplaceId: string;
  /** Images for an item in the Amazon catalog for the indicated Amazon marketplace. */
  images: ItemImage[];
}

/** Image for an item in the Amazon catalog. */
export interface ItemImage {
  /**
   * Variant of the image, such as MAIN or PT01.
   * @example "MAIN"
   */
  variant:
    | "MAIN"
    | "PT01"
    | "PT02"
    | "PT03"
    | "PT04"
    | "PT05"
    | "PT06"
    | "PT07"
    | "PT08"
    | "SWCH";
  /** Link, or URL, for the image. */
  link: string;
  /** Height of the image in pixels. */
  height: number;
  /** Width of the image in pixels. */
  width: number;
}

/** Product types associated with the Amazon catalog item. */
export type ItemProductTypes = ItemProductTypeByMarketplace[];

/** Product type associated with the Amazon catalog item for the indicated Amazon marketplace. */
export interface ItemProductTypeByMarketplace {
  /** Amazon marketplace identifier. */
  marketplaceId?: string;
  /**
   * Name of the product type associated with the Amazon catalog item.
   * @example "LUGGAGE"
   */
  productType?: string;
}

/** Sales ranks of an Amazon catalog item. */
export type ItemSalesRanks = ItemSalesRanksByMarketplace[];

/** Sales ranks of an Amazon catalog item for the indicated Amazon marketplace. */
export interface ItemSalesRanksByMarketplace {
  /** Amazon marketplace identifier. */
  marketplaceId: string;
  /** Sales ranks of an Amazon catalog item for an Amazon marketplace. */
  ranks: ItemSalesRank[];
}

/** Sales rank of an Amazon catalog item. */
export interface ItemSalesRank {
  /** Title, or name, of the sales rank. */
  title: string;
  /** Corresponding Amazon retail website link, or URL, for the sales rank. */
  link?: string;
  /** Sales rank value. */
  rank: number;
}

/** Summary details of an Amazon catalog item. */
export type ItemSummaries = ItemSummaryByMarketplace[];

/** Summary details of an Amazon catalog item for the indicated Amazon marketplace. */
export interface ItemSummaryByMarketplace {
  /** Amazon marketplace identifier. */
  marketplaceId: string;
  /** Name of the brand associated with an Amazon catalog item. */
  brandName?: string;
  /** Identifier of the browse node associated with an Amazon catalog item. */
  browseNode?: string;
  /** Name of the color associated with an Amazon catalog item. */
  colorName?: string;
  /** Name, or title, associated with an Amazon catalog item. */
  itemName?: string;
  /** Name of the manufacturer associated with an Amazon catalog item. */
  manufacturer?: string;
  /** Model number associated with an Amazon catalog item. */
  modelNumber?: string;
  /** Name of the size associated with an Amazon catalog item. */
  sizeName?: string;
  /** Name of the style associated with an Amazon catalog item. */
  styleName?: string;
}

/** Variation details by marketplace for an Amazon catalog item (variation relationships). */
export type ItemVariations = ItemVariationsByMarketplace[];

/** Variation details for the Amazon catalog item for the indicated Amazon marketplace. */
export interface ItemVariationsByMarketplace {
  /** Amazon marketplace identifier. */
  marketplaceId: string;
  /** Identifiers (ASINs) of the related items. */
  asins: string[];
  /**
   * Type of variation relationship of the Amazon catalog item in the request to the related item(s): "PARENT" or "CHILD".
   * @example "PARENT"
   */
  variationType: "PARENT" | "CHILD";
}

/** Vendor details associated with an Amazon catalog item. Vendor details are available to vendors only. */
export type ItemVendorDetails = ItemVendorDetailsByMarketplace[];

/** Vendor details associated with an Amazon catalog item for the indicated Amazon marketplace. */
export interface ItemVendorDetailsByMarketplace {
  /** Amazon marketplace identifier. */
  marketplaceId: string;
  /** Brand code associated with an Amazon catalog item. */
  brandCode?: string;
  /** Product category associated with an Amazon catalog item. */
  categoryCode?: string;
  /** Manufacturer code associated with an Amazon catalog item. */
  manufacturerCode?: string;
  /** Parent vendor code of the manufacturer code. */
  manufacturerCodeParent?: string;
  /** Product group associated with an Amazon catalog item. */
  productGroup?: string;
  /** Replenishment category associated with an Amazon catalog item. */
  replenishmentCategory?:
    | "ALLOCATED"
    | "BASIC_REPLENISHMENT"
    | "IN_SEASON"
    | "LIMITED_REPLENISHMENT"
    | "MANUFACTURER_OUT_OF_STOCK"
    | "NEW_PRODUCT"
    | "NON_REPLENISHABLE"
    | "NON_STOCKUPABLE"
    | "OBSOLETE"
    | "PLANNED_REPLENISHMENT";
  /** Product subcategory associated with an Amazon catalog item. */
  subcategoryCode?: string;
}

/** Items in the Amazon catalog and search related metadata. */
export interface ItemSearchResults {
  /**
   * The estimated total number of products matched by the search query (only results up to the page count limit will be returned per request regardless of the number found).
   *
   * Note: The maximum number of items (ASINs) that can be returned and paged through is 1000.
   */
  numberOfResults: number;
  /** If available, the nextToken and/or previousToken values required to return paginated results. */
  pagination: Pagination;
  /** Search refinements. */
  refinements: Refinements;
  /** A list of items from the Amazon catalog. */
  items: Item[];
}

/** When a request produces a response that exceeds the pageSize, pagination occurs. This means the response is divided into individual pages. To retrieve the next page or the previous page, you must pass the nextToken value or the previousToken value as the pageToken parameter in the next request. When you receive the last page, there will be no nextToken key in the pagination object. */
export interface Pagination {
  /** A token that can be used to fetch the next page. */
  nextToken?: string;
  /** A token that can be used to fetch the previous page. */
  previousToken?: string;
}

/** Search refinements. */
export interface Refinements {
  /** Brand search refinements. */
  brands: BrandRefinement[];
  /** Classification search refinements. */
  classifications: ClassificationRefinement[];
}

/** Description of a brand that can be used to get more fine-grained search results. */
export interface BrandRefinement {
  /** The estimated number of results that would still be returned if refinement key applied. */
  numberOfResults: number;
  /** Brand name. For display and can be used as a search refinement. */
  brandName: string;
}

/** Description of a classification that can be used to get more fine-grained search results. */
export interface ClassificationRefinement {
  /** The estimated number of results that would still be returned if refinement key applied. */
  numberOfResults: number;
  /** Display name for the classification. */
  displayName: string;
  /** Identifier for the classification that can be used for search refinement purposes. */
  classificationId: string;
}
