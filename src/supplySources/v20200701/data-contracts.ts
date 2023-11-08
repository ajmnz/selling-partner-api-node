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

/** An error response returned when the request is unsuccessful. */
export interface Error {
  /** An error code that identifies the type of error that occured. */
  code: string;
  /** A message that describes the error condition in a human-readable form. */
  message: string;
  /** The additional details that can help the caller understand or fix the issue. */
  details?: string;
}

/** A list of error responses returned when a request is unsuccessful. */
export interface ErrorList {
  /** A list of error responses returned when a request is unsuccessful. */
  errors: Error[];
}

/** The paginated list of supply sources. */
export interface GetSupplySourcesResponse {
  /** The list of `SupplySource`s. */
  supplySources?: SupplySourceList;
  /** If present, use this pagination token to retrieve the next page of supply sources. */
  nextPageToken?: string;
}

/** A request to update the status of a supply source. */
export interface UpdateSupplySourceStatusRequest {
  /** The `SupplySource` status */
  status?: SupplySourceStatus;
}

/** A request to create a supply source. */
export interface CreateSupplySourceRequest {
  /** The seller-provided unique supply source code. */
  supplySourceCode: SupplySourceCode;
  /** The custom alias for this supply source */
  alias: SupplySourceAlias;
  /** A physical address. */
  address: Address;
}

/** The result of creating a new supply source. */
export interface CreateSupplySourceResponse {
  /** An Amazon generated unique supply source ID. */
  supplySourceId: SupplySourceId;
  /** The seller-provided unique supply source code. */
  supplySourceCode: SupplySourceCode;
}

/** A request to update the configuration and capabilities of a supply source. */
export interface UpdateSupplySourceRequest {
  /** The custom alias for this supply source */
  alias?: SupplySourceAlias;
  /** Includes configuration and timezone of a supply source. */
  configuration?: SupplySourceConfiguration;
  /** The capabilities of a supply source. */
  capabilities?: SupplySourceCapabilities;
}

/** The supply source details, including configurations and capabilities. */
export interface SupplySource {
  /** An Amazon generated unique supply source ID. */
  supplySourceId?: SupplySourceId;
  /** The seller-provided unique supply source code. */
  supplySourceCode?: SupplySourceCode;
  /** The custom alias for this supply source */
  alias?: SupplySourceAlias;
  /** The `SupplySource` status. */
  status?: SupplySourceStatusReadOnly;
  /** A physical address. */
  address?: Address;
  /** Includes configuration and timezone of a supply source. */
  configuration?: SupplySourceConfiguration;
  /** The capabilities of a supply source. */
  capabilities?: SupplySourceCapabilities;
  /** A date and time in the rfc3339 format. */
  createdAt?: DateTime;
  /** A date and time in the rfc3339 format. */
  updatedAt?: DateTime;
}

/** Includes configuration and timezone of a supply source. */
export interface SupplySourceConfiguration {
  /** The operational configuration of `supplySources`. */
  operationalConfiguration?: OperationalConfiguration;
  /** Please see RFC 6557, should be a canonical time zone ID as listed here: https://www.joda.org/joda-time/timezones.html. */
  timezone?: string;
}

/** The capabilities of a supply source. */
export interface SupplySourceCapabilities {
  /** The outbound capability of a supply source. */
  outbound?: OutboundCapability;
  /** The services capability of a supply source. */
  services?: ServicesCapability;
}

/** The list of `SupplySource`s. */
export type SupplySourceList = {
  /** The custom alias for this supply source */
  alias?: SupplySourceAlias;
  /** An Amazon generated unique supply source ID. */
  supplySourceId?: SupplySourceId;
  /** The seller-provided unique supply source code. */
  supplySourceCode?: SupplySourceCode;
  /** A physical address. */
  address?: Address;
}[];

/** An Amazon generated unique supply source ID. */
export type SupplySourceId = string;

/** The seller-provided unique supply source code. */
export type SupplySourceCode = string;

/** The custom alias for this supply source */
export type SupplySourceAlias = string;

/** The `SupplySource` status. */
export enum SupplySourceStatusReadOnly {
  Active = "Active",
  Inactive = "Inactive",
  Archived = "Archived",
}

/** The `SupplySource` status */
export enum SupplySourceStatus {
  Active = "Active",
  Inactive = "Inactive",
}

/** The outbound capability of a supply source. */
export interface OutboundCapability {
  isSupported?: boolean;
  /** The operational configuration of `supplySources`. */
  operationalConfiguration?: OperationalConfiguration;
  /** The address or reference to another `supplySourceId` to act as a return location. */
  returnLocation?: ReturnLocation;
  /** The delivery channel of a supply source. */
  deliveryChannel?: DeliveryChannel;
  /** The pick up channel of a supply source. */
  pickupChannel?: PickupChannel;
}

/** The services capability of a supply source. */
export interface ServicesCapability {
  /** When true, `SupplySource` supports the Service capability. */
  isSupported?: boolean;
  /** The operational configuration of `supplySources`. */
  operationalConfiguration?: OperationalConfiguration;
}

/** The pick up channel of a supply source. */
export interface PickupChannel {
  /** The duration of time. */
  inventoryHoldPeriod?: Duration;
  isSupported?: boolean;
  /** The operational configuration of `supplySources`. */
  operationalConfiguration?: OperationalConfiguration;
  /** The configuration for supporting in-store pickup. */
  inStorePickupConfiguration?: InStorePickupConfiguration;
  /** The configuration for supporting curbside pickup. */
  curbsidePickupConfiguration?: CurbsidePickupConfiguration;
}

/** The parking configuration. */
export interface ParkingConfiguration {
  /** The type of cost at parking location. */
  parkingCostType?: ParkingCostType;
  /** The type of parking spot identification used at parking location. */
  parkingSpotIdentificationType?: ParkingSpotIdentificationType;
  /** The number of parking spots. */
  numberOfParkingSpots?: NonNegativeInteger;
}

/** The parking cost type. */
export enum ParkingCostType {
  Free = "Free",
  Other = "Other",
}

/** The type of parking spot identification. */
export enum ParkingSpotIdentificationType {
  Numbered = "Numbered",
  Other = "Other",
}

/** The in-store pickup configuration of a supply source. */
export interface InStorePickupConfiguration {
  /** When true, in-store pickup is supported by the supply source (default: `isSupported` value in `PickupChannel`). */
  isSupported?: boolean;
  /** The parking configuration for in-store pickup. */
  parkingConfiguration?: ParkingConfiguration;
}

/** The curbside pickup configuration of a supply source. */
export interface CurbsidePickupConfiguration {
  /** When true, curbside pickup is supported by the supply source. */
  isSupported?: boolean;
  /** The operational configuration for the curbside pickup configuration. */
  operationalConfiguration?: OperationalConfiguration;
  /** The parking configuration for curbside pickup with address for customers to use. */
  parkingWithAddressConfiguration?: ParkingWithAddressConfiguration;
}

/** The parking configuration with the address. */
export type ParkingWithAddressConfiguration = ParkingConfiguration & {
  /** The address of the parking location. */
  address?: Address;
};

/** The delivery channel of a supply source. */
export interface DeliveryChannel {
  isSupported?: boolean;
  /** The operational configuration of `supplySources`. */
  operationalConfiguration?: OperationalConfiguration;
}

/** The operational configuration of `supplySources`. */
export interface OperationalConfiguration {
  /** The contact details */
  contactDetails?: ContactDetails;
  /** The throughput configuration. */
  throughputConfig?: ThroughputConfig;
  /** The operating hours per day */
  operatingHoursByDay?: OperatingHoursByDay;
  /** The duration of time. */
  handlingTime?: Duration;
}

/** The duration of time. */
export interface Duration {
  /** An unsigned integer that can be only positive or zero. */
  value?: NonNegativeInteger;
  /** The time unit */
  timeUnit?: TimeUnit;
}

/** The throughput configuration. */
export interface ThroughputConfig {
  /** The throughput capacity */
  throughputCap?: ThroughputCap;
  /** The throughput unit */
  throughputUnit: ThroughputUnit;
}

/** The address or reference to another `supplySourceId` to act as a return location. */
export interface ReturnLocation {
  /** The Amazon provided `supplySourceId` where orders can be returned to. */
  supplySourceId?: string;
  /** The address and contact details. */
  addressWithContact?: AddressWithContact;
}

/** The address and contact details. */
export interface AddressWithContact {
  /** The contact details */
  contactDetails?: ContactDetails;
  /** A physical address. */
  address?: Address;
}

/** The contact details */
export interface ContactDetails {
  primary?: {
    /** The email address to which email messages are delivered. */
    email?: EmailAddress;
    /** The phone number of the person, business or institution. */
    phone?: string;
  };
}

/** The throughput capacity */
export interface ThroughputCap {
  /** An unsigned integer that can be only positive or zero. */
  value?: NonNegativeInteger;
  /** The time unit */
  timeUnit?: TimeUnit;
}

/** The operating hour schema */
export interface OperatingHour {
  /** The opening time, ISO 8601 formatted timestamp without date, HH:mm. */
  startTime?: string;
  /** The closing time, ISO 8601 formatted timestamp without date, HH:mm. */
  endTime?: string;
}

/** A list of Operating Hours. */
export type OperatingHours = OperatingHour[];

/** The throughput unit */
export enum ThroughputUnit {
  Order = "Order",
}

/** The operating hours per day */
export interface OperatingHoursByDay {
  /** A list of Operating Hours. */
  monday?: OperatingHours;
  /** A list of Operating Hours. */
  tuesday?: OperatingHours;
  /** A list of Operating Hours. */
  wednesday?: OperatingHours;
  /** A list of Operating Hours. */
  thursday?: OperatingHours;
  /** A list of Operating Hours. */
  friday?: OperatingHours;
  /** A list of Operating Hours. */
  saturday?: OperatingHours;
  /** A list of Operating Hours. */
  sunday?: OperatingHours;
}

/** The time unit */
export enum TimeUnit {
  Hours = "Hours",
  Minutes = "Minutes",
  Days = "Days",
}

/**
 * An unsigned integer that can be only positive or zero.
 * @min 0
 */
export type NonNegativeInteger = number;

/**
 * The email address to which email messages are delivered.
 * @pattern ^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$
 */
export type EmailAddress = string;

/** A physical address. */
export interface Address {
  /** The name of the person, business or institution at that address. */
  name: string;
  /** The first line of the address. */
  addressLine1: string;
  /** The additional address information, if required. */
  addressLine2?: string;
  /** The additional address information, if required. */
  addressLine3?: string;
  /** The city where the person, business or institution is located. */
  city?: string;
  /** The county where person, business or institution is located. */
  county?: string;
  /** The district where person, business or institution is located. */
  district?: string;
  /** The state or region where person, business or institution is located. */
  stateOrRegion: string;
  /** The postal code of that address. It conatins a series of letters or digits or both, sometimes including spaces or punctuation. */
  postalCode?: string;
  /** The two digit country code. In ISO 3166-1 alpha-2 format. */
  countryCode: string;
  /** The phone number of the person, business or institution located at that address. */
  phone?: string;
}

/** A date and time in the rfc3339 format. */
export type DateTime = string;
