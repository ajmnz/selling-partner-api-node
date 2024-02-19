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

/** The response schema for the getOrders operation. */
export interface GetOrdersResponse {
  /** A list of purchase orders. */
  payload?: OrderList;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** The response schema for the getOrder operation. */
export interface GetOrderResponse {
  /** The payload for the getOrder operation. */
  payload?: Order;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

export interface OrderList {
  pagination?: Pagination;
  orders?: Order[];
}

export interface Pagination {
  /** A generated string used to pass information to your next request. If NextToken is returned, pass the value of NextToken to the next request. If NextToken is not returned, there are no more order items to return. */
  nextToken?: string;
}

export interface Order {
  /** The purchase order number for this order. Formatting Notes: alpha-numeric code. */
  purchaseOrderNumber: string;
  /** Purchase order details. */
  orderDetails?: OrderDetails;
}

/** Details of an order. */
export interface OrderDetails {
  /** The customer order number. */
  customerOrderNumber: string;
  /**
   * The date the order was placed. This field is expected to be in ISO-8601 date/time format, for example:2018-07-16T23:00:00Z/ 2018-07-16T23:00:00-05:00 /2018-07-16T23:00:00-08:00. If no time zone is specified, UTC should be assumed.
   * @format date-time
   */
  orderDate: string;
  /** Current status of the order. */
  orderStatus?: "NEW" | "SHIPPED" | "ACCEPTED" | "CANCELLED";
  /** Shipment details required for the shipment. */
  shipmentDetails: ShipmentDetails;
  taxTotal?: {
    /** Tax details. */
    taxLineItem?: TaxLineItem;
  };
  /** PartyID of vendor code. */
  sellingParty: PartyIdentification;
  /** PartyID of vendor's warehouse. */
  shipFromParty: PartyIdentification;
  /** Name/Address and tax details of the ship to party. */
  shipToParty: Address;
  /** Name/Address and tax details of the bill to party. */
  billToParty: PartyIdentification;
  /** A list of items in this purchase order. */
  items: OrderItem[];
}

export interface PartyIdentification {
  /** Assigned identification for the party. For example, warehouse code or vendor code. Please refer to specific party for more details. */
  partyId: string;
  /** Address details of the party. */
  address?: Address;
  /** Tax registration details of the entity. */
  taxInfo?: TaxRegistrationDetails;
}

/** Tax registration details of the entity. */
export interface TaxRegistrationDetails {
  /** Tax registration type for the entity. */
  taxRegistrationType?: "VAT" | "GST";
  /** Tax registration number for the party. For example, VAT ID. */
  taxRegistrationNumber: string;
  /** Address associated with the tax registration number. */
  taxRegistrationAddress?: Address;
  /** Tax registration message that can be used for additional tax related details. */
  taxRegistrationMessages?: string;
}

/** Address of the party. */
export interface Address {
  /** The name of the person, business or institution at that address. For Amazon label only vendors, this field will have the value `xxxxx` within the object `shipToParty`. */
  name: string;
  /** The attention name of the person at that address. For Amazon label only vendors, this field will have the value `xxxxx` within the object `shipToParty`. */
  attention?: string;
  /** First line of the address. For Amazon label only vendors, this field will have the value `xxxxx` within the object `shipToParty`. */
  addressLine1: string;
  /** Additional address information, if required. For Amazon label only vendors, this field will have the value `xxxxx` within the object `shipToParty`. */
  addressLine2?: string;
  /** Additional address information, if required. For Amazon label only vendors, this field will have the value `xxxxx` within the object `shipToParty`. */
  addressLine3?: string;
  /** The city where the person, business or institution is located. For Amazon label only vendors, this field will have the value `xxxxx` within the object `shipToParty`. */
  city?: string;
  /** The county where person, business or institution is located. For Amazon label only vendors, this field will have the value `xxxxx` within the object `shipToParty`. */
  county?: string;
  /** The district where person, business or institution is located. For Amazon label only vendors, this field will have the value `xxxxx` within the object `shipToParty`. */
  district?: string;
  /** The state or region where person, business or institution is located. */
  stateOrRegion: string;
  /** The postal code of that address. It conatins a series of letters or digits or both, sometimes including spaces or punctuation. */
  postalCode?: string;
  /** The two digit country code. In ISO 3166-1 alpha-2 format. */
  countryCode: string;
  /** The phone number of the person, business or institution located at that address. For Amazon label only vendors, this field will have the value `xxxxx` within the object `shipToParty`. */
  phone?: string;
}

export interface OrderItem {
  /** Numbering of the item on the purchase order. The first item will be 1, the second 2, and so on. */
  itemSequenceNumber: string;
  /** Buyer's standard identification number (ASIN) of an item. */
  buyerProductIdentifier?: string;
  /** The vendor selected product identification of the item. */
  vendorProductIdentifier?: string;
  /** Title for the item. */
  title?: string;
  /** Item quantity ordered. */
  orderedQuantity: ItemQuantity;
  /** Details for the scheduled delivery shipment. */
  scheduledDeliveryShipment?: ScheduledDeliveryShipment;
  /** Gift message and wrapId details. */
  giftDetails?: GiftDetails;
  /** Net price (before tax) to vendor with currency details. */
  netPrice: Money;
  /** Total tax details for the line item. */
  taxDetails?: {
    /** Tax details. */
    taxLineItem?: TaxLineItem;
  };
  /** The price to Amazon each (cost). */
  totalPrice?: Money;
}

/** An amount of money, including units in the form of currency. */
export interface Money {
  /** Three digit currency code in ISO 4217 format. String of length 3. */
  currencyCode?: string;
  /** A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. */
  amount?: Decimal;
}

/** A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. */
export type Decimal = string;

/** The response schema for the submitAcknowledgement operation. */
export interface SubmitAcknowledgementResponse {
  /** The payload for the submitAcknowledgement operation. */
  payload?: TransactionId;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

export interface TransactionId {
  /** GUID assigned by Amazon to identify this transaction. This value can be used with the Transaction Status API to return the status of this transaction. */
  transactionId?: string;
}

/** A list of error responses returned when a request is unsuccessful. */
export type ErrorList = Error[];

/** The request schema for the submitAcknowledgement operation. */
export interface SubmitAcknowledgementRequest {
  /** A list of one or more purchase orders. */
  orderAcknowledgements?: OrderAcknowledgementItem[];
}

/** Details of an individual order being acknowledged. */
export interface OrderAcknowledgementItem {
  /** The purchase order number for this order. Formatting Notes: alpha-numeric code. */
  purchaseOrderNumber: string;
  /** The vendor's order number for this order. */
  vendorOrderNumber: string;
  /**
   * The date and time when the order is acknowledged, in ISO-8601 date/time format. For example: 2018-07-16T23:00:00Z / 2018-07-16T23:00:00-05:00 / 2018-07-16T23:00:00-08:00.
   * @format date-time
   */
  acknowledgementDate: string;
  /** Status of acknowledgement. */
  acknowledgementStatus: AcknowledgementStatus;
  /** PartyID as vendor code. */
  sellingParty: PartyIdentification;
  /** PartyID as the vendor's warehouseId. */
  shipFromParty: PartyIdentification;
  /** Item details including acknowledged quantity. */
  itemAcknowledgements: OrderItemAcknowledgement[];
}

export interface OrderItemAcknowledgement {
  /** Line item sequence number for the item. */
  itemSequenceNumber: string;
  /** Buyer's standard identification number (ASIN) of an item. */
  buyerProductIdentifier?: string;
  /** The vendor selected product identification of the item. Should be the same as was provided in the purchase order. */
  vendorProductIdentifier?: string;
  /** Details of quantity acknowledged with the above acknowledgement code. */
  acknowledgedQuantity: ItemQuantity;
}

/** Details of quantity ordered. */
export interface ItemQuantity {
  /** Acknowledged quantity. This value should not be zero. */
  amount?: number;
  /** Unit of measure for the acknowledged quantity. */
  unitOfMeasure?: "Each";
}

/** A list of tax line items. */
export type TaxLineItem = TaxDetails[];

export interface TaxDetails {
  /** A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. */
  taxRate?: Decimal;
  /** An amount of money, including units in the form of currency. */
  taxAmount: Money;
  /** An amount of money, including units in the form of currency. */
  taxableAmount?: Money;
  /** Tax type. */
  type?: "CONSUMPTION" | "GST" | "MwSt." | "PST" | "TOTAL" | "TVA" | "VAT";
}

/** Status of acknowledgement. */
export interface AcknowledgementStatus {
  /** Acknowledgement code is a unique two digit value which indicates the status of the acknowledgement. For a list of acknowledgement codes that Amazon supports, see the Vendor Direct Fulfillment APIs Use Case Guide. */
  code?: string;
  /** Reason for the acknowledgement code. */
  description?: string;
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

/** Shipment details required for the shipment. */
export interface ShipmentDetails {
  /** When true, this is a priority shipment. */
  isPriorityShipment: boolean;
  /** When true, this order is part of a scheduled delivery program. */
  isScheduledDeliveryShipment?: boolean;
  /** When true, a packing slip is required to be sent to the customer. */
  isPslipRequired: boolean;
  /** When true, the order contain a gift. Include the gift message and gift wrap information. */
  isGift?: boolean;
  /** Ship method to be used for shipping the order. Amazon defines ship method codes indicating the shipping carrier and shipment service level. To see the full list of ship methods in use, including both the code and the friendly name, search the 'Help' section on Vendor Central for 'ship methods'. */
  shipMethod: string;
  /** Shipment dates. */
  shipmentDates: ShipmentDates;
  /** Message to customer for order status. */
  messageToCustomer: string;
}

/** Shipment dates. */
export interface ShipmentDates {
  /**
   * Time by which the vendor is required to ship the order.
   * @format date-time
   */
  requiredShipDate: string;
  /**
   * Delivery date promised to the Amazon customer.
   * @format date-time
   */
  promisedDeliveryDate?: string;
}

/** Dates for the scheduled delivery shipments. */
export interface ScheduledDeliveryShipment {
  /** Scheduled delivery service type. */
  scheduledDeliveryServiceType?: string;
  /**
   * Earliest nominated delivery date for the scheduled delivery.
   * @format date-time
   */
  earliestNominatedDeliveryDate?: string;
  /**
   * Latest nominated delivery date for the scheduled delivery.
   * @format date-time
   */
  latestNominatedDeliveryDate?: string;
}

/** Gift details for the item. */
export interface GiftDetails {
  /** Gift message to be printed in shipment. */
  giftMessage?: string;
  /** Gift wrap identifier for the gift wrapping, if any. */
  giftWrapId?: string;
}
