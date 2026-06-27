import React from 'react';

const partners = [
  { name: 'ERPNext', domain: 'erpnext.com', category: 'ERP' },
  { name: 'SAP', domain: 'sap.com', category: 'ERP' },
  { name: 'Odoo', domain: 'odoo.com', category: 'ERP' },
  { name: 'Microsoft Dynamics 365', domain: 'microsoft.com', category: 'ERP' },
  { name: 'Oracle NetSuite', domain: 'netsuite.com', category: 'ERP' },
  { name: 'OpenAI', domain: 'openai.com', category: 'AI' },
  { name: 'Google Gemini', domain: 'google.com', category: 'AI' },
  { name: 'DeepSeek', domain: 'deepseek.com', category: 'AI' },
  { name: 'Anthropic Claude', domain: 'anthropic.com', category: 'AI' },
  { name: 'Azure AI', domain: 'azure.microsoft.com', category: 'AI' },
  { name: 'Microsoft Azure', domain: 'azure.microsoft.com', category: 'Cloud' },
  { name: 'Google Cloud', domain: 'cloud.google.com', category: 'Cloud' },
  { name: 'AWS', domain: 'aws.amazon.com', category: 'Cloud' },
  { name: 'ASP.NET', domain: 'dotnet.microsoft.com', category: 'Dev' },
  { name: 'GitHub', domain: 'github.com', category: 'Dev' },
  { name: 'Meta Business', domain: 'meta.com', category: 'Marketing' },
  { name: 'Google Ads', domain: 'ads.google.com', category: 'Marketing' },
  { name: 'Google Analytics', domain: 'analytics.google.com', category: 'Marketing' },
  { name: 'LinkedIn', domain: 'linkedin.com', category: 'Marketing' },
  { name: 'TikTok Business', domain: 'tiktok.com', category: 'Marketing' },
  { name: 'Mailchimp', domain: 'mailchimp.com', category: 'Marketing' },
  { name: 'Tally', domain: 'tallysolutions.com', category: 'Finance' },
  { name: 'QuickBooks', domain: 'quickbooks.intuit.com', category: 'Finance' },
  { name: 'Zoho Books', domain: 'zoho.com', category: 'Finance' },
  { name: 'Xero', domain: 'xero.com', category: 'Finance' },
  { name: 'Zoho People', domain: 'zoho.com', category: 'HR' },
  { name: 'BambooHR', domain: 'bamboohr.com', category: 'HR' },
  { name: 'SAP SuccessFactors', domain: 'sap.com', category: 'HR' },
  { name: 'Workday', domain: 'workday.com', category: 'HR' },
  { name: 'Salesforce', domain: 'salesforce.com', category: 'CRM' },
  { name: 'HubSpot', domain: 'hubspot.com', category: 'CRM' },
  { name: 'Zoho CRM', domain: 'zoho.com', category: 'CRM' },
  { name: 'ClickUp', domain: 'clickup.com', category: 'PM' },
  { name: 'Asana', domain: 'asana.com', category: 'PM' },
  { name: 'Monday.com', domain: 'monday.com', category: 'PM' },
  { name: 'Trello', domain: 'trello.com', category: 'PM' },
  { name: 'Jira', domain: 'atlassian.com', category: 'PM' },
  { name: 'WhatsApp Business', domain: 'business.whatsapp.com', category: 'Comms' },
  { name: 'Slack', domain: 'slack.com', category: 'Comms' },
  { name: 'Microsoft Teams', domain: 'microsoft.com', category: 'Comms' },
  { name: 'Zoom', domain: 'zoom.us', category: 'Comms' },
  { name: 'Flutter', domain: 'flutter.dev', category: 'Mobile' },
  { name: 'React Native', domain: 'reactnative.dev', category: 'Mobile' },
  { name: 'Android Studio', domain: 'developer.android.com', category: 'Mobile' },
  { name: 'Apple Developer', domain: 'developer.apple.com', category: 'Mobile' },
  { name: 'Shopify', domain: 'shopify.com', category: 'eComm' },
  { name: 'WooCommerce', domain: 'woocommerce.com', category: 'eComm' },
  { name: 'Magento', domain: 'magento.com', category: 'eComm' },
  { name: 'WordPress', domain: 'wordpress.org', category: 'eComm' },
  { name: 'Power BI', domain: 'powerbi.microsoft.com', category: 'BI' },
  { name: 'Tableau', domain: 'tableau.com', category: 'BI' },
  { name: 'Looker Studio', domain: 'lookerstudio.google.com', category: 'BI' },
];

const PartnerChip = ({ partner }) => {
  const iconUrl = `https://icon.horse/icon/${partner.domain}`;
  return (
    <div className="tp-chip">
      <img src={iconUrl} alt="" className="tp-chip-icon" />
      <span className="tp-chip-name">{partner.name}</span>
    </div>
  );
};

const MarqueeRow = ({ items, reverse }) => {
  return (
    <div className="tp-marquee-outer">
      <div className="tp-marquee-track" style={{ animationDirection: reverse ? 'reverse' : 'normal' }}>
        {items.map((p, i) => <PartnerChip key={`m1-${p.name}-${i}`} partner={p} />)}
        {items.map((p, i) => <PartnerChip key={`m2-${p.name}-${i}`} partner={p} />)}
      </div>
    </div>
  );
};

const TechPartners = () => {
  const half = Math.ceil(partners.length / 2);
  const topRow = partners.slice(0, half);
  const bottomRow = partners.slice(half);

  return (
    <section id="tech-partners" className="tp-section">
      <div className="tp-inner">
        <div className="tp-header">
          <span className="section-label">Ecosystem</span>
          <h2 className="section-title tp-title">
            Technology & Platform <span className="tp-accent">Partners</span>
          </h2>
          <p className="tp-subtitle">
            The platforms are chosen for what the client needs — not what is easiest to sell. Tadbeer integrates with more than 50 enterprise-grade platforms.
          </p>
        </div>

        <div className="tp-rows-wrapper">
          <MarqueeRow items={topRow} />
          <MarqueeRow items={bottomRow} reverse={true} />
        </div>
      </div>
    </section>
  );
};

export default TechPartners;
