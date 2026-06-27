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
        <span className="section-label" style={{ color: 'var(--secondary)' }}>The Next Step | الخطوة التالية</span>
        <h2 className="cta-title">Transformation That Lasts Starts With One Honest Conversation.</h2>
        <p className="cta-subtitle">
          No contracts. No pressure. A direct discussion with someone who knows this market.
        </p>
        <motion.button 
          onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-strategy-modal')); }}
          className="cta-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ cursor: 'pointer', border: 'none' }}
        >
          Request a Strategy Session →
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CTA;
