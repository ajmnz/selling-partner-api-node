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

/** A Link object. */
export interface LinkObject {
  /** A URI for this object. */
  href: string;
  /** An identifier for this object. */
  name?: string;
}

/** A simple object containing the name of the template. */
export interface SolicitationsAction {
  name: string;
}

/** A JSON schema document describing the expected payload of the action. This object can be validated against <a href=http://json-schema.org/draft-04/schema>http://json-schema.org/draft-04/schema</a>. */
export type Schema = Record<string, any>;

/** The response schema for the getSolicitationActionsForOrder operation. */
export interface GetSolicitationActionsForOrderResponse {
  _links?: {
    /** A Link object. */
    self: LinkObject;
    /** Eligible actions for the specified amazonOrderId. */
    actions: LinkObject[];
  };
  _embedded?: {
    actions: GetSolicitationActionResponse[];
  };
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** Describes a solicitation action that can be taken for an order. Provides a JSON Hypertext Application Language (HAL) link to the JSON schema document that describes the expected input. */
export interface GetSolicitationActionResponse {
  _links?: {
    /** A Link object. */
    self: LinkObject;
    /** A Link object. */
    schema: LinkObject;
  };
  _embedded?: {
    schema?: GetSchemaResponse;
  };
  /** A simple object containing the name of the template. */
  payload?: SolicitationsAction;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

export interface GetSchemaResponse {
  _links?: {
    /** A Link object. */
    self: LinkObject;
  };
  /** A JSON schema document describing the expected payload of the action. This object can be validated against <a href=http://json-schema.org/draft-04/schema>http://json-schema.org/draft-04/schema</a>. */
  payload?: Schema;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** The response schema for the createProductReviewAndSellerFeedbackSolicitation operation. */
export interface CreateProductReviewAndSellerFeedbackSolicitationResponse {
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** A list of error responses returned when a request is unsuccessful. */
export type ErrorList = Error[];

/** Error response returned when the request is unsuccessful. */
export interface Error {
  /** An error code that identifies the type of error that occurred. */
  code: string;
  /** A message that describes the error condition in a human-readable form. */
  message: string;
  /** Additional details that can help the caller understand or fix the issue. */
  details?: string;
}
