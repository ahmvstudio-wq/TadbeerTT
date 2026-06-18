import React from 'react';
import IndustryPageTemplate from '../components/IndustryPageTemplate';
import { HealthcareIllustration } from '../components/IndustryIllustrations';

const HealthcareIndustryPage = () => {
  return (
    <IndustryPageTemplate 
      industryName="Healthcare"
      heroSubtitle="Clinical Workflow Digitization & Patient Lifecycle Optimization"
      heroDescription="GCC-compliant digital systems designed to integrate healthcare databases, automate administrative records (EHR), optimize clinic scheduling, and streamline patient communications."
      illustration={HealthcareIllustration}
      metrics={[
        { value: "-35%", label: "Process Latency" },
        { value: "92%", label: "Record Archival Accuracy" },
        { value: "22%", label: "Schedule Utilization Increase" }
      ]}
      challenges={[
        {
          title: "Administrative Overhead",
          description: "Staff spend over 40% of shift hours on manual clinical documentation, insurance verification, and billing entries into legacy systems.",
          impact: "Decreased patient face-time, increased registration wait times, and high administrative staff churn."
        },
        {
          title: "Appointment Scheduling Gaps",
          description: "Inbound booking systems and manual reminder cycles fail to prevent patient no-shows, leading to idle clinical hours.",
          impact: "Loss of clinical capacity and reduced patient throughput for high-demand specialists."
        },
        {
          title: "Fragmented Patient Records",
          description: "Historical medical charts and diagnostic reports are locked in paper folders and isolated English/Arabic databases.",
          impact: "Slower clinical assessments, double-entry paperwork, and risk of data inconsistencies."
        }
      ]}
      solutions={[
        {
          title: "Integrated Scheduling Portals",
          description: "Automated booking engines that synchronize clinical calendars, send automated multi-lingual confirmations, and optimize doctor time slots.",
          capabilities: [
            "Real-time calendar synchronization",
            "Multi-channel booking reminders (WhatsApp, SMS)",
            "Automated waitlist notifications"
          ],
          techStack: "Oracle Healthcare / InterSystems API, Custom Web Portals"
        },
        {
          title: "Bilingual EHR Archival Pipeline",
          description: "Secure, central database OCR extraction pipelines that digitalize physical medical records for instant lookups.",
          capabilities: [
            "High-accuracy Arabic/English medical OCR",
            "Structured index searching across databases",
            "Secure local server data archiving"
          ],
          techStack: "Vector Databases, Medical OCR Engine, local storage integrations"
        },
        {
          title: "Omnichannel Patient Ingestion Desks",
          description: "Web and WhatsApp-based intake portals that capture patient symptoms, register civil IDs, and route inquiries to the correct departments.",
          capabilities: [
            "Automated form pre-qualification",
            "Dynamic booking database triggers",
            "Direct triage handoffs to receptionists"
          ],
          techStack: "WhatsApp Business API, HL7/FHIR database pipelines"
        }
      ]}
      ctaTitle="Ready to Streamline Your Clinical Workflows?"
      ctaDescription="Book a strategy session with our healthcare systems team to map out a secure patient ingestion pipeline."
    />
  );
};

export default HealthcareIndustryPage;
