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

/** The request body for the updateShipmentStatus operation. */
export interface UpdateShipmentStatusRequest {
  /** The unobfuscated marketplace identifier. */
  marketplaceId: MarketplaceId;
  /** The shipment status to apply. */
  shipmentStatus: ShipmentStatus;
  /** For partial shipment status updates, the list of order items and quantities to be updated. */
  orderItems?: OrderItems;
}

/** The request body for the updateVerificationStatus operation. */
export interface UpdateVerificationStatusRequest {
  /** The updated values of the VerificationStatus field. */
  regulatedOrderVerificationStatus: UpdateVerificationStatusRequestBody;
}

/** The updated values of the VerificationStatus field. */
export interface UpdateVerificationStatusRequestBody {
  /** The new verification status of the order. */
  status: VerificationStatus;
  /** The identifier for the order's regulated information reviewer. */
  externalReviewerId: string;
  /** The unique identifier for the rejection reason used for rejecting the order's regulated information. Only required if the new status is rejected. */
  rejectionReasonId?: string;
}

/** The unobfuscated marketplace identifier. */
export type MarketplaceId = string;

/** The shipment status to apply. */
export enum ShipmentStatus {
  ReadyForPickup = "ReadyForPickup",
  PickedUp = "PickedUp",
  RefusedPickup = "RefusedPickup",
}

/** For partial shipment status updates, the list of order items and quantities to be updated. */
export type OrderItems = {
  /** The unique identifier of the order item. */
  orderItemId?: string;
  /** The quantity for which to update the shipment status. */
  quantity?: number;
}[];

/** The error response schema for the UpdateShipmentStatus operation. */
export interface UpdateShipmentStatusErrorResponse {
  /** One or more unexpected errors occurred during the UpdateShipmentStatus operation. */
  errors?: ErrorList;
}

/** The error response schema for the UpdateVerificationStatus operation. */
export interface UpdateVerificationStatusErrorResponse {
  /** One or more unexpected errors occurred during the UpdateVerificationStatus operation. */
  errors?: ErrorList;
}

/** The response schema for the getOrders operation. */
export interface GetOrdersResponse {
  /** The payload for the getOrders operation. */
  payload?: OrdersList;
  /** One or more unexpected errors occurred during the getOrders operation. */
  errors?: ErrorList;
}

/** The response schema for the getOrder operation. */
export interface GetOrderResponse {
  /** The payload for the getOrder operation. */
  payload?: Order;
  /** One or more unexpected errors occurred during the getOrder operation. */
  errors?: ErrorList;
}

/** The response schema for the getOrderBuyerInfo operation. */
export interface GetOrderBuyerInfoResponse {
  /** The payload for the getOrderBuyerInfo operation. */
  payload?: OrderBuyerInfo;
  /** One or more unexpected errors occurred during the getOrderBuyerInfo operation. */
  errors?: ErrorList;
}

/** The response schema for the getOrderRegulatedInfo operation. */
export interface GetOrderRegulatedInfoResponse {
  /** The payload for the getOrderRegulatedInfo operation. */
  payload?: OrderRegulatedInfo;
  /** One or more unexpected errors occurred during the getOrderRegulatedInfo operation. */
  errors?: ErrorList;
}

/** The response schema for the getOrderAddress operation. */
export interface GetOrderAddressResponse {
  /** The payload for the getOrderAddress operations. */
  payload?: OrderAddress;
  /** One or more unexpected errors occurred during the getOrderAddress operation. */
  errors?: ErrorList;
}

/** The response schema for the getOrderItems operation. */
export interface GetOrderItemsResponse {
  /** The payload for the getOrderItems operation. */
  payload?: OrderItemsList;
  /** One or more unexpected errors occurred during the getOrderItems operation. */
  errors?: ErrorList;
}

/** The response schema for the getOrderItemsBuyerInfo operation. */
export interface GetOrderItemsBuyerInfoResponse {
  /** The payload for the getOrderItemsBuyerInfo operation. */
  payload?: OrderItemsBuyerInfoList;
  /** One or more unexpected errors occurred during the getOrderItemsBuyerInfo operation. */
  errors?: ErrorList;
}

/** A list of orders along with additional information to make subsequent API calls. */
export interface OrdersList {
  /** A list of orders. */
  Orders: OrderList;
  /** When present and not empty, pass this string token in the next request to return the next response page. */
  NextToken?: string;
  /** A date used for selecting orders that were last updated before (or at) a specified time. An update is defined as any change in order status, including the creation of a new order. Includes updates made by Amazon and by the seller. All dates must be in ISO 8601 format. */
  LastUpdatedBefore?: string;
  /** A date used for selecting orders created before (or at) a specified time. Only orders placed before the specified time are returned. The date must be in ISO 8601 format. */
  CreatedBefore?: string;
}

/** A list of orders. */
export type OrderList = Order[];

/** Order information. */
export interface Order {
  /** An Amazon-defined order identifier, in 3-7-7 format. */
  AmazonOrderId: string;
  /** A seller-defined order identifier. */
  SellerOrderId?: string;
  /** The date when the order was created. */
  PurchaseDate: string;
  /**
   * The date when the order was last updated.
   *
   * __Note__: LastUpdateDate is returned with an incorrect date for orders that were last updated before 2009-04-01.
   */
  LastUpdateDate: string;
  /** The current order status. */
  OrderStatus:
    | "Pending"
    | "Unshipped"
    | "PartiallyShipped"
    | "Shipped"
    | "Canceled"
    | "Unfulfillable"
    | "InvoiceUnconfirmed"
    | "PendingAvailability";
  /** Whether the order was fulfilled by Amazon (AFN) or by the seller (MFN). */
  FulfillmentChannel?: "MFN" | "AFN";
  /** The sales channel of the first item in the order. */
  SalesChannel?: string;
  /** The order channel of the first item in the order. */
  OrderChannel?: string;
  /** The shipment service level of the order. */
  ShipServiceLevel?: string;
  /** The total charge for this order. */
  OrderTotal?: Money;
  /** The number of items shipped. */
  NumberOfItemsShipped?: number;
  /** The number of items unshipped. */
  NumberOfItemsUnshipped?: number;
  /**
   * Information about sub-payment methods for a Cash On Delivery (COD) order.
   *
   * __Note__: For a COD order that is paid for using one sub-payment method, one PaymentExecutionDetailItem object is returned, with PaymentExecutionDetailItem/PaymentMethod = COD. For a COD order that is paid for using multiple sub-payment methods, two or more PaymentExecutionDetailItem objects are returned.
   */
  PaymentExecutionDetail?: PaymentExecutionDetailItemList;
  /** The payment method for the order. This property is limited to Cash On Delivery (COD) and Convenience Store (CVS) payment methods. Unless you need the specific COD payment information provided by the PaymentExecutionDetailItem object, we recommend using the PaymentMethodDetails property to get payment method information. */
  PaymentMethod?: "COD" | "CVS" | "Other";
  /** A list of payment methods for the order. */
  PaymentMethodDetails?: PaymentMethodDetailItemList;
  /** The identifier for the marketplace where the order was placed. */
  MarketplaceId?: string;
  /**
   * The shipment service level category of the order.
   *
   * Possible values: Expedited, FreeEconomy, NextDay, SameDay, SecondDay, Scheduled, Standard.
   */
  ShipmentServiceLevelCategory?: string;
  /** The status of the Amazon Easy Ship order. This property is included only for Amazon Easy Ship orders. */
  EasyShipShipmentStatus?: EasyShipShipmentStatus;
  /** Custom ship label for Checkout by Amazon (CBA). */
  CbaDisplayableShippingLabel?: string;
  /** The type of the order. */
  OrderType?:
    | "StandardOrder"
    | "LongLeadTimeOrder"
    | "Preorder"
    | "BackOrder"
    | "SourcingOnDemandOrder";
  /**
   * The start of the time period within which you have committed to ship the order. In ISO 8601 date time format. Returned only for seller-fulfilled orders.
   *
   * __Note__: EarliestShipDate might not be returned for orders placed before February 1, 2013.
   */
  EarliestShipDate?: string;
  /**
   * The end of the time period within which you have committed to ship the order. In ISO 8601 date time format. Returned only for seller-fulfilled orders.
   *
   * __Note__: LatestShipDate might not be returned for orders placed before February 1, 2013.
   */
  LatestShipDate?: string;
  /** The start of the time period within which you have committed to fulfill the order. In ISO 8601 date time format. Returned only for seller-fulfilled orders. */
  EarliestDeliveryDate?: string;
  /** The end of the time period within which you have committed to fulfill the order. In ISO 8601 date time format. Returned only for seller-fulfilled orders that do not have a PendingAvailability, Pending, or Canceled status. */
  LatestDeliveryDate?: string;
  /** When true, the order is an Amazon Business order. An Amazon Business order is an order where the buyer is a Verified Business Buyer. */
  IsBusinessOrder?: boolean;
  /** When true, the order is a seller-fulfilled Amazon Prime order. */
  IsPrime?: boolean;
  /** When true, the order has a Premium Shipping Service Level Agreement. For more information about Premium Shipping orders, see "Premium Shipping Options" in the Seller Central Help for your marketplace. */
  IsPremiumOrder?: boolean;
  /** When true, the order is a GlobalExpress order. */
  IsGlobalExpressEnabled?: boolean;
  /** The order ID value for the order that is being replaced. Returned only if IsReplacementOrder = true. */
  ReplacedOrderId?: string;
  /** When true, this is a replacement order. */
  IsReplacementOrder?: boolean;
  /** Indicates the date by which the seller must respond to the buyer with an estimated ship date. Returned only for Sourcing on Demand orders. */
  PromiseResponseDueDate?: string;
  /** When true, the estimated ship date is set for the order. Returned only for Sourcing on Demand orders. */
  IsEstimatedShipDateSet?: boolean;
  /** When true, the item within this order was bought and re-sold by Amazon Business EU SARL (ABEU). By buying and instantly re-selling your items, ABEU becomes the seller of record, making your inventory available for sale to customers who would not otherwise purchase from a third-party seller. */
  IsSoldByAB?: boolean;
  /** When true, the item within this order was bought and re-sold by Amazon Business EU SARL (ABEU). By buying and instantly re-selling your items, ABEU becomes the seller of record, making your inventory available for sale to customers who would not otherwise purchase from a third-party seller. */
  IsIBA?: boolean;
  /** The recommended location for the seller to ship the items from. It is calculated at checkout. The seller may or may not choose to ship from this location. */
  DefaultShipFromLocationAddress?: Address;
  /** The buyer's invoicing preference. Available only in the TR marketplace. */
  BuyerInvoicePreference?: "INDIVIDUAL" | "BUSINESS";
  /** Contains the business invoice tax information. */
  BuyerTaxInformation?: BuyerTaxInformation;
  /** Contains the instructions about the fulfillment like where should it be fulfilled from. */
  FulfillmentInstruction?: FulfillmentInstruction;
  /** When true, this order is marked to be picked up from a store rather than delivered. */
  IsISPU?: boolean;
  /** When true, this order is marked to be delivered to an Access Point. The access location is chosen by the customer. Access Points include Amazon Hub Lockers, Amazon Hub Counters, and pickup points operated by carriers. */
  IsAccessPointOrder?: boolean;
  /** Tax information about the marketplace. */
  MarketplaceTaxInfo?: MarketplaceTaxInfo;
  /** The seller’s friendly name registered in the marketplace. */
  SellerDisplayName?: string;
  /** The shipping address for the order. */
  ShippingAddress?: Address;
  /** Buyer information. */
  BuyerInfo?: BuyerInfo;
  /** Contains information regarding the Shipping Settings Automaton program, such as whether the order's shipping settings were generated automatically, and what those settings are. */
  AutomatedShippingSettings?: AutomatedShippingSettings;
  /** Whether the order contains regulated items which may require additional approval steps before being fulfilled. */
  HasRegulatedItems?: boolean;
  /** The status of the electronic invoice. */
  ElectronicInvoiceStatus?: ElectronicInvoiceStatus;
  /** Set of approval types which applies to at least one order item in the order. */
  ItemApprovalTypes?: ItemApprovalType[];
  /** Subset of all ItemApprovalStatus that are set in at least one of the order items subject to approvals. */
  ItemApprovalStatus?: ItemApprovalStatus[];
}

/** Buyer information for an order. */
export interface OrderBuyerInfo {
  /** An Amazon-defined order identifier, in 3-7-7 format. */
  AmazonOrderId: string;
  /** The anonymized email address of the buyer. */
  BuyerEmail?: string;
  /** The buyer name or the recipient name. */
  BuyerName?: string;
  /** The county of the buyer. */
  BuyerCounty?: string;
  /** Tax information about the buyer. */
  BuyerTaxInfo?: BuyerTaxInfo;
  /** The purchase order (PO) number entered by the buyer at checkout. Returned only for orders where the buyer entered a PO number at checkout. */
  PurchaseOrderNumber?: string;
}

/** The order's regulated information along with its verification status. */
export interface OrderRegulatedInfo {
  /** An Amazon-defined order identifier, in 3-7-7 format. */
  AmazonOrderId: string;
  /** The regulated information collected during purchase and used to verify the order. */
  RegulatedInformation: RegulatedInformation;
  /** When true, the order requires attaching a dosage information label when shipped. */
  RequiresDosageLabel: boolean;
  /** The order's verification status. */
  RegulatedOrderVerificationStatus: RegulatedOrderVerificationStatus;
}

/** The verification status of the order along with associated approval or rejection metadata. */
export interface RegulatedOrderVerificationStatus {
  /** The verification status of the order. */
  Status: VerificationStatus;
  /** When true, the regulated information provided in the order requires a review by the merchant. */
  RequiresMerchantAction: boolean;
  /** A list of valid rejection reasons that may be used to reject the order's regulated information. */
  ValidRejectionReasons: RejectionReason[];
  /** The reason for rejecting the order's regulated information. Not present if the order isn't rejected. */
  RejectionReason?: RejectionReason;
  /** The date the order was reviewed. In ISO 8601 date time format. */
  ReviewDate?: string;
  /** The identifier for the order's regulated information reviewer. */
  ExternalReviewerId?: string;
}

/** The reason for rejecting the order's regulated information. Not present if the order isn't rejected. */
export interface RejectionReason {
  /** The unique identifier for the rejection reason. */
  RejectionReasonId: string;
  /** The description of this rejection reason. */
  RejectionReasonDescription: string;
}

/** The verification status of the order. */
export enum VerificationStatus {
  Pending = "Pending",
  Approved = "Approved",
  Rejected = "Rejected",
  Expired = "Expired",
  Cancelled = "Cancelled",
}

/** The regulated information collected during purchase and used to verify the order. */
export interface RegulatedInformation {
  /** A list of regulated information fields as collected from the regulatory form. */
  Fields: RegulatedInformationField[];
}

/** A field collected from the regulatory form. */
export interface RegulatedInformationField {
  /** The unique identifier for the field. */
  FieldId: string;
  /** The name for the field. */
  FieldLabel: string;
  /** The type of field. */
  FieldType: "Text" | "FileAttachment";
  /** The content of the field as collected in regulatory form. Note that FileAttachment type fields will contain a URL to download the attachment here. */
  FieldValue: string;
}

/** The shipping address for the order. */
export interface OrderAddress {
  /** An Amazon-defined order identifier, in 3-7-7 format. */
  AmazonOrderId: string;
  /** Company name of the destination address. */
  BuyerCompanyName?: string;
  /** The shipping address for the order. */
  ShippingAddress?: Address;
  /** Contains all of the delivery instructions provided by the customer for the shipping address. */
  DeliveryPreferences?: DeliveryPreferences;
}

/** The shipping address for the order. */
export interface Address {
  /** The name. */
  Name: string;
  /** The street address. */
  AddressLine1?: string;
  /** Additional street address information, if required. */
  AddressLine2?: string;
  /** Additional street address information, if required. */
  AddressLine3?: string;
  /** The city  */
  City?: string;
  /** The county. */
  County?: string;
  /** The district. */
  District?: string;
  /** The state or region. */
  StateOrRegion?: string;
  /** The municipality. */
  Municipality?: string;
  /** The postal code. */
  PostalCode?: string;
  /** The country code. A two-character country code, in ISO 3166-1 alpha-2 format. */
  CountryCode?: string;
  /** The phone number. Not returned for Fulfillment by Amazon (FBA) orders. */
  Phone?: string;
  /** The address type of the shipping address. */
  AddressType?: "Residential" | "Commercial";
}

/** Contains all of the delivery instructions provided by the customer for the shipping address. */
export interface DeliveryPreferences {
  /** Drop-off location selected by the customer. */
  DropOffLocation?: string;
  /** Business hours and days when the delivery is preferred. */
  PreferredDeliveryTime?: PreferredDeliveryTime;
  /** Enumerated list of miscellaneous delivery attributes associated with the shipping address. */
  OtherAttributes?: OtherDeliveryAttributes[];
  /** Building instructions, nearby landmark or navigation instructions. */
  AddressInstructions?: string;
}

/** The time window when the delivery is preferred. */
export interface PreferredDeliveryTime {
  /** Business hours when the business is open for deliveries. */
  BusinessHours?: BusinessHours[];
  /** Dates when the business is closed in the next 30 days. */
  ExceptionDates?: ExceptionDates[];
}

/** Business days and hours when the destination is open for deliveries. */
export interface BusinessHours {
  /** Day of the week. */
  DayOfWeek?: "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT";
  /** Time window during the day when the business is open. */
  OpenIntervals?: OpenInterval[];
}

/** Dates when the business is closed or open with a different time window. */
export interface ExceptionDates {
  /** Date when the business is closed, in ISO-8601 date format. */
  ExceptionDate?: string;
  /** Boolean indicating if the business is closed or open on that date. */
  IsOpen?: boolean;
  /** Time window during the day when the business is open. */
  OpenIntervals?: OpenInterval[];
}

/** The time interval for which the business is open. */
export interface OpenInterval {
  /** The time when the business opens. */
  StartTime?: OpenTimeInterval;
  /** The time when the business closes. */
  EndTime?: OpenTimeInterval;
}

/** The time when the business opens or closes. */
export interface OpenTimeInterval {
  /** The hour when the business opens or closes. */
  Hour?: number;
  /** The minute when the business opens or closes. */
  Minute?: number;
}

/** Miscellaneous delivery attributes associated with the shipping address. */
export enum OtherDeliveryAttributes {
  HAS_ACCESS_POINT = "HAS_ACCESS_POINT",
  PALLET_ENABLED = "PALLET_ENABLED",
  PALLET_DISABLED = "PALLET_DISABLED",
}

/** The monetary value of the order. */
export interface Money {
  /** The three-digit currency code. In ISO 4217 format. */
  CurrencyCode?: string;
  /** The currency amount. */
  Amount?: string;
}

/** A list of payment method detail items. */
export type PaymentMethodDetailItemList = string[];

/** A list of payment execution detail items. */
export type PaymentExecutionDetailItemList = PaymentExecutionDetailItem[];

/** Information about a sub-payment method used to pay for a COD order. */
export interface PaymentExecutionDetailItem {
  /** The monetary value of the order. */
  Payment: Money;
  /**
   * A sub-payment method for a COD order.
   *
   * Possible values:
   *
   * * COD - Cash On Delivery.
   *
   * * GC - Gift Card.
   *
   * * PointsAccount - Amazon Points.
   */
  PaymentMethod: string;
}

/** Tax information about the buyer. */
export interface BuyerTaxInfo {
  /** The legal name of the company. */
  CompanyLegalName?: string;
  /** The country or region imposing the tax. */
  TaxingRegion?: string;
  /** A list of tax classifications that apply to the order. */
  TaxClassifications?: TaxClassification[];
}

/** Tax information about the marketplace. */
export interface MarketplaceTaxInfo {
  /** A list of tax classifications that apply to the order. */
  TaxClassifications?: TaxClassification[];
}

/** The tax classification for the order. */
export interface TaxClassification {
  /** The type of tax. */
  Name?: string;
  /** The buyer's tax identifier. */
  Value?: string;
}

/** The order items list along with the order ID. */
export interface OrderItemsList {
  /** A list of order items. */
  OrderItems: OrderItemList;
  /** When present and not empty, pass this string token in the next request to return the next response page. */
  NextToken?: string;
  /** An Amazon-defined order identifier, in 3-7-7 format. */
  AmazonOrderId: string;
}

/** A list of order items. */
export type OrderItemList = OrderItem[];

/** A single order item. */
export interface OrderItem {
  /** The Amazon Standard Identification Number (ASIN) of the item. */
  ASIN: string;
  /** The seller stock keeping unit (SKU) of the item. */
  SellerSKU?: string;
  /** An Amazon-defined order item identifier. */
  OrderItemId: string;
  /** The name of the item. */
  Title?: string;
  /** The number of items in the order.  */
  QuantityOrdered: number;
  /** The number of items shipped. */
  QuantityShipped?: number;
  /** Product information for the item. */
  ProductInfo?: ProductInfoDetail;
  /** The number and value of Amazon Points granted with the purchase of an item. */
  PointsGranted?: PointsGrantedDetail;
  /** The selling price of the order item. Note that an order item is an item and a quantity. This means that the value of ItemPrice is equal to the selling price of the item multiplied by the quantity ordered. Note that ItemPrice excludes ShippingPrice and GiftWrapPrice. */
  ItemPrice?: Money;
  /** The shipping price of the item. */
  ShippingPrice?: Money;
  /** The tax on the item price. */
  ItemTax?: Money;
  /** The tax on the shipping price. */
  ShippingTax?: Money;
  /** The discount on the shipping price. */
  ShippingDiscount?: Money;
  /** The tax on the discount on the shipping price. */
  ShippingDiscountTax?: Money;
  /** The total of all promotional discounts in the offer. */
  PromotionDiscount?: Money;
  /** The tax on the total of all promotional discounts in the offer. */
  PromotionDiscountTax?: Money;
  /** A list of promotion identifiers provided by the seller when the promotions were created. */
  PromotionIds?: PromotionIdList;
  /** The fee charged for COD service. */
  CODFee?: Money;
  /** The discount on the COD fee. */
  CODFeeDiscount?: Money;
  /** When true, the item is a gift. */
  IsGift?: boolean;
  /** The condition of the item as described by the seller. */
  ConditionNote?: string;
  /**
   * The condition of the item.
   *
   * Possible values: New, Used, Collectible, Refurbished, Preorder, Club.
   */
  ConditionId?: string;
  /**
   * The subcondition of the item.
   *
   * Possible values: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, Any, Other.
   */
  ConditionSubtypeId?: string;
  /** The start date of the scheduled delivery window in the time zone of the order destination. In ISO 8601 date time format. */
  ScheduledDeliveryStartDate?: string;
  /** The end date of the scheduled delivery window in the time zone of the order destination. In ISO 8601 date time format. */
  ScheduledDeliveryEndDate?: string;
  /**
   * Indicates that the selling price is a special price that is available only for Amazon Business orders. For more information about the Amazon Business Seller Program, see the [Amazon Business website](https://www.amazon.com/b2b/info/amazon-business).
   *
   * Possible values: BusinessPrice - A special price that is available only for Amazon Business orders.
   */
  PriceDesignation?: string;
  /** Information about withheld taxes. */
  TaxCollection?: TaxCollection;
  /**
   * When true, the product type for this item has a serial number.
   *
   * Returned only for Amazon Easy Ship orders.
   */
  SerialNumberRequired?: boolean;
  /** When true, transparency codes are required. */
  IsTransparency?: boolean;
  /** The IOSS number for the marketplace. Sellers shipping to the European Union (EU) from outside of the EU must provide this IOSS number to their carrier when Amazon has collected the VAT on the sale. */
  IossNumber?: string;
  /** The store chain store identifier. Linked to a specific store in a store chain. */
  StoreChainStoreId?: string;
  /** The category of deemed reseller. This applies to selling partners that are not based in the EU and is used to help them meet the VAT Deemed Reseller tax laws in the EU and UK. */
  DeemedResellerCategory?: "IOSS" | "UOSS";
  /** A single item's buyer information. */
  BuyerInfo?: ItemBuyerInfo;
  /** Information about whether or not a buyer requested cancellation. */
  BuyerRequestedCancel?: BuyerRequestedCancel;
  /** Item approval context containing the information regarding the status and progress of the item approval. */
  ItemApprovalContext?: ItemApprovalContext;
  /** A list of serial numbers for electronic products that are shipped to customers. Returned for FBA orders only. */
  SerialNumbers?: string[];
}

/** A single order item's buyer information list with the order ID. */
export interface OrderItemsBuyerInfoList {
  /** A single order item's buyer information list. */
  OrderItems: OrderItemBuyerInfoList;
  /** When present and not empty, pass this string token in the next request to return the next response page. */
  NextToken?: string;
  /** An Amazon-defined order identifier, in 3-7-7 format. */
  AmazonOrderId: string;
}

/** A single order item's buyer information list. */
export type OrderItemBuyerInfoList = OrderItemBuyerInfo[];

/** A single order item's buyer information. */
export interface OrderItemBuyerInfo {
  /** An Amazon-defined order item identifier. */
  OrderItemId: string;
  /** Buyer information for custom orders from the Amazon Custom program. */
  BuyerCustomizedInfo?: BuyerCustomizedInfoDetail;
  /** The gift wrap price of the item. */
  GiftWrapPrice?: Money;
  /** The tax on the gift wrap price. */
  GiftWrapTax?: Money;
  /** A gift message provided by the buyer. */
  GiftMessageText?: string;
  /** The gift wrap level specified by the buyer. */
  GiftWrapLevel?: string;
}

/** The number of Amazon Points offered with the purchase of an item, and their monetary value. */
export interface PointsGrantedDetail {
  /** The number of Amazon Points granted with the purchase of an item. */
  PointsNumber?: number;
  /** The monetary value of the Amazon Points granted. */
  PointsMonetaryValue?: Money;
}

/** Product information on the number of items. */
export interface ProductInfoDetail {
  /** The total number of items that are included in the ASIN. */
  NumberOfItems?: number;
}

/** A list of promotion identifiers provided by the seller when the promotions were created. */
export type PromotionIdList = string[];

/** Buyer information for custom orders from the Amazon Custom program. */
export interface BuyerCustomizedInfoDetail {
  /** The location of a zip file containing Amazon Custom data. */
  CustomizedURL?: string;
}

/** Information about withheld taxes. */
export interface TaxCollection {
  /** The tax collection model applied to the item. */
  Model?: "MarketplaceFacilitator";
  /** The party responsible for withholding the taxes and remitting them to the taxing authority. */
  ResponsibleParty?: "Amazon Services, Inc.";
}

/** Contains the business invoice tax information. Available only in the TR marketplace. */
export interface BuyerTaxInformation {
  /** Business buyer's company legal name. */
  BuyerLegalCompanyName?: string;
  /** Business buyer's address. */
  BuyerBusinessAddress?: string;
  /** Business buyer's tax registration ID. */
  BuyerTaxRegistrationId?: string;
  /** Business buyer's tax office. */
  BuyerTaxOffice?: string;
}

/** Contains the instructions about the fulfillment like where should it be fulfilled from. */
export interface FulfillmentInstruction {
  /** Denotes the recommended sourceId where the order should be fulfilled from. */
  FulfillmentSupplySourceId?: string;
}

/** Buyer information. */
export interface BuyerInfo {
  /** The anonymized email address of the buyer. */
  BuyerEmail?: string;
  /** The buyer name or the recipient name. */
  BuyerName?: string;
  /** The county of the buyer. */
  BuyerCounty?: string;
  /** Tax information about the buyer. */
  BuyerTaxInfo?: BuyerTaxInfo;
  /** The purchase order (PO) number entered by the buyer at checkout. Returned only for orders where the buyer entered a PO number at checkout. */
  PurchaseOrderNumber?: string;
}

/** A single item's buyer information. */
export interface ItemBuyerInfo {
  /** Buyer information for custom orders from the Amazon Custom program. */
  BuyerCustomizedInfo?: BuyerCustomizedInfoDetail;
  /** The gift wrap price of the item. */
  GiftWrapPrice?: Money;
  /** The tax on the gift wrap price. */
  GiftWrapTax?: Money;
  /** A gift message provided by the buyer. */
  GiftMessageText?: string;
  /** The gift wrap level specified by the buyer. */
  GiftWrapLevel?: string;
}

/** Contains information regarding the Shipping Settings Automation program, such as whether the order's shipping settings were generated automatically, and what those settings are. */
export interface AutomatedShippingSettings {
  /** When true, this order has automated shipping settings generated by Amazon. This order could be identified as an SSA order. */
  HasAutomatedShippingSettings?: boolean;
  /** Auto-generated carrier for SSA orders. */
  AutomatedCarrier?: string;
  /** Auto-generated ship method for SSA orders. */
  AutomatedShipMethod?: string;
}

/** Information about whether or not a buyer requested cancellation. */
export interface BuyerRequestedCancel {
  /** When true, the buyer has requested cancellation. */
  IsBuyerRequestedCancel?: boolean;
  /** The reason that the buyer requested cancellation. */
  BuyerCancelReason?: string;
}

/** The status of the Amazon Easy Ship order. This property is included only for Amazon Easy Ship orders. */
export enum EasyShipShipmentStatus {
  PendingSchedule = "PendingSchedule",
  PendingPickUp = "PendingPickUp",
  PendingDropOff = "PendingDropOff",
  LabelCanceled = "LabelCanceled",
  PickedUp = "PickedUp",
  DroppedOff = "DroppedOff",
  AtOriginFC = "AtOriginFC",
  AtDestinationFC = "AtDestinationFC",
  Delivered = "Delivered",
  RejectedByBuyer = "RejectedByBuyer",
  Undeliverable = "Undeliverable",
  ReturningToSeller = "ReturningToSeller",
  ReturnedToSeller = "ReturnedToSeller",
  Lost = "Lost",
  OutForDelivery = "OutForDelivery",
  Damaged = "Damaged",
}

/** The status of the electronic invoice. */
export enum ElectronicInvoiceStatus {
  NotRequired = "NotRequired",
  NotFound = "NotFound",
  Processing = "Processing",
  Errored = "Errored",
  Accepted = "Accepted",
}

/** Defines the approval process types available for order items. */
export enum ItemApprovalType {
  LEONARDI_APPROVAL = "LEONARDI_APPROVAL",
}

/** Defines the possible status of an order item approval. */
export enum ItemApprovalStatus {
  PENDING_SELLING_PARTNER_APPROVAL = "PENDING_SELLING_PARTNER_APPROVAL",
  PROCESSING_SELLING_PARTNER_APPROVAL = "PROCESSING_SELLING_PARTNER_APPROVAL",
  PENDING_AMAZON_APPROVAL = "PENDING_AMAZON_APPROVAL",
  APPROVED = "APPROVED",
  APPROVED_WITH_CHANGES = "APPROVED_WITH_CHANGES",
  DECLINED = "DECLINED",
}

/** Generic item approval context. Check the applicable restrictions at the specific approval type schemas. */
export interface ItemApprovalContext {
  /** The approval process type required for the order item. */
  ApprovalType: ItemApprovalType;
  /** Current status of the order item approval. */
  ApprovalStatus: ItemApprovalStatus;
  /** List of additional data elements supporting the approval process. Check the applicable restrictions at the specific approval type schemas. */
  ApprovalSupportData?: ApprovalSupportDataElementList;
}

/** List of additional data elements supporting the approval process. Check the applicable restrictions at the specific approval type schemas. */
export type ApprovalSupportDataElementList = ApprovalSupportDataElement[];

/** <Name, Value> tuple to define item approval support data elements. */
export interface ApprovalSupportDataElement {
  /** Name of the approval support element. Allowed names are defined in specific approval types schemas. */
  Name: string;
  /** String value of the approval support element. */
  Value: string;
}

/** Generic item approval. Check the applicable restrictions at the specific approval type schemas. */
export interface ItemApproval {
  /** Sequence number of the item approval. Each ItemApproval gets its sequenceId automatically from a monotonic increasing function. */
  SequenceId: number;
  /** Timestamp when the ItemApproval was recorded by Amazon's internal order approvals system. In ISO 8601 date time format. */
  Timestamp: string;
  /** High level actors involved in the approval process. */
  Actor: "SELLING_PARTNER" | "AMAZON";
  /** Person or system that triggers the approval actions on behalf of the actor. */
  Approver?: string;
  /** Approval action that defines the behavior of the ItemApproval. */
  ApprovalAction: ItemApprovalAction;
  /** Status of approval action. */
  ApprovalActionProcessStatus: "PROCESSING" | "SUCCESS" | "ERROR";
  /** Optional message to communicate optional additional context about the current status of the approval action. */
  ApprovalActionProcessStatusMessage?: string;
}

/** This object represents an approval action used by the actors in the order item approval process. Check the applicable restrictions at the specific approval type schemas. */
export interface ItemApprovalAction {
  /** Defines the type of action for the approval. */
  ActionType: "APPROVE" | "DECLINE" | "APPROVE_WITH_CHANGES";
  /** Comment message to provide optional additional context on the approval action. */
  Comment?: string;
  /** Changes required for the approval. Each approval type defines the allowed changes valid sub-set in its specific schema. */
  Changes?: {
    /** Price to be charged to the customer for each unit of the item. If substitutedBy is specified, this value applies to the substitution item. */
    ItemPrice?: Money;
    /** Quantity approved. If substitutedBy is specified, this value applies to the substitution item. */
    Quantity?: number;
    /** Identifier of the item to substitute this item in the order. */
    SubstitutedBy?: ItemIdentifier;
  };
}

/** Item identifiers used in the context of approvals operations. */
export interface ItemIdentifier {
  /** Defines the type of identifiers allowed to specify a substitution. */
  IdentifierType: "ASIN" | "SELLER_SKU" | "EXTERNAL_ID";
  Identifier: string;
}

/** The response schema for the getOrderApprovalsItems operation. */
export interface GetOrderApprovalsResponse {
  /** The payload for the getOrderItemsApprovals operation. */
  payload?: OrderApprovalsResponse;
  /** One or more unexpected errors occurred during the getOrderItemsApprovals operation. */
  errors?: ErrorList;
}

/** The order items list with approvals along with the order ID. */
export interface OrderApprovalsResponse {
  /** When present and not empty, pass this string token in the next request to return the next response page. */
  NextToken?: string;
  /** List of OrderItemApprovals. */
  OrderItemsApprovalsList: OrderItemApprovals[];
}

/** List of item approvals gathered during the approval process. */
export interface OrderItemApprovals {
  /** The unique identifier of the order item. */
  OrderItemId: string;
  /** The approval process type required for the order item. */
  ApprovalType: ItemApprovalType;
  /** Current status of the order item approval. */
  ApprovalStatus: ItemApprovalStatus;
  ItemApprovals: ItemApproval[];
}

/** The request body for the updateOrderItemsApprovals operation. */
export interface UpdateOrderApprovalsRequest {
  /** Person or system that triggers the approval actions on behalf of the actor. */
  Approver?: string;
  /** A list of item approval requests. */
  OrderItemsApprovalRequests: OrderItemApprovalRequest[];
}

/** Order item apecific approval request. */
export interface OrderItemApprovalRequest {
  /** The unique identifier of the order item. */
  OrderItemId: string;
  /** Approval action that defines the behavior of the ItemApproval. */
  ApprovalAction: ItemApprovalAction;
}

/** The error response schema for the updateOrderItemsApprovals operation. */
export interface UpdateItemsApprovalsErrorResponse {
  /** One or more unexpected errors occurred during the updateOrderItemsApprovals operation. */
  errors?: ErrorList;
}

/** A list of error responses returned when a request is unsuccessful. */
export type ErrorList = Error[];

/** Error response returned when the request is unsuccessful. */
export interface Error {
  /** An error code that identifies the type of error that occurred. */
  code: string;
  /** A message that describes the error condition. */
  message: string;
  /** Additional details that can help the caller understand or fix the issue. */
  details?: string;
}
