import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, ShieldCheck, TrendingUp, Users, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const milestones = [
  {
    year: 'Post-Ramadan 2025',
    emoji: '🌙',
    title: 'The Spark | البداية',
    summary: 'Founded in the heart of Muscat.',
    detail: 'Our founders witnessed a critical gap: brilliant entrepreneurs across Oman lacked access to international-standard expertise. Tadbeer was born — meaning "planning with wisdom and deliberate action" (تدبير) — to bridge that gap.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80&auto=format',
  },
  {
    year: 'Q2 2025',
    emoji: '🤝',
    title: 'First Alliances | الشراكات الأولى',
    summary: 'Trusted by leading Omani brands.',
    detail: 'From Al Harrasi Rope Factory to Gloria Jean\'s and Oman Air — businesses across F&B, government, manufacturing, and telecom chose Tadbeer as their transformation partner.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80&auto=format',
  },
  {
    year: 'Mid 2025',
    emoji: '🚀',
    title: 'The Four Pillars | الركائز الأربع',
    summary: 'Full-spectrum services operational.',
    detail: 'Digital Marketing, Software Solutions (ERP, WMS, HRMS), AI & Next-Gen Tech, and Human Capital Management — all four pillars fully launched with dedicated international specialists.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80&auto=format',
  },
  {
    year: 'Late 2025',
    emoji: '📈',
    title: 'Scaling Impact | توسيع الأثر',
    summary: '15+ clients, 40+ transformations, 1M+ OMR managed.',
    detail: 'Delivering measurable results: operational efficiency, brand authority, AI-powered infrastructure, and compliant HR systems across every client engagement.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format',
  },
  {
    year: '2025–2026',
    emoji: '🌍',
    title: 'GCC Expansion | التوسع الخليجي',
    summary: 'Beyond Oman — Saudi, UAE, and GCC.',
    detail: 'Expanding our network of consultants and technology specialists across the Gulf, bringing the same accountability and expertise to new markets.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80&auto=format',
  },
  {
    year: 'Vision 2040',
    emoji: '🔮',
    title: 'The Future | المستقبل',
    summary: 'Aligned with Oman\'s national vision.',
    detail: 'Building sustainable competitive advantages for businesses that outlast campaigns, trends, and market cycles — fully aligned with Oman Vision 2040 for long-term national prosperity.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80&auto=format',
  }
];

const easeTransition = [0.22, 1, 0.36, 1];

// Inline SVG Illustration 1: Muscat Spark
const MuscatSparkIllustration = () => (
  <svg viewBox="0 0 400 400" className="svg-illustration" width="100%" height="100%">
    {/* Background Glow */}
    <circle cx="200" cy="200" r="120" fill="url(#goldGlow)" opacity="0.15" />
    
    {/* Stylized Omani Arch Gateway */}
    <motion.path
      d="M 120 320 L 120 220 C 120 120, 280 120, 280 220 L 280 320"
      fill="none"
      stroke="var(--primary)"
      strokeWidth="3"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: easeTransition }}
    />
    
    <motion.path
      d="M 145 320 L 145 230 C 145 150, 255 150, 255 230 L 255 320"
      fill="none"
      stroke="var(--secondary)"
      strokeWidth="1.5"
      strokeDasharray="4 4"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, delay: 0.3, ease: easeTransition }}
    />

    {/* Digital Tech Lines shooting out */}
    {[
      { d: "M 200 130 L 200 40", cx: 200, cy: 40 },
      { d: "M 130 180 L 50 140", cx: 50, cy: 140 },
      { d: "M 270 180 L 350 140", cx: 350, cy: 140 },
      { d: "M 120 250 L 40 250", cx: 40, cy: 250 },
      { d: "M 280 250 L 360 250", cx: 360, cy: 250 },
    ].map((line, i) => (
      <g key={i}>
        <motion.path
          d={line.d}
          fill="none"
          stroke="var(--secondary)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 + i * 0.1, ease: easeTransition }}
        />
        <motion.circle
          cx={line.cx}
          cy={line.cy}
          r="5"
          fill="var(--primary)"
          stroke="var(--secondary)"
          strokeWidth="1.5"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, delay: 1.5 + i * 0.1 }}
        />
      </g>
    ))}

    {/* Inner decorative Omani element */}
    <motion.path
      d="M 200 200 Q 200 170 215 185 Q 230 200 200 230 Q 170 200 185 185 Q 200 170 200 200"
      fill="none"
      stroke="var(--secondary)"
      strokeWidth="2"
      initial={{ scale: 0, rotate: -45 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 1, ease: easeTransition }}
    />

    <defs>
      <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="var(--secondary)" />
        <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

// Inline SVG Illustration 2: The Gap & Bridge
const TheGapIllustration = () => (
  <svg viewBox="0 0 400 400" className="svg-illustration" width="100%" height="100%">
    {/* Left Platform: GCC Businesses */}
    <motion.path
      d="M 20 280 L 140 280 L 120 340 L 20 340 Z"
      fill="rgba(24,79,91,0.05)"
      stroke="var(--primary)"
      strokeWidth="2"
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: easeTransition }}
    />
    <text x="35" y="315" fill="var(--primary)" fontSize="11" fontWeight="700" letterSpacing="0.5">GCC STARTUPS</text>

    {/* Right Platform: Global Standards */}
    <motion.path
      d="M 260 280 L 380 280 L 380 340 L 280 340 Z"
      fill="rgba(24,79,91,0.05)"
      stroke="var(--primary)"
      strokeWidth="2"
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: easeTransition }}
    />
    <text x="275" y="315" fill="var(--primary)" fontSize="11" fontWeight="700" letterSpacing="0.5">GLOBAL METRICS</text>

    {/* The Bridging Connection (Drawn on scroll) */}
    <motion.path
      d="M 140 280 Q 200 230 260 280"
      fill="none"
      stroke="var(--secondary)"
      strokeWidth="4"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, delay: 0.8, ease: easeTransition }}
    />
    
    {/* Supporting bridge trusses */}
    <motion.path
      d="M 155 273 L 155 300 M 180 262 L 180 320 M 200 258 L 200 330 M 220 262 L 220 320 M 245 273 L 245 300"
      fill="none"
      stroke="var(--secondary)"
      strokeWidth="1.5"
      strokeDasharray="2 2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 1.5, ease: easeTransition }}
    />

    {/* Glowing bridge node in center */}
    <motion.circle
      cx="200"
      cy="255"
      r="8"
      fill="var(--bg)"
      stroke="var(--primary)"
      strokeWidth="3"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 120, delay: 1.8 }}
    />
    <motion.circle
      cx="200"
      cy="255"
      r="16"
      fill="none"
      stroke="var(--secondary)"
      strokeWidth="1"
      animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.8, 0.3] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  </svg>
);

// Inline SVG Illustration 3: Core Synergy
const SynergyIllustration = () => (
  <svg viewBox="0 0 400 400" className="svg-illustration" width="100%" height="100%">
    {/* Central Hub */}
    <motion.circle
      cx="200"
      cy="200"
      r="45"
      fill="rgba(202,169,76,0.1)"
      stroke="var(--secondary)"
      strokeWidth="3"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
    />
    <text x="175" y="205" fill="var(--primary)" fontSize="13" fontWeight="700" letterSpacing="0.5">TADBEER</text>

    {/* 4 Surrounding Nodes */}
    {[
      { label: "MARKETING", cx: 200, cy: 80, delay: 0.5 },
      { label: "SOFTWARE", cx: 320, cy: 200, delay: 0.7 },
      { label: "AI SYSTEMS", cx: 200, cy: 320, delay: 0.9 },
      { label: "HUMAN CAP", cx: 80, cy: 200, delay: 1.1 },
    ].map((node, i) => (
      <g key={i}>
        {/* Connection Line */}
        <motion.path
          d={`M 200 200 L ${node.cx} ${node.cy}`}
          fill="none"
          stroke="var(--primary)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: node.delay - 0.2, ease: easeTransition }}
        />
        
        {/* Node Circle */}
        <motion.circle
          cx={node.cx}
          cy={node.cy}
          r="35"
          fill="var(--bg)"
          stroke="var(--primary)"
          strokeWidth="2.5"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, delay: node.delay }}
        />
        
        {/* Node Label */}
        <text
          x={node.cx}
          y={node.cy + 4}
          textAnchor="middle"
          fill="var(--text-main)"
          fontSize="8"
          fontWeight="600"
        >
          {node.label}
        </text>
      </g>
    ))}

    {/* Orbiting Ring */}
    <motion.circle
      cx="200"
      cy="200"
      r="120"
      fill="none"
      stroke="var(--secondary)"
      strokeWidth="1"
      strokeDasharray="5 15"
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    />
  </svg>
);

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleMilestone = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };



  return (
    <section id="about" className="about-narrative-section">
      <div className="container">
        


        {/* 2. CONDENSED VISUAL STORY (One Screen Scroll) */}
        <div className="visual-story-dashboard" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '4rem 0', marginBottom: '4rem' }}>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '4rem' }}
          >
            <span className="section-label">Our Foundation | أساسنا</span>
            <h2 className="section-title">The Tadbeer Engine</h2>
          </motion.div>

          <div className="visual-story-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            
            {/* 01. The Reality */}
            <motion.div 
              className="visual-story-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ background: 'var(--bg-alt)', borderRadius: '16px', border: '1px solid var(--border)', padding: '2.5rem 1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '2rem', transition: 'transform 0.3s ease', cursor: 'pointer' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div className="visual-story-graphic" style={{ height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TheGapIllustration />
              </div>
              <div className="visual-story-text">
                <span className="story-tag" style={{ display: 'block', marginBottom: '0.75rem' }}>01 / The Market Reality</span>
                <h4 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '700' }}>Ambitious Ideas.<br />Outdated Execution.</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>Bridging the gap between brilliant GCC startups and global operational metrics. Fully accountable execution.</p>
              </div>
            </motion.div>

            {/* 02. The Philosophy */}
            <motion.div 
              className="visual-story-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ background: 'var(--bg-alt)', borderRadius: '16px', border: '1px solid var(--secondary)', padding: '2.5rem 1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '2rem', transition: 'transform 0.3s ease', cursor: 'pointer', boxShadow: '0 10px 30px rgba(202, 169, 76, 0.1)' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div className="visual-story-graphic" style={{ height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MuscatSparkIllustration />
              </div>
              <div className="visual-story-text">
                <span className="story-tag" style={{ display: 'block', marginBottom: '0.75rem' }}>02 / Wisdom in Action</span>
                <h4 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '700' }}>Tadbeer (تدبير)</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>The art of planning with wisdom. We build structural growth foundations directly aligned with Oman Vision 2040.</p>
              </div>
            </motion.div>

            {/* 03. The Synergy */}
            <motion.div 
              className="visual-story-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ background: 'var(--bg-alt)', borderRadius: '16px', border: '1px solid var(--border)', padding: '2.5rem 1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '2rem', transition: 'transform 0.3s ease', cursor: 'pointer' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div className="visual-story-graphic" style={{ height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SynergyIllustration />
              </div>
              <div className="visual-story-text">
                <span className="story-tag" style={{ display: 'block', marginBottom: '0.75rem' }}>03 / The Synergy</span>
                <h4 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '700' }}>Unified Transformation</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>Marketing, Software, AI, and Human Capital fused into a single operational loop. Complete integration. Zero excuses.</p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* 3. INTERACTIVE STORY JOURNEY TIMELINE (HORIZONTAL GRAPH) */}
        <div className="timeline-journey-wrapper" style={{ marginBottom: '6rem' }}>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '2rem' }}
          >
            <span className="section-label">Interactive Roadmap | رحلتنا التفاعلية</span>
            <h2 className="section-title">The Tadbeer Chronicle</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '1rem auto 0' }}>
              Click any node along our operational timeline graph to inspect real-world details.
            </p>
          </motion.div>

          <div className="horizontal-timeline-container" style={{ position: 'relative', width: '100%', maxWidth: '1000px', margin: '0 auto', overflowX: 'auto', paddingBottom: '1rem' }}>
            <div style={{ minWidth: '800px', position: 'relative' }}>
              <svg viewBox="0 0 1000 350" style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}>
                {/* SVG Filters for Glow Effects */}
                <defs>
                  <filter id="timelineGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComponentTransfer in="blur" result="glow">
                      <feFuncA type="linear" slope="1.5" />
                    </feComponentTransfer>
                    <feMerge>
                      <feMergeNode in="glow"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Main Line connecting points */}
                <motion.path 
                  d="M 100 120 L 260 250 L 420 100 L 580 200 L 740 130 L 900 240"
                  fill="none"
                  stroke="var(--secondary)"
                  strokeWidth="3"
                  filter="url(#timelineGlow)"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: easeTransition }}
                />
                
                {/* Nodes and Text */}
                {[
                  { x: 100, y: 120, pos: 'top' },
                  { x: 260, y: 250, pos: 'bottom' },
                  { x: 420, y: 100, pos: 'top' },
                  { x: 580, y: 200, pos: 'bottom' },
                  { x: 740, y: 130, pos: 'top' },
                  { x: 900, y: 240, pos: 'bottom' }
                ].map((point, index) => {
                  const milestone = milestones[index];
                  const isActive = activeIndex === index;
                  const yOffset = point.pos === 'top' ? -35 : 45;
                  const textY = point.y + yOffset;

                  return (
                    <g key={index} onClick={() => toggleMilestone(index)} style={{ cursor: 'pointer' }} className="timeline-chart-group">
                      
                      {/* Constant Pulsating Light Effect 1: Outer Ring */}
                      <motion.circle
                        cx={point.x}
                        cy={point.y}
                        r="16"
                        fill="none"
                        stroke="var(--secondary)"
                        strokeWidth="1.5"
                        animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                      />

                      {/* Constant Pulsating Light Effect 2: Inner Glow Aura */}
                      <motion.circle
                        cx={point.x}
                        cy={point.y}
                        r="20"
                        fill="rgba(202, 169, 76, 0.15)"
                        filter="url(#timelineGlow)"
                        animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                      />

                      {/* Node Outer Ring */}
                      <motion.circle 
                        cx={point.x} 
                        cy={point.y} 
                        r={isActive ? 12 : 8}
                        fill="var(--bg)"
                        stroke="var(--secondary)"
                        strokeWidth="3"
                        filter="url(#timelineGlow)"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.5 + index * 0.2 }}
                        className="timeline-chart-node"
                      />
                      
                      {/* Node Inner Dot (if active) */}
                      {isActive && (
                        <circle cx={point.x} cy={point.y} r="5" fill="var(--secondary)" />
                      )}

                      {/* Text Group */}
                      <motion.g 
                        initial={{ opacity: 0, y: point.pos === 'top' ? 10 : -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      >
                        <text 
                          x={point.x} 
                          y={textY - 18} 
                          textAnchor="middle" 
                          fill="var(--secondary)"
                          fontWeight="700"
                          fontSize="13"
                          letterSpacing="1"
                        >
                          {milestone.year}
                        </text>
                        <text 
                          x={point.x} 
                          y={textY} 
                          textAnchor="middle" 
                          fill={isActive ? 'var(--primary)' : 'var(--text-main)'}
                          fontWeight="600"
                          fontSize="15"
                        >
                          {milestone.title.split(' | ')[0]}
                        </text>
                      </motion.g>
                    </g>
                  )
                })}
              </svg>

              {/* Detailed Info Box (shows below the chart) */}
              <AnimatePresence mode="wait">
                {activeIndex !== null && (
                  <motion.div 
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      marginTop: '1rem',
                      padding: '2rem',
                      background: 'var(--bg-alt)',
                      border: '1px solid var(--secondary)',
                      borderRadius: '12px',
                      display: 'grid',
                      gridTemplateColumns: '1fr 200px',
                      gap: '2rem',
                      alignItems: 'center',
                      boxShadow: '0 10px 30px rgba(202, 169, 76, 0.1)',
                      position: 'relative'
                    }}
                  >
                    <div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700' }}>
                        {milestones[activeIndex].year}
                      </span>
                      <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.5rem', marginTop: '0.25rem' }}>
                        {milestones[activeIndex].title}
                      </h3>
                      <p style={{ fontWeight: '600', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                        {milestones[activeIndex].summary}
                      </p>
                      <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                        {milestones[activeIndex].detail}
                      </p>
                    </div>
                    <div style={{ borderRadius: '8px', overflow: 'hidden', height: '150px' }}>
                      <img 
                        src={milestones[activeIndex].image} 
                        alt={milestones[activeIndex].title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* 4. KEY METRICS HIGHLIGHTS */}
        <div className="company-stats-strip">
          {[
            { metric: "15+", label: "Active GCC Clients", desc: "Leading entities in F&B, Logistics, and Governance", delay: 0.1 },
            { metric: "40+", label: "Transforms Delivered", desc: "Custom systems implemented, fully operational", delay: 0.2 },
            { metric: "1M+ OMR", label: "Client Capital Guided", desc: "Ensuring high-efficiency, maximum return pipelines", delay: 0.3 },
            { metric: "Vision 2040", label: "Compliance Benchmark", desc: "Strictly aligned with national business standards", delay: 0.4 }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              className="stat-box-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: stat.delay }}
            >
              <h3 className="stat-value-digits">{stat.metric}</h3>
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
