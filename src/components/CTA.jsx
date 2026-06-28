import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="cta-section">
      {/* Background Image */}
      <div className="cta-bg">
        <img 
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1400&q=70&auto=format"
          alt=""
          aria-hidden="true"
        />
      </div>

      <motion.div 
        className="cta-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-label" style={{ color: 'var(--secondary)' }}>Next Step</span>
        <h2 className="cta-title">Start with a clear diagnosis.</h2>
        <p className="cta-subtitle" style={{ maxWidth: '650px', margin: '0 auto 2rem' }}>
          Take the Business Assessment and we will guide you to a practical next step aligned with your goals and the realities of operating in Oman.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
          <motion.a 
            href="#readiness-score"
            className="cta-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              textDecoration: 'none', 
              display: 'inline-flex', 
              alignItems: 'center', 
              background: 'var(--secondary)', 
              color: 'var(--primary)', 
              fontWeight: '700',
              padding: '1rem 2rem',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Take the Business Assessment
          </motion.a>
          <motion.button 
            onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-strategy-modal')); }}
            className="cta-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              cursor: 'pointer', 
              border: '1.5px solid white', 
              background: 'none', 
              color: 'white', 
              fontWeight: '700',
              padding: '1rem 2rem',
              borderRadius: '6px'
            }}
          >
            Apply for a Strategy Session
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
