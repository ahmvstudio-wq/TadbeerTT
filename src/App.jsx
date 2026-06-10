import React, { useEffect } from 'react';
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

function HomePage() {
  return (
    <>
      <Hero />
      <Clients />
      <About />
      <Services />
      <Process />
      <TechPartners />
      <FAQ />
      <CTA />
    </>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/admin" element={<CareersAdmin />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
