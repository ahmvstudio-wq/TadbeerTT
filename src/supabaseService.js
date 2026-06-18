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
    return data;
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
    const { data, error } = await supabase
      .from('leads')
      .insert([lead])
      .select();

    if (error) throw error;
    return { data: data[0], error: null };
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
