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

/** Reasons why a given ASIN is not recommended for shipment to Amazon's fulfillment network. */
export interface ASINInboundGuidance {
  /** The Amazon Standard Identification Number (ASIN) of the item. */
  ASIN: string;
  /** Specific inbound guidance for an item. */
  InboundGuidance: InboundGuidance;
  /** A list of reasons for the current inbound guidance for this item. */
  GuidanceReasonList?: GuidanceReasonList;
}

/** A list of ASINs and their associated inbound guidance. */
export type ASINInboundGuidanceList = ASINInboundGuidance[];

/** Item preparation instructions to help with item sourcing decisions. */
export interface ASINPrepInstructions {
  /** The Amazon Standard Identification Number (ASIN) of the item. */
  ASIN?: string;
  /** Labeling requirements for the item. For more information about FBA labeling requirements, see the Seller Central Help for your marketplace. */
  BarcodeInstruction?: BarcodeInstruction;
  /** Item preparation instructions. */
  PrepGuidance?: PrepGuidance;
  /** A list of preparation instructions to help with item sourcing decisions. */
  PrepInstructionList?: PrepInstructionList;
}

/** A list of item preparation instructions. */
export type ASINPrepInstructionsList = ASINPrepInstructions[];

export interface Address {
  /**
   * Name of the individual or business.
   * @maxLength 50
   */
  Name: string;
  /**
   * The street address information.
   * @maxLength 180
   */
  AddressLine1: string;
  /**
   * Additional street address information, if required.
   * @maxLength 60
   */
  AddressLine2?: string;
  /**
   * The district or county.
   * @maxLength 25
   */
  DistrictOrCounty?: string;
  /**
   * The city.
   * @maxLength 30
   */
  City: string;
  /**
   * The state or province code.
   *
   * If state or province codes are used in your marketplace, it is recommended that you include one with your request. This helps Amazon to select the most appropriate Amazon fulfillment center for your inbound shipment plan.
   */
  StateOrProvinceCode: string;
  /** The country code in two-character ISO 3166-1 alpha-2 format. */
  CountryCode: string;
  /**
   * The postal code.
   *
   * If postal codes are used in your marketplace, we recommended that you include one with your request. This helps Amazon select the most appropriate Amazon fulfillment center for the inbound shipment plan.
   * @maxLength 30
   */
  PostalCode: string;
}

/** The fees for Amazon to prep goods for shipment. */
export interface AmazonPrepFeesDetails {
  /** Preparation instructions for shipping an item to Amazon's fulfillment network. For more information about preparing items for shipment to Amazon's fulfillment network, see the Seller Central Help for your marketplace. */
  PrepInstruction?: PrepInstruction;
  /** The fee for Amazon to prepare 1 unit. */
  FeePerUnit?: Amount;
}

/** A list of preparation instructions and fees for Amazon to prep goods for shipment. */
export type AmazonPrepFeesDetailsList = AmazonPrepFeesDetails[];

/** The monetary value. */
export interface Amount {
  /** The currency code. */
  CurrencyCode: CurrencyCode;
  /** The amount. */
  Value: BigDecimalType;
}

/** Labeling requirements for the item. For more information about FBA labeling requirements, see the Seller Central Help for your marketplace. */
export enum BarcodeInstruction {
  RequiresFNSKULabel = "RequiresFNSKULabel",
  CanUseOriginalBarcode = "CanUseOriginalBarcode",
  MustProvideSellerSKU = "MustProvideSellerSKU",
}

/** @format double */
export type BigDecimalType = number;

/** The manual processing fee per unit and total fee for a shipment. */
export interface BoxContentsFeeDetails {
  /** The number of units to ship. */
  TotalUnits?: Quantity;
  /** The manual processing fee per unit. */
  FeePerUnit?: Amount;
  /** The total manual processing fee for the shipment. */
  TotalFee?: Amount;
}

/** Where the seller provided box contents information for a shipment. */
export enum BoxContentsSource {
  NONE = "NONE",
  FEED = "FEED",
  Value2DBARCODE = "2D_BARCODE",
  INTERACTIVE = "INTERACTIVE",
}

/** The condition of the item. */
export enum Condition {
  NewItem = "NewItem",
  NewWithWarranty = "NewWithWarranty",
  NewOEM = "NewOEM",
  NewOpenBox = "NewOpenBox",
  UsedLikeNew = "UsedLikeNew",
  UsedVeryGood = "UsedVeryGood",
  UsedGood = "UsedGood",
  UsedAcceptable = "UsedAcceptable",
  UsedPoor = "UsedPoor",
  UsedRefurbished = "UsedRefurbished",
  CollectibleLikeNew = "CollectibleLikeNew",
  CollectibleVeryGood = "CollectibleVeryGood",
  CollectibleGood = "CollectibleGood",
  CollectibleAcceptable = "CollectibleAcceptable",
  CollectiblePoor = "CollectiblePoor",
  RefurbishedWithWarranty = "RefurbishedWithWarranty",
  Refurbished = "Refurbished",
  Club = "Club",
}

export interface ConfirmPreorderResult {
  /** Date passed in with the NeedByDate parameter. The confirmed shipment must arrive at the Amazon fulfillment center by this date to avoid delivery promise breaks for pre-ordered items. In YYYY-MM-DD format. */
  ConfirmedNeedByDate?: DateStringType;
  /** Date that determines which pre-order items in the shipment are eligible for pre-order. The pre-order Buy Box will appear for any pre-order item in the shipment with a release date on or after this date. In YYYY-MM-DD format. */
  ConfirmedFulfillableDate?: DateStringType;
}

/** The response schema for the confirmPreorder operation. */
export interface ConfirmPreorderResponse {
  /** The payload for the confirmPreorder operation. */
  payload?: ConfirmPreorderResult;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

export interface CommonTransportResult {
  /** The workflow status for a shipment with an Amazon-partnered carrier. */
  TransportResult?: TransportResult;
}

/** The response schema for the confirmTransport operation. */
export interface ConfirmTransportResponse {
  /** The payload for the confirmTransport operation. */
  payload?: CommonTransportResult;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** Contact information for the person in the seller's organization who is responsible for a Less Than Truckload/Full Truckload (LTL/FTL) shipment. */
export interface Contact {
  /**
   * The name of the contact person.
   * @maxLength 50
   */
  Name: string;
  /**
   * The phone number of the contact person.
   * @maxLength 20
   */
  Phone: string;
  /**
   * The email address of the contact person.
   * @maxLength 50
   */
  Email: string;
  /**
   * The fax number of the contact person.
   * @maxLength 20
   */
  Fax?: string;
}

/** The request schema for the createInboundShipmentPlan operation. */
export interface CreateInboundShipmentPlanRequest {
  /** The address from which the inbound shipment will be sent. */
  ShipFromAddress: Address;
  /** The seller's preference for label preparation for an inbound shipment. */
  LabelPrepPreference: LabelPrepPreference;
  /**
   * The two-character country code for the country where the inbound shipment is to be sent.
   *
   * Note: Not required. Specifying both ShipToCountryCode and ShipToCountrySubdivisionCode returns an error.
   *
   *  Values:
   *
   *  ShipToCountryCode values for North America:
   *  * CA – Canada
   *  * MX - Mexico
   *  * US - United States
   *
   * ShipToCountryCode values for MCI sellers in Europe:
   *  * DE – Germany
   *  * ES – Spain
   *  * FR – France
   *  * GB – United Kingdom
   *  * IT – Italy
   *
   * Default: The country code for the seller's home marketplace.
   */
  ShipToCountryCode?: string;
  /**
   * The two-character country code, followed by a dash and then up to three characters that represent the subdivision of the country where the inbound shipment is to be sent. For example, "IN-MH". In full ISO 3166-2 format.
   *
   * Note: Not required. Specifying both ShipToCountryCode and ShipToCountrySubdivisionCode returns an error.
   */
  ShipToCountrySubdivisionCode?: string;
  InboundShipmentPlanRequestItems: InboundShipmentPlanRequestItemList;
}

export interface CreateInboundShipmentPlanResult {
  /** A list of inbound shipment plan information */
  InboundShipmentPlans?: InboundShipmentPlanList;
}

/** The response schema for the createInboundShipmentPlan operation. */
export interface CreateInboundShipmentPlanResponse {
  /** The payload for the createInboundShipmentPlan operation. */
  payload?: CreateInboundShipmentPlanResult;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** The request schema for an inbound shipment. */
export interface InboundShipmentRequest {
  /** Inbound shipment information used to create and update inbound shipments. */
  InboundShipmentHeader: InboundShipmentHeader;
  /** A list of inbound shipment item information. */
  InboundShipmentItems: InboundShipmentItemList;
  /** A marketplace identifier. Specifies the marketplace where the product would be stored. */
  MarketplaceId: string;
}

export interface InboundShipmentResult {
  /** The shipment identifier submitted in the request. */
  ShipmentId: string;
}

/** The response schema for this operation. */
export interface InboundShipmentResponse {
  /** The payload for this operation. */
  payload?: InboundShipmentResult;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** The currency code. */
export enum CurrencyCode {
  USD = "USD",
  GBP = "GBP",
}

/** @format date */
export type DateStringType = string;

/** The dimension values and unit of measurement. */
export interface Dimensions {
  /** The length dimension. */
  Length: BigDecimalType;
  /** The width dimension. */
  Width: BigDecimalType;
  /** The height dimension. */
  Height: BigDecimalType;
  /** The unit of measurement for the dimensions. */
  Unit: UnitOfMeasurement;
}

/** The reason that the ASIN is invalid. */
export enum ErrorReason {
  DoesNotExist = "DoesNotExist",
  InvalidASIN = "InvalidASIN",
}

/** The response schema for the estimateTransport operation. */
export interface EstimateTransportResponse {
  /** The payload for the estimateTransport operation. */
  payload?: CommonTransportResult;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** The response schema for the getBillOfLading operation. */
export interface GetBillOfLadingResponse {
  /** The payload for the getBillOfLading operation. */
  payload?: BillOfLadingDownloadURL;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

export interface GetInboundGuidanceResult {
  /** A list of SKU inbound guidance information. */
  SKUInboundGuidanceList?: SKUInboundGuidanceList;
  /** A list of invalid SKU values and the reason they are invalid. */
  InvalidSKUList?: InvalidSKUList;
  /** A list of ASINs and their associated inbound guidance. */
  ASINInboundGuidanceList?: ASINInboundGuidanceList;
  /** A list of invalid ASIN values and the reasons they are invalid. */
  InvalidASINList?: InvalidASINList;
}

/** The response schema for the getInboundGuidance operation. */
export interface GetInboundGuidanceResponse {
  /** The payload for the getInboundGuidance operation. */
  payload?: GetInboundGuidanceResult;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

export interface LabelDownloadURL {
  /** URL to download the label for the package. Note: The URL will only be valid for 15 seconds */
  DownloadURL?: string;
}

export interface BillOfLadingDownloadURL {
  /** URL to download the bill of lading for the package. Note: The URL will only be valid for 15 seconds */
  DownloadURL?: string;
}

/** The response schema for the getLabels operation. */
export interface GetLabelsResponse {
  /** The payload for the getLabels operation. */
  payload?: LabelDownloadURL;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

export interface GetPreorderInfoResult {
  /** Indicates whether the shipment contains items that have been enabled for pre-order. For more information about enabling items for pre-order, see the Seller Central Help. */
  ShipmentContainsPreorderableItems?: boolean;
  /** Indicates whether this shipment has been confirmed for pre-order. */
  ShipmentConfirmedForPreorder?: boolean;
  /** Date that the shipment would need to arrive at an Amazon fulfillment center to avoid delivery promise breaks for pre-ordered items if this shipment is later confirmed for pre-order. In YYYY-MM-DD format. See also the confirmPreorder operation. */
  NeedByDate?: DateStringType;
  /** Date in YYYY-MM-DD format that determines which pre-order items in the shipment are eligible for pre-order. If this shipment is confirmed for pre-order with a subsequent call to the confirmPreorder operation, the pre-order Buy Box will appear for any pre-order items in the shipment with a release date on or after this date. Call the getShipmentItems operation to get the release dates for the pre-order items in this shipment. */
  ConfirmedFulfillableDate?: DateStringType;
}

/** The response schema for the getPreorderInfo operation. */
export interface GetPreorderInfoResponse {
  /** The payload for the getPreorderInfo operation. */
  payload?: GetPreorderInfoResult;
  /** One or more unexpected errors occurred during the operation. */
  errors?: ErrorList;
}

export interface GetPrepInstructionsResult {
  /** A list of SKU labeling requirements and item preparation instructions. */
  SKUPrepInstructionsList?: SKUPrepInstructionsList;
  /** A list of invalid SKU values and the reason they are invalid. */
  InvalidSKUList?: InvalidSKUList;
  /** A list of item preparation instructions. */
  ASINPrepInstructionsList?: ASINPrepInstructionsList;
  /** A list of invalid ASIN values and the reasons they are invalid. */
  InvalidASINList?: InvalidASINList;
}

/** The response schema for the getPrepInstructions operation. */
export interface GetPrepInstructionsResponse {
  /** The payload for the getPrepInstructions operation. */
  payload?: GetPrepInstructionsResult;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

export interface GetTransportDetailsResult {
  /** Inbound shipment information, including carrier details, shipment status, and the workflow status for a request for shipment with an Amazon-partnered carrier. */
  TransportContent?: TransportContent;
}

/** The response schema for the getTransportDetails operation. */
export interface GetTransportDetailsResponse {
  /** The payload for the getTransportDetails operation. */
  payload?: GetTransportDetailsResult;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** A reason for the current inbound guidance for an item. */
export enum GuidanceReason {
  SlowMovingASIN = "SlowMovingASIN",
  NoApplicableGuidance = "NoApplicableGuidance",
}

/** A list of inbound guidance reason information. */
export type GuidanceReasonList = GuidanceReason[];

/** Specific inbound guidance for an item. */
export enum InboundGuidance {
  InboundNotRecommended = "InboundNotRecommended",
  InboundOK = "InboundOK",
}

/** Inbound shipment information used to create and update inbound shipments. */
export interface InboundShipmentHeader {
  /** The name for the shipment. Use a naming convention that helps distinguish between shipments over time, such as the date the shipment was created. */
  ShipmentName: string;
  /** The return address. */
  ShipFromAddress: Address;
  /** The identifier for the fulfillment center to which the shipment will be shipped. Get this value from the InboundShipmentPlan object in the response returned by the createInboundShipmentPlan operation. */
  DestinationFulfillmentCenterId: string;
  /**
   * Indicates whether or not an inbound shipment contains case-packed boxes. Note: A shipment must contain either all case-packed boxes or all individually packed boxes.
   *
   * Possible values:
   *
   * true - All boxes in the shipment must be case packed.
   *
   * false - All boxes in the shipment must be individually packed.
   *
   * Note: If AreCasesRequired = true for an inbound shipment, then the value of QuantityInCase must be greater than zero for every item in the shipment. Otherwise the service returns an error.
   */
  AreCasesRequired?: boolean;
  /** Indicates the status of the inbound shipment. When used with the createInboundShipment operation, WORKING is the only valid value. When used with the updateInboundShipment operation, possible values are WORKING, SHIPPED or CANCELLED. */
  ShipmentStatus: ShipmentStatus;
  /** The preference for label preparation for an inbound shipment. */
  LabelPrepPreference: LabelPrepPreference;
  /** How the seller intends to provide box contents information for a shipment. Leaving this field blank is equivalent to selecting `NONE`, which will incur a fee if the seller does not provide box contents information. */
  IntendedBoxContentsSource?: IntendedBoxContentsSource;
}

/** Information about the seller's inbound shipments. Returned by the listInboundShipments operation. */
export interface InboundShipmentInfo {
  /** The shipment identifier submitted in the request. */
  ShipmentId?: string;
  /** The name for the inbound shipment. */
  ShipmentName?: string;
  /** The return address. */
  ShipFromAddress: Address;
  /** An Amazon fulfillment center identifier created by Amazon. */
  DestinationFulfillmentCenterId?: string;
  /** Indicates the status of the inbound shipment. When used with the createInboundShipment operation, WORKING is the only valid value. When used with the updateInboundShipment operation, possible values are WORKING, SHIPPED or CANCELLED. */
  ShipmentStatus?: ShipmentStatus;
  /** The type of label preparation that is required for the inbound shipment. */
  LabelPrepType?: LabelPrepType;
  /** Indicates whether or not an inbound shipment contains case-packed boxes. When AreCasesRequired = true for an inbound shipment, all items in the inbound shipment must be case packed. */
  AreCasesRequired: boolean;
  /** Date by which the shipment must arrive at the Amazon fulfillment center to avoid delivery promise breaks for pre-ordered items. */
  ConfirmedNeedByDate?: DateStringType;
  /** Where the seller provided box contents information for a shipment. */
  BoxContentsSource?: BoxContentsSource;
  /** An estimate of the manual processing fee charged by Amazon for boxes without box content information. This is only returned when BoxContentsSource is NONE. */
  EstimatedBoxContentsFee?: BoxContentsFeeDetails;
}

/** Item information for an inbound shipment. Submitted with a call to the createInboundShipment or updateInboundShipment operation. */
export interface InboundShipmentItem {
  /** A shipment identifier originally returned by the createInboundShipmentPlan operation. */
  ShipmentId?: string;
  /** The seller SKU of the item. */
  SellerSKU: string;
  /** Amazon's fulfillment network SKU of the item. */
  FulfillmentNetworkSKU?: string;
  /** The item quantity that you are shipping. */
  QuantityShipped: Quantity;
  /** The item quantity that has been received at an Amazon fulfillment center. */
  QuantityReceived?: Quantity;
  /** The item quantity in each case, for case-packed items. Note that QuantityInCase multiplied by the number of boxes in the inbound shipment equals QuantityShipped. Also note that all of the boxes of an inbound shipment must either be case packed or individually packed. For that reason, when you submit the createInboundShipment or the updateInboundShipment operation, the value of QuantityInCase must be provided for every item in the shipment or for none of the items in the shipment. */
  QuantityInCase?: Quantity;
  /** The date that a pre-order item will be available for sale. */
  ReleaseDate?: DateStringType;
  /** A list of preparation instructions and who is responsible for that preparation. */
  PrepDetailsList?: PrepDetailsList;
}

/** A list of inbound shipment item information. */
export type InboundShipmentItemList = InboundShipmentItem[];

/** A list of inbound shipment information. */
export type InboundShipmentList = InboundShipmentInfo[];

/** Inbound shipment information used to create an inbound shipment. Returned by the createInboundShipmentPlan operation. */
export interface InboundShipmentPlan {
  /** A shipment identifier originally returned by the createInboundShipmentPlan operation. */
  ShipmentId: string;
  /** An Amazon fulfillment center identifier created by Amazon. */
  DestinationFulfillmentCenterId: string;
  /** The address of the Amazon fulfillment center to which to ship the items. */
  ShipToAddress: Address;
  /** The type of label preparation that is required for the inbound shipment. */
  LabelPrepType: LabelPrepType;
  /** SKU and quantity information for the items in the shipment. */
  Items: InboundShipmentPlanItemList;
  /** The manual processing fee per unit and total fee for a shipment. */
  EstimatedBoxContentsFee?: BoxContentsFeeDetails;
}

/** Item information used to create an inbound shipment. Returned by the createInboundShipmentPlan operation. */
export interface InboundShipmentPlanItem {
  /** The seller SKU of the item. */
  SellerSKU: string;
  /** Amazon's fulfillment network SKU of the item. */
  FulfillmentNetworkSKU: string;
  /** The item quantity that you are shipping. */
  Quantity: Quantity;
  /** A list of preparation instructions and who is responsible for that preparation. */
  PrepDetailsList?: PrepDetailsList;
}

/** A list of inbound shipment plan item information. */
export type InboundShipmentPlanItemList = InboundShipmentPlanItem[];

/** A list of inbound shipment plan information */
export type InboundShipmentPlanList = InboundShipmentPlan[];

/** Item information for creating an inbound shipment plan. Submitted with a call to the createInboundShipmentPlan operation. */
export interface InboundShipmentPlanRequestItem {
  /** The seller SKU of the item. */
  SellerSKU: string;
  /** The Amazon Standard Identification Number (ASIN) of the item. */
  ASIN: string;
  /** The condition of the item. */
  Condition: Condition;
  /** The item quantity. */
  Quantity: Quantity;
  /** The item quantity in each case, for case-packed items. Note that QuantityInCase multiplied by the number of cases in the inbound shipment equals Quantity. Also note that all of the boxes of an inbound shipment must either be case packed or individually packed. For that reason, when you submit the createInboundShipmentPlan operation, the value of QuantityInCase must be provided for every item in the shipment or for none of the items in the shipment. */
  QuantityInCase?: Quantity;
  /** A list of preparation instructions and who is responsible for that preparation. */
  PrepDetailsList?: PrepDetailsList;
}

export type InboundShipmentPlanRequestItemList = InboundShipmentPlanRequestItem[];

/** How the seller intends to provide box contents information for a shipment. Leaving this field blank is equivalent to selecting `NONE`, which will incur a fee if the seller does not provide box contents information. */
export enum IntendedBoxContentsSource {
  NONE = "NONE",
  FEED = "FEED",
  Value2DBARCODE = "2D_BARCODE",
}

export interface InvalidASIN {
  /** The Amazon Standard Identification Number (ASIN) of the item. */
  ASIN?: string;
  /** The reason that the ASIN is invalid. */
  ErrorReason?: ErrorReason;
}

/** A list of invalid ASIN values and the reasons they are invalid. */
export type InvalidASINList = InvalidASIN[];

export interface InvalidSKU {
  /** The seller SKU of the item. */
  SellerSKU?: string;
  /** The reason why the seller SKU is invalid. */
  ErrorReason?: ErrorReason;
}

/** A list of invalid SKU values and the reason they are invalid. */
export type InvalidSKUList = InvalidSKU[];

/** The preference for label preparation for an inbound shipment. */
export enum LabelPrepPreference {
  SELLER_LABEL = "SELLER_LABEL",
  AMAZON_LABEL_ONLY = "AMAZON_LABEL_ONLY",
  AMAZON_LABEL_PREFERRED = "AMAZON_LABEL_PREFERRED",
}

/** The type of label preparation that is required for the inbound shipment. */
export enum LabelPrepType {
  NO_LABEL = "NO_LABEL",
  SELLER_LABEL = "SELLER_LABEL",
  AMAZON_LABEL = "AMAZON_LABEL",
}

export interface GetShipmentItemsResult {
  /** A list of item information for an inbound shipment. */
  ItemData?: InboundShipmentItemList;
  /** When present and not empty, pass this string token in the next request to return the next response page. */
  NextToken?: string;
}

/** The response schema for the getShipmentItems operation. */
export interface GetShipmentItemsResponse {
  /** The payload for the getShipmentItems operation. */
  payload?: GetShipmentItemsResult;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

export interface GetShipmentsResult {
  /** Information about your inbound shipments. */
  ShipmentData?: InboundShipmentList;
  /** When present and not empty, pass this string token in the next request to return the next response page. */
  NextToken?: string;
}

/** The response schema for the getShipments operation. */
export interface GetShipmentsResponse {
  /** The payload for the getShipments operation. */
  payload?: GetShipmentsResult;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** Information that you provide to Amazon about a Less Than Truckload/Full Truckload (LTL/FTL) shipment by a carrier that has not partnered with Amazon. */
export interface NonPartneredLtlDataInput {
  /** The carrier that you are using for the inbound shipment. */
  CarrierName: string;
  /** The PRO number ("progressive number" or "progressive ID") assigned to the shipment by the carrier. */
  ProNumber: ProNumber;
}

/** Information returned by Amazon about a Less Than Truckload/Full Truckload (LTL/FTL) shipment shipped by a carrier that has not partnered with Amazon. */
export interface NonPartneredLtlDataOutput {
  /** The carrier that you are using for the inbound shipment. */
  CarrierName: string;
  /** The PRO number ("progressive number" or "progressive ID") assigned to the shipment by the carrier. */
  ProNumber: ProNumber;
}

/** Information that you provide to Amazon about a Small Parcel shipment shipped by a carrier that has not partnered with Amazon. */
export interface NonPartneredSmallParcelDataInput {
  /** The carrier that you are using for the inbound shipment. */
  CarrierName: string;
  /** A list of package tracking information. */
  PackageList: NonPartneredSmallParcelPackageInputList;
}

/** Information returned by Amazon about a Small Parcel shipment by a carrier that has not partnered with Amazon. */
export interface NonPartneredSmallParcelDataOutput {
  /** A list of packages, including carrier, tracking number, and status information for each package. */
  PackageList: NonPartneredSmallParcelPackageOutputList;
}

/** The tracking number of the package, provided by the carrier. */
export interface NonPartneredSmallParcelPackageInput {
  /** The tracking number of the package, provided by the carrier. */
  TrackingId: TrackingId;
}

/** A list of package tracking information. */
export type NonPartneredSmallParcelPackageInputList =
  NonPartneredSmallParcelPackageInput[];

/** Carrier, tracking number, and status information for the package. */
export interface NonPartneredSmallParcelPackageOutput {
  /** The carrier that you are using for the inbound shipment. */
  CarrierName: string;
  /** The tracking number of the package, provided by the carrier. */
  TrackingId: TrackingId;
  /** The shipment status of the package. */
  PackageStatus: PackageStatus;
}

/** A list of packages, including carrier, tracking number, and status information for each package. */
export type NonPartneredSmallParcelPackageOutputList =
  NonPartneredSmallParcelPackageOutput[];

/** The shipment status of the package. */
export enum PackageStatus {
  SHIPPED = "SHIPPED",
  IN_TRANSIT = "IN_TRANSIT",
  DELIVERED = "DELIVERED",
  CHECKED_IN = "CHECKED_IN",
  RECEIVING = "RECEIVING",
  CLOSED = "CLOSED",
  DELETED = "DELETED",
}

/** Pallet information. */
export interface Pallet {
  /** The dimensions of the pallet. Length and width must be 40 inches by 48 inches. Height must be less than or equal to 60 inches. */
  Dimensions: Dimensions;
  /** The weight of the pallet. */
  Weight?: Weight;
  /** Indicates whether pallets will be stacked when carrier arrives for pick-up. */
  IsStacked: boolean;
}

/** A list of pallet information. */
export type PalletList = Pallet[];

/** The estimated shipping cost for a shipment using an Amazon-partnered carrier. */
export interface PartneredEstimate {
  /** The amount that the Amazon-partnered carrier will charge to ship the inbound shipment. */
  Amount: Amount;
  /**
   * The date in ISO 8601 date time format by which this estimate must be confirmed. After this date the estimate is no longer valid and cannot be confirmed.
   *
   * Returned only if the TransportStatus value of the inbound shipment is ESTIMATED.
   */
  ConfirmDeadline?: TimeStampStringType;
  /**
   * The date in ISO 8601 date time format after which a confirmed transportation request can no longer be voided. This date is 24 hours after a Small Parcel shipment transportation request is confirmed or one hour after a Less Than Truckload/Full Truckload (LTL/FTL) shipment transportation request is confirmed. After the void deadline passes the seller's account will be charged for the shipping cost.
   *
   * Returned only if the TransportStatus value of the inbound shipment is CONFIRMED.
   */
  VoidDeadline?: TimeStampStringType;
}

/** Information that is required by an Amazon-partnered carrier to ship a Less Than Truckload/Full Truckload (LTL/FTL) inbound shipment. */
export interface PartneredLtlDataInput {
  /** Contact information for the person in the seller's organization who is responsible for the shipment. Used by the carrier if they have questions about the shipment. */
  Contact?: Contact;
  /** The number of boxes in the shipment. */
  BoxCount?: UnsignedIntType;
  /** The freight class of the shipment. For information about determining the freight class, contact the carrier. */
  SellerFreightClass?: SellerFreightClass;
  /** The date that the shipment will be ready to be picked up by the carrier. */
  FreightReadyDate?: DateStringType;
  /** A list of pallet information. */
  PalletList?: PalletList;
  /** The total weight of the shipment. */
  TotalWeight?: Weight;
  /** The declaration of the total value of the inventory in the shipment. */
  SellerDeclaredValue?: Amount;
}

/** Information returned by Amazon about a Less Than Truckload/Full Truckload (LTL/FTL) shipment by an Amazon-partnered carrier. */
export interface PartneredLtlDataOutput {
  /** Contact information for the person in the seller's organization who is responsible for the shipment. Used by the carrier if they have questions about the shipment. */
  Contact: Contact;
  /** The number of boxes in the shipment. */
  BoxCount: UnsignedIntType;
  /** The freight class of the shipment. For information about determining the freight class, contact the carrier. */
  SellerFreightClass?: SellerFreightClass;
  /** The date that the shipment will be ready to be picked up by the carrier. Must be in YYYY-MM-DD format. */
  FreightReadyDate: DateStringType;
  /** A list of pallet information. */
  PalletList: PalletList;
  /** The total weight of the shipment. */
  TotalWeight: Weight;
  /** Your declaration of the total value of the inventory in the shipment. */
  SellerDeclaredValue?: Amount;
  /** Estimate by Amazon of the total value of the inventory in the shipment. */
  AmazonCalculatedValue?: Amount;
  /** The estimated date that the shipment will be picked up by the carrier, in YYYY-MM-DD format. */
  PreviewPickupDate: DateStringType;
  /** The estimated date that the shipment will be delivered to an Amazon fulfillment center, in YYYY-MM-DD format. */
  PreviewDeliveryDate: DateStringType;
  /** The freight class of the shipment as estimated by Amazon if you did not include a freight class when you called the putTransportDetails operation. */
  PreviewFreightClass: SellerFreightClass;
  /** A unique identifier created by Amazon that identifies this Amazon-partnered, Less Than Truckload/Full Truckload (LTL/FTL) shipment. */
  AmazonReferenceId: string;
  /** Indicates whether the bill of lading for the shipment is available. */
  IsBillOfLadingAvailable: boolean;
  /** The estimated shipping cost using an Amazon-partnered carrier. */
  PartneredEstimate?: PartneredEstimate;
  /** The carrier for the inbound shipment. */
  CarrierName: string;
}

/** Information that is required by an Amazon-partnered carrier to ship a Small Parcel inbound shipment. */
export interface PartneredSmallParcelDataInput {
  /** A list of dimensions and weight information for packages. */
  PackageList?: PartneredSmallParcelPackageInputList;
  /** The Amazon-partnered carrier to use for the inbound shipment. **`CarrierName`** values in France (FR), Italy (IT), Spain (ES), the United Kingdom (UK), and the United States (US): `UNITED_PARCEL_SERVICE_INC`. <br> **`CarrierName`** values in Germany (DE): `DHL_STANDARD`,`UNITED_PARCEL_SERVICE_INC`. <br>Default: `UNITED_PARCEL_SERVICE_INC`. */
  CarrierName?: string;
}

/** Information returned by Amazon about a Small Parcel shipment by an Amazon-partnered carrier. */
export interface PartneredSmallParcelDataOutput {
  /** A list of packages, including shipping information from the Amazon-partnered carrier. */
  PackageList: PartneredSmallParcelPackageOutputList;
  /** The estimated shipping cost for a shipment using an Amazon-partnered carrier. */
  PartneredEstimate?: PartneredEstimate;
}

/** Dimension and weight information for the package. */
export interface PartneredSmallParcelPackageInput {
  /** The dimension values and unit of measurement. */
  Dimensions: Dimensions;
  /** The weight of the package. */
  Weight: Weight;
}

/** A list of dimensions and weight information for packages. */
export type PartneredSmallParcelPackageInputList = PartneredSmallParcelPackageInput[];

/** Dimension, weight, and shipping information for the package. */
export interface PartneredSmallParcelPackageOutput {
  /** The dimension values and unit of measurement. */
  Dimensions: Dimensions;
  /** The weight of the package. */
  Weight: Weight;
  /** The carrier specified with a previous call to putTransportDetails. */
  CarrierName: string;
  /** The tracking number of the package, provided by the carrier. */
  TrackingId: TrackingId;
  /** The shipment status of the package. */
  PackageStatus: PackageStatus;
}

/** A list of packages, including shipping information from the Amazon-partnered carrier. */
export type PartneredSmallParcelPackageOutputList = PartneredSmallParcelPackageOutput[];

/** Preparation instructions and who is responsible for the preparation. */
export interface PrepDetails {
  /** Preparation instructions for shipping an item to Amazon's fulfillment network. For more information about preparing items for shipment to Amazon's fulfillment network, see the Seller Central Help for your marketplace. */
  PrepInstruction: PrepInstruction;
  /** Indicates who will prepare the item. */
  PrepOwner: PrepOwner;
}

/** A list of preparation instructions and who is responsible for that preparation. */
export type PrepDetailsList = PrepDetails[];

/** Item preparation instructions. */
export enum PrepGuidance {
  ConsultHelpDocuments = "ConsultHelpDocuments",
  NoAdditionalPrepRequired = "NoAdditionalPrepRequired",
  SeePrepInstructionsList = "SeePrepInstructionsList",
}

/** Preparation instructions for shipping an item to Amazon's fulfillment network. For more information about preparing items for shipment to Amazon's fulfillment network, see the Seller Central Help for your marketplace. */
export enum PrepInstruction {
  Polybagging = "Polybagging",
  BubbleWrapping = "BubbleWrapping",
  Taping = "Taping",
  BlackShrinkWrapping = "BlackShrinkWrapping",
  Labeling = "Labeling",
  HangGarment = "HangGarment",
  SetCreation = "SetCreation",
  Boxing = "Boxing",
  RemoveFromHanger = "RemoveFromHanger",
  Debundle = "Debundle",
  SuffocationStickering = "SuffocationStickering",
  CapSealing = "CapSealing",
  SetStickering = "SetStickering",
  BlankStickering = "BlankStickering",
  NoPrep = "NoPrep",
}

/** A list of preparation instructions to help with item sourcing decisions. */
export type PrepInstructionList = PrepInstruction[];

/** Indicates who will prepare the item. */
export enum PrepOwner {
  AMAZON = "AMAZON",
  SELLER = "SELLER",
}

/** The PRO number ("progressive number" or "progressive ID") assigned to the shipment by the carrier. */
export type ProNumber = string;

/** The request schema for a putTransportDetails operation. */
export interface PutTransportDetailsRequest {
  /** Indicates whether a putTransportDetails request is for an Amazon-partnered carrier. */
  IsPartnered: boolean;
  /** Specifies the carrier shipment type in a putTransportDetails request. */
  ShipmentType: ShipmentType;
  /** Information required to create an Amazon-partnered carrier shipping estimate, or to alert the Amazon fulfillment center to the arrival of an inbound shipment by a non-Amazon-partnered carrier. */
  TransportDetails: TransportDetailInput;
}

/** Workflow status for a shipment with an Amazon-partnered carrier. */
export interface PutTransportDetailsResponse {
  /** The payload for the putTransportDetails operation. */
  payload?: CommonTransportResult;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/**
 * The item quantity.
 * @format int32
 */
export type Quantity = number;

/** Reasons why a given seller SKU is not recommended for shipment to Amazon's fulfillment network. */
export interface SKUInboundGuidance {
  /** The seller SKU of the item. */
  SellerSKU: string;
  /** The Amazon Standard Identification Number (ASIN) of the item. */
  ASIN: string;
  /** Specific inbound guidance for an item. */
  InboundGuidance: InboundGuidance;
  /** A list of reasons for the current inbound guidance for this item. */
  GuidanceReasonList?: GuidanceReasonList;
}

/** A list of SKU inbound guidance information. */
export type SKUInboundGuidanceList = SKUInboundGuidance[];

/** Labeling requirements and item preparation instructions to help you prepare items for shipment to Amazon's fulfillment network. */
export interface SKUPrepInstructions {
  /** The seller SKU of the item. */
  SellerSKU?: string;
  /** The Amazon Standard Identification Number (ASIN) of the item. */
  ASIN?: string;
  /** Labeling requirements for the item. For more information about FBA labeling requirements, see the Seller Central Help for your marketplace. */
  BarcodeInstruction?: BarcodeInstruction;
  /** Item preparation instructions. */
  PrepGuidance?: PrepGuidance;
  /** A list of preparation instructions to help with item sourcing decisions. */
  PrepInstructionList?: PrepInstructionList;
  /** A list of preparation instructions and fees for Amazon to prep goods for shipment. */
  AmazonPrepFeesDetailsList?: AmazonPrepFeesDetailsList;
}

/** A list of SKU labeling requirements and item preparation instructions. */
export type SKUPrepInstructionsList = SKUPrepInstructions[];

/** The freight class of the shipment. For information about determining the freight class, contact the carrier. */
export enum SellerFreightClass {
  Value50 = "50",
  Value55 = "55",
  Value60 = "60",
  Value65 = "65",
  Value70 = "70",
  Value775 = "77.5",
  Value85 = "85",
  Value925 = "92.5",
  Value100 = "100",
  Value110 = "110",
  Value125 = "125",
  Value150 = "150",
  Value175 = "175",
  Value200 = "200",
  Value250 = "250",
  Value300 = "300",
  Value400 = "400",
  Value500 = "500",
}

/** Indicates the status of the inbound shipment. When used with the createInboundShipment operation, WORKING is the only valid value. When used with the updateInboundShipment operation, possible values are WORKING, SHIPPED or CANCELLED. */
export enum ShipmentStatus {
  WORKING = "WORKING",
  SHIPPED = "SHIPPED",
  RECEIVING = "RECEIVING",
  CANCELLED = "CANCELLED",
  DELETED = "DELETED",
  CLOSED = "CLOSED",
  ERROR = "ERROR",
  IN_TRANSIT = "IN_TRANSIT",
  DELIVERED = "DELIVERED",
  CHECKED_IN = "CHECKED_IN",
}

/** Specifies the carrier shipment type in a putTransportDetails request. */
export enum ShipmentType {
  SP = "SP",
  LTL = "LTL",
}

/** @format date-time */
export type TimeStampStringType = string;

/** The tracking number of the package, provided by the carrier. */
export type TrackingId = string;

/** Inbound shipment information, including carrier details, shipment status, and the workflow status for a request for shipment with an Amazon-partnered carrier. */
export interface TransportContent {
  /** The shipping identifier, information about whether the shipment is by an Amazon-partnered carrier, and information about whether the shipment is Small Parcel or Less Than Truckload/Full Truckload (LTL/FTL). */
  TransportHeader: TransportHeader;
  /** Inbound shipment information, including carrier details and shipment status. */
  TransportDetails: TransportDetailOutput;
  /** The workflow status for a shipment with an Amazon-partnered carrier. */
  TransportResult: TransportResult;
}

/** Information required to create an Amazon-partnered carrier shipping estimate, or to alert the Amazon fulfillment center to the arrival of an inbound shipment by a non-Amazon-partnered carrier. */
export interface TransportDetailInput {
  /** Information that is required by an Amazon-partnered carrier to ship a Small Parcel inbound shipment. */
  PartneredSmallParcelData?: PartneredSmallParcelDataInput;
  /** Information that you provide to Amazon about a Small Parcel shipment shipped by a carrier that has not partnered with Amazon. */
  NonPartneredSmallParcelData?: NonPartneredSmallParcelDataInput;
  /** Information that is required by an Amazon-partnered carrier to ship a Less Than Truckload/Full Truckload (LTL/FTL) inbound shipment. */
  PartneredLtlData?: PartneredLtlDataInput;
  /** Information that you provide to Amazon about a Less Than Truckload/Full Truckload (LTL/FTL) shipment by a carrier that has not partnered with Amazon. */
  NonPartneredLtlData?: NonPartneredLtlDataInput;
}

/** Inbound shipment information, including carrier details and shipment status. */
export interface TransportDetailOutput {
  /** Information returned by Amazon about a Small Parcel shipment by an Amazon-partnered carrier. */
  PartneredSmallParcelData?: PartneredSmallParcelDataOutput;
  /** Information returned by Amazon about a Small Parcel shipment by a carrier that has not partnered with Amazon. */
  NonPartneredSmallParcelData?: NonPartneredSmallParcelDataOutput;
  /** Information returned by Amazon about a Less Than Truckload/Full Truckload (LTL/FTL) shipment by an Amazon-partnered carrier. */
  PartneredLtlData?: PartneredLtlDataOutput;
  /** Information returned by Amazon about a Less Than Truckload/Full Truckload (LTL/FTL) shipment shipped by a carrier that has not partnered with Amazon. */
  NonPartneredLtlData?: NonPartneredLtlDataOutput;
}

/** The shipping identifier, information about whether the shipment is by an Amazon-partnered carrier, and information about whether the shipment is Small Parcel or Less Than Truckload/Full Truckload (LTL/FTL). */
export interface TransportHeader {
  /** The Amazon seller identifier. */
  SellerId: string;
  /** A shipment identifier originally returned by the createInboundShipmentPlan operation. */
  ShipmentId: string;
  /**
   * Indicates whether a putTransportDetails request is for a partnered carrier.
   *
   * Possible values:
   *
   * * true – Request is for an Amazon-partnered carrier.
   *
   * * false – Request is for a non-Amazon-partnered carrier.
   */
  IsPartnered: boolean;
  /** Specifies the carrier shipment type in a putTransportDetails request. */
  ShipmentType: ShipmentType;
}

/** The workflow status for a shipment with an Amazon-partnered carrier. */
export interface TransportResult {
  /** Indicates the status of the Amazon-partnered carrier shipment. */
  TransportStatus: TransportStatus;
  /** An error code that identifies the type of error that occured. */
  ErrorCode?: string;
  /** A message that describes the error condition. */
  ErrorDescription?: string;
}

/** Indicates the status of the Amazon-partnered carrier shipment. */
export enum TransportStatus {
  WORKING = "WORKING",
  ESTIMATING = "ESTIMATING",
  ESTIMATED = "ESTIMATED",
  ERROR_ON_ESTIMATING = "ERROR_ON_ESTIMATING",
  CONFIRMING = "CONFIRMING",
  CONFIRMED = "CONFIRMED",
  ERROR_ON_CONFIRMING = "ERROR_ON_CONFIRMING",
  VOIDING = "VOIDING",
  VOIDED = "VOIDED",
  ERROR_IN_VOIDING = "ERROR_IN_VOIDING",
  ERROR = "ERROR",
}

/** Indicates the unit of measurement. */
export enum UnitOfMeasurement {
  Inches = "inches",
  Centimeters = "centimeters",
}

/** Indicates the unit of weight. */
export enum UnitOfWeight {
  Pounds = "pounds",
  Kilograms = "kilograms",
}

/** @format int64 */
export type UnsignedIntType = number;

/** The response schema for the voidTransport operation. */
export interface VoidTransportResponse {
  /** The payload for the voidTransport operation. */
  payload?: CommonTransportResult;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** The weight of the package. */
export interface Weight {
  /** The weight value. */
  Value: BigDecimalType;
  /** Indicates the unit of weight. */
  Unit: UnitOfWeight;
}
