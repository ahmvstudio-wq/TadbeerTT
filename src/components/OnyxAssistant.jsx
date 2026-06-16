import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import AssessmentFlow from './AssessmentFlow';
import LeadCaptureModal from './LeadCaptureModal';

const OnyxIcon = ({ size = 24, active = false }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={active ? "var(--secondary)" : "white"} 
    strokeWidth="1.8" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polygon points="12,2 22,8.5 17,21 7,21 2,8.5" fill="rgba(202, 169, 76, 0.1)" />
    <polyline points="12,2 12,21" opacity="0.6" />
    <polyline points="2,8.5 12,11 22,8.5" opacity="0.6" />
    <polyline points="7,21 12,11 17,21" opacity="0.6" />
  </svg>
);

const OnyxAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [activeAssessment, setActiveAssessment] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const proactiveMessages = [
    '🚀 Want to discover opportunities for digital transformation?',
    '📊 Take our assessment to receive your roadmap.',
    '📋 Generate your business readiness report.'
  ];

  useEffect(() => {
    // Proactive Toast Logic
    const timer = setTimeout(() => {
      if (!isOpen) {
        const randomMsg = proactiveMessages[Math.floor(Math.random() * proactiveMessages.length)];
        setToastMessage(randomMsg);
        setShowToast(true);
        
        setTimeout(() => setShowToast(false), 8000);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        { type: 'bot', text: "Hello! I'm Onyx, your AI business consultant. 👋" },
        { type: 'bot', text: "I can help you explore transformation opportunities. What interests you most?", isOptions: true }
      ]);
    }
    scrollToBottom();
  }, [isOpen, messages.length]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleQuickReply = (text, action) => {
    setMessages(prev => [...prev, { type: 'user', text }]);
    
    setTimeout(() => {
      if (action === 'services') {
        setMessages(prev => [...prev, { 
          type: 'bot', 
          text: "Here are our core service areas. Click to explore:",
          links: [
            { label: "📱 Digital Marketing", url: "/services/digital-marketing" },
            { label: "💻 Software Solutions", url: "/services/software-solutions" },
            { label: "🤖 AI Technology", url: "/services/ai-technology" },
            { label: "👥 Human Capital", url: "/services/human-capital" }
          ]
        }]);
      } else {
        // Assessment selected
        setMessages(prev => [...prev, { 
          type: 'bot', 
          text: `Great choice! I'll guide you through a quick assessment. This takes about 2 minutes.`
        }]);
        setActiveAssessment(action);
      }
    }, 600);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setMessages(prev => [...prev, { type: 'user', text: inputValue }]);
    const currentInput = inputValue.toLowerCase();
    setInputValue('');

    setTimeout(() => {
      let response = "I appreciate your question! For detailed inquiries, I recommend speaking with our team directly.";
      let links = [{ label: "Book Consultation", url: "#contact" }];

      if (currentInput.match(/marketing|social|ads|seo/)) {
        response = "Our digital marketing team builds comprehensive acquisition engines using data and creativity.";
        links = [{ label: "Explore Digital Marketing", url: "/services/digital-marketing" }];
      } else if (currentInput.match(/software|erp|system|app/)) {
        response = "We engineer business operating systems, from ERP deployments to custom web applications.";
        links = [{ label: "Explore Software Solutions", url: "/services/software-solutions" }];
      } else if (currentInput.match(/ai|automation|robot/)) {
        response = "We build production-ready AI systems that automate operations and extract value from data.";
        links = [{ label: "Explore AI Technology", url: "/services/ai-technology" }];
      } else if (currentInput.match(/hr|people|hiring|talent/)) {
        response = "We help you attract, retain, and develop the talent needed to drive your business forward.";
        links = [{ label: "Explore Human Capital", url: "/services/human-capital" }];
      } else if (currentInput.match(/cost|price|pricing/)) {
        response = "We customize solutions for each client based on their specific needs and scale. Let's discuss your requirements!";
      }

      setMessages(prev => [...prev, { type: 'bot', text: response, links }]);
    }, 1000);
  };

  const handleAssessmentComplete = (score) => {
    setActiveAssessment(null);
    setMessages(prev => [...prev, { 
      type: 'bot', 
      text: `Assessment complete! You scored ${score}/100. Let's get your detailed report.` 
    }]);
    setTimeout(() => {
      setModalOpen(true);
    }, 800);
  };

  return (
    <>
      <div style={{ position: 'fixed', bottom: '96px', right: '24px', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        
        {/* Proactive Toast */}
        <AnimatePresence>
          {showToast && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              onClick={() => { setShowToast(false); setIsOpen(true); }}
              style={{
                background: 'white',
                padding: '1rem',
                borderRadius: '12px 12px 0 12px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                border: '1px solid var(--border)',
                marginBottom: '1rem',
                maxWidth: '250px',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              <div style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: '1.4' }}>{toastMessage}</div>
              <div style={{ position: 'absolute', bottom: '-8px', right: '16px', width: '16px', height: '16px', background: 'white', transform: 'rotate(45deg)', borderRight: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              style={{
                width: '380px',
                height: '560px',
                maxHeight: 'calc(100vh - 120px)',
                background: 'var(--bg)',
                borderRadius: '16px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                border: '1px solid var(--border)',
                marginBottom: '1rem',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                marginRight: 'auto',
                marginLeft: 'auto'
              }}
              className="onyx-panel"
            >
              {/* Header */}
              <div style={{ background: 'var(--primary)', color: 'white', padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <OnyxIcon size={22} active={true} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <h3 style={{ fontSize: '1.1rem', margin: 0, lineHeight: '1.2', color: 'white', fontWeight: 'bold' }}>Onyx</h3>
                    <div style={{ fontSize: '0.75rem', opacity: 0.9, display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                      <div style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%' }} /> Online
                    </div>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                  <X size={20} />
                </button>
              </div>

              {/* Messages Area */}
              <div 
                data-lenis-prevent
                style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                {messages.map((msg, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: msg.type === 'user' ? 'flex-end' : 'flex-start' }}>
                    <div style={{
                      maxWidth: '85%',
                      padding: '0.85rem 1.15rem',
                      borderRadius: msg.type === 'user' ? '16px 16px 0 16px' : '16px 16px 16px 0',
                      background: msg.type === 'user' ? 'var(--secondary)' : 'white',
                      color: msg.type === 'user' ? 'var(--primary)' : 'var(--text-main)',
                      border: msg.type === 'user' ? 'none' : '1px solid var(--border)',
                      fontSize: '0.95rem',
                      lineHeight: '1.4'
                    }}>
                      {msg.text}
                    </div>

                    {/* Quick Options */}
                    {msg.isOptions && !activeAssessment && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.75rem', width: '100%' }}>
                        <button onClick={() => handleQuickReply('Digital Transformation Assessment', 'digital-transformation')} className="onyx-quick-btn">📊 Digital Transformation Assessment</button>
                        <button onClick={() => handleQuickReply('AI Readiness Score', 'ai-readiness')} className="onyx-quick-btn">🤖 AI Readiness Score</button>
                        <button onClick={() => handleQuickReply('Marketing Maturity Check', 'marketing-maturity')} className="onyx-quick-btn">📈 Marketing Maturity Check</button>
                        <button onClick={() => handleQuickReply('Explore Services', 'services')} className="onyx-quick-btn">💡 Explore Our Services</button>
                      </div>
                    )}

                    {/* Rich Links */}
                    {msg.links && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.75rem' }}>
                        {msg.links.map((link, idx) => (
                          <a key={idx} href={link.url} className="btn btn-primary" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', background: 'var(--primary)' }}>
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {activeAssessment && (
                  <AssessmentFlow assessmentType={activeAssessment} onComplete={handleAssessmentComplete} />
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div style={{ padding: '1rem', borderTop: '1px solid var(--border)', background: 'white' }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type a message..."
                    style={{ flex: 1, padding: '0.75rem 1rem', borderRadius: '30px', border: '1px solid var(--border)', background: '#F9F8F3', color: '#1C1B17', outline: 'none' }}
                  />
                  <button type="submit" disabled={!inputValue.trim()} style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--primary)', color: 'white', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: inputValue.trim() ? 1 : 0.5, cursor: inputValue.trim() ? 'pointer' : 'default' }}>
                    <Send size={18} style={{ marginLeft: '2px' }} />
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trigger Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'var(--primary)',
            color: 'white',
            border: 'none',
            boxShadow: '0 10px 25px rgba(24,79,91,0.4)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}
        >
          {isOpen ? <X size={24} /> : <OnyxIcon size={26} />}
          
          {/* Notification Dot */}
          {!isOpen && (
            <div style={{ position: 'absolute', top: 0, right: 0, width: '12px', height: '12px', background: '#22c55e', borderRadius: '50%', border: '2px solid white' }} />
          )}
        </motion.button>
        
        <style dangerouslySetInnerHTML={{__html: `
          .onyx-quick-btn {
            background: white;
            border: 1px solid var(--secondary);
            color: var(--primary);
            padding: 0.75rem 1rem;
            border-radius: 8px;
            font-size: 0.85rem;
            text-align: left;
            cursor: pointer;
            transition: all 0.2s;
          }
          .onyx-quick-btn:hover {
            background: rgba(202,169,76,0.1);
          }
          @media (max-width: 480px) {
            .onyx-panel {
              width: calc(100vw - 32px) !important;
              right: 16px !important;
              bottom: 80px !important;
            }
          }
        `}} />
      </div>
      <LeadCaptureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} resourceTitle="AI Assessment Results" resourceType="Report" />
    </>
  );
};

export default OnyxAssistant;
