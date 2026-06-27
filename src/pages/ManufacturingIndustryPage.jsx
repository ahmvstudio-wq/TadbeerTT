import React from 'react';
import IndustryPageTemplate from '../components/IndustryPageTemplate';
import { ManufacturingIllustration } from '../components/IndustryIllustrations';

const ManufacturingIndustryPage = () => {
  return (
    <IndustryPageTemplate 
      industryName="Manufacturing"
      heroSubtitle="Industrial IoT Integrations & Factory Floor Digitalization"
      heroDescription="Manufacturing performance in Oman is increasingly determined by what happens between production runs — the quality of planning, the reliability of maintenance, and the discipline of inventory management. None of these improve through effort alone. They improve through structured systems."
      illustration={ManufacturingIllustration}
      metrics={[
        { value: "Fewer", label: "Quality Inspection Delays" },
        { value: "Reliable", label: "Factory Data Uptime" },
        { value: "Reduced", label: "Operational Waste" }
      ]}
      challenges={[
        {
          title: "Siloed Factory Floor Data",
          description: "Production hardware and PLC machine controllers do not feed live metrics to business ERP databases.",
          impact: "Delayed reporting on factory yield, inaccurate costing models, and manual machine-run counts."
        },
        {
          title: "Manual Defect Auditing",
          description: "Relying on manual inspector audits to identify product flaws leads to delayed defect reporting.",
          impact: "Entire product batches completed with defects before errors are noticed, increasing scrap volumes."
        },
        {
          title: "Raw Material Supply Disconnects",
          description: "Production lines run without real-time tracking of raw material stock levels, causing unexpected shortages.",
          impact: "Idle labor cost overheads, halted lines, and delayed client deliveries."
        }
      ]}
      solutions={[
        {
          title: "Factory-to-ERP Telemetry Gateways",
          description: "Industrial IoT systems connecting factory floor sensors directly with SAP/Oracle ERP ledgers.",
          capabilities: [
            "Real-time machine run-time telemetry sync",
            "Automatic fuel & power consumption logging",
            "ERP production order sync triggers"
          ],
          techStack: "IoT Gateway, OPC UA / Modbus protocols, SAP ERP"
        },
        {
          title: "Digital Quality Inspection Portals",
          description: "High-speed camera inspection systems integrated with Quality Management software to flag and log defect anomalies.",
          capabilities: [
            "Automated visual anomaly detection logging",
            "Immediate line-defect alert triggers",
            "Central defect database dashboards"
          ],
          techStack: "Visual Inspection software, Quality Management Systems (QMS)"
        },
        {
          title: "Automated Supply Replenishment Engines",
          description: "Replenishment pipelines that monitor raw material weight/counts on line, automatically triggering supplier purchase orders.",
          capabilities: [
            "Minimum-stock threshold alerts",
            "Automated purchase order creation flows",
            "Supplier delivery time monitoring logs"
          ],
          techStack: "ERP procurement modules, supplier portal integrations"
        }
      ]}
      ctaTitle="Digitalize Your Factory Floor Systems"
      ctaDescription="Book a strategy session with our industrial operations team to link your production machinery with secure ERP databases."
    />
  );
};

export default ManufacturingIndustryPage;
