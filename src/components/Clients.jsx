import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import alHarrasi      from '../assets/clients/al-harrasi-rope-factory.png';
import omanAir        from '../assets/clients/oman-air.png';
import makranMeat     from '../assets/clients/mafran-meat.png';
import gloriaJeans    from '../assets/clients/gloria-jeans.png';
import alQurumPerfumes from '../assets/clients/al-qurum-perfumes.png';
import sultanateOfMarble from '../assets/clients/sultanate-of-marble.png';
import omanVision2040 from '../assets/clients/oman-vision-2040.png';
import amecAlmusharfi from '../assets/clients/amec-almusharfi.png';
import atiin          from '../assets/clients/atiin.png';
import troxy          from '../assets/clients/troxy.png';
import oudhAlKabir    from '../assets/clients/oudh-al-kabir.png';
import yallaPass      from '../assets/clients/yalla-pass.jpg';
import tameerInvestments from '../assets/clients/tameer-investments.png';

const Clients = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const row1 = [
    { name: "Al Harrasi Rope Factory",    logo: alHarrasi,    scale: 1.9,  offset: '0px' },
    { name: "Oman Air",                   logo: omanAir,       scale: 2.0,  offset: '-1px' },
    { name: "Makran Meat",                logo: makranMeat,    scale: 1.9,  offset: '0px' },
    { name: "Gloria Jean's",              logo: gloriaJeans,   scale: 1.9,  offset: '0px' },
  ];

  const row2 = [
    { name: "Al Qurum Perfumes",          logo: alQurumPerfumes,scale: 2.0,  offset: '0px' },
    { name: "Sultanate of Marble",        logo: sultanateOfMarble,scale: 2.0,offset: '0px' },
    { name: "Oman Vision 2040",           logo: omanVision2040,scale: 1.9,  offset: '0px' },
    { name: "AMEC",                       logo: amecAlmusharfi,scale: 2.0,  offset: '0px' },
    { name: "Atur",                       logo: atiin,         scale: 1.9,  offset: '0px' },
  ];

  const row3 = [
    { name: "Oudh Al Kabir",              logo: oudhAlKabir,   scale: 1.85, offset: '0px' },
    { name: "Yalla Pass",                 logo: yallaPass,     scale: 1.9,  offset: '0px' },
    { name: "Troxy Oman",                 logo: troxy,         scale: 2.0,  offset: '0px' },
    { name: "Tameer Investments",         logo: tameerInvestments, scale: 1.85, offset: '0px' },
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
            className="client-logo-card"
          >
            {/* Logo Container */}
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
                className="client-img"
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  transform: `scale(${client.scale}) translateY(${client.offset || '0px'})`,
                  mixBlendMode: 'multiply'
                }}
              />
            </div>
            {/* Typography client name */}
            <span className="client-name">
              {client.name}
            </span>
          </div>
        ))}
        {/* Duplicate items for seamless continuous looping */}
        {items.map((client, index) => (
          <div 
            key={`dup-${index}`} 
            className="client-logo-card"
          >
            {/* Logo Container */}
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
                className="client-img"
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  transform: `scale(${client.scale}) translateY(${client.offset || '0px'})`,
                  mixBlendMode: 'multiply'
                }}
              />
            </div>
            {/* Typography client name */}
            <span className="client-name">
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="clients" className="clients-section" style={{ padding: '6rem 0', background: '#FDFDFB' }}>
      <motion.div 
        className="container" 
        style={{ padding: '0 5%' }}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        
        {/* Trust (Logos) Section */}
        <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
          <h2 style={{ 
            fontSize: '2.2rem', 
            color: 'var(--primary)', 
            fontWeight: '800', 
            marginBottom: '1rem',
            letterSpacing: '-0.5px'
          }}>
            Trusted by Leading Organizations in Oman and the GCC
          </h2>
        </div>

        {/* Triple lane counter-scrolling marquees in a centered lean frame */}
        <div className="clients-marquee-frame" style={{ 
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

      </motion.div>
    </section>
  );
};

export default Clients;
