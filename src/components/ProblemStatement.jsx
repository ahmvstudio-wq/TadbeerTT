import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProblemStatement = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="problem-statement" className="problem-statement-section" style={{ padding: '6rem 0', background: '#FDFDFB' }}>
      <div className="container" style={{ padding: '0 5%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Left Column: Heading, Supporting Text, CTA */}
          <div style={{ textAlign: 'left' }}>
            <h2 style={{ 
              fontSize: 'clamp(2.15rem, 4.5vw, 3rem)', 
              color: 'var(--primary)', 
              fontWeight: '800', 
              marginBottom: '2rem',
              lineHeight: '1.25',
              letterSpacing: '-1px',
              maxWidth: '750px'
            }}>
              <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.15rem' }}>
                <motion.span
                  initial={{ y: '100%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: 'block' }}
                >
                  If growth feels harder than it should,
                </motion.span>
              </span>
              <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.15rem', color: 'var(--secondary)' }}>
                <motion.span
                  initial={{ y: '100%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: 'block' }}
                >
                  the issue is usually the system.
                </motion.span>
              </span>
            </h2>
            <a 
              href="#readiness-score" 
              className="btn btn-primary"
              style={{ 
                padding: '1rem 2.25rem', 
                fontSize: '0.95rem', 
                borderRadius: '8px', 
                boxShadow: '0 4px 15px rgba(202, 169, 76, 0.15)',
                display: 'inline-flex',
                marginTop: '1rem'
              }}
            >
              Take the Business Assessment
            </a>
          </div>

          {/* Right Column: Common signs (styled cards) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--primary)', fontWeight: '700', marginBottom: '0.5rem' }}>Common Signs:</h3>
            {[
              "Operations depend on Excel and WhatsApp to move work forward.",
              "Approvals and handovers take too long.",
              "Reports take days and still feel uncertain.",
              "Technology exists, but adoption is weak.",
              "Performance depends on individuals, not structure."
            ].map((sign, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                whileHover={{ y: -4, scale: 1.01 }}
                style={{ 
                  background: hoveredIdx === idx ? 'var(--tertiary)' : 'white', 
                  border: '1px solid',
                  borderColor: hoveredIdx === idx ? 'var(--tertiary)' : 'var(--border)', 
                  borderRadius: '8px', 
                  padding: '1rem 1.25rem', 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '0.75rem',
                  boxShadow: hoveredIdx === idx ? '0 10px 25px rgba(24,79,91,0.12)' : '0 2px 10px rgba(0,0,0,0.01)',
                  cursor: 'pointer',
                  transition: 'background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease'
                }}
              >
                <span style={{ 
                  color: hoveredIdx === idx ? 'var(--secondary-light)' : 'var(--secondary)', 
                  fontWeight: 'bold', 
                  fontSize: '1.1rem', 
                  lineHeight: '1.2',
                  display: 'inline-block',
                  transform: hoveredIdx === idx ? 'translateX(2px)' : 'none',
                  transition: 'transform 0.2s ease, color 0.2s ease'
                }}>
                  {hoveredIdx === idx ? '→' : '•'}
                </span>
                <span style={{ 
                  fontSize: '0.95rem', 
                  color: hoveredIdx === idx ? '#FDFDFD' : 'var(--text-main)', 
                  fontWeight: '500', 
                  lineHeight: '1.4',
                  transition: 'color 0.2s ease'
                }}>{sign}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
