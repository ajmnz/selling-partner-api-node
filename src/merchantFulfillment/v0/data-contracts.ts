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

/** Whether to include a packing slip. */
export interface LabelFormatOptionRequest {
  /** When true, include a packing slip with the label. */
  IncludePackingSlipWithLabel?: boolean;
}

/** The label format details and whether to include a packing slip. */
export interface LabelFormatOption {
  /** When true, include a packing slip with the label. */
  IncludePackingSlipWithLabel?: boolean;
  /** The label format. */
  LabelFormat?: LabelFormat;
}

/** Indicates whether the carrier will pick up the package, and what fee is charged, if any. */
export interface AvailableCarrierWillPickUpOption {
  /** Carrier will pick up option. */
  CarrierWillPickUpOption: CarrierWillPickUpOption;
  /** The fee charged. */
  Charge: CurrencyAmount;
}

/** List of available carrier pickup options. */
export type AvailableCarrierWillPickUpOptionsList = AvailableCarrierWillPickUpOption[];

/** The available delivery confirmation options, and the fee charged, if any. */
export interface AvailableDeliveryExperienceOption {
  /** The delivery confirmation level. */
  DeliveryExperienceOption: DeliveryExperienceOption;
  /** Currency type and amount. */
  Charge: CurrencyAmount;
}

/** List of available delivery experience options. */
export type AvailableDeliveryExperienceOptionsList = AvailableDeliveryExperienceOption[];

/** The available shipping service options. */
export interface AvailableShippingServiceOptions {
  /** List of available carrier pickup options. */
  AvailableCarrierWillPickUpOptions: AvailableCarrierWillPickUpOptionsList;
  /** List of available delivery experience options. */
  AvailableDeliveryExperienceOptions: AvailableDeliveryExperienceOptionsList;
}

export type AvailableFormatOptionsForLabel = AvailableFormatOptionsForLabelList;

/** The available label formats. */
export type AvailableFormatOptionsForLabelList = LabelFormatOption[];

/** A validation constraint. */
export interface Constraint {
  /** A regular expression. */
  ValidationRegEx?: string;
  /** A validation string. */
  ValidationString: string;
}

/** List of constraints. */
export type Constraints = Constraint[];

/** Maps the additional seller input to the definition. The key to the map is the field name. */
export interface AdditionalInputs {
  /** The field name. */
  AdditionalInputFieldName?: string;
  /** Specifies characteristics that apply to a seller input. */
  SellerInputDefinition?: SellerInputDefinition;
}

/** Specifies characteristics that apply to a seller input. */
export interface SellerInputDefinition {
  /** When true, the additional input field is required. */
  IsRequired: boolean;
  /** The data type of the additional input field. */
  DataType: string;
  /** List of constraints. */
  Constraints: Constraints;
  /** The display text for the additional input field. */
  InputDisplayText: string;
  /** Whether the seller input applies to the item or the shipment. */
  InputTarget?: InputTargetType;
  /** Additional information required to purchase shipping. */
  StoredValue: AdditionalSellerInput;
  /** The set of fixed values in an additional seller input. */
  RestrictedSetValues?: RestrictedSetValues;
}

/** Indicates whether the additional seller input is at the item or shipment level. */
export enum InputTargetType {
  SHIPMENT_LEVEL = "SHIPMENT_LEVEL",
  ITEM_LEVEL = "ITEM_LEVEL",
}

/** A list of additional inputs. */
export type AdditionalInputsList = AdditionalInputs[];

/** Additional information required to purchase shipping. */
export interface AdditionalSellerInput {
  /** The data type of the additional information. */
  DataType?: string;
  /** The value when the data type is string. */
  ValueAsString?: string;
  /** The value when the data type is boolean. */
  ValueAsBoolean?: boolean;
  /** The value when the data type is integer. */
  ValueAsInteger?: number;
  /** The value when the data type is a date-time formatted string. */
  ValueAsTimestamp?: Timestamp;
  /** The postal address information. */
  ValueAsAddress?: Address;
  /** The weight. */
  ValueAsWeight?: Weight;
  /** The length. */
  ValueAsDimension?: Length;
  /** Currency type and amount. */
  ValueAsCurrency?: CurrencyAmount;
}

/** An additional set of seller inputs required to purchase shipping. */
export interface AdditionalSellerInputs {
  /** The name of the additional input field. */
  AdditionalInputFieldName: string;
  /** Additional information required to purchase shipping. */
  AdditionalSellerInput: AdditionalSellerInput;
}

/** A list of additional seller input pairs required to purchase shipping. */
export type AdditionalSellerInputsList = AdditionalSellerInputs[];

/** The postal address information. */
export interface Address {
  /** The name of the addressee, or business name. */
  Name: AddressName;
  /** The street address information. */
  AddressLine1: AddressLine1;
  /** Additional street address information. */
  AddressLine2?: AddressLine2;
  /** Additional street address information. */
  AddressLine3?: AddressLine3;
  /** The district or county. */
  DistrictOrCounty?: DistrictOrCounty;
  /** The email address. */
  Email: EmailAddress;
  /** The city. */
  City: City;
  /** The state or province code. **Note.** Required in the Canada, US, and UK marketplaces. Also required for shipments originating from China. */
  StateOrProvinceCode?: StateOrProvinceCode;
  /** The zip code or postal code. */
  PostalCode: PostalCode;
  /** The country code. A two-character country code, in ISO 3166-1 alpha-2 format. */
  CountryCode: CountryCode;
  /** The phone number. */
  Phone: PhoneNumber;
}

/**
 * The street address information.
 * @maxLength 180
 */
export type AddressLine1 = string;

/**
 * Additional street address information.
 * @maxLength 60
 */
export type AddressLine2 = string;

/**
 * Additional street address information.
 * @maxLength 60
 */
export type AddressLine3 = string;

/**
 * The name of the addressee, or business name.
 * @maxLength 30
 */
export type AddressName = string;

/** An Amazon-defined order identifier, in 3-7-7 format. */
export type AmazonOrderId = string;

/** Response schema. */
export interface CancelShipmentResponse {
  /** The payload for the cancelShipment operation. */
  payload?: Shipment;
  /** One or more unexpected errors occurred during the cancelShipment operation. */
  errors?: ErrorList;
}

/**
 * The city.
 * @maxLength 30
 */
export type City = string;

/** The country code. A two-character country code, in ISO 3166-1 alpha-2 format. */
export type CountryCode = string;

/** Request schema. */
export interface CreateShipmentRequest {
  /** Shipment information required for creating a shipment. */
  ShipmentRequestDetails: ShipmentRequestDetails;
  /** An Amazon-defined shipping service identifier. */
  ShippingServiceId: ShippingServiceIdentifier;
  /** Identifies a shipping service order made by a carrier. */
  ShippingServiceOfferId?: string;
  /** Hazardous materials options for a package. Consult the terms and conditions for each carrier for more information about hazardous materials. */
  HazmatType?: HazmatType;
  /** Whether to include a packing slip. */
  LabelFormatOption?: LabelFormatOptionRequest;
  /** A list of additional seller inputs required to ship this shipment. */
  ShipmentLevelSellerInputsList?: AdditionalSellerInputsList;
}

/** Response schema. */
export interface CreateShipmentResponse {
  /** Shipment information. */
  payload?: Shipment;
  /** One or more unexpected errors occurred during the createShipment operation. */
  errors?: ErrorList;
}

export interface ItemLevelFields {
  /** The Amazon Standard Identification Number (ASIN) of the item. */
  Asin: string;
  /** A list of additional inputs. */
  AdditionalInputs: AdditionalInputsList;
}

/** A list of item level fields. */
export type ItemLevelFieldsList = ItemLevelFields[];

/** Request schema. */
export interface GetAdditionalSellerInputsRequest {
  /** An Amazon-defined shipping service identifier. */
  ShippingServiceId: ShippingServiceIdentifier;
  /** The address from which to ship. */
  ShipFromAddress: Address;
  /** An Amazon defined order identifier */
  OrderId: AmazonOrderId;
}

/** The payload for the getAdditionalSellerInputs operation. */
export interface GetAdditionalSellerInputsResult {
  /** A list of additional inputs. */
  ShipmentLevelFields?: AdditionalInputsList;
  /** A list of item level fields. */
  ItemLevelFieldsList?: ItemLevelFieldsList;
}

/** Response schema. */
export interface GetAdditionalSellerInputsResponse {
  /** The payload for the getAdditionalSellerInputs operation. */
  payload?: GetAdditionalSellerInputsResult;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** Currency type and amount. */
export interface CurrencyAmount {
  /**
   * Three-digit currency code in ISO 4217 format.
   * @maxLength 3
   */
  CurrencyCode: string;
  /**
   * The currency amount.
   * @format double
   */
  Amount: number;
}

/**
 * Custom text to print on the label.
 *
 * Note: Custom text is only included on labels that are in ZPL format (ZPL203). FedEx does not support CustomTextForLabel.
 * @maxLength 14
 */
export type CustomTextForLabel = string;

/** The delivery confirmation level. */
export enum DeliveryExperienceType {
  DeliveryConfirmationWithAdultSignature = "DeliveryConfirmationWithAdultSignature",
  DeliveryConfirmationWithSignature = "DeliveryConfirmationWithSignature",
  DeliveryConfirmationWithoutSignature = "DeliveryConfirmationWithoutSignature",
  NoTracking = "NoTracking",
}

/** The district or county. */
export type DistrictOrCounty = string;

/** The email address. */
export type EmailAddress = string;

/** The document data and checksum. */
export interface FileContents {
  /** Data for printing labels, in the form of a Base64-encoded, GZip-compressed string. */
  Contents: string;
  /** The file type for a label. */
  FileType: FileType;
  /** An MD5 hash to validate the PDF document data, in the form of a Base64-encoded string. */
  Checksum: string;
}

/** The file type for a label. */
export enum FileType {
  ApplicationPdf = "application/pdf",
  ApplicationZpl = "application/zpl",
  ImagePng = "image/png",
}

/** Request schema. */
export interface GetEligibleShipmentServicesRequest {
  /** Shipment information required for requesting shipping service offers. */
  ShipmentRequestDetails: ShipmentRequestDetails;
  /** Filter for use when requesting eligible shipping services. */
  ShippingOfferingFilter?: ShippingOfferingFilter;
}

/** Response schema. */
export interface GetEligibleShipmentServicesResponse {
  /** The payload for the getEligibleShipmentServices operation. */
  payload?: GetEligibleShipmentServicesResult;
  /** One or more unexpected errors occurred during this operation. */
  errors?: ErrorList;
}

/** The payload for the getEligibleShipmentServices operation. */
export interface GetEligibleShipmentServicesResult {
  /** A list of shipping services offers. */
  ShippingServiceList: ShippingServiceList;
  /** List of services that were for some reason unavailable for this request */
  RejectedShippingServiceList?: RejectedShippingServiceList;
  /** A list of temporarily unavailable carriers. */
  TemporarilyUnavailableCarrierList?: TemporarilyUnavailableCarrierList;
  /** List of carriers whose terms and conditions were not accepted by the seller. */
  TermsAndConditionsNotAcceptedCarrierList?: TermsAndConditionsNotAcceptedCarrierList;
}

/** Response schema. */
export interface GetShipmentResponse {
  /** The payload for the getShipment operation. */
  payload?: Shipment;
  /** One or more unexpected errors occurred during this operation. */
  errors?: ErrorList;
}

/** Hazardous materials options for a package. Consult the terms and conditions for each carrier for more information on hazardous materials. */
export enum HazmatType {
  None = "None",
  LQHazmat = "LQHazmat",
}

/** An Amazon order item identifier and a quantity. */
export interface Item {
  /** An Amazon-defined identifier for an individual item in an order. */
  OrderItemId: OrderItemId;
  /** The number of items. */
  Quantity: ItemQuantity;
  /** The weight. */
  ItemWeight?: Weight;
  /** The description of the item. */
  ItemDescription?: ItemDescription;
  /** A list of transparency codes. */
  TransparencyCodeList?: TransparencyCodeList;
  /** A list of additional seller inputs required to ship this item using the chosen shipping service. */
  ItemLevelSellerInputsList?: AdditionalSellerInputsList;
}

/** The list of items to be included in a shipment. */
export type ItemList = Item[];

/**
 * The number of items.
 * @format int32
 */
export type ItemQuantity = number;

/** The description of the item. */
export type ItemDescription = string;

/** Data for creating a shipping label and dimensions for printing the label. */
export interface Label {
  /**
   * Custom text to print on the label.
   *
   * Note: Custom text is only included on labels that are in ZPL format (ZPL203). FedEx does not support CustomTextForLabel.
   */
  CustomTextForLabel?: CustomTextForLabel;
  /** Dimensions for printing a shipping label. */
  Dimensions: LabelDimensions;
  /** The document data and checksum. */
  FileContents: FileContents;
  /** The label format. */
  LabelFormat?: LabelFormat;
  /** The type of standard identifier to print on the label. */
  StandardIdForLabel?: StandardIdForLabel;
}

/** Custom text for shipping labels. */
export interface LabelCustomization {
  /**
   * Custom text to print on the label.
   *
   * Note: Custom text is only included on labels that are in ZPL format (ZPL203). FedEx does not support CustomTextForLabel.
   */
  CustomTextForLabel?: CustomTextForLabel;
  /** The type of standard identifier to print on the label. */
  StandardIdForLabel?: StandardIdForLabel;
}

/** A label dimension. */
export type LabelDimension = number;

/** Dimensions for printing a shipping label. */
export interface LabelDimensions {
  /** The length dimension. */
  Length: LabelDimension;
  /** The width dimension. */
  Width: LabelDimension;
  /** The unit of measurement. */
  Unit: UnitOfLength;
}

/** The label format. */
export enum LabelFormat {
  PDF = "PDF",
  PNG = "PNG",
  ZPL203 = "ZPL203",
  ZPL300 = "ZPL300",
  ShippingServiceDefault = "ShippingServiceDefault",
}

/** List of label formats. */
export type LabelFormatList = LabelFormat[];

/** The length. */
export interface Length {
  /** The value in units. */
  value?: number;
  /** The unit of length. */
  unit?: UnitOfLength;
}

/** An Amazon-defined identifier for an individual item in an order. */
export type OrderItemId = string;

/** @format double */
export type PackageDimension = number;

/** The dimensions of a package contained in a shipment. */
export interface PackageDimensions {
  /** The length dimension. If you don't specify PredefinedPackageDimensions, you must specify the Length. */
  Length?: PackageDimension;
  /** The width dimension. If you don't specify PredefinedPackageDimensions, you must specify the Width. */
  Width?: PackageDimension;
  /** The height dimension. If you don't specify PredefinedPackageDimensions, you must specify the Height. */
  Height?: PackageDimension;
  /** The unit of measurement. If you don't specify PredefinedPackageDimensions, you must specify the Unit. */
  Unit?: UnitOfLength;
  /**
   * An enumeration of predefined parcel tokens. If you specify a PredefinedPackageDimensions token, you are not obligated to use a branded package from a carrier. For example, if you specify the FedEx_Box_10kg token, you do not have to use that particular package from FedEx. You are only obligated to use a box that matches the dimensions specified by the token.
   *
   * Note: Please note that carriers can have restrictions on the type of package allowed for certain ship methods. Check the carrier website for all details. Example: Flat rate pricing is available when materials are sent by USPS in a USPS-produced Flat Rate Envelope or Box.
   */
  PredefinedPackageDimensions?: PredefinedPackageDimensions;
}

/**
 * The phone number.
 * @maxLength 30
 */
export type PhoneNumber = string;

/**
 * The zip code or postal code.
 * @maxLength 30
 */
export type PostalCode = string;

/**
 * An enumeration of predefined parcel tokens. If you specify a PredefinedPackageDimensions token, you are not obligated to use a branded package from a carrier. For example, if you specify the FedEx_Box_10kg token, you do not have to use that particular package from FedEx. You are only obligated to use a box that matches the dimensions specified by the token.
 *
 * Note: Please note that carriers can have restrictions on the type of package allowed for certain ship methods. Check the carrier website for all details. Example: Flat rate pricing is available when materials are sent by USPS in a USPS-produced Flat Rate Envelope or Box.
 */
export enum PredefinedPackageDimensions {
  FedExBox10Kg = "FedEx_Box_10kg",
  FedExBox25Kg = "FedEx_Box_25kg",
  FedExBoxExtraLarge1 = "FedEx_Box_Extra_Large_1",
  FedExBoxExtraLarge2 = "FedEx_Box_Extra_Large_2",
  FedExBoxLarge1 = "FedEx_Box_Large_1",
  FedExBoxLarge2 = "FedEx_Box_Large_2",
  FedExBoxMedium1 = "FedEx_Box_Medium_1",
  FedExBoxMedium2 = "FedEx_Box_Medium_2",
  FedExBoxSmall1 = "FedEx_Box_Small_1",
  FedExBoxSmall2 = "FedEx_Box_Small_2",
  FedExEnvelope = "FedEx_Envelope",
  FedExPaddedPak = "FedEx_Padded_Pak",
  FedExPak1 = "FedEx_Pak_1",
  FedExPak2 = "FedEx_Pak_2",
  FedExTube = "FedEx_Tube",
  FedExXLPak = "FedEx_XL_Pak",
  UPSBox10Kg = "UPS_Box_10kg",
  UPSBox25Kg = "UPS_Box_25kg",
  UPSExpressBox = "UPS_Express_Box",
  UPSExpressBoxLarge = "UPS_Express_Box_Large",
  UPSExpressBoxMedium = "UPS_Express_Box_Medium",
  UPSExpressBoxSmall = "UPS_Express_Box_Small",
  UPSExpressEnvelope = "UPS_Express_Envelope",
  UPSExpressHardPak = "UPS_Express_Hard_Pak",
  UPSExpressLegalEnvelope = "UPS_Express_Legal_Envelope",
  UPSExpressPak = "UPS_Express_Pak",
  UPSExpressTube = "UPS_Express_Tube",
  UPSLaboratoryPak = "UPS_Laboratory_Pak",
  UPSPadPak = "UPS_Pad_Pak",
  UPSPallet = "UPS_Pallet",
  USPSCard = "USPS_Card",
  USPSFlat = "USPS_Flat",
  USPSFlatRateCardboardEnvelope = "USPS_FlatRateCardboardEnvelope",
  USPSFlatRateEnvelope = "USPS_FlatRateEnvelope",
  USPSFlatRateGiftCardEnvelope = "USPS_FlatRateGiftCardEnvelope",
  USPSFlatRateLegalEnvelope = "USPS_FlatRateLegalEnvelope",
  USPSFlatRatePaddedEnvelope = "USPS_FlatRatePaddedEnvelope",
  USPSFlatRateWindowEnvelope = "USPS_FlatRateWindowEnvelope",
  USPSLargeFlatRateBoardGameBox = "USPS_LargeFlatRateBoardGameBox",
  USPSLargeFlatRateBox = "USPS_LargeFlatRateBox",
  USPSLetter = "USPS_Letter",
  USPSMediumFlatRateBox1 = "USPS_MediumFlatRateBox1",
  USPSMediumFlatRateBox2 = "USPS_MediumFlatRateBox2",
  USPSRegionalRateBoxA1 = "USPS_RegionalRateBoxA1",
  USPSRegionalRateBoxA2 = "USPS_RegionalRateBoxA2",
  USPSRegionalRateBoxB1 = "USPS_RegionalRateBoxB1",
  USPSRegionalRateBoxB2 = "USPS_RegionalRateBoxB2",
  USPSRegionalRateBoxC = "USPS_RegionalRateBoxC",
  USPSSmallFlatRateBox = "USPS_SmallFlatRateBox",
  USPSSmallFlatRateEnvelope = "USPS_SmallFlatRateEnvelope",
}

/** The set of fixed values in an additional seller input. */
export type RestrictedSetValues = string[];

/**
 * A seller-defined order identifier.
 * @maxLength 64
 */
export type SellerOrderId = string;

/** The details of a shipment, including the shipment status. */
export interface Shipment {
  /** An Amazon-defined shipment identifier. */
  ShipmentId: ShipmentId;
  /** An Amazon-defined order identifier, in 3-7-7 format. */
  AmazonOrderId: AmazonOrderId;
  /** A seller-defined order identifier. */
  SellerOrderId?: SellerOrderId;
  /** The list of items to be included in a shipment. */
  ItemList: ItemList;
  /** The address of the sender. */
  ShipFromAddress: Address;
  /** The destination address for the shipment. */
  ShipToAddress: Address;
  /** The dimensions of a package contained in a shipment. */
  PackageDimensions: PackageDimensions;
  /** The package weight. */
  Weight: Weight;
  /** If DeclaredValue was specified in a previous call to the createShipment operation, then Insurance indicates the amount that the carrier will use to insure the shipment. If DeclaredValue was not specified with a previous call to the createShipment operation, then the shipment will be insured for the carrier's minimum insurance amount, or the combined sale prices that the items are listed for in the shipment, whichever is less. */
  Insurance: CurrencyAmount;
  /** A shipping service offer made by a carrier. */
  ShippingService: ShippingService;
  /** Data for creating a shipping label and dimensions for printing the label. If the shipment is canceled, an empty Label is returned. */
  Label: Label;
  /** The shipment status. */
  Status: ShipmentStatus;
  /** The shipment tracking identifier provided by the carrier. */
  TrackingId?: TrackingId;
  /** The date and time the shipment was created. */
  CreatedDate: Timestamp;
  /** The date and time of the last update. */
  LastUpdatedDate?: Timestamp;
}

/** An Amazon-defined shipment identifier. */
export type ShipmentId = string;

/** Shipment information required for requesting shipping service offers or for creating a shipment. */
export interface ShipmentRequestDetails {
  /** An Amazon-defined order identifier in 3-7-7 format. */
  AmazonOrderId: AmazonOrderId;
  /** A seller-defined order identifier. */
  SellerOrderId?: SellerOrderId;
  /** The list of items to be included in a shipment. */
  ItemList: ItemList;
  /** The address of the sender. */
  ShipFromAddress: Address;
  /** The package dimensions. */
  PackageDimensions: PackageDimensions;
  /** The package weight. */
  Weight: Weight;
  /** The date by which the package must arrive to keep the promise to the customer, in ISO 8601 datetime format. If MustArriveByDate is specified, only shipping service offers that can be delivered by that date are returned. */
  MustArriveByDate?: Timestamp;
  /** When used in a request, this is the date and time that the seller wants to ship the package. When used in a response, this is the date and time that the package can be shipped by the indicated method. */
  ShipDate?: Timestamp;
  /** Extra services offered by the carrier. */
  ShippingServiceOptions: ShippingServiceOptions;
  /** Label customization options. */
  LabelCustomization?: LabelCustomization;
}

/** The shipment status. */
export enum ShipmentStatus {
  Purchased = "Purchased",
  RefundPending = "RefundPending",
  RefundRejected = "RefundRejected",
  RefundApplied = "RefundApplied",
}

/** The delivery confirmation level. */
export enum DeliveryExperienceOption {
  DeliveryConfirmationWithAdultSignature = "DeliveryConfirmationWithAdultSignature",
  DeliveryConfirmationWithSignature = "DeliveryConfirmationWithSignature",
  DeliveryConfirmationWithoutSignature = "DeliveryConfirmationWithoutSignature",
  NoTracking = "NoTracking",
  NoPreference = "NoPreference",
}

/** Filter for use when requesting eligible shipping services. */
export interface ShippingOfferingFilter {
  /** When true, include a packing slip with the label. */
  IncludePackingSlipWithLabel?: boolean;
  /** When true, include complex shipping options. */
  IncludeComplexShippingOptions?: boolean;
  /** Carrier will pick up option. */
  CarrierWillPickUp?: CarrierWillPickUpOption;
  /** The delivery confirmation level. */
  DeliveryExperience?: DeliveryExperienceOption;
}

/** A shipping service offer made by a carrier. */
export interface ShippingService {
  /** A plain text representation of a carrier's shipping service. For example, "UPS Ground" or "FedEx Standard Overnight".  */
  ShippingServiceName: string;
  /** The name of the carrier. */
  CarrierName: string;
  /** An Amazon-defined shipping service identifier. */
  ShippingServiceId: ShippingServiceIdentifier;
  /** An Amazon-defined shipping service offer identifier. */
  ShippingServiceOfferId: string;
  /** The date that the carrier will ship the package. */
  ShipDate: Timestamp;
  /** The earliest date by which the shipment will be delivered. */
  EarliestEstimatedDeliveryDate?: Timestamp;
  /** The latest date by which the shipment will be delivered. */
  LatestEstimatedDeliveryDate?: Timestamp;
  /** The amount that the carrier will charge for the shipment. */
  Rate: CurrencyAmount;
  /** Extra services offered by the carrier. */
  ShippingServiceOptions: ShippingServiceOptions;
  /** The available shipping service options. */
  AvailableShippingServiceOptions?: AvailableShippingServiceOptions;
  /** List of label formats. */
  AvailableLabelFormats?: LabelFormatList;
  /** The available label formats. */
  AvailableFormatOptionsForLabel?: AvailableFormatOptionsForLabelList;
  /** When true, additional seller inputs are required. */
  RequiresAdditionalSellerInputs: boolean;
}

/** An Amazon-defined shipping service identifier. */
export type ShippingServiceIdentifier = string;

/** A list of shipping services offers. */
export type ShippingServiceList = ShippingService[];

/** Extra services provided by a carrier. */
export interface ShippingServiceOptions {
  /** The delivery confirmation level. */
  DeliveryExperience: DeliveryExperienceType;
  /** The declared value of the shipment. The carrier uses this value to determine the amount to use to insure the shipment. If DeclaredValue is greater than the carrier's minimum insurance amount, the seller is charged for the additional insurance as determined by the carrier. For information about optional insurance coverage, see the Seller Central Help [UK](https://sellercentral.amazon.co.uk/gp/help/200204080) [US](https://sellercentral.amazon.com/gp/help/200204080). */
  DeclaredValue?: CurrencyAmount;
  /**
   * When true, the carrier will pick up the package.
   *
   * Note: Scheduled carrier pickup is available only using Dynamex (US), DPD (UK), and Royal Mail (UK).
   */
  CarrierWillPickUp: boolean;
  /** Carrier will pick up option. */
  CarrierWillPickUpOption?: CarrierWillPickUpOption;
  /** The seller's preferred label format. */
  LabelFormat?: LabelFormat;
}

/** Carrier will pick up option. */
export enum CarrierWillPickUpOption {
  CarrierWillPickUp = "CarrierWillPickUp",
  ShipperWillDropOff = "ShipperWillDropOff",
  NoPreference = "NoPreference",
}

/** The type of standard identifier to print on the label. */
export enum StandardIdForLabel {
  AmazonOrderId = "AmazonOrderId",
}

/**
 * The state or province code. **Note.** Required in the Canada, US, and UK marketplaces. Also required for shipments originating from China.
 * @maxLength 30
 */
export type StateOrProvinceCode = string;

/** Information about a rejected shipping service */
export interface RejectedShippingService {
  /** The rejected shipping carrier name. e.g. USPS */
  CarrierName: string;
  /** The rejected shipping service localized name. e.g. FedEx Standard Overnight */
  ShippingServiceName: string;
  /** The rejected shipping service identifier. e.g. FEDEX_PTP_STANDARD_OVERNIGHT */
  ShippingServiceId: ShippingServiceIdentifier;
  /** A reason code meant to be consumed programatically. e.g. CARRIER_CANNOT_SHIP_TO_POBOX */
  RejectionReasonCode: string;
  /** A localized human readable description of the rejected reason. */
  RejectionReasonMessage?: string;
}

/** List of services that were for some reason unavailable for this request */
export type RejectedShippingServiceList = RejectedShippingService[];

/** A carrier who is temporarily unavailable, most likely due to a service outage experienced by the carrier. */
export interface TemporarilyUnavailableCarrier {
  /** The name of the carrier. */
  CarrierName: string;
}

/** A list of temporarily unavailable carriers. */
export type TemporarilyUnavailableCarrierList = TemporarilyUnavailableCarrier[];

/** A carrier whose terms and conditions have not been accepted by the seller. */
export interface TermsAndConditionsNotAcceptedCarrier {
  /** The name of the carrier. */
  CarrierName: string;
}

/** List of carriers whose terms and conditions were not accepted by the seller. */
export type TermsAndConditionsNotAcceptedCarrierList =
  TermsAndConditionsNotAcceptedCarrier[];

/** @format date-time */
export type Timestamp = string;

/** The shipment tracking identifier provided by the carrier. */
export type TrackingId = string;

/**
 * The Transparency code associated with the item. The Transparency serial number that needs to be submitted can be determined by the following:
 *
 * **1D or 2D Barcode:** This has a **T** logo. Submit either the 29-character alpha-numeric identifier beginning with **AZ** or **ZA**, or the 38-character Serialized Global Trade Item Number (SGTIN).
 * **2D Barcode SN:** Submit the 7- to 20-character serial number barcode, which likely has the prefix **SN**. The serial number will be applied to the same side of the packaging as the GTIN (UPC/EAN/ISBN) barcode.
 * **QR code SN:** Submit the URL that the QR code generates.
 */
export type TransparencyCode = string;

/** A list of transparency codes. */
export type TransparencyCodeList = TransparencyCode[];

/** The unit of length. */
export enum UnitOfLength {
  Inches = "inches",
  Centimeters = "centimeters",
}

/** The unit of weight. */
export enum UnitOfWeight {
  Oz = "oz",
  G = "g",
}

/** The weight. */
export interface Weight {
  /** The weight value. */
  Value: WeightValue;
  /** The unit of weight. */
  Unit: UnitOfWeight;
}

/**
 * The weight value.
 * @format double
 */
export type WeightValue = number;
