import React, { forwardRef } from 'react';
import Logo from './Logo';
import { MapPin, Briefcase, ChevronRight } from 'lucide-react';

const JobShareCard = forwardRef(({ job }, ref) => {
  if (!job) return null;

  return (
    <div 
      ref={ref}
      style={{
        width: '1080px',
        height: '1080px',
        backgroundColor: '#FAF9F6', // Off-white/cream background
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Inter', sans-serif",
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* Background Decorators */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(202,169,76,0.15) 0%, rgba(250,249,246,0) 70%)', transform: 'translate(30%, -30%)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(24,79,91,0.1) 0%, rgba(250,249,246,0) 70%)', transform: 'translate(-30%, 30%)' }} />
      
      {/* Grid pattern overlay for tech/strategy feel */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(24,79,91,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(24,79,91,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 1 }} />

      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%', padding: '80px' }}>
        
        {/* Header - Logo */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ transform: 'scale(1.8)', transformOrigin: 'top left' }}>
            <Logo />
          </div>
          <div style={{ background: 'var(--primary, #184F5B)', color: '#fff', padding: '12px 32px', borderRadius: '50px', fontSize: '1.2rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>
            We're Hiring
          </div>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '40px' }}>
          <h1 style={{ fontSize: '5.5rem', fontWeight: '800', color: 'var(--primary, #184F5B)', lineHeight: '1.1', margin: '0 0 40px 0', letterSpacing: '-1px' }}>
            {job.title}
          </h1>
          
          <div style={{ display: 'flex', gap: '40px', marginBottom: '60px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.8rem', color: 'var(--text-main, #1C1B17)', fontWeight: '500', background: 'white', padding: '20px 32px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <MapPin size={36} color="var(--secondary, #CAA94C)" />
              {job.location}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.8rem', color: 'var(--text-main, #1C1B17)', fontWeight: '500', background: 'white', padding: '20px 32px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <Briefcase size={36} color="var(--secondary, #CAA94C)" />
              {job.department}
            </div>
          </div>

          <p style={{ fontSize: '2rem', color: 'var(--text-muted, #4A4A48)', lineHeight: '1.6', margin: '0 0 40px 0', maxWidth: '900px', display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {job.description}
          </p>

          <div style={{ marginTop: 'auto' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary, #184F5B)', fontWeight: '700', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px' }}>Key Requirements</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {job.requirements?.slice(0, 3).map((req, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', fontSize: '1.6rem', color: 'var(--text-main, #1C1B17)' }}>
                  <ChevronRight size={28} color="var(--secondary, #CAA94C)" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '2px solid rgba(24,79,91,0.1)', paddingTop: '40px', marginTop: '60px' }}>
          <div>
            <div style={{ fontSize: '1.4rem', color: 'var(--text-muted, #4A4A48)', marginBottom: '8px' }}>Apply online at:</div>
            <div style={{ fontSize: '2rem', color: 'var(--primary, #184F5B)', fontWeight: '700' }}>tadbeer.com/careers</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '1.4rem', color: 'var(--text-muted, #4A4A48)', marginBottom: '8px' }}>Transforming operations in Oman</div>
            <div style={{ fontSize: '1.6rem', color: 'var(--secondary, #CAA94C)', fontWeight: '600', letterSpacing: '1px' }}>#TADBEER_CAREERS</div>
          </div>
        </div>

      </div>
    </div>
  );
});

export default JobShareCard;
