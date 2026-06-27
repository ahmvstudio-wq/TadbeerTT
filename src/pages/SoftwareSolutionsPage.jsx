import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServicePageHero from '../components/ServicePageHero';
import SectionHeader from '../components/SectionHeader';
import { Server, PackageSearch, Users, Activity, Settings, Briefcase, FileText, CheckCircle2, ShoppingCart, TrendingUp } from 'lucide-react';

const IntegrationArchitectureSVG = () => (
  <svg viewBox="0 0 400 400" style={{ width: '100%', height: 'auto', maxBlockSize: '360px', background: 'rgba(24,79,91,0.02)', borderRadius: '16px', border: '1px solid var(--border)', padding: '1.5rem' }}>
    <rect x="5" y="5" width="390" height="390" rx="12" fill="none" stroke="rgba(202,169,76,0.15)" strokeWidth="1" />
    {/* Center Database */}
    <rect x="140" y="160" width="120" height="80" rx="12" fill="var(--primary)" stroke="var(--secondary)" strokeWidth="2" />
    <text x="200" y="202" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">CENTRAL ERP DATABASE</text>
    <text x="200" y="215" textAnchor="middle" fill="var(--secondary)" fontSize="8">(SAP / Odoo Integrator)</text>
    {/* Node 1: WMS */}
    <rect x="30" y="50" width="100" height="50" rx="8" fill="white" stroke="var(--border)" strokeWidth="1.5" />
    <text x="80" y="80" textAnchor="middle" fill="var(--primary)" fontSize="9" fontWeight="bold">WMS SCANNER</text>
    {/* Node 2: POS */}
    <rect x="270" y="50" width="100" height="50" rx="8" fill="white" stroke="var(--border)" strokeWidth="1.5" />
    <text x="320" y="80" textAnchor="middle" fill="var(--primary)" fontSize="9" fontWeight="bold">RETAIL POS</text>
    {/* Node 3: HRMS */}
    <rect x="30" y="300" width="100" height="50" rx="8" fill="white" stroke="var(--border)" strokeWidth="1.5" />
    <text x="80" y="330" textAnchor="middle" fill="var(--primary)" fontSize="9" fontWeight="bold">HRMS PORTAL</text>
    {/* Node 4: Custom Web */}
    <rect x="270" y="300" width="100" height="50" rx="8" fill="white" stroke="var(--border)" strokeWidth="1.5" />
    <text x="320" y="330" textAnchor="middle" fill="var(--primary)" fontSize="9" fontWeight="bold">CLIENT PORTAL</text>
    {/* Connector paths */}
    <path d="M 110 100 L 160 160" stroke="var(--secondary)" strokeWidth="1.5" strokeDasharray="3 3" />
    <path d="M 290 100 L 240 160" stroke="var(--secondary)" strokeWidth="1.5" strokeDasharray="3 3" />
    <path d="M 110 300 L 160 240" stroke="var(--secondary)" strokeWidth="1.5" strokeDasharray="3 3" />
    <path d="M 290 300 L 240 240" stroke="var(--secondary)" strokeWidth="1.5" strokeDasharray="3 3" />
  </svg>
);

const SoftwareSolutionsPage = () => {
  const [activeTab, setActiveTab] = useState('erp');

  const solutions = [
    {
      title: "ERP Implementation",
      icon: <Server size={24} />,
      desc: "Odoo and SAP deployed as a single source of operational truth. Finance, inventory, and operations connected, not siloed."
    },
    {
      title: "Warehouse Management",
      icon: <PackageSearch size={24} />,
      desc: "Barcode integration, automated routing, real-time inventory. Fewer errors. Better throughput. Less time spent correcting what should have been right the first time."
    },
    {
      title: "HRMS & Payroll",
      icon: <Users size={24} />,
      desc: "GCC-compliant payroll, attendance management, and employee self-service portals. Built for Omani regulatory requirements and the people who use them daily."
    },
    {
      title: "Custom Development",
      icon: <Settings size={24} />,
      desc: "For the operational bottlenecks no standard system was designed to solve."
    },
    {
      title: "POS Systems",
      icon: <ShoppingCart size={24} />,
      desc: "Retail and food & beverage point-of-sale, with offline mode, multi-branch synchronisation, and inventory that does not require manual reconciliation."
    },
    {
      title: "Procurement Management",
      icon: <Briefcase size={24} />,
      desc: "Vendor workflows, automated purchase orders, and contract management. Cost control is a system discipline, not a management effort."
    }
  ];

  return (
    <div className="page-wrapper">
      <ServicePageHero 
        title="Software Solutions"
        subtitle="Systems That Fit the Business. Not the Other Way Around."
        description="A system that does not reflect how the business actually operates will not change how it operates. Every implementation begins with an audit of the process — then configuration follows. From ERP deployments to custom applications, the work is to build infrastructure that the business relies on, rather than works around."
        breadcrumbs={['Home', 'Services', 'Software Solutions']}
      />

      {/* Product Showcases */}
      <section className="sp-section" style={{ padding: '3.5rem 5%' }}>
        <div className="container">
          <SectionHeader label="Our Expertise" title="Systems Built for How the Business Works" centered />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', marginTop: '3rem', alignItems: 'center' }}>
            {/* Left: Illustration */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ display: 'flex', justifyContent: 'center' }}>
              <IntegrationArchitectureSVG />
            </motion.div>
            
            {/* Right: Grid of Solutions */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
              {solutions.map((sol, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ 
                    y: -6, 
                    borderColor: 'var(--secondary)', 
                    boxShadow: '0 12px 30px rgba(202, 169, 76, 0.06)' 
                  }}
                  style={{ 
                    padding: '1.5rem', 
                    background: 'white', 
                    borderRadius: 'var(--radius)', 
                    border: '1px solid var(--border)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(24,79,91,0.05)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    {sol.icon}
                  </div>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem', color: 'var(--text-main)', fontWeight: '700' }}>{sol.title}</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.4', fontSize: '0.85rem', margin: 0 }}>{sol.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Dashboard Viewer */}
      <section className="sp-section" id="platform-preview-section" style={{ padding: 'var(--section-padding)', background: '#0b1120', color: 'white' }}>
        <div className="container">
          <SectionHeader label="Platform Preview" title="Experience The Interface" centered />
          <style>{`
            #platform-preview-section .section-title { color: white !important; }
            #platform-preview-section .section-label { color: var(--secondary) !important; }
          `}</style>
          
          <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            {/* Tabs */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '50px' }}>
              <button onClick={() => setActiveTab('erp')} style={{ padding: '0.75rem 2rem', borderRadius: '30px', border: 'none', background: activeTab === 'erp' ? 'var(--primary)' : 'transparent', color: activeTab === 'erp' ? 'white' : 'rgba(255,255,255,0.6)', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s' }}>ERP Dashboard</button>
              <button onClick={() => setActiveTab('wms')} style={{ padding: '0.75rem 2rem', borderRadius: '30px', border: 'none', background: activeTab === 'wms' ? 'var(--primary)' : 'transparent', color: activeTab === 'wms' ? 'white' : 'rgba(255,255,255,0.6)', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s' }}>WMS Console</button>
              <button onClick={() => setActiveTab('hr')} style={{ padding: '0.75rem 2rem', borderRadius: '30px', border: 'none', background: activeTab === 'hr' ? 'var(--primary)' : 'transparent', color: activeTab === 'hr' ? 'white' : 'rgba(255,255,255,0.6)', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s' }}>HR Portal</button>
            </div>

            {/* Mockup Container */}
            <div style={{ width: '100%', maxWidth: '1000px', height: '600px', background: '#f8fafc', borderRadius: '16px', overflow: 'hidden', border: '8px solid #1e293b', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', display: 'flex' }}>
              
              {/* Sidebar */}
              <div style={{ width: '220px', background: 'var(--primary)', color: 'white', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--secondary)' }}>Tadbeer OS</div>
                <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{ padding: '0.75rem 1rem', background: activeTab === 'erp' ? 'rgba(255,255,255,0.1)' : 'transparent', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}><Activity size={18}/> Overview</div>
                  <div style={{ padding: '0.75rem 1rem', background: activeTab === 'wms' ? 'rgba(255,255,255,0.1)' : 'transparent', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}><PackageSearch size={18}/> Inventory</div>
                  <div style={{ padding: '0.75rem 1rem', background: activeTab === 'hr' ? 'rgba(255,255,255,0.1)' : 'transparent', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}><Users size={18}/> Directory</div>
                  <div style={{ padding: '0.75rem 1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: 0.5 }}><FileText size={18}/> Reports</div>
                </div>
              </div>

              {/* Main Content Area */}
              <div style={{ flex: 1, padding: '2rem', color: '#1e293b', overflowY: 'auto' }}>
                <AnimatePresence mode="wait">
                  
                  {activeTab === 'erp' && (
                    <motion.div key="erp" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Financial Overview</h2>
                        <div style={{ background: 'white', border: '1px solid #e2e8f0', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600' }}>Last 30 Days</div>
                      </div>

                      <div className="demo-grid-3">
                        {[
                          { metric: "Multiple", label: "Core Platforms", desc: "Specialised in ERP, CRM, HRMS, WMS, and custom portals" },
                          { metric: "Full", label: "Local Deployment", desc: "Option for on-premises hosting to meet GCC data laws" },
                          { metric: "API-First", label: "Architecture", desc: "Seamless integration with your existing legacy systems" }
                        ].map((stat, i) => (
                          <div key={i} style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                            <div style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{stat.label}</div>
                            <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '0.5rem' }}>{stat.metric}</div>
                            <div style={{ color: '#64748b', fontSize: '0.8rem', lineHeight: '1.4' }}>{stat.desc}</div>
                          </div>
                        ))}
                      </div>

                      <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', height: '240px' }}>
                        <div style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: 'bold' }}>Revenue vs Target</div>
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem', height: '150px', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                          {[40, 55, 45, 70, 60, 85, 95].map((h, i) => (
                            <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: i * 0.1, duration: 0.5 }} style={{ flex: 1, background: 'var(--primary)', borderRadius: '4px 4px 0 0', opacity: i === 6 ? 1 : 0.4 }} />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'wms' && (
                    <motion.div key="wms" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Inventory Hub</h2>
                        <div style={{ background: '#22c55e', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600' }}>System Online</div>
                      </div>

                      <div className="demo-grid-1-2">
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                          <div style={{ width: '120px', height: '120px', border: '12px solid #e2e8f0', borderTopColor: 'var(--secondary)', borderRadius: '50%', margin: '0 auto 1rem' }} />
                          <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.25rem' }}>84% Capacity</div>
                          <div style={{ textAlign: 'center', color: '#64748b', fontSize: '0.85rem' }}>Zone A (Main Warehouse)</div>
                        </div>

                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                          <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Active Pick Orders</h3>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {[
                              { id: 'ORD-9921', status: 'Picking', prog: '75%' },
                              { id: 'ORD-9922', status: 'Packing', prog: '90%' },
                              { id: 'ORD-9923', status: 'Queued', prog: '0%' }
                            ].map((o, i) => (
                              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', background: '#f8fafc', borderRadius: '8px' }}>
                                <span style={{ fontWeight: 'bold', fontSize: '0.85rem' }}>{o.id}</span>
                                <div style={{ flex: 1, margin: '0 1rem', height: '6px', background: '#e2e8f0', borderRadius: '3px' }}>
                                  <motion.div initial={{ width: 0 }} animate={{ width: o.prog }} style={{ height: '100%', background: 'var(--primary)', borderRadius: '3px' }} />
                                </div>
                                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{o.status}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'hr' && (
                    <motion.div key="hr" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Team Directory</h2>
                        <input type="text" placeholder="Search employees..." style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #e2e8f0', width: '250px', backgroundColor: '#FFFFFF', color: '#1C1B17' }} />
                      </div>

                      <div className="demo-grid-2">
                        {[
                          { name: 'Ahmed Al Balushi', role: 'Operations Manager', dept: 'Logistics', status: 'Active' },
                          { name: 'Sarah Jenkins', role: 'Financial Controller', dept: 'Finance', status: 'Active' },
                          { name: 'Tariq Hassan', role: 'Software Engineer', dept: 'IT', status: 'On Leave' },
                          { name: 'Fatima Al Harthy', role: 'HR Director', dept: 'Human Resources', status: 'Active' }
                        ].map((emp, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'white', padding: '1rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                              {emp.name.charAt(0)}
                            </div>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontWeight: 'bold', fontSize: '0.95rem' }}>{emp.name}</div>
                              <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{emp.role} • {emp.dept}</div>
                            </div>
                            <div style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: emp.status === 'Active' ? '#dcfce7' : '#fef9c3', color: emp.status === 'Active' ? '#166534' : '#854d0e', borderRadius: '50px', fontWeight: '600' }}>
                              {emp.status}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Workflow Showcase */}
      <section className="sp-section" style={{ padding: 'var(--section-padding)' }}>
        <div className="container">
          <SectionHeader label="Our Process" title="How an Implementation Actually Works" centered />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginTop: '3.5rem', position: 'relative' }}>
            {[
              { step: '01', title: 'Requirements Discovery', desc: 'Teams are observed. Workflows are audited. The problems worth solving are distinguished from the ones worth tolerating.' },
              { step: '02', title: 'Architecture Design', desc: "A scalable schema and deployment plan matched to the organisation's load, compliance requirements, and growth trajectory." },
              { step: '03', title: 'Build, Integration & Testing', desc: 'Custom code, configured modules, integrated APIs. All components tested before anything reaches production.' },
              { step: '04', title: 'Go-Live & Ongoing Support', desc: 'A structured launch. Employee training. Documentation. Dedicated support through the transition and beyond.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  border: '1px solid var(--border)',
                  padding: '2.5rem 2rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  fontSize: '5rem',
                  fontWeight: '900',
                  color: 'rgba(202,169,76,0.05)',
                  lineHeight: 1,
                  userSelect: 'none'
                }}>
                  {item.step}
                </div>
                
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.85rem',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {idx + 1}
                </div>
                
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0, position: 'relative', zIndex: 1 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems Capabilities Comparison */}
      <section className="sp-section" style={{ padding: 'var(--section-padding)', background: 'var(--bg)' }}>
        <div className="container">
          <SectionHeader label="System Capabilities" title="Tailored Tiers for Every Stage" centered />
          
          <div style={{ overflowX: 'auto', marginTop: '3.5rem', background: 'white', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border)', background: 'rgba(24,79,91,0.02)' }}>
                  <th style={{ padding: '1.5rem 2rem', fontWeight: '700', color: 'var(--primary)', fontSize: '1.05rem' }}>Feature / Module</th>
                  <th style={{ padding: '1.5rem 2rem', fontWeight: '700', color: 'var(--primary)', fontSize: '1.05rem', textAlign: 'center' }}>Starter (Omani SMB)</th>
                  <th style={{ padding: '1.5rem 2rem', fontWeight: '700', color: 'var(--primary)', fontSize: '1.05rem', textAlign: 'center' }}>Professional (Growing Mid-Market)</th>
                  <th style={{ padding: '1.5rem 2rem', fontWeight: '700', color: 'var(--primary)', fontSize: '1.05rem', textAlign: 'center' }}>Enterprise (Conglomerate / Govt)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Core ERP Modules (Finance, Sales, Buy)', starter: 'Included', pro: 'Included', enterprise: 'Custom / Uncapped' },
                  { name: 'GCC Localization & Compliance', starter: 'Standard Omani VAT', pro: 'Multi-Country GCC Compliance', enterprise: 'Full Legal & Audit Ready' },
                  { name: 'Database Capacity', starter: '10 GB (SSD)', pro: '100 GB (Dedicated SSD)', enterprise: 'Uncapped (Clustered SaaS)' },
                  { name: 'Custom Modules & Dashboarding', starter: 'None (Out of Box)', pro: 'Up to 5 Custom Reports', enterprise: 'Unlimited Custom Modules' },
                  { name: 'API Integrations (payment gateways, logistics)', starter: '1 Integration', pro: 'Up to 5 Integrations', enterprise: 'Enterprise Bus (ESB) / Unlimited' },
                  { name: 'Support SLA & Training', starter: 'Email / Next-Business-Day', pro: 'Phone / 4-Hour Response', enterprise: '24/7 Dedicated Support + On-site Training' },
                ].map((row, rIdx) => (
                  <tr key={rIdx} style={{ borderBottom: rIdx === 5 ? 'none' : '1px solid var(--border)', transition: 'background-color 0.2s' }}>
                    <td style={{ padding: '1.25rem 2rem', fontWeight: '600', color: 'var(--text-main)', fontSize: '0.95rem' }}>{row.name}</td>
                    <td style={{ padding: '1.25rem 2rem', color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center' }}>{row.starter}</td>
                    <td style={{ padding: '1.25rem 2rem', color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem', textAlign: 'center', background: 'rgba(24,79,91,0.01)' }}>{row.pro}</td>
                    <td style={{ padding: '1.25rem 2rem', color: 'var(--secondary)', fontWeight: '700', fontSize: '0.9rem', textAlign: 'center' }}>{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-section" style={{ padding: 'var(--section-padding)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>Ready to Move Beyond Spreadsheets?</h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>An operational assessment costs nothing. A system that actually works changes the business.</p>
          <button 
            onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-strategy-modal')); }} 
            className="btn btn-primary" 
            style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', cursor: 'pointer', border: 'none' }}
          >
            Request a Strategy Session
          </button>
        </div>
      </section>
    </div>
  );
};

export default SoftwareSolutionsPage;
