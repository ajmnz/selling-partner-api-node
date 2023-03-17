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

/** The request body for the submitInventoryUpdate operation. */
export interface SubmitInventoryUpdateRequest {
  /** Inventory details required to update some or all items for the requested warehouse. */
  inventory?: InventoryUpdate;
}

export interface InventoryUpdate {
  /** ID of the selling party or vendor. */
  sellingParty: PartyIdentification;
  /** When true, this request contains a full feed. Otherwise, this request contains a partial feed. When sending a full feed, you must send information about all items in the warehouse. Any items not in the full feed are updated as not available. When sending a partial feed, only include the items that need an update to inventory. The status of other items will remain unchanged. */
  isFullUpdate: boolean;
  /** A list of inventory items with updated details, including quantity available. */
  items: ItemDetails[];
}

/** Updated inventory details for an item. */
export interface ItemDetails {
  /** The buyer selected product identification of the item. Either buyerProductIdentifier or vendorProductIdentifier should be submitted. */
  buyerProductIdentifier?: string;
  /** The vendor selected product identification of the item. Either buyerProductIdentifier or vendorProductIdentifier should be submitted. */
  vendorProductIdentifier?: string;
  /** Total item quantity available in the warehouse. */
  availableQuantity: ItemQuantity;
  /** When true, the item is permanently unavailable. */
  isObsolete?: boolean;
}

export interface PartyIdentification {
  /** Assigned identification for the party. */
  partyId: string;
}

/** Details of item quantity. */
export interface ItemQuantity {
  /** Quantity of units available for a specific item. */
  amount?: number;
  /** Unit of measure for the available quantity. */
  unitOfMeasure: string;
}

/** The response schema for the submitInventoryUpdate operation. */
export interface SubmitInventoryUpdateResponse {
  /** The response payload for the submitInventoryUpdate operation. */
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
