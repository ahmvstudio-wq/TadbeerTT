import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Cpu, Network, Terminal } from 'lucide-react';

// Import logos
import alHarrasiLogo from '../assets/clients/al-harrasi-rope-factory.png';
import omanAirLogo from '../assets/clients/oman-air.png';
import troxyLogo from '../assets/clients/troxy.png';
import aturLogo from '../assets/clients/atiin.png';
import marbleLogo from '../assets/clients/sultanate-of-marble.png';

// Import case images
import omanAirCaseImage from '../assets/clients/oman_air_case.png';
import troxyCaseImage from '../assets/clients/troxy_case.png';
import alHarassiCaseImage from '../assets/clients/al_harassi_case.png';

const caseStudiesData = {
  'oman-air': {
    title: 'Oman Air',
    industry: 'Aviation',
    service: 'Visitor Management System',
    challenge: "Oman Air's visitor registration process relied heavily on manual logbooks, handwritten gate passes, and paper-based approvals. This created delays during visitor entry, increased administrative work, and made visitor tracking inefficient.",
    approach: "Conducted a detailed process review at Oman Air offices. Designed a secure, automated Visitor Management System (VMS) integrated with their central database, completely replacing ledger-book gates.",
    solution: "Designed and implemented a fully customized Visitor Management System integrated with Oman Air's website. The solution introduced: Online visitor registration, QR-code based visitor access, automated approvals, digital visitor records, and secure gate entry.",
    outcome: "Faster visitor processing, reduced manual administration, improved security, better visitor visibility, and streamlined front desk operations.",
    metrics: [
      { label: 'Check-in Time', value: '45 sec', sub: 'Down from 8 min' },
      { label: 'Paper Cost', value: '-100%', sub: 'Fully digitized' },
      { label: 'Front-desk Load', value: '-70%', sub: 'Automated passes' }
    ],
    image: omanAirCaseImage,
    logo: omanAirLogo,
    color: '#0066cc'
  },
  'troxy-oman': {
    title: 'Troxy Oman',
    industry: 'Restaurant / Food Service',
    service: 'Business Establishment & IT Redesign',
    challenge: "Troxy Oman was a newly launched restaurant concept that required complete operational setup before opening. The business lacked structured operations, HR systems, network infrastructure, and technology implementation.",
    approach: "Provided an end-to-end consulting framework, building structural policies and conducting a comprehensive IT infrastructure audit. Redesigned their layout for peak customer service speed.",
    solution: "Provided end-to-end business support including: organizational structuring, HR planning, recruitment support, company policies, IT audit, mesh network redesign, POS implementation, and operational workflows.",
    outcome: "Stable business launch, reliable network infrastructure, improved operational efficiency, better order management, and scalable internal systems.",
    metrics: [
      { label: 'Launch Timeline', value: 'On Time', sub: '100% structured' },
      { label: 'POS Network Uptime', value: '99.9%', sub: 'Redundant mesh' },
      { label: 'Order Processing', value: '-35%', sub: 'Optimized POS flow' }
    ],
    image: troxyCaseImage,
    logo: troxyLogo,
    color: '#cca94c'
  },
  'al-harassi': {
    title: 'Al Harassi Rope Factory',
    industry: 'Manufacturing',
    service: 'Digital Transformation & Website Development',
    challenge: "Al Harassi Rope Factory is a well-established manufacturing company with significant offline operations but little to no effective online presence. The business lacked a professional digital platform to showcase its capabilities, attract suppliers, and support business growth online.",
    approach: "Mapped their physical manufacturing and industrial operations into a highly polished digital platform, building custom supplier onboarding forms to support B2B supplier registration.",
    solution: "Tadbeer designed and developed a customized corporate website tailored to the company's manufacturing operations and business objectives. The project included: Corporate website design and development, digital business presence, supplier registration system, lead generation infrastructure, online inquiry management, and business positioning for B2B customers.",
    outcome: "Established a professional online presence, improved credibility with suppliers and customers, enabled online supplier registration, created a scalable digital lead generation channel, and extended the company's offline operations into the digital space.",
    metrics: [
      { label: 'Supplier Onboard', value: 'Instant', sub: 'Zero paperwork delay' },
      { label: 'B2B Leads Volume', value: '+45%', sub: 'Digital inquiries portal' },
      { label: 'Operational Reach', value: 'Global B2B', sub: 'Online positioning' }
    ],
    image: alHarassiCaseImage,
    logo: alHarrasiLogo,
    color: '#1a5c6a'
  },
  'atur': {
    title: 'Atur',
    industry: 'Perfume Marketplace',
    service: 'Strategy & Platform Development',
    challenge: "A traditional perfume business wanted to transform its decades of industry knowledge into a scalable digital marketplace for Oman and the GCC. The concept required strategic validation before development.",
    approach: "Validated the market viability through GCC consumer surveys, designed a luxury brand architecture, and structured a robust ecommerce software architecture ready for cross-border expansion.",
    solution: "Supported the business through: product strategy, market validation, branding, prototype planning, UX direction, software architecture, platform development, business structuring, and resource planning.",
    outcome: "Clear market positioning, digital platform launch, structured product roadmap, and a strong operational foundation.",
    metrics: [
      { label: 'Validation Phase', value: 'Complete', sub: 'GCC-wide focus' },
      { label: 'Launch Readiness', value: 'Active', sub: 'Scalable architecture' },
      { label: 'Brand Footprint', value: 'Oman & GCC', sub: 'Premium styling' }
    ],
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&q=80',
    logo: aturLogo,
    color: '#e74f9a'
  },
  'sultanate-of-marble': {
    title: 'Sultanate of Marble',
    industry: 'Manufacturing',
    service: 'ERP Consulting & Implementation',
    challenge: "Following business restructuring after COVID, Sultanate of Marble required a modern ERP platform capable of supporting manufacturing operations and future growth. Multiple ERP platforms needed evaluation before implementation.",
    approach: "Analyzed manufacturing workflows across a 200+ employee operation. Evaluated leading ERP systems (SAP, ERPNext, Odoo) on absolute cost-benefit metrics before leading system integration.",
    solution: "Conducted operational analysis and compared: SAP, ERPNext, and Odoo. Recommended the most suitable platform based on operational requirements. Led ERP implementation across a manufacturing operation exceeding 200 employees.",
    outcome: "Successful ERP deployment, digitized operations, better operational visibility, improved manufacturing processes, and a scalable technology foundation.",
    metrics: [
      { label: 'Implementation', value: 'Success', sub: '200+ employees' },
      { label: 'Inventory Leakage', value: '-95%', sub: 'Barcode tracking' },
      { label: 'Reporting Lag', value: '0 Days', sub: 'Instant analytics' }
    ],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80',
    logo: marbleLogo,
    color: '#1a5c6a'
  }
};

// ─── Case Study 1: Oman Air Interactive VMS Flow Simulator ───
const OmanAirInfographic = () => {
  const [step, setStep] = useState(0);
  const steps = [
    { title: '1. Online Registration', desc: 'Visitor enters details and uploads ID online.', status: 'Sent for Auto-approval' },
    { title: '2. QR Code Generation', desc: 'Secure single-use entry pass sent to phone.', status: 'Encrypted token active' },
    { title: '3. Security Scan at Gate', desc: 'Visitor scans QR at gate scanner.', status: 'Access control verified' },
    { title: '4. Digital Log Entry', desc: 'Access granted. Entrance logs written in real-time.', status: 'Security database updated' }
  ];

  return (
    <div style={{ background: '#0a2329', border: '1px solid rgba(202, 169, 76, 0.25)', borderRadius: '16px', padding: '1.5rem', marginTop: '2rem' }}>
      <h4 style={{ color: 'white', margin: '0 0 1rem', fontSize: '1rem', fontWeight: '700' }}>📊 Visitor Access Flow Simulator</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {steps.map((s, idx) => {
          const isActive = idx === step;
          const isCompleted = idx < step;
          return (
            <div 
              key={idx} 
              onClick={() => setStep(idx)}
              style={{ 
                padding: '0.85rem', 
                background: isActive ? 'rgba(202, 169, 76, 0.08)' : 'transparent',
                border: isActive ? '1px solid var(--secondary)' : '1px solid rgba(255,255,255,0.05)',
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', color: isActive || isCompleted ? 'var(--secondary)' : 'rgba(255,255,255,0.6)' }}>{s.title}</span>
                {isCompleted && <CheckCircle2 size={14} color="#cca94c" />}
              </div>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', margin: '4px 0 0' }}>{s.desc}</p>
              {isActive && (
                <div style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: '600', marginTop: '6px', background: 'rgba(16, 185, 129, 0.1)', display: 'inline-block', padding: '2px 6px', borderRadius: '4px' }}>
                  ● {s.status}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <button 
        onClick={() => setStep((prev) => (prev + 1) % 4)}
        style={{ width: '100%', marginTop: '1.25rem', background: 'var(--secondary)', color: 'var(--primary)', border: 'none', padding: '0.65rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '700', cursor: 'pointer' }}
      >
        Simulate Next Access Step
      </button>
    </div>
  );
};

// ─── Case Study 2: Troxy Oman Redundant IT Architecture Map ───
const TroxyInfographic = () => {
  const [activeNode, setActiveNode] = useState(null);
  const nodes = [
    { name: 'POS Terminals', desc: 'Secure transaction nodes with instant cloud synchronization.' },
    { name: 'Redundant Mesh Network', desc: 'Mesh WiFi nodes guaranteeing offline mode survival for ordering.' },
    { name: 'Kitchen Display (KDS)', desc: 'Real-time queue ticket dispatcher with custom alert matrices.' }
  ];

  return (
    <div style={{ background: '#0a2329', border: '1px solid rgba(202, 169, 76, 0.25)', borderRadius: '16px', padding: '1.5rem', marginTop: '2rem' }}>
      <h4 style={{ color: 'white', margin: '0 0 1rem', fontSize: '1rem', fontWeight: '700' }}>🔌 Redundant IT Infrastructure Topology</h4>
      <div style={{ height: '140px', position: 'relative', display: 'flex', justifyContent: 'space-around', alignItems: 'center', background: 'rgba(24, 79, 91, 0.2)', borderRadius: '8px', overflow: 'hidden' }}>
        {/* Connection lines */}
        <div style={{ position: 'absolute', width: '80%', height: '2px', background: 'dashed rgba(202,169,76,0.3)', borderTop: '2px dashed rgba(202,169,76,0.3)' }} />
        {nodes.map((n, idx) => (
          <div
            key={idx}
            onClick={() => setActiveNode(idx)}
            style={{
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              background: activeNode === idx ? 'var(--secondary)' : 'var(--primary)',
              border: '2px solid var(--secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: activeNode === idx ? 'var(--primary)' : 'white',
              zIndex: 2,
              transition: 'all 0.3s ease'
            }}
          >
            {idx === 0 ? <Terminal size={18} /> : idx === 1 ? <Network size={18} /> : <Cpu size={18} />}
          </div>
        ))}
      </div>
      <div style={{ marginTop: '1rem', minHeight: '60px', padding: '0.75rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px' }}>
        {activeNode === null ? (
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Click any topology node above to view technical integration details.</span>
        ) : (
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--secondary)' }}>{nodes[activeNode].name}</div>
            <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', margin: '4px 0 0' }}>{nodes[activeNode].desc}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// ─── Case Study 3: Atur GCC Launch Timeline Canvas ───
const AturInfographic = () => {
  return (
    <div style={{ background: '#0a2329', border: '1px solid rgba(202, 169, 76, 0.25)', borderRadius: '16px', padding: '1.5rem', marginTop: '2rem' }}>
      <h4 style={{ color: 'white', margin: '0 0 1.25rem', fontSize: '1rem', fontWeight: '700' }}>🚀 Platform Roadmap Journey</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {[
          { step: 'Stage 1: Validation', label: 'GCC market surveys conducted, defining pricing strategy.', active: true },
          { step: 'Stage 2: Platform Architecture', label: 'High-speed checkout API designs and database scaling models.', active: true },
          { step: 'Stage 3: Branding & UX', label: 'Premium fragrance layout, custom visual look & feel.', active: true },
          { step: 'Stage 4: Regional Launch', label: 'GCC cross-border shipping structure and multi-currency billing.', active: false }
        ].map((item, idx) => (
          <div key={idx} style={{ display: 'flex', gap: '0.85rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: item.active ? 'var(--secondary)' : 'rgba(255,255,255,0.1)', border: '2px solid #0a2329', boxShadow: item.active ? '0 0 8px var(--secondary)' : 'none' }} />
              {idx < 3 && <div style={{ width: '2px', flex: 1, background: 'rgba(255,255,255,0.1)' }} />}
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'white' }}>{item.step}</div>
              <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', margin: '2px 0 0' }}>{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Case Study 4: Sultanate of Marble ERP Evaluation Matrix ───
const MarbleInfographic = () => {
  return (
    <div style={{ background: '#0a2329', border: '1px solid rgba(202, 169, 76, 0.25)', borderRadius: '16px', padding: '1.5rem', marginTop: '2rem' }}>
      <h4 style={{ color: 'white', margin: '0 0 1rem', fontSize: '1rem', fontWeight: '700' }}>📊 ERP Platform Evaluation Matrix</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
        {[
          { feature: 'Manufacturing Capabilities', SAP: 'High (Complex)', Odoo: 'Medium', ERPNext: 'High (Optimized)' },
          { feature: 'License Cost Impact', SAP: 'Extremely High', Odoo: 'Medium', ERPNext: 'Open Source (Zero License)' },
          { feature: 'Implementation Speed', SAP: '12+ Months', Odoo: '4-6 Months', ERPNext: '3-4 Months' }
        ].map((item, idx) => (
          <div key={idx} style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--secondary)', marginBottom: '6px' }}>{item.feature}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem', fontSize: '0.68rem', color: 'rgba(255,255,255,0.7)' }}>
              <div>SAP: <strong style={{ color: 'white' }}>{item.SAP}</strong></div>
              <div>Odoo: <strong style={{ color: 'white' }}>{item.Odoo}</strong></div>
              <div>ERPNext: <strong style={{ color: 'white' }}>{item.ERPNext}</strong></div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '0.75rem', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', textAlign: 'center' }}>
        *Tadbeer recommended <strong>ERPNext</strong> for complete local ownership & speed.
      </div>
    </div>
  );
};

// ─── Case Study 5: Al Harrasi Interactive B2B Supplier Portal Flow ───
const AlHarrasiInfographic = () => {
  const [formState, setFormState] = useState('idle'); // idle -> submitting -> verifying -> complete

  const handleSimulate = () => {
    setFormState('submitting');
    setTimeout(() => {
      setFormState('verifying');
      setTimeout(() => {
        setFormState('complete');
      }, 1500);
    }, 1000);
  };

  return (
    <div style={{ background: '#0a2329', border: '1px solid rgba(202, 169, 76, 0.25)', borderRadius: '16px', padding: '1.5rem', marginTop: '2rem' }}>
      <h4 style={{ color: 'white', margin: '0 0 1rem', fontSize: '1rem', fontWeight: '700' }}>🔄 Supplier Intake & Verification Pipeline</h4>
      
      <div style={{ background: 'rgba(24, 79, 91, 0.15)', borderRadius: '10px', padding: '1rem', border: '1px solid rgba(255,255,255,0.05)', minHeight: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {formState === 'idle' && (
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', margin: '0 0 1rem' }}>Simulate a supplier submitting registration portal profiles.</p>
            <button 
              onClick={handleSimulate}
              style={{ background: 'var(--secondary)', color: 'var(--primary)', border: 'none', padding: '0.5rem 1.25rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '700', cursor: 'pointer' }}
            >
              Submit Supplier Profile
            </button>
          </div>
        )}

        {formState === 'submitting' && (
          <div style={{ textAlign: 'center' }}>
            <div className="spinner" style={{ border: '2px solid rgba(255,255,255,0.1)', borderTop: '2px solid var(--secondary)', borderRadius: '50%', width: '20px', height: '20px', margin: '0 auto 0.75rem', animation: 'spin 1s linear infinite' }} />
            <span style={{ fontSize: '0.8rem', color: 'white', fontWeight: '600' }}>Encrypting Supplier Profile...</span>
          </div>
        )}

        {formState === 'verifying' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ fontSize: '0.8rem', color: 'white', fontWeight: '700', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '4px' }}>Automated Verification Checks:</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: '#10b981' }}>
              <CheckCircle2 size={12} /> Commercial Registration (CR) check passed.
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: '#cca94c' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#cca94c', display: 'inline-block' }} /> Running Tax & Compliance checks...
            </div>
          </div>
        )}

        {formState === 'complete' && (
          <div style={{ textAlign: 'center' }}>
            <CheckCircle2 size={36} color="#10b981" style={{ margin: '0 auto 0.75rem' }} />
            <div style={{ fontSize: '0.82rem', fontWeight: '700', color: 'white' }}>Profile Approved & Integrated</div>
            <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', margin: '4px 0 0' }}>Data pushed to core manufacturing inquiry database.</p>
            <button 
              onClick={() => setFormState('idle')}
              style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '0.35rem 0.75rem', borderRadius: '4px', fontSize: '0.7rem', marginTop: '0.75rem', cursor: 'pointer' }}
            >
              Reset Simulation
            </button>
          </div>
        )}
      </div>
      
      {/* CSS Spin Keyframe injection */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
};

const CaseStudyDetailPage = () => {
  const { id } = useParams();
  const data = caseStudiesData[id];

  if (!data) {
    return (
      <div style={{ padding: '10rem 2rem', textAlign: 'center', background: 'var(--bg)' }}>
        <h2>Case Study Not Found</h2>
        <Link to="/" style={{ color: 'var(--secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', textDecoration: 'none' }}>
          <ArrowLeft size={16} /> Return to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', padding: '6rem 0' }}>
      <div className="container" style={{ maxWidth: '1200px', padding: '0 5%' }}>
        
        {/* Navigation back */}
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', textDecoration: 'none', fontWeight: '700', fontSize: '0.9rem', marginBottom: '2.5rem', transition: 'color 0.2s ease' }} className="back-link">
          <ArrowLeft size={16} /> Back to Homepage
        </Link>

        {/* Hero Area */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
          <div>
            <div style={{ background: 'rgba(24, 79, 91, 0.06)', color: 'var(--primary)', padding: '0.4rem 1rem', borderRadius: '30px', display: 'inline-block', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
              {data.industry}
            </div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: 'var(--primary)', fontWeight: '800', margin: '0 0 0.5rem', lineHeight: 1.1 }}>
              {data.title}
            </h1>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--secondary)', fontWeight: '600', margin: '0 0 1.5rem' }}>
              {data.service}
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
              An authentic operational transformation case study tracking executive consulting objectives and real business outcomes.
            </p>
          </div>

          <div style={{ position: 'relative', height: '320px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(8, 32, 37, 0.08)', border: '1px solid var(--border)' }}>
            <img src={data.image} alt={data.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

          </div>
        </div>

        {/* Key Metrics Panel */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          background: 'white',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.01)',
          marginBottom: '4rem'
        }}>
          {data.metrics.map((m, idx) => (
            <div key={idx} style={{ textAlign: 'center', borderRight: idx < 2 ? '1px solid var(--border)' : 'none', padding: '0 1rem' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: '800', color: 'var(--primary)', lineHeight: 1 }}>{m.value}</div>
              <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '6px' }}>{m.label}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Challenge, Solution, Outcome Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1.2fr))', gap: '4rem' }}>
          
          {/* Left Column: Case Narrative */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', fontWeight: '800', margin: '0 0 0.85rem', borderBottom: '2px solid rgba(24,79,91,0.08)', paddingBottom: '0.5rem' }}>
                The Challenge
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.6', margin: 0, fontWeight: '700' }}>
                {data.challenge}
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', fontWeight: '800', margin: '0 0 0.85rem', borderBottom: '2px solid rgba(24,79,91,0.08)', paddingBottom: '0.5rem' }}>
                Tadbeer Approach & Solution
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1rem' }}>
                {data.approach}
              </p>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                {data.solution}
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--secondary)', fontWeight: '800', margin: '0 0 0.85rem', borderBottom: '2px solid rgba(202,169,76,0.15)', paddingBottom: '0.5rem' }}>
                Business Outcome
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: '1.25rem', margin: 0, color: 'var(--text-main)', fontWeight: '600', fontSize: '0.92rem' }}>
                {data.outcome.split(', ').map((item, idx) => (
                  <li key={idx} style={{ listStyleType: 'square', color: 'var(--primary)' }}>
                    <span style={{ color: 'var(--text-main)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Custom Interactive Infographics */}
          <div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', fontWeight: '800', margin: '0 0 0.85rem', borderBottom: '2px solid rgba(24,79,91,0.08)', paddingBottom: '0.5rem' }}>
              Interactive Visual Framework
            </h3>
            
            {id === 'oman-air' && <OmanAirInfographic />}
            {id === 'troxy-oman' && <TroxyInfographic />}
            {id === 'al-harassi' && <AlHarrasiInfographic />}
            {id === 'atur' && <AturInfographic />}
            {id === 'sultanate-of-marble' && <MarbleInfographic />}
            
            <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#FDFDFB', border: '1px solid var(--border)', borderRadius: '16px', textAlign: 'center' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.5rem' }}>Partner with Tadbeer</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                Ready to achieve structured operational excellence? Request a dedicated consulting review.
              </p>
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-strategy-modal', { detail: { industry: data.title } }))}
                style={{ background: 'var(--secondary)', color: 'var(--primary)', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '700', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                Schedule Executive Strategy Session
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CaseStudyDetailPage;
