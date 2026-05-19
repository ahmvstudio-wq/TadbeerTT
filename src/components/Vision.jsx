import React from 'react';
import { motion } from 'framer-motion';

const Vision = () => {
  const steps = [
    { title: "Initial Consultation", desc: "Understanding your goals and challenges", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
    { title: "Expert Analysis", desc: "Identifying opportunities with senior specialists", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
    { title: "Tailored Roadmap", desc: "AI-driven strategies aligned with your vision", icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" },
    { title: "Implementation Support", desc: "Hands-on execution with ongoing monitoring", icon: "M13 10V3L4 14h7v7l9-11h-7z" }
  ];

  return (
    <section className="journey-section" style={{ background: 'var(--bg)', color: 'var(--text-main)', padding: '8rem 5%' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.h4 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Journey of Transformation
          </motion.h4>
          <motion.h2 
            className="section-title" 
            style={{ color: 'var(--primary)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
          >
            Precision, partnership, and progress
          </motion.h2>
        </div>

        {/* Interactive Breakdown of the 4 Steps */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', position: 'relative' }}>
          {/* Animated Connector Line */}
          <div style={{ position: 'absolute', top: '40px', left: '10%', right: '10%', height: '2px', background: 'var(--border)', zIndex: 0, display: window.innerWidth > 768 ? 'block' : 'none' }}>
            <motion.div 
              style={{ height: '100%', background: 'var(--secondary)' }}
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              style={{ position: 'relative', zIndex: 1, textAlign: 'center', background: 'var(--bg-alt)', padding: '2rem 1.5rem', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}
            >
              <motion.div 
                style={{ 
                  width: '80px', height: '80px', borderRadius: '50%', background: 'var(--primary)', color: 'var(--secondary)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.5rem', border: '4px solid var(--bg)', boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}
                whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={step.icon} />
                </svg>
              </motion.div>
              <div style={{ position: 'absolute', top: '-15px', right: '-15px', width: '40px', height: '40px', borderRadius: '50%', background: 'var(--secondary)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', border: '4px solid var(--bg)' }}>
                {index + 1}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>{step.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Guided By Vision Section */}
        <div style={{ marginTop: '8rem', display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr', gap: '4rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ width: '60px', height: '4px', background: 'var(--secondary)', marginBottom: '1.5rem' }} />
            <h2 className="section-title" style={{ color: 'var(--primary)' }}>Guided by Vision,<br/>Driven by Results</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginTop: '1rem' }}>Turning high-level ambition into measurable, systemic impact.</p>
          </motion.div>
          
          <div style={{ display: 'grid', gap: '2rem' }}>
            {[
              { title: 'Global Expertise & Local Focus', desc: 'We blend international best practices with a deep understanding of Omani market realities.', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
              { title: 'Holistic Consulting', desc: 'We look at the whole picture to solve root causes, not just symptoms.', icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6' },
              { title: 'Smart AI Integration', desc: 'We use AI tools to speed up research, automate processes, and enhance decision-making.', icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                style={{ display: 'flex', gap: '1.5rem', background: 'var(--bg-alt)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)' }}
                whileHover={{ x: -10, borderColor: 'var(--secondary)' }}
              >
                <div style={{ width: '48px', height: '48px', flexShrink: 0, borderRadius: '8px', background: 'rgba(202,169,76,0.1)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={item.icon}/></svg>
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
