import React, { forwardRef } from 'react';
import Logo from './Logo';
import { MapPin, Briefcase, ChevronRight, CheckCircle2, Clock, Globe, ArrowRight, Sparkles } from 'lucide-react';

const JobShareCard = forwardRef(({ job }, ref) => {
  if (!job) return null;

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
      <div style={{ width: '100%', height: '12px', background: 'linear-gradient(90deg, #184F5B 0%, #CAA94C 50%, #184F5B 100%)' }} />

      {/* Decorative Radial Background Lights */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(202,169,76,0.12) 0%, rgba(250,249,246,0) 70%)', transform: 'translate(25%, -25%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '900px', height: '900px', background: 'radial-gradient(circle, rgba(24,79,91,0.08) 0%, rgba(250,249,246,0) 70%)', transform: 'translate(-25%, 25%)', pointerEvents: 'none' }} />
      
      {/* Precision Grid Texture Overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(24,79,91,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(24,79,91,0.025) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 1, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%', padding: '70px 80px 60px 80px', boxSizing: 'border-box' }}>
        
        {/* Header - Brand & Hiring Status */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px' }}>
          <div style={{ transform: 'scale(1.9)', transformOrigin: 'top left' }}>
            <Logo />
          </div>
          <div style={{ 
            background: 'linear-gradient(135deg, #184F5B 0%, #0F353D 100%)', 
            color: '#FFFFFF', 
            padding: '14px 36px', 
            borderRadius: '50px', 
            fontSize: '1.25rem', 
            fontWeight: '700', 
            letterSpacing: '1.5px', 
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 8px 20px rgba(24,79,91,0.18)',
            border: '1px solid rgba(202,169,76,0.3)'
          }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#CAA94C', display: 'inline-block' }}></span>
            We're Hiring
          </div>
        </div>

        {/* Hero Section: Job Title & Meta Cards */}
        <div style={{ marginBottom: '45px' }}>
          <div style={{ fontSize: '1.2rem', color: '#CAA94C', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={20} color="#CAA94C" /> Career Opportunity
          </div>
          
          <h1 style={{ fontSize: '4.2rem', fontWeight: '800', color: '#184F5B', lineHeight: '1.15', margin: '0 0 35px 0', letterSpacing: '-0.5px' }}>
            {job.title}
          </h1>
          
          {/* Location / Department / Employment Type Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '1.45rem', color: '#1C1B17', fontWeight: '600', background: '#FFFFFF', padding: '16px 28px', borderRadius: '16px', border: '1px solid rgba(24,79,91,0.1)', boxShadow: '0 6px 18px rgba(0,0,0,0.03)' }}>
              <MapPin size={28} color="#CAA94C" />
              <span>{job.location || 'Muscat, Oman'}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '1.45rem', color: '#1C1B17', fontWeight: '600', background: '#FFFFFF', padding: '16px 28px', borderRadius: '16px', border: '1px solid rgba(24,79,91,0.1)', boxShadow: '0 6px 18px rgba(0,0,0,0.03)' }}>
              <Briefcase size={28} color="#CAA94C" />
              <span>{job.department || 'Operations'}</span>
            </div>
            {job.type && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '1.45rem', color: '#1C1B17', fontWeight: '600', background: '#FFFFFF', padding: '16px 28px', borderRadius: '16px', border: '1px solid rgba(24,79,91,0.1)', boxShadow: '0 6px 18px rgba(0,0,0,0.03)' }}>
                <Clock size={28} color="#CAA94C" />
                <span>{job.type}</span>
              </div>
            )}
          </div>
        </div>

        {/* Divider Line */}
        <div style={{ width: '100%', height: '2px', backgroundColor: 'rgba(24,79,91,0.12)', marginBottom: '45px' }} />

        {/* Body Content with Justified Alignment */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '40px' }}>
          
          {/* Section 1: Role Overview */}
          <div>
            <h2 style={{ fontSize: '1.4rem', color: '#184F5B', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '24px', height: '4px', backgroundColor: '#CAA94C', borderRadius: '2px', display: 'inline-block' }}></span>
              About the Role
            </h2>
            <p style={{ 
              fontSize: '1.65rem', 
              color: '#3A3A38', 
              lineHeight: '1.75', 
              margin: 0, 
              textAlign: 'justify', 
              textJustify: 'inter-word',
              fontWeight: '400'
            }}>
              {job.description}
            </p>
          </div>

          {/* Section 2: Key Requirements & Qualifications */}
          {job.requirements && job.requirements.length > 0 && (
            <div>
              <h2 style={{ fontSize: '1.4rem', color: '#184F5B', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '24px', height: '4px', backgroundColor: '#CAA94C', borderRadius: '2px', display: 'inline-block' }}></span>
                Key Requirements & Qualifications
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {job.requirements.map((req, i) => (
                  <div 
                    key={i} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '18px', 
                      fontSize: '1.55rem', 
                      color: '#1C1B17',
                      background: '#FFFFFF',
                      padding: '20px 24px',
                      borderRadius: '14px',
                      border: '1px solid rgba(24,79,91,0.08)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
                    }}
                  >
                    <CheckCircle2 size={30} color="#CAA94C" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ textAlign: 'justify', textJustify: 'inter-word', lineHeight: '1.55', width: '100%' }}>{req}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 3: Why Tadbeer */}
          <div style={{ background: 'rgba(24,79,91,0.04)', padding: '28px 32px', borderRadius: '18px', borderLeft: '6px solid #CAA94C' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#184F5B', fontWeight: '700', margin: '0 0 10px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Why Join Tadbeer Transformations?
            </h3>
            <p style={{ fontSize: '1.45rem', color: '#4A4A48', margin: 0, lineHeight: '1.65', textAlign: 'justify', textJustify: 'inter-word' }}>
              At Tadbeer, our engagement does not end when strategy is presented—it closes when real operational results are fully embedded. Join a dedicated team shaping business excellence across Oman.
            </p>
          </div>

        </div>

        {/* CTA Card Section: APPLY ON OUR WEBSITE */}
        <div style={{ 
          marginTop: 'auto', 
          background: 'linear-gradient(135deg, #184F5B 0%, #0F353D 100%)', 
          borderRadius: '24px', 
          padding: '40px 48px', 
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 16px 36px rgba(24,79,91,0.25)',
          border: '2px solid #CAA94C'
        }}>
          {/* Subtle Background Glow in CTA */}
          <div style={{ position: 'absolute', top: '-50%', right: '-10%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(202,169,76,0.25) 0%, rgba(24,79,91,0) 70%)', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '1.2rem', color: '#CAA94C', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Globe size={22} color="#CAA94C" /> Online Job Application
              </div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0 0 12px 0', color: '#FFFFFF', letterSpacing: '-0.5px' }}>
                Apply Directly On Our Website
              </h3>
              <p style={{ fontSize: '1.45rem', color: 'rgba(255,255,255,0.85)', margin: 0, textAlign: 'justify', textJustify: 'inter-word', maxWidth: '680px', lineHeight: '1.5' }}>
                Scan or visit our official careers page to submit your resume and complete your application online.
              </p>
            </div>

            {/* CTA Button Badge */}
            <div style={{ 
              background: '#CAA94C', 
              color: '#184F5B', 
              padding: '22px 36px', 
              borderRadius: '16px', 
              fontWeight: '800', 
              fontSize: '1.6rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              flexShrink: 0,
              textDecoration: 'none'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.65rem' }}>
                Visit & Apply <ArrowRight size={26} color="#184F5B" />
              </div>
              <div style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0F353D', letterSpacing: '0.5px' }}>
                tadbeertt.com/careers
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px solid rgba(24,79,91,0.12)', paddingTop: '28px', marginTop: '35px' }}>
          <div>
            <div style={{ fontSize: '1.3rem', color: '#184F5B', fontWeight: '700' }}>Tadbeer Transformations</div>
            <div style={{ fontSize: '1.15rem', color: '#6A6A68', marginTop: '4px' }}>System & Scale Partner | Muscat, Sultanate of Oman</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '1.35rem', color: '#CAA94C', fontWeight: '700', letterSpacing: '1px' }}>#TADBEER_CAREERS</div>
            <div style={{ fontSize: '1.15rem', color: '#6A6A68', marginTop: '4px' }}>www.tadbeertt.com</div>
          </div>
        </div>

      </div>
    </div>
  );
});

export default JobShareCard;
