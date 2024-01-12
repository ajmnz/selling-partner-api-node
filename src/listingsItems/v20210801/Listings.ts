import type {
  ErrorList,
  Item,
  ListingsItemPatchRequest,
  ListingsItemPutRequest,
  ListingsItemSubmissionResponse,
} from "./data-contracts";
import type { HttpClient, RequestParams } from "../../http-client";
import { ContentType } from "../../http-client";

export class Listings<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Delete a listings item for a selling partner. **Note:** The parameters associated with this operation may contain special characters that must be encoded to successfully call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding). **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags listings
   * @name DeleteListingsItem
   * @request DELETE:/listings/2021-08-01/items/{sellerId}/{sku}
   */
  deleteListingsItem = (
    sellerId: string,
    sku: string,
    query: {
      /**
       * A comma-delimited list of Amazon marketplace identifiers for the request.
       * @example "ATVPDKIKX0DER"
       */
      marketplaceIds: string[];
      /**
       * A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: `en_US`, `fr_CA`, `fr_FR`. Localized messages default to `en_US` when a localization is not available in the specified locale.
       * @example "en_US"
       */
      issueLocale?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<ListingsItemSubmissionResponse, ErrorList>({
      path: `/listings/2021-08-01/items/${sellerId}/${sku}`,
      method: "DELETE",
      code: "delete:/listings/2021-08-01/items/{sellerId}/{sku}",
      query,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns details about a listings item for a selling partner. **Note:** The parameters associated with this operation may contain special characters that must be encoded to successfully call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding). **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags listings
   * @name GetListingsItem
   * @request GET:/listings/2021-08-01/items/{sellerId}/{sku}
   */
  getListingsItem = (
    sellerId: string,
    sku: string,
    query: {
      /**
       * A comma-delimited list of Amazon marketplace identifiers for the request.
       * @example "ATVPDKIKX0DER"
       */
      marketplaceIds: string[];
      /**
       * A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: `en_US`, `fr_CA`, `fr_FR`. Localized messages default to `en_US` when a localization is not available in the specified locale.
       * @example "en_US"
       */
      issueLocale?: string;
      /**
       * A comma-delimited list of data sets to include in the response. Default: `summaries`.
       * @default "summaries"
       * @example "summaries"
       */
      includedData?: (
        | "summaries"
        | "attributes"
        | "issues"
        | "offers"
        | "fulfillmentAvailability"
        | "procurement"
      )[];
    },
    params: RequestParams = {}
  ) =>
    this.http.request<Item, ErrorList>({
      path: `/listings/2021-08-01/items/${sellerId}/${sku}`,
      method: "GET",
      code: "get:/listings/2021-08-01/items/{sellerId}/{sku}",
      query,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Partially update (patch) a listings item for a selling partner. Only top-level listings item attributes can be patched. Patching nested attributes is not supported. **Note:** The parameters associated with this operation may contain special characters that must be encoded to successfully call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding). **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags listings
   * @name PatchListingsItem
   * @request PATCH:/listings/2021-08-01/items/{sellerId}/{sku}
   */
  patchListingsItem = (
    sellerId: string,
    sku: string,
    query: {
      /**
       * A comma-delimited list of Amazon marketplace identifiers for the request.
       * @example "ATVPDKIKX0DER"
       */
      marketplaceIds: string[];
      /**
       * A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: `en_US`, `fr_CA`, `fr_FR`. Localized messages default to `en_US` when a localization is not available in the specified locale.
       * @example "en_US"
       */
      issueLocale?: string;
    },
    body: ListingsItemPatchRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<ListingsItemSubmissionResponse, ErrorList>({
      path: `/listings/2021-08-01/items/${sellerId}/${sku}`,
      method: "PATCH",
      code: "patch:/listings/2021-08-01/items/{sellerId}/{sku}",
      query,
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Creates or fully updates an existing listings item for a selling partner. **Note:** The parameters associated with this operation may contain special characters that must be encoded to successfully call the API. To avoid errors with SKUs when encoding URLs, refer to [URL Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding). **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags listings
   * @name PutListingsItem
   * @request PUT:/listings/2021-08-01/items/{sellerId}/{sku}
   */
  putListingsItem = (
    sellerId: string,
    sku: string,
    query: {
      /**
       * A comma-delimited list of Amazon marketplace identifiers for the request.
       * @example "ATVPDKIKX0DER"
       */
      marketplaceIds: string[];
      /**
       * A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: `en_US`, `fr_CA`, `fr_FR`. Localized messages default to `en_US` when a localization is not available in the specified locale.
       * @example "en_US"
       */
      issueLocale?: string;
    },
    body: ListingsItemPutRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<ListingsItemSubmissionResponse, ErrorList>({
      path: `/listings/2021-08-01/items/${sellerId}/${sku}`,
      method: "PUT",
      code: "put:/listings/2021-08-01/items/{sellerId}/{sku}",
      query,
      body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
