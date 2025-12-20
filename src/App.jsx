import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Offres from './pages/Offres';
import About from './pages/About';
import Securite from './pages/Securite';
import PourquoiRyvie from './pages/PourquoiRyvie';
import PourQui from './pages/PourQui';
import Demos from './pages/Demos';

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
            <Route path="/about" element={<About />} />
            <Route path="/securite" element={<Securite />} />
            <Route path="/pourquoi-ryvie" element={<PourquoiRyvie />} />
            <Route path="/pour-qui" element={<PourQui />} />
            <Route path="/demos" element={<Demos />} />
          </Routes>
        </main>
        <Footer />

        {/* Coming Soon Modal - au niveau App pour être au-dessus de tout */}
        {showComingSoonModal && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-3xl shadow-2xl max-w-md w-full mx-4 p-8 relative animate-fade-in">
              <h3 className="text-3xl font-bold text-white mb-4">Bientôt disponible</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                La démo en ligne et le code source GitHub arrivent très prochainement.
              </p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                En attendant, suivez-nous sur LinkedIn pour ne rien manquer des actualités du projet Ryvie !
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.linkedin.com/company/ryvie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#0A66C2] text-white hover:bg-[#004182] transition-all text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Suivre sur LinkedIn
                </a>
                <button
                  onClick={() => setShowComingSoonModal(false)}
                  className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-700 text-white hover:bg-slate-600 transition-all text-sm font-semibold hover:scale-105"
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
