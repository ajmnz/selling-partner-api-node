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

/** The request body for the generateOrderScenarios operation. */
export interface GenerateOrderScenarioRequest {
  /** The list of test orders requested as indicated by party identifiers. */
  orders?: OrderScenarioRequest[];
}

/** The party identifiers required to generate the test data. */
export interface OrderScenarioRequest {
  /** The identifier of the selling party or vendor. */
  sellingParty: PartyIdentification;
  /** The warehouse code of the vendor. */
  shipFromParty: PartyIdentification;
}

/** The identification object for the party information. For example, warehouse code or vendor code. Please refer to specific party for more details. */
export interface PartyIdentification {
  /** Assigned identification for the party. For example, warehouse code or vendor code. Please refer to specific party for more details. */
  partyId: string;
}

/** A generated string used to pass information to your next request. If NextToken is returned, pass the value of NextToken to the next request. If NextToken is not returned, there are no more order items to return. */
export interface Pagination {
  nextToken?: string;
}

/** A GUID assigned by Amazon to identify this transaction. */
export interface TransactionReference {
  transactionId?: string;
}

/** The payload for the getOrderScenarios operation. */
export interface TransactionStatus {
  /** The transaction details including the status. If the transaction was successful, also includes the requested test order data. */
  transactionStatus?: Transaction;
}

/** The transaction details including the status. If the transaction was successful, also includes the requested test order data. */
export interface Transaction {
  /** The unique identifier returned in the response to the generateOrderScenarios request. */
  transactionId: string;
  /** The current processing status of the transaction. */
  status: "FAILURE" | "PROCESSING" | "SUCCESS";
  /** Test case data for the transaction. Only available when the transaction status is SUCCESS. */
  testCaseData?: TestCaseData;
}

/** The set of test case data returned in response to the test data request. */
export interface TestCaseData {
  /** Set of use cases that describes the possible test scenarios. */
  scenarios?: Scenario[];
}

/** A scenario test case response returned when the request is successful. */
export interface Scenario {
  /** An identifier that identifies the type of scenario that user can use for testing. */
  scenarioId: string;
  /** A list of orders that can be used by the caller to test each life cycle or scenario. */
  orders: TestOrder[];
}

/** Error response returned when the request is unsuccessful. */
export interface TestOrder {
  /** An error code that identifies the type of error that occurred. */
  orderId: string;
}

/** A list of error responses returned when a request is unsuccessful. */
export interface ErrorList {
  errors: Error[];
}

/** Error response returned when the request is unsuccessful. */
export interface Error {
  /** An error code that identifies the type of error that occured. */
  code: string;
  /** A message that describes the error condition. */
  message: string;
  /** Additional details that can help the caller understand or fix the issue. */
  details?: string;
}
