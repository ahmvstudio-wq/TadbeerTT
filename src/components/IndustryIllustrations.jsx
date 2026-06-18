import React from 'react';
import { motion } from 'framer-motion';

// Common animation constants
const pulseTransition = {
  duration: 2,
  repeat: Infinity,
  ease: "easeInOut"
};

const flowTransition = (delay = 0) => ({
  duration: 3,
  repeat: Infinity,
  ease: "linear",
  delay
});

const scanTransition = {
  duration: 2.5,
  repeat: Infinity,
  ease: "easeInOut"
};

// Healthcare Motion Illustration
export const HealthcareIllustration = () => {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(24, 79, 91, 0.03)', borderRadius: '24px', padding: '2rem', border: '1px solid rgba(24, 79, 91, 0.08)', overflow: 'hidden' }}>
      <svg viewBox="0 0 400 300" style={{ width: '100%', height: '100%', maxWidth: '400px' }}>
        {/* Background Grid */}
        <defs>
          <pattern id="hc-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(24, 79, 91, 0.03)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#hc-grid)" rx="16" />

        {/* Connections / Flow Paths */}
        <path d="M 80,150 L 200,150" fill="none" stroke="var(--primary)" strokeWidth="2" strokeDasharray="5 5" opacity="0.4" />
        <path d="M 200,150 L 320,90" fill="none" stroke="var(--primary)" strokeWidth="2" strokeDasharray="5 5" opacity="0.4" />
        <path d="M 200,150 L 320,210" fill="none" stroke="var(--primary)" strokeWidth="2" strokeDasharray="5 5" opacity="0.4" />

        {/* Animated Data Packets */}
        <motion.circle
          cx="80" cy="150" r="4" fill="var(--secondary)"
          animate={{ cx: [80, 200] }}
          transition={flowTransition(0)}
        />
        <motion.circle
          cx="80" cy="150" r="4" fill="var(--secondary)"
          animate={{ cx: [80, 200] }}
          transition={flowTransition(1.5)}
        />
        <motion.circle
          cx="200" cy="150" r="4" fill="var(--secondary)"
          animate={{ cx: [200, 320], cy: [150, 90] }}
          transition={flowTransition(0.5)}
        />
        <motion.circle
          cx="200" cy="150" r="4" fill="var(--secondary)"
          animate={{ cx: [200, 320], cy: [150, 210] }}
          transition={flowTransition(2)}
        />

        {/* Left Node: Inbound EHR Data */}
        <g transform="translate(40, 110)">
          <rect width="80" height="80" rx="8" fill="white" stroke="rgba(24, 79, 91, 0.1)" strokeWidth="1" style={{ filter: 'drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.05))' }} />
          <motion.circle cx="40" cy="30" r="15" fill="rgba(24, 79, 91, 0.05)" animate={{ scale: [1, 1.1, 1] }} transition={pulseTransition} />
          <path d="M 30,30 H 50 M 40,20 V 40" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" />
          <text x="40" y="65" textAnchor="middle" fontSize="10" fontWeight="bold" fill="var(--primary)" fontFamily="var(--font-en)">INBOUND EHR</text>
        </g>

        {/* Center Node: AI Router Net */}
        <g transform="translate(160, 110)">
          <rect width="80" height="80" rx="8" fill="white" stroke="var(--primary)" strokeWidth="1.5" style={{ filter: 'drop-shadow(0px 4px 20px rgba(24, 79, 91, 0.15))' }} />
          <motion.circle cx="40" cy="40" r="24" fill="none" stroke="var(--secondary)" strokeWidth="1.5" strokeDasharray="4 4" animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />
          {/* Inner brain/net structure */}
          <circle cx="40" cy="40" r="8" fill="var(--primary)" />
          <circle cx="28" cy="28" r="4" fill="var(--secondary)" />
          <circle cx="52" cy="28" r="4" fill="var(--secondary)" />
          <circle cx="40" cy="56" r="4" fill="var(--secondary)" />
          <line x1="40" y1="40" x2="28" y2="28" stroke="var(--primary)" strokeWidth="1" />
          <line x1="40" y1="40" x2="52" y2="28" stroke="var(--primary)" strokeWidth="1" />
          <line x1="40" y1="40" x2="40" y2="56" stroke="var(--primary)" strokeWidth="1" />
          <text x="40" y="72" textAnchor="middle" fontSize="8" fontWeight="bold" fill="var(--primary)" letterSpacing="1" fontFamily="var(--font-en)">AI ENGINE</text>
        </g>

        {/* Top Right Node: Optimized Scheduler */}
        <g transform="translate(280, 50)">
          <rect width="80" height="80" rx="8" fill="white" stroke="rgba(24, 79, 91, 0.1)" strokeWidth="1" style={{ filter: 'drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.05))' }} />
          <motion.rect x="15" y="15" width="50" height="10" rx="3" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" animate={{ opacity: [0.7, 1, 0.7] }} transition={pulseTransition} />
          <circle cx="25" cy="20" r="3" fill="#166534" />
          <motion.rect x="15" y="32" width="50" height="10" rx="3" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" animate={{ opacity: [1, 0.7, 1] }} transition={pulseTransition} />
          <circle cx="25" cy="37" r="3" fill="#166534" />
          <text x="40" y="65" textAnchor="middle" fontSize="9" fontWeight="bold" fill="var(--primary)" fontFamily="var(--font-en)">SCHEDULER</text>
        </g>

        {/* Bottom Right Node: EHR Translation */}
        <g transform="translate(280, 170)">
          <rect width="80" height="80" rx="8" fill="white" stroke="rgba(24, 79, 91, 0.1)" strokeWidth="1" style={{ filter: 'drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.05))' }} />
          <text x="40" y="30" textAnchor="middle" fontSize="14" fontWeight="bold" fill="var(--secondary)" fontFamily="var(--font-ar)">عربي</text>
          <line x1="25" y1="40" x2="55" y2="40" stroke="rgba(24,79,91,0.2)" strokeWidth="2" />
          <text x="40" y="55" textAnchor="middle" fontSize="11" fontWeight="bold" fill="var(--primary)" fontFamily="var(--font-en)">EN / AR</text>
          <text x="40" y="70" textAnchor="middle" fontSize="8" fontWeight="bold" fill="var(--text-muted)" fontFamily="var(--font-en)">TRANSLATE</text>
        </g>
      </svg>
    </div>
  );
};

// Real Estate Motion Illustration
export const RealEstateIllustration = () => {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(202, 169, 76, 0.03)', borderRadius: '24px', padding: '2rem', border: '1px solid rgba(202, 169, 76, 0.08)', overflow: 'hidden' }}>
      <svg viewBox="0 0 400 300" style={{ width: '100%', height: '100%', maxWidth: '400px' }}>
        <defs>
          <pattern id="re-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(202, 169, 76, 0.03)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#re-grid)" rx="16" />

        {/* Lead qualification funnel paths */}
        <path d="M 75,90 L 170,150" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
        <path d="M 75,210 L 170,150" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
        <path d="M 250,150 L 320,150" fill="none" stroke="var(--primary)" strokeWidth="2.5" />

        {/* Lead movement animation */}
        <motion.circle cx="75" cy="90" r="5" fill="var(--secondary)" animate={{ cx: [75, 170], cy: [90, 150] }} transition={flowTransition(0)} />
        <motion.circle cx="75" cy="210" r="5" fill="var(--primary)" animate={{ cx: [75, 170], cy: [210, 150] }} transition={flowTransition(1.5)} />
        <motion.circle cx="250" cy="150" r="6" fill="var(--secondary)" animate={{ cx: [250, 320] }} transition={flowTransition(0.7)} />

        {/* WhatsApp lead source node */}
        <g transform="translate(30, 50)">
          <rect width="90" height="70" rx="8" fill="white" stroke="#25D366" strokeWidth="1.5" style={{ filter: 'drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.05))' }} />
          <circle cx="45" cy="25" r="10" fill="#25D366" />
          <path d="M 42,21 C 45,21 48,23 48,26 C 48,29 45,30 43,30 L 40,31 L 41,29" fill="none" stroke="white" strokeWidth="1.5" />
          <text x="45" y="53" textAnchor="middle" fontSize="9" fontWeight="bold" fill="var(--primary)" fontFamily="var(--font-en)">WHATSAPP LEAD</text>
        </g>

        {/* Web lead source node */}
        <g transform="translate(30, 180)">
          <rect width="90" height="70" rx="8" fill="white" stroke="rgba(24, 79, 91, 0.1)" strokeWidth="1" style={{ filter: 'drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.05))' }} />
          <rect x="35" y="15" width="20" height="15" rx="2" fill="none" stroke="var(--primary)" strokeWidth="1.5" />
          <line x1="30" y1="36" x2="60" y2="36" stroke="var(--primary)" strokeWidth="1.5" />
          <text x="45" y="53" textAnchor="middle" fontSize="9" fontWeight="bold" fill="var(--primary)" fontFamily="var(--font-en)">WEB PORTAL</text>
        </g>

        {/* Core AI Matcher Node */}
        <g transform="translate(170, 110)">
          <rect width="80" height="80" rx="8" fill="white" stroke="var(--primary)" strokeWidth="2" style={{ filter: 'drop-shadow(0px 6px 18px rgba(0,0,0,0.1))' }} />
          <motion.circle cx="40" cy="40" r="22" fill="rgba(202,169,76,0.06)" stroke="var(--secondary)" strokeWidth="2" strokeDasharray="5 3" animate={{ rotate: -360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
          <motion.line x1="18" y1="40" x2="62" y2="40" stroke="var(--secondary)" strokeWidth="2" animate={{ y: [18, 62, 18] }} transition={scanTransition} />
          <text x="40" y="70" textAnchor="middle" fontSize="8" fontWeight="bold" fill="var(--primary)" letterSpacing="1" fontFamily="var(--font-en)">QUALIFIER</text>
        </g>

        {/* Listing Match Output */}
        <g transform="translate(290, 100)">
          <rect width="80" height="100" rx="8" fill="white" stroke="var(--primary)" strokeWidth="1" style={{ filter: 'drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.05))' }} />
          <path d="M 15,20 L 40,10 L 65,20 L 65,55 L 15,55 Z" fill="rgba(202, 169, 76, 0.08)" stroke="var(--primary)" strokeWidth="1.5" />
          <motion.path d="M 33,35 H 47 M 40,28 V 42" stroke="var(--secondary)" strokeWidth="2" animate={{ opacity: [0.4, 1, 0.4] }} transition={pulseTransition} />
          <text x="40" y="75" textAnchor="middle" fontSize="9" fontWeight="bold" fill="var(--primary)" fontFamily="var(--font-en)">Listing Match</text>
          <text x="40" y="87" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#166534" fontFamily="var(--font-en)">CRM SYNCED</text>
        </g>
      </svg>
    </div>
  );
};

// Logistics Motion Illustration
export const LogisticsIllustration = () => {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(24, 79, 91, 0.03)', borderRadius: '24px', padding: '2rem', border: '1px solid rgba(24, 79, 91, 0.08)', overflow: 'hidden' }}>
      <svg viewBox="0 0 400 300" style={{ width: '100%', height: '100%', maxWidth: '400px' }}>
        <defs>
          <pattern id="log-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(24, 79, 91, 0.03)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#log-grid)" rx="16" />

        {/* Map route path */}
        <motion.path
          d="M 50,180 Q 120,70 200,160 T 350,120"
          fill="none" stroke="var(--primary)" strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />

        {/* Alternative route path (optimized) */}
        <path d="M 50,180 Q 120,230 200,160 T 350,120" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeDasharray="4 4" opacity="0.8" />

        {/* Nodes along path */}
        <circle cx="50" cy="180" r="6" fill="var(--primary)" />
        <circle cx="200" cy="160" r="6" fill="var(--primary)" />
        <circle cx="350" cy="120" r="8" fill="var(--secondary)" />

        {/* Moving Truck along route */}
        <motion.g
          animate={{
            x: [0, 137, 285],
            y: [0, -17, -50]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ originX: '50px', originY: '180px' }}
        >
          <rect x="40" y="165" width="20" height="12" rx="2" fill="var(--secondary)" />
          <rect x="54" y="167" width="8" height="8" rx="1" fill="var(--primary)" />
          <circle cx="45" cy="178" r="3" fill="black" />
          <circle cx="55" cy="178" r="3" fill="black" />
        </motion.g>

        {/* Dynamic Dispatch Chart (Telemetry) */}
        <g transform="translate(240, 180)">
          <rect width="130" height="90" rx="8" fill="white" stroke="rgba(24,79,91,0.1)" strokeWidth="1" style={{ filter: 'drop-shadow(0px 4px 12px rgba(0,0,0,0.05))' }} />
          <text x="10" y="20" fontSize="8" fontWeight="bold" fill="var(--primary)" fontFamily="var(--font-en)">ROUTE DELAY STATUS</text>
          
          {/* Animated chart bars */}
          <motion.rect x="20" y="75" width="12" height="5" fill="var(--secondary)" animate={{ y: [75, 55, 75], height: [5, 25, 5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.1 }} />
          <motion.rect x="40" y="75" width="12" height="5" fill="var(--secondary)" animate={{ y: [75, 40, 75], height: [5, 40, 5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
          <motion.rect x="60" y="75" width="12" height="5" fill="var(--primary)" animate={{ y: [75, 65, 75], height: [5, 15, 5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.9 }} />
          <motion.rect x="80" y="75" width="12" height="5" fill="var(--primary)" animate={{ y: [75, 70, 75], height: [5, 10, 5] }} transition={{ duration: 2, repeat: Infinity, delay: 1.3 }} />
          <motion.rect x="100" y="75" width="12" height="5" fill="#166534" animate={{ y: [75, 72, 75], height: [5, 8, 5] }} transition={{ duration: 2, repeat: Infinity, delay: 1.7 }} />
          <line x1="10" y1="75" x2="120" y2="75" stroke="var(--primary)" strokeWidth="1" />
        </g>

        {/* Dashboard Stat */}
        <g transform="translate(30, 30)">
          <rect width="120" height="60" rx="8" fill="white" stroke="rgba(24,79,91,0.1)" strokeWidth="1" style={{ filter: 'drop-shadow(0px 4px 12px rgba(0,0,0,0.05))' }} />
          <text x="15" y="22" fontSize="8" fill="var(--text-muted)" fontWeight="bold" fontFamily="var(--font-en)">ETA PREDICTION</text>
          <motion.text x="15" y="47" fontSize="20" fontWeight="900" fill="var(--primary)" fontFamily="var(--font-en)"
            animate={{ opacity: [1, 0.7, 1] }} transition={pulseTransition}>
            99.4%
          </motion.text>
        </g>
      </svg>
    </div>
  );
};

// E-Commerce Motion Illustration
export const EcommerceIllustration = () => {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(202, 169, 76, 0.03)', borderRadius: '24px', padding: '2rem', border: '1px solid rgba(202, 169, 76, 0.08)', overflow: 'hidden' }}>
      <svg viewBox="0 0 400 300" style={{ width: '100%', height: '100%', maxWidth: '400px' }}>
        <defs>
          <pattern id="ec-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(202, 169, 76, 0.03)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#ec-grid)" rx="16" />

        {/* Input streams from user profiles */}
        <path d="M 50,70 L 150,150" fill="none" stroke="var(--primary)" strokeWidth="1.5" opacity="0.3" />
        <path d="M 50,150 L 150,150" fill="none" stroke="var(--primary)" strokeWidth="1.5" opacity="0.3" />
        <path d="M 50,230 L 150,150" fill="none" stroke="var(--primary)" strokeWidth="1.5" opacity="0.3" />

        {/* Output streams to recommendations */}
        <path d="M 230,150 L 320,70" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
        <path d="M 230,150 L 320,150" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
        <path d="M 230,150 L 320,230" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />

        {/* Data Stream Animation */}
        <motion.circle cx="50" cy="70" r="4" fill="var(--primary)" animate={{ cx: [50, 150], cy: [70, 150] }} transition={flowTransition(0)} />
        <motion.circle cx="50" cy="150" r="4" fill="var(--primary)" animate={{ cx: [50, 150] }} transition={flowTransition(1)} />
        <motion.circle cx="50" cy="230" r="4" fill="var(--primary)" animate={{ cx: [50, 150], cy: [230, 150] }} transition={flowTransition(2)} />

        <motion.circle cx="230" cy="150" r="5" fill="var(--secondary)" animate={{ cx: [230, 320], cy: [150, 70] }} transition={flowTransition(0.5)} />
        <motion.circle cx="230" cy="150" r="5" fill="var(--secondary)" animate={{ cx: [230, 320] }} transition={flowTransition(1.5)} />
        <motion.circle cx="230" cy="150" r="5" fill="var(--secondary)" animate={{ cx: [230, 320], cy: [150, 230] }} transition={flowTransition(2.5)} />

        {/* User behavior inputs */}
        <g transform="translate(20, 50)">
          <circle cx="20" cy="20" r="15" fill="white" stroke="rgba(24,79,91,0.1)" strokeWidth="1" style={{ filter: 'drop-shadow(0px 3px 6px rgba(0,0,0,0.05))' }} />
          <text x="20" y="23" textAnchor="middle" fontSize="10" fontWeight="bold" fill="var(--primary)">🛒</text>
        </g>
        <g transform="translate(20, 130)">
          <circle cx="20" cy="20" r="15" fill="white" stroke="rgba(24,79,91,0.1)" strokeWidth="1" style={{ filter: 'drop-shadow(0px 3px 6px rgba(0,0,0,0.05))' }} />
          <text x="20" y="23" textAnchor="middle" fontSize="10" fontWeight="bold" fill="var(--primary)">👁️</text>
        </g>
        <g transform="translate(20, 210)">
          <circle cx="20" cy="20" r="15" fill="white" stroke="rgba(24,79,91,0.1)" strokeWidth="1" style={{ filter: 'drop-shadow(0px 3px 6px rgba(0,0,0,0.05))' }} />
          <text x="20" y="23" textAnchor="middle" fontSize="10" fontWeight="bold" fill="var(--primary)">🔍</text>
        </g>

        {/* Central Engine */}
        <g transform="translate(150, 110)">
          <rect width="80" height="80" rx="40" fill="white" stroke="var(--primary)" strokeWidth="2" style={{ filter: 'drop-shadow(0px 6px 18px rgba(0,0,0,0.1))' }} />
          <motion.circle cx="40" cy="40" r="30" fill="none" stroke="var(--secondary)" strokeWidth="1" strokeDasharray="3 3" animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} />
          <text x="40" y="44" textAnchor="middle" fontSize="9" fontWeight="900" fill="var(--primary)" fontFamily="var(--font-en)">DYNAMIC</text>
          <text x="40" y="55" textAnchor="middle" fontSize="8" fontWeight="bold" fill="var(--secondary)" fontFamily="var(--font-en)">AI MATCH</text>
        </g>

        {/* Personalized product cards outputs */}
        <g transform="translate(310, 40)">
          <rect width="70" height="50" rx="4" fill="white" stroke="rgba(24,79,91,0.1)" strokeWidth="1" style={{ filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.05))' }} />
          <rect x="8" y="8" width="20" height="15" rx="2" fill="rgba(202, 169, 76, 0.1)" />
          <line x1="8" y1="30" x2="62" y2="30" stroke="rgba(24,79,91,0.2)" strokeWidth="1.5" />
          <line x1="8" y1="38" x2="45" y2="38" stroke="rgba(24,79,91,0.2)" strokeWidth="1.5" />
          <motion.circle cx="55" cy="15" r="4" fill="#166534" animate={{ scale: [1, 1.2, 1] }} transition={pulseTransition} />
        </g>
        <g transform="translate(310, 125)">
          <rect width="70" height="50" rx="4" fill="white" stroke="rgba(24,79,91,0.1)" strokeWidth="1" style={{ filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.05))' }} />
          <rect x="8" y="8" width="20" height="15" rx="2" fill="rgba(24, 79, 91, 0.1)" />
          <line x1="8" y1="30" x2="62" y2="30" stroke="rgba(24,79,91,0.2)" strokeWidth="1.5" />
          <line x1="8" y1="38" x2="40" y2="38" stroke="rgba(24,79,91,0.2)" strokeWidth="1.5" />
          <motion.circle cx="55" cy="15" r="4" fill="#166534" animate={{ scale: [1.2, 1, 1.2] }} transition={pulseTransition} />
        </g>
        <g transform="translate(310, 210)">
          <rect width="70" height="50" rx="4" fill="white" stroke="rgba(24,79,91,0.1)" strokeWidth="1" style={{ filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.05))' }} />
          <rect x="8" y="8" width="20" height="15" rx="2" fill="rgba(202, 169, 76, 0.1)" />
          <line x1="8" y1="30" x2="62" y2="30" stroke="rgba(24,79,91,0.2)" strokeWidth="1.5" />
          <line x1="8" y1="38" x2="50" y2="38" stroke="rgba(24,79,91,0.2)" strokeWidth="1.5" />
          <motion.circle cx="55" cy="15" r="4" fill="#166534" animate={{ scale: [1, 1.3, 1] }} transition={pulseTransition} />
        </g>
      </svg>
    </div>
  );
};

// Construction Motion Illustration
export const ConstructionIllustration = () => {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(24, 79, 91, 0.03)', borderRadius: '24px', padding: '2rem', border: '1px solid rgba(24, 79, 91, 0.08)', overflow: 'hidden' }}>
      <svg viewBox="0 0 400 300" style={{ width: '100%', height: '100%', maxWidth: '400px' }}>
        <defs>
          <pattern id="con-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(24, 79, 91, 0.03)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#con-grid)" rx="16" />

        {/* Gantt / Schedule Timeline Bars */}
        <g transform="translate(30, 40)">
          <rect width="340" height="180" rx="8" fill="white" stroke="rgba(24,79,91,0.1)" strokeWidth="1" style={{ filter: 'drop-shadow(0px 6px 15px rgba(0,0,0,0.05))' }} />
          
          {/* Header */}
          <text x="20" y="25" fontSize="10" fontWeight="900" fill="var(--primary)" fontFamily="var(--font-en)">AI MASTER SCHEDULE OPTIMIZER</text>
          <line x1="20" y1="35" x2="320" y2="35" stroke="rgba(24,79,91,0.1)" strokeWidth="1" />

          {/* Timeline Grid lines */}
          <line x1="120" y1="35" x2="120" y2="165" stroke="rgba(24,79,91,0.05)" strokeWidth="1" />
          <line x1="200" y1="35" x2="200" y2="165" stroke="rgba(24,79,91,0.05)" strokeWidth="1" />
          <line x1="280" y1="35" x2="280" y2="165" stroke="rgba(24,79,91,0.05)" strokeWidth="1" />

          {/* Gantt Blocks */}
          {/* Phase 1: Foundation */}
          <text x="20" y="60" fontSize="8" fontWeight="bold" fill="var(--text-muted)" fontFamily="var(--font-en)">FOUNDATION</text>
          <motion.rect x="100" y="52" width="60" height="12" rx="3" fill="var(--primary)" 
            animate={{ width: [60, 80, 60] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
          
          {/* Phase 2: Structural Framing */}
          <text x="20" y="90" fontSize="8" fontWeight="bold" fill="var(--text-muted)" fontFamily="var(--font-en)">STRUCTURAL</text>
          <motion.rect x="150" y="82" width="90" height="12" rx="3" fill="var(--secondary)" 
            animate={{ x: [150, 170, 150] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />

          {/* Phase 3: Mechanical & Plumbing */}
          <text x="20" y="120" fontSize="8" fontWeight="bold" fill="var(--text-muted)" fontFamily="var(--font-en)">MEP INSTALL</text>
          <motion.rect x="220" y="112" width="50" height="12" rx="3" fill="var(--primary)" 
            animate={{ width: [50, 75, 50] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />

          {/* Critical Path connection indicator */}
          <motion.path d="M 160,58 L 170,82 M 240,88 L 245,112" fill="none" stroke="red" strokeWidth="1" strokeDasharray="2 2"
            animate={{ opacity: [0.3, 1, 0.3] }} transition={pulseTransition} />

          {/* Live Progress Bar */}
          <rect x="20" y="150" width="300" height="6" rx="3" fill="rgba(24,79,91,0.1)" />
          <motion.rect x="20" y="150" width="180" height="6" rx="3" fill="#166534" 
            animate={{ width: [180, 220, 180] }} transition={{ duration: 5, repeat: Infinity }} />
          <text x="320" y="156" textAnchor="end" fontSize="8" fontWeight="bold" fill="#166534" fontFamily="var(--font-en)">78% ON TIME</text>
        </g>

        {/* Float icon overlay */}
        <motion.g transform="translate(310, 20)" animate={{ y: [0, -6, 0] }} transition={pulseTransition}>
          <circle cx="20" cy="20" r="18" fill="white" stroke="var(--secondary)" strokeWidth="1.5" style={{ filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.1))' }} />
          <path d="M 12,20 L 17,25 L 28,14" fill="none" stroke="#166534" strokeWidth="2.5" strokeLinecap="round" />
        </motion.g>
      </svg>
    </div>
  );
};

// Manufacturing Motion Illustration
export const ManufacturingIllustration = () => {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(202, 169, 76, 0.03)', borderRadius: '24px', padding: '2rem', border: '1px solid rgba(202, 169, 76, 0.08)', overflow: 'hidden' }}>
      <svg viewBox="0 0 400 300" style={{ width: '100%', height: '100%', maxWidth: '400px' }}>
        <defs>
          <pattern id="mfg-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(202, 169, 76, 0.03)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#mfg-grid)" rx="16" />

        {/* Factory Conveyor Line representation */}
        <line x1="50" y1="200" x2="350" y2="200" stroke="var(--primary)" strokeWidth="4" strokeLinecap="round" />
        <line x1="50" y1="208" x2="350" y2="208" stroke="var(--primary)" strokeWidth="1" strokeDasharray="6 6" />

        {/* Conveyor rollers rotating */}
        <motion.circle cx="70" cy="216" r="6" fill="none" stroke="var(--primary)" strokeWidth="1.5" animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
        <motion.circle cx="150" cy="216" r="6" fill="none" stroke="var(--primary)" strokeWidth="1.5" animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
        <motion.circle cx="230" cy="216" r="6" fill="none" stroke="var(--primary)" strokeWidth="1.5" animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
        <motion.circle cx="310" cy="216" r="6" fill="none" stroke="var(--primary)" strokeWidth="1.5" animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />

        {/* Manufacturing Goods floating on conveyor */}
        <g>
          {/* Item 1 */}
          <motion.g
            animate={{ x: [-20, 380] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 0 }}
          >
            <rect x="50" y="170" width="30" height="30" rx="4" fill="white" stroke="var(--primary)" strokeWidth="1.5" />
            <circle cx="65" cy="185" r="6" fill="rgba(202,169,76,0.1)" />
          </motion.g>
          
          {/* Item 2 */}
          <motion.g
            animate={{ x: [-20, 380] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2.6 }}
          >
            <rect x="50" y="170" width="30" height="30" rx="4" fill="white" stroke="var(--primary)" strokeWidth="1.5" />
            <rect x="60" y="180" width="10" height="10" fill="rgba(24,79,91,0.1)" />
          </motion.g>

          {/* Item 3 (faulty item being scanned and flagged) */}
          <motion.g
            animate={{ x: [-20, 380] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 5.3 }}
          >
            <rect x="50" y="170" width="30" height="30" rx="4" fill="white" stroke="var(--primary)" strokeWidth="1.5" />
            {/* Defect marker */}
            <line x1="60" y1="180" x2="70" y2="190" stroke="red" strokeWidth="2" />
            <line x1="70" y1="180" x2="60" y2="190" stroke="red" strokeWidth="2" />
          </motion.g>
        </g>

        {/* Scanner Head Node */}
        <g transform="translate(180, 50)">
          <rect width="40" height="30" rx="2" fill="var(--primary)" />
          {/* Scanning Beam */}
          <motion.polygon
            points="0,30 40,30 65,120 -25,120"
            fill="rgba(202, 169, 76, 0.15)"
            stroke="var(--secondary)"
            strokeWidth="1.5"
            strokeDasharray="2 2"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={pulseTransition}
          />
          <text x="20" y="18" textAnchor="middle" fontSize="6" fontWeight="bold" fill="white">AI VISION</text>
        </g>

        {/* Health Telemetry Dashboard */}
        <g transform="translate(240, 30)">
          <rect width="130" height="80" rx="6" fill="white" stroke="rgba(24,79,91,0.1)" strokeWidth="1" style={{ filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.05))' }} />
          <text x="10" y="18" fontSize="8" fontWeight="bold" fill="var(--primary)" fontFamily="var(--font-en)">ANOMALY ENGINE</text>
          
          {/* Live wave monitoring graph */}
          <motion.path
            d="M 15,50 Q 35,20 55,50 T 95,50 T 115,50"
            fill="none" stroke="var(--primary)" strokeWidth="1.5"
            animate={{
              d: [
                "M 15,50 Q 35,20 55,50 T 95,50 T 115,50",
                "M 15,50 Q 35,60 55,50 T 95,20 T 115,50",
                "M 15,50 Q 35,20 55,50 T 95,50 T 115,50"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <text x="10" y="70" fontSize="7" fill="#166534" fontWeight="bold" fontFamily="var(--font-en)">SYS HEALTH: 99.1%</text>
        </g>
      </svg>
    </div>
  );
};

// Government Motion Illustration
export const GovernmentIllustration = () => {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(24, 79, 91, 0.03)', borderRadius: '24px', padding: '2rem', border: '1px solid rgba(24, 79, 91, 0.08)', overflow: 'hidden' }}>
      <svg viewBox="0 0 400 300" style={{ width: '100%', height: '100%', maxWidth: '400px' }}>
        <defs>
          <pattern id="gov-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(24, 79, 91, 0.03)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#gov-grid)" rx="16" />

        {/* citizen flow lines to departments */}
        <path d="M 85,150 L 190,150" fill="none" stroke="var(--primary)" strokeWidth="2.5" />
        <path d="M 270,150 L 330,80" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M 270,150 L 330,150" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M 270,150 L 330,220" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeDasharray="3 3" />

        {/* Data transmission animation */}
        <motion.circle cx="85" cy="150" r="5" fill="var(--secondary)" animate={{ cx: [85, 190] }} transition={flowTransition(0)} />
        <motion.circle cx="270" cy="150" r="4" fill="var(--secondary)" animate={{ cx: [270, 330], cy: [150, 80] }} transition={flowTransition(0.4)} />
        <motion.circle cx="270" cy="150" r="4" fill="var(--secondary)" animate={{ cx: [270, 330] }} transition={flowTransition(1.2)} />
        <motion.circle cx="270" cy="150" r="4" fill="var(--secondary)" animate={{ cx: [270, 330], cy: [150, 220] }} transition={flowTransition(2)} />

        {/* Inbound Citizen Inquiry portal */}
        <g transform="translate(25, 105)">
          <rect width="60" height="90" rx="6" fill="white" stroke="rgba(24,79,91,0.1)" strokeWidth="1" style={{ filter: 'drop-shadow(0px 4px 10px rgba(0,0,0,0.05))' }} />
          <circle cx="30" cy="30" r="14" fill="rgba(24,79,91,0.06)" />
          <path d="M 24,38 C 24,32 36,32 36,38" fill="none" stroke="var(--primary)" strokeWidth="2" />
          <circle cx="30" cy="26" r="5" fill="var(--primary)" />
          <text x="30" y="65" textAnchor="middle" fontSize="8" fontWeight="bold" fill="var(--primary)" fontFamily="var(--font-en)">CITIZEN</text>
          <text x="30" y="75" textAnchor="middle" fontSize="7" fontWeight="bold" fill="var(--secondary)" fontFamily="var(--font-en)">REQUEST</text>
        </g>

        {/* Center Secure Sovereign processing agent */}
        <g transform="translate(190, 110)">
          <rect width="80" height="80" rx="8" fill="white" stroke="var(--primary)" strokeWidth="2" style={{ filter: 'drop-shadow(0px 6px 20px rgba(24,79,91,0.15))' }} />
          <motion.circle cx="40" cy="40" r="26" fill="none" stroke="var(--secondary)" strokeWidth="1.5" strokeDasharray="8 4" animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} />
          {/* Shield representation */}
          <path d="M 32,30 H 48 V 40 C 48,48 40,52 40,52 C 40,52 32,48 32,40 Z" fill="rgba(24,79,91,0.08)" stroke="var(--primary)" strokeWidth="2" />
          <text x="40" y="72" textAnchor="middle" fontSize="7" fontWeight="bold" fill="var(--primary)" fontFamily="var(--font-en)">SOVEREIGN AI</text>
        </g>

        {/* Output Departments */}
        <g transform="translate(320, 50)">
          <circle cx="20" cy="20" r="16" fill="white" stroke="rgba(24,79,91,0.1)" strokeWidth="1" style={{ filter: 'drop-shadow(0px 3px 6px rgba(0,0,0,0.05))' }} />
          <text x="20" y="24" textAnchor="middle" fontSize="11" fill="var(--primary)" fontWeight="bold">🏥</text>
        </g>
        <g transform="translate(320, 130)">
          <circle cx="20" cy="20" r="16" fill="white" stroke="rgba(24,79,91,0.1)" strokeWidth="1" style={{ filter: 'drop-shadow(0px 3px 6px rgba(0,0,0,0.05))' }} />
          <text x="20" y="24" textAnchor="middle" fontSize="11" fill="var(--primary)" fontWeight="bold">🏛️</text>
        </g>
        <g transform="translate(320, 200)">
          <circle cx="20" cy="20" r="16" fill="white" stroke="rgba(24,79,91,0.1)" strokeWidth="1" style={{ filter: 'drop-shadow(0px 3px 6px rgba(0,0,0,0.05))' }} />
          <text x="20" y="24" textAnchor="middle" fontSize="11" fill="var(--primary)" fontWeight="bold">⚖️</text>
        </g>
      </svg>
    </div>
  );
};

// Professional Services Motion Illustration
export const ProfessionalServicesIllustration = () => {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(202, 169, 76, 0.03)', borderRadius: '24px', padding: '2rem', border: '1px solid rgba(202, 169, 76, 0.08)', overflow: 'hidden' }}>
      <svg viewBox="0 0 400 300" style={{ width: '100%', height: '100%', maxWidth: '400px' }}>
        <defs>
          <pattern id="ps-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(202, 169, 76, 0.03)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#ps-grid)" rx="16" />

        {/* Contract sheet graphic */}
        <g transform="translate(50, 40)">
          <rect width="180" height="220" rx="8" fill="white" stroke="var(--primary)" strokeWidth="1.5" style={{ filter: 'drop-shadow(0px 6px 15px rgba(0,0,0,0.08))' }} />
          
          {/* Fake lines of text */}
          <line x1="20" y1="30" x2="160" y2="30" stroke="rgba(24,79,91,0.2)" strokeWidth="4" strokeLinecap="round" />
          <line x1="20" y1="50" x2="130" y2="50" stroke="rgba(24,79,91,0.2)" strokeWidth="4" strokeLinecap="round" />
          
          {/* Highlighted text line (risky clause) */}
          <motion.line x1="20" y1="70" x2="150" y2="70" stroke="rgba(202, 169, 76, 0.2)" strokeWidth="8" strokeLinecap="round" 
            animate={{ opacity: [0.3, 1, 0.3] }} transition={pulseTransition} />
          <line x1="20" y1="70" x2="150" y2="70" stroke="var(--secondary)" strokeWidth="3" strokeLinecap="round" />

          <line x1="20" y1="90" x2="160" y2="90" stroke="rgba(24,79,91,0.2)" strokeWidth="4" strokeLinecap="round" />
          <line x1="20" y1="110" x2="100" y2="110" stroke="rgba(24,79,91,0.2)" strokeWidth="4" strokeLinecap="round" />

          {/* Another highlight */}
          <motion.line x1="20" y1="130" x2="120" y2="130" stroke="rgba(202, 169, 76, 0.2)" strokeWidth="8" strokeLinecap="round"
            animate={{ opacity: [1, 0.3, 1] }} transition={pulseTransition} />
          <line x1="20" y1="130" x2="120" y2="130" stroke="var(--secondary)" strokeWidth="3" strokeLinecap="round" />

          <line x1="20" y1="150" x2="150" y2="150" stroke="rgba(24,79,91,0.2)" strokeWidth="4" strokeLinecap="round" />
          <line x1="20" y1="170" x2="160" y2="170" stroke="rgba(24,79,91,0.2)" strokeWidth="4" strokeLinecap="round" />
          <line x1="20" y1="190" x2="80" y2="190" stroke="rgba(24,79,91,0.2)" strokeWidth="4" strokeLinecap="round" />

          {/* Laser scanning beam */}
          <motion.line x1="10" y1="20" x2="170" y2="20" stroke="var(--primary)" strokeWidth="2" 
            animate={{ y: [10, 200, 10] }} transition={scanTransition} />
        </g>

        {/* Connected AI analysis feedback cards */}
        <g transform="translate(260, 60)">
          <motion.g animate={{ x: [0, 10, 0] }} transition={pulseTransition}>
            <rect width="100" height="50" rx="4" fill="white" stroke="rgba(24,79,91,0.1)" strokeWidth="1" style={{ filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.05))' }} />
            <text x="10" y="20" fontSize="7" fontWeight="bold" fill="red" fontFamily="var(--font-en)">RISK IDENTIFIED</text>
            <text x="10" y="35" fontSize="8" fontWeight="bold" fill="var(--primary)" fontFamily="var(--font-en)">Liability Clause v3</text>
          </motion.g>
        </g>

        <g transform="translate(260, 160)">
          <motion.g animate={{ x: [0, 10, 0] }} transition={{ ...pulseTransition, delay: 1 }}>
            <rect width="100" height="50" rx="4" fill="white" stroke="rgba(24,79,91,0.1)" strokeWidth="1" style={{ filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.05))' }} />
            <text x="10" y="20" fontSize="7" fontWeight="bold" fill="#166534" fontFamily="var(--font-en)">COMPLIANCE PASS</text>
            <text x="10" y="35" fontSize="8" fontWeight="bold" fill="var(--primary)" fontFamily="var(--font-en)">GCC Regulatory Sync</text>
          </motion.g>
        </g>

        {/* Connector lines from text to audit cards */}
        <path d="M 200,110 L 260,85" fill="none" stroke="red" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M 170,170 L 260,185" fill="none" stroke="#166534" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
    </div>
  );
};
