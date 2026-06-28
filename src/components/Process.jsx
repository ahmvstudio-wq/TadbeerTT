import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    { 
      num: '01',
      title: "Initial Consultation", 
      desc: "A direct conversation to understand priorities, constraints, and what is costing the business the most.", 
    },
    { 
      num: '02',
      title: "Operational Analysis", 
      desc: "Root causes examined across operations, systems, marketing performance, and organisational structure.", 
    },
    { 
      num: '03',
      title: "Strategic Architecture", 
      desc: "A tailored roadmap that aligns process, governance, technology choices, and people requirements to your goals.", 
    },
    { 
      num: '04',
      title: "Deployment and Handoff", 
      desc: "Implementation support, training, and accountability until outcomes are measurable.", 
    }
  ];

  return (
    <section id="process" className="process-section" style={{ paddingBottom: '6rem' }}>
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
          transition={{ type: "spring", bounce: 0.1, duration: 1.2 }}
          style={{ marginBottom: '4rem' }}
        >
          <span className="section-label">How We Work</span>
          <h2 className="section-title">Four stages. One team.<br />Clear accountability.</h2>
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
              transition={{ type: "spring", bounce: 0.15, duration: 0.8, delay: index * 0.12 }}
            >
              <div className="process-number">{step.num}</div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
