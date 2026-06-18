import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        window.innerWidth <= 768
      );
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${x - 18}px, ${y - 18}px, 0)`;
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const isClickable = target.closest('a') || 
                          target.closest('button') || 
                          target.closest('input') || 
                          target.closest('select') || 
                          target.closest('textarea') || 
                          target.closest('.industry-compact-item') ||
                          target.closest('.why-card') ||
                          target.closest('.btn') ||
                          target.closest('.clickable');
                          
      if (isClickable) {
        if (ringRef.current) {
          ringRef.current.style.width = '48px';
          ringRef.current.style.height = '48px';
          ringRef.current.style.borderColor = 'var(--secondary)';
          ringRef.current.style.backgroundColor = 'rgba(202, 169, 76, 0.08)';
          // adjust transform offsets for larger size
          ringRef.current.style.transform += ' translate3d(-6px, -6px, 0)';
        }
        if (cursorRef.current) {
          cursorRef.current.style.backgroundColor = 'var(--secondary)';
        }
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (!target) return;
      
      const isClickable = target.closest('a') || 
                          target.closest('button') || 
                          target.closest('input') || 
                          target.closest('select') || 
                          target.closest('textarea') || 
                          target.closest('.industry-compact-item') ||
                          target.closest('.why-card') ||
                          target.closest('.btn') ||
                          target.closest('.clickable');
                          
      if (isClickable) {
        if (ringRef.current) {
          ringRef.current.style.width = '36px';
          ringRef.current.style.height = '36px';
          ringRef.current.style.borderColor = 'rgba(202, 169, 76, 0.4)';
          ringRef.current.style.backgroundColor = 'transparent';
        }
        if (cursorRef.current) {
          cursorRef.current.style.backgroundColor = 'var(--secondary)';
        }
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          backgroundColor: 'var(--secondary)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999999,
          transform: 'translate3d(-100px, -100px, 0)',
          transition: 'background-color 0.2s ease, transform 0.05s linear'
        }}
      />
      {/* Outer Ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '36px',
          height: '36px',
          border: '1.5px solid rgba(202, 169, 76, 0.4)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999998,
          transform: 'translate3d(-100px, -100px, 0)',
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)'
        }}
      />
    </>
  );
};

export default CustomCursor;
