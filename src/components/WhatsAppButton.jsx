import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchSettings, defaultSettings } from '../supabaseService';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [settings, setSettings] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Delay entrance by 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    const loadSettings = async () => {
      const data = await fetchSettings();
      setSettings(data);
    };
    loadSettings();

    return () => clearTimeout(timer);
  }, []);

  const activeSettings = settings || defaultSettings;
  const phone = activeSettings.whatsappPhone || '96876307656';

  const getWhatsAppMessage = () => {
    const path = location.pathname;
    let message = activeSettings.msgDefault || "Hi Tadbeer, I'd like to learn more about your business transformation services.";
    
    if (path.includes('/services/digital-marketing')) {
      message = activeSettings.msgMarketing || "Hi Tadbeer, I'm visiting your website and want to discuss Digital Marketing and Growth systems for my business.";
    } else if (path.includes('/services/software-solutions')) {
      message = activeSettings.msgSoftware || "Hi Tadbeer, I'm visiting your website and want to discuss Enterprise Software and ERP implementation.";
    } else if (path.includes('/services/ai-technology')) {
      message = activeSettings.msgAI || "Hi Tadbeer, I'm visiting your website and want to discuss custom AI integrations and automation.";
    } else if (path.includes('/services/human-capital')) {
      message = activeSettings.msgHumanCapital || "Hi Tadbeer, I'm visiting your website and want to discuss Human Capital management and Omanization compliance.";
    } else if (path.includes('/resources')) {
      message = activeSettings.msgResources || "Hi Tadbeer, I'm visiting your resources page and would like to learn more about your consulting services.";
    }
    
    return encodeURIComponent(message);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={`https://wa.me/${phone}?text=${getWhatsAppMessage()}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="whatsapp-float"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            width: '56px',
            height: '56px',
            backgroundColor: '#25D366',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
            zIndex: 90,
            cursor: 'pointer'
          }}
        >
          {/* Pulse effect */}
          <div className="whatsapp-pulse" style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: '#25D366',
            borderRadius: '50%',
            zIndex: -1,
            animation: 'pulseScale 2s infinite'
          }} />
          
          <svg viewBox="0 0 24 24" width="30" height="30" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>

          {/* Add CSS for pulse animation dynamically */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes pulseScale {
              0% { transform: scale(1); opacity: 0.8; }
              100% { transform: scale(1.5); opacity: 0; }
            }
            @media (max-width: 768px) {
              .whatsapp-float {
                width: 50px !important;
                height: 50px !important;
                bottom: 20px !important;
                right: 16px !important;
              }
            }
          `}} />
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
