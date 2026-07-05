import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{
        scaleX: scrollYProgress,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, var(--secondary), #d4b84a)',
        transformOrigin: '0%',
        zIndex: 9999,
      }}
    />
  );
};

export default ScrollProgressBar;
