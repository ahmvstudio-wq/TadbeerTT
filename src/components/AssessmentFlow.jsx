import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, RotateCcw } from 'lucide-react';

const assessmentData = {
  'digital-transformation': {
    title: "Digital Transformation Readiness",
    questions: [
      { q: "How digitized are your core business processes?", opts: ["Mostly Manual", "Partially Digital", "Mostly Digital", "Fully Automated"] },
      { q: "What percentage of your data is stored digitally?", opts: ["< 25%", "25-50%", "50-75%", "> 75%"] },
      { q: "Do you use cloud-based tools for collaboration?", opts: ["Not at all", "Basic tools", "Moderate", "Fully cloud"] },
      { q: "How automated are your customer communications?", opts: ["Fully manual", "Some automation", "Mostly automated", "AI-driven"] },
      { q: "Rate your current cybersecurity measures", opts: ["Minimal", "Basic", "Strong", "Enterprise-grade"] },
      { q: "How do you measure business performance?", opts: ["Intuition", "Quarterly reviews", "Monthly dashboards", "Real-time analytics"] },
      { q: "How integrated are your business systems?", opts: ["Siloed", "Partial integration", "Mostly integrated", "Fully unified"] },
      { q: "What is your team's digital literacy level?", opts: ["Low", "Basic", "Intermediate", "Advanced"] }
    ]
  },
  'ai-readiness': {
    title: "AI Adoption Score",
    questions: [
      { q: "Does your organization have a data strategy?", opts: ["No", "Planning", "Basic", "Comprehensive"] },
      { q: "How clean and organized is your data?", opts: ["Chaotic", "Partially organized", "Well-structured", "ML-ready"] },
      { q: "Do you have staff with AI/ML expertise?", opts: ["None", "Learning", "Some experience", "Dedicated team"] },
      { q: "Have you identified AI use cases?", opts: ["No", "Exploring", "Defined", "Implementing"] },
      { q: "What is your AI budget allocation?", opts: ["None", "< 5%", "5-15%", "> 15%"] },
      { q: "How does leadership view AI adoption?", opts: ["Skeptical", "Curious", "Supportive", "Champion"] }
    ]
  },
  'marketing-maturity': {
    title: "Marketing Maturity Check",
    questions: [
      { q: "How do you currently generate leads?", opts: ["Referrals only", "Basic website", "Multi-channel", "Automated funnels"] },
      { q: "Do you track marketing ROI?", opts: ["No tracking", "Basic metrics", "Attribution models", "Full-funnel analytics"] },
      { q: "How personalized is your marketing?", opts: ["One-size-fits-all", "Segmented", "Personalized", "AI-personalized"] },
      { q: "What content marketing do you do?", opts: ["None", "Occasional posts", "Regular content", "Strategic content engine"] },
      { q: "How do you manage customer relationships?", opts: ["Excel", "Basic CRM", "Advanced CRM", "AI-enhanced CRM"] },
      { q: "Rate your brand consistency across channels", opts: ["Inconsistent", "Somewhat", "Mostly consistent", "Fully unified"] }
    ]
  }
};

const AssessmentFlow = ({ assessmentType = 'digital-transformation', onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const data = assessmentData[assessmentType] || assessmentData['digital-transformation'];
  const questions = data.questions;

  const handleSelect = (qIndex, value) => {
    setAnswers({ ...answers, [qIndex]: value });
    setTimeout(() => {
      if (qIndex < questions.length - 1) {
        setCurrentQuestion(qIndex + 1);
      } else {
        setShowResults(true);
      }
    }, 400);
  };

  const calculateScore = () => {
    let total = 0;
    Object.values(answers).forEach(val => total += val);
    const maxScore = questions.length * 4;
    return Math.round((total / maxScore) * 100);
  };

  return (
    <div style={{ background: 'white', borderRadius: '12px', border: '1px solid var(--border)', padding: '1.5rem', marginTop: '1rem' }}>
      <AnimatePresence mode="wait">
        {!showResults ? (
          <motion.div key="questions" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            {/* Progress */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ flex: 1, height: '4px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ height: '100%', background: 'var(--primary)', width: `${((currentQuestion + 1) / questions.length) * 100}%`, transition: 'width 0.3s ease' }} />
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-muted)' }}>{currentQuestion + 1} / {questions.length}</span>
            </div>

            <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-main)', lineHeight: '1.4' }}>
              {questions[currentQuestion].q}
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {questions[currentQuestion].opts.map((opt, i) => {
                const value = i + 1;
                const isSelected = answers[currentQuestion] === value;
                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(currentQuestion, value)}
                    style={{
                      padding: '1rem',
                      textAlign: 'left',
                      background: isSelected ? 'rgba(202,169,76,0.1)' : 'white',
                      border: isSelected ? '1px solid var(--secondary)' : '1px solid var(--border)',
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
                    {opt}
                    {isSelected && <CheckCircle2 size={16} color="var(--secondary)" />}
                  </button>
                )
              })}
            </div>
          </motion.div>
        ) : (
          <motion.div key="results" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
            {(() => {
              const score = calculateScore();
              return (
                <>
                  <div className="readiness-gauge-wrapper readiness-gauge-wrapper--small">
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
                      <span className="readiness-gauge-label">/ 100</span>
                    </div>
                  </div>

                  <h4 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>Assessment Complete</h4>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <button onClick={() => { if(onComplete) onComplete(score); }} className="btn btn-primary" style={{ padding: '0.75rem', width: '100%' }}>
                      Download Detailed Report
                    </button>
                    <button onClick={() => { setAnswers({}); setCurrentQuestion(0); setShowResults(false); }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', marginTop: '0.5rem', fontSize: '0.85rem' }}>
                      <RotateCcw size={14} /> Retake Assessment
                    </button>
                  </div>
                </>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AssessmentFlow;
