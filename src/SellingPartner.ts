/* eslint-disable import/order */

import { SellingPartnerCore } from "./SellingPartnerCore";
import type { SellingPartnerOptions } from "./types";

// Model imports
import { Aplus as aplusContentV20201101Aplus } from "./aplusContent/v20201101/Aplus";
import { Authorization as authorizationAuthorization } from "./authorization/Authorization";
import { Catalog as catalogItemsV0Catalog } from "./catalogItems/v0/Catalog";
import { Catalog as catalogItemsV20201201Catalog } from "./catalogItems/v20201201/Catalog";
import { Catalog as catalogItemsV20220401Catalog } from "./catalogItems/v20220401/Catalog";
import { DataKiosk as dataKioskV20231115DataKiosk } from "./dataKiosk/v20231115/DataKiosk";
import { EasyShip as easyShipV20220323EasyShip } from "./easyShip/v20220323/EasyShip";
import { Fba as fbaInboundFba } from "./fbaInbound/Fba";
import { Fba as fbaInventoryFba } from "./fbaInventory/Fba";
import { Fba as fbaSmallandLightFba } from "./fbaSmallandLight/Fba";
import { Feeds as feedsV20200904Feeds } from "./feeds/v20200904/Feeds";
import { Feeds as feedsV20210630Feeds } from "./feeds/v20210630/Feeds";
import { Finances as financesV0Finances } from "./finances/v0/Finances";
import { Fba as fulfillmentInboundV0Fba } from "./fulfillmentInbound/v0/Fba";
import { Listings as listingsItemsV20200901Listings } from "./listingsItems/v20200901/Listings";
import { Listings as listingsItemsV20210801Listings } from "./listingsItems/v20210801/Listings";
import { Listings as listingsRestrictionsV20210801Listings } from "./listingsRestrictions/v20210801/Listings";
import { Mfn as merchantFulfillmentV0Mfn } from "./merchantFulfillment/v0/Mfn";
import { Messaging as messagingMessaging } from "./messaging/Messaging";
import { Notifications as notificationsNotifications } from "./notifications/Notifications";
import { Orders as ordersV0Orders } from "./orders/v0/Orders";
import { Products as productFeesV0Products } from "./productFees/v0/Products";
import { Products as productPricingV0Products } from "./productPricing/v0/Products";
import { Batches as productPricingV0Batches } from "./productPricing/v0/Batches";
import { Batches as productPricingV20220501Batches } from "./productPricing/v20220501/Batches";
import { Definitions as definitionsProductTypesV20200901Definitions } from "./definitionsProductTypes/v20200901/Definitions";
import { Replenishment as replenishment20221107Replenishment } from "./replenishment-2022-11-07/Replenishment";
import { Reports as reportsV20200904Reports } from "./reports/v20200904/Reports";
import { Reports as reportsV20210630Reports } from "./reports/v20210630/Reports";
import { Sales as salesSales } from "./sales/Sales";
import { Sellers as sellersSellers } from "./sellers/Sellers";
import { Service as servicesService } from "./services/Service";
import { Fba as shipmentInvoicingV0Fba } from "./shipmentInvoicing/v0/Fba";
import { Shipping as shippingShipping } from "./shipping/Shipping";
import { Solicitations as solicitationsSolicitations } from "./solicitations/Solicitations";
import { SupplySources as supplySourcesV20200701SupplySources } from "./supplySources/v20200701/SupplySources";
import { Tokens as tokensV20210301Tokens } from "./tokens/v20210301/Tokens";
import { Uploads as uploadsV20201101Uploads } from "./uploads/v20201101/Uploads";
import { Vendor as vendorDirectFulfillmentInventoryV1Vendor } from "./vendorDirectFulfillmentInventory/v1/Vendor";
import { Vendor as vendorDirectFulfillmentOrdersV1Vendor } from "./vendorDirectFulfillmentOrders/v1/Vendor";
import { Vendor as vendorDirectFulfillmentOrdersV20211228Vendor } from "./vendorDirectFulfillmentOrders/v20211228/Vendor";
import { Vendor as vendorDirectFulfillmentPaymentsV1Vendor } from "./vendorDirectFulfillmentPayments/v1/Vendor";
import { Vendor as vendorDirectFulfillmentSandboxDataV20211028Vendor } from "./vendorDirectFulfillmentSandboxData/v20211028/Vendor";
import { Vendor as vendorDirectFulfillmentShippingV1Vendor } from "./vendorDirectFulfillmentShipping/v1/Vendor";
import { Vendor as vendorDirectFulfillmentShippingV20211228Vendor } from "./vendorDirectFulfillmentShipping/v20211228/Vendor";
import { Vendor as vendorDirectFulfillmentTransactionsV1Vendor } from "./vendorDirectFulfillmentTransactions/v1/Vendor";
import { Vendor as vendorDirectFulfillmentTransactionsV20211228Vendor } from "./vendorDirectFulfillmentTransactions/v20211228/Vendor";
import { Vendor as vendorInvoicesVendor } from "./vendorInvoices/Vendor";
import { Vendor as vendorOrdersVendor } from "./vendorOrders/Vendor";
import { Vendor as vendorShipmentsVendor } from "./vendorShipments/Vendor";
import { Vendor as vendorTransactionStatusVendor } from "./vendorTransactionStatus/Vendor";
// End model imports

export class SellingPartner extends SellingPartnerCore {
  // Model declarations
  public aplusContent: aplusContentV20201101Aplus;
  public authorization: authorizationAuthorization;
  public catalogItems: {
    v0: catalogItemsV0Catalog;
    v20201201: catalogItemsV20201201Catalog;
    v20220401: catalogItemsV20220401Catalog;
  };
  public dataKiosk: dataKioskV20231115DataKiosk;
  public easyShip: easyShipV20220323EasyShip;
  public fbaInbound: fbaInboundFba;
  public fbaInventory: fbaInventoryFba;
  public fbaSmallandLight: fbaSmallandLightFba;
  public feeds: { v20200904: feedsV20200904Feeds; v20210630: feedsV20210630Feeds };
  public finances: financesV0Finances;
  public fulfillmentInbound: fulfillmentInboundV0Fba;
  public listingsItems: {
    v20200901: listingsItemsV20200901Listings;
    v20210801: listingsItemsV20210801Listings;
  };
  public listingsRestrictions: listingsRestrictionsV20210801Listings;
  public merchantFulfillment: merchantFulfillmentV0Mfn;
  public messaging: messagingMessaging;
  public notifications: notificationsNotifications;
  public orders: ordersV0Orders;
  public productFees: productFeesV0Products;
  public productPricing: {
    v0Products: productPricingV0Products;
    v0Batches: productPricingV0Batches;
    v20220501: productPricingV20220501Batches;
  };
  public definitionsProductTypes: definitionsProductTypesV20200901Definitions;
  public replenishment20221107: replenishment20221107Replenishment;
  public reports: {
    v20200904: reportsV20200904Reports;
    v20210630: reportsV20210630Reports;
  };
  public sales: salesSales;
  public sellers: sellersSellers;
  public services: servicesService;
  public shipmentInvoicing: shipmentInvoicingV0Fba;
  public shipping: shippingShipping;
  public solicitations: solicitationsSolicitations;
  public supplySources: supplySourcesV20200701SupplySources;
  public tokens: tokensV20210301Tokens;
  public uploads: uploadsV20201101Uploads;
  public vendorDirectFulfillmentInventory: vendorDirectFulfillmentInventoryV1Vendor;
  public vendorDirectFulfillmentOrders: {
    v1: vendorDirectFulfillmentOrdersV1Vendor;
    v20211228: vendorDirectFulfillmentOrdersV20211228Vendor;
  };
  public vendorDirectFulfillmentPayments: vendorDirectFulfillmentPaymentsV1Vendor;
  public vendorDirectFulfillmentSandboxData: vendorDirectFulfillmentSandboxDataV20211028Vendor;
  public vendorDirectFulfillmentShipping: {
    v1: vendorDirectFulfillmentShippingV1Vendor;
    v20211228: vendorDirectFulfillmentShippingV20211228Vendor;
  };
  public vendorDirectFulfillmentTransactions: {
    v1: vendorDirectFulfillmentTransactionsV1Vendor;
    v20211228: vendorDirectFulfillmentTransactionsV20211228Vendor;
  };
  public vendorInvoices: vendorInvoicesVendor;
  public vendorOrders: vendorOrdersVendor;
  public vendorShipments: vendorShipmentsVendor;
  public vendorTransactionStatus: vendorTransactionStatusVendor;
  // End model declarations

  constructor(options: SellingPartnerOptions) {
    super(options);

    // Model instances
    this.aplusContent = new aplusContentV20201101Aplus(this.httpClient);
    this.authorization = new authorizationAuthorization(this.httpClient);
    this.catalogItems = {
      v0: new catalogItemsV0Catalog(this.httpClient),
      v20201201: new catalogItemsV20201201Catalog(this.httpClient),
      v20220401: new catalogItemsV20220401Catalog(this.httpClient),
    };
    this.dataKiosk = new dataKioskV20231115DataKiosk(this.httpClient);
    this.easyShip = new easyShipV20220323EasyShip(this.httpClient);
    this.fbaInbound = new fbaInboundFba(this.httpClient);
    this.fbaInventory = new fbaInventoryFba(this.httpClient);
    this.fbaSmallandLight = new fbaSmallandLightFba(this.httpClient);
    this.feeds = {
      v20200904: new feedsV20200904Feeds(this.httpClient),
      v20210630: new feedsV20210630Feeds(this.httpClient),
    };
    this.finances = new financesV0Finances(this.httpClient);
    this.fulfillmentInbound = new fulfillmentInboundV0Fba(this.httpClient);
    this.listingsItems = {
      v20200901: new listingsItemsV20200901Listings(this.httpClient),
      v20210801: new listingsItemsV20210801Listings(this.httpClient),
    };
    this.listingsRestrictions = new listingsRestrictionsV20210801Listings(
      this.httpClient
    );
    this.merchantFulfillment = new merchantFulfillmentV0Mfn(this.httpClient);
    this.messaging = new messagingMessaging(this.httpClient);
    this.notifications = new notificationsNotifications(this.httpClient);
    this.orders = new ordersV0Orders(this.httpClient);
    this.productFees = new productFeesV0Products(this.httpClient);
    this.productPricing = {
      v0Products: new productPricingV0Products(this.httpClient),
      v0Batches: new productPricingV0Batches(this.httpClient),
      v20220501: new productPricingV20220501Batches(this.httpClient),
    };
    this.definitionsProductTypes = new definitionsProductTypesV20200901Definitions(
      this.httpClient
    );
    this.replenishment20221107 = new replenishment20221107Replenishment(this.httpClient);
    this.reports = {
      v20200904: new reportsV20200904Reports(this.httpClient),
      v20210630: new reportsV20210630Reports(this.httpClient),
    };
    this.sales = new salesSales(this.httpClient);
    this.sellers = new sellersSellers(this.httpClient);
    this.services = new servicesService(this.httpClient);
    this.shipmentInvoicing = new shipmentInvoicingV0Fba(this.httpClient);
    this.shipping = new shippingShipping(this.httpClient);
    this.solicitations = new solicitationsSolicitations(this.httpClient);
    this.supplySources = new supplySourcesV20200701SupplySources(this.httpClient);
    this.tokens = new tokensV20210301Tokens(this.httpClient);
    this.uploads = new uploadsV20201101Uploads(this.httpClient);
    this.vendorDirectFulfillmentInventory = new vendorDirectFulfillmentInventoryV1Vendor(
      this.httpClient
    );
    this.vendorDirectFulfillmentOrders = {
      v1: new vendorDirectFulfillmentOrdersV1Vendor(this.httpClient),
      v20211228: new vendorDirectFulfillmentOrdersV20211228Vendor(this.httpClient),
    };
    this.vendorDirectFulfillmentPayments = new vendorDirectFulfillmentPaymentsV1Vendor(
      this.httpClient
    );
    this.vendorDirectFulfillmentSandboxData =
      new vendorDirectFulfillmentSandboxDataV20211028Vendor(this.httpClient);
    this.vendorDirectFulfillmentShipping = {
      v1: new vendorDirectFulfillmentShippingV1Vendor(this.httpClient),
      v20211228: new vendorDirectFulfillmentShippingV20211228Vendor(this.httpClient),
    };
    this.vendorDirectFulfillmentTransactions = {
      v1: new vendorDirectFulfillmentTransactionsV1Vendor(this.httpClient),
      v20211228: new vendorDirectFulfillmentTransactionsV20211228Vendor(this.httpClient),
    };
    this.vendorInvoices = new vendorInvoicesVendor(this.httpClient);
    this.vendorOrders = new vendorOrdersVendor(this.httpClient);
    this.vendorShipments = new vendorShipmentsVendor(this.httpClient);
    this.vendorTransactionStatus = new vendorTransactionStatusVendor(this.httpClient);
    // End model instances
  }
}
