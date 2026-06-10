import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "\"We've tried consultants before — it didn't work.\"",
      a: "Most consultants deliver a report, not a result. We don't exit at strategy — we stay accountable through full implementation. Results are the only thing we measure."
    },
    {
      q: "\"Are we the right size for this?\"",
      a: "We work with startups finding their footing, mid-size companies ready to scale, and enterprises preparing for expansion. What matters is your ambition, not your current size."
    },
    {
      q: "\"Is Tadbeer local or just international consulting with a local office?\"",
      a: "Born in Muscat, post-Ramadan 2025. Built because the GCC deserved better than generic frameworks. We are local by design, global by expertise."
    },
    {
      q: "\"Will the tech solutions work in our specific business?\"",
      a: "Every solution begins with a full operational analysis. We configure for your specific processes, team, and compliance requirements — never out of a box."
    },
    {
      q: "\"What does the first step cost?\"",
      a: "Your first consultation is completely free, no commitment. If we can't demonstrate value in the first conversation, we haven't earned the right to ask for more."
    }
  ];

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '2rem' }}
        >
          <span className="section-label">FAQ | أسئلة شائعة</span>
          <h2 className="section-title">Honest Answers to<br />Real Questions.</h2>
        </motion.div>
        
        <div className="faq-layout">
          {/* FAQ Accordion */}
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div 
                  className="faq-question"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
