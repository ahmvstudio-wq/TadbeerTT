-- ==========================================
-- TADBEER TT DATABASE SCHEMA FOR SUPABASE
-- ==========================================

-- 1. DROP EXISTING TABLES TO CLEAN START
DROP TABLE IF EXISTS jobs CASCADE;
DROP TABLE IF EXISTS resources CASCADE;
DROP TABLE IF EXISTS settings CASCADE;
DROP TABLE IF EXISTS leads CASCADE;

-- 2. CREATE JOBS TABLE (Careers Page)
CREATE TABLE IF NOT EXISTS jobs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    department TEXT NOT NULL,
    location TEXT DEFAULT 'Muscat, Oman',
    type TEXT DEFAULT 'Full-time',
    description TEXT NOT NULL,
    requirements TEXT[] DEFAULT '{}',
    form_url TEXT,
    posted DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. CREATE RESOURCES TABLE (Resource Library Page)
CREATE TABLE IF NOT EXISTS resources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    type TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    link TEXT NOT NULL,
    external BOOLEAN DEFAULT true,
    thumbnail TEXT DEFAULT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. CREATE SETTINGS TABLE (Custom System Configuration)
CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. CREATE LEADS TABLE (Readiness & Download Capture)
CREATE TABLE IF NOT EXISTS leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    phone TEXT,
    resource TEXT NOT NULL,
    date TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==========================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==========================================
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- 1. Jobs Table Policies
CREATE POLICY "Allow public read access to jobs" ON jobs FOR SELECT USING (true);

-- 2. Resources Table Policies
CREATE POLICY "Allow public read access to resources" ON resources FOR SELECT USING (true);

-- 3. Settings Table Policies
CREATE POLICY "Allow public read access to settings" ON settings FOR SELECT USING (key != 'adminPassword');

-- 4. Leads Table Policies
CREATE POLICY "Allow public to submit leads" ON leads FOR INSERT WITH CHECK (true);

-- ==========================================
-- SECURITY DEFINER ADMINISTRATIVE FUNCTIONS
-- ==========================================

-- Helper function to check password
CREATE OR REPLACE FUNCTION verify_admin_password(pwd TEXT)
RETURNS BOOLEAN AS $$
DECLARE
  stored_pwd TEXT;
BEGIN
  SELECT value INTO stored_pwd FROM settings WHERE key = 'adminPassword';
  IF stored_pwd IS NULL THEN
    RETURN pwd = 'tadbeer2025'; -- Default fallback if no settings row yet
  END IF;
  RETURN stored_pwd = pwd;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Leads RPCs
CREATE OR REPLACE FUNCTION admin_fetch_leads(pwd TEXT)
RETURNS TABLE (
  id UUID,
  name TEXT,
  email TEXT,
  company TEXT,
  phone TEXT,
  resource TEXT,
  date TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
  IF NOT verify_admin_password(pwd) THEN
    RAISE EXCEPTION 'Unauthorized admin access';
  END IF;
  RETURN QUERY SELECT l.id, l.name, l.email, l.company, l.phone, l.resource, l.date FROM leads l ORDER BY l.date DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION admin_delete_lead(pwd TEXT, lead_id UUID)
RETURNS VOID AS $$
BEGIN
  IF NOT verify_admin_password(pwd) THEN
    RAISE EXCEPTION 'Unauthorized admin access';
  END IF;
  DELETE FROM leads WHERE id = lead_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION admin_clear_all_leads(pwd TEXT)
RETURNS VOID AS $$
BEGIN
  IF NOT verify_admin_password(pwd) THEN
    RAISE EXCEPTION 'Unauthorized admin access';
  END IF;
  DELETE FROM leads;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Jobs RPCs
CREATE OR REPLACE FUNCTION admin_create_job(
  pwd TEXT,
  title TEXT,
  department TEXT,
  location TEXT,
  type TEXT,
  description TEXT,
  requirements TEXT[],
  form_url TEXT
) RETURNS jobs AS $$
DECLARE
  new_job jobs;
BEGIN
  IF NOT verify_admin_password(pwd) THEN
    RAISE EXCEPTION 'Unauthorized admin access';
  END IF;
  INSERT INTO jobs (title, department, location, type, description, requirements, form_url)
  VALUES (title, department, location, type, description, requirements, form_url)
  RETURNING * INTO new_job;
  RETURN new_job;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION admin_update_job(
  pwd TEXT,
  job_id UUID,
  title TEXT,
  department TEXT,
  location TEXT,
  type TEXT,
  description TEXT,
  requirements TEXT[],
  form_url TEXT
) RETURNS jobs AS $$
DECLARE
  updated_job jobs;
BEGIN
  IF NOT verify_admin_password(pwd) THEN
    RAISE EXCEPTION 'Unauthorized admin access';
  END IF;
  UPDATE jobs 
  SET title = title, department = department, location = location, type = type, 
      description = description, requirements = requirements, form_url = form_url
  WHERE id = job_id
  RETURNING * INTO updated_job;
  RETURN updated_job;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION admin_delete_job(pwd TEXT, job_id UUID)
RETURNS VOID AS $$
BEGIN
  IF NOT verify_admin_password(pwd) THEN
    RAISE EXCEPTION 'Unauthorized admin access';
  END IF;
  DELETE FROM jobs WHERE id = job_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Resources RPCs
CREATE OR REPLACE FUNCTION admin_create_resource(
  pwd TEXT,
  title TEXT,
  category TEXT,
  type TEXT,
  "desc" TEXT,
  link TEXT,
  external BOOLEAN,
  thumbnail TEXT
) RETURNS resources AS $$
DECLARE
  new_res resources;
BEGIN
  IF NOT verify_admin_password(pwd) THEN
    RAISE EXCEPTION 'Unauthorized admin access';
  END IF;
  INSERT INTO resources (title, category, type, "desc", link, external, thumbnail)
  VALUES (title, category, type, "desc", link, external, thumbnail)
  RETURNING * INTO new_res;
  RETURN new_res;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION admin_update_resource(
  pwd TEXT,
  resource_id UUID,
  title TEXT,
  category TEXT,
  type TEXT,
  "desc" TEXT,
  link TEXT,
  external BOOLEAN,
  thumbnail TEXT
) RETURNS resources AS $$
DECLARE
  updated_res resources;
BEGIN
  IF NOT verify_admin_password(pwd) THEN
    RAISE EXCEPTION 'Unauthorized admin access';
  END IF;
  UPDATE resources 
  SET title = title, category = category, type = type, "desc" = "desc", link = link, external = external, thumbnail = thumbnail
  WHERE id = resource_id
  RETURNING * INTO updated_res;
  RETURN updated_res;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION admin_delete_resource(pwd TEXT, resource_id UUID)
RETURNS VOID AS $$
BEGIN
  IF NOT verify_admin_password(pwd) THEN
    RAISE EXCEPTION 'Unauthorized admin access';
  END IF;
  DELETE FROM resources WHERE id = resource_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Settings RPC
CREATE OR REPLACE FUNCTION admin_update_settings(pwd TEXT, settings_json JSONB)
RETURNS VOID AS $$
DECLARE
  setting_key TEXT;
  setting_value TEXT;
BEGIN
  IF NOT verify_admin_password(pwd) THEN
    RAISE EXCEPTION 'Unauthorized admin access';
  END IF;
  FOR setting_key, setting_value IN SELECT * FROM jsonb_each_text(settings_json) LOOP
    INSERT INTO settings (key, value, updated_at)
    VALUES (setting_key, setting_value, timezone('utc'::text, now()))
    ON CONFLICT (key) DO UPDATE SET value = setting_value, updated_at = timezone('utc'::text, now());
  END LOOP;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ==========================================
-- DEFAULT SEED DATA INSERTIONS
-- ==========================================

-- Populate Default Resources
INSERT INTO resources (title, category, type, "desc", link, external) VALUES
('Google''s Digital Marketing & E-commerce Certificate', 'SEO & Marketing', 'Free Course', 'Google''s official free professional certificate covering SEO, SEM, email marketing, and analytics — industry recognized.', 'https://grow.google/certificates/digital-marketing-ecommerce/', true),
('HubSpot: The Ultimate Guide to AI in Marketing', 'AI & Automation', 'Free Guide', 'Comprehensive guide on leveraging AI for content creation, lead scoring, customer segmentation, and campaign optimization.', 'https://blog.hubspot.com/marketing/ai-marketing', true),
('McKinsey: The State of AI — Global Survey', 'Digital Transformation', 'Report', 'McKinsey''s latest global survey on AI adoption, ROI benchmarks, and implementation strategies across industries.', 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai', true),
('Odoo ERP Implementation Playbook', 'ERP & Software', 'Free Guide', 'Step-by-step deployment playbook for Odoo ERP covering configuration, data migration, user training, and go-live.', 'https://www.odoo.com/documentation/17.0/', true),
('SHRM: Future of Work — HR Trends 2025-2026', 'Human Capital', 'Report', 'SHRM''s comprehensive analysis of workforce trends, hybrid work models, employee engagement, and talent acquisition.', 'https://www.shrm.org/topics-tools/news/future-of-work', true),
('Google Analytics 4 Complete Guide', 'SEO & Marketing', 'Free Course', 'Master GA4 with Google''s free Skillshop courses — from setup and event tracking to advanced attribution models.', 'https://skillshop.withgoogle.com/intl/en/analytics', true),
('Harvard Business Review: Scaling AI', 'Business Strategy', 'Article Collection', 'HBR''s curated collection of articles on building an AI-first organization, overcoming adoption barriers, and measuring ROI.', 'https://hbr.org/topic/subject/ai-and-machine-learning', true),
('Microsoft: AI Transformation Playbook', 'AI & Automation', 'Free Guide', 'Microsoft''s blueprint for enterprise AI adoption covering use case identification, governance, and responsible deployment.', 'https://www.microsoft.com/en-us/ai/ai-business-school', true),
('Deloitte: GCC Economic Outlook & Digital Economy', 'Business Strategy', 'Report', 'Analysis of GCC economic diversification, Oman Vision 2040, and digital economy growth opportunities.', 'https://www2.deloitte.com/xe/en/pages/about-deloitte/topics/gcc-country-reports.html', true),
('Coursera: Google Project Management Certificate', 'Business Strategy', 'Free Course', 'Free professional certificate from Google covering agile methodologies, stakeholder management, and project execution.', 'https://www.coursera.org/professional-certificates/google-project-management', true),
('ILO: Labour Market Reports — Arab States', 'Human Capital', 'Report', 'International Labour Organization data on employment trends, wage benchmarking, and Omanization compliance.', 'https://www.ilo.org/arabstates', true),
('Salesforce: State of Marketing Report', 'Digital Transformation', 'Report', 'Salesforce''s annual survey of 4,800+ marketers on AI adoption, personalization, data strategy, and ROI measurement.', 'https://www.salesforce.com/resources/research-reports/state-of-marketing/', true);

-- Populate Default Settings (including adminPassword, which is handled securely by verify_admin_password function)
INSERT INTO settings (key, value) VALUES
('whatsappPhone', '96876307656'),
('adminPassword', 'tadbeer2025'),
('msgDefault', 'Hi Tadbeer, I''d like to learn more about your business transformation services.'),
('msgMarketing', 'Hi Tadbeer, I''m visiting your website and want to discuss Digital Marketing and Growth systems for my business.'),
('msgSoftware', 'Hi Tadbeer, I''m visiting your website and want to discuss Enterprise Software and ERP implementation.'),
('msgAI', 'Hi Tadbeer, I''m visiting your website and want to discuss custom AI integrations and automation.'),
('msgHumanCapital', 'Hi Tadbeer, I''m visiting your website and want to discuss Human Capital management and Omanization compliance.'),
('msgResources', 'Hi Tadbeer, I''m visiting your resources page and would like to learn more about your consulting services.');
