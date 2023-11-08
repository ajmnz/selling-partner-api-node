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

/** The response schema for the getOrderMetrics operation. */
export interface GetOrderMetricsResponse {
  /** The payload for the getOrderMetrics operation. */
  payload?: OrderMetricsList;
  /** Encountered errors for the getOrderMetrics operation. */
  errors?: ErrorList;
}

/** A set of order metrics, each scoped to a particular time interval. */
export type OrderMetricsList = OrderMetricsInterval[];

/** Contains order metrics. */
export interface OrderMetricsInterval {
  /** The interval of time based on requested granularity (ex. Hour, Day, etc.) If this is the first or the last interval from the list, it might contain incomplete data if the requested interval doesn't align with the requested granularity (ex. request interval 2018-09-01T02:00:00Z--2018-09-04T19:00:00Z and granularity day will result in Sept 1st UTC day and Sept 4th UTC days having partial data). */
  interval: string;
  /** The number of units in orders based on the specified filters. */
  unitCount: number;
  /** The number of order items based on the specified filters. */
  orderItemCount: number;
  /** The number of orders based on the specified filters. */
  orderCount: number;
  /** The average price for an item based on the specified filters. Formula is totalSales/unitCount. */
  averageUnitPrice: Money;
  /** The total ordered product sales for all orders based on the specified filters. */
  totalSales: Money;
}

/** Error response returned when the request is unsuccessful. */
export interface Error {
  /** An error code that identifies the type of error that occured. */
  code: string;
  /** A message that describes the error condition in a human-readable form. */
  message: string;
  /** Additional details that can help the caller understand or fix the issue. */
  details?: string;
}

/** A list of error responses returned when a request is unsuccessful. */
export type ErrorList = Error[];

/** The currency type and the amount. */
export interface Money {
  /** Three-digit currency code. In ISO 4217 format. */
  currencyCode: string;
  /** The currency amount. */
  amount: Decimal;
}

/** A decimal number with no loss of precision. Useful when precision loss is unnaceptable, as with currencies. Follows RFC7159 for number representation. */
export type Decimal = string;
