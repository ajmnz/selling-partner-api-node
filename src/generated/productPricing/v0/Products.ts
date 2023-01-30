import { GetOffersResponse, GetPricingResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "../../../http-client";

export class Products<SecurityDataType = unknown> {
  private http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Returns pricing information for a seller's offer listings based on seller SKU or ASIN. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags productPricing
   * @name GetPricing
   * @request GET:/products/pricing/v0/price
   */
  getPricing = (
    query: {
      /** A marketplace identifier. Specifies the marketplace for which prices are returned. */
      MarketplaceId: string;
      /**
       * A list of up to twenty Amazon Standard Identification Number (ASIN) values used to identify items in the given marketplace.
       * @maxItems 20
       */
      Asins?: string[];
      /**
       * A list of up to twenty seller SKU values used to identify items in the given marketplace.
       * @maxItems 20
       */
      Skus?: string[];
      /** Indicates whether ASIN values or seller SKU values are used to identify items. If you specify Asin, the information in the response will be dependent on the list of Asins you provide in the Asins parameter. If you specify Sku, the information in the response will be dependent on the list of Skus you provide in the Skus parameter. */
      ItemType: "Asin" | "Sku";
      /** Filters the offer listings based on item condition. Possible values: New, Used, Collectible, Refurbished, Club. */
      ItemCondition?: "New" | "Used" | "Collectible" | "Refurbished" | "Club";
      /** Indicates whether to request pricing information for the seller's B2C or B2B offers. Default is B2C. */
      OfferType?: "B2C" | "B2B";
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetPricingResponse, GetPricingResponse>({
      path: `/products/pricing/v0/price`,
      method: "GET",
      code: "get:/products/pricing/v0/price",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns competitive pricing information for a seller's offer listings based on seller SKU or ASIN. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags productPricing
   * @name GetCompetitivePricing
   * @request GET:/products/pricing/v0/competitivePrice
   */
  getCompetitivePricing = (
    query: {
      /** A marketplace identifier. Specifies the marketplace for which prices are returned. */
      MarketplaceId: string;
      /**
       * A list of up to twenty Amazon Standard Identification Number (ASIN) values used to identify items in the given marketplace.
       * @maxItems 20
       */
      Asins?: string[];
      /**
       * A list of up to twenty seller SKU values used to identify items in the given marketplace.
       * @maxItems 20
       */
      Skus?: string[];
      /** Indicates whether ASIN values or seller SKU values are used to identify items. If you specify Asin, the information in the response will be dependent on the list of Asins you provide in the Asins parameter. If you specify Sku, the information in the response will be dependent on the list of Skus you provide in the Skus parameter. Possible values: Asin, Sku. */
      ItemType: "Asin" | "Sku";
      /** Indicates whether to request pricing information from the point of view of Consumer or Business buyers. Default is Consumer. */
      CustomerType?: "Consumer" | "Business";
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetPricingResponse, GetPricingResponse>({
      path: `/products/pricing/v0/competitivePrice`,
      method: "GET",
      code: "get:/products/pricing/v0/competitivePrice",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns the lowest priced offers for a single SKU listing. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags productPricing
   * @name GetListingOffers
   * @request GET:/products/pricing/v0/listings/{SellerSKU}/offers
   */
  getListingOffers = (
    sellerSku: string,
    query: {
      /** A marketplace identifier. Specifies the marketplace for which prices are returned. */
      MarketplaceId: string;
      /** Filters the offer listings based on item condition. Possible values: New, Used, Collectible, Refurbished, Club. */
      ItemCondition: "New" | "Used" | "Collectible" | "Refurbished" | "Club";
      /** Indicates whether to request Consumer or Business offers. Default is Consumer. */
      CustomerType?: "Consumer" | "Business";
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetOffersResponse, GetOffersResponse>({
      path: `/products/pricing/v0/listings/${sellerSku}/offers`,
      method: "GET",
      code: "get:/products/pricing/v0/listings/{SellerSKU}/offers",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Returns the lowest priced offers for a single item based on ASIN. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 0.5 | 1 | The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   *
   * @tags productPricing
   * @name GetItemOffers
   * @request GET:/products/pricing/v0/items/{Asin}/offers
   */
  getItemOffers = (
    asin: string,
    query: {
      /** A marketplace identifier. Specifies the marketplace for which prices are returned. */
      MarketplaceId: string;
      /** Filters the offer listings to be considered based on item condition. Possible values: New, Used, Collectible, Refurbished, Club. */
      ItemCondition: "New" | "Used" | "Collectible" | "Refurbished" | "Club";
      /** Indicates whether to request Consumer or Business offers. Default is Consumer. */
      CustomerType?: "Consumer" | "Business";
    },
    params: RequestParams = {}
  ) =>
    this.http.request<GetOffersResponse, GetOffersResponse>({
      path: `/products/pricing/v0/items/${asin}/offers`,
      method: "GET",
      code: "get:/products/pricing/v0/items/{Asin}/offers",
      query: query,
      format: "json",
      ...params,
    });
}
