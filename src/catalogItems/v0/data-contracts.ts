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

export interface ListCatalogItemsResponse {
  /** The payload for the listCatalogItems operation. */
  payload?: ListMatchingItemsResponse;
  /** One or more unexpected errors occurred during the listCatalogItems operation. */
  errors?: ErrorList;
}

export interface ListMatchingItemsResponse {
  /** A list of items. */
  Items?: ItemList;
}

/** A list of items. */
export type ItemList = Item[];

export interface GetCatalogItemResponse {
  /** The payload for the getCatalogItem operation. */
  payload?: Item;
  /** One or more unexpected errors occurred during the getCatalogItem operation. */
  errors?: ErrorList;
}

/** An item in the Amazon catalog. */
export interface Item {
  /** The identifiers that uniquely identify the item. */
  Identifiers: IdentifierType;
  /** A list of attributes of the item. */
  AttributeSets?: AttributeSetList;
  /** A list of variation relationship information for the item. */
  Relationships?: RelationshipList;
  /** A list of sales rank information for the item by category. */
  SalesRankings?: SalesRankList;
}

export interface IdentifierType {
  /** Indicates the item is identified by MarketPlaceId and ASIN. */
  MarketplaceASIN?: ASINIdentifier;
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

/** A list of attributes for the item. */
export type AttributeSetList = AttributeSetListType[];

/** The attributes of the item. */
export interface AttributeSetListType {
  /** The actor attributes of the item. */
  Actor?: string[];
  /** The artist attributes of the item. */
  Artist?: string[];
  /** The aspect ratio attribute of the item. */
  AspectRatio?: string;
  /** The audience rating attribute of the item. */
  AudienceRating?: string;
  /** The author attributes of the item. */
  Author?: string[];
  /** The back finding attribute of the item. */
  BackFinding?: string;
  /** The band material type attribute of the item. */
  BandMaterialType?: string;
  /** The binding attribute of the item. */
  Binding?: string;
  /** The Bluray region attribute of the item. */
  BlurayRegion?: string;
  /** The brand attribute of the item. */
  Brand?: string;
  /** The CERO age rating attribute of the item. */
  CeroAgeRating?: string;
  /** The chain type attribute of the item. */
  ChainType?: string;
  /** The clasp type attribute of the item. */
  ClaspType?: string;
  /** The color attribute of the item. */
  Color?: string;
  /** The CPU manufacturer attribute of the item. */
  CpuManufacturer?: string;
  /** The CPU speed attribute of the item. */
  CpuSpeed?: DecimalWithUnits;
  /** The CPU type attribute of the item. */
  CpuType?: string;
  /** The creator attributes of the item. */
  Creator?: CreatorType[];
  /** The department attribute of the item. */
  Department?: string;
  /** The director attributes of the item. */
  Director?: string[];
  /** The display size attribute of the item. */
  DisplaySize?: DecimalWithUnits;
  /** The edition attribute of the item. */
  Edition?: string;
  /** The episode sequence attribute of the item. */
  EpisodeSequence?: string;
  /** The ESRB age rating attribute of the item. */
  EsrbAgeRating?: string;
  /** The feature attributes of the item */
  Feature?: string[];
  /** The flavor attribute of the item. */
  Flavor?: string;
  /** The format attributes of the item. */
  Format?: string[];
  /** The gem type attributes of the item. */
  GemType?: string[];
  /** The genre attribute of the item. */
  Genre?: string;
  /** The golf club flex attribute of the item. */
  GolfClubFlex?: string;
  /** The golf club loft attribute of the item. */
  GolfClubLoft?: DecimalWithUnits;
  /** The hand orientation attribute of the item. */
  HandOrientation?: string;
  /** The hard disk interface attribute of the item. */
  HardDiskInterface?: string;
  /** The hard disk size attribute of the item. */
  HardDiskSize?: DecimalWithUnits;
  /** The hardware platform attribute of the item. */
  HardwarePlatform?: string;
  /** The hazardous material type attribute of the item. */
  HazardousMaterialType?: string;
  /** The item dimensions attribute of the item. */
  ItemDimensions?: DimensionType;
  /** The adult product attribute of the item. */
  IsAdultProduct?: boolean;
  /** The autographed attribute of the item. */
  IsAutographed?: boolean;
  /** The is eligible for trade in attribute of the item. */
  IsEligibleForTradeIn?: boolean;
  /** The is memorabilia attribute of the item. */
  IsMemorabilia?: boolean;
  /** The issues per year attribute of the item. */
  IssuesPerYear?: string;
  /** The item part number attribute of the item. */
  ItemPartNumber?: string;
  /** The label attribute of the item. */
  Label?: string;
  /** The languages attribute of the item. */
  Languages?: LanguageType[];
  /** The legal disclaimer attribute of the item. */
  LegalDisclaimer?: string;
  /** The list price attribute of the item. */
  ListPrice?: Price;
  /** The manufacturer attribute of the item. */
  Manufacturer?: string;
  /** The manufacturer maximum age attribute of the item. */
  ManufacturerMaximumAge?: DecimalWithUnits;
  /** The manufacturer minimum age attribute of the item. */
  ManufacturerMinimumAge?: DecimalWithUnits;
  /** The manufacturer parts warranty description attribute of the item. */
  ManufacturerPartsWarrantyDescription?: string;
  /** The material type attributes of the item. */
  MaterialType?: string[];
  /** The maximum resolution attribute of the item. */
  MaximumResolution?: DecimalWithUnits;
  /** The media type attributes of the item. */
  MediaType?: string[];
  /** The metal stamp attribute of the item. */
  MetalStamp?: string;
  /** The metal type attribute of the item. */
  MetalType?: string;
  /** The model attribute of the item. */
  Model?: string;
  /** The number of discs attribute of the item. */
  NumberOfDiscs?: number;
  /** The number of issues attribute of the item. */
  NumberOfIssues?: number;
  /** The number of items attribute of the item. */
  NumberOfItems?: number;
  /** The number of pages attribute of the item. */
  NumberOfPages?: number;
  /** The number of tracks attribute of the item. */
  NumberOfTracks?: number;
  /** The operating system attributes of the item. */
  OperatingSystem?: string[];
  /** The optical zoom attribute of the item. */
  OpticalZoom?: DecimalWithUnits;
  /** The package dimensions attribute of the item. */
  PackageDimensions?: DimensionType;
  /** The package quantity attribute of the item. */
  PackageQuantity?: number;
  /** The part number attribute of the item. */
  PartNumber?: string;
  /** The PEGI rating attribute of the item. */
  PegiRating?: string;
  /** The platform attributes of the item. */
  Platform?: string[];
  /** The processor count attribute of the item. */
  ProcessorCount?: number;
  /** The product group attribute of the item. */
  ProductGroup?: string;
  /** The product type name attribute of the item. */
  ProductTypeName?: string;
  /** The product type subcategory attribute of the item. */
  ProductTypeSubcategory?: string;
  /** The publication date attribute of the item. */
  PublicationDate?: string;
  /** The publisher attribute of the item. */
  Publisher?: string;
  /** The region code attribute of the item. */
  RegionCode?: string;
  /** The release date attribute of the item. */
  ReleaseDate?: string;
  /** The ring size attribute of the item. */
  RingSize?: string;
  /** The running time attribute of the item. */
  RunningTime?: DecimalWithUnits;
  /** The shaft material attribute of the item. */
  ShaftMaterial?: string;
  /** The scent attribute of the item. */
  Scent?: string;
  /** The season sequence attribute of the item. */
  SeasonSequence?: string;
  /** The Seikodo product code attribute of the item. */
  SeikodoProductCode?: string;
  /** The size attribute of the item. */
  Size?: string;
  /** The size per pearl attribute of the item. */
  SizePerPearl?: string;
  /** The small image attribute of the item. */
  SmallImage?: Image;
  /** The studio attribute of the item. */
  Studio?: string;
  /** The subscription length attribute of the item. */
  SubscriptionLength?: DecimalWithUnits;
  /** The system memory size attribute of the item. */
  SystemMemorySize?: DecimalWithUnits;
  /** The system memory type attribute of the item. */
  SystemMemoryType?: string;
  /** The theatrical release date attribute of the item. */
  TheatricalReleaseDate?: string;
  /** The title attribute of the item. */
  Title?: string;
  /** The total diamond weight attribute of the item. */
  TotalDiamondWeight?: DecimalWithUnits;
  /** The total gem weight attribute of the item. */
  TotalGemWeight?: DecimalWithUnits;
  /** The warranty attribute of the item. */
  Warranty?: string;
  /** The WEEE tax value attribute of the item. */
  WeeeTaxValue?: Price;
}

/** The decimal value and unit. */
export interface DecimalWithUnits {
  /** The decimal value. */
  value?: number;
  /** The unit of the decimal value. */
  Units?: string;
}

/** The creator type attribute of an item. */
export interface CreatorType {
  /** The value of the attribute. */
  value?: string;
  /** The role of the value. */
  Role?: string;
}

/** The dimension type attribute of an item. */
export interface DimensionType {
  /** The height attribute of the dimension. */
  Height?: DecimalWithUnits;
  /** The length attribute of the dimension. */
  Length?: DecimalWithUnits;
  /** The width attribute of the dimension. */
  Width?: DecimalWithUnits;
  /** The weight attribute of the dimension. */
  Weight?: DecimalWithUnits;
}

/** The language type attribute of an item. */
export interface LanguageType {
  /** The name attribute of the item. */
  Name?: string;
  /** The type attribute of the item. */
  Type?: string;
  /** The audio format attribute of the item. */
  AudioFormat?: string;
}

/** The image attribute of the item. */
export interface Image {
  /** The image URL attribute of the item. */
  URL?: string;
  /** The image height attribute of the item. */
  Height?: DecimalWithUnits;
  /** The image width attribute of the item. */
  Width?: DecimalWithUnits;
}

/** The price attribute of the item. */
export interface Price {
  /** The amount. */
  Amount?: number;
  /** The currency code of the amount. */
  CurrencyCode?: string;
}

/** A list of variation relationship information, if applicable for the item. */
export type RelationshipList = RelationshipType[];

/** Specific variations of the item. */
export interface RelationshipType {
  /** The identifiers that uniquely identify the item that is related. */
  Identifiers?: IdentifierType;
  /** The color variation of the item. */
  Color?: string;
  /** The edition variation of the item. */
  Edition?: string;
  /** The flavor variation of the item. */
  Flavor?: string;
  /** The gem type variations of the item. */
  GemType?: string[];
  /** The golf club flex variation of an item. */
  GolfClubFlex?: string;
  /** The hand orientation variation of an item. */
  HandOrientation?: string;
  /** The hardware platform variation of an item. */
  HardwarePlatform?: string;
  /** The material type variations of an item. */
  MaterialType?: string[];
  /** The metal type variation of an item. */
  MetalType?: string;
  /** The model variation of an item. */
  Model?: string;
  /** The operating system variations of an item. */
  OperatingSystem?: string[];
  /** The product type subcategory variation of an item. */
  ProductTypeSubcategory?: string;
  /** The ring size variation of an item. */
  RingSize?: string;
  /** The shaft material variation of an item. */
  ShaftMaterial?: string;
  /** The scent variation of an item. */
  Scent?: string;
  /** The size variation of an item. */
  Size?: string;
  /** The size per pearl variation of an item. */
  SizePerPearl?: string;
  /** The golf club loft variation of an item. */
  GolfClubLoft?: DecimalWithUnits;
  /** The total diamond weight variation of an item. */
  TotalDiamondWeight?: DecimalWithUnits;
  /** The total gem weight variation of an item. */
  TotalGemWeight?: DecimalWithUnits;
  /** The package quantity variation of an item. */
  PackageQuantity?: number;
  /** The item dimensions relationship of an item. */
  ItemDimensions?: DimensionType;
}

/** A list of sales rank information for the item by category. */
export type SalesRankList = SalesRankType[];

export interface SalesRankType {
  /** Identifies the item category from which the sales rank is taken. */
  ProductCategoryId: string;
  /**
   * The sales rank of the item within the item category.
   * @format int32
   */
  Rank: number;
}

export interface ListCatalogCategoriesResponse {
  /** The payload for the listCatalogCategories operation. */
  payload?: ListOfCategories;
  /** One or more unexpected errors occurred during the listCatalogCategories operation. */
  errors?: ErrorList;
}

export type ListOfCategories = Categories[];

export interface Categories {
  /** The identifier for the product category (or browse node). */
  ProductCategoryId?: string;
  /** The name of the product category (or browse node). */
  ProductCategoryName?: string;
  /** The parent product category. */
  parent?: object;
}

/** A list of error responses returned when a request is unsuccessful. */
export type ErrorList = Error[];

/** Error response returned when the request is unsuccessful. */
export interface Error {
  /** An error code that identifies the type of error that occurred. */
  code: string;
  /** A message that describes the error condition in a human-readable form. */
  message: string;
  /** Additional information that can help the caller understand or fix the issue. */
  details?: string;
}
