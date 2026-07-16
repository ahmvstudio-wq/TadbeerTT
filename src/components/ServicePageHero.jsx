import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const ServicePageHero = ({ title, subtitle, description, breadcrumbs, dark = false }) => {
  return (
    <section className={`sp-hero ${dark ? 'sp-hero-dark' : ''}`} style={{ 
      paddingTop: '10rem', 
      paddingBottom: '6rem', 
      background: dark ? 'var(--primary)' : 'var(--bg)',
      color: dark ? 'white' : 'var(--text-main)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, opacity: dark ? 0.05 : 0.4 }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: dark 
            ? 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)'
            : 'linear-gradient(rgba(24,79,91,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(24,79,91,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1000px' }}>
        {breadcrumbs && (
          <motion.div 
            className="sp-hero-breadcrumbs"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', marginBottom: '2rem', color: dark ? 'rgba(255,255,255,0.7)' : 'var(--text-muted)' }}
          >
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <ChevronRight size={14} />}
                {idx === breadcrumbs.length - 1 ? (
                  <span style={{ color: dark ? 'white' : 'var(--primary)', fontWeight: '600' }}>{crumb}</span>
                ) : (
                  <Link to="/" style={{ color: 'inherit' }}>{crumb}</Link>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        )}

        <motion.h1 
          className="sp-hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.h1
            className="sp-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ 
              fontSize: '1.5rem', 
              color: 'var(--secondary)', 
              fontWeight: '600', 
              marginBottom: '1.5rem',
              fontFamily: 'inherit',
              lineHeight: 'inherit',
              margin: 0
            }}
          >
            {subtitle}
          </motion.h1>
        )}

        {description && (
          <motion.p
            className="sp-hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ fontSize: '1.15rem', lineHeight: '1.7', color: dark ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)', maxWidth: '800px' }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default ServicePageHero;
