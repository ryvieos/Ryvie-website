import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink, Download, Github } from 'lucide-react';
import { analytics } from '../utils/analytics';

const Header = ({ scrolled, onShowComingSoon }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [osName, setOsName] = useState('Windows');

  const location = useLocation();

  useEffect(() => {
    // Détecter le système d'exploitation
    const userAgent = window.navigator.userAgent.toLowerCase();
    const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';
    
    if (userAgent.indexOf('mac') !== -1) {
      setOsName('macOS');
      setDownloadUrl(`${backendUrl}/api/download/desktop`);
    } else if (userAgent.indexOf('linux') !== -1) {
      setOsName('Linux');
      setDownloadUrl(`${backendUrl}/api/download/desktop`);
    } else {
      setOsName('Windows');
      setDownloadUrl(`${backendUrl}/api/download/desktop`);
    }
  }, []);
  
  const navLinks = [
    { name: 'Accueil', href: '/', type: 'page' },
    { name: 'Offres', href: '/offres', type: 'page' },
    { name: 'Sécurité', href: '/securite', type: 'page' },
    { name: 'Pourquoi Ryvie', href: '/pourquoi-ryvie', type: 'page' },
    { name: 'Pour qui', href: '/pour-qui', type: 'page' },
    { name: 'Démos', href: '/demos', type: 'page' },
    { name: 'À propos', href: '/about', type: 'page' },
  ];
  
  const homeAnchors = [
    { name: 'FAQ', href: '#faq' },
  ];
  
  const displayLinks = location.pathname === '/' ? [...navLinks, ...homeAnchors] : navLinks;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 border-b border-white/5 transition-all duration-300 ${
        scrolled ? 'bg-[#0a1628]/98 backdrop-blur-xl shadow-2xl' : 'bg-[#0a1628]/90 backdrop-blur-lg'
      }`}
    >
      <nav className="px-4">
        {/* Hauteur fixe pour stabiliser la barre */}
        <div className="flex items-center h-20 gap-4 lg:gap-6">
          {/* Logo + Ryvie à gauche */}
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
            <img
              src="/images/logo.png"
              alt="Ryvie Logo"
              className="h-20 w-auto transition-transform group-hover:scale-110"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="h-12 w-12 bg-gradient-to-br from-ryvie-blue to-blue-600 rounded-xl items-center justify-center hidden">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-xl lg:text-2xl font-semibold bg-gradient-to-r from-ryvie-electric to-ryvie-blue bg-clip-text text-transparent leading-tight tracking-tight">
              Ryvie
            </span>
          </Link>

          {/* Navigation au centre */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-3 flex-1 justify-center min-w-0">
            {displayLinks.map((link) => (
              link.type === 'page' ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-[0.9rem] font-semibold whitespace-nowrap transition-colors duration-200 ${
                    location.pathname === link.href
                      ? 'bg-white/15 text-white shadow-sm'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 rounded-full text-[0.9rem] font-semibold whitespace-nowrap text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>

          {/* Boutons à droite */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <a
              href={downloadUrl}
              onClick={() => analytics.downloadDesktop(osName)}
              className="flex items-center gap-1.5 px-3 xl:px-4 py-2 text-xs xl:text-sm bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium whitespace-nowrap"
            >
              <Download className="w-3 xl:w-3.5 h-3 xl:h-3.5" />
              <span className="hidden xl:inline">Télécharger Ryvie Desktop</span>
              <span className="xl:hidden">Télécharger</span>
            </a>
            <button
              onClick={() => {
                analytics.clickDemo();
                onShowComingSoon();
              }}
              className="flex items-center gap-1.5 px-3 xl:px-4 py-2 text-xs xl:text-sm bg-gradient-to-r from-ryvie-electric to-ryvie-blue text-white rounded-full shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium whitespace-nowrap"
            >
              <span className="hidden xl:inline">Démo en ligne</span>
              <span className="xl:hidden">Démo</span>
              <ExternalLink className="w-3 xl:w-3.5 h-3 xl:h-3.5" />
            </button>
            <button
              onClick={() => {
                analytics.clickGithub();
                onShowComingSoon();
              }}
              className="px-3 xl:px-4 py-2 rounded-full font-medium text-xs xl:text-sm whitespace-nowrap border border-black/80 bg-black text-white hover:bg-white hover:text-black hover:border-black transition-all duration-200 flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-ryvie-blue transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pb-4 animate-fade-in">
            <div className="flex flex-col gap-3 rounded-2xl glass-effect p-4 shadow-lg">
              {displayLinks.map((link) => (
                link.type === 'page' ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white/80 hover:text-white transition-colors duration-200 font-medium py-1"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white/80 hover:text-white transition-colors duration-200 font-medium py-1"
                  >
                    {link.name}
                  </a>
                )
              ))}
              <a
                href={downloadUrl}
                onClick={() => {
                  analytics.downloadDesktop(osName);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full hover:shadow-lg transition-all duration-200 font-medium mt-2"
              >
                <Download className="w-4 h-4" />
                <span>Télécharger Ryvie Desktop</span>
              </a>
              <button
                onClick={() => {
                  analytics.clickDemo();
                  onShowComingSoon();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-ryvie-electric to-ryvie-blue text-white rounded-full hover:shadow-lg transition-all duration-200 font-medium"
              >
                <span>Démo en ligne</span>
                <ExternalLink className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  analytics.clickGithub();
                  onShowComingSoon();
                  setMobileMenuOpen(false);
                }}
                className="px-6 py-2.5 border border-white/15 bg-white/5 text-white rounded-full hover:bg-white/10 transition-all duration-200 font-medium text-center flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
