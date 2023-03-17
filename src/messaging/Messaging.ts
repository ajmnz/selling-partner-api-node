import type {
  CreateAmazonMotorsRequest,
  CreateAmazonMotorsResponse,
  CreateConfirmCustomizationDetailsRequest,
  CreateConfirmCustomizationDetailsResponse,
  CreateConfirmDeliveryDetailsRequest,
  CreateConfirmDeliveryDetailsResponse,
  CreateConfirmOrderDetailsRequest,
  CreateConfirmOrderDetailsResponse,
  CreateConfirmServiceDetailsRequest,
  CreateConfirmServiceDetailsResponse,
  CreateDigitalAccessKeyRequest,
  CreateDigitalAccessKeyResponse,
  CreateLegalDisclosureRequest,
  CreateLegalDisclosureResponse,
  CreateNegativeFeedbackRemovalResponse,
  CreateUnexpectedProblemRequest,
  CreateUnexpectedProblemResponse,
  CreateWarrantyRequest,
  CreateWarrantyResponse,
  GetAttributesResponse,
  GetMessagingActionsForOrderResponse,
  InvoiceRequest,
  InvoiceResponse,
} from "./data-contracts";
import type { HttpClient, RequestParams } from "../http-client";
import { ContentType } from "../http-client";

export class Messaging<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns a list of message types that are available for an order that you specify. A message type is represented by an actions object, which contains a path and query parameter(s). You can use the path and parameter(s) to call an operation that sends a message. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags messaging
   * @name GetMessagingActionsForOrder
   * @request GET:/messaging/v1/orders/{amazonOrderId}
   */
  getMessagingActionsForOrder = (
    amazonOrderId: string,
    query: {
      /**
       * A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
       * @maxItems 1
       */
      marketplaceIds: string[];
    },
    params: RequestParams = {}
  ) =>
    this.http.request<
      GetMessagingActionsForOrderResponse,
      GetMessagingActionsForOrderResponse
    >({
      path: `/messaging/v1/orders/${amazonOrderId}`,
      method: "GET",
      code: "get:/messaging/v1/orders/{amazonOrderId}",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Sends a message asking a buyer to provide or verify customization details such as name spelling, images, initials, etc. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags messaging
   * @name ConfirmCustomizationDetails
   * @request POST:/messaging/v1/orders/{amazonOrderId}/messages/confirmCustomizationDetails
   */
  confirmCustomizationDetails = (
    amazonOrderId: string,
    query: {
      /**
       * A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
       * @maxItems 1
       */
      marketplaceIds: string[];
    },
    body: CreateConfirmCustomizationDetailsRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<
      CreateConfirmCustomizationDetailsResponse,
      CreateConfirmCustomizationDetailsResponse
    >({
      path: `/messaging/v1/orders/${amazonOrderId}/messages/confirmCustomizationDetails`,
      method: "POST",
      code: "post:/messaging/v1/orders/{amazonOrderId}/messages/confirmCustomizationDetails",
      query,
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Sends a message to a buyer to arrange a delivery or to confirm contact information for making a delivery. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags messaging
   * @name CreateConfirmDeliveryDetails
   * @request POST:/messaging/v1/orders/{amazonOrderId}/messages/confirmDeliveryDetails
   */
  createConfirmDeliveryDetails = (
    amazonOrderId: string,
    query: {
      /**
       * A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
       * @maxItems 1
       */
      marketplaceIds: string[];
    },
    body: CreateConfirmDeliveryDetailsRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<
      CreateConfirmDeliveryDetailsResponse,
      CreateConfirmDeliveryDetailsResponse
    >({
      path: `/messaging/v1/orders/${amazonOrderId}/messages/confirmDeliveryDetails`,
      method: "POST",
      code: "post:/messaging/v1/orders/{amazonOrderId}/messages/confirmDeliveryDetails",
      query,
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Sends a critical message that contains documents that a seller is legally obligated to provide to the buyer. This message should only be used to deliver documents that are required by law. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags messaging
   * @name CreateLegalDisclosure
   * @request POST:/messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure
   */
  createLegalDisclosure = (
    amazonOrderId: string,
    query: {
      /**
       * A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
       * @maxItems 1
       */
      marketplaceIds: string[];
    },
    body: CreateLegalDisclosureRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateLegalDisclosureResponse, CreateLegalDisclosureResponse>({
      path: `/messaging/v1/orders/${amazonOrderId}/messages/legalDisclosure`,
      method: "POST",
      code: "post:/messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure",
      query,
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Sends a non-critical message that asks a buyer to remove their negative feedback. This message should only be sent after the seller has resolved the buyer's problem. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags messaging
   * @name CreateNegativeFeedbackRemoval
   * @request POST:/messaging/v1/orders/{amazonOrderId}/messages/negativeFeedbackRemoval
   */
  createNegativeFeedbackRemoval = (
    amazonOrderId: string,
    query: {
      /**
       * A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
       * @maxItems 1
       */
      marketplaceIds: string[];
    },
    params: RequestParams = {}
  ) =>
    this.http.request<
      CreateNegativeFeedbackRemovalResponse,
      CreateNegativeFeedbackRemovalResponse
    >({
      path: `/messaging/v1/orders/${amazonOrderId}/messages/negativeFeedbackRemoval`,
      method: "POST",
      code: "post:/messaging/v1/orders/{amazonOrderId}/messages/negativeFeedbackRemoval",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Sends a message to ask a buyer an order-related question prior to shipping their order. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags messaging
   * @name CreateConfirmOrderDetails
   * @request POST:/messaging/v1/orders/{amazonOrderId}/messages/confirmOrderDetails
   */
  createConfirmOrderDetails = (
    amazonOrderId: string,
    query: {
      /**
       * A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
       * @maxItems 1
       */
      marketplaceIds: string[];
    },
    body: CreateConfirmOrderDetailsRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<
      CreateConfirmOrderDetailsResponse,
      CreateConfirmOrderDetailsResponse
    >({
      path: `/messaging/v1/orders/${amazonOrderId}/messages/confirmOrderDetails`,
      method: "POST",
      code: "post:/messaging/v1/orders/{amazonOrderId}/messages/confirmOrderDetails",
      query,
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Sends a message to contact a Home Service customer to arrange a service call or to gather information prior to a service call. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags messaging
   * @name CreateConfirmServiceDetails
   * @request POST:/messaging/v1/orders/{amazonOrderId}/messages/confirmServiceDetails
   */
  createConfirmServiceDetails = (
    amazonOrderId: string,
    query: {
      /**
       * A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
       * @maxItems 1
       */
      marketplaceIds: string[];
    },
    body: CreateConfirmServiceDetailsRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<
      CreateConfirmServiceDetailsResponse,
      CreateConfirmServiceDetailsResponse
    >({
      path: `/messaging/v1/orders/${amazonOrderId}/messages/confirmServiceDetails`,
      method: "POST",
      code: "post:/messaging/v1/orders/{amazonOrderId}/messages/confirmServiceDetails",
      query,
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Sends a message to a buyer to provide details about an Amazon Motors order. This message can only be sent by Amazon Motors sellers. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags messaging
   * @name CreateAmazonMotors
   * @request POST:/messaging/v1/orders/{amazonOrderId}/messages/amazonMotors
   */
  createAmazonMotors = (
    amazonOrderId: string,
    query: {
      /**
       * A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
       * @maxItems 1
       */
      marketplaceIds: string[];
    },
    body: CreateAmazonMotorsRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateAmazonMotorsResponse, CreateAmazonMotorsResponse>({
      path: `/messaging/v1/orders/${amazonOrderId}/messages/amazonMotors`,
      method: "POST",
      code: "post:/messaging/v1/orders/{amazonOrderId}/messages/amazonMotors",
      query,
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Sends a message to a buyer to provide details about warranty information on a purchase in their order. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags messaging
   * @name CreateWarranty
   * @request POST:/messaging/v1/orders/{amazonOrderId}/messages/warranty
   */
  createWarranty = (
    amazonOrderId: string,
    query: {
      /**
       * A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
       * @maxItems 1
       */
      marketplaceIds: string[];
    },
    body: CreateWarrantyRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateWarrantyResponse, CreateWarrantyResponse>({
      path: `/messaging/v1/orders/${amazonOrderId}/messages/warranty`,
      method: "POST",
      code: "post:/messaging/v1/orders/{amazonOrderId}/messages/warranty",
      query,
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a response containing attributes related to an order. This includes buyer preferences. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 |
   *
   * @tags messaging
   * @name GetAttributes
   * @request GET:/messaging/v1/orders/{amazonOrderId}/attributes
   */
  getAttributes = (
    amazonOrderId: string,
    query: {
      /**
       * A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
       * @maxItems 1
       */
      marketplaceIds: string[];
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetAttributesResponse, GetAttributesResponse>({
      path: `/messaging/v1/orders/${amazonOrderId}/attributes`,
      method: "GET",
      code: "get:/messaging/v1/orders/{amazonOrderId}/attributes",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Sends a message to a buyer to share a digital access key needed to utilize digital content in their order. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags messaging
   * @name CreateDigitalAccessKey
   * @request POST:/messaging/v1/orders/{amazonOrderId}/messages/digitalAccessKey
   */
  createDigitalAccessKey = (
    amazonOrderId: string,
    query: {
      /**
       * A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
       * @maxItems 1
       */
      marketplaceIds: string[];
    },
    body: CreateDigitalAccessKeyRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateDigitalAccessKeyResponse, CreateDigitalAccessKeyResponse>({
      path: `/messaging/v1/orders/${amazonOrderId}/messages/digitalAccessKey`,
      method: "POST",
      code: "post:/messaging/v1/orders/{amazonOrderId}/messages/digitalAccessKey",
      query,
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Sends a critical message to a buyer that an unexpected problem was encountered affecting the completion of the order. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags messaging
   * @name CreateUnexpectedProblem
   * @request POST:/messaging/v1/orders/{amazonOrderId}/messages/unexpectedProblem
   */
  createUnexpectedProblem = (
    amazonOrderId: string,
    query: {
      /**
       * A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
       * @maxItems 1
       */
      marketplaceIds: string[];
    },
    body: CreateUnexpectedProblemRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateUnexpectedProblemResponse, CreateUnexpectedProblemResponse>({
      path: `/messaging/v1/orders/${amazonOrderId}/messages/unexpectedProblem`,
      method: "POST",
      code: "post:/messaging/v1/orders/{amazonOrderId}/messages/unexpectedProblem",
      query,
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Sends a message providing the buyer an invoice
   *
   * @tags messaging
   * @name SendInvoice
   * @request POST:/messaging/v1/orders/{amazonOrderId}/messages/invoice
   */
  sendInvoice = (
    amazonOrderId: string,
    query: {
      /**
       * A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified.
       * @maxItems 1
       */
      marketplaceIds: string[];
    },
    body: InvoiceRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<InvoiceResponse, InvoiceResponse>({
      path: `/messaging/v1/orders/${amazonOrderId}/messages/invoice`,
      method: "POST",
      code: "post:/messaging/v1/orders/{amazonOrderId}/messages/invoice",
      query,
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
