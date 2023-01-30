import {
  CreateReportResponse,
  CreateReportScheduleResponse,
  CreateReportScheduleSpecification,
  CreateReportSpecification,
  ErrorList,
  GetReportsResponse,
  Report,
  ReportDocument,
  ReportSchedule,
  ReportScheduleList,
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
   * @request GET:/reports/2021-06-30/reports
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
    this.http.request<GetReportsResponse, ErrorList>({
      path: `/reports/2021-06-30/reports`,
      method: "GET",
      code: "get:/reports/2021-06-30/reports",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a report. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags reports
   * @name CreateReport
   * @request POST:/reports/2021-06-30/reports
   */
  createReport = (body: CreateReportSpecification, params: RequestParams = {}) =>
    this.http.request<CreateReportResponse, ErrorList>({
      path: `/reports/2021-06-30/reports`,
      method: "POST",
      code: "post:/reports/2021-06-30/reports",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Cancels the report that you specify. Only reports with processingStatus=IN_QUEUE can be cancelled. Cancelled reports are returned in subsequent calls to the getReport and getReports operations. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags reports
   * @name CancelReport
   * @request DELETE:/reports/2021-06-30/reports/{reportId}
   */
  cancelReport = (reportId: string, params: RequestParams = {}) =>
    this.http.request<void, ErrorList>({
      path: `/reports/2021-06-30/reports/${reportId}`,
      method: "DELETE",
      code: "delete:/reports/2021-06-30/reports/{reportId}",
      ...params,
    });
  /**
   * @description Returns report details (including the reportDocumentId, if available) for the report that you specify. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2.0 | 15 | For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API documentation.
   *
   * @tags reports
   * @name GetReport
   * @request GET:/reports/2021-06-30/reports/{reportId}
   */
  getReport = (reportId: string, params: RequestParams = {}) =>
    this.http.request<Report, ErrorList>({
      path: `/reports/2021-06-30/reports/${reportId}`,
      method: "GET",
      code: "get:/reports/2021-06-30/reports/{reportId}",
      format: "json",
      ...params,
    });
  /**
   * @description Returns report schedule details that match the filters that you specify. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 | For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API documentation.
   *
   * @tags reports
   * @name GetReportSchedules
   * @request GET:/reports/2021-06-30/schedules
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
    this.http.request<ReportScheduleList, ErrorList>({
      path: `/reports/2021-06-30/schedules`,
      method: "GET",
      code: "get:/reports/2021-06-30/schedules",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a report schedule. If a report schedule with the same report type and marketplace IDs already exists, it will be cancelled and replaced with this one. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 | For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API documentation.
   *
   * @tags reports
   * @name CreateReportSchedule
   * @request POST:/reports/2021-06-30/schedules
   */
  createReportSchedule = (
    body: CreateReportScheduleSpecification,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateReportScheduleResponse, ErrorList>({
      path: `/reports/2021-06-30/schedules`,
      method: "POST",
      code: "post:/reports/2021-06-30/schedules",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Cancels the report schedule that you specify. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 | For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API documentation.
   *
   * @tags reports
   * @name CancelReportSchedule
   * @request DELETE:/reports/2021-06-30/schedules/{reportScheduleId}
   */
  cancelReportSchedule = (reportScheduleId: string, params: RequestParams = {}) =>
    this.http.request<void, ErrorList>({
      path: `/reports/2021-06-30/schedules/${reportScheduleId}`,
      method: "DELETE",
      code: "delete:/reports/2021-06-30/schedules/{reportScheduleId}",
      ...params,
    });
  /**
   * @description Returns report schedule details for the report schedule that you specify. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.0222 | 10 | For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API documentation.
   *
   * @tags reports
   * @name GetReportSchedule
   * @request GET:/reports/2021-06-30/schedules/{reportScheduleId}
   */
  getReportSchedule = (reportScheduleId: string, params: RequestParams = {}) =>
    this.http.request<ReportSchedule, ErrorList>({
      path: `/reports/2021-06-30/schedules/${reportScheduleId}`,
      method: "GET",
      code: "get:/reports/2021-06-30/schedules/{reportScheduleId}",
      format: "json",
      ...params,
    });
  /**
   * @description Returns the information required for retrieving a report document's contents. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 15 | For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api)in the Selling Partner API documentation.
   *
   * @tags reports
   * @name GetReportDocument
   * @request GET:/reports/2021-06-30/documents/{reportDocumentId}
   */
  getReportDocument = (reportDocumentId: string, params: RequestParams = {}) =>
    this.http.request<ReportDocument, ErrorList>({
      path: `/reports/2021-06-30/documents/${reportDocumentId}`,
      method: "GET",
      code: "get:/reports/2021-06-30/documents/{reportDocumentId}",
      format: "json",
      ...params,
    });
}
