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

/** Error response returned when the request is unsuccessful. */
export interface Error {
  /** An error code that identifies the type of error that occurred. */
  code: string;
  /** A message that describes the error condition. */
  message: string;
  /** Additional details that can help the caller understand or fix the issue. */
  details?: string;
}

/** A list of error responses returned when a request is unsuccessful. */
export type ErrorList = Error[];

/** A physical address. */
export interface Address {
  /** The name of the person, business or institution at the address. */
  name: string;
  /** The first line of the address. */
  addressLine1: string;
  /** Additional address information, if required. */
  addressLine2?: string;
  /** Additional address information, if required. */
  addressLine3?: string;
  /** The city where the person, business, or institution is located. */
  city?: string;
  /** The district or county where the person, business, or institution is located. */
  districtOrCounty?: string;
  /** The state or region where the person, business or institution is located. */
  stateOrRegion: string;
  /** The postal code of the address. */
  postalCode?: string;
  /** The two digit country code. In ISO 3166-1 alpha-2 format. */
  countryCode: string;
  /** The phone number of the person, business, or institution located at the address. */
  phone?: string;
}

/** The COD (Cash On Delivery) charges that you associate with a COD fulfillment order. */
export interface CODSettings {
  /** When true, this fulfillment order requires a COD (Cash On Delivery) payment. */
  isCodRequired: boolean;
  /** The amount of the COD charge to be collected from the recipient for a COD order. */
  codCharge?: Money;
  /** The amount of the tax on the COD charge to be collected from the recipient for a COD order. */
  codChargeTax?: Money;
  /** The amount of the tax on the COD charge to be collected from the recipient for a COD order. */
  shippingCharge?: Money;
  /** The amount of the tax on the shipping charge to be collected from the recipient for a COD order. */
  shippingChargeTax?: Money;
}

/** Item information for creating a fulfillment order. */
export interface CreateFulfillmentOrderItem {
  /**
   * The seller SKU of the item.
   * @maxLength 50
   */
  sellerSku: string;
  /**
   * A fulfillment order item identifier that the seller creates to track fulfillment order items. Used to disambiguate multiple fulfillment items that have the same SellerSKU. For example, the seller might assign different SellerFulfillmentOrderItemId values to two items in a fulfillment order that share the same SellerSKU but have different GiftMessage values.
   * @maxLength 50
   */
  sellerFulfillmentOrderItemId: string;
  /** The item quantity. */
  quantity: Quantity;
  /**
   * A message to the gift recipient, if applicable.
   * @maxLength 512
   */
  giftMessage?: string;
  /**
   * Item-specific text that displays in recipient-facing materials such as the outbound shipment packing slip.
   * @maxLength 250
   */
  displayableComment?: string;
  /** Amazon's fulfillment network SKU of the item. */
  fulfillmentNetworkSku?: string;
  /** The monetary value assigned by the seller to this item. */
  perUnitDeclaredValue?: Money;
  /** The amount to be collected from the recipient for this item in a COD (Cash On Delivery) order. */
  perUnitPrice?: Money;
  /** The tax on the amount to be collected from the recipient for this item in a COD (Cash On Delivery) order. */
  perUnitTax?: Money;
}

/** An array of item information for creating a fulfillment order. */
export type CreateFulfillmentOrderItemList = CreateFulfillmentOrderItem[];

/** The FulfillmentPolicy value specified when you submitted the createFulfillmentOrder operation. */
export enum FulfillmentPolicy {
  FillOrKill = "FillOrKill",
  FillAll = "FillAll",
  FillAllAvailable = "FillAllAvailable",
}

/** The current status of the fulfillment order. */
export enum FulfillmentOrderStatus {
  New = "New",
  Received = "Received",
  Planning = "Planning",
  Processing = "Processing",
  Cancelled = "Cancelled",
  Complete = "Complete",
  CompletePartialled = "CompletePartialled",
  Unfulfillable = "Unfulfillable",
  Invalid = "Invalid",
}

/** The request body schema for the createFulfillmentOrder operation. */
export interface CreateFulfillmentOrderRequest {
  /** The marketplace the fulfillment order is placed against. */
  marketplaceId?: string;
  /**
   * A fulfillment order identifier that the seller creates to track their fulfillment order. The SellerFulfillmentOrderId must be unique for each fulfillment order that a seller creates. If the seller's system already creates unique order identifiers, then these might be good values for them to use.
   * @maxLength 40
   */
  sellerFulfillmentOrderId: string;
  /**
   * A fulfillment order identifier that the seller creates. This value displays as the order identifier in recipient-facing materials such as the outbound shipment packing slip. The value of DisplayableOrderId should match the order identifier that the seller provides to the recipient. The seller can use the SellerFulfillmentOrderId for this value or they can specify an alternate value if they want the recipient to reference an alternate order identifier.
   *
   * The value must be an alpha-numeric or ISO 8859-1 compliant string from one to 40 characters in length. Cannot contain two spaces in a row. Leading and trailing white space is removed.
   * @maxLength 40
   */
  displayableOrderId: string;
  /** The date and time of the fulfillment order. Displays as the order date in recipient-facing materials such as the outbound shipment packing slip. */
  displayableOrderDate: Timestamp;
  /**
   * Order-specific text that appears in recipient-facing materials such as the outbound shipment packing slip.
   * @maxLength 1000
   */
  displayableOrderComment: string;
  /** The shipping method for the fulfillment order. */
  shippingSpeedCategory: ShippingSpeedCategory;
  /** The time range within which a Scheduled Delivery fulfillment order should be delivered. */
  deliveryWindow?: DeliveryWindow;
  /** The destination address for the fulfillment order. */
  destinationAddress: Address;
  /** Specifies whether the fulfillment order should ship now or have an order hold put on it. */
  fulfillmentAction?: FulfillmentAction;
  /** The FulfillmentPolicy value specified when you submitted the createFulfillmentOrder operation. */
  fulfillmentPolicy?: FulfillmentPolicy;
  /** The COD (Cash On Delivery) charges that you associate with a COD fulfillment order. */
  codSettings?: CODSettings;
  /** The two-character country code for the country from which the fulfillment order ships. Must be in ISO 3166-1 alpha-2 format. */
  shipFromCountryCode?: string;
  /** A list of email addresses that the seller provides that are used by Amazon to send ship-complete notifications to recipients on behalf of the seller. */
  notificationEmails?: NotificationEmailList;
  /** A list of features and their fulfillment policies to apply to the order. */
  featureConstraints?: FeatureSettings[];
  /** A list of items to include in the fulfillment order preview, including quantity. */
  items: CreateFulfillmentOrderItemList;
}

/** The createFulfillmentReturn operation creates a fulfillment return for items that were fulfilled using the createFulfillmentOrder operation. For calls to createFulfillmentReturn, you must include ReturnReasonCode values returned by a previous call to the listReturnReasonCodes operation. */
export interface CreateFulfillmentReturnRequest {
  /** An array of items to be returned. */
  items: CreateReturnItemList;
}

export interface CreateFulfillmentReturnResult {
  /** An array of items that Amazon accepted for return. Returns empty if no items were accepted for return. */
  returnItems?: ReturnItemList;
  /** An array of invalid return item information. */
  invalidReturnItems?: InvalidReturnItemList;
  /** An array of return authorization information. */
  returnAuthorizations?: ReturnAuthorizationList;
}

/** The response schema for the createFulfillmentReturn operation. */
export interface CreateFulfillmentReturnResponse {
  /** The payload for the createFulfillmentReturn operation. */
  payload?: CreateFulfillmentReturnResult;
  /** One or more unexpected errors occurred during the createFulfillmentReturn operation. */
  errors?: ErrorList;
}

/** An item that Amazon accepted for return. */
export interface CreateReturnItem {
  /**
   * An identifier assigned by the seller to the return item.
   * @maxLength 80
   */
  sellerReturnItemId: string;
  /** The identifier assigned to the item by the seller when the fulfillment order was created. */
  sellerFulfillmentOrderItemId: string;
  /** The identifier for the shipment that is associated with the return item. */
  amazonShipmentId: string;
  /** The return reason code assigned to the return item by the seller. */
  returnReasonCode: string;
  /**
   * An optional comment about the return item.
   * @maxLength 1000
   */
  returnComment?: string;
}

/** An array of items to be returned. */
export type CreateReturnItemList = CreateReturnItem[];

/** An amount of money, including units in the form of currency. */
export interface Money {
  /** Three digit currency code in ISO 4217 format. */
  currencyCode: string;
  /** A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. */
  value: Decimal;
}

/** A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. */
export type Decimal = string;

/** The time range within which a Scheduled Delivery fulfillment order should be delivered. */
export interface DeliveryWindow {
  /** The date and time of the start of the Scheduled Delivery window, in ISO 8601 date time format. */
  startDate: Timestamp;
  /** The date and time of the end of the Scheduled Delivery window, in ISO 8601 date time format. */
  endDate: Timestamp;
}

/** An array of delivery windows. */
export type DeliveryWindowList = DeliveryWindow[];

/** Fee type and cost. */
export interface Fee {
  /** The type of fee. */
  name:
    | "FBAPerUnitFulfillmentFee"
    | "FBAPerOrderFulfillmentFee"
    | "FBATransportationFee"
    | "FBAFulfillmentCODFee";
  /** The amount of the fee. */
  amount: Money;
}

/** An array of fee type and cost pairs. */
export type FeeList = Fee[];

/** Specifies whether the fulfillment order should ship now or have an order hold put on it. */
export enum FulfillmentAction {
  Ship = "Ship",
  Hold = "Hold",
}

/** General information about a fulfillment order, including its status. */
export interface FulfillmentOrder {
  /** The fulfillment order identifier submitted with the createFulfillmentOrder operation. */
  sellerFulfillmentOrderId: string;
  /** The identifier for the marketplace the fulfillment order is placed against. */
  marketplaceId: string;
  /** A fulfillment order identifier submitted with the createFulfillmentOrder operation. Displays as the order identifier in recipient-facing materials such as the packing slip. */
  displayableOrderId: string;
  /** A date and time submitted with the createFulfillmentOrder operation. Displays as the order date in recipient-facing materials such as the packing slip. */
  displayableOrderDate: Timestamp;
  /** A text block submitted with the createFulfillmentOrder operation. Displays in recipient-facing materials such as the packing slip. */
  displayableOrderComment: string;
  /** The shipping method used for the fulfillment order. */
  shippingSpeedCategory: ShippingSpeedCategory;
  /** The time range within which a Scheduled Delivery fulfillment order should be delivered. */
  deliveryWindow?: DeliveryWindow;
  /** The destination address submitted with the createFulfillmentOrder operation. */
  destinationAddress: Address;
  /** Specifies whether the fulfillment order should ship now or have an order hold put on it. */
  fulfillmentAction?: FulfillmentAction;
  /** The FulfillmentPolicy value specified when you submitted the createFulfillmentOrder operation. */
  fulfillmentPolicy?: FulfillmentPolicy;
  /** The COD (Cash On Delivery) charges that you associate with a COD fulfillment order. */
  codSettings?: CODSettings;
  /** The date and time that the fulfillment order was received by an Amazon fulfillment center. */
  receivedDate: Timestamp;
  /** The current status of the fulfillment order. */
  fulfillmentOrderStatus: FulfillmentOrderStatus;
  /** The date and time that the status of the fulfillment order last changed, in ISO 8601 date time format. */
  statusUpdatedDate: Timestamp;
  /** A list of email addresses that the seller provides that are used by Amazon to send ship-complete notifications to recipients on behalf of the seller. */
  notificationEmails?: NotificationEmailList;
  /** A list of features and their fulfillment policies to apply to the order. */
  featureConstraints?: FeatureSettings[];
}

/** Item information for a fulfillment order. */
export interface FulfillmentOrderItem {
  /** The seller SKU of the item. */
  sellerSku: string;
  /** A fulfillment order item identifier submitted with a call to the createFulfillmentOrder operation. */
  sellerFulfillmentOrderItemId: string;
  /** The item quantity. */
  quantity: Quantity;
  /** A message to the gift recipient, if applicable. */
  giftMessage?: string;
  /** Item-specific text that displays in recipient-facing materials such as the outbound shipment packing slip. */
  displayableComment?: string;
  /** Amazon's fulfillment network SKU of the item. */
  fulfillmentNetworkSku?: string;
  /** Indicates whether the item is sellable or unsellable. */
  orderItemDisposition?: string;
  /** The item quantity that was cancelled by the seller. */
  cancelledQuantity: Quantity;
  /** The item quantity that is unfulfillable. */
  unfulfillableQuantity: Quantity;
  /** The estimated date and time that the item quantity is scheduled to ship from the fulfillment center. Note that this value can change over time. If the shipment that contains the item quantity has been cancelled, estimatedShipDate is not returned. */
  estimatedShipDate?: Timestamp;
  /** The estimated arrival date and time of the item quantity. Note that this value can change over time. If the shipment that contains the item quantity has been cancelled, estimatedArrivalDate is not returned. */
  estimatedArrivalDate?: Timestamp;
  /** The amount to be collected from the recipient for this item in a COD (Cash On Delivery) order. */
  perUnitPrice?: Money;
  /** The tax on the amount to be collected from the recipient for this item in a COD (Cash On Delivery) order. */
  perUnitTax?: Money;
  /** The monetary value assigned by the seller to this item. */
  perUnitDeclaredValue?: Money;
}

/** An array of fulfillment order item information. */
export type FulfillmentOrderItemList = FulfillmentOrderItem[];

/** Information about a fulfillment order preview, including delivery and fee information based on shipping method. */
export interface FulfillmentPreview {
  /** The shipping method used for the fulfillment order. */
  shippingSpeedCategory: ShippingSpeedCategory;
  /** Delivery information for a scheduled delivery. */
  scheduledDeliveryInfo?: ScheduledDeliveryInfo;
  /** When true, this fulfillment order preview is fulfillable. */
  isFulfillable: boolean;
  /** When true, this fulfillment order preview is for COD (Cash On Delivery). */
  isCODCapable: boolean;
  /** Estimated shipping weight for this fulfillment order preview. */
  estimatedShippingWeight?: Weight;
  /** The estimated fulfillment fees for this fulfillment order preview, if applicable. */
  estimatedFees?: FeeList;
  /** An array of fulfillment preview shipment information. */
  fulfillmentPreviewShipments?: FulfillmentPreviewShipmentList;
  /** An array of unfulfillable preview item information. */
  unfulfillablePreviewItems?: UnfulfillablePreviewItemList;
  /**
   * Error codes associated with the fulfillment order preview that indicate why the order is not fulfillable.
   *
   * Error code examples:
   *
   * DeliverySLAUnavailable
   * InvalidDestinationAddress
   */
  orderUnfulfillableReasons?: StringList;
  /** The marketplace the fulfillment order is placed against. */
  marketplaceId: string;
  /** A list of features and their fulfillment policies to apply to the order. */
  featureConstraints?: FeatureSettings[];
}

/** Item information for a shipment in a fulfillment order preview. */
export interface FulfillmentPreviewItem {
  /** The seller SKU of the item. */
  sellerSku: string;
  /** The item quantity. */
  quantity: Quantity;
  /** A fulfillment order item identifier that the seller created with a call to the createFulfillmentOrder operation. */
  sellerFulfillmentOrderItemId: string;
  /** The estimated shipping weight of the item quantity for a single item, as identified by sellerSku, in a shipment. */
  estimatedShippingWeight?: Weight;
  /** The method used to calculate the estimated shipping weight. */
  shippingWeightCalculationMethod?: "Package" | "Dimensional";
}

/** An array of fulfillment preview item information. */
export type FulfillmentPreviewItemList = FulfillmentPreviewItem[];

/** An array of fulfillment preview information. */
export type FulfillmentPreviewList = FulfillmentPreview[];

/** Delivery and item information for a shipment in a fulfillment order preview. */
export interface FulfillmentPreviewShipment {
  /** The earliest date that the shipment is expected to be sent from the fulfillment center, in ISO 8601 date time format. */
  earliestShipDate?: Timestamp;
  /** The latest date that the shipment is expected to be sent from the fulfillment center, in ISO 8601 date time format. */
  latestShipDate?: Timestamp;
  /** The earliest date that the shipment is expected to arrive at its destination. */
  earliestArrivalDate?: Timestamp;
  /** The latest date that the shipment is expected to arrive at its destination, in ISO 8601 date time format. */
  latestArrivalDate?: Timestamp;
  /** Provides additional insight into the shipment timeline when exact delivery dates are not able to be precomputed. */
  shippingNotes?: string[];
  /** Information about the items in the shipment. */
  fulfillmentPreviewItems: FulfillmentPreviewItemList;
}

/** An array of fulfillment preview shipment information. */
export type FulfillmentPreviewShipmentList = FulfillmentPreviewShipment[];

/** Indicates if the return item has been processed by a fulfillment center. */
export enum FulfillmentReturnItemStatus {
  New = "New",
  Processed = "Processed",
}

/** Delivery and item information for a shipment in a fulfillment order. */
export interface FulfillmentShipment {
  /** A shipment identifier assigned by Amazon. */
  amazonShipmentId: string;
  /** An identifier for the fulfillment center that the shipment will be sent from. */
  fulfillmentCenterId: string;
  /** The current status of the shipment. */
  fulfillmentShipmentStatus:
    | "PENDING"
    | "SHIPPED"
    | "CANCELLED_BY_FULFILLER"
    | "CANCELLED_BY_SELLER";
  /**
   * The meaning of the shippingDate value depends on the current status of the shipment. If the current value of FulfillmentShipmentStatus is:
   *
   * * Pending - shippingDate represents the estimated time that the shipment will leave the Amazon fulfillment center.
   *
   * * Shipped - shippingDate represents the date that the shipment left the Amazon fulfillment center.
   * If a shipment includes more than one package, shippingDate applies to all of the packages in the shipment. If the value of FulfillmentShipmentStatus is CancelledByFulfiller or CancelledBySeller, shippingDate is not returned. The value must be in ISO 8601 date time format.
   */
  shippingDate?: Timestamp;
  /** The estimated arrival date and time of the shipment, in ISO 8601 date time format. Note that this value can change over time. If a shipment includes more than one package, estimatedArrivalDate applies to all of the packages in the shipment. If the shipment has been cancelled, estimatedArrivalDate is not returned. */
  estimatedArrivalDate?: Timestamp;
  /** Provides additional insight into shipment timeline. Primairly used to communicate that actual delivery dates aren't available. */
  shippingNotes?: string[];
  /** An array of fulfillment shipment item information. */
  fulfillmentShipmentItem: FulfillmentShipmentItemList;
  /** An array of fulfillment shipment package information. */
  fulfillmentShipmentPackage?: FulfillmentShipmentPackageList;
}

/** Item information for a shipment in a fulfillment order. */
export interface FulfillmentShipmentItem {
  /** The seller SKU of the item. */
  sellerSku: string;
  /** The fulfillment order item identifier that the seller created and submitted with a call to the createFulfillmentOrder operation. */
  sellerFulfillmentOrderItemId: string;
  /** The item quantity. */
  quantity: Quantity;
  /**
   * An identifier for the package that contains the item quantity.
   * @format int32
   */
  packageNumber?: number;
  /** The serial number of the shipped item. */
  serialNumber?: string;
}

/** An array of fulfillment shipment item information. */
export type FulfillmentShipmentItemList = FulfillmentShipmentItem[];

/** An array of fulfillment shipment information. */
export type FulfillmentShipmentList = FulfillmentShipment[];

/** Package information for a shipment in a fulfillment order. */
export interface FulfillmentShipmentPackage {
  /**
   * Identifies a package in a shipment.
   * @format int32
   */
  packageNumber: number;
  /** Identifies the carrier who will deliver the shipment to the recipient. */
  carrierCode: string;
  /** The tracking number, if provided, can be used to obtain tracking and delivery information. */
  trackingNumber?: string;
  /** The estimated arrival date and time of the package, in ISO 8601 date time format. */
  estimatedArrivalDate?: Timestamp;
}

/** An array of fulfillment shipment package information. */
export type FulfillmentShipmentPackageList = FulfillmentShipmentPackage[];

export interface GetFulfillmentOrderResult {
  /** General information about a fulfillment order, including its status. */
  fulfillmentOrder: FulfillmentOrder;
  /** An array of fulfillment order item information. */
  fulfillmentOrderItems: FulfillmentOrderItemList;
  /** An array of fulfillment shipment information. */
  fulfillmentShipments?: FulfillmentShipmentList;
  /** An array of items that Amazon accepted for return. Returns empty if no items were accepted for return. */
  returnItems: ReturnItemList;
  /** An array of return authorization information. */
  returnAuthorizations: ReturnAuthorizationList;
}

/** The response schema for the getFulfillmentOrder operation. */
export interface GetFulfillmentOrderResponse {
  /** The payload for the getFulfillmentOrder operation. */
  payload?: GetFulfillmentOrderResult;
  /** One or more unexpected errors occurred during the getFulfillmentOrder operation. */
  errors?: ErrorList;
}

/** Item information for a fulfillment order preview. */
export interface GetFulfillmentPreviewItem {
  /**
   * The seller SKU of the item.
   * @maxLength 50
   */
  sellerSku: string;
  /** The item quantity. */
  quantity: Quantity;
  /** The monetary value assigned by the seller to this item. This is a required field if this order is an export order. */
  perUnitDeclaredValue?: Money;
  /**
   * A fulfillment order item identifier that the seller creates to track items in the fulfillment preview.
   * @maxLength 50
   */
  sellerFulfillmentOrderItemId: string;
}

/** An array of fulfillment preview item information. */
export type GetFulfillmentPreviewItemList = GetFulfillmentPreviewItem[];

/** The request body schema for the getFulfillmentPreview operation. */
export interface GetFulfillmentPreviewRequest {
  /** The marketplace the fulfillment order is placed against. */
  marketplaceId?: string;
  /** The destination address for the fulfillment order preview. */
  address: Address;
  /** Identifying information and quantity information for the items in the fulfillment order preview. */
  items: GetFulfillmentPreviewItemList;
  /**
   * A list of shipping methods used for creating fulfillment order previews.
   *
   * Possible values:
   *
   * * Standard - Standard shipping method.
   * * Expedited - Expedited shipping method.
   * * Priority - Priority shipping method.
   * * ScheduledDelivery - Scheduled Delivery shipping method.
   * Note: Shipping method service level agreements vary by marketplace. Sellers should see the Seller Central website in their marketplace for shipping method service level agreements and fulfillment fees.
   */
  shippingSpeedCategories?: ShippingSpeedCategoryList;
  /**
   * Specifies whether to return fulfillment order previews that are for COD (Cash On Delivery).
   *
   * Possible values:
   *
   * * true - Returns all fulfillment order previews (both for COD and not for COD).
   * * false - Returns only fulfillment order previews that are not for COD.
   */
  includeCODFulfillmentPreview?: boolean;
  /** Specifies whether to return the ScheduledDeliveryInfo response object, which contains the available delivery windows for a Scheduled Delivery. The ScheduledDeliveryInfo response object can only be returned for fulfillment order previews with ShippingSpeedCategories = ScheduledDelivery. */
  includeDeliveryWindows?: boolean;
  /** A list of features and their fulfillment policies to apply to the order. */
  featureConstraints?: FeatureSettings[];
}

/** A list of fulfillment order previews, including estimated shipping weights, estimated shipping fees, and estimated ship dates and arrival dates. */
export interface GetFulfillmentPreviewResult {
  /** An array of fulfillment preview information. */
  fulfillmentPreviews?: FulfillmentPreviewList;
}

/** The response schema for the getFulfillmentPreview operation. */
export interface GetFulfillmentPreviewResponse {
  /** The response payload for the getFulfillmentPreview operation. */
  payload?: GetFulfillmentPreviewResult;
  /** One or more unexpected errors occurred during the getFulfillmentPreview operation. */
  errors?: ErrorList;
}

/** A code for why the item is invalid for return. */
export enum InvalidItemReasonCode {
  InvalidValues = "InvalidValues",
  DuplicateRequest = "DuplicateRequest",
  NoCompletedShipItems = "NoCompletedShipItems",
  NoReturnableQuantity = "NoReturnableQuantity",
}

/** The reason that the item is invalid for return. */
export interface InvalidItemReason {
  /** A code for why the item is invalid for return. */
  invalidItemReasonCode: InvalidItemReasonCode;
  /** A human readable description of the invalid item reason code. */
  description: string;
}

/** An item that is invalid for return. */
export interface InvalidReturnItem {
  /** An identifier assigned by the seller to the return item. */
  sellerReturnItemId: string;
  /** The identifier assigned to the item by the seller when the fulfillment order was created. */
  sellerFulfillmentOrderItemId: string;
  /** The reason that the item is invalid for return. */
  invalidItemReason: InvalidItemReason;
}

/** An array of invalid return item information. */
export type InvalidReturnItemList = InvalidReturnItem[];

export interface ListAllFulfillmentOrdersResult {
  /** When present and not empty, pass this string token in the next request to return the next response page. */
  nextToken?: string;
  /** An array of fulfillment order information. */
  fulfillmentOrders?: FulfillmentOrder[];
}

/** The response schema for the listAllFulfillmentOrders operation. */
export interface ListAllFulfillmentOrdersResponse {
  /** The payload for the listAllFulfillmentOrders operation. */
  payload?: ListAllFulfillmentOrdersResult;
  /** One or more unexpected errors occurred during the listAllFulfillmentOrders operation. */
  errors?: ErrorList;
}

export interface ListReturnReasonCodesResult {
  /** An array of return reason code details. */
  reasonCodeDetails?: ReasonCodeDetailsList;
}

/** The response schema for the listReturnReasonCodes operation. */
export interface ListReturnReasonCodesResponse {
  /** The payload for the listReturnReasonCodes operation. */
  payload?: ListReturnReasonCodesResult;
  /** One or more unexpected errors occurred during the listReturnReasonCodes operation. */
  errors?: ErrorList;
}

/** A list of email addresses that the seller provides that are used by Amazon to send ship-complete notifications to recipients on behalf of the seller. */
export type NotificationEmailList = string[];

/** The current delivery status of the package. */
export enum CurrentStatus {
  IN_TRANSIT = "IN_TRANSIT",
  DELIVERED = "DELIVERED",
  RETURNING = "RETURNING",
  RETURNED = "RETURNED",
  UNDELIVERABLE = "UNDELIVERABLE",
  DELAYED = "DELAYED",
  AVAILABLE_FOR_PICKUP = "AVAILABLE_FOR_PICKUP",
  CUSTOMER_ACTION = "CUSTOMER_ACTION",
  UNKNOWN = "UNKNOWN",
  OUT_FOR_DELIVERY = "OUT_FOR_DELIVERY",
  DELIVERY_ATTEMPTED = "DELIVERY_ATTEMPTED",
  PICKUP_SUCCESSFUL = "PICKUP_SUCCESSFUL",
  PICKUP_CANCELLED = "PICKUP_CANCELLED",
  PICKUP_ATTEMPTED = "PICKUP_ATTEMPTED",
  PICKUP_SCHEDULED = "PICKUP_SCHEDULED",
  RETURN_REQUEST_ACCEPTED = "RETURN_REQUEST_ACCEPTED",
  REFUND_ISSUED = "REFUND_ISSUED",
  RETURN_RECEIVED_IN_FC = "RETURN_RECEIVED_IN_FC",
}

/** Additional location information. */
export enum AdditionalLocationInfo {
  AS_INSTRUCTED = "AS_INSTRUCTED",
  CARPORT = "CARPORT",
  CUSTOMER_PICKUP = "CUSTOMER_PICKUP",
  DECK = "DECK",
  DOOR_PERSON = "DOOR_PERSON",
  FRONT_DESK = "FRONT_DESK",
  FRONT_DOOR = "FRONT_DOOR",
  GARAGE = "GARAGE",
  GUARD = "GUARD",
  MAIL_ROOM = "MAIL_ROOM",
  MAIL_SLOT = "MAIL_SLOT",
  MAILBOX = "MAILBOX",
  MC_BOY = "MC_BOY",
  MC_GIRL = "MC_GIRL",
  MC_MAN = "MC_MAN",
  MC_WOMAN = "MC_WOMAN",
  NEIGHBOR = "NEIGHBOR",
  OFFICE = "OFFICE",
  OUTBUILDING = "OUTBUILDING",
  PATIO = "PATIO",
  PORCH = "PORCH",
  REAR_DOOR = "REAR_DOOR",
  RECEPTIONIST = "RECEPTIONIST",
  RECEIVER = "RECEIVER",
  SECURE_LOCATION = "SECURE_LOCATION",
  SIDE_DOOR = "SIDE_DOOR",
}

export interface PackageTrackingDetails {
  /**
   * The package identifier.
   * @format int32
   */
  packageNumber: number;
  /** The tracking number for the package. */
  trackingNumber?: string;
  /** Link on swiship.com that allows customers to track the package. */
  customerTrackingLink?: string;
  /** The name of the carrier. */
  carrierCode?: string;
  /** The phone number of the carrier. */
  carrierPhoneNumber?: string;
  /** The URL of the carrier’s website. */
  carrierURL?: string;
  /** The shipping date for the package. */
  shipDate?: Timestamp;
  /** The estimated arrival date. */
  estimatedArrivalDate?: Timestamp;
  /** The destination city for the package. */
  shipToAddress?: TrackingAddress;
  /** The current delivery status of the package. */
  currentStatus?: CurrentStatus;
  /** Description corresponding to the CurrentStatus value. */
  currentStatusDescription?: string;
  /** The name of the person who signed for the package. */
  signedForBy?: string;
  /** Additional location information. */
  additionalLocationInfo?: AdditionalLocationInfo;
  /** An array of tracking event information. */
  trackingEvents?: TrackingEventList;
}

/** The response schema for the getPackageTrackingDetails operation. */
export interface GetPackageTrackingDetailsResponse {
  /** The payload for the getPackageTrackingDetails operation. */
  payload?: PackageTrackingDetails;
  /** One or more unexpected errors occurred during the getPackageTrackingDetails operation. */
  errors?: ErrorList;
}

/** A return reason code, a description, and an optional description translation. */
export interface ReasonCodeDetails {
  /** A code that indicates a valid return reason. */
  returnReasonCode: string;
  /** A human readable description of the return reason code. */
  description: string;
  /** A translation of the description. The translation is in the language specified in the Language request parameter. */
  translatedDescription?: string;
}

/** An array of return reason code details. */
export type ReasonCodeDetailsList = ReasonCodeDetails[];

/** Return authorization information for items accepted for return. */
export interface ReturnAuthorization {
  /** An identifier for the return authorization. This identifier associates return items with the return authorization used to return them. */
  returnAuthorizationId: string;
  /** An identifier for the Amazon fulfillment center that the return items should be sent to. */
  fulfillmentCenterId: string;
  /** The address of the Amazon fulfillment center that the return items should be sent to. */
  returnToAddress: Address;
  /** The return merchandise authorization (RMA) that Amazon needs to process the return. */
  amazonRmaId: string;
  /** A URL for a web page that contains the return authorization barcode and the mailing label. This does not include pre-paid shipping. */
  rmaPageURL: string;
}

/** An array of return authorization information. */
export type ReturnAuthorizationList = ReturnAuthorization[];

/** An item that Amazon accepted for return. */
export interface ReturnItem {
  /** An identifier assigned by the seller to the return item. */
  sellerReturnItemId: string;
  /** The identifier assigned to the item by the seller when the fulfillment order was created. */
  sellerFulfillmentOrderItemId: string;
  /** The identifier for the shipment that is associated with the return item. */
  amazonShipmentId: string;
  /** The return reason code assigned to the return item by the seller. */
  sellerReturnReasonCode: string;
  /** An optional comment about the return item. */
  returnComment?: string;
  /** The return reason code that the Amazon fulfillment center assigned to the return item. */
  amazonReturnReasonCode?: string;
  /** Indicates if the return item has been processed by an Amazon fulfillment center. */
  status: FulfillmentReturnItemStatus;
  /** Indicates when the status last changed. */
  statusChangedDate: Timestamp;
  /** Identifies the return authorization used to return this item. See ReturnAuthorization. */
  returnAuthorizationId?: string;
  /** The condition of the return item when received by an Amazon fulfillment center. */
  returnReceivedCondition?: ReturnItemDisposition;
  /** The identifier for the Amazon fulfillment center that processed the return item. */
  fulfillmentCenterId?: string;
}

/** The condition of the return item when received by an Amazon fulfillment center. */
export enum ReturnItemDisposition {
  Sellable = "Sellable",
  Defective = "Defective",
  CustomerDamaged = "CustomerDamaged",
  CarrierDamaged = "CarrierDamaged",
  FulfillerDamaged = "FulfillerDamaged",
}

/** An array of items that Amazon accepted for return. Returns empty if no items were accepted for return. */
export type ReturnItemList = ReturnItem[];

/** Delivery information for a scheduled delivery. */
export interface ScheduledDeliveryInfo {
  /** The time zone of the destination address for the fulfillment order preview. Must be an IANA time zone name. Example: Asia/Tokyo. */
  deliveryTimeZone: string;
  /** An array of time ranges that are available for scheduled delivery. */
  deliveryWindows: DeliveryWindowList;
}

export type ShippingSpeedCategoryList = ShippingSpeedCategory[];

export type StringList = string[];

/** @format date-time */
export type Timestamp = string;

/** Address information for tracking the package. */
export interface TrackingAddress {
  /**
   * The city.
   * @maxLength 150
   */
  city: string;
  /**
   * The state.
   * @maxLength 150
   */
  state: string;
  /**
   * The country.
   * @maxLength 6
   */
  country: string;
}

/** The event code for the delivery event. */
export enum EventCode {
  EVENT101 = "EVENT_101",
  EVENT102 = "EVENT_102",
  EVENT201 = "EVENT_201",
  EVENT202 = "EVENT_202",
  EVENT203 = "EVENT_203",
  EVENT204 = "EVENT_204",
  EVENT205 = "EVENT_205",
  EVENT206 = "EVENT_206",
  EVENT301 = "EVENT_301",
  EVENT302 = "EVENT_302",
  EVENT304 = "EVENT_304",
  EVENT306 = "EVENT_306",
  EVENT307 = "EVENT_307",
  EVENT308 = "EVENT_308",
  EVENT309 = "EVENT_309",
  EVENT401 = "EVENT_401",
  EVENT402 = "EVENT_402",
  EVENT403 = "EVENT_403",
  EVENT404 = "EVENT_404",
  EVENT405 = "EVENT_405",
  EVENT406 = "EVENT_406",
  EVENT407 = "EVENT_407",
  EVENT408 = "EVENT_408",
  EVENT409 = "EVENT_409",
  EVENT411 = "EVENT_411",
  EVENT412 = "EVENT_412",
  EVENT413 = "EVENT_413",
  EVENT414 = "EVENT_414",
  EVENT415 = "EVENT_415",
  EVENT416 = "EVENT_416",
  EVENT417 = "EVENT_417",
  EVENT418 = "EVENT_418",
  EVENT419 = "EVENT_419",
}

/** Information for tracking package deliveries. */
export interface TrackingEvent {
  /** The date and time that the delivery event took place, in ISO 8601 date time format. */
  eventDate: Timestamp;
  /** The city where the delivery event took place. */
  eventAddress: TrackingAddress;
  /** The event code for the delivery event. */
  eventCode: EventCode;
  /** A description for the corresponding event code. */
  eventDescription: string;
}

/** An array of tracking event information. */
export type TrackingEventList = TrackingEvent[];

/** Information about unfulfillable items in a fulfillment order preview. */
export interface UnfulfillablePreviewItem {
  /**
   * The seller SKU of the item.
   * @maxLength 50
   */
  sellerSku: string;
  /** The item quantity. */
  quantity: Quantity;
  /**
   * A fulfillment order item identifier created with a call to the getFulfillmentPreview operation.
   * @maxLength 50
   */
  sellerFulfillmentOrderItemId: string;
  /** Error codes associated with the fulfillment order preview that indicate why the item is unfulfillable. */
  itemUnfulfillableReasons?: StringList;
}

/** An array of unfulfillable preview item information. */
export type UnfulfillablePreviewItemList = UnfulfillablePreviewItem[];

/** Item information for updating a fulfillment order. */
export interface UpdateFulfillmentOrderItem {
  /** The seller SKU of the item. */
  sellerSku?: string;
  /**
   * Identifies the fulfillment order item to update. Created with a previous call to the createFulfillmentOrder operation.
   * @maxLength 50
   */
  sellerFulfillmentOrderItemId: string;
  /** The item quantity. */
  quantity: Quantity;
  /**
   * A message to the gift recipient, if applicable.
   * @maxLength 512
   */
  giftMessage?: string;
  /**
   * Item-specific text that displays in recipient-facing materials such as the outbound shipment packing slip.
   * @maxLength 250
   */
  displayableComment?: string;
  /** Amazon's fulfillment network SKU of the item. */
  fulfillmentNetworkSku?: string;
  /** Indicates whether the item is sellable or unsellable. */
  orderItemDisposition?: string;
  /** The monetary value assigned by the seller to this item. */
  perUnitDeclaredValue?: Money;
  /** The amount to be collected from the recipient for this item in a COD (Cash On Delivery) order. */
  perUnitPrice?: Money;
  /** The tax on the amount to be collected from the recipient for this item in a COD (Cash On Delivery) order. */
  perUnitTax?: Money;
}

/** An array of fulfillment order item information for updating a fulfillment order. */
export type UpdateFulfillmentOrderItemList = UpdateFulfillmentOrderItem[];

export interface UpdateFulfillmentOrderRequest {
  /** The marketplace the fulfillment order is placed against. */
  marketplaceId?: string;
  /**
   * A fulfillment order identifier that the seller creates. This value displays as the order identifier in recipient-facing materials such as the outbound shipment packing slip. The value of DisplayableOrderId should match the order identifier that the seller provides to the recipient. The seller can use the SellerFulfillmentOrderId for this value or they can specify an alternate value if they want the recipient to reference an alternate order identifier.
   * @maxLength 40
   */
  displayableOrderId?: string;
  /** The date and time of the fulfillment order. Displays as the order date in recipient-facing materials such as the outbound shipment packing slip. */
  displayableOrderDate?: Timestamp;
  /**
   * Order-specific text that appears in recipient-facing materials such as the outbound shipment packing slip.
   * @maxLength 1000
   */
  displayableOrderComment?: string;
  /** The shipping method used for the fulfillment order. */
  shippingSpeedCategory?: ShippingSpeedCategory;
  /** The destination address for the fulfillment order. */
  destinationAddress?: Address;
  /** Specifies whether the fulfillment order should ship now or have an order hold put on it. */
  fulfillmentAction?: FulfillmentAction;
  /** The FulfillmentPolicy value specified when you submitted the createFulfillmentOrder operation. */
  fulfillmentPolicy?: FulfillmentPolicy;
  /** The two-character country code for the country from which the fulfillment order ships. Must be in ISO 3166-1 alpha-2 format. */
  shipFromCountryCode?: string;
  /** A list of email addresses that the seller provides that are used by Amazon to send ship-complete notifications to recipients on behalf of the seller. */
  notificationEmails?: NotificationEmailList;
  /** A list of features and their fulfillment policies to apply to the order. */
  featureConstraints?: FeatureSettings[];
  /** A list of items to include in the fulfillment order preview, including quantity. */
  items?: UpdateFulfillmentOrderItemList;
}

/** The response schema for the updateFulfillmentOrder operation. */
export interface UpdateFulfillmentOrderResponse {
  /** One or more unexpected errors occurred during the updateFulfillmentOrder operation. */
  errors?: ErrorList;
}

/** The response schema for the createFulfillmentOrder operation. */
export interface CreateFulfillmentOrderResponse {
  /** One or more unexpected errors occurred during the createFulfillmentOrder operation. */
  errors?: ErrorList;
}

/** The response schema for the cancelFulfillmentOrder operation. */
export interface CancelFulfillmentOrderResponse {
  /** One or more unexpected errors occurred during the cancelFulfillmentOrder operation. */
  errors?: ErrorList;
}

/** The weight. */
export interface Weight {
  /** The unit of weight. */
  unit: "KG" | "KILOGRAMS" | "LB" | "POUNDS";
  /** The weight value. */
  value: string;
}

/**
 * The item quantity.
 * @format int32
 */
export type Quantity = number;

/** The shipping method used for the fulfillment order. */
export enum ShippingSpeedCategory {
  Standard = "Standard",
  Expedited = "Expedited",
  Priority = "Priority",
  ScheduledDelivery = "ScheduledDelivery",
}

/** The breakdown of eligibility inventory by feature. */
export interface GetFeatureInventoryResponse {
  /** The payload for the getEligibileInventory operation. */
  payload?: GetFeatureInventoryResult;
  /** One or more unexpected errors occurred during the getFeatureInventory operation. */
  errors?: ErrorList;
}

/** The payload for the getEligibileInventory operation. */
export interface GetFeatureInventoryResult {
  /** The requested marketplace. */
  marketplaceId: string;
  /** The name of the feature. */
  featureName: string;
  /** When present and not empty, pass this string token in the next request to return the next response page. */
  nextToken?: string;
  /** An array of SKUs eligible for this feature and the quantity available. */
  featureSkus?: FeatureSku[];
}

/** Information about an SKU, including the count available, identifiers, and a list of overlapping SKUs that share the same inventory pool. */
export interface FeatureSku {
  /** Used to identify an item in the given marketplace. SellerSKU is qualified by the seller's SellerId, which is included with every operation that you submit. */
  sellerSku?: string;
  /** The unique SKU used by Amazon's fulfillment network. */
  fnSku?: string;
  /** The Amazon Standard Identification Number (ASIN) of the item. */
  asin?: string;
  /** The number of SKUs available for this service. */
  skuCount?: number;
  /** Other seller SKUs that are shared across the same inventory. */
  overlappingSkus?: string[];
}

/** The response schema for the getFeatures operation. */
export interface GetFeaturesResponse {
  /** The payload for the getFeatures operation. */
  payload?: GetFeaturesResult;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** The payload for the getFeatures operation. */
export interface GetFeaturesResult {
  /** An array of features. */
  features: Features;
}

/** An array of features. */
export type Features = Feature[];

/** A Multi-Channel Fulfillment feature. */
export interface Feature {
  /** The feature name. */
  featureName: string;
  /** The feature description. */
  featureDescription: string;
  /** When true, indicates that the seller is eligible to use the feature. */
  sellerEligible?: boolean;
}

/** The response schema for the getFeatureSKU operation. */
export interface GetFeatureSkuResponse {
  /** The payload for the getFeatureSKU operation. */
  payload?: GetFeatureSkuResult;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** The payload for the getFeatureSKU operation. */
export interface GetFeatureSkuResult {
  /** The requested marketplace. */
  marketplaceId: string;
  /** The name of the feature. */
  featureName: string;
  /** When true, the seller SKU is eligible for the requested feature. */
  isEligible: boolean;
  /**
   * A list of one or more reasons that the seller SKU is ineligibile for the feature.
   *
   * Possible values:
   * * MERCHANT_NOT_ENROLLED - The merchant isn't enrolled for the feature.
   * * SKU_NOT_ELIGIBLE - The SKU doesn't reside in a warehouse that supports the feature.
   * * INVALID_SKU - There is an issue with the SKU provided.
   */
  ineligibleReasons?: string[];
  /** Information about the SKU, including the count available, identifiers, and a list of overlapping SKUs that share the same inventory pool. */
  skuInfo?: FeatureSku;
}

/** FeatureSettings allows users to apply fulfillment features to an order. To block an order from being shipped using Amazon Logistics (AMZL) and an AMZL tracking number, use featureName as BLOCK_AMZL and featureFulfillmentPolicy as Required. Blocking AMZL will incur an additional fee surcharge on your MCF orders and increase the risk of some of your orders being unfulfilled or delivered late if there are no alternative carriers available. Using BLOCK_AMZL in an order request will take precedence over your Seller Central account setting. */
export interface FeatureSettings {
  /** The name of the feature. */
  featureName?: string;
  /** Specifies the policy to use when fulfilling an order. */
  featureFulfillmentPolicy?: "Required" | "NotRequired";
}
