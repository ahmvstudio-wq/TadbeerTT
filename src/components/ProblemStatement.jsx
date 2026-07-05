import React from 'react';

const ProblemStatement = () => {
  return (
    <section id="problem-statement" className="problem-statement-section" style={{ padding: '6rem 0', background: '#FDFDFB' }}>
      <div className="container" style={{ padding: '0 5%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          {/* Left Column: Heading, Supporting Text, CTA */}
          <div style={{ textAlign: 'left' }}>
            <span className="section-label" style={{ color: 'var(--secondary)', display: 'inline-block', marginBottom: '0.75rem' }}>Problem Statement</span>
            <h2 style={{ 
              fontSize: '2.4rem', 
              color: 'var(--primary)', 
              fontWeight: '800', 
              marginBottom: '1.5rem',
              lineHeight: '1.25',
              letterSpacing: '-0.5px'
            }}>
              If growth feels harder than it should, the issue is usually the system.
            </h2>
            <p style={{ 
              color: 'var(--text-muted)', 
              fontSize: '1.05rem', 
              lineHeight: '1.7',
              marginBottom: '2rem'
            }}>
              As companies grow, manual work increases, accountability becomes unclear, reporting slows down, and decisions get made with partial visibility. The result is operational friction that limits scale.
            </p>
            <a 
              href="#readiness-score" 
              className="btn btn-primary"
              style={{ padding: '1rem 2rem', fontSize: '1rem' }}
            >
              Take the Business Assessment
            </a>
          </div>

          {/* Right Column: Common signs (styled cards) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--primary)', fontWeight: '700', marginBottom: '0.5rem' }}>Common Signs:</h3>
            {[
              "Operations depend on Excel and WhatsApp to move work forward.",
              "Approvals and handovers take too long.",
              "Reports take days and still feel uncertain.",
              "Technology exists, but adoption is weak.",
              "Performance depends on individuals, not structure."
            ].map((sign, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: 'white', 
                  border: '1px solid var(--border)', 
                  borderRadius: '8px', 
                  padding: '1rem 1.25rem', 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '0.75rem',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.01)'
                }}
              >
                <span style={{ color: 'var(--secondary)', fontWeight: 'bold', fontSize: '1.1rem', lineHeight: '1.2' }}>•</span>
                <span style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: '500', lineHeight: '1.4' }}>{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
