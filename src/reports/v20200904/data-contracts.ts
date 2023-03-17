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
}

/** Encryption details required for decryption of a report document's contents. */
export interface ReportDocumentEncryptionDetails {
  /** The encryption standard required to decrypt the document contents. */
  standard: "AES";
  /** The vector to decrypt the document contents using Cipher Block Chaining (CBC). */
  initializationVector: string;
  /** The encryption key used to decrypt the document contents. */
  key: string;
}

export interface Report {
  /** A list of marketplace identifiers for the report. */
  marketplaceIds?: string[];
  /** The identifier for the report. This identifier is unique only in combination with a seller ID. */
  reportId: string;
  /** The report type. */
  reportType: string;
  /**
   * The start of a date and time range used for selecting the data to report.
   * @format date-time
   */
  dataStartTime?: string;
  /**
   * The end of a date and time range used for selecting the data to report.
   * @format date-time
   */
  dataEndTime?: string;
  /** The identifier of the report schedule that created this report (if any). This identifier is unique only in combination with a seller ID. */
  reportScheduleId?: string;
  /**
   * The date and time when the report was created.
   * @format date-time
   */
  createdTime: string;
  /** The processing status of the report. */
  processingStatus: "CANCELLED" | "DONE" | "FATAL" | "IN_PROGRESS" | "IN_QUEUE";
  /**
   * The date and time when the report processing started, in ISO 8601 date time format.
   * @format date-time
   */
  processingStartTime?: string;
  /**
   * The date and time when the report processing completed, in ISO 8601 date time format.
   * @format date-time
   */
  processingEndTime?: string;
  /** The identifier for the report document. Pass this into the getReportDocument operation to get the information you will need to retrieve and decrypt the report document's contents. */
  reportDocumentId?: string;
}

export type ReportList = Report[];

export interface CreateReportScheduleSpecification {
  /** The report type. */
  reportType: string;
  /**
   * A list of marketplace identifiers for the report schedule.
   * @maxItems 25
   * @minItems 1
   */
  marketplaceIds: string[];
  /** Additional information passed to reports. This varies by report type. */
  reportOptions?: ReportOptions;
  /** One of a set of predefined ISO 8601 periods that specifies how often a report should be created. */
  period:
    | "PT5M"
    | "PT15M"
    | "PT30M"
    | "PT1H"
    | "PT2H"
    | "PT4H"
    | "PT8H"
    | "PT12H"
    | "P1D"
    | "P2D"
    | "P3D"
    | "PT84H"
    | "P7D"
    | "P14D"
    | "P15D"
    | "P18D"
    | "P30D"
    | "P1M";
  /**
   * The date and time when the schedule will create its next report, in ISO 8601 date time format.
   * @format date-time
   */
  nextReportCreationTime?: string;
}

export interface CreateReportSpecification {
  /** Additional information passed to reports. This varies by report type. */
  reportOptions?: ReportOptions;
  /** The report type. */
  reportType: string;
  /**
   * The start of a date and time range, in ISO 8601 date time format, used for selecting the data to report. The default is now. The value must be prior to or equal to the current date and time. Not all report types make use of this.
   * @format date-time
   */
  dataStartTime?: string;
  /**
   * The end of a date and time range, in ISO 8601 date time format, used for selecting the data to report. The default is now. The value must be prior to or equal to the current date and time. Not all report types make use of this.
   * @format date-time
   */
  dataEndTime?: string;
  /**
   * A list of marketplace identifiers. The report document's contents will contain data for all of the specified marketplaces, unless the report type indicates otherwise.
   * @maxItems 25
   * @minItems 1
   */
  marketplaceIds: string[];
}

/** Additional information passed to reports. This varies by report type. */
export type ReportOptions = Record<string, string>;

/** Detailed information about a report schedule. */
export interface ReportSchedule {
  /** The identifier for the report schedule. This identifier is unique only in combination with a seller ID. */
  reportScheduleId: string;
  /** The report type. */
  reportType: string;
  /** A list of marketplace identifiers. The report document's contents will contain data for all of the specified marketplaces, unless the report type indicates otherwise. */
  marketplaceIds?: string[];
  /** Additional information passed to reports. This varies by report type. */
  reportOptions?: ReportOptions;
  /** An ISO 8601 period value that indicates how often a report should be created. */
  period: string;
  /**
   * The date and time when the schedule will create its next report, in ISO 8601 date time format.
   * @format date-time
   */
  nextReportCreationTime?: string;
}

export type ReportScheduleList = ReportSchedule[];

export interface CreateReportResult {
  /** The identifier for the report. This identifier is unique only in combination with a seller ID. */
  reportId: string;
}

/** The response for the getReports operation. */
export interface GetReportsResponse {
  /** The payload for the getReports operation. */
  payload?: ReportList;
  /** Returned when the number of results exceeds pageSize. To get the next page of results, call getReports with this token as the only parameter. */
  nextToken?: string;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** The response for the createReport operation. */
export interface CreateReportResponse {
  /** The payload for the createReport operation. */
  payload?: CreateReportResult;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** The response for the cancelReport operation. */
export interface CancelReportResponse {
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** The response for the cancelReportSchedule operation. */
export interface CancelReportScheduleResponse {
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** The response for the getReport operation. */
export interface GetReportResponse {
  /** The payload for the getReport operation. */
  payload?: Report;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** The response for the getReportSchedules operation. */
export interface GetReportSchedulesResponse {
  /** The payload for the getReportSchedules operation. */
  payload?: ReportScheduleList;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** The response for the getReportSchedule operation. */
export interface GetReportScheduleResponse {
  /** The payload for the getReportSchedule operation. */
  payload?: ReportSchedule;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

export interface CreateReportScheduleResult {
  /** The identifier for the report schedule. This identifier is unique only in combination with a seller ID. */
  reportScheduleId: string;
}

/** The response for the createReportSchedule operation. */
export interface CreateReportScheduleResponse {
  /** The payload for the createReportSchedule operation. */
  payload?: CreateReportScheduleResult;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

export interface ReportDocument {
  /** The identifier for the report document. This identifier is unique only in combination with a seller ID. */
  reportDocumentId: string;
  /** A presigned URL for the report document. If `compressionAlgorithm` is not returned, you can download the report directly from this URL. This URL expires after 5 minutes. */
  url: string;
  /** Encryption details required for decryption of a report document's contents. */
  encryptionDetails: ReportDocumentEncryptionDetails;
  /** If the report document contents have been compressed, the compression algorithm used is returned in this property and you must decompress the report when you download. Otherwise, you can download the report directly. Refer to [Step 2. Download and decrypt the report](doc:reports-api-v2020-09-04-use-case-guide#step-2-download-and-decrypt-the-report) in the use case guide, where sample code is provided. */
  compressionAlgorithm?: "GZIP";
}

/** Response schema. */
export interface GetReportDocumentResponse {
  payload?: ReportDocument;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}
