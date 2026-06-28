import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const cases = [
  {
    title: 'Retail Transformation',
    desc: 'Operational audit plus training and retention strategy to support recovery and structured expansion.',
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&q=80&auto=format'
  },
  {
    title: 'Digital Presence Build',
    desc: 'Positioning plus website and online platform to improve visibility and reach.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format'
  },
  {
    title: 'Process Automation',
    desc: 'Automated visitor management with real time tracking to improve efficiency and visitor experience.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80&auto=format'
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
                
                <Link 
                  to="/resources" 
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '4px', 
                    fontSize: '0.85rem', 
                    fontWeight: '700', 
                    color: 'var(--primary)',
                    alignSelf: 'flex-start'
                  }}
                >
                  View details <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: 'center' }}>
          <Link 
            to="/resources" 
            className="btn btn-primary"
            style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}
          >
            Read Case Studies
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
