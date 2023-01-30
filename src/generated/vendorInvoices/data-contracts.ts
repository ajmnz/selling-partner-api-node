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

/** The response schema for the submitInvoices operation. */
export interface SubmitInvoicesResponse {
  /** The response payload for the submitInvoices operation. */
  payload?: TransactionId;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

export interface TransactionId {
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

/** The request schema for the submitInvoices operation. */
export interface SubmitInvoicesRequest {
  invoices?: Invoice[];
}

export interface Invoice {
  /** Identifies the type of invoice. */
  invoiceType: "Invoice" | "CreditNote";
  /** Unique number relating to the charges defined in this document. This will be invoice number if the document type is Invoice or CreditNote number if the document type is Credit Note. Failure to provide this reference will result in a rejection. */
  id: string;
  /** An additional unique reference number used for regulatory or other purposes. */
  referenceNumber?: string;
  /** Date when the invoice/credit note information was generated in the origin's accounting system. The invoice date should be on or after the purchase order creation date. */
  date: DateTime;
  /** Name, address and tax details of the party receiving the payment of this invoice. */
  remitToParty: PartyIdentification;
  /** Name, address and tax details of the party receiving a shipment of products. */
  shipToParty?: PartyIdentification;
  /** Name, address and tax details of the party sending a shipment of products. */
  shipFromParty?: PartyIdentification;
  /** Name, address and tax details of the party to whom this invoice is issued. */
  billToParty?: PartyIdentification;
  /** The payment terms for the invoice. */
  paymentTerms?: PaymentTerms;
  /** Total monetary amount charged in the invoice or full value of credit note to be paid including all relevant taxes. It is the total amount of invoice (including charges, less allowances) before terms discount (if discount is applicable). */
  invoiceTotal: Money;
  /** Total tax amount details for all line items. */
  taxDetails?: TaxDetails[];
  /** Additional details provided by the selling party, for tax related or other purposes. */
  additionalDetails?: AdditionalDetails[];
  /** Total charge amount details for all line items. */
  chargeDetails?: ChargeDetails[];
  /** Total allowance amount details for all line items. */
  allowanceDetails?: AllowanceDetails[];
  /** The list of invoice items. */
  items?: InvoiceItem[];
}

export interface PartyIdentification {
  /** Assigned identification for the party. */
  partyId: string;
  /** Identification of the party by address. */
  address?: Address;
  /** Tax registration details of the party. */
  taxRegistrationDetails?: TaxRegistrationDetails[];
}

/** Tax registration details of the entity. */
export interface TaxRegistrationDetails {
  /** The tax registration type for the entity. */
  taxRegistrationType: "VAT" | "GST";
  /** The tax registration number for the entity. For example, VAT ID. */
  taxRegistrationNumber: string;
}

/** A physical address. */
export interface Address {
  /** The name of the person, business or institution at that address. */
  name: string;
  /** First line of street address. */
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
  /** The postal or zip code of that address. It contains a series of letters or digits or both, sometimes including spaces or punctuation. */
  postalOrZipCode?: string;
  /**
   * The two digit country code. In ISO 3166-1 alpha-2 format.
   * @maxLength 2
   */
  countryCode: string;
  /** The phone number of the person, business or institution located at that address. */
  phone?: string;
}

/** Details of the item being invoiced. */
export interface InvoiceItem {
  /** Unique number related to this line item. */
  itemSequenceNumber: number;
  /** Amazon Standard Identification Number (ASIN) of an item. */
  amazonProductIdentifier?: string;
  /** The vendor selected product identifier of the item. Should be the same as was provided in the purchase order. */
  vendorProductIdentifier?: string;
  /** Invoiced quantity of this item. Quantity must be greater than zero. */
  invoicedQuantity: ItemQuantity;
  /** The item cost to Amazon, which should match the cost on the order. Price information should not be zero or negative. It indicates net unit price. Net cost means VAT is not included in cost. */
  netCost: Money;
  /** The Amazon purchase order number for this invoiced line item. Formatting Notes: 8-character alpha-numeric code. This value is mandatory only when invoiceType is Invoice, and is not required when invoiceType is CreditNote. */
  purchaseOrderNumber?: string;
  /** HSN Tax code. The HSN number cannot contain alphabets. */
  hsnCode?: string;
  /** Details required in order to process a credit note. This information is required only if invoiceType is CreditNote. */
  creditNoteDetails?: CreditNoteDetails;
  /** Individual tax details per line item. */
  taxDetails?: TaxDetails[];
  /** Individual charge details per line item. */
  chargeDetails?: ChargeDetails[];
  /** Individual allowance details per line item. */
  allowanceDetails?: AllowanceDetails[];
}

/** Details of tax amount applied. */
export interface TaxDetails {
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
  /** The invoice amount that is taxable at the rate specified in the tax rate field. */
  taxableAmount?: Money;
}

/** An amount of money, including units in the form of currency. */
export interface Money {
  /** Three-digit currency code in ISO 4217 format. */
  currencyCode?: string;
  /** A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\d*))(\.\d+)?([eE][+-]?\d+)?$`. */
  amount?: Decimal;
}

/** Additional information provided by the selling party for tax-related or any other purpose. */
export interface AdditionalDetails {
  /** The type of the additional information provided by the selling party. */
  type: "SUR" | "OCR" | "CartonCount";
  /** The detail of the additional information provided by the selling party. */
  detail: string;
  /** The language code of the additional information detail. */
  languageCode?: string;
}

/** Monetary and tax details of the charge. */
export interface ChargeDetails {
  /** Type of the charge applied. */
  type:
    | "Freight"
    | "Packing"
    | "Duty"
    | "Service"
    | "SmallOrder"
    | "InsurancePlacementCost"
    | "InsuranceFee"
    | "SpecialHandlingService"
    | "CollectionAndRecyclingService"
    | "EnvironmentalProtectionService"
    | "TaxCollectedAtSource";
  /** Description of the charge. */
  description?: string;
  /** Total monetary amount related to this charge. */
  chargeAmount: Money;
  /** Tax amount details applied on this charge. */
  taxDetails?: TaxDetails[];
}

/** Monetary and tax details of the allowance. */
export interface AllowanceDetails {
  /** Type of the allowance applied. */
  type:
    | "Discount"
    | "DiscountIncentive"
    | "Defective"
    | "Promotional"
    | "UnsaleableMerchandise"
    | "Special";
  /** Description of the allowance. */
  description?: string;
  /** Total monetary amount related to this allowance. */
  allowanceAmount: Money;
  /** Tax amount details applied on this allowance. */
  taxDetails?: TaxDetails[];
}

/** Terms of the payment for the invoice. The basis of the payment terms is the invoice date. */
export interface PaymentTerms {
  /** The payment term type for the invoice. */
  type?:
    | "Basic"
    | "EndOfMonth"
    | "FixedDate"
    | "Proximo"
    | "PaymentDueUponReceiptOfInvoice"
    | "LetterofCredit";
  /** The discount percent value, which is good until the discount due date. */
  discountPercent?: Decimal;
  /** The number of calendar days from the Base date (Invoice date) until the discount is no longer valid. */
  discountDueDays?: number;
  /** The number of calendar days from the base date (invoice date) until the total amount on the invoice is due. */
  netDueDays?: number;
}

/** References required in order to process a credit note. This information is required only if InvoiceType is CreditNote. */
export interface CreditNoteDetails {
  /** Original Invoice Number when sending a credit note relating to an existing invoice. One Invoice only to be processed per Credit Note. This is mandatory for AP Credit Notes. */
  referenceInvoiceNumber?: string;
  /** Debit Note Number as generated by Amazon. Recommended for Returns and COOP Credit Notes. */
  debitNoteNumber?: string;
  /** Identifies the Returns Notice Number. Mandatory for all Returns Credit Notes. */
  returnsReferenceNumber?: string;
  /** Date that a return is received by the vendor. It is mandatory for Returns Credit Note. */
  goodsReturnDate?: DateTime;
  /** Identifies the Returned Merchandise Authorization ID, if generated. */
  rmaId?: string;
  /** Identifies the COOP reference used for COOP agreement. Failure to provide the COOP reference number or the Debit Note number may lead to a rejection of the Credit Note. */
  coopReferenceNumber?: string;
  /** Identifies the consignor reference number (VRET number), if generated by Amazon. */
  consignorsReferenceNumber?: string;
}

/** Details of quantity. */
export interface ItemQuantity {
  /** Quantity of an item. This value should not be zero. */
  amount: number;
  /** Unit of measure for the quantity. */
  unitOfMeasure: "Cases" | "Eaches";
  /** The case size, if the unit of measure value is Cases. */
  unitSize?: number;
}

/** A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\d*))(\.\d+)?([eE][+-]?\d+)?$`. */
export type Decimal = string;

/**
 * Defines a date and time according to ISO8601.
 * @format date-time
 */
export type DateTime = string;
