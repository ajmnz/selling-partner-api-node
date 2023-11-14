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

/** An event related to an Adhoc Disbursement. */
export interface AdhocDisbursementEvent {
  /**
   * Indicates the type of transaction.
   *
   * Example: "Disbursed to Amazon Gift Card balance"
   */
  TransactionType?: string;
  /** The date and time when the financial event was posted. */
  PostedDate?: Date;
  /** The identifier for the transaction. */
  TransactionId?: string;
  /** The amount of the transaction. */
  TransactionAmount?: Currency;
}

/** A list of `AdhocDisbursement` events. */
export type AdhocDisbursementEventList = AdhocDisbursementEvent[];

/** An adjustment to the seller's account. */
export interface AdjustmentEvent {
  /**
   * The type of adjustment.
   *
   * Possible values:
   *
   * * FBAInventoryReimbursement - An FBA inventory reimbursement to a seller's account. This occurs if a seller's inventory is damaged.
   *
   * * ReserveEvent - A reserve event that is generated at the time of a settlement period closing. This occurs when some money from a seller's account is held back.
   *
   * * PostageBilling - The amount paid by a seller for shipping labels.
   *
   * * PostageRefund - The reimbursement of shipping labels purchased for orders that were canceled or refunded.
   *
   * * LostOrDamagedReimbursement - An Amazon Easy Ship reimbursement to a seller's account for a package that we lost or damaged.
   *
   * * CanceledButPickedUpReimbursement - An Amazon Easy Ship reimbursement to a seller's account. This occurs when a package is picked up and the order is subsequently canceled. This value is used only in the India marketplace.
   *
   * * ReimbursementClawback - An Amazon Easy Ship reimbursement clawback from a seller's account. This occurs when a prior reimbursement is reversed. This value is used only in the India marketplace.
   *
   * * SellerRewards - An award credited to a seller's account for their participation in an offer in the Seller Rewards program. Applies only to the India marketplace.
   */
  AdjustmentType?: string;
  /** The date and time when the financial event was posted. */
  PostedDate?: Date;
  /** The amount adjusted as part of this event. */
  AdjustmentAmount?: Currency;
  /** A list of information about adjustments to an account. */
  AdjustmentItemList?: AdjustmentItemList;
}

/** A list of adjustment event information for the seller's account. */
export type AdjustmentEventList = AdjustmentEvent[];

/** An item in an adjustment to the seller's account. */
export interface AdjustmentItem {
  /** Represents the number of units in the seller's inventory when the AdustmentType is FBAInventoryReimbursement. */
  Quantity?: string;
  /** The per unit value of the item. */
  PerUnitAmount?: Currency;
  /** The total value of the item. */
  TotalAmount?: Currency;
  /** The seller SKU of the item. The seller SKU is qualified by the seller's seller ID, which is included with every call to the Selling Partner API. */
  SellerSKU?: string;
  /** A unique identifier assigned to products stored in and fulfilled from a fulfillment center. */
  FnSKU?: string;
  /** A short description of the item. */
  ProductDescription?: string;
  /** The Amazon Standard Identification Number (ASIN) of the item. */
  ASIN?: string;
}

/** A list of information about items in an adjustment to the seller's account. */
export type AdjustmentItemList = AdjustmentItem[];

/** An expense related to an affordability promotion. */
export interface AffordabilityExpenseEvent {
  /** An Amazon-defined identifier for an order. */
  AmazonOrderId?: string;
  /** The date and time when the financial event was created. */
  PostedDate?: Date;
  /** An encrypted, Amazon-defined marketplace identifier. */
  MarketplaceId?: string;
  /**
   * Indicates the type of transaction.
   *
   * Possible values:
   *
   * * Charge - For an affordability promotion expense.
   *
   * * Refund - For an affordability promotion expense reversal.
   */
  TransactionType?: string;
  /** The amount charged for clicks incurred under the Sponsored Products program. */
  BaseExpense?: Currency;
  /** Central Goods and Service Tax, charged and collected by the central government. */
  TaxTypeCGST: Currency;
  /** State Goods and Service Tax, charged and collected by the state government. */
  TaxTypeSGST: Currency;
  /** Integrated Goods and Service Tax, charged and collected by the central government. */
  TaxTypeIGST: Currency;
  /** The total amount charged to the seller. TotalExpense = BaseExpense + TaxTypeIGST + TaxTypeCGST + TaxTypeSGST. */
  TotalExpense?: Currency;
}

/** A list of expense information related to an affordability promotion. */
export type AffordabilityExpenseEventList = AffordabilityExpenseEvent[];

export type BigDecimal = number;

/**
 * A charge on the seller's account.
 *
 * Possible values:
 *
 * * Principal - The selling price of the order item, equal to the selling price of the item multiplied by the quantity ordered.
 *
 * * Tax - The tax collected by the seller on the Principal.
 *
 * * MarketplaceFacilitatorTax-Principal - The tax withheld on the Principal.
 *
 * * MarketplaceFacilitatorTax-Shipping - The tax withheld on the ShippingCharge.
 *
 * * MarketplaceFacilitatorTax-Giftwrap - The tax withheld on the Giftwrap charge.
 *
 * * MarketplaceFacilitatorTax-Other - The tax withheld on other miscellaneous charges.
 *
 * * Discount - The promotional discount for an order item.
 *
 * * TaxDiscount - The tax amount deducted for promotional rebates.
 *
 * * CODItemCharge - The COD charge for an order item.
 *
 * * CODItemTaxCharge - The tax collected by the seller on a CODItemCharge.
 *
 * * CODOrderCharge - The COD charge for an order.
 *
 * * CODOrderTaxCharge - The tax collected by the seller on a CODOrderCharge.
 *
 * * CODShippingCharge - Shipping charges for a COD order.
 *
 * * CODShippingTaxCharge - The tax collected by the seller on a CODShippingCharge.
 *
 * * ShippingCharge - The shipping charge.
 *
 * * ShippingTax - The tax collected by the seller on a ShippingCharge.
 *
 * * Goodwill - The amount given to a buyer as a gesture of goodwill or to compensate for pain and suffering in the buying experience.
 *
 * * Giftwrap - The gift wrap charge.
 *
 * * GiftwrapTax - The tax collected by the seller on a Giftwrap charge.
 *
 * * RestockingFee - The charge applied to the buyer when returning a product in certain categories.
 *
 * * ReturnShipping - The amount given to the buyer to compensate for shipping the item back in the event we are at fault.
 *
 * * PointsFee - The value of Amazon Points deducted from the refund if the buyer does not have enough Amazon Points to cover the deduction.
 *
 * * GenericDeduction - A generic bad debt deduction.
 *
 * * FreeReplacementReturnShipping - The compensation for return shipping when a buyer receives the wrong item, requests a free replacement, and returns the incorrect item.
 *
 * * PaymentMethodFee - The fee collected for certain payment methods in certain marketplaces.
 *
 * * ExportCharge - The export duty that is charged when an item is shipped to an international destination as part of the Amazon Global program.
 *
 * * SAFE-TReimbursement - The SAFE-T claim amount for the item.
 *
 * * TCS-CGST - Tax Collected at Source (TCS) for Central Goods and Services Tax (CGST).
 *
 * * TCS-SGST - Tax Collected at Source for State Goods and Services Tax (SGST).
 *
 * * TCS-IGST - Tax Collected at Source for Integrated Goods and Services Tax (IGST).
 *
 * * TCS-UTGST - Tax Collected at Source for Union Territories Goods and Services Tax (UTGST).
 */
export interface ChargeComponent {
  /** The type of charge. */
  ChargeType?: string;
  /** The amount of the charge. */
  ChargeAmount?: Currency;
}

/** A list of charge information on the seller's account. */
export type ChargeComponentList = ChargeComponent[];

/** A payment instrument. */
export interface ChargeInstrument {
  /** A short description of the charge instrument. */
  Description?: string;
  /** The account tail (trailing digits) of the charge instrument. */
  Tail?: string;
  /** The amount charged to this charge instrument. */
  Amount?: Currency;
}

/** A list of payment instruments. */
export type ChargeInstrumentList = ChargeInstrument[];

/** An event related to charge refund. */
export interface ChargeRefundEvent {
  /** The date and time when the financial event was posted. */
  PostedDate?: Date;
  /**
   * The reason given for a charge refund.
   *
   * Example: `SubscriptionFeeCorrection`
   */
  ReasonCode?: string;
  /**
   * A description of the Reason Code.
   *
   * Example: `SubscriptionFeeCorrection`
   */
  ReasonCodeDescription?: string;
  /** The amount of the charge refund credit. */
  ChargeRefundTransactions?: ChargeRefundTransaction;
}

/** A list of charge refund events. */
export type ChargeRefundEventList = ChargeRefundEvent[];

/** The charge refund transaction. */
export interface ChargeRefundTransaction {
  /** The amount of the charge refund credit. */
  ChargeAmount?: Currency;
  /** The type of charge. */
  ChargeType?: string;
}

/** An event related to coupon payments. */
export interface CouponPaymentEvent {
  /** The date and time when the financial event was posted. */
  PostedDate?: Date;
  /** A coupon identifier. */
  CouponId?: string;
  /** The description provided by the seller when they created the coupon. */
  SellerCouponDescription?: string;
  /**
   * The number of coupon clips or redemptions.
   * @format int64
   */
  ClipOrRedemptionCount?: number;
  /** A payment event identifier. */
  PaymentEventId?: string;
  /** A fee associated with the event. */
  FeeComponent?: FeeComponent;
  /**
   * A charge on the seller's account.
   *
   * Possible values:
   *
   * * Principal - The selling price of the order item, equal to the selling price of the item multiplied by the quantity ordered.
   *
   * * Tax - The tax collected by the seller on the Principal.
   *
   * * MarketplaceFacilitatorTax-Principal - The tax withheld on the Principal.
   *
   * * MarketplaceFacilitatorTax-Shipping - The tax withheld on the ShippingCharge.
   *
   * * MarketplaceFacilitatorTax-Giftwrap - The tax withheld on the Giftwrap charge.
   *
   * * MarketplaceFacilitatorTax-Other - The tax withheld on other miscellaneous charges.
   *
   * * Discount - The promotional discount for an order item.
   *
   * * TaxDiscount - The tax amount deducted for promotional rebates.
   *
   * * CODItemCharge - The COD charge for an order item.
   *
   * * CODItemTaxCharge - The tax collected by the seller on a CODItemCharge.
   *
   * * CODOrderCharge - The COD charge for an order.
   *
   * * CODOrderTaxCharge - The tax collected by the seller on a CODOrderCharge.
   *
   * * CODShippingCharge - Shipping charges for a COD order.
   *
   * * CODShippingTaxCharge - The tax collected by the seller on a CODShippingCharge.
   *
   * * ShippingCharge - The shipping charge.
   *
   * * ShippingTax - The tax collected by the seller on a ShippingCharge.
   *
   * * Goodwill - The amount given to a buyer as a gesture of goodwill or to compensate for pain and suffering in the buying experience.
   *
   * * Giftwrap - The gift wrap charge.
   *
   * * GiftwrapTax - The tax collected by the seller on a Giftwrap charge.
   *
   * * RestockingFee - The charge applied to the buyer when returning a product in certain categories.
   *
   * * ReturnShipping - The amount given to the buyer to compensate for shipping the item back in the event we are at fault.
   *
   * * PointsFee - The value of Amazon Points deducted from the refund if the buyer does not have enough Amazon Points to cover the deduction.
   *
   * * GenericDeduction - A generic bad debt deduction.
   *
   * * FreeReplacementReturnShipping - The compensation for return shipping when a buyer receives the wrong item, requests a free replacement, and returns the incorrect item.
   *
   * * PaymentMethodFee - The fee collected for certain payment methods in certain marketplaces.
   *
   * * ExportCharge - The export duty that is charged when an item is shipped to an international destination as part of the Amazon Global program.
   *
   * * SAFE-TReimbursement - The SAFE-T claim amount for the item.
   *
   * * TCS-CGST - Tax Collected at Source (TCS) for Central Goods and Services Tax (CGST).
   *
   * * TCS-SGST - Tax Collected at Source for State Goods and Services Tax (SGST).
   *
   * * TCS-IGST - Tax Collected at Source for Integrated Goods and Services Tax (IGST).
   *
   * * TCS-UTGST - Tax Collected at Source for Union Territories Goods and Services Tax (UTGST).
   */
  ChargeComponent?: ChargeComponent;
  /** The FeeComponent value plus the ChargeComponent value. */
  TotalAmount?: Currency;
}

/** A list of coupon payment event information. */
export type CouponPaymentEventList = CouponPaymentEvent[];

/** A currency type and amount. */
export interface Currency {
  /** The three-digit currency code in ISO 4217 format. */
  CurrencyCode?: string;
  /** The monetary value. */
  CurrencyAmount?: BigDecimal;
}

/** @format date-time */
export type Date = string;

/** A debt payment or debt adjustment. */
export interface DebtRecoveryEvent {
  /**
   * The debt recovery type.
   *
   * Possible values:
   *
   * * DebtPayment
   *
   * * DebtPaymentFailure
   *
   * *DebtAdjustment
   */
  DebtRecoveryType?: string;
  /** The amount applied for recovery. */
  RecoveryAmount?: Currency;
  /** The amount returned for overpayment. */
  OverPaymentCredit?: Currency;
  /** A list of debt recovery item information. */
  DebtRecoveryItemList?: DebtRecoveryItemList;
  /** A list of payment instruments. */
  ChargeInstrumentList?: ChargeInstrumentList;
}

/** A list of debt recovery event information. */
export type DebtRecoveryEventList = DebtRecoveryEvent[];

/** An item of a debt payment or debt adjustment. */
export interface DebtRecoveryItem {
  /** The amount applied for the recovery item. */
  RecoveryAmount?: Currency;
  /** The original debt amount. */
  OriginalAmount?: Currency;
  /** The beginning date and time of the financial event group that contains the debt. In ISO 8601 date time format. */
  GroupBeginDate?: Date;
  /** The ending date and time of the financial event group that contains the debt. In ISO 8601 date time format. */
  GroupEndDate?: Date;
}

/** A list of debt recovery item information. */
export type DebtRecoveryItemList = DebtRecoveryItem[];

/** A payment made directly to a seller. */
export interface DirectPayment {
  /**
   * The type of payment.
   *
   * Possible values:
   *
   * * StoredValueCardRevenue - The amount that is deducted from the seller's account because the seller received money through a stored value card.
   *
   * * StoredValueCardRefund - The amount that Amazon returns to the seller if the order that is bought using a stored value card is refunded.
   *
   * * PrivateLabelCreditCardRevenue - The amount that is deducted from the seller's account because the seller received money through a private label credit card offered by Amazon.
   *
   * * PrivateLabelCreditCardRefund - The amount that Amazon returns to the seller if the order that is bought using a private label credit card offered by Amazon is refunded.
   *
   * * CollectOnDeliveryRevenue - The COD amount that the seller collected directly from the buyer.
   *
   * * CollectOnDeliveryRefund - The amount that Amazon refunds to the buyer if an order paid for by COD is refunded.
   */
  DirectPaymentType?: string;
  /** The amount of the direct payment. */
  DirectPaymentAmount?: Currency;
}

/** A list of direct payment information. */
export type DirectPaymentList = DirectPayment[];

/** Failed ad hoc disbursement event list. */
export interface FailedAdhocDisbursementEventList {
  /**
   * The type of fund transfer.
   *
   * Example "Refund"
   */
  FundsTransfersType?: string;
  /** The transfer identifier. */
  TransferId?: string;
  /** The disbursement identifier. */
  DisbursementId?: string;
  /**
   * The type of payment for disbursement.
   *
   * Example `CREDIT_CARD`
   */
  PaymentDisbursementType?: string;
  /**
   * The status of the failed `AdhocDisbursement`.
   *
   * Example `HARD_DECLINED`
   */
  Status?: string;
  /** The amount of the Adhoc Disbursement. */
  TransferAmount?: Currency;
  /** The date and time when the financial event was posted. */
  PostedDate?: Date;
}

/** A payment event for Fulfillment by Amazon (FBA) inventory liquidation. This event is used only in the US marketplace. */
export interface FBALiquidationEvent {
  /** The date and time when the financial event was posted. */
  PostedDate?: Date;
  /** The identifier for the original removal order. */
  OriginalRemovalOrderId?: string;
  /** The amount paid by the liquidator for the seller's inventory. The seller receives this amount minus LiquidationFeeAmount. */
  LiquidationProceedsAmount?: Currency;
  /** The fee charged to the seller by Amazon for liquidating the seller's FBA inventory. */
  LiquidationFeeAmount?: Currency;
}

/** A list of FBA inventory liquidation payment events. */
export type FBALiquidationEventList = FBALiquidationEvent[];

/** A fee associated with the event. */
export interface FeeComponent {
  /** The type of fee. For more information about Selling on Amazon fees, see [Selling on Amazon Fee Schedule](https://sellercentral.amazon.com/gp/help/200336920) on Seller Central. For more information about Fulfillment by Amazon fees, see [FBA features, services and fees](https://sellercentral.amazon.com/gp/help/201074400) on Seller Central. */
  FeeType?: string;
  /** The amount of the fee. */
  FeeAmount?: Currency;
}

/** A list of fee component information. */
export type FeeComponentList = FeeComponent[];

/** Information related to a financial event group. */
export interface FinancialEventGroup {
  /** A unique identifier for the financial event group. */
  FinancialEventGroupId?: string;
  /**
   * The processing status of the financial event group indicates whether the balance of the financial event group is settled.
   *
   * Possible values:
   *
   * * Open
   *
   * * Closed
   */
  ProcessingStatus?: string;
  /** The status of the fund transfer. */
  FundTransferStatus?: string;
  /** The total amount in the currency of the marketplace in which the transactions occurred. */
  OriginalTotal?: Currency;
  /** The total amount in the currency of the marketplace in which the funds were disbursed. */
  ConvertedTotal?: Currency;
  /** The date and time when the disbursement or charge was initiated. Only present for closed settlements. In ISO 8601 date time format. */
  FundTransferDate?: Date;
  /** The trace identifier used by sellers to look up transactions externally. */
  TraceId?: string;
  /** The account tail of the payment instrument. */
  AccountTail?: string;
  /** The balance at the beginning of the settlement period. */
  BeginningBalance?: Currency;
  /** The date and time at which the financial event group is opened. In ISO 8601 date time format. */
  FinancialEventGroupStart?: Date;
  /** The date and time at which the financial event group is closed. In ISO 8601 date time format. */
  FinancialEventGroupEnd?: Date;
}

/** A list of financial event group information. */
export type FinancialEventGroupList = FinancialEventGroup[];

/** Contains all information related to a financial event. */
export interface FinancialEvents {
  /** A list of shipment events. */
  ShipmentEventList?: ShipmentEventList;
  /** A list of Shipment Settle events. */
  ShipmentSettleEventList?: ShipmentSettleEventList;
  /** A list of refund events. */
  RefundEventList?: ShipmentEventList;
  /** A list of guarantee claim events. */
  GuaranteeClaimEventList?: ShipmentEventList;
  /** A list of chargeback events. */
  ChargebackEventList?: ShipmentEventList;
  /** A list of events related to the seller's Pay with Amazon account. */
  PayWithAmazonEventList?: PayWithAmazonEventList;
  /** A list of information about solution provider credits. */
  ServiceProviderCreditEventList?: SolutionProviderCreditEventList;
  /** A list of information about Retrocharge or RetrochargeReversal events. */
  RetrochargeEventList?: RetrochargeEventList;
  /** A list of rental transaction event information. */
  RentalTransactionEventList?: RentalTransactionEventList;
  /** A list of sponsored products payment events. */
  ProductAdsPaymentEventList?: ProductAdsPaymentEventList;
  /** A list of information about service fee events. */
  ServiceFeeEventList?: ServiceFeeEventList;
  /** A list of payment events for deal-related fees. */
  SellerDealPaymentEventList?: SellerDealPaymentEventList;
  /** A list of debt recovery event information. */
  DebtRecoveryEventList?: DebtRecoveryEventList;
  /** A list of loan servicing events. */
  LoanServicingEventList?: LoanServicingEventList;
  /** A list of adjustment event information for the seller's account. */
  AdjustmentEventList?: AdjustmentEventList;
  /** A list of SAFETReimbursementEvents. */
  SAFETReimbursementEventList?: SAFETReimbursementEventList;
  /** A list of information about fee events for the Early Reviewer Program. */
  SellerReviewEnrollmentPaymentEventList?: SellerReviewEnrollmentPaymentEventList;
  /** A list of FBA inventory liquidation payment events. */
  FBALiquidationEventList?: FBALiquidationEventList;
  /** A list of coupon payment event information. */
  CouponPaymentEventList?: CouponPaymentEventList;
  /** A list of fee events related to Amazon Imaging services. */
  ImagingServicesFeeEventList?: ImagingServicesFeeEventList;
  /** A list of network commingling transaction events. */
  NetworkComminglingTransactionEventList?: NetworkComminglingTransactionEventList;
  /** A list of expense information related to an affordability promotion. */
  AffordabilityExpenseEventList?: AffordabilityExpenseEventList;
  /** A list of expense information related to an affordability promotion. */
  AffordabilityExpenseReversalEventList?: AffordabilityExpenseEventList;
  /** A list of removal shipment event information. */
  RemovalShipmentEventList?: RemovalShipmentEventList;
  /** A comma-delimited list of Removal shipmentAdjustment details for FBA inventory. */
  RemovalShipmentAdjustmentEventList?: RemovalShipmentAdjustmentEventList;
  /** A list of information about trial shipment financial events. */
  TrialShipmentEventList?: TrialShipmentEventList;
  /** A list of `TDSReimbursementEvent` items. */
  TDSReimbursementEventList?: TDSReimbursementEventList;
  /** A list of `AdhocDisbursement` events. */
  AdhocDisbursementEventList?: AdhocDisbursementEventList;
  /** A list of `TaxWithholding` events. */
  TaxWithholdingEventList?: TaxWithholdingEventList;
  /** A list of charge refund events. */
  ChargeRefundEventList?: ChargeRefundEventList;
  /** Failed ad hoc disbursement event list. */
  FailedAdhocDisbursementEventList?: FailedAdhocDisbursementEventList;
  /** An event related to a value added service charge. */
  ValueAddedServiceChargeEventList?: ValueAddedServiceChargeEventList;
  /** A list of `CapacityReservationBillingEvent` events. */
  CapacityReservationBillingEventList?: CapacityReservationBillingEventList;
}

/** A fee event related to Amazon Imaging services. */
export interface ImagingServicesFeeEvent {
  /** The identifier for the imaging services request. */
  ImagingRequestBillingItemID?: string;
  /** The Amazon Standard Identification Number (ASIN) of the item for which the imaging service was requested. */
  ASIN?: string;
  /** The date and time when the financial event was posted. */
  PostedDate?: Date;
  /** A list of fees associated with the event. */
  FeeList?: FeeComponentList;
}

/** A list of fee events related to Amazon Imaging services. */
export type ImagingServicesFeeEventList = ImagingServicesFeeEvent[];

/** The payload for the listFinancialEventGroups operation. */
export interface ListFinancialEventGroupsPayload {
  /** When present and not empty, pass this string token in the next request to return the next response page. */
  NextToken?: string;
  /** A list of financial event group information. */
  FinancialEventGroupList?: FinancialEventGroupList;
}

/** The response schema for the listFinancialEventGroups operation. */
export interface ListFinancialEventGroupsResponse {
  /** The payload for the listFinancialEventGroups operation. */
  payload?: ListFinancialEventGroupsPayload;
  /** One or more unexpected errors occurred during the listFinancialEventGroups operation. */
  errors?: ErrorList;
}

/** The payload for the listFinancialEvents operation. */
export interface ListFinancialEventsPayload {
  /** When present and not empty, pass this string token in the next request to return the next response page. */
  NextToken?: string;
  /** Contains all information related to a financial event. */
  FinancialEvents?: FinancialEvents;
}

/** The response schema for the listFinancialEvents operation. */
export interface ListFinancialEventsResponse {
  /** The payload for the listFinancialEvents operation. */
  payload?: ListFinancialEventsPayload;
  /** One or more unexpected errors occurred during the listFinancialEvents operation. */
  errors?: ErrorList;
}

/** A loan advance, loan payment, or loan refund. */
export interface LoanServicingEvent {
  /** The amount of the loan. */
  LoanAmount?: Currency;
  /**
   * The type of event.
   *
   * Possible values:
   *
   * * LoanAdvance
   *
   * * LoanPayment
   *
   * * LoanRefund
   */
  SourceBusinessEventType?: string;
}

/** A list of loan servicing events. */
export type LoanServicingEventList = LoanServicingEvent[];

/** A network commingling transaction event. */
export interface NetworkComminglingTransactionEvent {
  /**
   * The type of network item swap.
   *
   * Possible values:
   *
   * * NetCo - A Fulfillment by Amazon inventory pooling transaction. Available only in the India marketplace.
   *
   * * ComminglingVAT - A commingling VAT transaction. Available only in the UK, Spain, France, Germany, and Italy marketplaces.
   */
  TransactionType?: string;
  /** The date and time when the financial event was posted. */
  PostedDate?: Date;
  /** The identifier for the network item swap. */
  NetCoTransactionID?: string;
  /** The reason for the network item swap. */
  SwapReason?: string;
  /** The Amazon Standard Identification Number (ASIN) of the swapped item. */
  ASIN?: string;
  /** The marketplace in which the event took place. */
  MarketplaceId?: string;
  /** The price of the swapped item minus TaxAmount. */
  TaxExclusiveAmount?: Currency;
  /** The tax on the network item swap paid by the seller. */
  TaxAmount?: Currency;
}

/** A list of network commingling transaction events. */
export type NetworkComminglingTransactionEventList = NetworkComminglingTransactionEvent[];

/** An event related to the seller's Pay with Amazon account. */
export interface PayWithAmazonEvent {
  /** An order identifier that is specified by the seller. */
  SellerOrderId?: string;
  /** The date and time when the payment transaction is posted. In ISO 8601 date time format. */
  TransactionPostedDate?: Date;
  /** The type of business object. */
  BusinessObjectType?: string;
  /** The sales channel for the transaction. */
  SalesChannel?: string;
  /** The charge associated with the event. */
  Charge?: ChargeComponent;
  /** A list of fees associated with the event. */
  FeeList?: FeeComponentList;
  /**
   * The type of payment.
   *
   * Possible values:
   *
   * * Sales
   */
  PaymentAmountType?: string;
  /** A short description of this payment event. */
  AmountDescription?: string;
  /**
   * The fulfillment channel.
   *
   * Possible values:
   *
   * * AFN - Amazon Fulfillment Network (Fulfillment by Amazon)
   *
   * * MFN - Merchant Fulfillment Network (self-fulfilled)
   */
  FulfillmentChannel?: string;
  /** The store name where the event occurred. */
  StoreName?: string;
}

/** A list of events related to the seller's Pay with Amazon account. */
export type PayWithAmazonEventList = PayWithAmazonEvent[];

/** A Sponsored Products payment event. */
export interface ProductAdsPaymentEvent {
  /** The date and time when the financial event was posted. */
  postedDate?: Date;
  /**
   * Indicates if the transaction is for a charge or a refund.
   *
   * Possible values:
   *
   * * charge - Charge
   *
   * * refund - Refund
   */
  transactionType?: string;
  /** Identifier for the invoice that the transaction appears in. */
  invoiceId?: string;
  /** Base amount of the transaction, before tax. */
  baseValue?: Currency;
  /** Tax amount of the transaction. */
  taxValue?: Currency;
  /** The total amount of the transaction. Equal to baseValue + taxValue. */
  transactionValue?: Currency;
}

/** A list of sponsored products payment events. */
export type ProductAdsPaymentEventList = ProductAdsPaymentEvent[];

/** A promotion applied to an item. */
export interface Promotion {
  /** The type of promotion. */
  PromotionType?: string;
  /** The seller-specified identifier for the promotion. */
  PromotionId?: string;
  /** The amount of promotional discount applied to the item. */
  PromotionAmount?: Currency;
}

/** A list of promotions. */
export type PromotionList = Promotion[];

/** A removal shipment event for a removal order. */
export interface RemovalShipmentEvent {
  /** The date and time when the financial event was posted. */
  PostedDate?: Date;
  /** The merchant removal orderId. */
  MerchantOrderId?: string;
  /** The identifier for the removal shipment order. */
  OrderId?: string;
  /**
   * The type of removal order.
   *
   * Possible values:
   *
   * * WHOLESALE_LIQUIDATION
   */
  TransactionType?: string;
  /** A list of removal shipment items. */
  RemovalShipmentItemList?: RemovalShipmentItemList;
}

/** A list of removal shipment event information. */
export type RemovalShipmentEventList = RemovalShipmentEvent[];

/** Item-level information for a removal shipment. */
export interface RemovalShipmentItem {
  /** An identifier for an item in a removal shipment. */
  RemovalShipmentItemId?: string;
  /**
   * The tax collection model applied to the item.
   *
   * Possible values:
   *
   * * MarketplaceFacilitator - Tax is withheld and remitted to the taxing authority by Amazon on behalf of the seller.
   *
   * * Standard - Tax is paid to the seller and not remitted to the taxing authority by Amazon.
   */
  TaxCollectionModel?: string;
  /** The Amazon fulfillment network SKU for the item. */
  FulfillmentNetworkSKU?: string;
  /**
   * The quantity of the item.
   * @format int32
   */
  Quantity?: number;
  /** The total amount paid to the seller for the removed item. */
  Revenue?: Currency;
  /** The fee that Amazon charged to the seller for the removal of the item. The amount is a negative number. */
  FeeAmount?: Currency;
  /** Tax collected on the revenue. */
  TaxAmount?: Currency;
  /** The tax withheld and remitted to the taxing authority by Amazon on behalf of the seller. If TaxCollectionModel=MarketplaceFacilitator, then TaxWithheld=TaxAmount (except the TaxWithheld amount is a negative number). Otherwise TaxWithheld=0. */
  TaxWithheld?: Currency;
}

/** A list of information about removal shipment items. */
export type RemovalShipmentItemList = RemovalShipmentItem[];

/** A financial adjustment event for FBA liquidated inventory. A positive value indicates money owed to Amazon by the buyer (for example, when the charge was incorrectly calculated as less than it should be). A negative value indicates a full or partial refund owed to the buyer (for example, when the buyer receives damaged items or fewer items than ordered). */
export interface RemovalShipmentAdjustmentEvent {
  /** The date when the financial event was posted. */
  PostedDate?: Date;
  /** The unique identifier for the adjustment event. */
  AdjustmentEventId?: string;
  /** The merchant removal orderId. */
  MerchantOrderId?: string;
  /** The orderId for shipping inventory. */
  OrderId?: string;
  /**
   * The type of removal order.
   *
   * Possible values:
   *
   * * WHOLESALE_LIQUIDATION.
   */
  TransactionType?: string;
  /** A comma-delimited list of Removal shipmentItemAdjustment details for FBA inventory. */
  RemovalShipmentItemAdjustmentList?: RemovalShipmentItemAdjustment[];
}

/** A comma-delimited list of Removal shipmentAdjustment details for FBA inventory. */
export type RemovalShipmentAdjustmentEventList = RemovalShipmentAdjustmentEvent[];

/** Item-level information for a removal shipment item adjustment. */
export interface RemovalShipmentItemAdjustment {
  /** An identifier for an item in a removal shipment. */
  RemovalShipmentItemId?: string;
  /**
   * The tax collection model applied to the item.
   *
   * Possible values:
   *
   * * MarketplaceFacilitator - Tax is withheld and remitted to the taxing authority by Amazon on behalf of the seller.
   *
   * * Standard - Tax is paid to the seller and not remitted to the taxing authority by Amazon.
   */
  TaxCollectionModel?: string;
  /** The Amazon fulfillment network SKU for the item. */
  FulfillmentNetworkSKU?: string;
  /**
   * Adjusted quantity of removal shipmentItemAdjustment items.
   * @format int32
   */
  AdjustedQuantity?: number;
  /** The total amount adjusted for disputed items. */
  RevenueAdjustment?: Currency;
  /** Adjustment on the Tax collected amount on the adjusted revenue. */
  TaxAmountAdjustment?: Currency;
  /** Adjustment the tax withheld and remitted to the taxing authority by Amazon on behalf of the seller. If TaxCollectionModel=MarketplaceFacilitator, then TaxWithheld=TaxAmount (except the TaxWithheld amount is a negative number). Otherwise TaxWithheld=0. */
  TaxWithheldAdjustment?: Currency;
}

/** An event related to a rental transaction. */
export interface RentalTransactionEvent {
  /** An Amazon-defined identifier for an order. */
  AmazonOrderId?: string;
  /**
   * The type of rental event.
   *
   * Possible values:
   *
   * * RentalCustomerPayment-Buyout - Transaction type that represents when the customer wants to buy out a rented item.
   *
   * * RentalCustomerPayment-Extension - Transaction type that represents when the customer wants to extend the rental period.
   *
   * * RentalCustomerRefund-Buyout - Transaction type that represents when the customer requests a refund for the buyout of the rented item.
   *
   * * RentalCustomerRefund-Extension - Transaction type that represents when the customer requests a refund over the extension on the rented item.
   *
   * * RentalHandlingFee - Transaction type that represents the fee that Amazon charges sellers who rent through Amazon.
   *
   * * RentalChargeFailureReimbursement - Transaction type that represents when Amazon sends money to the seller to compensate for a failed charge.
   *
   * * RentalLostItemReimbursement - Transaction type that represents when Amazon sends money to the seller to compensate for a lost item.
   */
  RentalEventType?: string;
  /**
   * The number of days that the buyer extended an already rented item. This value is only returned for RentalCustomerPayment-Extension and RentalCustomerRefund-Extension events.
   * @format int32
   */
  ExtensionLength?: number;
  /** The date and time when the financial event was posted. */
  PostedDate?: Date;
  /** A list of charges associated with the rental event. */
  RentalChargeList?: ChargeComponentList;
  /** A list of fees associated with the rental event. */
  RentalFeeList?: FeeComponentList;
  /** The name of the marketplace. */
  MarketplaceName?: string;
  /** The amount of money the customer originally paid to rent the item. This value is only returned for RentalChargeFailureReimbursement and RentalLostItemReimbursement events. */
  RentalInitialValue?: Currency;
  /** The amount of money Amazon sends the seller to compensate for a lost item or a failed charge. This value is only returned for RentalChargeFailureReimbursement and RentalLostItemReimbursement events. */
  RentalReimbursement?: Currency;
  /** A list of taxes withheld information for a rental item. */
  RentalTaxWithheldList?: TaxWithheldComponentList;
}

/** A list of rental transaction event information. */
export type RentalTransactionEventList = RentalTransactionEvent[];

/** A retrocharge or retrocharge reversal. */
export interface RetrochargeEvent {
  /**
   * The type of event.
   *
   * Possible values:
   *
   * * Retrocharge
   *
   * * RetrochargeReversal
   */
  RetrochargeEventType?: string;
  /** An Amazon-defined identifier for an order. */
  AmazonOrderId?: string;
  /** The date and time when the financial event was posted. */
  PostedDate?: Date;
  /** The base tax associated with the retrocharge event. */
  BaseTax?: Currency;
  /** The shipping tax associated with the retrocharge event. */
  ShippingTax?: Currency;
  /** The name of the marketplace where the retrocharge event occurred. */
  MarketplaceName?: string;
  /** A list of information about taxes withheld. */
  RetrochargeTaxWithheldList?: TaxWithheldComponentList;
}

/** A list of information about Retrocharge or RetrochargeReversal events. */
export type RetrochargeEventList = RetrochargeEvent[];

/** A SAFE-T claim reimbursement on the seller's account. */
export interface SAFETReimbursementEvent {
  /** The date and time when the financial event was posted. */
  PostedDate?: Date;
  /** A SAFE-T claim identifier. */
  SAFETClaimId?: string;
  /** The amount of the reimbursement. */
  ReimbursedAmount?: Currency;
  /** Indicates why the seller was reimbursed. */
  ReasonCode?: string;
  /** A list of SAFETReimbursementItems. */
  SAFETReimbursementItemList?: SAFETReimbursementItemList;
}

/** A list of SAFETReimbursementEvents. */
export type SAFETReimbursementEventList = SAFETReimbursementEvent[];

/** An item from a SAFE-T claim reimbursement. */
export interface SAFETReimbursementItem {
  /** A list of charges associated with the item. */
  itemChargeList?: ChargeComponentList;
  /** The description of the item as shown on the product detail page on the retail website. */
  productDescription?: string;
  /** The number of units of the item being reimbursed. */
  quantity?: string;
}

/** A list of SAFETReimbursementItems. */
export type SAFETReimbursementItemList = SAFETReimbursementItem[];

/** An event linked to the payment of a fee related to the specified deal. */
export interface SellerDealPaymentEvent {
  /** The date and time when the financial event was posted. */
  postedDate?: Date;
  /** The unique identifier of the deal. */
  dealId?: string;
  /** The internal description of the deal. */
  dealDescription?: string;
  /** The type of event: SellerDealComplete. */
  eventType?: string;
  /** The type of fee: RunLightningDealFee. */
  feeType?: string;
  /** The monetary amount of the fee. */
  feeAmount?: Currency;
  /** The monetary amount of the tax applied. */
  taxAmount?: Currency;
  /** The total monetary amount paid. */
  totalAmount?: Currency;
}

/** A list of payment events for deal-related fees. */
export type SellerDealPaymentEventList = SellerDealPaymentEvent[];

/** A fee payment event for the Early Reviewer Program. */
export interface SellerReviewEnrollmentPaymentEvent {
  /** The date and time when the financial event was posted. */
  PostedDate?: Date;
  /** An enrollment identifier. */
  EnrollmentId?: string;
  /** The Amazon Standard Identification Number (ASIN) of the item that was enrolled in the Early Reviewer Program. */
  ParentASIN?: string;
  /** A fee associated with the event. */
  FeeComponent?: FeeComponent;
  /**
   * A charge on the seller's account.
   *
   * Possible values:
   *
   * * Principal - The selling price of the order item, equal to the selling price of the item multiplied by the quantity ordered.
   *
   * * Tax - The tax collected by the seller on the Principal.
   *
   * * MarketplaceFacilitatorTax-Principal - The tax withheld on the Principal.
   *
   * * MarketplaceFacilitatorTax-Shipping - The tax withheld on the ShippingCharge.
   *
   * * MarketplaceFacilitatorTax-Giftwrap - The tax withheld on the Giftwrap charge.
   *
   * * MarketplaceFacilitatorTax-Other - The tax withheld on other miscellaneous charges.
   *
   * * Discount - The promotional discount for an order item.
   *
   * * TaxDiscount - The tax amount deducted for promotional rebates.
   *
   * * CODItemCharge - The COD charge for an order item.
   *
   * * CODItemTaxCharge - The tax collected by the seller on a CODItemCharge.
   *
   * * CODOrderCharge - The COD charge for an order.
   *
   * * CODOrderTaxCharge - The tax collected by the seller on a CODOrderCharge.
   *
   * * CODShippingCharge - Shipping charges for a COD order.
   *
   * * CODShippingTaxCharge - The tax collected by the seller on a CODShippingCharge.
   *
   * * ShippingCharge - The shipping charge.
   *
   * * ShippingTax - The tax collected by the seller on a ShippingCharge.
   *
   * * Goodwill - The amount given to a buyer as a gesture of goodwill or to compensate for pain and suffering in the buying experience.
   *
   * * Giftwrap - The gift wrap charge.
   *
   * * GiftwrapTax - The tax collected by the seller on a Giftwrap charge.
   *
   * * RestockingFee - The charge applied to the buyer when returning a product in certain categories.
   *
   * * ReturnShipping - The amount given to the buyer to compensate for shipping the item back in the event we are at fault.
   *
   * * PointsFee - The value of Amazon Points deducted from the refund if the buyer does not have enough Amazon Points to cover the deduction.
   *
   * * GenericDeduction - A generic bad debt deduction.
   *
   * * FreeReplacementReturnShipping - The compensation for return shipping when a buyer receives the wrong item, requests a free replacement, and returns the incorrect item.
   *
   * * PaymentMethodFee - The fee collected for certain payment methods in certain marketplaces.
   *
   * * ExportCharge - The export duty that is charged when an item is shipped to an international destination as part of the Amazon Global program.
   *
   * * SAFE-TReimbursement - The SAFE-T claim amount for the item.
   *
   * * TCS-CGST - Tax Collected at Source (TCS) for Central Goods and Services Tax (CGST).
   *
   * * TCS-SGST - Tax Collected at Source for State Goods and Services Tax (SGST).
   *
   * * TCS-IGST - Tax Collected at Source for Integrated Goods and Services Tax (IGST).
   *
   * * TCS-UTGST - Tax Collected at Source for Union Territories Goods and Services Tax (UTGST).
   */
  ChargeComponent?: ChargeComponent;
  /** The FeeComponent value plus the ChargeComponent value. */
  TotalAmount?: Currency;
}

/** A list of information about fee events for the Early Reviewer Program. */
export type SellerReviewEnrollmentPaymentEventList = SellerReviewEnrollmentPaymentEvent[];

/** A service fee on the seller's account. */
export interface ServiceFeeEvent {
  /** An Amazon-defined identifier for an order. */
  AmazonOrderId?: string;
  /** A short description of the service fee reason. */
  FeeReason?: string;
  /** A list of fee components associated with the service fee. */
  FeeList?: FeeComponentList;
  /** The seller SKU of the item. The seller SKU is qualified by the seller's seller ID, which is included with every call to the Selling Partner API. */
  SellerSKU?: string;
  /** A unique identifier assigned by Amazon to products stored in and fulfilled from an Amazon fulfillment center. */
  FnSKU?: string;
  /** A short description of the service fee event. */
  FeeDescription?: string;
  /** The Amazon Standard Identification Number (ASIN) of the item. */
  ASIN?: string;
}

/** A list of information about service fee events. */
export type ServiceFeeEventList = ServiceFeeEvent[];

/** A shipment, refund, guarantee claim, or chargeback. */
export interface ShipmentEvent {
  /** An Amazon-defined identifier for an order. */
  AmazonOrderId?: string;
  /** A seller-defined identifier for an order. */
  SellerOrderId?: string;
  /** The name of the marketplace where the event occurred. */
  MarketplaceName?: string;
  /** A list of order-level charges. These charges are applicable to Multi-Channel Fulfillment COD orders. */
  OrderChargeList?: ChargeComponentList;
  /** A list of order-level charge adjustments. These adjustments are applicable to Multi-Channel Fulfillment COD orders. */
  OrderChargeAdjustmentList?: ChargeComponentList;
  /** A list of shipment-level fees. */
  ShipmentFeeList?: FeeComponentList;
  /** A list of shipment-level fee adjustments. */
  ShipmentFeeAdjustmentList?: FeeComponentList;
  /** A list of order-level fees. These charges are applicable to Multi-Channel Fulfillment orders. */
  OrderFeeList?: FeeComponentList;
  /** A list of order-level fee adjustments. These adjustments are applicable to Multi-Channel Fulfillment orders. */
  OrderFeeAdjustmentList?: FeeComponentList;
  /** A list of transactions where buyers pay Amazon through one of the credit cards offered by Amazon or where buyers pay a seller directly through COD. */
  DirectPaymentList?: DirectPaymentList;
  /** The date and time when the financial event was posted. */
  PostedDate?: Date;
  /** A list of shipment items. */
  ShipmentItemList?: ShipmentItemList;
  /** A list of shipment item adjustments. */
  ShipmentItemAdjustmentList?: ShipmentItemList;
}

/** A list of shipment event information. */
export type ShipmentEventList = ShipmentEvent[];

/** A list of `ShipmentEvent` items. */
export type ShipmentSettleEventList = ShipmentEvent[];

/** An item of a shipment, refund, guarantee claim, or chargeback. */
export interface ShipmentItem {
  /** The seller SKU of the item. The seller SKU is qualified by the seller's seller ID, which is included with every call to the Selling Partner API. */
  SellerSKU?: string;
  /** An Amazon-defined order item identifier. */
  OrderItemId?: string;
  /** An Amazon-defined order adjustment identifier defined for refunds, guarantee claims, and chargeback events. */
  OrderAdjustmentItemId?: string;
  /**
   * The number of items shipped.
   * @format int32
   */
  QuantityShipped?: number;
  /** A list of charges associated with the shipment item. */
  ItemChargeList?: ChargeComponentList;
  /** A list of charge adjustments associated with the shipment item. This value is only returned for refunds, guarantee claims, and chargeback events. */
  ItemChargeAdjustmentList?: ChargeComponentList;
  /** A list of fees associated with the shipment item. */
  ItemFeeList?: FeeComponentList;
  /** A list of fee adjustments associated with the shipment item. This value is only returned for refunds, guarantee claims, and chargeback events. */
  ItemFeeAdjustmentList?: FeeComponentList;
  /** A list of taxes withheld information for a shipment item. */
  ItemTaxWithheldList?: TaxWithheldComponentList;
  /** A list of promotions. */
  PromotionList?: PromotionList;
  /** A list of promotion adjustments associated with the shipment item. This value is only returned for refunds, guarantee claims, and chargeback events. */
  PromotionAdjustmentList?: PromotionList;
  /** The cost of Amazon Points granted for a shipment item. */
  CostOfPointsGranted?: Currency;
  /** The cost of Amazon Points returned for a shipment item. This value is only returned for refunds, guarantee claims, and chargeback events. */
  CostOfPointsReturned?: Currency;
}

/** A list of shipment items. */
export type ShipmentItemList = ShipmentItem[];

/** A credit given to a solution provider. */
export interface SolutionProviderCreditEvent {
  /** The transaction type. */
  ProviderTransactionType?: string;
  /** A seller-defined identifier for an order. */
  SellerOrderId?: string;
  /** The identifier of the marketplace where the order was placed. */
  MarketplaceId?: string;
  /** The two-letter country code of the country associated with the marketplace where the order was placed. */
  MarketplaceCountryCode?: string;
  /** The Amazon-defined identifier of the seller. */
  SellerId?: string;
  /** The store name where the payment event occurred. */
  SellerStoreName?: string;
  /** The Amazon-defined identifier of the solution provider. */
  ProviderId?: string;
  /** The store name where the payment event occurred. */
  ProviderStoreName?: string;
  /** The amount of the credit. */
  TransactionAmount?: Currency;
  /** The date and time that the credit transaction was created, in ISO 8601 date time format. */
  TransactionCreationDate?: Date;
}

/** A list of information about solution provider credits. */
export type SolutionProviderCreditEventList = SolutionProviderCreditEvent[];

/** Period which taxwithholding on seller's account is calculated. */
export interface TaxWithholdingPeriod {
  /** Start of the time range. */
  StartDate?: Date;
  /** End of the time range. */
  EndDate?: Date;
}

/** A TaxWithholding event on seller's account. */
export interface TaxWithholdingEvent {
  /** The date and time when the financial event was posted. */
  PostedDate?: Date;
  /** The amount which tax was withheld against. */
  BaseAmount?: Currency;
  /** The amount of the tax withholding deducted from seller's account. */
  WithheldAmount?: Currency;
  /** Time period for which tax is withheld. */
  TaxWithholdingPeriod?: TaxWithholdingPeriod;
}

/** A list of `TaxWithholding` events. */
export type TaxWithholdingEventList = TaxWithholdingEvent[];

/** Information about the taxes withheld. */
export interface TaxWithheldComponent {
  /**
   * The tax collection model applied to the item.
   *
   * Possible values:
   *
   * * MarketplaceFacilitator - Tax is withheld and remitted to the taxing authority by Amazon on behalf of the seller.
   *
   * * Standard - Tax is paid to the seller and not remitted to the taxing authority by Amazon.
   */
  TaxCollectionModel?: string;
  /** A list of charges that represent the types and amounts of taxes withheld. */
  TaxesWithheld?: ChargeComponentList;
}

/** A list of information about taxes withheld. */
export type TaxWithheldComponentList = TaxWithheldComponent[];

/** An event related to a Tax-Deducted-at-Source (TDS) reimbursement. */
export interface TDSReimbursementEvent {
  /** The date and time when the financial event was posted. */
  PostedDate?: Date;
  /** The Tax-Deducted-at-Source (TDS) identifier. */
  TDSOrderId?: string;
  /** The amount reimbursed. */
  ReimbursedAmount?: Currency;
}

/** A list of `TDSReimbursementEvent` items. */
export type TDSReimbursementEventList = TDSReimbursementEvent[];

/** An event related to a trial shipment. */
export interface TrialShipmentEvent {
  /** An Amazon-defined identifier for an order. */
  AmazonOrderId?: string;
  /** The identifier of the financial event group. */
  FinancialEventGroupId?: string;
  /** The date and time when the financial event was posted. */
  PostedDate?: Date;
  /** The seller SKU of the item. The seller SKU is qualified by the seller's seller ID, which is included with every call to the Selling Partner API. */
  SKU?: string;
  /** A list of fees charged by Amazon for trial shipments. */
  FeeList?: FeeComponentList;
}

/** A list of information about trial shipment financial events. */
export type TrialShipmentEventList = TrialShipmentEvent[];

/** An event related to a value added service charge. */
export interface ValueAddedServiceChargeEventList {
  /**
   * Indicates the type of transaction.
   *
   * Example: 'Other Support Service fees'
   */
  TransactionType?: string;
  /** The date and time when the financial event was posted. */
  PostedDate?: Date;
  /** A short description of the service charge event. */
  Description?: string;
  /** The amount of the service charge event. */
  TransactionAmount?: Currency;
}

/** An event related to a capacity reservation billing charge. */
export interface CapacityReservationBillingEvent {
  /** Indicates the type of transaction. For example, FBA Inventory Fee */
  TransactionType?: string;
  /** The date and time when the financial event was posted. */
  PostedDate?: Date;
  /** A short description of the capacity reservation billing event. */
  Description?: string;
  /** The amount of the capacity reservation billing event. */
  TransactionAmount?: Currency;
}

/** A list of `CapacityReservationBillingEvent` events. */
export type CapacityReservationBillingEventList = CapacityReservationBillingEvent[];

/** A list of error responses returned when a request is unsuccessful. */
export type ErrorList = Error[];

/** Error response returned when the request is unsuccessful. */
export interface Error {
  /** An error code that identifies the type of error that occurred. */
  code: string;
  /** A message that describes the error condition in a human-readable form. */
  message: string;
  /** Additional details that can help the caller understand or fix the issue. */
  details?: string;
}
