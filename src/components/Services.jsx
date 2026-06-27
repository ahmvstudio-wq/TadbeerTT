import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Layers, Cpu, Users } from 'lucide-react';

const servicesData = [
  {
    id: "marketing",
    titleEn: "Digital Marketing",
    titleAr: "التسويق الرقمي",
    desc: "Campaigns end. Acquisition systems do not. The work is to build the marketing infrastructure that generates consistent inbound demand over time — structured, measurable, bilingual, and aligned to how Omani and GCC audiences actually make decisions.",
    icon: Target,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format",
    items: ["Data-Driven Strategy", "Bilingual Social Media (Arabic / English)", "AI-Assisted Content Production", "Performance Analytics & Attribution"],
    path: "/services/digital-marketing"
  },
  {
    id: "software",
    titleEn: "Software Solutions",
    titleAr: "حلول برمجية",
    desc: "A system that does not fit how the business operates will not be used for long. Every implementation begins with understanding the process — then configuring the technology to match it, not the other way around.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format",
    items: ["ERP Implementation (Odoo / SAP)", "Warehouse Management Systems", "HRMS & Learning Management", "POS & Vendor Management Systems"],
    path: "/services/software-solutions"
  },
  {
    id: "ai",
    titleEn: "AI & Technology",
    titleAr: "التقنيات المتقدمة",
    desc: "The most valuable AI applications in a business are rarely the most visible ones. They are the ones embedded in the workflows that run every day — quietly reducing manual effort, improving decision quality, and producing results that accumulate over time.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format",
    items: ["Intelligent Workflow Automation", "Custom AI Application Development", "Operational Machine Learning Pipelines", "AI-Powered Process Improvement"],
    path: "/services/ai-technology"
  },
  {
    id: "talent",
    titleEn: "Human Capital",
    titleAr: "إدارة رأس المال البشري",
    desc: "Organisations outlast the technology they deploy and the strategies they adopt. They do not outlast structural people problems. Omanization compliance, retention, performance management, and organisational design are not HR functions — they are business continuity functions.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format",
    items: ["Organisational Design & Development", "Recruitment & Onboarding Systems", "Training & Development Programmes", "Retention & Compensation Strategy"],
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
          <span className="section-label">Our Capabilities | كفاءاتنا الأساسية</span>
          <h2 className="section-title">Four Capabilities.<br />One Partner Who Stays.</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '600px', margin: '1rem auto 0' }}>
            Strategy without execution is planning. Technology without adoption is cost. People without structure are potential. Each of Tadbeer's four service areas is built on the belief that the real work begins after the first decision.
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
            <p style={{ fontSize: '1.15rem', fontWeight: '500', marginBottom: '0', color: '#fff', lineHeight: '1.6' }}>
              From the first operational audit to the final system deployment — one team, one point of accountability, one standard of completion.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
