import React from 'react';

import alHarrasi      from '../assets/clients/al-harrasi-rope-factory.png';
import omanAir        from '../assets/clients/oman-air.png';
import tamimahTelecom from '../assets/clients/tamimah-telecom.png';
import mafranMeat     from '../assets/clients/mafran-meat.png';
import gloriaJeans    from '../assets/clients/gloria-jeans.png';
import alQurumPerfumes from '../assets/clients/al-qurum-perfumes.png';
import sultanateOfMarble from '../assets/clients/sultanate-of-marble.png';
import ministryOfAwqaf from '../assets/clients/ministry-of-awqaf.png';
import amecAlmusharfi from '../assets/clients/amec-almusharfi.png';
import atiin          from '../assets/clients/atiin.png';
import troxy          from '../assets/clients/troxy.png';
import yalla          from '../assets/clients/yalla.png';
import oudhAlKabir    from '../assets/clients/oudh-al-kabir.png';
import yallaPass      from '../assets/clients/yalla-pass.jpg';

const Clients = () => {
  const row1 = [
    { name: "Al Harrasi Rope Factory",    logo: alHarrasi,    scale: 1.6,  offset: '0px' },
    { name: "Oman Air",                   logo: omanAir,       scale: 1.7,  offset: '-1px' },
    { name: "Tamimah Telecom",            logo: tamimahTelecom,scale: 1.7,  offset: '0px' },
    { name: "Mafran Meat",                logo: mafranMeat,    scale: 1.25, offset: '0px' },
    { name: "Gloria Jean's",              logo: gloriaJeans,   scale: 1.6,  offset: '0px' },
  ];

  const row2 = [
    { name: "Al Qurum Perfumes",          logo: alQurumPerfumes,scale: 1.7,  offset: '0px' },
    { name: "Sultanate of Marble",        logo: sultanateOfMarble,scale: 1.7,  offset: '0px' },
    { name: "Ministry of Awqaf",          logo: ministryOfAwqaf,scale: 2.0,  offset: '2px' },
    { name: "AMEC Almusharfi",            logo: amecAlmusharfi,scale: 1.7,  offset: '0px' },
    { name: "Atiin",                      logo: atiin,         scale: 1.65, offset: '0px' },
  ];

  const row3 = [
    { name: "Troxy",                      logo: troxy,         scale: 1.7,  offset: '0px' },
    { name: "Oudh Al Kabir",              logo: oudhAlKabir,   scale: 1.35, offset: '0px' },
    { name: "Yalla Pass",                 logo: yallaPass,     scale: 1.45, offset: '0px' },
    { name: "Yalla",                      logo: yalla,         scale: 1.7,  offset: '0px' },
  ];

  const renderMarqueeRow = (items, speed = '40s', reverse = false) => (
    <div className="marquee-container" style={{ margin: '0.35rem 0', padding: '0.15rem 0', display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap' }}>
      <div 
        className="marquee-content" 
        style={{ 
          display: 'flex',
          gap: '1.25rem', 
          alignItems: 'center',
          animation: `scroll ${speed} linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal'
        }}
      >
        {items.map((client, index) => (
          <div 
            key={index} 
            className="client-card-chip"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              background: 'white',
              padding: '0.5rem 1.25rem 0.5rem 0.65rem',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(28, 27, 23, 0.02)',
              border: '1px solid rgba(0, 0, 0, 0.04)',
              flexShrink: 0,
              minWidth: '240px',
              maxWidth: '280px',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--secondary)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(202, 169, 76, 0.08)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.04)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(28, 27, 23, 0.02)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* Larger, Highly Visible Logo Container */}
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '8px',
              overflow: 'hidden',
              background: '#FDFDFB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              border: '1px solid rgba(0, 0, 0, 0.03)'
            }}>
              <img 
                src={client.logo} 
                alt="" 
                style={{
                  maxHeight: '95%',
                  maxWidth: '95%',
                  objectFit: 'contain',
                  transform: `scale(${client.scale}) translateY(${client.offset || '0px'})`,
                  mixBlendMode: 'multiply'
                }}
              />
            </div>
            {/* Typography client name */}
            <span style={{ 
              fontSize: '0.9rem', 
              fontWeight: '600', 
              color: 'var(--text-main)', 
              letterSpacing: '0.2px',
              whiteSpace: 'nowrap' 
            }}>
              {client.name}
            </span>
          </div>
        ))}
        {/* Duplicate items for seamless continuous looping */}
        {items.map((client, index) => (
          <div 
            key={`dup-${index}`} 
            className="client-card-chip"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              background: 'white',
              padding: '0.5rem 1.25rem 0.5rem 0.65rem',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(28, 27, 23, 0.02)',
              border: '1px solid rgba(0, 0, 0, 0.04)',
              flexShrink: 0,
              minWidth: '240px',
              maxWidth: '280px',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--secondary)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(202, 169, 76, 0.08)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.04)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(28, 27, 23, 0.02)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* Larger, Highly Visible Logo Container */}
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '8px',
              overflow: 'hidden',
              background: '#FDFDFB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              border: '1px solid rgba(0, 0, 0, 0.03)'
            }}>
              <img 
                src={client.logo} 
                alt="" 
                style={{
                  maxHeight: '95%',
                  maxWidth: '95%',
                  objectFit: 'contain',
                  transform: `scale(${client.scale}) translateY(${client.offset || '0px'})`,
                  mixBlendMode: 'multiply'
                }}
              />
            </div>
            {/* Typography client name */}
            <span style={{ 
              fontSize: '0.9rem', 
              fontWeight: '600', 
              color: 'var(--text-main)', 
              letterSpacing: '0.2px',
              whiteSpace: 'nowrap' 
            }}>
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="clients" className="clients-section" style={{ padding: '3.5rem 0', background: '#FDFDFB' }}>
      <div className="container" style={{ padding: '0 5%' }}>
        
        {/* Header - Styled like the reference screenshot */}
        <div className="text-center" style={{ maxWidth: '750px', margin: '0 auto 2.5rem' }}>
          <h2 style={{ 
            fontSize: '2.2rem', 
            color: 'var(--text-main)', 
            fontWeight: '800', 
            marginBottom: '0.75rem',
            letterSpacing: '-0.5px'
          }}>
            Our Clients
          </h2>
          <p style={{ 
            color: 'var(--text-muted)', 
            fontSize: '0.95rem', 
            lineHeight: '1.5',
            fontWeight: '400',
            maxWidth: '620px',
            margin: '0 auto'
          }}>
            Forward-thinking brands trust Tadbeer to drive scalable growth and digital transformation. We partner with companies ready to build sustainable operational loops.
          </p>
        </div>

        {/* Triple lane counter-scrolling marquees in a centered lean frame */}
        <div style={{ 
          maxWidth: '1000px', 
          margin: '0 auto', 
          borderRadius: '16px', 
          overflow: 'hidden', 
          boxShadow: '0 8px 32px rgba(24, 79, 91, 0.02)',
          border: '1px solid rgba(24, 79, 91, 0.08)',
          background: 'rgba(24, 79, 91, 0.01)',
          padding: '1.5rem 0',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.35rem'
        }}>
          {renderMarqueeRow(row1, '35s', false)}
          {renderMarqueeRow(row2, '45s', true)}
          {renderMarqueeRow(row3, '38s', false)}
        </div>

      </div>
    </section>
  );
};

export default Clients;
