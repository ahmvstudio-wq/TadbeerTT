import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, AppWindow, Network, TrendingUp, GitMerge, Terminal, Cpu } from 'lucide-react';

const servicesData = [
  {
    id: "technology",
    titleEn: "Software Solutions",
    subtitle: "Enterprise systems that scale",
    desc: "We start with process, then configure technology around it so teams adopt it and outcomes are measurable.",
    icon: AppWindow,
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
    desc: "We build and integrate AI agents and forecasting models to automate repetitive work, analyze operations, and accelerate growth.",
    icon: Network,
    items: [
      "Process analysis and AI transformation audits.",
      "Custom AI agents built for GCC business operations.",
      "Automated document processing and OCR diagnostics.",
      "Demand forecasting and inventory optimization models.",
      "Executive reporting dashboards."
    ],
    path: "/services/ai-technology"
  },
  {
    id: "marketing",
    titleEn: "Digital Marketing",
    subtitle: "Systems that acquire customers",
    desc: "We build customer acquisition systems with clear metrics, direct attribution, and optimized conversion pathways.",
    icon: TrendingUp,
    items: [
      "Lead generation and conversion strategy.",
      "Paid advertising management (Google, Meta, LinkedIn).",
      "Marketing CRM integrations.",
      "B2B account-based marketing pipelines.",
      "Analytics dashboards with live conversion attribution."
    ],
    path: "/services/digital-marketing"
  },
  {
    id: "people",
    titleEn: "Human Capital",
    subtitle: "SOPs and talent development",
    desc: "We build internal structures, define clear accountabilities, and design onboarding models so your team can execute daily operations.",
    icon: GitMerge,
    items: [
      "Organizational design and SOP development.",
      "Omanization compliance strategies.",
      "B2B recruitment and talent sourcing support.",
      "HR policy audits and structural alignments.",
      "Workforce performance monitoring frameworks."
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

// Interactive Dashboard Overlays for cards (highly visual, satisfying, animated)
const ServiceSVGOverlay = ({ type }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, [isMobile]);

  if (isMobile) return null;

  if (type === "technology") {
    return (
      <div style={{ width: '100%', height: '100%', padding: '1rem', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-around', background: 'rgba(255, 255, 255, 0.02)', boxSizing: 'border-box' }}>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes packageMove {
            0% { transform: translateX(-35px); opacity: 0; }
            15% { opacity: 1; }
            85% { opacity: 1; }
            100% { transform: translateX(35px); opacity: 0; }
          }
        `}} />
        {/* Minimalist Database Modules */}
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ 
            width: '28px', 
            height: '42px', 
            borderRadius: '6px', 
            border: activeStep === i ? '1.5px solid var(--secondary)' : '1px solid rgba(255, 255, 255, 0.15)', 
            background: activeStep === i ? 'rgba(202, 169, 76, 0.08)' : 'rgba(255, 255, 255, 0.02)',
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
            padding: '4px',
            transition: 'all 0.3s ease',
            boxShadow: activeStep === i ? '0 0 10px rgba(202, 169, 76, 0.2)' : 'none',
            zIndex: 1
          }}>
            <div style={{ width: '100%', height: '4px', borderRadius: '1px', background: activeStep === i ? 'var(--secondary)' : 'rgba(255, 255, 255, 0.15)' }} />
            <div style={{ width: '60%', height: '3px', borderRadius: '1px', background: 'rgba(255, 255, 255, 0.1)' }} />
            <div style={{ width: '80%', height: '3px', borderRadius: '1px', background: 'rgba(255, 255, 255, 0.1)' }} />
          </div>
        ))}

        {/* Floating package lines in between database cards */}
        <div style={{ position: 'absolute', width: '70px', height: '2px', borderTop: '2px dashed rgba(255, 255, 255, 0.1)', top: '50%', left: 'calc(50% - 35px)', zIndex: 0 }} />
        <div style={{ 
          position: 'absolute', 
          width: '5px', 
          height: '5px', 
          borderRadius: '50%', 
          background: 'var(--secondary)', 
          top: 'calc(50% - 3px)', 
          left: '50%',
          animation: 'packageMove 2s infinite linear',
          boxShadow: '0 0 8px var(--secondary)',
          zIndex: 0
        }} />
      </div>
    );
  }

  if (type === "ai") {
    const phrases = [
      '[AI] Scanning business bottlenecks...',
      '[AI] Processing forecasting matrix...',
      '[AI] Mapping supplier lead pathways...',
      '[AI] Optimizing ROI yields: +34% projected.'
    ];
    return (
      <div style={{ width: '100%', height: '100%', padding: '0.85rem', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'white', boxSizing: 'border-box' }}>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes brainWave {
            0% { transform: scale(0.9); opacity: 0.6; }
            50% { transform: scale(1.15); opacity: 1; filter: drop-shadow(0 0 8px var(--secondary)); }
            100% { transform: scale(0.9); opacity: 0.6; }
          }
        `}} />
        {/* Brain Visualizer */}
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', animation: 'brainWave 3s infinite ease-in-out' }}>
          <Network size={22} color="var(--primary)" />
        </div>

        {/* Live Status and Console */}
        <div style={{ flex: 1, marginLeft: '0.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '3px', fontFamily: 'monospace' }}>
          <div style={{ fontSize: '0.62rem', color: 'var(--secondary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Cognitive Agent Stream</div>
          <div style={{ fontSize: '0.65rem', color: 'white', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
            {phrases[activeStep]}
          </div>
          <div style={{ display: 'flex', gap: '3px', marginTop: '2px' }}>
            {[0, 1, 2, 3].map(i => (
              <div key={i} style={{ width: '12px', height: '4px', borderRadius: '1px', background: i === activeStep ? 'var(--secondary)' : 'rgba(255,255,255,0.1)', transition: 'background 0.3s' }} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "marketing") {
    return (
      <div style={{ width: '100%', height: '100%', padding: '0.85rem', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: 'white', boxSizing: 'border-box' }}>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes chartDraw {
            0% { stroke-dashoffset: 160; }
            100% { stroke-dashoffset: 0; }
          }
          @keyframes pulsePoint {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.3); opacity: 1; }
          }
        `}} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)', fontWeight: '600' }}>Real-time Conversion Analytics</span>
          <span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: '700' }}>+140% Growth</span>
        </div>

        {/* Vector SVG Line Chart */}
        <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'flex-end', margin: '4px 0' }}>
          <svg viewBox="0 0 160 50" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
            {/* Gridlines */}
            <line x1="0" y1="10" x2="160" y2="10" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <line x1="0" y1="30" x2="160" y2="30" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            
            {/* Chart Area Gradient */}
            <path d="M0,45 Q40,35 80,20 T160,5 L160,50 L0,50 Z" fill="rgba(202, 169, 76, 0.08)" />
            
            {/* Chart Line */}
            <path 
              d="M0,45 Q40,35 80,20 T160,5" 
              fill="none" 
              stroke="var(--secondary)" 
              strokeWidth="2.5" 
              strokeDasharray="160"
              strokeDashoffset="160"
              style={{ animation: 'chartDraw 2.5s ease-out forwards' }}
            />
            {/* Glowing Interactive Node */}
            <circle cx="160" cy="5" r="4.5" fill="var(--secondary)" style={{ animation: 'pulsePoint 1.5s infinite' }} />
          </svg>
        </div>

        {/* Live KPIs */}
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.62rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '4px' }}>
          <span>Ad Spend: OMR 1,200</span>
          <span style={{ color: 'var(--secondary)', fontWeight: '700' }}>ROI: 4.8x</span>
        </div>
      </div>
    );
  }

  // human capital / people
  return (
    <div style={{ width: '100%', height: '100%', padding: '0.85rem', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: 'white', boxSizing: 'border-box' }}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes nodeExpand {
          0% { stroke-dashoffset: 30; }
          100% { stroke-dashoffset: 0; }
        }
      `}} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)', fontWeight: '600' }}>Omanization Compliance Map</span>
        <span style={{ fontSize: '0.7rem', color: 'var(--secondary)', fontWeight: '700' }}>LEVEL 4 COMPLIANT</span>
      </div>

      {/* Interactive Org Chart visualization */}
      <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '4px 0' }}>
        <svg viewBox="0 0 160 50" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
          {/* Connector lines */}
          <path d="M80,5 L30,25 M80,5 L80,25 M80,5 L130,25 M30,25 L30,45 M130,25 L130,45" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" />
          <path d="M80,5 L30,25 M80,5 L80,25 M80,5 L130,25" fill="none" stroke="var(--secondary)" strokeWidth="1.2" strokeDasharray="5 5" style={{ animation: 'nodeExpand 1.5s linear infinite' }} />

          {/* Root node */}
          <circle cx="80" cy="5" r="4.5" fill="var(--secondary)" />
          
          {/* Layer 1 Nodes */}
          <circle cx="30" cy="25" r="3.5" fill="#10b981" />
          <circle cx="80" cy="25" r="3.5" fill="var(--secondary)" />
          <circle cx="130" cy="25" r="3.5" fill="#10b981" />

          {/* Layer 2 Nodes */}
          <circle cx="30" cy="45" r="2.5" fill="white" />
          <circle cx="130" cy="45" r="2.5" fill="white" />
        </svg>
      </div>

      {/* KPI stats */}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.62rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '4px' }}>
        <span>Talent SOPs: 100%</span>
        <span style={{ color: '#10b981', fontWeight: '700' }}>Omanization: 42%</span>
      </div>
    </div>
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
          
          <h2 className="section-title">Four Capabilities. <span style={{ color: 'var(--secondary)' }}>One Accountable Partner.</span></h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '1.5rem', 
            maxWidth: '1100px', 
            margin: '2.5rem auto 0',
            textAlign: 'left'
          }}>
            {[
              { text: <>Strategy without <span style={{ color: 'var(--secondary)' }}>execution</span> stays on paper.</> },
              { text: <>Technology without <span style={{ color: 'var(--secondary)' }}>adoption</span> becomes a cost.</> },
              { text: <>People without <span style={{ color: 'var(--secondary)' }}>structure</span> cannot perform.</> },
              { text: <>Bring these together through <span style={{ color: 'var(--secondary)' }}>one accountability.</span></>, isLast: true }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ 
                  y: -5, 
                  borderColor: item.isLast ? 'rgba(202, 169, 76, 0.6)' : 'rgba(24, 79, 91, 0.3)',
                  boxShadow: '0 12px 30px rgba(24, 79, 91, 0.06)' 
                }}
                style={{
                  background: item.isLast ? 'linear-gradient(135deg, rgba(202, 169, 76, 0.06) 0%, rgba(24, 79, 91, 0.03) 100%)' : 'rgba(24, 79, 91, 0.02)',
                  border: '1px solid',
                  borderColor: item.isLast ? 'rgba(202, 169, 76, 0.25)' : 'rgba(24, 79, 91, 0.08)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  boxShadow: '0 4px 15px rgba(24, 79, 91, 0.01)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'border-color 0.25s ease, background 0.25s ease'
                }}
              >
                {/* Accent line */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  background: item.isLast ? 'var(--secondary)' : 'var(--primary)',
                  opacity: 0.8
                }} />
                
                <p style={{ 
                  color: 'var(--text)', 
                  fontSize: '0.95rem', 
                  lineHeight: '1.5',
                  margin: 0,
                  fontWeight: '500',
                  paddingLeft: '0.5rem'
                }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Card Grid */}
        <div className="services-grid">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            const cardContent = (
              <>
                {/* Custom Premium Blueprint Vector Graphic (Replaces generic photo) */}
                <div className="card-photo-wrapper" style={{ 
                  height: '200px', 
                  background: 'radial-gradient(circle at 50% 50%, #1c5c6a 0%, var(--primary) 100%)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid rgba(202, 169, 76, 0.15)'
                }}>
                  {/* Grid overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundImage: 'linear-gradient(rgba(202, 169, 76, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(202, 169, 76, 0.05) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    opacity: 0.8
                  }} />

                  {/* Highlight Glow behind the icon */}
                  <div style={{
                    position: 'absolute',
                    width: '90px',
                    height: '90px',
                    background: 'radial-gradient(circle, rgba(202, 169, 76, 0.15) 0%, transparent 70%)',
                    filter: 'blur(10px)'
                  }} />

                  <ServiceSVGOverlay type={service.id} />
                  
                  {/* Floating Icon Node (Large Centered Premium Icon) */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(4px)',
                    border: '1.5px solid rgba(202, 169, 76, 0.4)',
                    borderRadius: '50%',
                    width: '64px',
                    height: '64px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--secondary)',
                    zIndex: 3,
                    boxShadow: '0 8px 30px rgba(0,0,0,0.2), inset 0 0 10px rgba(202,169,76,0.2)',
                    transition: 'transform 0.3s ease, border-color 0.3s ease'
                  }}>
                    <IconComponent size={28} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="service-card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div className="title-row" style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-start' }}>
                      <h3 className="service-title" style={{ fontSize: '1.25rem', color: 'var(--primary)', fontWeight: '800' }}>{service.titleEn}</h3>
                      {["Enterprise systems that scale", "Enterprise AI that delivers results"].includes(service.subtitle) ? (
                        <h2 className="service-arabic" style={{ 
                          fontSize: '0.8rem', 
                          color: 'var(--secondary)', 
                          fontWeight: '600', 
                          textTransform: 'uppercase', 
                          letterSpacing: '0.5px',
                          margin: 0,
                          display: 'inline-block',
                          fontFamily: 'inherit'
                        }}>{service.subtitle}</h2>
                      ) : (
                        <span className="service-arabic" style={{ fontSize: '0.8rem', color: 'var(--secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{service.subtitle}</span>
                      )}
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
                  id={`service-card-${service.id}`}
                  to={service.path}
                  onClick={() => {
                    sessionStorage.setItem('homepage_scroll_pos', window.scrollY.toString());
                  }}
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
                  id={`service-card-${service.id}`}
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
              From the first operational audit to the final system deployment — <span style={{ color: 'var(--secondary)' }}>one team, one point of accountability</span>, one standard of completion.
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
