import React from 'react';
import { motion } from 'framer-motion';

// SVG Illustration for Retail
const RetailIllustration = () => (
  <svg viewBox="0 0 120 120" style={{ width: '80px', height: '80px', marginBottom: '1.25rem' }}>
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
const LogisticsIllustration = () => (
  <svg viewBox="0 0 120 120" style={{ width: '80px', height: '80px', marginBottom: '1.25rem' }}>
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

// SVG Illustration for Government
const GovernmentIllustration = () => (
  <svg viewBox="0 0 120 120" style={{ width: '80px', height: '80px', marginBottom: '1.25rem' }}>
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
const CorporateIllustration = () => (
  <svg viewBox="0 0 120 120" style={{ width: '80px', height: '80px', marginBottom: '1.25rem' }}>
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

const About = () => {
  const industries = [
    { illustration: <RetailIllustration />, title: 'Retail & E-Commerce', desc: 'Scalable omnichannel platforms with deep ERP integrations and dynamic inventory systems.' },
    { illustration: <LogisticsIllustration />, title: 'Logistics & Supply Chain', desc: 'Custom fleet management, real-time tracking, and automated supply chain operations.' },
    { illustration: <GovernmentIllustration />, title: 'Government & Public Sector', desc: 'Secure, high-compliance portals and digital governance solutions for Oman Vision 2040.' },
    { illustration: <CorporateIllustration />, title: 'Corporate & Enterprise', desc: 'Enterprise-grade resource planning, custom CRM, and secure data infrastructure.' },
  ];

  return (
    <section id="about" className="about-narrative-section" style={{ padding: '3.5rem 0' }}>
      <div className="container">
        
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
            <span className="section-label">Industries Served</span>
            <h2 className="section-title">Perfectly Effect Based.</h2>
          </motion.div>

          <div className="values-grid">
            {industries.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.8, delay: i * 0.08 }}
                whileHover={{ 
                  y: -8,
                  borderColor: 'var(--secondary)',
                  boxShadow: '0 12px 30px rgba(202, 169, 76, 0.08)' 
                }}
                style={{ 
                  padding: '2.25rem 1.5rem', 
                  background: 'white', 
                  borderRadius: 'var(--radius)', 
                  border: '1px solid var(--border)', 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  cursor: 'pointer'
                }}
              >
                <motion.div 
                  whileHover={{ scale: 1.12, rotate: [0, -2, 2, 0] }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  {v.illustration}
                </motion.div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '0.75rem', fontWeight: '700' }}>{v.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── Key Metrics ─── */}
        <div className="company-stats-strip">
          {[
            { metric: "15+", label: "Active GCC Clients", desc: "Leading entities in F&B, Logistics, and Governance", delay: 0.1 },
            { metric: "40+", label: "Transforms Delivered", desc: "Custom systems implemented, fully operational", delay: 0.2 },
            { metric: "1M+ OMR", label: "Client Capital Guided", desc: "Ensuring high-efficiency, maximum return pipelines", delay: 0.3 },
            { metric: "Vision 2040", label: "Compliance Benchmark", desc: "Strictly aligned with national business standards", delay: 0.4 }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              className="stat-box-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.15, duration: 1.0, delay: stat.delay }}
            >
              <h3 className="stat-value-digits">{stat.metric}</h3>
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
