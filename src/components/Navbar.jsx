import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
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

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileOpen ? 'mobile-nav-active' : ''}`}>
        <Link to="/" onClick={() => setMobileOpen(false)}>
          <Logo />
        </Link>
        <div className="nav-links">
          {isHome ? (
            <>
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <Link to="/careers">Careers</Link>
              <a href="#contact">Contact</a>
            </>
          ) : (
            <>
              <Link to="/#services">Services</Link>
              <Link to="/#about">About</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/#contact">Contact</Link>
            </>
          )}
        </div>
        <div className="nav-actions">
          <span className="lang-switch">العربية</span>
          <a href="#contact" className="btn btn-primary nav-cta-btn" style={{ padding: '0.65rem 1.25rem', fontSize: '0.9rem' }}>Book Consultation</a>
          
          {/* Mobile hamburger menu toggle */}
          <button 
            className={`nav-toggle ${mobileOpen ? 'open' : ''}`} 
            onClick={() => setMobileOpen(!mobileOpen)} 
            aria-label="Toggle navigation menu"
          >
            <span className="nav-toggle-bar"></span>
            <span className="nav-toggle-bar"></span>
            <span className="nav-toggle-bar"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`nav-mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="nav-mobile-links">
          {isHome ? (
            <>
              <a href="#services" onClick={() => setMobileOpen(false)}>Services</a>
              <a href="#about" onClick={() => setMobileOpen(false)}>About Us</a>
              <Link to="/careers" onClick={() => setMobileOpen(false)}>Careers</Link>
              <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
            </>
          ) : (
            <>
              <Link to="/#services" onClick={() => setMobileOpen(false)}>Services</Link>
              <Link to="/#about" onClick={() => setMobileOpen(false)}>About Us</Link>
              <Link to="/careers" onClick={() => setMobileOpen(false)}>Careers</Link>
              <Link to="/#contact" onClick={() => setMobileOpen(false)}>Contact</Link>
            </>
          )}
        </div>
        <div className="nav-mobile-footer">
          <span className="lang-switch mobile-lang-switch">العربية</span>
          <a href="#contact" className="btn btn-primary mobile-cta-btn" onClick={() => setMobileOpen(false)}>Book Consultation</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
