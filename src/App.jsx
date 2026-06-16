import React, { useEffect, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
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

const DigitalMarketingPage = React.lazy(() => import('./pages/DigitalMarketingPage'));
const SoftwareSolutionsPage = React.lazy(() => import('./pages/SoftwareSolutionsPage'));
const HumanCapitalPage = React.lazy(() => import('./pages/HumanCapitalPage'));
const AITechnologyPage = React.lazy(() => import('./pages/AITechnologyPage'));
const ResourceLibraryPage = React.lazy(() => import('./pages/ResourceLibraryPage'));

function HomePage() {
  return (
    <>
      <Hero />
      <Clients />
      <About />
      <Services />
      <ReadinessScore />
      <Process />
      <ROICalculator />
      <TechPartners />
      <FAQ />
      <CTA />
    </>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

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

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
            <Route path="/services/software-solutions" element={<SoftwareSolutionsPage />} />
            <Route path="/services/human-capital" element={<HumanCapitalPage />} />
            <Route path="/services/ai-technology" element={<AITechnologyPage />} />
            <Route path="/resources" element={<ResourceLibraryPage />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/admin" element={<CareersAdmin />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
      <OnyxAssistant />
    </>
  );
}

export default App;
