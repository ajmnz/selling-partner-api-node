import type {
  GetCatalogItemResponse,
  ListCatalogCategoriesResponse,
  ListCatalogItemsResponse,
} from "./data-contracts";
import type { HttpClient, RequestParams } from "../../http-client";

export class Catalog<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Effective September 30, 2022, the `listCatalogItems` operation will no longer be available in the Selling Partner API for Catalog Items v0. As an alternative, `searchCatalogItems` is available in the latest version of the [Selling Partner API for Catalog Items v2022-04-01](doc:catalog-items-api-v2022-04-01-reference). Integrations that rely on the `listCatalogItems` operation should migrate to the `searchCatalogItems`operation to avoid service disruption. _Note:_ The [`listCatalogCategories`](#get-catalogv0categories) operation is not being deprecated and you can continue to make calls to it.
   *
   * @tags catalog
   * @name ListCatalogItems
   * @request GET:/catalog/v0/items
   */
  listCatalogItems = (
    query: {
      /** A marketplace identifier. Specifies the marketplace for which items are returned. */
      MarketplaceId: string;
      /** Keyword(s) to use to search for items in the catalog. Example: 'harry potter books'. */
      Query?: string;
      /** An identifier for the context within which the given search will be performed. A marketplace might provide mechanisms for constraining a search to a subset of potential items. For example, the retail marketplace allows queries to be constrained to a specific category. The QueryContextId parameter specifies such a subset. If it is omitted, the search will be performed using the default context for the marketplace, which will typically contain the largest set of items. */
      QueryContextId?: string;
      /** Used to identify an item in the given marketplace. SellerSKU is qualified by the seller's SellerId, which is included with every operation that you submit. */
      SellerSKU?: string;
      /** A 12-digit bar code used for retail packaging. */
      UPC?: string;
      /** A European article number that uniquely identifies the catalog item, manufacturer, and its attributes. */
      EAN?: string;
      /** The unique commercial book identifier used to identify books internationally. */
      ISBN?: string;
      /** A Japanese article number that uniquely identifies the product, manufacturer, and its attributes. */
      JAN?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<ListCatalogItemsResponse, ListCatalogItemsResponse>({
      path: `/catalog/v0/items`,
      method: "GET",
      code: "get:/catalog/v0/items",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Effective September 30, 2022, the `getCatalogItem` operation will no longer be available in the Selling Partner API for Catalog Items v0. This operation is available in the latest version of the [Selling Partner API for Catalog Items v2022-04-01](doc:catalog-items-api-v2022-04-01-reference). Integrations that rely on this operation should migrate to the latest version to avoid service disruption. _Note:_ The [`listCatalogCategories`](#get-catalogv0categories) operation is not being deprecated and you can continue to make calls to it.
   *
   * @tags catalog
   * @name GetCatalogItem
   * @request GET:/catalog/v0/items/{asin}
   */
  getCatalogItem = (
    asin: string,
    query: {
      /** A marketplace identifier. Specifies the marketplace for the item. */
      MarketplaceId: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetCatalogItemResponse, GetCatalogItemResponse>({
      path: `/catalog/v0/items/${asin}`,
      method: "GET",
      code: "get:/catalog/v0/items/{asin}",
      query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns the parent categories to which an item belongs, based on the specified ASIN or SellerSKU. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags catalog
   * @name ListCatalogCategories
   * @request GET:/catalog/v0/categories
   */
  listCatalogCategories = (
    query: {
      /** A marketplace identifier. Specifies the marketplace for the item. */
      MarketplaceId: string;
      /** The Amazon Standard Identification Number (ASIN) of the item. */
      ASIN?: string;
      /** Used to identify items in the given marketplace. SellerSKU is qualified by the seller's SellerId, which is included with every operation that you submit. */
      SellerSKU?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<ListCatalogCategoriesResponse, ListCatalogCategoriesResponse>({
      path: `/catalog/v0/categories`,
      method: "GET",
      code: "get:/catalog/v0/categories",
      query,
      format: "json",
      ...params,
    });
}
