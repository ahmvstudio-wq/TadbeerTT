import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "We have engaged consultants before and the results didn't last.",
      a: "That is the most common reason organisations come here. Strategy without implementation accountability produces documentation, not change. Every Tadbeer engagement is structured around sustained outcomes — the work does not conclude when the report is submitted."
    },
    {
      q: "Are we the right size for this?",
      a: "Scale is not the criterion. The organisations Tadbeer works with range from growth-stage businesses finding their operational footing to established enterprises preparing for the next stage of expansion. What matters is whether the objective is serious."
    },
    {
      q: "Is this a local firm or an international firm with a local office?",
      a: "Founded in Muscat in 2025. Built here because organisations in Oman and the GCC needed a firm that understood this market from the inside — not one that arrived with frameworks designed for a different operating environment."
    },
    {
      q: "Will these solutions work for our specific context?",
      a: "Every engagement begins with a detailed analysis of your processes, your team, your compliance requirements, and the specific constraints of your industry. The configuration follows from that."
    },
    {
      q: "What does the first step cost?",
      a: "Nothing. If the first conversation does not demonstrate clear value, there is no basis for proposing anything further. That is the standard applied to every initial engagement."
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
          <h2 className="section-title">The Questions Worth<br />Answering Directly.</h2>
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
