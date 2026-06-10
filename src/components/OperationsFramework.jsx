import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Layers, Cpu, Database, Network, Bot, Zap, ArrowRight, Microchip } from 'lucide-react'; 

const easeTransition = [0.22, 1, 0.36, 1];

const OperationsFramework = () => {
  const layers = [
    {
      num: "01.",
      title: "Agentic Workflows",
      desc: "Autonomous AI agents that execute complex multi-step tasks across your existing CRM and ERP systems without human intervention.",
      icon: Bot,
    },
    {
      num: "02.",
      title: "Cognitive Data Pipelines",
      desc: "Transform unstructured documents, emails, and PDFs into structured databases instantly using custom NLP and OCR models.",
      icon: Database,
    },
    {
      num: "03.",
      title: "Bilingual RAG Systems",
      desc: "Enterprise-secure knowledge bases allowing your team to 'chat' with your proprietary data in perfect Arabic and English.",
      icon: Network,
    },
    {
      num: "04.",
      title: "Predictive Intelligence",
      desc: "Machine learning models that forecast demand, detect anomalies, and provide management with real-time decision support.",
      icon: Cpu,
    }
  ];

  return (
    <section id="ai-operations" className="ops-framework-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        
        {/* 1. VERIFIED TRUST HERO BANNER */}
        <div className="ops-trust-hero" style={{ borderColor: 'rgba(79, 209, 197, 0.2)' }}>
          <motion.div 
            className="ops-trust-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeTransition }}
          >
            <span className="section-label" style={{ color: 'var(--primary-light, #4FD1C5)' }}>AI AS A SERVICE | الذكاء الاصطناعي كخدمة</span>
            <h2 className="ops-hero-title">Supercharge Operations<br />With Custom AI.</h2>
            <p className="ops-hero-desc">
              Stop relying on human bandwidth to scale. We engineer and deploy enterprise-grade AI systems, LLMs, and autonomous agents that securely plug into your business, eliminating manual bottlenecks instantly.
            </p>
            
            <div className="ops-hero-actions">
              <a href="#contact" className="btn btn-primary">Audit My AI Readiness</a>
              <a href="#services" className="btn btn-secondary-outline">View AI Capabilities</a>
            </div>
            
            <div className="ops-trusted-sectors">
              <span className="sectors-title">Deploying AI For:</span>
              <div className="sectors-tags">
                <span className="sector-tag-pill">Logistics</span>
                <span className="sector-tag-separator">•</span>
                <span className="sector-tag-pill">Finance</span>
                <span className="sector-tag-separator">•</span>
                <span className="sector-tag-pill">Customer Success</span>
              </div>
            </div>
          </motion.div>
          
          {/* Decorative background glow */}
          <div className="ops-glow-orb" style={{ background: 'radial-gradient(circle, rgba(79,209,197,0.15) 0%, rgba(24,79,91,0) 70%)' }}></div>
        </div>

        {/* 2. GCC OPERATIONS PARTNER SPLIT BLOCK */}
        <div className="ops-partner-grid">
          
          {/* Left Column: Headline copy */}
          <motion.div 
            className="ops-partner-copy"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeTransition }}
          >
            <span className="story-tag">THE AI ADVANTAGE</span>
            <h3 className="partner-headline">We Fix The Operations That Are Quietly Killing Your Profit</h3>
            <p className="partner-text">
              Most GCC companies bleed revenue through manual data entry, slow customer response times, and scattered decision-making. We inject precision-engineered AI to automate these exact friction points.
            </p>
            <div className="partner-highlight-box" style={{ borderLeftColor: '#4FD1C5', backgroundColor: 'rgba(79,209,197,0.05)' }}>
              <span className="highlight-tag" style={{ color: '#4FD1C5' }}>Operational Imperative:</span>
              <p className="highlight-text">
                Your competitors are adopting AI to slash overhead. Tadbeer builds the custom infrastructure so you don't get left behind.
              </p>
            </div>
          </motion.div>
          
          {/* Right Column: Systems Cards & Visual Flow */}
          <div className="ops-partner-cards">
            
            {/* Card 1: Systems Library */}
            <motion.div 
              className="ops-feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeTransition }}
            >
              <div className="feature-icon-wrapper" style={{ background: 'rgba(79,209,197,0.1)', color: '#4FD1C5' }}>
                <Zap size={22} />
              </div>
              <div className="feature-content">
                <span className="feature-category">LLM INTEGRATION</span>
                <h4 className="feature-title">Seamless System Injection</h4>
                <p className="feature-desc">
                  Our models don't live in a vacuum. We securely connect custom language models directly into your Odoo, SAP, or proprietary databases via API.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Protocol Hub */}
            <motion.div 
              className="ops-feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: easeTransition }}
            >
              <div className="feature-icon-wrapper" style={{ background: 'rgba(79,209,197,0.1)', color: '#4FD1C5' }}>
                <ShieldCheck size={22} />
              </div>
              <div className="feature-content">
                <span className="feature-category">DATA GOVERNANCE</span>
                <h4 className="feature-title">Enterprise-Grade Security</h4>
                <p className="feature-desc">
                  Your data never trains public models. We deploy isolated instances with strict role-based access controls and hallucination guardrails.
                </p>
              </div>
            </motion.div>

            {/* Performance Velocity Visualization */}
            <motion.div 
              className="ops-velocity-box"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ borderColor: 'rgba(79,209,197,0.2)' }}
            >
              <div className="velocity-header">
                <span className="velocity-label">Operational Bandwidth Scale</span>
                <div className="velocity-pulse-dots">
                  <span className="pulse-dot active" style={{ background: '#4FD1C5' }}></span>
                  <span className="pulse-dot active" style={{ background: '#4FD1C5' }}></span>
                  <span className="pulse-dot active" style={{ background: '#4FD1C5' }}></span>
                </div>
              </div>
              
              <div className="velocity-chart-wrapper">
                <div className="velocity-chart-bar-group">
                  <div className="bar-label">Human-Only Execution</div>
                  <div className="bar-track">
                    <motion.div 
                      className="bar-fill baseline" 
                      initial={{ width: 0 }} 
                      whileInView={{ width: '25%' }} 
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: easeTransition }}
                      style={{ background: 'rgba(255,255,255,0.2)' }}
                    />
                  </div>
                  <span className="bar-value">1x</span>
                </div>

                <div className="velocity-chart-bar-group">
                  <div className="bar-label">SaaS Software Assisted</div>
                  <div className="bar-track">
                    <motion.div 
                      className="bar-fill optimized" 
                      initial={{ width: 0 }} 
                      whileInView={{ width: '50%' }} 
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2, ease: easeTransition }}
                      style={{ background: 'rgba(202, 169, 76, 0.6)' }}
                    />
                  </div>
                  <span className="bar-value">5x</span>
                </div>

                <div className="velocity-chart-bar-group">
                  <div className="bar-label">Autonomous AI Augmented</div>
                  <div className="bar-track">
                    <motion.div 
                      className="bar-fill maximized" 
                      initial={{ width: 0 }} 
                      whileInView={{ width: '98%' }} 
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.4, ease: easeTransition }}
                      style={{ background: 'linear-gradient(90deg, #2A9D8F 0%, #4FD1C5 100%)' }}
                    />
                  </div>
                  <span className="bar-value">100x</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* 3. OPERATING FRAMEWORK (VELOCITY SERIES) */}
        <div className="ops-framework-wrapper">
          <div className="ops-framework-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easeTransition }}
            >
              <span className="story-tag">Custom AI Architecture</span>
              <p className="partnership-intro-text">
                We don't sell generic ChatGPT subscriptions. We custom-build AI logic that understands your specific business, your data, and your industry context.
              </p>
              
              <div className="separator-line"></div>
              
              <span className="section-label" style={{ marginTop: '2rem' }}>AI Implementation.</span>
              <h3 className="framework-headline">Our AI Delivery Framework</h3>
              <p className="framework-subtitle">
                Deploying enterprise AI requires precision engineering across four distinct technical layers:
              </p>
            </motion.div>
          </div>

          <div className="ops-framework-layers">
            {layers.map((layer, idx) => {
              const LayerIcon = layer.icon;
              return (
                <motion.div 
                  key={idx}
                  className="ops-layer-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: easeTransition }}
                >
                  <div className="layer-card-top">
                    <span className="layer-number" style={{ color: '#4FD1C5' }}>{layer.num}</span>
                    <div className="layer-icon-node" style={{ color: '#4FD1C5', borderColor: 'rgba(79,209,197,0.3)' }}>
                      <LayerIcon size={20} />
                    </div>
                  </div>
                  
                  <h4 className="layer-title">{layer.title}</h4>
                  <p className="layer-desc">{layer.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            className="ops-framework-footer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Cpu size={20} className="shield-check-icon" style={{ color: '#4FD1C5' }} />
            <span>AI models are only as good as the operational context they are trained on. We provide both.</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default OperationsFramework;
