import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="cta-section" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)', padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Blueprint Grid Overlay for context */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        opacity: 0.7
      }} />

      {/* Decorative subtle lighting */}
      <div style={{
        position: 'absolute', top: '-20%', left: '30%', width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none'
      }} />

      <motion.div 
        className="cta-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '0 1.5rem' }}
      >
        <h2 className="cta-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: '800', color: 'white', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
          Every day businesses are becoming <br /><span style={{ color: 'var(--secondary)' }}>more efficient.</span>
        </h2>
        
        <p className="cta-subtitle" style={{ fontSize: 'clamp(1.05rem, 3vw, 1.25rem)', color: 'rgba(255,255,255,0.7)', fontWeight: '500', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: '1.6' }}>
          The only question is whether yours will be one of them.
        </p>

        <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
          <motion.button 
            onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-strategy-modal')); }}
            whileHover={{ 
              scale: 1.025, 
              y: -2,
              boxShadow: '0 10px 25px rgba(202, 169, 76, 0.3)' 
            }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{ type: 'spring', stiffness: 450, damping: 18 }}
            style={{ 
              textDecoration: 'none', 
              display: 'inline-flex', 
              alignItems: 'center', 
              background: 'var(--secondary)', 
              color: 'var(--primary)', 
              fontWeight: '700',
              padding: '1.1rem 2.5rem',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Speak to an Expert
          </motion.button>
          
          <motion.a 
            href="#readiness-score"
            whileHover={{ 
              scale: 1.02,
              background: 'rgba(255,255,255,0.06)',
              borderColor: 'rgba(255,255,255,0.8)'
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            style={{ 
              cursor: 'pointer', 
              border: '1.5px solid rgba(255,255,255,0.4)', 
              background: 'none', 
              color: 'white', 
              fontWeight: '700',
              padding: '1.1rem 2.5rem',
              borderRadius: '6px',
              fontSize: '1rem',
              textDecoration: 'none',
              display: 'inline-flex'
            }}
          >
            Take the Business Assessment
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
