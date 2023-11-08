import type {
  CreateSupplySourceRequest,
  CreateSupplySourceResponse,
  ErrorList,
  GetSupplySourcesResponse,
  SupplySource,
  UpdateSupplySourceRequest,
  UpdateSupplySourceStatusRequest,
} from "./data-contracts";
import type { HttpClient, RequestParams } from "../../http-client";
import { ContentType } from "../../http-client";

export class SupplySources<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description The path to retrieve paginated supply sources.
   *
   * @tags supplySources
   * @name GetSupplySources
   * @request GET:/supplySources/2020-07-01/supplySources
   */
  getSupplySources = (
    query?: {
      /** The pagination token to retrieve a specific page of results. */
      nextPageToken?: string;
      /**
       * The number of supply sources to return per paginated request.
       * @default 10
       */
      pageSize?: number;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetSupplySourcesResponse, ErrorList>({
      path: `/supplySources/2020-07-01/supplySources`,
      method: "GET",
      code: "get:/supplySources/2020-07-01/supplySources",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Create a new supply source.
   *
   * @tags supplySources
   * @name CreateSupplySource
   * @request POST:/supplySources/2020-07-01/supplySources
   */
  createSupplySource = (payload: CreateSupplySourceRequest, params: RequestParams = {}) =>
    this.http.request<CreateSupplySourceResponse, ErrorList>({
      path: `/supplySources/2020-07-01/supplySources`,
      method: "POST",
      code: "post:/supplySources/2020-07-01/supplySources",
      body: payload,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieve a supply source.
   *
   * @tags supplySources
   * @name GetSupplySource
   * @request GET:/supplySources/2020-07-01/supplySources/{supplySourceId}
   */
  getSupplySource = (supplySourceId: string, params: RequestParams = {}) =>
    this.http.request<SupplySource, ErrorList>({
      path: `/supplySources/2020-07-01/supplySources/${supplySourceId}`,
      method: "GET",
      code: "get:/supplySources/2020-07-01/supplySources/{supplySourceId}",
      format: "json",
      ...params,
    });
  /**
   * @description Update the configuration and capabilities of a supply source.
   *
   * @tags supplySources
   * @name UpdateSupplySource
   * @request PUT:/supplySources/2020-07-01/supplySources/{supplySourceId}
   */
  updateSupplySource = (
    supplySourceId: string,
    payload: UpdateSupplySourceRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<ErrorList, ErrorList>({
      path: `/supplySources/2020-07-01/supplySources/${supplySourceId}`,
      method: "PUT",
      code: "put:/supplySources/2020-07-01/supplySources/{supplySourceId}",
      body: payload,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Archive a supply source, making it inactive. Cannot be undone.
   *
   * @tags supplySources
   * @name ArchiveSupplySource
   * @request DELETE:/supplySources/2020-07-01/supplySources/{supplySourceId}
   */
  archiveSupplySource = (supplySourceId: string, params: RequestParams = {}) =>
    this.http.request<ErrorList, ErrorList>({
      path: `/supplySources/2020-07-01/supplySources/${supplySourceId}`,
      method: "DELETE",
      code: "delete:/supplySources/2020-07-01/supplySources/{supplySourceId}",
      format: "json",
      ...params,
    });
  /**
   * @description Update the status of a supply source.
   *
   * @tags supplySources
   * @name UpdateSupplySourceStatus
   * @request PUT:/supplySources/2020-07-01/supplySources/{supplySourceId}/status
   */
  updateSupplySourceStatus = (
    supplySourceId: string,
    payload: UpdateSupplySourceStatusRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<ErrorList, ErrorList>({
      path: `/supplySources/2020-07-01/supplySources/${supplySourceId}/status`,
      method: "PUT",
      code: "put:/supplySources/2020-07-01/supplySources/{supplySourceId}/status",
      body: payload,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
