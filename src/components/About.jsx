import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="journey-section" style={{ overflow: 'hidden' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ position: 'relative', zIndex: 10 }}
        >
          <h4 className="section-subtitle">Our Journey</h4>
          <h2 className="section-title">Transforming today, empowering tomorrow</h2>
        </motion.div>

        <div className="journey-grid" style={{ position: 'relative' }}>
          {/* Background Animated Graphic for About Section */}
          <motion.div 
            style={{ position: 'absolute', right: '-10%', top: '-20%', opacity: 0.1, pointerEvents: 'none' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <svg width="400" height="400" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="var(--secondary)" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="var(--tertiary)" strokeWidth="1" />
              <circle cx="50" cy="50" r="15" fill="none" stroke="var(--bg)" strokeWidth="1" strokeDasharray="2 2" />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative', zIndex: 10 }}
          >
            <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--text-main)', lineHeight: '1.8' }}>
              Founded in Muscat with a clear vision: Empowering Omani businesses to scale globally. We listen deeply, analyze wisely, and execute precisely.
            </p>
            <p style={{ fontSize: '1.125rem', marginBottom: '2.5rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
              Committed to Oman's sustainable future, we bring proven expertise across the GCC market to build next-gen Omani leaders and a stronger community.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { title: 'People First', ar: 'الإنسان أولاً', delay: 0.4 },
                { title: 'Process with Clarity', ar: 'العمليات بوضوح', delay: 0.5 },
                { title: 'Sustainability', ar: 'الاستدامة', delay: 0.6 }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: item.delay }}
                  style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: 'var(--bg-alt)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)' }}
                >
                  <div style={{ padding: '0.5rem 1rem', background: 'var(--secondary)', color: 'var(--bg-alt)', fontWeight: 'bold', borderRadius: '4px', minWidth: '180px', textAlign: 'center' }}>
                    {item.title}
                  </div>
                  <div style={{ color: 'var(--primary)', fontFamily: 'var(--font-ar)', fontSize: '1.25rem', fontWeight: '600' }}>
                    {item.ar}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="journey-stats"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ position: 'relative', zIndex: 10 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} className="stat-item glass-panel" style={{ background: 'rgba(202,169,76,0.1)', border: '1px solid rgba(202,169,76,0.3)' }}>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }} className="stat-number">10+</motion.div>
              <div style={{ color: 'var(--text-main)', fontWeight: '500' }}>Clients in 3 Months</div>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} className="stat-item glass-panel" style={{ background: 'rgba(24,79,91,0.1)', border: '1px solid rgba(24,79,91,0.3)' }}>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }} className="stat-number" style={{ color: 'var(--tertiary)' }}>100%</motion.div>
              <div style={{ color: 'var(--text-main)', fontWeight: '500' }}>Market Trust (الثقة)</div>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} className="stat-item glass-panel" style={{ gridColumn: '1 / -1', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', right: '-10%', top: '-50%', width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(202,169,76,0.2) 0%, transparent 70%)', filter: 'blur(20px)' }} />
              <h3 style={{ color: 'var(--primary)', marginBottom: '0.75rem', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                Oman Vision 2040
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                Fully aligned with the national identity and global growth strategy. Building long-term models that balance profitability with responsibility.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
