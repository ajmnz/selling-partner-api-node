import {
  ListFinancialEventGroupsResponse,
  ListFinancialEventsResponse,
} from "./data-contracts";
import { HttpClient, RequestParams } from "../../../http-client";

export class Finances<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns financial event groups for a given date range. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @name ListFinancialEventGroups
   * @request GET:/finances/v0/financialEventGroups
   */
  listFinancialEventGroups = (
    query?: {
      /**
       * The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the API responds with 'InvalidInput'.
       * @format int32
       * @min 1
       * @max 100
       * @default 100
       */
      MaxResultsPerPage?: number;
      /**
       * A date used for selecting financial event groups that opened before (but not at) a specified date and time, in ISO 8601 format. The date-time  must be later than FinancialEventGroupStartedAfter and no later than two minutes before the request was submitted. If FinancialEventGroupStartedAfter and FinancialEventGroupStartedBefore are more than 180 days apart, no financial event groups are returned.
       * @format date-time
       */
      FinancialEventGroupStartedBefore?: string;
      /**
       * A date used for selecting financial event groups that opened after (or at) a specified date and time, in ISO 8601 format. The date-time must be no later than two minutes before the request was submitted.
       * @format date-time
       */
      FinancialEventGroupStartedAfter?: string;
      /** A string token returned in the response of your previous request. */
      NextToken?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<ListFinancialEventGroupsResponse, ListFinancialEventGroupsResponse>(
      {
        path: `/finances/v0/financialEventGroups`,
        method: "GET",
        code: "get:/finances/v0/financialEventGroups",
        query: query,
        format: "json",
        ...params,
      }
    );
  /**
   * @description Returns all financial events for the specified financial event group. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @name ListFinancialEventsByGroupId
   * @request GET:/finances/v0/financialEventGroups/{eventGroupId}/financialEvents
   */
  listFinancialEventsByGroupId = (
    eventGroupId: string,
    query?: {
      /**
       * The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the API responds with 'InvalidInput'.
       * @format int32
       * @min 1
       * @max 100
       * @default 100
       */
      MaxResultsPerPage?: number;
      /**
       * A date used for selecting financial events posted after (or at) a specified time. The date-time **must** be more than two minutes before the time of the request, in ISO 8601 date time format.
       * @format date-time
       */
      PostedAfter?: string;
      /**
       * A date used for selecting financial events posted before (but not at) a specified time. The date-time must be later than `PostedAfter` and no later than two minutes before the request was submitted, in ISO 8601 date time format. If `PostedAfter` and `PostedBefore` are more than 180 days apart, no financial events are returned. You must specify the `PostedAfter` parameter if you specify the `PostedBefore` parameter. Default: Now minus two minutes.
       * @format date-time
       */
      PostedBefore?: string;
      /** A string token returned in the response of your previous request. */
      NextToken?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<ListFinancialEventsResponse, ListFinancialEventsResponse>({
      path: `/finances/v0/financialEventGroups/${eventGroupId}/financialEvents`,
      method: "GET",
      code: "get:/finances/v0/financialEventGroups/{eventGroupId}/financialEvents",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns all financial events for the specified order. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @name ListFinancialEventsByOrderId
   * @request GET:/finances/v0/orders/{orderId}/financialEvents
   */
  listFinancialEventsByOrderId = (
    orderId: string,
    query?: {
      /**
       * The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the API responds with 'InvalidInput'.
       * @format int32
       * @min 1
       * @max 100
       * @default 100
       */
      MaxResultsPerPage?: number;
      /** A string token returned in the response of your previous request. */
      NextToken?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<ListFinancialEventsResponse, ListFinancialEventsResponse>({
      path: `/finances/v0/orders/${orderId}/financialEvents`,
      method: "GET",
      code: "get:/finances/v0/orders/{orderId}/financialEvents",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns financial events for the specified data range. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 30 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @name ListFinancialEvents
   * @request GET:/finances/v0/financialEvents
   */
  listFinancialEvents = (
    query?: {
      /**
       * The maximum number of results to return per page. If the response exceeds the maximum number of transactions or 10 MB, the API responds with 'InvalidInput'.
       * @format int32
       * @min 1
       * @max 100
       * @default 100
       */
      MaxResultsPerPage?: number;
      /**
       * A date used for selecting financial events posted after (or at) a specified time. The date-time must be no later than two minutes before the request was submitted, in ISO 8601 date time format.
       * @format date-time
       */
      PostedAfter?: string;
      /**
       * A date used for selecting financial events posted before (but not at) a specified time. The date-time must be later than PostedAfter and no later than two minutes before the request was submitted, in ISO 8601 date time format. If PostedAfter and PostedBefore are more than 180 days apart, no financial events are returned. You must specify the PostedAfter parameter if you specify the PostedBefore parameter. Default: Now minus two minutes.
       * @format date-time
       */
      PostedBefore?: string;
      /** A string token returned in the response of your previous request. */
      NextToken?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<ListFinancialEventsResponse, ListFinancialEventsResponse>({
      path: `/finances/v0/financialEvents`,
      method: "GET",
      code: "get:/finances/v0/financialEvents",
      query: query,
      format: "json",
      ...params,
    });
}
