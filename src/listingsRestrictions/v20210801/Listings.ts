import type { ErrorList, RestrictionList } from "./data-contracts";
import type { HttpClient, RequestParams } from "../../http-client";
import { ContentType } from "../../http-client";

export class Listings<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns listing restrictions for an item in the Amazon Catalog. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 10 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags listings
   * @name GetListingsRestrictions
   * @request GET:/listings/2021-08-01/restrictions
   */
  getListingsRestrictions = (
    query: {
      /**
       * The Amazon Standard Identification Number (ASIN) of the item.
       * @example "B0000ASIN1"
       */
      asin: string;
      /**
       * The condition used to filter restrictions.
       * @example "used_very_good"
       */
      conditionType?:
        | "new_new"
        | "new_open_box"
        | "new_oem"
        | "refurbished_refurbished"
        | "used_like_new"
        | "used_very_good"
        | "used_good"
        | "used_acceptable"
        | "collectible_like_new"
        | "collectible_very_good"
        | "collectible_good"
        | "collectible_acceptable"
        | "club_club";
      /** A selling partner identifier, such as a merchant account. */
      sellerId: string;
      /**
       * A comma-delimited list of Amazon marketplace identifiers for the request.
       * @example "ATVPDKIKX0DER"
       */
      marketplaceIds: string[];
      /**
       * A locale for reason text localization. When not provided, the default language code of the first marketplace is used. Examples: "en_US", "fr_CA", "fr_FR". Localized messages default to "en_US" when a localization is not available in the specified locale.
       * @example "en_US"
       */
      reasonLocale?: string;
    },
    params: RequestParams = {}
  ) =>
    this.http.request<RestrictionList, ErrorList>({
      path: `/listings/2021-08-01/restrictions`,
      method: "GET",
      code: "get:/listings/2021-08-01/restrictions",
      query,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
