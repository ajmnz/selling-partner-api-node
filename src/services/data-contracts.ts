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

/** The response schema for the `getServiceJobByServiceJobId` operation. */
export interface GetServiceJobByServiceJobIdResponse {
  /** The payload for the `getServiceJobByServiceJobId` operation. */
  payload?: ServiceJob;
  /** An unexpected condition occurred during the `getServiceJobByServiceJobId` operation. */
  errors?: ErrorList;
}

/** Response schema for the `cancelServiceJobByServiceJobId` operation. */
export interface CancelServiceJobByServiceJobIdResponse {
  /** Encountered errors for the `cancelServiceJobByServiceJobId` operation. */
  errors?: ErrorList;
}

/** Response schema for the `completeServiceJobByServiceJobId` operation. */
export interface CompleteServiceJobByServiceJobIdResponse {
  /** Encountered errors for the `completeServiceJobByServiceJobId` operation. */
  errors?: ErrorList;
}

/** Response schema for the `getServiceJobs` operation. */
export interface GetServiceJobsResponse {
  /** The payload for the `getServiceJobs` operation. */
  payload?: JobListing;
  /** An unexpected condition occurred during the `getServiceJobs` operation. */
  errors?: ErrorList;
}

/** Response schema for the `addAppointmentForServiceJobByServiceJobId` and `rescheduleAppointmentForServiceJobByServiceJobId` operations. */
export interface SetAppointmentResponse {
  /** New appointment identifier generated during the `addAppointmentForServiceJobByServiceJobId` or `rescheduleAppointmentForServiceJobByServiceJobId` operations. */
  appointmentId?: AppointmentId;
  /** Warnings generated during the `addAppointmentForServiceJobByServiceJobId` or `rescheduleAppointmentForServiceJobByServiceJobId` operations. */
  warnings?: WarningList;
  /** Errors occurred during during the `addAppointmentForServiceJobByServiceJobId` or `rescheduleAppointmentForServiceJobByServiceJobId` operations. */
  errors?: ErrorList;
}

/** Response schema for the `assignAppointmentResources` operation. */
export interface AssignAppointmentResourcesResponse {
  /** The payload for the `assignAppointmentResource` operation. */
  payload?: {
    /** Warnings generated during the `assignAppointmentResources` operation. */
    warnings?: WarningList;
  };
  /** Errors occurred during during the `assignAppointmentResources` operation. */
  errors?: ErrorList;
}

/** Request schema for the `assignAppointmentResources` operation. */
export interface AssignAppointmentResourcesRequest {
  /** List of resource objects to be assigned. */
  resources: AppointmentResources;
}

/** The payload for the `getServiceJobs` operation. */
export interface JobListing {
  /** Total result size of the query result. */
  totalResultSize?: number;
  /** A generated string used to pass information to your next request. If `nextPageToken` is returned, pass the value of `nextPageToken` to the `pageToken` to get next results. */
  nextPageToken?: string;
  /** A generated string used to pass information to your next request. If `previousPageToken` is returned, pass the value of `previousPageToken` to the `pageToken` to get previous page results. */
  previousPageToken?: string;
  /** List of job details for the given input. */
  jobs?: ServiceJob[];
}

/** The job details of a service. */
export interface ServiceJob {
  /**
   * The date and time of the creation of the job in ISO 8601 format.
   * @format date-time
   */
  createTime?: string;
  /** The service job identifier. */
  serviceJobId?: ServiceJobId;
  /** The status of the service job. */
  serviceJobStatus?:
    | "NOT_SERVICED"
    | "CANCELLED"
    | "COMPLETED"
    | "PENDING_SCHEDULE"
    | "NOT_FULFILLABLE"
    | "HOLD"
    | "PAYMENT_DECLINED";
  /** The scope of work for the order. */
  scopeOfWork?: ScopeOfWork;
  /** Information about the seller of the service job. */
  seller?: Seller;
  /** Information about the service job provider. */
  serviceJobProvider?: ServiceJobProvider;
  /** A list of appointment windows preferred by the buyer. Included only if the buyer selected appointment windows when creating the order. */
  preferredAppointmentTimes?: AppointmentTime[];
  /** A list of appointments. */
  appointments?: Appointment[];
  /** The Amazon-defined identifier for an order placed by the buyer in 3-7-7 format. */
  serviceOrderId?: OrderId;
  /**
   * The marketplace identifier.
   * @pattern ^[A-Z0-9]*$
   */
  marketplaceId?: string;
  /**
   * The Amazon-defined identifier for the region scope.
   * @minLength 1
   * @maxLength 100
   */
  storeId?: string;
  /** Information about the buyer. */
  buyer?: Buyer;
  /** A list of items associated with the service job. */
  associatedItems?: AssociatedItem[];
  /** Information about the location of the service job. */
  serviceLocation?: ServiceLocation;
}

/**
 * Amazon identifier for the service job.
 * @minLength 1
 * @maxLength 100
 */
export type ServiceJobId = string;

/**
 * The Amazon-defined identifier for an order placed by the buyer, in 3-7-7 format.
 * @minLength 5
 * @maxLength 20
 */
export type OrderId = string;

/** The scope of work for the order. */
export interface ScopeOfWork {
  /** The Amazon Standard Identification Number (ASIN) of the service job. */
  asin?: string;
  /** The title of the service job. */
  title?: string;
  /** The number of service jobs. */
  quantity?: number;
  /** A list of skills required to perform the job. */
  requiredSkills?: string[];
}

/** Information about the seller of the service job. */
export interface Seller {
  /**
   * The identifier of the seller of the service job.
   * @pattern ^[A-Z0-9]*$
   */
  sellerId?: string;
}

/** Information about the service job provider. */
export interface ServiceJobProvider {
  /**
   * The identifier of the service job provider.
   * @pattern ^[A-Z0-9]*$
   */
  serviceJobProviderId?: string;
}

/** Information about the buyer. */
export interface Buyer {
  /**
   * The identifier of the buyer.
   * @pattern ^[A-Z0-9]*$
   */
  buyerId?: string;
  /** The name of the buyer. */
  name?: string;
  /** The phone number of the buyer. */
  phone?: string;
  /** When true, the service is for an Amazon Prime buyer. */
  isPrimeMember?: boolean;
}

/** The time of the appointment window. */
export interface AppointmentTime {
  /**
   * The date and time of the start of the appointment window in ISO 8601 format.
   * @format date-time
   */
  startTime: string;
  /**
   * The duration of the appointment window, in minutes.
   * @min 1
   */
  durationInMinutes: number;
}

/**
 * The appointment identifier.
 * @minLength 5
 * @maxLength 100
 */
export type AppointmentId = string;

/** The details of an appointment. */
export interface Appointment {
  /** The appointment identifier. */
  appointmentId?: AppointmentId;
  /** The status of the appointment. */
  appointmentStatus?: "ACTIVE" | "CANCELLED" | "COMPLETED";
  /** The time of the appointment window. */
  appointmentTime?: AppointmentTime;
  /**
   * A list of technicians assigned to the service job.
   * @minItems 1
   */
  assignedTechnicians?: Technician[];
  /** The identifier of a rescheduled appointment. */
  rescheduledAppointmentId?: AppointmentId;
  /** Proof of Appointment (POA) details. */
  poa?: Poa;
}

/** A technician who is assigned to perform the service job in part or in full. */
export interface Technician {
  /**
   * The technician identifier.
   * @minLength 1
   * @maxLength 50
   */
  technicianId?: string;
  /** The name of the technician. */
  name?: string;
}

/** Proof of Appointment (POA) details. */
export interface Poa {
  /** The time of the appointment window. */
  appointmentTime?: AppointmentTime;
  /**
   * A list of technicians.
   * @minItems 1
   */
  technicians?: Technician[];
  /**
   * The identifier of the technician who uploaded the POA.
   * @pattern ^[A-Z0-9]*$
   */
  uploadingTechnician?: string;
  /**
   * The date and time when the POA was uploaded in ISO 8601 format.
   * @format date-time
   */
  uploadTime?: string;
  /** The type of POA uploaded. */
  poaType?:
    | "NO_SIGNATURE_DUMMY_POS"
    | "CUSTOMER_SIGNATURE"
    | "DUMMY_RECEIPT"
    | "POA_RECEIPT";
}

/** Information about an item associated with the service job. */
export interface AssociatedItem {
  /** The Amazon Standard Identification Number (ASIN) of the item. */
  asin?: string;
  /** The title of the item. */
  title?: string;
  /** The total number of items included in the order. */
  quantity?: number;
  /** The Amazon-defined identifier for an order placed by the buyer in 3-7-7 format. */
  orderId?: OrderId;
  /** The status of the item. */
  itemStatus?: "ACTIVE" | "CANCELLED" | "SHIPPED" | "DELIVERED";
  /** The brand name of the item. */
  brandName?: string;
  /** Delivery information for the item. */
  itemDelivery?: ItemDelivery;
}

/** Delivery information for the item. */
export interface ItemDelivery {
  /**
   * The date and time of the latest Estimated Delivery Date (EDD) of all the items with an EDD. In ISO 8601 format.
   * @format date-time
   */
  estimatedDeliveryDate?: string;
  /** Promised delivery information for the item. */
  itemDeliveryPromise?: ItemDeliveryPromise;
}

/** Promised delivery information for the item. */
export interface ItemDeliveryPromise {
  /**
   * The date and time of the start of the promised delivery window in ISO 8601 format.
   * @format date-time
   */
  startTime?: string;
  /**
   * The date and time of the end of the promised delivery window in ISO 8601 format.
   * @format date-time
   */
  endTime?: string;
}

/** Information about the location of the service job. */
export interface ServiceLocation {
  /** The location of the service job. */
  serviceLocationType?: "IN_HOME" | "IN_STORE" | "ONLINE";
  /** The shipping address for the service job. */
  address?: Address;
}

/** The shipping address for the service job. */
export interface Address {
  /** The name of the person, business, or institution. */
  name: string;
  /** The first line of the address. */
  addressLine1: string;
  /** Additional address information, if required. */
  addressLine2?: string;
  /** Additional address information, if required. */
  addressLine3?: string;
  /** The city. */
  city?: string;
  /** The county. */
  county?: string;
  /** The district. */
  district?: string;
  /** The state or region. */
  stateOrRegion?: string;
  /** The postal code. This can contain letters, digits, spaces, and/or punctuation. */
  postalCode?: string;
  /** The two digit country code, in ISO 3166-1 alpha-2 format. */
  countryCode?: string;
  /** The phone number. */
  phone?: string;
}

/** Input for add appointment operation. */
export interface AddAppointmentRequest {
  /** Input appointment time details. */
  appointmentTime: AppointmentTimeInput;
}

/** Input for rescheduled appointment operation. */
export interface RescheduleAppointmentRequest {
  /** Input appointment time details. */
  appointmentTime: AppointmentTimeInput;
  /** Input appointment reschedule reason. */
  rescheduleReasonCode: RescheduleReasonCode;
}

/** The input appointment time details. */
export interface AppointmentTimeInput {
  /**
   * The date, time in UTC for the start time of an appointment in ISO 8601 format.
   * @format date-time
   */
  startTime: string;
  /** The duration of an appointment in minutes. */
  durationInMinutes?: number;
}

/** The appointment reschedule reason code. */
export type RescheduleReasonCode = string;

/** A list of error responses returned when a request is unsuccessful. */
export type ErrorList = Error[];

/** Error response returned when the request is unsuccessful. */
export interface Error {
  /** An error code that identifies the type of error that occurred. */
  code: string;
  /** A message that describes the error condition in a human-readable form. */
  message: string;
  /** Additional details that can help the caller understand or fix the issue. */
  details?: string;
  /** The type of error. */
  errorLevel?: "ERROR" | "WARNING";
}

/** A list of warnings returned in the sucessful execution response of an API request. */
export type WarningList = Warning[];

/** Warning returned when the request is successful, but there are important callouts based on which API clients should take defined actions. */
export interface Warning {
  /** An warning code that identifies the type of warning that occurred. */
  code: string;
  /** A message that describes the warning condition in a human-readable form. */
  message: string;
  /** Additional details that can help the caller understand or address the warning. */
  details?: string;
}

/** The error response schema for the `getRangeSlotCapacity` operation. */
export interface RangeSlotCapacityErrors {
  /** Errors encountered during the `getRangeSlotCapacity` operation. */
  errors?: ErrorList;
}

/** Response schema for the `getRangeSlotCapacity` operation. */
export interface RangeSlotCapacity {
  /** Resource Identifier. */
  resourceId?: string;
  /** Array of range capacities where each entry is for a specific capacity type. */
  capacities?: RangeCapacity[];
  /** Next page token, if there are more pages. */
  nextPageToken?: string;
}

/** Range capacity entity where each entry has a capacity type and corresponding slots. */
export interface RangeCapacity {
  /** Capacity type corresponding to the slots. */
  capacityType?: CapacityType;
  /** Array of capacity slots in range slot format. */
  slots?: RangeSlot[];
}

/** Capacity slots represented in a format similar to availability rules. */
export interface RangeSlot {
  /**
   * Start date time of slot in ISO 8601 format with precision of seconds.
   * @format date-time
   */
  startDateTime?: string;
  /**
   * End date time of slot in ISO 8601 format with precision of seconds.
   * @format date-time
   */
  endDateTime?: string;
  /**
   * Capacity of the slot.
   * @format int32
   */
  capacity?: number;
}

/** The error response schema for the `getFixedSlotCapacity` operation. */
export interface FixedSlotCapacityErrors {
  /** Errors encountered during the `getFixedSlotCapacity` operation. */
  errors?: ErrorList;
}

/** Response schema for the `getFixedSlotCapacity` operation. */
export interface FixedSlotCapacity {
  /** Resource Identifier. */
  resourceId?: string;
  /**
   * The duration of each slot which is returned. This value will be a multiple of 5 and fall in the following range: 5 <= `slotDuration` <= 360.
   * @format int32
   * @multipleOf 5
   */
  slotDuration?: number;
  /** Array of capacity slots in fixed slot format. */
  capacities?: FixedSlot[];
  /** Next page token, if there are more pages. */
  nextPageToken?: string;
}

/** In this slot format each slot only has the requested capacity types. This slot size is as specified by slot duration. */
export interface FixedSlot {
  /**
   * Start date time of slot in ISO 8601 format with precision of seconds.
   * @format date-time
   */
  startDateTime?: string;
  /**
   * Scheduled capacity corresponding to the slot. This capacity represents the originally allocated capacity as per resource schedule.
   * @format int32
   */
  scheduledCapacity?: number;
  /**
   * Available capacity corresponding to the slot. This capacity represents the capacity available for allocation to reservations.
   * @format int32
   */
  availableCapacity?: number;
  /**
   * Encumbered capacity corresponding to the slot. This capacity represents the capacity allocated for Amazon Jobs/Appointments/Orders.
   * @format int32
   */
  encumberedCapacity?: number;
  /**
   * Reserved capacity corresponding to the slot. This capacity represents the capacity made unavailable due to events like Breaks/Leaves/Lunch.
   * @format int32
   */
  reservedCapacity?: number;
}

/** Response schema for the `updateSchedule` operation. */
export interface UpdateScheduleResponse {
  /** Contains the `UpdateScheduleRecords` for which the error/warning has occurred. */
  payload?: UpdateScheduleRecord[];
  /** Errors encountered, if any. */
  errors?: ErrorList;
}

/** Input for set appointment fulfillment data operation. */
export interface SetAppointmentFulfillmentDataRequest {
  /** Input appointment time details. */
  fulfillmentTime?: FulfillmentTime;
  /** Resources involved in appointment fulfillment. */
  appointmentResources?: AppointmentResources;
  /** Documents specific to appointment fulfillment. */
  fulfillmentDocuments?: FulfillmentDocuments;
}

/** Input for fulfillment time details */
export interface FulfillmentTime {
  /**
   * The date, time in UTC of the fulfillment start time in ISO 8601 format.
   * @format date-time
   */
  startTime?: string;
  /**
   * The date, time in UTC of the fulfillment end time in ISO 8601 format.
   * @format date-time
   */
  endTime?: string;
}

/** List of documents captured during service appointment fulfillment. */
export type FulfillmentDocuments = FulfillmentDocument[];

/** Document that captured during service appointment fulfillment that portrays proof of completion */
export interface FulfillmentDocument {
  /** The identifier of the upload destination. Get this value by calling the `createServiceDocumentUploadDestination` operation of the Services API. */
  uploadDestinationId?: string;
  /** Sha256 hash of the file content. This value is used to determine if the file has been corrupted or tampered with during transit. */
  contentSha256?: string;
}

/** List of resources that performs or performed job appointment fulfillment. */
export type AppointmentResources = AppointmentResource[];

/** The resource that performs or performed appointment fulfillment. */
export interface AppointmentResource {
  /** The resource identifier. */
  resourceId?: string;
}

/** Response schema for the `createReservation` operation. */
export interface CreateReservationResponse {
  /** `CreateReservationRecord` contains only the new `reservationId` if the operation was successful. Otherwise it will contain the reservation entity with warnings/errors. */
  payload?: CreateReservationRecord;
  /** Errors encountered, if any. */
  errors?: ErrorList;
}

/** Response schema for the `updateReservation` operation. */
export interface UpdateReservationResponse {
  /** `UpdateReservationRecord` contains only the new `reservationId` if the operation was successful. Otherwise it will contain the reservation entity with warnings/errors. */
  payload?: UpdateReservationRecord;
  /** Errors encountered, if any. */
  errors?: ErrorList;
}

/** Response schema for the `cancelReservation` operation. */
export interface CancelReservationResponse {
  /** Errors encountered, if any */
  errors?: ErrorList;
}

/** The day of the week. */
export enum DayOfWeek {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
}

/** Repeated occurrence of an event in a time range. */
export interface Recurrence {
  /**
   * End time of the recurrence.
   * @format date-time
   */
  endTime: string;
  /** Days of the week when recurrence is valid. If the schedule is valid every Monday, input will only contain `MONDAY` in the list. */
  daysOfWeek?: DayOfWeek[];
  /** Days of the month when recurrence is valid. */
  daysOfMonth?: number[];
}

/** `AvailabilityRecord` to represent the capacity of a resource over a time range. */
export interface AvailabilityRecord {
  /**
   * Denotes the time from when the resource is available in a day in ISO-8601 format.
   * @format date-time
   */
  startTime: string;
  /**
   * Denotes the time till when the resource is available in a day in ISO-8601 format.
   * @format date-time
   */
  endTime: string;
  /** Recurrence object containing the recurrence pattern of schedule. */
  recurrence?: Recurrence;
  /**
   * Signifies the capacity of a resource which is available.
   * @min 1
   */
  capacity?: number;
}

/** List of `AvailabilityRecord`s to represent the capacity of a resource over a time range. */
export type AvailabilityRecords = AvailabilityRecord[];

/** Reservation object reduces the capacity of a resource. */
export interface Reservation {
  /** Unique identifier for a reservation. If present, it is treated as an update reservation request and will update the corresponding reservation. Otherwise, it is treated as a new create reservation request. */
  reservationId?: string;
  /** Type of reservation. */
  type: "APPOINTMENT" | "TRAVEL" | "VACATION" | "BREAK" | "TRAINING";
  /** `AvailabilityRecord` to represent the capacity of a resource over a time range. */
  availability: AvailabilityRecord;
}

/** `UpdateScheduleRecord` entity contains the `AvailabilityRecord` if there is an error/warning while performing the requested operation on it. */
export interface UpdateScheduleRecord {
  /** Availability record if the operation failed. */
  availability?: AvailabilityRecord;
  /** Warnings encountered, if any. */
  warnings?: WarningList;
  /** Errors encountered, if any. */
  errors?: ErrorList;
}

/** `CreateReservationRecord` entity contains the `Reservation` if there is an error/warning while performing the requested operation on it, otherwise it will contain the new `reservationId`. */
export interface CreateReservationRecord {
  /** Reservation record if the operation failed. It will only contain the new `reservationId` if the operation is successful. */
  reservation?: Reservation;
  /** Warnings encountered, if any. */
  warnings?: WarningList;
  /** Errors encountered, if any. */
  errors?: ErrorList;
}

/** `UpdateReservationRecord` entity contains the `Reservation` if there is an error/warning while performing the requested operation on it, otherwise it will contain the new `reservationId`. */
export interface UpdateReservationRecord {
  /** Reservation record if the operation failed. It will only contain the new `reservationId` if the operation is successful. */
  reservation?: Reservation;
  /** Warnings encountered, if any. */
  warnings?: WarningList;
  /** Errors encountered, if any. */
  errors?: ErrorList;
}

/** Request schema for the `getRangeSlotCapacity` operation. This schema is used to define the time range and capacity types that are being queried. */
export interface RangeSlotCapacityQuery {
  /** An array of capacity types which are being requested. Default value is `[SCHEDULED_CAPACITY]`. */
  capacityTypes?: CapacityType[];
  /**
   * Start date time from which the capacity slots are being requested in ISO 8601 format.
   * @format date-time
   */
  startDateTime: string;
  /**
   * End date time up to which the capacity slots are being requested in ISO 8601 format.
   * @format date-time
   */
  endDateTime: string;
}

/** Request schema for the `getFixedSlotCapacity` operation. This schema is used to define the time range, capacity types and slot duration which are being queried. */
export interface FixedSlotCapacityQuery {
  /** An array of capacity types which are being requested. Default value is `[SCHEDULED_CAPACITY]`. */
  capacityTypes?: CapacityType[];
  /**
   * Size in which slots are being requested. This value should be a multiple of 5 and fall in the range: 5 <= `slotDuration` <= 360.
   * @format int32
   * @multipleOf 5
   */
  slotDuration?: number;
  /**
   * Start date time from which the capacity slots are being requested in ISO 8601 format.
   * @format date-time
   */
  startDateTime: string;
  /**
   * End date time up to which the capacity slots are being requested in ISO 8601 format.
   * @format date-time
   */
  endDateTime: string;
}

/** Request schema for the `updateSchedule` operation. */
export interface UpdateScheduleRequest {
  /** List of schedule objects to define the normal working hours of a resource. */
  schedules: AvailabilityRecords;
}

/** Type of capacity */
export enum CapacityType {
  SCHEDULED_CAPACITY = "SCHEDULED_CAPACITY",
  AVAILABLE_CAPACITY = "AVAILABLE_CAPACITY",
  ENCUMBERED_CAPACITY = "ENCUMBERED_CAPACITY",
  RESERVED_CAPACITY = "RESERVED_CAPACITY",
}

/** Request schema for the `createReservation` operation. */
export interface CreateReservationRequest {
  /** Resource (store) identifier. */
  resourceId: string;
  /** `Reservation` object to reduce the capacity of a resource. */
  reservation: Reservation;
}

/** Request schema for the `updateReservation` operation. */
export interface UpdateReservationRequest {
  /** Resource (store) identifier. */
  resourceId: string;
  /** `Reservation` object to reduce the capacity of a resource. */
  reservation: Reservation;
}

/** The response of fetching appointment slots based on service context. */
export interface GetAppointmentSlotsResponse {
  /** The appointment slots fetched based on service context. */
  payload?: AppointmentSlotReport;
  /** Errors occurred in getting schedule. */
  errors?: ErrorList;
}

/** Availability information as per the service context queried. */
export interface AppointmentSlotReport {
  /** Defines the type of slots. */
  schedulingType?: "REAL_TIME_SCHEDULING" | "NON_REAL_TIME_SCHEDULING";
  /**
   * Start Time from which the appointment slots are generated in ISO 8601 format.
   * @format date-time
   */
  startTime?: string;
  /**
   * End Time up to which the appointment slots are generated in ISO 8601 format.
   * @format date-time
   */
  endTime?: string;
  /** A list of time windows along with associated capacity in which the service can be performed. */
  appointmentSlots?: AppointmentSlot[];
}

/** A time window along with associated capacity in which the service can be performed. */
export interface AppointmentSlot {
  /**
   * Time window start time in ISO 8601 format.
   * @format date-time
   */
  startTime?: string;
  /**
   * Time window end time in ISO 8601 format.
   * @format date-time
   */
  endTime?: string;
  /**
   * Number of resources for which a slot can be reserved.
   * @min 0
   */
  capacity?: number;
}

/** Input for to be uploaded document. */
export interface ServiceUploadDocument {
  /** The content type of the to-be-uploaded file */
  contentType: "TIFF" | "JPG" | "PNG" | "JPEG" | "GIF" | "PDF";
  /**
   * The content length of the to-be-uploaded file
   * @format int64
   * @min 1
   * @max 5242880
   */
  contentLength: number;
  /**
   * An MD5 hash of the content to be submitted to the upload destination. This value is used to determine if the data has been corrupted or tampered with during transit.
   * @pattern ^[A-Za-z0-9\\+/]{22}={2}$
   */
  contentMD5?: string;
}

/** The response schema for the `createServiceDocumentUploadDestination` operation. */
export interface CreateServiceDocumentUploadDestination {
  /** Information about an upload destination. */
  payload?: ServiceDocumentUploadDestination;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** Information about an upload destination. */
export interface ServiceDocumentUploadDestination {
  /** The unique identifier to be used by APIs that reference the upload destination. */
  uploadDestinationId: string;
  /** The URL to which to upload the file. */
  url: string;
  /** Encryption details for required client-side encryption and decryption of document contents. */
  encryptionDetails: EncryptionDetails;
  /** The headers to include in the upload request. */
  headers?: object;
}

/** Encryption details for required client-side encryption and decryption of document contents. */
export interface EncryptionDetails {
  /** The encryption standard required to encrypt or decrypt the document contents. */
  standard: "AES";
  /** The vector to encrypt or decrypt the document contents using Cipher Block Chaining (CBC). */
  initializationVector: string;
  /** The encryption key used to encrypt or decrypt the document contents. */
  key: string;
}
