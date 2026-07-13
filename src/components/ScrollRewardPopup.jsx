import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';

const ScrollRewardPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if they've already received the reward
    const rewardClaimedOrShown = localStorage.getItem('tadbeer_scroll_reward_shown');
    if (rewardClaimedOrShown) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const scrollPercent = (scrollTop / docHeight) * 100;
      // 98% scroll depth
      if (scrollPercent >= 98) {
        setIsOpen(true);
        localStorage.setItem('tadbeer_scroll_reward_shown', 'true');
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClaim = () => {
    setIsOpen(false);
    // Open the strategy session modal globally with a custom source detail
    window.dispatchEvent(new CustomEvent('open-strategy-modal', {
      detail: { industry: "Complimentary Website Claim" }
    }));
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
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(8, 32, 37, 0.6)',
          backdropFilter: 'blur(8px)',
          padding: '1.5rem'
        }}>
          {/* Backdrop Click Dismiss */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} onClick={() => setIsOpen(false)} />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            style={{
              position: 'relative',
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '2.5rem 2rem',
              maxWidth: '460px',
              width: '100%',
              boxShadow: '0 20px 50px rgba(8, 32, 37, 0.25)',
              border: '2px solid rgba(202, 169, 76, 0.3)',
              textAlign: 'center',
              boxSizing: 'border-box'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-muted)',
                padding: '0.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={20} />
            </button>

            {/* Icon */}
            <div style={{
              background: 'rgba(202, 169, 76, 0.1)',
              color: 'var(--secondary)',
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem'
            }}>
              <Sparkles size={28} />
            </div>

            {/* Content */}
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)', margin: '0 0 0.5rem' }}>
              🎉 Congratulations!
            </h3>
            <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '1rem' }}>
              You've explored our entire website.
            </div>
            
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5', margin: '0 0 2.5rem' }}>
              You've unlocked a <span style={{ color: 'var(--secondary)', fontWeight: '700' }}>complimentary business website</span>.
            </p>

            <motion.button
              onClick={handleClaim}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: '100%',
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '0.95rem',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(24, 79, 91, 0.2)'
              }}
            >
              Claim My Website
            </motion.button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ScrollRewardPopup;
