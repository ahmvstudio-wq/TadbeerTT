import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';
import LeadCaptureModal from './LeadCaptureModal';

const PlaybookBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem('playbook_banner_dismissed');
    if (!isDismissed) {
      setIsVisible(true);
      document.documentElement.classList.add('has-banner');
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('playbook_banner_dismissed', 'true');
    document.documentElement.classList.remove('has-banner');
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{
              background: 'linear-gradient(90deg, var(--primary) 0%, #153C45 100%)',
              color: 'white',
              padding: '0.65rem 3rem 0.65rem 1rem',
              fontSize: '0.85rem',
              fontWeight: '500',
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1001,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              borderBottom: '1px solid var(--secondary)',
              textAlign: 'center',
              flexWrap: 'wrap',
              gap: '8px',
              minHeight: '40px'
            }}
            className="playbook-top-banner"
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <span style={{
                background: 'var(--secondary)',
                color: 'var(--primary)',
                fontSize: '0.65rem',
                fontWeight: '700',
                padding: '2px 6px',
                borderRadius: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Free Download
              </span>
              <span style={{ fontWeight: '600', color: '#F9F8F3' }}>
                GCC Enterprise Digital Transformation Playbook
              </span>
            </span>
            
            <button
              onClick={handleOpenModal}
              style={{
                background: 'var(--secondary)',
                color: 'var(--primary)',
                border: 'none',
                padding: '0.25rem 0.75rem',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: '700',
                cursor: 'pointer',
                marginLeft: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                transition: 'opacity 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <Download size={12} /> Get Playbook
            </button>

            <button
              onClick={handleDismiss}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                padding: '4px',
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                opacity: 0.7,
                transition: 'opacity 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
            >
              <X size={16} />
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
