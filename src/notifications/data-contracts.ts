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

/**
 * Additional information passed to the subscription to control the processing of notifications. For example, you can use an `eventFilter` to customize your subscription to send notifications for only the specified `marketplaceId`s, or select the aggregation time period at which to send notifications (for example: limit to one notification every five minutes for high frequency notifications). The specific features available vary depending on the `notificationType`.
 *
 * This feature is currently only supported by the `ANY_OFFER_CHANGED` and `ORDER_CHANGE` `notificationType`s.
 */
export interface ProcessingDirective {
  /** A `notificationType` specific filter. */
  eventFilter?: EventFilter;
}

/** A `notificationType` specific filter. This object contains all of the currently available filters and properties that you can use to define a `notificationType` specific filter. */
export type EventFilter = AggregationFilter &
  MarketplaceFilter &
  OrderChangeTypeFilter & {
    /** An `eventFilterType` value that is supported by the specific `notificationType`. This is used by the subscription service to determine the type of event filter. Refer to the section of the [Notifications Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-use-case-guide) that describes the specific `notificationType` to determine if an `eventFilterType` is supported. */
    eventFilterType: "ANY_OFFER_CHANGED" | "ORDER_CHANGE";
  };

/** An event filter to customize your subscription to send notifications for only the specified `marketplaceId`s. */
export interface MarketplaceFilter {
  /** A list of marketplace identifiers to subscribe to (for example: ATVPDKIKX0DER). To receive notifications in every marketplace, do not provide this list. */
  marketplaceIds?: MarketplaceIds;
}

/** A list of marketplace identifiers to subscribe to (for example: ATVPDKIKX0DER). To receive notifications in every marketplace, do not provide this list. */
export type MarketplaceIds = string[];

/** A filter used to select the aggregation time period at which to send notifications (for example: limit to one notification every five minutes for high frequency notifications). */
export interface AggregationFilter {
  /** A container that holds all of the necessary properties to configure the aggregation of notifications. */
  aggregationSettings?: AggregationSettings;
}

/** A container that holds all of the necessary properties to configure the aggregation of notifications. */
export interface AggregationSettings {
  /** The supported time period to use to perform marketplace-ASIN level aggregation. */
  aggregationTimePeriod: AggregationTimePeriod;
}

/** The supported aggregation time periods. For example, if FiveMinutes is the value chosen, and 50 price updates occur for an ASIN within 5 minutes, Amazon will send only two notifications; one for the first event, and then a subsequent notification 5 minutes later with the final end state of the data. The 48 interim events will be dropped. */
export enum AggregationTimePeriod {
  FiveMinutes = "FiveMinutes",
  TenMinutes = "TenMinutes",
}

/** An event filter to customize your subscription to send notifications for only the specified `orderChangeType`. */
export interface OrderChangeTypeFilter {
  /** A list of order change types to subscribe to (for example: `BuyerRequestedChange`). To receive notifications of all change types, do not provide this list. */
  orderChangeTypes?: OrderChangeTypes;
}

/** A list of order change types to subscribe to (for example: `BuyerRequestedChange`). To receive notifications of all change types, do not provide this list. */
export type OrderChangeTypes = OrderChangeTypeEnum[];

/** The supported order change type of ORDER_CHANGE notification. */
export enum OrderChangeTypeEnum {
  OrderStatusChange = "OrderStatusChange",
  BuyerRequestedChange = "BuyerRequestedChange",
}

/** Information about the subscription. */
export interface Subscription {
  /** The subscription identifier generated when the subscription is created. */
  subscriptionId: string;
  /** The version of the payload object to be used in the notification. */
  payloadVersion: string;
  /** The identifier for the destination where notifications will be delivered. */
  destinationId: string;
  /**
   * Additional information passed to the subscription to control the processing of notifications. For example, you can use an `eventFilter` to customize your subscription to send notifications for only the specified `marketplaceId`s, or select the aggregation time period at which to send notifications (for example: limit to one notification every five minutes for high frequency notifications). The specific features available vary depending on the `notificationType`.
   *
   * This feature is currently only supported by the `ANY_OFFER_CHANGED` and `ORDER_CHANGE` `notificationType`s.
   */
  processingDirective?: ProcessingDirective;
}

/** The response schema for the `createSubscription` operation. */
export interface CreateSubscriptionResponse {
  /** The payload for the `createSubscription` operation. */
  payload?: Subscription;
  /** One or more unexpected errors occurred during the `createSubscription` operation. */
  errors?: ErrorList;
}

/** The request schema for the `createSubscription` operation. */
export interface CreateSubscriptionRequest {
  /** The version of the payload object to be used in the notification. */
  payloadVersion: string;
  /** The identifier for the destination where notifications will be delivered. */
  destinationId: string;
  /**
   * Additional information passed to the subscription to control the processing of notifications. For example, you can use an `eventFilter` to customize your subscription to send notifications for only the specified `marketplaceId`s, or select the aggregation time period at which to send notifications (for example: limit to one notification every five minutes for high frequency notifications). The specific features available vary depending on the `notificationType`.
   *
   * This feature is currently only supported by the `ANY_OFFER_CHANGED` and `ORDER_CHANGE` `notificationType`s.
   */
  processingDirective?: ProcessingDirective;
}

/** The response schema for the `getSubscriptionById` operation. */
export interface GetSubscriptionByIdResponse {
  /** The payload for the `getSubscriptionById` operation. */
  payload?: Subscription;
  /** An unexpected condition occurred during the `getSubscriptionById` operation. */
  errors?: ErrorList;
}

/** The response schema for the `getSubscription` operation. */
export interface GetSubscriptionResponse {
  /** The payload for the `getSubscription` operation. */
  payload?: Subscription;
  /** One or more unexpected errors occurred during the `getSubscription` operation. */
  errors?: ErrorList;
}

/** The response schema for the `deleteSubscriptionById` operation. */
export interface DeleteSubscriptionByIdResponse {
  /** An unexpected condition occurred during the `deleteSubscriptionById` operation. */
  errors?: ErrorList;
}

/** A list of destinations. */
export type DestinationList = Destination[];

/** Information about the destination created when you call the `createDestination` operation. */
export interface Destination {
  /**
   * The developer-defined name for this destination.
   * @maxLength 256
   */
  name: string;
  /** The destination identifier generated when you created the destination. */
  destinationId: string;
  /** The resource that will receive notifications associated with this destination. */
  resource: DestinationResource;
}

/** The destination resource types. */
export interface DestinationResource {
  /** An Amazon Simple Queue Service (SQS) queue destination. */
  sqs?: SqsResource;
  /** An Amazon EventBridge destination. */
  eventBridge?: EventBridgeResource;
}

/** The information required to create a destination resource. Applications should use one resource type (sqs or eventBridge) per destination. */
export interface DestinationResourceSpecification {
  /** The information required to create an Amazon Simple Queue Service (SQS) queue destination. */
  sqs?: SqsResource;
  /** The information required to create an Amazon EventBridge destination. */
  eventBridge?: EventBridgeResourceSpecification;
}

/** The information required to create an Amazon Simple Queue Service (Amazon SQS) queue destination. */
export interface SqsResource {
  /**
   * The Amazon Resource Name (ARN) associated with the SQS queue.
   * @maxLength 1000
   * @pattern ^arn:aws:sqs:\S+:\S+:\S+
   */
  arn: string;
}

/** The information required to create an Amazon EventBridge destination. */
export interface EventBridgeResourceSpecification {
  /** The AWS region in which you will be receiving the notifications. */
  region: string;
  /** The identifier for the AWS account that is responsible for charges related to receiving notifications. */
  accountId: string;
}

/** The Amazon EventBridge destination. */
export interface EventBridgeResource {
  /**
   * The name of the partner event source associated with the destination.
   * @maxLength 256
   */
  name: string;
  /** The AWS region in which you receive the notifications. For AWS regions that are supported in Amazon EventBridge, refer to [Amazon EventBridge endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/ev.html). */
  region: string;
  /** The identifier for the AWS account that is responsible for charges related to receiving notifications. */
  accountId: string;
}

/** The request schema for the `createDestination` operation. */
export interface CreateDestinationRequest {
  /** The information required to create a destination resource. Applications should use one resource type (sqs or eventBridge) per destination. */
  resourceSpecification: DestinationResourceSpecification;
  /** A developer-defined name to help identify this destination. */
  name: string;
}

/** The response schema for the createDestination operation. */
export interface CreateDestinationResponse {
  /** The payload for the `createDestination` operation. */
  payload?: Destination;
  /** One or more unexpected errors occurred during the `createDestination` operation. */
  errors?: ErrorList;
}

/** The response schema for the `getDestination` operation. */
export interface GetDestinationResponse {
  /** The payload for the `getDestination` operation. */
  payload?: Destination;
  /** One or more unexpected errors occurred during the `getDestination` operation. */
  errors?: ErrorList;
}

/** The response schema for the `getDestinations` operation. */
export interface GetDestinationsResponse {
  /** The payload for the `getDestinations` operation. */
  payload?: DestinationList;
  /** One or more unexpected errors occurred during the `getDestinations` operation. */
  errors?: ErrorList;
}

/** The response schema for the `deleteDestination` operation. */
export interface DeleteDestinationResponse {
  /** One or more unexpected errors occurred during the `deleteDestination` operation. */
  errors?: ErrorList;
}

/** A list of error responses returned when a request is unsuccessful. */
export type ErrorList = Error[];

/** An error response returned when the request is unsuccessful. */
export interface Error {
  /** An error code that identifies the type of error that occurred. */
  code: string;
  /** A message that describes the error condition. */
  message: string;
  /** Additional details that can help the caller understand or fix the issue. */
  details?: string;
}
