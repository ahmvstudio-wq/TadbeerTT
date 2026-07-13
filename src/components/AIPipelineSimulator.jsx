import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Database, FileText, Mail, Users, Settings, Search, FileBarChart, MessageSquare, ArrowRight } from 'lucide-react';

const AIPipelineSimulator = () => {
  const [source, setSource] = useState('PDF manuals/Docs');
  const [task, setTask] = useState('Document Search (RAG)');
  const [channel, setChannel] = useState('WhatsApp API');
  const [logs, setLogs] = useState([]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const terminalEndRef = useRef(null);

  const sources = [
    { id: 'Excel/SQL', label: 'Excel / SQL Data', icon: <Database size={16} /> },
    { id: 'PDFs', label: 'PDFs & Docs', icon: <FileText size={16} /> },
    { id: 'CRM', label: 'Customer Data', icon: <Users size={16} /> },
    { id: 'Emails', label: 'Emails', icon: <Mail size={16} /> }
  ];

  const tasks = [
    { id: 'Sort Leads', label: 'Sort & Assign Leads', icon: <Settings size={16} /> },
    { id: 'Find Answers', label: 'Find Answers Fast', icon: <Search size={16} /> },
    { id: 'Create Reports', label: 'Create Reports', icon: <FileBarChart size={16} /> },
    { id: 'Chat Assistant', label: 'Chat with Customers', icon: <MessageSquare size={16} /> }
  ];

  const channels = [
    { id: 'WhatsApp', label: 'WhatsApp', icon: <MessageSquare size={16} /> },
    { id: 'Website', label: 'Website Chat', icon: <Terminal size={16} /> },
    { id: 'Dashboard', label: 'Internal Dashboard', icon: <FileBarChart size={16} /> },
    { id: 'Email', label: 'Email Replies', icon: <Mail size={16} /> }
  ];

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleSimulate = () => {
    setIsSimulating(true);
    setShowCTA(false);
    setLogs([]);

    const logSequence = [
      { text: `[15:12:00] [SYSTEM] Starting your AI automation...`, delay: 0 },
      { text: `[15:12:01] [SYSTEM] Connecting to your data: "${source}"...`, delay: 600 },
      { text: `[15:12:01] [SUCCESS] Data connected successfully.`, delay: 1200 },
      { text: `[15:12:02] [MODEL] Training AI to perform: "${task}"...`, delay: 1800 },
      { text: `[15:12:03] [MODEL] AI is ready to understand your requests.`, delay: 2400 },
      { text: `[15:12:04] [SYSTEM] Setting up automatic replies for: "${channel}"...`, delay: 3000 },
      { text: `[15:12:04] [PIPELINE] Testing the complete flow...`, delay: 3500 },
      { text: `------------------------------------------------------------`, delay: 4000 },
      { text: `[15:12:05] [SUCCESS] YOUR AI IS NOW ACTIVE! 🚀`, delay: 4100 },
      { text: `[15:12:05] [METRIC] Estimated efficiency boost: +${Math.floor(Math.random() * 18) + 75}%`, delay: 4500 },
      { text: `[15:12:05] [METRIC] Time saved for your team: ~${Math.floor(Math.random() * 12) + 12} hrs/week`, delay: 4900 }
    ];

    logSequence.forEach((log) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, log.text]);
        if (log.text.includes('Projected team manual hours saved')) {
          setIsSimulating(false);
          setShowCTA(true);
        }
      }, log.delay);
    });
  };

  return (
    <section id="ai-simulator" className="simulator-section" style={{ padding: 'var(--section-padding)', background: 'var(--primary)', color: 'white', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          
          <h2 className="section-title" style={{ color: 'white' }}>Design Your Custom AI Pipeline</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', marginTop: '1rem', maxWidth: '750px', margin: '1rem auto 0' }}>Select your operational elements below to test and simulate a custom automation flow instantly.</p>
        </div>

        <div className="simulator-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
          
          {/* Selections Panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Step 1 */}
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--secondary)', marginBottom: '0.5rem' }}>01. Select Source Data</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                {sources.map(s => (
                  <button
                    key={s.id}
                    disabled={isSimulating}
                    onClick={() => setSource(s.id)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem', borderRadius: '8px',
                      background: source === s.id ? 'var(--secondary)' : 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: source === s.id ? 'var(--primary)' : 'white',
                      fontWeight: source === s.id ? '700' : '400',
                      cursor: isSimulating ? 'not-allowed' : 'pointer',
                      fontSize: '0.85rem',
                      textAlign: 'left'
                    }}
                  >
                    {s.icon} {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--secondary)', marginBottom: '0.5rem' }}>02. Select Core AI Task</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                {tasks.map(t => (
                  <button
                    key={t.id}
                    disabled={isSimulating}
                    onClick={() => setTask(t.id)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem', borderRadius: '8px',
                      background: task === t.id ? 'var(--secondary)' : 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: task === t.id ? 'var(--primary)' : 'white',
                      fontWeight: task === t.id ? '700' : '400',
                      cursor: isSimulating ? 'not-allowed' : 'pointer',
                      fontSize: '0.85rem',
                      textAlign: 'left'
                    }}
                  >
                    {t.icon} {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--secondary)', marginBottom: '0.5rem' }}>03. Select Destination Channel</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                {channels.map(c => (
                  <button
                    key={c.id}
                    disabled={isSimulating}
                    onClick={() => setChannel(c.id)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem', borderRadius: '8px',
                      background: channel === c.id ? 'var(--secondary)' : 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: channel === c.id ? 'var(--primary)' : 'white',
                      fontWeight: channel === c.id ? '700' : '400',
                      cursor: isSimulating ? 'not-allowed' : 'pointer',
                      fontSize: '0.85rem',
                      textAlign: 'left'
                    }}
                  >
                    {c.icon} {c.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleSimulate}
              disabled={isSimulating}
              className="btn btn-primary"
              style={{
                background: 'var(--secondary)',
                color: 'var(--primary)',
                padding: '1rem',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: isSimulating ? 'not-allowed' : 'pointer',
                opacity: isSimulating ? 0.7 : 1,
                marginTop: '1rem',
                textAlign: 'center',
                justifyContent: 'center',
                width: '100%'
              }}
            >
              {isSimulating ? 'Running Simulation...' : 'Simulate Pipeline ⚡'}
            </button>

          </div>

          {/* Console / Terminal output */}
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '350px' }}>
            <div style={{
              background: '#0c1a1e',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '12px',
              fontFamily: 'monospace, Courier New, Courier',
              padding: '1.5rem',
              color: '#39FF14',
              flex: 1,
              overflowY: 'auto',
              boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              fontSize: '0.85rem',
              lineHeight: '1.5'
            }}>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', pb: '0.5rem', mb: '0.5rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', display: 'flex', justifyContent: 'space-between' }}>
                <span>💾 AI_DEBUGGER_CONSOLE v1.0.4</span>
                <span>STATUS: READY</span>
              </div>
              
              {logs.length === 0 && (
                <div style={{ color: 'rgba(255,255,255,0.3)', fontStyle: 'italic', marginTop: '1rem' }}>
                  // Select elements on the left and click simulate to test compilation...
                </div>
              )}

              {logs.map((log, idx) => (
                <div key={idx} style={{
                  color: log.includes('[SUCCESS]') ? '#10b981' : log.includes('[METRIC]') ? 'var(--secondary)' : log.includes('[SYSTEM]') ? '#38bdf8' : '#39FF14'
                }}>
                  {log}
                </div>
              ))}
              
              {isSimulating && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  style={{ display: 'inline-block', width: '8px', height: '15px', background: '#39FF14', marginLeft: '4px' }}
                />
              )}
              <div ref={terminalEndRef} />
            </div>

            <AnimatePresence>
              {showCTA && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.3 }}
                  style={{ marginTop: '1.5rem' }}
                >
                  <button
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent('open-strategy-modal', { detail: { industry: 'AI & Automation' } }));
                    }}
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      background: 'white',
                      color: 'var(--primary)',
                      border: 'none',
                      padding: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      fontWeight: '700',
                      cursor: 'pointer'
                    }}
                  >
                    Deploy This Pipeline For Your Business <ArrowRight size={16} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AIPipelineSimulator;
