import {
  CreateDestinationRequest,
  CreateDestinationResponse,
  CreateSubscriptionRequest,
  CreateSubscriptionResponse,
  DeleteDestinationResponse,
  DeleteSubscriptionByIdResponse,
  GetDestinationResponse,
  GetDestinationsResponse,
  GetSubscriptionByIdResponse,
  GetSubscriptionResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "../../http-client";

export class Notifications<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns information about subscriptions of the specified notification type. You can use this API to get subscription information when you do not have a subscription identifier. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags notifications
   * @name GetSubscription
   * @request GET:/notifications/v1/subscriptions/{notificationType}
   */
  getSubscription = (notificationType: string, params: RequestParams = {}) =>
    this.http.request<GetSubscriptionResponse, GetSubscriptionResponse>({
      path: `/notifications/v1/subscriptions/${notificationType}`,
      method: "GET",
      code: "get:/notifications/v1/subscriptions/{notificationType}",
      format: "json",
      ...params,
    });
  /**
   * @description Creates a subscription for the specified notification type to be delivered to the specified destination. Before you can subscribe, you must first create the destination by calling the createDestination operation. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags notifications
   * @name CreateSubscription
   * @request POST:/notifications/v1/subscriptions/{notificationType}
   */
  createSubscription = (
    notificationType: string,
    body: CreateSubscriptionRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateSubscriptionResponse, CreateSubscriptionResponse>({
      path: `/notifications/v1/subscriptions/${notificationType}`,
      method: "POST",
      code: "post:/notifications/v1/subscriptions/{notificationType}",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns information about a subscription for the specified notification type. The getSubscriptionById API is grantless. For more information, see [Grantless operations](doc:grantless-operations) in the Selling Partner API Developer Guide. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags notifications
   * @name GetSubscriptionById
   * @request GET:/notifications/v1/subscriptions/{notificationType}/{subscriptionId}
   */
  getSubscriptionById = (
    subscriptionId: string,
    notificationType: string,
    params: RequestParams = {}
  ) =>
    this.http.request<
      GetSubscriptionByIdResponse,
      GetSubscriptionByIdResponse | GetSubscriptionResponse
    >({
      path: `/notifications/v1/subscriptions/${notificationType}/${subscriptionId}`,
      method: "GET",
      code: "get:/notifications/v1/subscriptions/{notificationType}/{subscriptionId}",
      format: "json",
      ...params,
    });
  /**
   * @description Deletes the subscription indicated by the subscription identifier and notification type that you specify. The subscription identifier can be for any subscription associated with your application. After you successfully call this operation, notifications will stop being sent for the associated subscription. The deleteSubscriptionById API is grantless. For more information, see [Grantless operations](doc:grantless-operations) in the Selling Partner API Developer Guide. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags notifications
   * @name DeleteSubscriptionById
   * @request DELETE:/notifications/v1/subscriptions/{notificationType}/{subscriptionId}
   */
  deleteSubscriptionById = (
    subscriptionId: string,
    notificationType: string,
    params: RequestParams = {}
  ) =>
    this.http.request<DeleteSubscriptionByIdResponse, DeleteSubscriptionByIdResponse>({
      path: `/notifications/v1/subscriptions/${notificationType}/${subscriptionId}`,
      method: "DELETE",
      code: "delete:/notifications/v1/subscriptions/{notificationType}/{subscriptionId}",
      format: "json",
      ...params,
    });
  /**
   * @description Returns information about all destinations. The getDestinations API is grantless. For more information, see [Grantless operations](doc:grantless-operations) in the Selling Partner API Developer Guide. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags notifications
   * @name GetDestinations
   * @request GET:/notifications/v1/destinations
   */
  getDestinations = (params: RequestParams = {}) =>
    this.http.request<GetDestinationsResponse, GetDestinationsResponse>({
      path: `/notifications/v1/destinations`,
      method: "GET",
      code: "get:/notifications/v1/destinations",
      format: "json",
      ...params,
    });
  /**
   * @description Creates a destination resource to receive notifications. The createDestination API is grantless. For more information, see [Grantless operations](doc:grantless-operations) in the Selling Partner API Developer Guide. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags notifications
   * @name CreateDestination
   * @request POST:/notifications/v1/destinations
   */
  createDestination = (body: CreateDestinationRequest, params: RequestParams = {}) =>
    this.http.request<CreateDestinationResponse, CreateDestinationResponse>({
      path: `/notifications/v1/destinations`,
      method: "POST",
      code: "post:/notifications/v1/destinations",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns information about the destination that you specify. The getDestination API is grantless. For more information, see [Grantless operations](doc:grantless-operations) in the Selling Partner API Developer Guide. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags notifications
   * @name GetDestination
   * @request GET:/notifications/v1/destinations/{destinationId}
   */
  getDestination = (destinationId: string, params: RequestParams = {}) =>
    this.http.request<GetDestinationResponse, GetDestinationResponse>({
      path: `/notifications/v1/destinations/${destinationId}`,
      method: "GET",
      code: "get:/notifications/v1/destinations/{destinationId}",
      format: "json",
      ...params,
    });
  /**
   * @description Deletes the destination that you specify. The deleteDestination API is grantless. For more information, see [Grantless operations](doc:grantless-operations) in the Selling Partner API Developer Guide. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags notifications
   * @name DeleteDestination
   * @request DELETE:/notifications/v1/destinations/{destinationId}
   */
  deleteDestination = (destinationId: string, params: RequestParams = {}) =>
    this.http.request<DeleteDestinationResponse, DeleteDestinationResponse>({
      path: `/notifications/v1/destinations/${destinationId}`,
      method: "DELETE",
      code: "delete:/notifications/v1/destinations/{destinationId}",
      format: "json",
      ...params,
    });
}
