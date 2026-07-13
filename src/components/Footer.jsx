import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <Logo />
            </div>
            <p className="footer-desc" style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '300px', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Strategy, technology, and people — built to last. Rooted in Muscat. Operating across the GCC.
            </p>
          </div>
          
          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services/digital-marketing">Digital Marketing</Link></li>
              <li><Link to="/services/software-solutions">Software Solutions</Link></li>
              <li><Link to="/services/ai-technology">AI Technology</Link></li>
              <li><Link to="/services/human-capital">Human Capital</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><a href="/#about">Our Story</a></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><a href="/#work">Our Work</a></li>
              <li><a href="/#process">Our Process</a></li>
              <li><a href="/#faq">FAQs</a></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-links">
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--secondary)' }}>📞</span>
                +968 7630 7656
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--secondary)' }}>✉</span>
                operation@tadbeertt.com
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--secondary)' }}>🌐</span>
                www.tadbeertt.com
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--secondary)' }}>📍</span>
                Al Noor Plaza, Madinat Qaboos, Muscat, Sultanate of Oman
              </li>
            </ul>
            <div style={{ marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <strong>Hours:</strong> Sunday – Thursday | 8:30 AM – 5:00 PM
            </div>
          </div>
        </div>
        
        <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>&copy; {new Date().getFullYear()} Tadbeer Transformation. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem' }}>
            <Link to="/privacy-policy" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Privacy Policy</Link>
            <Link to="/terms-of-service" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--secondary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>Terms of Service</Link>
          </div>
          <div style={{ fontFamily: 'var(--font-ar)' }}>شكراً Shukran</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
