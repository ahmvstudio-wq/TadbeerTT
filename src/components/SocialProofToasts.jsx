import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  { city: 'Muscat', action: 'just completed the Business Assessment' },
  { city: 'Salalah', action: 'downloaded the Transformation Playbook' },
  { city: 'Sohar', action: 'requested a Strategy Session' },
  { city: 'Nizwa', action: 'just completed the Business Assessment' },
  { city: 'Sur', action: 'downloaded the Transformation Playbook' },
  { city: 'Muscat', action: 'requested a Strategy Session' },
  { city: 'Barka', action: 'just completed the ROI analysis' },
  { city: 'Ibri', action: 'downloaded the Transformation Playbook' },
  { city: 'Seeb', action: 'just completed the Business Assessment' },
  { city: 'Ruwi', action: 'requested a Strategy Session' },
];

const SocialProofToasts = () => {
  const [currentToast, setCurrentToast] = useState(null);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Don't show if lead already submitted
    if (sessionStorage.getItem('leadSubmitted') === 'true') return;

    // Initial delay of 25 seconds before first toast
    const initialDelay = setTimeout(() => {
      showToast();
    }, 25000);

    return () => clearTimeout(initialDelay);
  }, []);

  const showToast = () => {
    setCurrentToast(messages[messageIndex % messages.length]);
    setMessageIndex(prev => prev + 1);

    // Auto-hide after 5 seconds
    setTimeout(() => {
      setCurrentToast(null);

      // Show next toast after 35-50 seconds (randomized)
      const nextDelay = 35000 + Math.random() * 15000;
      setTimeout(() => {
        if (sessionStorage.getItem('leadSubmitted') !== 'true') {
          showToast();
        }
      }, nextDelay);
    }, 5000);
  };

  return (
    <AnimatePresence>
      {currentToast && (
        <motion.div
          className="social-proof-toast"
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -120, opacity: 0 }}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        >
          <div className="spt-dot" />
          <div className="spt-content">
            <span className="spt-message">
              A business in <strong>{currentToast.city}</strong> {currentToast.action}
            </span>
            <span className="spt-time">Just now</span>
          </div>
          <button
            className="spt-close"
            onClick={() => setCurrentToast(null)}
            aria-label="Dismiss"
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialProofToasts;
