/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Describes a granularity at which inventory data can be aggregated. For example, if you use Marketplace granularity, the fulfillable quantity will reflect inventory that could be fulfilled in the given marketplace. */
export interface Granularity {
  /** The granularity type for the inventory aggregation level. */
  granularityType?: string;
  /** The granularity ID for the specified granularity type. When granularityType is Marketplace, specify the marketplaceId. */
  granularityId?: string;
}

/** The quantity of reserved inventory. */
export interface ReservedQuantity {
  /** The total number of units in Amazon's fulfillment network that are currently being picked, packed, and shipped; or are sidelined for measurement, sampling, or other internal processes. */
  totalReservedQuantity?: number;
  /** The number of units reserved for customer orders. */
  pendingCustomerOrderQuantity?: number;
  /** The number of units being transferred from one fulfillment center to another. */
  pendingTransshipmentQuantity?: number;
  /** The number of units that have been sidelined at the fulfillment center for additional processing. */
  fcProcessingQuantity?: number;
}

/** The misplaced or warehouse damaged inventory that is actively being confirmed at our fulfillment centers. */
export interface ResearchingQuantityEntry {
  /** The duration of the research. */
  name:
    | "researchingQuantityInShortTerm"
    | "researchingQuantityInMidTerm"
    | "researchingQuantityInLongTerm";
  /** The number of units. */
  quantity: number;
}

/** The number of misplaced or warehouse damaged units that are actively being confirmed at our fulfillment centers. */
export interface ResearchingQuantity {
  /** The total number of units currently being researched in Amazon's fulfillment network. */
  totalResearchingQuantity?: number;
  /** A list of quantity details for items currently being researched. */
  researchingQuantityBreakdown?: ResearchingQuantityEntry[];
}

/** The quantity of unfulfillable inventory. */
export interface UnfulfillableQuantity {
  /** The total number of units in Amazon's fulfillment network in unsellable condition. */
  totalUnfulfillableQuantity?: number;
  /** The number of units in customer damaged disposition. */
  customerDamagedQuantity?: number;
  /** The number of units in warehouse damaged disposition. */
  warehouseDamagedQuantity?: number;
  /** The number of units in distributor damaged disposition. */
  distributorDamagedQuantity?: number;
  /** The number of units in carrier damaged disposition. */
  carrierDamagedQuantity?: number;
  /** The number of units in defective disposition. */
  defectiveQuantity?: number;
  /** The number of units in expired disposition. */
  expiredQuantity?: number;
}

/** Summarized inventory details. This object will not appear if the details parameter in the request is false. */
export interface InventoryDetails {
  /** The item quantity that can be picked, packed, and shipped. */
  fulfillableQuantity?: number;
  /** The number of units in an inbound shipment for which you have notified Amazon. */
  inboundWorkingQuantity?: number;
  /** The number of units in an inbound shipment that you have notified Amazon about and have provided a tracking number. */
  inboundShippedQuantity?: number;
  /** The number of units that have not yet been received at an Amazon fulfillment center for processing, but are part of an inbound shipment with some units that have already been received and processed. */
  inboundReceivingQuantity?: number;
  /** The quantity of reserved inventory. */
  reservedQuantity?: ReservedQuantity;
  /** The number of misplaced or warehouse damaged units that are actively being confirmed at our fulfillment centers. */
  researchingQuantity?: ResearchingQuantity;
  /** The quantity of unfulfillable inventory. */
  unfulfillableQuantity?: UnfulfillableQuantity;
}

/** Inventory summary for a specific item. */
export interface InventorySummary {
  /** The Amazon Standard Identification Number (ASIN) of an item. */
  asin?: string;
  /** Amazon's fulfillment network SKU identifier. */
  fnSku?: string;
  /** The seller SKU of the item. */
  sellerSku?: string;
  /** The condition of the item as described by the seller (for example, New Item). */
  condition?: string;
  /** Summarized inventory details. This object will not appear if the details parameter in the request is false. */
  inventoryDetails?: InventoryDetails;
  /**
   * The date and time that any quantity was last updated.
   * @format date-time
   */
  lastUpdatedTime?: string;
  /** The localized language product title of the item within the specific marketplace. */
  productName?: string;
  /** The total number of units in an inbound shipment or in Amazon fulfillment centers. */
  totalQuantity?: number;
}

/** A list of inventory summaries. */
export type InventorySummaries = InventorySummary[];

/** The process of returning the results to a request in batches of a defined size called pages. This is done to exercise some control over result size and overall throughput. It's a form of traffic management. */
export interface Pagination {
  /** A generated string used to retrieve the next page of the result. If nextToken is returned, pass the value of nextToken to the next request. If nextToken is not returned, there are no more items to return. */
  nextToken?: string;
}

/** The payload schema for the getInventorySummaries operation. */
export interface GetInventorySummariesResult {
  /** Describes a granularity at which inventory data can be aggregated. For example, if you use Marketplace granularity, the fulfillable quantity will reflect inventory that could be fulfilled in the given marketplace. */
  granularity: Granularity;
  /** A list of inventory summaries. */
  inventorySummaries: InventorySummaries;
}

/** The Response schema. */
export interface GetInventorySummariesResponse {
  /** The payload for the getInventorySummaries operation. */
  payload?: GetInventorySummariesResult;
  /** The process of returning the results to a request in batches of a defined size called pages. This is done to exercise some control over result size and overall throughput. It's a form of traffic management. */
  pagination?: Pagination;
  /** One or more unexpected errors occurred during the getInventorySummaries operation. */
  errors?: ErrorList;
}

/** An error response returned when the request is unsuccessful. */
export interface Error {
  /** An error code that identifies the type of error that occurred. */
  code: string;
  /** A message that describes the error condition in a human-readable form. */
  message?: string;
  /** Additional information that can help the caller understand or fix the issue. */
  details?: string;
}

/** A list of error responses returned when a request is unsuccessful. */
export type ErrorList = Error[];
