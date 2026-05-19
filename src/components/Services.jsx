import React from 'react';
import { motion } from 'framer-motion';

const AnimatedIcon = ({ type }) => {
  if (type === 'erp') {
    return (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <motion.rect x="15" y="15" width="12" height="12" rx="2" stroke="var(--secondary)" strokeWidth="2"
          initial={{ y: -5, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}
        />
        <motion.rect x="33" y="15" width="12" height="12" rx="2" stroke="var(--primary)" strokeWidth="2"
          initial={{ y: -5, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
        />
        <motion.rect x="15" y="33" width="12" height="12" rx="2" stroke="var(--primary)" strokeWidth="2"
          initial={{ y: 5, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
        />
        <motion.rect x="33" y="33" width="12" height="12" rx="2" stroke="var(--tertiary)" strokeWidth="2"
          initial={{ y: 5, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
        />
        <motion.path d="M 27 21 L 33 21 M 21 27 L 21 33 M 39 27 L 39 33 M 27 39 L 33 39" stroke="var(--border)" strokeWidth="2"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.6 }}
        />
      </svg>
    );
  }
  if (type === 'ai') {
    return (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <motion.circle cx="30" cy="30" r="16" stroke="var(--primary)" strokeWidth="2" strokeDasharray="4 4"
          animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle cx="30" cy="30" r="8" fill="var(--secondary)"
          animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.path d="M 30 6 L 30 14 M 30 46 L 30 54 M 6 30 L 14 30 M 46 30 L 54 30" stroke="var(--primary)" strokeWidth="2"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}
        />
      </svg>
    );
  }
  if (type === 'talent') {
    return (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <motion.circle cx="30" cy="20" r="8" stroke="var(--primary)" strokeWidth="2"
          initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
        />
        <motion.path d="M 16 44 C 16 36, 22 32, 30 32 C 38 32, 44 36, 44 44" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.3 }}
        />
        <motion.path d="M 40 24 L 46 18 L 52 24" stroke="var(--tertiary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}
        />
        <motion.path d="M 46 28 L 46 18" stroke="var(--tertiary)" strokeWidth="2" strokeLinecap="round"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.6 }}
        />
      </svg>
    );
  }
  if (type === 'marketing') {
    return (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <motion.path d="M 10 45 L 25 30 L 35 40 L 50 15" stroke="var(--secondary)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }}
        />
        <motion.circle cx="50" cy="15" r="4" fill="var(--tertiary)"
          initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1 }}
        />
        <motion.path d="M 10 50 L 50 50" stroke="var(--border)" strokeWidth="2" strokeLinecap="round" />
        <motion.path d="M 10 10 L 10 50" stroke="var(--border)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
};

const Services = () => {
  const servicesData = [
    {
      type: 'erp',
      titleEn: 'Strategic Growth & Operations',
      titleAr: 'النمو الاستراتيجي والعمليات',
      desc: 'Seamlessly align your enterprise resources. We deploy robust ERP systems, streamline financial planning, and integrate organizational data to scale operations.',
      items: ['ERP Implementation & Integration', 'Financial Planning', 'Strategic Sustainability']
    },
    {
      type: 'ai',
      titleEn: 'Technology & Intelligent Systems',
      titleAr: 'التقنية والأنظمة الذكية',
      desc: 'Automate for the future. Implementing AI-powered tools, Visitor Management Systems, and CRM/LMS platforms that reduce friction and increase clarity.',
      items: ['AI-Powered Automation', 'CRM & LMS Platforms', 'Visitor Management (VMS)']
    },
    {
      type: 'talent',
      titleEn: 'People & Talent Transformation',
      titleAr: 'تحويل الأفراد والمهارات',
      desc: 'Empowering the next generation of Omani leaders. We build resilient HR systems, clear career pathways, and targeted recruitment strategies.',
      items: ['Training & Skills Development', 'Recruitment & Onboarding', 'HR Systems & Pathways']
    },
    {
      type: 'marketing',
      titleEn: 'Marketing & Customer Growth',
      titleAr: 'التسويق ونمو العملاء',
      desc: 'Expand your market share across the GCC. Data-driven brand strategies, high-conversion campaigns, and deep customer insights.',
      items: ['Brand Strategy & Positioning', 'Digital Campaign Management', 'Customer Insights']
    }
  ];

  return (
    <section id="services" className="services-section" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <motion.h4 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Our Solutions
          </motion.h4>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
          >
            Comprehensive Digital Transformation
          </motion.h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
          {servicesData.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              style={{ 
                display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? (index % 2 === 0 ? '1fr 1fr' : '1fr 1fr') : '1fr', 
                gap: '3rem', alignItems: 'center',
                background: 'var(--bg)', padding: '3rem', borderRadius: '16px', border: '1px solid var(--border)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
              }}
            >
              <div style={{ order: window.innerWidth > 768 && index % 2 !== 0 ? 2 : 1 }}>
                <div style={{ width: '80px', height: '80px', background: 'var(--bg-alt)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid var(--border)' }}>
                  <AnimatedIcon type={service.type} />
                </div>
                <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{service.titleEn}</h3>
                <p style={{ fontFamily: 'var(--font-ar)', color: 'var(--primary-light)', fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: '600' }}>
                  {service.titleAr}
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
                  {service.desc}
                </p>
                <ul style={{ display: 'grid', gap: '1rem' }}>
                  {service.items.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.05rem', fontWeight: '500' }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(202,169,76,0.1)', color: 'var(--secondary)' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              {/* Illustration Side */}
              <div style={{ order: window.innerWidth > 768 && index % 2 !== 0 ? 1 : 2, height: '100%', minHeight: '300px', background: 'var(--primary)', borderRadius: '12px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                
                {/* Specific Illustrations per card */}
                {service.type === 'erp' && (
                  <motion.div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', width: '60%' }}>
                    <motion.div animate={{ x: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 4 }} style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 'bold' }}>DATA WAREHOUSE</span>
                      <span style={{ color: 'var(--secondary)' }}>100%</span>
                    </motion.div>
                    <motion.div animate={{ x: [5, -5, 5] }} transition={{ repeat: Infinity, duration: 4.5 }} style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 'bold' }}>HRMS SYNC</span>
                      <span style={{ color: 'var(--tertiary)' }}>ACTIVE</span>
                    </motion.div>
                    <motion.div animate={{ x: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 5 }} style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 'bold' }}>FINANCIAL LEDGER</span>
                      <span style={{ color: 'var(--secondary)' }}>SECURE</span>
                    </motion.div>
                  </motion.div>
                )}
                
                {service.type === 'ai' && (
                  <motion.div style={{ position: 'relative', zIndex: 1, width: '150px', height: '150px' }}>
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: 'linear' }} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: '2px dashed rgba(202,169,76,0.5)', borderRadius: '50%' }}></motion.div>
                    <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 15, ease: 'linear' }} style={{ position: 'absolute', top: '15%', left: '15%', width: '70%', height: '70%', border: '2px solid rgba(24,79,91,0.5)', borderRadius: '50%' }}></motion.div>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', fontWeight: 'bold', fontSize: '1.5rem', letterSpacing: '2px' }}>AI</div>
                  </motion.div>
                )}

                {service.type === 'talent' && (
                  <motion.div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '1rem', alignItems: 'flex-end', height: '100px' }}>
                    {[40, 70, 50, 90, 60].map((h, i) => (
                      <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} transition={{ duration: 1, delay: i * 0.2 }} style={{ width: '20px', background: i === 3 ? 'var(--secondary)' : 'rgba(255,255,255,0.2)', borderRadius: '4px 4px 0 0' }} />
                    ))}
                  </motion.div>
                )}

                {service.type === 'marketing' && (
                  <motion.div style={{ position: 'relative', zIndex: 1 }}>
                    <svg width="200" height="150" viewBox="0 0 200 150">
                      <motion.path d="M 20 130 C 60 130, 80 50, 180 30" fill="none" stroke="var(--secondary)" strokeWidth="4" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeOut" }} />
                      <motion.circle cx="180" cy="30" r="8" fill="var(--tertiary)" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.5 }} />
                    </svg>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
