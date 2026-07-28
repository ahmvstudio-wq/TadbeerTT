import React, { forwardRef } from 'react';
import Logo from './Logo';
import { MapPin, Briefcase, Clock, Globe, ArrowRight } from 'lucide-react';
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

const ACCENT_COLORS = ['#CAA94C', '#184F5B', '#2A7A8C'];
const NUMBER_LABELS = ['01', '02', '03'];

const JobShareCard = forwardRef(({ job }, ref) => {
  if (!job) return null;

  const { overview, bullets } = parseJobDescription(job.description);

  // Prefer description bullets as "what you'll do" highlights.
  // Fall back to requirements if no bullets, then generic defaults.
  const rawHighlights = bullets.length > 0
    ? bullets
    : (job.requirements && job.requirements.length > 0
        ? job.requirements.map(r => r.replace(/\*\*(.*?)\*\*/g, '$1').trim())
        : [
            'Drive high-impact operational & digital initiatives across Oman.',
            'Collaborate directly with cross-functional management teams.',
            'Deliver end-to-end execution with measurable results.'
          ]);

  // Pick best 3 — truncate each to ~90 chars so cards stay uniform height
  const highlights = rawHighlights.slice(0, 3).map(h =>
    h.length > 90 ? h.substring(0, 88) + '…' : h
  );

  // URLs
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://tadbeertt.com';
  const jobApplyUrl = job.id ? `${siteUrl}/careers?jobId=${job.id}` : `${siteUrl}/careers`;
  const instagramUrl = 'https://www.instagram.com/tadbeertt/';
  const linkedinUrl  = 'https://www.linkedin.com/company/tadbeertransformations';

  return (
    <div
      ref={ref}
      style={{
        width: '1200px',
        height: '1380px',
        backgroundColor: '#FAF9F6',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
        color: '#1C1B17'
      }}
    >
      {/* ── Top Accent Bar ── */}
      <div style={{ width: '100%', height: '10px', background: 'linear-gradient(90deg, #184F5B 0%, #CAA94C 45%, #2A7A8C 75%, #184F5B 100%)', flexShrink: 0 }} />

      {/* ── Decorative Background Glows ── */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '650px', height: '650px', background: 'radial-gradient(circle, rgba(202,169,76,0.12) 0%, transparent 65%)', transform: 'translate(20%, -20%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(24,79,91,0.08) 0%, transparent 65%)', transform: 'translate(-20%, 20%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(24,79,91,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(24,79,91,0.02) 1px, transparent 1px)', backgroundSize: '48px 48px', zIndex: 1, pointerEvents: 'none' }} />

      {/* ── Content Layer ── */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', flex: 1, padding: '52px 72px 44px 72px', boxSizing: 'border-box', gap: 0 }}>

        {/* ── 1. HEADER: Logo + Badge ── */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '42px' }}>
          <div style={{ transform: 'scale(1.7)', transformOrigin: 'top left' }}>
            <Logo />
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #184F5B 0%, #0D2F36 100%)',
            color: '#FFFFFF',
            padding: '13px 34px',
            borderRadius: '50px',
            fontSize: '1.2rem',
            fontWeight: '800',
            letterSpacing: '1.8px',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 8px 24px rgba(24,79,91,0.2)',
            border: '1.5px solid rgba(202,169,76,0.4)'
          }}>
            <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#CAA94C', display: 'inline-block', boxShadow: '0 0 8px #CAA94C' }}></span>
            We're Hiring
          </div>
        </div>

        {/* ── 2. JOB TITLE + META ── */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '1.1rem', color: '#CAA94C', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '10px' }}>
            ✦ Career Opportunity
          </div>
          <h1 style={{ fontSize: '4rem', fontWeight: '900', color: '#184F5B', lineHeight: '1.1', margin: '0 0 22px 0', letterSpacing: '-0.5px' }}>
            {job.title}
          </h1>

          {/* Meta Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
            {[
              { icon: <MapPin size={22} color="#CAA94C" />, label: job.location || 'Muscat, Oman' },
              { icon: <Briefcase size={22} color="#CAA94C" />, label: job.department || 'Operations' },
              job.type && { icon: <Clock size={22} color="#CAA94C" />, label: job.type }
            ].filter(Boolean).map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                background: '#FFFFFF', padding: '12px 24px', borderRadius: '14px',
                border: '1px solid rgba(24,79,91,0.1)', boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                fontSize: '1.3rem', color: '#1C1B17', fontWeight: '700'
              }}>
                {item.icon} <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. OVERVIEW SENTENCE ── */}
        {overview && (
          <p style={{
            fontSize: '1.5rem', color: '#4A4A48', lineHeight: '1.65',
            margin: '0 0 30px 0', fontWeight: '500',
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'
          }}>
            {overview}
          </p>
        )}

        {/* ── DIVIDER ── */}
        <div style={{ width: '100%', height: '1.5px', background: 'linear-gradient(90deg, #CAA94C, rgba(202,169,76,0.1))', marginBottom: '28px' }} />

        {/* ── 4. DESCRIPTION HIGHLIGHTS ── */}
        <div style={{ marginBottom: '36px' }}>
          <div style={{ fontSize: '1.05rem', color: '#184F5B', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2.5px', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '28px', height: '4px', backgroundColor: '#CAA94C', borderRadius: '2px', display: 'inline-block' }}></span>
            What You'll Do
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {highlights.map((point, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  background: '#FFFFFF',
                  padding: '22px 28px',
                  borderRadius: '18px',
                  border: `1.5px solid rgba(${index === 0 ? '202,169,76' : index === 1 ? '24,79,91' : '42,122,140'},0.15)`,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                  borderLeft: `5px solid ${ACCENT_COLORS[index]}`
                }}
              >
                {/* Number Badge */}
                <div style={{
                  width: '46px', height: '46px', borderRadius: '12px',
                  backgroundColor: ACCENT_COLORS[index],
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, color: index === 0 ? '#184F5B' : '#FFFFFF',
                  fontSize: '1.15rem', fontWeight: '900', letterSpacing: '0.5px'
                }}>
                  {NUMBER_LABELS[index]}
                </div>
                <div style={{ fontSize: '1.5rem', color: '#1C1B17', fontWeight: '600', lineHeight: '1.5', flex: 1 }}>
                  {point}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 5. QR CODES + CTA FOOTER ── */}
        <div style={{
          marginTop: 'auto',
          background: 'linear-gradient(135deg, #184F5B 0%, #0D2F36 100%)',
          borderRadius: '24px',
          padding: '32px 38px',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 16px 40px rgba(24,79,91,0.28)',
          border: '2px solid rgba(202,169,76,0.5)'
        }}>
          {/* Inner glow */}
          <div style={{ position: 'absolute', top: '-30%', right: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(202,169,76,0.22) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 2 }}>
            {/* CTA Header Row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px', borderBottom: '1px solid rgba(202,169,76,0.25)', paddingBottom: '16px' }}>
              <div>
                <div style={{ fontSize: '1rem', color: '#CAA94C', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <Globe size={18} color="#CAA94C" /> Online Career Application
                </div>
                <h3 style={{ fontSize: '2rem', fontWeight: '900', margin: 0, color: '#FFFFFF', letterSpacing: '-0.3px' }}>
                  Apply Directly On Our Website
                </h3>
              </div>
              <div style={{ background: '#CAA94C', color: '#184F5B', padding: '11px 24px', borderRadius: '12px', fontWeight: '900', fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                tadbeertt.com/careers <ArrowRight size={20} color="#184F5B" />
              </div>
            </div>

            {/* 3 QR Codes */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '18px' }}>

              {/* Apply */}
              <div style={{ background: '#FFFFFF', borderRadius: '18px', padding: '18px 14px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}>
                <div style={{ fontSize: '1rem', fontWeight: '800', color: '#184F5B', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <Globe size={18} color="#184F5B" /> Apply Online
                </div>
                <div style={{ padding: '8px', background: '#FAF9F6', borderRadius: '12px', border: '2px solid rgba(202,169,76,0.5)', marginBottom: '8px' }}>
                  <QRCodeSVG value={jobApplyUrl} size={148} fgColor="#184F5B" bgColor="#FAF9F6" level="H" marginSize={1} />
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: '800', color: '#CAA94C' }}>Scan to Apply</div>
              </div>

              {/* Instagram */}
              <div style={{ background: '#FFFFFF', borderRadius: '18px', padding: '18px 14px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}>
                <div style={{ fontSize: '1rem', fontWeight: '800', color: '#184F5B', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  Instagram
                </div>
                <div style={{ padding: '8px', background: '#FAF9F6', borderRadius: '12px', border: '2px solid rgba(202,169,76,0.5)', marginBottom: '8px' }}>
                  <QRCodeSVG value={instagramUrl} size={148} fgColor="#184F5B" bgColor="#FAF9F6" level="H" marginSize={1} />
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: '800', color: '#CAA94C' }}>@tadbeertt</div>
              </div>

              {/* LinkedIn */}
              <div style={{ background: '#FFFFFF', borderRadius: '18px', padding: '18px 14px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}>
                <div style={{ fontSize: '1rem', fontWeight: '800', color: '#184F5B', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  LinkedIn
                </div>
                <div style={{ padding: '8px', background: '#FAF9F6', borderRadius: '12px', border: '2px solid rgba(202,169,76,0.5)', marginBottom: '8px' }}>
                  <QRCodeSVG value={linkedinUrl} size={148} fgColor="#184F5B" bgColor="#FAF9F6" level="H" marginSize={1} />
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: '800', color: '#CAA94C' }}>Tadbeer Transformations</div>
              </div>

            </div>
          </div>
        </div>

        {/* ── 6. FOOTER ── */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(24,79,91,0.1)', paddingTop: '18px', marginTop: '20px' }}>
          <div>
            <div style={{ fontSize: '1.15rem', color: '#184F5B', fontWeight: '800' }}>Tadbeer Transformations</div>
            <div style={{ fontSize: '1rem', color: '#6A6A68', marginTop: '2px' }}>System & Scale Partner · Muscat, Sultanate of Oman</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '1.15rem', color: '#CAA94C', fontWeight: '800', letterSpacing: '1px' }}>#TADBEER_CAREERS</div>
            <div style={{ fontSize: '1rem', color: '#6A6A68', marginTop: '2px' }}>www.tadbeertt.com</div>
          </div>
        </div>

      </div>
    </div>
  );
});

export default JobShareCard;
