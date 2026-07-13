import React from 'react';
import { motion } from 'framer-motion';

const MascotAvatar = ({ 
  size = 256, 
  style = {},
  className = '',
  layoutId
}) => {
  return (
    <div
      className={`mascot-avatar-container ${className}`}
      style={{
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
        display: 'inline-flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        ...style
      }}
    >
      <motion.img
        layoutId={layoutId}
        src="/mascot.png.png"
        alt="Oryx Mascot"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          objectPosition: 'bottom center',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    </div>
  );
};

export default MascotAvatar;
