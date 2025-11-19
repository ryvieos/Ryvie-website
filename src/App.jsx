import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Offres from './pages/Offres';
import OpenSourcePage from './pages/OpenSourcePage';

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
    <Router>
      <div className="min-h-screen">
        <Header scrolled={scrolled} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offres" element={<Offres />} />
            <Route path="/opensource" element={<OpenSourcePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
