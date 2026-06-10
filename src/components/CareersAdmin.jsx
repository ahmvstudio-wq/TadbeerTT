import React, { useState, useEffect } from 'react';

const ADMIN_PASSWORD = 'tadbeer2025';

const emptyJob = {
  title: '',
  department: '',
  location: 'Muscat, Oman',
  type: 'Full-time',
  description: '',
  requirements: '',
  formUrl: ''
};

const CareersAdmin = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [jobs, setJobs] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(emptyJob);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem('tadbeer_admin_auth');
    if (auth === 'true') setAuthenticated(true);
  }, []);

  useEffect(() => {
    if (authenticated) {
      const stored = localStorage.getItem('tadbeer_jobs');
      if (stored) {
        setJobs(JSON.parse(stored));
      }
    }
  }, [authenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
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
  };

  const saveJobs = (updatedJobs) => {
    setJobs(updatedJobs);
    localStorage.setItem('tadbeer_jobs', JSON.stringify(updatedJobs));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requirementsArray = formData.requirements
      .split('\n')
      .map(r => r.trim())
      .filter(r => r.length > 0);

    if (editingId) {
      const updated = jobs.map(j => 
        j.id === editingId 
          ? { ...formData, id: editingId, requirements: requirementsArray, posted: j.posted }
          : j
      );
      saveJobs(updated);
    } else {
      const newJob = {
        ...formData,
        id: Date.now().toString(),
        requirements: requirementsArray,
        posted: new Date().toISOString().split('T')[0]
      };
      saveJobs([...jobs, newJob]);
    }

    setFormData(emptyJob);
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (job) => {
    setFormData({
      ...job,
      requirements: job.requirements.join('\n')
    });
    setEditingId(job.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this job posting?')) {
      saveJobs(jobs.filter(j => j.id !== id));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Login Screen
  if (!authenticated) {
    return (
      <div className="admin-login">
        <h2 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.5rem' }}>Admin Access</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>Enter your admin password to manage job postings.</p>
        <form onSubmit={handleLogin}>
          <input 
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          {error && <p style={{ color: '#dc3545', fontSize: '0.85rem', marginBottom: '1rem' }}>{error}</p>}
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Login
          </button>
        </form>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="admin-container">
      <div className="admin-header">
        <div>
          <h1 style={{ color: 'var(--primary)', fontSize: '1.75rem', marginBottom: '0.25rem' }}>Job Postings Manager</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{jobs.length} active posting{jobs.length !== 1 ? 's' : ''}</p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button 
            className="btn btn-primary"
            onClick={() => { setShowForm(true); setEditingId(null); setFormData(emptyJob); }}
          >
            + Add New Job
          </button>
          <button 
            className="btn btn-secondary"
            onClick={handleLogout}
            style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <div className="admin-form">
          <h3 style={{ color: 'var(--primary)' }}>{editingId ? 'Edit Job Posting' : 'Add New Job Posting'}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Job Title *</label>
                <input name="title" value={formData.title} onChange={handleChange} required placeholder="e.g. Digital Marketing Specialist" />
              </div>
              <div className="form-group">
                <label>Department *</label>
                <input name="department" value={formData.department} onChange={handleChange} required placeholder="e.g. Marketing" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Location</label>
                <input name="location" value={formData.location} onChange={handleChange} placeholder="e.g. Muscat, Oman" />
              </div>
              <div className="form-group">
                <label>Type</label>
                <select name="type" value={formData.type} onChange={handleChange}>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Internship</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Description *</label>
              <textarea name="description" value={formData.description} onChange={handleChange} required placeholder="Brief job description..." />
            </div>

            <div className="form-group">
              <label>Requirements (one per line)</label>
              <textarea name="requirements" value={formData.requirements} onChange={handleChange} placeholder="3+ years experience&#10;Fluent in English & Arabic&#10;..." style={{ minHeight: '120px' }} />
            </div>

            <div className="form-group">
              <label>Google Form URL (optional)</label>
              <input name="formUrl" value={formData.formUrl} onChange={handleChange} placeholder="https://docs.google.com/forms/d/e/..." />
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              <button type="submit" className="btn btn-primary">
                {editingId ? 'Update Job' : 'Create Job'}
              </button>
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={() => { setShowForm(false); setEditingId(null); setFormData(emptyJob); }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Job List */}
      <div className="admin-job-list">
        {jobs.length === 0 ? (
          <div className="no-jobs">
            <p>No job postings yet. Click "Add New Job" to create one.</p>
          </div>
        ) : (
          jobs.map(job => (
            <div key={job.id} className="admin-job-item">
              <div>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.25rem', fontSize: '1.1rem' }}>{job.title}</h4>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <span>{job.department}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                  <span>•</span>
                  <span>Posted: {job.posted}</span>
                </div>
              </div>
              <div className="admin-job-actions">
                <button className="admin-btn admin-btn-edit" onClick={() => handleEdit(job)}>Edit</button>
                <button className="admin-btn admin-btn-delete" onClick={() => handleDelete(job.id)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CareersAdmin;
