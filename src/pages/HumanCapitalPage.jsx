import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ServicePageHero from '../components/ServicePageHero';
import SectionHeader from '../components/SectionHeader';
import { Users, FileText, Download, Briefcase, Award, ShieldCheck, TrendingUp } from 'lucide-react';
import LeadCaptureModal from '../components/LeadCaptureModal';
import { fetchResources } from '../supabaseService';

const OmanizationComplianceSVG = () => (
  <svg viewBox="0 0 400 400" style={{ width: '100%', height: 'auto', maxBlockSize: '360px', background: 'rgba(24,79,91,0.02)', borderRadius: '16px', border: '1px solid var(--border)', padding: '1.5rem' }}>
    <rect x="5" y="5" width="390" height="390" rx="12" fill="none" stroke="rgba(202,169,76,0.15)" strokeWidth="1" />
    {/* Balance Scale */}
    <line x1="100" y1="300" x2="300" y2="300" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" />
    <polygon points="200,300 185,340 215,340" fill="var(--primary)" />
    
    {/* Balance beam */}
    <motion.line 
      x1="120" y1="200" x2="280" y2="200" 
      stroke="var(--secondary)" strokeWidth="4" strokeLinecap="round" 
      style={{ transformOrigin: '200px 200px' }}
      animate={{ rotate: [-2, 2, -2] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Left scale pan */}
    <motion.g animate={{ y: [1, -1, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
      <line x1="130" y1="200" x2="110" y2="250" stroke="var(--primary)" strokeWidth="1" />
      <line x1="130" y1="200" x2="150" y2="250" stroke="var(--primary)" strokeWidth="1" />
      <rect x="100" y="250" width="60" height="8" rx="2" fill="var(--primary)" />
      <text x="130" y="240" textAnchor="middle" fill="var(--primary)" fontSize="8" fontWeight="bold">LOCAL TALENT</text>
    </motion.g>
    {/* Right scale pan */}
    <motion.g animate={{ y: [-1, 1, -1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
      <line x1="270" y1="200" x2="250" y2="250" stroke="var(--primary)" strokeWidth="1" />
      <line x1="270" y1="200" x2="290" y2="250" stroke="var(--primary)" strokeWidth="1" />
      <rect x="240" y="250" width="60" height="8" rx="2" fill="var(--primary)" />
      <text x="270" y="240" textAnchor="middle" fill="var(--primary)" fontSize="8" fontWeight="bold">COMPLIANCE</text>
    </motion.g>
    <text x="200" y="60" textAnchor="middle" fill="var(--primary)" fontSize="12" fontWeight="bold">Omanization Balance Model</text>
    <text x="200" y="80" textAnchor="middle" fill="var(--text-muted)" fontSize="9">Aligned to Ministry of Labour Standards</text>
  </svg>
);

const HumanCapitalPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);

  const handleDownload = (resource) => {
    setSelectedResource(resource);
    setModalOpen(true);
  };

  const practices = [
    {
      title: "Talent Retention",
      icon: <Users size={24} />,
      desc: "Stop losing your best people to competitors. We build compensation, culture, and growth frameworks that keep top talent engaged."
    },
    {
      title: "Performance Management",
      icon: <TrendingUp size={24} />,
      desc: "Move beyond annual reviews. We implement continuous OKR tracking and real-time performance systems."
    },
    {
      title: "Organizational Design",
      icon: <Briefcase size={24} />,
      desc: "Restructure your teams for maximum agility and clarity, eliminating bottlenecks and overlapping responsibilities."
    },
    {
      title: "Compliance & Omanization",
      icon: <ShieldCheck size={24} />,
      desc: "Navigate local labor laws effortlessly and build sustainable pipelines for national talent development."
    }
  ];

  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  const FALLBACK_HR_RESOURCES = [
    { title: "Omanization Compliance Guide 2026", type: "Guide", desc: "A practical checklist for meeting quotas and accessing government incentives." },
    { title: "KPI Framework Template", type: "Template", desc: "Ready-to-use Excel templates for setting department and individual KPIs." },
    { title: "Employee Engagement Playbook", type: "Playbook", desc: "25 proven strategies to increase retention in GCC companies." },
    { title: "Leadership Development Guide", type: "Guide", desc: "How to identify and train the next generation of managers." },
    { title: "Salary Benchmarking Report", type: "Report", desc: "Current market rates across 15 industries in Oman and UAE." },
    { title: "HR Digital Transformation", type: "Playbook", desc: "The roadmap for moving from paper files to an integrated HRMS." }
  ];

  useEffect(() => {
    const loadResources = async () => {
      setLoading(true);
      const data = await fetchResources();
      const hrRes = data.filter(r => r.category === 'Human Capital');
      if (hrRes.length > 0) {
        setResources(hrRes.map(r => ({
          title: r.title,
          type: r.type,
          desc: r.desc || r.description || '',
          link: r.link,
          thumbnail: r.thumbnail
        })));
      } else {
        setResources(FALLBACK_HR_RESOURCES);
      }
      setLoading(false);
    };
    loadResources();
  }, []);

  return (
    <div className="page-wrapper">
      <ServicePageHero 
        title="Human Capital"
        subtitle="People-First Transformation"
        description="Great strategy fails without the right people to execute it. We help you attract, retain, and develop the talent needed to drive your business forward in the GCC market."
        breadcrumbs={['Home', 'Services', 'Human Capital']}
      />

      {/* Best Practices */}
      <section className="sp-section" style={{ padding: '3.5rem 5%' }}>
        <div className="container">
          <SectionHeader label="Our Approach" title="Modern HR Strategies" centered />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', marginTop: '3rem', alignItems: 'center' }}>
            {/* Left: Illustration */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ display: 'flex', justifyContent: 'center' }}>
              <OmanizationComplianceSVG />
            </motion.div>
            
            {/* Right: Grid of Practices */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
              {practices.map((practice, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ 
                    y: -6, 
                    borderColor: 'var(--secondary)', 
                    boxShadow: '0 12px 30px rgba(202, 169, 76, 0.06)' 
                  }}
                  style={{ 
                    padding: '1.5rem', 
                    background: 'white', 
                    borderRadius: 'var(--radius)', 
                    border: '1px solid var(--border)', 
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(202,169,76,0.1)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    {practice.icon}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--primary)', fontWeight: '700' }}>{practice.title}</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.4', fontSize: '0.85rem', margin: 0 }}>{practice.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GCC HR Transformation Pipeline */}
      <section className="sp-section" style={{ padding: 'var(--section-padding)' }}>
        <div className="container">
          <SectionHeader label="Our Framework" title="The GCC HR Transformation Roadmap" centered />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginTop: '3.5rem', position: 'relative' }}>
            {[
              { step: 'Phase 1', title: 'Audit & Compliance', desc: 'Comprehensive audit of your existing policies, employment contracts, and compliance with local Omani labour law and Ministry of Labour directives.' },
              { step: 'Phase 2', title: 'Structure & Job Design', desc: 'Redesigning reporting lines, drafting clear job descriptions, and building grading structures that align with business growth targets.' },
              { step: 'Phase 3', title: 'Omanization & Sourcing', desc: 'Developing targeted national talent training paths, career development programs, and compliance plans that meet Omani nationalization quotas.' },
              { step: 'Phase 4', title: 'Performance Alignment', desc: 'Implementing OKRs, continuous feedback loops, and modern reward systems to motivate employees and drive operational outcomes.' }
            ].map((phase, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  border: '1px solid var(--border)',
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  position: 'relative'
                }}
              >
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  color: 'var(--secondary)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {phase.step}
                </div>
                
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--primary)', margin: 0 }}>{phase.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Library */}
      <section className="sp-section" style={{ padding: 'var(--section-padding)', background: 'var(--bg)' }}>
        <div className="container">
          <SectionHeader label="Knowledge Center" title="Download Free HR Resources" subtitle="Access our library of templates, guides, and playbooks used by leading organizations." centered />
          
          {loading ? (
            <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
              <div className="spinner" style={{ border: '3px solid rgba(24,79,91,0.1)', borderTop: '3px solid var(--primary)', borderRadius: '50%', width: '30px', height: '30px', animation: 'spin 1s linear infinite', margin: '0 auto 1rem' }}></div>
              <p>Loading HR resources...</p>
              <style>{`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
              {resources.map((res, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  style={{ background: 'white', borderRadius: 'var(--radius)', border: '1px solid var(--border)', padding: '2rem', display: 'flex', flexDirection: 'column' }}
                >
                  {res.thumbnail && (
                    <div style={{ width: '100%', height: '140px', borderRadius: '8px', overflow: 'hidden', marginBottom: '1rem' }}>
                      <img src={res.thumbnail} alt={res.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  )}
                  <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'rgba(24,79,91,0.05)', color: 'var(--primary)', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', marginBottom: '1rem', alignSelf: 'flex-start' }}>
                    {res.type}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-main)', lineHeight: '1.4' }}>{res.title}</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', flex: 1 }}>{res.desc}</p>
                  <button 
                    onClick={() => handleDownload(res)}
                    className="btn"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%', background: 'var(--bg)', color: 'var(--primary)', border: '1px solid var(--border)', padding: '0.75rem' }}
                  >
                    <Download size={16} /> Download Now
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* HR Outcomes & Metrics */}
      <section className="sp-section" style={{ padding: '4rem 5%', background: 'var(--primary)', color: 'white' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {[
            { metric: "38%", label: "Average Retention Increase", desc: "Through structured career planning and culture transformation" },
            { metric: "100%", label: "Omanization Compliance", desc: "Guaranteeing full adherence to the Ministry of Labour guidelines" },
            { metric: "14 Days", label: "Average Time-to-Hire", desc: "Leveraging our database of pre-vetted Omani professionals" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
            >
              <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--secondary)' }}>{stat.metric}</div>
              <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>{stat.label}</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.8, lineHeight: '1.5' }}>{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="sp-section" style={{ padding: 'var(--section-padding)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>Need Hands-On HR Support?</h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>From organizational restructuring to executive search, our consultants are ready to assist.</p>
          <button 
            onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-strategy-modal')); }} 
            className="btn btn-primary" 
            style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', cursor: 'pointer', border: 'none' }}
          >
            Apply for a Strategy Session
          </button>
        </div>
      </section>

      <LeadCaptureModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        resourceTitle={selectedResource?.title} 
        resourceType={selectedResource?.type} 
        resourceLink={selectedResource?.link}
      />
    </div>
  );
};

export default HumanCapitalPage;
