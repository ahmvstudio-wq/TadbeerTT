import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  // Line positions in percentage
  const verticalLines = [20, 40, 60, 80];
  const horizontalLines = [20, 40, 60, 80];

  // Key coordinates where we want the glowing gold nodes to collide/gilded pulses to appear
  const nodes = [
    { x: '20%', y: '40%', delay: 0.7 },
    { x: '40%', y: '60%', delay: 0.8 },
    { x: '60%', y: '20%', delay: 0.9 },
    { x: '80%', y: '80%', delay: 0.75 },
    { x: '40%', y: '40%', delay: 0.95 },
    { x: '60%', y: '60%', delay: 0.85 }
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: '100dvh',
        backgroundColor: '#FCFBFA', // Premium warm cream
        zIndex: 999999,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* ─── Grid System Build ─── */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }}>
        
        {/* Vertical Coordinate Lines */}
        {verticalLines.map((left, idx) => (
          <motion.div
            key={`v-${idx}`}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${left}%`,
              width: '1px',
              backgroundColor: 'rgba(24, 79, 91, 0.05)', // Subtle slate/teal
              originY: 0
            }}
          />
        ))}

        {/* Horizontal Coordinate Lines */}
        {horizontalLines.map((top, idx) => (
          <motion.div
            key={`h-${idx}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: `${top}%`,
              height: '1px',
              backgroundColor: 'rgba(24, 79, 91, 0.05)',
              originX: 0
            }}
          />
        ))}

        {/* Glowing Gold Nodes at Coordinate Intersections */}
        {nodes.map((node, idx) => (
          <motion.div
            key={`node-${idx}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.6, 1], 
              opacity: [0, 1, 0.75]
            }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut", 
              delay: node.delay 
            }}
            style={{
              position: 'absolute',
              left: node.x,
              top: node.y,
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--secondary)', // Gold accent
              boxShadow: '0 0 12px var(--secondary)',
              transform: 'translate(-50%, -50%)',
              zIndex: 10
            }}
          />
        ))}
      </div>

      {/* ─── Center Logo & Tagline Reveal Card ─── */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
        style={{
          background: 'rgba(255, 255, 255, 0.82)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(24, 79, 91, 0.08)',
          borderRadius: '16px',
          padding: '2.5rem 3.5rem',
          textAlign: 'center',
          boxShadow: '0 15px 35px rgba(24, 79, 91, 0.04)',
          zIndex: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          maxWidth: '440px',
          width: '90%',
          marginTop: '-6dvh'
        }}
      >
        {/* Emblem Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <img
            src="/logo.png"
            alt="Tadbeer Logo"
            style={{ height: '70px', width: 'auto', display: 'block' }}
          />
        </motion.div>

        {/* Separator line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '40px' }}
          transition={{ duration: 0.6, delay: 1.2 }}
          style={{ height: '2px', background: 'var(--secondary)', borderRadius: '1px' }}
        />

        {/* Subtitle / Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          style={{
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            margin: 0
          }}
        >
          Strategy. Systems. Execution.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
