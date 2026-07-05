import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

const rawMessages = [
  "A Muscat-based construction company just booked a Growth Strategy Session",
  "Someone from a Sohar manufacturing plant downloaded the Transformation Playbook",
  "A real estate developer in Salalah just used the ROI Calculator",
  "New Business Assessment completed by a logistics enterprise in Nizwa",
  "A heavy machinery supplier from Barka just scheduled a consultation",
  "An oil & gas operator in Ibri just checked their Business Readiness Score",
  "A regional retail chain (Muscat) completed their operational audit",
  "Just now: A healthcare provider in Seeb calculated their potential ROI",
  "A Muscat facility management firm downloaded the Growth Playbook",
  "New Strategy Session booked by a prominent Oman construction group"
];

const SocialProofToasts = () => {
  const [currentMessage, setCurrentMessage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Keep track of recent messages to avoid immediate repeats
  const recentIndices = useRef([]);

  useEffect(() => {
    if (sessionStorage.getItem('leadSubmitted') === 'true') return;

    const initialDelay = setTimeout(() => {
      showNextToast();
    }, 10000);

    return () => clearTimeout(initialDelay);
  }, []);

  const getRandomMessage = () => {
    let newIndex;
    // Try to find an index we haven't used recently
    do {
      newIndex = Math.floor(Math.random() * rawMessages.length);
    } while (recentIndices.current.includes(newIndex) && recentIndices.current.length < rawMessages.length - 1);
    
    // Keep track of the last 4 messages shown
    recentIndices.current.push(newIndex);
    if (recentIndices.current.length > 4) {
      recentIndices.current.shift();
    }
    
    // Generate a slightly randomized time (between 1 and 15 minutes ago, or "Just now")
    const timeMins = Math.floor(Math.random() * 15);
    const timeStr = timeMins === 0 ? "Just now" : `${timeMins} mins ago`;
    
    return { text: rawMessages[newIndex], time: timeStr };
  };

  const showNextToast = () => {
    setCurrentMessage(getRandomMessage());
    setIsVisible(true);

    // Auto hide after 6 seconds
    setTimeout(() => {
      setIsVisible(false);
      
      // Next toast delay (10-20 seconds) 
      const nextDelay = 10000 + Math.random() * 10000;
      setTimeout(() => {
        if (sessionStorage.getItem('leadSubmitted') !== 'true') {
          showNextToast();
        }
      }, nextDelay);
    }, 6000);
  };

  return (
    <AnimatePresence>
      {isVisible && currentMessage && (
        <motion.div
          className="social-proof-toast"
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        >
          <div className="spt-icons">
            <div className="spt-icon-primary">
              <Check size={20} strokeWidth={3} color="white" />
            </div>
          </div>
          
          <div className="spt-content">
            <p className="spt-message">
              {currentMessage.text}
            </p>
            <span className="spt-time">{currentMessage.time}</span>
          </div>

          <button
            className="spt-close"
            onClick={() => setIsVisible(false)}
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
