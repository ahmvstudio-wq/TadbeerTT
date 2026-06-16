import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServicePageHero from '../components/ServicePageHero';
import SectionHeader from '../components/SectionHeader';
import { Target, TrendingUp, Users, Activity, ChevronRight, BarChart, Smartphone, Search, Mail } from 'lucide-react';

const AcquisitionLoopSVG = () => (
  <svg viewBox="0 0 400 400" style={{ width: '100%', height: 'auto', maxBlockSize: '360px', background: 'rgba(24,79,91,0.02)', borderRadius: '16px', border: '1px solid var(--border)', padding: '1.5rem' }}>
    {/* Outer Border Glow */}
    <rect x="5" y="5" width="390" height="390" rx="12" fill="none" stroke="rgba(202,169,76,0.15)" strokeWidth="1" />
    {/* Funnel Rings */}
    <ellipse cx="200" cy="90" rx="130" ry="25" fill="rgba(24,79,91,0.04)" stroke="var(--primary)" strokeWidth="2.5" />
    <ellipse cx="200" cy="190" rx="90" ry="18" fill="rgba(202,169,76,0.04)" stroke="var(--secondary)" strokeWidth="2" strokeDasharray="3 3" />
    <ellipse cx="200" cy="290" rx="50" ry="12" fill="rgba(24,79,91,0.04)" stroke="var(--primary)" strokeWidth="2.5" />
    {/* Connecting Lines */}
    <line x1="70" y1="90" x2="110" y2="190" stroke="var(--border)" strokeWidth="1.5" />
    <line x1="330" y1="90" x2="290" y2="190" stroke="var(--border)" strokeWidth="1.5" />
    <line x1="110" y1="190" x2="150" y2="290" stroke="var(--border)" strokeWidth="1.5" />
    <line x1="290" y1="190" x2="250" y2="290" stroke="var(--border)" strokeWidth="1.5" />
    {/* Texts */}
    <text x="200" y="94" textAnchor="middle" fill="var(--primary)" fontSize="9" fontWeight="800" letterSpacing="1px">AWARENESS (Meta, Google, TikTok)</text>
    <text x="200" y="194" textAnchor="middle" fill="var(--secondary)" fontSize="9" fontWeight="800" letterSpacing="1px">CONSIDERATION (Nurture &amp; Lead Gen)</text>
    <text x="200" y="293" textAnchor="middle" fill="var(--primary)" fontSize="9" fontWeight="800" letterSpacing="1px">ACQUISITION (4.2x ROAS)</text>
    {/* Feedback Loop */}
    <path d="M 250 290 Q 360 290 330 90" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" />
    <polygon points="330,90 324,94 334,96" fill="var(--secondary)" />
    <text x="355" y="190" fill="var(--secondary)" fontSize="9" fontWeight="800" transform="rotate(90 355 190)" textAnchor="middle">FEEDBACK PIXEL LOOP</text>
  </svg>
);

// Q1: Social Media & Community Infographic
const SocialInfographic = () => (
  <svg viewBox="0 0 240 180" style={{ width: '100%', height: 'auto', maxHeight: '160px' }}>
    <rect width="240" height="180" rx="12" fill="#FDFDFB" stroke="var(--border)" strokeWidth="1" />
    <circle cx="35" cy="35" r="15" fill="none" stroke="var(--secondary)" strokeWidth="2" />
    <circle cx="35" cy="35" r="11" fill="var(--primary)" />
    <rect x="60" y="22" width="80" height="10" rx="3" fill="var(--primary)" opacity="0.1" />
    <rect x="60" y="38" width="50" height="6" rx="2" fill="var(--text-muted)" opacity="0.2" />
    
    <rect x="20" y="65" width="60" height="45" rx="6" fill="var(--bg)" stroke="var(--border)" />
    <rect x="90" y="65" width="60" height="45" rx="6" fill="var(--bg)" stroke="var(--border)" />
    <rect x="160" y="65" width="60" height="45" rx="6" fill="var(--bg)" stroke="var(--border)" />
    
    <path d="M25,95 L40,80 L55,90 L50,95 Z" fill="rgba(24,79,91,0.06)" stroke="var(--primary)" strokeWidth="1" />
    <circle cx="95" cy="78" r="6" fill="var(--secondary)" />
    <line x1="165" y1="75" x2="195" y2="75" stroke="var(--primary)" strokeWidth="2" />
    <line x1="165" y1="85" x2="185" y2="85" stroke="var(--primary)" strokeWidth="2" />

    <g transform="translate(140, 120)">
      <rect width="80" height="35" rx="8" fill="var(--primary)" />
      <text x="40" y="16" textAnchor="middle" fill="white" fontSize="9" fontWeight="800">+310%</text>
      <text x="40" y="27" textAnchor="middle" fill="var(--secondary)" fontSize="7" fontWeight="600">ENGAGEMENT</text>
    </g>
  </svg>
);

// Q2: Performance Advertising Infographic
const PaidInfographic = () => (
  <svg viewBox="0 0 240 180" style={{ width: '100%', height: 'auto', maxHeight: '160px' }}>
    <rect width="240" height="180" rx="12" fill="#FDFDFB" stroke="var(--border)" strokeWidth="1" />
    <polygon points="30,30 210,30 185,65 55,65" fill="rgba(24,79,91,0.08)" stroke="var(--primary)" strokeWidth="1" />
    <text x="120" y="48" textAnchor="middle" fill="var(--primary)" fontSize="8" fontWeight="700">Meta/Google Ads (100k Reach)</text>
    
    <polygon points="55,68 185,68 160,103 80,103" fill="rgba(202,169,76,0.1)" stroke="var(--secondary)" strokeWidth="1" />
    <text x="120" y="86" textAnchor="middle" fill="var(--primary)" fontSize="8" fontWeight="700">Qualified Leads (12% CTR)</text>
    
    <polygon points="80,106 160,106 140,140 100,140" fill="var(--primary)" />
    <text x="120" y="125" textAnchor="middle" fill="white" fontSize="8" fontWeight="800">4.2x ROAS</text>
    
    <motion.path 
      d="M 120 140 L 120 162" 
      stroke="var(--secondary)" 
      strokeWidth="2" 
      animate={{ y: [0, 4, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  </svg>
);

// Q3: SEO & Content Infographic
const SEOInfographic = () => (
  <svg viewBox="0 0 240 180" style={{ width: '100%', height: 'auto', maxHeight: '160px' }}>
    <rect width="240" height="180" rx="12" fill="#FDFDFB" stroke="var(--border)" strokeWidth="1" />
    <path d="M30,140 Q80,130 120,80 T210,35" fill="none" stroke="var(--primary)" strokeWidth="2.5" />
    
    <rect x="25" y="15" width="130" height="18" rx="9" fill="white" stroke="var(--border)" strokeWidth="1" />
    <circle cx="37" cy="24" r="3" fill="none" stroke="var(--text-muted)" strokeWidth="1" />
    <line x1="39" y1="26" x2="43" y2="30" stroke="var(--text-muted)" strokeWidth="1.5" />
    <text x="50" y="27" fill="var(--text-main)" fontSize="7" fontWeight="600">Best Agency in Oman</text>
    
    <g transform="translate(165, 12)">
      <rect width="50" height="24" rx="12" fill="var(--secondary)" />
      <text x="25" y="15" textAnchor="middle" fill="var(--primary)" fontSize="10" fontWeight="900">#1 Rank</text>
    </g>

    <motion.g animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
      <path d="M115,85 L115,55 M115,55 L108,62 M115,55 L122,62" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" />
    </motion.g>
    <text x="125" y="70" fill="var(--primary)" fontSize="12" fontWeight="800">+280%</text>
    <text x="125" y="82" fill="var(--text-muted)" fontSize="7" fontWeight="600">ORGANIC TRAFFIC</text>
  </svg>
);

// Q4: Email & Automation Infographic
const EmailInfographic = () => (
  <svg viewBox="0 0 240 180" style={{ width: '100%', height: 'auto', maxHeight: '160px' }}>
    <rect width="240" height="180" rx="12" fill="#FDFDFB" stroke="var(--border)" strokeWidth="1" />
    <rect x="30" y="45" width="80" height="55" rx="6" fill="white" stroke="var(--primary)" strokeWidth="1.5" />
    <path d="M30,50 L70,75 L110,50" fill="none" stroke="var(--primary)" strokeWidth="1.5" />
    
    <circle cx="165" cy="72" r="28" fill="none" stroke="var(--border)" strokeWidth="5" />
    <motion.circle 
      cx="165" cy="72" r="28" fill="none" stroke="var(--secondary)" strokeWidth="5"
      strokeDasharray="176"
      initial={{ strokeDashoffset: 176 }}
      animate={{ strokeDashoffset: 176 - (176 * 65) / 100 }}
      transition={{ duration: 1.5 }}
      strokeLinecap="round"
      transform="rotate(-90 165 72)"
    />
    <text x="165" y="76" textAnchor="middle" fill="var(--primary)" fontSize="10" fontWeight="800">65%</text>
    <text x="165" y="112" textAnchor="middle" fill="var(--text-muted)" fontSize="8" fontWeight="700">Open Rate Avg</text>
    
    <g transform="translate(30, 120)">
      <rect width="180" height="30" rx="6" fill="rgba(24,79,91,0.04)" stroke="var(--border)" strokeWidth="1" />
      <text x="15" y="18" fill="var(--primary)" fontSize="8" fontWeight="800">✉ AUTOMATED CUSTOMER LIFE CYCLE</text>
      <text x="165" y="18" textAnchor="end" fill="var(--secondary)" fontSize="8" fontWeight="800">ACTIVE</text>
    </g>
  </svg>
);

const DigitalMarketingPage = () => {
  const [activeTab, setActiveTab] = useState('social');

  const caseStudies = [
    {
      client: "Gloria Jean's GCC",
      category: "Local Campaign",
      challenge: "High ad spend with generic content was failing to drive actual foot traffic to cafes.",
      solution: "Hyper-local Arabic video ads with WhatsApp immediate voucher delivery.",
      metrics: [
        { label: "ROAS", value: "4.2x", icon: <TrendingUp size={16} /> },
        { label: "Cost Per Acquisition", value: "-58%", icon: <Activity size={16} /> }
      ]
    },
    {
      client: "Al Qurum Perfumes",
      category: "Social Revamp",
      challenge: "Premium brand image wasn't translating to digital platforms, losing market share to newer brands.",
      solution: "Complete visual overhaul and influencer-led storytelling campaigns.",
      metrics: [
        { label: "Engagement", value: "+310%", icon: <Users size={16} /> },
        { label: "Online Sales", value: "+145%", icon: <Target size={16} /> }
      ]
    },
    {
      client: "Regional E-commerce",
      category: "SEO Dominance",
      challenge: "Relying entirely on paid ads for revenue, causing unsustainably high acquisition costs.",
      solution: "Technical SEO overhaul and Arabic content clustering strategy.",
      metrics: [
        { label: "Organic Traffic", value: "+280%", icon: <Search size={16} /> },
        { label: "CAC Reduction", value: "45%", icon: <TrendingUp size={16} /> }
      ]
    }
  ];

  const campaigns = {
    social: {
      title: "Social Media & Community",
      icon: <Smartphone size={24} />,
      points: [
        "Bilingual Content Creation (Arabic/English)",
        "Community Management & Moderation",
        "Influencer Campaign Management",
        "Viral Short-form Video Production"
      ]
    },
    paid: {
      title: "Performance Advertising",
      icon: <Target size={24} />,
      points: [
        "Meta & TikTok Ads Management",
        "Google Search & Display Networks",
        "Programmatic Advertising",
        "Conversion Rate Optimization (CRO)"
      ]
    },
    seo: {
      title: "SEO & Content",
      icon: <Search size={24} />,
      points: [
        "Technical SEO Audits & Fixes",
        "Arabic Keyword Strategy",
        "Authority Link Building",
        "High-value Blog & Article Writing"
      ]
    },
    email: {
      title: "Email & Automation",
      icon: <Mail size={24} />,
      points: [
        "Automated Drip Campaigns",
        "Abandoned Cart Recovery",
        "Customer Lifetime Value Optimization",
        "Newsletter Design & Management"
      ]
    }
  };

  return (
    <div className="page-wrapper">
      <ServicePageHero 
        title="Digital Marketing"
        subtitle="Data-Driven Growth Engines"
        description="We don't just run ads. We build comprehensive, multi-channel acquisition engines that turn strangers into loyal brand advocates using data, culture, and creativity."
        breadcrumbs={['Home', 'Services', 'Digital Marketing']}
      />

      {/* Highlights Section */}
      <section className="sp-section" style={{ padding: '3.5rem 5%' }}>
        <div className="container">
          <SectionHeader label="Capabilities" title="Full-Funnel Marketing" centered />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginTop: '3rem', alignItems: 'center' }}>
            {/* Left: Illustration */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ display: 'flex', justifyContent: 'center' }}>
              <AcquisitionLoopSVG />
            </motion.div>
            
            {/* Right: Grid of details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card" style={{ padding: '1.5rem', background: 'white', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                  <Target size={24} color="var(--primary)" />
                  <h3 style={{ fontSize: '1.15rem', margin: 0, fontWeight: '700' }}>Strategy First</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0, lineHeight: '1.5' }}>We map out your customer journey, identifying the exact touchpoints needed to drive conversions before spending a single rial on ads.</p>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="card" style={{ padding: '1.5rem', background: 'white', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                  <BarChart size={24} color="var(--secondary)" />
                  <h3 style={{ fontSize: '1.15rem', margin: 0, fontWeight: '700' }}>Performance Driven</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0, lineHeight: '1.5' }}>Every campaign is tracked, measured, and optimized for ROI. If it doesn't generate revenue or clear brand equity, we cut it.</p>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="card" style={{ padding: '1.5rem', background: 'white', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                  <Users size={24} color="var(--primary)" />
                  <h3 style={{ fontSize: '1.15rem', margin: 0, fontWeight: '700' }}>Culturally Native</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0, lineHeight: '1.5' }}>Deep understanding of Omani and GCC nuances ensures your messaging resonates authentically with local audiences.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaigns Tabs */}
      <section className="sp-section" style={{ padding: 'var(--section-padding)', background: 'white' }}>
        <div className="container">
          <SectionHeader label="Our Arsenal" title="Multi-Channel Expertise" centered />
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '3rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
              {Object.keys(campaigns).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`btn ${activeTab === key ? 'btn-primary' : ''}`}
                  style={{ 
                    padding: '0.75rem 1.5rem', 
                    background: activeTab === key ? 'var(--primary)' : 'var(--bg)',
                    color: activeTab === key ? 'white' : 'var(--text-main)',
                    border: activeTab === key ? 'none' : '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  {campaigns[key].icon}
                  {campaigns[key].title}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                style={{ width: '100%', maxWidth: '1000px', background: 'var(--bg)', padding: '2.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}
              >
                <div className="campaign-tab-grid">
                  {/* Left Column: Interactive Infographics */}
                  <div className="campaign-infographic-wrapper">
                    {activeTab === 'social' && <SocialInfographic />}
                    {activeTab === 'paid' && <PaidInfographic />}
                    {activeTab === 'seo' && <SEOInfographic />}
                    {activeTab === 'email' && <EmailInfographic />}
                  </div>

                  {/* Right Column: Title and Details */}
                  <div>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      {campaigns[activeTab].icon} {campaigns[activeTab].title}
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {campaigns[activeTab].points.map((point, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                          <div style={{ color: 'var(--secondary)', marginTop: '4px' }}><ChevronRight size={18} /></div>
                          <span style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: '1.5' }}>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="sp-section" style={{ padding: 'var(--section-padding)' }}>
        <div className="container">
          <SectionHeader label="Proven Results" title="Case Studies" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {caseStudies.map((study, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{ background: 'white', borderRadius: 'var(--radius)', border: '1px solid var(--border)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ padding: '2rem', flex: 1 }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{study.category}</span>
                  <h3 style={{ fontSize: '1.5rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>{study.client}</h3>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '0.25rem' }}>The Challenge:</strong>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{study.challenge}</p>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '0.25rem' }}>Our Solution:</strong>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{study.solution}</p>
                  </div>
                </div>
                <div style={{ padding: '1.5rem 2rem', background: 'var(--bg)', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
                  {study.metrics.map((metric, i) => (
                    <div key={i}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: '700', fontSize: '1.5rem' }}>
                        {metric.icon} {metric.value}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{metric.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Execution Lifecycle */}
      <section className="sp-section" style={{ padding: 'var(--section-padding)' }}>
        <div className="container">
          <SectionHeader label="Our Methodology" title="Campaign Execution Lifecycle" centered />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginTop: '3.5rem' }}>
            {[
              { step: '01', title: 'Audit & Market Research', desc: 'We dissect your historical ad account metrics, run competitor share-of-voice analyses, and map GCC customer search intent.' },
              { step: '02', title: 'Bilingual Creative Production', desc: 'Our team scripts and produces high-converting Arabic & English video assets, UGC briefs, and copy tailored to local dialects.' },
              { step: '03', title: 'Media Buying & Launch', desc: 'Deploying structured, value-optimized campaigns across Google Search, Meta Ads, and TikTok with tight budget controls.' },
              { step: '04', title: 'Attribution & Optimization', desc: 'Configuring clean server-side tracking (UTMs, CAPI) and custom real-time dashboards to measure true acquisition costs.' },
              { step: '05', title: 'Scaling & Multipliers', desc: 'Doubling down on winning creatives and audiences while scaling budget dynamically to maintain targeted ROAS guidelines.' }
            ].map((lifecycle, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  border: '1px solid var(--border)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  position: 'relative'
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--secondary)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.85rem'
                }}>
                  {lifecycle.step}
                </div>
                
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--primary)', margin: 0 }}>{lifecycle.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>{lifecycle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="sp-section" style={{ padding: '4rem 5%', background: 'var(--primary)', color: 'white' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--secondary)', marginBottom: '0.5rem' }}>4.2x</div>
            <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>Average ROAS</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--secondary)', marginBottom: '0.5rem' }}>-58%</div>
            <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>Cost Reduction</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--secondary)', marginBottom: '0.5rem' }}>300%</div>
            <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>Organic Growth</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--secondary)', marginBottom: '0.5rem' }}>85%</div>
            <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>Lead Quality Score</div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Integrations */}
      <section className="sp-section" style={{ padding: 'var(--section-padding)', background: 'var(--bg)' }}>
        <div className="container">
          <SectionHeader label="Integration Partners" title="Our Marketing Technology Stack" subtitle="We leverage and integrate with leading platforms to orchestrate your marketing engines." centered />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1.5rem', marginTop: '3.5rem' }}>
            {[
              { name: 'Meta Ads Manager', desc: 'Facebook, Instagram & Messenger' },
              { name: 'Google Marketing Platform', desc: 'Google Search, YouTube & GA4' },
              { name: 'TikTok Ads Manager', desc: 'GCC target short-form campaigns' },
              { name: 'Klaviyo', desc: 'Advanced email flow automation' },
              { name: 'HubSpot CRM', desc: 'Full-funnel pipeline tracking' },
              { name: 'SEMrush', desc: 'SEO intelligence & monitoring' },
              { name: 'Hotjar', desc: 'Conversion rate optimization (CRO)' }
            ].map((tech, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                style={{
                  background: 'white',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '100px'
                }}
              >
                <div style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{tech.name}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{tech.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-section" style={{ padding: 'var(--section-padding)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>Ready to Transform Your Marketing?</h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Stop guessing and start growing. Book a consultation with our marketing experts today.</p>
          <a href="#contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>Book Free Consultation</a>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;
