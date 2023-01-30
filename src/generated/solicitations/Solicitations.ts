import {
  CreateProductReviewAndSellerFeedbackSolicitationResponse,
  GetSolicitationActionsForOrderResponse,
} from "./data-contracts";
import { HttpClient, RequestParams } from "../../http-client";

export class Solicitations<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns a list of solicitation types that are available for an order that you specify. A solicitation type is represented by an actions object, which contains a path and query parameter(s). You can use the path and parameter(s) to call an operation that sends a solicitation. Currently only the productReviewAndSellerFeedbackSolicitation solicitation type is available. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags solicitations
   * @name GetSolicitationActionsForOrder
   * @request GET:/solicitations/v1/orders/{amazonOrderId}
   */
  getSolicitationActionsForOrder = (
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
      GetSolicitationActionsForOrderResponse,
      GetSolicitationActionsForOrderResponse
    >({
      path: `/solicitations/v1/orders/${amazonOrderId}`,
      method: "GET",
      code: "get:/solicitations/v1/orders/{amazonOrderId}",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Sends a solicitation to a buyer asking for seller feedback and a product review for the specified order. Send only one productReviewAndSellerFeedback or free form proactive message per order. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 5 | For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   *
   * @tags solicitations
   * @name CreateProductReviewAndSellerFeedbackSolicitation
   * @request POST:/solicitations/v1/orders/{amazonOrderId}/solicitations/productReviewAndSellerFeedback
   */
  createProductReviewAndSellerFeedbackSolicitation = (
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
      CreateProductReviewAndSellerFeedbackSolicitationResponse,
      CreateProductReviewAndSellerFeedbackSolicitationResponse
    >({
      path: `/solicitations/v1/orders/${amazonOrderId}/solicitations/productReviewAndSellerFeedback`,
      method: "POST",
      code: "post:/solicitations/v1/orders/{amazonOrderId}/solicitations/productReviewAndSellerFeedback",
      query: query,
      format: "json",
      ...params,
    });
}
