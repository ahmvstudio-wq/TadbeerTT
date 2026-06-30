import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import LeadCaptureModal from './LeadCaptureModal';
import { createLead } from '../supabaseService';

const PlaybookBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const bannerRef = useRef(null);

  useEffect(() => {
    // Temporarily forcing visibility for review
    setIsVisible(true);
  }, []);

  // Measure and set banner height dynamically
  useEffect(() => {
    const updateBannerHeight = () => {
      if (isVisible && bannerRef.current) {
        const height = bannerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--banner-height', `${height}px`);
        document.documentElement.classList.add('has-banner');
      } else {
        document.documentElement.style.setProperty('--banner-height', '0px');
        document.documentElement.classList.remove('has-banner');
      }
    };

    const timer = setTimeout(updateBannerHeight, 50);

    window.addEventListener('resize', updateBannerHeight);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateBannerHeight);
    };
  }, [isVisible, status]);

  useEffect(() => {
    const handleOpenPlaybook = () => {
      setModalOpen(true);
    };
    window.addEventListener('open-playbook-modal', handleOpenPlaybook);
    return () => window.removeEventListener('open-playbook-modal', handleOpenPlaybook);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('playbook_banner_dismissed', 'true');
    document.documentElement.style.setProperty('--banner-height', '0px');
    document.documentElement.classList.remove('has-banner');
  };

  const handleInlineSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    
    try {
      const lead = {
        name: 'Inline Playbook Banner Lead',
        email: email,
        company: 'Not Provided',
        phone: 'Not Provided',
        resource: 'Download: GCC Enterprise Digital Transformation Playbook',
        source_url: window.location.pathname + window.location.hash,
        date: new Date().toISOString()
      };
      
      const { error } = await createLead(lead);
      if (error) console.warn('DB Error (Ignored for local demo):', error);

      // Programmatic file download trigger
      const link = document.createElement('a');
      link.href = '/assets/GCC_Digital_Transformation_Playbook.pdf';
      link.setAttribute('download', 'GCC_Digital_Transformation_Playbook.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setStatus('success');
      setEmail('');
      window.dispatchEvent(new CustomEvent('lead-submitted', { detail: lead }));
      
      setTimeout(() => {
        handleDismiss();
        window.dispatchEvent(new CustomEvent('open-strategy-modal'));
      }, 2500);
    } catch (err) {
      console.error('Failed to save lead:', err);
      setStatus('error');
    }
  };

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .playbook-top-banner {
            padding: 0.65rem 2.2rem 0.65rem 1rem !important;
          }
          .playbook-banner-content {
            flex-direction: column !important;
            align-items: center !important;
            gap: 0.5rem !important;
            text-align: center !important;
            padding-right: 0 !important;
          }
          .desktop-text {
            display: none !important;
          }
          .mobile-text {
            display: inline !important;
          }
          .playbook-banner-text {
            font-size: 0.8rem !important;
            line-height: 1.35 !important;
            text-align: center !important;
            display: block !important;
            max-width: 100% !important;
          }
          .playbook-inline-form {
            display: flex !important;
            width: 100% !important;
            justify-content: center !important;
          }
          .playbook-inline-form form {
            flex-direction: row !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 0.4rem !important;
            width: auto !important;
          }
          .playbook-inline-form input {
            width: 170px !important;
            font-size: 0.8rem !important;
            padding: 0.4rem 0.6rem !important;
            text-align: left !important;
          }
          .playbook-inline-form button {
            width: auto !important;
            padding: 0.4rem 1rem !important;
            font-size: 0.8rem !important;
          }
          #dismiss-button {
            top: 50% !important;
            right: 8px !important;
            transform: translateY(-50%) !important;
          }
        }
      `}</style>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={bannerRef}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'linear-gradient(135deg, #123e47 0%, #0a252b 100%)', // Premium dark slate/teal matching Tadbeer's theme
              color: 'white',
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1001,
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              borderBottom: '2px solid var(--secondary)',
              padding: '0.65rem 3.5rem 0.65rem 1.5rem',
            }}
            className="playbook-top-banner"
          >
            <div 
              className="playbook-banner-content"
              style={{
                maxWidth: '1250px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center', // Centered cluster layout matching the reference
                flexWrap: 'wrap',
                gap: '1.2rem',
                width: '100%',
                paddingRight: '1rem'
              }}
            >
              {/* Centered Content: Icon, Text, and Form inline */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px', 
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                <div className="playbook-banner-text" style={{ fontSize: '0.88rem', color: '#F9F8F3', display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                  <span style={{ color: 'var(--secondary)', fontWeight: '700' }}>
                    Revealed:
                  </span>
                  <span className="desktop-text" style={{ fontWeight: '500' }}>
                    How Top GCC Enterprises Automate 70% of Operations & Scale Without Friction
                  </span>
                  <span className="mobile-text" style={{ fontWeight: '500', display: 'none' }}>
                    Download the GCC Scaling & Automation Playbook
                  </span>
                </div>
              </div>

              {/* Centered Form */}
              <div className="playbook-inline-form" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <CheckCircle size={16} /> Access Granted! Starting Download...
                  </motion.div>
                ) : (
                  <form onSubmit={handleInlineSubmit} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <input
                      type="email"
                      required
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === 'loading'}
                      style={{
                        padding: '0.45rem 0.8rem',
                        fontSize: '0.85rem',
                        borderRadius: '6px',
                        border: status === 'error' ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.2)',
                        background: 'rgba(255, 255, 255, 0.08)',
                        color: 'white',
                        outline: 'none',
                        minWidth: '220px',
                        fontFamily: 'var(--font-en)',
                        transition: 'all 0.3s ease'
                      }}
                      onFocus={(e) => { 
                        e.target.style.borderColor = 'var(--secondary)'; 
                        e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                        e.target.style.boxShadow = '0 0 0 3px rgba(202, 169, 76, 0.2)';
                      }}
                      onBlur={(e) => { 
                        e.target.style.borderColor = 'rgba(255,255,255,0.2)'; 
                        e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      style={{
                        background: 'linear-gradient(135deg, var(--secondary) 0%, var(--secondary-light) 100%)',
                        color: 'var(--primary)',
                        border: 'none',
                        padding: '0.45rem 1.1rem',
                        borderRadius: '6px',
                        fontSize: '0.85rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 2px 8px rgba(202, 169, 76, 0.2)',
                        transition: 'all 0.3s ease',
                        fontFamily: 'var(--font-en)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-1px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(202, 169, 76, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(202, 169, 76, 0.2)';
                      }}
                      onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.97)'}
                      onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      {status === 'loading' ? 'Securing...' : 'Get PDF'}
                    </button>
                    
                    {status === 'error' && (
                      <span style={{ color: '#ef4444', fontSize: '0.75rem', marginLeft: '4px', display: 'flex', alignItems: 'center', gap: '2px' }}>
                        <AlertCircle size={12} /> Error
                      </span>
                    )}
                  </form>
                )}
              </div>
            </div>

            {/* Dismiss Button */}
            <button
              id="dismiss-button"
              onClick={handleDismiss}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                padding: '6px',
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                opacity: 0.6,
                transition: 'opacity 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.6'}
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <LeadCaptureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        resourceTitle="GCC Enterprise Digital Transformation Playbook"
        resourceType="Playbook"
        resourceLink="#"
      />
    </>
  );
};

export default PlaybookBanner;

