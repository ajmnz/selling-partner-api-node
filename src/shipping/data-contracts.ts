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

/**
 * This is the Amazon Shipping account id generated during the Amazon Shipping onboarding process.
 * @maxLength 10
 */
export type AccountId = string;

/** The unique shipment identifier. */
export type ShipmentId = string;

/**
 * Client reference id.
 * @maxLength 40
 */
export type ClientReferenceId = string;

/**
 * An identifier for the container. This must be unique within all the containers in the same shipment.
 * @maxLength 40
 */
export type ContainerReferenceId = string;

/**
 * The event code of a shipment, such as Departed, Received, and ReadyForReceive.
 * @minLength 1
 * @maxLength 60
 */
export type EventCode = string;

/** The state or region where the person, business or institution is located. */
export type StateOrRegion = string;

/**
 * The city where the person, business or institution is located.
 * @minLength 1
 * @maxLength 50
 */
export type City = string;

/**
 * The two digit country code. In ISO 3166-1 alpha-2 format.
 * @minLength 2
 * @maxLength 2
 */
export type CountryCode = string;

/**
 * The postal code of that address. It contains a series of letters or digits or both, sometimes including spaces or punctuation.
 * @minLength 1
 * @maxLength 20
 */
export type PostalCode = string;

/** The location where the person, business or institution is located. */
export interface Location {
  /** The state or region where the person, business or institution is located. */
  stateOrRegion?: StateOrRegion;
  /** The city where the person, business or institution is located. */
  city?: City;
  /** The two digit country code. In ISO 3166-1 alpha-2 format. */
  countryCode?: CountryCode;
  /** The postal code of that address. It contains a series of letters or digits or both, sometimes including spaces or punctuation. */
  postalCode?: PostalCode;
}

/** An event of a shipment */
export interface Event {
  /** The event code of a shipment, such as Departed, Received, and ReadyForReceive. */
  eventCode: EventCode;
  /**
   * The date and time of an event for a shipment.
   * @format date-time
   */
  eventTime: string;
  /** The location where the person, business or institution is located. */
  location?: Location;
}

/** A list of events of a shipment. */
export type EventList = Event[];

/**
 * The tracking id generated to each shipment. It contains a series of letters or digits or both.
 * @minLength 1
 * @maxLength 60
 */
export type TrackingId = string;

/** The tracking summary. */
export interface TrackingSummary {
  /**
   * The derived status based on the events in the eventHistory.
   * @minLength 1
   * @maxLength 60
   */
  status?: string;
}

/**
 * The promised delivery date and time of a shipment.
 * @format date-time
 */
export type PromisedDeliveryDate = string;

/** The address. */
export interface Address {
  /**
   * The name of the person, business or institution at that address.
   * @minLength 1
   * @maxLength 50
   */
  name: string;
  /**
   * First line of that address.
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
  /** The state or region where the person, business or institution is located. */
  stateOrRegion: StateOrRegion;
  /** The city where the person, business or institution is located. */
  city: City;
  /** The two digit country code. In ISO 3166-1 alpha-2 format. */
  countryCode: CountryCode;
  /** The postal code of that address. It contains a series of letters or digits or both, sometimes including spaces or punctuation. */
  postalCode: PostalCode;
  /**
   * The email address of the contact associated with the address.
   * @maxLength 64
   */
  email?: string;
  /**
   * The email cc addresses of the contact associated with the address.
   * @maxItems 2
   */
  copyEmails?: string[];
  /**
   * The phone number of the person, business or institution located at that address.
   * @minLength 1
   * @maxLength 20
   */
  phoneNumber?: string;
}

/** The time range. */
export interface TimeRange {
  /**
   * The start date and time. This defaults to the current date and time.
   * @format date-time
   */
  start?: string;
  /**
   * The end date and time. This must come after the value of start. This defaults to the next business day from the start.
   * @format date-time
   */
  end?: string;
}

/** The promised delivery time and pickup time. */
export interface ShippingPromiseSet {
  /** The time window in which the shipment will be delivered. */
  deliveryWindow?: TimeRange;
  /** The time window in which Amazon Shipping will pick up the shipment. */
  receiveWindow?: TimeRange;
}

/** The type of shipping service that will be used for the service offering. */
export enum ServiceType {
  AmazonShippingGround = "Amazon Shipping Ground",
  AmazonShippingStandard = "Amazon Shipping Standard",
  AmazonShippingPremium = "Amazon Shipping Premium",
}

/** A list of service types that can be used to send the shipment. */
export type ServiceTypeList = ServiceType[];

/** The available rate that can be used to send the shipment */
export interface Rate {
  /** An identifier for the rate. */
  rateId?: string;
  /** The total charge that will be billed for the rate. */
  totalCharge?: Currency;
  /** The weight that was used to calculate the totalCharge. */
  billedWeight?: Weight;
  /**
   * The time after which the offering will expire.
   * @format date-time
   */
  expirationTime?: string;
  /** The type of shipping service that will be used for the service offering. */
  serviceType?: ServiceType;
  /** The promised delivery time and pickup time. */
  promise?: ShippingPromiseSet;
}

/** A list of all the available rates that can be used to send the shipment. */
export type RateList = Rate[];

/** An identifier for the rating. */
export type RateId = string;

/** The specific rate purchased for the shipment, or null if unpurchased. */
export interface AcceptedRate {
  /** The total charge that will be billed for the rate. */
  totalCharge?: Currency;
  /** The weight that was used to calculate the totalCharge. */
  billedWeight?: Weight;
  /** The type of shipping service that will be used for the service offering. */
  serviceType?: ServiceType;
  /** The promised delivery time and pickup time. */
  promise?: ShippingPromiseSet;
}

/** The specific rate for a shipping service, or null if no service available. */
export interface ServiceRate {
  /** The total charge that will be billed for the rate. */
  totalCharge: Currency;
  /** The weight that was used to calculate the totalCharge. */
  billableWeight: Weight;
  /** The type of shipping service that will be used for the service offering. */
  serviceType: ServiceType;
  /** The promised delivery time and pickup time. */
  promise: ShippingPromiseSet;
}

/** A list of service rates. */
export type ServiceRateList = ServiceRate[];

/** The account related with the shipment. */
export interface Party {
  /** This is the Amazon Shipping account id generated during the Amazon Shipping onboarding process. */
  accountId?: AccountId;
}

/** The total value of all items in the container. */
export interface Currency {
  /** The amount of currency. */
  value: number;
  /**
   * A 3-character currency code.
   * @minLength 3
   * @maxLength 3
   */
  unit: string;
}

/** A set of measurements for a three-dimensional object. */
export interface Dimensions {
  /** The length of the container. */
  length: number;
  /** The width of the container. */
  width: number;
  /** The height of the container. */
  height: number;
  /** The unit of these measurements. */
  unit: "IN" | "CM";
}

/** The weight. */
export interface Weight {
  /** The unit of measurement. */
  unit: "g" | "kg" | "oz" | "lb";
  /** The measurement value. */
  value: number;
}

/** Item in the container. */
export interface ContainerItem {
  /** The quantity of the items of this type in the container. */
  quantity: number;
  /** The unit price of an item of this type (the total value of this item type in the container is unitPrice * quantity). */
  unitPrice: Currency;
  /** The unit weight of an item of this type (the total weight of this item type in the container is unitWeight * quantity). */
  unitWeight: Weight;
  /**
   * A descriptive title of the item.
   * @maxLength 30
   */
  title: string;
}

/** Container in the shipment. */
export interface Container {
  /** The type of physical container being used. (always 'PACKAGE') */
  containerType?: "PACKAGE";
  /** An identifier for the container. This must be unique within all the containers in the same shipment. */
  containerReferenceId: ContainerReferenceId;
  /** The total value of all items in the container. */
  value: Currency;
  /** The length, width, height, and weight of the container. */
  dimensions: Dimensions;
  /** A list of the items in the container. */
  items: ContainerItem[];
  /** The weight of the container. */
  weight: Weight;
}

/** A list of container. */
export type ContainerList = Container[];

/** Container specification for checking the service rate. */
export interface ContainerSpecification {
  /** The length, width, and height of the container. */
  dimensions: Dimensions;
  /** The weight of the container. */
  weight: Weight;
}

/** A list of container specifications. */
export type ContainerSpecificationList = ContainerSpecification[];

/** The label details of the container. */
export interface Label {
  /** Contains binary image data encoded as a base-64 string. */
  labelStream?: LabelStream;
  /** The label specification info. */
  labelSpecification?: LabelSpecification;
}

/** Label details including label stream, format, size. */
export interface LabelResult {
  /** An identifier for the container. This must be unique within all the containers in the same shipment. */
  containerReferenceId?: ContainerReferenceId;
  /** The tracking identifier assigned to the container. */
  trackingId?: string;
  /** The label details of the container. */
  label?: Label;
}

/** A list of label results */
export type LabelResultList = LabelResult[];

/** Contains binary image data encoded as a base-64 string. */
export type LabelStream = string;

/** The label specification info. */
export interface LabelSpecification {
  /** The format of the label. Enum of PNG only for now. */
  labelFormat: "PNG";
  /** The label stock size specification in length and height. Enum of 4x6 only for now. */
  labelStockSize: "4x6";
}

/** The request schema for the createShipment operation. */
export interface CreateShipmentRequest {
  /** Client reference id. */
  clientReferenceId: ClientReferenceId;
  /** The address. */
  shipTo: Address;
  /** The address. */
  shipFrom: Address;
  /** A list of container. */
  containers: ContainerList;
}

/** The request schema for the purchaseLabels operation. */
export interface PurchaseLabelsRequest {
  /** An identifier for the rating. */
  rateId: RateId;
  /** The label specification info. */
  labelSpecification: LabelSpecification;
}

/** The request schema for the retrieveShippingLabel operation. */
export interface RetrieveShippingLabelRequest {
  /** The label specification info. */
  labelSpecification: LabelSpecification;
}

/** The payload schema for the getRates operation. */
export interface GetRatesRequest {
  /** The address. */
  shipTo: Address;
  /** The address. */
  shipFrom: Address;
  /** A list of service types that can be used to send the shipment. */
  serviceTypes: ServiceTypeList;
  /**
   * The start date and time. This defaults to the current date and time.
   * @format date-time
   */
  shipDate?: string;
  /** A list of container specifications. */
  containerSpecifications: ContainerSpecificationList;
}

/** The payload schema for the purchaseShipment operation. */
export interface PurchaseShipmentRequest {
  /** Client reference id. */
  clientReferenceId: ClientReferenceId;
  /** The address. */
  shipTo: Address;
  /** The address. */
  shipFrom: Address;
  /**
   * The start date and time. This defaults to the current date and time.
   * @format date-time
   */
  shipDate?: string;
  /** The type of shipping service that will be used for the service offering. */
  serviceType: ServiceType;
  /** A list of container. */
  containers: ContainerList;
  /** The label specification info. */
  labelSpecification: LabelSpecification;
}

/** The payload schema for the createShipment operation. */
export interface CreateShipmentResult {
  /** The unique shipment identifier. */
  shipmentId: ShipmentId;
  /** A list of all the available rates that can be used to send the shipment. */
  eligibleRates: RateList;
}

/** The shipment related data. */
export interface Shipment {
  /** The unique shipment identifier. */
  shipmentId: ShipmentId;
  /** Client reference id. */
  clientReferenceId: ClientReferenceId;
  /** The address. */
  shipFrom: Address;
  /** The address. */
  shipTo: Address;
  /** The specific rate purchased for the shipment, or null if unpurchased. */
  acceptedRate?: AcceptedRate;
  /** The account related with the shipment. */
  shipper?: Party;
  /** A list of container. */
  containers: ContainerList;
}

/** The payload schema for the purchaseLabels operation. */
export interface PurchaseLabelsResult {
  /** The unique shipment identifier. */
  shipmentId: ShipmentId;
  /** Client reference id. */
  clientReferenceId?: ClientReferenceId;
  /** The specific rate purchased for the shipment, or null if unpurchased. */
  acceptedRate: AcceptedRate;
  /** A list of label results */
  labelResults: LabelResultList;
}

/** The payload schema for the retrieveShippingLabel operation. */
export interface RetrieveShippingLabelResult {
  /** Contains binary image data encoded as a base-64 string. */
  labelStream: LabelStream;
  /** The label specification info. */
  labelSpecification: LabelSpecification;
}

/** The account related data. */
export interface Account {
  /** This is the Amazon Shipping account id generated during the Amazon Shipping onboarding process. */
  accountId: AccountId;
}

/** The payload schema for the getRates operation. */
export interface GetRatesResult {
  /** A list of service rates. */
  serviceRates: ServiceRateList;
}

/** The payload schema for the purchaseShipment operation. */
export interface PurchaseShipmentResult {
  /** The unique shipment identifier. */
  shipmentId: ShipmentId;
  /** The specific rate for a shipping service, or null if no service available. */
  serviceRate: ServiceRate;
  /** A list of label results */
  labelResults: LabelResultList;
}

/** The payload schema for the getTrackingInformation operation. */
export interface TrackingInformation {
  /** The tracking id generated to each shipment. It contains a series of letters or digits or both. */
  trackingId: TrackingId;
  /** The tracking summary. */
  summary: TrackingSummary;
  /** The promised delivery date and time of a shipment. */
  promisedDeliveryDate: PromisedDeliveryDate;
  /** A list of events of a shipment. */
  eventHistory: EventList;
}

/** The response schema for the createShipment operation. */
export interface CreateShipmentResponse {
  /** The payload for createShipment operation */
  payload?: CreateShipmentResult;
  /** Encountered errors for the operation. */
  errors?: ErrorList;
}

/** The response schema for the getShipment operation. */
export interface GetShipmentResponse {
  /** The payload for getShipment operation */
  payload?: Shipment;
  /** Encountered errors for the operation. */
  errors?: ErrorList;
}

/** The response schema for the getRates operation. */
export interface GetRatesResponse {
  /** The payload for getRates operation */
  payload?: GetRatesResult;
  /** Encountered errors for the operation. */
  errors?: ErrorList;
}

/** The response schema for the purchaseShipment operation. */
export interface PurchaseShipmentResponse {
  /** The payload for purchaseShipment operation */
  payload?: PurchaseShipmentResult;
  /** Encountered errors for the operation. */
  errors?: ErrorList;
}

/** The response schema for the cancelShipment operation. */
export interface CancelShipmentResponse {
  /** Encountered errors for the operation. */
  errors?: ErrorList;
}

/** The response schema for the purchaseLabels operation. */
export interface PurchaseLabelsResponse {
  /** The payload for purchaseLabels operation */
  payload?: PurchaseLabelsResult;
  /** Encountered errors for the operation. */
  errors?: ErrorList;
}

/** The response schema for the retrieveShippingLabel operation. */
export interface RetrieveShippingLabelResponse {
  /** The payload for retrieveShippingLabel operation */
  payload?: RetrieveShippingLabelResult;
  /** Encountered errors for the operation. */
  errors?: ErrorList;
}

/** The response schema for the getAccount operation. */
export interface GetAccountResponse {
  /** The payload for getAccount operation */
  payload?: Account;
  /** Encountered errors for the operation. */
  errors?: ErrorList;
}

/** The response schema for the getTrackingInformation operation. */
export interface GetTrackingInformationResponse {
  /** The payload for getTrackingInformation operation */
  payload?: TrackingInformation;
  /** Encountered errors for the operation. */
  errors?: ErrorList;
}
