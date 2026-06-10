import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const milestones = [
  {
    year: 'Post-Ramadan 2025',
    emoji: '🌙',
    title: 'The Spark',
    summary: 'Founded in the heart of Muscat.',
    detail: 'Our founders witnessed a critical gap: brilliant entrepreneurs across Oman lacked access to international-standard expertise. Tadbeer was born — meaning "planning with wisdom" (تدبير) — to bridge that gap.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80&auto=format',
  },
  {
    year: 'Q2 2025',
    emoji: '🤝',
    title: 'First Clients',
    summary: 'Trusted by leading Omani brands.',
    detail: 'From Al Harrasi Rope Factory to Gloria Jean\'s and Oman Air — businesses across F&B, government, manufacturing, and telecom chose Tadbeer as their transformation partner.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80&auto=format',
  },
  {
    year: 'Mid 2025',
    emoji: '🚀',
    title: 'The 4 Pillars',
    summary: 'Full-spectrum services operational.',
    detail: 'Digital Marketing, Software Solutions (ERP, WMS, HRMS), AI & Next-Gen Tech, and Human Capital Management — all four pillars fully launched with dedicated international specialists.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80&auto=format',
  },
  {
    year: 'Late 2025',
    emoji: '📈',
    title: 'Scaling Impact',
    summary: '15+ clients, 40+ transformations, 1M+ OMR managed.',
    detail: 'Delivering measurable results: operational efficiency, brand authority, AI-powered infrastructure, and compliant HR systems across every client engagement.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format',
  },
  {
    year: '2025–2026',
    emoji: '🌍',
    title: 'GCC Expansion',
    summary: 'Beyond Oman — UAE, Saudi, and beyond.',
    detail: 'Expanding our network of consultants and technology specialists across the Gulf, bringing the same accountability and expertise to new markets.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80&auto=format',
  },
  {
    year: 'Vision 2040',
    emoji: '🔮',
    title: 'The Future',
    summary: 'Aligned with Oman\'s national vision.',
    detail: 'Building sustainable competitive advantages for businesses that outlast campaigns, trends, and market cycles — fully aligned with Oman Vision 2040 for long-term national prosperity.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80&auto=format',
  }
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Our Journey | رحلتنا</span>
          <h2 className="section-title">From a Vision in Muscat<br />to Transforming the GCC.</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '1rem auto 0' }}>
            Click any milestone to explore the full story.
          </p>
        </motion.div>

        <div className="timeline-container">
          {/* Vertical line */}
          <div className="timeline-line">
            <motion.div 
              className="timeline-line-fill"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Node */}
              <div 
                className={`timeline-node ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleItem(index)}
                title="Click to expand"
              >
                {milestone.emoji}
              </div>

              {/* Content Card */}
              <div 
                className={`timeline-content ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleItem(index)}
              >
                <div className="timeline-year">{milestone.year}</div>
                <h3 className="timeline-title">{milestone.title}</h3>
                <p className="timeline-desc">{milestone.summary}</p>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginTop: '1rem', fontSize: '0.95rem' }}>
                        {milestone.detail}
                      </p>
                      <img 
                        src={milestone.image} 
                        alt={milestone.title}
                        className="timeline-image"
                        loading="lazy"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '4rem' }}
        >
          {[
            { icon: '🫂', title: 'You Will Always Come First', ar: 'الإنسان أولاً', desc: 'Every recommendation is built around your vision — not a template.' },
            { icon: '⚙️', title: 'You Will Always Have Clarity', ar: 'العمليات بوضوح', desc: 'No jargon. No ambiguity. Full transparency at every step.' },
            { icon: '🌱', title: 'Built to Last', ar: 'الاستدامة', desc: 'Sustainable growth aligned with Oman Vision 2040.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5, borderColor: 'var(--secondary)' }}
              style={{ background: 'var(--bg-alt)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)', transition: 'var(--transition)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                <h4 style={{ color: 'var(--primary)', margin: 0, fontSize: '1.05rem' }}>{item.title}</h4>
                <span style={{ color: 'var(--secondary)', fontFamily: 'var(--font-ar)', fontSize: '1rem', fontWeight: '600', marginLeft: 'auto' }}>{item.ar}</span>
              </div>
              <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.5', fontSize: '0.9rem' }}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
