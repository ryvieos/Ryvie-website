import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Offres from './pages/Offres';
import OpenSourcePage from './pages/OpenSourcePage';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);

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
        <Header scrolled={scrolled} onShowComingSoon={() => setShowComingSoonModal(true)} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offres" element={<Offres />} />
            <Route path="/opensource" element={<OpenSourcePage />} />
          </Routes>
        </main>
        <Footer />

        {/* Coming Soon Modal - au niveau App pour être au-dessus de tout */}
        {showComingSoonModal && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 p-8 relative animate-fade-in">
              <h3 className="text-2xl font-bold text-ryvie-dark mb-3">Bientôt disponible</h3>
              <p className="text-ryvie-gray mb-4">
                La démo en ligne et le code source GitHub arrivent très prochainement.
              </p>
              <p className="text-ryvie-gray mb-6">
                En attendant, suivez-nous sur LinkedIn pour ne rien manquer des actualités du projet Ryvie !
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
                <a
                  href="https://www.linkedin.com/company/ryvie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#0A66C2] text-white hover:bg-[#004182] transition-all text-sm font-semibold"
                >
                  Suivre sur LinkedIn
                </a>
                <button
                  onClick={() => setShowComingSoonModal(false)}
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gray-900 text-white hover:bg-black transition-all text-sm font-semibold"
                >
                  Compris
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
