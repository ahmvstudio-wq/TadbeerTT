import React from 'react';
import IndustryPageTemplate from '../components/IndustryPageTemplate';
import { ProfessionalServicesIllustration } from '../components/IndustryIllustrations';

const ProfessionalServicesIndustryPage = () => {
  return (
    <IndustryPageTemplate 
      industryName="Professional Services"
      heroSubtitle="Contract Management & Enterprise Knowledge Retrieval Systems"
      heroDescription="Digitalizing consulting, legal, and financial operations with document indexing, automated contract reviews, and template generators."
      illustration={ProfessionalServicesIllustration}
      metrics={[
        { value: "-80%", label: "Contract Audit Duration" },
        { value: "+30%", label: "Consulting Delivery Capacity" },
        { value: "< 2 mins", label: "To Retrieve Internal Assets" }
      ]}
      challenges={[
        {
          title: "Manual Contract Audits",
          description: "Legal associates and audit consultants spend hundreds of hours manually checking clauses, dates, and compliance terms in contracts.",
          impact: "Extended project turnaround times, higher billing rates for clients, and risk of contract oversights."
        },
        {
          title: "Scattered Knowledge Repositories",
          description: "Historical proposals, client case files, and deliverable templates are scattered across team email threads and folders.",
          impact: "Consulting teams recreate existing work from scratch, reducing operational margins."
        },
        {
          title: "Manual Deliverable Compilations",
          description: "Manually formatting financial audit tables, operational slide decks, and legal reports from scratch for every engagement.",
          impact: "High administrative overhead, delayed client deliverable handovers, and format inconsistencies."
        }
      ]}
      solutions={[
        {
          title: "Automated Contract Redliners",
          description: "Document scanning engines that search agreements to flag liability variations, missing details, and date conflicts.",
          capabilities: [
            "Clause anomaly alerts & checks",
            "Template compliance comparisons",
            "Auto-generated redline report logs"
          ],
          techStack: "Document AI engines, custom vector indexing, secure portals"
        },
        {
          title: "Centralized Knowledge Repositories",
          description: "Secure index search engines cataloging historical proposal decks, audit outlines, and case reports for instant team access.",
          capabilities: [
            "Role-based secure search filters",
            "Mixed Arabic/English document retrieval",
            "Accurate section-level text citations"
          ],
          techStack: "Elasticsearch, Pinecone, secure cloud storage vaults"
        },
        {
          title: "Deliverable Template Automators",
          description: "Data-to-document integration engines that convert audit spreadsheets and notes directly into finished reports.",
          capabilities: [
            "Excel-to-PPTX data mapping flows",
            "Automated presentation compiler scripts",
            "Corporate branding styles enforcement"
          ],
          techStack: "Python-pptx, custom report compiler libraries"
        }
      ]}
      ctaTitle="Boost Your Firm's Delivery Speed"
      ctaDescription="Book a strategy session with our systems team to integrate contract intelligence tools and centralize internal files."
    />
  );
};

export default ProfessionalServicesIndustryPage;
