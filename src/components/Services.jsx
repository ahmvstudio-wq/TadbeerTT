import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ArrowRight, Zap, Target, Layers, Cpu, Users, CheckCircle2 } from 'lucide-react';

const servicesData = [
  {
    id: "marketing",
    titleEn: "Digital Marketing",
    titleAr: "التسويق الرقمي",
    desc: "Bilingual, data-driven marketing ecosystems — not campaigns. We build brand authority and inbound leads that compound.",
    icon: Target,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format",
    items: ["Data-Driven Strategy", "Bilingual Social Media", "AI Content & Automation", "Performance Analytics"],
    capabilities: [
      "Bilingual Social Media Strategy & Management",
      "High-Performance Paid Advertising (Meta, Google, TikTok, Snapchat)",
      "SEO & Semantic Content Architecture",
      "AI-Powered Content Personalization Pipelines",
      "Lead Generation & Automated Email Funnels",
      "Comprehensive Analytics & ROAS Attribution Models"
    ],
    pipeline: [
      { step: "01", title: "Audit & Landscape Study", desc: "We map competitor ad spend, discover keyword gaps, and model your GCC customer personas." },
      { step: "02", title: "Ecosystem Deployment", desc: "We launch structured ad accounts, install bilingual content engines, and configure analytics." },
      { step: "03", title: "Compounding Growth Optimization", desc: "Continuous A/B testing, AI-driven lead routing, and weekly attribution reporting." }
    ],
    tech: ["Meta Ads", "Google Ads", "TikTok Business", "HubSpot", "Google Analytics 4", "Semrush"],
    caseStudy: "4.2x increase in digital customer acquisition for a leading Muscat-based retail brand within 90 days."
  },
  {
    id: "software",
    titleEn: "Software Solutions",
    titleAr: "حلول برمجية",
    desc: "VAT-compliant, enterprise-proven systems. We map your operation first, then implement, configure, train, and support.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format",
    items: ["ERP Integration", "Warehouse Management", "HRMS & LMS", "POS & Vendor Systems"],
    capabilities: [
      "Modular ERP Implementations (Odoo, SAP, Microsoft Dynamics)",
      "Real-Time Barcode & RF-Enabled WMS systems",
      "Multi-Branch POS Synchronisation & Localized Tax (Oman VAT)",
      "Custom Payroll & HRMS Systems matching Labor Law",
      "Secure API Integrations & Database Merging",
      "Corporate LMS (Learning Management Systems) for rapid training"
    ],
    pipeline: [
      { step: "01", title: "Operational Process Mapping", desc: "We sit with your team, outline every transaction/movement, and draft a blueprint." },
      { step: "02", title: "Sandbox Configuration", desc: "We implement the software, setup localized modules, and test transaction flows in dry-runs." },
      { step: "03", title: "Staff Upskilling & Handover", desc: "Hands-on staff training, custom user manuals, and 24/7 dedicated local support." }
    ],
    tech: ["Odoo Enterprise", "SAP Business One", "Microsoft Dynamics", "PostgreSQL", "Node.js", "Docker"],
    caseStudy: "Overhauled WMS for a Muscat food logistics supplier, eliminating 95% of manual paper tracking errors."
  },
  {
    id: "ai",
    titleEn: "AI & Next-Gen Tech",
    titleAr: "تقنيات الذكاء الاصطناعي",
    desc: "Enterprise-grade AI operations as a service. We deploy custom LLM applications, autonomous agentic workflows, and machine learning models to supercharge operational bandwidth.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format",
    items: ["Agentic AI Workflows", "Custom LLM Applications", "Operational ML Pipelines", "Cognitive Automation"],
    capabilities: [
      "Custom RAG Architectures & Proprietary Knowledge Bases",
      "Autonomous AI Agents for Task Routing & Delegation",
      "Management-Level Decision Support Systems & Predictive Modeling",
      "Computer Vision & NLP Pipelines for Document Extraction (OCR/Invoice Parsing)",
      "Bilingual (Arabic/English) Conversational AI for Customer Success",
      "AI-Powered Operational Dashboards & Real-time Anomaly Detection"
    ],
    pipeline: [
      { step: "01", title: "AI Readiness & Data Strategy", desc: "We audit your data infrastructure, establish governance guardrails, and scope high-ROI use cases." },
      { step: "02", title: "Model Training & Pipeline Integration", desc: "We fine-tune open-source or commercial models and seamlessly inject inference APIs into your existing ERP/CRM." },
      { step: "03", title: "Continuous RLHF & Model Monitoring", desc: "We implement robust evaluation frameworks, drift detection, and user feedback loops to ensure enduring AI efficacy." }
    ],
    tech: ["LangChain", "LlamaIndex", "OpenAI / Claude / Cohere", "Pinecone / Milvus", "PyTorch / TensorFlow", "FastAPI / Docker"],
    caseStudy: "Deployed autonomous HR screening agent and operational data parser, reducing manual administrative overhead by 78% for a regional holding company."
  },
  {
    id: "talent",
    titleEn: "Human Capital",
    titleAr: "إدارة رأس المال البشري",
    desc: "Omanization-aligned, people-first HCM strategy. Because your people ARE the business strategy.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format",
    items: ["Org Development", "Recruitment & Onboarding", "Training Programs", "Retention Strategy"],
    capabilities: [
      "Organizational Redesign & Scalable Hierarchies",
      "Ministry-Compliant Omanization Strategy & Audit Prep",
      "KPI & Goal-Setting Frameworks (OKR Systems)",
      "Executive Recruitment & Specialized Headhunting",
      "Custom Corporate Training & Leadership Pathways",
      "Retainer-Based HR Advisory & Employee Engagement Programs"
    ],
    pipeline: [
      { step: "01", title: "Talent Audit", desc: "We evaluate your current org chart, check compliance files, and outline salary bands." },
      { step: "02", title: "Structure Engineering", desc: "We model updated role descriptions, design OKR sheets, and establish recruitment guidelines." },
      { step: "03", title: "Systemic HCM Rollout", desc: "We launch compliance tracking dashboards, train managers, and manage executive onboarding." }
    ],
    tech: ["Slack", "BambooHR", "Notion Corporate", "LinkedIn Recruiter", "Odoo HR", "Ministry Portals"],
    caseStudy: "Redesigned operational workflow for GCC retail group, decreasing middle-manager turnover by 42%."
  }
];

const easeTransition = [0.22, 1, 0.36, 1];

// Interactive mouse flashlight helper
const useMousePositionInCard = () => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };
  return handleMouseMove;
};

// SVG Overlays for cards
const ServiceSVGOverlay = ({ type }) => {
  if (type === "marketing") {
    return (
      <svg viewBox="0 0 200 200" className="card-blueprint-svg">
        <path d="M20,180 Q100,50 180,20" fill="none" stroke="rgba(202,169,76,0.3)" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="20" cy="180" r="4" fill="var(--secondary)" />
        <circle cx="100" cy="115" r="4" fill="var(--primary)" />
        <circle cx="180" cy="20" r="5" fill="var(--secondary)" />
        {/* Funnel Outline */}
        <polygon points="60,40 140,40 120,90 80,90" fill="none" stroke="rgba(24,79,91,0.2)" strokeWidth="1" />
        <line x1="80" y1="90" x2="80" y2="150" stroke="rgba(24,79,91,0.2)" strokeWidth="1" />
        <line x1="120" y1="90" x2="120" y2="150" stroke="rgba(24,79,91,0.2)" strokeWidth="1" />
      </svg>
    );
  }
  if (type === "software") {
    return (
      <svg viewBox="0 0 200 200" className="card-blueprint-svg">
        {/* Interconnected Database Nodes */}
        <rect x="30" y="30" width="40" height="30" rx="3" fill="none" stroke="rgba(202,169,76,0.3)" strokeWidth="1" />
        <rect x="130" y="30" width="40" height="30" rx="3" fill="none" stroke="rgba(24,79,91,0.2)" strokeWidth="1" />
        <rect x="80" y="130" width="40" height="30" rx="3" fill="none" stroke="rgba(202,169,76,0.3)" strokeWidth="1" />
        <path d="M70,45 L130,45 M50,60 L80,145 M150,60 L120,145" fill="none" stroke="rgba(24,79,91,0.25)" strokeWidth="1.5" />
      </svg>
    );
  }
  if (type === "ai") {
    return (
      <svg viewBox="0 0 200 200" className="card-blueprint-svg">
        {/* Brain/Neuron Network */}
        <circle cx="100" cy="100" r="10" fill="none" stroke="var(--secondary)" strokeWidth="1" />
        <circle cx="60" cy="60" r="6" fill="none" stroke="rgba(24,79,91,0.3)" strokeWidth="1" />
        <circle cx="140" cy="60" r="6" fill="none" stroke="rgba(24,79,91,0.3)" strokeWidth="1" />
        <circle cx="60" cy="140" r="6" fill="none" stroke="rgba(202,169,76,0.3)" strokeWidth="1" />
        <circle cx="140" cy="140" r="6" fill="none" stroke="rgba(24,79,91,0.3)" strokeWidth="1" />
        <path d="M100,90 L66,66 M100,110 L66,134 M100,90 L134,66 M100,110 L134,134 M60,66 L60,134 M140,66 L140,134" fill="none" stroke="rgba(24,79,91,0.2)" strokeWidth="1" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 200" className="card-blueprint-svg">
      {/* Organization Flow Chart */}
      <circle cx="100" cy="40" r="12" fill="none" stroke="var(--secondary)" strokeWidth="1.5" />
      <circle cx="50" cy="110" r="10" fill="none" stroke="rgba(24,79,91,0.3)" strokeWidth="1" />
      <circle cx="100" cy="110" r="10" fill="none" stroke="rgba(24,79,91,0.3)" strokeWidth="1" />
      <circle cx="150" cy="110" r="10" fill="none" stroke="rgba(24,79,91,0.3)" strokeWidth="1" />
      <path d="M100,52 L100,85 M50,85 L150,85 M50,85 L50,100 M100,85 L100,100 M150,85 L150,100" fill="none" stroke="rgba(24,79,91,0.2)" strokeWidth="1" />
    </svg>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const handleMouseMove = useMousePositionInCard();

  // Handle body scroll locking when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedService]);

  return (
    <section id="services" className="services-section">
      <div className="container">
        
        {/* Header */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Our Capabilities | خدماتنا</span>
          <h2 className="section-title">Four Pillars of<br />Business Transformation.</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '600px', margin: '1rem auto 0' }}>
            A premium network of operational architects, software engineers, and growth consultants, aligned to Oman Vision 2040.
          </p>
        </motion.div>

        {/* Services Card Grid */}
        <div className="services-grid">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div 
                key={service.id}
                className="service-card"
                onMouseMove={handleMouseMove}
                onClick={() => setSelectedService(service)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: easeTransition }}
              >
                {/* Photo with SVG overlay container */}
                <div className="card-photo-wrapper">
                  <img 
                    src={service.image} 
                    alt={service.titleEn}
                    className="card-unsplash-photo"
                  />
                  <div className="photo-dark-gradient"></div>
                  <ServiceSVGOverlay type={service.id} />
                  
                  {/* Floating Icon Node */}
                  <div className="floating-card-icon-node">
                    <IconComponent size={24} />
                  </div>
                </div>

                <div className="service-card-body">
                  <div className="title-row">
                    <h3 className="service-title">{service.titleEn}</h3>
                    <span className="service-arabic">{service.titleAr}</span>
                  </div>
                  <p className="service-desc">{service.desc}</p>
                  
                  <ul className="service-list">
                    {service.items.map((item, i) => (
                      <li key={i}>
                        <span className="gold-bullet">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="learn-more-action-trigger">
                    <span>Inspect Details</span>
                    <ArrowRight size={16} className="arrow-trig" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <motion.div 
          className="services-banner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ position: 'relative', zIndex: 2 }}>
            <p style={{ fontSize: '1.35rem', fontWeight: '600', marginBottom: '0.5rem', color: '#fff' }}>
              Complete Integration. Zero Friction.
            </p>
            <p style={{ fontSize: '1.05rem', opacity: 0.9, color: 'rgba(255,255,255,0.85)' }}>
              From initial operational audit to final code deploy — Tadbeer assumes full responsibility.
            </p>
          </div>
        </motion.div>

        {/* IMMERSIVE DETAIL MODAL (AnimatePresence) */}
        <AnimatePresence>
          {selectedService && (
            <>
              {/* Dark backdrop overlay */}
              <motion.div 
                className="modal-backdrop-blur"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
              />

              {/* Centered card panel */}
              <div className="modal-container-scroll">
                <motion.div 
                  className="modal-detailed-panel"
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 30 }}
                  transition={{ duration: 0.5, ease: easeTransition }}
                >
                  {/* Close button */}
                  <button 
                    className="modal-close-trigger-btn"
                    onClick={() => setSelectedService(null)}
                    aria-label="Close panel"
                  >
                    <X size={20} />
                  </button>

                  <div className="modal-inner-split">
                    {/* Visual half */}
                    <div className="modal-visual-side">
                      <img 
                        src={selectedService.image} 
                        alt={selectedService.titleEn}
                        className="modal-banner-image"
                      />
                      <div className="modal-visual-gradient"></div>
                      <ServiceSVGOverlay type={selectedService.id} />
                      
                      <div className="modal-badge-info">
                        <span className="badge-tag">Tadbeer Pillar</span>
                        <h4 className="badge-title">{selectedService.titleEn}</h4>
                      </div>
                    </div>

                    {/* Content half */}
                    <div className="modal-content-side">
                      <div className="modal-header-meta">
                        <h2 className="modal-cap-title">{selectedService.titleEn}</h2>
                        <span className="modal-cap-arabic">{selectedService.titleAr}</span>
                      </div>
                      
                      <p className="modal-brief-intro">{selectedService.desc}</p>
                      
                      {/* Sub-capabilities */}
                      <div className="modal-caps-group">
                        <h4 className="sub-header-title"><Zap size={16} /> Sub-Capabilities & Deliverables</h4>
                        <div className="caps-check-grid">
                          {selectedService.capabilities.map((cap, i) => (
                            <div key={i} className="cap-check-item">
                              <Check className="check-svg" size={14} />
                              <span>{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Process pipeline */}
                      <div className="modal-caps-group">
                        <h4 className="sub-header-title"><Layers size={16} /> Implementation Roadmap</h4>
                        <div className="pipeline-steps-flow">
                          {selectedService.pipeline.map((step, i) => (
                            <div key={i} className="pipeline-step-node">
                              <div className="step-num-badge">{step.step}</div>
                              <div className="step-text-block">
                                <h5 className="step-node-title">{step.title}</h5>
                                <p className="step-node-desc">{step.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech stack */}
                      <div className="modal-caps-group">
                        <h4 className="sub-header-title"><Cpu size={16} /> System Tooling & Technologies</h4>
                        <div className="tech-badge-list">
                          {selectedService.tech.map((t, i) => (
                            <span key={i} className="tech-badge-tag">{t}</span>
                          ))}
                        </div>
                      </div>

                      {/* Verified Case Study Capsule */}
                      <div className="modal-case-capsule-box">
                        <div className="case-caps-header">
                          <CheckCircle2 size={16} className="ok-icon" />
                          <span>Operational Validation Metric</span>
                        </div>
                        <p className="case-caps-description">{selectedService.caseStudy}</p>
                      </div>

                      {/* Call to action */}
                      <div className="modal-footer-cta">
                        <a 
                          href="#cta" 
                          className="btn btn-primary w-full"
                          onClick={() => setSelectedService(null)}
                        >
                          Consult on this Service
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Services;
