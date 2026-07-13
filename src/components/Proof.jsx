import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Milestone, GraduationCap } from 'lucide-react';

const proofItems = [
  {
    icon: <ShieldCheck size={28} style={{ color: 'var(--secondary)' }} />,
    title: 'Single team accountability',
    desc: 'One partner from diagnosis to measurable outcomes.'
  },
  {
    icon: <Globe size={28} style={{ color: 'var(--secondary)' }} />,
    title: 'Built for Oman and the GCC',
    desc: 'Local context with international standards.'
  },
  {
    icon: <Milestone size={28} style={{ color: 'var(--secondary)' }} />,
    title: 'Execution focused delivery',
    desc: 'Roadmaps supported by implementation and adoption.'
  },
  {
    icon: <GraduationCap size={28} style={{ color: 'var(--secondary)' }} />,
    title: 'Capability building included',
    desc: 'Training, structure, and knowledge transfer so results last.'
  }
];

const Proof = () => {
  return (
    <section id="proof" className="proof-section" style={{ padding: '6rem 0', background: 'var(--bg-alt)' }}>
      <div className="container">
        
        {/* Header */}
        <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
          
          <h2 className="section-title" style={{ fontSize: '2.4rem', fontWeight: '800', marginTop: '0.5rem' }}>
            Trusted delivery. Practical outcomes.
          </h2>
        </div>

        {/* 4-Block Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem'
        }}>
          {proofItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', bounce: 0.1, duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -6,
                borderColor: 'var(--secondary)',
                boxShadow: '0 10px 25px rgba(202, 169, 76, 0.06)'
              }}
              style={{
                background: 'white',
                border: '1px solid var(--border)',
                borderTop: '3px solid var(--border)',
                borderRadius: '12px',
                padding: '2.25rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s'
              }}
            >
              <div style={{
                background: 'rgba(24,79,91,0.02)',
                border: '1px solid rgba(24,79,91,0.05)',
                width: '54px',
                height: '54px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {item.icon}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', fontWeight: '700', margin: 0 }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Proof;
