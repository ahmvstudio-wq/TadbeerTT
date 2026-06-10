import React, { useRef, useEffect, useState } from 'react';

/**
 * Logo sources:
 *  1. Direct CDN / official static assets (most reliable)
 *  2. Wikipedia/Wikimedia commons (always public)
 *  3. Clearbit as last resort (blocked in sandboxes but works on prod)
 *
 * All URLs are fully public and do not require API keys.
 */
const partners = [
  // ── ERP / Business Systems ──────────────────────────────────────────
  {
    name: 'ERPNext',
    logo: 'https://erpnext.com/files/erpnext-logo.svg',
    fallback: 'https://logo.clearbit.com/erpnext.com',
    category: 'ERP',
  },
  {
    name: 'SAP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/320px-SAP_2011_logo.svg.png',
    fallback: 'https://logo.clearbit.com/sap.com',
    category: 'ERP',
  },
  {
    name: 'Odoo',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Odoo_brand_logo.png/320px-Odoo_brand_logo.png',
    fallback: 'https://logo.clearbit.com/odoo.com',
    category: 'ERP',
  },
  {
    name: 'Microsoft Dynamics 365',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/320px-Microsoft_logo.svg.png',
    fallback: 'https://logo.clearbit.com/microsoft.com',
    category: 'ERP',
  },
  {
    name: 'Oracle NetSuite',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/320px-Oracle_logo.svg.png',
    fallback: 'https://logo.clearbit.com/netsuite.com',
    category: 'ERP',
  },

  // ── AI & LLMs ────────────────────────────────────────────────────────
  {
    name: 'OpenAI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/320px-OpenAI_Logo.svg.png',
    fallback: 'https://logo.clearbit.com/openai.com',
    category: 'AI',
  },
  {
    name: 'Google Gemini',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/320px-Google_Gemini_logo.svg.png',
    fallback: 'https://logo.clearbit.com/google.com',
    category: 'AI',
  },
  {
    name: 'DeepSeek',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/DeepSeek_logo.svg/320px-DeepSeek_logo.svg.png',
    fallback: 'https://logo.clearbit.com/deepseek.com',
    category: 'AI',
  },
  {
    name: 'Anthropic Claude',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Anthropic_logo.svg/320px-Anthropic_logo.svg.png',
    fallback: 'https://logo.clearbit.com/anthropic.com',
    category: 'AI',
  },
  {
    name: 'Azure AI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/320px-Microsoft_Azure.svg.png',
    fallback: 'https://logo.clearbit.com/azure.microsoft.com',
    category: 'AI',
  },

  // ── Cloud & Infrastructure ───────────────────────────────────────────
  {
    name: 'Microsoft Azure',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/320px-Microsoft_Azure.svg.png',
    fallback: 'https://logo.clearbit.com/azure.microsoft.com',
    category: 'Cloud',
  },
  {
    name: 'Google Cloud',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/320px-Google_Cloud_logo.svg.png',
    fallback: 'https://logo.clearbit.com/cloud.google.com',
    category: 'Cloud',
  },
  {
    name: 'AWS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/320px-Amazon_Web_Services_Logo.svg.png',
    fallback: 'https://logo.clearbit.com/aws.amazon.com',
    category: 'Cloud',
  },
  {
    name: 'ASP.NET / .NET',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/200px-Microsoft_.NET_logo.svg.png',
    fallback: 'https://logo.clearbit.com/dotnet.microsoft.com',
    category: 'Dev',
  },
  {
    name: 'GitHub',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/200px-Octicons-mark-github.svg.png',
    fallback: 'https://logo.clearbit.com/github.com',
    category: 'Dev',
  },

  // ── Marketing & Analytics ────────────────────────────────────────────
  {
    name: 'Meta Business',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/320px-Meta_Platforms_Inc._logo.svg.png',
    fallback: 'https://logo.clearbit.com/meta.com',
    category: 'Marketing',
  },
  {
    name: 'Google Ads',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/320px-Google_Ads_logo.svg.png',
    fallback: 'https://logo.clearbit.com/ads.google.com',
    category: 'Marketing',
  },
  {
    name: 'Google Analytics',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Logo_Google_Analytics.svg/200px-Logo_Google_Analytics.svg.png',
    fallback: 'https://logo.clearbit.com/analytics.google.com',
    category: 'Marketing',
  },
  {
    name: 'LinkedIn Marketing',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png',
    fallback: 'https://logo.clearbit.com/linkedin.com',
    category: 'Marketing',
  },
  {
    name: 'TikTok for Business',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/320px-TikTok_logo.svg.png',
    fallback: 'https://logo.clearbit.com/tiktok.com',
    category: 'Marketing',
  },
  {
    name: 'Mailchimp',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mail_Chimp_Logo.png/320px-Mail_Chimp_Logo.png',
    fallback: 'https://logo.clearbit.com/mailchimp.com',
    category: 'Marketing',
  },

  // ── Finance & Accounting ─────────────────────────────────────────────
  {
    name: 'Tally',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Tally_logo.png/320px-Tally_logo.png',
    fallback: 'https://logo.clearbit.com/tallysolutions.com',
    category: 'Finance',
  },
  {
    name: 'QuickBooks',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/QuickBooks_Logo.png/320px-QuickBooks_Logo.png',
    fallback: 'https://logo.clearbit.com/quickbooks.intuit.com',
    category: 'Finance',
  },
  {
    name: 'Zoho Books',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Zoho-logo.png/320px-Zoho-logo.png',
    fallback: 'https://logo.clearbit.com/zoho.com',
    category: 'Finance',
  },
  {
    name: 'Xero',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Xero_%28software%29_logo.svg/320px-Xero_%28software%29_logo.svg.png',
    fallback: 'https://logo.clearbit.com/xero.com',
    category: 'Finance',
  },

  // ── HR & People ──────────────────────────────────────────────────────
  {
    name: 'Zoho People',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Zoho-logo.png/320px-Zoho-logo.png',
    fallback: 'https://logo.clearbit.com/zoho.com',
    category: 'HR',
  },
  {
    name: 'BambooHR',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/BambooHR_Logo.png/320px-BambooHR_Logo.png',
    fallback: 'https://logo.clearbit.com/bamboohr.com',
    category: 'HR',
  },
  {
    name: 'SAP SuccessFactors',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/320px-SAP_2011_logo.svg.png',
    fallback: 'https://logo.clearbit.com/sap.com',
    category: 'HR',
  },
  {
    name: 'Workday',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Workday_Logo.svg/320px-Workday_Logo.svg.png',
    fallback: 'https://logo.clearbit.com/workday.com',
    category: 'HR',
  },

  // ── CRM ──────────────────────────────────────────────────────────────
  {
    name: 'Salesforce',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/320px-Salesforce.com_logo.svg.png',
    fallback: 'https://logo.clearbit.com/salesforce.com',
    category: 'CRM',
  },
  {
    name: 'HubSpot',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/320px-HubSpot_Logo.svg.png',
    fallback: 'https://logo.clearbit.com/hubspot.com',
    category: 'CRM',
  },
  {
    name: 'Zoho CRM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Zoho-logo.png/320px-Zoho-logo.png',
    fallback: 'https://logo.clearbit.com/zoho.com',
    category: 'CRM',
  },
  {
    name: 'Dynamics CRM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/320px-Microsoft_logo.svg.png',
    fallback: 'https://logo.clearbit.com/microsoft.com',
    category: 'CRM',
  },

  // ── Project Management ───────────────────────────────────────────────
  {
    name: 'ClickUp',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/ClickUp_Logo.svg/320px-ClickUp_Logo.svg.png',
    fallback: 'https://logo.clearbit.com/clickup.com',
    category: 'PM',
  },
  {
    name: 'Asana',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Asana_logo.svg/320px-Asana_logo.svg.png',
    fallback: 'https://logo.clearbit.com/asana.com',
    category: 'PM',
  },
  {
    name: 'Monday.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Monday.com_logo.svg/320px-Monday.com_logo.svg.png',
    fallback: 'https://logo.clearbit.com/monday.com',
    category: 'PM',
  },
  {
    name: 'Trello',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/320px-Trello_logo.svg.png',
    fallback: 'https://logo.clearbit.com/trello.com',
    category: 'PM',
  },
  {
    name: 'Jira',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jira_Logo.svg/320px-Jira_Logo.svg.png',
    fallback: 'https://logo.clearbit.com/atlassian.com',
    category: 'PM',
  },

  // ── Communication ────────────────────────────────────────────────────
  {
    name: 'WhatsApp Business',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/240px-WhatsApp.svg.png',
    fallback: 'https://logo.clearbit.com/business.whatsapp.com',
    category: 'Comms',
  },
  {
    name: 'Slack',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/240px-Slack_icon_2019.svg.png',
    fallback: 'https://logo.clearbit.com/slack.com',
    category: 'Comms',
  },
  {
    name: 'Microsoft Teams',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/240px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png',
    fallback: 'https://logo.clearbit.com/microsoft.com',
    category: 'Comms',
  },
  {
    name: 'Zoom',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Zoom_Logo_2022.svg/320px-Zoom_Logo_2022.svg.png',
    fallback: 'https://logo.clearbit.com/zoom.us',
    category: 'Comms',
  },

  // ── Mobile Development ───────────────────────────────────────────────
  {
    name: 'Flutter',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Google-flutter-logo.png/320px-Google-flutter-logo.png',
    fallback: 'https://logo.clearbit.com/flutter.dev',
    category: 'Mobile',
  },
  {
    name: 'React Native',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/240px-React-icon.svg.png',
    fallback: 'https://logo.clearbit.com/reactnative.dev',
    category: 'Mobile',
  },
  {
    name: 'Android Studio',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Android_Studio_Icon_3.6.svg/240px-Android_Studio_Icon_3.6.svg.png',
    fallback: 'https://logo.clearbit.com/developer.android.com',
    category: 'Mobile',
  },
  {
    name: 'Apple Developer',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/200px-Apple_logo_black.svg.png',
    fallback: 'https://logo.clearbit.com/developer.apple.com',
    category: 'Mobile',
  },

  // ── eCommerce & CMS ─────────────────────────────────────────────────
  {
    name: 'Shopify',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/320px-Shopify_logo_2018.svg.png',
    fallback: 'https://logo.clearbit.com/shopify.com',
    category: 'eComm',
  },
  {
    name: 'WooCommerce',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/WooCommerce_logo.svg/320px-WooCommerce_logo.svg.png',
    fallback: 'https://logo.clearbit.com/woocommerce.com',
    category: 'eComm',
  },
  {
    name: 'Magento',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magento_Logo.svg/320px-Magento_Logo.svg.png',
    fallback: 'https://logo.clearbit.com/magento.com',
    category: 'eComm',
  },
  {
    name: 'WordPress',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/240px-WordPress_blue_logo.svg.png',
    fallback: 'https://logo.clearbit.com/wordpress.org',
    category: 'eComm',
  },

  // ── BI & Analytics ───────────────────────────────────────────────────
  {
    name: 'Power BI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/240px-New_Power_BI_Logo.svg.png',
    fallback: 'https://logo.clearbit.com/powerbi.microsoft.com',
    category: 'BI',
  },
  {
    name: 'Tableau',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Tableau_Logo.png/320px-Tableau_Logo.png',
    fallback: 'https://logo.clearbit.com/tableau.com',
    category: 'BI',
  },
  {
    name: 'Looker Studio',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Looker.svg/320px-Looker.svg.png',
    fallback: 'https://logo.clearbit.com/lookerstudio.google.com',
    category: 'BI',
  },
];



// Initials fallback avatar
const FallbackLogo = ({ name }) => (
  <div style={{
    width: 45, height: 45,
    borderRadius: 8,
    background: 'var(--primary)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '0.9rem', fontWeight: 700, color: '#fff',
    userSelect: 'none', flexShrink: 0,
    letterSpacing: '-0.5px',
  }}>
    {name.slice(0, 2).toUpperCase()}
  </div>
);

// A single partner card with logo and fallback logic
const PartnerCard = ({ partner }) => {
  const [src, setSrc] = useState(partner.logo);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (src === partner.logo && partner.fallback) {
      setSrc(partner.fallback);
    } else {
      setFailed(true);
    }
  };

  return (
    <div className="tp-card">
      {failed ? (
        <FallbackLogo name={partner.name} />
      ) : (
        <img
          src={src}
          alt={partner.name}
          className="tp-logo-img"
          onError={handleError}
          referrerPolicy="no-referrer"
        />
      )}
    </div>
  );
};

// Split into two rows for visual richness
const mid = Math.ceil(partners.length / 2);
const row1 = partners.slice(0, mid);
const row2 = partners.slice(mid);

const MarqueeRow = ({ items, reverse = false, speed = 50 }) => {
  const doubled = [...items, ...items]; // seamless infinite loop
  return (
    <div className="tp-marquee-outer">
      <div
        className="tp-marquee-track"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {doubled.map((p, i) => (
          <PartnerCard key={`${p.name}-${i}`} partner={p} />
        ))}
      </div>
    </div>
  );
};

const TechPartners = () => (
  <section id="tech-partners" className="tp-section">
    <div className="tp-inner">
      {/* Section header */}
      <div className="tp-header">
        <span className="section-label">Ecosystem</span>
        <h2 className="section-title tp-title">
          Technology &amp; Service <span className="tp-accent">Partners</span>
        </h2>
        <p className="tp-subtitle">
          We integrate and work with 50+ industry-leading platforms to deliver
          end-to-end digital transformation for our clients.
        </p>
      </div>

      {/* Dual infinite scroll rows */}
      <div className="tp-rows-wrapper">
        <MarqueeRow items={row1} speed={60} />
        <MarqueeRow items={row2} reverse speed={48} />
      </div>

      {/* Category legend — subtle, monochromatic */}
      <div className="tp-legend">
        {['ERP','AI','Cloud','Dev','Marketing','Finance','HR','CRM','PM','Comms','Mobile','eComm','BI'].map(cat => (
          <span key={cat} className="tp-legend-pill">{cat}</span>
        ))}
      </div>
    </div>
  </section>
);

export default TechPartners;
