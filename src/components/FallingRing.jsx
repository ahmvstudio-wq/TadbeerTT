import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FallingRing = () => {
  const { scrollYProgress } = useScroll();
  
  // Transform the scroll progress (0 to 1) into a vertical translation.
  // It will start at -20% of the viewport height and end at 120% (falling through the screen).
  // Alternatively, we can make it stay within the viewport and bounce around, 
  // but a continuous fall is often modeled by mapping scroll to full page height.
  // Actually, a fixed element that moves from top to bottom of the viewport 
  // as you scroll down the page is highly effective.
  const y = useTransform(scrollYProgress, [0, 1], ['-20vh', '120vh']);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: '50%',
        x: '-50%',
        y,
        rotate,
        zIndex: 50, // Above normal content but below nav
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mixBlendMode: 'difference', // Gives it a highly premium, inverted interaction with backgrounds
      }}
    >
      <div 
        style={{
          width: '40vw',
          height: '40vw',
          maxWidth: '600px',
          maxHeight: '600px',
          borderRadius: '50%',
          border: '2px solid rgba(212, 175, 55, 0.15)', // Secondary color (Gold) with low opacity
          boxShadow: '0 0 40px rgba(212, 175, 55, 0.05), inset 0 0 40px rgba(212, 175, 55, 0.05)',
          position: 'relative',
        }}
      >
        {/* Inner glowing accent */}
        <div style={{
          position: 'absolute',
          top: '-2px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '20%',
          height: '4px',
          background: 'linear-gradient(90deg, transparent, var(--secondary), transparent)',
          filter: 'blur(2px)',
        }} />
      </div>
    </motion.div>
  );
};

export default FallingRing;
