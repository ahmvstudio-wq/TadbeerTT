import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchJobs, createLead } from '../supabaseService';
import { Share2, CheckCircle2, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import * as htmlToImage from 'html-to-image';
import JobShareCard from './JobShareCard';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform';

const Careers = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialJobId = searchParams.get('jobId');

  const [jobs, setJobs] = useState([]);
  const [expandedId, setExpandedId] = useState(initialJobId || null);
  const [loading, setLoading] = useState(true);
  const [isSharing, setIsSharing] = useState(false);
  const [shareTargetJob, setShareTargetJob] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);
  
  // Application Modal State
  const [applyingJob, setApplyingJob] = useState(null);
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    location: '',
    experience: '',
    resumeLink: '',
    linkedin: '', 
    message: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const jobsRef = useRef({});
  const shareCardRef = useRef(null);

  useEffect(() => {
    const loadJobs = async () => {
      setLoading(true);
      const data = await fetchJobs();
      setJobs(data);
      setLoading(false);
      
      if (initialJobId) {
        setTimeout(() => {
          if (jobsRef.current[initialJobId]) {
            jobsRef.current[initialJobId].scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 500);
      }
    };
    loadJobs();
  }, [initialJobId]);

  const toggleJob = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleApplyClick = (e, job) => {
    e.stopPropagation();
    if (job.formUrl) {
      // If there's an explicit external form URL set in the admin, use it as a fallback
      window.open(job.formUrl, '_blank');
      return;
    }
    setApplyingJob(job);
    setSubmitSuccess(false);
    setSubmitError('');
    setFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      location: '',
      experience: '',
      resumeLink: '',
      linkedin: '', 
      message: '' 
    });
  };

  const handleApplicationSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const leadData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: `${formData.location} | ${formData.experience} Exp`, // Mapping location and experience
      industry: formData.linkedin || 'Not provided', // Mapping LinkedIn
      revenue: formData.resumeLink, // Mapping Resume Link
      resource: `Job Application: ${applyingJob.title}`,
      source_url: `${window.location.origin}${window.location.pathname}?jobId=${applyingJob.id}`,
      bottleneck: formData.message // Mapping Tadbeer specific question
    };

    const { error } = await createLead(leadData);
    setIsSubmitting(false);

    if (error) {
      setSubmitError('Something went wrong. Please try again.');
    } else {
      setSubmitSuccess(true);
      // Dispatch event to sync admin panel in real-time if it's open
      window.dispatchEvent(new Event('lead-submitted'));
    }
  };

  const handleShare = async (e, job) => {
    e.stopPropagation();
    if (isSharing) return;
    
    setIsSharing(true);
    setShareTargetJob(job);
    setGeneratedImage(null);
    
    // Wait for the hidden card to render and load fonts/images
    setTimeout(async () => {
      try {
        if (!shareCardRef.current) throw new Error("Card ref not found");
        
        const dataUrl = await htmlToImage.toPng(shareCardRef.current, {
          pixelRatio: 2,
          backgroundColor: '#FAF9F6'
        });
        
        const blob = await (await fetch(dataUrl)).blob();
        if (!blob) throw new Error("Blob generation failed");
        
        const shareUrl = `${window.location.origin}${window.location.pathname}?jobId=${job.id}`;
        const file = new File([blob], `tadbeer-job-${job.title.replace(/\s+/g, '-').toLowerCase()}.png`, { type: 'image/png' });
        
        if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: `${job.title} at Tadbeer`,
            text: `Check out this open position for ${job.title} at Tadbeer.\n\nApply here:`,
            url: shareUrl,
            files: [file]
          });
          setIsSharing(false);
          setShareTargetJob(null);
        } else {
          // Fallback: Show modal with the image
          setGeneratedImage({ url: dataUrl, blob: blob, shareUrl: shareUrl, jobTitle: job.title });
          setIsSharing(false);
          // Keep shareTargetJob active for the modal to stay open
        }
      } catch (err) {
        console.error('Error generating or sharing image', err);
        // Ultimate fallback to just copy link
        const shareUrl = `${window.location.origin}${window.location.pathname}?jobId=${job.id}`;
        navigator.clipboard.writeText(shareUrl);
        alert(`Link copied to clipboard! (Image generation failed: ${err.message})`);
        setIsSharing(false);
        setShareTargetJob(null);
      }
    }, 400); // Increased timeout to 400ms to allow Logo image to load
  };

  const copyImageToClipboard = async () => {
    if (!generatedImage?.blob) return;
    try {
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': generatedImage.blob })
      ]);
      alert("Image copied to clipboard! You can paste it into WhatsApp or LinkedIn.");
    } catch (err) {
      console.error("Failed to copy image", err);
      alert("Failed to copy image. Please try downloading it instead.");
    }
  };

  const downloadImage = () => {
    if (!generatedImage?.url) return;
    const a = document.createElement('a');
    a.href = generatedImage.url;
    a.download = `tadbeer-job-${generatedImage.jobTitle.replace(/\s+/g, '-').toLowerCase()}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const copyLinkOnly = () => {
    if (!generatedImage?.shareUrl) return;
    navigator.clipboard.writeText(generatedImage.shareUrl);
    alert("Link copied!");
  };

  return (
    <>
      {/* Hero */}
      <section className="careers-hero">
        <div className="careers-hero-bg">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=70&auto=format"
            alt=""
            aria-hidden="true"
          />
        </div>
        <motion.div 
          className="careers-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          <h1 className="section-title" style={{ fontSize: '3rem' }}>Join the Team That Stays to the End.</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '600px', margin: '1rem auto 0' }}>
            At Tadbeer, the engagement does not close when the strategy is presented. It closes when the results are embedded. If that is the standard of work you want to be part of, there may be a role here for you.
          </p>
        </motion.div>
      </section>

      {/* Job Listings */}
      <section style={{ padding: '5rem 5%', background: 'var(--bg)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            
            <h2 className="section-title" style={{ fontSize: '2.25rem' }}>Current Opportunities</h2>
          </motion.div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
              <div className="spinner" style={{ border: '3px solid rgba(24,79,91,0.1)', borderTop: '3px solid var(--primary)', borderRadius: '50%', width: '30px', height: '30px', animation: 'spin 1s linear infinite', margin: '0 auto 1rem' }}></div>
              <p>Loading opportunities...</p>
              <style>{`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          ) : jobs.length === 0 ? (
            <div className="no-jobs">
              <p>No open positions right now. Check back soon!</p>
            </div>
          ) : (
            <div className="careers-grid">
              {jobs.map((job, index) => (
                <motion.div 
                  key={job.id}
                  ref={(el) => (jobsRef.current[job.id] = el)}
                  className="job-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => toggleJob(job.id)}
                >
                  <div className="job-card-header">
                    <h3 className="job-title">{job.title}</h3>
                    <span className="job-badge">{job.type}</span>
                  </div>
                  <div className="job-meta">
                    <span>📍 {job.location}</span>
                    <span>🏢 {job.department}</span>
                  </div>

                  <AnimatePresence>
                    {expandedId === job.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p className="job-description">{job.description}</p>
                        
                        <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--primary)', marginBottom: '0.5rem' }}>Requirements:</h4>
                        <ul className="job-requirements">
                          {job.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>

                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                          <button 
                            className="job-apply-btn"
                            onClick={(e) => handleApplyClick(e, job)}
                            style={{ flex: 1, textAlign: 'center', border: 'none', cursor: 'pointer', fontSize: '1rem', fontWeight: '600' }}
                          >
                            Apply Now →
                          </button>
                          
                          <button
                            onClick={(e) => handleShare(e, job)}
                            disabled={isSharing}
                            className="btn btn-secondary"
                            style={{ 
                              padding: '0.8rem 1.5rem', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center', 
                              gap: '0.5rem',
                              background: 'transparent',
                              border: '1.5px solid var(--secondary)',
                              color: 'var(--primary)',
                              borderRadius: '8px',
                              cursor: isSharing ? 'not-allowed' : 'pointer',
                              fontWeight: '600',
                              opacity: isSharing ? 0.7 : 1
                            }}
                          >
                            {isSharing && shareTargetJob?.id === job.id ? (
                              <><div className="spinner" style={{ width: 16, height: 16, border: '2px solid rgba(202,169,76,0.2)', borderTop: '2px solid var(--secondary)', borderRadius: '50%', animation: 'spin 1s linear infinite' }} /> Generating...</>
                            ) : (
                              <><Share2 size={18} /> Share</>
                            )}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {expandedId !== job.id && (
                    <p style={{ fontSize: '0.85rem', color: 'var(--secondary)', fontWeight: '600', marginTop: '0.5rem' }}>
                      Click to view details →
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Culture Section */}
      <section className="careers-culture">
        <div className="container">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            
            <h2 className="section-title" style={{ fontSize: '2.25rem' }}>A Practice Built on Completion, Not Delivery.</h2>
          </motion.div>

          <div className="culture-grid">
            {[
              {
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80&auto=format',
                title: 'Work That Goes the Distance',
                desc: 'Every engagement has a clear standard of completion. The team is accountable to it.'
              },
              {
                image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&q=80&auto=format',
                title: 'Genuine Development',
                desc: 'Working across strategy, technology, and people — in a market that requires understanding all three at once.'
              },
              {
                image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&q=80&auto=format',
                title: 'Real Operational Impact',
                desc: 'The work changes how organisations in Oman function. That is a meaningful thing to be part of.'
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                className="culture-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <img src={card.image} alt={card.title} loading="lazy" />
                <div className="culture-card-overlay">
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden Share Card */}
      {shareTargetJob && !generatedImage && (
        <div style={{ position: 'fixed', top: '-2000px', left: '-2000px', pointerEvents: 'none' }}>
          <JobShareCard job={shareTargetJob} ref={shareCardRef} />
        </div>
      )}

      {/* Share Result Modal (Fallback for Desktop) */}
      <AnimatePresence>
        {generatedImage && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setGeneratedImage(null);
              setShareTargetJob(null);
            }}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{ background: 'var(--bg)', padding: '2rem', borderRadius: '16px', maxWidth: '600px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
            >
              <div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Share Job Post</h3>
                <p style={{ color: 'var(--text-muted)' }}>We've generated a brochure for this position. You can copy the image or download it to share on social media.</p>
              </div>

              <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '8px', display: 'flex', justifyContent: 'center' }}>
                <img src={generatedImage.url} alt="Job Brochure" style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <button 
                  onClick={copyImageToClipboard}
                  className="btn btn-secondary"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem' }}
                >
                  <Share2 size={18} /> Copy Image
                </button>
                <button 
                  onClick={downloadImage}
                  className="btn btn-primary"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem' }}
                >
                  Download Image
                </button>
                <button 
                  onClick={copyLinkOnly}
                  className="btn"
                  style={{ gridColumn: '1 / -1', background: 'transparent', border: '1px solid #ddd', color: 'var(--text-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem' }}
                >
                  Copy Link Only
                </button>
              </div>

              <button 
                onClick={() => {
                  setGeneratedImage(null);
                  setShareTargetJob(null);
                }}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', textDecoration: 'underline', cursor: 'pointer', marginTop: '0.5rem' }}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Application Modal */}
      <AnimatePresence>
        {applyingJob && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !isSubmitting && !submitSuccess && setApplyingJob(null)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', overflowY: 'auto' }}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{ background: 'var(--bg)', padding: '2.5rem', borderRadius: '16px', maxWidth: '500px', width: '100%', position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', margin: 'auto' }}
            >
              <button 
                onClick={() => setApplyingJob(null)}
                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                disabled={isSubmitting}
              >
                <X size={24} />
              </button>

              {submitSuccess ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <CheckCircle2 size={60} color="var(--secondary)" style={{ margin: '0 auto 1rem' }} />
                  <h3 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '1rem' }}>Application Submitted!</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                    Thank you for applying for the <strong>{applyingJob.title}</strong> position. Our team will review your details and get back to you soon.
                  </p>
                  <button className="btn btn-primary" onClick={() => setApplyingJob(null)} style={{ width: '100%' }}>
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>Apply for {applyingJob.title}</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.9rem' }}>Join the team that stays to the end. Please fill out your details below.</p>

                  <form onSubmit={handleApplicationSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Full Name *</label>
                        <input 
                          type="text" 
                          required 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          style={{ width: '100%', padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--border)', background: '#fff' }}
                          placeholder="e.g. Ahmed Al Harthy"
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Email Address *</label>
                        <input 
                          type="email" 
                          required 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          style={{ width: '100%', padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--border)', background: '#fff' }}
                          placeholder="ahmed@example.com"
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Phone Number *</label>
                        <input 
                          type="tel" 
                          required 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          style={{ width: '100%', padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--border)', background: '#fff' }}
                          placeholder="+968 9XXXXXXX"
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Current Location *</label>
                        <input 
                          type="text" 
                          required 
                          value={formData.location}
                          onChange={(e) => setFormData({...formData, location: e.target.value})}
                          style={{ width: '100%', padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--border)', background: '#fff' }}
                          placeholder="e.g. Muscat, Oman"
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Years of Experience *</label>
                        <select 
                          required 
                          value={formData.experience}
                          onChange={(e) => setFormData({...formData, experience: e.target.value})}
                          style={{ width: '100%', padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--border)', background: '#fff', color: formData.experience ? 'var(--text-main)' : '#999' }}
                        >
                          <option value="" disabled>Select experience...</option>
                          <option value="0-1 Years">0-1 Years</option>
                          <option value="2-4 Years">2-4 Years</option>
                          <option value="5-7 Years">5-7 Years</option>
                          <option value="8+ Years">8+ Years</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-main)' }}>LinkedIn Profile (Optional)</label>
                        <input 
                          type="url" 
                          value={formData.linkedin}
                          onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
                          style={{ width: '100%', padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--border)', background: '#fff' }}
                          placeholder="https://linkedin.com/in/..."
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Link to Resume / CV *</label>
                      <input 
                        type="url" 
                        required 
                        value={formData.resumeLink}
                        onChange={(e) => setFormData({...formData, resumeLink: e.target.value})}
                        style={{ width: '100%', padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--border)', background: '#fff' }}
                        placeholder="Google Drive, Dropbox, or OneDrive link..."
                      />
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.35rem', fontStyle: 'italic' }}>Please ensure the link is set to "Anyone with the link can view".</p>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                        At Tadbeer, we believe in embedding results, not just delivering strategy. Briefly describe a time you drove a project to completion despite operational roadblocks. (Optional)
                      </label>
                      <textarea 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        style={{ width: '100%', padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--border)', background: '#fff', minHeight: '120px', resize: 'vertical' }}
                        placeholder="Your response..."
                      />
                    </div>

                    {submitError && (
                      <p style={{ color: '#dc2626', fontSize: '0.85rem', margin: 0 }}>{submitError}</p>
                    )}

                    <button 
                      type="submit" 
                      className="btn btn-primary" 
                      disabled={isSubmitting}
                      style={{ marginTop: '0.5rem', padding: '1rem', width: '100%', opacity: isSubmitting ? 0.7 : 1 }}
                    >
                      {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Careers;
