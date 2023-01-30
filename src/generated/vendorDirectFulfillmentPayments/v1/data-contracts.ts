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

/** The request schema for the submitInvoice operation. */
export interface SubmitInvoiceRequest {
  invoices?: InvoiceDetail[];
}

export interface InvoiceDetail {
  /** The unique invoice number. */
  invoiceNumber: string;
  /**
   * Invoice date.
   * @format date-time
   */
  invoiceDate: string;
  /** An additional unique reference number used for regulatory or other purposes. */
  referenceNumber?: string;
  /** Name, address and tax details of the party receiving the payment of this invoice. */
  remitToParty: PartyIdentification;
  /** Warehouse code of the vendor as in the order. */
  shipFromParty: PartyIdentification;
  /** Name, address and tax details of the party to whom this invoice is issued. */
  billToParty?: PartyIdentification;
  /** Ship-to country code. */
  shipToCountryCode?: string;
  /** The payment terms for the invoice. */
  paymentTermsCode?: string;
  /** Total amount details of the invoice. */
  invoiceTotal: Money;
  /** Individual tax details per line item. */
  taxTotals?: TaxDetail[];
  /** Additional details provided by the selling party, for tax related or other purposes. */
  additionalDetails?: AdditionalDetails[];
  /** Total charge amount details for all line items. */
  chargeDetails?: ChargeDetails[];
  /** Provides the details of the items in this invoice. */
  items: InvoiceItem[];
}

export interface InvoiceItem {
  /** Numbering of the item on the purchase order. The first item will be 1, the second 2, and so on. */
  itemSequenceNumber: string;
  /** Buyer's standard identification number (ASIN) of an item. */
  buyerProductIdentifier?: string;
  /** The vendor selected product identification of the item. */
  vendorProductIdentifier?: string;
  /** Item quantity invoiced. */
  invoicedQuantity: ItemQuantity;
  /** Net price (before tax) to vendor with currency details. */
  netCost: Money;
  /** The purchase order number for this order. Formatting Notes: 8-character alpha-numeric code. */
  purchaseOrderNumber: string;
  /** The vendor's order number for this order. */
  vendorOrderNumber?: string;
  /** HSN tax code. The HSN number cannot contain alphabets. */
  hsnCode?: string;
  /** Individual tax details per line item. */
  taxDetails?: TaxDetail[];
  /** Individual charge details per line item. */
  chargeDetails?: ChargeDetails[];
}

export interface PartyIdentification {
  /** Assigned Identification for the party. */
  partyId: string;
  /** Identification of the party by address. */
  address?: Address;
  /** Tax registration details of the entity. */
  taxRegistrationDetails?: TaxRegistrationDetail[];
}

/** Tax registration details of the entity. */
export interface TaxRegistrationDetail {
  /** Tax registration type for the entity. */
  taxRegistrationType?: "VAT" | "GST";
  /** Tax registration number for the party. For example, VAT ID. */
  taxRegistrationNumber: string;
  /** Address associated with the tax registration number. */
  taxRegistrationAddress?: Address;
  /** Tax registration message that can be used for additional tax related details. */
  taxRegistrationMessage?: string;
}

/** Address of the party. */
export interface Address {
  /** The name of the person, business or institution at that address. */
  name: string;
  /** First line of the address. */
  addressLine1: string;
  /** Additional street address information, if required. */
  addressLine2?: string;
  /** Additional street address information, if required. */
  addressLine3?: string;
  /** The city where the person, business or institution is located. */
  city: string;
  /** The county where person, business or institution is located. */
  county?: string;
  /** The district where person, business or institution is located. */
  district?: string;
  /** The state or region where person, business or institution is located. */
  stateOrRegion: string;
  /** The postal code of that address. It conatins a series of letters or digits or both, sometimes including spaces or punctuation. */
  postalCode: string;
  /** The two digit country code in ISO 3166-1 alpha-2 format. */
  countryCode: string;
  /** The phone number of the person, business or institution located at that address. */
  phone?: string;
}

/** An amount of money, including units in the form of currency. */
export interface Money {
  /** Three digit currency code in ISO 4217 format. */
  currencyCode: string;
  /** A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\d*))(\.\d+)?([eE][+-]?\d+)?$`. */
  amount: Decimal;
}

/** A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\d*))(\.\d+)?([eE][+-]?\d+)?$`. */
export type Decimal = string;

/** Details of tax amount applied. */
export interface TaxDetail {
  /** Type of the tax applied. */
  taxType:
    | "CGST"
    | "SGST"
    | "CESS"
    | "UTGST"
    | "IGST"
    | "MwSt."
    | "PST"
    | "TVA"
    | "VAT"
    | "GST"
    | "ST"
    | "Consumption"
    | "MutuallyDefined"
    | "DomesticVAT";
  /** Tax percentage applied. Percentage must be expressed in decimal. */
  taxRate?: Decimal;
  /** Total tax amount applied on invoice total or an item total. */
  taxAmount: Money;
  /** This field will contain the invoice amount that is taxable at the rate specified in the tax rate field. */
  taxableAmount?: Money;
}

/** Monetary and tax details of the charge. */
export interface ChargeDetails {
  /** Type of charge applied. */
  type:
    | "GIFTWRAP"
    | "FULFILLMENT"
    | "MARKETINGINSERT"
    | "PACKAGING"
    | "LOADING"
    | "FREIGHTOUT"
    | "TAX_COLLECTED_AT_SOURCE";
  /** An amount of money, including units in the form of currency. */
  chargeAmount: Money;
  /** Individual tax details per line item. */
  taxDetails?: TaxDetail[];
}

/** A field where selling party can provide additional information for tax related or any other purposes. */
export interface AdditionalDetails {
  /** The type of the additional information provided by the selling party. */
  type: "SUR" | "OCR";
  /** The detail of the additional information provided by the selling party. */
  detail: string;
  /** The language code of the additional information detail. */
  languageCode?: string;
}

/** Details of item quantity. */
export interface ItemQuantity {
  /** Quantity of units available for a specific item. */
  amount: number;
  /** Unit of measure for the available quantity. */
  unitOfMeasure: string;
}

/** The response schema for the submitInvoice operation. */
export interface SubmitInvoiceResponse {
  /** The response payload for the submitInvoice operation. */
  payload?: TransactionReference;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

export interface TransactionReference {
  /** GUID to identify this transaction. This value can be used with the Transaction Status API to return the status of this transaction. */
  transactionId?: string;
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
