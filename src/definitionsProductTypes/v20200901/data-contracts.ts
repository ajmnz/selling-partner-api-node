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

export interface SchemaLink {
  /** Link to retrieve the schema. */
  link: {
    /** URI resource for the link. */
    resource: string;
    /** HTTP method for the link operation. */
    verb: "GET";
  };
  /** Checksum hash of the schema (Base64 MD5). Can be used to verify schema contents, identify changes between schema versions, and for caching. */
  checksum: string;
}

/** A product type definition represents the attributes and data requirements for a product type in the Amazon catalog. Product type definitions are used interchangeably between the Selling Partner API for Listings Items, Selling Partner API for Catalog Items, and JSON-based listings feeds in the Selling Partner API for Feeds. */
export interface ProductTypeDefinition {
  /** Link to meta-schema describing the vocabulary used by the product type schema. */
  metaSchema?: SchemaLink;
  /** Link to schema describing the attributes and requirements for the product type. */
  schema: SchemaLink;
  /** Name of the requirements set represented in this product type definition. */
  requirements: "LISTING" | "LISTING_PRODUCT_ONLY" | "LISTING_OFFER_ONLY";
  /** Identifies if the required attributes for a requirements set are enforced by the product type definition schema. Non-enforced requirements enable structural validation of individual attributes without all of the required attributes being present (such as for partial updates). */
  requirementsEnforced: "ENFORCED" | "NOT_ENFORCED";
  /** Mapping of property group names to property groups. Property groups represent logical groupings of schema properties that can be used for display or informational purposes. */
  propertyGroups: Record<string, PropertyGroup>;
  /** Locale of the display elements contained in the product type definition. */
  locale: string;
  /** Amazon marketplace identifiers for which the product type definition is applicable. */
  marketplaceIds: string[];
  /** The name of the Amazon product type that this product type definition applies to. */
  productType: string;
  /** Human-readable and localized description of the Amazon product type. */
  displayName: string;
  /** The version details for the Amazon product type. */
  productTypeVersion: ProductTypeVersion;
}

/** A property group represents a logical grouping of schema properties that can be used for display or informational purposes. */
export interface PropertyGroup {
  /** The display label of the property group. */
  title?: string;
  /** The description of the property group. */
  description?: string;
  /** The names of the schema properties for the property group. */
  propertyNames?: string[];
}

/** The version details for an Amazon product type. */
export interface ProductTypeVersion {
  /** Version identifier. */
  version: string;
  /** When true, the version indicated by the version identifier is the latest available for the Amazon product type. */
  latest: boolean;
  /** When true, the version indicated by the version identifier is the prerelease (release candidate) for the Amazon product type. */
  releaseCandidate?: boolean;
}

/** An Amazon product type with a definition available. */
export interface ProductType {
  /** The name of the Amazon product type. */
  name: string;
  /** The human-readable and localized description of the Amazon product type. */
  displayName: string;
  /** The Amazon marketplace identifiers for which the product type definition is available. */
  marketplaceIds: string[];
}

/** A list of Amazon product types with definitions available. */
export interface ProductTypeList {
  productTypes: ProductType[];
  /** Amazon product type version identifier. */
  productTypeVersion: string;
}
