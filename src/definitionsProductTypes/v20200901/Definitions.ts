import type { ErrorList, ProductTypeDefinition, ProductTypeList } from "./data-contracts";
import type { HttpClient, RequestParams } from "../../http-client";
import { ContentType } from "../../http-client";

export class Definitions<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Search for and return a list of Amazon product types that have definitions available. **Usage Plans:** | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable | The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags definitions
   * @name SearchDefinitionsProductTypes
   * @request GET:/definitions/2020-09-01/productTypes
   */
  searchDefinitionsProductTypes = (
    query: {
      /**
       * A comma-delimited list of keywords to search product types by.
       * @example "LUGGAGE"
       */
      keywords?: string[];
      /**
       * A comma-delimited list of Amazon marketplace identifiers for the request.
       * @example "ATVPDKIKX0DER"
       */
      marketplaceIds: string[];
    },
    params: RequestParams = {}
  ) =>
    this.http.request<ProductTypeList, ErrorList>({
      path: `/definitions/2020-09-01/productTypes`,
      method: "GET",
      code: "get:/definitions/2020-09-01/productTypes",
      query,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Retrieve an Amazon product type definition. **Usage Plans:** | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable | The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags definitions
   * @name GetDefinitionsProductType
   * @request GET:/definitions/2020-09-01/productTypes/{productType}
   */
  getDefinitionsProductType = (
    productType: string,
    query: {
      /** A selling partner identifier. When provided, seller-specific requirements and values are populated within the product type definition schema, such as brand names associated with the selling partner. */
      sellerId?: string;
      /**
       * A comma-delimited list of Amazon marketplace identifiers for the request.
       * Note: This parameter is limited to one marketplaceId at this time.
       * @example "ATVPDKIKX0DER"
       */
      marketplaceIds: string[];
      /**
       * The version of the Amazon product type to retrieve. Defaults to "LATEST",. Prerelease versions of product type definitions may be retrieved with "RELEASE_CANDIDATE". If no prerelease version is currently available, the "LATEST" live version will be provided.
       * @default "LATEST"
       * @example "LATEST"
       */
      productTypeVersion?: string;
      /**
       * The name of the requirements set to retrieve requirements for.
       * @default "LISTING"
       * @example "LISTING"
       */
      requirements?: "LISTING" | "LISTING_PRODUCT_ONLY" | "LISTING_OFFER_ONLY";
      /**
       * Identifies if the required attributes for a requirements set are enforced by the product type definition schema. Non-enforced requirements enable structural validation of individual attributes without all the required attributes being present (such as for partial updates).
       * @default "ENFORCED"
       * @example "ENFORCED"
       */
      requirementsEnforced?: "ENFORCED" | "NOT_ENFORCED";
      /**
       * Locale for retrieving display labels and other presentation details. Defaults to the default language of the first marketplace in the request.
       * @default "DEFAULT"
       * @example "DEFAULT"
       */
      locale?:
        | "DEFAULT"
        | "ar"
        | "ar_AE"
        | "de"
        | "de_DE"
        | "en"
        | "en_AE"
        | "en_AU"
        | "en_CA"
        | "en_GB"
        | "en_IN"
        | "en_SG"
        | "en_US"
        | "es"
        | "es_ES"
        | "es_MX"
        | "es_US"
        | "fr"
        | "fr_CA"
        | "fr_FR"
        | "it"
        | "it_IT"
        | "ja"
        | "ja_JP"
        | "nl"
        | "nl_NL"
        | "pl"
        | "pl_PL"
        | "pt"
        | "pt_BR"
        | "pt_PT"
        | "sv"
        | "sv_SE"
        | "tr"
        | "tr_TR"
        | "zh"
        | "zh_CN"
        | "zh_TW";
    },
    params: RequestParams = {}
  ) =>
    this.http.request<ProductTypeDefinition, ErrorList>({
      path: `/definitions/2020-09-01/productTypes/${productType}`,
      method: "GET",
      code: "get:/definitions/2020-09-01/productTypes/{productType}",
      query,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
