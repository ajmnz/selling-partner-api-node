import { ErrorList, Item, ItemSearchResults } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "../../../http-client";

export class Catalog<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Search for and return a list of Amazon catalog items and associated information either by identifier or by keywords. **Usage Plans:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to the [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags catalog
   * @name SearchCatalogItems
   * @request GET:/catalog/2022-04-01/items
   */
  searchCatalogItems = (
    query: {
      /**
       * A comma-delimited list of product identifiers to search the Amazon catalog for. **Note:** Cannot be used with `keywords`.
       * @maxItems 20
       * @example "shoes"
       */
      identifiers?: string[];
      /**
       * Type of product identifiers to search the Amazon catalog for. **Note:** Required when `identifiers` are provided.
       * @example "ASIN"
       */
      identifiersType?:
        | "ASIN"
        | "EAN"
        | "GTIN"
        | "ISBN"
        | "JAN"
        | "MINSAN"
        | "SKU"
        | "UPC";
      /**
       * A comma-delimited list of Amazon marketplace identifiers for the request.
       * @maxItems 1
       * @example "ATVPDKIKX0DER"
       */
      marketplaceIds: string[];
      /**
       * A comma-delimited list of data sets to include in the response. Default: `summaries`.
       * @default ["summaries"]
       * @example "summaries"
       */
      includedData?: (
        | "attributes"
        | "dimensions"
        | "identifiers"
        | "images"
        | "productTypes"
        | "relationships"
        | "salesRanks"
        | "summaries"
        | "vendorDetails"
      )[];
      /**
       * Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace.
       * @example "en_US"
       */
      locale?: string;
      /** A selling partner identifier, such as a seller account or vendor code. **Note:** Required when `identifiersType` is `SKU`. */
      sellerId?: string;
      /**
       * A comma-delimited list of words to search the Amazon catalog for. **Note:** Cannot be used with `identifiers`.
       * @maxItems 20
       * @example "shoes"
       */
      keywords?: string[];
      /**
       * A comma-delimited list of brand names to limit the search for `keywords`-based queries. **Note:** Cannot be used with `identifiers`.
       * @example "Beautiful Boats"
       */
      brandNames?: string[];
      /**
       * A comma-delimited list of classification identifiers to limit the search for `keywords`-based queries. **Note:** Cannot be used with `identifiers`.
       * @example "12345678"
       */
      classificationIds?: string[];
      /**
       * Number of results to be returned per page.
       * @max 20
       * @default 10
       * @example 9
       */
      pageSize?: number;
      /**
       * A token to fetch a certain page when there are multiple pages worth of results.
       * @example "sdlkj234lkj234lksjdflkjwdflkjsfdlkj234234234234"
       */
      pageToken?: string;
      /**
       * The language of the keywords provided for `keywords`-based queries. Defaults to the primary locale of the marketplace. **Note:** Cannot be used with `identifiers`.
       * @example "en_US"
       */
      keywordsLocale?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<ItemSearchResults, ErrorList>({
      path: `/catalog/2022-04-01/items`,
      method: "GET",
      code: "get:/catalog/2022-04-01/items",
      query: query,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieves details for an item in the Amazon catalog. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 5 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to the [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags catalog
   * @name GetCatalogItem
   * @request GET:/catalog/2022-04-01/items/{asin}
   */
  getCatalogItem = (
    asin: string,
    query: {
      /**
       * A comma-delimited list of Amazon marketplace identifiers. Data sets in the response contain data only for the specified marketplaces.
       * @example "ATVPDKIKX0DER"
       */
      marketplaceIds: string[];
      /**
       * A comma-delimited list of data sets to include in the response. Default: `summaries`.
       * @default ["summaries"]
       * @example "summaries"
       */
      includedData?: (
        | "attributes"
        | "dimensions"
        | "identifiers"
        | "images"
        | "productTypes"
        | "relationships"
        | "salesRanks"
        | "summaries"
        | "vendorDetails"
      )[];
      /**
       * Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace.
       * @example "en_US"
       */
      locale?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<Item, ErrorList>({
      path: `/catalog/2022-04-01/items/${asin}`,
      method: "GET",
      code: "get:/catalog/2022-04-01/items/{asin}",
      query: query,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
