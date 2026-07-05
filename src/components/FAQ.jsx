import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "We have worked with consultants before. Results did not last.",
      a: "That usually happens when work stops at recommendations. We focus on systems, adoption, and accountability. We stay involved until outcomes are measurable."
    },
    {
      q: "Will this work for our specific context in Oman.",
      a: "Yes. We do not copy frameworks. We diagnose first, then design around your workflows, compliance requirements, and your team’s ability to adopt change."
    },
    {
      q: "Do you support implementation or only strategy.",
      a: "We support the full journey. Consultation, analysis, roadmap, implementation support, and capability building."
    },
    {
      q: "What is the first step.",
      a: "Start with the Business Assessment. If there is a strong fit, we follow with a structured strategy session and a clear proposal."
    }
  ];

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Frequently asked questions</h2>
        </motion.div>
        
        <div className="faq-layout">
          {/* FAQ Accordion */}
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div 
                  className="faq-question"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Still have questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              textAlign: 'center',
              marginTop: '2.5rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--border)'
            }}
          >
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Still have questions?
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-strategy-modal'))}
              style={{
                background: 'none',
                border: '1.5px solid var(--primary)',
                color: 'var(--primary)',
                padding: '0.75rem 2rem',
                borderRadius: '6px',
                fontWeight: '700',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'none';
                e.currentTarget.style.color = 'var(--primary)';
              }}
            >
              Apply for a Strategy Session
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
