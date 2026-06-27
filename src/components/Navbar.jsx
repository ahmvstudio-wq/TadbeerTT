import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const serviceLinks = [
  { label: 'Digital Marketing', path: '/services/digital-marketing', desc: 'Data-driven growth engines' },
  { label: 'Software Solutions', path: '/services/software-solutions', desc: 'Enterprise systems that scale' },
  { label: 'Human Capital', path: '/services/human-capital', desc: 'People-first transformation' },
  { label: 'AI Technology', path: '/services/ai-technology', desc: 'Enterprise AI that delivers results' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const timeoutRef = useRef(null);
  const location = useLocation();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        {/* Scroll Progress Bar */}
        <motion.div 
          style={{ 
            scaleX: scrollYProgress, 
            transformOrigin: "0%", 
            height: "3px", 
            background: "var(--secondary)", 
            position: 'absolute', 
            bottom: 0, 
            left: 0, 
            right: 0, 
            zIndex: 10 
          }} 
        />
        <Link to="/" onClick={() => setMobileOpen(false)}>
          <Logo />
        </Link>

        <div className="nav-links" style={{ alignItems: 'center' }}>
          {/* Animated Services Dropdown */}
          <div 
            style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              style={{ 
                background: 'none', 
                border: 'none', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '4px',
                fontSize: '0.95rem',
                fontWeight: '500',
                color: 'var(--primary)',
                cursor: 'pointer',
                fontFamily: 'inherit',
                padding: '0',
                position: 'relative'
              }}
            >
              Services
              <motion.div animate={{ rotate: servicesOpen ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ display: 'flex', alignItems: 'center' }}>
                <ChevronDown size={14} />
              </motion.div>
              <div 
                style={{
                  position: 'absolute',
                  height: '2px',
                  bottom: '-4px',
                  left: 0,
                  right: 0,
                  background: 'var(--secondary)',
                  transform: servicesOpen ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'white',
                    borderRadius: '16px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    border: '1px solid var(--border)',
                    padding: '1.5rem',
                    width: '320px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    zIndex: 200,
                    marginLeft: '-110px' // Offset centering
                  }}
                >
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', fontWeight: '600', paddingLeft: '0.5rem', marginBottom: '0.25rem' }}>Our Capabilities</div>
                  {serviceLinks.map((s, idx) => (
                    <Link 
                      key={s.path} 
                      to={s.path} 
                      style={{ 
                        padding: '0.75rem', 
                        borderRadius: '12px', 
                        transition: 'background 0.2s', 
                        display: 'block',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(24,79,91,0.04)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontWeight: '600', color: 'var(--primary)', display: 'block', marginBottom: '0.2rem' }}>{s.label}</span>
                        <ArrowRight size={14} color="var(--secondary)" />
                      </div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>{s.desc}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/#industries">Industries</Link>
          <Link to="/#about">About Us</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/#contact">Contact</Link>
        </div>

        <div className="nav-actions">
          <span className="lang-switch">العربية</span>
          <button 
            onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-strategy-modal')); }} 
            className="btn btn-primary nav-cta-btn" 
            style={{ padding: '0.65rem 1.25rem', fontSize: '0.9rem', cursor: 'pointer', border: 'none' }}
          >
            Request a Consultation
          </button>
          
          <button 
            className={`nav-toggle ${mobileOpen ? 'open' : ''}`} 
            onClick={() => setMobileOpen(!mobileOpen)} 
          >
            <span className="nav-toggle-bar"></span>
            <span className="nav-toggle-bar"></span>
            <span className="nav-toggle-bar"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`nav-mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="nav-mobile-links" style={{ paddingTop: '5rem' }}>
          
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--secondary)', fontWeight: '700', marginBottom: '1rem' }}>Services</div>
            {serviceLinks.map((s) => (
              <Link key={s.path} to={s.path} onClick={() => setMobileOpen(false)} style={{ display: 'block', fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '500', color: 'var(--primary)' }}>
                {s.label}
              </Link>
            ))}
          </div>

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <Link to="/#industries" onClick={() => setMobileOpen(false)} style={{ fontSize: '1.25rem', fontWeight: '500', color: 'var(--primary)' }}>Industries</Link>
            <Link to="/#about" onClick={() => setMobileOpen(false)} style={{ fontSize: '1.25rem', fontWeight: '500', color: 'var(--primary)' }}>About Us</Link>
            <Link to="/resources" onClick={() => setMobileOpen(false)} style={{ fontSize: '1.25rem', fontWeight: '500', color: 'var(--primary)' }}>Resources</Link>
            <Link to="/careers" onClick={() => setMobileOpen(false)} style={{ fontSize: '1.25rem', fontWeight: '500', color: 'var(--primary)' }}>Careers</Link>
            <Link to="/#contact" onClick={() => setMobileOpen(false)} style={{ fontSize: '1.25rem', fontWeight: '500', color: 'var(--primary)' }}>Contact</Link>
          </div>

        </div>
        <div className="nav-mobile-footer" style={{ padding: '2rem' }}>
          <button 
            onClick={(e) => { e.preventDefault(); setMobileOpen(false); window.dispatchEvent(new CustomEvent('open-strategy-modal')); }} 
            className="btn btn-primary" 
            style={{ width: '100%', justifyContent: 'center', cursor: 'pointer', border: 'none' }}
          >
            Request a Consultation
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
