import type {
  ConfirmPreorderResponse,
  ConfirmTransportResponse,
  CreateInboundShipmentPlanRequest,
  CreateInboundShipmentPlanResponse,
  EstimateTransportResponse,
  GetBillOfLadingResponse,
  GetInboundGuidanceResponse,
  GetLabelsResponse,
  GetPreorderInfoResponse,
  GetPrepInstructionsResponse,
  GetShipmentItemsResponse,
  GetShipmentsResponse,
  GetTransportDetailsResponse,
  InboundShipmentRequest,
  InboundShipmentResponse,
  PutTransportDetailsRequest,
  PutTransportDetailsResponse,
  VoidTransportResponse,
} from "./data-contracts";
import type { HttpClient, RequestParams } from "../../http-client";
import { ContentType } from "../../http-client";

export class Fba<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns information that lets a seller know if Amazon recommends sending an item to a given marketplace. In some cases, Amazon provides guidance for why a given SellerSKU or ASIN is not recommended for shipment to Amazon's fulfillment network. Sellers may still ship items that are not recommended, at their discretion. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags fbaInbound
   * @name GetInboundGuidance
   * @request GET:/fba/inbound/v0/itemsGuidance
   */
  getInboundGuidance = (
    query: {
      /** A marketplace identifier. Specifies the marketplace where the product would be stored. */
      MarketplaceId: string;
      /**
       * A list of SellerSKU values. Used to identify items for which you want inbound guidance for shipment to Amazon's fulfillment network. Note: SellerSKU is qualified by the SellerId, which is included with every Selling Partner API operation that you submit. If you specify a SellerSKU that identifies a variation parent ASIN, this operation returns an error. A variation parent ASIN represents a generic product that cannot be sold. Variation child ASINs represent products that have specific characteristics (such as size and color) and can be sold.
       * @maxItems 50
       */
      SellerSKUList?: string[];
      /**
       * A list of ASIN values. Used to identify items for which you want inbound guidance for shipment to Amazon's fulfillment network. Note: If you specify a ASIN that identifies a variation parent ASIN, this operation returns an error. A variation parent ASIN represents a generic product that cannot be sold. Variation child ASINs represent products that have specific characteristics (such as size and color) and can be sold.
       * @maxItems 50
       */
      ASINList?: string[];
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetInboundGuidanceResponse, GetInboundGuidanceResponse>({
      path: `/fba/inbound/v0/itemsGuidance`,
      method: "GET",
      code: "get:/fba/inbound/v0/itemsGuidance",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns one or more inbound shipment plans, which provide the information you need to create one or more inbound shipments for a set of items that you specify. Multiple inbound shipment plans might be required so that items can be optimally placed in Amazon's fulfillment network—for example, positioning inventory closer to the customer. Alternatively, two inbound shipment plans might be created with the same Amazon fulfillment center destination if the two shipment plans require different processing—for example, items that require labels must be shipped separately from stickerless, commingled inventory. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags fbaInbound
   * @name CreateInboundShipmentPlan
   * @request POST:/fba/inbound/v0/plans
   */
  createInboundShipmentPlan = (
    body: CreateInboundShipmentPlanRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<
      CreateInboundShipmentPlanResponse,
      CreateInboundShipmentPlanResponse
    >({
      path: `/fba/inbound/v0/plans`,
      method: "POST",
      code: "post:/fba/inbound/v0/plans",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a new inbound shipment based on the specified shipmentId that was returned by the createInboundShipmentPlan operation. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags fbaInbound
   * @name CreateInboundShipment
   * @request POST:/fba/inbound/v0/shipments/{shipmentId}
   */
  createInboundShipment = (
    shipmentId: string,
    body: InboundShipmentRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<InboundShipmentResponse, InboundShipmentResponse>({
      path: `/fba/inbound/v0/shipments/${shipmentId}`,
      method: "POST",
      code: "post:/fba/inbound/v0/shipments/{shipmentId}",
      body,
      format: "json",
      ...params,
    });
  /**
   * @description Updates or removes items from the inbound shipment identified by the specified shipment identifier. Adding new items is not supported. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags fbaInbound
   * @name UpdateInboundShipment
   * @request PUT:/fba/inbound/v0/shipments/{shipmentId}
   */
  updateInboundShipment = (
    shipmentId: string,
    body: InboundShipmentRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<InboundShipmentResponse, InboundShipmentResponse>({
      path: `/fba/inbound/v0/shipments/${shipmentId}`,
      method: "PUT",
      code: "put:/fba/inbound/v0/shipments/{shipmentId}",
      body,
      format: "json",
      ...params,
    });
  /**
   * @description Returns pre-order information, including dates, that a seller needs before confirming a shipment for pre-order. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags fbaInbound
   * @name GetPreorderInfo
   * @request GET:/fba/inbound/v0/shipments/{shipmentId}/preorder
   */
  getPreorderInfo = (
    shipmentId: string,
    query: {
      /** A marketplace identifier. Specifies the marketplace the shipment is tied to. */
      MarketplaceId: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetPreorderInfoResponse, GetPreorderInfoResponse>({
      path: `/fba/inbound/v0/shipments/${shipmentId}/preorder`,
      method: "GET",
      code: "get:/fba/inbound/v0/shipments/{shipmentId}/preorder",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns information needed to confirm a shipment for pre-order. Call this operation after calling the getPreorderInfo operation to get the NeedByDate value and other pre-order information about the shipment. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags fbaInbound
   * @name ConfirmPreorder
   * @request PUT:/fba/inbound/v0/shipments/{shipmentId}/preorder/confirm
   */
  confirmPreorder = (
    shipmentId: string,
    query: {
      /**
       * Date that the shipment must arrive at the Amazon fulfillment center to avoid delivery promise breaks for pre-ordered items. Must be in YYYY-MM-DD format. The response to the getPreorderInfo operation returns this value.
       * @format date
       */
      NeedByDate: string;
      /** A marketplace identifier. Specifies the marketplace the shipment is tied to. */
      MarketplaceId: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<ConfirmPreorderResponse, ConfirmPreorderResponse>({
      path: `/fba/inbound/v0/shipments/${shipmentId}/preorder/confirm`,
      method: "PUT",
      code: "put:/fba/inbound/v0/shipments/{shipmentId}/preorder/confirm",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns labeling requirements and item preparation instructions to help prepare items for shipment to Amazon's fulfillment network. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags fbaInbound
   * @name GetPrepInstructions
   * @request GET:/fba/inbound/v0/prepInstructions
   */
  getPrepInstructions = (
    query: {
      /**
       * The country code of the country to which the items will be shipped. Note that labeling requirements and item preparation instructions can vary by country.
       * @format [A-Z]{2}
       */
      ShipToCountryCode: string;
      /**
       * A list of SellerSKU values. Used to identify items for which you want labeling requirements and item preparation instructions for shipment to Amazon's fulfillment network. The SellerSKU is qualified by the Seller ID, which is included with every call to the Seller Partner API.
       *
       * Note: Include seller SKUs that you have used to list items on Amazon's retail website. If you include a seller SKU that you have never used to list an item on Amazon's retail website, the seller SKU is returned in the InvalidSKUList property in the response.
       * @maxItems 50
       */
      SellerSKUList?: string[];
      /**
       * A list of ASIN values. Used to identify items for which you want item preparation instructions to help with item sourcing decisions.
       *
       * Note: ASINs must be included in the product catalog for at least one of the marketplaces that the seller  participates in. Any ASIN that is not included in the product catalog for at least one of the marketplaces that the seller participates in is returned in the InvalidASINList property in the response. You can find out which marketplaces a seller participates in by calling the getMarketplaceParticipations operation in the Selling Partner API for Sellers.
       * @maxItems 50
       */
      ASINList?: string[];
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetPrepInstructionsResponse, GetPrepInstructionsResponse>({
      path: `/fba/inbound/v0/prepInstructions`,
      method: "GET",
      code: "get:/fba/inbound/v0/prepInstructions",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns current transportation information about an inbound shipment. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags fbaInbound
   * @name GetTransportDetails
   * @request GET:/fba/inbound/v0/shipments/{shipmentId}/transport
   */
  getTransportDetails = (shipmentId: string, params: RequestParams = {}) =>
    this.http.request<GetTransportDetailsResponse, GetTransportDetailsResponse>({
      path: `/fba/inbound/v0/shipments/${shipmentId}/transport`,
      method: "GET",
      code: "get:/fba/inbound/v0/shipments/{shipmentId}/transport",
      format: "json",
      ...params,
    });
  /**
   * @description Sends transportation information to Amazon about an inbound shipment. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags fbaInbound
   * @name PutTransportDetails
   * @request PUT:/fba/inbound/v0/shipments/{shipmentId}/transport
   */
  putTransportDetails = (
    shipmentId: string,
    body: PutTransportDetailsRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<PutTransportDetailsResponse, PutTransportDetailsResponse>({
      path: `/fba/inbound/v0/shipments/${shipmentId}/transport`,
      method: "PUT",
      code: "put:/fba/inbound/v0/shipments/{shipmentId}/transport",
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Cancels a previously-confirmed request to ship an inbound shipment using an Amazon-partnered carrier. To be successful, you must call this operation before the VoidDeadline date that is returned by the getTransportDetails operation. Important: The VoidDeadline date is 24 hours after you confirm a Small Parcel shipment transportation request or one hour after you confirm a Less Than Truckload/Full Truckload (LTL/FTL) shipment transportation request. After the void deadline passes, your account will be charged for the shipping cost. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags fbaInbound
   * @name VoidTransport
   * @request POST:/fba/inbound/v0/shipments/{shipmentId}/transport/void
   */
  voidTransport = (shipmentId: string, params: RequestParams = {}) =>
    this.http.request<VoidTransportResponse, VoidTransportResponse>({
      path: `/fba/inbound/v0/shipments/${shipmentId}/transport/void`,
      method: "POST",
      code: "post:/fba/inbound/v0/shipments/{shipmentId}/transport/void",
      format: "json",
      ...params,
    });
  /**
   * @description Initiates the process of estimating the shipping cost for an inbound shipment by an Amazon-partnered carrier. Prior to calling the estimateTransport operation, you must call the putTransportDetails operation to provide Amazon with the transportation information for the inbound shipment. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags fbaInbound
   * @name EstimateTransport
   * @request POST:/fba/inbound/v0/shipments/{shipmentId}/transport/estimate
   */
  estimateTransport = (shipmentId: string, params: RequestParams = {}) =>
    this.http.request<EstimateTransportResponse, EstimateTransportResponse>({
      path: `/fba/inbound/v0/shipments/${shipmentId}/transport/estimate`,
      method: "POST",
      code: "post:/fba/inbound/v0/shipments/{shipmentId}/transport/estimate",
      format: "json",
      ...params,
    });
  /**
   * @description Confirms that the seller accepts the Amazon-partnered shipping estimate, agrees to allow Amazon to charge their account for the shipping cost, and requests that the Amazon-partnered carrier ship the inbound shipment. Prior to calling the confirmTransport operation, you should call the getTransportDetails operation to get the Amazon-partnered shipping estimate. Important: After confirming the transportation request, if the seller decides that they do not want the Amazon-partnered carrier to ship the inbound shipment, you can call the voidTransport operation to cancel the transportation request. Note that for a Small Parcel shipment, the seller has 24 hours after confirming a transportation request to void the transportation request. For a Less Than Truckload/Full Truckload (LTL/FTL) shipment, the seller has one hour after confirming a transportation request to void it. After the grace period has expired the seller's account will be charged for the shipping cost. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags fbaInbound
   * @name ConfirmTransport
   * @request POST:/fba/inbound/v0/shipments/{shipmentId}/transport/confirm
   */
  confirmTransport = (shipmentId: string, params: RequestParams = {}) =>
    this.http.request<ConfirmTransportResponse, ConfirmTransportResponse>({
      path: `/fba/inbound/v0/shipments/${shipmentId}/transport/confirm`,
      method: "POST",
      code: "post:/fba/inbound/v0/shipments/{shipmentId}/transport/confirm",
      format: "json",
      ...params,
    });
  /**
   * @description Returns package/pallet labels for faster and more accurate shipment processing at the Amazon fulfillment center. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags fbaInbound
   * @name GetLabels
   * @request GET:/fba/inbound/v0/shipments/{shipmentId}/labels
   */
  getLabels = (
    shipmentId: string,
    query: {
      /** The page type to use to print the labels. Submitting a PageType value that is not supported in your marketplace returns an error. */
      PageType:
        | "PackageLabel_Letter_2"
        | "PackageLabel_Letter_4"
        | "PackageLabel_Letter_6"
        | "PackageLabel_Letter_6_CarrierLeft"
        | "PackageLabel_A4_2"
        | "PackageLabel_A4_4"
        | "PackageLabel_Plain_Paper"
        | "PackageLabel_Plain_Paper_CarrierBottom"
        | "PackageLabel_Thermal"
        | "PackageLabel_Thermal_Unified"
        | "PackageLabel_Thermal_NonPCP"
        | "PackageLabel_Thermal_No_Carrier_Rotation";
      /** The type of labels requested.  */
      LabelType: "BARCODE_2D" | "UNIQUE" | "PALLET";
      /** The number of packages in the shipment. */
      NumberOfPackages?: number;
      /**
       * A list of identifiers that specify packages for which you want package labels printed.
       *
       * Must match CartonId values previously passed using the FBA Inbound Shipment Carton Information Feed. If not, the operation returns the IncorrectPackageIdentifier error code.
       * @maxItems 999
       */
      PackageLabelsToPrint?: string[];
      /** The number of pallets in the shipment. This returns four identical labels for each pallet. */
      NumberOfPallets?: number;
      /** The page size for paginating through the total packages' labels. This is a required parameter for Non-Partnered LTL Shipments. Max value:1000. */
      PageSize?: number;
      /** The page start index for paginating through the total packages' labels. This is a required parameter for Non-Partnered LTL Shipments. */
      PageStartIndex?: number;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetLabelsResponse, GetLabelsResponse>({
      path: `/fba/inbound/v0/shipments/${shipmentId}/labels`,
      method: "GET",
      code: "get:/fba/inbound/v0/shipments/{shipmentId}/labels",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a bill of lading for a Less Than Truckload/Full Truckload (LTL/FTL) shipment. The getBillOfLading operation returns PDF document data for printing a bill of lading for an Amazon-partnered Less Than Truckload/Full Truckload (LTL/FTL) inbound shipment. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags fbaInbound
   * @name GetBillOfLading
   * @request GET:/fba/inbound/v0/shipments/{shipmentId}/billOfLading
   */
  getBillOfLading = (shipmentId: string, params: RequestParams = {}) =>
    this.http.request<GetBillOfLadingResponse, GetBillOfLadingResponse>({
      path: `/fba/inbound/v0/shipments/${shipmentId}/billOfLading`,
      method: "GET",
      code: "get:/fba/inbound/v0/shipments/{shipmentId}/billOfLading",
      format: "json",
      ...params,
    });
  /**
   * @description Returns a list of inbound shipments based on criteria that you specify. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags fbaInbound
   * @name GetShipments
   * @request GET:/fba/inbound/v0/shipments
   */
  getShipments = (
    query: {
      /** A list of ShipmentStatus values. Used to select shipments with a current status that matches the status values that you specify. */
      ShipmentStatusList?: (
        | "WORKING"
        | "READY_TO_SHIP"
        | "SHIPPED"
        | "RECEIVING"
        | "CANCELLED"
        | "DELETED"
        | "CLOSED"
        | "ERROR"
        | "IN_TRANSIT"
        | "DELIVERED"
        | "CHECKED_IN"
      )[];
      /** A list of shipment IDs used to select the shipments that you want. If both ShipmentStatusList and ShipmentIdList are specified, only shipments that match both parameters are returned. */
      ShipmentIdList?: string[];
      /**
       * A date used for selecting inbound shipments that were last updated after (or at) a specified time. The selection includes updates made by Amazon and by the seller.
       * @format date-time
       */
      LastUpdatedAfter?: string;
      /**
       * A date used for selecting inbound shipments that were last updated before (or at) a specified time. The selection includes updates made by Amazon and by the seller.
       * @format date-time
       */
      LastUpdatedBefore?: string;
      /** Indicates whether shipments are returned using shipment information (by providing the ShipmentStatusList or ShipmentIdList parameters), using a date range (by providing the LastUpdatedAfter and LastUpdatedBefore parameters), or by using NextToken to continue returning items specified in a previous request. */
      QueryType: "SHIPMENT" | "DATE_RANGE" | "NEXT_TOKEN";
      /** A string token returned in the response to your previous request. */
      NextToken?: string;
      /** A marketplace identifier. Specifies the marketplace where the product would be stored. */
      MarketplaceId: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetShipmentsResponse, GetShipmentsResponse>({
      path: `/fba/inbound/v0/shipments`,
      method: "GET",
      code: "get:/fba/inbound/v0/shipments",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a list of items in a specified inbound shipment. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags fbaInbound
   * @name GetShipmentItemsByShipmentId
   * @request GET:/fba/inbound/v0/shipments/{shipmentId}/items
   */
  getShipmentItemsByShipmentId = (
    shipmentId: string,
    query: {
      /** A marketplace identifier. Specifies the marketplace where the product would be stored. */
      MarketplaceId: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetShipmentItemsResponse, GetShipmentItemsResponse>({
      path: `/fba/inbound/v0/shipments/${shipmentId}/items`,
      method: "GET",
      code: "get:/fba/inbound/v0/shipments/{shipmentId}/items",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a list of items in a specified inbound shipment, or a list of items that were updated within a specified time frame. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags fbaInbound
   * @name GetShipmentItems
   * @request GET:/fba/inbound/v0/shipmentItems
   */
  getShipmentItems = (
    query: {
      /**
       * A date used for selecting inbound shipment items that were last updated after (or at) a specified time. The selection includes updates made by Amazon and by the seller.
       * @format date-time
       */
      LastUpdatedAfter?: string;
      /**
       * A date used for selecting inbound shipment items that were last updated before (or at) a specified time. The selection includes updates made by Amazon and by the seller.
       * @format date-time
       */
      LastUpdatedBefore?: string;
      /** Indicates whether items are returned using a date range (by providing the LastUpdatedAfter and LastUpdatedBefore parameters), or using NextToken, which continues returning items specified in a previous request. */
      QueryType: "DATE_RANGE" | "NEXT_TOKEN";
      /** A string token returned in the response to your previous request. */
      NextToken?: string;
      /** A marketplace identifier. Specifies the marketplace where the product would be stored. */
      MarketplaceId: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetShipmentItemsResponse, GetShipmentItemsResponse>({
      path: `/fba/inbound/v0/shipmentItems`,
      method: "GET",
      code: "get:/fba/inbound/v0/shipmentItems",
      query,
      format: "json",
      ...params,
    });
}
