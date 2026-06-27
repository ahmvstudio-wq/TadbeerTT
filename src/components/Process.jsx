import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    { 
      num: '01',
      title: "Initial Consultation", 
      desc: "A direct conversation to understand your business, your priorities, and the obstacles that are currently costing you the most.", 
    },
    { 
      num: '02',
      title: "Operational Analysis", 
      desc: "Root causes examined across operations, technology, marketing, and organisational structure. Not symptoms — causes.", 
    },
    { 
      num: '03',
      title: "Strategic Architecture", 
      desc: "We design the system required to solve the problem, aligning technology choices and human capital requirements to your specific commercial goals.", 
    },
    { 
      num: '04',
      title: "Deployment & Handoff", 
      desc: "We implement the solution, train your people, and remain accountable until the system is operational and the results are measurable.", 
    }
  ];

  const whyCards = [
    { title: 'Local Knowledge, International Standards', desc: 'Built in Muscat. Shaped by years of working with organisations across Oman and the GCC. The frameworks are international. The understanding of this market is not generic.', icon: '🌍' },
    { title: 'Single-Firm Accountability', desc: 'One team. One point of contact. No handoffs to implementation partners who were not in the original conversation.', icon: '🔗' },
    { title: 'Technology That Serves the Business', desc: 'Advanced tools are used at every stage — not because they are impressive, but because they make the work more accurate, faster, and more durable.', icon: '⚙️' },
    { title: 'Configured to Your Operation', desc: 'Every engagement is designed from the ground up. A framework that worked in a different sector, or a different country, is a starting point at best.', icon: '🧭' }
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
          transition={{ type: "spring", bounce: 0.1, duration: 1.2 }}
          style={{ marginBottom: '1rem' }}
        >
          <span className="section-label">How We Work | منهجيتنا</span>
          <h2 className="section-title">Four Stages. No Handoffs.<br />No Early Exits.</h2>
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

        {/* Why Tadbeer */}
        <div className="why-section" style={{ background: 'transparent', padding: '5rem 0 0' }}>
          <div className="why-grid" style={{ marginTop: 0 }}>
            <motion.div
              className="why-image"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.1, duration: 1.4 }}
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
                transition={{ type: "spring", bounce: 0.1, duration: 1.2 }}
                style={{ marginBottom: '2rem' }}
              >
                <span className="section-label">Why Tadbeer</span>
                <h2 style={{ fontSize: '2rem', color: 'var(--primary)', lineHeight: '1.2' }}>The Difference Is in What Happens After the Proposal.</h2>
              </motion.div>

              <div className="why-cards">
                {whyCards.map((item, i) => (
                  <motion.div
                    key={i}
                    className="why-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.8, delay: i * 0.08 }}
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
