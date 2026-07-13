import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfServicePage = () => {
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

        {/* Header */}
        <div style={{ borderBottom: '1px solid rgba(24,79,91,0.1)', paddingBottom: '2rem', marginBottom: '2.5rem' }}>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3rem)', fontWeight: '800', color: 'var(--primary)', lineHeight: '1.15', marginBottom: '0.75rem' }}>
            Terms of Service
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Last Updated: July 2026 | Governing Law: Sultanate of Oman
          </p>
        </div>

        {/* Content */}
        <div style={{ color: 'var(--text)', fontSize: '1.05rem', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <section>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--primary)', fontWeight: '700', marginBottom: '0.75rem' }}>
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing this website, utilizing our interactive ROI calculators, submitting data to our systems readiness check, or scheduling a strategy session, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please discontinue use of our site.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--primary)', fontWeight: '700', marginBottom: '0.75rem' }}>
              2. Interactive Calculators & Scope of Estimates
            </h2>
            <p>
              The outputs provided by the ROI Calculator and Omanization Compliance check are estimates generated based on industry formulas and user input. They are designed for informational and planning purposes only. They do not constitute certified accounting audits, binding tax advice, or formal legal opinions. Official consultation with our advisors is required to verify actual feasibility.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--primary)', fontWeight: '700', marginBottom: '0.75rem' }}>
              3. Intellectual Property
            </h2>
            <p>
              All code, designs, illustrations, brand mascot symbols, infographics, interactive scripts, and editorial copy displayed on this website are the exclusive intellectual property of Tadbeer Transformation. Unauthorized distribution, copying, or replication of these materials without express written authorization is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--primary)', fontWeight: '700', marginBottom: '0.75rem' }}>
              4. Governing Law and Jurisdiction
            </h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the Sultanate of Oman. Any disputes arising out of the use of this website, assessments, or related business services shall be subject to the exclusive jurisdiction of the courts of Muscat, Oman.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--primary)', fontWeight: '700', marginBottom: '0.75rem' }}>
              5. Contact and Corporate Details
            </h2>
            <p>
              For legal inquiries, compliance certificates, or formal notices, contact us at:
            </p>
            <div style={{ background: 'rgba(24,79,91,0.02)', border: '1px solid rgba(24,79,91,0.06)', borderRadius: '8px', padding: '1.25rem', marginTop: '0.75rem' }}>
              <strong>Tadbeer Transformation</strong><br />
              Email: operation@tadbeertt.com<br />
              Phone: +968 7630 7656<br />
              Location: Al Noor Plaza, Madinat Qaboos, Muscat, Sultanate of Oman
            </div>
          </section>
        </div>

      </div>
    </div>
  );
};

export default TermsOfServicePage;
