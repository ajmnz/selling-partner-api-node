import type {
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
import type { HttpClient, RequestParams } from "../../http-client";
import { ContentType } from "../../http-client";

export class Reports<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Effective **June 27, 2023**, the `getReports` operation will no longer be available in the Selling Partner API for Reports v2020-09-04 and all calls to it will fail. Integrations that rely on this operation should migrate to [Reports v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference) to avoid service disruption.
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
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Effective **June 27, 2023**, the `createReport` operation will no longer be available in the Selling Partner API for Reports v2020-09-04 and all calls to it will fail. Integrations that rely on this operation should migrate to [Reports v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference) to avoid service disruption.
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
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Effective **June 27, 2023**, the `getReport` operation will no longer be available in the Selling Partner API for Reports v2020-09-04 and all calls to it will fail. Integrations that rely on this operation should migrate to [Reports v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference) to avoid service disruption.
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
   * @description Effective **June 27, 2023**, the `cancelReport` operation will no longer be available in the Selling Partner API for Reports v2020-09-04 and all calls to it will fail. Integrations that rely on this operation should migrate to [Reports v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference) to avoid service disruption.
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
   * @description Effective **June 27, 2023**, the `getReportSchedules` operation will no longer be available in the Selling Partner API for Reports v2020-09-04 and all calls to it will fail. Integrations that rely on this operation should migrate to [Reports v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference) to avoid service disruption.
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
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Effective **June 27, 2023**, the `createReportSchedule` operation will no longer be available in the Selling Partner API for Reports v2020-09-04 and all calls to it will fail. Integrations that rely on this operation should migrate to [Reports v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference) to avoid service disruption.
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
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Effective **June 27, 2023**, the `getReportSchedule` operation will no longer be available in the Selling Partner API for Reports v2020-09-04 and all calls to it will fail. Integrations that rely on this operation should migrate to [Reports v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference) to avoid service disruption.
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
   * @description Effective **June 27, 2023**, the `cancelReportSchedule` operation will no longer be available in the Selling Partner API for Reports v2020-09-04 and all calls to it will fail. Integrations that rely on this operation should migrate to [Reports v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference) to avoid service disruption.
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
   * @description Effective **June 27, 2023**, the `getReportDocument` operation will no longer be available in the Selling Partner API for Reports v2020-09-04 and all calls to it will fail. Integrations that rely on this operation should migrate to [Reports v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference) to avoid service disruption.
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
