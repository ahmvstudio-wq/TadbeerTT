import React, { forwardRef } from 'react';
import Logo from './Logo';
import { MapPin, Briefcase, CheckCircle2, Clock, Globe, Sparkles, ArrowRight } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { parseJobDescription } from '../utils/jobFormatter';

// Social Icon SVGs
const InstagramIcon = ({ size = 20, color = '#E1306C' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size = 20, color = '#0A66C2' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const JobShareCard = forwardRef(({ job }, ref) => {
  if (!job) return null;

  const { overview } = parseJobDescription(job.description);

  // Take top 3 key requirements max to keep composition bold, clean, and spacious
  const keyPoints = (job.requirements && job.requirements.length > 0)
    ? job.requirements.slice(0, 3).map(r => r.replace(/\*\*(.*?)\*\*/g, '$1').trim())
    : [
        'Drive high-impact operational & digital initiatives across Oman.',
        'Collaborate directly with cross-functional management teams.',
        'Deliver end-to-end execution and measurable business results.'
      ];

  // Format URLs
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://tadbeertt.com';
  const jobApplyUrl = job.id ? `${siteUrl}/careers?jobId=${job.id}` : `${siteUrl}/careers`;
  const instagramUrl = 'https://www.instagram.com/tadbeertt/';
  const linkedinUrl = 'https://www.linkedin.com/company/tadbeertransformations';

  return (
    <div 
      ref={ref}
      style={{
        width: '1200px',
        height: '1450px',
        backgroundColor: '#FAF9F6', // Off-white/cream background
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Inter', sans-serif",
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
        color: '#1C1B17'
      }}
    >
      {/* Top Accent Gradient Bar */}
      <div style={{ width: '100%', height: '14px', background: 'linear-gradient(90deg, #184F5B 0%, #CAA94C 50%, #184F5B 100%)' }} />

      {/* Decorative Radial Lights */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(202,169,76,0.14) 0%, rgba(250,249,246,0) 70%)', transform: 'translate(25%, -25%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '850px', height: '850px', background: 'radial-gradient(circle, rgba(24,79,91,0.1) 0%, rgba(250,249,246,0) 70%)', transform: 'translate(-25%, 25%)', pointerEvents: 'none' }} />
      
      {/* Precision Grid Overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(24,79,91,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(24,79,91,0.025) 1px, transparent 1px)', backgroundSize: '45px 45px', zIndex: 1, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%', padding: '60px 75px 50px 75px', boxSizing: 'border-box' }}>
        
        {/* 1. Header: Brand Logo & We're Hiring Status Badge */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '45px' }}>
          <div style={{ transform: 'scale(1.75)', transformOrigin: 'top left' }}>
            <Logo />
          </div>
          <div style={{ 
            background: 'linear-gradient(135deg, #184F5B 0%, #0F353D 100%)', 
            color: '#FFFFFF', 
            padding: '14px 38px', 
            borderRadius: '50px', 
            fontSize: '1.3rem', 
            fontWeight: '800', 
            letterSpacing: '1.5px', 
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 8px 20px rgba(24,79,91,0.18)',
            border: '1.5px solid rgba(202,169,76,0.35)'
          }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#CAA94C', display: 'inline-block', boxShadow: '0 0 10px #CAA94C' }}></span>
            We're Hiring
          </div>
        </div>

        {/* 2. Hero Header Section */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ fontSize: '1.25rem', color: '#CAA94C', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2.5px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Sparkles size={22} color="#CAA94C" /> Career Opportunity
          </div>
          
          <h1 style={{ fontSize: '4.4rem', fontWeight: '900', color: '#184F5B', lineHeight: '1.12', margin: '0 0 28px 0', letterSpacing: '-1px' }}>
            {job.title}
          </h1>
          
          {/* Metadata Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '1.4rem', color: '#1C1B17', fontWeight: '700', background: '#FFFFFF', padding: '14px 28px', borderRadius: '16px', border: '1px solid rgba(24,79,91,0.12)', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
              <MapPin size={26} color="#CAA94C" />
              <span>{job.location || 'Muscat, Oman'}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '1.4rem', color: '#1C1B17', fontWeight: '700', background: '#FFFFFF', padding: '14px 28px', borderRadius: '16px', border: '1px solid rgba(24,79,91,0.12)', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
              <Briefcase size={26} color="#CAA94C" />
              <span>{job.department || 'Operations'}</span>
            </div>
            {job.type && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '1.4rem', color: '#1C1B17', fontWeight: '700', background: '#FFFFFF', padding: '14px 28px', borderRadius: '16px', border: '1px solid rgba(24,79,91,0.12)', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
                <Clock size={26} color="#CAA94C" />
                <span>{job.type}</span>
              </div>
            )}
          </div>
        </div>

        {/* Short Role Summary */}
        {overview && (
          <p style={{ fontSize: '1.65rem', color: '#4A4A48', lineHeight: '1.6', margin: '0 0 35px 0', fontWeight: '500', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {overview}
          </p>
        )}

        {/* 3. Streamlined 2-3 Highlight Cards */}
        <div style={{ marginBottom: '45px' }}>
          <h2 style={{ fontSize: '1.35rem', color: '#184F5B', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '24px', height: '4px', backgroundColor: '#CAA94C', borderRadius: '2px', display: 'inline-block' }}></span>
            Key Role Highlights
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {keyPoints.map((point, index) => (
              <div 
                key={index}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '22px', 
                  background: '#FFFFFF', 
                  padding: '24px 30px', 
                  borderRadius: '20px', 
                  border: '1.5px solid rgba(24,79,91,0.1)', 
                  boxShadow: '0 6px 20px rgba(0,0,0,0.03)' 
                }}
              >
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '14px', 
                  backgroundColor: 'rgba(202,169,76,0.15)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  flexShrink: 0 
                }}>
                  <CheckCircle2 size={30} color="#CAA94C" />
                </div>
                <div style={{ fontSize: '1.6rem', color: '#1C1B17', fontWeight: '600', lineHeight: '1.45', flex: 1 }}>
                  {point}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Large & Prominent QR Codes & Apply Section */}
        <div style={{ 
          marginTop: 'auto', 
          background: 'linear-gradient(135deg, #184F5B 0%, #0F353D 100%)', 
          borderRadius: '26px', 
          padding: '36px 42px', 
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 16px 40px rgba(24,79,91,0.25)',
          border: '2.5px solid #CAA94C'
        }}>
          {/* Subtle Inner Glow */}
          <div style={{ position: 'absolute', top: '-40%', right: '-10%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(202,169,76,0.25) 0%, rgba(24,79,91,0) 70%)', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 2 }}>
            
            {/* Header Banner */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', borderBottom: '1px solid rgba(202,169,76,0.3)', paddingBottom: '18px' }}>
              <div>
                <div style={{ fontSize: '1.15rem', color: '#CAA94C', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Globe size={22} color="#CAA94C" /> Online Career Application
                </div>
                <h3 style={{ fontSize: '2.3rem', fontWeight: '900', margin: 0, color: '#FFFFFF', letterSpacing: '-0.5px' }}>
                  Apply Directly On Our Website
                </h3>
              </div>
              
              <div style={{ background: '#CAA94C', color: '#184F5B', padding: '12px 28px', borderRadius: '14px', fontWeight: '900', fontSize: '1.4rem', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                tadbeertt.com/careers <ArrowRight size={22} color="#184F5B" />
              </div>
            </div>

            {/* 3 LARGE QR CODES GRID */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '22px' }}>
              
              {/* QR 1: Apply Online */}
              <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', color: '#1C1B17', boxShadow: '0 8px 24px rgba(0,0,0,0.18)' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#184F5B', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Globe size={20} color="#184F5B" /> Apply Online
                </div>
                <div style={{ padding: '8px', background: '#FAF9F6', borderRadius: '14px', border: '2px solid rgba(202,169,76,0.4)', marginBottom: '10px' }}>
                  <QRCodeSVG value={jobApplyUrl} size={145} fgColor="#184F5B" bgColor="#FAF9F6" level="H" marginSize={1} />
                </div>
                <div style={{ fontSize: '1rem', fontWeight: '800', color: '#CAA94C' }}>Scan to Apply</div>
              </div>

              {/* QR 2: Instagram */}
              <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', color: '#1C1B17', boxShadow: '0 8px 24px rgba(0,0,0,0.18)' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#184F5B', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <InstagramIcon size={20} color="#E1306C" /> Instagram
                </div>
                <div style={{ padding: '8px', background: '#FAF9F6', borderRadius: '14px', border: '2px solid rgba(202,169,76,0.4)', marginBottom: '10px' }}>
                  <QRCodeSVG value={instagramUrl} size={145} fgColor="#184F5B" bgColor="#FAF9F6" level="H" marginSize={1} />
                </div>
                <div style={{ fontSize: '1rem', fontWeight: '800', color: '#CAA94C' }}>@tadbeertt</div>
              </div>

              {/* QR 3: LinkedIn */}
              <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', color: '#1C1B17', boxShadow: '0 8px 24px rgba(0,0,0,0.18)' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#184F5B', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <LinkedinIcon size={20} color="#0A66C2" /> LinkedIn
                </div>
                <div style={{ padding: '8px', background: '#FAF9F6', borderRadius: '14px', border: '2px solid rgba(202,169,76,0.4)', marginBottom: '10px' }}>
                  <QRCodeSVG value={linkedinUrl} size={145} fgColor="#184F5B" bgColor="#FAF9F6" level="H" marginSize={1} />
                </div>
                <div style={{ fontSize: '1rem', fontWeight: '800', color: '#CAA94C' }}>Tadbeer Transformations</div>
              </div>

            </div>

          </div>
        </div>

        {/* 5. Footer Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1.5px solid rgba(24,79,91,0.12)', paddingTop: '22px', marginTop: '25px' }}>
          <div>
            <div style={{ fontSize: '1.25rem', color: '#184F5B', fontWeight: '800' }}>Tadbeer Transformations</div>
            <div style={{ fontSize: '1.1rem', color: '#6A6A68', marginTop: '2px' }}>System & Scale Partner | Muscat, Sultanate of Oman</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '1.25rem', color: '#CAA94C', fontWeight: '800', letterSpacing: '1px' }}>#TADBEER_CAREERS</div>
            <div style={{ fontSize: '1.1rem', color: '#6A6A68', marginTop: '2px' }}>www.tadbeertt.com</div>
          </div>
        </div>

      </div>
    </div>
  );
});

export default JobShareCard;
