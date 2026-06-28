import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, RotateCcw } from 'lucide-react';
import LeadCaptureModal from './LeadCaptureModal';

const questions = [
  {
    question: "How digitized are your core operations?",
    options: [
      { text: "Mostly Manual (Paper/Excel)", value: 1 },
      { text: "Partially Digital (Siloed Software)", value: 2 },
      { text: "Mostly Digital (Integrated Systems)", value: 3 },
      { text: "Fully Digital (Automated Workflows)", value: 4 }
    ]
  },
  {
    question: "How do you currently manage customer data?",
    options: [
      { text: "Excel & Emails", value: 1 },
      { text: "Basic CRM", value: 2 },
      { text: "Advanced CRM with Automation", value: 3 },
      { text: "AI-Enhanced Omnichannel System", value: 4 }
    ]
  },
  {
    question: "What is your current marketing approach?",
    options: [
      { text: "Word of Mouth / Referrals", value: 1 },
      { text: "Basic Digital Ads", value: 2 },
      { text: "Multi-Channel Strategy", value: 3 },
      { text: "Data-Driven Omnichannel", value: 4 }
    ]
  },
  {
    question: "How do you handle business intelligence?",
    options: [
      { text: "Gut Feeling / Experience", value: 1 },
      { text: "Manual Monthly Reports", value: 2 },
      { text: "Real-Time Dashboards", value: 3 },
      { text: "Predictive Analytics & Forecasting", value: 4 }
    ]
  },
  {
    question: "How scalable is your current technology stack?",
    options: [
      { text: "Not Scalable", value: 1 },
      { text: "Limited (Requires major upgrades)", value: 2 },
      { text: "Moderately Scalable", value: 3 },
      { text: "Highly Scalable (Cloud-native)", value: 4 }
    ]
  }
];

// Q1: Operations
const OperationsIllustration = () => (
  <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%', maxHeight: '180px' }}>
    <rect width="200" height="200" rx="16" fill="rgba(24,79,91,0.01)" />
    <circle cx="50" cy="100" r="14" fill="var(--primary)" opacity="0.06" />
    <circle cx="50" cy="100" r="6" fill="var(--primary)" />
    <circle cx="110" cy="65" r="14" fill="var(--primary)" opacity="0.06" />
    <circle cx="110" cy="65" r="6" fill="var(--primary)" />
    <circle cx="110" cy="135" r="14" fill="var(--primary)" opacity="0.06" />
    <circle cx="110" cy="135" r="6" fill="var(--primary)" />
    <circle cx="165" cy="100" r="18" fill="rgba(202,169,76,0.15)" stroke="var(--secondary)" strokeWidth="1.5" />
    <path d="M159,95 L171,105 M171,95 L159,105" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
    <motion.path 
      d="M56,100 L104,65" 
      stroke="var(--secondary)" 
      strokeWidth="1.5" 
      strokeDasharray="4 4"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    />
    <motion.path 
      d="M56,100 L104,135" 
      stroke="var(--primary)" 
      strokeWidth="1.5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    />
    <path d="M116,65 L156,100" stroke="var(--primary)" strokeWidth="1.5" />
    <path d="M116,135 L156,100" stroke="var(--secondary)" strokeWidth="1.5" />
  </svg>
);

// Q2: Customer Data
const DataIllustration = () => (
  <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%', maxHeight: '180px' }}>
    <rect width="200" height="200" rx="16" fill="rgba(24,79,91,0.01)" />
    <path d="M60,60 C60,50 140,50 140,60 C140,70 60,70 60,60 Z" fill="rgba(202,169,76,0.1)" stroke="var(--secondary)" strokeWidth="2" />
    <path d="M60,60 L60,140 C60,150 140,150 140,140 L140,60" fill="none" stroke="var(--secondary)" strokeWidth="2" />
    <path d="M60,85 C60,95 140,95 140,85" fill="none" stroke="var(--secondary)" strokeWidth="1.5" strokeDasharray="3 3" />
    <path d="M60,110 C60,120 140,120 140,110" fill="none" stroke="var(--secondary)" strokeWidth="1.5" />
    <motion.circle 
      cx="45" cy="90" r="10" fill="var(--primary)"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.circle 
      cx="155" cy="110" r="8" fill="var(--primary)" opacity="0.6"
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    />
    <path d="M45,90 L60,85" stroke="var(--primary)" strokeWidth="1.5" />
    <path d="M140,110 L155,110" stroke="var(--primary)" strokeWidth="1.5" />
  </svg>
);

// Q3: Marketing
const MarketingIllustration = () => (
  <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%', maxHeight: '180px' }}>
    <rect width="200" height="200" rx="16" fill="rgba(24,79,91,0.01)" />
    <circle cx="100" cy="100" r="60" fill="none" stroke="var(--primary)" strokeWidth="2" />
    <circle cx="100" cy="100" r="40" fill="none" stroke="var(--secondary)" strokeWidth="1.5" />
    <circle cx="100" cy="100" r="20" fill="rgba(202,169,76,0.15)" stroke="var(--secondary)" strokeWidth="2" />
    <circle cx="100" cy="100" r="5" fill="var(--primary)" />
    <motion.circle 
      cx="100" cy="100" r="75" fill="none" stroke="var(--primary)" strokeWidth="1" strokeDasharray="4 4" opacity="0.4"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
    <motion.path 
      d="M30,30 L95,95" 
      stroke="var(--secondary)" 
      strokeWidth="3" 
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.3 }}
    />
    <polygon points="95,95 90,85 85,90" fill="var(--secondary)" />
  </svg>
);

// Q4: Analytics
const BIIllustration = () => (
  <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%', maxHeight: '180px' }}>
    <rect width="200" height="200" rx="16" fill="rgba(24,79,91,0.01)" />
    <line x1="40" y1="160" x2="160" y2="160" stroke="var(--primary)" strokeWidth="2" />
    <line x1="40" y1="40" x2="40" y2="160" stroke="var(--primary)" strokeWidth="2" />
    {[
      { x: 55, h: 40, delay: 0.1 },
      { x: 80, h: 70, delay: 0.2 },
      { x: 105, h: 110, delay: 0.3 },
      { x: 130, h: 90, delay: 0.4 }
    ].map((bar, i) => (
      <motion.rect
        key={i}
        x={bar.x}
        y={160 - bar.h}
        width="16"
        height={bar.h}
        fill="rgba(24,79,91,0.08)"
        stroke="var(--primary)"
        strokeWidth="1.5"
        initial={{ scaleY: 0, originY: 1 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: bar.delay }}
      />
    ))}
    <motion.path
      d="M55,140 L80,100 L105,60 L130,80 L155,30"
      fill="none"
      stroke="var(--secondary)"
      strokeWidth="3"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    />
    <circle cx="155" cy="30" r="4" fill="var(--secondary)" />
  </svg>
);

// Q5: Stack
const StackIllustration = () => (
  <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%', maxHeight: '180px' }}>
    <rect width="200" height="200" rx="16" fill="rgba(24,79,91,0.01)" />
    <rect x="50" y="130" width="100" height="24" rx="4" fill="white" stroke="var(--primary)" strokeWidth="1.5" />
    <circle cx="65" cy="142" r="3" fill="#22c55e" />
    <line x1="85" y1="142" x2="135" y2="142" stroke="var(--border)" strokeWidth="2" />
    <rect x="50" y="95" width="100" height="24" rx="4" fill="white" stroke="var(--primary)" strokeWidth="1.5" />
    <circle cx="65" cy="107" r="3" fill="#22c55e" />
    <line x1="85" y1="107" x2="135" y2="107" stroke="var(--border)" strokeWidth="2" />
    <rect x="50" y="60" width="100" height="24" rx="4" fill="white" stroke="var(--primary)" strokeWidth="1.5" />
    <circle cx="65" cy="72" r="3" fill="#22c55e" />
    <line x1="85" y1="72" x2="135" y2="72" stroke="var(--border)" strokeWidth="2" />
    <motion.path 
      d="M100,50 L100,20 M100,20 L92,28 M100,20 L108,28" 
      stroke="var(--secondary)" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  </svg>
);

const ReadinessScore = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Keyboard controls for Typeform feel (A, B, C, D)
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (showResults || modalOpen) return;
      const key = e.key.toLowerCase();
      const optionsMapping = { a: 1, b: 2, c: 3, d: 4 };
      if (key in optionsMapping) {
        const optionValue = optionsMapping[key];
        const currentOptions = questions[currentQuestion].options;
        const matchingOption = currentOptions.find(o => o.value === optionValue);
        if (matchingOption) {
          handleSelect(currentQuestion, optionValue);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQuestion, showResults, modalOpen]);

  const handleSelect = (qIndex, value) => {
    setAnswers({ ...answers, [qIndex]: value });
    setTimeout(() => {
      if (qIndex < questions.length - 1) {
        setCurrentQuestion(qIndex + 1);
      } else {
        setShowResults(true);
      }
    }, 450);
  };

  const calculateScore = () => {
    let total = 0;
    Object.values(answers).forEach(val => total += val);
    return total * 5;
  };

  const getResultContent = (score) => {
    if (score <= 40) return { phase: "Foundation Phase", desc: "Critical infrastructure gaps detected. Start by digitizing core manual processes." };
    if (score <= 60) return { phase: "Growth Phase", desc: "Siloed systems are causing operational drag. Focus on deep integration." };
    if (score <= 80) return { phase: "Acceleration Phase", desc: "Your architecture is solid. Implement workflow automation to maximize margin." };
    return { phase: "Innovation Phase", desc: "Your systems are ready for scale. Focus on predictive AI and data-driven market expansion." };
  };

  const reset = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <section id="readiness-score" className="readiness-section" style={{ padding: 'var(--section-padding)', background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '950px' }}>
        <motion.div 
          className="text-center" 
          style={{ marginBottom: '3rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ type: "spring", bounce: 0.1, duration: 1.2 }}
        >
          <span className="section-label">Assessment</span>
          <h2 className="section-title">Are your systems ready to scale?</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ type: "spring", bounce: 0.15, duration: 1.0 }}
          className="readiness-card"
          style={{ 
            background: 'white', 
            borderRadius: '16px', 
            border: '1px solid var(--border)', 
            padding: '2.5rem', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
            minHeight: '520px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div 
                key={currentQuestion} 
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: -50 }} 
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="assessment-layout"
              >
                {/* Left Column: SVG Illustration representing current question */}
                <div className="assessment-illustration-wrapper">
                  {currentQuestion === 0 && <OperationsIllustration />}
                  {currentQuestion === 1 && <DataIllustration />}
                  {currentQuestion === 2 && <MarketingIllustration />}
                  {currentQuestion === 3 && <BIIllustration />}
                  {currentQuestion === 4 && <StackIllustration />}
                </div>

                {/* Right Column: Question & Selection Options */}
                <div>
                  {/* Progress */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ flex: 1, height: '6px', background: 'var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', background: 'var(--primary)', width: `${((currentQuestion + 1) / questions.length) * 100}%`, transition: 'width 0.3s ease' }} />
                    </div>
                    <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)' }}>{currentQuestion + 1} / {questions.length}</span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--text-main)', fontWeight: '700', lineHeight: '1.4' }}>
                    {questions[currentQuestion].question}
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {questions[currentQuestion].options.map((opt, i) => {
                      const isSelected = answers[currentQuestion] === opt.value;
                      return (
                        <button
                          key={i}
                          onClick={() => handleSelect(currentQuestion, opt.value)}
                          style={{
                            padding: '0.85rem 1rem',
                            textAlign: 'left',
                            background: isSelected ? 'rgba(202,169,76,0.08)' : 'white',
                            border: isSelected ? '1.5px solid var(--secondary)' : '1px solid var(--border)',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            transition: 'all 0.2s ease',
                            color: isSelected ? 'var(--primary)' : 'var(--text-main)',
                            fontWeight: isSelected ? '600' : '400',
                            fontSize: '0.9rem'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{
                              width: '28px',
                              height: '28px',
                              borderRadius: '6px',
                              border: isSelected ? '1px solid var(--secondary)' : '1px solid var(--border)',
                              background: isSelected ? 'var(--secondary)' : '#F9F8F3',
                              color: isSelected ? 'var(--primary)' : 'var(--text-muted)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: '700',
                              fontSize: '0.8rem',
                              transition: 'all 0.2s'
                            }}>
                              {String.fromCharCode(65 + i)}
                            </div>
                            <span>{opt.text}</span>
                          </div>
                          {isSelected && <CheckCircle2 size={16} color="var(--secondary)" />}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div key="results" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                {(() => {
                  const score = calculateScore();
                  const result = getResultContent(score);
                  return (
                    <>
                      <div className="readiness-gauge-wrapper">
                        <svg viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)', width: '100%', height: '100%' }}>
                          <circle cx="50" cy="50" r="45" fill="none" stroke="var(--border)" strokeWidth="8" />
                          <motion.circle 
                            cx="50" cy="50" r="45" fill="none" stroke="var(--secondary)" strokeWidth="8"
                            strokeDasharray="283"
                            initial={{ strokeDashoffset: 283 }}
                            animate={{ strokeDashoffset: 283 - (283 * score) / 100 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                          <span className="readiness-gauge-score">{score}</span>
                          <span className="readiness-gauge-label">out of 100</span>
                        </div>
                      </div>

                      <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>{result.phase}</h3>
                      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1rem' }}>{result.desc}</p>

                      {/* Action Priority Matrix */}
                      <div className="readiness-matrix-grid">
                        <div style={{ background: 'rgba(34,197,94,0.03)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: '12px', padding: '1.25rem' }}>
                          <h4 style={{ fontSize: '0.9rem', fontWeight: '700', color: '#166534', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>⚡ Quick Wins</h4>
                          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.4' }}>
                            {score <= 50 
                              ? 'Consolidate data into unified cloud environments.' 
                              : 'Deploy custom API connectors to bridge existing platforms.'}
                          </p>
                        </div>
                        <div style={{ background: 'rgba(202,169,76,0.03)', border: '1px solid rgba(202,169,76,0.15)', borderRadius: '12px', padding: '1.25rem' }}>
                          <h4 style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--secondary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🎯 Strategic Priorities</h4>
                          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.4' }}>
                            {score <= 50 
                              ? 'Map all operational bottlenecks and deploy a centralized ERP sandbox.'
                              : 'Upgrade to a unified CRM/ERP pipeline for seamless data flow.'}
                          </p>
                        </div>
                        <div style={{ background: 'rgba(24,79,91,0.03)', border: '1px solid rgba(24,79,91,0.15)', borderRadius: '12px', padding: '1.25rem' }}>
                          <h4 style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🏛️ Compliance Actions</h4>
                          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.4' }}>
                            {score <= 50 
                              ? 'Digitize labor compliance and structure role matrices for local talent.'
                              : 'Automate Ministry of Labour quota tracking and performance metrics.'}
                          </p>
                        </div>
                        <div style={{ background: 'rgba(139,92,246,0.03)', border: '1px solid rgba(139,92,246,0.15)', borderRadius: '12px', padding: '1.25rem' }}>
                          <h4 style={{ fontSize: '0.9rem', fontWeight: '700', color: '#6d28d9', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🤖 AI & Scaling</h4>
                          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.4' }}>
                            {score <= 50 
                              ? 'Deploy basic automation for invoicing and lead triage.'
                              : 'Implement agentic workflows, RAG document systems, and demand forecasting.'}
                          </p>
                        </div>
                      </div>

                      <div className="readiness-action-buttons">
                        <button onClick={() => setModalOpen(true)} className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}>
                          Get Full Detailed Report
                        </button>
                        <button 
                          onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-strategy-modal')); }} 
                          className="btn" 
                          style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem', border: '1px solid var(--border)', cursor: 'pointer', background: 'none' }}
                        >
                          Request a Consultation
                        </button>
                      </div>
                      <button onClick={reset} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', margin: '1.5rem auto 0', fontSize: '0.85rem' }}>
                        <RotateCcw size={14} /> Retake Assessment
                      </button>
                    </>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      <LeadCaptureModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        resourceTitle={`Transformation Readiness Report (Score: ${calculateScore()}%)`} 
        resourceType="Assessment Report" 
      />
    </section>
  );
};

export default ReadinessScore;
