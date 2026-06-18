import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, AlertTriangle, Shield, Calendar, Layers, Cpu, HelpCircle, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const IndustryPageTemplate = ({ 
  industryName, 
  heroSubtitle, 
  heroDescription, 
  illustration: Illustration,
  challenges = [], 
  solutions = [], 
  metrics = [],
  ctaTitle, 
  ctaDescription 
}) => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "How does Tadbeer handle data privacy and security?",
      a: "All our digital transformation integrations and pipelines can be deployed on-premises or within secure local GCC cloud infrastructure (such as Ooredoo, Equinix, or AWS Bahrain/UAE) to ensure 100% compliance with regional data residency guidelines, GDPR, and government security mandates."
    },
    {
      q: "What is the typical timeline for enterprise transformation systems?",
      a: "A standard system integration and digitalization deployment takes 4 to 8 weeks. This includes initial database connections, custom portal setup, multi-lingual automation testing, and final Go-Live. We follow an agile, milestones-based implementation framework."
    },
    {
      q: "Are these solutions custom-built or out-of-the-box?",
      a: "We build on top of our proprietary core framework of digital transformation engines (intake, classification, and OCR). This allows us to deliver customized integrations (CRM, ERP, WhatsApp) at a fraction of the time and cost of starting from scratch."
    },
    {
      q: "Do you provide staff training and system support post-launch?",
      a: "Yes. Every deployment includes 4 weeks of hands-on staff training, structured API documentation, and a dedicated Slack/WhatsApp support channel with SLA-backed response times."
    }
  ];

  return (
    <div className="page-wrapper" style={{ overflowX: 'hidden' }}>
      
      {/* 1. Hero Section with Split Layout */}
      <section style={{ 
        paddingTop: '9rem', 
        paddingBottom: '5rem', 
        background: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Grid Pattern */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, opacity: 0.3 }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            backgroundImage: 'linear-gradient(rgba(24,79,91,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(24,79,91,0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          
          {/* Breadcrumbs */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', marginBottom: '1.5rem', color: 'var(--text-muted)' }}
          >
            <Link to="/" style={{ color: 'inherit' }}>Home</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <span style={{ opacity: 0.5 }}>Industries</span>
            <span style={{ opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--primary)', fontWeight: '600' }}>{industryName}</span>
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '3.5rem', 
            alignItems: 'center' 
          }}>
            
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                background: 'rgba(24, 79, 91, 0.06)', 
                color: 'var(--primary)', 
                padding: '0.4rem 1rem', 
                borderRadius: '50px', 
                fontSize: '0.8rem', 
                fontWeight: '700',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                <Cpu size={14} /> GCC Enterprise Transformation Solutions
              </div>
              
              <h1 style={{ 
                fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)', 
                fontWeight: '800', 
                lineHeight: '1.1', 
                marginBottom: '1rem', 
                letterSpacing: '-0.02em',
                color: 'var(--primary)'
              }}>
                {industryName}
              </h1>
              
              <h3 style={{ 
                fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', 
                color: 'var(--secondary)', 
                fontWeight: '600', 
                marginBottom: '1.5rem',
                lineHeight: '1.3'
              }}>
                {heroSubtitle}
              </h3>
              
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.7', 
                color: 'var(--text-muted)', 
                marginBottom: '2.5rem',
                maxWidth: '600px'
              }}>
                {heroDescription}
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-strategy-modal', { detail: { industry: industryName } })); }} 
                  className="btn btn-primary" 
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  Apply for a Strategy Session <ArrowRight size={18} />
                </button>
                <a href="/resources" className="btn btn-secondary">Download Playbook</a>
              </div>
            </motion.div>

            {/* Right Column: Motion Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              {Illustration ? <Illustration /> : (
                <div style={{ width: '100%', height: '320px', background: '#e2e8f0', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span>Interactive Graphic Placeholder</span>
                </div>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Key Metrics/Business Impact Bar */}
      {metrics && metrics.length > 0 && (
        <section style={{ 
          background: 'var(--primary)', 
          color: 'white', 
          padding: '3rem 5%', 
          position: 'relative',
          boxShadow: '0 10px 30px rgba(24,79,91,0.15)'
        }}>
          <div className="container">
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '2.5rem', 
              textAlign: 'center'
            }}>
              {metrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                >
                  <h3 style={{ 
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
                    fontWeight: '900', 
                    color: 'var(--secondary)', 
                    marginBottom: '0.5rem',
                    fontFamily: 'var(--font-en)'
                  }}>
                    {metric.value}
                  </h3>
                  <p style={{ 
                    fontSize: '1rem', 
                    fontWeight: '600', 
                    color: 'rgba(255,255,255,0.85)', 
                    margin: 0,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Challenges Section (Dense, Consulting-grade) */}
      <section style={{ padding: 'var(--section-padding)', background: 'var(--bg-alt)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.5rem' }}>Operational Bottlenecks</div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--primary)', fontWeight: '800' }}>Why {industryName} Needs Digital Transformation</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {challenges.map((challenge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  border: '1px solid rgba(24,79,91,0.06)',
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.2rem',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                }}
              >
                <div style={{ color: '#dc2626', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '700' }}>
                  <AlertTriangle size={22} style={{ flexShrink: 0 }} />
                  <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--primary)', fontWeight: '700' }}>{challenge.title}</h3>
                </div>
                
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', margin: 0, fontSize: '0.95rem' }}>
                  {challenge.description}
                </p>

                {challenge.impact && (
                  <div style={{ 
                    marginTop: 'auto', 
                    background: '#fff5f5', 
                    borderRadius: '8px', 
                    padding: '0.875rem 1rem', 
                    borderLeft: '3px solid #f87171',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.2rem'
                  }}>
                    <span style={{ color: '#991b1b', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Business Impact:</span>
                    <span style={{ color: '#7f1d1d', fontSize: '0.85rem', lineHeight: '1.4' }}>{challenge.impact}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Digital Solutions Architecture (Deep Dive Grid) */}
      <section style={{ padding: 'var(--section-padding)', background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.5rem' }}>The Digital Architecture</div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--primary)', fontWeight: '800' }}>Targeted Operations Systems</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {solutions.map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  border: '1px solid rgba(24,79,91,0.06)',
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.2rem',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                }}
              >
                <div style={{ color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '700' }}>
                  <CheckCircle2 size={22} style={{ flexShrink: 0 }} />
                  <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--primary)', fontWeight: '700' }}>{solution.title}</h3>
                </div>
                
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', margin: 0, fontSize: '0.95rem' }}>
                  {solution.description}
                </p>

                {solution.capabilities && solution.capabilities.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--primary)', opacity: 0.8, letterSpacing: '0.5px' }}>Core Capabilities:</span>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      {solution.capabilities.map((cap, cidx) => (
                        <li key={cidx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                          <Check size={12} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {solution.techStack && (
                  <div style={{ 
                    marginTop: 'auto', 
                    background: '#f9f8f3', 
                    borderRadius: '8px', 
                    padding: '0.75rem 1rem', 
                    border: '1px dashed rgba(24,79,91,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <Layers size={14} style={{ color: 'var(--primary)' }} />
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      <strong>Integration Stack:</strong> {solution.techStack}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Interactive Pipeline Flow Schematic */}
      <section style={{ padding: 'var(--section-padding)', background: 'var(--bg-alt)', borderTop: '1px solid rgba(24,79,91,0.05)', borderBottom: '1px solid rgba(24,79,91,0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.5rem' }}>Data Pipeline</div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--primary)', fontWeight: '800' }}>Tadbeer Digital Pipeline Processing Flow</h2>
            <p style={{ maxWidth: '600px', margin: '1rem auto 0', color: 'var(--text-muted)' }}>How we securely ingest raw operational data, centralize systems, and automate workflows.</p>
          </div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: '2rem',
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ flex: '1 1 250px', background: 'white', border: '1px solid rgba(24,79,91,0.08)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center', filter: 'drop-shadow(0px 4px 10px rgba(0,0,0,0.02))' }}
            >
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(202, 169, 76, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: 'var(--secondary)', fontWeight: '700' }}>1</div>
              <h4 style={{ color: 'var(--primary)', fontWeight: '700', marginBottom: '0.5rem' }}>Secure Intake</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Omnichannel data ingestion (WhatsApp, web forms, emails, CRM uploads) encrypted in transit.</p>
            </motion.div>

            {/* Link 1 */}
            <div style={{ display: 'flex', justifyContent: 'center', flex: '0 0 20px', minWidth: '20px' }}>
              <ArrowRight size={20} style={{ color: 'var(--secondary)' }} />
            </div>

            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ flex: '1 1 250px', background: 'var(--primary)', border: '1px solid var(--primary)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center', color: 'white', filter: 'drop-shadow(0px 6px 15px rgba(24,79,91,0.15))' }}
            >
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: 'var(--secondary)', fontWeight: '700' }}>2</div>
              <h4 style={{ color: 'white', fontWeight: '700', marginBottom: '0.5rem' }}>Transformation & Logic</h4>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', margin: 0 }}>Processing engines indexing records, validating data compliance, and matching parameters.</p>
            </motion.div>

            {/* Link 2 */}
            <div style={{ display: 'flex', justifyContent: 'center', flex: '0 0 20px', minWidth: '20px' }}>
              <ArrowRight size={20} style={{ color: 'var(--secondary)' }} />
            </div>

            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ flex: '1 1 250px', background: 'white', border: '1px solid rgba(24,79,91,0.08)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center', filter: 'drop-shadow(0px 4px 10px rgba(0,0,0,0.02))' }}
            >
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(202, 169, 76, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: 'var(--secondary)', fontWeight: '700' }}>3</div>
              <h4 style={{ color: 'var(--primary)', fontWeight: '700', marginBottom: '0.5rem' }}>Action Trigger</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Syncing records with the ERP/CRM, updating calendar alerts, or triggering automated webhooks.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section style={{ padding: 'var(--section-padding)', background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.5rem' }}>Deployment FAQ</div>
            <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--primary)', fontWeight: '800' }}>Frequently Asked Questions</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  style={{
                    background: 'white',
                    borderRadius: '12px',
                    border: '1px solid rgba(24,79,91,0.06)',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%',
                      padding: '1.5rem 2rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      color: 'var(--primary)',
                      fontWeight: '700',
                      fontSize: '1.05rem',
                      fontFamily: 'var(--font-en)'
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <HelpCircle size={18} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                      {faq.q}
                    </span>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div style={{ 
                          padding: '0 2rem 1.5rem 3rem', 
                          color: 'var(--text-muted)', 
                          fontSize: '0.95rem',
                          lineHeight: '1.6'
                        }}>
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Bottom Call to Action */}
      <section style={{ 
        padding: 'var(--section-padding)', 
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--tertiary) 100%)',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, opacity: 0.04 }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            background: 'rgba(255, 255, 255, 0.08)', 
            color: 'var(--secondary)', 
            padding: '0.4rem 1rem', 
            borderRadius: '50px', 
            fontSize: '0.8rem', 
            fontWeight: '700',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            <Shield size={14} strokeWidth={2.5} /> On-Premise & Local Cloud Deployment
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', fontWeight: '800', marginBottom: '1rem' }}>
            {ctaTitle || "Ready to Upgrade Your Operations?"}
          </h2>
          
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
            {ctaDescription || "Book an expert strategy session today to discover how Tadbeer's digital pipelines can solve your specific bottleneck."}
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-strategy-modal', { detail: { industry: industryName } })); }} 
              className="btn btn-primary" 
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              Apply for a Strategy Session <ArrowRight size={18} />
            </button>
            <a href="/resources" className="btn btn-secondary" style={{ color: 'white', borderColor: 'white' }}>Download Playbook</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default IndustryPageTemplate;
