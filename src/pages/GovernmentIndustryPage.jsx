import React from 'react';
import IndustryPageTemplate from '../components/IndustryPageTemplate';
import { GovernmentIllustration } from '../components/IndustryIllustrations';

const GovernmentIndustryPage = () => {
  return (
    <IndustryPageTemplate 
      industryName="Government"
      heroSubtitle="Public Portal Modernization & Secure Bilingual Document Pipelines"
      heroDescription="Secure, compliant digital transformation systems that process citizen applications, digitalize paper registries, and automate service portals under GCC data guidelines."
      illustration={GovernmentIllustration}
      metrics={[
        { value: "-60%", label: "Service Processing Delay" },
        { value: "100%", label: "Data Sovereignty Compliance" },
        { value: "-50%", label: "Manual Form Ingestion" }
      ]}
      challenges={[
        {
          title: "Portal Case Backlogs",
          description: "Government citizen portals suffer from heavy application processing backlogs due to manual approval workflows.",
          impact: "Long public wait times, low public service satisfaction ratings, and overloaded customer service staff."
        },
        {
          title: "Bilingual Paper Registries",
          description: "Ministries manage millions of historical files, application scans, and mixed Arabic/English documentation manually.",
          impact: "Slow query retrieval times, search bottlenecks, and high manual transcription labor costs."
        },
        {
          title: "Data Sovereignty Compliance",
          description: "Strict local government regulations prevent sensitive citizen documents and personal files from being processed on external servers.",
          impact: "Complete barrier to standard public API services, delaying digitalization plans."
        }
      ]}
      solutions={[
        {
          title: "Modernized Citizen Service Desks",
          description: "Bilingual digital service portals that guide citizens through forms, validate inputs, and schedule appointments.",
          capabilities: [
            "Bilingual form auto-completion checking",
            "Direct civil registry API verification",
            "Multi-channel support ticketing sync"
          ],
          techStack: "React, municipal API portals, secure IAM integrations"
        },
        {
          title: "Cognitive Form Ingestion Engines",
          description: "Document parsing systems that scan and index civil applications, sorting files directly into central databases.",
          capabilities: [
            "Highly accurate Arabic handwritten OCR",
            "Automated signature presence checks",
            "Structured file metadata extraction"
          ],
          techStack: "Private Document AI / custom OCR servers, secure databases"
        },
        {
          title: "On-Premises Sovereign Architectures",
          description: "Tadbeer's system integrations deployed entirely inside local government server frames or sovereign GCC clouds.",
          capabilities: [
            "Local data boundary compliance guarantee",
            "On-site deployment configurations",
            "Strict access audit log integrations"
          ],
          techStack: "Kubernetes, local Ooredoo / Equinix data center frames"
        }
      ]}
      ctaTitle="Modernize Public Service Pipelines Securely"
      ctaDescription="Book an enterprise compliance audit with our public sector team to plan a secure on-premises portal deployment."
    />
  );
};

export default GovernmentIndustryPage;
