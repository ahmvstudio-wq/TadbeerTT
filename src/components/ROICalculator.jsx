import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LeadCaptureModal from './LeadCaptureModal';

const ROICalculator = () => {
  const [revenue, setRevenue] = useState(50000);
  const [employees, setEmployees] = useState(25);
  const [manualHours, setManualHours] = useState(15);
  const [marketingSpend, setMarketingSpend] = useState(5000);
  const [modalOpen, setModalOpen] = useState(false);

  // Derived calculations
  const [results, setResults] = useState({
    efficiencySavings: 0,
    marketingReturn: 0,
    totalImpact: 0,
    timeline: 0
  });

  useEffect(() => {
    // 3.5 OMR/hr avg wage, 60% reduction in manual hours
    // Multiply manual hours per employee by the number of employees
    const efficiencySavings = employees * manualHours * 3.5 * 0.6 * 52;
    // 2.4x multiplier on marketing
    const marketingReturn = marketingSpend * 2.4 * 12;
    const totalImpact = efficiencySavings + marketingReturn;
    const timeline = totalImpact > 100000 ? 3 : totalImpact > 50000 ? 6 : 9;

    setResults({
      efficiencySavings: Math.round(efficiencySavings),
      marketingReturn: Math.round(marketingReturn),
      totalImpact: Math.round(totalImpact),
      timeline
    });
  }, [revenue, employees, manualHours, marketingSpend]);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-OM', { style: 'currency', currency: 'OMR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="roi-calculator" className="roi-section" style={{ padding: 'var(--section-padding)', background: 'white' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span className="section-label">ROI</span>
          <h2 className="section-title">Calculate the cost of operational friction.</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginTop: '1rem', maxWidth: '750px', margin: '1rem auto 0' }}>Manual effort, rework, slow approvals, and unclear ownership create hidden cost. Use the ROI model to estimate the annual impact of stronger systems and execution. Then request a detailed analysis tailored to your operation.</p>
        </div>

        <div className="roi-calc-grid">
          
          {/* Inputs */}
          <div className="roi-inputs-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="roi-input-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <label style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: 'clamp(0.85rem, 3.5vw, 0.95rem)' }}>Monthly Revenue (OMR)</label>
                <span style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: 'clamp(0.85rem, 3.5vw, 1rem)', whiteSpace: 'nowrap' }}>{formatCurrency(revenue)}</span>
              </div>
              <input type="range" min="5000" max="500000" step="5000" value={revenue} onChange={(e) => setRevenue(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--secondary)' }} />
            </div>

            <div className="roi-input-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <label style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: 'clamp(0.85rem, 3.5vw, 0.95rem)' }}>Number of Employees</label>
                <span style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: 'clamp(0.85rem, 3.5vw, 1rem)', whiteSpace: 'nowrap' }}>{employees}</span>
              </div>
              <input type="range" min="5" max="500" step="5" value={employees} onChange={(e) => setEmployees(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--secondary)' }} />
            </div>

            <div className="roi-input-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <label style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: 'clamp(0.85rem, 3.5vw, 0.95rem)' }}>Manual Hours / Employee per Week</label>
                <span style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: 'clamp(0.85rem, 3.5vw, 1rem)', whiteSpace: 'nowrap' }}>{manualHours} hrs/emp</span>
              </div>
              <input type="range" min="1" max="40" step="1" value={manualHours} onChange={(e) => setManualHours(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--secondary)' }} />
            </div>

            <div className="roi-input-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <label style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: 'clamp(0.85rem, 3.5vw, 0.95rem)' }}>Monthly Marketing Spend (OMR)</label>
                <span style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: 'clamp(0.85rem, 3.5vw, 1rem)', whiteSpace: 'nowrap' }}>{formatCurrency(marketingSpend)}</span>
              </div>
              <input type="range" min="1000" max="100000" step="1000" value={marketingSpend} onChange={(e) => setMarketingSpend(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--secondary)' }} />
            </div>
            {/* Calculation Parameters & GCC Benchmarks */}
            <div className="roi-benchmarks-box" style={{ background: 'rgba(24,79,91,0.02)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.25rem', marginTop: '1rem' }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.75rem' }}>📊 Calculation Parameters & Benchmarks</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <div>• Average GCC administrative hourly wage modeled at <strong>OMR 3.50</strong>.</div>
                <div>• Manual process time reduction target modeled at <strong>60%</strong> average efficiency increase (based on our operational audits).</div>
                <div>• Digital marketing return multiplier modeled at <strong>2.4x</strong> ad spend, assuming implementation of GA4 & Meta Conversions API (CAPI).</div>
              </div>
            </div>
          </div>

          {/* Outputs */}
          <div className="roi-output-card" style={{ background: 'var(--primary)', borderRadius: '16px', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2.5rem', boxSizing: 'border-box', overflow: 'hidden' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem', width: '100%' }}>
              <div className="roi-impact-ring" style={{ position: 'relative', width: '160px', height: '160px', marginBottom: '1rem', flexShrink: 0 }}>
                <svg viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)', width: '100%', height: '100%' }}>
                  <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
                  <motion.circle 
                    cx="50" 
                    cy="50" 
                    r="42" 
                    fill="none" 
                    stroke="var(--secondary)" 
                    strokeWidth="6"
                    strokeDasharray="264"
                    animate={{ strokeDashoffset: 264 - (264 * Math.min(results.totalImpact, 150000)) / 150000 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    strokeLinecap="round"
                  />
                </svg>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px', boxSizing: 'border-box' }}>
                  <span className="roi-impact-label" style={{ fontSize: 'clamp(0.55rem, 2.5vw, 0.65rem)', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8, marginBottom: '4px', textAlign: 'center', whiteSpace: 'nowrap' }}>Annual Impact</span>
                  <motion.span 
                    className="roi-impact-value"
                    key={results.totalImpact} 
                    initial={{ scale: 0.95, opacity: 0.8 }} 
                    animate={{ scale: 1, opacity: 1 }} 
                    style={{ 
                      fontSize: String(formatCurrency(results.totalImpact)).length > 11 ? '0.95rem' : '1.15rem', 
                      fontWeight: '800', 
                      color: 'var(--secondary)',
                      whiteSpace: 'nowrap',
                      overflow: 'visible',
                      textOverflow: 'clip',
                      width: '100%',
                      textAlign: 'center',
                      display: 'block',
                      lineHeight: '1.2'
                    }}
                  >
                    {formatCurrency(results.totalImpact)}
                  </motion.span>
                </div>
              </div>
            </div>

            <div className="roi-results-subgrid" style={{ marginBottom: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', width: '100%' }}>
              <div>
                <div style={{ fontSize: '0.8rem', opacity: 0.7, marginBottom: '0.25rem' }}>Efficiency Savings</div>
                <div style={{ fontSize: 'clamp(1.1rem, 4.5vw, 1.5rem)', fontWeight: '600', wordBreak: 'break-all', overflowWrap: 'break-word', lineHeight: '1.2' }}>{formatCurrency(results.efficiencySavings)}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', opacity: 0.7, marginBottom: '0.25rem' }}>Marketing ROI</div>
                <div style={{ fontSize: 'clamp(1.1rem, 4.5vw, 1.5rem)', fontWeight: '600', wordBreak: 'break-all', overflowWrap: 'break-word', lineHeight: '1.2' }}>{formatCurrency(results.marketingReturn)}</div>
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', width: '100%', boxSizing: 'border-box' }}>
              <div style={{ background: 'var(--secondary)', color: 'var(--primary)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', flexShrink: 0 }}>
                {results.timeline}
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>Month ROI Target</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Estimated time to positive cashflow</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', width: '100%', flexWrap: 'wrap' }}>
              <button 
                onClick={() => {
                  const element = document.getElementById('roi-calculator');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="btn" 
                style={{ flex: 1, border: '1px solid var(--secondary)', background: 'none', color: 'white', cursor: 'pointer', justifyContent: 'center' }}
              >
                Model Your ROI
              </button>
              <button 
                onClick={() => setModalOpen(true)} 
                className="btn btn-primary" 
                style={{ flex: 1, background: 'var(--secondary)', color: 'var(--primary)', borderColor: 'var(--secondary)', border: 'none', cursor: 'pointer', justifyContent: 'center' }}
              >
                Request a Detailed Analysis
              </button>
            </div>
          </div>

        </div>
      </div>
      <LeadCaptureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} resourceTitle="Detailed ROI Analysis Report" resourceType="Custom Report" />
    </section>
  );
};

export default ROICalculator;
