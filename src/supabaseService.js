import { supabase } from './supabaseClient';

// Helper to check if a string is a valid UUID
const isUuid = (str) => {
  if (!str) return false;
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(str);
};

// Fallback Default Data
export const DEFAULT_JOBS = [
  {
    id: '1',
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Muscat, Oman',
    type: 'Full-time',
    posted: '2025-06-01',
    description: 'Lead bilingual digital marketing campaigns across social media, SEO, and paid advertising for our growing portfolio of GCC clients.',
    requirements: ['3+ years in digital marketing', 'Fluent in English & Arabic', 'Experience with Meta Ads & Google Ads', 'Data-driven mindset'],
    formUrl: ''
  },
  {
    id: '2',
    title: 'ERP Implementation Consultant',
    department: 'Software Solutions',
    location: 'Muscat, Oman',
    type: 'Full-time',
    posted: '2025-06-01',
    description: 'Map client operations and implement enterprise software solutions including ERP, WMS, and HRMS across Omani businesses.',
    requirements: ['5+ years in ERP consulting', 'Experience with Odoo, SAP, or Oracle', 'GCC business process knowledge', 'VAT compliance familiarity'],
    formUrl: ''
  },
  {
    id: '3',
    title: 'AI Solutions Engineer',
    department: 'AI & Technology',
    location: 'Muscat, Oman / Remote',
    type: 'Full-time',
    posted: '2025-05-28',
    description: 'Design, build, and deploy AI-powered solutions including chatbots, CCTV analytics, and lead generation systems for enterprise clients.',
    requirements: ['3+ years in AI/ML engineering', 'Python, TensorFlow/PyTorch proficiency', 'NLP and computer vision experience', 'API design and deployment skills'],
    formUrl: ''
  }
];

export const DEFAULT_RESOURCES = [
  { 
    id: '1',
    title: "The GCC Enterprise Scaling & Automation Playbook", 
    category: "Digital Transformation", 
    type: "Playbook (PDF)", 
    desc: "A comprehensive framework for auditing, designing, and automating operations for GCC enterprises. Learn how to automate 70% of manual processes and scale profitably.", 
    link: "/assets/GCC_Digital_Transformation_Playbook.pdf",
    external: false
  },
  { 
    id: '2',
    title: "Omanization Compliance Roadmap & Quota Guide", 
    category: "Human Capital", 
    type: "Compliance Handbook (PDF)", 
    desc: "Navigate the updated Oman Labour Law with confidence. A practical step-by-step guide to calculating quotas, passing audits, and structuring local talent pipelines.", 
    link: "/assets/Omanization_Compliance_Roadmap.pdf",
    external: false
  },
  { 
    id: '3',
    title: "Financial Friction & ROI Analysis Framework", 
    category: "Business Strategy", 
    type: "Analytical Guide (PDF)", 
    desc: "Identify where your enterprise is losing hours and capital to operational leaks. Includes templates to calculate the financial ROI of your technology investments.", 
    link: "/assets/ROI_Financial_Friction_Analysis.pdf",
    external: false
  },
  { 
    id: '4',
    title: "Enterprise Scaling Action Plan: Growth Phase", 
    category: "AI & Automation", 
    type: "Action Plan (PDF)", 
    desc: "A blueprint for Omani enterprises looking to deploy custom AI agents, automated customer engagement systems, and scale workflows during rapid expansion.", 
    link: "/assets/Readiness_Action_Plan_Growth.pdf",
    external: false
  },
  { 
    id: '5',
    title: "ERP Adoption & Software Evaluation Matrix", 
    category: "ERP & Software", 
    type: "Evaluation Guide (PDF)", 
    desc: "A structured methodology for selecting and implementing ERP systems (Odoo, SAP, Dynamics) to ensure high organizational adoption and zero implementation downtime.", 
    link: "/assets/ERP_Adoption_Evaluation_Matrix.pdf",
    external: false
  },
  { 
    id: '6',
    title: "Digital Marketing CAC Optimization Blueprint", 
    category: "SEO & Marketing", 
    type: "Marketing Guide (PDF)", 
    desc: "Unlock predictable inbound demand in the Omani and GCC markets. Learn how to optimize customer acquisition costs and structure data-driven performance campaigns.", 
    link: "/assets/Digital_Marketing_CAC_Blueprint.pdf",
    external: false
  }
];

export const defaultSettings = {
  adminPassword: 'tadbeer2025',
  whatsappPhone: '96876307656',
  msgDefault: "Hi Tadbeer, I'd like to learn more about your business transformation services.",
  msgMarketing: "Hi Tadbeer, I'm visiting your website and want to discuss Digital Marketing and Growth systems for my business.",
  msgSoftware: "Hi Tadbeer, I'm visiting your website and want to discuss Enterprise Software and ERP implementation.",
  msgAI: "Hi Tadbeer, I'm visiting your website and want to discuss custom AI integrations and automation.",
  msgHumanCapital: "Hi Tadbeer, I'm visiting your website and want to discuss Human Capital management and Omanization compliance.",
  msgResources: "Hi Tadbeer, I'm visiting your resources page and would like to learn more about your consulting services."
};

// Data mapping utilities
const mapJobFromDB = (row) => {
  if (!row) return null;
  const { form_url, ...rest } = row;
  return {
    ...rest,
    formUrl: form_url || ''
  };
};

// ==========================================
// JOBS API
// ==========================================

export const fetchJobs = async () => {
  try {
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data.map(mapJobFromDB);
  } catch (err) {
    console.error('Error fetching jobs:', err);
    return DEFAULT_JOBS;
  }
};

export const createJob = async (pwd, job) => {
  try {
    const { data, error } = await supabase.rpc('admin_create_job', {
      pwd,
      title: job.title,
      department: job.department,
      location: job.location || 'Muscat, Oman',
      type: job.type || 'Full-time',
      description: job.description,
      requirements: job.requirements || [],
      form_url: job.formUrl || ''
    });

    if (error) throw error;
    return { data: mapJobFromDB(data), error: null };
  } catch (err) {
    console.error('Error creating job:', err);
    return { data: null, error: err };
  }
};

export const updateJob = async (pwd, id, job) => {
  try {
    if (!isUuid(id)) {
      throw new Error('Invalid UUID for job update');
    }
    const { data, error } = await supabase.rpc('admin_update_job', {
      pwd,
      job_id: id,
      title: job.title,
      department: job.department,
      location: job.location || 'Muscat, Oman',
      type: job.type || 'Full-time',
      description: job.description,
      requirements: job.requirements || [],
      form_url: job.formUrl || ''
    });

    if (error) throw error;
    return { data: mapJobFromDB(data), error: null };
  } catch (err) {
    console.error('Error updating job:', err);
    return { data: null, error: err };
  }
};

export const deleteJob = async (pwd, id) => {
  try {
    if (!isUuid(id)) {
      throw new Error('Invalid UUID for job deletion');
    }
    const { error } = await supabase.rpc('admin_delete_job', {
      pwd,
      job_id: id
    });

    if (error) throw error;
    return { error: null };
  } catch (err) {
    console.error('Error deleting job:', err);
    return { error: err };
  }
};

// ==========================================
// RESOURCES API
// ==========================================

export const fetchResources = async () => {
  try {
    const { data, error } = await supabase
      .from('resources')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    
    // Filter out old external redirects to protect brand experience, and merge with premium defaults
    const dbResources = data ? data.filter(r => !r.external) : [];
    
    // Combine defaults and non-external db resources (avoiding duplicate IDs)
    const combined = [...DEFAULT_RESOURCES];
    dbResources.forEach(res => {
      if (!combined.some(c => c.id === res.id || c.title.toLowerCase() === res.title.toLowerCase())) {
        combined.push(res);
      }
    });
    
    return combined;
  } catch (err) {
    console.error('Error fetching resources:', err);
    return DEFAULT_RESOURCES;
  }
};

export const createResource = async (pwd, res) => {
  try {
    const { data, error } = await supabase.rpc('admin_create_resource', {
      pwd,
      title: res.title,
      category: res.category,
      type: res.type,
      desc: res.desc,
      link: res.link,
      external: res.external !== false,
      thumbnail: res.thumbnail || null
    });

    if (error) throw error;
    return { data, error: null };
  } catch (err) {
    console.error('Error creating resource:', err);
    return { data: null, error: err };
  }
};

export const updateResource = async (pwd, id, res) => {
  try {
    if (!isUuid(id)) {
      throw new Error('Invalid UUID for resource update');
    }
    const { data, error } = await supabase.rpc('admin_update_resource', {
      pwd,
      resource_id: id,
      title: res.title,
      category: res.category,
      type: res.type,
      desc: res.desc,
      link: res.link,
      external: res.external !== false,
      thumbnail: res.thumbnail || null
    });

    if (error) throw error;
    return { data, error: null };
  } catch (err) {
    console.error('Error updating resource:', err);
    return { data: null, error: err };
  }
};

export const deleteResource = async (pwd, id) => {
  try {
    if (!isUuid(id)) {
      throw new Error('Invalid UUID for resource deletion');
    }
    const { error } = await supabase.rpc('admin_delete_resource', {
      pwd,
      resource_id: id
    });

    if (error) throw error;
    return { error: null };
  } catch (err) {
    console.error('Error deleting resource:', err);
    return { error: err };
  }
};

// ==========================================
// LEADS API
// ==========================================

export const fetchLeads = async (pwd) => {
  try {
    const { data, error } = await supabase.rpc('admin_fetch_leads', { pwd });
    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error('Error fetching leads:', err);
    return [];
  }
};

export const createLead = async (lead) => {
  try {
    const { error } = await supabase
      .from('leads')
      .insert([lead]);

    if (error) throw error;
    return { data: null, error: null };
  } catch (err) {
    console.error('Error creating lead:', err);
    return { data: null, error: err };
  }
};

export const deleteLead = async (pwd, id) => {
  try {
    if (!isUuid(id)) {
      throw new Error('Invalid UUID for lead deletion');
    }
    const { error } = await supabase.rpc('admin_delete_lead', {
      pwd,
      lead_id: id
    });

    if (error) throw error;
    return { error: null };
  } catch (err) {
    console.error('Error deleting lead:', err);
    return { error: err };
  }
};

export const clearAllLeads = async (pwd) => {
  try {
    const { error } = await supabase.rpc('admin_clear_all_leads', { pwd });
    if (error) throw error;
    return { error: null };
  } catch (err) {
    console.error('Error clearing leads:', err);
    return { error: err };
  }
};

// ==========================================
// SETTINGS API
// ==========================================

export const fetchSettings = async () => {
  try {
    const { data, error } = await supabase
      .from('settings')
      .select('*');

    if (error) throw error;
    const settingsObj = {};
    data.forEach((row) => {
      settingsObj[row.key] = row.value;
    });
    return { ...defaultSettings, ...settingsObj };
  } catch (err) {
    console.error('Error fetching settings:', err);
    return defaultSettings;
  }
};

export const updateSettings = async (pwd, settingsObj) => {
  try {
    const { error } = await supabase.rpc('admin_update_settings', {
      pwd,
      settings_json: settingsObj
    });

    if (error) throw error;
    return { data: settingsObj, error: null };
  } catch (err) {
    console.error('Error updating settings:', err);
    return { data: null, error: err };
  }
};

// ==========================================
// CUSTOM PASSWORD VERIFICATION
// ==========================================

export const verifyAdminPassword = async (pwd) => {
  try {
    const { data, error } = await supabase.rpc('verify_admin_password', { pwd });
    if (error) throw error;
    return data === true;
  } catch (err) {
    console.error('Error verifying password:', err);
    return false;
  }
};
