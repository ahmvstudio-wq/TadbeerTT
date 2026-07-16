import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServicePageHero from '../components/ServicePageHero';
import SectionHeader from '../components/SectionHeader';
import { 
  Bot, Database, Network, Cpu, CheckCircle2, Zap, Workflow, 
  FileText, BarChart3, Globe, Filter, Mail, Target, TrendingUp, 
  MessageSquare, Phone, AtSign, Users, Settings, ArrowRight,
  Play, RotateCcw, Search, PieChart, Layers, Send, ShieldCheck,
  Sparkles, LineChart, AlertTriangle, Clock, Building2, Activity, Truck, X
} from 'lucide-react';
import { createLead } from '../supabaseService';
import AIPipelineSimulator from '../components/AIPipelineSimulator';

/* ──────────────────────────────────────────────
   DEMO DATA
   ────────────────────────────────────────────── */

const workflowDemos = [
  {
    id: 'omnichannel',
    label: 'Omnichannel Lead System',
    icon: <Globe size={20} />,
    tagline: 'Capture every interaction. Qualify instantly. Close faster.',
  },
  {
    id: 'website-ai',
    label: 'Website → Sales Machine',
    icon: <Sparkles size={20} />,
    tagline: 'Convert passive visitors into warm, qualified pipeline.',
  },
  {
    id: 'reporting',
    label: 'AI-Based Reporting',
    icon: <BarChart3 size={20} />,
    tagline: 'Ask questions in plain English. Get insights in seconds.',
  },
  {
    id: 'outreach',
    label: 'Sales Intelligence',
    icon: <Target size={20} />,
    tagline: 'AI-powered research, outreach, and follow-up at scale.',
  },
  {
    id: 'custom',
    label: 'Custom AI Tools',
    icon: <Settings size={20} />,
    tagline: 'Bespoke solutions for any industry problem.',
  },
];

const industryUseCases = [
  { industry: 'Healthcare', icon: <ShieldCheck size={20} />, problem: 'Patient no-shows cost $150B/yr globally', solution: 'Predictive scheduling AI reduced no-shows by 38% for a clinic chain in Muscat.' },
  { industry: 'Real Estate', icon: <Building2 size={20} />, problem: 'Agents spend 60% of time on unqualified leads', solution: 'AI scoring bot pre-qualifies leads via WhatsApp, increasing close rate by 2.8x.' },
  { industry: 'Retail & F&B', icon: <ShieldCheck size={20} />, problem: 'Inventory waste exceeds 15% in GCC F&B', solution: 'Demand forecasting model cut spoilage by 42% for a regional chain.' },
  { industry: 'Manufacturing', icon: <Settings size={20} />, problem: 'Unplanned downtime costs $260K/hr', solution: 'Predictive maintenance system detected 94% of failures 48hrs in advance.' },
  { industry: 'Education', icon: <Users size={20} />, problem: 'Student enrollment pipelines are manual', solution: 'Automated nurture sequences increased enrollment by 67%.' },
  { industry: 'Government', icon: <Building2 size={20} />, problem: 'Citizen service requests take 14+ days', solution: 'AI triage system processes and routes requests in under 90 seconds.' },
];

/* ──────────────────────────────────────────────
   OMNICHANNEL DEMO COMPONENT
   ────────────────────────────────────────────── */
const OmnichannelDemo = () => {
  const [step, setStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const channels = [
    { name: 'WhatsApp', icon: <MessageSquare size={16} />, message: '"Hi, I need ERP pricing for 50 users"', color: '#25D366' },
    { name: 'Website Form', icon: <Globe size={16} />, message: 'Contact form: Ahmed Al-Busaidi, CTO @ Gulf Logistics', color: 'var(--primary)' },
    { name: 'Instagram DM', icon: <AtSign size={16} />, message: '"Can you help with our social media?"', color: '#E4405F' },
    { name: 'Phone Call', icon: <Phone size={16} />, message: 'Inbound: +968 9XXX XXXX — 2min 14s duration', color: 'var(--secondary)' },
  ];

  const pipeline = [
    { stage: 'Captured', count: 4, color: 'var(--secondary)' },
    { stage: 'AI Scored', count: 4, color: 'var(--primary)' },
    { stage: 'Qualified', count: 2, color: '#22c55e' },
    { stage: 'Assigned', count: 2, color: '#8b5cf6' },
  ];

  const runDemo = () => {
    if (isRunning) return;
    setIsRunning(true);
    setStep(0);
    let s = 0;
    timerRef.current = setInterval(() => {
      s++;
      setStep(s);
      if (s >= 5) {
        clearInterval(timerRef.current);
        setIsRunning(false);
      }
    }, 1200);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setStep(0);
    setIsRunning(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%' }}>
      {/* Channel Capture */}
      <div className="demo-grid-4">
        {channels.map((ch, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.3, scale: 0.95 }}
            animate={step >= 1 ? { opacity: 1, scale: 1, borderColor: ch.color } : {}}
            transition={{ delay: i * 0.15 }}
            style={{ padding: '1rem', background: 'var(--bg)', borderRadius: '12px', border: `1.5px solid var(--border)`, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: ch.color, fontWeight: '600', fontSize: '0.8rem' }}>
              {ch.icon} {ch.name}
            </div>
            {step >= 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                {ch.message}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* AI Processing */}
      {step >= 2 && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ background: 'rgba(24,79,91,0.04)', border: '1px solid rgba(24,79,91,0.1)', borderRadius: '12px', padding: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <Bot size={18} color="var(--primary)" />
            <span style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '0.9rem' }}>AI Lead Scoring Engine</span>
            {step >= 3 && <span style={{ marginLeft: 'auto', color: '#22c55e', fontSize: '0.75rem', fontWeight: '600' }}>✓ Analysis Complete</span>}
          </div>
          {step >= 3 && (
            <div className="demo-grid-2">
              <div style={{ background: 'white', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Ahmed Al-Busaidi</div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: '700', color: '#22c55e', fontSize: '0.85rem' }}>Score: 92/100</span>
                  <span style={{ background: '#dcfce7', color: '#166534', padding: '0.15rem 0.5rem', borderRadius: '50px', fontSize: '0.65rem', fontWeight: '700' }}>HOT</span>
                </div>
              </div>
              <div style={{ background: 'white', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Instagram Enquiry</div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: '700', color: 'var(--secondary)', fontSize: '0.85rem' }}>Score: 54/100</span>
                  <span style={{ background: '#fef9c3', color: '#854d0e', padding: '0.15rem 0.5rem', borderRadius: '50px', fontSize: '0.65rem', fontWeight: '700' }}>WARM</span>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}

      {/* Assignment + CRM */}
      {step >= 4 && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="demo-grid-2">
          <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '1.25rem' }}>
            <div style={{ fontWeight: '700', color: '#166534', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}><Users size={16} /> Auto-Assigned</div>
            <div style={{ fontSize: '0.8rem', color: '#15803d' }}>Ahmed → <strong>Senior Rep (Mohammed K.)</strong><br />Instagram → <strong>Nurture Sequence #3</strong></div>
          </div>
          <div style={{ background: 'rgba(202,169,76,0.05)', border: '1px solid rgba(202,169,76,0.2)', borderRadius: '12px', padding: '1.25rem' }}>
            <div style={{ fontWeight: '700', color: 'var(--secondary)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}><Send size={16} /> CRM Updated</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>4 contacts created in HubSpot.<br />Follow-up tasks scheduled automatically.</div>
          </div>
        </motion.div>
      )}

      {/* Controls */}
      <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
        <button onClick={runDemo} disabled={isRunning} className="btn btn-primary" style={{ flex: 1, opacity: isRunning ? 0.5 : 1 }}>
          <Play size={16} /> {step === 0 ? 'Run Simulation' : isRunning ? 'Processing...' : 'Run Again'}
        </button>
        {step > 0 && <button onClick={reset} className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem' }}><RotateCcw size={16} /></button>}
      </div>
    </div>
  );
};

/* ──────────────────────────────────────────────
   WEBSITE → SALES MACHINE DEMO
   ────────────────────────────────────────────── */
const WebsiteSalesDemo = () => {
  const [visitorAction, setVisitorAction] = useState(null);
  const [aiResponse, setAiResponse] = useState(null);

  const triggers = [
    { label: 'Visits pricing page 3x', action: 'pricing' },
    { label: 'Downloads ERP guide', action: 'download' },
    { label: 'Scrolls to bottom of services', action: 'scroll' },
    { label: 'Returns after 48 hours', action: 'return' },
  ];

  const responses = {
    pricing: { headline: 'High Purchase Intent Detected', actions: ['Personalized exit-intent popup with 15% first-month offer', 'WhatsApp notification to assigned sales rep', 'CRM deal created: "ERP — High Intent"'], score: 88 },
    download: { headline: 'Content Engagement Signal', actions: ['Auto-enroll in 5-email ERP nurture sequence', 'Retarget on Meta with case study ads', 'Add to weekly sales digest for rep follow-up'], score: 72 },
    scroll: { headline: 'Service Exploration Pattern', actions: ['Trigger Onyx chatbot with personalized greeting', 'Display social proof: "12 companies signed up this month"', 'Track session heatmap for UX optimization'], score: 45 },
    return: { headline: 'Re-engagement Opportunity', actions: ['Show "Welcome back" banner with last viewed service', 'Send push notification: "Your consultation slot is still available"', 'Alert sales rep: "Returning visitor — call within 2 hours"'], score: 81 },
  };

  const handleTrigger = (action) => {
    setVisitorAction(action);
    setAiResponse(null);
    setTimeout(() => setAiResponse(responses[action]), 800);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
        Click a visitor behaviour to see how our AI converts it into pipeline:
      </div>

      <div className="demo-grid-2">
        {triggers.map((t) => (
          <button
            key={t.action}
            onClick={() => handleTrigger(t.action)}
            style={{
              padding: '1rem',
              background: visitorAction === t.action ? 'rgba(202,169,76,0.08)' : 'white',
              border: `1.5px solid ${visitorAction === t.action ? 'var(--secondary)' : 'var(--border)'}`,
              borderRadius: '10px',
              textAlign: 'left',
              cursor: 'pointer',
              transition: 'all 0.2s',
              fontSize: '0.85rem',
              fontWeight: '600',
              color: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Globe size={14} color="var(--secondary)" /> {t.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {aiResponse && (
          <motion.div key={visitorAction} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} style={{ background: 'var(--bg)', borderRadius: '12px', border: '1px solid var(--border)', padding: '1.5rem', flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h4 style={{ color: 'var(--primary)', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Sparkles size={16} color="var(--secondary)" /> {aiResponse.headline}</h4>
              <div style={{ background: aiResponse.score > 75 ? '#dcfce7' : aiResponse.score > 50 ? '#fef9c3' : '#f3f4f6', color: aiResponse.score > 75 ? '#166534' : aiResponse.score > 50 ? '#854d0e' : '#6b7280', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '700' }}>
                Intent: {aiResponse.score}%
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {aiResponse.actions.map((a, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.2 }} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <CheckCircle2 size={16} color="#22c55e" style={{ flexShrink: 0, marginTop: '2px' }} /> {a}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ──────────────────────────────────────────────
   AI REPORTING DEMO
   ────────────────────────────────────────────── */
const ReportingDemo = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [isThinking, setIsThinking] = useState(false);

  const presets = [
    'What was our best-performing ad campaign last quarter?',
    'Show me employee turnover by department',
    'Which products had the highest margin this month?',
    'Compare Q1 revenue vs Q1 last year',
  ];

  const fakeResults = {
    'What was our best-performing ad campaign last quarter?': {
      answer: 'The "GCC Digital Leaders" LinkedIn campaign generated the highest ROI with strong ROAS, bringing in multiple qualified leads with a reduced CPA.',
      chart: [30, 55, 42, 85, 70, 95],
      labels: ['Google Ads', 'Meta Ads', 'LinkedIn Org.', 'LinkedIn Paid', 'TikTok', 'Email'],
      highlight: 3,
      metric: { label: 'Best ROAS', value: 'High' }
    },
    'Show me employee turnover by department': {
      answer: 'Engineering has the lowest turnover, while Customer Support is highest. The company average is below the GCC industry benchmark.',
      chart: [22, 14, 8, 4, 18, 11],
      labels: ['Support', 'Sales', 'Marketing', 'Engineering', 'Operations', 'Average'],
      highlight: 5,
      metric: { label: 'Avg Turnover', value: 'Low' }
    },
    'Which products had the highest margin this month?': {
      answer: 'Custom AI Solutions had the highest gross margin, followed by ERP Consulting. Hardware resale remains the lowest margin line.',
      chart: [78, 65, 52, 45, 38, 12],
      labels: ['AI Solutions', 'ERP Consult', 'Marketing', 'HRMS', 'WMS', 'Hardware'],
      highlight: 0,
      metric: { label: 'Top Margin', value: 'Strong' }
    },
    'Compare Q1 revenue vs Q1 last year': {
      answer: 'Q1 revenue has increased significantly from last year. Growth was driven primarily by AI solutions and digital marketing.',
      chart: [307, 412],
      labels: ['Q1 2025', 'Q1 2026'],
      highlight: 1,
      metric: { label: 'YoY Growth', value: 'Positive' }
    },
  };

  const handleQuery = (q) => {
    setQuery(q);
    setResult(null);
    setIsThinking(true);
    setTimeout(() => {
      setResult(fakeResults[q] || fakeResults[presets[0]]);
      setIsThinking(false);
    }, 1500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
      {/* Preset chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {presets.map((p, i) => (
          <button key={i} onClick={() => handleQuery(p)} style={{ padding: '0.5rem 1rem', background: query === p ? 'rgba(202,169,76,0.1)' : 'white', border: `1px solid ${query === p ? 'var(--secondary)' : 'var(--border)'}`, borderRadius: '50px', fontSize: '0.75rem', cursor: 'pointer', color: 'var(--text-main)', fontWeight: query === p ? '600' : '400', transition: 'all 0.2s' }}>
            {p}
          </button>
        ))}
      </div>

      {/* Thinking state */}
      {isThinking && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}>
            <Cpu size={32} color="var(--primary)" />
          </motion.div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>Analyzing your data...</p>
        </motion.div>
      )}

      {/* Result */}
      <AnimatePresence mode="wait">
        {result && !isThinking && (
          <motion.div key={query} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Answer */}
            <div style={{ background: 'var(--bg)', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border)', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <Bot size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: '1.6', margin: 0 }}>{result.answer}</p>
            </div>

            {/* Chart + Metric */}
            <div className="demo-grid-1-auto">
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem', height: '120px', borderBottom: '1px solid var(--border)', paddingBottom: '0.25rem' }}>
                {result.chart.map((val, i) => {
                  const maxVal = Math.max(...result.chart);
                  return (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
                      <motion.div initial={{ height: 0 }} animate={{ height: `${(val / maxVal) * 100}px` }} transition={{ delay: i * 0.1, duration: 0.5 }} style={{ width: '100%', background: i === result.highlight ? 'var(--secondary)' : 'var(--primary)', borderRadius: '4px 4px 0 0', opacity: i === result.highlight ? 1 : 0.3 }} />
                      <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textAlign: 'center', lineHeight: '1.2' }}>{result.labels[i]}</span>
                    </div>
                  );
                })}
              </div>
              <div style={{ background: 'rgba(202,169,76,0.08)', border: '1px solid rgba(202,169,76,0.2)', borderRadius: '12px', padding: '1.25rem', textAlign: 'center', minWidth: '120px' }}>
                <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--secondary)' }}>{result.metric.value}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{result.metric.label}</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ──────────────────────────────────────────────
   OUTREACH & SALES INTELLIGENCE DEMO
   ────────────────────────────────────────────── */
const OutreachDemo = () => {
  const [targetCompany, setTargetCompany] = useState(null);
  const [intel, setIntel] = useState(null);
  const [isResearching, setIsResearching] = useState(false);

  const companies = [
    { name: 'Gulf Logistics LLC', industry: 'Logistics', employees: '120', hq: 'Muscat' },
    { name: 'Al Jazeera Foods', industry: 'F&B', employees: '450', hq: 'Dubai' },
    { name: 'Oman National Eng.', industry: 'Construction', employees: '800', hq: 'Sohar' },
  ];

  const intelData = {
    'Gulf Logistics LLC': {
      painPoints: ['Manual shipment tracking across 3 warehouses', 'No CRM — leads tracked in spreadsheets', 'Website hasn\'t been updated in 2 years'],
      decisionMaker: { name: 'Khalid Al-Rawahi', title: 'COO', linkedin: true },
      emailDraft: 'Subject: Cutting Logistics Costs with WMS Automation\n\nHi Khalid,\n\nI noticed Gulf Logistics is managing multi-warehouse operations. Our WMS clients typically see a significant reduction in picking errors within the first quarter.\n\nWould a brief demo be useful?',
      score: 87,
    },
    'Al Jazeera Foods': {
      painPoints: ['High inventory spoilage rate (est. 18%)', 'Social media presence but no conversion funnel', 'Hiring challenges — high turnover in retail staff'],
      decisionMaker: { name: 'Sara Mohammed', title: 'Marketing Director', linkedin: true },
      emailDraft: 'Subject: How GCC F&B Brands Are Cutting Spoilage\n\nHi Sara,\n\nAl Jazeera\'s product range is impressive. Our demand forecasting AI has helped similar F&B brands reduce waste significantly.\n\nCan I share a brief case study?',
      score: 74,
    },
    'Oman National Eng.': {
      painPoints: ['Complex project cost tracking across 12 active sites', 'Compliance reporting takes 2 weeks per quarter', 'No digital HR — payroll is semi-manual'],
      decisionMaker: { name: 'Hamad Al-Balushi', title: 'CFO', linkedin: false },
      emailDraft: 'Subject: Automating Project Cost Tracking for Construction Firms\n\nHi Hamad,\n\nWith multiple active sites, real-time cost visibility must be challenging. Our ERP implementations for construction firms deliver live project P&L dashboards.\n\nWorth a quick conversation?',
      score: 91,
    },
  };

  const handleResearch = (company) => {
    setTargetCompany(company.name);
    setIntel(null);
    setIsResearching(true);
    setTimeout(() => {
      setIntel(intelData[company.name]);
      setIsResearching(false);
    }, 2000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Select a target account to see AI-powered research + auto-generated outreach:</div>

      <div className="demo-grid-3">
        {companies.map((c) => (
          <button key={c.name} onClick={() => handleResearch(c)} style={{ padding: '1rem', background: targetCompany === c.name ? 'rgba(24,79,91,0.05)' : 'white', border: `1.5px solid ${targetCompany === c.name ? 'var(--primary)' : 'var(--border)'}`, borderRadius: '10px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s' }}>
            <div style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>{c.name}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{c.industry} • {c.employees} employees • {c.hq}</div>
          </button>
        ))}
      </div>

      {isResearching && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ padding: '2rem', textAlign: 'center' }}>
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}><Search size={28} color="var(--primary)" /></motion.div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>AI researching {targetCompany}...</p>
        </motion.div>
      )}

      {intel && !isResearching && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="demo-grid-2" style={{ flex: 1 }}>
          {/* Left: Intel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ background: 'var(--bg)', padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)' }}>
              <div style={{ fontWeight: '700', fontSize: '0.8rem', color: 'var(--primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><AlertTriangle size={14} color="var(--secondary)" /> Identified Pain Points</div>
              {intel.painPoints.map((p, i) => (
                <div key={i} style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}>• {p}</div>
              ))}
            </div>
            <div style={{ background: '#f0fdf4', padding: '1rem', borderRadius: '10px', border: '1px solid #bbf7d0' }}>
              <div style={{ fontWeight: '700', fontSize: '0.8rem', color: '#166534', marginBottom: '0.5rem' }}>Decision Maker</div>
              <div style={{ fontSize: '0.85rem', color: '#15803d' }}>{intel.decisionMaker.name} — {intel.decisionMaker.title}</div>
            </div>
          </div>
          {/* Right: Draft Email */}
          <div style={{ background: 'white', padding: '1rem', borderRadius: '10px', border: '1px solid var(--border)', fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--text-main)', whiteSpace: 'pre-wrap', lineHeight: '1.6', position: 'relative' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: '700', color: 'var(--secondary)', fontFamily: 'var(--font-en)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mail size={14} /> AI-Generated Outreach</div>
            {intel.emailDraft}
          </div>
        </motion.div>
      )}
    </div>
  );
};

/* ──────────────────────────────────────────────
   CUSTOM AI TOOLS DEMO
   ────────────────────────────────────────────── */
const CustomToolsDemo = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Select an industry to see a real AI solution we've built or designed:</div>
      <div className="demo-grid-3">
        {industryUseCases.map((uc, i) => (
          <button key={i} onClick={() => setSelectedIndustry(i)} style={{ padding: '1rem', background: selectedIndustry === i ? 'rgba(202,169,76,0.08)' : 'white', border: `1.5px solid ${selectedIndustry === i ? 'var(--secondary)' : 'var(--border)'}`, borderRadius: '10px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s' }}>
            <div style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--primary)' }}>{uc.industry}</div>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedIndustry !== null && (
          <motion.div key={selectedIndustry} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="demo-grid-2" style={{ flex: 1 }}>
            <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '12px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ fontWeight: '700', color: '#991b1b', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><AlertTriangle size={16} /> The Problem</div>
              <p style={{ fontSize: '0.9rem', color: '#7f1d1d', margin: 0, lineHeight: '1.6' }}>{industryUseCases[selectedIndustry].problem}</p>
            </div>
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ fontWeight: '700', color: '#166534', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} /> Our AI Solution</div>
              <p style={{ fontSize: '0.9rem', color: '#15803d', margin: 0, lineHeight: '1.6' }}>{industryUseCases[selectedIndustry].solution}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ──────────────────────────────────────────────
   CONVERSATIONAL AI LEAD MODAL
   ────────────────────────────────────────────── */
const AIDemoLeadModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', requirement: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Securing session context...');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.requirement) {
      setError('Please fill in all required fields (Name, Email, Phone, and Requirements).');
      return;
    }

    setLoading(true);
    setProgress(0);
    setLoadingText('Securing session context...');
    setError('');
    
    const lead = {
      name: formData.name,
      email: formData.email,
      company: formData.company || null,
      phone: formData.phone || null,
      resource: 'AI Demo Enquiry',
      bottleneck: formData.requirement || null,
      source_url: window.location.pathname + window.location.hash,
      date: new Date().toISOString()
    };
    
    // DB Call in parallel
    const dbPromise = createLead(lead);

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 5;
      
      if (currentProgress < 35) {
        setLoadingText('Securing session context...');
      } else if (currentProgress < 70) {
        setLoadingText('Syncing requirements...');
      } else if (currentProgress < 90) {
        setLoadingText('Updating admin dashboard...');
      }
      
      if (currentProgress >= 90) {
        clearInterval(interval);
        
        dbPromise.then(({ error: dbError }) => {
          if (!dbError) {
            setProgress(100);
            setLoadingText('Request synced!');
            
            setTimeout(() => {
              setLoading(false);
              setSubmitted(true);
              sessionStorage.setItem('ai_demo_lead_capture_submitted', 'true');
              
              // Broadcast sync message locally
              try {
                const bc = new BroadcastChannel('tadbeer_leads_sync');
                bc.postMessage({ event: 'new-lead', timestamp: Date.now() });
                bc.close();
              } catch(syncErr) {
                console.warn('Sync broadcast failed:', syncErr);
              }
              // Also fire window event
              window.dispatchEvent(new CustomEvent('lead-submitted', { detail: lead }));
            }, 350);
          } else {
            console.error('Failed to save demo inquiry:', dbError);
            setLoading(false);
            setError('Something went wrong. Please check your connection and try again.');
          }
        });
      } else {
        setProgress(currentProgress);
      }
    }, 55);

    // Auto close modal
    setTimeout(() => {
      setSubmitted(prev => {
        if (prev) {
          onClose();
          setFormData({ name: '', company: '', email: '', phone: '', requirement: '' });
        }
        return false;
      });
    }, 5000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="lead-modal-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}
          />
          
          <motion.div
            className="lead-modal-panel"
            data-lenis-prevent
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            style={{ 
              background: 'white', 
              borderRadius: '16px', 
              width: '100%', 
              maxWidth: '500px', 
              position: 'relative', 
              overflow: 'hidden', 
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Header */}
            <div className="lead-modal-header" style={{ background: 'var(--primary)', color: 'white', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}>
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>AI assistant</span>
                <h3 style={{ fontSize: '1.25rem', marginTop: '0.25rem', lineHeight: '1.4', color: 'white' }}>Build Your AI Advantage</h3>
              </div>
              <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', padding: '0.25rem' }}>
                <X size={20} />
              </button>
            </div>

            <div className="lead-modal-body" style={{ 
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: submitted || loading ? 'center' : 'flex-start',
              minHeight: '350px',
              position: 'relative',
              overflowY: 'auto',
              flex: 1
            }}>
              {loading ? (
                <motion.div 
                  className="modal-processing-state"
                  key="loading"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '1.5rem 0' }}
                >
                  <div className="modal-progress-frame" style={{ position: 'relative', width: '80px', height: '80px', margin: '0 auto 1.5rem', flexShrink: 0 }}>
                    <svg width="80" height="80" viewBox="0 0 50 50">
                      <circle cx="25" cy="25" r="20" fill="none" stroke="rgba(24, 79, 91, 0.08)" strokeWidth="3" />
                      <motion.circle 
                        cx="25" cy="25" r="20" fill="none" stroke="var(--primary)" strokeWidth="3"
                        strokeDasharray="125"
                        animate={{ strokeDashoffset: 125 - (125 * progress) / 100 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        style={{ originX: '25px', originY: '25px', rotate: -90 }}
                      />
                    </svg>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.95rem', fontWeight: '700', color: 'var(--primary)', lineHeight: '1', margin: 0, padding: 0, whiteSpace: 'nowrap' }}>
                      {progress}%
                    </div>
                  </div>
                  <h3 style={{ color: 'var(--primary)', fontWeight: '700', fontSize: 'clamp(1rem, 4vw, 1.25rem)', marginBottom: '0.5rem', wordBreak: 'break-word', whiteSpace: 'normal', padding: '0 1rem' }}>
                    {loadingText}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    Syncing AI requirements...
                  </p>
                </motion.div>
              ) : submitted ? (
                <motion.div 
                  className="modal-success-state"
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '1.5rem 0' }}
                >
                  <div className="modal-success-frame" style={{ position: 'relative', width: '70px', height: '70px', margin: '0 auto 1.25rem', flexShrink: 0 }}>
                    <svg width="70" height="70" viewBox="0 0 50 50">
                      <motion.circle 
                        cx="25" cy="25" r="22" 
                        fill="none" stroke="var(--secondary)" strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                      <motion.path 
                        d="M16,25 L22,31 L34,17" 
                        fill="none" stroke="var(--secondary)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                      />
                      <motion.circle
                        cx="25" cy="25" r="22"
                        fill="none" stroke="var(--secondary)" strokeWidth="1"
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{ scale: 1.4, opacity: 0 }}
                        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                      />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', fontWeight: '700', marginBottom: '0.5rem' }}>Thank You!</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '0' }}>We've received your requirements. Our transformation architect will review them and reach out to you shortly.</p>
                  
                  <div style={{ position: 'absolute', bottom: 0, left: 0, height: '4px', background: 'var(--secondary)', width: '100%' }}>
                    <motion.div 
                      initial={{ width: '100%' }}
                      animate={{ width: '0%' }}
                      transition={{ duration: 4.65, ease: 'linear' }}
                      style={{ height: '100%', background: 'var(--primary)', originX: 0 }}
                    />
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {error && (
                    <div style={{ color: '#dc3545', background: 'rgba(220, 53, 69, 0.05)', border: '1px solid rgba(220, 53, 69, 0.2)', padding: '0.75rem 1rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '500' }}>
                      {error}
                    </div>
                  )}
                  <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', fontSize: '0.95rem', lineHeight: '1.5' }}>
                    "Looking to build an AI system for your business? Tell us your requirements and we'll show you how we can help."
                  </p>
                  
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Your Name *</label>
                    <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.95rem', backgroundColor: '#FFFFFF', color: '#1C1B17' }} />
                  </div>

                  <div className="modal-form-row">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Company</label>
                      <input type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.95rem', backgroundColor: '#FFFFFF', color: '#1C1B17' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Phone Number *</label>
                      <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.95rem', backgroundColor: '#FFFFFF', color: '#1C1B17' }} />
                    </div>
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Email Address *</label>
                    <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.95rem', backgroundColor: '#FFFFFF', color: '#1C1B17' }} />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-main)' }}>AI Requirements / Message *</label>
                    <textarea required rows="3" value={formData.requirement} onChange={e => setFormData({...formData, requirement: e.target.value})} placeholder="E.g., We want to build a bilingual customer service agent on WhatsApp..." style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.95rem', backgroundColor: '#FFFFFF', color: '#1C1B17', fontFamily: 'inherit', resize: 'vertical' }} />
                  </div>

                  <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem', fontSize: '1.05rem' }}>
                    {loading ? 'Submitting...' : 'Submit Requirements'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

/* ──────────────────────────────────────────────
   MAIN PAGE COMPONENT
   ────────────────────────────────────────────── */
const AITechnologyPage = () => {
  const [activeWorkflow, setActiveWorkflow] = useState('omnichannel');
  const [popupOpen, setPopupOpen] = useState(false);
  const interactionTimerRef = useRef(null);

  useEffect(() => {
    document.title = "AI & Technology | Automation That Earns Its Place";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Enterprise AI solutions for GCC businesses. Intelligent WhatsApp qualification, sales automation, machine learning route optimization, and AI reporting dashboards.");
    }
  }, []);

  const handleDemoInteraction = () => {
    const isDismissed = sessionStorage.getItem('ai_demo_lead_capture_dismissed');
    const isSubmitted = sessionStorage.getItem('ai_demo_lead_capture_submitted');
    if (isDismissed || isSubmitted) return;

    if (!interactionTimerRef.current) {
      interactionTimerRef.current = setTimeout(() => {
        setPopupOpen(true);
      }, 7500); // 7.5 seconds engagement
    }
  };

  useEffect(() => {
    return () => {
      if (interactionTimerRef.current) {
        clearTimeout(interactionTimerRef.current);
      }
    };
  }, []);

  const demoComponents = {
    omnichannel: <OmnichannelDemo />,
    'website-ai': <WebsiteSalesDemo />,
    reporting: <ReportingDemo />,
    outreach: <OutreachDemo />,
    custom: <CustomToolsDemo />,
  };

  return (
    <div className="page-wrapper">
      <ServicePageHero 
        title="AI & Technology"
        subtitle="Automation That Earns Its Place in the Business"
        description="The most durable AI applications are not the most visible ones. They are the ones running inside the workflows that matter most — reducing the manual effort that compounds over years, improving the quality of decisions made on incomplete information, and building operational capacity that does not require adding headcount to sustain it."
        breadcrumbs={['Home', 'Services', 'AI Technology']}
      />

      {/* AI Systems Showcase */}
      <section className="sp-section" style={{ padding: 'var(--section-padding)' }}>
        <div className="container">
          <SectionHeader label="Our Capabilities" title="AI Applications That Solve Defined Problems" centered />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '3.5rem' }}>
            {[
              {
                title: 'Healthcare AI',
                icon: <Activity size={28} />,
                problem: 'Patient scheduling inefficiencies, administrative bottlenecks, and high diagnostic wait times.',
                solution: 'Predictive scheduling, bilingual health record indexing, and appointment automation.',
                outcome: 'Measurable improvement in patient flow and clinical throughput.'
              },
              {
                title: 'Real Estate AI',
                icon: <Building2 size={28} />,
                problem: 'Agents losing hours on unqualified enquiries and cold property leads.',
                solution: 'Intelligent WhatsApp qualification systems that assess buyer intent and match profiles to live listings.',
                outcome: 'More time for brokers where it counts.'
              },
              {
                title: 'Logistics AI',
                icon: <Truck size={28} />,
                problem: 'Manual route planning, inaccurate dispatch times, and high warehouse picking errors.',
                solution: 'Machine learning route optimisation and warehouse tracking.',
                outcome: 'Improved picking accuracy, faster turnaround.'
              },
              {
                title: 'Sales Automation',
                icon: <Workflow size={28} />,
                problem: 'Sales teams wasting 70% of their day on manual follow-ups and CRM updates.',
                solution: 'AI-powered outreach sequences that handle follow-up and CRM updates automatically.',
                outcome: 'Higher volume, consistent pipeline visibility.'
              },
              {
                title: 'Lead Qualification',
                icon: <Target size={28} />,
                problem: 'Inbound leads cooling down due to slow manual response times.',
                solution: 'Omnichannel qualification systems that assess and route high-intent leads promptly.',
                outcome: 'Fewer lost conversations.'
              },
              {
                title: 'AI Reporting',
                icon: <BarChart3 size={28} />,
                problem: 'Executive teams waiting days for data analysts to compile performance reports.',
                solution: 'Natural language query systems generating structured reports from live data.',
                outcome: 'Business intelligence in English or Arabic, when it is needed.'
              },
              {
                title: 'AI Assistants',
                icon: <Bot size={28} />,
                problem: 'Internal teams bogged down by repetitive customer support and operational QA enquiries.',
                solution: 'Contextual workspace assistants with role-based access controls.',
                outcome: 'A meaningful proportion of internal queries handled without human involvement.'
              }
            ].map((system, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  border: '1px solid var(--border)',
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--secondary)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(24,79,91,0.04)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: 'rgba(24,79,91,0.05)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  {system.icon}
                </div>
                
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '1.5rem' }}>{system.title}</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1 }}>
                  <div>
                    <span style={{ fontWeight: '700', color: 'var(--primary)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.25rem' }}>Business Problem:</span>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>{system.problem}</p>
                  </div>
                  <div>
                    <span style={{ fontWeight: '700', color: 'var(--secondary)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.25rem' }}>AI Solution:</span>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>{system.solution}</p>
                  </div>
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', marginTop: 'auto' }}>
                    <span style={{ fontWeight: '700', color: '#166534', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.25rem' }}>Business Outcome:</span>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: '600', lineHeight: '1.5', margin: 0 }}>{system.outcome}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ AI Pipeline Simulator ═══════ */}
      <AIPipelineSimulator />

      {/* ═══════ Interactive Workflow Demos ═══════ */}
      <section style={{ padding: 'var(--section-padding)', background: 'var(--bg)' }}>
        <div className="container">
          <SectionHeader label="Interactive Demonstrations" title="See the Systems Working" subtitle="Live workflow simulations. Not pitch decks — working demonstrations of what these systems do in practice." centered />

          {/* Workflow Selector Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '3rem' }}>
            {workflowDemos.map((w) => (
              <button
                key={w.id}
                onClick={() => setActiveWorkflow(w.id)}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: activeWorkflow === w.id ? 'var(--primary)' : 'white',
                  color: activeWorkflow === w.id ? 'white' : 'var(--primary)',
                  border: `1.5px solid ${activeWorkflow === w.id ? 'var(--primary)' : 'var(--border)'}`,
                  borderRadius: '50px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: '600',
                  fontSize: '0.85rem',
                  transition: 'all 0.2s'
                }}
              >
                {w.icon} {w.label}
              </button>
            ))}
          </div>

          {/* Demo Stage */}
          <div onMouseDownCapture={handleDemoInteraction} onKeyDownCapture={handleDemoInteraction} style={{ background: 'white', borderRadius: '20px', border: '1px solid var(--border)', boxShadow: '0 20px 60px rgba(0,0,0,0.04)', overflow: 'hidden' }}>
            {/* Header Bar */}
            <div style={{ padding: '1.25rem 2rem', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
                <span style={{ marginLeft: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '500' }}>
                  {workflowDemos.find(w => w.id === activeWorkflow)?.label}
                </span>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {workflowDemos.find(w => w.id === activeWorkflow)?.tagline}
              </span>
            </div>

            {/* Demo Content */}
            <div style={{ padding: '2rem', minHeight: '450px' }}>
              <AnimatePresence mode="wait">
                <motion.div key={activeWorkflow} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} style={{ height: '100%' }}>
                  {demoComponents[activeWorkflow]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section style={{ padding: 'var(--section-padding)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <SectionHeader label="Get Started" title="Ready to Build Your AI Advantage?" centered />
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Book a free 30-minute strategy call. We'll identify 3 high-ROI AI use cases specific to your business — no strings attached.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-strategy-modal')); }} 
              className="btn btn-primary" 
              style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', cursor: 'pointer', border: 'none' }}
            >
              Apply for a Strategy Session
            </button>
            <a href="/resources" className="btn btn-secondary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>Download AI Playbook</a>
          </div>
        </div>
      </section>

      <AIDemoLeadModal isOpen={popupOpen} onClose={() => { setPopupOpen(false); sessionStorage.setItem('ai_demo_lead_capture_dismissed', 'true'); }} />
    </div>
  );
};

export default AITechnologyPage;
