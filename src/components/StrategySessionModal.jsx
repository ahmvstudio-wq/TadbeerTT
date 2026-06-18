import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck } from 'lucide-react';
import { createLead } from '../supabaseService';

const StrategySessionModal = ({ isOpen, onClose, initialIndustry = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    revenue: '',
    bottleneck: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Processing...');

  // Update industry if initialIndustry is passed dynamically
  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        industry: initialIndustry || prev.industry
      }));
      setSuccess(false);
      setLoading(false);
      setProgress(0);
      setError('');
    }
  }, [isOpen, initialIndustry]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company || !formData.phone) {
      setError('Please fill in all required fields (Name, Email, Company, and Phone).');
      return;
    }

    setLoading(true);
    setProgress(0);
    setLoadingText('Processing...');
    setError('');

    const leadData = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      resource: 'Strategy Session',
      industry: formData.industry || null,
      revenue: formData.revenue || null,
      bottleneck: formData.bottleneck || null,
      source_url: window.location.pathname + window.location.hash
    };

    // Start DB call in parallel
    const dbPromise = createLead(leadData);

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 5;
      
      if (currentProgress < 35) {
        setLoadingText('Processing...');
      } else if (currentProgress < 70) {
        setLoadingText('Analyzing metrics...');
      } else if (currentProgress < 90) {
        setLoadingText('Finalizing...');
      }
      
      if (currentProgress >= 90) {
        clearInterval(interval);
        
        dbPromise.then(({ error: dbError }) => {
          if (dbError) {
            console.error('Failed to submit strategy session request:', dbError);
            setLoading(false);
            setError('Something went wrong. Please check your connection and try again.');
          } else {
            setProgress(100);
            setLoadingText('Success!');
            
            setTimeout(() => {
              setLoading(false);
              setSuccess(true);
              
              // Broadcast new lead event locally
              try {
                const bc = new BroadcastChannel('tadbeer_leads_sync');
                bc.postMessage({ event: 'new-lead', timestamp: Date.now() });
                bc.close();
              } catch (syncErr) {
                console.warn('Sync broadcast failed:', syncErr);
              }

              // Also fire window event
              window.dispatchEvent(new CustomEvent('lead-submitted', { detail: leadData }));

              // Reset form
              setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                industry: '',
                revenue: '',
                bottleneck: ''
              });
            }, 350);
          }
        });
      } else {
        setProgress(currentProgress);
      }
    }, 55);

    // Auto close modal after success
    setTimeout(() => {
      setSuccess(prev => {
        if (prev) {
          onClose();
        }
        return false;
      });
    }, 5000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(28, 27, 23, 0.6)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 99999,
          padding: '1rem'
        }}>
          {/* Backdrop click closer */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} onClick={onClose} />

          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
            style={{
              width: '100%',
              maxWidth: '520px',
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
              overflow: 'hidden',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              maxHeight: '90vh'
            }}
          >
            {/* Header section (Deep Teal Gradient) */}
            <div style={{
              background: 'linear-gradient(135deg, #184F5B 0%, #0e2f37 100%)',
              color: 'white',
              padding: '2rem 1.75rem 1.5rem',
              position: 'relative'
            }}>
              {/* Close Button */}
              <button
                onClick={onClose}
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: 'white',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <X size={18} />
              </button>

              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'white', margin: '0 0 0.5rem 0', fontFamily: 'var(--font-headings)' }}>
                Apply for a Strategy Session
              </h2>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', margin: '0 0 1rem 0', lineHeight: '1.4' }}>
                We work with a limited number of enterprise clients to ensure deep, transformative engagements.
              </p>

              {/* Alert Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(202, 169, 76, 0.15)',
                border: '1px solid rgba(202, 169, 76, 0.3)',
                padding: '0.4rem 0.85rem',
                borderRadius: '30px',
                fontSize: '0.75rem',
                color: 'var(--secondary)',
                fontWeight: '600'
              }}>
                <ShieldCheck size={14} />
                We only take on 3 new enterprise clients per quarter
              </div>
            </div>

            {/* Scrollable Form Body */}
            <div style={{
              padding: '1.75rem',
              overflowY: 'auto',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: success || loading ? 'center' : 'flex-start',
              minHeight: '380px',
              position: 'relative'
            }}>
              {loading ? (
                <motion.div 
                  key="loading"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '1.5rem 0' }}
                >
                  <div style={{ position: 'relative', width: '80px', height: '80px', margin: '0 auto 1.5rem', flexShrink: 0 }}>
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
                    Syncing lead pipeline data...
                  </p>
                </motion.div>
              ) : success ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '2rem 0' }}
                >
                  <div style={{ position: 'relative', width: '70px', height: '70px', margin: '0 auto 1.25rem' }}>
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
                  <h3 style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '1.4rem', marginBottom: '0.5rem' }}>Application Submitted!</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '0' }}>
                    We have received your strategy session request. Our consulting team will review your operational profile and contact you within 24 hours.
                  </p>
                  
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
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {error && (
                    <div style={{ color: '#dc3545', background: 'rgba(220, 53, 69, 0.05)', border: '1px solid rgba(220, 53, 69, 0.2)', padding: '0.75rem 1rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '500' }}>
                      {error}
                    </div>
                  )}

                  {/* Name Field */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--primary)' }}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Salim Al Harrasi"
                      style={{ padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.9rem', outline: 'none' }}
                    />
                  </div>

                  {/* Phone Field */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--primary)' }}>Contact Phone Number *</label>
                    <input
                      type="text"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +968 9912 3456"
                      style={{ padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.9rem', outline: 'none' }}
                    />
                  </div>

                  {/* Company Field */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--primary)' }}>Company Name *</label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Logistics LLC"
                      style={{ padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.9rem', outline: 'none' }}
                    />
                  </div>

                  {/* Split Row: Industry & Revenue */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--primary)' }}>Industry</label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        style={{ padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.9rem', outline: 'none', background: 'white' }}
                      >
                        <option value="">Select industry</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Logistics & Supply Chain">Logistics & Supply Chain</option>
                        <option value="E-Commerce">E-Commerce</option>
                        <option value="Construction">Construction</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Government & Public Sector">Government & Public Sector</option>
                        <option value="Professional Services">Professional Services</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--primary)' }}>Annual Revenue</label>
                      <select
                        name="revenue"
                        value={formData.revenue}
                        onChange={handleChange}
                        style={{ padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.9rem', outline: 'none', background: 'white' }}
                      >
                        <option value="">Select range</option>
                        <option value="< OMR 100K">&lt; OMR 100K</option>
                        <option value="OMR 100K - 500K">OMR 100K - 500K</option>
                        <option value="OMR 500K - 1M">OMR 500K - 1M</option>
                        <option value="OMR 1M - 5M">OMR 1M - 5M</option>
                        <option value="OMR 5M+">OMR 5M+</option>
                      </select>
                    </div>
                  </div>

                  {/* Bottleneck Textarea */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--primary)' }}>What's your biggest operational bottleneck?</label>
                    <textarea
                      name="bottleneck"
                      value={formData.bottleneck}
                      onChange={handleChange}
                      placeholder="e.g. We are running 4 disconnected systems across 12 locations..."
                      style={{ padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.9rem', outline: 'none', minHeight: '80px', resize: 'vertical' }}
                    />
                  </div>

                  {/* Work Email Field */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--primary)' }}>Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="director@company.com"
                      style={{ padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.9rem', outline: 'none' }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary"
                    style={{
                      marginTop: '0.5rem',
                      padding: '0.85rem',
                      justifyContent: 'center',
                      fontSize: '1rem',
                      border: 'none',
                      cursor: loading ? 'default' : 'pointer',
                      opacity: loading ? 0.7 : 1
                    }}
                  >
                    {loading ? 'Submitting Application...' : 'Apply for Strategy Session →'}
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

export default StrategySessionModal;
