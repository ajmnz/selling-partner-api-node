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

/** The weight in the units indicated. */
export interface Weight {
  /** The unit of measurement. */
  unit: "GRAM" | "KILOGRAM" | "OUNCE" | "POUND";
  /** The measurement value. */
  value: number;
}

/** Liquid Volume. */
export interface LiquidVolume {
  /** The unit of measurement. */
  unit: "ML" | "L" | "FL_OZ" | "GAL" | "PT" | "QT" | "C";
  /** The measurement value. */
  value: number;
}

/** The invoice details for charges associated with the goods in the package. Only applies to certain regions. */
export interface InvoiceDetails {
  /** The invoice number of the item. */
  invoiceNumber?: string;
  /**
   * The invoice date of the item in ISO 8061 format.
   * @format date-time
   */
  invoiceDate?: string;
}

/** A list of charges based on the shipping service charges applied on a package. */
export type ChargeList = ChargeComponent[];

/** The type and amount of a charge applied on a package. */
export interface ChargeComponent {
  /** The monetary value in the currency indicated, in ISO 4217 standard format. */
  amount?: Currency;
  /** The type of charge. */
  chargeType?: "TAX" | "DISCOUNT";
}

/** The monetary value in the currency indicated, in ISO 4217 standard format. */
export interface Currency {
  /** The monetary value. */
  value: number;
  /**
   * The ISO 4217 format 3-character currency code.
   * @minLength 3
   * @maxLength 3
   */
  unit: string;
}

/** A set of measurements for a three-dimensional object. */
export interface Dimensions {
  /** The length of the package. */
  length: number;
  /** The width of the package. */
  width: number;
  /** The height of the package. */
  height: number;
  /** The unit of measurement. */
  unit: "INCH" | "CENTIMETER";
}

/** A unique token generated to identify a getRates operation. */
export type RequestToken = string;

/** An identifier for the rate (shipment offering) provided by a shipping service provider. */
export type RateId = string;

/** The carrier identifier for the offering, provided by the carrier. */
export type CarrierId = string;

/** The carrier name for the offering. */
export type CarrierName = string;

/** A client provided unique identifier for a package being shipped. This value should be saved by the client to pass as a parameter to the getShipmentDocuments operation. */
export type PackageClientReferenceId = string;

/** The unique shipment identifier provided by a shipping service. */
export type ShipmentId = string;

/** The carrier generated identifier for a package in a purchased shipment. */
export type TrackingId = string;

/** The carrier generated reverse identifier for a returned package in a purchased shipment. */
export type AlternateLegTrackingId = string;

/** An identifier for the shipping service. */
export type ServiceId = string;

/** The name of the shipping service. */
export type ServiceName = string;

/** The shipper instruction. */
export interface ShipperInstruction {
  /**
   * The delivery notes for the shipment
   * @maxLength 256
   */
  deliveryNotes?: string;
}

/** The address. */
export interface Address {
  /**
   * The name of the person, business or institution at the address.
   * @minLength 1
   * @maxLength 50
   */
  name: string;
  /**
   * The first line of the address.
   * @minLength 1
   * @maxLength 60
   */
  addressLine1: string;
  /**
   * Additional address information, if required.
   * @minLength 1
   * @maxLength 60
   */
  addressLine2?: string;
  /**
   * Additional address information, if required.
   * @minLength 1
   * @maxLength 60
   */
  addressLine3?: string;
  /** The name of the business or institution associated with the address. */
  companyName?: string;
  /** The state, county or region where the person, business or institution is located. */
  stateOrRegion: StateOrRegion;
  /** The city or town where the person, business or institution is located. */
  city: City;
  /** The two digit country code. Follows ISO 3166-1 alpha-2 format. */
  countryCode: CountryCode;
  /** The postal code of that address. It contains a series of letters or digits or both, sometimes including spaces or punctuation. */
  postalCode: PostalCode;
  /**
   * The email address of the contact associated with the address.
   * @maxLength 64
   */
  email?: string;
  /**
   * The phone number of the person, business or institution located at that address, including the country calling code.
   * @minLength 1
   * @maxLength 20
   */
  phoneNumber?: string;
  /** Defines the latitude and longitude of the access point. */
  geocode?: Geocode;
}

/** Defines the latitude and longitude of the access point. */
export interface Geocode {
  /** The latitude of access point. */
  latitude?: string;
  /** The longitude of access point. */
  longitude?: string;
}

/** The state, county or region where the person, business or institution is located. */
export type StateOrRegion = string;

/** The city or town where the person, business or institution is located. */
export type City = string;

/** The two digit country code. Follows ISO 3166-1 alpha-2 format. */
export type CountryCode = string;

/** The postal code of that address. It contains a series of letters or digits or both, sometimes including spaces or punctuation. */
export type PostalCode = string;

/** The location where the person, business or institution is located. */
export interface Location {
  /** The state, county or region where the person, business or institution is located. */
  stateOrRegion?: StateOrRegion;
  /** The city or town where the person, business or institution is located. */
  city?: City;
  /** The two digit country code. Follows ISO 3166-1 alpha-2 format. */
  countryCode?: CountryCode;
  /** The postal code of that address. It contains a series of letters or digits or both, sometimes including spaces or punctuation. */
  postalCode?: PostalCode;
}

/** The file format of the document. */
export enum DocumentFormat {
  PDF = "PDF",
  PNG = "PNG",
  ZPL = "ZPL",
}

/** The type of shipping document. */
export enum DocumentType {
  PACKSLIP = "PACKSLIP",
  LABEL = "LABEL",
  RECEIPT = "RECEIPT",
  CUSTOM_FORM = "CUSTOM_FORM",
}

/** The dots per inch (DPI) value used in printing. This value represents a measure of the resolution of the document. */
export type Dpi = number;

/** Indicates the position of the label on the paper. Should be the same value as returned in getRates response. */
export type PageLayout = string;

/** When true, files should be stitched together. Otherwise, files should be returned separately. Defaults to false. */
export type NeedFileJoining = boolean;

/** A Base64 encoded string of the file contents. */
export type Contents = string;

/** A list of documents related to a package. */
export type PackageDocumentList = PackageDocument[];

/** A document related to a package. */
export interface PackageDocument {
  /** The type of shipping document. */
  type: DocumentType;
  /** The file format of the document. */
  format: DocumentFormat;
  /** A Base64 encoded string of the file contents. */
  contents: Contents;
}

/** A list of the format options for a label. */
export type PrintOptionList = PrintOption[];

/** The format options available for a label. */
export interface PrintOption {
  /** A list of the supported DPI options for a document. */
  supportedDPIs?: Dpi[];
  /** A list of the supported page layout options for a document. */
  supportedPageLayouts: PageLayout[];
  /** A list of the supported needFileJoining boolean values for a document. */
  supportedFileJoiningOptions: NeedFileJoining[];
  /** A list of the supported documented details. */
  supportedDocumentDetails: SupportedDocumentDetail[];
}

/** The size dimensions of the label. */
export interface DocumentSize {
  /** The width of the document measured in the units specified. */
  width: number;
  /** The length of the document measured in the units specified. */
  length: number;
  /** The unit of measurement. */
  unit: "INCH" | "CENTIMETER";
}

/** The supported document types for a service offering. */
export interface SupportedDocumentDetail {
  /** The type of shipping document. */
  name: DocumentType;
  /** When true, the supported document type is required. */
  isMandatory: boolean;
}

/** The document specifications requested. For calls to the purchaseShipment operation, the shipment purchase fails if the specified document specifications are not among those returned in the response to the getRates operation. */
export interface RequestedDocumentSpecification {
  /** The file format of the document. */
  format: DocumentFormat;
  /** The size dimensions of the label. */
  size: DocumentSize;
  /** The dots per inch (DPI) value used in printing. This value represents a measure of the resolution of the document. */
  dpi?: Dpi;
  /** Indicates the position of the label on the paper. Should be the same value as returned in getRates response. */
  pageLayout?: PageLayout;
  /** When true, files should be stitched together. Otherwise, files should be returned separately. Defaults to false. */
  needFileJoining: NeedFileJoining;
  /** A list of the document types requested. */
  requestedDocumentTypes: DocumentType[];
}

/** A list of the document specifications supported for a shipment service offering. */
export type SupportedDocumentSpecificationList = SupportedDocumentSpecification[];

/** Document specification that is supported for a service offering. */
export interface SupportedDocumentSpecification {
  /** The file format of the document. */
  format: DocumentFormat;
  /** The size dimensions of the label. */
  size: DocumentSize;
  /** A list of the format options for a label. */
  printOptions: PrintOptionList;
}

/** An item in a package. */
export interface Item {
  /** The monetary value in the currency indicated, in ISO 4217 standard format. */
  itemValue?: Currency;
  /** The product description of the item. */
  description?: string;
  /** A unique identifier for an item provided by the client. */
  itemIdentifier?: string;
  /** The number of units. This value is required. */
  quantity: number;
  /** The weight in the units indicated. */
  weight?: Weight;
  /** Liquid Volume. */
  liquidVolume?: LiquidVolume;
  /** When true, the item qualifies as hazardous materials (hazmat). Defaults to false. */
  isHazmat?: boolean;
  /** Details related to any dangerous goods/items that are being shipped. */
  dangerousGoodsDetails?: DangerousGoodsDetails;
  /** The product type of the item. */
  productType?: string;
  /** The invoice details for charges associated with the goods in the package. Only applies to certain regions. */
  invoiceDetails?: InvoiceDetails;
  /** A list of unique serial numbers in an Amazon package that can be used to guarantee non-fraudulent items. The number of serial numbers in the list must be less than or equal to the quantity of items being shipped. Only applicable when channel source is Amazon. */
  serialNumbers?: string[];
  /** Item identifiers for an item in a direct fulfillment shipment. */
  directFulfillmentItemIdentifiers?: DirectFulfillmentItemIdentifiers;
}

/** A list of items. */
export type ItemList = Item[];

/** A package to be shipped through a shipping service offering. */
export interface Package {
  /** A set of measurements for a three-dimensional object. */
  dimensions: Dimensions;
  /** The weight in the units indicated. */
  weight: Weight;
  /** The monetary value in the currency indicated, in ISO 4217 standard format. */
  insuredValue: Currency;
  /** When true, the package contains hazardous materials. Defaults to false. */
  isHazmat?: boolean;
  /** The seller name displayed on the label. */
  sellerDisplayName?: string;
  /** A list of charges based on the shipping service charges applied on a package. */
  charges?: ChargeList;
  /** A client provided unique identifier for a package being shipped. This value should be saved by the client to pass as a parameter to the getShipmentDocuments operation. */
  packageClientReferenceId: PackageClientReferenceId;
  /** A list of items. */
  items: ItemList;
}

/** A list of packages to be shipped through a shipping service offering. */
export type PackageList = Package[];

/** Item identifiers for an item in a direct fulfillment shipment. */
export interface DirectFulfillmentItemIdentifiers {
  /** A unique identifier for an item provided by the client for a direct fulfillment shipment. This is only populated for direct fulfillment multi-piece shipments. It is required if a vendor wants to change the configuration of the packages in which the purchase order is shipped. */
  lineItemID: string;
  /** A unique identifier for an item provided by the client for a direct fulfillment shipment. This is only populated if a single line item has multiple pieces. Defaults to 1. */
  pieceNumber?: string;
}

/** The post-purchase details of a package that will be shipped using a shipping service. */
export interface PackageDocumentDetail {
  /** A client provided unique identifier for a package being shipped. This value should be saved by the client to pass as a parameter to the getShipmentDocuments operation. */
  packageClientReferenceId: PackageClientReferenceId;
  /** A list of documents related to a package. */
  packageDocuments: PackageDocumentList;
  /** The carrier generated identifier for a package in a purchased shipment. */
  trackingId?: TrackingId;
}

/** A list of post-purchase details about a package that will be shipped using a shipping service. */
export type PackageDocumentDetailList = PackageDocumentDetail[];

/** The start and end time that specifies the time interval of an event. */
export interface TimeWindow {
  /**
   * The start time of the time window.
   * @format date-time
   */
  start?: string;
  /**
   * The end time of the time window.
   * @format date-time
   */
  end?: string;
}

/** The time windows promised for pickup and delivery events. */
export interface Promise {
  /** The start and end time that specifies the time interval of an event. */
  deliveryWindow?: TimeWindow;
  /** The start and end time that specifies the time interval of an event. */
  pickupWindow?: TimeWindow;
}

/** The value-added services to be added to a shipping service purchase. */
export type RequestedValueAddedServiceList = RequestedValueAddedService[];

/** A value-added service to be applied to a shipping service purchase. */
export interface RequestedValueAddedService {
  /** The identifier of the selected value-added service. Must be among those returned in the response to the getRates operation. */
  id: string;
}

/** A list of value-added services available for a shipping service offering. */
export type AvailableValueAddedServiceGroupList = AvailableValueAddedServiceGroup[];

/** The value-added services available for purchase with a shipping service offering. */
export interface AvailableValueAddedServiceGroup {
  /** The type of the value-added service group. */
  groupId: string;
  /** The name of the value-added service group. */
  groupDescription: string;
  /** When true, one or more of the value-added services listed must be specified. */
  isRequired: boolean;
  /** A list of optional value-added services available for purchase with a shipping service offering. */
  valueAddedServices?: ValueAddedService[];
}

/** A value-added service available for purchase with a shipment service offering. */
export interface ValueAddedService {
  /** The identifier for the value-added service. */
  id: string;
  /** The name of the value-added service. */
  name: string;
  /** The cost of the value-added service. */
  cost: Currency;
}

/** The amount to collect on delivery. */
export interface CollectOnDelivery {
  /** The monetary value in the currency indicated, in ISO 4217 standard format. */
  amount: Currency;
}

/** A collection of supported value-added services. */
export interface ValueAddedServiceDetails {
  /** The amount to collect on delivery. */
  collectOnDelivery?: CollectOnDelivery;
}

/** Details related to any dangerous goods/items that are being shipped. */
export interface DangerousGoodsDetails {
  /**
   * The specific UNID of the item being shipped.
   * @pattern ^[0-9]{4}$
   */
  unitedNationsRegulatoryId?: string;
  /**
   * The specific regulatory class  of the item being shipped.
   * @pattern ^[1-9](\.[1-9])?$
   */
  transportationRegulatoryClass?: string;
  /** The specific packaging group of the item being shipped. */
  packingGroup?: "I" | "II" | "III";
  /** The specific packing instruction of the item being shipped. */
  packingInstruction?:
    | "PI965_SECTION_IA"
    | "PI965_SECTION_IB"
    | "PI965_SECTION_II"
    | "PI966_SECTION_I"
    | "PI966_SECTION_II"
    | "PI967_SECTION_I"
    | "PI967_SECTION_II"
    | "PI968_SECTION_IA"
    | "PI968_SECTION_IB"
    | "PI969_SECTION_I"
    | "PI969_SECTION_II"
    | "PI970_SECTION_I"
    | "PI970_SECTION_II";
}

/** Indicates the type of tax. */
export enum TaxType {
  GST = "GST",
}

/** Indicates the tax specifications associated with the shipment for customs compliance purposes in certain regions. */
export interface TaxDetail {
  /** Indicates the type of tax. */
  taxType: TaxType;
  /** The shipper's tax registration number associated with the shipment for customs compliance purposes in certain regions. */
  taxRegistrationNumber: string;
}

/** A list of tax detail information. */
export type TaxDetailList = TaxDetail[];

/** The tracking event type. */
export enum EventCode {
  ReadyForReceive = "ReadyForReceive",
  PickupDone = "PickupDone",
  Delivered = "Delivered",
  Departed = "Departed",
  DeliveryAttempted = "DeliveryAttempted",
  Lost = "Lost",
  OutForDelivery = "OutForDelivery",
  ArrivedAtCarrierFacility = "ArrivedAtCarrierFacility",
  Rejected = "Rejected",
  Undeliverable = "Undeliverable",
  PickupCancelled = "PickupCancelled",
}

/** A tracking event. */
export interface Event {
  /** The tracking event type. */
  eventCode: EventCode;
  /** The location where the person, business or institution is located. */
  location?: Location;
  /**
   * The ISO 8601 formatted timestamp of the event.
   * @format date-time
   */
  eventTime: string;
}

/** A package status summary. */
export interface TrackingSummary {
  /** The status of the package being shipped. */
  status?: Status;
}

/** The status of the package being shipped. */
export enum Status {
  PreTransit = "PreTransit",
  InTransit = "InTransit",
  Delivered = "Delivered",
  Lost = "Lost",
  OutForDelivery = "OutForDelivery",
  Rejected = "Rejected",
  Undeliverable = "Undeliverable",
  DeliveryAttempted = "DeliveryAttempted",
  PickupCancelled = "PickupCancelled",
}

/** Amazon order information. This is required if the shipment source channel is Amazon. */
export interface AmazonOrderDetails {
  /** The Amazon order ID associated with the Amazon order fulfilled by this shipment. */
  orderId: string;
}

/** Amazon shipment information. */
export interface AmazonShipmentDetails {
  /** This attribute is required only for a Direct Fulfillment shipment. This is the encrypted shipment ID. */
  shipmentId: string;
}

/** The shipment source channel type. */
export enum ChannelType {
  AMAZON = "AMAZON",
  EXTERNAL = "EXTERNAL",
}

/** Shipment source channel related information. */
export interface ChannelDetails {
  /** The shipment source channel type. */
  channelType: ChannelType;
  /** Amazon order information. This is required if the shipment source channel is Amazon. */
  amazonOrderDetails?: AmazonOrderDetails;
  /** Amazon shipment information. */
  amazonShipmentDetails?: AmazonShipmentDetails;
}

/** A list of eligible shipping service offerings. */
export type RateList = Rate[];

/** The details of a shipping service offering. */
export interface Rate {
  /** An identifier for the rate (shipment offering) provided by a shipping service provider. */
  rateId: RateId;
  /** The carrier identifier for the offering, provided by the carrier. */
  carrierId: CarrierId;
  /** The carrier name for the offering. */
  carrierName: CarrierName;
  /** An identifier for the shipping service. */
  serviceId: ServiceId;
  /** The name of the shipping service. */
  serviceName: ServiceName;
  /** The weight in the units indicated. */
  billedWeight?: Weight;
  /** The monetary value in the currency indicated, in ISO 4217 standard format. */
  totalCharge: Currency;
  /** The time windows promised for pickup and delivery events. */
  promise: Promise;
  /** A list of the document specifications supported for a shipment service offering. */
  supportedDocumentSpecifications: SupportedDocumentSpecificationList;
  /** A list of value-added services available for a shipping service offering. */
  availableValueAddedServiceGroups?: AvailableValueAddedServiceGroupList;
  /** When true, indicates that additional inputs are required to purchase this shipment service. You must then call the getAdditionalInputs operation to return the JSON schema to use when providing the additional inputs to the purchaseShipment operation. */
  requiresAdditionalInputs: boolean;
  /** A list of RateItem */
  rateItemList?: RateItemList;
  /** Payment type of the purchase. */
  paymentType?: PaymentType;
  /** Representing the included/excluded benefits that we offer for each ShippingOffering/Rate. Benefits being services provided by Amazon when sellers purchase shipping through Amazon. */
  benefits?: Benefits;
}

/** Reasons that make a shipment service offering ineligible. */
export enum IneligibilityReasonCode {
  NO_COVERAGE = "NO_COVERAGE",
  PICKUP_SLOT_RESTRICTION = "PICKUP_SLOT_RESTRICTION",
  UNSUPPORTED_VAS = "UNSUPPORTED_VAS",
  VAS_COMBINATION_RESTRICTION = "VAS_COMBINATION_RESTRICTION",
  SIZE_RESTRICTIONS = "SIZE_RESTRICTIONS",
  WEIGHT_RESTRICTIONS = "WEIGHT_RESTRICTIONS",
  LATE_DELIVERY = "LATE_DELIVERY",
  PROGRAM_CONSTRAINTS = "PROGRAM_CONSTRAINTS",
  TERMS_AND_CONDITIONS_NOT_ACCEPTED = "TERMS_AND_CONDITIONS_NOT_ACCEPTED",
  UNKNOWN = "UNKNOWN",
}

/** The reason why a shipping service offering is ineligible. */
export interface IneligibilityReason {
  /** Reasons that make a shipment service offering ineligible. */
  code: IneligibilityReasonCode;
  /** The ineligibility reason. */
  message: string;
}

/** Detailed information for an ineligible shipping service offering. */
export interface IneligibleRate {
  /** An identifier for the shipping service. */
  serviceId: ServiceId;
  /** The name of the shipping service. */
  serviceName: ServiceName;
  /** The carrier name for the offering. */
  carrierName: CarrierName;
  /** The carrier identifier for the offering, provided by the carrier. */
  carrierId: CarrierId;
  /** A list of reasons why a shipping service offering is ineligible. */
  ineligibilityReasons: IneligibilityReason[];
}

/** A list of ineligible shipping service offerings. */
export type IneligibleRateList = IneligibleRate[];

/** The payload for the cancelShipment operation. */
export type CancelShipmentResult = Record<string, any>;

/** Response schema for the cancelShipment operation. */
export interface CancelShipmentResponse {
  /** The payload for the cancelShipment operation. */
  payload?: CancelShipmentResult;
}

/** The request schema for the getRates operation. When the channelType is Amazon, the shipTo address is not required and will be ignored. */
export interface GetRatesRequest {
  /** The ship to address. */
  shipTo?: Address;
  /** The ship from address. */
  shipFrom: Address;
  /** The return to address. */
  returnTo?: Address;
  /**
   * The ship date and time (the requested pickup). This defaults to the current date and time.
   * @format date-time
   */
  shipDate?: string;
  /** This field describe shipper instruction. */
  shipperInstruction?: ShipperInstruction;
  /** A list of packages to be shipped through a shipping service offering. */
  packages: PackageList;
  /** A collection of supported value-added services. */
  valueAddedServices?: ValueAddedServiceDetails;
  /** A list of tax detail information. */
  taxDetails?: TaxDetailList;
  /** Shipment source channel related information. */
  channelDetails: ChannelDetails;
  /** Object to pass additional information about the MCI Integrator shipperType: List of ClientReferenceDetail */
  clientReferenceDetails?: ClientReferenceDetails;
  /** Shipment type. */
  shipmentType?: ShipmentType;
  destinationAccessPointDetails?: AccessPointDetails;
}

export interface AccessPointDetails {
  /** Unique identifier for the access point */
  accessPointId?: AccessPointId;
}

/** The payload for the getRates operation. */
export interface GetRatesResult {
  /** A unique token generated to identify a getRates operation. */
  requestToken: RequestToken;
  /** A list of eligible shipping service offerings. */
  rates: RateList;
  /** A list of ineligible shipping service offerings. */
  ineligibleRates?: IneligibleRateList;
}

/** The response schema for the getRates operation. */
export interface GetRatesResponse {
  /** The payload for the getRates operation. */
  payload?: GetRatesResult;
}

/** The request schema for the directPurchaseShipment operation. When the channel type is Amazon, the shipTo address is not required and will be ignored. */
export interface DirectPurchaseRequest {
  /** The address where the shipment will be delivered. For vendor orders, shipTo information is pulled directly from the Amazon order. */
  shipTo?: Address;
  /** The address where the package will be picked up. */
  shipFrom?: Address;
  /** The address where the package will be returned if it cannot be delivered. */
  returnTo?: Address;
  /** A list of packages to be shipped through a shipping service offering. */
  packages?: PackageList;
  /** Shipment source channel related information. */
  channelDetails: ChannelDetails;
  /** The document (label) specifications requested. The default label returned is PNG DPI 203 4x6 if no label specification is provided. Requesting an invalid file format results in a failure. */
  labelSpecifications?: RequestedDocumentSpecification;
}

/** The payload for the directPurchaseShipment operation. */
export interface DirectPurchaseResult {
  /** The unique shipment identifier provided by a shipping service. */
  shipmentId: ShipmentId;
  /** A list of post-purchase details about a package that will be shipped using a shipping service. */
  packageDocumentDetailList?: PackageDocumentDetailList;
}

/** The response schema for the directPurchaseShipment operation. */
export interface DirectPurchaseResponse {
  /** The payload for the directPurchaseShipment operation. */
  payload?: DirectPurchaseResult;
}

/** The payload for the getShipmentDocuments operation. */
export interface GetShipmentDocumentsResult {
  /** The unique shipment identifier provided by a shipping service. */
  shipmentId: ShipmentId;
  /** The post-purchase details of a package that will be shipped using a shipping service. */
  packageDocumentDetail: PackageDocumentDetail;
}

/** The response schema for the the getShipmentDocuments operation. */
export interface GetShipmentDocumentsResponse {
  /** The payload for the getShipmentDocuments operation. */
  payload?: GetShipmentDocumentsResult;
}

/** The payload for the getTracking operation. */
export interface GetTrackingResult {
  /** The carrier generated identifier for a package in a purchased shipment. */
  trackingId: TrackingId;
  /** The carrier generated reverse identifier for a returned package in a purchased shipment. */
  alternateLegTrackingId: AlternateLegTrackingId;
  /** A list of tracking events. */
  eventHistory: Event[];
  /**
   * The date and time by which the shipment is promised to be delivered.
   * @format date-time
   */
  promisedDeliveryDate: string;
  /** A package status summary. */
  summary: TrackingSummary;
}

/** The response schema for the getTracking operation. */
export interface GetTrackingResponse {
  /** The payload for the getTracking operation. */
  payload?: GetTrackingResult;
}

/** The request schema for the purchaseShipment operation. */
export interface PurchaseShipmentRequest {
  /** A unique token generated to identify a getRates operation. */
  requestToken: RequestToken;
  /** An identifier for the rate (shipment offering) provided by a shipping service provider. */
  rateId: RateId;
  /** The document specifications requested. For calls to the purchaseShipment operation, the shipment purchase fails if the specified document specifications are not among those returned in the response to the getRates operation. */
  requestedDocumentSpecification: RequestedDocumentSpecification;
  /** The value-added services to be added to a shipping service purchase. */
  requestedValueAddedServices?: RequestedValueAddedServiceList;
  /**
   * The additional inputs required to purchase a shipping offering, in JSON format. The JSON provided here must adhere to the JSON schema that is returned in the response to the getAdditionalInputs operation.
   *
   * Additional inputs are only required when indicated by the requiresAdditionalInputs property in the response to the getRates operation.
   */
  additionalInputs?: Record<string, any>;
}

/** The payload for the purchaseShipment operation. */
export interface PurchaseShipmentResult {
  /** The unique shipment identifier provided by a shipping service. */
  shipmentId: ShipmentId;
  /** A list of post-purchase details about a package that will be shipped using a shipping service. */
  packageDocumentDetails: PackageDocumentDetailList;
  /** The time windows promised for pickup and delivery events. */
  promise: Promise;
}

/** The response schema for the purchaseShipment operation. */
export interface PurchaseShipmentResponse {
  /** The payload for the purchaseShipment operation. */
  payload?: PurchaseShipmentResult;
}

/** The request schema for the OneClickShipment operation. When the channelType is not Amazon, shipTo is required and when channelType is Amazon shipTo is ignored. */
export interface OneClickShipmentRequest {
  /** The ship to address. */
  shipTo?: Address;
  /** The ship from address. */
  shipFrom: Address;
  /** The return to address. */
  returnTo?: Address;
  /**
   * The ship date and time (the requested pickup). This defaults to the current date and time.
   * @format date-time
   */
  shipDate?: string;
  /** A list of packages to be shipped through a shipping service offering. */
  packages: PackageList;
  /** The value-added services to be added to a shipping service purchase. */
  valueAddedServicesDetails?: OneClickShipmentValueAddedServiceDetails;
  /** A list of tax detail information. */
  taxDetails?: TaxDetailList;
  /** Shipment source channel related information. */
  channelDetails: ChannelDetails;
  /** The document specifications requested. For calls to the purchaseShipment operation, the shipment purchase fails if the specified document specifications are not among those returned in the response to the getRates operation. */
  labelSpecifications: RequestedDocumentSpecification;
  /** Service Selection Criteria. */
  serviceSelection: ServiceSelection;
  /** Optional field for shipper instruction. */
  shipperInstruction?: ShipperInstruction;
  destinationAccessPointDetails?: AccessPointDetails;
}

/** The response schema for the OneClickShipment operation. */
export interface OneClickShipmentResponse {
  /** The payload for the OneClickShipment API. */
  payload?: OneClickShipmentResult;
}

/** The payload for the OneClickShipment API. */
export interface OneClickShipmentResult {
  /** The unique shipment identifier provided by a shipping service. */
  shipmentId: ShipmentId;
  /** A list of post-purchase details about a package that will be shipped using a shipping service. */
  packageDocumentDetails: PackageDocumentDetailList;
  /** The time windows promised for pickup and delivery events. */
  promise: Promise;
  /** Carrier Related Info */
  carrier: Carrier;
  /** Service Related Info */
  service: Service;
  /** The monetary value in the currency indicated, in ISO 4217 standard format. */
  totalCharge: Currency;
}

/** The response schema for the GetAccessPoints operation. */
export interface GetAccessPointsResponse {
  /** The payload for the GetAccessPoints API. */
  payload?: GetAccessPointsResult;
}

/** The payload for the GetAccessPoints API. */
export interface GetAccessPointsResult {
  /** Map of type of access point to list of access points */
  accessPointsMap: AccessPointsMap;
}

/** The type of access point, like counter (HELIX), lockers, etc. */
export enum AccessPointType {
  HELIX = "HELIX",
  CAMPUS_LOCKER = "CAMPUS_LOCKER",
  OMNI_LOCKER = "OMNI_LOCKER",
  ODIN_LOCKER = "ODIN_LOCKER",
  DOBBY_LOCKER = "DOBBY_LOCKER",
  CORE_LOCKER = "CORE_LOCKER",
  Value3P = "3P",
  CAMPUS_ROOM = "CAMPUS_ROOM",
}

/** Map of type of access point to list of access points */
export type AccessPointsMap = Record<string, AccessPointList>;

/** List of relevant Access points requested by shipper. These access points are sorted by proximity to postal code, and are limited to 40. We have internally defined a radius value to render relevant results. */
export type AccessPointList = AccessPoint[];

/** Unique identifier for the access point */
export type AccessPointId = string;

/** Access point details */
export interface AccessPoint {
  /** Unique identifier for the access point */
  accessPointId?: AccessPointId;
  /** Name of entity (store/hub etc) where this access point is located */
  name?: string;
  /** Timezone of access point */
  timezone?: string;
  /** The type of access point, like counter (HELIX), lockers, etc. */
  type?: AccessPointType;
  /** Defines the accessibility details of the access point. */
  accessibilityAttributes?: AccessibilityAttributes;
  /** The address. */
  address?: Address;
  exceptionOperatingHours?: ExceptionOperatingHours[];
  assistanceType?: "STAFF_ASSISTED" | "SELF_ASSISTED";
  /** The score of access point, based on proximity to postal code and sorting preference. This can be used to sort access point results on shipper's end. */
  score?: string;
  /** Map of day of the week to operating hours of that day */
  standardOperatingHours?: DayOfWeekTimeMap;
}

/** Defines the accessibility details of the access point. */
export interface AccessibilityAttributes {
  /** The approximate distance of access point from input postalCode's centroid. */
  distance?: string;
  /** The approximate (static) drive time from input postal code's centroid. */
  driveTime?: number;
}

/** The hours in which the access point shall remain operational */
export interface OperatingHours {
  /** Denotes time of the day, used for defining opening or closing time of access points */
  closingTime?: TimeOfDay;
  /** Denotes time of the day, used for defining opening or closing time of access points */
  openingTime?: TimeOfDay;
  midDayClosures?: TimeOfDay[];
}

/** Denotes time of the day, used for defining opening or closing time of access points */
export interface TimeOfDay {
  hourOfDay?: number;
  minuteOfHour?: number;
  secondOfMinute?: number;
}

/** Map of day of the week to operating hours of that day */
export type DayOfWeekTimeMap = Record<string, OperatingHours>;

/** Defines exceptions to standard operating hours for certain date ranges. */
export interface ExceptionOperatingHours {
  /** Date Range for query the results. */
  dateRange?: DateRange;
  /** The hours in which the access point shall remain operational */
  operatingHours?: OperatingHours;
}

/** The JSON schema to use to provide additional inputs when required to purchase a shipping offering. */
export type GetAdditionalInputsResult = Record<string, any>;

/** The response schema for the getAdditionalInputs operation. */
export interface GetAdditionalInputsResponse {
  /** The JSON schema to use to provide additional inputs when required to purchase a shipping offering. */
  payload?: GetAdditionalInputsResult;
}

/** The request schema for the GetCarrierAccounts operation. */
export interface GetCarrierAccountsRequest {
  /** Object to pass additional information about the MCI Integrator shipperType: List of ClientReferenceDetail */
  clientReferenceDetails?: ClientReferenceDetails;
}

/** The request schema for verify and add the merchant's account with a certain carrier. */
export interface LinkCarrierAccountRequest {
  /** Object to pass additional information about the MCI Integrator shipperType: List of ClientReferenceDetail */
  clientReferenceDetails?: ClientReferenceDetails;
  /** CarrierAccountType  associated with account. */
  carrierAccountType: CarrierAccountType;
  /** A list of all attributes required by the carrier in order to successfully link the merchant's account */
  carrierAccountAttributes: CarrierAccountAttributes;
  /** A list of all attributes required by the carrier in order to successfully link the merchant's account */
  encryptedCarrierAccountAttributes?: CarrierAccountAttributes;
}

/** The request schema for remove the Carrier Account associated with the provided merchant. */
export interface UnlinkCarrierAccountRequest {
  /** Object to pass additional information about the MCI Integrator shipperType: List of ClientReferenceDetail */
  clientReferenceDetails?: ClientReferenceDetails;
}

/** The request schema Call to generate the collection form. */
export interface GenerateCollectionFormRequest {
  /** Object to pass additional information about the MCI Integrator shipperType: List of ClientReferenceDetail */
  clientReferenceDetails?: ClientReferenceDetails;
  /** The carrier identifier for the offering, provided by the carrier. */
  carrierId: CarrierId;
  /** The address. */
  shipFromAddress?: Address;
}

/** The request schema to get query collections form history API . */
export interface GetCollectionFormHistoryRequest {
  /** Object to pass additional information about the MCI Integrator shipperType: List of ClientReferenceDetail */
  clientReferenceDetails?: ClientReferenceDetails;
  /** max Number of Results for query . */
  maxResults?: number;
  /** The carrier identifier for the offering, provided by the carrier. */
  carrierId?: CarrierId;
  /** The address. */
  shipFromAddress?: Address;
  /** Date Range for query the results. */
  dateRange?: DateRange;
}

/** The request schema for the GetUnmanifestedShipmentsRequest operation. */
export interface GetUnmanifestedShipmentsRequest {
  /** Object to pass additional information about the MCI Integrator shipperType: List of ClientReferenceDetail */
  clientReferenceDetails?: ClientReferenceDetails;
}

/** The Response  for the GetCarrierAccountFormInputsResponse operation. */
export interface GetCarrierAccountFormInputsResponse {
  /** A list of LinkableCarrier */
  linkableCarriersList?: LinkableCarriersList;
}

/** The Response  for the GetCarrierAccountsResponse operation. */
export interface GetCarrierAccountsResponse {
  /** A list of ActiveAccount */
  activeAccounts: ActiveAccounts;
}

/** The Response  for the LinkCarrierAccount operation. */
export interface LinkCarrierAccountResponse {
  /** Account Status. */
  registrationStatus?: AccountStatus;
}

/** The Response  for the UnlinkCarrierAccountResponse operation. */
export interface UnlinkCarrierAccountResponse {
  /** Is Carrier unlinked from Merchant */
  isUnlinked?: boolean;
}

/** The Response  for the GenerateCollectionFormResponse operation. */
export interface GenerateCollectionFormResponse {
  /** Collection Form Document Details */
  collectionsFormDocument?: CollectionsFormDocument;
}

/** The Response  for the GetCollectionFormHistoryResponse operation. */
export interface GetCollectionFormHistoryResponse {
  /** A list of CollectionFormsHistoryRecord */
  collectionFormsHistoryRecordList?: CollectionFormsHistoryRecordList;
  /** Last Refereshed Date of collection */
  lastRefreshedDate?: string;
}

/** The Response  for the GetUnmanifestedShipmentsResponse operation. */
export interface GetUnmanifestedShipmentsResponse {
  /** A list of UnmanifestedCarrierInformation */
  unmanifestedCarrierInformationList?: UnmanifestedCarrierInformationList;
}

/** The Response  for the GetCollectionFormResponse operation. */
export interface GetCollectionFormResponse {
  /** Collection Form Document Details */
  collectionsFormDocument?: CollectionsFormDocument;
}

/** Object to pass additional information about the MCI Integrator shipperType: List of ClientReferenceDetail */
export type ClientReferenceDetails = ClientReferenceDetail[];

/** Client Reference Details */
export interface ClientReferenceDetail {
  /** Client Reference type. */
  clientReferenceType: "IntegratorShipperId" | "IntegratorMerchantId";
  /** The Client Reference Id. */
  clientReferenceId: string;
}

/** Collection Form Id for Reprint . */
export type CollectionFormId = string;

/** Shipment type. */
export enum ShipmentType {
  FORWARD = "FORWARD",
  RETURNS = "RETURNS",
}

/** A list of ActiveAccount */
export type ActiveAccounts = ActiveAccount[];

/** Active Account Details */
export interface ActiveAccount {
  /** Account Id associated with this account. */
  accountId?: string;
  /** The carrier identifier for the offering, provided by the carrier. */
  carrierId?: CarrierId;
}

/** Date Range for query the results. */
export interface DateRange {
  /**
   * Start Date for query .
   * @format dateTime
   */
  startDate?: string;
  /**
   * end date for query.
   * @format dateTime
   */
  endDate?: string;
}

/** A list of all attributes required by the carrier in order to successfully link the merchant's account */
export type CarrierAccountAttributes = CarrierAccountAttribute[];

/** Attribute Properties required by carrier */
export interface CarrierAccountAttribute {
  /** Attribute Name . */
  attributeName?: string;
  /** Property Group. */
  propertyGroup?: string;
  /** Value . */
  value?: string;
}

/** CarrierAccountType  associated with account. */
export type CarrierAccountType = string;

/** merchant Id of provided merchant  */
export type MerchantId = string;

/** Account Status. */
export enum AccountStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  PENDING = "PENDING",
  SUSPENDED = "SUSPENDED",
}

/** Collection Form Document Details */
export interface CollectionsFormDocument {
  /** Base64 document Value of Collection. */
  base64EncodedContent?: string;
  /**
   * Collection Document format is PDF.
   * @format application/pdf
   */
  documentFormat?: string;
}

/** A list of CollectionFormsHistoryRecord */
export type CollectionFormsHistoryRecordList = CollectionFormsHistoryRecord[];

/** Active Account Details */
export interface CollectionFormsHistoryRecord {
  /** The carrier name for the offering. */
  carrierName?: CarrierName;
  /**
   * Creation Time for this account.
   * @format dateTime
   */
  creationDate?: string;
  /** Generation Status. */
  generationStatus?: GenerationStatus;
  /** Collection Form Id for Reprint . */
  collectionFormId?: CollectionFormId;
  /** The address. */
  shipFromAddress?: Address;
}

/** A list of UnmanifestedCarrierInformation */
export type UnmanifestedCarrierInformationList = UnmanifestedCarrierInformation[];

/** UnmanifestedCarrierInformation like carrierId CarrierName and Location */
export interface UnmanifestedCarrierInformation {
  /** The carrier identifier for the offering, provided by the carrier. */
  carrierId?: CarrierId;
  /** The carrier name for the offering. */
  carrierName?: CarrierName;
  /** A list of UnmanifestedShipmentLocation */
  unmanifestedShipmentLocationList?: UnmanifestedShipmentLocationList;
}

/** A list of UnmanifestedShipmentLocation */
export type UnmanifestedShipmentLocationList = UnmanifestedShipmentLocation[];

/** UnmanifestedShipmentLocation info  */
export interface UnmanifestedShipmentLocation {
  /** The address. */
  address?: Address;
  /**
   * Its Last Manifest Date.
   * @format dateTime
   */
  lastManifestDate?: string;
}

/** A list of LinkableCarrier */
export type LinkableCarriersList = LinkableCarrier[];

/** Info About Linkable Carrier */
export interface LinkableCarrier {
  /** The carrier identifier for the offering, provided by the carrier. */
  carrierId?: CarrierId;
  /** A list of LinkableAccountType */
  linkableAccountTypes?: LinkableAccountTypeList;
}

/** A list of LinkableAccountType */
export type LinkableAccountTypeList = LinkableAccountType[];

/** Info About Linkable Account Type */
export interface LinkableAccountType {
  /** Shipper Account Type. */
  accountType?: AccountType;
  /** A list of CarrierAccountInput */
  carrierAccountInputs?: CarrierAccountInputsList;
}

/** A list of CarrierAccountInput */
export type CarrierAccountInputsList = CarrierAccountInput[];

/** Info About CarrierAccountInput */
export interface CarrierAccountInput {
  /** descriptionLocalizationKey value . */
  descriptionLocalizationKey?: string;
  /** name value . */
  name?: string;
  /** groupName value . */
  groupName?: string;
  /** Type of Input. */
  inputType?: InputType;
  /** mandatory or not  value . */
  isMandatory?: boolean;
  /** is value is Confidential . */
  isConfidential?: boolean;
  /** is value is hidden . */
  isHidden?: boolean;
  /** A list of ValidationMetadata */
  validationMetadata?: ValidationMetadataList;
}

/** A list of ValidationMetadata */
export type ValidationMetadataList = ValidationMetadata[];

/** ValidationMetadata Details */
export interface ValidationMetadata {
  /** errorMessage for the error. */
  errorMessage?: string;
  /** validationStrategy for the error. */
  validationStrategy?: string;
  /** Value. */
  value?: string;
}

/** Generation Status. */
export enum GenerationStatus {
  Completed = "Completed",
  InProgress = "InProgress",
}

/** Shipper Account Type. */
export enum AccountType {
  SHIPPER_ACCOUNT = "SHIPPER_ACCOUNT",
  SHIPPER_ACCOUNT_WITH_INVOICE = "SHIPPER_ACCOUNT_WITH_INVOICE",
  AMAZON_ACCOUNT = "AMAZON_ACCOUNT",
}

/** Type of Input. */
export enum InputType {
  TEXTBOX = "TEXTBOX",
  PASSWORD = "PASSWORD",
}

/** Payment type of the purchase. */
export enum PaymentType {
  PAY_THROUGH_AMAZON = "PAY_THROUGH_AMAZON",
  PAY_DIRECT_TO_CARRIER = "PAY_DIRECT_TO_CARRIER",
}

/** A list of RateItem */
export type RateItemList = RateItem[];

/** Rate Item for shipping (base cost, transaction fee, confirmation, insurance, etc.) Data source definition:  */
export interface RateItem {
  /** Unique ID for the rateItem. */
  rateItemID?: RateItemID;
  /** Type of the rateItem. */
  rateItemType?: RateItemType;
  /** The monetary value in the currency indicated, in ISO 4217 standard format. */
  rateItemCharge?: Currency;
  /** Used for the localization. */
  rateItemNameLocalization?: string;
}

/** Unique ID for the rateItem. */
export enum RateItemID {
  BASE_RATE = "BASE_RATE",
  TRANSACTION_FEE = "TRANSACTION_FEE",
  ADULT_SIGNATURE_CONFIRMATION = "ADULT_SIGNATURE_CONFIRMATION",
  SIGNATURE_CONFIRMATION = "SIGNATURE_CONFIRMATION",
  NO_CONFIRMATION = "NO_CONFIRMATION",
  WAIVE_SIGNATURE = "WAIVE_SIGNATURE",
  IMPLIED_LIABILITY = "IMPLIED_LIABILITY",
  HIDDEN_POSTAGE = "HIDDEN_POSTAGE",
  DECLARED_VALUE = "DECLARED_VALUE",
  SUNDAY_HOLIDAY_DELIVERY = "SUNDAY_HOLIDAY_DELIVERY",
  DELIVERY_CONFIRMATION = "DELIVERY_CONFIRMATION",
  IMPORT_DUTY_CHARGE = "IMPORT_DUTY_CHARGE",
  VAT = "VAT",
  NO_SATURDAY_DELIVERY = "NO_SATURDAY_DELIVERY",
  INSURANCE = "INSURANCE",
  COD = "COD",
  FUEL_SURCHARGE = "FUEL_SURCHARGE",
  INSPECTION_CHARGE = "INSPECTION_CHARGE",
  DELIVERY_AREA_SURCHARGE = "DELIVERY_AREA_SURCHARGE",
  WAYBILL_CHARGE = "WAYBILL_CHARGE",
  AMAZON_SPONSORED_DISCOUNT = "AMAZON_SPONSORED_DISCOUNT",
  INTEGRATOR_SPONSORED_DISCOUNT = "INTEGRATOR_SPONSORED_DISCOUNT",
  OVERSIZE_SURCHARGE = "OVERSIZE_SURCHARGE",
  CONGESTION_CHARGE = "CONGESTION_CHARGE",
  RESIDENTIAL_SURCHARGE = "RESIDENTIAL_SURCHARGE",
  ADDITIONAL_SURCHARGE = "ADDITIONAL_SURCHARGE",
  SURCHARGE = "SURCHARGE",
  REBATE = "REBATE",
}

/** Type of the rateItem. */
export enum RateItemType {
  MANDATORY = "MANDATORY",
  OPTIONAL = "OPTIONAL",
  INCLUDED = "INCLUDED",
}

/** Representing the included/excluded benefits that we offer for each ShippingOffering/Rate. Benefits being services provided by Amazon when sellers purchase shipping through Amazon. */
export interface Benefits {
  /** A list of included benefits. */
  includedBenefits: IncludedBenefits;
  /** A list of excluded benefit. Refer to the ExcludeBenefit object for further documentation */
  excludedBenefits: ExcludedBenefits;
}

/** A list of included benefits. */
export type IncludedBenefits = string[];

/** A list of excluded benefit. Refer to the ExcludeBenefit object for further documentation */
export type ExcludedBenefits = ExcludedBenefit[];

/** Object representing an excluded benefit that is excluded for an ShippingOffering/Rate. */
export interface ExcludedBenefit {
  benefit: string;
  reasonCode: string;
}

/** Service Selection Criteria. */
export interface ServiceSelection {
  /** A list of ServiceId. */
  serviceId: ServiceIds;
}

/** A list of ServiceId. */
export type ServiceIds = string[];

/** The value-added services to be added to a shipping service purchase. */
export type OneClickShipmentValueAddedServiceDetails =
  OneClickShipmentValueAddedService[];

/** A value-added service to be applied to a shipping service purchase. */
export interface OneClickShipmentValueAddedService {
  /** The identifier of the selected value-added service. */
  id: string;
  /** The monetary value in the currency indicated, in ISO 4217 standard format. */
  amount?: Currency;
}

/** Service Related Info */
export interface Service {
  /** An identifier for the shipping service. */
  id: ServiceId;
  /** The name of the shipping service. */
  name: ServiceName;
}

/** Carrier Related Info */
export interface Carrier {
  /** The carrier identifier for the offering, provided by the carrier. */
  id: CarrierId;
  /** The carrier name for the offering. */
  name: CarrierName;
}
