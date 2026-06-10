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

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/">
        <Logo />
      </Link>
      <div className="nav-links">
        {isHome ? (
          <>
            <a href="#services">Services</a>
            <a href="#work">Our Work</a>
            <Link to="/careers">Careers</Link>
            <a href="#contact">Contact</a>
          </>
        ) : (
          <>
            <Link to="/#services">Services</Link>
            <Link to="/#work">Our Work</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/#contact">Contact</Link>
          </>
        )}
      </div>
      <div className="nav-actions">
        <span className="lang-switch">العربية</span>
        <a href="#contact" className="btn btn-primary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.9rem' }}>Book Consultation</a>
      </div>
    </nav>
  );
};

export default Navbar;
