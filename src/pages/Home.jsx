import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Applications from '../components/Applications';
import AppStore from '../components/AppStore';
import GlobalAccess from '../components/GlobalAccess';
import Security from '../components/Security';
import Videos from '../components/Videos';
import WhyRyvie from '../components/WhyRyvie';
import UseCases from '../components/UseCases';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Applications />
      <AppStore />
      <GlobalAccess />
      <Security />
      <Videos />
      <WhyRyvie />
      <UseCases />
      <FAQ />
    </>
  );
};

export default Home;
