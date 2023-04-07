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

/** The request schema for the SubmitShipmentConfirmations operation. */
export interface SubmitShipmentConfirmationsRequest {
  shipmentConfirmations?: ShipmentConfirmation[];
}

/** The request schema for the SubmitTransportRequestConfirmations operation. */
export interface SubmitShipments {
  shipments?: Shipment[];
}

/** The response schema for the GetShipmentDetails operation. */
export interface GetShipmentDetailsResponse {
  payload?: ShipmentDetails;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

/** The response schema for the GetShipmentLabels operation. */
export interface GetShipmentLabels {
  payload?: TransportationLabels;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

export interface ShipmentDetails {
  pagination?: Pagination;
  shipments?: Shipment[];
}

export interface TransportationLabels {
  pagination?: Pagination;
  transportLabels?: TransportLabel[];
}

export interface Pagination {
  /** A generated string used to pass information to your next request. If NextToken is returned, pass the value of NextToken to the next request. If NextToken is not returned, there are no more order items to return. */
  nextToken?: string;
}

export interface ShipmentConfirmation {
  /** Unique shipment ID (not used over the last 365 days). */
  shipmentIdentifier: string;
  /** Indicates if this shipment confirmation is the initial confirmation, or intended to replace an already posted shipment confirmation. If replacing an existing shipment confirmation, be sure to provide the identical shipmentIdentifier and sellingParty information as in the previous confirmation. */
  shipmentConfirmationType: "Original" | "Replace";
  /** The type of shipment. */
  shipmentType?: "TruckLoad" | "LessThanTruckLoad" | "SmallParcel";
  /** Shipment hierarchical structure. */
  shipmentStructure?:
    | "PalletizedAssortmentCase"
    | "LooseAssortmentCase"
    | "PalletOfItems"
    | "PalletizedStandardCase"
    | "LooseStandardCase"
    | "MasterPallet"
    | "MasterCase";
  /** Transportation details for this shipment. */
  transportationDetails?: TransportationDetails;
  /** The Amazon Reference Number is a unique identifier generated by Amazon for all Collect/WePay shipments when you submit  a routing request. This field is mandatory for Collect/WePay shipments. */
  amazonReferenceNumber?: string;
  /**
   * Date on which the shipment confirmation was submitted.
   * @format date-time
   */
  shipmentConfirmationDate: string;
  /**
   * The date and time of the departure of the shipment from the vendor's location. Vendors are requested to send ASNs within 30 minutes of departure from their warehouse/distribution center or at least 6 hours prior to the appointment time at the buyer destination warehouse, whichever is sooner. Shipped date mentioned in the shipment confirmation should not be in the future.
   * @format date-time
   */
  shippedDate?: string;
  /**
   * The date and time on which the shipment is estimated to reach buyer's warehouse. It needs to be an estimate based on the average transit time between ship from location and the destination. The exact appointment time will be provided by the buyer and is potentially not known when creating the shipment confirmation.
   * @format date-time
   */
  estimatedDeliveryDate?: string;
  /** Name/Address and tax details of the selling party. */
  sellingParty: PartyIdentification;
  /** Name/Address and tax details of the ship from party. */
  shipFromParty: PartyIdentification;
  /** Name/Address of the destination warehouse where the shipment is being shipped to. */
  shipToParty: PartyIdentification;
  /** Shipment measurement details. */
  shipmentMeasurements?: ShipmentMeasurements;
  /** Provide these fields only if this shipment is a direct import. */
  importDetails?: ImportDetails;
  /** A list of the items in this shipment and their associated details. If any of the item detail fields are common at a carton or a pallet level, provide them at the corresponding carton or pallet level. */
  shippedItems: Item[];
  /** A list of the cartons in this shipment. */
  cartons?: Carton[];
  /** A list of the pallets in this shipment. */
  pallets?: Pallet[];
}

export interface Shipment {
  /** Unique Transportation ID created by Vendor (Should not be used over the last 365 days). */
  vendorShipmentIdentifier: string;
  /** Indicates the type of  transportation request such as (New,Cancel,Confirm and PackageLabelRequest). Each transactiontype has a unique set of operation and there are corresponding details to be populated for each operation. */
  transactionType: "New" | "Cancel";
  /** The buyer Reference Number is a unique identifier generated by buyer for all Collect/WePay shipments when you submit a transportation request. This field is mandatory for Collect/WePay shipments. */
  buyerReferenceNumber?: string;
  /**
   * Date on which the transportation request was submitted.
   * @format date-time
   */
  transactionDate: string;
  /** Indicates the current shipment status. */
  currentShipmentStatus?:
    | "Created"
    | "TransportationRequested"
    | "CarrierAssigned"
    | "Shipped";
  /**
   * Date and time when the last status was updated.
   * @format date-time
   */
  currentshipmentStatusDate?: string;
  /** Indicates the list of current shipment status details and when the last update was received from carrier this is available on shipment Details response. */
  shipmentStatusDetails?: ShipmentStatusDetails[];
  /**
   * The date and time of the shipment request created by vendor.
   * @format date-time
   */
  shipmentCreateDate?: string;
  /**
   * The date and time of the departure of the shipment from the vendor's location. Vendors are requested to send ASNs within 30 minutes of departure from their warehouse/distribution center or at least 6 hours prior to the appointment time at the Buyer destination warehouse, whichever is sooner. Shipped date mentioned in the shipment confirmation should not be in the future.
   * @format date-time
   */
  shipmentConfirmDate?: string;
  /**
   * The date and time of the package label created for the shipment by buyer.
   * @format date-time
   */
  packageLabelCreateDate?: string;
  /** Indicates if this transportation request is WePay/Collect or TheyPay/Prepaid. This is a mandatory information. */
  shipmentFreightTerm?: "Collect" | "Prepaid";
  /** Name/Address and tax details of the selling party. */
  sellingParty: PartyIdentification;
  /** Name/Address and tax details of the ship from party. */
  shipFromParty: PartyIdentification;
  /** Name/Address of the destination warehouse where the shipment is being shipped to. */
  shipToParty: PartyIdentification;
  /** Indicates the shipment measurement details on how many cartons and pallets and the total transportation weight and volume as part of this request. This is a mandatory detail which will help determining the transportation cost, truck allocations and route determination efficiently. */
  shipmentMeasurements?: TransportShipmentMeasurements;
  /** Indicates the earliest pickup date for the transportation from vendor warehouse. This information is mandatory to be filled for requesting transportation from Buyer (WePay/Collect). */
  collectFreightPickupDetails?: CollectFreightPickupDetails;
  /** Indicates the purchase orders involved for the transportation request. This group is an array create 1 for each PO and list their corresponding items. This information is used for deciding the route,truck allocation and storage efficiently. This is a mandatory information for Buyer performing transportation from vendor warehouse (WePay/Collect) */
  purchaseOrders?: PurchaseOrders[];
  /** Provide these fields only if this shipment is a direct import. */
  importDetails?: ImportDetails;
  /** A list of the items in this transportation and their associated inner container details. If any of the item detail fields are common at a carton or a pallet level, provide them at the corresponding carton or pallet level. */
  containers?: Containers[];
  /** Transportation details this a mandatory information which states delivery date, shipping date and carrier details. */
  transportationDetails?: TransportationDetails;
}

export interface TransportLabel {
  /** Date on which label is created. */
  labelCreateDateTime?: string;
  /** Indicates the shipment Information details like warehouse and business reference details like ARN, Selling Party detail and Vendor Warehouse details */
  shipmentInformation?: ShipmentInformation;
  /** Indicates the label data,format and type associated . */
  labelData?: LabelData[];
}

/** Shipment measurement details. */
export interface ShipmentMeasurements {
  /** Gross weight of the shipment. */
  grossShipmentWeight?: Weight;
  /** Gross Volume of the shipment. */
  shipmentVolume?: Volume;
  /** Number of cartons present in the shipment. Provide the cartonCount only for non-palletized shipments. */
  cartonCount?: number;
  /** Number of pallets present in the shipment. Provide the palletCount only for palletized shipments. */
  palletCount?: number;
}

/** Shipment Information details for Label request. */
export interface ShipmentInformation {
  /** Vendor Details requesting for Shipment Label */
  vendorDetails?: VendorDetails;
  /** Buyer Reference number which is a unique number. */
  buyerReferenceNumber?: string;
  /** Name/Address of the destination warehouse where the shipment is being shipped to. */
  shipToParty?: PartyIdentification;
  /** Name/Address of the destination warehouse where the shipment is being shipped to. */
  shipFromParty?: PartyIdentification;
  /** Vendor Warehouse ID from where the shipment is scheduled to be picked up by buyer / Carrier. */
  warehouseId?: string;
  /** Unique Id with  which  the shipment can be tracked for Small Parcels. */
  masterTrackingId?: string;
  /** Number of Labels that are created as part of this shipment. */
  totalLabelCount?: number;
  /** Type of shipment whether it is Small Parcel */
  shipMode?: "SmallParcel" | "LTL";
}

/** Label details as part of the transport label response */
export interface LabelData {
  /** Label list sequence number */
  labelSequenceNumber?: number;
  /** Type of the label format like PDF */
  labelFormat?: "PDF";
  /** Unique identification for  the carrier like UPS,DHL,USPS..etc */
  carrierCode?: string;
  /** Tracking Id for the transportation. */
  trackingId?: string;
  /** Label created as part of the transportation and it is base64 encoded */
  label?: string;
}

/** Vendor Details as part of Label response. */
export interface VendorDetails {
  /** Name/Address and tax details of the selling party. */
  sellingParty?: PartyIdentification;
  /**
   * Unique vendor shipment id which is not used in last 365 days
   * @format date-time
   */
  vendorShipmentId?: string;
}

/** Shipment Status details. */
export interface ShipmentStatusDetails {
  /** Current status of the shipment on whether it is picked up or scheduled. */
  shipmentStatus?: "Created" | "TransportationRequested" | "CarrierAssigned" | "Shipped";
  /**
   * Date and time on last status update received for the shipment
   * @format date-time
   */
  shipmentStatusDate?: string;
}

/** Shipment measurement details. */
export interface TransportShipmentMeasurements {
  /** Total number of cartons present in the shipment. Provide the cartonCount only for non-palletized shipments. */
  totalCartonCount?: number;
  /** Total number of Stackable Pallets present in the shipment. */
  totalPalletStackable?: number;
  /** Total number of Non Stackable Pallets present in the shipment. */
  totalPalletNonStackable?: number;
  /** Total Weight of the shipment. */
  shipmentWeight?: Weight;
  /** Total Volume of the shipment. */
  shipmentVolume?: Volume;
}

/** Transport Request pickup date from Vendor Warehouse by Buyer */
export interface CollectFreightPickupDetails {
  /**
   * Date on which the items can be picked up from vendor warehouse by Buyer used for WePay/Collect vendors.
   * @format date-time
   */
  requestedPickUp?: string;
  /**
   * Date on which the items are scheduled to be picked from vendor warehouse by Buyer used for WePay/Collect vendors.
   * @format date-time
   */
  scheduledPickUp?: string;
  /**
   * Date on which the carrier is being scheduled to pickup items from vendor warehouse by Byer used for WePay/Collect vendors.
   * @format date-time
   */
  carrierAssignmentDate?: string;
}

/** Transport Request pickup date */
export interface PurchaseOrders {
  /** Purchase order numbers involved in this shipment, list all the PO that are involved as part of this shipment. */
  purchaseOrderNumber?: string;
  /**
   * Purchase order numbers involved in this shipment, list all the PO that are involved as part of this shipment.
   * @format date-time
   */
  purchaseOrderDate?: string;
  /** Date range in which shipment is expected for these purchase orders. */
  shipWindow?: string;
  /** A list of the items that are associated to the PO in this transport and their associated details. */
  items?: PurchaseOrderItems[];
}

export interface TransportationDetails {
  /** The type of shipment. */
  shipMode?: "TruckLoad" | "LessThanTruckLoad" | "SmallParcel";
  /** The mode of transportation for this shipment. */
  transportationMode?: "Road" | "Air" | "Ocean";
  /**
   * Date when shipment is performed by the Vendor to Buyer
   * @format date-time
   */
  shippedDate?: string;
  /**
   * Estimated Date on which shipment will be delivered from Vendor to Buyer
   * @format date-time
   */
  estimatedDeliveryDate?: string;
  /**
   * Date on which shipment will be delivered from Vendor to Buyer
   * @format date-time
   */
  shipmentDeliveryDate?: string;
  /** Indicates the carrier details and their contact informations */
  carrierDetails?: CarrierDetails;
  /** Bill Of Lading (BOL) number is the unique number assigned by the vendor. The BOL present in the Shipment Confirmation message ideally matches the paper BOL provided with the shipment, but that is no must. Instead of BOL, an alternative reference number (like Delivery Note Number) for the shipment can also be sent in this field. */
  billOfLadingNumber?: string;
}

export interface CarrierDetails {
  /** The field is used to represent the carrier used for performing the shipment. */
  name?: string;
  /** Code that identifies the carrier for the shipment. The Standard Carrier Alpha Code (SCAC) is a unique two to four letter code used to identify a carrier. Carrier SCAC codes are assigned and maintained by the NMFTA (National Motor Freight Association). */
  code?: string;
  /** The field is used to represent the Carrier contact number. */
  phone?: string;
  /** The field is used to represent the carrier Email id. */
  email?: string;
  /** The field is also known as PRO number is a unique number assigned by the carrier. It is used to identify and track the shipment that goes out for delivery. This field is mandatory for US, CA, MX shipment confirmations. */
  shipmentReferenceNumber?: string;
}

export interface ImportDetails {
  /** This is used for import purchase orders only. If the recipient requests, this field will contain the shipment method of payment. */
  methodOfPayment?:
    | "PaidByBuyer"
    | "CollectOnDelivery"
    | "DefinedByBuyerAndSeller"
    | "FOBPortOfCall"
    | "PrepaidBySeller"
    | "PaidBySeller";
  /** The container's seal number. */
  sealNumber?: string;
  /** The route and stop details for this shipment. */
  route?: Route;
  /**
   * Types and numbers of container(s) for import purchase orders. Can be a comma-separated list if shipment has multiple containers.
   * @maxLength 64
   */
  importContainers?: string;
  /** Billable weight of the direct imports shipment. */
  billableWeight?: Weight;
  /**
   * Date on which the shipment is expected to be shipped. This value should not be in the past and not more than 60 days out in the future.
   * @format date-time
   */
  estimatedShipByDate?: string;
  /** Identification of the instructions on how specified item/carton/pallet should be handled. */
  handlingInstructions?: "Oversized" | "Fragile" | "Food" | "HandleWithCare";
}

export interface Containers {
  /** The type of container. */
  containerType: "carton" | "pallet";
  /** An integer that must be submitted for multi-box shipments only, where one item may come in separate packages. */
  containerSequenceNumber?: string;
  /** A list of carton identifiers. */
  containerIdentifiers: ContainerIdentification[];
  /** The tracking number used for identifying the shipment. */
  trackingNumber?: string;
  /** Physical dimensional measurements of a container. */
  dimensions?: Dimensions;
  /** The weight of the shipment. */
  weight?: Weight;
  /** Number of layers per pallet. */
  tier?: number;
  /** Number of cartons per layer on the pallet. */
  block?: number;
  /** Details of the innerContainersDetails. */
  innerContainersDetails?: InnerContainersDetails;
  /** A list of packed items. */
  packedItems?: PackedItems[];
}

/** Details of the item being shipped. */
export interface PackedItems {
  /** Item sequence number for the item. The first item will be 001, the second 002, and so on. This number is used as a reference to refer to this item from the carton or pallet level. */
  itemSequenceNumber?: string;
  /** Buyer Standard Identification Number (ASIN) of an item. */
  buyerProductIdentifier?: string;
  /** The vendor selected product identification of the item. Should be the same as was sent in the purchase order. */
  vendorProductIdentifier?: string;
  /** Total item quantity shipped in this shipment. */
  packedQuantity?: ItemQuantity;
  /** Item details for be provided for every item in shipment at either the item or carton or pallet level, whichever is appropriate. */
  itemDetails?: PackageItemDetails;
}

/** Details of the item being shipped. */
export interface Item {
  /** Item sequence number for the item. The first item will be 001, the second 002, and so on. This number is used as a reference to refer to this item from the carton or pallet level. */
  itemSequenceNumber: string;
  /** Buyer Standard Identification Number (ASIN) of an item. */
  amazonProductIdentifier?: string;
  /** The vendor selected product identification of the item. Should be the same as was sent in the purchase order. */
  vendorProductIdentifier?: string;
  /** Total item quantity shipped in this shipment. */
  shippedQuantity: ItemQuantity;
  /** Item details for be provided for every item in shipment at either the item or carton or pallet level, whichever is appropriate. */
  itemDetails?: ItemDetails;
}

/** Details of the item being shipped. */
export interface PurchaseOrderItems {
  /** Item sequence number for the item. The first item will be 001, the second 002, and so on. This number is used as a reference to refer to this item from the carton or pallet level. */
  itemSequenceNumber: string;
  /** Amazon Standard Identification Number (ASIN) for a SKU */
  buyerProductIdentifier?: string;
  /** The vendor selected product identification of the item. Should be the same as was sent in the purchase order. */
  vendorProductIdentifier?: string;
  /** Total item quantity shipped in this shipment. */
  shippedQuantity: ItemQuantity;
  /** An amount of money, including units in the form of currency. */
  maximumRetailPrice?: Money;
}

/** Details of the carton/package being shipped. */
export interface Carton {
  /** A list of carton identifiers. */
  cartonIdentifiers?: ContainerIdentification[];
  /** Carton sequence number for the carton. The first carton will be 001, the second 002, and so on. This number is used as a reference to refer to this carton from the pallet level. */
  cartonSequenceNumber: string;
  /** Physical dimensional measurements of a container. */
  dimensions?: Dimensions;
  /** The weight of the shipment. */
  weight?: Weight;
  /** This is required to be provided for every carton in the small parcel shipments. */
  trackingNumber?: string;
  /** A list of container item details. */
  items: ContainerItem[];
}

/** Details of the innerContainersDetails. */
export interface InnerContainersDetails {
  /** Total containers as part of the shipment */
  containerCount?: number;
  /** Container sequence numbers that are involved in this shipment. */
  containerSequenceNumbers?: ContainerSequenceNumbers[];
}

export interface ContainerSequenceNumbers {
  /** A list of containers shipped */
  containerSequenceNumber?: string;
}

/** Details of the Pallet/Tare being shipped. */
export interface Pallet {
  /** A list of pallet identifiers. */
  palletIdentifiers: ContainerIdentification[];
  /** Number of layers per pallet. Only applicable to container type Pallet. */
  tier?: number;
  /** Number of cartons per layer on the pallet. Only applicable to container type Pallet. */
  block?: number;
  /** Physical dimensional measurements of a container. */
  dimensions?: Dimensions;
  /** The weight of the shipment. */
  weight?: Weight;
  /** Carton reference details. */
  cartonReferenceDetails?: CartonReferenceDetails;
  /** A list of container item details. */
  items?: ContainerItem[];
}

/** Item details for be provided for every item in shipment at either the item or carton or pallet level, whichever is appropriate. */
export interface ItemDetails {
  /** The purchase order number for the shipment being confirmed. If the items in this shipment belong to multiple purchase order numbers that are in particular carton or pallet within the shipment, then provide the purchaseOrderNumber at the appropriate carton or pallet level. Formatting Notes: 8-character alpha-numeric code. */
  purchaseOrderNumber?: string;
  /** The batch or lot number associates an item with information the manufacturer considers relevant for traceability of the trade item to which the Element String is applied. The data may refer to the trade item itself or to items contained. This field is mandatory for all perishable items. */
  lotNumber?: string;
  /** Either expiryDate or mfgDate and expiryAfterDuration are mandatory for perishable items. */
  expiry?: Expiry;
  /** Maximum retail price of the item being shipped. */
  maximumRetailPrice?: Money;
  /** Identification of the instructions on how specified item/carton/pallet should be handled. */
  handlingCode?: "Oversized" | "Fragile" | "Food" | "HandleWithCare";
}

/** Item details for be provided for every item in shipment at either the item or carton or pallet level, whichever is appropriate. */
export interface PackageItemDetails {
  /** The purchase order number for the shipment being confirmed. If the items in this shipment belong to multiple purchase order numbers that are in particular carton or pallet within the shipment, then provide the purchaseOrderNumber at the appropriate carton or pallet level. Formatting Notes: 8-character alpha-numeric code. */
  purchaseOrderNumber?: string;
  /** The batch or lot number associates an item with information the manufacturer considers relevant for traceability of the trade item to which the Element String is applied. The data may refer to the trade item itself or to items contained. This field is mandatory for all perishable items. */
  lotNumber?: string;
  /** Either expiryDate or mfgDate and expiryAfterDuration are mandatory for perishable items. */
  expiry?: Expiry;
}

/** Item details for be provided for every item in shipment at either the item or carton or pallet level, whichever is appropriate. */
export interface PurchaseOrderItemDetails {
  /** Maximum retail price of the item being shipped. */
  maximumRetailPrice?: Money;
}

export interface ContainerIdentification {
  /** The container identification type. */
  containerIdentificationType: "SSCC" | "AMZNCC" | "GTIN" | "BPS" | "CID";
  /** Container identification number that adheres to the definition of the container identification type. */
  containerIdentificationNumber: string;
}

/** Carton/Pallet level details for the item. */
export interface ContainerItem {
  /** The reference number for the item. Please provide the itemSequenceNumber from the 'items' segment to refer to that item's details here. */
  itemReference: string;
  /** Total item quantity shipped in this carton/pallet. */
  shippedQuantity: ItemQuantity;
  /** Item details for be provided for every item in shipment at either the item or carton or pallet level, whichever is appropriate. */
  itemDetails?: ItemDetails;
}

export interface CartonReferenceDetails {
  /** Pallet level carton count is mandatory for single item pallet and optional for mixed item pallet. */
  cartonCount?: number;
  /** Array of reference numbers for the carton that are part of this pallet/shipment. Please provide the cartonSequenceNumber from the 'cartons' segment to refer to that carton's details here. */
  cartonReferenceNumbers: string[];
}

export interface PartyIdentification {
  /** Identification of the party by address. */
  address?: Address;
  /** Assigned identification for the party. */
  partyId: string;
  /** Tax registration details of the entity. */
  taxRegistrationDetails?: TaxRegistrationDetails[];
}

/** Tax registration details of the entity. */
export interface TaxRegistrationDetails {
  /** Tax registration type for the entity. */
  taxRegistrationType: "VAT" | "GST";
  /** Tax registration number for the entity. For example, VAT ID. */
  taxRegistrationNumber: string;
}

/** Address of the party. */
export interface Address {
  /** The name of the person, business or institution at that address. */
  name: string;
  /** First line of the address. */
  addressLine1: string;
  /** Additional street address information, if required. */
  addressLine2?: string;
  /** Additional street address information, if required. */
  addressLine3?: string;
  /** The city where the person, business or institution is located. */
  city?: string;
  /** The county where person, business or institution is located. */
  county?: string;
  /** The district where person, business or institution is located. */
  district?: string;
  /** The state or region where person, business or institution is located. */
  stateOrRegion?: string;
  /** The postal code of that address. It contains a series of letters or digits or both, sometimes including spaces or punctuation. */
  postalCode?: string;
  /** The two digit country code in ISO 3166-1 alpha-2 format. */
  countryCode: string;
  /** The phone number of the person, business or institution located at that address. */
  phone?: string;
}

/** This is used only for direct import shipment confirmations. */
export interface Route {
  stops: Stop[];
}

/** Contractual or operational port or point relevant to the movement of the cargo. */
export interface Stop {
  /** Provide the function code. */
  functionCode: "PortOfDischarge" | "FreightPayableAt" | "PortOfLoading";
  /** Location identifier. */
  locationIdentification?: Location;
  /**
   * Date and time of the arrival of the cargo.
   * @format date-time
   */
  arrivalTime?: string;
  /**
   * Date and time of the departure of the cargo.
   * @format date-time
   */
  departureTime?: string;
}

/** Location identifier. */
export interface Location {
  /** Type of location identification. */
  type?: string;
  /** Location code. */
  locationCode?: string;
  /** The two digit country code. In ISO 3166-1 alpha-2 format. */
  countryCode?: string;
}

/** Physical dimensional measurements of a container. */
export interface Dimensions {
  /** The length of the container. */
  length: Decimal;
  /** The width of the container. */
  width: Decimal;
  /** The height of the container. */
  height: Decimal;
  /** The unit of measure for dimensions. */
  unitOfMeasure: "In" | "Ft" | "Meter" | "Yard";
}

/** The volume of the shipment. */
export interface Volume {
  /** The unit of measurement. */
  unitOfMeasure: "CuFt" | "CuIn" | "CuM" | "CuY";
  /** The measurement value. */
  value: Decimal;
}

/** The weight of the shipment. */
export interface Weight {
  /** The unit of measurement. */
  unitOfMeasure: "G" | "Kg" | "Oz" | "Lb";
  /** The measurement value. */
  value: Decimal;
}

/** An amount of money, including units in the form of currency. */
export interface Money {
  /** Three digit currency code in ISO 4217 format. */
  currencyCode: string;
  /** A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\d*))(\.\d+)?([eE][+-]?\d+)?$`. */
  amount: Decimal;
}

/** A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\d*))(\.\d+)?([eE][+-]?\d+)?$`. */
export type Decimal = string;

/** Details of item quantity. */
export interface ItemQuantity {
  /** Amount of units shipped for a specific item at a shipment level. If the item is present only in certain cartons or pallets within the shipment, please provide this at the appropriate carton or pallet level. */
  amount: number;
  /** Unit of measure for the shipped quantity. */
  unitOfMeasure: "Cases" | "Eaches";
  /** The case size, in the event that we ordered using cases. Otherwise, 1. */
  unitSize?: number;
}

/** Details of item quantity. */
export interface PackedQuantity {
  /** Amount of units shipped for a specific item at a shipment level. If the item is present only in certain cartons or pallets within the shipment, please provide this at the appropriate carton or pallet level. */
  amount: number;
  /** Unit of measure for the shipped quantity. */
  unitOfMeasure: "Cases" | "Eaches";
  /** The case size, in the event that we ordered using cases. Otherwise, 1. */
  unitSize?: number;
}

export interface Expiry {
  /**
   * Production, packaging or assembly date determined by the manufacturer. Its meaning is determined based on the trade item context.
   * @format date-time
   */
  manufacturerDate?: string;
  /**
   * The date that determines the limit of consumption or use of a product. Its meaning is determined based on the trade item context.
   * @format date-time
   */
  expiryDate?: string;
  /** Duration after manufacturing date during which the product is valid for consumption. */
  expiryAfterDuration?: Duration;
}

export interface Duration {
  /** Unit for duration. */
  durationUnit: "Days" | "Months";
  /** Value for the duration in terms of the durationUnit. */
  durationValue: number;
}

/** The response schema for the SubmitShipmentConfirmations operation. */
export interface SubmitShipmentConfirmationsResponse {
  /** The response payload for the SubmitShipmentConfirmations operation. */
  payload?: TransactionReference;
  /** A list of error responses returned when a request is unsuccessful. */
  errors?: ErrorList;
}

export interface TransactionReference {
  /** GUID assigned by Buyer to identify this transaction. This value can be used with the Transaction Status API to return the status of this transaction. */
  transactionId?: string;
}

/** A list of error responses returned when a request is unsuccessful. */
export type ErrorList = Error[];

/** Error response returned when the request is unsuccessful. */
export interface Error {
  /** An error code that identifies the type of error that occurred. */
  code: string;
  /** A message that describes the error condition. */
  message: string;
  /** Additional details that can help the caller understand or fix the issue. */
  details?: string;
}