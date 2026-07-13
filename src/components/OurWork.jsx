import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle2, TrendingUp, TrendingDown, Activity, ShieldCheck } from 'lucide-react';

const projects = [
  {
    id: "harrasi",
    client: "Al Harrasi Rope Factory",
    category: "Software Solutions",
    location: "Muscat, Oman",
    problem: {
      headline: "Losing Track of Inventory",
      desc: "They were relying on paper logs and spreadsheets across three different warehouses. This led to shipping delays, missing stock, and the team wasting days just matching numbers before tax audits.",
      metrics: [
        { label: "Shipping Delays", value: "High", icon: TrendingDown },
        { label: "Wasted Audit Time", value: "Extensive", icon: Activity }
      ],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&q=80&auto=format"
    },
    solution: {
      headline: "Live Inventory System",
      desc: "We mapped out how their team works and set up a simple digital system with barcode scanners. Now, every coil of rope is tracked the moment it's made, and tax reports are generated automatically.",
      metrics: [
        { label: "Error Reduction", value: "Significant", icon: TrendingUp },
        { label: "Dispatch Speed", value: "Rapid", icon: ShieldCheck }
      ],
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1600&q=80&auto=format"
    }
  },
  {
    id: "gloria",
    client: "Gloria Jean's GCC",
    category: "Digital Marketing",
    location: "Muscat, Oman",
    problem: {
      headline: "Ads Weren't Driving Visits",
      desc: "People knew the brand, but online ads weren't bringing them into the cafes. They were spending too much money on generic ads that didn't connect with the local culture or lead to actual sales.",
      metrics: [
        { label: "Wasted Budget", value: "High", icon: AlertCircle },
        { label: "Foot Traffic", value: "Stagnant", icon: TrendingDown }
      ],
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1600&q=80&auto=format"
    },
    solution: {
      headline: "Targeted Local Campaigns",
      desc: "We created Arabic video ads that felt highly local and only showed them to people near the stores. We used WhatsApp to send immediate coffee vouchers, tracking exactly who visited after seeing an ad.",
      metrics: [
        { label: "Ad Return (ROAS)", value: "High", icon: TrendingUp },
        { label: "Cost Per Customer", value: "Reduced", icon: TrendingDown }
      ],
      image: "https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?w=1600&q=80&auto=format"
    }
  },
  {
    id: "telecom",
    client: "Regional Telecom Operator",
    category: "AI Operations",
    location: "GCC Region",
    problem: {
      headline: "Long Wait Times for Support",
      desc: "Customers were waiting over 24 minutes on the phone. The support staff was completely burned out from answering the exact same basic billing questions all day, losing the trust of subscribers.",
      metrics: [
        { label: "Average Wait", value: "Long", icon: Activity },
        { label: "Agent Burnout", value: "Critical", icon: AlertCircle }
      ],
      image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=1600&q=80&auto=format"
    },
    solution: {
      headline: "Smart Local Chatbot",
      desc: "We built an automated chat system that actually understands local dialects. It securely connects to their billing system to instantly answer customer account questions without ever needing a human agent.",
      metrics: [
        { label: "Instant Answers", value: "Majority", icon: TrendingUp },
        { label: "Wait Time Drop", value: "Eliminated", icon: ShieldCheck }
      ],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80&auto=format"
    }
  },
  {
    id: "logistics",
    client: "Omani Logistics Leader",
    category: "Human Capital",
    location: "Sohar, Oman",
    problem: {
      headline: "Losing Good Managers",
      desc: "The company was growing too fast. Managers didn't know their specific goals and kept quitting. Crucially, the firm was failing to meet the government's Omanization hiring quotas for technical roles.",
      metrics: [
        { label: "Manager Exit Rate", value: "High", icon: TrendingDown },
        { label: "Omanization", value: "Failed", icon: AlertCircle }
      ],
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600&q=80&auto=format"
    },
    solution: {
      headline: "Clear Roles & Fast-Track Training",
      desc: "We completely fixed their job descriptions and set clear performance targets. We updated their salaries to match the market and created a training program specifically to help local Omanis step into leadership.",
      metrics: [
        { label: "Turnover Drop", value: "Significant", icon: TrendingDown },
        { label: "Omanization", value: "Complete", icon: CheckCircle2 }
      ],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80&auto=format"
    }
  }
];

// SVGs for Data Graphs (Animated)
const AscendingGraph = () => (
  <svg viewBox="0 0 100 50" width="100%" height="60px" style={{ overflow: 'visible', marginTop: '1rem' }}>
    <motion.path 
      d="M 0 50 L 20 40 L 40 45 L 60 20 L 80 25 L 100 0" 
      fill="none" 
      stroke="var(--secondary)" 
      strokeWidth="3"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    />
    <motion.circle cx="100" cy="0" r="4" fill="var(--secondary)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5 }} />
  </svg>
);

const DescendingGraph = () => (
  <svg viewBox="0 0 100 50" width="100%" height="60px" style={{ overflow: 'visible', marginTop: '1rem' }}>
    <motion.path 
      d="M 0 0 L 20 10 L 40 5 L 60 30 L 80 25 L 100 50" 
      fill="none" 
      stroke="#dc3545" 
      strokeWidth="3"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    />
    <motion.circle cx="100" cy="50" r="4" fill="#dc3545" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5 }} />
  </svg>
);

const OurWork = () => {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [viewState, setViewState] = useState('problem'); // 'problem' | 'solution'

  const activeProject = projects[activeProjectIdx];

  const handleProjectSwitch = (idx) => {
    setActiveProjectIdx(idx);
    setViewState('problem'); // Reset to problem when switching projects
  };

  const touchStartX = React.useRef(0);
  const touchEndX = React.useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diffX = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;

    if (diffX > swipeThreshold) {
      if (activeProjectIdx < projects.length - 1) {
        handleProjectSwitch(activeProjectIdx + 1);
      } else {
        handleProjectSwitch(0);
      }
    } else if (diffX < -swipeThreshold) {
      if (activeProjectIdx > 0) {
        handleProjectSwitch(activeProjectIdx - 1);
      } else {
        handleProjectSwitch(projects.length - 1);
      }
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section id="work" className="work-section" style={{ padding: '6rem 0', background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '1440px', padding: '0 5%' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '3rem' }}
        >
          
          <h2 className="section-title" style={{ color: 'var(--primary)' }}>Transformation Data Console</h2>
        </motion.div>

        {/* Dynamic Mobile Layout adjusts to block, Desktop is grid */}
        <div className="work-console-grid">
          
          {/* Left: Mission Control Navigator */}
          <div className="work-navigator">
            {projects.map((proj, idx) => {
              const isActive = activeProjectIdx === idx;
              return (
                <button
                  key={proj.id}
                  onClick={() => handleProjectSwitch(idx)}
                  className={`work-nav-btn ${isActive ? 'active' : ''}`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="activeGlow"
                      className="work-nav-btn-glow"
                    />
                  )}
                  <span className="work-nav-btn-category" style={{ color: isActive ? 'var(--secondary)' : 'var(--text-muted)' }}>
                    {proj.category}
                  </span>
                  <h4 className="work-nav-btn-title" style={{ color: isActive ? 'var(--primary)' : 'var(--text-main)' }}>{proj.client}</h4>
                </button>
              );
            })}
          </div>

          {/* Right: The Data Viewport */}
          <div 
            className="work-viewport"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            
            {/* Background Image Layer (Crossfades) */}
            <AnimatePresence mode="wait">
              <motion.img
                key={`${activeProject.id}-${viewState}`}
                src={viewState === 'problem' ? activeProject.problem.image : activeProject.solution.image}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 0.15, scale: 1 }} // Low opacity to keep the text fully readable against a white theme
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </AnimatePresence>

            {/* Viewport Overlay Gradient (Light version) */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(90deg, var(--bg-alt) 40%, transparent 100%)' }} />

            {/* UI Content Layer */}
            <div className="work-viewport-content">
              
              {/* State Toggle */}
              <div className="work-state-toggle" style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setViewState('problem')}
                  style={{
                    padding: '0.75rem 1.5rem',
                    borderRadius: '30px',
                    background: viewState === 'problem' ? 'rgba(220, 53, 69, 0.1)' : 'var(--bg)',
                    border: viewState === 'problem' ? '1px solid #dc3545' : '1px solid var(--border)',
                    color: viewState === 'problem' ? '#dc3545' : 'var(--text-muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <AlertCircle size={16} /> 01. The Problem
                </button>
                <button
                  onClick={() => setViewState('solution')}
                  style={{
                    padding: '0.75rem 1.5rem',
                    borderRadius: '30px',
                    background: viewState === 'solution' ? 'rgba(202, 169, 76, 0.1)' : 'var(--bg)',
                    border: viewState === 'solution' ? '1px solid var(--secondary)' : '1px solid var(--border)',
                    color: viewState === 'solution' ? 'var(--primary)' : 'var(--text-muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <CheckCircle2 size={16} /> 02. Our Solution
                </button>
              </div>

              {/* Dynamic Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeProject.id}-${viewState}`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ maxWidth: '650px', marginTop: 'auto', marginBottom: 'auto' }}
                >
                  <h3 className="work-viewport-headline">
                    {viewState === 'problem' ? activeProject.problem.headline : activeProject.solution.headline}
                  </h3>
                  <p style={{ fontSize: '1.15rem', color: 'var(--text-main)', lineHeight: '1.7', marginBottom: '3rem' }}>
                    {viewState === 'problem' ? activeProject.problem.desc : activeProject.solution.desc}
                  </p>

                  {/* Proof Metrics Grid */}
                  <div className="work-metrics-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                    {(viewState === 'problem' ? activeProject.problem.metrics : activeProject.solution.metrics).map((m, i) => {
                      const Icon = m.icon;
                      return (
                        <div key={i} style={{ 
                          background: 'var(--bg)', 
                          border: '1px solid var(--border)', 
                          padding: '1.5rem', 
                          borderRadius: '12px',
                          boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <div style={{ 
                              padding: '0.5rem', 
                              borderRadius: '8px', 
                              background: viewState === 'problem' ? 'rgba(220, 53, 69, 0.1)' : 'rgba(202, 169, 76, 0.1)',
                              color: viewState === 'problem' ? '#dc3545' : 'var(--secondary)'
                            }}>
                              <Icon size={20} />
                            </div>
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>{m.label}</span>
                          </div>
                          <motion.div 
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3 + i * 0.1, type: 'spring' }}
                            style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary)' }}
                          >
                            {m.value}
                          </motion.div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Data Graphs */}
                  {viewState === 'problem' ? <DescendingGraph /> : <AscendingGraph />}
                  
                </motion.div>
              </AnimatePresence>

              {/* Mobile swipe indicators */}
              <div className="mobile-swipe-indicators" style={{ display: 'none', gap: '8px', justifyContent: 'center', marginTop: '2rem' }}>
                {projects.map((_, idx) => (
                  <div 
                    key={idx} 
                    style={{
                      width: '8px', 
                      height: '8px', 
                      borderRadius: '50%', 
                      background: activeProjectIdx === idx ? 'var(--secondary)' : 'rgba(28, 27, 23, 0.15)',
                      transition: 'background-color 0.2s'
                    }} 
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurWork;
