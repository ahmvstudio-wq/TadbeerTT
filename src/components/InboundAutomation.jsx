import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Filter, Mail, Target, TrendingUp, ArrowRight } from 'lucide-react';

const InboundAutomation = () => {
  const stages = [
    { icon: <Globe size={24} />, title: "Capture", desc: "Website forms, chatbots, landing pages, and social media capture every interaction" },
    { icon: <Filter size={24} />, title: "Qualify", desc: "AI-powered scoring identifies high-value prospects automatically" },
    { icon: <Mail size={24} />, title: "Nurture", desc: "Automated email sequences deliver personalized content at scale" },
    { icon: <Target size={24} />, title: "Convert", desc: "Sales teams receive warm, pre-qualified leads with full context" },
    { icon: <TrendingUp size={24} />, title: "Optimize", desc: "Continuous learning improves conversion rates over time" }
  ];

  return (
    <section id="inbound-automation" className="inbound-section" style={{ padding: 'var(--section-padding)', background: 'var(--bg)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span className="section-label">INTELLIGENT LEAD AUTOMATION</span>
          <h2 className="section-title">Turn Every Visitor Into a Qualified Opportunity</h2>
        </div>

        {/* Pipeline Visualization */}
        <div style={{ position: 'relative', marginBottom: '5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Desktop Pipeline (Horizontal) */}
          <div className="pipeline-desktop inbound-pipeline-grid">
            {/* Connecting Line */}
            <div className="connecting-line" style={{ position: 'absolute', top: '40px', left: '10%', right: '10%', height: '2px', borderBottom: '2px dashed var(--border)', zIndex: 0 }} />
            
            {stages.map((stage, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
              >
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'white', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--primary)', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                  {stage.icon}
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{stage.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{stage.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Integrations & Outcomes */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
          <div style={{ background: 'white', borderRadius: '16px', padding: '2.5rem', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Seamless Integrations</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <strong style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--text-main)' }}>CRM Platforms</strong>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>HubSpot, Salesforce, Odoo CRM</p>
              </div>
              <div>
                <strong style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--text-main)' }}>Marketing Automation</strong>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Meta Ads, Google Ads, ActiveCampaign</p>
              </div>
              <div>
                <strong style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--text-main)' }}>AI Enhancements</strong>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Predictive lead scoring, chatbot routing</p>
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--primary)', borderRadius: '16px', padding: '2.5rem', color: 'white', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignContent: 'center' }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--secondary)', marginBottom: '0.25rem' }}>10x</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: '1.4' }}>Faster Response Time</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--secondary)', marginBottom: '0.25rem' }}>65%</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: '1.4' }}>Higher Conversion Rate</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--secondary)', marginBottom: '0.25rem' }}>78%</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: '1.4' }}>Less Manual Work</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--secondary)', marginBottom: '0.25rem' }}>3.2x</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: '1.4' }}>Revenue Per Lead</div>
            </div>
          </div>
        </div>

        <div className="text-center" style={{ marginTop: '3rem' }}>
          <a href="#contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>Automate Your Pipeline</a>
        </div>
      </div>
    </section>
  );
};

export default InboundAutomation;
