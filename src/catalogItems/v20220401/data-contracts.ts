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
  /** A JSON object that contains structured item attribute data keyed by attribute name. Catalog item attributes conform to the related product type definitions available in the Selling Partner API for Product Type Definitions. */
  attributes?: ItemAttributes;
  /** Array of dimensions associated with the item in the Amazon catalog by Amazon marketplace. */
  dimensions?: ItemDimensions;
  /** Identifiers associated with the item in the Amazon catalog, such as UPC and EAN identifiers. */
  identifiers?: ItemIdentifiers;
  /** Images for an item in the Amazon catalog. */
  images?: ItemImages;
  /** Product types associated with the Amazon catalog item. */
  productTypes?: ItemProductTypes;
  /** Relationships by marketplace for an Amazon catalog item (for example, variations). */
  relationships?: ItemRelationships;
  /** Sales ranks of an Amazon catalog item. */
  salesRanks?: ItemSalesRanks;
  /** Summary details of an Amazon catalog item. */
  summaries?: ItemSummaries;
  /** Vendor details associated with an Amazon catalog item. Vendor details are available to vendors only. */
  vendorDetails?: ItemVendorDetails;
}

/** Amazon Standard Identification Number (ASIN) is the unique identifier for an item in the Amazon catalog. */
export type ItemAsin = string;

/** A JSON object that contains structured item attribute data keyed by attribute name. Catalog item attributes conform to the related product type definitions available in the Selling Partner API for Product Type Definitions. */
export type ItemAttributes = Record<string, any>;

/** Classification (browse node) associated with an Amazon catalog item. */
export interface ItemBrowseClassification {
  /** Display name for the classification. */
  displayName: string;
  /** Identifier of the classification (browse node identifier). */
  classificationId: string;
}

/** Individual contributor to the creation of an item, such as an author or actor. */
export interface ItemContributor {
  /** Role of an individual contributor in the creation of an item, such as author or actor. */
  role: ItemContributorRole;
  /** Name of the contributor, such as Jane Austen. */
  value: string;
}

/** Role of an individual contributor in the creation of an item, such as author or actor. */
export interface ItemContributorRole {
  /** Display name of the role in the requested locale, such as Author or Actor. */
  displayName?: string;
  /** Role value for the Amazon catalog item, such as author or actor. */
  value: string;
}

/** Individual dimension value of an Amazon catalog item or item package. */
export interface Dimension {
  /** Measurement unit of the dimension value. */
  unit?: string;
  /** Numeric dimension value. */
  value?: number;
}

/** Dimensions of an Amazon catalog item or item in its packaging. */
export interface Dimensions {
  /** Height of an item or item package. */
  height?: Dimension;
  /** Length of an item or item package. */
  length?: Dimension;
  /** Weight of an item or item package. */
  weight?: Dimension;
  /** Width of an item or item package. */
  width?: Dimension;
}

/** Array of dimensions associated with the item in the Amazon catalog by Amazon marketplace. */
export type ItemDimensions = ItemDimensionsByMarketplace[];

/** Dimensions associated with the item in the Amazon catalog for the indicated Amazon marketplace. */
export interface ItemDimensionsByMarketplace {
  /** Amazon marketplace identifier. */
  marketplaceId: string;
  /** Dimensions of an Amazon catalog item. */
  item?: Dimensions;
  /** Dimensions of an Amazon catalog item in its packaging. */
  package?: Dimensions;
}

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

/** Images for an item in the Amazon catalog. */
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
   * Variant of the image, such as `MAIN` or `PT01`.
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
  /** Sales ranks of an Amazon catalog item for an Amazon marketplace by classification. */
  classificationRanks?: ItemClassificationSalesRank[];
  /** Sales ranks of an Amazon catalog item for an Amazon marketplace by website display group. */
  displayGroupRanks?: ItemDisplayGroupSalesRank[];
}

/** Sales rank of an Amazon catalog item by classification. */
export interface ItemClassificationSalesRank {
  /** Identifier of the classification associated with the sales rank. */
  classificationId: string;
  /** Title, or name, of the sales rank. */
  title: string;
  /** Corresponding Amazon retail website link, or URL, for the sales rank. */
  link?: string;
  /** Sales rank value. */
  rank: number;
}

/** Sales rank of an Amazon catalog item by website display group. */
export interface ItemDisplayGroupSalesRank {
  /** Name of the website display group associated with the sales rank */
  websiteDisplayGroup: string;
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
  /** Identifies an Amazon catalog item is intended for an adult audience or is sexual in nature. */
  adultProduct?: boolean;
  /** Identifies an Amazon catalog item is autographed by a player or celebrity. */
  autographed?: boolean;
  /** Name of the brand associated with an Amazon catalog item. */
  brand?: string;
  /** Classification (browse node) associated with an Amazon catalog item. */
  browseClassification?: ItemBrowseClassification;
  /** Name of the color associated with an Amazon catalog item. */
  color?: string;
  /** Individual contributors to the creation of an item, such as the authors or actors. */
  contributors?: ItemContributor[];
  /** Classification type associated with the Amazon catalog item. */
  itemClassification?: "BASE_PRODUCT" | "OTHER" | "PRODUCT_BUNDLE" | "VARIATION_PARENT";
  /** Name, or title, associated with an Amazon catalog item. */
  itemName?: string;
  /** Name of the manufacturer associated with an Amazon catalog item. */
  manufacturer?: string;
  /** Identifies an Amazon catalog item is memorabilia valued for its connection with historical events, culture, or entertainment. */
  memorabilia?: boolean;
  /** Model number associated with an Amazon catalog item. */
  modelNumber?: string;
  /** Quantity of an Amazon catalog item in one package. */
  packageQuantity?: number;
  /** Part number associated with an Amazon catalog item. */
  partNumber?: string;
  /**
   * First date on which an Amazon catalog item is shippable to customers.
   * @format date
   */
  releaseDate?: string;
  /** Name of the size associated with an Amazon catalog item. */
  size?: string;
  /** Name of the style associated with an Amazon catalog item. */
  style?: string;
  /** Identifies an Amazon catalog item is eligible for trade-in. */
  tradeInEligible?: boolean;
  /** Identifier of the website display group associated with an Amazon catalog item. */
  websiteDisplayGroup?: string;
  /** Display name of the website display group associated with an Amazon catalog item. */
  websiteDisplayGroupName?: string;
}

/** Variation theme indicating the combination of Amazon item catalog attributes that define the variation family. */
export interface ItemVariationTheme {
  /** Names of the Amazon catalog item attributes associated with the variation theme. */
  attributes?: string[];
  /**
   * Variation theme indicating the combination of Amazon item catalog attributes that define the variation family.
   * @example "COLOR_NAME/STYLE_NAME"
   */
  theme?: string;
}

/** Relationships by marketplace for an Amazon catalog item (for example, variations). */
export type ItemRelationships = ItemRelationshipsByMarketplace[];

/** Relationship details for the Amazon catalog item for the indicated Amazon marketplace. */
export interface ItemRelationshipsByMarketplace {
  /** Amazon marketplace identifier. */
  marketplaceId: string;
  /** Relationships for the item. */
  relationships: ItemRelationship[];
}

/** Relationship details for an Amazon catalog item. */
export interface ItemRelationship {
  /** Identifiers (ASINs) of the related items that are children of this item. */
  childAsins?: string[];
  /** Identifiers (ASINs) of the related items that are parents of this item. */
  parentAsins?: string[];
  /** For "VARIATION" relationships, variation theme indicating the combination of Amazon item catalog attributes that define the variation family. */
  variationTheme?: ItemVariationTheme;
  /**
   * Type of relationship.
   * @example "VARIATION"
   */
  type: "VARIATION" | "PACKAGE_HIERARCHY";
}

/** Product category or subcategory associated with an Amazon catalog item. */
export interface ItemVendorDetailsCategory {
  /** Display name of the product category or subcategory */
  displayName?: string;
  /** Value (code) of the product category or subcategory. */
  value?: string;
}

/** Vendor details associated with an Amazon catalog item. Vendor details are available to vendors only. */
export type ItemVendorDetails = ItemVendorDetailsByMarketplace[];

/** Vendor details associated with an Amazon catalog item for the indicated Amazon marketplace. */
export interface ItemVendorDetailsByMarketplace {
  /** Amazon marketplace identifier. */
  marketplaceId: string;
  /** Brand code associated with an Amazon catalog item. */
  brandCode?: string;
  /** Manufacturer code associated with an Amazon catalog item. */
  manufacturerCode?: string;
  /** Parent vendor code of the manufacturer code. */
  manufacturerCodeParent?: string;
  /** Product category associated with an Amazon catalog item. */
  productCategory?: ItemVendorDetailsCategory;
  /** Product group associated with an Amazon catalog item. */
  productGroup?: string;
  /** Product subcategory associated with an Amazon catalog item. */
  productSubcategory?: ItemVendorDetailsCategory;
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
}

/** Items in the Amazon catalog and search related metadata. */
export interface ItemSearchResults {
  /**
   * For `identifiers`-based searches, the total number of Amazon catalog items found. For `keywords`-based searches, the estimated total number of Amazon catalog items matched by the search query (only results up to the page count limit will be returned per request regardless of the number found).
   *
   * Note: The maximum number of items (ASINs) that can be returned and paged through is 1000.
   */
  numberOfResults: number;
  /** If available, the `nextToken` and/or `previousToken` values required to return paginated results. */
  pagination: Pagination;
  /** Search refinements for `keywords`-based searches. */
  refinements: Refinements;
  /** A list of items from the Amazon catalog. */
  items: Item[];
}

/** When a request produces a response that exceeds the `pageSize`, pagination occurs. This means the response is divided into individual pages. To retrieve the next page or the previous page, you must pass the `nextToken` value or the `previousToken` value as the `pageToken` parameter in the next request. When you receive the last page, there will be no `nextToken` key in the pagination object. */
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
