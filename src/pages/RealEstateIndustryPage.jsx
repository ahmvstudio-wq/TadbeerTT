import React from 'react';
import IndustryPageTemplate from '../components/IndustryPageTemplate';
import { RealEstateIllustration } from '../components/IndustryIllustrations';

const RealEstateIndustryPage = () => {
  return (
    <IndustryPageTemplate 
      industryName="Real Estate"
      heroSubtitle="CRM Customization & Omnichannel Lead Management Systems"
      heroDescription="Property transactions in Oman take longer than they should — not because buyers are uncommitted, but because the operational infrastructure between enquiry and agreement is too slow, too manual, and too fragmented. The work here is to close that gap."
      illustration={RealEstateIllustration}
      metrics={[
        { value: "Faster", label: "Inquiry Response Speed" },
        { value: "Full", label: "CRM Lead Capture" },
        { value: "Reduced", label: "Lead Qualification Time" }
      ]}
      challenges={[
        {
          title: "Disconnected Lead Channels",
          description: "Inquiries from listing portals (Property Finder, Bayut, Dubizzle) are manually copied, causing delays and lead leakage.",
          impact: "Delayed follow-ups, lost deal opportunities, and poor performance tracking across sources."
        },
        {
          title: "Manual Qualification Bottlenecks",
          description: "Agents spend hours calling raw numbers to qualify basic parameters like budget, location, and finance status.",
          impact: "Slower qualification times, high CRM clutter, and reduced time spent on high-intent buyers."
        },
        {
          title: "Siloed Property Inventories",
          description: "Floorplans, payment schedules, and unit availability are stored in separate files, causing slow response times during buyer calls.",
          impact: "Inaccurate availability updates, transaction delays, and frustrated international investors."
        }
      ]}
      solutions={[
        {
          title: "Integrated Lead Capture Portals",
          description: "Centralized lead ingestion pipelines connecting WhatsApp, social ads, and property portals directly to your CRM.",
          capabilities: [
            "Automatic contact mapping in Salesforce/HubSpot",
            "Multi-channel automated greeting campaigns",
            "Instant notifications to active brokers"
          ],
          techStack: "WhatsApp API, Hubspot / Salesforce API, portal webhooks"
        },
        {
          title: "Centralized Developer Off-Plan Portals",
          description: "Digital property portals providing buyers with instant, secure access to masterplans, availability tables, and payment calculators.",
          capabilities: [
            "Interactive payment schedule generator",
            "Real-time unit availability sync",
            "Direct digital brochure downloads"
          ],
          techStack: "React, Node.js, property inventory database"
        },
        {
          title: "Automated Property Matchers",
          description: "Custom matching systems that instantly map qualified client requirements against active CRM inventories.",
          capabilities: [
            "Advanced multi-criteria database filters",
            "Auto-generated property catalogs",
            "Fulfillment logging for agent follow-ups"
          ],
          techStack: "Salesforce CRM customization, custom search engines"
        }
      ]}
      ctaTitle="Optimize Your Real Estate Sales Engine"
      ctaDescription="Book a strategy session with our real estate systems team to integrate your inventory databases and CRM pipelines."
    />
  );
};

export default RealEstateIndustryPage;
