import type {
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
import type { HttpClient, RequestParams } from "../http-client";
import { ContentType } from "../http-client";

export class Notifications<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns information about subscription of the specified notification type and payload version. `payloadVersion` is an optional parameter. When `payloadVersion` is not provided, it will return latest payload version subscription's information. You can use this API to get subscription information when you do not have a subscription identifier. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags notifications
   * @name GetSubscription
   * @request GET:/notifications/v1/subscriptions/{notificationType}
   */
  getSubscription = (
    notificationType: string,
    query?: {
      /** The version of the payload object to be used in the notification. */
      payloadVersion?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetSubscriptionResponse, GetSubscriptionResponse>({
      path: `/notifications/v1/subscriptions/${notificationType}`,
      method: "GET",
      code: "get:/notifications/v1/subscriptions/{notificationType}",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a subscription for the specified notification type to be delivered to the specified destination. Before you can subscribe, you must first create the destination by calling the `createDestination` operation. In cases where the specified notification type supports multiple payload versions, you can utilize this API to subscribe to a different payload version if you already have an existing subscription for a different payload version. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
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
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns information about a subscription for the specified notification type. The `getSubscriptionById` operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations) in the Selling Partner API Developer Guide. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
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
   * @description Deletes the subscription indicated by the subscription identifier and notification type that you specify. The subscription identifier can be for any subscription associated with your application. After you successfully call this operation, notifications will stop being sent for the associated subscription. The `deleteSubscriptionById` operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations) in the Selling Partner API Developer Guide. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
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
   * @description Returns information about all destinations. The `getDestinations` operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations) in the Selling Partner API Developer Guide. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
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
   * @description Creates a destination resource to receive notifications. The `createDestination` operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations) in the Selling Partner API Developer Guide. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
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
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns information about the destination that you specify. The `getDestination` operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations) in the Selling Partner API Developer Guide. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
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
   * @description Deletes the destination that you specify. The `deleteDestination` operation is grantless. For more information, refer to [Grantless operations](https://developer-docs.amazon.com/sp-api/docs/grantless-operations) in the Selling Partner API Developer Guide. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
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
