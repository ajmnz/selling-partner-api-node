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

/** The response schema for the getShipmentDetails operation. */
export interface GetShipmentDetailsResponse {
  /** The payload for the getShipmentDetails operation */
  payload?: ShipmentDetail;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** The information required by a selling partner to issue a shipment invoice. */
export interface ShipmentDetail {
  /** The Amazon-defined identifier for the warehouse. */
  WarehouseId?: string;
  /** The Amazon-defined identifier for the order. */
  AmazonOrderId?: string;
  /** The Amazon-defined identifier for the shipment. */
  AmazonShipmentId?: string;
  /**
   * The date and time when the order was created.
   * @format date-time
   */
  PurchaseDate?: string;
  /** The shipping address details of the shipment. */
  ShippingAddress?: Address;
  /** The list of payment method details. */
  PaymentMethodDetails?: PaymentMethodDetailItemList;
  /** The identifier for the marketplace where the order was placed. */
  MarketplaceId?: string;
  /** The seller identifier. */
  SellerId?: string;
  /** The name of the buyer. */
  BuyerName?: string;
  /** The county of the buyer. */
  BuyerCounty?: string;
  /** Tax information about the buyer. */
  BuyerTaxInfo?: BuyerTaxInfo;
  /** Tax information about the marketplace. */
  MarketplaceTaxInfo?: MarketplaceTaxInfo;
  /** The seller’s friendly name registered in the marketplace. */
  SellerDisplayName?: string;
  /** A list of shipment items. */
  ShipmentItems?: ShipmentItems;
}

/** The shipping address details of the shipment. */
export interface Address {
  /** The name. */
  Name?: string;
  /** The street address. */
  AddressLine1?: string;
  /** Additional street address information, if required. */
  AddressLine2?: string;
  /** Additional street address information, if required. */
  AddressLine3?: string;
  /** The city. */
  City?: string;
  /** The county. */
  County?: string;
  /** The district. */
  District?: string;
  /** The state or region. */
  StateOrRegion?: string;
  /** The postal code. */
  PostalCode?: string;
  /** The country code. */
  CountryCode?: string;
  /** The phone number. */
  Phone?: string;
  /** The shipping address type. */
  AddressType?: AddressTypeEnum;
}

/** The shipping address type. */
export enum AddressTypeEnum {
  Residential = "Residential",
  Commercial = "Commercial",
}

/** The list of payment method details. */
export type PaymentMethodDetailItemList = string[];

/** Tax information about the buyer. */
export interface BuyerTaxInfo {
  /** The legal name of the company. */
  CompanyLegalName?: string;
  /** The country or region imposing the tax. */
  TaxingRegion?: string;
  /** The list of tax classifications. */
  TaxClassifications?: TaxClassificationList;
}

/** Tax information about the marketplace. */
export interface MarketplaceTaxInfo {
  /** The legal name of the company. */
  CompanyLegalName?: string;
  /** The country or region imposing the tax. */
  TaxingRegion?: string;
  /** The list of tax classifications. */
  TaxClassifications?: TaxClassificationList;
}

/** The list of tax classifications. */
export type TaxClassificationList = TaxClassification[];

/** The tax classification for the entity. */
export interface TaxClassification {
  /** The type of tax. */
  Name?: string;
  /** The entity's tax identifier. */
  Value?: string;
}

/** A list of shipment items. */
export type ShipmentItems = ShipmentItem[];

/** The shipment item information required by a seller to issue a shipment invoice. */
export interface ShipmentItem {
  /** The Amazon Standard Identification Number (ASIN) of the item. */
  ASIN?: string;
  /** The seller SKU of the item. */
  SellerSKU?: string;
  /** The Amazon-defined identifier for the order item. */
  OrderItemId?: string;
  /** The name of the item. */
  Title?: string;
  /** The number of items ordered. */
  QuantityOrdered?: number;
  /** The selling price of the item multiplied by the quantity ordered. Note that ItemPrice excludes ShippingPrice and GiftWrapPrice. */
  ItemPrice?: Money;
  /** The shipping price of the item. */
  ShippingPrice?: Money;
  /** The gift wrap price of the item. */
  GiftWrapPrice?: Money;
  /** The discount on the shipping price. */
  ShippingDiscount?: Money;
  /** The total of all promotional discounts in the offer. */
  PromotionDiscount?: Money;
  /** The list of serial numbers. */
  SerialNumbers?: SerialNumbersList;
}

/** The currency type and amount. */
export interface Money {
  /** Three-digit currency code in ISO 4217 format. */
  CurrencyCode?: string;
  /** The currency amount. */
  Amount?: string;
}

/** The list of serial numbers. */
export type SerialNumbersList = string[];

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

/** The request schema for the submitInvoice operation. */
export interface SubmitInvoiceRequest {
  /** Shipment invoice document content. */
  InvoiceContent: Blob;
  /** An Amazon marketplace identifier. */
  MarketplaceId?: string;
  /** MD5 sum for validating the invoice data. For more information about calculating this value, see [Working with Content-MD5 Checksums](https://docs.developer.amazonservices.com/en_US/dev_guide/DG_MD5.html). */
  ContentMD5Value: string;
}

/**
 * Shipment invoice document content.
 * @format byte
 */
export type Blob = string;

/** The response schema for the submitInvoice operation. */
export interface SubmitInvoiceResponse {
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** The shipment invoice status information. */
export interface ShipmentInvoiceStatusInfo {
  /** The Amazon-defined shipment identifier. */
  AmazonShipmentId?: string;
  /** The shipment invoice status. */
  InvoiceStatus?: ShipmentInvoiceStatus;
}

/** The shipment invoice status. */
export enum ShipmentInvoiceStatus {
  Processing = "Processing",
  Accepted = "Accepted",
  Errored = "Errored",
  NotFound = "NotFound",
}

/** The shipment invoice status response. */
export interface ShipmentInvoiceStatusResponse {
  /** The shipment invoice status information. */
  Shipments?: ShipmentInvoiceStatusInfo;
}

/** The response schema for the getInvoiceStatus operation. */
export interface GetInvoiceStatusResponse {
  /** The payload for the getInvoiceStatus operation. */
  payload?: ShipmentInvoiceStatusResponse;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}
