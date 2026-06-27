import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AnimatedStat = ({ text, duration = 800 }) => {
  const [displayValue, setDisplayValue] = useState(text);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          startAnimation();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [text]);

  const startAnimation = () => {
    const match = text.match(/([0-9.]+)/);
    if (!match) {
      setDisplayValue(text);
      return;
    }
    const numStr = match[0];
    const target = parseFloat(numStr);
    const prefix = text.substring(0, match.index);
    const suffix = text.substring(match.index + numStr.length);

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentVal = Math.floor(progress * target);
      setDisplayValue(`${prefix}${currentVal}${suffix}`);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(text);
      }
    };
    window.requestAnimationFrame(step);
  };

  return <span ref={elementRef}>{displayValue}</span>;
};


// SVG Illustration for Healthcare
const HealthcareIllustration = ({ style }) => (
  <svg viewBox="0 0 120 120" style={{ width: '44px', height: '44px', flexShrink: 0, ...style }}>
    <motion.path
      d="M45,25 L75,25 L75,45 L95,45 L95,75 L75,75 L75,95 L45,95 L45,75 L25,75 L25,45 L45,45 Z"
      fill="rgba(24,79,91,0.04)"
      stroke="var(--primary)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    />
    <motion.path
      d="M35,60 L85,60"
      stroke="var(--secondary)"
      strokeWidth="2.5"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.5 }}
    />
    <motion.path
      d="M60,35 L60,85"
      stroke="var(--secondary)"
      strokeWidth="2.5"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.5 }}
    />
  </svg>
);

// SVG Illustration for Real Estate
const RealEstateIllustration = ({ style }) => (
  <svg viewBox="0 0 120 120" style={{ width: '44px', height: '44px', flexShrink: 0, ...style }}>
    <motion.path
      d="M20,90 L20,50 L60,20 L100,50 L100,90 Z"
      fill="rgba(202,169,76,0.04)"
      stroke="var(--primary)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    />
    <motion.path
      d="M45,90 L45,65 L75,65 L75,90"
      fill="none"
      stroke="var(--secondary)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
    />
    <motion.line
      x1="15" y1="90" x2="105" y2="90"
      stroke="var(--primary)"
      strokeWidth="2"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1 }}
    />
  </svg>
);

// SVG Illustration for Retail/E-Commerce
const RetailIllustration = ({ style }) => (
  <svg viewBox="0 0 120 120" style={{ width: '44px', height: '44px', flexShrink: 0, ...style }}>
    <motion.path
      d="M30,40 L90,40 L85,80 L35,80 Z"
      fill="rgba(24,79,91,0.04)"
      stroke="var(--primary)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    />
    <motion.path
      d="M45,40 Q60,20 75,40"
      fill="none"
      stroke="var(--secondary)"
      strokeWidth="2.5"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.5 }}
    />
    <circle cx="50" cy="60" r="4" fill="var(--secondary)" />
    <circle cx="70" cy="60" r="4" fill="var(--primary)" />
    <motion.line
      x1="45" y1="70" x2="75" y2="70"
      stroke="rgba(24,79,91,0.2)"
      strokeWidth="2"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1 }}
    />
  </svg>
);

// SVG Illustration for Logistics
const LogisticsIllustration = ({ style }) => (
  <svg viewBox="0 0 120 120" style={{ width: '44px', height: '44px', flexShrink: 0, ...style }}>
    <motion.rect
      x="20" y="40" width="55" height="40" rx="4"
      fill="none"
      stroke="var(--primary)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    />
    <motion.path
      d="M75,50 L95,50 L100,60 L100,80 L75,80"
      fill="rgba(202,169,76,0.05)"
      stroke="var(--secondary)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.4 }}
    />
    <circle cx="40" cy="80" r="8" fill="var(--primary)" />
    <circle cx="85" cy="80" r="8" fill="var(--primary)" />
    <motion.line
      x1="30" y1="55" x2="65" y2="55"
      stroke="rgba(24,79,91,0.2)"
      strokeWidth="2"
      strokeDasharray="4 4"
      initial={{ x: -10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1 }}
    />
  </svg>
);

// SVG Illustration for Construction
const ConstructionIllustration = ({ style }) => (
  <svg viewBox="0 0 120 120" style={{ width: '44px', height: '44px', flexShrink: 0, ...style }}>
    <motion.path
      d="M25,90 L25,30 L85,30"
      fill="none"
      stroke="var(--primary)"
      strokeWidth="2.5"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    />
    <motion.path
      d="M25,45 L85,30 L85,45 Z"
      fill="rgba(24,79,91,0.04)"
      stroke="var(--secondary)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.4 }}
    />
    <motion.path
      d="M50,90 L50,45"
      stroke="rgba(24,79,91,0.2)"
      strokeWidth="1.5"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.8 }}
    />
    <motion.path
      d="M75,90 L75,45"
      stroke="rgba(24,79,91,0.2)"
      strokeWidth="1.5"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.8 }}
    />
    <motion.line
      x1="15" y1="90" x2="105" y2="90"
      stroke="var(--primary)"
      strokeWidth="2"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1 }}
    />
  </svg>
);

// SVG Illustration for Manufacturing
const ManufacturingIllustration = ({ style }) => (
  <svg viewBox="0 0 120 120" style={{ width: '44px', height: '44px', flexShrink: 0, ...style }}>
    <motion.circle
      cx="60" cy="60" r="25"
      fill="rgba(24,79,91,0.04)"
      stroke="var(--primary)"
      strokeWidth="2.5"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    />
    <motion.circle
      cx="60" cy="60" r="10"
      fill="none"
      stroke="var(--secondary)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
    />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <motion.rect
        key={i}
        x="56" y="27" width="8" height="12" rx="1"
        fill="var(--primary)"
        style={{ originX: '60px', originY: '60px', rotate: angle }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 + i * 0.05 }}
      />
    ))}
  </svg>
);

// SVG Illustration for Government
const GovernmentIllustration = ({ style }) => (
  <svg viewBox="0 0 120 120" style={{ width: '44px', height: '44px', flexShrink: 0, ...style }}>
    <motion.polygon
      points="60,20 20,45 100,45"
      fill="rgba(24,79,91,0.04)"
      stroke="var(--primary)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    />
    {[35, 60, 85].map((x, i) => (
      <motion.rect
        key={i}
        x={x - 4} y="45" width="8" height="35"
        fill="none"
        stroke="var(--secondary)"
        strokeWidth="1.5"
        initial={{ scaleY: 0, originY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 + i * 0.2 }}
      />
    ))}
    <motion.line
      x1="15" y1="80" x2="105" y2="80"
      stroke="var(--primary)"
      strokeWidth="2.5"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1.2 }}
    />
  </svg>
);

// SVG Illustration for Corporate
const CorporateIllustration = ({ style }) => (
  <svg viewBox="0 0 120 120" style={{ width: '44px', height: '44px', flexShrink: 0, ...style }}>
    <motion.rect
      x="25" y="45" width="70" height="45" rx="3"
      fill="rgba(202,169,76,0.04)"
      stroke="var(--primary)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    />
    <motion.path
      d="M45,45 L45,35 Q60,25 75,35 L75,45"
      fill="none"
      stroke="var(--secondary)"
      strokeWidth="2.5"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.6 }}
    />
    <circle cx="45" cy="65" r="3" fill="var(--secondary)" />
    <circle cx="75" cy="65" r="3" fill="var(--primary)" />
    <motion.path
      d="M45,65 Q60,80 75,65"
      fill="none"
      stroke="rgba(24,79,91,0.2)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 1 }}
    />
  </svg>
);

// Easily editable, removable or reorderable industries config
const INDUSTRIES_DATA = [
  {
    illustration: <HealthcareIllustration />,
    title: 'Healthcare',
    desc: 'Advanced diagnostics integration and secure digital workflow automation.',
    path: '/industries/healthcare'
  },
  {
    illustration: <RealEstateIllustration />,
    title: 'Real Estate',
    desc: 'PropTech infrastructure, transaction management, and portfolio analytics.',
    path: '/industries/real-estate'
  },
  {
    illustration: <LogisticsIllustration />,
    title: 'Logistics & Supply Chain',
    desc: 'Integrated fleet management, real-time tracking, and supply chain optimization.',
    path: '/industries/logistics'
  },
  {
    illustration: <RetailIllustration />,
    title: 'E-Commerce',
    desc: 'Scalable digital retail platforms with deep ERP and inventory synchronization.',
    path: '/industries/ecommerce'
  },
  {
    illustration: <ConstructionIllustration />,
    title: 'Construction',
    desc: 'Comprehensive project tracking, resource planning, and compliance systems.',
    path: '/industries/construction'
  },
  {
    illustration: <ManufacturingIllustration />,
    title: 'Manufacturing',
    desc: 'Intelligent inventory control, custom ERP platforms, and maintenance planning.',
    path: '/industries/manufacturing'
  },
  {
    illustration: <GovernmentIllustration />,
    title: 'Government & Public Sector',
    desc: 'Secure public sector portals and digital governance solutions.',
    path: '/industries/government'
  },
  {
    illustration: <CorporateIllustration />,
    title: 'Professional Services',
    desc: 'Enterprise resource planning, corporate CRM, and data security.',
    path: '/industries/professional-services'
  }
];

const About = () => {
  const navigate = useNavigate();
  return (
    <section id="about" className="about-narrative-section" style={{ padding: '3.5rem 0' }}>
      <div className="container">
        
        {/* ─── Why Tadbeer Exists ─── */}
        <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem' }}>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.1, duration: 1.2 }}
            style={{ marginBottom: '2.5rem' }}
          >
            <span className="section-label">Why Tadbeer Exists</span>
            <h2 className="section-title" style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>We Build Systems That Outlast Us.</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.1, duration: 1.2, delay: 0.2 }}
            style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', textAlign: 'center' }}
          >
            <p style={{ marginBottom: '1.5rem' }}>Businesses across Oman and the GCC don’t fail because they lack ambition; they stall because their internal systems cannot support their growth.</p>
            <p>At Tadbeer, we do not just deliver consultancy decks. We architect the underlying digital infrastructure, optimize human capital, and deploy the growth systems required for organizations to scale profitably and predictably.</p>
          </motion.div>
        </div>

        {/* ─── Values ─── */}
        <div style={{ marginBottom: '5rem' }}>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.1, duration: 1.2 }}
            style={{ marginBottom: '3.5rem' }}
          >
            <span className="section-label">Industry Expertise</span>
            <h2 className="section-title">Driving Sector-Specific Transformation.</h2>
          </motion.div>

          <div className="industries-panel">
            <div className="industries-compact-grid">
              {INDUSTRIES_DATA.map((v, i) => (
                <motion.div
                  key={i}
                  className="industry-compact-item"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", bounce: 0.1, duration: 0.8, delay: i * 0.05 }}
                  whileHover={{ x: 6, scale: 1.02 }}
                  onClick={() => {
                    navigate(v.path);
                    window.scrollTo(0, 0);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="industry-icon-box">
                    {v.illustration}
                  </div>
                  <div className="industry-info">
                    <h4 className="industry-name">{v.title}</h4>
                    <p className="industry-text">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Key Metrics ─── */}
        <div className="company-stats-strip">
          {[
            { metric: "Multiple", label: "Active GCC Clients", desc: "Trusted by leading enterprises across the region", delay: 0.1 },
            { metric: "Proven", label: "Systems Delivered", desc: "Scalable infrastructures and operational frameworks", delay: 0.2 },
            { metric: "Strategic", label: "Client Capital Guided", desc: "Maximizing resource efficiency and strategic ROI", delay: 0.3 },
            { metric: "Vision 2040", label: "Omanization Aligned", desc: "Committed to the Sultanate's long-term economic objectives", delay: 0.4 }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              className="stat-box-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.15, duration: 1.0, delay: stat.delay }}
            >
              <h3 className="stat-value-digits"><AnimatedStat text={stat.metric} /></h3>
              <h4 className="stat-label-title">{stat.label}</h4>
              <p className="stat-description-info">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
