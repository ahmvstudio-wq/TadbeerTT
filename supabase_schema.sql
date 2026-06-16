-- ==========================================
-- TADBEER TT DATABASE SCHEMA FOR SUPABASE
-- ==========================================

-- 1. Create Jobs Table (Careers Page)
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

-- 2. Create Resources Table (Resource Library Page)
CREATE TABLE IF NOT EXISTS resources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    type TEXT NOT NULL,
    desc TEXT NOT NULL,
    link TEXT NOT NULL,
    external BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Create Settings Table (Custom System Configuration)
CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Create Leads Table (Readiness & Download Capture)
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

-- Public Select Policies (Allow anyone to view jobs, resources, and settings)
CREATE POLICY "Allow public read access to jobs" ON jobs FOR SELECT USING (true);
CREATE POLICY "Allow public read access to resources" ON resources FOR SELECT USING (true);
CREATE POLICY "Allow public read access to settings" ON settings FOR SELECT USING (true);

-- Admin Manage Policies (Only authenticated users can manage jobs, resources, leads, and settings)
CREATE POLICY "Allow authenticated manage access to jobs" ON jobs FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated manage access to resources" ON resources FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated manage access to settings" ON settings FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated manage access to leads" ON leads FOR ALL USING (auth.role() = 'authenticated');

-- Public Lead Capture Policy (Allow anyone to submit leads)
CREATE POLICY "Allow public to submit leads" ON leads FOR INSERT WITH CHECK (true);

-- ==========================================
-- DEFAULT SEED DATA INSERTIONS
-- ==========================================

-- Populate Default Resources
INSERT INTO resources (title, category, type, desc, link, external) VALUES
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

-- Populate Default Settings
INSERT INTO settings (key, value) VALUES
('whatsappPhone', '96876307656'),
('adminPassword', 'tadbeer2025'),
('msgDefault', 'Hi Tadbeer, I''d like to learn more about your business transformation services.'),
('msgMarketing', 'Hi Tadbeer, I''m visiting your website and want to discuss Digital Marketing and Growth systems for my business.'),
('msgSoftware', 'Hi Tadbeer, I''m visiting your website and want to discuss Enterprise Software and ERP implementation.'),
('msgAI', 'Hi Tadbeer, I''m visiting your website and want to discuss custom AI integrations and automation.'),
('msgHumanCapital', 'Hi Tadbeer, I''m visiting your website and want to discuss Human Capital management and Omanization compliance.'),
('msgResources', 'Hi Tadbeer, I''m visiting your resources page and would like to learn more about your consulting services.');
