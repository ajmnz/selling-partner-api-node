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

/** The response schema for the getPurchaseOrders operation. */
export interface GetPurchaseOrdersResponse {
  /** A list of orders. */
  payload?: OrderList;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** The response schema for the getPurchaseOrder operation. */
export interface GetPurchaseOrderResponse {
  /** The details of the requested order */
  payload?: Order;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

export interface OrderList {
  pagination?: Pagination;
  orders?: Order[];
}

export interface Pagination {
  /** A generated string used to pass information to your next request. If NextToken is returned, pass the value of NextToken to the next request. If NextToken is not returned, there are no more purchase order items to return. */
  nextToken?: string;
}

export interface Order {
  /** The purchase order number for this order. Formatting Notes: 8-character alpha-numeric code. */
  purchaseOrderNumber: string;
  /** This field will contain the current state of the purchase order. */
  purchaseOrderState: "New" | "Acknowledged" | "Closed";
  /** Details of an order. */
  orderDetails?: OrderDetails;
}

/** Details of an order. */
export interface OrderDetails {
  /**
   * The date the purchase order was placed. Must be in ISO-8601 date/time format.
   * @format date-time
   */
  purchaseOrderDate: string;
  /**
   * The date when purchase order was last changed by Amazon after the order was placed. This date will be greater than 'purchaseOrderDate'. This means the PO data was changed on that date and vendors are required to fulfill the  updated PO. The PO changes can be related to Item Quantity, Ship to Location, Ship Window etc. This field will not be present in orders that have not changed after creation. Must be in ISO-8601 date/time format.
   * @format date-time
   */
  purchaseOrderChangedDate?: string;
  /**
   * The date when current purchase order state was changed. Current purchase order state is available in the field 'purchaseOrderState'. Must be in ISO-8601 date/time format.
   * @format date-time
   */
  purchaseOrderStateChangedDate: string;
  /** Type of purchase order. */
  purchaseOrderType?:
    | "RegularOrder"
    | "ConsignedOrder"
    | "NewProductIntroduction"
    | "RushOrder";
  /** If the purchase order is an import order, the details for the import order. */
  importDetails?: ImportDetails;
  /** If requested by the recipient, this field will contain a promotional/deal number. The discount code line is optional. It is used to obtain a price discount on items on the order. */
  dealCode?: string;
  /** Payment method used. */
  paymentMethod?: "Invoice" | "Consignment" | "CreditCard" | "Prepaid";
  /** Name/Address and tax details of the buying party. */
  buyingParty?: PartyIdentification;
  /** Name/Address and tax details of the selling party. */
  sellingParty?: PartyIdentification;
  /** Name/Address and tax details of the ship to party. Find a list of fulfillment center addresses for a region on the [Resources page of Amazon Vendor Central](https://vendorcentral.amazon.com/hz/vendor/members/support/help/node/GPZ88XH8HQM97ZV6). */
  shipToParty?: PartyIdentification;
  /** Name/Address and tax details of the bill to party. */
  billToParty?: PartyIdentification;
  /** This indicates the ship window. Format is start and end date separated by double hyphen (--). For example, 2007-03-01T13:00:00Z--2007-03-11T15:30:00Z. */
  shipWindow?: DateTimeInterval;
  /** This indicates the delivery window. Format is start and end date separated by double hyphen (--). For example, 2007-03-01T13:00:00Z--2007-03-11T15:30:00Z. */
  deliveryWindow?: DateTimeInterval;
  /** A list of items in this purchase order. */
  items: OrderItem[];
}

/** Import details for an import order. */
export interface ImportDetails {
  /** If the recipient requests, contains the shipment method of payment. This is for import PO's only. */
  methodOfPayment?:
    | "PaidByBuyer"
    | "CollectOnDelivery"
    | "DefinedByBuyerAndSeller"
    | "FOBPortOfCall"
    | "PrepaidBySeller"
    | "PaidBySeller";
  /** Incoterms (International Commercial Terms) are used to divide transaction costs and responsibilities between buyer and seller and reflect state-of-the-art transportation practices. This is for import purchase orders only.  */
  internationalCommercialTerms?:
    | "ExWorks"
    | "FreeCarrier"
    | "FreeOnBoard"
    | "FreeAlongSideShip"
    | "CarriagePaidTo"
    | "CostAndFreight"
    | "CarriageAndInsurancePaidTo"
    | "CostInsuranceAndFreight"
    | "DeliveredAtTerminal"
    | "DeliveredAtPlace"
    | "DeliverDutyPaid";
  /**
   * The port where goods on an import purchase order must be delivered by the vendor. This should only be specified when the internationalCommercialTerms is FOB.
   * @maxLength 64
   */
  portOfDelivery?: string;
  /**
   * Types and numbers of container(s) for import purchase orders. Can be a comma-separated list if the shipment has multiple containers. HC signifies a high-capacity container. Free-text field, limited to 64 characters. The format will be a comma-delimited list containing values of the type: $NUMBER_OF_CONTAINERS_OF_THIS_TYPE-$CONTAINER_TYPE. The list of values for the container type is: 40'(40-foot container), 40'HC (40-foot high-capacity container), 45', 45'HC, 30', 30'HC, 20', 20'HC.
   * @maxLength 64
   */
  importContainers?: string;
  /** Special instructions regarding the shipment. This field is for import purchase orders. */
  shippingInstructions?: string;
}

/** Defines a date time interval according to ISO8601. Interval is separated by double hyphen (--). */
export type DateTimeInterval = string;

export interface PartyIdentification {
  /** Assigned identification for the party. For example, warehouse code or vendor code. Please refer to specific party for more details. */
  partyId: string;
  /** Identification of the party by address. */
  address?: Address;
  /** Tax registration details of the party. */
  taxInfo?: TaxRegistrationDetails;
}

/** Tax registration details of the entity. */
export interface TaxRegistrationDetails {
  /** Tax registration type for the entity. */
  taxRegistrationType: "VAT" | "GST";
  /** Tax registration number for the entity. For example, VAT ID. */
  taxRegistrationNumber: string;
}

/** Address of the party. */
export interface Address {
  /** The name of the person, business or institution at that address. */
  name: string;
  /** First line of the address. */
  addressLine1: string;
  /** Additional address information, if required. */
  addressLine2?: string;
  /** Additional address information, if required. */
  addressLine3?: string;
  /** The city where the person, business or institution is located. */
  city?: string;
  /** The county where person, business or institution is located. */
  county?: string;
  /** The district where person, business or institution is located. */
  district?: string;
  /** The state or region where person, business or institution is located. */
  stateOrRegion?: string;
  /** The postal code of that address. It conatins a series of letters or digits or both, sometimes including spaces or punctuation. */
  postalCode?: string;
  /**
   * The two digit country code. In ISO 3166-1 alpha-2 format.
   * @maxLength 2
   */
  countryCode: string;
  /** The phone number of the person, business or institution located at that address. */
  phone?: string;
}

export interface OrderItem {
  /** Numbering of the item on the purchase order. The first item will be 1, the second 2, and so on. */
  itemSequenceNumber: string;
  /** Amazon Standard Identification Number (ASIN) of an item. */
  amazonProductIdentifier?: string;
  /** The vendor selected product identification of the item. */
  vendorProductIdentifier?: string;
  /** Item quantity ordered. */
  orderedQuantity: ItemQuantity;
  /** When true, we will accept backorder confirmations for this item. */
  isBackOrderAllowed: boolean;
  /** The price to Amazon each (cost). */
  netCost?: Money;
  /** The price to Amazon each (list). */
  listPrice?: Money;
}

/** An amount of money, including units in the form of currency. */
export interface Money {
  /**
   * Three digit currency code in ISO 4217 format. String of length 3.
   * @maxLength 3
   */
  currencyCode?: string;
  /** A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\d*))(\.\d+)?([eE][+-]?\d+)?$`. */
  amount?: Decimal;
}

/** A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\d*))(\.\d+)?([eE][+-]?\d+)?$`. */
export type Decimal = string;

/** The response schema for the submitAcknowledgement operation */
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

/** The request schema for the submitAcknowledgment operation. */
export interface SubmitAcknowledgementRequest {
  acknowledgements?: OrderAcknowledgement[];
}

export interface OrderAcknowledgement {
  /** The purchase order number. Formatting Notes: 8-character alpha-numeric code. */
  purchaseOrderNumber: string;
  /** Name, address and tax details of the party receiving a shipment of products. */
  sellingParty: PartyIdentification;
  /**
   * The date and time when the purchase order is acknowledged, in ISO-8601 date/time format.
   * @format date-time
   */
  acknowledgementDate: string;
  /** A list of the items being acknowledged with associated details. */
  items: OrderAcknowledgementItem[];
}

/** Details of the item being acknowledged. */
export interface OrderAcknowledgementItem {
  /** Line item sequence number for the item. */
  itemSequenceNumber?: string;
  /** Amazon Standard Identification Number (ASIN) of an item. */
  amazonProductIdentifier?: string;
  /** The vendor selected product identification of the item. Should be the same as was sent in the purchase order. */
  vendorProductIdentifier?: string;
  /** The quantity of this item ordered. */
  orderedQuantity: ItemQuantity;
  /** The cost to Amazon, which should match the cost on the invoice. This is a required field. If this is left blank the file will reject in Amazon systems. Price information should not be zero or negative. Indicates a net unit price. */
  netCost?: Money;
  /** The list price. This is required only if a vendor sells books with a list price. */
  listPrice?: Money;
  /** The discount multiplier that should be applied to the price if a vendor sells books with a list price. This is a multiplier factor to arrive at a final discounted price. A multiplier of .90 would be the factor if a 10% discount is given. */
  discountMultiplier?: string;
  /** This is used to indicate acknowledged quantity. */
  itemAcknowledgements: OrderItemAcknowledgement[];
}

export interface OrderItemAcknowledgement {
  /** This indicates the acknowledgement code. */
  acknowledgementCode: "Accepted" | "Backordered" | "Rejected";
  /** Details of quantity acknowledged with the above acknowledgement code. */
  acknowledgedQuantity: ItemQuantity;
  /**
   * Estimated ship date per line item. Must be in ISO-8601 date/time format.
   * @format date-time
   */
  scheduledShipDate?: string;
  /**
   * Estimated delivery date per line item. Must be in ISO-8601 date/time format.
   * @format date-time
   */
  scheduledDeliveryDate?: string;
  /** Indicates the reason for rejection. */
  rejectionReason?:
    | "TemporarilyUnavailable"
    | "InvalidProductIdentifier"
    | "ObsoleteProduct";
}

/** Details of quantity ordered. */
export interface ItemQuantity {
  /** Acknowledged quantity. This value should not be zero. */
  amount?: number;
  /** Unit of measure for the acknowledged quantity. */
  unitOfMeasure?: "Cases" | "Eaches";
  /** The case size, in the event that we ordered using cases. */
  unitSize?: number;
}

/** The response schema for the getPurchaseOrdersStatus operation. */
export interface GetPurchaseOrdersStatusResponse {
  /** Current status of list of purchase orders. */
  payload?: OrderListStatus;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

export interface OrderListStatus {
  pagination?: Pagination;
  ordersStatus?: OrderStatus[];
}

/** Current status of a purchase order. */
export interface OrderStatus {
  /** The buyer's purchase order number for this order. Formatting Notes: 8-character alpha-numeric code. */
  purchaseOrderNumber: string;
  /** The status of the buyer's purchase order for this order. */
  purchaseOrderStatus: "OPEN" | "CLOSED";
  /**
   * The date the purchase order was placed. Must be in ISO-8601 date/time format.
   * @format date-time
   */
  purchaseOrderDate: string;
  /**
   * The date when the purchase order was last updated. Must be in ISO-8601 date/time format.
   * @format date-time
   */
  lastUpdatedDate?: string;
  /** Name/Address and tax details of the selling party. */
  sellingParty: PartyIdentification;
  /** Name/Address and tax details of the ship to party. Find a list of fulfillment center addresses for a region on the [Resources page of Amazon Vendor Central](https://vendorcentral.amazon.com/hz/vendor/members/support/help/node/GPZ88XH8HQM97ZV6). */
  shipToParty: PartyIdentification;
  /** Detailed order status. */
  itemStatus: ItemStatus;
}

/** Detailed description of items order status. */
export type ItemStatus = OrderItemStatus[];

export interface OrderItemStatus {
  /** Numbering of the item on the purchase order. The first item will be 1, the second 2, and so on. */
  itemSequenceNumber: string;
  /** Buyer's Standard Identification Number (ASIN) of an item. */
  buyerProductIdentifier?: string;
  /** The vendor selected product identification of the item. */
  vendorProductIdentifier?: string;
  /** The net cost to Amazon each (cost). */
  netCost?: Money;
  /** The list Price to Amazon each (list). */
  listPrice?: Money;
  /** Ordered quantity information. */
  orderedQuantity?: {
    /** Item quantity ordered. */
    orderedQuantity?: ItemQuantity;
    /** Details of item quantity ordered. */
    orderedQuantityDetails?: OrderedQuantityDetails[];
  };
  /** Acknowledgement status information. */
  acknowledgementStatus?: {
    /** Confirmation status of line item. */
    confirmationStatus?: "ACCEPTED" | "PARTIALLY_ACCEPTED" | "REJECTED" | "UNCONFIRMED";
    /** Item quantities accepted by vendor to be shipped. */
    acceptedQuantity?: ItemQuantity;
    /** Item quantities rejected by vendor. */
    rejectedQuantity?: ItemQuantity;
    /** Details of item quantity confirmed. */
    acknowledgementStatusDetails?: AcknowledgementStatusDetails[];
  };
  /** Item receive status at the buyer's warehouse. */
  receivingStatus?: {
    /** Receive status of the line item. */
    receiveStatus?: "NOT_RECEIVED" | "PARTIALLY_RECEIVED" | "RECEIVED";
    /** The total item quantity received by the buyer so far. */
    receivedQuantity?: ItemQuantity;
    /**
     * The date when the most recent item was received at the buyer's warehouse. Must be in ISO-8601 date/time format.
     * @format date-time
     */
    lastReceiveDate?: string;
  };
}

/** Details of item quantity ordered */
export interface OrderedQuantityDetails {
  /**
   * The date when the line item quantity was updated by buyer. Must be in ISO-8601 date/time format.
   * @format date-time
   */
  updatedDate?: string;
  /** Item quantity ordered. */
  orderedQuantity?: ItemQuantity;
  /** Item quantity ordered. */
  cancelledQuantity?: ItemQuantity;
}

/** Details of item quantity ordered */
export interface AcknowledgementStatusDetails {
  /**
   * The date when the line item was confirmed by vendor. Must be in ISO-8601 date/time format.
   * @format date-time
   */
  acknowledgementDate?: string;
  /** Item quantity accepted by vendor to be shipped. */
  acceptedQuantity?: ItemQuantity;
  /** Item quantity rejected by vendor. */
  rejectedQuantity?: ItemQuantity;
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
