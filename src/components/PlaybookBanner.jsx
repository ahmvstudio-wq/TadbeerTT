import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Book } from 'lucide-react';
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
      if (error) console.warn('DB Error (Ignored for local demo):', error);
      
      setStatus('success');
      setEmail('');
      window.dispatchEvent(new CustomEvent('lead-submitted', { detail: lead }));
      
      // Auto close banner and trigger Strategy Session popup after success
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
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={bannerRef}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{
              background: 'linear-gradient(90deg, #1e1b4b 0%, #0f172a 100%)', // Very dark purple/slate gradient
              color: 'white',
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1001,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              padding: '0.6rem 3.5rem 0.6rem 1.5rem',
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: '1 1 auto', minWidth: '300px' }}>
                <Book fill="#3b82f6" color="#3b82f6" size={20} />
                <div style={{ fontSize: '0.9rem', color: '#F9F8F3', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  <span style={{ color: 'var(--secondary)', fontWeight: '700' }}>
                    Exclusive Guide:
                  </span>
                  <span style={{ fontWeight: '500' }}>
                    The GCC Enterprise Scaling & Transformation Blueprint
                  </span>
                </div>
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
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === 'loading'}
                      style={{
                        padding: '0.45rem 0.8rem',
                        fontSize: '0.85rem',
                        borderRadius: '4px',
                        border: status === 'error' ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.15)',
                        background: 'rgba(255, 255, 255, 0.06)',
                        color: 'white',
                        outline: 'none',
                        minWidth: '240px',
                        fontFamily: 'var(--font-en)',
                        transition: 'border-color 0.2s, background 0.2s'
                      }}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.4)'; e.target.style.background = 'rgba(255, 255, 255, 0.1)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.15)'; e.target.style.background = 'rgba(255, 255, 255, 0.06)'; }}
                    />
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      style={{
                        background: 'var(--secondary)',
                        color: 'var(--primary)',
                        border: 'none',
                        padding: '0.45rem 1.25rem',
                        borderRadius: '4px',
                        fontSize: '0.85rem',
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
        resourceLink="#"
      />
    </>
  );
};

export default PlaybookBanner;
