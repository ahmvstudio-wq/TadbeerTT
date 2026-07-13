import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Import logos
import alHarrasiLogo from '../assets/clients/al-harrasi-rope-factory.png';
import omanAirLogo from '../assets/clients/oman-air.png';
import troxyLogo from '../assets/clients/troxy.png';
import aturLogo from '../assets/clients/atiin.png';
import marbleLogo from '../assets/clients/sultanate-of-marble.png';

// Import case images
import omanAirCaseImage from '../assets/clients/oman_air_case.png';
import troxyCaseImage from '../assets/clients/troxy_case.png';

const cases = [
  {
    id: 'oman-air',
    title: 'Oman Air',
    category: 'Aviation',
    service: 'Visitor Management System',
    image: omanAirCaseImage,
    logo: omanAirLogo,
    summary: 'A fully digitized digital check-in platform replacing paper gate passes.',
    metrics: [
      { label: 'Check-in Time', value: '45 sec' },
      { label: 'Front-desk Load', value: '-70%' }
    ]
  },
  {
    id: 'troxy-oman',
    title: 'Troxy Oman',
    category: 'Restaurant / Food Service',
    service: 'Business Establishment & IT Redesign',
    image: troxyCaseImage,
    logo: troxyLogo,
    summary: 'End-to-end operational workflows, HR plans, and POS integration.',
    metrics: [
      { label: 'POS Network Uptime', value: '99.9%' },
      { label: 'Ordering Speed', value: '+35%' }
    ]
  },
  {
    id: 'al-harassi',
    title: 'Al Harassi Rope Factory',
    category: 'Manufacturing',
    service: 'Digital Transformation & Web Development',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80',
    logo: alHarrasiLogo,
    summary: 'Establishing a professional B2B presence, supplier portal, and lead tracking.',
    metrics: [
      { label: 'Supplier Onboard', value: 'Instant' },
      { label: 'B2B Leads', value: '+45%' }
    ]
  },
  {
    id: 'atur',
    title: 'Atur',
    category: 'Perfume Marketplace',
    service: 'Strategy & Platform Development',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80',
    logo: aturLogo,
    summary: 'Transforming traditional GCC fragrance retail into a scalable marketplace.',
    metrics: [
      { label: 'Market Validation', value: '100%' },
      { label: 'Platform Readiness', value: 'GCC-wide' }
    ]
  },
  {
    id: 'sultanate-of-marble',
    title: 'Sultanate of Marble',
    category: 'Manufacturing',
    service: 'ERP Consulting & Implementation',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
    logo: marbleLogo,
    summary: 'Workflows evaluation and ERPNext implementation for 200+ staff.',
    metrics: [
      { label: 'ERP Integration', value: '200+ Staff' },
      { label: 'Inventory Leakage', value: '-95%' }
    ]
  }
];

const CaseStudies = () => {
  const saveScrollPosition = () => {
    sessionStorage.setItem('homepage_scroll_pos', window.scrollY.toString());
  };

  return (
    <section id="case-studies" className="case-studies-section" style={{ padding: '7rem 0', background: 'var(--bg-alt)' }}>
      <div className="container" style={{ padding: '0 5%' }}>
        
        {/* Header */}
        <div className="text-center" style={{ maxWidth: '1000px', margin: '0 auto 4.5rem' }}>
          <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: '800', marginTop: '0.5rem' }}>
            <span style={{ color: 'var(--secondary)' }}>Results that last,</span> not just recommendations.
          </h2>
        </div>

        {/* 5-Card Staggered Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '4.5rem'
        }}>
          {cases.map((item, index) => (
            <Link 
              key={index}
              to={`/case-studies/${item.id}`}
              onClick={saveScrollPosition}
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
            >
              <motion.div
                initial="initial"
                whileHover="hover"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: 'spring', bounce: 0.1, duration: 0.8, delay: index * 0.12 }}
                style={{
                  background: 'white',
                  border: '1px solid var(--border)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(8, 32, 37, 0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                variants={{
                  hover: {
                    y: -8,
                    boxShadow: '0 20px 40px rgba(8, 32, 37, 0.08)'
                  }
                }}
              >
                {/* Image Container (16:9 ratio) */}
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
                  <motion.img 
                    src={item.image} 
                    alt={item.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    variants={{
                      hover: { scale: 1.05 }
                    }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />
                  
                  {/* Dark Overlay on Hover */}
                  <motion.div 
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'rgba(8, 32, 37, 0.4)',
                      pointerEvents: 'none'
                    }}
                    initial={{ opacity: 0 }}
                    variants={{
                      hover: { opacity: 1 }
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Industry Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(8, 32, 37, 0.85)',
                    backdropFilter: 'blur(4px)',
                    color: 'white',
                    fontSize: '0.65rem',
                    fontWeight: '700',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '30px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    zIndex: 2
                  }}>
                    {item.category}
                  </div>

                  {/* Company Logo Badge */}
                  {item.logo && (
                    <div style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      right: '0.75rem',
                      background: 'white',
                      padding: '0.35rem',
                      borderRadius: '8px',
                      width: '36px',
                      height: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(8, 32, 37, 0.15)',
                      zIndex: 2
                    }}>
                      <img 
                        src={item.logo} 
                        alt={`${item.title} logo`} 
                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
                      />
                    </div>
                  )}
                </div>

                {/* Body */}
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ 
                      fontSize: '1.15rem', 
                      color: 'var(--primary)', 
                      fontWeight: '800', 
                      margin: '0 0 0.25rem', 
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden' 
                    }}>
                      {item.title}
                    </h4>

                    <div style={{ fontSize: '0.78rem', color: 'var(--secondary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.75rem' }}>
                      {item.service}
                    </div>
                    
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5', margin: '0 0 1.25rem' }}>
                      {item.summary}
                    </p>
                  </div>

                  {/* Card CTA & Metrics */}
                  <div>
                    <div style={{ display: 'flex', gap: '0.75rem', borderTop: '1px solid var(--border)', paddingTop: '0.85rem', marginBottom: '1rem' }}>
                      {item.metrics.map((m, mIdx) => (
                        <div key={mIdx} style={{ flex: 1 }}>
                          <div style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary)', lineHeight: 1.1 }}>{m.value}</div>
                          <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '2px' }}>{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <motion.div
                      style={{
                        width: '100%',
                        background: 'rgba(24, 79, 91, 0.04)',
                        border: '1px solid rgba(24, 79, 91, 0.1)',
                        color: 'var(--primary)',
                        padding: '0.65rem',
                        borderRadius: '8px',
                        fontWeight: '700',
                        fontSize: '0.82rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer',
                        boxSizing: 'border-box'
                      }}
                      variants={{
                        hover: {
                          y: -3,
                          background: 'var(--primary)',
                          color: 'white',
                          boxShadow: '0 5px 15px rgba(24, 79, 91, 0.15)'
                        }
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      View Case Study <ArrowRight size={12} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Global CTA */}
        <div style={{ textAlign: 'center' }}>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-strategy-modal'))}
            className="btn btn-primary"
            style={{ padding: '1rem 2.5rem', fontSize: '1rem', display: 'inline-flex', border: 'none', cursor: 'pointer', alignItems: 'center', gap: '0.5rem' }}
          >
            Apply for a Strategy Session <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
