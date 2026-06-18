import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServicePageHero from '../components/ServicePageHero';
import { Download, Filter, Search, FileText, BookOpen, BarChart3 } from 'lucide-react';
import { fetchResources } from '../supabaseService';
import LeadCaptureModal from '../components/LeadCaptureModal';

const getIconForType = (type) => {
  const t = type.toLowerCase();
  if (t.includes('course') || t.includes('education')) return <BookOpen size={14} />;
  if (t.includes('report') || t.includes('metric') || t.includes('analytics')) return <BarChart3 size={14} />;
  return <FileText size={14} />;
};

const ResourceLibraryPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);

  useEffect(() => {
    const loadResources = async () => {
      setLoading(true);
      const data = await fetchResources();
      setResources(data);
      setLoading(false);
    };
    loadResources();
  }, []);

  const handleDownload = (resource) => {
    setSelectedResource(resource);
    setModalOpen(true);
  };

  const categories = ['All', 'Digital Transformation', 'SEO & Marketing', 'ERP & Software', 'Human Capital', 'Business Strategy', 'AI & Automation'];

  const filteredResources = activeFilter === 'All' 
    ? resources 
    : resources.filter(r => r.category === activeFilter);

  return (
    <div className="page-wrapper">
      <ServicePageHero 
        title="Free Resource Library"
        subtitle="Expert Knowledge at Your Fingertips"
        description="Access curated guides, reports, and courses from the world's leading institutions — Google, McKinsey, HBR, and more. All free. Enter your details to download instantly."
        breadcrumbs={['Home', 'Resources']}
      />

      <section style={{ padding: '4rem 5%', background: 'var(--bg)', minHeight: '600px' }}>
        <div className="container">
          
          {/* Filter Bar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontWeight: '600', fontSize: '0.9rem' }}>
              <Filter size={18} /> Filter by Category
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  style={{
                    padding: '0.5rem 1.25rem',
                    background: activeFilter === cat ? 'var(--primary)' : 'white',
                    color: activeFilter === cat ? 'white' : 'var(--text-main)',
                    border: activeFilter === cat ? '1.5px solid var(--primary)' : '1.5px solid var(--border)',
                    borderRadius: '30px',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    fontWeight: activeFilter === cat ? '600' : '400',
                    transition: 'all 0.2s'
                  }}
                >
                  {cat} {activeFilter !== cat && <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>({resources.filter(r => cat === 'All' || r.category === cat).length})</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          {loading ? (
            <div style={{ textAlign: 'center', padding: '5rem', color: 'var(--text-muted)' }}>
              <div className="spinner" style={{ border: '3px solid rgba(24,79,91,0.1)', borderTop: '3px solid var(--primary)', borderRadius: '50%', width: '30px', height: '30px', animation: 'spin 1s linear infinite', margin: '0 auto 1rem' }}></div>
              <p>Loading library resources...</p>
              <style>{`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          ) : (
            <>
              <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                <AnimatePresence>
                  {filteredResources.map((res) => (
                    <motion.div 
                      key={res.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      style={{ background: 'white', borderRadius: '16px', border: '1px solid var(--border)', padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--secondary)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.06)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', padding: '0.3rem 0.75rem', background: 'rgba(202,169,76,0.1)', color: 'var(--secondary)', borderRadius: '50px', fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase' }}>
                          {res.category}
                        </span>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                          {getIconForType(res.type)} {res.type}
                        </span>
                      </div>
                      
                      {res.thumbnail && (
                        <div style={{ width: '100%', height: '140px', borderRadius: '8px', overflow: 'hidden', marginBottom: '1rem', marginTop: '0.5rem' }}>
                          <img src={res.thumbnail} alt={res.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      )}
                      
                      <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', color: 'var(--text-main)', lineHeight: '1.4' }}>{res.title}</h3>
                      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', flex: 1, fontSize: '0.9rem', lineHeight: '1.6' }}>{res.desc || res.description}</p>
                      
                      <button 
                        onClick={() => handleDownload(res)}
                        className="btn"
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%', background: 'var(--primary)', color: 'white', border: 'none', padding: '0.75rem', borderRadius: '8px', fontWeight: '600', fontSize: '0.9rem', cursor: 'pointer' }}
                      >
                        <Download size={16} /> Access Free Resource
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {filteredResources.length === 0 && (
                <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
                  <Search size={48} style={{ margin: '0 auto 1rem', opacity: 0.2 }} />
                  <h3>No resources found for this category.</h3>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <LeadCaptureModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        resourceTitle={selectedResource?.title} 
        resourceType={selectedResource?.category || selectedResource?.type} 
        resourceLink={selectedResource?.link}
      />
    </div>
  );
};

export default ResourceLibraryPage;
