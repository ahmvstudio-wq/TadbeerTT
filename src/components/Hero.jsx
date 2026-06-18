import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Compass, Cpu, Users, Target } from 'lucide-react';


const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yBlob = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yFloat1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yFloat2 = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section ref={containerRef} className="hero-section">
      {/* Subtle background grid */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: 0 }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: 'linear-gradient(rgba(24,79,91,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(24,79,91,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.5
        }} />
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }}
          style={{
            position: 'absolute', top: '-15%', right: '-15%', width: '55vw', height: '55vw',
            background: 'radial-gradient(circle, rgba(202, 169, 76, 0.05) 0%, transparent 60%)',
            borderRadius: '50%', filter: 'blur(80px)',
            y: yBlob
          }} 
        />
        {/* Floating Ring Left */}
        <motion.div 
          style={{
            position: 'absolute',
            left: '5%',
            top: '30%',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            border: '2px dashed rgba(202, 169, 76, 0.12)',
            y: yFloat1,
            zIndex: 0
          }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        />
        {/* Floating Dot Grid Right */}
        <motion.div 
          style={{
            position: 'absolute',
            right: '8%',
            top: '55%',
            width: '120px',
            height: '120px',
            backgroundImage: 'radial-gradient(rgba(24, 79, 91, 0.12) 2px, transparent 2px)',
            backgroundSize: '16px 16px',
            y: yFloat2,
            zIndex: 0
          }}
        />
      </div>

      <div className="hero-split">
        {/* Left: Text */}
        <motion.div className="hero-text" style={{ y: y1, opacity }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="section-label">🇴🇲 MUSCAT, OMAN → GCC → GLOBAL</span>
          </motion.div>

          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Turn Great Ideas Into{' '}
            <span className="accent">Dominant Brands.</span>
          </motion.h1>

          {/* Focus Pillars Strip - Extremely minimal and space-efficient */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="hero-pillars-strip"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginTop: '0.25rem',
              marginBottom: '1.25rem',
              width: '100%'
            }}
          >
            {[
              { title: 'Strategy', icon: <Compass size={13} /> },
              { title: 'Technology', icon: <Cpu size={13} /> },
              { title: 'People', icon: <Users size={13} /> },
              { title: 'Marketing', icon: <Target size={13} /> }
            ].map((p, idx) => (
              <motion.div
                key={idx}
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: 'var(--secondary)', 
                  backgroundColor: 'rgba(202,169,76,0.06)',
                  boxShadow: '0 2px 8px rgba(202,169,76,0.04)' 
                }}
                style={{
                  background: 'rgba(24, 79, 91, 0.02)',
                  border: '1px solid rgba(24, 79, 91, 0.06)',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  cursor: 'pointer'
                }}
              >
                <div style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center' }}>
                  {p.icon}
                </div>
                <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--primary)' }}>
                  {p.title}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="hero-buttons"
          >
            <motion.a 
              href="#readiness-score"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-primary hero-cta-btn"
              style={{ fontSize: '1.05rem', padding: '1rem 2.25rem' }}
            >
              Take Business Assessment →
            </motion.a>
            <motion.button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-strategy-modal'))}
              whileHover={{ opacity: 0.7 }}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)', fontWeight: '600', borderBottom: '1.5px solid var(--primary)', paddingBottom: '2px', fontSize: '0.95rem' }}
            >
              Apply for a Strategy Session
            </motion.button>
          </motion.div>

        </motion.div>

        {/* Right: Image */}
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ y: yImage }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format"
            alt="Modern business office in Muscat"
            className="hero-image"
          />
          <motion.div 
            className="hero-image-overlay"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%', flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--primary)' }}>Now Accepting New Clients</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Free consultation · No commitment</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="hero-scroll-indicator"
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
      >
        <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: '600' }}>Scroll</span>
        <div style={{ width: '1px', height: '40px', background: 'var(--border)', position: 'relative', overflow: 'hidden' }}>
          <motion.div 
            style={{ width: '100%', height: '50%', background: 'var(--secondary)', position: 'absolute', top: 0, left: 0 }}
            animate={{ y: ['-100%', '200%'] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
