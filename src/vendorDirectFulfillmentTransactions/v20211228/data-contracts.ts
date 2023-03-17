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

/** The payload for the getTransactionStatus operation. */
export interface TransactionStatus {
  /** The transaction status details. */
  transactionStatus?: Transaction;
}

/** The transaction status details. */
export interface Transaction {
  /** The unique identifier sent in the 'transactionId' field in response to the post request of a specific transaction. */
  transactionId: string;
  /** Current processing status of the transaction. */
  status: "Failure" | "Processing" | "Success";
  /** Error code and message for the failed transaction. Only available when transaction status is 'Failure'. */
  errors?: ErrorList;
}

/** A list of error responses returned when a request is unsuccessful. */
export interface ErrorList {
  errors: Error[];
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
