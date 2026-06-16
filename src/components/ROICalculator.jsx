import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LeadCaptureModal from './LeadCaptureModal';

const ROICalculator = () => {
  const [revenue, setRevenue] = useState(50000);
  const [employees, setEmployees] = useState(25);
  const [manualHours, setManualHours] = useState(40);
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
          <span className="section-label">CALCULATE YOUR POTENTIAL</span>
          <h2 className="section-title">Discover Your Transformation ROI</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginTop: '1rem' }}>See how much your business could save and earn with the right technology and strategy.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
          
          {/* Inputs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="roi-input-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <label style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: '0.95rem' }}>Monthly Revenue (OMR)</label>
                <span style={{ color: 'var(--secondary)', fontWeight: '700' }}>{formatCurrency(revenue)}</span>
              </div>
              <input type="range" min="5000" max="500000" step="5000" value={revenue} onChange={(e) => setRevenue(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--secondary)' }} />
            </div>

            <div className="roi-input-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <label style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: '0.95rem' }}>Number of Employees</label>
                <span style={{ color: 'var(--secondary)', fontWeight: '700' }}>{employees}</span>
              </div>
              <input type="range" min="5" max="500" step="5" value={employees} onChange={(e) => setEmployees(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--secondary)' }} />
            </div>

            <div className="roi-input-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <label style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: '0.95rem' }}>Manual Process Hours / Week</label>
                <span style={{ color: 'var(--secondary)', fontWeight: '700' }}>{manualHours} hrs</span>
              </div>
              <input type="range" min="5" max="200" step="5" value={manualHours} onChange={(e) => setManualHours(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--secondary)' }} />
            </div>

            <div className="roi-input-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <label style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: '0.95rem' }}>Monthly Marketing Spend (OMR)</label>
                <span style={{ color: 'var(--secondary)', fontWeight: '700' }}>{formatCurrency(marketingSpend)}</span>
              </div>
              <input type="range" min="0" max="50000" step="500" value={marketingSpend} onChange={(e) => setMarketingSpend(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--secondary)' }} />
            </div>
            {/* Calculation Parameters & GCC Benchmarks */}
            <div style={{ background: 'rgba(24,79,91,0.02)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.25rem', marginTop: '1rem' }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.75rem' }}>📊 Calculation Parameters & Benchmarks</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <div>• Average GCC administrative hourly wage modeled at <strong>OMR 3.50</strong>.</div>
                <div>• Manual process time reduction target modeled at <strong>60%</strong> average efficiency increase (based on our operational audits).</div>
                <div>• Digital marketing return multiplier modeled at <strong>2.4x</strong> ad spend, assuming implementation of GA4 & Meta Conversions API (CAPI).</div>
              </div>
            </div>
          </div>

          {/* Outputs */}
          <div style={{ background: 'var(--primary)', borderRadius: '16px', padding: '3rem', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8, marginBottom: '0.5rem' }}>Projected Annual Impact</div>
              <motion.div key={results.totalImpact} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--secondary)', lineHeight: '1.1' }}>
                {formatCurrency(results.totalImpact)}
              </motion.div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
              <div>
                <div style={{ fontSize: '0.8rem', opacity: 0.7, marginBottom: '0.25rem' }}>Efficiency Savings</div>
                <div style={{ fontSize: '1.5rem', fontWeight: '600' }}>{formatCurrency(results.efficiencySavings)}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', opacity: 0.7, marginBottom: '0.25rem' }}>Marketing ROI</div>
                <div style={{ fontSize: '1.5rem', fontWeight: '600' }}>{formatCurrency(results.marketingReturn)}</div>
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ background: 'var(--secondary)', color: 'var(--primary)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>
                {results.timeline}
              </div>
              <div>
                <div style={{ fontWeight: '600' }}>Month ROI Target</div>
                <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>Estimated time to positive cashflow</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button onClick={() => setModalOpen(true)} className="btn btn-primary" style={{ flex: 1, background: 'var(--secondary)', color: 'var(--primary)', borderColor: 'var(--secondary)' }}>
                Get Detailed Analysis
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
