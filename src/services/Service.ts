import type {
  AddAppointmentRequest,
  AssignAppointmentResourcesRequest,
  AssignAppointmentResourcesResponse,
  CancelReservationResponse,
  CancelServiceJobByServiceJobIdResponse,
  CompleteServiceJobByServiceJobIdResponse,
  CreateReservationRequest,
  CreateReservationResponse,
  CreateServiceDocumentUploadDestination,
  ErrorList,
  FixedSlotCapacity,
  FixedSlotCapacityErrors,
  FixedSlotCapacityQuery,
  GetAppointmentSlotsResponse,
  GetServiceJobByServiceJobIdResponse,
  GetServiceJobsResponse,
  RangeSlotCapacity,
  RangeSlotCapacityErrors,
  RangeSlotCapacityQuery,
  RescheduleAppointmentRequest,
  ServiceJobId,
  ServiceUploadDocument,
  SetAppointmentFulfillmentDataRequest,
  SetAppointmentResponse,
  UpdateReservationRequest,
  UpdateReservationResponse,
  UpdateScheduleRequest,
  UpdateScheduleResponse,
} from "./data-contracts";
import type { HttpClient, RequestParams } from "../http-client";
import { ContentType } from "../http-client";

export class Service<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Gets details of service job indicated by the provided `serviceJobID`. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 20 | 40 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags service
   * @name GetServiceJobByServiceJobId
   * @request GET:/service/v1/serviceJobs/{serviceJobId}
   */
  getServiceJobByServiceJobId = (serviceJobId: string, params: RequestParams = {}) =>
    this.http.request<
      GetServiceJobByServiceJobIdResponse,
      GetServiceJobByServiceJobIdResponse
    >({
      path: `/service/v1/serviceJobs/${serviceJobId}`,
      method: "GET",
      code: "get:/service/v1/serviceJobs/{serviceJobId}",
      format: "json",
      ...params,
    });
  /**
   * @description Cancels the service job indicated by the service job identifier specified. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags service
   * @name CancelServiceJobByServiceJobId
   * @request PUT:/service/v1/serviceJobs/{serviceJobId}/cancellations
   */
  cancelServiceJobByServiceJobId = (
    serviceJobId: string,
    query: {
      /**
       * A cancel reason code that specifies the reason for cancelling a service job.
       * @minLength 1
       * @maxLength 100
       * @pattern ^[A-Z0-9_]*$
       */
      cancellationReasonCode: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<
      CancelServiceJobByServiceJobIdResponse,
      CancelServiceJobByServiceJobIdResponse
    >({
      path: `/service/v1/serviceJobs/${serviceJobId}/cancellations`,
      method: "PUT",
      code: "put:/service/v1/serviceJobs/{serviceJobId}/cancellations",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Completes the service job indicated by the service job identifier specified. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags service
   * @name CompleteServiceJobByServiceJobId
   * @request PUT:/service/v1/serviceJobs/{serviceJobId}/completions
   */
  completeServiceJobByServiceJobId = (serviceJobId: string, params: RequestParams = {}) =>
    this.http.request<
      CompleteServiceJobByServiceJobIdResponse,
      CompleteServiceJobByServiceJobIdResponse
    >({
      path: `/service/v1/serviceJobs/${serviceJobId}/completions`,
      method: "PUT",
      code: "put:/service/v1/serviceJobs/{serviceJobId}/completions",
      format: "json",
      ...params,
    });
  /**
   * @description Gets service job details for the specified filter query. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 10 | 40 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags service
   * @name GetServiceJobs
   * @request GET:/service/v1/serviceJobs
   */
  getServiceJobs = (
    query: {
      /**
       * List of service order ids for the query you want to perform.Max values supported 20.
       * @maxItems 20
       * @minItems 1
       */
      serviceOrderIds?: string[];
      /** A list of one or more job status by which to filter the list of jobs. */
      serviceJobStatus?: (
        | "NOT_SERVICED"
        | "CANCELLED"
        | "COMPLETED"
        | "PENDING_SCHEDULE"
        | "NOT_FULFILLABLE"
        | "HOLD"
        | "PAYMENT_DECLINED"
      )[];
      /** String returned in the response of your previous request. */
      pageToken?: string;
      /**
       * A non-negative integer that indicates the maximum number of jobs to return in the list, Value must be 1 - 20. Default 20.
       * @min 1
       * @max 20
       * @default 20
       */
      pageSize?: number;
      /** Sort fields on which you want to sort the output. */
      sortField?: "JOB_DATE" | "JOB_STATUS";
      /** Sort order for the query you want to perform. */
      sortOrder?: "ASC" | "DESC";
      /** A date used for selecting jobs created at or after a specified time. Must be in ISO 8601 format. Required if `LastUpdatedAfter` is not specified. Specifying both `CreatedAfter` and `LastUpdatedAfter` returns an error. */
      createdAfter?: string;
      /** A date used for selecting jobs created at or before a specified time. Must be in ISO 8601 format. */
      createdBefore?: string;
      /** A date used for selecting jobs updated at or after a specified time. Must be in ISO 8601 format. Required if `createdAfter` is not specified. Specifying both `CreatedAfter` and `LastUpdatedAfter` returns an error. */
      lastUpdatedAfter?: string;
      /** A date used for selecting jobs updated at or before a specified time. Must be in ISO 8601 format. */
      lastUpdatedBefore?: string;
      /** A date used for filtering jobs schedules at or after a specified time. Must be in ISO 8601 format. Schedule end date should not be earlier than schedule start date. */
      scheduleStartDate?: string;
      /** A date used for filtering jobs schedules at or before a specified time. Must be in ISO 8601 format. Schedule end date should not be earlier than schedule start date. */
      scheduleEndDate?: string;
      /**
       * Used to select jobs that were placed in the specified marketplaces.
       * @maxItems 1
       */
      marketplaceIds: string[];
      /**
       * List of Amazon Standard Identification Numbers (ASIN) of the items. Max values supported is 20.
       * @maxItems 20
       * @minItems 1
       */
      asins?: string[];
      /**
       * A defined set of related knowledge, skills, experience, tools, materials, and work processes common to service delivery for a set of products and/or service scenarios. Max values supported is 20.
       * @maxItems 20
       * @minItems 1
       */
      requiredSkills?: string[];
      /**
       * List of Amazon-defined identifiers for the region scope. Max values supported is 50.
       * @maxItems 50
       * @minItems 1
       */
      storeIds?: string[];
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetServiceJobsResponse, GetServiceJobsResponse>({
      path: `/service/v1/serviceJobs`,
      method: "GET",
      code: "get:/service/v1/serviceJobs",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Adds an appointment to the service job indicated by the service job identifier specified. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags service
   * @name AddAppointmentForServiceJobByServiceJobId
   * @request POST:/service/v1/serviceJobs/{serviceJobId}/appointments
   */
  addAppointmentForServiceJobByServiceJobId = (
    serviceJobId: string,
    body: AddAppointmentRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<SetAppointmentResponse, SetAppointmentResponse>({
      path: `/service/v1/serviceJobs/${serviceJobId}/appointments`,
      method: "POST",
      code: "post:/service/v1/serviceJobs/{serviceJobId}/appointments",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Reschedules an appointment for the service job indicated by the service job identifier specified. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags service
   * @name RescheduleAppointmentForServiceJobByServiceJobId
   * @request POST:/service/v1/serviceJobs/{serviceJobId}/appointments/{appointmentId}
   */
  rescheduleAppointmentForServiceJobByServiceJobId = (
    serviceJobId: string,
    appointmentId: string,
    body: RescheduleAppointmentRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<SetAppointmentResponse, SetAppointmentResponse>({
      path: `/service/v1/serviceJobs/${serviceJobId}/appointments/${appointmentId}`,
      method: "POST",
      code: "post:/service/v1/serviceJobs/{serviceJobId}/appointments/{appointmentId}",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Assigns new resource(s) or overwrite/update the existing one(s) to a service job appointment. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags service
   * @name AssignAppointmentResources
   * @request PUT:/service/v1/serviceJobs/{serviceJobId}/appointments/{appointmentId}/resources
   */
  assignAppointmentResources = (
    serviceJobId: string,
    appointmentId: string,
    body: AssignAppointmentResourcesRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<
      AssignAppointmentResourcesResponse,
      AssignAppointmentResourcesResponse
    >({
      path: `/service/v1/serviceJobs/${serviceJobId}/appointments/${appointmentId}/resources`,
      method: "PUT",
      code: "put:/service/v1/serviceJobs/{serviceJobId}/appointments/{appointmentId}/resources",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Updates the appointment fulfillment data related to a given `jobID` and `appointmentID`. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags service
   * @name SetAppointmentFulfillmentData
   * @request PUT:/service/v1/serviceJobs/{serviceJobId}/appointments/{appointmentId}/fulfillment
   */
  setAppointmentFulfillmentData = (
    serviceJobId: string,
    appointmentId: string,
    body: SetAppointmentFulfillmentDataRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<ServiceJobId, ErrorList>({
      path: `/service/v1/serviceJobs/${serviceJobId}/appointments/${appointmentId}/fulfillment`,
      method: "PUT",
      code: "put:/service/v1/serviceJobs/{serviceJobId}/appointments/{appointmentId}/fulfillment",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Provides capacity slots in a format similar to availability records. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags service
   * @name GetRangeSlotCapacity
   * @request POST:/service/v1/serviceResources/{resourceId}/capacity/range
   */
  getRangeSlotCapacity = (
    resourceId: string,
    query: {
      /**
       * An identifier for the marketplace in which the resource operates.
       * @maxItems 1
       */
      marketplaceIds: string[];
      /** Next page token returned in the response of your previous request. */
      nextPageToken?: string;
    },
    body: RangeSlotCapacityQuery,
    params: RequestParams = {}
  ) =>
    this.http.request<RangeSlotCapacity, RangeSlotCapacityErrors>({
      path: `/service/v1/serviceResources/${resourceId}/capacity/range`,
      method: "POST",
      code: "post:/service/v1/serviceResources/{resourceId}/capacity/range",
      query,
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Provides capacity in fixed-size slots. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags service
   * @name GetFixedSlotCapacity
   * @request POST:/service/v1/serviceResources/{resourceId}/capacity/fixed
   */
  getFixedSlotCapacity = (
    resourceId: string,
    query: {
      /**
       * An identifier for the marketplace in which the resource operates.
       * @maxItems 1
       */
      marketplaceIds: string[];
      /** Next page token returned in the response of your previous request. */
      nextPageToken?: string;
    },
    body: FixedSlotCapacityQuery,
    params: RequestParams = {}
  ) =>
    this.http.request<FixedSlotCapacity, FixedSlotCapacityErrors>({
      path: `/service/v1/serviceResources/${resourceId}/capacity/fixed`,
      method: "POST",
      code: "post:/service/v1/serviceResources/{resourceId}/capacity/fixed",
      query,
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Update the schedule of the given resource. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags service
   * @name UpdateSchedule
   * @request PUT:/service/v1/serviceResources/{resourceId}/schedules
   */
  updateSchedule = (
    resourceId: string,
    query: {
      /**
       * An identifier for the marketplace in which the resource operates.
       * @maxItems 1
       */
      marketplaceIds: string[];
    },
    body: UpdateScheduleRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<UpdateScheduleResponse, UpdateScheduleResponse>({
      path: `/service/v1/serviceResources/${resourceId}/schedules`,
      method: "PUT",
      code: "put:/service/v1/serviceResources/{resourceId}/schedules",
      query,
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Create a reservation. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags service
   * @name CreateReservation
   * @request POST:/service/v1/reservation
   */
  createReservation = (
    query: {
      /**
       * An identifier for the marketplace in which the resource operates.
       * @maxItems 1
       */
      marketplaceIds: string[];
    },
    body: CreateReservationRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateReservationResponse, CreateReservationResponse>({
      path: `/service/v1/reservation`,
      method: "POST",
      code: "post:/service/v1/reservation",
      query,
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Update a reservation. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags service
   * @name UpdateReservation
   * @request PUT:/service/v1/reservation/{reservationId}
   */
  updateReservation = (
    reservationId: string,
    query: {
      /**
       * An identifier for the marketplace in which the resource operates.
       * @maxItems 1
       */
      marketplaceIds: string[];
    },
    body: UpdateReservationRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<UpdateReservationResponse, UpdateReservationResponse>({
      path: `/service/v1/reservation/${reservationId}`,
      method: "PUT",
      code: "put:/service/v1/reservation/{reservationId}",
      query,
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Cancel a reservation. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags service
   * @name CancelReservation
   * @request DELETE:/service/v1/reservation/{reservationId}
   */
  cancelReservation = (
    reservationId: string,
    query: {
      /**
       * An identifier for the marketplace in which the resource operates.
       * @maxItems 1
       */
      marketplaceIds: string[];
    },
    params: RequestParams = {}
  ) =>
    this.http.request<CancelReservationResponse, CancelReservationResponse>({
      path: `/service/v1/reservation/${reservationId}`,
      method: "DELETE",
      code: "delete:/service/v1/reservation/{reservationId}",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets appointment slots for the service associated with the service job id specified. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags service
   * @name GetAppointmmentSlotsByJobId
   * @request GET:/service/v1/serviceJobs/{serviceJobId}/appointmentSlots
   */
  getAppointmmentSlotsByJobId = (
    serviceJobId: string,
    query: {
      /**
       * An identifier for the marketplace in which the resource operates.
       * @maxItems 1
       */
      marketplaceIds: string[];
      /** A time from which the appointment slots will be retrieved. The specified time must be in ISO 8601 format. If `startTime` is provided, `endTime` should also be provided. Default value is as per business configuration. */
      startTime?: string;
      /** A time up to which the appointment slots will be retrieved. The specified time must be in ISO 8601 format. If `endTime` is provided, `startTime` should also be provided. Default value is as per business configuration. Maximum range of appointment slots can be 90 days. */
      endTime?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetAppointmentSlotsResponse, GetAppointmentSlotsResponse>({
      path: `/service/v1/serviceJobs/${serviceJobId}/appointmentSlots`,
      method: "GET",
      code: "get:/service/v1/serviceJobs/{serviceJobId}/appointmentSlots",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Gets appointment slots as per the service context specified. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 20 | 40 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags service
   * @name GetAppointmentSlots
   * @request GET:/service/v1/appointmentSlots
   */
  getAppointmentSlots = (
    query: {
      /** ASIN associated with the service. */
      asin: string;
      /**
       * Store identifier defining the region scope to retrive appointment slots.
       * @minLength 1
       * @maxLength 100
       */
      storeId: string;
      /**
       * An identifier for the marketplace for which appointment slots are queried
       * @maxItems 1
       */
      marketplaceIds: string[];
      /** A time from which the appointment slots will be retrieved. The specified time must be in ISO 8601 format. If `startTime` is provided, `endTime` should also be provided. Default value is as per business configuration. */
      startTime?: string;
      /** A time up to which the appointment slots will be retrieved. The specified time must be in ISO 8601 format. If `endTime` is provided, `startTime` should also be provided. Default value is as per business configuration. Maximum range of appointment slots can be 90 days. */
      endTime?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetAppointmentSlotsResponse, GetAppointmentSlotsResponse>({
      path: `/service/v1/appointmentSlots`,
      method: "GET",
      code: "get:/service/v1/appointmentSlots",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates an upload destination. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 20 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags service
   * @name CreateServiceDocumentUploadDestination
   * @request POST:/service/v1/documents
   */
  createServiceDocumentUploadDestination = (
    body: ServiceUploadDocument,
    params: RequestParams = {}
  ) =>
    this.http.request<
      CreateServiceDocumentUploadDestination,
      CreateServiceDocumentUploadDestination
    >({
      path: `/service/v1/documents`,
      method: "POST",
      code: "post:/service/v1/documents",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
