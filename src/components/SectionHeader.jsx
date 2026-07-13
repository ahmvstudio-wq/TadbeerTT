import React from 'react';

const SectionHeader = ({ label, title, subtitle, centered = false }) => {
  return (
    <div className={`section-header-block ${centered ? 'text-center' : ''}`} style={{ marginBottom: '3rem' }}>
      
      {title && <h2 className="section-title">{title}</h2>}
      {subtitle && <p className="section-subtitle" style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.6', marginTop: '1rem', maxWidth: centered ? '700px' : 'none', marginInline: centered ? 'auto' : '0' }}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
