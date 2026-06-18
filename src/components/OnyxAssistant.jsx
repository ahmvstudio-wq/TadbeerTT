import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import AssessmentFlow from './AssessmentFlow';
import LeadCaptureModal from './LeadCaptureModal';
import { createLead } from '../supabaseService';

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

  // Conversational Lead Capture (CLC) states
  const [leadFlowStep, setLeadFlowStep] = useState(null); // 'ask_name' | 'ask_email' | 'ask_phone' | null
  const [leadFlowData, setLeadFlowData] = useState({ name: '', email: '', phone: '', topic: '' });

  const getProactiveMessageForPage = (path) => {
    if (path.includes('ai-technology')) return '🤖 Ready to explore production-grade AI systems for your business?';
    if (path.includes('digital-marketing')) return '📈 Want to audit your customer acquisition systems?';
    if (path.includes('software-solutions')) return '💻 Need custom software or ERP integrations? Let\'s plan it.';
    if (path.includes('human-capital')) return '👥 Want to optimize Omanization compliance and HR models?';
    if (path.includes('resource-library')) return '📚 Accessing free guides? I can recommend the best reports for you.';
    if (path.includes('logistics')) return '🚛 Need route optimization or WMS setup?';
    if (path.includes('healthcare')) return '🏥 Want to integrate digital portals or OCR diagnostics?';
    if (path.includes('ecommerce')) return '🛒 Looking to scale checkout engines and CRM flows?';
    if (path.includes('construction')) return '🏗️ Need custom project dashboards or telemetry?';
    if (path.includes('government')) return '🏛️ Want to migrate legacy workflows to digital portals?';
    if (path.includes('manufacturing')) return '🏭 Need IoT diagnostics or production planning systems?';
    if (path.includes('real-estate')) return '🏢 Need CRM portals or digital listing engines?';
    if (path.includes('professional-services')) return '💼 Looking to automate client portals and service workflows?';
    
    return '🚀 Want to discover digital transformation opportunities for your GCC business?';
  };

  const getWelcomeMessageForPage = (path) => {
    if (path.includes('ai-technology')) {
      return "Hi! I see you are exploring AI solutions. Let's find how custom AI agents or automated pipelines can scale your operations!";
    }
    if (path.includes('digital-marketing')) {
      return "Hello! Interested in digital acquisition systems? I can recommend audit playbooks or growth marketing assessments.";
    }
    if (path.includes('software-solutions')) {
      return "Welcome! Looking to build custom web applications, portals, or implement ERPs? Let's discuss your tech stack.";
    }
    if (path.includes('human-capital')) {
      return "Hello! I can help you review your Omanization metrics, talent models, and automated compliance pipelines.";
    }
    const industries = ['logistics', 'healthcare', 'ecommerce', 'construction', 'government', 'manufacturing', 'real-estate', 'professional-services'];
    const matched = industries.find(ind => path.includes(ind));
    if (matched) {
      const formatted = matched.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      return `Welcome! Are you looking to upgrade operations in the ${formatted} sector? I can guide you through a dedicated digital audit.`;
    }
    
    return "Hello! I'm Onyx, your AI business consultant. 👋";
  };

  // Triggers Effect (Scroll, Time, Exit-intent, Idle, Copy text)
  useEffect(() => {
    const path = window.location.pathname;
    
    // Check if cooldown is active
    const isUnderCooldown = () => {
      const dismissedTime = sessionStorage.getItem('onyx_chat_dismissed');
      if (!dismissedTime) return false;
      const elapsed = Date.now() - parseInt(dismissedTime, 10);
      return elapsed < 25000; // 25 seconds cooldown
    };

    const isLeadCaptured = () => {
      return sessionStorage.getItem('leadSubmitted') === 'true';
    };

    // 1. Time-based: Proactive Toast after 2 seconds
    const firstToastTimer = setTimeout(() => {
      if (!isOpen && !isUnderCooldown()) {
        setToastMessage(getProactiveMessageForPage(path));
        setShowToast(true);
      }
    }, 2000);

    // 2. Time-based: Auto-open chat box after 6 seconds
    const autoOpenTimer = setTimeout(() => {
      if (!isOpen && !isUnderCooldown() && !isLeadCaptured()) {
        setIsOpen(true);
      }
    }, 6000);

    // 3. Scroll depth triggers
    let hasScrolled35 = false;
    let hasScrolled75 = false;

    const handleScroll = () => {
      if (isOpen || isUnderCooldown()) return;
      
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      
      const scrollPercent = (scrollTop / docHeight) * 100;

      // Scroll past 35%: Show toast
      if (scrollPercent >= 35 && !hasScrolled35) {
        hasScrolled35 = true;
        setToastMessage('📊 Take our 2-minute assessment to receive a custom digital roadmap!');
        setShowToast(true);
      }

      // Scroll past 75%: Auto-open chat box for Booking Session
      if (scrollPercent >= 75 && !hasScrolled75 && !isLeadCaptured()) {
        hasScrolled75 = true;
        setIsOpen(true);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // 4. Exit Intent Trigger (Cursor leaves viewport top)
    const handleMouseLeave = (e) => {
      if (e.clientY < 15 && !isOpen && !isUnderCooldown() && !isLeadCaptured()) {
        setIsOpen(true);
        setMessages(prev => {
          if (prev.length <= 2) {
            return [
              { type: 'bot', text: "Wait! Don't miss out on your Free Strategy Audit. Let's get your GCC business roadmap in 2 minutes! May I know your name?" }
            ];
          }
          return prev;
        });
        setLeadFlowStep('ask_name');
        setLeadFlowData(prev => ({ ...prev, topic: 'Exit Intent Offer' }));
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    // 5. Idle Detection Trigger (10 seconds idle)
    let idleTimer;
    const resetIdleTimer = () => {
      clearTimeout(idleTimer);
      if (isOpen || isUnderCooldown() || isLeadCaptured()) return;

      idleTimer = setTimeout(() => {
        setToastMessage('💡 Still exploring? Ask me about our custom Odoo/ERP deployments or AI roadmap!');
        setShowToast(true);
      }, 10000);
    };

    const activityEvents = ['mousemove', 'mousedown', 'scroll', 'keypress', 'touchstart'];
    activityEvents.forEach(evt => window.addEventListener(evt, resetIdleTimer));
    resetIdleTimer();

    // 6. Text Copy Trigger
    const handleCopy = () => {
      if (!isOpen && !isUnderCooldown()) {
        setToastMessage('📋 Copying details? Let me email you the full whitepaper/PDF. Click here to chat!');
        setShowToast(true);
      }
    };
    document.addEventListener('copy', handleCopy);

    // 7. Repeated Toast Loop: If chat is closed, cycle through messages every 20 seconds
    const toastInterval = setInterval(() => {
      if (!isOpen && !isUnderCooldown()) {
        const extraMessages = [
          '📊 Need a custom digital transformation strategy?',
          '🤖 Want to test your business AI readiness score?',
          '💡 Check our custom service blueprints!',
          '📞 Let\'s sync you with a transformation architect.'
        ];
        const randomMsg = extraMessages[Math.floor(Math.random() * extraMessages.length)];
        setToastMessage(randomMsg);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
      }
    }, 20000);

    return () => {
      clearTimeout(firstToastTimer);
      clearTimeout(autoOpenTimer);
      clearInterval(toastInterval);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('copy', handleCopy);
      activityEvents.forEach(evt => window.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, [isOpen]);

  // Handle welcome message on open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const path = window.location.pathname;
      setMessages([
        { type: 'bot', text: getWelcomeMessageForPage(path) },
        { type: 'bot', text: "What would you like to explore first?", isOptions: true }
      ]);
    }
    scrollToBottom();
  }, [isOpen, messages.length]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Start Conversational Lead Flow
  const startConversationalLeadFlow = (topicName) => {
    if (sessionStorage.getItem('leadSubmitted') === 'true') {
      return false; // Skip if already submitted
    }
    setLeadFlowStep('ask_name');
    setLeadFlowData({ name: '', email: '', phone: '', topic: topicName });
    setMessages(prev => [...prev, { 
      type: 'bot', 
      text: "I'd be glad to arrange that for you! Let's get your details. First, what is your full name?" 
    }]);
    return true;
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
        // Ask if they want to speak with an architect after showing links
        setTimeout(() => {
          startConversationalLeadFlow('Service Exploration');
        }, 1200);
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

    const userText = inputValue;
    setMessages(prev => [...prev, { type: 'user', text: userText }]);
    setInputValue('');

    // INTERCEPT: Conversational Lead Capture (CLC) Flow
    if (leadFlowStep) {
      setTimeout(() => {
        if (leadFlowStep === 'ask_name') {
          setLeadFlowData(prev => ({ ...prev, name: userText }));
          setMessages(prev => [...prev, { 
            type: 'bot', 
            text: `Pleasure meeting you, ${userText}! What is your work email address so I can send over your report?` 
          }]);
          setLeadFlowStep('ask_email');
        } else if (leadFlowStep === 'ask_email') {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(userText.trim())) {
            setMessages(prev => [...prev, { 
              type: 'bot', 
              text: "Please enter a valid work email address (e.g., director@company.com) so we can securely deliver your digital audit." 
            }]);
          } else {
            setLeadFlowData(prev => ({ ...prev, email: userText.trim() }));
            setMessages(prev => [...prev, { 
              type: 'bot', 
              text: "Excellent! And finally, what is your contact phone number (with country code) so our transformation consultant can coordinate?" 
            }]);
            setLeadFlowStep('ask_phone');
          }
        } else if (leadFlowStep === 'ask_phone') {
          if (userText.replace(/[^0-9]/g, '').length < 6) {
            setMessages(prev => [...prev, { 
              type: 'bot', 
              text: "Please enter a valid phone number (e.g. +968 9912 3456) so we can complete your application." 
            }]);
          } else {
            const finalData = { ...leadFlowData, phone: userText.trim() };
            setLeadFlowData(finalData);
            setLeadFlowStep(null);
            
            setMessages(prev => [...prev, { 
              type: 'bot', 
              text: "Securing connection parameters... Transmitting secure request to dashboard..." 
            }]);

            // Save lead to Supabase
            const lead = {
              name: finalData.name,
              email: finalData.email,
              phone: finalData.phone,
              company: 'Chat Lead',
              resource: `AI Chatbot: ${finalData.topic || 'General Inquiry'}`,
              source_url: window.location.pathname + window.location.hash,
              date: new Date().toISOString()
            };

            createLead(lead).then(({ error: dbError }) => {
              if (dbError) {
                console.error('Failed to submit chat lead:', dbError);
                setMessages(prev => [...prev, { 
                  type: 'bot', 
                  text: "System response: Database sync failed, but I've queued your details locally. Our team will contact you!" 
                }]);
              } else {
                sessionStorage.setItem('leadSubmitted', 'true');
                setMessages(prev => [...prev, { 
                  type: 'bot', 
                  text: `All done, ${finalData.name}! 🎉 I've scheduled your strategy session and saved your request. Our architects will contact you within 24 hours.` 
                }]);
                
                // Broadcast update to Admin Panel
                try {
                  const bc = new BroadcastChannel('tadbeer_leads_sync');
                  bc.postMessage({ event: 'new-lead', timestamp: Date.now() });
                  bc.close();
                } catch(bcErr) {
                  console.warn('Sync broadcast failed:', bcErr);
                }

                // Fire global window event
                window.dispatchEvent(new CustomEvent('lead-submitted', { detail: lead }));
              }
            });
          }
        }
      }, 800);
      return;
    }

    // Regular Chat Flow (Not in CLC mode)
    const currentInput = userText.toLowerCase();

    setTimeout(() => {
      let response = "I appreciate your question! For detailed audits and custom roadmaps, I recommend coordinating with our consulting team directly.";
      let links = [{ label: "Apply for a Strategy Session", url: "#contact" }];

      if (currentInput.match(/marketing|social|ads|seo/)) {
        response = "Our digital marketing team builds comprehensive acquisition engines using data and creativity. Would you like to check if your business qualifies for a custom audit?";
        links = [{ label: "Explore Digital Marketing", url: "/services/digital-marketing" }];
      } else if (currentInput.match(/software|erp|system|app/)) {
        response = "We engineer business operating systems, from ERP deployments to custom web applications. Let's arrange a customized strategy roadmap for you.";
        links = [{ label: "Explore Software Solutions", url: "/services/software-solutions" }];
      } else if (currentInput.match(/ai|automation|robot/)) {
        response = "We build production-ready AI systems that automate operations and extract value from data. Would you like to check your AI readiness?";
        links = [{ label: "Explore AI Technology", url: "/services/ai-technology" }];
      } else if (currentInput.match(/hr|people|hiring|talent/)) {
        response = "We help you attract, retain, and develop the talent needed to drive your business forward, ensuring Vision 2040 compliance.";
        links = [{ label: "Explore Human Capital", url: "/services/human-capital" }];
      } else if (currentInput.match(/cost|price|pricing/)) {
        response = "We customize solutions for each client based on their specific needs and scale. Let's get your details and discuss your requirements!";
      }

      setMessages(prev => [...prev, { type: 'bot', text: response, links }]);
      
      // Auto-trigger Lead Intake form 2 seconds after the response if not already captured
      setTimeout(() => {
        startConversationalLeadFlow(userText.substring(0, 30));
      }, 2000);

    }, 1000);
  };

  const handleAssessmentComplete = (score) => {
    setActiveAssessment(null);
    setMessages(prev => [...prev, { 
      type: 'bot', 
      text: `Assessment complete! You scored ${score}/100. Let's get your detailed report.` 
    }]);
    
    // Auto-open download details
    setTimeout(() => {
      setModalOpen(true);
    }, 800);
  };


  return (
    <>
      <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        
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
                <button onClick={() => { setIsOpen(false); sessionStorage.setItem('onyx_chat_dismissed', 'true'); }} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
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
                        {msg.links.map((link, idx) => {
                          if (link.url === '#contact') {
                            return (
                              <button 
                                key={idx}
                                onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-strategy-modal')); }}
                                className="btn btn-primary"
                                style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', background: 'var(--primary)', cursor: 'pointer', border: 'none', textAlign: 'center', width: '100%' }}
                              >
                                {link.label === "Book Consultation" ? "Apply for a Strategy Session" : link.label}
                              </button>
                            );
                          }
                          return (
                            <a key={idx} href={link.url} className="btn btn-primary" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', background: 'var(--primary)' }}>
                              {link.label}
                            </a>
                          );
                        })}
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
          onClick={() => {
            const nextState = !isOpen;
            setIsOpen(nextState);
            if (!nextState) {
              sessionStorage.setItem('onyx_chat_dismissed', 'true');
            }
          }}
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
              position: fixed !important;
              width: calc(100vw - 32px) !important;
              left: 16px !important;
              right: 16px !important;
              bottom: 88px !important;
              height: calc(100vh - 120px) !important;
              max-height: 520px !important;
            }
          }
        `}} />
      </div>
      <LeadCaptureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} resourceTitle="AI Assessment Results" resourceType="Report" />
    </>
  );
};

export default OnyxAssistant;
