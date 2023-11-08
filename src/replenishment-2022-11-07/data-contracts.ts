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

/** The request body for the `getSellingPartnerMetrics` operation. */
export interface GetSellingPartnerMetricsRequest {
  /** The time period used to group data in the response. Note that this is only valid for the performance time period type. */
  aggregationFrequency?: AggregationFrequency;
  /** A time interval used to compute metrics. */
  timeInterval: TimeInterval;
  /**
   * The list of metrics requested. If no metric value is provided, data for all of the metrics will be returned.
   * @minItems 1
   * @uniqueItems true
   */
  metrics?: Metric[];
  /** The time period type that determines whether the metrics requested are backward-looking (performance) or forward-looking (forecast). */
  timePeriodType: TimePeriodType;
  /** The marketplace identifier. The supported marketplaces for both sellers and vendors are US, CA, ES, UK, FR, IT, IN, DE and JP. The supported marketplaces for vendors only are BR, AU, MX, AE and NL.  Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) to find the identifier for the marketplace. */
  marketplaceId: MarketplaceId;
  /** The list of replenishment program types for which to return metrics. */
  programTypes: ProgramTypes;
}

/** The request body for the `listOfferMetrics` operation. */
export interface ListOfferMetricsRequest {
  /** Use these parameters to paginate through the response. */
  pagination: ListOfferMetricsRequestPagination;
  /** Use these parameters to sort the response. */
  sort?: ListOfferMetricsRequestSort;
  /** Use these parameters to filter results. Any result must match all provided parameters. For any parameter that is an array, the result must match at least one element in the provided array. */
  filters: ListOfferMetricsRequestFilters;
}

/** The request body for the `listOffers` operation. */
export interface ListOffersRequest {
  /** Use these parameters to paginate through the response. */
  pagination: ListOffersRequestPagination;
  /** Use these parameters to filter results. Any result must match all provided parameters. For any parameter that is an array, the result must match at least one element in the provided array. */
  filters: ListOffersRequestFilters;
  /** Use these parameters to sort the response. */
  sort?: ListOffersRequestSort;
}

/** The current eligibility status of an offer. */
export enum EligibilityStatus {
  ELIGIBLE = "ELIGIBLE",
  INELIGIBLE = "INELIGIBLE",
  SUSPENDED = "SUSPENDED",
  REPLENISHMENT_ONLY_ORDERING = "REPLENISHMENT_ONLY_ORDERING",
}

/** Offer preferences that you can include in the result filter criteria. */
export interface Preference {
  /**
   * Filters the results to only include offers with the auto-enrollment preference specified.
   * @minItems 1
   * @uniqueItems true
   */
  autoEnrollment?: AutoEnrollmentPreference[];
}

/** Offer promotions to include in the result filter criteria. */
export interface Promotion {
  /** A base discount set by the selling partner on the offer. */
  sellingPartnerFundedBaseDiscount?: DiscountFunding;
  /** A tiered discount set by the selling partner on the offer. */
  sellingPartnerFundedTieredDiscount?: DiscountFunding;
  /** A base discount set by Amazon on the offer. */
  amazonFundedBaseDiscount?: DiscountFunding;
  /** A tiered discount set by Amazon on the offer. */
  amazonFundedTieredDiscount?: DiscountFunding;
}

/** The discount funding on the offer. */
export interface DiscountFunding {
  /**
   * Filters the results to only include offers with the percentage specified.
   * @maxItems 10
   * @minItems 1
   * @uniqueItems true
   */
  percentage?: number[];
}

/** The offer program configuration contains a set of program properties for an offer. */
export interface OfferProgramConfiguration {
  /** An object which contains the preferences applied to the offer. */
  preferences?: OfferProgramConfigurationPreferences;
  /** An object which contains the promotions applied to the offer. */
  promotions?: OfferProgramConfigurationPromotions;
  /** Determines whether the offer was automatically or manually enrolled in the program. This property is only supported for sellers and not vendors. */
  enrollmentMethod?: EnrollmentMethod;
}

/** An object which contains the preferences applied to the offer. */
export interface OfferProgramConfigurationPreferences {
  /** The auto-enrollment preference indicates whether the offer is opted-in to or opted-out of Amazon's auto-enrollment feature. */
  autoEnrollment?: AutoEnrollmentPreference;
}

/** An object which represents all promotions applied to an offer. */
export interface OfferProgramConfigurationPromotions {
  /** A base discount set by the selling partner on the offer. */
  sellingPartnerFundedBaseDiscount?: OfferProgramConfigurationPromotionsDiscountFunding;
  /** A tiered discount set by the selling partner on the offer. */
  sellingPartnerFundedTieredDiscount?: OfferProgramConfigurationPromotionsDiscountFunding;
  /** A base discount set by Amazon on the offer. */
  amazonFundedBaseDiscount?: OfferProgramConfigurationPromotionsDiscountFunding;
  /** A tiered discount set by Amazon on the offer. */
  amazonFundedTieredDiscount?: OfferProgramConfigurationPromotionsDiscountFunding;
}

/** A promotional percentage discount applied to the offer. */
export interface OfferProgramConfigurationPromotionsDiscountFunding {
  /**
   * The percentage discount on the offer.
   * @format int64
   * @min 0
   * @max 100
   */
  percentage?: number;
}

/** Use these parameters to paginate through the response. */
export interface ListOfferMetricsRequestPagination {
  /**
   * The maximum number of results to return in the response.
   * @format int64
   * @min 1
   * @max 500
   */
  limit: number;
  /**
   * The offset from which to retrieve the number of results specified by the `limit` value. The first result is at offset 0.
   * @format int64
   * @min 0
   * @max 9000
   */
  offset: number;
}

/** The auto-enrollment preference indicates whether the offer is opted-in to or opted-out of Amazon's auto-enrollment feature. */
export enum AutoEnrollmentPreference {
  OPTED_IN = "OPTED_IN",
  OPTED_OUT = "OPTED_OUT",
}

/**
 * A list of replenishment program types.
 * @minItems 1
 * @uniqueItems true
 */
export type ProgramTypes = ProgramType[];

/** The replenishment program type. */
export enum ProgramType {
  SUBSCRIBE_AND_SAVE = "SUBSCRIBE_AND_SAVE",
}

/** The enrollment method used to enroll the offer into the program. */
export enum EnrollmentMethod {
  MANUAL = "MANUAL",
  AUTOMATIC = "AUTOMATIC",
}

/** Use these parameters to filter results. Any result must match all provided parameters. For any parameter that is an array, the result must match at least one element in the provided array. */
export interface ListOfferMetricsRequestFilters {
  /** The time period used to group data in the response. Note that this is only valid for the performance time period type. */
  aggregationFrequency?: AggregationFrequency;
  /** A time interval used to compute metrics. */
  timeInterval: TimeInterval;
  /** The time period type that determines whether the metrics requested are backward-looking (performance) or forward-looking (forecast). */
  timePeriodType: TimePeriodType;
  /** The marketplace identifier. The supported marketplaces for both sellers and vendors are US, CA, ES, UK, FR, IT, IN, DE and JP. The supported marketplaces for vendors only are BR, AU, MX, AE and NL.  Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) to find the identifier for the marketplace. */
  marketplaceId: MarketplaceId;
  /** A list of replenishment program types. */
  programTypes: ProgramTypes;
  /**
   * A list of Amazon Standard Identification Numbers (ASINs).
   * @maxItems 20
   * @minItems 1
   * @uniqueItems true
   */
  asins?: string[];
}

/** Use these parameters to sort the response. */
export interface ListOfferMetricsRequestSort {
  /** The sort order. */
  order: SortOrder;
  /** The attribute to use to sort the results. */
  key: ListOfferMetricsSortKey;
}

/** The attribute to use to sort the results. */
export enum ListOfferMetricsSortKey {
  SHIPPED_SUBSCRIPTION_UNITS = "SHIPPED_SUBSCRIPTION_UNITS",
  TOTAL_SUBSCRIPTIONS_REVENUE = "TOTAL_SUBSCRIPTIONS_REVENUE",
  ACTIVE_SUBSCRIPTIONS = "ACTIVE_SUBSCRIPTIONS",
  NEXT90DAYSSHIPPEDSUBSCRIPTIONUNITS = "NEXT_90DAYS_SHIPPED_SUBSCRIPTION_UNITS",
  NEXT60DAYSSHIPPEDSUBSCRIPTIONUNITS = "NEXT_60DAYS_SHIPPED_SUBSCRIPTION_UNITS",
  NEXT30DAYSSHIPPEDSUBSCRIPTIONUNITS = "NEXT_30DAYS_SHIPPED_SUBSCRIPTION_UNITS",
  NEXT90DAYSTOTALSUBSCRIPTIONSREVENUE = "NEXT_90DAYS_TOTAL_SUBSCRIPTIONS_REVENUE",
  NEXT60DAYSTOTALSUBSCRIPTIONSREVENUE = "NEXT_60DAYS_TOTAL_SUBSCRIPTIONS_REVENUE",
  NEXT30DAYSTOTALSUBSCRIPTIONSREVENUE = "NEXT_30DAYS_TOTAL_SUBSCRIPTIONS_REVENUE",
}

/** Use these parameters to paginate through the response. */
export interface ListOffersRequestPagination {
  /**
   * The maximum number of results to return in the response.
   * @format int64
   * @min 1
   * @max 100
   */
  limit: number;
  /**
   * The offset from which to retrieve the number of results specified by the `limit` value. The first result is at offset 0.
   * @format int64
   * @min 0
   * @max 9000
   */
  offset: number;
}

/** Use these parameters to filter results. Any result must match all of the provided parameters. For any parameter that is an array, the result must match at least one element in the provided array. */
export interface ListOffersRequestFilters {
  /** The marketplace identifier. The supported marketplaces for both sellers and vendors are US, CA, ES, UK, FR, IT, IN, DE and JP. The supported marketplaces for vendors only are BR, AU, MX, AE and NL.  Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) to find the identifier for the marketplace. */
  marketplaceId: MarketplaceId;
  /**
   * A list of SKUs to filter. This filter is only supported for sellers and not for vendors.
   * @maxItems 20
   * @minItems 1
   * @uniqueItems true
   */
  skus?: string[];
  /**
   * A list of Amazon Standard Identification Numbers (ASINs).
   * @maxItems 20
   * @minItems 1
   * @uniqueItems true
   */
  asins?: string[];
  /**
   * A list of eligibilities associated with an offer.
   * @minItems 1
   * @uniqueItems true
   */
  eligibilities?: EligibilityStatus[];
  /** Offer preferences to include in the result filter criteria. */
  preferences?: Preference;
  /** Offer promotions to include in the result filter criteria. */
  promotions?: Promotion;
  /** A list of replenishment program types. */
  programTypes: ProgramTypes;
}

/** Use these parameters to sort the response. */
export interface ListOffersRequestSort {
  /** The sort order. */
  order: SortOrder;
  /** The attribute to use to sort the results. */
  key: ListOffersSortKey;
}

/** The attribute to use to sort the results. */
export enum ListOffersSortKey {
  ASIN = "ASIN",
  SELLING_PARTNER_FUNDED_BASE_DISCOUNT_PERCENTAGE = "SELLING_PARTNER_FUNDED_BASE_DISCOUNT_PERCENTAGE",
  SELLING_PARTNER_FUNDED_TIERED_DISCOUNT_PERCENTAGE = "SELLING_PARTNER_FUNDED_TIERED_DISCOUNT_PERCENTAGE",
  AMAZON_FUNDED_BASE_DISCOUNT_PERCENTAGE = "AMAZON_FUNDED_BASE_DISCOUNT_PERCENTAGE",
  AMAZON_FUNDED_TIERED_DISCOUNT_PERCENTAGE = "AMAZON_FUNDED_TIERED_DISCOUNT_PERCENTAGE",
}

/** The marketplace identifier. The supported marketplaces for both sellers and vendors are US, CA, ES, UK, FR, IT, IN, DE and JP. The supported marketplaces for vendors only are BR, AU, MX, AE and NL. Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) to find the identifier for the marketplace. */
export type MarketplaceId = string;

/** The time period used to group data in the response. Note that this is only valid for the performance time period type. */
export enum AggregationFrequency {
  WEEK = "WEEK",
  MONTH = "MONTH",
  QUARTER = "QUARTER",
  YEAR = "YEAR",
}

/**
 * A date-time interval in ISO 8601 format which is used to compute metrics. Only the date is required, but you must pass the complete date and time value. For example, November 11, 2022 should be passed as "2022-11-07T00:00:00Z". Note that only data for the trailing 2 years is supported.
 *
 *  **Note**: The `listOfferMetrics` operation only supports a time interval which covers a single unit of the aggregation frequency. For example, for a MONTH aggregation frequency, the duration of the interval between the startDate and endDate can not be more than 1 month.
 */
export interface TimeInterval {
  /**
   * When this object is used as a request parameter, the specified startDate is adjusted based on the aggregation frequency.
   *
   * * For WEEK the metric is computed from the first day of the week (that is, Sunday based on ISO 8601) that contains the startDate.
   * * For MONTH the metric is computed from the first day of the month that contains the startDate.
   * * For QUARTER the metric is computed from the first day of the quarter that contains the startDate.
   * * For YEAR the metric is computed from the first day of the year that contains the startDate.
   * @format date-time
   */
  startDate: string;
  /**
   * When this object is used as a request parameter, the specified endDate is adjusted based on the aggregation frequency.
   *
   * * For WEEK the metric is computed up to the last day of the week (that is, Sunday based on ISO 8601) that contains the endDate.
   * * For MONTH, the metric is computed up to the last day that contains the endDate.
   * * For QUARTER the metric is computed up to the last day of the quarter that contains the endDate.
   * * For YEAR the metric is computed up to the last day of the year that contains the endDate.
   *  Note: The end date may be adjusted to a lower value based on the data available in our system.
   * @format date-time
   */
  endDate: string;
}

/** The metric name and description. */
export enum Metric {
  SHIPPED_SUBSCRIPTION_UNITS = "SHIPPED_SUBSCRIPTION_UNITS",
  TOTAL_SUBSCRIPTIONS_REVENUE = "TOTAL_SUBSCRIPTIONS_REVENUE",
  ACTIVE_SUBSCRIPTIONS = "ACTIVE_SUBSCRIPTIONS",
  NOT_DELIVERED_DUE_TO_OOS = "NOT_DELIVERED_DUE_TO_OOS",
  SUBSCRIBER_NON_SUBSCRIBER_AVERAGE_REVENUE = "SUBSCRIBER_NON_SUBSCRIBER_AVERAGE_REVENUE",
}

/** The sort order. */
export enum SortOrder {
  ASC = "ASC",
  DESC = "DESC",
}

/** The time period type that determines whether the metrics requested are backward-looking (performance) or forward-looking (forecast). */
export enum TimePeriodType {
  PERFORMANCE = "PERFORMANCE",
  FORECAST = "FORECAST",
}

/** The response schema for the `getSellingPartnerMetrics` operation. */
export interface GetSellingPartnerMetricsResponse {
  /** A list of metrics data for the selling partner. */
  metrics?: GetSellingPartnerMetricsResponseMetric[];
}

/** An object which contains metric data for a selling partner. */
export interface GetSellingPartnerMetricsResponseMetric {
  /**
   * The percentage of items that were not shipped out of the total shipped units over a period of time due to being out of stock. Applicable only for the PERFORMANCE timePeriodType.
   * @format double
   * @min 0
   * @max 100
   */
  notDeliveredDueToOOS?: number;
  /**
   * The revenue generated from subscriptions over a period of time. Applicable for both the PERFORMANCE and FORECAST timePeriodType.
   * @format double
   * @min 0
   */
  totalSubscriptionsRevenue?: number;
  /**
   * The number of units shipped to the subscribers over a period of time. Applicable for both the PERFORMANCE and FORECAST timePeriodType.
   * @format int64
   * @min 0
   */
  shippedSubscriptionUnits?: number;
  /**
   * The number of active subscriptions present at the end of the period. Applicable only for the PERFORMANCE timePeriodType.
   * @format int64
   * @min 0
   */
  activeSubscriptions?: number;
  /**
   * The average revenue per subscriber of the program over a period of past 12 months for sellers and 6 months for vendors. Applicable only for the PERFORMANCE timePeriodType.
   * @format double
   * @min 0
   */
  subscriberAverageRevenue?: number;
  /**
   * The average revenue per non-subscriber of the program over a period of past 12 months for sellers and 6 months for vendors. Applicable only for the PERFORMANCE timePeriodType.
   * @format double
   * @min 0
   */
  nonSubscriberAverageRevenue?: number;
  /** A time interval used to compute metrics. */
  timeInterval?: TimeInterval;
  /** The currency code in ISO 4217 format. */
  currencyCode?: string;
}

/** The response schema for the `listOfferMetrics` operation. */
export interface ListOfferMetricsResponse {
  /** A list of offers and associated metrics. */
  offers?: ListOfferMetricsResponseOffer[];
  /** Use these parameters to paginate through the response. */
  pagination?: PaginationResponse;
}

/** The response schema for the `listOffers` operation. */
export interface ListOffersResponse {
  /** A list of offers. */
  offers?: ListOffersResponseOffer[];
  /** Use these parameters to paginate through the response. */
  pagination?: PaginationResponse;
}

/** An object which contains details about an offer. */
export interface ListOffersResponseOffer {
  /** The SKU. This property is only supported for sellers and not for vendors. */
  sku?: string;
  /** The Amazon Standard Identification Number (ASIN). */
  asin?: string;
  /** The marketplace identifier. The supported marketplaces for both sellers and vendors are US, CA, ES, UK, FR, IT, IN, DE and JP. The supported marketplaces for vendors only are BR, AU, MX, AE and NL.  Refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids) to find the identifier for the marketplace. */
  marketplaceId?: MarketplaceId;
  /** The offer eligibility status. */
  eligibility?: EligibilityStatus;
  /** The offer program configuration contains a set of program properties for an offer. */
  offerProgramConfiguration?: OfferProgramConfiguration;
  /** The replenishment program for the offer. */
  programType?: ProgramType;
  /** A list of vendor codes associated with the offer. */
  vendorCodes?: string[];
}

/** Use these parameters to paginate through the response. */
export interface PaginationResponse {
  /**
   * Total number of results matching the given filter criteria.
   * @format int64
   * @min 0
   */
  totalResults?: number;
}

/** An object which contains offer metrics. */
export interface ListOfferMetricsResponseOffer {
  /** The Amazon Standard Identification Number (ASIN). */
  asin?: string;
  /**
   * The percentage of items that were not shipped out of the total shipped units over a period of time due to being out of stock. Applicable only for the PERFORMANCE timePeriodType.
   * @format double
   * @min 0
   * @max 100
   */
  notDeliveredDueToOOS?: number;
  /**
   * The revenue generated from subscriptions over a period of time. Applicable only for the PERFORMANCE timePeriodType.
   * @format double
   * @min 0
   */
  totalSubscriptionsRevenue?: number;
  /**
   * The number of units shipped to the subscribers over a period of time. Applicable only for the PERFORMANCE timePeriodType.
   * @format int64
   * @min 0
   */
  shippedSubscriptionUnits?: number;
  /**
   * The number of active subscriptions present at the end of the period. Applicable only for the PERFORMANCE timePeriodType.
   * @format int64
   * @min 0
   */
  activeSubscriptions?: number;
  /**
   * The percentage of total program revenue out of total product revenue. Applicable only for the PERFORMANCE timePeriodType.
   * @format double
   * @min 0
   * @max 100
   */
  revenuePenetration?: number;
  /**
   * The forecasted total subscription revenue for the next 30 days. Applicable only for the FORECAST timePeriodType.
   * @format double
   * @min 0
   */
  next30DayTotalSubscriptionsRevenue?: number;
  /**
   * The forecasted total subscription revenue for the next 60 days. Applicable only for the FORECAST timePeriodType.
   * @format double
   * @min 0
   */
  next60DayTotalSubscriptionsRevenue?: number;
  /**
   * The forecasted total subscription revenue for the next 90 days. Applicable only for the FORECAST timePeriodType.
   * @format double
   * @min 0
   */
  next90DayTotalSubscriptionsRevenue?: number;
  /**
   * The forecasted shipped subscription units for the next 30 days. Applicable only for the FORECAST timePeriodType.
   * @format int64
   * @min 0
   */
  next30DayShippedSubscriptionUnits?: number;
  /**
   * The forecasted shipped subscription units for the next 60 days. Applicable only for the FORECAST timePeriodType.
   * @format int64
   * @min 0
   */
  next60DayShippedSubscriptionUnits?: number;
  /**
   * The forecasted shipped subscription units for the next 90 days. Applicable only for the FORECAST timePeriodType.
   * @format int64
   * @min 0
   */
  next90DayShippedSubscriptionUnits?: number;
  /** A time interval used to compute metrics. */
  timeInterval?: TimeInterval;
  /** The currency code in ISO 4217 format. */
  currencyCode?: string;
}

/** A list of error responses returned when a request is unsuccessful. */
export interface ErrorList {
  errors: Error[];
}

/** Error response returned when the request is unsuccessful. */
export interface Error {
  /** An error code that identifies the type of error that occurred. */
  code: string;
  /** A message that describes the error condition. */
  message: string;
  /** Additional details that can help the caller understand or fix the issue. */
  details?: string;
}
