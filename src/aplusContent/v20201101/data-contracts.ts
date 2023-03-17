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

/** The base response data for all A+ Content operations when a request is successful or partially successful. Individual operations may extend this with additional data. */
export interface AplusResponse {
  /** A set of messages to the user, such as warnings or comments. */
  warnings?: MessageSet;
}

/** The base response data for paginated A+ Content operations. Individual operations may extend this with additional data. If nextPageToken is not returned, there are no more pages to return. */
export type AplusPaginatedResponse = AplusResponse & {
  /** A page token that is returned when the results of the call exceed the page size. To get another page of results, call the operation again, passing in this value with the pageToken parameter. */
  nextPageToken?: PageToken;
};

/** The error response for when a request is unsuccessful. */
export interface ErrorList {
  /** A list of error responses returned when a request is unsuccessful. */
  errors: Error[];
}

/**
 * A set of messages to the user, such as warnings or comments.
 * @uniqueItems true
 */
export type MessageSet = Error[];

/** Error response returned when the request is unsuccessful. */
export interface Error {
  /**
   * The code that identifies the type of error condition.
   * @minLength 1
   */
  code: string;
  /**
   * A human readable description of the error condition.
   * @minLength 1
   */
  message: string;
  /**
   * Additional information, if available, to clarify the error condition.
   * @minLength 1
   */
  details?: string;
}

/**
 * A list of A+ Content metadata records.
 * @uniqueItems false
 */
export type ContentMetadataRecordList = ContentMetadataRecord[];

/** The metadata for an A+ Content document, with additional information for content management. */
export interface ContentMetadataRecord {
  /** A unique reference key for the A+ Content document. A content reference key cannot form a permalink and may change in the future. A content reference key is not guaranteed to match any A+ content identifier. */
  contentReferenceKey: ContentReferenceKey;
  /** The metadata of an A+ Content document. */
  contentMetadata: ContentMetadata;
}

/** The metadata of an A+ Content document. */
export interface ContentMetadata {
  /**
   * The A+ Content document name.
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /** The identifier for the marketplace where the A+ Content is published. */
  marketplaceId: MarketplaceId;
  /** The submission status of the content document. */
  status: ContentStatus;
  /** The set of content badges. */
  badgeSet: ContentBadgeSet;
  /**
   * The approximate age of the A+ Content document and metadata.
   * @format date-time
   */
  updateTime: string;
}

/** The A+ Content document type. */
export enum ContentType {
  EBC = "EBC",
  EMC = "EMC",
}

/**
 * The A+ Content document subtype. This represents a special-purpose type of an A+ Content document. Not every A+ Content document type will have a subtype, and subtypes may change at any time.
 * @minLength 1
 */
export type ContentSubType = string;

/** The submission status of the content document. */
export enum ContentStatus {
  APPROVED = "APPROVED",
  DRAFT = "DRAFT",
  REJECTED = "REJECTED",
  SUBMITTED = "SUBMITTED",
}

/**
 * The set of content badges.
 * @uniqueItems true
 */
export type ContentBadgeSet = ContentBadge[];

/** A flag that provides additional information about an A+ Content document. */
export enum ContentBadge {
  BULK = "BULK",
  GENERATED = "GENERATED",
  LAUNCHPAD = "LAUNCHPAD",
  PREMIUM = "PREMIUM",
  STANDARD = "STANDARD",
}

/**
 * The set of ASIN badges.
 * @uniqueItems true
 */
export type AsinBadgeSet = AsinBadge[];

/** A flag that provides additional information about an ASIN. This is contextual and may change depending on the request that generated it. */
export enum AsinBadge {
  BRAND_NOT_ELIGIBLE = "BRAND_NOT_ELIGIBLE",
  CATALOG_NOT_FOUND = "CATALOG_NOT_FOUND",
  CONTENT_NOT_PUBLISHED = "CONTENT_NOT_PUBLISHED",
  CONTENT_PUBLISHED = "CONTENT_PUBLISHED",
}

/**
 * The identifier for the marketplace where the A+ Content is published.
 * @minLength 1
 */
export type MarketplaceId = string;

/**
 * The IETF language tag. This only supports the primary language subtag with one secondary language subtag. The secondary language subtag is almost always a regional designation. This does not support additional subtags beyond the primary and secondary subtags.
 * **Pattern:** ^[a-z]{2,}-[A-Z0-9]{2,}$
 * @minLength 5
 */
export type LanguageTag = string;

/**
 * The set of ASINs.
 * @uniqueItems true
 */
export type AsinSet = Asin[];

/**
 * The Amazon Standard Identification Number (ASIN).
 * @minLength 10
 */
export type Asin = string;

/**
 * The set of ASIN metadata.
 * @uniqueItems true
 */
export type AsinMetadataSet = AsinMetadata[];

/** The A+ Content ASIN with additional metadata for content management. If you don't include the `includedDataSet` parameter in a call to the listContentDocumentAsinRelations operation, the related ASINs are returned without metadata. */
export interface AsinMetadata {
  /** The Amazon Standard Identification Number (ASIN). */
  asin: Asin;
  /** The set of ASIN badges. */
  badgeSet?: AsinBadgeSet;
  /** The Amazon Standard Identification Number (ASIN). */
  parent?: Asin;
  /**
   * The title for the ASIN in the Amazon catalog.
   * @minLength 1
   */
  title?: string;
  /**
   * The default image for the ASIN in the Amazon catalog.
   * @minLength 1
   */
  imageUrl?: string;
  /** A set of content reference keys. */
  contentReferenceKeySet?: ContentReferenceKeySet;
}

/**
 * A list of A+ Content publishing records.
 * @uniqueItems false
 */
export type PublishRecordList = PublishRecord[];

/** The full context for an A+ Content publishing event. */
export interface PublishRecord {
  /** The identifier for the marketplace where the A+ Content is published. */
  marketplaceId: MarketplaceId;
  /**
   * The IETF language tag. This only supports the primary language subtag with one secondary language subtag. The secondary language subtag is almost always a regional designation. This does not support additional subtags beyond the primary and secondary subtags.
   * **Pattern:** ^[a-z]{2,}-[A-Z0-9]{2,}$
   */
  locale: LanguageTag;
  /** The Amazon Standard Identification Number (ASIN). */
  asin: Asin;
  /** The A+ Content document type. */
  contentType: ContentType;
  /** The A+ Content document subtype. This represents a special-purpose type of an A+ Content document. Not every A+ Content document type will have a subtype, and subtypes may change at any time. */
  contentSubType?: ContentSubType;
  /** A unique reference key for the A+ Content document. A content reference key cannot form a permalink and may change in the future. A content reference key is not guaranteed to match any A+ content identifier. */
  contentReferenceKey: ContentReferenceKey;
}

/**
 * A set of content reference keys.
 * @uniqueItems true
 */
export type ContentReferenceKeySet = ContentReferenceKey[];

/**
 * A unique reference key for the A+ Content document. A content reference key cannot form a permalink and may change in the future. A content reference key is not guaranteed to match any A+ content identifier.
 * @minLength 1
 */
export type ContentReferenceKey = string;

/**
 * A page token that is returned when the results of the call exceed the page size. To get another page of results, call the operation again, passing in this value with the pageToken parameter.
 * @minLength 1
 */
export type PageToken = string;

/** The instructions for optionally cropping an image. If no cropping is desired, set the dimensions to the original image size. If the image is cropped and no offset values are provided, then the coordinates of the top left corner of the cropped image, relative to the original image, are defaulted to (0,0). */
export interface ImageCropSpecification {
  /** The dimensions extending from the top left corner of the cropped image, or the top left corner of the original image if there is no cropping. Only `pixels` is allowed as the units value for ImageDimensions. */
  size: ImageDimensions;
  /** The top left corner of the cropped image, specified in the original image's coordinate space. */
  offset?: ImageOffsets;
}

/** The dimensions extending from the top left corner of the cropped image, or the top left corner of the original image if there is no cropping. Only `pixels` is allowed as the units value for ImageDimensions. */
export interface ImageDimensions {
  /** A whole number dimension and its unit of measurement. For example, this can represent 100 pixels. */
  width: IntegerWithUnits;
  /** A whole number dimension and its unit of measurement. For example, this can represent 100 pixels. */
  height: IntegerWithUnits;
}

/** The top left corner of the cropped image, specified in the original image's coordinate space. */
export interface ImageOffsets {
  /** A whole number dimension and its unit of measurement. For example, this can represent 100 pixels. */
  x: IntegerWithUnits;
  /** A whole number dimension and its unit of measurement. For example, this can represent 100 pixels. */
  y: IntegerWithUnits;
}

/** A whole number dimension and its unit of measurement. For example, this can represent 100 pixels. */
export interface IntegerWithUnits {
  /** The dimension value. */
  value: number;
  /** The unit of measurement. */
  units: string;
}

/** A content document with additional information for content management. */
export interface ContentRecord {
  /** A unique reference key for the A+ Content document. A content reference key cannot form a permalink and may change in the future. A content reference key is not guaranteed to match any A+ content identifier. */
  contentReferenceKey: ContentReferenceKey;
  /** The metadata of an A+ Content document. */
  contentMetadata?: ContentMetadata;
  /** The A+ Content document. This is the enhanced content that is published to product detail pages. */
  contentDocument?: ContentDocument;
}

/** The A+ Content document. This is the enhanced content that is published to product detail pages. */
export interface ContentDocument {
  /**
   * The A+ Content document name.
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /** The A+ Content document type. */
  contentType: ContentType;
  /** The A+ Content document subtype. This represents a special-purpose type of an A+ Content document. Not every A+ Content document type will have a subtype, and subtypes may change at any time. */
  contentSubType?: ContentSubType;
  /**
   * The IETF language tag. This only supports the primary language subtag with one secondary language subtag. The secondary language subtag is almost always a regional designation. This does not support additional subtags beyond the primary and secondary subtags.
   * **Pattern:** ^[a-z]{2,}-[A-Z0-9]{2,}$
   */
  locale: LanguageTag;
  /** A list of A+ Content modules. */
  contentModuleList: ContentModuleList;
}

/**
 * A list of A+ Content modules.
 * @maxItems 100
 * @minItems 1
 * @uniqueItems false
 */
export type ContentModuleList = ContentModule[];

/** An A+ Content module. An A+ Content document is composed of content modules. The contentModuleType property selects which content module types to use. */
export interface ContentModule {
  /** The type of A+ Content module. */
  contentModuleType: ContentModuleType;
  /** The standard company logo image. */
  standardCompanyLogo?: StandardCompanyLogoModule;
  /** The standard product comparison table. */
  standardComparisonTable?: StandardComparisonTableModule;
  /** Four standard images with text, presented across a single row. */
  standardFourImageText?: StandardFourImageTextModule;
  /** Four standard images with text, presented on a grid of four quadrants. */
  standardFourImageTextQuadrant?: StandardFourImageTextQuadrantModule;
  /** Standard headline text, an image, and body text. */
  standardHeaderImageText?: StandardHeaderImageTextModule;
  /** Two images, two paragraphs, and two bulleted lists. One image is smaller and displayed in the sidebar. */
  standardImageSidebar?: StandardImageSidebarModule;
  /** A standard background image with a floating text box. */
  standardImageTextOverlay?: StandardImageTextOverlayModule;
  /** Standard images with text, presented one at a time. The user clicks on thumbnails to view each block. */
  standardMultipleImageText?: StandardMultipleImageTextModule;
  /** Standard product description text. */
  standardProductDescription?: StandardProductDescriptionModule;
  /** A standard image with several paragraphs and a bulleted list. */
  standardSingleImageHighlights?: StandardSingleImageHighlightsModule;
  /** A standard image with paragraphs and a bulleted list, and extra space for technical details. */
  standardSingleImageSpecsDetail?: StandardSingleImageSpecsDetailModule;
  /** A standard headline and body text with an image on the side. */
  standardSingleSideImage?: StandardSingleSideImageModule;
  /** The standard table of technical feature names and definitions. */
  standardTechSpecs?: StandardTechSpecsModule;
  /** A standard headline and body text. */
  standardText?: StandardTextModule;
  /** Three standard images with text, presented across a single row. */
  standardThreeImageText?: StandardThreeImageTextModule;
}

/** The type of A+ Content module. */
export enum ContentModuleType {
  STANDARD_COMPANY_LOGO = "STANDARD_COMPANY_LOGO",
  STANDARD_COMPARISON_TABLE = "STANDARD_COMPARISON_TABLE",
  STANDARD_FOUR_IMAGE_TEXT = "STANDARD_FOUR_IMAGE_TEXT",
  STANDARD_FOUR_IMAGE_TEXT_QUADRANT = "STANDARD_FOUR_IMAGE_TEXT_QUADRANT",
  STANDARD_HEADER_IMAGE_TEXT = "STANDARD_HEADER_IMAGE_TEXT",
  STANDARD_IMAGE_SIDEBAR = "STANDARD_IMAGE_SIDEBAR",
  STANDARD_IMAGE_TEXT_OVERLAY = "STANDARD_IMAGE_TEXT_OVERLAY",
  STANDARD_MULTIPLE_IMAGE_TEXT = "STANDARD_MULTIPLE_IMAGE_TEXT",
  STANDARD_PRODUCT_DESCRIPTION = "STANDARD_PRODUCT_DESCRIPTION",
  STANDARD_SINGLE_IMAGE_HIGHLIGHTS = "STANDARD_SINGLE_IMAGE_HIGHLIGHTS",
  STANDARD_SINGLE_IMAGE_SPECS_DETAIL = "STANDARD_SINGLE_IMAGE_SPECS_DETAIL",
  STANDARD_SINGLE_SIDE_IMAGE = "STANDARD_SINGLE_SIDE_IMAGE",
  STANDARD_TECH_SPECS = "STANDARD_TECH_SPECS",
  STANDARD_TEXT = "STANDARD_TEXT",
  STANDARD_THREE_IMAGE_TEXT = "STANDARD_THREE_IMAGE_TEXT",
}

/** The standard company logo image. */
export interface StandardCompanyLogoModule {
  /** A reference to an image, hosted in the A+ Content media library. */
  companyLogo: ImageComponent;
}

/** The standard product comparison table. */
export interface StandardComparisonTableModule {
  /**
   * @maxItems 6
   * @minItems 0
   */
  productColumns?: StandardComparisonProductBlock[];
  /**
   * @maxItems 10
   * @minItems 0
   */
  metricRowLabels?: PlainTextItem[];
}

/** Four standard images with text, presented across a single row. */
export interface StandardFourImageTextModule {
  /** Rich text content. */
  headline?: TextComponent;
  /** The A+ Content standard image and text box block. */
  block1?: StandardImageTextBlock;
  /** The A+ Content standard image and text box block. */
  block2?: StandardImageTextBlock;
  /** The A+ Content standard image and text box block. */
  block3?: StandardImageTextBlock;
  /** The A+ Content standard image and text box block. */
  block4?: StandardImageTextBlock;
}

/** Four standard images with text, presented on a grid of four quadrants. */
export interface StandardFourImageTextQuadrantModule {
  /** The A+ Content standard image and text box block. */
  block1: StandardImageTextBlock;
  /** The A+ Content standard image and text box block. */
  block2: StandardImageTextBlock;
  /** The A+ Content standard image and text box block. */
  block3: StandardImageTextBlock;
  /** The A+ Content standard image and text box block. */
  block4: StandardImageTextBlock;
}

/** Standard headline text, an image, and body text. */
export interface StandardHeaderImageTextModule {
  /** Rich text content. */
  headline?: TextComponent;
  /** The A+ Content standard image and text box block. */
  block?: StandardImageTextBlock;
}

/** Two images, two paragraphs, and two bulleted lists. One image is smaller and displayed in the sidebar. */
export interface StandardImageSidebarModule {
  /** Rich text content. */
  headline?: TextComponent;
  /** The A+ Content standard image and caption block. */
  imageCaptionBlock?: StandardImageCaptionBlock;
  /** The A+ Content standard text box block, comprised of a paragraph with a headline. */
  descriptionTextBlock?: StandardTextBlock;
  /** The A+ Content standard fixed length list of text, usually presented as bullet points. */
  descriptionListBlock?: StandardTextListBlock;
  /** The A+ Content standard image and text box block. */
  sidebarImageTextBlock?: StandardImageTextBlock;
  /** The A+ Content standard fixed length list of text, usually presented as bullet points. */
  sidebarListBlock?: StandardTextListBlock;
}

/** A standard background image with a floating text box. */
export interface StandardImageTextOverlayModule {
  /** The relative color scheme of content. */
  overlayColorType: ColorType;
  /** The A+ Content standard image and text box block. */
  block?: StandardImageTextBlock;
}

/** Standard images with text, presented one at a time. The user clicks on thumbnails to view each block. */
export interface StandardMultipleImageTextModule {
  blocks?: StandardImageTextCaptionBlock[];
}

/** Standard product description text. */
export interface StandardProductDescriptionModule {
  /** A list of rich text content, usually presented in a text box. */
  body: ParagraphComponent;
}

/** A standard image with several paragraphs and a bulleted list. */
export interface StandardSingleImageHighlightsModule {
  /** A reference to an image, hosted in the A+ Content media library. */
  image?: ImageComponent;
  /** Rich text content. */
  headline?: TextComponent;
  /** The A+ Content standard text box block, comprised of a paragraph with a headline. */
  textBlock1?: StandardTextBlock;
  /** The A+ Content standard text box block, comprised of a paragraph with a headline. */
  textBlock2?: StandardTextBlock;
  /** The A+ Content standard text box block, comprised of a paragraph with a headline. */
  textBlock3?: StandardTextBlock;
  /** The A+ standard fixed-length list of text, with a related headline. */
  bulletedListBlock?: StandardHeaderTextListBlock;
}

/** A standard image with paragraphs and a bulleted list, and extra space for technical details. */
export interface StandardSingleImageSpecsDetailModule {
  /** Rich text content. */
  headline?: TextComponent;
  /** A reference to an image, hosted in the A+ Content media library. */
  image?: ImageComponent;
  /** Rich text content. */
  descriptionHeadline?: TextComponent;
  /** The A+ Content standard text box block, comprised of a paragraph with a headline. */
  descriptionBlock1?: StandardTextBlock;
  /** The A+ Content standard text box block, comprised of a paragraph with a headline. */
  descriptionBlock2?: StandardTextBlock;
  /** Rich text content. */
  specificationHeadline?: TextComponent;
  /** The A+ standard fixed-length list of text, with a related headline. */
  specificationListBlock?: StandardHeaderTextListBlock;
  /** The A+ Content standard text box block, comprised of a paragraph with a headline. */
  specificationTextBlock?: StandardTextBlock;
}

/** A standard headline and body text with an image on the side. */
export interface StandardSingleSideImageModule {
  /** The relative positioning of content. */
  imagePositionType: PositionType;
  /** The A+ Content standard image and text box block. */
  block?: StandardImageTextBlock;
}

/** The standard table of technical feature names and definitions. */
export interface StandardTechSpecsModule {
  /** Rich text content. */
  headline?: TextComponent;
  /**
   * The specification list.
   * @maxItems 16
   * @minItems 4
   */
  specificationList: StandardTextPairBlock[];
  /**
   * The number of tables to present. Features are evenly divided between the tables.
   * @min 1
   * @max 2
   */
  tableCount?: number;
}

/** A standard headline and body text. */
export interface StandardTextModule {
  /** Rich text content. */
  headline?: TextComponent;
  /** A list of rich text content, usually presented in a text box. */
  body: ParagraphComponent;
}

/** Three standard images with text, presented across a single row. */
export interface StandardThreeImageTextModule {
  /** Rich text content. */
  headline?: TextComponent;
  /** The A+ Content standard image and text box block. */
  block1?: StandardImageTextBlock;
  /** The A+ Content standard image and text box block. */
  block2?: StandardImageTextBlock;
  /** The A+ Content standard image and text box block. */
  block3?: StandardImageTextBlock;
}

/** The A+ Content standard comparison product block. */
export interface StandardComparisonProductBlock {
  /**
   * The rank or index of this comparison product block within the module. Different blocks cannot occupy the same position within a single module.
   * @min 1
   * @max 6
   */
  position: number;
  /** A reference to an image, hosted in the A+ Content media library. */
  image?: ImageComponent;
  /**
   * The comparison product title.
   * @minLength 1
   * @maxLength 80
   */
  title?: string;
  /** The Amazon Standard Identification Number (ASIN). */
  asin?: Asin;
  /** Determines whether this block of content is visually highlighted. */
  highlight?: boolean;
  /**
   * Comparison metrics for the product.
   * @maxItems 10
   * @minItems 0
   */
  metrics?: PlainTextItem[];
}

/** The A+ standard fixed-length list of text, with a related headline. */
export interface StandardHeaderTextListBlock {
  /** Rich text content. */
  headline?: TextComponent;
  /** The A+ Content standard fixed length list of text, usually presented as bullet points. */
  block?: StandardTextListBlock;
}

/** The A+ Content standard fixed length list of text, usually presented as bullet points. */
export interface StandardTextListBlock {
  /**
   * @maxItems 8
   * @minItems 0
   */
  textList: TextItem[];
}

/** The A+ Content standard image and text block, with a related caption. The caption may not display on all devices. */
export interface StandardImageTextCaptionBlock {
  /** The A+ Content standard image and text box block. */
  block?: StandardImageTextBlock;
  /** Rich text content. */
  caption?: TextComponent;
}

/** The A+ Content standard image and caption block. */
export interface StandardImageCaptionBlock {
  /** A reference to an image, hosted in the A+ Content media library. */
  image?: ImageComponent;
  /** Rich text content. */
  caption?: TextComponent;
}

/** The A+ Content standard image and text box block. */
export interface StandardImageTextBlock {
  /** A reference to an image, hosted in the A+ Content media library. */
  image?: ImageComponent;
  /** Rich text content. */
  headline?: TextComponent;
  /** A list of rich text content, usually presented in a text box. */
  body?: ParagraphComponent;
}

/** The A+ Content standard text box block, comprised of a paragraph with a headline. */
export interface StandardTextBlock {
  /** Rich text content. */
  headline?: TextComponent;
  /** A list of rich text content, usually presented in a text box. */
  body?: ParagraphComponent;
}

/** The A+ Content standard label and description block, comprised of a pair of text components. */
export interface StandardTextPairBlock {
  /** Rich text content. */
  label?: TextComponent;
  /** Rich text content. */
  description?: TextComponent;
}

/** Rich positional text, usually presented as a collection of bullet points. */
export interface TextItem {
  /**
   * The rank or index of this text item within the collection. Different items cannot occupy the same position within a single collection.
   * @min 1
   * @max 100
   */
  position: number;
  /** Rich text content. */
  text: TextComponent;
}

/** Plain positional text, used in collections of brief labels and descriptors. */
export interface PlainTextItem {
  /**
   * The rank or index of this text item within the collection. Different items cannot occupy the same position within a single collection.
   * @min 1
   * @max 100
   */
  position: number;
  /**
   * The actual plain text.
   * @minLength 1
   * @maxLength 250
   */
  value: string;
}

/** A reference to an image, hosted in the A+ Content media library. */
export interface ImageComponent {
  /**
   * This identifier is provided by the Selling Partner API for Uploads.
   * @minLength 1
   */
  uploadDestinationId: string;
  /** The instructions for optionally cropping an image. If no cropping is desired, set the dimensions to the original image size. If the image is cropped and no offset values are provided, then the coordinates of the top left corner of the cropped image, relative to the original image, are defaulted to (0,0). */
  imageCropSpecification: ImageCropSpecification;
  /**
   * The alternative text for the image.
   * @minLength 1
   * @maxLength 100
   */
  altText: string;
}

/** A list of rich text content, usually presented in a text box. */
export interface ParagraphComponent {
  /**
   * @maxItems 100
   * @minItems 1
   */
  textList: TextComponent[];
}

/** Rich text content. */
export interface TextComponent {
  /**
   * The actual plain text.
   * @minLength 1
   * @maxLength 10000
   */
  value: string;
  /** A set of content decorators. */
  decoratorSet?: DecoratorSet;
}

/** The relative color scheme of content. */
export enum ColorType {
  DARK = "DARK",
  LIGHT = "LIGHT",
}

/** The relative positioning of content. */
export enum PositionType {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

/**
 * A set of content decorators.
 * @uniqueItems true
 */
export type DecoratorSet = Decorator[];

/** A decorator applied to a content string value in order to create rich text. */
export interface Decorator {
  /** The type of rich text decorator. */
  type?: DecoratorType;
  /**
   * The starting character of this decorator within the content string. Use zero for the first character.
   * @min 0
   * @max 10000
   */
  offset?: number;
  /**
   * The number of content characters to alter with this decorator. Decorators such as line breaks can have zero length and fit between characters.
   * @min 0
   * @max 10000
   */
  length?: number;
  /**
   * The relative intensity or variation of this decorator. Decorators such as bullet-points, for example, can have multiple indentation depths.
   * @min 0
   * @max 100
   */
  depth?: number;
}

/** The type of rich text decorator. */
export enum DecoratorType {
  LIST_ITEM = "LIST_ITEM",
  LIST_ORDERED = "LIST_ORDERED",
  LIST_UNORDERED = "LIST_UNORDERED",
  STYLE_BOLD = "STYLE_BOLD",
  STYLE_ITALIC = "STYLE_ITALIC",
  STYLE_LINEBREAK = "STYLE_LINEBREAK",
  STYLE_PARAGRAPH = "STYLE_PARAGRAPH",
  STYLE_UNDERLINE = "STYLE_UNDERLINE",
}

export type SearchContentDocumentsResponse = AplusPaginatedResponse & {
  /** The content metadata records. */
  contentMetadataRecords: ContentMetadataRecordList;
};

export type GetContentDocumentResponse = AplusResponse & {
  /** A content document with additional information for content management. */
  contentRecord: ContentRecord;
};

export interface PostContentDocumentRequest {
  /** The A+ Content document. This is the enhanced content that is published to product detail pages. */
  contentDocument: ContentDocument;
}

export type PostContentDocumentResponse = AplusResponse & {
  /** A unique reference key for the A+ Content document. A content reference key cannot form a permalink and may change in the future. A content reference key is not guaranteed to match any A+ content identifier. */
  contentReferenceKey: ContentReferenceKey;
};

export type ListContentDocumentAsinRelationsResponse = AplusPaginatedResponse & {
  /** The set of ASIN metadata. */
  asinMetadataSet: AsinMetadataSet;
};

export interface PostContentDocumentAsinRelationsRequest {
  /** The set of ASINs. */
  asinSet: AsinSet;
}

export type PostContentDocumentAsinRelationsResponse = AplusResponse;

export type ValidateContentDocumentAsinRelationsResponse = AplusResponse & ErrorList;

export type SearchContentPublishRecordsResponse = AplusPaginatedResponse & {
  /** A list of A+ Content publishing records. */
  publishRecordList: PublishRecordList;
};

export type PostContentDocumentApprovalSubmissionResponse = AplusResponse;

export type PostContentDocumentSuspendSubmissionResponse = AplusResponse;
