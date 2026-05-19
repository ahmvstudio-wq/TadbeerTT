import React from 'react';
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
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '300px' }}>
              From strategy to systems, people to technology, we stand beside you at every step. With global expertise, local insight, and full alignment with Oman Vision 2040, we transform businesses into lasting brands.
            </p>
          </div>
          
          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li>Strategic Growth</li>
              <li>Technology Systems</li>
              <li>Marketing & Growth</li>
              <li>Talent Transformation</li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li>About Us</li>
              <li>Our Journey</li>
              <li>Clients</li>
              <li>Partners</li>
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
                Al Noor Plaza, Madinat Qaboos, Muscat, Oman
              </li>
            </ul>
            <div style={{ marginTop: '1.5rem', color: 'var(--text-muted)' }}>
              <strong>Hours:</strong> Sunday – Thursday | 8:30 AM – 5:00 PM
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div>&copy; {new Date().getFullYear()} Tadbeer Transformation. All rights reserved.</div>
          <div style={{ fontFamily: 'var(--font-ar)' }}>شكراً Shukran</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
