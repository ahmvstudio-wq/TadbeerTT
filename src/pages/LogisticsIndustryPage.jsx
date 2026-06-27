import React from 'react';
import IndustryPageTemplate from '../components/IndustryPageTemplate';
import { LogisticsIllustration } from '../components/IndustryIllustrations';

const LogisticsIndustryPage = () => {
  return (
    <IndustryPageTemplate 
      industryName="Logistics & Supply Chain"
      heroSubtitle="Fleet Management Digitization & Automated Supply Chain Pipelines"
      heroDescription="Logistics operations do not fail dramatically. They erode — through small inaccuracies, slow routes, and manual processes that each cost a little, until the cumulative effect shows up in margins and delivery performance. Sustained operational discipline requires systems, not attention."
      illustration={LogisticsIllustration}
      metrics={[
        { value: "Lower", label: "Fuel & Fleet Operations Cost" },
        { value: "Consistent", label: "SLA Tracking Success" },
        { value: "Reduced", label: "Paperwork Processing Time" }
      ]}
      challenges={[
        {
          title: "Manual Dispatch & Route Sheets",
          description: "Dispatchers coordinate schedules on spreadsheets, failing to optimize driver hours, vehicle capacity, and real-time transit paths.",
          impact: "Higher fuel overheads, delayed delivery times, and increased driver overtime billing."
        },
        {
          title: "Paper-Heavy Customs Clearing",
          description: "Bills of lading, invoices, and customs manifests are processed manually, requiring physical checks and data re-entry.",
          impact: "Severe port clearance bottlenecks, warehouse intake delays, and data-entry compliance risks."
        },
        {
          title: "Siloed Telematics Data",
          description: "GPS tracking, vehicle maintenance logs, and scheduling systems run on disconnected legacy software packages.",
          impact: "Slow breakdown response times, missed maintenance schedules, and lack of unified operations visibility."
        }
      ]}
      solutions={[
        {
          title: "Centralized Dispatch & Route Planners",
          description: "Digital route scheduling dashboards that map driver schedules, cargo weights, and paths automatically.",
          capabilities: [
            "Real-time route scheduling & driver updates",
            "Multi-stop optimization mapping",
            "Fulfillment dashboards for live tracking"
          ],
          techStack: "Google Maps API, custom route solvers, GPS integrations"
        },
        {
          title: "Document OCR Manifest Parsers",
          description: "Secure data extraction systems that read scanned invoices and shipping receipts, cataloging them directly into your WMS.",
          capabilities: [
            "Bilingual table extraction from PDFs",
            "Automated HS customs code categorization",
            "Immediate ERP ledger entries"
          ],
          techStack: "Google Document AI / custom OCR pipelines, SAP WMS"
        },
        {
          title: "Unified Fleet Telematics Hubs",
          description: "Integrating vehicle telemetry data with maintenance databases to centralize scheduling, diagnostic alerts, and asset health profiles.",
          capabilities: [
            "Automated vehicle service order triggers",
            "GPS location synchronization",
            "Preventative maintenance scheduler alerts"
          ],
          techStack: "GPS API integrations, InfluxDB telemetry streams, Oracle ERP"
        }
      ]}
      ctaTitle="Optimize Your Shipping & Supply Chains"
      ctaDescription="Book a strategy session with our logistics systems team to integrate your warehouse and fleet telemetry databases."
    />
  );
};

export default LogisticsIndustryPage;
