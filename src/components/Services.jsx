import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Layers, Cpu, Users } from 'lucide-react';

const servicesData = [
  {
    id: "marketing",
    titleEn: "Digital Marketing",
    titleAr: "التسويق الرقمي",
    desc: "Bilingual, data-driven marketing ecosystems — not campaigns. We build brand authority and inbound leads that compound.",
    icon: Target,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format",
    items: ["Data-Driven Strategy", "Bilingual Social Media", "AI Content & Automation", "Performance Analytics"],
    path: "/services/digital-marketing"
  },
  {
    id: "software",
    titleEn: "Software Solutions",
    titleAr: "حلول برمجية",
    desc: "VAT-compliant, enterprise-proven systems. We map your operation first, then implement, configure, train, and support.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format",
    items: ["ERP Integration", "Warehouse Management", "HRMS & LMS", "POS & Vendor Systems"],
    path: "/services/software-solutions"
  },
  {
    id: "ai",
    titleEn: "AI & Next-Gen Tech",
    titleAr: "تقنيات الذكاء الاصطناعي",
    desc: "Enterprise-grade AI operations as a service. We deploy custom LLM applications, autonomous agentic workflows, and machine learning models to supercharge operational bandwidth.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format",
    items: ["Agentic AI Workflows", "Custom LLM Applications", "Operational ML Pipelines", "Cognitive Automation"],
    path: "/services/ai-technology"
  },
  {
    id: "talent",
    titleEn: "Human Capital",
    titleAr: "إدارة رأس المال البشري",
    desc: "Omanization-aligned, people-first HCM strategy. Because your people ARE the business strategy.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format",
    items: ["Org Development", "Recruitment & Onboarding", "Training Programs", "Retention Strategy"],
    path: "/services/human-capital"
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
        <polygon points="60,40 140,40 120,90 80,90" fill="none" stroke="rgba(24,79,91,0.2)" strokeWidth="1" />
        <line x1="80" y1="90" x2="80" y2="150" stroke="rgba(24,79,91,0.2)" strokeWidth="1" />
        <line x1="120" y1="90" x2="120" y2="150" stroke="rgba(24,79,91,0.2)" strokeWidth="1" />
      </svg>
    );
  }
  if (type === "software") {
    return (
      <svg viewBox="0 0 200 200" className="card-blueprint-svg">
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
      <circle cx="100" cy="40" r="12" fill="none" stroke="var(--secondary)" strokeWidth="1.5" />
      <circle cx="50" cy="110" r="10" fill="none" stroke="rgba(24,79,91,0.3)" strokeWidth="1" />
      <circle cx="100" cy="110" r="10" fill="none" stroke="rgba(24,79,91,0.3)" strokeWidth="1" />
      <circle cx="150" cy="110" r="10" fill="none" stroke="rgba(24,79,91,0.3)" strokeWidth="1" />
      <path d="M100,52 L100,85 M50,85 L150,85 M50,85 L50,100 M100,85 L100,100 M150,85 L150,100" fill="none" stroke="rgba(24,79,91,0.2)" strokeWidth="1" />
    </svg>
  );
};

const Services = () => {
  const handleMouseMove = useMousePositionInCard();
  const MotionLink = motion(Link);

  return (
    <section id="services" className="services-section">
      <div className="container">
        
        {/* Header */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", bounce: 0.1, duration: 1.2 }}
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
              <MotionLink 
                key={service.id}
                to={service.path}
                className="service-card"
                onMouseMove={handleMouseMove}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", bounce: 0.15, duration: 0.9, delay: index * 0.08 }}
                style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
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

                <div className="service-card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
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
                  </div>

                  <div className="learn-more-action-trigger" style={{ marginTop: '1.5rem' }}>
                    <span>Inspect Details</span>
                    <ArrowRight size={16} className="arrow-trig" />
                  </div>
                </div>
              </MotionLink>
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

      </div>
    </section>
  );
};

export default Services;
