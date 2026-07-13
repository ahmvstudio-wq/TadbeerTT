import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: '#FAF9F6', minHeight: '100vh', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Navigation / Back Button */}
        <Link 
          to="/" 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            color: 'var(--primary)', 
            textDecoration: 'none', 
            fontWeight: '600',
            fontSize: '0.95rem',
            marginBottom: '3rem',
            transition: 'color 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.color = 'var(--secondary)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--primary)'}
        >
          <ArrowLeft size={16} style={{ transform: 'translateY(-1px)' }} /> Back to Homepage
        </Link>

        <div style={{ borderBottom: '1px solid rgba(24,79,91,0.1)', paddingBottom: '2rem', marginBottom: '2.5rem' }}>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3rem)', fontWeight: '800', color: 'var(--primary)', lineHeight: '1.15', marginBottom: '0.75rem' }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Last Updated: July 2026 | Effective Date for GCC Operations
          </p>
        </div>

        {/* Content */}
        <div style={{ color: 'var(--text)', fontSize: '1.05rem', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <section>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--primary)', fontWeight: '700', marginBottom: '0.75rem' }}>
              1. Introduction
            </h2>
            <p>
              Tadbeer Transformation ("we," "our," or "us") operates the website <a href="https://www.tadbeertt.com" style={{ color: 'var(--secondary)', fontWeight: '600' }}>www.tadbeertt.com</a>. We are committed to protecting the business and personal data of our clients, visitors, and partners in accordance with Omani Law and global data protection standards (including the Omani Personal Data Protection Law promulgated by Royal Decree No. 6/2022).
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--primary)', fontWeight: '700', marginBottom: '0.75rem' }}>
              2. Information We Collect
            </h2>
            <p>
              We collect information you provide directly to us through our interactive digital audit assessment tools, calculators, contact forms, and lead-capture systems:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Business Indicators:</strong> Monthly Revenue, Marketing Spend, Staff Size, and operational friction scores needed to compute ROI.</li>
              <li><strong>Contact Information:</strong> Name, professional Email address, Phone number, and Organization name.</li>
              <li><strong>Operational Handovers:</strong> Answers provided regarding your system readiness, compliance audits, or consulting requests.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--primary)', fontWeight: '700', marginBottom: '0.75rem' }}>
              3. How We Use Your Data
            </h2>
            <p>
              We use the collected information for specific, legitimate business purposes:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>To evaluate and present customized digital transformation blueprints.</li>
              <li>To provide results for the ROI Calculator and Omanization Compliance tools.</li>
              <li>To schedule complimentary strategy sessions and proposals requested by you.</li>
              <li>To comply with regulatory audit processes within the Sultanate of Oman.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--primary)', fontWeight: '700', marginBottom: '0.75rem' }}>
              4. Data Retention and Security
            </h2>
            <p>
              We prioritize the security of your data. All calculated figures and contact forms are stored securely on our encrypted databases. We implement standard physical, technical, and administrative controls to protect credentials and prevent unauthorized data leakage. We do not sell or lease your business parameters to external marketing firms.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--primary)', fontWeight: '700', marginBottom: '0.75rem' }}>
              5. Contact Us
            </h2>
            <p>
              For questions regarding this policy or to request data removal under local compliance acts, contact our operations office:
            </p>
            <div style={{ background: 'rgba(24,79,91,0.02)', border: '1px solid rgba(24,79,91,0.06)', borderRadius: '8px', padding: '1.25rem', marginTop: '0.75rem' }}>
              <strong>Tadbeer Transformation</strong><br />
              Email: operation@tadbeertt.com<br />
              Phone: +968 7630 7656<br />
              Address: Al Noor Plaza, Madinat Qaboos, Muscat, Sultanate of Oman
            </div>
          </section>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
