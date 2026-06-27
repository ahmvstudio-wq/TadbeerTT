import React from 'react';
import IndustryPageTemplate from '../components/IndustryPageTemplate';
import { ConstructionIllustration } from '../components/IndustryIllustrations';

const ConstructionIndustryPage = () => {
  return (
    <IndustryPageTemplate 
      industryName="Construction"
      heroSubtitle="Site Management Portals & Digital Subcontractor Pipelines"
      heroDescription="On a construction project in Oman, the decisions that determine profitability are rarely made at the boardroom level. They are made on site, in procurement, and in the daily coordination between teams. Information that reaches the right people at the right time changes outcomes. Most of it currently does not."
      illustration={ConstructionIllustration}
      metrics={[
        { value: "Reduced", label: "Schedule Latency" },
        { value: "Higher", label: "Subcontractor SLA Compliance" },
        { value: "Lower", label: "Material Waste Reduction" }
      ]}
      challenges={[
        {
          title: "Lagging Site Progress Reports",
          description: "Site updates are recorded on paper or spreadsheets, delaying project schedule evaluations (Primavera/MS Project) by weeks.",
          impact: "Unidentified scheduling delays, cost overruns, and late completion penalties."
        },
        {
          title: "Paper-Heavy Subcontractor Billing",
          description: "Auditing paper logs, material delivery slips, and progress invoices against subcontractor agreements requires heavy manual review.",
          impact: "Frequent payroll/billing errors, slow approval workflows, and supplier disputes."
        },
        {
          title: "Uncoordinated Material Deliveries",
          description: "Material orders are processed independently of live site progress, leading to site clutter or delivery delays.",
          impact: "Tied-up project cash on site storage and unexpected site halts due to missing items."
        }
      ]}
      solutions={[
        {
          title: "Digital Progress Reporting Portals",
          description: "Mobile-optimized site portals that allow engineers to log progress, sync photos, and update central schedule databases instantly.",
          capabilities: [
            "Direct Primavera / MS Project sync API",
            "Offline progress logging capabilities",
            "Automatic project delay alerts"
          ],
          techStack: "Oracle Primavera API, React Mobile Web, SQL database"
        },
        {
          title: "Invoice & Receipt OCR Validators",
          description: "Document extraction pipelines that scan subcontractor delivery slips and invoices, auditing figures against the master contract.",
          capabilities: [
            "Automated PDF data extraction",
            "Contract budget line validation checks",
            "Fulfillment triggers for accounting databases"
          ],
          techStack: "Private OCR pipelines, finance database integrations"
        },
        {
          title: "Material Tracking & Inventory Pipelines",
          description: "Unified platforms linking project milestone schedules directly with supplier delivery databases to manage material arrival.",
          capabilities: [
            "Supplier schedule coordination",
            "Automated inventory shortage alerts",
            "Fulfillment logging for site intake"
          ],
          techStack: "ERP inventory database, procurement APIs"
        }
      ]}
      ctaTitle="Connect Your Construction Operations"
      ctaDescription="Book a strategy session with our industrial systems team to deploy site portals and digitalize subcontractor accounting."
    />
  );
};

export default ConstructionIndustryPage;
