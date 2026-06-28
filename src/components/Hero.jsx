import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Compass, Cpu, Users, Target, Download } from 'lucide-react';
import omanAir from '../assets/clients/oman-air.png';
import ministryOfAwqaf from '../assets/clients/ministry-of-awqaf.png';
import alHarrasi from '../assets/clients/al-harrasi-rope-factory.png';


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
            initial={{ width: 0 }}
            animate={{ width: '40px' }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            style={{ height: '3px', background: 'var(--secondary)', marginBottom: '1.5rem', borderRadius: '2px' }}
          />

          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Scale your business with <span className="accent">clarity and control.</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-muted)',
              lineHeight: '1.6',
              marginTop: '1rem',
              marginBottom: '1.5rem',
              maxWidth: '540px'
            }}
          >
            Tadbeer helps Omani SMEs, family businesses, and enterprises strengthen strategy, systems, people, and execution so growth becomes measurable, predictable, and aligned with Oman Vision 2040.
          </motion.p>

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
            style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}
          >
            <motion.a 
              href="#readiness-score"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-primary hero-cta-btn"
              style={{ fontSize: '1.05rem', padding: '1rem 2.25rem' }}
            >
              Take the Business Assessment →
            </motion.a>
            <motion.button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-playbook-modal'))}
              whileHover={{ 
                scale: 1.03, 
                backgroundColor: 'rgba(202,169,76,0.06)',
                borderColor: 'var(--secondary)'
              }}
              whileTap={{ scale: 0.97 }}
              style={{ 
                background: 'none', 
                border: '1.5px solid var(--secondary)', 
                borderRadius: '6px',
                cursor: 'pointer', 
                color: 'var(--primary)', 
                fontWeight: '700', 
                padding: '0.9rem 1.75rem', 
                fontSize: '0.95rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'background-color 0.2s, border-color 0.2s'
              }}
            >
              <span>Download the Playbook</span>
              <Download size={15} style={{ strokeWidth: 2.5, color: 'var(--secondary)' }} />
            </motion.button>
            <motion.button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-strategy-modal'))}
              whileHover={{ opacity: 0.7 }}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)', fontWeight: '600', borderBottom: '1.5px solid var(--primary)', paddingBottom: '2px', fontSize: '0.95rem' }}
            >
              Apply for a Strategy Session
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}
            className="hero-trusted"
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {[omanAir, ministryOfAwqaf, alHarrasi].map((logoSrc, i) => (
                <div key={i} style={{ 
                  width: '42px', height: '42px', borderRadius: '50%', 
                  background: '#ffffff', border: '2px solid white', 
                  marginLeft: i === 0 ? '0' : '-14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.06)', zIndex: 4-i,
                  overflow: 'hidden'
                }}>
                  <img src={logoSrc} alt="Client Logo" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.4)' }} />
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                {[1,2,3,4,5].map(star => <span key={star} style={{ color: 'var(--secondary)', fontSize: '0.9rem', lineHeight: '1' }}>★</span>)}
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-main)', fontWeight: '600', marginTop: '4px', letterSpacing: '0.5px' }}>Trusted by Leading GCC Organizations</span>
            </div>
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

      {/* Subtle Scroll Indicator */}
      <motion.div 
        style={{ position: 'absolute', bottom: '3rem', left: '5%', display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 10 }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
      >
        <span style={{ fontSize: '0.65rem', color: 'var(--primary)', letterSpacing: '3px', textTransform: 'uppercase', transform: 'rotate(-90deg)', transformOrigin: 'left', opacity: 0.7 }}>Scroll</span>
        <div style={{ width: '1px', height: '60px', background: 'rgba(24, 79, 91, 0.1)', position: 'relative', overflow: 'hidden' }}>
          <motion.div 
            style={{ width: '100%', height: '50%', background: 'var(--primary)', position: 'absolute', top: 0, left: 0 }}
            animate={{ y: ['-100%', '200%'] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
