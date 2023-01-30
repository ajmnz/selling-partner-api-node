import {
  SubmitInventoryUpdateRequest,
  SubmitInventoryUpdateResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "../../../http-client";

export class Vendor<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Submits inventory updates for the specified warehouse for either a partial or full feed of inventory items. **Usage Plans:** | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable | The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags updateInventory
   * @name SubmitInventoryUpdate
   * @request POST:/vendor/directFulfillment/inventory/v1/warehouses/{warehouseId}/items
   */
  submitInventoryUpdate = (
    warehouseId: string,
    body: SubmitInventoryUpdateRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<SubmitInventoryUpdateResponse, SubmitInventoryUpdateResponse>({
      path: `/vendor/directFulfillment/inventory/v1/warehouses/${warehouseId}/items`,
      method: "POST",
      code: "post:/vendor/directFulfillment/inventory/v1/warehouses/{warehouseId}/items",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
