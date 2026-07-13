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
    <section id="faq" className="faq-section" style={{ padding: '6rem 0', background: 'var(--bg-alt)' }}>
      <div className="container" style={{ maxWidth: '850px', margin: '0 auto', padding: '0 5%' }}>
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: '800', margin: 0 }}>
            Frequently asked questions
          </h2>
        </motion.div>
        
        <div className="faq-layout" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* FAQ Accordion */}
          <div className="faq-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                style={{
                  background: 'white',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                <div 
                  className="faq-question"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  style={{
                    padding: '1.25rem 1.5rem',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    fontWeight: '700',
                    color: 'var(--primary)',
                    fontSize: '1rem'
                  }}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon" style={{ fontSize: '1.2rem', color: 'var(--secondary)' }}>
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </div>
                <div 
                  className="faq-answer"
                  style={{
                    maxHeight: activeIndex === index ? '200px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    background: '#FAF9F5'
                  }}
                >
                  <p style={{ padding: '1.25rem 1.5rem', margin: 0, fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    {faq.a}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Centered CTA button layout (composition fix) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              textAlign: 'center',
              marginTop: '2.5rem',
              display: 'flex',
              justifyContent: 'center',
              width: '100%'
            }}
          >
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-strategy-modal'))}
              style={{
                background: 'none',
                border: '1.5px solid var(--primary)',
                color: 'var(--primary)',
                padding: '0.85rem 2.25rem',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '0.92rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'var(--font-en)'
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
