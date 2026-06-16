import React, { useState, useEffect } from 'react';
import { 
  X, CheckCircle, Plus, LogOut, Trash2, Edit, Download, Save, 
  Briefcase, BookOpen, Users, Settings, Key, Phone, MessageSquare, ExternalLink
} from 'lucide-react';

// Default resources to seed local storage if empty
const DEFAULT_RESOURCES = [
  { 
    id: '1',
    title: "Google's Digital Marketing & E-commerce Certificate", 
    category: "SEO & Marketing", 
    type: "Free Course", 
    desc: "Google's official free professional certificate covering SEO, SEM, email marketing, and analytics — industry recognized.", 
    link: "https://grow.google/certificates/digital-marketing-ecommerce/",
    external: true
  },
  { 
    id: '2',
    title: "HubSpot: The Ultimate Guide to AI in Marketing", 
    category: "AI & Automation", 
    type: "Free Guide", 
    desc: "Comprehensive guide on leveraging AI for content creation, lead scoring, customer segmentation, and campaign optimization.", 
    link: "https://blog.hubspot.com/marketing/ai-marketing",
    external: true
  },
  { 
    id: '3',
    title: "McKinsey: The State of AI — Global Survey", 
    category: "Digital Transformation", 
    type: "Report", 
    desc: "McKinsey's latest global survey on AI adoption, ROI benchmarks, and implementation strategies across industries.", 
    link: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
    external: true
  },
  { 
    id: '4',
    title: "Odoo ERP Implementation Playbook", 
    category: "ERP & Software", 
    type: "Free Guide", 
    desc: "Step-by-step deployment playbook for Odoo ERP covering configuration, data migration, user training, and go-live.", 
    link: "https://www.odoo.com/documentation/17.0/",
    external: true
  },
  { 
    id: '5',
    title: "SHRM: Future of Work — HR Trends 2025-2026", 
    category: "Human Capital", 
    type: "Report", 
    desc: "SHRM's comprehensive analysis of workforce trends, hybrid work models, employee engagement, and talent acquisition.", 
    link: "https://www.shrm.org/topics-tools/news/future-of-work",
    external: true
  },
  { 
    id: '6',
    title: "Google Analytics 4 Complete Guide", 
    category: "SEO & Marketing", 
    type: "Free Course", 
    desc: "Master GA4 with Google's free Skillshop courses — from setup and event tracking to advanced attribution models.", 
    link: "https://skillshop.withgoogle.com/intl/en/analytics",
    external: true
  },
  { 
    id: '7',
    title: "Harvard Business Review: Scaling AI", 
    category: "Business Strategy", 
    type: "Article Collection", 
    desc: "HBR's curated collection of articles on building an AI-first organization, overcoming adoption barriers, and measuring ROI.", 
    link: "https://hbr.org/topic/subject/ai-and-machine-learning",
    external: true
  },
  { 
    id: '8',
    title: "Microsoft: AI Transformation Playbook", 
    category: "AI & Automation", 
    type: "Free Guide", 
    desc: "Microsoft's blueprint for enterprise AI adoption covering use case identification, governance, and responsible deployment.", 
    link: "https://www.microsoft.com/en-us/ai/ai-business-school",
    external: true
  },
  { 
    id: '9',
    title: "Deloitte: GCC Economic Outlook & Digital Economy", 
    category: "Business Strategy", 
    type: "Report", 
    desc: "Analysis of GCC economic diversification, Oman Vision 2040, and digital economy growth opportunities.", 
    link: "https://www2.deloitte.com/xe/en/pages/about-deloitte/topics/gcc-country-reports.html",
    external: true
  },
  { 
    id: '10',
    title: "Coursera: Google Project Management Certificate", 
    category: "Business Strategy", 
    type: "Free Course", 
    desc: "Free professional certificate from Google covering agile methodologies, stakeholder management, and project execution.", 
    link: "https://www.coursera.org/professional-certificates/google-project-management",
    external: true
  },
  { 
    id: '11',
    title: "ILO: Labour Market Reports — Arab States", 
    category: "Human Capital", 
    type: "Report", 
    desc: "International Labour Organization data on employment trends, wage benchmarking, and Omanization compliance.", 
    link: "https://www.ilo.org/arabstates",
    external: true
  },
  { 
    id: '12',
    title: "Salesforce: State of Marketing Report", 
    category: "Digital Transformation", 
    type: "Report", 
    desc: "Salesforce's annual survey of 4,800+ marketers on AI adoption, personalization, data strategy, and ROI measurement.", 
    link: "https://www.salesforce.com/resources/research-reports/state-of-marketing/",
    external: true
  }
];

const defaultSettings = {
  adminPassword: 'tadbeer2025',
  whatsappPhone: '96876307656',
  msgDefault: "Hi Tadbeer, I'd like to learn more about your business transformation services.",
  msgMarketing: "Hi Tadbeer, I'm visiting your website and want to discuss Digital Marketing and Growth systems for my business.",
  msgSoftware: "Hi Tadbeer, I'm visiting your website and want to discuss Enterprise Software and ERP implementation.",
  msgAI: "Hi Tadbeer, I'm visiting your website and want to discuss custom AI integrations and automation.",
  msgHumanCapital: "Hi Tadbeer, I'm visiting your website and want to discuss Human Capital management and Omanization compliance.",
  msgResources: "Hi Tadbeer, I'm visiting your resources page and would like to learn more about your consulting services."
};

const emptyJob = {
  title: '',
  department: '',
  location: 'Muscat, Oman',
  type: 'Full-time',
  description: '',
  requirements: '',
  formUrl: ''
};

const emptyResource = {
  title: '',
  category: 'Digital Transformation',
  type: 'Free Guide',
  desc: '',
  link: '',
  external: true
};

const CareersAdmin = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('jobs'); // 'jobs', 'resources', 'leads', 'settings'
  
  // Data stores
  const [jobs, setJobs] = useState([]);
  const [resources, setResources] = useState([]);
  const [leads, setLeads] = useState([]);
  const [settings, setSettings] = useState(defaultSettings);

  // Form states
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [jobForm, setJobForm] = useState(emptyJob);
  const [resourceForm, setResourceForm] = useState(emptyResource);
  const [settingsForm, setSettingsForm] = useState(defaultSettings);
  
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // 1. Initial Authentication Check
  useEffect(() => {
    const auth = sessionStorage.getItem('tadbeer_admin_auth');
    if (auth === 'true') {
      setAuthenticated(true);
    }
  }, []);

  // 2. Fetch Password dynamic check
  const getAdminPassword = () => {
    const storedSettings = localStorage.getItem('tadbeer_settings');
    if (storedSettings) {
      try {
        const parsed = JSON.parse(storedSettings);
        if (parsed.adminPassword) return parsed.adminPassword;
      } catch (e) {}
    }
    return 'tadbeer2025';
  };

  // 3. Load Datasets when Authenticated
  useEffect(() => {
    if (authenticated) {
      // Jobs
      const storedJobs = localStorage.getItem('tadbeer_jobs');
      if (storedJobs) {
        setJobs(JSON.parse(storedJobs));
      }

      // Resources
      const storedResources = localStorage.getItem('tadbeer_resources');
      if (storedResources) {
        setResources(JSON.parse(storedResources));
      } else {
        setResources(DEFAULT_RESOURCES);
        localStorage.setItem('tadbeer_resources', JSON.stringify(DEFAULT_RESOURCES));
      }

      // Settings
      const storedSettings = localStorage.getItem('tadbeer_settings');
      if (storedSettings) {
        const parsed = JSON.parse(storedSettings);
        setSettings(parsed);
        setSettingsForm(parsed);
      } else {
        localStorage.setItem('tadbeer_settings', JSON.stringify(defaultSettings));
      }

      // Leads
      const storedLeads = localStorage.getItem('tadbeer_leads');
      if (storedLeads) {
        setLeads(JSON.parse(storedLeads));
      }
    }
  }, [authenticated, activeTab]);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // Auth actions
  const handleLogin = (e) => {
    e.preventDefault();
    const targetPassword = getAdminPassword();
    if (password === targetPassword) {
      setAuthenticated(true);
      sessionStorage.setItem('tadbeer_admin_auth', 'true');
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    sessionStorage.removeItem('tadbeer_admin_auth');
    setPassword('');
  };

  // Jobs Actions
  const handleJobSubmit = (e) => {
    e.preventDefault();
    const requirementsArray = jobForm.requirements
      .split('\n')
      .map(r => r.trim())
      .filter(r => r.length > 0);

    let updatedJobs;
    if (editingId) {
      updatedJobs = jobs.map(j => 
        j.id === editingId 
          ? { ...jobForm, id: editingId, requirements: requirementsArray, posted: j.posted }
          : j
      );
      triggerToast('Job posting updated successfully!');
    } else {
      const newJob = {
        ...jobForm,
        id: Date.now().toString(),
        requirements: requirementsArray,
        posted: new Date().toISOString().split('T')[0]
      };
      updatedJobs = [...jobs, newJob];
      triggerToast('Job posting created successfully!');
    }

    setJobs(updatedJobs);
    localStorage.setItem('tadbeer_jobs', JSON.stringify(updatedJobs));
    setJobForm(emptyJob);
    setEditingId(null);
    setShowForm(false);
  };

  const handleJobEdit = (job) => {
    setJobForm({
      ...job,
      requirements: job.requirements.join('\n')
    });
    setEditingId(job.id);
    setShowForm(true);
  };

  const handleJobDelete = (id) => {
    if (window.confirm('Delete this job posting?')) {
      const updated = jobs.filter(j => j.id !== id);
      setJobs(updated);
      localStorage.setItem('tadbeer_jobs', JSON.stringify(updated));
      triggerToast('Job posting deleted.');
    }
  };

  // Resources Actions
  const handleResourceSubmit = (e) => {
    e.preventDefault();
    let updatedRes;
    if (editingId) {
      updatedRes = resources.map(r => 
        r.id === editingId 
          ? { ...resourceForm, id: editingId }
          : r
      );
      triggerToast('Resource updated successfully!');
    } else {
      const newRes = {
        ...resourceForm,
        id: Date.now().toString()
      };
      updatedRes = [...resources, newRes];
      triggerToast('Resource added successfully!');
    }

    setResources(updatedRes);
    localStorage.setItem('tadbeer_resources', JSON.stringify(updatedRes));
    setResourceForm(emptyResource);
    setEditingId(null);
    setShowForm(false);
  };

  const handleResourceEdit = (res) => {
    setResourceForm(res);
    setEditingId(res.id);
    setShowForm(true);
  };

  const handleResourceDelete = (id) => {
    if (window.confirm('Delete this resource?')) {
      const updated = resources.filter(r => r.id !== id);
      setResources(updated);
      localStorage.setItem('tadbeer_resources', JSON.stringify(updated));
      triggerToast('Resource deleted.');
    }
  };

  // Leads Actions
  const handleLeadDelete = (idx) => {
    if (window.confirm('Delete this lead entry?')) {
      const updated = leads.filter((_, i) => i !== idx);
      setLeads(updated);
      localStorage.setItem('tadbeer_leads', JSON.stringify(updated));
      triggerToast('Lead entry removed.');
    }
  };

  const handleClearAllLeads = () => {
    if (window.confirm('Are you absolutely sure you want to delete ALL captured leads? This cannot be undone.')) {
      if (window.confirm('Confirming second time: delete ALL leads?')) {
        setLeads([]);
        localStorage.setItem('tadbeer_leads', JSON.stringify([]));
        triggerToast('All leads deleted.');
      }
    }
  };

  const handleExportCSV = () => {
    if (leads.length === 0) return;
    const headers = ['Date', 'Name', 'Email', 'Company', 'Phone', 'Resource'];
    const rows = leads.map(l => [
      l.date?.split('T')[0] || '',
      l.name || '',
      l.email || '',
      l.company || '',
      l.phone || '',
      l.resource || ''
    ]);
    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(','), ...rows.map(e => e.map(val => `"${val.replace(/"/g, '""')}"`).join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `tadbeer_leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Settings Actions
  const handleSettingsSubmit = (e) => {
    e.preventDefault();
    setSettings(settingsForm);
    localStorage.setItem('tadbeer_settings', JSON.stringify(settingsForm));
    triggerToast('Settings updated successfully!');
  };

  // Login Screen
  if (!authenticated) {
    return (
      <div className="admin-login" style={{ boxShadow: '0 15px 35px rgba(24,79,91,0.1)' }}>
        <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(24,79,91,0.05)', color: 'var(--primary)', borderRadius: '50%', marginBottom: '1.5rem' }}>
          <Key size={32} />
        </div>
        <h2 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.5rem' }}>Admin Access</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>Enter password to manage Tadbeer operational configurations.</p>
        <form onSubmit={handleLogin}>
          <input 
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '0.85rem', border: '1px solid var(--border)', borderRadius: '8px', marginBottom: '1rem', outline: 'none' }}
            autoFocus
          />
          {error && <p style={{ color: '#dc3545', fontSize: '0.85rem', marginBottom: '1.5rem', textAlign: 'left' }}>{error}</p>}
          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
            Verify Credentials
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-container" style={{ position: 'relative' }}>
      
      {/* Toast Notification */}
      {showToast && (
        <div style={{
          position: 'fixed', top: '2rem', right: '2rem', background: 'var(--primary)', color: 'white',
          padding: '1rem 1.5rem', borderRadius: '8px', zIndex: 1100, display: 'flex', alignItems: 'center', gap: '0.5rem',
          boxShadow: '0 10px 25px rgba(0,0,0,0.15)', borderLeft: '4px solid var(--secondary)'
        }}>
          <CheckCircle size={18} color="var(--secondary)" />
          <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>{toastMessage}</span>
        </div>
      )}

      {/* Main Header */}
      <div className="admin-header">
        <div>
          <h1 style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: '0.25rem', fontWeight: '700' }}>Operational Panel</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Configure jobs, resources, leads, and default settings.</p>
        </div>
        <button 
          className="btn btn-secondary"
          onClick={handleLogout}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', padding: '0.5rem 1rem' }}
        >
          <LogOut size={16} /> Logout
        </button>
      </div>

      {/* Tab Navigation */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', marginBottom: '2rem', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
        {[
          { id: 'jobs', label: '💼 Job Openings', count: jobs.length },
          { id: 'resources', label: '📚 Resource Library', count: resources.length },
          { id: 'leads', label: '👥 Captured Leads', count: leads.length },
          { id: 'settings', label: '⚙️ System Config', count: null }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => { setActiveTab(tab.id); setShowForm(false); setEditingId(null); setJobForm(emptyJob); setResourceForm(emptyResource); }}
            style={{
              padding: '0.6rem 1.25rem',
              background: activeTab === tab.id ? 'var(--primary)' : 'transparent',
              color: activeTab === tab.id ? 'white' : 'var(--text-main)',
              border: 'none',
              borderRadius: '8px',
              fontSize: '0.9rem',
              fontWeight: '600',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            {tab.label}
            {tab.count !== null && (
              <span style={{ 
                fontSize: '0.75rem', 
                background: activeTab === tab.id ? 'var(--secondary)' : 'rgba(24,79,91,0.08)',
                color: activeTab === tab.id ? 'var(--primary)' : 'var(--primary)',
                padding: '0.1rem 0.45rem', 
                borderRadius: '10px',
                fontWeight: '700'
              }}>
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* TABS WORKSPACES */}
      
      {/* 1. JOBS TAB */}
      {activeTab === 'jobs' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ color: 'var(--primary)', margin: 0 }}>Active Job Postings</h3>
            {!showForm && (
              <button className="btn btn-primary" onClick={() => { setShowForm(true); setEditingId(null); setJobForm(emptyJob); }} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', padding: '0.6rem 1.25rem' }}>
                <Plus size={16} /> Add New Job
              </button>
            )}
          </div>

          {showForm && (
            <div className="admin-form">
              <h3 style={{ color: 'var(--primary)' }}>{editingId ? 'Edit Job Opening' : 'Create Job Opening'}</h3>
              <form onSubmit={handleJobSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Job Title *</label>
                    <input name="title" value={jobForm.title} onChange={(e) => setJobForm({...jobForm, title: e.target.value})} required placeholder="e.g. ERP System Architect" />
                  </div>
                  <div className="form-group">
                    <label>Department *</label>
                    <input name="department" value={jobForm.department} onChange={(e) => setJobForm({...jobForm, department: e.target.value})} required placeholder="e.g. Software Solutions" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Location</label>
                    <input name="location" value={jobForm.location} onChange={(e) => setJobForm({...jobForm, location: e.target.value})} placeholder="e.g. Muscat, Oman" />
                  </div>
                  <div className="form-group">
                    <label>Job Type</label>
                    <select name="type" value={jobForm.type} onChange={(e) => setJobForm({...jobForm, type: e.target.value})}>
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Contract</option>
                      <option>Internship</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Description *</label>
                  <textarea name="description" value={jobForm.description} onChange={(e) => setJobForm({...jobForm, description: e.target.value})} required placeholder="Describe the job duties and qualifications needed..." style={{ minHeight: '100px' }} />
                </div>

                <div className="form-group">
                  <label>Requirements (one per line) *</label>
                  <textarea name="requirements" value={jobForm.requirements} onChange={(e) => setJobForm({...jobForm, requirements: e.target.value})} placeholder="5+ years ERP experience&#10;Omanization compliance understanding&#10;Arabic communication skills" style={{ minHeight: '120px' }} />
                </div>

                <div className="form-group">
                  <label>Google Forms Application Link (optional)</label>
                  <input name="formUrl" value={jobForm.formUrl} onChange={(e) => setJobForm({...jobForm, formUrl: e.target.value})} placeholder="https://docs.google.com/forms/d/e/..." />
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
                  <button type="submit" className="btn btn-primary">
                    <Save size={16} style={{ marginRight: '0.35rem' }} /> {editingId ? 'Update Posting' : 'Publish Job'}
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={() => { setShowForm(false); setEditingId(null); setJobForm(emptyJob); }}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="admin-job-list">
            {jobs.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem', border: '1px dashed var(--border)', borderRadius: '12px', background: '#fff' }}>
                <Briefcase size={40} style={{ color: 'var(--text-muted)', opacity: 0.3, marginBottom: '1rem' }} />
                <h4 style={{ margin: 0, color: 'var(--text-main)' }}>No openings active</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.25rem' }}>Click "+ Add New Job" to post an opening.</p>
              </div>
            ) : (
              jobs.map(job => (
                <div key={job.id} className="admin-job-item" style={{ background: '#fff' }}>
                  <div>
                    <h4 style={{ color: 'var(--primary)', marginBottom: '0.25rem', fontSize: '1.1rem', fontWeight: '700' }}>{job.title}</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      <span>📂 {job.department}</span>
                      <span>•</span>
                      <span>📍 {job.location}</span>
                      <span>•</span>
                      <span>⏱️ {job.type}</span>
                      <span>•</span>
                      <span>📅 {job.posted}</span>
                    </div>
                  </div>
                  <div className="admin-job-actions">
                    <button className="admin-btn admin-btn-edit" onClick={() => handleJobEdit(job)}>Edit</button>
                    <button className="admin-btn admin-btn-delete" onClick={() => handleJobDelete(job.id)}>Delete</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* 2. RESOURCES TAB */}
      {activeTab === 'resources' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ color: 'var(--primary)', margin: 0 }}>Manage Free Resources</h3>
            {!showForm && (
              <button className="btn btn-primary" onClick={() => { setShowForm(true); setEditingId(null); setResourceForm(emptyResource); }} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', padding: '0.6rem 1.25rem' }}>
                <Plus size={16} /> Add New Resource
              </button>
            )}
          </div>

          {showForm && (
            <div className="admin-form">
              <h3 style={{ color: 'var(--primary)' }}>{editingId ? 'Edit Resource' : 'Add New Resource'}</h3>
              <form onSubmit={handleResourceSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Resource Title *</label>
                    <input name="title" value={resourceForm.title} onChange={(e) => setResourceForm({...resourceForm, title: e.target.value})} required placeholder="e.g. Omanization Quota Checklist 2026" />
                  </div>
                  <div className="form-group">
                    <label>Library Category *</label>
                    <select name="category" value={resourceForm.category} onChange={(e) => setResourceForm({...resourceForm, category: e.target.value})}>
                      <option>Digital Transformation</option>
                      <option>SEO & Marketing</option>
                      <option>ERP & Software</option>
                      <option>Human Capital</option>
                      <option>Business Strategy</option>
                      <option>AI & Automation</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Resource Type *</label>
                    <input name="type" value={resourceForm.type} onChange={(e) => setResourceForm({...resourceForm, type: e.target.value})} required placeholder="e.g. Free Guide, Excel Template, Report" />
                  </div>
                  <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', height: '100%', paddingTop: '1.75rem' }}>
                    <input type="checkbox" id="external" checked={resourceForm.external} onChange={(e) => setResourceForm({...resourceForm, external: e.target.checked})} style={{ width: 'auto', margin: 0 }} />
                    <label htmlFor="external" style={{ margin: 0, cursor: 'pointer' }}>Open in new tab (External link)</label>
                  </div>
                </div>

                <div className="form-group">
                  <label>Redirect URL / Download Link *</label>
                  <input name="link" value={resourceForm.link} onChange={(e) => setResourceForm({...resourceForm, link: e.target.value})} required placeholder="e.g. https://drive.google.com/file/... or website URL" />
                </div>

                <div className="form-group">
                  <label>Brief Description *</label>
                  <textarea name="desc" value={resourceForm.desc} onChange={(e) => setResourceForm({...resourceForm, desc: e.target.value})} required placeholder="Summary of what the resource contains (visible in card)..." style={{ minHeight: '100px' }} />
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
                  <button type="submit" className="btn btn-primary">
                    <Save size={16} style={{ marginRight: '0.35rem' }} /> {editingId ? 'Update Resource' : 'Add Resource'}
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={() => { setShowForm(false); setEditingId(null); setResourceForm(emptyResource); }}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="admin-job-list">
            {resources.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem', border: '1px dashed var(--border)', borderRadius: '12px', background: '#fff' }}>
                <BookOpen size={40} style={{ color: 'var(--text-muted)', opacity: 0.3, marginBottom: '1rem' }} />
                <h4 style={{ margin: 0, color: 'var(--text-main)' }}>No resources added</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.25rem' }}>Click "+ Add New Resource" to add materials.</p>
              </div>
            ) : (
              resources.map(res => (
                <div key={res.id} className="admin-job-item" style={{ background: '#fff' }}>
                  <div style={{ flex: 1, minWidth: '250px' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.35rem' }}>
                      <span style={{ fontSize: '0.75rem', background: 'rgba(202,169,76,0.1)', color: 'var(--secondary)', padding: '0.15rem 0.5rem', borderRadius: '50px', fontWeight: '700' }}>
                        {res.category}
                      </span>
                      <span style={{ fontSize: '0.75rem', background: 'rgba(24,79,91,0.05)', color: 'var(--primary)', padding: '0.15rem 0.5rem', borderRadius: '50px', fontWeight: '600' }}>
                        {res.type}
                      </span>
                    </div>
                    <h4 style={{ color: 'var(--primary)', margin: '0 0 0.25rem 0', fontSize: '1.1rem', fontWeight: '700' }}>{res.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 0 0.5rem 0', lineHeight: '1.4' }}>{res.desc}</p>
                    <a href={res.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', color: 'var(--secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', textDecoration: 'underline' }}>
                      <ExternalLink size={12} /> View Link
                    </a>
                  </div>
                  <div className="admin-job-actions" style={{ alignSelf: 'center' }}>
                    <button className="admin-btn admin-btn-edit" onClick={() => handleResourceEdit(res)}>Edit</button>
                    <button className="admin-btn admin-btn-delete" onClick={() => handleResourceDelete(res.id)}>Delete</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* 3. CAPTURED LEADS TAB */}
      {activeTab === 'leads' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <h3 style={{ color: 'var(--primary)', margin: 0 }}>Visitor Captured Leads</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Captured from assessments and resource downloads</p>
            </div>
            {leads.length > 0 && (
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button className="btn btn-primary" onClick={handleExportCSV} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', padding: '0.5rem 1rem' }}>
                  <Download size={15} /> Export CSV
                </button>
                <button className="btn btn-secondary" onClick={handleClearAllLeads} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', padding: '0.5rem 1rem', background: 'rgba(220,53,69,0.1)', color: '#dc3545', border: '1px solid rgba(220,53,69,0.2)' }}>
                  <Trash2 size={15} /> Clear All
                </button>
              </div>
            )}
          </div>

          <div style={{ overflowX: 'auto', background: '#fff', borderRadius: '12px', border: '1px solid var(--border)', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            {leads.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                <Users size={40} style={{ color: 'var(--text-muted)', opacity: 0.3, marginBottom: '1rem' }} />
                <h4 style={{ margin: 0 }}>No captured leads yet</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.25rem' }}>Visitor submissions will be saved here dynamically.</p>
              </div>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: 'var(--primary)', color: '#fff', borderBottom: '2px solid var(--border)' }}>
                    <th style={{ padding: '1rem' }}>Date</th>
                    <th style={{ padding: '1rem' }}>Name</th>
                    <th style={{ padding: '1rem' }}>Email</th>
                    <th style={{ padding: '1rem' }}>Company</th>
                    <th style={{ padding: '1rem' }}>Phone</th>
                    <th style={{ padding: '1rem' }}>Resource Request</th>
                    <th style={{ padding: '1rem', textAlign: 'center' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--border)' }} className="lead-row">
                      <td style={{ padding: '1rem', whiteSpace: 'nowrap' }}>{lead.date?.split('T')[0] || ''}</td>
                      <td style={{ padding: '1rem', fontWeight: '700', color: 'var(--primary)' }}>{lead.name}</td>
                      <td style={{ padding: '1rem' }}><a href={`mailto:${lead.email}`} style={{ textDecoration: 'underline', color: 'inherit' }}>{lead.email}</a></td>
                      <td style={{ padding: '1rem' }}>{lead.company || <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>N/A</span>}</td>
                      <td style={{ padding: '1rem' }}>{lead.phone ? <a href={`tel:${lead.phone}`} style={{ color: 'inherit' }}>{lead.phone}</a> : <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>N/A</span>}</td>
                      <td style={{ padding: '1rem', fontSize: '0.85rem' }}>
                        <span style={{ display: 'inline-block', background: 'rgba(24,79,91,0.05)', padding: '0.2rem 0.5rem', borderRadius: '4px', color: 'var(--primary)', fontWeight: '600' }}>
                          {lead.resource}
                        </span>
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>
                        <button 
                          onClick={() => handleLeadDelete(idx)} 
                          style={{ background: 'none', border: 'none', color: '#dc3545', cursor: 'pointer', padding: '0.25rem' }}
                          title="Delete Lead"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}

      {/* 4. SETTINGS TAB */}
      {activeTab === 'settings' && (
        <div className="admin-form" style={{ background: '#fff' }}>
          <h3 style={{ color: 'var(--primary)', borderBottom: '1px solid var(--border)', paddingBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Settings size={20} /> System Configurations
          </h3>
          <form onSubmit={handleSettingsSubmit} style={{ marginTop: '1.5rem' }}>
            
            {/* Admin Password */}
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '1rem' }}>
                <Key size={16} /> Admin Authentication
              </h4>
              <div className="form-group" style={{ maxWidth: '350px' }}>
                <label>Admin Dashboard Password *</label>
                <input 
                  type="text" 
                  value={settingsForm.adminPassword} 
                  onChange={(e) => setSettingsForm({...settingsForm, adminPassword: e.target.value})} 
                  required 
                  placeholder="tadbeer2025" 
                />
              </div>
            </div>

            {/* WhatsApp Integration */}
            <div style={{ marginBottom: '2rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '1rem' }}>
                <Phone size={16} /> WhatsApp Redirect Configurations
              </h4>
              
              <div className="form-group" style={{ maxWidth: '350px' }}>
                <label>WhatsApp Destination Number (Oman / GCC format) *</label>
                <input 
                  type="text" 
                  value={settingsForm.whatsappPhone} 
                  onChange={(e) => setSettingsForm({...settingsForm, whatsappPhone: e.target.value})} 
                  required 
                  placeholder="e.g. 96876307656" 
                />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Provide digits only without leading 0 or +.</span>
              </div>

              <div className="form-group" style={{ marginTop: '1.25rem' }}>
                <label>Default Redirect Message (All Pages) *</label>
                <textarea 
                  value={settingsForm.msgDefault} 
                  onChange={(e) => setSettingsForm({...settingsForm, msgDefault: e.target.value})} 
                  required 
                  placeholder="General fallback message..." 
                  style={{ minHeight: '60px' }} 
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginTop: '1.25rem' }}>
                <div className="form-group">
                  <label>Digital Marketing Page Message</label>
                  <textarea 
                    value={settingsForm.msgMarketing} 
                    onChange={(e) => setSettingsForm({...settingsForm, msgMarketing: e.target.value})} 
                    placeholder="Message when clicked on Digital Marketing page..." 
                    style={{ minHeight: '60px' }} 
                  />
                </div>
                
                <div className="form-group">
                  <label>Software Solutions Page Message</label>
                  <textarea 
                    value={settingsForm.msgSoftware} 
                    onChange={(e) => setSettingsForm({...settingsForm, msgSoftware: e.target.value})} 
                    placeholder="Message when clicked on Software page..." 
                    style={{ minHeight: '60px' }} 
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginTop: '0.5rem' }}>
                <div className="form-group">
                  <label>AI Technology Page Message</label>
                  <textarea 
                    value={settingsForm.msgAI} 
                    onChange={(e) => setSettingsForm({...settingsForm, msgAI: e.target.value})} 
                    placeholder="Message when clicked on AI page..." 
                    style={{ minHeight: '60px' }} 
                  />
                </div>
                
                <div className="form-group">
                  <label>Human Capital Page Message</label>
                  <textarea 
                    value={settingsForm.msgHumanCapital} 
                    onChange={(e) => setSettingsForm({...settingsForm, msgHumanCapital: e.target.value})} 
                    placeholder="Message when clicked on HR page..." 
                    style={{ minHeight: '60px' }} 
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginTop: '0.5rem' }}>
                <label>Resource Library Page Message</label>
                <textarea 
                  value={settingsForm.msgResources} 
                  onChange={(e) => setSettingsForm({...settingsForm, msgResources: e.target.value})} 
                  placeholder="Message when clicked on Resource Library page..." 
                  style={{ minHeight: '60px' }} 
                />
              </div>
            </div>

            {/* Supabase migration info */}
            <div style={{ 
              background: 'rgba(202,169,76,0.06)', border: '1px solid rgba(202,169,76,0.2)', 
              borderRadius: '8px', padding: '1.25rem', marginBottom: '2rem', display: 'flex', gap: '0.75rem'
            }}>
              <div style={{ fontSize: '1.5rem' }}>⚡</div>
              <div>
                <h5 style={{ color: 'var(--primary)', margin: 0, fontWeight: '700', fontSize: '0.95rem' }}>Supabase Shift Ready</h5>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.5', marginTop: '0.25rem' }}>
                  A full database schema has been prepared in <strong>supabase_schema.sql</strong>. Shifting to Supabase will allow database storage for Job Listings, Resource Library materials, Lead Submissions, and System Settings, enabling remote APIs and serverless management.
                </p>
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.75rem 1.5rem' }}>
              <Save size={16} /> Save Settings
            </button>
          </form>
        </div>
      )}
      
      {/* Table highlight styling */}
      <style dangerouslySetInnerHTML={{__html: `
        .lead-row:hover {
          background-color: rgba(24,79,91,0.015);
        }
      `}} />

    </div>
  );
};

export default CareersAdmin;
