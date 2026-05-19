import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ConnectionLine = ({ path, delay }) => (
  <motion.path
    d={path}
    fill="transparent"
    stroke="rgba(202, 169, 76, 0.2)"
    strokeWidth="1.5"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 1 }}
    transition={{ duration: 3, delay: delay, ease: [0.25, 0.1, 0.25, 1] }}
  />
);

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="hero-section" style={{ 
      backgroundColor: 'var(--bg)', 
      color: 'var(--text-main)',
      overflow: 'hidden',
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      {/* Subtle, High-Value Background Graphics */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: 0 }}>
        {/* Very subtle grid */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: 'linear-gradient(rgba(24,79,91,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(24,79,91,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.6
        }} />

        <svg style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}>
          <ConnectionLine path="M -100 200 C 200 200, 300 400, 800 350" delay={0.5} />
          <ConnectionLine path="M 200 700 C 400 600, 500 400, 1200 450" delay={1} />
          <ConnectionLine path="M 700 -100 C 800 200, 900 300, 1000 500" delay={1.5} />
          
          <motion.circle cx="800" cy="350" r="3" fill="var(--secondary)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 2 }} />
          <motion.circle cx="500" cy="400" r="4" fill="var(--primary)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8, duration: 2 }} />
        </svg>

        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 4 }}
          style={{
            position: 'absolute', top: '-10%', right: '-10%', width: '60vw', height: '60vw',
            background: 'radial-gradient(circle, rgba(202, 169, 76, 0.04) 0%, transparent 60%)',
            borderRadius: '50%', filter: 'blur(80px)'
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div 
          className="hero-content"
          style={{ y: y1, opacity }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              padding: '0.5rem 1.25rem', background: 'rgba(24,79,91,0.05)', 
              border: '1px solid rgba(24,79,91,0.1)', borderRadius: '50px',
              marginBottom: '2rem', backdropFilter: 'blur(10px)'
            }}
          >
            <span style={{ width: '6px', height: '6px', background: 'var(--secondary)', borderRadius: '50%' }}></span>
            <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--primary)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Oman Vision 2040 Aligned</span>
          </motion.div>

          {/* Smooth, subtle headline animation for High-Value Firm */}
          <div style={{ perspective: '1000px', marginBottom: '1.5rem', maxWidth: '850px' }}>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="hero-title" style={{ color: 'var(--text-main)', lineHeight: '1.1' }}
            >
              Architecting the Future of <span style={{ color: 'var(--secondary)', fontWeight: '400', fontStyle: 'italic' }}>Enterprise</span>
            </motion.h1>
          </div>

          <motion.p 
            className="hero-desc"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '650px', lineHeight: '1.7', fontWeight: '400' }}
          >
            Tadbeer Transformations engineers precision ERP, AI automation, and human capital strategies to scale organizations across the GCC
          </motion.p>

          <motion.div 
            style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem' }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(202, 169, 76, 0.9)' }}
              whileTap={{ scale: 0.98 }}
              className="btn"
              style={{ background: 'var(--secondary)', color: 'var(--bg-alt)', fontWeight: '600', padding: '1rem 2.5rem', borderRadius: '4px' }}
            >
              Start Transformation
            </motion.button>
            <motion.a 
              href="#services"
              whileHover={{ opacity: 0.8 }}
              className="btn"
              style={{ background: 'transparent', color: 'var(--primary)', borderBottom: '1px solid var(--primary)', borderRadius: '0', padding: '1rem 0' }}
            >
              Explore Solutions &rarr;
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* High-End Parallax Interface Elements */}
      <motion.div 
        style={{ position: 'absolute', right: '5%', top: '20%', y: y2, display: window.innerWidth > 1024 ? 'block' : 'none', zIndex: 15 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ 
            background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(20px)', border: '1px solid var(--border)',
            padding: '2rem', borderRadius: '2px', width: '340px', boxShadow: '0 30px 60px rgba(0,0,0,0.05)',
            marginBottom: '2rem'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>System Architecture</span>
            <div style={{ width: '4px', height: '4px', background: 'var(--secondary)', borderRadius: '50%' }} />
          </div>
          
          <div style={{ display: 'grid', gap: '1rem' }}>
            {['ERP Core Integration', 'Data Warehousing', 'AI Predictive Layer'].map((sys, i) => (
              <div key={sys} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <motion.div 
                  initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.5, delay: 1.5 + (i * 0.3), ease: "circOut" }}
                  style={{ height: '1px', background: 'var(--border)', flex: 1, position: 'relative' }}
                >
                  <motion.div style={{ position: 'absolute', right: 0, top: '-2px', width: '5px', height: '5px', background: 'var(--primary)', borderRadius: '50%' }} />
                </motion.div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-main)', minWidth: '130px', fontWeight: '500' }}>{sys}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ 
            background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(20px)', border: '1px solid var(--border)',
            padding: '2rem', borderRadius: '2px', width: '300px', marginLeft: '-60px', boxShadow: '0 30px 60px rgba(0,0,0,0.05)',
          }}
        >
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem', fontWeight: '600' }}>Transformation Flow</div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
             <div style={{ flex: 1 }}>
                <div style={{ height: '2px', width: '100%', background: 'var(--border)', position: 'relative' }}>
                   <motion.div 
                     initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                     style={{ height: '100%', background: 'var(--secondary)', position: 'absolute', top: 0, left: 0 }}
                   />
                </div>
             </div>
             <span style={{ fontSize: '0.85rem', color: 'var(--secondary)', fontWeight: '600' }}>Active</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        style={{ position: 'absolute', bottom: '2rem', left: '50%', x: '-50%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 1 }}
      >
        <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: '600' }}>Scroll</span>
        <div style={{ width: '1px', height: '60px', background: 'var(--border)', position: 'relative', overflow: 'hidden' }}>
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
