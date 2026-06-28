import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import LeadCaptureModal from './LeadCaptureModal';
import { createLead } from '../supabaseService';

const PlaybookBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const bannerRef = useRef(null);

  useEffect(() => {
    const isDismissed = localStorage.getItem('playbook_banner_dismissed');
    if (!isDismissed) {
      setIsVisible(true);
    }
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

    // Delay measurement slightly to ensure DOM render layout settles
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
      if (error) {
        console.error('Lead capture failed, but delivering asset anyway:', error);
      }
      
      setStatus('success');
      setEmail('');
      window.dispatchEvent(new CustomEvent('lead-submitted', { detail: lead }));
      
      // Trigger static resource delivery
      const link = document.createElement('a');
      link.href = '/assets/GCC_Digital_Transformation_Playbook.pdf';
      link.target = '_blank';
      link.download = 'GCC_Enterprise_Digital_Transformation_Playbook.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Auto close after success
      setTimeout(() => {
        handleDismiss();
      }, 4000);
    } catch (err) {
      console.error('Unexpected error:', err);
      setStatus('error');
    }
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={bannerRef}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{
              background: 'linear-gradient(90deg, var(--primary) 0%, #153C45 100%)',
              color: 'white',
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1001,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              borderBottom: '1px solid var(--secondary)',
              padding: '0.75rem 3.5rem 0.75rem 1.5rem',
            }}
            className="playbook-top-banner"
          >
            <div style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              width: '100%'
            }}>
              {/* Left Side: Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', textAlign: 'left', flex: '1 1 500px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{
                    background: 'var(--secondary)',
                    color: 'var(--primary)',
                    fontSize: '0.65rem',
                    fontWeight: '800',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    display: 'inline-block'
                  }}>
                    Free Download
                  </span>
                  <span style={{ fontWeight: '700', fontSize: '0.9rem', color: '#F9F8F3' }}>
                    GCC Enterprise Digital Transformation Playbook
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.85, color: '#f0f0f0', fontWeight: '400', lineHeight: '1.4' }}>
                  Practical guidance to strengthen systems, improve execution, and scale with clarity in Oman and the GCC.
                </p>
              </div>

              {/* Right Side: Form / Status */}
              <div style={{ flex: '0 1 auto', display: 'flex', alignItems: 'center' }}>
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <CheckCircle size={16} /> PDF Authorized! Opening download...
                  </motion.div>
                ) : (
                  <form onSubmit={handleInlineSubmit} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === 'loading'}
                      style={{
                        padding: '0.4rem 0.8rem',
                        fontSize: '0.8rem',
                        borderRadius: '6px',
                        border: status === 'error' ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.2)',
                        background: 'rgba(255, 255, 255, 0.08)',
                        color: 'white',
                        outline: 'none',
                        minWidth: '220px',
                        fontFamily: 'var(--font-en)',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--secondary)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                    />
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      style={{
                        background: 'var(--secondary)',
                        color: 'var(--primary)',
                        border: 'none',
                        padding: '0.4rem 1rem',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'opacity 0.2s, transform 0.1s',
                        fontFamily: 'var(--font-en)'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                      onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.97)'}
                      onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      {status === 'loading' ? 'Sending...' : 'Get PDF'}
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
        resourceLink="/assets/GCC_Digital_Transformation_Playbook.pdf"
      />
    </>
  );
};

export default PlaybookBanner;
