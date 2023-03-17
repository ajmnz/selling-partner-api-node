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

/** The response schema for the getTransaction operation. */
export interface GetTransactionResponse {
  /** The response payload for the getTransaction operation. */
  payload?: TransactionStatus;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

export interface TransactionStatus {
  /** The transaction status. */
  transactionStatus?: Transaction;
}

/** The transaction status. */
export interface Transaction {
  /** The unique identifier returned in the 'transactionId' field in response to the post request of a specific transaction. */
  transactionId: string;
  /** Current processing status of the transaction. */
  status: "Failure" | "Processing" | "Success";
  /** A list of error responses returned when a request is unsuccessful. */
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
