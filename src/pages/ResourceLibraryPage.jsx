import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServicePageHero from '../components/ServicePageHero';
import { Download, Filter, Search, ExternalLink, FileText, BookOpen, BarChart3 } from 'lucide-react';

const DEFAULT_RESOURCES = [
  { 
    id: 1,
    title: "Google's Digital Marketing & E-commerce Certificate", 
    category: "SEO & Marketing", 
    type: "Free Course", 
    desc: "Google's official free professional certificate covering SEO, SEM, email marketing, and analytics — industry recognized.", 
    link: "https://grow.google/certificates/digital-marketing-ecommerce/",
    external: true
  },
  { 
    id: 2,
    title: "HubSpot: The Ultimate Guide to AI in Marketing", 
    category: "AI & Automation", 
    type: "Free Guide", 
    desc: "Comprehensive guide on leveraging AI for content creation, lead scoring, customer segmentation, and campaign optimization.", 
    link: "https://blog.hubspot.com/marketing/ai-marketing",
    external: true
  },
  { 
    id: 3,
    title: "McKinsey: The State of AI — Global Survey", 
    category: "Digital Transformation", 
    type: "Report", 
    desc: "McKinsey's latest global survey on AI adoption, ROI benchmarks, and implementation strategies across industries.", 
    link: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
    external: true
  },
  { 
    id: 4,
    title: "Odoo ERP Implementation Playbook", 
    category: "ERP & Software", 
    type: "Free Guide", 
    desc: "Step-by-step deployment playbook for Odoo ERP covering configuration, data migration, user training, and go-live.", 
    link: "https://www.odoo.com/documentation/17.0/",
    external: true
  },
  { 
    id: 5,
    title: "SHRM: Future of Work — HR Trends 2025-2026", 
    category: "Human Capital", 
    type: "Report", 
    desc: "SHRM's comprehensive analysis of workforce trends, hybrid work models, employee engagement, and talent acquisition.", 
    link: "https://www.shrm.org/topics-tools/news/future-of-work",
    external: true
  },
  { 
    id: 6,
    title: "Google Analytics 4 Complete Guide", 
    category: "SEO & Marketing", 
    type: "Free Course", 
    desc: "Master GA4 with Google's free Skillshop courses — from setup and event tracking to advanced attribution models.", 
    link: "https://skillshop.withgoogle.com/intl/en/analytics",
    external: true
  },
  { 
    id: 7,
    title: "Harvard Business Review: Scaling AI", 
    category: "Business Strategy", 
    type: "Article Collection", 
    desc: "HBR's curated collection of articles on building an AI-first organization, overcoming adoption barriers, and measuring ROI.", 
    link: "https://hbr.org/topic/subject/ai-and-machine-learning",
    external: true
  },
  { 
    id: 8,
    title: "Microsoft: AI Transformation Playbook", 
    category: "AI & Automation", 
    type: "Free Guide", 
    desc: "Microsoft's blueprint for enterprise AI adoption covering use case identification, governance, and responsible deployment.", 
    link: "https://www.microsoft.com/en-us/ai/ai-business-school",
    external: true
  },
  { 
    id: 9,
    title: "Deloitte: GCC Economic Outlook & Digital Economy", 
    category: "Business Strategy", 
    type: "Report", 
    desc: "Analysis of GCC economic diversification, Oman Vision 2040, and digital economy growth opportunities.", 
    link: "https://www2.deloitte.com/xe/en/pages/about-deloitte/topics/gcc-country-reports.html",
    external: true
  },
  { 
    id: 10,
    title: "Coursera: Google Project Management Certificate", 
    category: "Business Strategy", 
    type: "Free Course", 
    desc: "Free professional certificate from Google covering agile methodologies, stakeholder management, and project execution.", 
    link: "https://www.coursera.org/professional-certificates/google-project-management",
    external: true
  },
  { 
    id: 11,
    title: "ILO: Labour Market Reports — Arab States", 
    category: "Human Capital", 
    type: "Report", 
    desc: "International Labour Organization data on employment trends, wage benchmarking, and Omanization compliance.", 
    link: "https://www.ilo.org/arabstates",
    external: true
  },
  { 
    id: 12,
    title: "Salesforce: State of Marketing Report", 
    category: "Digital Transformation", 
    type: "Report", 
    desc: "Salesforce's annual survey of 4,800+ marketers on AI adoption, personalization, data strategy, and ROI measurement.", 
    link: "https://www.salesforce.com/resources/research-reports/state-of-marketing/",
    external: true
  }
];

const getIconForType = (type) => {
  const t = type.toLowerCase();
  if (t.includes('course') || t.includes('education')) return <BookOpen size={14} />;
  if (t.includes('report') || t.includes('metric') || t.includes('analytics')) return <BarChart3 size={14} />;
  return <FileText size={14} />;
};

const ResourceLibraryPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const [resources] = useState(() => {
    const stored = localStorage.getItem('tadbeer_resources');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error(e);
      }
    }
    // Set default if not set
    localStorage.setItem('tadbeer_resources', JSON.stringify(DEFAULT_RESOURCES));
    return DEFAULT_RESOURCES;
  });

  const categories = ['All', 'Digital Transformation', 'SEO & Marketing', 'ERP & Software', 'Human Capital', 'Business Strategy', 'AI & Automation'];

  const filteredResources = activeFilter === 'All' 
    ? resources 
    : resources.filter(r => r.category === activeFilter);

  return (
    <div className="page-wrapper">
      <ServicePageHero 
        title="Free Resource Library"
        subtitle="Expert Knowledge at Your Fingertips"
        description="Access curated guides, reports, and courses from the world's leading institutions — Google, McKinsey, HBR, and more. All free. No sign-up required."
        breadcrumbs={['Home', 'Resources']}
      />

      <section style={{ padding: '4rem 5%', background: 'var(--bg)', minHeight: '600px' }}>
        <div className="container">
          
          {/* Filter Bar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontWeight: '600', fontSize: '0.9rem' }}>
              <Filter size={18} /> Filter by Category
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  style={{
                    padding: '0.5rem 1.25rem',
                    background: activeFilter === cat ? 'var(--primary)' : 'white',
                    color: activeFilter === cat ? 'white' : 'var(--text-main)',
                    border: activeFilter === cat ? '1.5px solid var(--primary)' : '1.5px solid var(--border)',
                    borderRadius: '30px',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    fontWeight: activeFilter === cat ? '600' : '400',
                    transition: 'all 0.2s'
                  }}
                >
                  {cat} {activeFilter !== cat && <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>({resources.filter(r => cat === 'All' || r.category === cat).length})</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
            <AnimatePresence>
              {filteredResources.map((res) => (
                <motion.div 
                  key={res.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  style={{ background: 'white', borderRadius: '16px', border: '1px solid var(--border)', padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--secondary)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.06)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', padding: '0.3rem 0.75rem', background: 'rgba(202,169,76,0.1)', color: 'var(--secondary)', borderRadius: '50px', fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase' }}>
                      {res.category}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                      {getIconForType(res.type)} {res.type}
                    </span>
                  </div>
                  
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', color: 'var(--text-main)', lineHeight: '1.4' }}>{res.title}</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', flex: 1, fontSize: '0.9rem', lineHeight: '1.6' }}>{res.desc}</p>
                  
                  <a 
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%', background: 'var(--primary)', color: 'white', border: 'none', padding: '0.75rem', borderRadius: '8px', fontWeight: '600', fontSize: '0.9rem' }}
                  >
                    <ExternalLink size={16} /> Access Free Resource
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredResources.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
              <Search size={48} style={{ margin: '0 auto 1rem', opacity: 0.2 }} />
              <h3>No resources found for this category.</h3>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ResourceLibraryPage;
