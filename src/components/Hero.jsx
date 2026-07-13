import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Compass, Code, Brain, Megaphone, Users, Target, Download, ArrowRight, CheckCircle, Play, Lightbulb, Sparkles } from 'lucide-react';
import omanAir from '../assets/clients/oman-air.png';
import omanVision2040 from '../assets/clients/oman-vision-2040.png';
import alHarrasi from '../assets/clients/al-harrasi-rope-factory.png';


const Hero = () => {
  const containerRef = useRef(null);
  const [isReturning, setIsReturning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const hasVisited = localStorage.getItem('tadbeer_visited');
    if (hasVisited) {
      setIsReturning(true);
    } else {
      localStorage.setItem('tadbeer_visited', 'true');
    }
  }, []);

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

  const floatingCards = [
    {
      title: "Software Solutions",
      desc: "Enterprise systems that scale",
      icon: Code,
      id: "service-card-technology",
      position: { top: '32%', left: '6%' },
      delay: 0.25
    },
    {
      title: "Digital Marketing",
      desc: "Data-driven growth engines",
      icon: Megaphone,
      id: "service-card-marketing",
      position: { top: '49%', left: '6%' },
      delay: 0.4
    },
    {
      title: "AI Technology",
      desc: "Enterprise AI that delivers results",
      icon: Brain,
      id: "service-card-ai",
      position: { top: '33%', right: '8%' },
      delay: 0.55
    },
    {
      title: "Human Capital",
      desc: "People-first transformation",
      icon: Users,
      id: "service-card-people",
      position: { top: '51%', right: '8%' },
      delay: 0.7
    }
  ];

  const handleScrollToService = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      element.classList.add('highlight-glow-active');
      setTimeout(() => {
        element.classList.remove('highlight-glow-active');
      }, 2500);
    }
  };

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
        <motion.div 
          className="hero-text" 
          style={{ 
            y: y1, 
            opacity,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
            maxWidth: '680px'
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(24, 79, 91, 0.04)',
              border: '1px solid rgba(24, 79, 91, 0.12)',
              padding: '0.45rem 1rem',
              borderRadius: '30px',
              marginBottom: '1.25rem',
              width: 'fit-content',
              boxShadow: '0 2px 10px rgba(24, 79, 91, 0.02)',
              alignSelf: 'flex-start'
            }}
          >
            <Sparkles size={14} style={{ color: 'var(--secondary)' }} />
            <span style={{ 
              fontSize: '0.78rem', 
              fontWeight: '700', 
              color: 'var(--primary)', 
              textTransform: 'uppercase', 
              letterSpacing: '1px' 
            }}>
              Oman's System & Scale Partner
            </span>
          </motion.div>

          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ 
              fontSize: 'clamp(2.4rem, 4.8vw, 3.5rem)', 
              lineHeight: '1.1', 
              fontWeight: '700', 
              letterSpacing: '-1px', 
              marginBottom: '1.5rem' 
            }}
          >
            {isReturning ? (
              <>
                Welcome back. <br />Ready to <span className="accent">scale your business?</span>
              </>
            ) : (
              <>
                Scale your business with <br /><span className="accent">clarity and control.</span>
              </>
            )}
          </motion.h1>



          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ 
              marginBottom: '2rem', 
              marginTop: '1.5rem',
              display: 'flex', 
              alignItems: 'center', 
              gap: '1.5rem',
              background: 'rgba(24,79,91,0.03)',
              padding: '12px 20px',
              borderRadius: '40px',
              border: '1px solid rgba(24,79,91,0.05)',
              width: 'fit-content'
            }}
            className="hero-trusted"
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {[omanAir, omanVision2040, alHarrasi].map((logoSrc, i) => (
                <div key={i} className="hero-trusted-logo-bubble" style={{ 
                  width: '54px', height: '54px', borderRadius: '50%', 
                  background: '#ffffff', border: '3px solid white', 
                  marginLeft: i === 0 ? '0' : '-18px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)', zIndex: 4-i,
                  overflow: 'hidden'
                }}>
                  <img src={logoSrc} alt="Client Logo" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.4)' }} />
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                {[1,2,3,4,5].map(star => <span key={star} className="hero-trusted-star" style={{ color: 'var(--secondary)', fontSize: '1.3rem', lineHeight: '1' }}>★</span>)}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="hero-buttons"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center', marginTop: '0.5rem' }}
          >
            <motion.a 
              href="#readiness-score"
              whileHover={{ 
                scale: 1.025, 
                y: -2,
                boxShadow: '0 8px 22px rgba(202, 169, 76, 0.35)' 
              }}
              whileTap={{ scale: 0.98, y: 0 }}
              transition={{ type: 'spring', stiffness: 450, damping: 18 }}
              className="hero-btn-primary"
            >
              Take the Business Assessment →
            </motion.a>

            <motion.button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-strategy-modal'))}
              whileHover={{ 
                scale: 1.02,
                color: 'var(--secondary)'
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="hero-btn-link"
              style={{ borderBottom: '1.5px solid var(--primary)', paddingBottom: '2px' }}
            >
              Apply for a Strategy Session
            </motion.button>
          </motion.div>

        </motion.div>
      </div> {/* End hero-split */}

      {/* Right: Life-Size Mascot Overlay - Full Bleed */}
      <div className="hero-mascot-container" style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '55%', height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', zIndex: 5 }}>
          
          {/* ─── Layer 1 Removed ─── */}

          {/* ─── Layer 2: Floating Decorative Particles ─── */}
          <motion.div
            className="hero-floating-particles"
            style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none' }}
          >
            {/* Plus signs */}
            {[
              { top: '20%', left: '15%', delay: 0 },
              { top: '35%', right: '10%', delay: 0.5 },
              { top: '60%', left: '5%', delay: 1 },
              { top: '15%', right: '35%', delay: 1.5 },
            ].map((pos, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute', top: pos.top, left: pos.left, right: pos.right,
                  color: '#b39535', fontSize: '1.2rem', fontWeight: 'bold', opacity: 0.7
                }}
                animate={{ y: [0, -15, 0], rotate: [0, 90, 0] }}
                transition={{ repeat: Infinity, duration: 4 + i, delay: pos.delay, ease: "easeInOut" }}
              >
                +
              </motion.div>
            ))}
            {/* Dots */}
            {[
              { top: '30%', left: '25%', delay: 0.2 },
              { top: '50%', right: '15%', delay: 0.7 },
              { top: '70%', left: '15%', delay: 1.2 },
            ].map((pos, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute', top: pos.top, left: pos.left, right: pos.right,
                  width: '6px', height: '6px', borderRadius: '50%', border: '2px solid rgba(179, 149, 53, 0.6)'
                }}
                animate={{ y: [0, 20, 0], scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 3.5 + i, delay: pos.delay, ease: "easeInOut" }}
              />
            ))}
          </motion.div>

          {/* ─── Layer 3: Floating Lightbulb ─── */}
          <motion.div
            className="hero-floating-lightbulb"
            initial={{ opacity: 0, scale: 0, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 150 }}
            style={{
              position: 'absolute',
              top: '25%',
              left: '18%',
              zIndex: 6,
              background: 'rgba(255, 255, 255, 0.9)',
              padding: '1.2rem',
              borderRadius: '50%',
              boxShadow: '0 15px 35px rgba(249, 216, 87, 0.3), inset 0 0 0 1px rgba(255,255,255,0.8)',
              pointerEvents: 'none',
              border: '2px solid rgba(249, 216, 87, 0.4)'
            }}
            animate={{ 
              y: [0, -20, 0],
              boxShadow: ['0 15px 35px rgba(249,216,87,0.3)', '0 25px 45px rgba(249,216,87,0.5)', '0 15px 35px rgba(249,216,87,0.3)']
            }}
            transition={{ y: { repeat: Infinity, duration: 4, ease: "easeInOut" }, boxShadow: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
          >
            <Lightbulb size={36} style={{ color: '#d4b86a' }} strokeWidth={1.5} />
            <motion.div
              style={{ position: 'absolute', top: -10, right: -10, color: '#f9d857' }}
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Sparkles size={20} />
            </motion.div>
          </motion.div>

          {/* ─── Layer 4: Lighting & Glow Behind Mascot ─── */}
          <motion.div
            animate={{
              scale: [1, 1.06, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              bottom: '5%',
              right: '5%',
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(202, 169, 76, 0.18) 0%, rgba(24, 79, 91, 0.08) 45%, transparent 70%)',
              filter: 'blur(45px)',
              zIndex: 4,
              pointerEvents: 'none'
            }}
          />

          {/* ─── Layer 5: The Mascot ─── */}
          <motion.div 
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ 
              position: 'absolute', 
              bottom: 0, 
              right: 0, 
              width: '100%', 
              height: '92%', 
              zIndex: 5,
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <motion.img
              layoutId="global-mascot"
              src="/oryx.png.png"
              alt="Oryx Mascot"
              animate={{
                y: [0, -8, 0],
                rotate: [0, 0.4, -0.4, 0],
                scale: [1, 1.01, 1]
              }}
              transition={{
                y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                rotate: { repeat: Infinity, duration: 8, ease: "easeInOut" },
                scale: { repeat: Infinity, duration: 7, ease: "easeInOut" },
                layout: { type: 'spring', stiffness: 300, damping: 30 }
              }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'bottom center',
                pointerEvents: 'auto',
                filter: 'drop-shadow(0 15px 30px rgba(24, 79, 91, 0.05)) drop-shadow(0 0 35px rgba(202, 169, 76, 0.14))'
              }}
            />
          </motion.div>

          {/* Interactive Service Navigation Floating Cards */}
          {floatingCards.map((card, idx) => {
            const CardIcon = card.icon;
            return (
              <motion.div
                key={idx}
                className={`hero-floating-card-item card-idx-${idx}`}
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: card.delay, duration: 0.8 }}
                whileHover={{ 
                  scale: 1.04, 
                  y: -2,
                  boxShadow: '0 12px 25px rgba(202, 169, 76, 0.18)',
                  borderColor: 'rgba(202, 169, 76, 0.5)',
                  background: 'rgba(255, 255, 255, 0.98)'
                }}
                onClick={(e) => handleScrollToService(e, card.id)}
                style={{
                  position: 'absolute',
                  ...card.position,
                  zIndex: 12,
                  background: 'rgba(255, 255, 255, 0.93)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(24, 79, 91, 0.12)',
                  borderRadius: '14px',
                  padding: '0.85rem 1.15rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  cursor: 'pointer',
                  width: '260px',
                  boxShadow: '0 8px 22px rgba(24, 79, 91, 0.04)',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease'
                }}
              >
                <div style={{
                  background: 'rgba(24, 79, 91, 0.05)',
                  borderRadius: '8px',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  flexShrink: 0
                }}>
                  <CardIcon size={18} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary)', margin: 0, lineHeight: 1.2 }}>{card.title}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', margin: 0, marginTop: '2px', lineHeight: 1.2 }}>{card.desc}</div>
                </div>
                <ArrowRight size={14} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
              </motion.div>
            );
          })}

        </div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        className="hero-scroll-indicator"
        initial={{ opacity: 0, x: '-50%' }} 
        animate={{ opacity: 1, x: '-50%' }} 
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-line">
          <motion.div 
            className="hero-scroll-line-inner"
            animate={{ y: ['-100%', '200%'] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
