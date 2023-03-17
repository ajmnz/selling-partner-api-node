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

/** Optional seller-created identifier that is printed on the shipping label to help the seller identify the package. */
export type PackageIdentifier = string;

/** The status of the package. */
export enum PackageStatus {
  ReadyForPickup = "ReadyForPickup",
  PickedUp = "PickedUp",
  AtOriginFC = "AtOriginFC",
  AtDestinationFC = "AtDestinationFC",
  Delivered = "Delivered",
  Rejected = "Rejected",
  Undeliverable = "Undeliverable",
  ReturnedToSeller = "ReturnedToSeller",
  LostInTransit = "LostInTransit",
  LabelCanceled = "LabelCanceled",
  DamagedInTransit = "DamagedInTransit",
  OutForDelivery = "OutForDelivery",
}

/** An Amazon-defined identifier for the scheduled package. */
export type PackageId = string;

/** Representation of tracking metadata. */
export interface TrackingDetails {
  /** The tracking identifier for the scheduled package. */
  trackingId?: String;
}

/** Identifies the method by which a seller will hand a package over to Amazon Logistics. */
export enum HandoverMethod {
  Pickup = "Pickup",
  Dropoff = "Dropoff",
}

/** This object allows users to specify an order to be scheduled. Only the amazonOrderId is required.  */
export interface OrderScheduleDetails {
  /** An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship. */
  amazonOrderId: AmazonOrderId;
  /** Package details. Includes `packageItems`, `packageTimeSlot`, and `packageIdentifier`. */
  packageDetails?: PackageDetails;
}

/** An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship. */
export type AmazonOrderId = string;

/**
 * The numerical value of the specified dimension.
 * @format float
 * @min 0.01
 */
export type Dimension = number;

/** The dimensions of the scheduled package. */
export interface Dimensions {
  /** The length dimension. */
  length?: Dimension;
  /** The width dimension. */
  width?: Dimension;
  /** The height dimension. */
  height?: Dimension;
  /** The unit of measurement used to measure the length. */
  unit?: UnitOfLength;
  /** Identifier for custom package dimensions. */
  identifier?: String;
}

/** The request schema for the `listHandoverSlots` operation. */
export interface ListHandoverSlotsRequest {
  /** A string of up to 255 characters. */
  marketplaceId: String;
  /** An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship. */
  amazonOrderId: AmazonOrderId;
  /** The dimensions of the scheduled package. */
  packageDimensions: Dimensions;
  /** The weight of the scheduled package */
  packageWeight: Weight;
}

/** The response schema for the `listHandoverSlots` operation. */
export interface ListHandoverSlotsResponse {
  /** An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship. */
  amazonOrderId: AmazonOrderId;
  /** A list of time slots. */
  timeSlots: TimeSlots;
}

/** Invoice number and date. */
export interface InvoiceData {
  /** The invoice number. */
  invoiceNumber: String;
  /** The date that the invoice was generated. */
  invoiceDate?: DateTime;
}

/** Item identifier and serial number information. */
export interface Item {
  /** The Amazon-defined order item identifier. */
  orderItemId?: OrderItemId;
  /** A list of serial numbers for the items associated with the `OrderItemId` value. */
  orderItemSerialNumbers?: OrderItemSerialNumbers;
}

/**
 * A list of items contained in the package.
 * @maxItems 500
 */
export type Items = Item[];

/**
 * The Amazon-defined order item identifier.
 * @maxLength 255
 */
export type OrderItemId = string;

/**
 * A serial number for an item associated with the `OrderItemId` value.
 * @maxLength 255
 */
export type OrderItemSerialNumber = string;

/**
 * A list of serial numbers for the items associated with the `OrderItemId` value.
 * @maxItems 100
 */
export type OrderItemSerialNumbers = OrderItemSerialNumber[];

/** A package. This object contains all the details of the scheduled Easy Ship package including the package identifier, physical attributes such as dimensions and weight, selected time slot to handover the package to carrier, status of the package, and tracking/invoice details. */
export interface Package {
  /** Identifies the scheduled package to be updated. */
  scheduledPackageId: ScheduledPackageId;
  /** The dimensions of the scheduled package. */
  packageDimensions: Dimensions;
  /** The weight of the scheduled package */
  packageWeight: Weight;
  /** A list of items contained in the package. */
  packageItems?: Items;
  /** A time window to hand over an Easy Ship package to Amazon Logistics. */
  packageTimeSlot: TimeSlot;
  /** Optional seller-created identifier that is printed on the shipping label to help the seller identify the package. */
  packageIdentifier?: PackageIdentifier;
  /** Invoice number and date. */
  invoice?: InvoiceData;
  /** The status of the package. */
  packageStatus?: PackageStatus;
  /** Representation of tracking metadata. */
  trackingDetails?: TrackingDetails;
}

/** A list of packages. */
export interface Packages {
  /**
   * @maxItems 500
   * @minItems 1
   */
  packages: Package[];
}

/** Package details. Includes `packageItems`, `packageTimeSlot`, and `packageIdentifier`. */
export interface PackageDetails {
  /** A list of items contained in the package. */
  packageItems?: Items;
  /** A time window to hand over an Easy Ship package to Amazon Logistics. */
  packageTimeSlot: TimeSlot;
  /** Optional seller-created identifier that is printed on the shipping label to help the seller identify the package. */
  packageIdentifier?: PackageIdentifier;
}

/** A order which we couldn't schedule on your behalf. It contains its id, and information on the error. */
export interface RejectedOrder {
  /** An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship. */
  amazonOrderId: AmazonOrderId;
  /** Error response returned when the request is unsuccessful. */
  error?: Error;
}

/** A time window to hand over an Easy Ship package to Amazon Logistics. */
export interface TimeSlot {
  /** An Amazon-defined identifier for a time slot. */
  slotId: String;
  /** The start date and time of the time slot. */
  startTime?: DateTime;
  /** The end date and time of the time slot. */
  endTime?: DateTime;
  /** The method by which a seller will hand a package over to Amazon Logistics. */
  handoverMethod?: HandoverMethod;
}

/**
 * A list of time slots.
 * @maxItems 500
 * @minItems 1
 */
export type TimeSlots = TimeSlot[];

/** Identifies the scheduled package to be updated. */
export interface ScheduledPackageId {
  /** An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship. */
  amazonOrderId: AmazonOrderId;
  /** An Amazon-defined identifier for the scheduled package. */
  packageId?: PackageId;
}

/** The request schema for the `createScheduledPackage` operation. */
export interface CreateScheduledPackageRequest {
  /** An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship. */
  amazonOrderId: AmazonOrderId;
  /** A string of up to 255 characters. */
  marketplaceId: String;
  /** Package details. Includes `packageItems`, `packageTimeSlot`, and `packageIdentifier`. */
  packageDetails: PackageDetails;
}

/** The request schema for the `updateScheduledPackages` operation. */
export interface UpdateScheduledPackagesRequest {
  /** A string of up to 255 characters. */
  marketplaceId: String;
  /** A list of package update details. */
  updatePackageDetailsList: UpdatePackageDetailsList;
}

/** Request to update the time slot of a package. */
export interface UpdatePackageDetails {
  /** Identifies the scheduled package to be updated. */
  scheduledPackageId: ScheduledPackageId;
  /** A time window to hand over an Easy Ship package to Amazon Logistics. */
  packageTimeSlot: TimeSlot;
}

/**
 * A list of package update details.
 * @maxItems 500
 * @minItems 1
 */
export type UpdatePackageDetailsList = UpdatePackageDetails[];

/**
 * A string of up to 255 characters.
 * @minLength 1
 * @maxLength 255
 */
export type String = string;

/**
 * A datetime value in ISO 8601 format.
 * @format date-time
 */
export type DateTime = string;

/** The unit of measurement used to measure the length. */
export enum UnitOfLength {
  Cm = "Cm",
}

/** The unit of measurement used to measure the weight. */
export enum UnitOfWeight {
  Grams = "Grams",
  G = "G",
}

/** The request body for the POST /easyShip/2022-03-23/packages/bulk API. */
export interface CreateScheduledPackagesRequest {
  /** A string of up to 255 characters. */
  marketplaceId: String;
  /**
   * An array allowing users to specify orders to be scheduled.
   * @minItems 1
   */
  orderScheduleDetailsList: OrderScheduleDetails[];
  /** The file format in which the shipping label will be created. */
  labelFormat: LabelFormat;
}

/** The response schema for the bulk scheduling API. It returns by the bulk scheduling API containing an array of the scheduled packtages, an optional list of orders we couldn't schedule with the reason, and a pre-signed URL for a ZIP file containing the associated shipping labels plus the documents enabled for your marketplace. */
export interface CreateScheduledPackagesResponse {
  /**
   * A list of packages. Refer to the `Package` object.
   * @maxItems 100
   */
  scheduledPackages?: Package[];
  /** A list of orders we couldn't scheduled on your behalf. Each element contains the reason and details on the error. */
  rejectedOrders?: RejectedOrder[];
  /** A pre-signed URL for the zip document containing the shipping labels and the documents enabled for your marketplace. */
  printableDocumentsUrl?: URL;
}

/** A pre-signed URL for the zip document containing the shipping labels and the documents enabled for your marketplace. */
export type URL = string;

/** The file format in which the shipping label will be created. */
export enum LabelFormat {
  PDF = "PDF",
  ZPL = "ZPL",
}

/** The weight of the scheduled package */
export interface Weight {
  /** The weight of the package. */
  value?: WeightValue;
  /** The unit of measurement used to measure the weight. */
  unit?: UnitOfWeight;
}

/**
 * The weight of the package.
 * @format float
 * @min 11
 */
export type WeightValue = number;

/** A list of error responses returned when a request is unsuccessful. */
export interface ErrorList {
  errors: Error[];
}

/** Error response returned when the request is unsuccessful. */
export interface Error {
  /** An error code that identifies the type of error that occurred. */
  code: string;
  /** A message that describes the error condition. */
  message: string;
  /** Additional details that can help the caller understand or fix the issue. */
  details?: string;
}

/** An error code that identifies the type of error that occurred. The error codes listed below are specific to the Easy Ship section. */
export enum Code {
  InvalidInput = "InvalidInput",
  InvalidTimeSlotId = "InvalidTimeSlotId",
  ScheduledPackageAlreadyExists = "ScheduledPackageAlreadyExists",
  ScheduleWindowExpired = "ScheduleWindowExpired",
  RetryableAfterGettingNewSlots = "RetryableAfterGettingNewSlots",
  TimeSlotNotAvailable = "TimeSlotNotAvailable",
  ResourceNotFound = "ResourceNotFound",
  InvalidOrderState = "InvalidOrderState",
  RegionNotSupported = "RegionNotSupported",
  OrderNotEligibleForRescheduling = "OrderNotEligibleForRescheduling",
  InternalServerError = "InternalServerError",
}
