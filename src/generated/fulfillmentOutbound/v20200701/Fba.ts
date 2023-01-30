import {
  CancelFulfillmentOrderResponse,
  CreateFulfillmentOrderRequest,
  CreateFulfillmentOrderResponse,
  CreateFulfillmentReturnRequest,
  CreateFulfillmentReturnResponse,
  GetFeatureInventoryResponse,
  GetFeatureSkuResponse,
  GetFeaturesResponse,
  GetFulfillmentOrderResponse,
  GetFulfillmentPreviewRequest,
  GetFulfillmentPreviewResponse,
  GetPackageTrackingDetailsResponse,
  ListAllFulfillmentOrdersResponse,
  ListReturnReasonCodesResponse,
  UpdateFulfillmentOrderRequest,
  UpdateFulfillmentOrderResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "../../../http-client";

export class Fba<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns a list of fulfillment order previews based on shipping criteria that you specify. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags fbaOutbound
   * @name GetFulfillmentPreview
   * @request POST:/fba/outbound/2020-07-01/fulfillmentOrders/preview
   */
  getFulfillmentPreview = (
    body: GetFulfillmentPreviewRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<GetFulfillmentPreviewResponse, GetFulfillmentPreviewResponse>({
      path: `/fba/outbound/2020-07-01/fulfillmentOrders/preview`,
      method: "POST",
      code: "post:/fba/outbound/2020-07-01/fulfillmentOrders/preview",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a list of fulfillment orders fulfilled after (or at) a specified date-time, or indicated by the next token parameter. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags fbaOutbound
   * @name ListAllFulfillmentOrders
   * @request GET:/fba/outbound/2020-07-01/fulfillmentOrders
   */
  listAllFulfillmentOrders = (
    query?: {
      /**
       * A date used to select fulfillment orders that were last updated after (or at) a specified time. An update is defined as any change in fulfillment order status, including the creation of a new fulfillment order.
       * @format date-time
       */
      queryStartDate?: string;
      /** A string token returned in the response to your previous request. */
      nextToken?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<ListAllFulfillmentOrdersResponse, ListAllFulfillmentOrdersResponse>(
      {
        path: `/fba/outbound/2020-07-01/fulfillmentOrders`,
        method: "GET",
        code: "get:/fba/outbound/2020-07-01/fulfillmentOrders",
        query: query,
        format: "json",
        ...params,
      }
    );
  /**
   * @description Requests that Amazon ship items from the seller's inventory in Amazon's fulfillment network to a destination address. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags fbaOutbound
   * @name CreateFulfillmentOrder
   * @request POST:/fba/outbound/2020-07-01/fulfillmentOrders
   */
  createFulfillmentOrder = (
    body: CreateFulfillmentOrderRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateFulfillmentOrderResponse, CreateFulfillmentOrderResponse>({
      path: `/fba/outbound/2020-07-01/fulfillmentOrders`,
      method: "POST",
      code: "post:/fba/outbound/2020-07-01/fulfillmentOrders",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns delivery tracking information for a package in an outbound shipment for a Multi-Channel Fulfillment order. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags fbaOutbound
   * @name GetPackageTrackingDetails
   * @request GET:/fba/outbound/2020-07-01/tracking
   */
  getPackageTrackingDetails = (
    query: {
      /**
       * The unencrypted package identifier returned by the getFulfillmentOrder operation.
       * @format int32
       */
      packageNumber: number;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<
      GetPackageTrackingDetailsResponse,
      GetPackageTrackingDetailsResponse
    >({
      path: `/fba/outbound/2020-07-01/tracking`,
      method: "GET",
      code: "get:/fba/outbound/2020-07-01/tracking",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a list of return reason codes for a seller SKU in a given marketplace. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags fbaOutbound
   * @name ListReturnReasonCodes
   * @request GET:/fba/outbound/2020-07-01/returnReasonCodes
   */
  listReturnReasonCodes = (
    query: {
      /** The seller SKU for which return reason codes are required. */
      sellerSku: string;
      /** The marketplace for which the seller wants return reason codes. */
      marketplaceId?: string;
      /** The identifier assigned to the item by the seller when the fulfillment order was created. The service uses this value to determine the marketplace for which the seller wants return reason codes. */
      sellerFulfillmentOrderId?: string;
      /** The language that the TranslatedDescription property of the ReasonCodeDetails response object should be translated into. */
      language: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<ListReturnReasonCodesResponse, ListReturnReasonCodesResponse>({
      path: `/fba/outbound/2020-07-01/returnReasonCodes`,
      method: "GET",
      code: "get:/fba/outbound/2020-07-01/returnReasonCodes",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a fulfillment return. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags fbaOutbound
   * @name CreateFulfillmentReturn
   * @request PUT:/fba/outbound/2020-07-01/fulfillmentOrders/{sellerFulfillmentOrderId}/return
   */
  createFulfillmentReturn = (
    sellerFulfillmentOrderId: string,
    body: CreateFulfillmentReturnRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateFulfillmentReturnResponse, CreateFulfillmentReturnResponse>({
      path: `/fba/outbound/2020-07-01/fulfillmentOrders/${sellerFulfillmentOrderId}/return`,
      method: "PUT",
      code: "put:/fba/outbound/2020-07-01/fulfillmentOrders/{sellerFulfillmentOrderId}/return",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns the fulfillment order indicated by the specified order identifier. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags fbaOutbound
   * @name GetFulfillmentOrder
   * @request GET:/fba/outbound/2020-07-01/fulfillmentOrders/{sellerFulfillmentOrderId}
   */
  getFulfillmentOrder = (sellerFulfillmentOrderId: string, params: RequestParams = {}) =>
    this.http.request<GetFulfillmentOrderResponse, GetFulfillmentOrderResponse>({
      path: `/fba/outbound/2020-07-01/fulfillmentOrders/${sellerFulfillmentOrderId}`,
      method: "GET",
      code: "get:/fba/outbound/2020-07-01/fulfillmentOrders/{sellerFulfillmentOrderId}",
      format: "json",
      ...params,
    });
  /**
   * @description Updates and/or requests shipment for a fulfillment order with an order hold on it. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags fbaOutbound
   * @name UpdateFulfillmentOrder
   * @request PUT:/fba/outbound/2020-07-01/fulfillmentOrders/{sellerFulfillmentOrderId}
   */
  updateFulfillmentOrder = (
    sellerFulfillmentOrderId: string,
    body: UpdateFulfillmentOrderRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<UpdateFulfillmentOrderResponse, UpdateFulfillmentOrderResponse>({
      path: `/fba/outbound/2020-07-01/fulfillmentOrders/${sellerFulfillmentOrderId}`,
      method: "PUT",
      code: "put:/fba/outbound/2020-07-01/fulfillmentOrders/{sellerFulfillmentOrderId}",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Requests that Amazon stop attempting to fulfill the fulfillment order indicated by the specified order identifier. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags fbaOutbound
   * @name CancelFulfillmentOrder
   * @request PUT:/fba/outbound/2020-07-01/fulfillmentOrders/{sellerFulfillmentOrderId}/cancel
   */
  cancelFulfillmentOrder = (
    sellerFulfillmentOrderId: string,
    params: RequestParams = {}
  ) =>
    this.http.request<CancelFulfillmentOrderResponse, CancelFulfillmentOrderResponse>({
      path: `/fba/outbound/2020-07-01/fulfillmentOrders/${sellerFulfillmentOrderId}/cancel`,
      method: "PUT",
      code: "put:/fba/outbound/2020-07-01/fulfillmentOrders/{sellerFulfillmentOrderId}/cancel",
      format: "json",
      ...params,
    });
  /**
   * @description Returns a list of features available for Multi-Channel Fulfillment orders in the marketplace you specify, and whether the seller for which you made the call is enrolled for each feature. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags fbaOutbound
   * @name GetFeatures
   * @request GET:/fba/outbound/2020-07-01/features
   */
  getFeatures = (
    query: {
      /** The marketplace for which to return the list of features. */
      marketplaceId: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetFeaturesResponse, GetFeaturesResponse>({
      path: `/fba/outbound/2020-07-01/features`,
      method: "GET",
      code: "get:/fba/outbound/2020-07-01/features",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a list of inventory items that are eligible for the fulfillment feature you specify. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags fbaOutbound
   * @name GetFeatureInventory
   * @request GET:/fba/outbound/2020-07-01/features/inventory/{featureName}
   */
  getFeatureInventory = (
    featureName: string,
    query: {
      /** The marketplace for which to return a list of the inventory that is eligible for the specified feature. */
      marketplaceId: string;
      /** A string token returned in the response to your previous request that is used to return the next response page. A value of null will return the first page. */
      nextToken?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetFeatureInventoryResponse, GetFeatureInventoryResponse>({
      path: `/fba/outbound/2020-07-01/features/inventory/${featureName}`,
      method: "GET",
      code: "get:/fba/outbound/2020-07-01/features/inventory/{featureName}",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns the number of items with the sellerSKU you specify that can have orders fulfilled using the specified feature. Note that if the sellerSKU isn't eligible, the response will contain an empty skuInfo object. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags fbaOutbound
   * @name GetFeatureSku
   * @request GET:/fba/outbound/2020-07-01/features/inventory/{featureName}/{sellerSku}
   */
  getFeatureSku = (
    featureName: string,
    sellerSku: string,
    query: {
      /** The marketplace for which to return the count. */
      marketplaceId: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetFeatureSkuResponse, GetFeatureSkuResponse>({
      path: `/fba/outbound/2020-07-01/features/inventory/${featureName}/${sellerSku}`,
      method: "GET",
      code: "get:/fba/outbound/2020-07-01/features/inventory/{featureName}/{sellerSku}",
      query: query,
      format: "json",
      ...params,
    });
}
