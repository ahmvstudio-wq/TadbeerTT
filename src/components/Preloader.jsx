import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff', // White background
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999,
      }}
    >
      {/* Exact Tadbeer Transformation Logo */}
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ marginBottom: '2rem' }}
      >
        <img
          src="/logo.png"
          alt="Tadbeer Transformation"
          style={{ height: '80px', width: 'auto', display: 'block' }}
        />
      </motion.div>

      {/* Loading Animation (Progress Bar) */}
      <div style={{ 
        width: '180px', 
        height: '3px', 
        background: 'rgba(24, 79, 91, 0.1)', 
        borderRadius: '10px', 
        overflow: 'hidden', 
        position: 'relative' 
      }}>
        <motion.div
          initial={{ left: '-100%' }}
          animate={{ left: '100%' }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: 0,
            width: '85px',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
          }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;
