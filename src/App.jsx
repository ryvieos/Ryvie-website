import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyRyvie from './components/WhyRyvie';
import HowItWorks from './components/HowItWorks';
import Applications from './components/Applications';
import AppStore from './components/AppStore';
import GlobalAccess from './components/GlobalAccess';
import Security from './components/Security';
import Pricing from './components/Pricing';
import Videos from './components/Videos';
import OpenSource from './components/OpenSource';
import UseCases from './components/UseCases';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <HowItWorks />
        <Applications />
        <AppStore />
        <GlobalAccess />
        <Security />
        <Pricing />
        <Videos />
        <OpenSource />
        <WhyRyvie />
        <UseCases />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
