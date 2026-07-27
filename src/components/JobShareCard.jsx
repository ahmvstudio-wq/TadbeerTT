import React, { forwardRef } from 'react';
import Logo from './Logo';
import { MapPin, Briefcase, ChevronRight, CheckCircle2, Clock, Globe, Sparkles } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { parseJobDescription } from '../utils/jobFormatter';

// Social Icon SVGs
const InstagramIcon = ({ size = 16, color = '#E1306C' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size = 16, color = '#0A66C2' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const JobShareCard = forwardRef(({ job }, ref) => {
  if (!job) return null;

  const { overview, bullets: descBullets } = parseJobDescription(job.description);

  // Format job share URL
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://tadbeertt.com';
  const jobApplyUrl = job.id ? `${siteUrl}/careers?jobId=${job.id}` : `${siteUrl}/careers`;
  const instagramUrl = 'https://www.instagram.com/tadbeertt/';
  const linkedinUrl = 'https://www.linkedin.com/company/tadbeertransformations';

  return (
    <div 
      ref={ref}
      style={{
        width: '1240px',
        height: '1754px', // Standard A4 Aspect Ratio (1:1.4145) at high-res 150 DPI
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
      <div style={{ width: '100%', height: '10px', background: 'linear-gradient(90deg, #184F5B 0%, #CAA94C 50%, #184F5B 100%)' }} />

      {/* Decorative Background Accents */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '650px', height: '650px', background: 'radial-gradient(circle, rgba(202,169,76,0.12) 0%, rgba(250,249,246,0) 70%)', transform: 'translate(25%, -25%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(24,79,91,0.08) 0%, rgba(250,249,246,0) 70%)', transform: 'translate(-25%, 25%)', pointerEvents: 'none' }} />
      
      {/* Subtle Precision Grid Texture */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(24,79,91,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(24,79,91,0.025) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 1, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%', padding: '50px 70px 40px 70px', boxSizing: 'border-box' }}>
        
        {/* 1. Header - Brand Logo & Hiring Status Badge */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '35px' }}>
          <div style={{ transform: 'scale(1.6)', transformOrigin: 'top left' }}>
            <Logo />
          </div>
          <div style={{ 
            background: 'linear-gradient(135deg, #184F5B 0%, #0F353D 100%)', 
            color: '#FFFFFF', 
            padding: '12px 30px', 
            borderRadius: '50px', 
            fontSize: '1.15rem', 
            fontWeight: '700', 
            letterSpacing: '1.5px', 
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 6px 16px rgba(24,79,91,0.15)',
            border: '1px solid rgba(202,169,76,0.3)'
          }}>
            <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#CAA94C', display: 'inline-block' }}></span>
            We're Hiring
          </div>
        </div>

        {/* 2. Hero Section: Job Title & Meta Cards */}
        <div style={{ marginBottom: '30px' }}>
          <div style={{ fontSize: '1.1rem', color: '#CAA94C', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={18} color="#CAA94C" /> Career Opportunity
          </div>
          
          <h1 style={{ fontSize: '3.6rem', fontWeight: '800', color: '#184F5B', lineHeight: '1.15', margin: '0 0 25px 0', letterSpacing: '-0.5px' }}>
            {job.title}
          </h1>
          
          {/* Badges: Location / Department / Employment Type */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.3rem', color: '#1C1B17', fontWeight: '600', background: '#FFFFFF', padding: '12px 24px', borderRadius: '14px', border: '1px solid rgba(24,79,91,0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
              <MapPin size={24} color="#CAA94C" />
              <span>{job.location || 'Muscat, Oman'}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.3rem', color: '#1C1B17', fontWeight: '600', background: '#FFFFFF', padding: '12px 24px', borderRadius: '14px', border: '1px solid rgba(24,79,91,0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
              <Briefcase size={24} color="#CAA94C" />
              <span>{job.department || 'Operations'}</span>
            </div>
            {job.type && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.3rem', color: '#1C1B17', fontWeight: '600', background: '#FFFFFF', padding: '12px 24px', borderRadius: '14px', border: '1px solid rgba(24,79,91,0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                <Clock size={24} color="#CAA94C" />
                <span>{job.type}</span>
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: '100%', height: '1.5px', backgroundColor: 'rgba(24,79,91,0.12)', marginBottom: '30px' }} />

        {/* 3. Main Content Body with Justified Alignment */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '28px' }}>
          
          {/* Section: About the Role */}
          <div>
            <h2 style={{ fontSize: '1.3rem', color: '#184F5B', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '20px', height: '4px', backgroundColor: '#CAA94C', borderRadius: '2px', display: 'inline-block' }}></span>
              About the Role
            </h2>
            
            {overview && (
              <p style={{ 
                fontSize: '1.45rem', 
                color: '#3A3A38', 
                lineHeight: '1.65', 
                margin: '0 0 14px 0', 
                textAlign: 'justify', 
                textJustify: 'inter-word',
                fontWeight: '400'
              }}>
                {overview}
              </p>
            )}

            {/* Parsed Role Description Bullet Items */}
            {descBullets && descBullets.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {descBullets.slice(0, 5).map((bullet, i) => (
                  <div key={i} style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: '14px', 
                    fontSize: '1.35rem', 
                    color: '#2D3748',
                    background: '#FFFFFF',
                    padding: '14px 20px',
                    borderRadius: '12px',
                    border: '1px solid rgba(24,79,91,0.08)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                  }}>
                    <ChevronRight size={24} color="#CAA94C" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ textAlign: 'justify', textJustify: 'inter-word', lineHeight: '1.5', width: '100%' }}>{bullet}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Section: Key Requirements & Qualifications */}
          {job.requirements && job.requirements.length > 0 && (
            <div>
              <h2 style={{ fontSize: '1.3rem', color: '#184F5B', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '20px', height: '4px', backgroundColor: '#CAA94C', borderRadius: '2px', display: 'inline-block' }}></span>
                Key Requirements & Qualifications
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {job.requirements.map((req, i) => (
                  <div 
                    key={i} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '14px', 
                      fontSize: '1.35rem', 
                      color: '#1C1B17',
                      background: '#FFFFFF',
                      padding: '14px 20px',
                      borderRadius: '12px',
                      border: '1px solid rgba(24,79,91,0.08)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                    }}
                  >
                    <CheckCircle2 size={24} color="#CAA94C" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ textAlign: 'justify', textJustify: 'inter-word', lineHeight: '1.5', width: '100%' }}>
                      {req.replace(/\*\*(.*?)\*\*/g, '$1')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* 4. CTA & QR Code Container Card */}
        <div style={{ 
          marginTop: '25px', 
          background: 'linear-gradient(135deg, #184F5B 0%, #0F353D 100%)', 
          borderRadius: '20px', 
          padding: '30px 36px', 
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 12px 30px rgba(24,79,91,0.22)',
          border: '2px solid #CAA94C'
        }}>
          {/* Inner Light Glow */}
          <div style={{ position: 'absolute', top: '-40%', right: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(202,169,76,0.25) 0%, rgba(24,79,91,0) 70%)', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 2 }}>
            
            {/* Header Banner */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px', borderBottom: '1px solid rgba(202,169,76,0.3)', paddingBottom: '16px' }}>
              <div>
                <div style={{ fontSize: '1.1rem', color: '#CAA94C', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Globe size={20} color="#CAA94C" /> Online Careers Portal
                </div>
                <h3 style={{ fontSize: '2.1rem', fontWeight: '800', margin: 0, color: '#FFFFFF', letterSpacing: '-0.5px' }}>
                  Apply Directly On Our Website
                </h3>
              </div>
              <div style={{ background: '#CAA94C', color: '#184F5B', padding: '10px 22px', borderRadius: '12px', fontWeight: '800', fontSize: '1.25rem', letterSpacing: '0.5px' }}>
                tadbeertt.com/careers
              </div>
            </div>

            {/* 3 QR Codes Section */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
              
              {/* QR 1: Apply on Website */}
              <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', color: '#1C1B17', boxShadow: '0 6px 16px rgba(0,0,0,0.15)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#184F5B', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Globe size={16} color="#184F5B" /> Apply Online
                </div>
                <div style={{ padding: '6px', background: '#FAF9F6', borderRadius: '10px', border: '1px solid rgba(202,169,76,0.4)', marginBottom: '8px' }}>
                  <QRCodeSVG value={jobApplyUrl} size={105} fgColor="#184F5B" bgColor="#FAF9F6" level="H" marginSize={1} />
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#CAA94C' }}>Scan to Apply</div>
              </div>

              {/* QR 2: Instagram */}
              <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', color: '#1C1B17', boxShadow: '0 6px 16px rgba(0,0,0,0.15)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#184F5B', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <InstagramIcon size={16} color="#E1306C" /> Instagram
                </div>
                <div style={{ padding: '6px', background: '#FAF9F6', borderRadius: '10px', border: '1px solid rgba(202,169,76,0.4)', marginBottom: '8px' }}>
                  <QRCodeSVG value={instagramUrl} size={105} fgColor="#184F5B" bgColor="#FAF9F6" level="H" marginSize={1} />
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#CAA94C' }}>@tadbeertt</div>
              </div>

              {/* QR 3: LinkedIn */}
              <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', color: '#1C1B17', boxShadow: '0 6px 16px rgba(0,0,0,0.15)' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#184F5B', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <LinkedinIcon size={16} color="#0A66C2" /> LinkedIn
                </div>
                <div style={{ padding: '6px', background: '#FAF9F6', borderRadius: '10px', border: '1px solid rgba(202,169,76,0.4)', marginBottom: '8px' }}>
                  <QRCodeSVG value={linkedinUrl} size={105} fgColor="#184F5B" bgColor="#FAF9F6" level="H" marginSize={1} />
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#CAA94C' }}>Tadbeer Transformations</div>
              </div>

            </div>

          </div>
        </div>

        {/* 5. Footer Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1.5px solid rgba(24,79,91,0.12)', paddingTop: '20px', marginTop: '20px' }}>
          <div>
            <div style={{ fontSize: '1.2rem', color: '#184F5B', fontWeight: '700' }}>Tadbeer Transformations</div>
            <div style={{ fontSize: '1.05rem', color: '#6A6A68', marginTop: '2px' }}>System & Scale Partner | Muscat, Sultanate of Oman</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '1.2rem', color: '#CAA94C', fontWeight: '700', letterSpacing: '1px' }}>#TADBEER_CAREERS</div>
            <div style={{ fontSize: '1.05rem', color: '#6A6A68', marginTop: '2px' }}>www.tadbeertt.com</div>
          </div>
        </div>

      </div>
    </div>
  );
});

export default JobShareCard;
