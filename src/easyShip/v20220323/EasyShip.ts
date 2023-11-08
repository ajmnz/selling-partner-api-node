import type {
  CreateScheduledPackageRequest,
  CreateScheduledPackagesRequest,
  CreateScheduledPackagesResponse,
  ErrorList,
  ListHandoverSlotsRequest,
  ListHandoverSlotsResponse,
  Package,
  Packages,
  UpdateScheduledPackagesRequest,
} from "./data-contracts";
import type { HttpClient, RequestParams } from "../../http-client";
import { ContentType } from "../../http-client";

export class EasyShip<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns time slots available for Easy Ship orders to be scheduled based on the package weight and dimensions that the seller specifies. This operation is available for scheduled and unscheduled orders based on marketplace support. See **Get Time Slots** in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table). This operation can return time slots that have either pickup or drop-off handover methods - see **Supported Handover Methods** in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table). **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags easyShip
   * @name ListHandoverSlots
   * @request POST:/easyShip/2022-03-23/timeSlot
   */
  listHandoverSlots = (
    ListHandoverSlotsRequest: ListHandoverSlotsRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<ListHandoverSlotsResponse, ErrorList>({
      path: `/easyShip/2022-03-23/timeSlot`,
      method: "POST",
      code: "post:/easyShip/2022-03-23/timeSlot",
      body: ListHandoverSlotsRequest,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns information about a package, including dimensions, weight, time slot information for handover, invoice and item information, and status. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags easyShip
   * @name GetScheduledPackage
   * @request GET:/easyShip/2022-03-23/package
   */
  getScheduledPackage = (
    query: {
      /**
       * An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship.
       * @minLength 1
       * @maxLength 255
       */
      amazonOrderId: string;
      /**
       * An identifier for the marketplace in which the seller is selling.
       * @minLength 1
       * @maxLength 255
       */
      marketplaceId: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<Package, ErrorList>({
      path: `/easyShip/2022-03-23/package`,
      method: "GET",
      code: "get:/easyShip/2022-03-23/package",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Schedules an Easy Ship order and returns the scheduled package information. This operation does the following: *  Specifies the time slot and handover method for the order to be scheduled for delivery. * Updates the Easy Ship order status. * Generates a shipping label and an invoice. Calling `createScheduledPackage` also generates a warranty document if you specify a `SerialNumber` value. To get these documents, see [How to get invoice, shipping label, and warranty documents](doc:easyship-api-v2022-03-23-use-case-guide). * Shows the status of Easy Ship orders when you call the `getOrders` operation of the Selling Partner API for Orders and examine the `EasyShipShipmentStatus` property in the response body. See the **Shipping Label**, **Invoice**, and **Warranty** columns in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table) to see which documents are supported in each marketplace. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags easyShip
   * @name CreateScheduledPackage
   * @request POST:/easyShip/2022-03-23/package
   */
  createScheduledPackage = (
    CreateScheduledPackageRequest: CreateScheduledPackageRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<Package, ErrorList>({
      path: `/easyShip/2022-03-23/package`,
      method: "POST",
      code: "post:/easyShip/2022-03-23/package",
      body: CreateScheduledPackageRequest,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Updates the time slot for handing over the package indicated by the specified `scheduledPackageId`. You can get the new `slotId` value for the time slot by calling the `listHandoverSlots` operation before making another `patch` call. See the **Update Package** column in the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table) to see which marketplaces this operation is supported in. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags easyShip
   * @name UpdateScheduledPackages
   * @request PATCH:/easyShip/2022-03-23/package
   */
  updateScheduledPackages = (
    UpdateScheduledPackagesRequest: UpdateScheduledPackagesRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<Packages, ErrorList>({
      path: `/easyShip/2022-03-23/package`,
      method: "PATCH",
      code: "patch:/easyShip/2022-03-23/package",
      body: UpdateScheduledPackagesRequest,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description This operation automatically schedules a time slot for all the `amazonOrderId`s given as input, generating the associated shipping labels, along with other compliance documents according to the marketplace (refer to the [marketplace document support table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table)). Developers calling this operation may optionally assign a `packageDetails` object, allowing them to input a preferred time slot for each order in ther request. In this case, Amazon will try to schedule the respective packages using their optional settings. On the other hand, *i.e.*, if the time slot is not provided, Amazon will then pick the earliest time slot possible. Regarding the shipping label's file format, external developers are able to choose between PDF or ZPL, and Amazon will create the label accordingly. This operation returns an array composed of the scheduled packages, and a short-lived URL pointing to a zip file containing the generated shipping labels and the other documents enabled for your marketplace. If at least an order couldn't be scheduled, then Amazon adds the `rejectedOrders` list into the response, which contains an entry for each order we couldn't process. Each entry is composed of an error message describing the reason of the failure, so that sellers can take action. The table below displays the supported request and burst maximum rates: **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags easyShip
   * @name CreateScheduledPackageBulk
   * @request POST:/easyShip/2022-03-23/packages/bulk
   */
  createScheduledPackageBulk = (
    CreateScheduledPackagesRequest: CreateScheduledPackagesRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<CreateScheduledPackagesResponse, ErrorList>({
      path: `/easyShip/2022-03-23/packages/bulk`,
      method: "POST",
      code: "post:/easyShip/2022-03-23/packages/bulk",
      body: CreateScheduledPackagesRequest,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
