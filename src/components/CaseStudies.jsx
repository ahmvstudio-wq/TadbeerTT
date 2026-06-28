import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const cases = [
  {
    title: 'Al Harrasi Rope Factory',
    desc: 'Replaced paper logs with a live inventory system and barcode scanners, eliminating shipping delays and audit friction.',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&q=80&auto=format'
  },
  {
    title: 'Gloria Jean\'s GCC',
    desc: 'Created targeted Arabic video campaigns and WhatsApp vouchers, driving significant foot traffic and maximizing ad return.',
    image: 'https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?w=600&q=80&auto=format'
  },
  {
    title: 'Regional Telecom Operator',
    desc: 'Built a smart local chatbot that understands regional dialects, eliminating wait times and reducing agent burnout.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80&auto=format'
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="case-studies-section" style={{ padding: '6rem 0', background: 'var(--bg)' }}>
      <div className="container">
        
        {/* Header */}
        <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
          <span className="section-label" style={{ color: 'var(--secondary)' }}>Case Studies</span>
          <h2 className="section-title" style={{ fontSize: '2.4rem', fontWeight: '800', marginTop: '0.5rem' }}>
            Results that last, not just recommendations.
          </h2>
        </div>

        {/* 3-Card Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', bounce: 0.1, duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              style={{
                background: 'white',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.01)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              {/* Image Container */}
              <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to bottom, transparent 60%, rgba(24,79,91,0.2) 100%)'
                }} />
              </div>

              {/* Body */}
              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.25rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: '800', margin: 0 }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
                
                <a 
                  href="#work" 
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '4px', 
                    fontSize: '0.85rem', 
                    fontWeight: '700', 
                    color: 'var(--primary)',
                    alignSelf: 'flex-start',
                    textDecoration: 'none'
                  }}
                >
                  View details <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: 'center' }}>
          <a 
            href="#work" 
            className="btn btn-primary"
            style={{ padding: '1rem 2.5rem', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}
          >
            Explore Data Console
          </a>
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
