import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { createLead } from '../supabaseService';

const LeadCaptureModal = ({ isOpen, onClose, onSubmit, resourceTitle, resourceType, resourceLink }) => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Processing...');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setError('Please fill in all required fields (Name, Email, and Phone Number).');
      return;
    }

    setLoading(true);
    setProgress(0);
    setLoadingText('Processing...');
    setError('');
    
    const lead = {
      name: formData.name,
      email: formData.email,
      company: formData.company || null,
      phone: formData.phone || null,
      resource: resourceTitle ? `${resourceType || 'Download'}: ${resourceTitle}` : 'General Lead',
      source_url: window.location.pathname + window.location.hash,
      date: new Date().toISOString()
    };
    
    // Start database insert in background
    const dbPromise = createLead(lead);
    
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 5;
      
      if (currentProgress < 35) {
        setLoadingText('Processing...');
      } else if (currentProgress < 70) {
        setLoadingText('Verifying details...');
      } else if (currentProgress < 90) {
        setLoadingText('Preparing download...');
      }
      
      if (currentProgress >= 90) {
        clearInterval(interval);
        
        // Wait for database call to finish
        dbPromise.then(({ error: dbError }) => {
          if (dbError) {
            console.error('Failed to save lead:', dbError);
            // Non-blocking: We log the error but still proceed to deliver the PDF
          }
          
          setProgress(100);
          setLoadingText('Success!');
          
          setTimeout(() => {
              setLoading(false);
              setSubmitted(true);
              if (onSubmit) onSubmit(formData);
              
              // Try to open download link (might be blocked, which is why we have the button fallback)
              if (resourceLink) {
                try {
                  window.open(resourceLink, '_blank');
                } catch (err) {
                  console.warn('Popup blocked:', err);
                }
              }
              
              // Broadcast new lead event locally
              try {
                const bc = new BroadcastChannel('tadbeer_leads_sync');
                bc.postMessage({ event: 'new-lead', timestamp: Date.now() });
                bc.close();
              } catch (syncErr) {
                console.warn('Sync broadcast failed:', syncErr);
              }

              // Also fire a window event for same-tab updates
              window.dispatchEvent(new CustomEvent('lead-submitted', { detail: lead }));
            }, 350);
        });
      } else {
        setProgress(currentProgress);
      }
    }, 55);

    // Auto close after success
    const closeTimeout = resourceLink ? 6000 : 3500;
    setTimeout(() => {
      setSubmitted(prev => {
        if (prev) {
          onClose();
          setFormData({ name: '', email: '', company: '', phone: '' });
        }
        return false;
      });
    }, closeTimeout + 1500); // Give time for the loader transition to complete
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
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>Download {resourceType || 'Resource'}</span>
                <h3 style={{ fontSize: '1.25rem', marginTop: '0.25rem', lineHeight: '1.4', color: 'white' }}>{resourceTitle || 'Free Business Resource'}</h3>
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
              minHeight: '360px',
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
                    Please wait a moment...
                  </p>
                </motion.div>
              ) : submitted ? (
                <motion.div 
                  className="modal-success-state"
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '1rem 0 1.5rem' }}
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
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', fontWeight: '700', marginBottom: '0.25rem' }}>Download Authorized!</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
                    Your resource link is ready.
                  </p>
                  
                  <div style={{ background: '#F4F7F6', borderRadius: '8px', padding: '0.75rem', fontSize: '0.85rem', color: 'var(--text-main)', border: '1px solid var(--border)', marginBottom: '1.25rem', textAlign: 'left', width: '100%', boxSizing: 'border-box', overflow: 'hidden' }}>
                    <div style={{ fontWeight: '600', color: 'var(--primary)', marginBottom: '0.15rem' }}>Captured Contact Info:</div>
                    <div style={{ fontFamily: 'monospace', color: '#184F5B', wordBreak: 'break-all', overflowWrap: 'break-word', fontSize: '0.8rem' }}>{formData.email}</div>
                  </div>

                  {resourceLink && (
                    <div style={{ marginTop: '0.5rem' }}>
                      <a 
                        href={resourceLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-primary" 
                        style={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          gap: '0.5rem', 
                          width: '100%', 
                          padding: '0.85rem', 
                          borderRadius: '8px', 
                          textDecoration: 'none',
                          boxShadow: '0 4px 12px rgba(24, 79, 91, 0.25)',
                          background: 'linear-gradient(135deg, #184F5B 0%, #1e6372 100%)',
                          color: 'white',
                          fontWeight: '600'
                        }}
                      >
                        <span>Download Resource Now</span>
                        <span>→</span>
                      </a>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                        If the download didn't start automatically, click the button above.
                      </p>
                    </div>
                  )}

                  <div style={{ position: 'absolute', bottom: 0, left: 0, height: '4px', background: 'var(--secondary)', width: '100%' }}>
                    <motion.div 
                      initial={{ width: '100%' }}
                      animate={{ width: '0%' }}
                      transition={{ duration: resourceLink ? 6 : 3.5, ease: 'linear' }}
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
                  <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.95rem' }}>Please enter your details to access this free resource.</p>
                  
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Full Name *</label>
                    <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1rem', backgroundColor: '#FFFFFF', color: '#1C1B17' }} />
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Work Email *</label>
                    <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1rem', backgroundColor: '#FFFFFF', color: '#1C1B17' }} />
                  </div>
                  
                  <div className="modal-form-row">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Company</label>
                      <input type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1rem', backgroundColor: '#FFFFFF', color: '#1C1B17' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Phone Number *</label>
                      <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '1rem', backgroundColor: '#FFFFFF', color: '#1C1B17' }} />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem', fontSize: '1.05rem' }}>
                    Access Resource Now
                  </button>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.5rem' }}>
                    We respect your privacy. No spam, ever.
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeadCaptureModal;
