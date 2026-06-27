import React from 'react';
import IndustryPageTemplate from '../components/IndustryPageTemplate';
import { EcommerceIllustration } from '../components/IndustryIllustrations';

const EcommerceIndustryPage = () => {
  return (
    <IndustryPageTemplate 
      industryName="E-Commerce"
      heroSubtitle="Omnichannel Portal Integrations & Automated Order Workflows"
      heroDescription="Retail growth online is no longer a strategic option in Oman — it is a market expectation. The organisations gaining ground are not the ones with the best storefronts. They are the ones with the most reliable operations behind them."
      illustration={EcommerceIllustration}
      metrics={[
        { value: "Faster", label: "Order Processing Speed" },
        { value: "Lower", label: "Support Case Volume" },
        { value: "Reliable", label: "Inventory Data Sync Rate" }
      ]}
      challenges={[
        {
          title: "Siloed Storefront & ERP Systems",
          description: "Inventory numbers in the warehouse do not sync instantly with the online storefront, causing double-selling of items.",
          impact: "Customer order cancellations, manual catalog corrections, and lost sales on popular SKUs."
        },
        {
          title: "Manual Order Fulfillment",
          description: "Shipping labels, customs documentation, and carrier assignments are processed manually across multiple shipping vendor dashboards.",
          impact: "Slower delivery turnaround times, higher labor overhead, and tracking code delays."
        },
        {
          title: "High Support Case Volume",
          description: "Customer service agents are swamped with repetitive requests regarding order status, returns, and delivery updates.",
          impact: "Escalating agent costs, low satisfaction ratings, and long wait times."
        }
      ]}
      solutions={[
        {
          title: "Storefront-to-ERP Integrations",
          description: "Real-time synchronization pipelines linking Shopify, Magento, or custom web portals with back-office ERP databases.",
          capabilities: [
            "Instant SKU inventory updates",
            "Automated order ledger entries",
            "Multi-warehouse stocks coordination"
          ],
          techStack: "Shopify / Magento API, SAP / Oracle ERP connectors"
        },
        {
          title: "Automated Fulfillment Pipelines",
          description: "Digital systems that automatically generate shipping labels, assign orders to local carriers, and update tracking numbers.",
          capabilities: [
            "Multi-carrier API rate checking & selection",
            "Automated customs paperwork generation",
            "Instant shipping manifest compilation"
          ],
          techStack: "Custom shipping APIs, courier webhooks"
        },
        {
          title: "WhatsApp Order Status Portals",
          description: "Self-service WhatsApp chat interfaces allowing customers to track shipments, initiate returns, and request invoices.",
          capabilities: [
            "Fulfillment data query automation",
            "Return label compilation and delivery",
            "Direct live agent escalations"
          ],
          techStack: "WhatsApp Business API, shipping system connectors"
        }
      ]}
      ctaTitle="Accelerate Your E-Commerce Operations"
      ctaDescription="Book a strategy session with our retail systems team to integrate your inventory databases and automate shipping pipelines."
    />
  );
};

export default EcommerceIndustryPage;
