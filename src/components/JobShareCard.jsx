import React, { forwardRef } from 'react';
import { MapPin, Briefcase, Clock, Globe, ArrowRight } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { parseJobDescription } from '../utils/jobFormatter';

const ACCENT_COLORS = ['#CAA94C', '#184F5B', '#2A7A8C'];
const NUMBER_LABELS = ['01', '02', '03'];
const NUMBER_TEXT_COLORS = ['#184F5B', '#FFFFFF', '#FFFFFF'];

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

  // Top 3, full text — no truncation
  const highlights = rawHighlights.slice(0, 3);

  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://tadbeertt.com';
  const jobApplyUrl = job.id ? `${siteUrl}/careers?jobId=${job.id}` : `${siteUrl}/careers`;
  const instagramUrl = 'https://www.instagram.com/tadbeertt/';
  const linkedinUrl  = 'https://www.linkedin.com/company/tadbeertransformations';

  return (
    <div
      ref={ref}
      style={{
        width: '1080px',
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

      {/* ── Background Decoration ── */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(202,169,76,0.1) 0%, transparent 65%)', transform: 'translate(20%, -20%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(24,79,91,0.07) 0%, transparent 65%)', transform: 'translate(-20%, 20%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(24,79,91,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(24,79,91,0.018) 1px, transparent 1px)', backgroundSize: '48px 48px', zIndex: 0, pointerEvents: 'none' }} />

      {/* ── Main Content ── */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', padding: '48px 68px 44px 68px', boxSizing: 'border-box', gap: '0px' }}>

        {/* ══ 1. HEADER ROW ══ */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          {/* Logo — direct img, no transform */}
          <img
            src="/logo.png"
            alt="Tadbeer Transformations"
            style={{ height: '64px', width: 'auto', objectFit: 'contain', display: 'block' }}
            crossOrigin="anonymous"
          />
          {/* We're Hiring Badge */}
          <div style={{
            background: 'linear-gradient(135deg, #184F5B 0%, #0D2F36 100%)',
            color: '#FFFFFF',
            padding: '12px 30px',
            borderRadius: '50px',
            fontSize: '1.1rem',
            fontWeight: '800',
            letterSpacing: '1.8px',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '9px',
            boxShadow: '0 6px 20px rgba(24,79,91,0.22)',
            border: '1.5px solid rgba(202,169,76,0.4)',
            flexShrink: 0
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#CAA94C', display: 'inline-block', boxShadow: '0 0 8px #CAA94C' }} />
            We're Hiring
          </div>
        </div>

        {/* ══ 2. EYEBROW + JOB TITLE ══ */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '0.95rem', color: '#CAA94C', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '10px' }}>
            ✦ Career Opportunity
          </div>
          <h1 style={{ fontSize: '3.6rem', fontWeight: '900', color: '#184F5B', lineHeight: '1.1', margin: '0 0 20px 0', letterSpacing: '-0.5px' }}>
            {job.title}
          </h1>

          {/* Meta Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {[
              { icon: <MapPin size={20} color="#CAA94C" />, label: job.location || 'Muscat, Oman' },
              { icon: <Briefcase size={20} color="#CAA94C" />, label: job.department || 'Operations' },
              job.type && { icon: <Clock size={20} color="#CAA94C" />, label: job.type }
            ].filter(Boolean).map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                background: '#FFFFFF', padding: '10px 20px', borderRadius: '12px',
                border: '1px solid rgba(24,79,91,0.1)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                fontSize: '1.15rem', color: '#1C1B17', fontWeight: '700'
              }}>
                {item.icon} <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ══ 3. OVERVIEW ══ */}
        {overview && (
          <p style={{
            fontSize: '1.3rem', color: '#4A4A48', lineHeight: '1.65',
            margin: '0 0 24px 0', fontWeight: '500'
          }}>
            {overview}
          </p>
        )}

        {/* ══ DIVIDER ══ */}
        <div style={{ width: '100%', height: '1.5px', background: 'linear-gradient(90deg, #CAA94C, rgba(202,169,76,0.08))', marginBottom: '22px' }} />

        {/* ══ 4. HIGHLIGHTS ══ */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{ fontSize: '0.9rem', color: '#184F5B', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2.5px', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '24px', height: '4px', backgroundColor: '#CAA94C', borderRadius: '2px', display: 'inline-block' }} />
            What You'll Do
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {highlights.map((point, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '18px',
                  background: '#FFFFFF',
                  padding: '18px 22px',
                  borderRadius: '14px',
                  border: `1.5px solid rgba(${index === 0 ? '202,169,76' : index === 1 ? '24,79,91' : '42,122,140'},0.15)`,
                  boxShadow: '0 3px 12px rgba(0,0,0,0.04)',
                  borderLeft: `5px solid ${ACCENT_COLORS[index]}`
                }}
              >
                <div style={{
                  width: '40px', height: '40px', minWidth: '40px', borderRadius: '10px',
                  backgroundColor: ACCENT_COLORS[index],
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: NUMBER_TEXT_COLORS[index],
                  fontSize: '1rem', fontWeight: '900', letterSpacing: '0.5px'
                }}>
                  {NUMBER_LABELS[index]}
                </div>
                <div style={{ fontSize: '1.3rem', color: '#1C1B17', fontWeight: '600', lineHeight: '1.55', flex: 1 }}>
                  {point}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══ 5. QR CODES CTA BLOCK ══ */}
        <div style={{
          background: 'linear-gradient(135deg, #184F5B 0%, #0D2F36 100%)',
          borderRadius: '22px',
          padding: '28px 34px',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 14px 36px rgba(24,79,91,0.28)',
          border: '2px solid rgba(202,169,76,0.45)'
        }}>
          {/* Inner glow */}
          <div style={{ position: 'absolute', top: '-30%', right: '-5%', width: '280px', height: '280px', background: 'radial-gradient(circle, rgba(202,169,76,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* CTA Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', borderBottom: '1px solid rgba(202,169,76,0.22)', paddingBottom: '14px', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <div style={{ fontSize: '0.85rem', color: '#CAA94C', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Globe size={16} color="#CAA94C" /> Online Career Application
                </div>
                <h3 style={{ fontSize: '1.7rem', fontWeight: '900', margin: 0, color: '#FFFFFF', letterSpacing: '-0.3px' }}>
                  Apply Directly On Our Website
                </h3>
              </div>
              <div style={{ background: '#CAA94C', color: '#184F5B', padding: '9px 20px', borderRadius: '10px', fontWeight: '900', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                tadbeertt.com/careers <ArrowRight size={17} color="#184F5B" />
              </div>
            </div>

            {/* 3 QR Codes */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px' }}>

              {/* Apply */}
              <div style={{ background: '#FFFFFF', borderRadius: '14px', padding: '14px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ fontSize: '0.88rem', fontWeight: '800', color: '#184F5B', marginBottom: '9px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Globe size={15} color="#184F5B" /> Apply Online
                </div>
                <div style={{ padding: '6px', background: '#FAF9F6', borderRadius: '10px', border: '2px solid rgba(202,169,76,0.45)', marginBottom: '7px' }}>
                  <QRCodeSVG value={jobApplyUrl} size={140} fgColor="#184F5B" bgColor="#FAF9F6" level="H" marginSize={1} />
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#CAA94C' }}>Scan to Apply</div>
              </div>

              {/* Instagram */}
              <div style={{ background: '#FFFFFF', borderRadius: '14px', padding: '14px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ fontSize: '0.88rem', fontWeight: '800', color: '#184F5B', marginBottom: '9px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                  Instagram
                </div>
                <div style={{ padding: '6px', background: '#FAF9F6', borderRadius: '10px', border: '2px solid rgba(202,169,76,0.45)', marginBottom: '7px' }}>
                  <QRCodeSVG value={instagramUrl} size={140} fgColor="#184F5B" bgColor="#FAF9F6" level="H" marginSize={1} />
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#CAA94C' }}>@tadbeertt</div>
              </div>

              {/* LinkedIn */}
              <div style={{ background: '#FFFFFF', borderRadius: '14px', padding: '14px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ fontSize: '0.88rem', fontWeight: '800', color: '#184F5B', marginBottom: '9px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                  LinkedIn
                </div>
                <div style={{ padding: '6px', background: '#FAF9F6', borderRadius: '10px', border: '2px solid rgba(202,169,76,0.45)', marginBottom: '7px' }}>
                  <QRCodeSVG value={linkedinUrl} size={140} fgColor="#184F5B" bgColor="#FAF9F6" level="H" marginSize={1} />
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#CAA94C' }}>Tadbeer Transformations</div>
              </div>

            </div>
          </div>
        </div>

        {/* ══ 6. FOOTER ══ */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(24,79,91,0.1)', paddingTop: '16px', marginTop: '18px' }}>
          <div>
            <div style={{ fontSize: '1rem', color: '#184F5B', fontWeight: '800' }}>Tadbeer Transformations</div>
            <div style={{ fontSize: '0.88rem', color: '#6A6A68', marginTop: '2px' }}>System & Scale Partner · Muscat, Sultanate of Oman</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '1rem', color: '#CAA94C', fontWeight: '800', letterSpacing: '1px' }}>#TADBEER_CAREERS</div>
            <div style={{ fontSize: '0.88rem', color: '#6A6A68', marginTop: '2px' }}>www.tadbeertt.com</div>
          </div>
        </div>

      </div>
    </div>
  );
});

export default JobShareCard;
