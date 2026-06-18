import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, ShieldAlert as ShieldWarning, ShieldCheck, HelpCircle } from 'lucide-react';

const OmanizationCheck = () => {
  const [totalStaff, setTotalStaff] = useState(60);
  const [omaniStaff, setOmaniStaff] = useState(12);
  const [complianceRate, setComplianceRate] = useState(20);

  useEffect(() => {
    // Ensure omaniStaff never exceeds totalStaff
    if (omaniStaff > totalStaff) {
      setOmaniStaff(totalStaff);
    }
    const rate = totalStaff > 0 ? (omaniStaff / totalStaff) * 100 : 0;
    setComplianceRate(Math.round(rate));
  }, [totalStaff, omaniStaff]);

  const targetQuota = 30; // 30% standard target
  const isCompliant = complianceRate >= targetQuota;
  const isHighRisk = complianceRate < 15;

  // Get status metadata
  const getStatus = () => {
    if (isHighRisk) {
      return {
        label: "Critical Action Needed",
        color: "#ef4444",
        bg: "rgba(239, 68, 68, 0.05)",
        border: "rgba(239, 68, 68, 0.2)",
        icon: <ShieldAlert size={20} color="#ef4444" />,
        desc: "Your entity is well below the default 30% Ministry of Labour compliance quota. High risk of visa bans, work permit suspensions, and audit flags."
      };
    } else if (!isCompliant) {
      return {
        label: "Partial Compliance Warn",
        color: "#f59e0b",
        bg: "rgba(245, 158, 11, 0.05)",
        border: "rgba(245, 158, 11, 0.2)",
        icon: <ShieldWarning size={20} color="#f59e0b" />,
        desc: "You are approaching target ranges but remain below Omani private sector targets. Consider structured Omani development pipelines to bridge key gaps."
      };
    } else {
      return {
        label: "Target Compliant",
        color: "#10b981",
        bg: "rgba(16, 185, 129, 0.05)",
        border: "rgba(16, 185, 129, 0.2)",
        icon: <ShieldCheck size={20} color="#10b981" />,
        desc: "Excellent. Your business meets standard compliance metrics, granting eligibility for fast-track government clearance and green-channel work permits."
      };
    }
  };

  const status = getStatus();
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference - (Math.min(complianceRate, 100) / 100) * circumference;

  return (
    <section id="omanization-compliance" className="omanization-section" style={{ padding: 'var(--section-padding)', background: '#FDFDFB', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span className="section-label">🇴🇲 GCC COMPLIANCE AUDIT</span>
          <h2 className="section-title">Omanization Compliance Check</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginTop: '1rem' }}>Evaluate your workforce metrics against Omani Ministry of Labour private sector quota benchmarks instantly.</p>
        </div>

        <div className="roi-calc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* Sliders Panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div className="roi-input-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <label style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: '0.95rem' }}>Total Staff Size</label>
                <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '1rem' }}>{totalStaff} employees</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="500" 
                step="5" 
                value={totalStaff} 
                onChange={(e) => setTotalStaff(Number(e.target.value))} 
                style={{ width: '100%', accentColor: 'var(--secondary)' }} 
              />
            </div>

            <div className="roi-input-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <label style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: '0.95rem' }}>Omani Employees</label>
                <span style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '1rem' }}>{omaniStaff} employees</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max={totalStaff} 
                step="1" 
                value={omaniStaff} 
                onChange={(e) => setOmaniStaff(Number(e.target.value))} 
                style={{ width: '100%', accentColor: 'var(--secondary)' }} 
              />
            </div>

            {/* Benchmarks info box */}
            <div style={{ background: 'rgba(24,79,91,0.02)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.25rem', fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                <HelpCircle size={14} /> Quota Reference Guide
              </div>
              <div>• Private sector entities in Oman targeting high efficiency under Vision 2040 are monitored under a default benchmark requirement of <strong>30% Omanization</strong>.</div>
              <div style={{ marginTop: '0.35rem' }}>• Maintaining compliance unlocks government priority subsidies and reduces renewal delays.</div>
            </div>

          </div>

          {/* Compliance Gauge Card */}
          <div style={{ 
            background: 'white', 
            borderRadius: '16px', 
            border: '1px solid var(--border)', 
            padding: '2.5rem', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            textAlign: 'center',
            minHeight: '340px'
          }}>
            
            {/* Animated Gauge Ring */}
            <div style={{ position: 'relative', width: '130px', height: '130px', marginBottom: '1.5rem' }}>
              <svg viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)', width: '100%', height: '100%' }}>
                <circle cx="50" cy="50" r={radius} fill="none" stroke="#F1F0E8" strokeWidth="8" />
                <motion.circle 
                  cx="50" 
                  cy="50" 
                  r={radius} 
                  fill="none" 
                  stroke={status.color} 
                  strokeWidth="8"
                  strokeDasharray={circumference}
                  animate={{ strokeDashoffset: strokeOffset }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  strokeLinecap="round"
                />
              </svg>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '2.25rem', fontWeight: '800', color: 'var(--primary)', lineHeight: '1' }}>{complianceRate}%</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '2px' }}>Omanization</span>
              </div>
            </div>

            {/* Status Info Block */}
            <div style={{ 
              background: status.bg, 
              border: `1px solid ${status.border}`, 
              borderRadius: '12px', 
              padding: '1rem 1.25rem', 
              width: '100%', 
              marginBottom: '1.5rem' 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: '700', color: status.color, fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                {status.icon}
                {status.label}
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.45' }}>{status.desc}</p>
            </div>

            <button 
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('open-strategy-modal', { detail: { industry: 'Professional Services' } }));
              }}
              className="btn btn-primary" 
              style={{ width: '100%', padding: '0.85rem', cursor: 'pointer', border: 'none', background: status.color, color: 'white' }}
            >
              Get Compliance Blueprint
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default OmanizationCheck;
