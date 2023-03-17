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

/** Represents a file uploaded to a destination that was created by the [createUploadDestinationForResource](doc:uploads-api-reference#post-uploads2020-11-01uploaddestinationsresource) operation of the Selling Partner API for Uploads. */
export interface Attachment {
  /** The identifier of the upload destination. Get this value by calling the [createUploadDestinationForResource](doc:uploads-api-reference#post-uploads2020-11-01uploaddestinationsresource) operation of the Uploads API. */
  uploadDestinationId: string;
  /** The name of the file, including the extension. This is the file name that will appear in the message. This does not need to match the file name of the file that you uploaded. */
  fileName: string;
}

/** A Link object. */
export interface LinkObject {
  /** A URI for this object. */
  href: string;
  /** An identifier for this object. */
  name?: string;
}

/** A simple object containing the name of the template. */
export interface MessagingAction {
  name: string;
}

/** A JSON schema document describing the expected payload of the action. This object can be validated against <a href=http://json-schema.org/draft-04/schema>http://json-schema.org/draft-04/schema</a>. */
export type Schema = Record<string, any>;

/** The response schema for the getMessagingActionsForOrder operation. */
export interface GetMessagingActionsForOrderResponse {
  _links?: {
    /** A Link object. */
    self: LinkObject;
    /** Eligible actions for the specified amazonOrderId. */
    actions: LinkObject[];
  };
  _embedded?: {
    actions: GetMessagingActionResponse[];
  };
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** Describes a messaging action that can be taken for an order. Provides a JSON Hypertext Application Language (HAL) link to the JSON schema document that describes the expected input. */
export interface GetMessagingActionResponse {
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
  payload?: MessagingAction;
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

/** The request schema for the sendInvoice operation. */
export interface InvoiceRequest {
  /**
   * Attachments to include in the message to the buyer.
   * @minLength 1
   * @maxLength 5
   */
  attachments?: Attachment[];
}

/** The response schema for the sendInvoice operation. */
export interface InvoiceResponse {
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** The request schema for the confirmCustomizationDetails operation. */
export interface CreateConfirmCustomizationDetailsRequest {
  /**
   * The text to be sent to the buyer. Only links related to customization details are allowed. Do not include HTML or email addresses. The text must be written in the buyer's language of preference, which can be retrieved from the GetAttributes operation.
   * @minLength 1
   * @maxLength 800
   */
  text?: string;
  /**
   * Attachments to include in the message to the buyer.
   * @maxLength 5
   */
  attachments?: Attachment[];
}

/** The response schema for the confirmCustomizationDetails operation. */
export interface CreateConfirmCustomizationDetailsResponse {
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** The request schema for the createConfirmDeliveryDetails operation. */
export interface CreateConfirmDeliveryDetailsRequest {
  /**
   * The text to be sent to the buyer. Only links related to order delivery are allowed. Do not include HTML or email addresses. The text must be written in the buyer's language of preference, which can be retrieved from the GetAttributes operation.
   * @minLength 1
   * @maxLength 2000
   */
  text?: string;
}

/** The response schema for the createConfirmDeliveryDetails operation. */
export interface CreateConfirmDeliveryDetailsResponse {
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** The response schema for the createNegativeFeedbackRemoval operation. */
export interface CreateNegativeFeedbackRemovalResponse {
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** The request schema for the createLegalDisclosure operation. */
export interface CreateLegalDisclosureRequest {
  /**
   * Attachments to include in the message to the buyer. If any text is included in the attachment, the text must be written in the buyer's language of preference, which can be retrieved from the GetAttributes operation.
   * @maxLength 5
   */
  attachments?: Attachment[];
}

/** The response schema for the createLegalDisclosure operation. */
export interface CreateLegalDisclosureResponse {
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** The request schema for the createConfirmOrderDetails operation. */
export interface CreateConfirmOrderDetailsRequest {
  /**
   * The text to be sent to the buyer. Only links related to order completion are allowed. Do not include HTML or email addresses. The text must be written in the buyer's language of preference, which can be retrieved from the GetAttributes operation.
   * @minLength 1
   * @maxLength 2000
   */
  text?: string;
}

/** The response schema for the createConfirmOrderDetails operation. */
export interface CreateConfirmOrderDetailsResponse {
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** The request schema for the createConfirmServiceDetails operation. */
export interface CreateConfirmServiceDetailsRequest {
  /**
   * The text to be sent to the buyer. Only links related to Home Service calls are allowed. Do not include HTML or email addresses. The text must be written in the buyer's language of preference, which can be retrieved from the GetAttributes operation.
   * @minLength 1
   * @maxLength 2000
   */
  text?: string;
}

/** The response schema for the createConfirmServiceDetails operation. */
export interface CreateConfirmServiceDetailsResponse {
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** The request schema for the createAmazonMotors operation. */
export interface CreateAmazonMotorsRequest {
  /**
   * Attachments to include in the message to the buyer. If any text is included in the attachment, the text must be written in the buyer's language of preference, which can be retrieved from the GetAttributes operation.
   * @maxLength 5
   */
  attachments?: Attachment[];
}

/** The response schema for the createAmazonMotors operation. */
export interface CreateAmazonMotorsResponse {
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** The request schema for the createWarranty operation. */
export interface CreateWarrantyRequest {
  /**
   * Attachments to include in the message to the buyer. If any text is included in the attachment, the text must be written in the buyer's language of preference, which can be retrieved from the GetAttributes operation.
   * @minLength 1
   * @maxLength 5
   */
  attachments?: Attachment[];
  /**
   * The start date of the warranty coverage to include in the message to the buyer.
   * @format date-time
   */
  coverageStartDate?: string;
  /**
   * The end date of the warranty coverage to include in the message to the buyer.
   * @format date-time
   */
  coverageEndDate?: string;
}

/** The response schema for the createWarranty operation. */
export interface CreateWarrantyResponse {
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** The response schema for the GetAttributes operation. */
export interface GetAttributesResponse {
  /** The list of attributes related to the buyer. */
  buyer?: {
    /** The buyer's language of preference, indicated with a locale-specific language tag. Examples: "en-US", "zh-CN", and "en-GB". */
    locale?: string;
  };
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** The request schema for the createDigitalAccessKey operation. */
export interface CreateDigitalAccessKeyRequest {
  /**
   * The text to be sent to the buyer. Only links related to the digital access key are allowed. Do not include HTML or email addresses. The text must be written in the buyer's language of preference, which can be retrieved from the GetAttributes operation.
   * @minLength 1
   * @maxLength 400
   */
  text?: string;
  /**
   * Attachments to include in the message to the buyer.
   * @maxLength 5
   */
  attachments?: Attachment[];
}

/** The response schema for the createDigitalAccessKey operation. */
export interface CreateDigitalAccessKeyResponse {
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** The request schema for the createUnexpectedProblem operation. */
export interface CreateUnexpectedProblemRequest {
  /**
   * The text to be sent to the buyer. Only links related to unexpected problem calls are allowed. Do not include HTML or email addresses. The text must be written in the buyer's language of preference, which can be retrieved from the GetAttributes operation.
   * @minLength 1
   * @maxLength 2000
   */
  text?: string;
}

/** The response schema for the createUnexpectedProblem operation. */
export interface CreateUnexpectedProblemResponse {
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
