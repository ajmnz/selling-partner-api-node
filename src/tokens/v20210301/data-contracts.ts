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

/** The request schema for the createRestrictedDataToken operation. */
export interface CreateRestrictedDataTokenRequest {
  /** The application ID for the target application to which access is being delegated. */
  targetApplication?: string;
  /**
   * A list of restricted resources.
   * Maximum: 50
   */
  restrictedResources: RestrictedResource[];
}

/** Model of a restricted resource. */
export interface RestrictedResource {
  /** The HTTP method in the restricted resource. */
  method: "GET" | "PUT" | "POST" | "DELETE";
  /**
   * The path in the restricted resource. Here are some path examples:
   * - ```/orders/v0/orders```. For getting an RDT for the getOrders operation of the Orders API. For bulk orders.
   * - ```/orders/v0/orders/123-1234567-1234567```. For getting an RDT for the getOrder operation of the Orders API. For a specific order.
   * - ```/orders/v0/orders/123-1234567-1234567/orderItems```. For getting an RDT for the getOrderItems operation of the Orders API. For the order items in a specific order.
   * - ```/mfn/v0/shipments/FBA1234ABC5D```. For getting an RDT for the getShipment operation of the Shipping API. For a specific shipment.
   * - ```/mfn/v0/shipments/{shipmentId}```. For getting an RDT for the getShipment operation of the Shipping API. For any of a selling partner's shipments that you specify when you call the getShipment operation.
   */
  path: string;
  /**
   * Indicates the type of Personally Identifiable Information requested. This parameter is required only when getting an RDT for use with the getOrder, getOrders, or getOrderItems operation of the Orders API. For more information, see the [Tokens API Use Case Guide](doc:tokens-api-use-case-guide). Possible values include:
   * - **buyerInfo**. On the order level this includes general identifying information about the buyer and tax-related information. On the order item level this includes gift wrap information and custom order information, if available.
   * - **shippingAddress**. This includes information for fulfilling orders.
   * - **buyerTaxInformation**. This includes information for issuing tax invoices.
   */
  dataElements?: string[];
}

/** The response schema for the createRestrictedDataToken operation. */
export interface CreateRestrictedDataTokenResponse {
  /** A Restricted Data Token (RDT). This is a short-lived access token that authorizes calls to restricted operations. Pass this value with the x-amz-access-token header when making subsequent calls to these restricted resources. */
  restrictedDataToken?: string;
  /** The lifetime of the Restricted Data Token, in seconds. */
  expiresIn?: number;
}

/** An error response returned when the request is unsuccessful. */
export interface Error {
  /** An error code that identifies the type of error that occurred. */
  code: string;
  /** A message that describes the error condition. */
  message: string;
  /** Additional details that can help the caller understand or fix the issue. */
  details?: string;
}

/** A list of error responses returned when a request is unsuccessful. */
export interface ErrorList {
  errors?: Error[];
}
