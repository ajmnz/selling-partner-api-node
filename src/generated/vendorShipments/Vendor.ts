import {
  SubmitShipmentConfirmationsRequest,
  SubmitShipmentConfirmationsResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "../../http-client";

export class Vendor<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Submits one or more shipment confirmations for vendor orders. **Usage Plans:** | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 10 | 10 | |Selling partner specific| Variable | Variable | The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags vendorShipping
   * @name SubmitShipmentConfirmations
   * @request POST:/vendor/shipping/v1/shipmentConfirmations
   */
  submitShipmentConfirmations = (
    body: SubmitShipmentConfirmationsRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<
      SubmitShipmentConfirmationsResponse,
      SubmitShipmentConfirmationsResponse
    >({
      path: `/vendor/shipping/v1/shipmentConfirmations`,
      method: "POST",
      code: "post:/vendor/shipping/v1/shipmentConfirmations",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
