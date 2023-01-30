import {
  CancelReportResponse,
  CancelReportScheduleResponse,
  CreateReportResponse,
  CreateReportScheduleResponse,
  CreateReportScheduleSpecification,
  CreateReportSpecification,
  GetReportDocumentResponse,
  GetReportResponse,
  GetReportScheduleResponse,
  GetReportSchedulesResponse,
  GetReportsResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "../../../http-client";

export class Reports<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns report details for the reports that match the filters that you specify. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags reports
   * @name GetReports
   * @request GET:/reports/2020-09-04/reports
   */
  getReports = (
    query?: {
      /**
       * A list of report types used to filter reports. When reportTypes is provided, the other filter parameters (processingStatuses, marketplaceIds, createdSince, createdUntil) and pageSize may also be provided. Either reportTypes or nextToken is required.
       * @maxItems 10
       * @minItems 1
       */
      reportTypes?: string[];
      /**
       * A list of processing statuses used to filter reports.
       * @minItems 1
       */
      processingStatuses?: (
        | "CANCELLED"
        | "DONE"
        | "FATAL"
        | "IN_PROGRESS"
        | "IN_QUEUE"
      )[];
      /**
       * A list of marketplace identifiers used to filter reports. The reports returned will match at least one of the marketplaces that you specify.
       * @maxItems 10
       * @minItems 1
       */
      marketplaceIds?: string[];
      /**
       * The maximum number of reports to return in a single call.
       * @min 1
       * @max 100
       * @default 10
       */
      pageSize?: number;
      /**
       * The earliest report creation date and time for reports to include in the response, in ISO 8601 date time format. The default is 90 days ago. Reports are retained for a maximum of 90 days.
       * @format date-time
       */
      createdSince?: string;
      /**
       * The latest report creation date and time for reports to include in the response, in ISO 8601 date time format. The default is now.
       * @format date-time
       */
      createdUntil?: string;
      /** A string token returned in the response to your previous request. nextToken is returned when the number of results exceeds the specified pageSize value. To get the next page of results, call the getReports operation and include this token as the only parameter. Specifying nextToken with any other parameters will cause the request to fail. */
      nextToken?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetReportsResponse, GetReportsResponse>({
      path: `/reports/2020-09-04/reports`,
      method: "GET",
      code: "get:/reports/2020-09-04/reports",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a report. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags reports
   * @name CreateReport
   * @request POST:/reports/2020-09-04/reports
   */
  createReport = (body: CreateReportSpecification, params: RequestParams = {}) =>
    this.http.request<CreateReportResponse, CreateReportResponse>({
      path: `/reports/2020-09-04/reports`,
      method: "POST",
      code: "post:/reports/2020-09-04/reports",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns report details (including the reportDocumentId, if available) for the report that you specify. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2.0 | 15 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags reports
   * @name GetReport
   * @request GET:/reports/2020-09-04/reports/{reportId}
   */
  getReport = (reportId: string, params: RequestParams = {}) =>
    this.http.request<GetReportResponse, GetReportResponse>({
      path: `/reports/2020-09-04/reports/${reportId}`,
      method: "GET",
      code: "get:/reports/2020-09-04/reports/{reportId}",
      format: "json",
      ...params,
    });
  /**
   * @description Cancels the report that you specify. Only reports with processingStatus=IN_QUEUE can be cancelled. Cancelled reports are returned in subsequent calls to the getReport and getReports operations. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags reports
   * @name CancelReport
   * @request DELETE:/reports/2020-09-04/reports/{reportId}
   */
  cancelReport = (reportId: string, params: RequestParams = {}) =>
    this.http.request<CancelReportResponse, CancelReportResponse>({
      path: `/reports/2020-09-04/reports/${reportId}`,
      method: "DELETE",
      code: "delete:/reports/2020-09-04/reports/{reportId}",
      format: "json",
      ...params,
    });
  /**
   * @description Returns report schedule details that match the filters that you specify. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags reports
   * @name GetReportSchedules
   * @request GET:/reports/2020-09-04/schedules
   */
  getReportSchedules = (
    query: {
      /**
       * A list of report types used to filter report schedules.
       * @maxItems 10
       * @minItems 1
       */
      reportTypes: string[];
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetReportSchedulesResponse, GetReportSchedulesResponse>({
      path: `/reports/2020-09-04/schedules`,
      method: "GET",
      code: "get:/reports/2020-09-04/schedules",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a report schedule. If a report schedule with the same report type and marketplace IDs already exists, it will be cancelled and replaced with this one. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags reports
   * @name CreateReportSchedule
   * @request POST:/reports/2020-09-04/schedules
   */
  createReportSchedule = (
    body: CreateReportScheduleSpecification,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateReportScheduleResponse, CreateReportScheduleResponse>({
      path: `/reports/2020-09-04/schedules`,
      method: "POST",
      code: "post:/reports/2020-09-04/schedules",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns report schedule details for the report schedule that you specify. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags reports
   * @name GetReportSchedule
   * @request GET:/reports/2020-09-04/schedules/{reportScheduleId}
   */
  getReportSchedule = (reportScheduleId: string, params: RequestParams = {}) =>
    this.http.request<GetReportScheduleResponse, GetReportScheduleResponse>({
      path: `/reports/2020-09-04/schedules/${reportScheduleId}`,
      method: "GET",
      code: "get:/reports/2020-09-04/schedules/{reportScheduleId}",
      format: "json",
      ...params,
    });
  /**
   * @description Cancels the report schedule that you specify. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags reports
   * @name CancelReportSchedule
   * @request DELETE:/reports/2020-09-04/schedules/{reportScheduleId}
   */
  cancelReportSchedule = (reportScheduleId: string, params: RequestParams = {}) =>
    this.http.request<CancelReportScheduleResponse, CancelReportScheduleResponse>({
      path: `/reports/2020-09-04/schedules/${reportScheduleId}`,
      method: "DELETE",
      code: "delete:/reports/2020-09-04/schedules/{reportScheduleId}",
      format: "json",
      ...params,
    });
  /**
   * @description Returns the information required for retrieving a report document's contents. This includes a presigned URL for the report document as well as the information required to decrypt the document's contents. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags reports
   * @name GetReportDocument
   * @request GET:/reports/2020-09-04/documents/{reportDocumentId}
   */
  getReportDocument = (reportDocumentId: string, params: RequestParams = {}) =>
    this.http.request<GetReportDocumentResponse, GetReportDocumentResponse>({
      path: `/reports/2020-09-04/documents/${reportDocumentId}`,
      method: "GET",
      code: "get:/reports/2020-09-04/documents/{reportDocumentId}",
      format: "json",
      ...params,
    });
}
