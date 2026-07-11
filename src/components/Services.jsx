import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Layers, Cpu, Users } from 'lucide-react';

const servicesData = [
  {
    id: "technology",
    titleEn: "Software Solutions",
    subtitle: "Enterprise systems that scale",
    desc: "We start with process, then configure technology around it so teams adopt it and outcomes are measurable.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format",
    items: [
      "ERP implementation including Odoo and SAP.",
      "CRM and workflow systems.",
      "Learning management systems.",
      "Visitor management automation and integrations.",
      "Legacy system migrations and bespoke software engineering."
    ],
    path: "/services/software-solutions"
  },
  {
    id: "ai",
    titleEn: "AI Technology",
    subtitle: "Enterprise AI that delivers results",
    desc: "Bespoke AI solutions that automate workflows, predict trends, and turn conversational data into actionable insights.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format",
    items: [
      "Omnichannel AI lead scoring and capture systems.",
      "Conversational AI agents for sales and support.",
      "Data pipelines for predictive analytics and reporting.",
      "Custom machine learning models tailored to your industry."
    ],
    path: "/services/ai-technology"
  },
  {
    id: "marketing",
    titleEn: "Digital Marketing",
    subtitle: "Data-driven growth engines",
    desc: "We build marketing infrastructure that generates consistent inbound demand. It is structured, measurable, and aligned with how customers decide in Oman.",
    icon: Target,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format",
    items: [
      "Performance marketing and multi-channel lead acquisition engines.",
      "Brand messaging, positioning, and identity guidelines.",
      "Marketing automation workflows (email, CRM integration, WhatsApp).",
      "Localised SEO strategies, content creation, and journey mapping."
    ],
    path: "/services/digital-marketing"
  },
  {
    id: "people",
    titleEn: "Human Capital",
    subtitle: "People-first transformation",
    desc: "Organisational design. Recruitment and onboarding systems. Training programs. Retention and compensation strategy so performance becomes repeatable.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format",
    items: [
      "Organisational restructuring, hierarchy design, and grading structures.",
      "Modern talent acquisition, onboarding playbooks, and training tracks.",
      "Performance measurement models, appraisal schemes, and bonus structures.",
      "Culture engineering, retention strategies, and talent reviews."
    ],
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
  if (type === "ai") {
    return (
      <svg viewBox="0 0 200 200" className="card-blueprint-svg">
        <path d="M20,180 Q100,50 180,20" fill="none" stroke="rgba(202,169,76,0.3)" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="20" cy="180" r="4" fill="var(--secondary)" />
        <circle cx="100" cy="115" r="4" fill="var(--primary)" />
        <circle cx="180" cy="20" r="5" fill="var(--secondary)" />
      </svg>
    );
  }
  if (type === "technology") {
    return (
      <svg viewBox="0 0 200 200" className="card-blueprint-svg">
        <rect x="30" y="30" width="40" height="30" rx="3" fill="none" stroke="rgba(202,169,76,0.3)" strokeWidth="1" />
        <rect x="130" y="30" width="40" height="30" rx="3" fill="none" stroke="rgba(24,79,91,0.2)" strokeWidth="1" />
        <rect x="80" y="130" width="40" height="30" rx="3" fill="none" stroke="rgba(202,169,76,0.3)" strokeWidth="1" />
        <path d="M70,45 L130,45 M50,60 L80,145 M150,60 L120,145" fill="none" stroke="rgba(24,79,91,0.25)" strokeWidth="1.5" />
      </svg>
    );
  }
  if (type === "marketing") {
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
          <span className="section-label">Our Capabilities</span>
          <h2 className="section-title">Four capabilities. One accountable partner.</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '700px', margin: '1rem auto 0' }}>
            Strategy without execution stays on paper. Technology without adoption becomes cost. People without structure cannot perform at scale. We bring these together through one accountable team.
          </p>
        </motion.div>

        {/* Services Card Grid */}
        <div className="services-grid">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            const cardContent = (
              <>
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
                    <div className="title-row" style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-start' }}>
                      <h3 className="service-title" style={{ fontSize: '1.25rem', color: 'var(--primary)', fontWeight: '800' }}>{service.titleEn}</h3>
                      <span className="service-arabic" style={{ fontSize: '0.8rem', color: 'var(--secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{service.subtitle}</span>
                    </div>
                    <p className="service-desc" style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem', lineHeight: '1.5' }}>{service.desc}</p>
                    
                    {service.items && service.items.length > 0 && (
                      <ul className="service-list" style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                        {service.items.map((item, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                            <span className="gold-bullet" style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="learn-more-action-trigger" style={{ marginTop: '1.5rem' }}>
                    <span>{service.path === '#' ? 'Apply for a strategy session' : 'Inspect Details'}</span>
                    <ArrowRight size={16} className="arrow-trig" />
                  </div>
                </div>
              </>
            );

            if (service.path.startsWith('/')) {
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
                  {cardContent}
                </MotionLink>
              );
            } else {
              return (
                <motion.div 
                  key={service.id}
                  onClick={() => window.dispatchEvent(new CustomEvent('open-strategy-modal'))}
                  className="service-card"
                  onMouseMove={handleMouseMove}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ type: "spring", bounce: 0.15, duration: 0.9, delay: index * 0.08 }}
                  style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
                >
                  {cardContent}
                </motion.div>
              );
            }
          })}
        </div>

        {/* Bottom Banner */}
        <motion.div 
          className="services-banner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '3rem 2rem', gap: '1.5rem' }}
        >
          <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px' }}>
            <p style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1.5rem', color: '#fff', lineHeight: '1.6' }}>
              From the first operational audit to the final system deployment — one team, one point of accountability, one standard of completion.
            </p>
            <a 
              href="#readiness-score" 
              className="btn btn-primary"
              style={{ background: 'var(--secondary)', color: 'var(--primary)', border: 'none', display: 'inline-flex', padding: '0.85rem 2.25rem' }}
            >
              Take the Business Assessment
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
