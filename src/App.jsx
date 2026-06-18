import React, { useEffect, useLayoutEffect, useRef, useState, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import TechPartners from './components/TechPartners';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Careers from './components/Careers';
import CareersAdmin from './components/CareersAdmin';

import ReadinessScore from './components/ReadinessScore';
import ROICalculator from './components/ROICalculator';
import WhatsAppButton from './components/WhatsAppButton';
import OnyxAssistant from './components/OnyxAssistant';
import { canShowAutoPrompt, markAutoPromptShown } from './promptLimits';

import Preloader from './components/Preloader';
import StrategySessionModal from './components/StrategySessionModal';
import PlaybookBanner from './components/PlaybookBanner';
import CustomCursor from './components/CustomCursor';

import OmanizationCheck from './components/OmanizationCheck';
import AIPipelineSimulator from './components/AIPipelineSimulator';
import OurWork from './components/OurWork';

const DigitalMarketingPage = React.lazy(() => import('./pages/DigitalMarketingPage'));
const SoftwareSolutionsPage = React.lazy(() => import('./pages/SoftwareSolutionsPage'));
const HumanCapitalPage = React.lazy(() => import('./pages/HumanCapitalPage'));
const AITechnologyPage = React.lazy(() => import('./pages/AITechnologyPage'));
const ResourceLibraryPage = React.lazy(() => import('./pages/ResourceLibraryPage'));

const HealthcareIndustryPage = React.lazy(() => import('./pages/HealthcareIndustryPage'));
const RealEstateIndustryPage = React.lazy(() => import('./pages/RealEstateIndustryPage'));
const LogisticsIndustryPage = React.lazy(() => import('./pages/LogisticsIndustryPage'));
const EcommerceIndustryPage = React.lazy(() => import('./pages/EcommerceIndustryPage'));
const ConstructionIndustryPage = React.lazy(() => import('./pages/ConstructionIndustryPage'));
const ManufacturingIndustryPage = React.lazy(() => import('./pages/ManufacturingIndustryPage'));
const GovernmentIndustryPage = React.lazy(() => import('./pages/GovernmentIndustryPage'));
const ProfessionalServicesIndustryPage = React.lazy(() => import('./pages/ProfessionalServicesIndustryPage'));

function HomePage() {
  return (
    <>
      <Hero />
      <Clients />
      <ReadinessScore />
      <About />
      <Services />
      <ROICalculator />
      <Process />
      <OmanizationCheck />
      <TechPartners />
      <FAQ />
      <CTA />
    </>
  );
}

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [strategyModalOpen, setStrategyModalOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const lenisRef = useRef(null);
  const previousPageRef = useRef(`${location.pathname}${location.search}`);

  useEffect(() => {
    // Dismiss loading screen after 1.8 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Handle lead submission events globally to suppress modals once converted
  useEffect(() => {
    const handleLeadSubmitted = () => {
      sessionStorage.setItem('leadSubmitted', 'true');
    };
    window.addEventListener('lead-submitted', handleLeadSubmitted);
    return () => window.removeEventListener('lead-submitted', handleLeadSubmitted);
  }, []);

  useEffect(() => {
    if (loading || strategyModalOpen) return;

    // Helper to check if modal is currently dismissed and within the cooldown period
    const isUnderCooldown = () => {
      const dismissedTime = sessionStorage.getItem('strategyModalDismissedTime');
      if (!dismissedTime) return false;
      const elapsed = Date.now() - parseInt(dismissedTime, 10);
      return elapsed < 90000;
    };

    const isAlreadyLead = sessionStorage.getItem('leadSubmitted') === 'true';
    if (isAlreadyLead) return;

    const currentPath = location.pathname;
    const isHighValuePage = currentPath.includes('/services/') || currentPath.includes('/industries/') || currentPath === '/';

    const openStrategyPrompt = () => {
      if (isUnderCooldown() || strategyModalOpen || !isHighValuePage || !canShowAutoPrompt('strategy')) {
        return false;
      }

      markAutoPromptShown('strategy');
      setStrategyModalOpen(true);
      return true;
    };

    // 1. Exit Intent Trigger
    const handleMouseLeave = (e) => {
      if (e.clientY < 15) {
        openStrategyPrompt();
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    // 2. Scroll Depth Trigger (70% scroll depth)
    let hasScrolled65 = false;
    const handleScroll = () => {
      if (hasScrolled65) return;

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const scrollPercent = (scrollTop / docHeight) * 100;
      if (scrollPercent >= 70) {
        hasScrolled65 = true;
        openStrategyPrompt();
      }
    };
    window.addEventListener('scroll', handleScroll);

    // 3. Idle Time Trigger
    let idleTimer;
    const resetIdleTimer = () => {
      clearTimeout(idleTimer);
      
      idleTimer = setTimeout(() => {
        openStrategyPrompt();
      }, 45000);
    };

    const activityEvents = ['mousemove', 'mousedown', 'scroll', 'keypress', 'touchstart'];
    activityEvents.forEach(evt => window.addEventListener(evt, resetIdleTimer));
    resetIdleTimer(); // start initially

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      activityEvents.forEach(evt => window.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, [loading, location.pathname, strategyModalOpen]);

  useEffect(() => {
    // Listen to custom events to open the Strategy Modal globally
    const handleOpenStrategy = (e) => {
      if (e.detail?.industry) {
        setSelectedIndustry(e.detail.industry);
      } else {
        setSelectedIndustry('');
      }
      setStrategyModalOpen(true);
    };

    window.addEventListener('open-strategy-modal', handleOpenStrategy);
    return () => window.removeEventListener('open-strategy-modal', handleOpenStrategy);
  }, []);

  useLayoutEffect(() => {
    const pageKey = `${location.pathname}${location.search}`;
    const isNewPage = previousPageRef.current !== pageKey;
    const scrollToTop = () => {
      lenisRef.current?.scrollTo?.(0, { immediate: true, force: true });
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    if (isNewPage || !location.hash) {
      scrollToTop();
      requestAnimationFrame(scrollToTop);
    } else if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }

    previousPageRef.current = pageKey;
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <>
      <PlaybookBanner />
      <Navbar />
      <main>
        <Suspense fallback={<div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
            <Route path="/services/software-solutions" element={<SoftwareSolutionsPage />} />
            <Route path="/services/human-capital" element={<HumanCapitalPage />} />
            <Route path="/services/ai-technology" element={<AITechnologyPage />} />
            
            <Route path="/industries/healthcare" element={<HealthcareIndustryPage />} />
            <Route path="/industries/real-estate" element={<RealEstateIndustryPage />} />
            <Route path="/industries/logistics" element={<LogisticsIndustryPage />} />
            <Route path="/industries/ecommerce" element={<EcommerceIndustryPage />} />
            <Route path="/industries/construction" element={<ConstructionIndustryPage />} />
            <Route path="/industries/manufacturing" element={<ManufacturingIndustryPage />} />
            <Route path="/industries/government" element={<GovernmentIndustryPage />} />
            <Route path="/industries/professional-services" element={<ProfessionalServicesIndustryPage />} />

            <Route path="/resources" element={<ResourceLibraryPage />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/admin" element={<CareersAdmin />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
      <OnyxAssistant />
      <StrategySessionModal 
        isOpen={strategyModalOpen} 
        onClose={() => {
          setStrategyModalOpen(false);
          sessionStorage.setItem('strategyModalDismissedTime', Date.now().toString());
        }} 
        initialIndustry={selectedIndustry} 
      />
      <CustomCursor />
      <AnimatePresence>
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>
    </>
  );
}

export default App;
