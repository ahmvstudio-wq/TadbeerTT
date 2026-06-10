import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    { 
      num: '01',
      title: "Free Consultation", 
      desc: "A genuine, expert-led conversation to understand your business and biggest obstacles.", 
    },
    { 
      num: '02',
      title: "Deep Analysis", 
      desc: "We diagnose root causes across operations, marketing, tech, and team structure.", 
    },
    { 
      num: '03',
      title: "Custom Roadmap", 
      desc: "AI-driven market research shapes your personalised transformation blueprint.", 
    },
    { 
      num: '04',
      title: "Hands-On Delivery", 
      desc: "We stay until every element is embedded, performing, and delivering results.", 
    }
  ];

  const whyCards = [
    { title: 'Global Expertise, Local Heart', desc: 'International standards with genuine GCC cultural intelligence.', icon: '🌍' },
    { title: 'One Team. Full Accountability.', desc: 'No handoffs. No multiple vendors. We own it all.', icon: '🔗' },
    { title: 'AI at Every Stage', desc: 'AI accelerates every phase — from research to execution.', icon: '🤖' },
    { title: 'Your Vision. Your Blueprint.', desc: 'Built around you — not a template that worked for someone else.', icon: '🧭' }
  ];

  return (
    <section id="process" className="process-section">
      {/* Background image */}
      <div className="process-section-bg">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=60&auto=format"
          alt=""
          aria-hidden="true"
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '1rem' }}
        >
          <span className="section-label">How We Work | كيف نعمل</span>
          <h2 className="section-title">From Conversation<br />to Transformation.</h2>
        </motion.div>

        {/* Process Steps */}
        <div className="process-grid">
          {/* Connector line */}
          <div className="process-connector">
            <motion.div 
              style={{ height: '100%', background: 'var(--secondary)' }}
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="process-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="process-number">{step.num}</div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Tadbeer */}
        <div className="why-section" style={{ background: 'transparent', padding: '5rem 0 0' }}>
          <div className="why-grid" style={{ marginTop: 0 }}>
            <motion.div
              className="why-image"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80&auto=format"
                alt="Team collaboration"
                loading="lazy"
              />
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ marginBottom: '2rem' }}
              >
                <span className="section-label">Why Tadbeer</span>
                <h2 style={{ fontSize: '2rem', color: 'var(--primary)', lineHeight: '1.2' }}>4 Reasons Clients Don't Go Anywhere Else.</h2>
              </motion.div>

              <div className="why-cards">
                {whyCards.map((item, i) => (
                  <motion.div
                    key={i}
                    className="why-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="why-card-icon">{item.icon}</div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
