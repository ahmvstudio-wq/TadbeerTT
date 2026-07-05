import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AnimatedStat = ({ text, duration = 800 }) => {
  const [displayValue, setDisplayValue] = useState(text);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          startAnimation();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [text]);

  const startAnimation = () => {
    const match = text.match(/([0-9.]+)/);
    if (!match) {
      setDisplayValue(text);
      return;
    }
    const numStr = match[0];
    const target = parseFloat(numStr);
    const prefix = text.substring(0, match.index);
    const suffix = text.substring(match.index + numStr.length);

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentVal = Math.floor(progress * target);
      setDisplayValue(`${prefix}${currentVal}${suffix}`);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(text);
      }
    };
    window.requestAnimationFrame(step);
  };

  return <span ref={elementRef}>{displayValue}</span>;
};


// SVG Illustration for Healthcare
const HealthcareIllustration = ({ style }) => (
  <svg viewBox="0 0 120 120" style={{ width: '44px', height: '44px', flexShrink: 0, ...style }}>
    <motion.path
      d="M45,25 L75,25 L75,45 L95,45 L95,75 L75,75 L75,95 L45,95 L45,75 L25,75 L25,45 L45,45 Z"
      fill="rgba(24,79,91,0.04)"
      stroke="var(--primary)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    />
    <motion.path
      d="M35,60 L85,60"
      stroke="var(--secondary)"
      strokeWidth="2.5"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.5 }}
    />
    <motion.path
      d="M60,35 L60,85"
      stroke="var(--secondary)"
      strokeWidth="2.5"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.5 }}
    />
  </svg>
);

// SVG Illustration for Real Estate
const RealEstateIllustration = ({ style }) => (
  <svg viewBox="0 0 120 120" style={{ width: '44px', height: '44px', flexShrink: 0, ...style }}>
    <motion.path
      d="M20,90 L20,50 L60,20 L100,50 L100,90 Z"
      fill="rgba(202,169,76,0.04)"
      stroke="var(--primary)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    />
    <motion.path
      d="M45,90 L45,65 L75,65 L75,90"
      fill="none"
      stroke="var(--secondary)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
    />
    <motion.line
      x1="15" y1="90" x2="105" y2="90"
      stroke="var(--primary)"
      strokeWidth="2"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1 }}
    />
  </svg>
);

// SVG Illustration for Retail/E-Commerce
const RetailIllustration = ({ style }) => (
  <svg viewBox="0 0 120 120" style={{ width: '44px', height: '44px', flexShrink: 0, ...style }}>
    <motion.path
      d="M30,40 L90,40 L85,80 L35,80 Z"
      fill="rgba(24,79,91,0.04)"
      stroke="var(--primary)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    />
    <motion.path
      d="M45,40 Q60,20 75,40"
      fill="none"
      stroke="var(--secondary)"
      strokeWidth="2.5"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.5 }}
    />
    <circle cx="50" cy="60" r="4" fill="var(--secondary)" />
    <circle cx="70" cy="60" r="4" fill="var(--primary)" />
    <motion.line
      x1="45" y1="70" x2="75" y2="70"
      stroke="rgba(24,79,91,0.2)"
      strokeWidth="2"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1 }}
    />
  </svg>
);

// SVG Illustration for Logistics
const LogisticsIllustration = ({ style }) => (
  <svg viewBox="0 0 120 120" style={{ width: '44px', height: '44px', flexShrink: 0, ...style }}>
    <motion.rect
      x="20" y="40" width="55" height="40" rx="4"
      fill="none"
      stroke="var(--primary)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    />
    <motion.path
      d="M75,50 L95,50 L100,60 L100,80 L75,80"
      fill="rgba(202,169,76,0.05)"
      stroke="var(--secondary)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.4 }}
    />
    <circle cx="40" cy="80" r="8" fill="var(--primary)" />
    <circle cx="85" cy="80" r="8" fill="var(--primary)" />
    <motion.line
      x1="30" y1="55" x2="65" y2="55"
      stroke="rgba(24,79,91,0.2)"
      strokeWidth="2"
      strokeDasharray="4 4"
      initial={{ x: -10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1 }}
    />
  </svg>
);

// SVG Illustration for Construction
const ConstructionIllustration = ({ style }) => (
  <svg viewBox="0 0 120 120" style={{ width: '44px', height: '44px', flexShrink: 0, ...style }}>
    <motion.path
      d="M25,90 L25,30 L85,30"
      fill="none"
      stroke="var(--primary)"
      strokeWidth="2.5"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    />
    <motion.path
      d="M25,45 L85,30 L85,45 Z"
      fill="rgba(24,79,91,0.04)"
      stroke="var(--secondary)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.4 }}
    />
    <motion.path
      d="M50,90 L50,45"
      stroke="rgba(24,79,91,0.2)"
      strokeWidth="1.5"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.8 }}
    />
    <motion.path
      d="M75,90 L75,45"
      stroke="rgba(24,79,91,0.2)"
      strokeWidth="1.5"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.8 }}
    />
    <motion.line
      x1="15" y1="90" x2="105" y2="90"
      stroke="var(--primary)"
      strokeWidth="2"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1 }}
    />
  </svg>
);

// SVG Illustration for Manufacturing
const ManufacturingIllustration = ({ style }) => (
  <svg viewBox="0 0 120 120" style={{ width: '44px', height: '44px', flexShrink: 0, ...style }}>
    <motion.circle
      cx="60" cy="60" r="25"
      fill="rgba(24,79,91,0.04)"
      stroke="var(--primary)"
      strokeWidth="2.5"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    />
    <motion.circle
      cx="60" cy="60" r="10"
      fill="none"
      stroke="var(--secondary)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
    />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <motion.rect
        key={i}
        x="56" y="27" width="8" height="12" rx="1"
        fill="var(--primary)"
        style={{ originX: '60px', originY: '60px', rotate: angle }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 + i * 0.05 }}
      />
    ))}
  </svg>
);

// SVG Illustration for Government
const GovernmentIllustration = ({ style }) => (
  <svg viewBox="0 0 120 120" style={{ width: '44px', height: '44px', flexShrink: 0, ...style }}>
    <motion.polygon
      points="60,20 20,45 100,45"
      fill="rgba(24,79,91,0.04)"
      stroke="var(--primary)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    />
    {[35, 60, 85].map((x, i) => (
      <motion.rect
        key={i}
        x={x - 4} y="45" width="8" height="35"
        fill="none"
        stroke="var(--secondary)"
        strokeWidth="1.5"
        initial={{ scaleY: 0, originY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 + i * 0.2 }}
      />
    ))}
    <motion.line
      x1="15" y1="80" x2="105" y2="80"
      stroke="var(--primary)"
      strokeWidth="2.5"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1.2 }}
    />
  </svg>
);

// SVG Illustration for Corporate
const CorporateIllustration = ({ style }) => (
  <svg viewBox="0 0 120 120" style={{ width: '44px', height: '44px', flexShrink: 0, ...style }}>
    <motion.rect
      x="25" y="45" width="70" height="45" rx="3"
      fill="rgba(202,169,76,0.04)"
      stroke="var(--primary)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    />
    <motion.path
      d="M45,45 L45,35 Q60,25 75,35 L75,45"
      fill="none"
      stroke="var(--secondary)"
      strokeWidth="2.5"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.6 }}
    />
    <circle cx="45" cy="65" r="3" fill="var(--secondary)" />
    <circle cx="75" cy="65" r="3" fill="var(--primary)" />
    <motion.path
      d="M45,65 Q60,80 75,65"
      fill="none"
      stroke="rgba(24,79,91,0.2)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 1 }}
    />
  </svg>
);

// Easily editable, removable or reorderable industries config
const INDUSTRIES_DATA = [
  {
    illustration: <HealthcareIllustration />,
    title: 'Healthcare',
    desc: 'Secure workflows, stronger reporting, and improved service quality.',
    path: '/industries/healthcare'
  },
  {
    illustration: <RealEstateIllustration />,
    title: 'Real Estate',
    desc: 'Better transaction operations, portfolio visibility, and internal controls.',
    path: '/industries/real-estate'
  },
  {
    illustration: <LogisticsIllustration />,
    title: 'Logistics and Supply Chain',
    desc: 'Improved tracking, faster coordination, fewer delays caused by manual handovers.',
    path: '/industries/logistics'
  },
  {
    illustration: <RetailIllustration />,
    title: 'E-commerce and Retail',
    desc: 'Integrated ordering, inventory, and customer experience foundations.',
    path: '/industries/ecommerce'
  },
  {
    illustration: <ConstructionIllustration />,
    title: 'Construction',
    desc: 'Stronger governance, compliance workflows, and project control.',
    path: '/industries/construction'
  },
  {
    illustration: <ManufacturingIllustration />,
    title: 'Manufacturing',
    desc: 'ERP aligned operations, inventory control, maintenance planning, clear accountability.',
    path: '/industries/manufacturing'
  },
  {
    illustration: <GovernmentIllustration />,
    title: 'Government and Public Sector',
    desc: 'Secure governance foundations with measurable service delivery.',
    path: '/industries/government'
  }
];

const About = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const isHoveredRef = useRef(false);
  const tabsContainerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const isScrollingRef = useRef(false);
  const autoRotateInterval = 8000;
  const stepTime = 100;

  useEffect(() => {
    const timer = setInterval(() => {
      if (isHoveredRef.current) return;
      if (window.innerWidth <= 768) {
        setProgress(0);
        return;
      }
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveTab((curr) => (curr + 1) % 3);
          return 0;
        }
        return prev + (stepTime / autoRotateInterval) * 100;
      });
    }, stepTime);
    return () => clearInterval(timer);
  }, [activeTab]);

  useEffect(() => {
    if (!tabsContainerRef.current) return;
    const container = tabsContainerRef.current;
    
    const performScroll = () => {
      const activeEl = container.querySelector('.about-tab-item.active');
      if (activeEl) {
        const containerWidth = container.offsetWidth;
        if (containerWidth === 0) return; // Wait for layout
        
        if (activeTab === 0) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
          return;
        }
        
        const activeLeft = activeEl.offsetLeft;
        const activeWidth = activeEl.offsetWidth;
        const scrollTarget = activeLeft - (containerWidth / 2) + (activeWidth / 2);
        
        container.scrollTo({
          left: Math.max(0, scrollTarget),
          behavior: 'smooth'
        });
      }
    };

    performScroll();
    const t = setTimeout(performScroll, 100);
    return () => clearTimeout(t);
  }, [activeTab]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setProgress(0);
    
    if (window.innerWidth <= 768 && cardsContainerRef.current) {
      isScrollingRef.current = true;
      const container = cardsContainerRef.current;
      const cardWidth = container.offsetWidth;
      container.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 500);
    }
  };

  const handleCardsScroll = () => {
    if (window.innerWidth > 768) return;
    if (isScrollingRef.current) return;
    
    const container = cardsContainerRef.current;
    if (!container) return;
    
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.offsetWidth;
    if (cardWidth === 0) return;
    
    const newActiveTab = Math.round(scrollLeft / cardWidth);
    if (newActiveTab !== activeTab && newActiveTab >= 0 && newActiveTab < 3) {
      setActiveTab(newActiveTab);
      setProgress(0);
    }
  };

  const tabs = [
    {
      id: 0,
      label: "Who We Are",
      title: "A transformation partner built for Omani realities.",
      subtitle: "Strategic consulting meets hands-on execution.",
      body: "Tadbeer supports organisational and business transformation across strategy, technology, marketing, and human capital. We focus on root causes, build practical roadmaps, support implementation, and strengthen internal capability so improvements last.",
      highlights: [
        "4-Pillar Integration (Strategy, Tech, Marketing, People)",
        "Implementation-led operational accountability",
        "Built specifically for Oman Vision 2040 objectives"
      ]
    },
    {
      id: 1,
      label: "Why Tadbeer",
      title: "Businesses stall when capacity cannot support growth.",
      subtitle: "Building the operating systems of tomorrow.",
      body: "Growth needs more than ideas. It needs an operating system. Clear priorities. Defined ownership. Fit for purpose tools. Adoption by people. A delivery rhythm that keeps execution consistent.",
      highlights: [
        "KPI governance & structured operational ownership",
        "Pragmatic tool configuration rather than generic setups",
        "Sustainable capability building so results stay local"
      ]
    },
    {
      id: 2,
      label: "Who We Serve",
      title: "Built for SMEs, family businesses, and enterprises.",
      subtitle: "Tailored to Omani scale and governance.",
      body: "Some organisations need structure to professionalise and scale. Others need systems to gain control and visibility. Whether you are strengthening a growing family business or modernising a large organisation, the requirement is the same. Practical systems that match how work happens in Oman, including bilingual operations, governance requirements, and real decision constraints.",
      highlights: [
        "Bilingual operational frameworks (Arabic & English)",
        "Succession & modern corporate governance models",
        "Practical design aligned with local workforce realities"
      ]
    }
  ];

  return (
    <section id="about" className="about-narrative-section" style={{ padding: '6rem 0' }}>
      <div className="container">
        
        {/* Narrative Interactive Segment */}
        <div 
          onMouseEnter={() => { isHoveredRef.current = true; }}
          onMouseLeave={() => { isHoveredRef.current = false; }}
          className="about-interactive-row"
          style={{ 
            display: 'flex', 
            gap: '3rem', 
            marginBottom: '6rem',
            alignItems: 'stretch'
          }}
        >
          {/* Left Column: Tab list */}
          <div 
            ref={tabsContainerRef}
            style={{
              flex: '1 1 35%',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              justifyContent: 'center'
            }} 
            className="about-tabs-col"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <div
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  style={{
                    padding: '1.5rem',
                    background: isActive ? 'white' : 'rgba(24,79,91,0.02)',
                    border: isActive ? '1px solid var(--secondary)' : '1px solid var(--border)',
                    borderLeft: isActive ? '4px solid var(--secondary)' : '1px solid var(--border)',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    boxShadow: isActive ? '0 8px 20px rgba(202,169,76,0.06)' : 'none'
                  }}
                  className={`about-tab-item ${isActive ? 'active' : ''}`}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ 
                      fontSize: '0.85rem', 
                      fontWeight: '800', 
                      color: isActive ? 'var(--secondary)' : 'var(--text-muted)' 
                    }}>
                      0{tab.id + 1}
                    </span>
                    <h4 style={{ 
                      margin: 0, 
                      fontSize: '1.1rem', 
                      fontWeight: '700', 
                      color: isActive ? 'var(--primary)' : 'var(--text-muted)' 
                    }}>
                      {tab.label}
                    </h4>
                  </div>
                  
                  {/* Dynamic Progress Bar */}
                  {isActive && progress > 0 && (
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      height: '3px',
                      background: 'var(--secondary)',
                      width: `${progress}%`,
                      transition: 'width 0.1s linear'
                    }} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Display Cards Slider */}
          <div 
            ref={cardsContainerRef}
            onScroll={handleCardsScroll}
            className="about-cards-slider"
          >
            {tabs.map((tab) => {
              const isTabActive = activeTab === tab.id;
              return (
                <div 
                  key={tab.id}
                  style={{
                    background: 'white',
                    border: '1px solid var(--border)',
                    borderRadius: '16px',
                    padding: '3rem',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    minHeight: '380px'
                  }} 
                  className={`about-content-card ${isTabActive ? 'active' : ''}`}
                >
                  {/* Background design pattern */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '120px',
                    height: '120px',
                    background: 'radial-gradient(circle, rgba(202,169,76,0.04) 0%, transparent 70%)',
                    pointerEvents: 'none'
                  }} />

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <span className="section-label" style={{ color: 'var(--secondary)', alignSelf: 'flex-start' }}>
                      {tab.label}
                    </span>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <h3 style={{ fontSize: '1.75rem', color: 'var(--primary)', fontWeight: '800', lineHeight: '1.3', margin: 0 }}>
                        {tab.title}
                      </h3>
                      <h5 style={{ fontSize: '0.95rem', color: 'var(--secondary)', fontWeight: '600', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        {tab.subtitle}
                      </h5>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                        {tab.body}
                      </p>
                      
                      {/* Visual Highlights Grid */}
                      <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
                        gap: '1rem', 
                        marginTop: '1.5rem',
                        borderTop: '1px solid var(--border)',
                        paddingTop: '1.5rem'
                      }} className="highlights-grid">
                        {tab.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              background: 'var(--secondary)',
                              flexShrink: 0
                            }} />
                            <span style={{ fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: '600' }}>
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider line */}
        <div style={{ height: '1px', background: 'var(--border)', margin: '0 auto 5rem', maxWidth: '1000px' }} />

        {/* ─── Industries ─── */}
        <div style={{ marginBottom: '5rem' }}>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.1, duration: 1.2 }}
            style={{ marginBottom: '3.5rem' }}
          >
            <span className="section-label" style={{ color: 'var(--secondary)' }}>Industries</span>
            <h2 className="section-title">Sector aware transformation. Designed for Oman.</h2>
          </motion.div>

          <div className="industries-panel">
            <div className="industries-compact-grid">
              {INDUSTRIES_DATA.map((v, i) => (
                <motion.div
                  key={i}
                  className="industry-compact-item"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", bounce: 0.1, duration: 0.8, delay: i * 0.05 }}
                  whileHover={{ x: 6, scale: 1.02 }}
                  onClick={() => {
                    navigate(v.path);
                    window.scrollTo(0, 0);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="industry-icon-box">
                    {v.illustration}
                  </div>
                  <div className="industry-info">
                    <h4 className="industry-name">{v.title}</h4>
                    <p className="industry-text">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Key Metrics ─── */}
        <div className="company-stats-strip">
          {[
            { metric: "Multiple", label: "Active GCC Clients", desc: "Trusted by leading enterprises across the region", delay: 0.1 },
            { metric: "Proven", label: "Systems Delivered", desc: "Scalable infrastructures and operational frameworks", delay: 0.2 },
            { metric: "Strategic", label: "Client Capital Guided", desc: "Maximizing resource efficiency and strategic ROI", delay: 0.3 },
            { metric: "Vision 2040", label: "Omanization Aligned", desc: "Committed to the Sultanate's long-term economic objectives", delay: 0.4 }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              className="stat-box-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.15, duration: 1.0, delay: stat.delay }}
            >
              <h3 className="stat-value-digits"><AnimatedStat text={stat.metric} /></h3>
              <h4 className="stat-label-title">{stat.label}</h4>
              <p className="stat-description-info">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
