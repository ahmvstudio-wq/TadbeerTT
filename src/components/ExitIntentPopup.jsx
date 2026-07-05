import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const shouldShow = useCallback(() => {
    if (dismissed) return false;
    if (sessionStorage.getItem('exitPopupShown') === 'true') return false;
    if (sessionStorage.getItem('leadSubmitted') === 'true') return false;
    return true;
  }, [dismissed]);

  const triggerPopup = useCallback(() => {
    if (!shouldShow()) return;
    setShow(true);
    sessionStorage.setItem('exitPopupShown', 'true');
  }, [shouldShow]);

  useEffect(() => {
    // Desktop: mouse leaves top of viewport
    const handleMouseLeave = (e) => {
      if (e.clientY < 10) {
        triggerPopup();
      }
    };

    // Mobile: detect rapid scroll up toward top (back intent) or visibilitychange
    let lastScrollY = window.scrollY;
    let rapidScrollCount = 0;

    const handleMobileScroll = () => {
      const currentY = window.scrollY;
      const diff = lastScrollY - currentY;

      // If scrolling up rapidly (more than 200px in one frame)
      if (diff > 200) {
        rapidScrollCount++;
        if (rapidScrollCount >= 2) {
          triggerPopup();
          rapidScrollCount = 0;
        }
      } else {
        rapidScrollCount = 0;
      }
      lastScrollY = currentY;
    };

    // Visibility change (user switching tabs / closing)
    const handleVisibility = () => {
      if (document.visibilityState === 'hidden') {
        // Set flag so popup shows when they return
        if (shouldShow()) {
          sessionStorage.setItem('showExitOnReturn', 'true');
        }
      } else if (document.visibilityState === 'visible') {
        if (sessionStorage.getItem('showExitOnReturn') === 'true') {
          sessionStorage.removeItem('showExitOnReturn');
          triggerPopup();
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleMobileScroll, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleMobileScroll);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [triggerPopup, shouldShow]);

  const handleDismiss = () => {
    setShow(false);
    setDismissed(true);
  };

  const handleDownload = () => {
    window.dispatchEvent(new CustomEvent('open-playbook-modal'));
    setShow(false);
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="exit-popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleDismiss}
        >
          <motion.div
            className="exit-popup-card"
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 30 }}
            transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="exit-popup-close" onClick={handleDismiss} aria-label="Close">×</button>

            <div className="exit-popup-badge">FREE RESOURCE</div>

            <h3 className="exit-popup-title">
              Before you go —
            </h3>
            <p className="exit-popup-desc">
              Download the <strong>Business Transformation Playbook</strong> built for Omani SMEs and enterprises. Practical frameworks, no theory.
            </p>

            <button className="exit-popup-cta" onClick={handleDownload}>
              Download the Playbook →
            </button>

            <p className="exit-popup-sub">
              No commitment. Instant download.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
