import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Bot, Database, Workflow, CheckCircle2, ArrowRight, FileText, Zap, Play, RotateCcw, MessageSquare, Globe, Send, Search } from 'lucide-react';

const AdvancedCapabilities = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const demos = [
    {
      id: 0,
      title: 'Document Intelligence',
      icon: <FileText size={20} />,
      desc: 'Extract structured data from Arabic & English PDFs and push directly to your ERP.',
    },
    {
      id: 1,
      title: 'Smart Support Routing',
      icon: <MessageSquare size={20} />,
      desc: 'AI classifies intent, checks sentiment, and routes queries to the right agent instantly.',
    },
    {
      id: 2,
      title: 'Demand Forecasting',
      icon: <Database size={20} />,
      desc: 'ML models predict inventory needs based on historical sales and seasonal trends.',
    }
  ];

  return (
    <section id="advanced-capabilities" style={{ padding: 'var(--section-padding)', background: 'white' }}>
      <div className="container">
        <SectionHeader 
          label="Technology Preview" 
          title="See Our Systems In Action" 
          subtitle="Interactive demonstrations of the technology stack that powers Tadbeer's transformation services."
          centered 
        />

        <div className="ac-main-grid" style={{ marginTop: '3rem' }}>
          
          {/* Controls */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(demo.id)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '1.25rem',
                  background: activeDemo === demo.id ? 'rgba(24,79,91,0.04)' : 'transparent',
                  border: `1.5px solid ${activeDemo === demo.id ? 'var(--primary)' : 'var(--border)'}`,
                  borderRadius: '14px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <div style={{ color: activeDemo === demo.id ? 'var(--primary)' : 'var(--text-muted)' }}>{demo.icon}</div>
                  <h3 style={{ fontSize: '1rem', color: activeDemo === demo.id ? 'var(--primary)' : 'var(--text-main)', fontWeight: '600', margin: 0 }}>{demo.title}</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', margin: 0, lineHeight: '1.4' }}>{demo.desc}</p>
              </button>
            ))}
          </div>

          {/* Interactive Stage */}
          <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '20px', padding: '2rem', minHeight: '400px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
              <span style={{ marginLeft: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Live Demo — {demos[activeDemo].title}</span>
            </div>

            <AnimatePresence mode="wait">
              {activeDemo === 0 && (
                <motion.div key="demo0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="ac-demo-grid">
                  
                  <div style={{ background: 'white', border: '1px dashed var(--border)', padding: '1.5rem', borderRadius: '12px', fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--text-muted)', height: '240px' }}>
                    <div style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 'bold', fontFamily: 'var(--font-en)', fontSize: '0.8rem' }}>RAW INVOICE (PDF)</div>
                    Vendor: Al-Omania Traders L.L.C<br/>
                    Date: 12-04-2026<br/>
                    Total: OMR 1,450.000<br/>
                    Tax ID: OM-9928374<br/><br/>
                    Items:<br/>
                    - Server Racks (Qty 4) @ 250<br/>
                    - Installation Services @ 450
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }} style={{ color: 'var(--primary)' }}>
                      <Database size={28} />
                    </motion.div>
                    <span style={{ fontSize: '0.65rem', color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700' }}>Processing</span>
                  </div>

                  <div style={{ background: 'white', border: '1px solid rgba(24,79,91,0.15)', padding: '1.5rem', borderRadius: '12px', fontFamily: 'monospace', fontSize: '0.8rem', color: 'var(--primary)', height: '240px' }}>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>{`{`}</motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} style={{ paddingLeft: '1rem' }}>{`"vendor": "Al-Omania Traders",`}</motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} style={{ paddingLeft: '1rem' }}>{`"date": "2026-04-12",`}</motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} style={{ paddingLeft: '1rem' }}>{`"total_omr": 1450.000,`}</motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }} style={{ paddingLeft: '1rem' }}>{`"tax_id": "OM-9928374",`}</motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }} style={{ paddingLeft: '1rem' }}>{`"status": "VALIDATED"`}</motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.3 }}>{`}`}</motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }} style={{ marginTop: '1rem', color: '#22c55e', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-en)' }}>
                      <CheckCircle2 size={14} /> Pushed to ERP
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {activeDemo === 1 && (
                <motion.div key="demo1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="ac-demo-flex" style={{ minHeight: '240px' }}>
                  <div style={{ flex: 1, background: 'white', borderRadius: '12px', padding: '1rem', border: '1px solid var(--border)' }}>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: '600' }}>Incoming Messages</div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ background: 'var(--bg)', padding: '0.75rem', borderRadius: '8px', marginBottom: '0.5rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                      "I need to reset my password for the HR portal."
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} style={{ background: 'var(--bg)', padding: '0.75rem', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                      "We want to upgrade our server capacity by 50%."
                    </motion.div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }} style={{ color: 'var(--secondary)' }}>
                      <Workflow size={28} />
                    </motion.div>
                  </div>

                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: '600' }}>Action Taken</div>
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '0.75rem', borderRadius: '8px', fontSize: '0.8rem', color: '#166534' }}>
                      <strong style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.25rem' }}><Bot size={14}/> Autonomous Resolution</strong>
                      Sent reset link to registered email instantly.
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.1 }} style={{ marginTop: 'auto', background: 'rgba(202,169,76,0.06)', border: '1px solid rgba(202,169,76,0.2)', padding: '0.75rem', borderRadius: '8px', fontSize: '0.8rem', color: 'var(--text-main)' }}>
                      <strong style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.25rem', color: 'var(--secondary)' }}><ArrowRight size={14}/> Escalated to Sales</strong>
                      Intent: High Value Upgrade. Routed to: Enterprise Team.
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {activeDemo === 2 && (
                <motion.div key="demo2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', height: '180px', padding: '1rem', borderBottom: '1px solid var(--border)' }}>
                    {[40, 65, 45, 80, 55, 90, 120, 100].map((height, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}px` }}
                        transition={{ delay: i * 0.1, type: 'spring' }}
                        style={{ width: '8%', background: i > 5 ? 'var(--secondary)' : 'var(--primary)', borderRadius: '4px 4px 0 0', opacity: i > 5 ? 1 : 0.3 }}
                      />
                    ))}
                  </div>
                  <div style={{ padding: '1.5rem 0', display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: '12px', height: '12px', background: 'rgba(24,79,91,0.3)', borderRadius: '2px' }} />
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Historical Data</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: '12px', height: '12px', background: 'var(--secondary)', borderRadius: '2px' }} />
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: '600' }}>ML Forecast</span>
                    </div>
                  </div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} style={{ background: '#fef2f2', border: '1px solid #fecaca', padding: '1rem', borderRadius: '8px', color: '#991b1b', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontWeight: 'bold' }}>⚠ Alert:</span> Predicted 45% demand surge next month. Automated PO generation recommended.
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedCapabilities;
