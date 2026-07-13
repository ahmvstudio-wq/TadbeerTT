import React, { createContext, useContext, useState, useEffect } from 'react';

const MascotContext = createContext();

export const MascotProvider = ({ children }) => {
  const [heroInView, setHeroInView] = useState(true);
  const [activeSection, setActiveSection] = useState('hero-section');

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.querySelector('.hero-section');
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        // If bottom of hero is above the top of the viewport + some padding, it's out of view
        setHeroInView(rect.bottom > 200);
      } else {
        setHeroInView(false);
      }

      // Find which section is most central on screen
      const centerY = window.innerHeight / 2;
      const sections = document.querySelectorAll('section, footer');
      let closestSection = '';
      let minDistance = Infinity;

      sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        // Ensure the section is actually taking up space
        if (rect.height > 0) {
          const distanceToCenter = Math.abs(rect.top + rect.height / 2 - centerY);
          if (distanceToCenter < minDistance) {
            minDistance = distanceToCenter;
            closestSection = sec.id || sec.className.split(' ')[0] || '';
          }
        }
      });

      if (closestSection && closestSection !== activeSection) {
        setActiveSection(closestSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once to initialize
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <MascotContext.Provider value={{ heroInView, activeSection }}>
      {children}
    </MascotContext.Provider>
  );
};

export const useMascot = () => {
  const context = useContext(MascotContext);
  if (context === undefined) {
    throw new Error('useMascot must be used within a MascotProvider');
  }
  return context;
};
