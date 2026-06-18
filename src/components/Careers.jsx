import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchJobs } from '../supabaseService';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform';

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadJobs = async () => {
      setLoading(true);
      const data = await fetchJobs();
      setJobs(data);
      setLoading(false);
    };
    loadJobs();
  }, []);

  const toggleJob = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getApplyUrl = (job) => {
    if (job.formUrl) return job.formUrl;
    return `${GOOGLE_FORM_URL}?entry.POSITION=${encodeURIComponent(job.title)}`;
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
          <span className="section-label">Careers | الوظائف</span>
          <h1 className="section-title" style={{ fontSize: '3rem' }}>Build the Future<br />of Business in Oman.</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '600px', margin: '1rem auto 0' }}>
            Join a team of globally experienced consultants, technologists, and transformation architects.
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
            <span className="section-label">Open Positions</span>
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

                        <a 
                          href={getApplyUrl(job)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="job-apply-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Apply Now →
                        </a>
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
            <span className="section-label">Life at Tadbeer</span>
            <h2 className="section-title" style={{ fontSize: '2.25rem' }}>Where Impact Meets Purpose.</h2>
          </motion.div>

          <div className="culture-grid">
            {[
              {
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80&auto=format',
                title: 'Collaborative Environment',
                desc: 'Work alongside experts from across the globe.'
              },
              {
                image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&q=80&auto=format',
                title: 'Continuous Growth',
                desc: 'Learn cutting-edge technologies every day.'
              },
              {
                image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&q=80&auto=format',
                title: 'Real Impact',
                desc: 'Transform businesses across the GCC.'
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
    </>
  );
};

export default Careers;
