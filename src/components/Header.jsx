import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink, Download } from 'lucide-react';
import { analytics } from '../utils/analytics';

const Header = ({ scrolled, onShowComingSoon }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('/logiciel/Ryvie Setup 0.0.2.exe');
  const [osName, setOsName] = useState('Windows');

  const location = useLocation();

  useEffect(() => {
    // Détecter le système d'exploitation
    const userAgent = window.navigator.userAgent.toLowerCase();
    
    if (userAgent.indexOf('mac') !== -1) {
      setOsName('macOS');
      setDownloadUrl('/logiciel/Ryvie-macOS.dmg'); // à ajouter plus tard
    } else if (userAgent.indexOf('linux') !== -1) {
      setOsName('Linux');
      setDownloadUrl('/logiciel/Ryvie-Linux.AppImage'); // à ajouter plus tard
    } else {
      setOsName('Windows');
      setDownloadUrl('/logiciel/Ryvie Setup 0.0.2.exe');
    }
  }, []);
  
  const navLinks = [
    { name: 'Accueil', href: '/', type: 'page' },
    { name: 'Offres', href: '/offres', type: 'page' },
    { name: 'Open Source', href: '/opensource', type: 'page' },
    { name: 'À propos', href: '/about', type: 'page' },
  ];
  
  const homeAnchors = [
    { name: 'Applications', href: '#applications' },
    { name: 'Démos vidéo', href: '#videos' },
    { name: 'FAQ & Contact', href: '#faq' },
  ];
  
  const displayLinks = location.pathname === '/' ? [...navLinks, ...homeAnchors] : navLinks;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 border-b border-white/60 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-lg' : 'bg-white/90 backdrop-blur-md shadow-sm'
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
            <span className="text-xl lg:text-2xl font-semibold bg-gradient-to-r from-ryvie-blue to-blue-600 bg-clip-text text-transparent leading-tight tracking-tight">
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
                      ? 'bg-ryvie-blue text-white shadow-sm'
                      : 'text-ryvie-dark hover:text-ryvie-blue hover:bg-blue-50'
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 rounded-full text-[0.9rem] font-semibold whitespace-nowrap text-ryvie-dark hover:text-ryvie-blue hover:bg-blue-50 transition-colors duration-200"
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
              download
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
              className="flex items-center gap-1.5 px-3 xl:px-4 py-2 text-xs xl:text-sm bg-gradient-to-r from-ryvie-blue to-blue-600 text-white rounded-full shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium whitespace-nowrap"
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
              <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
              <span>GitHub</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-ryvie-dark hover:text-ryvie-blue transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pb-4 animate-fade-in">
            <div className="flex flex-col gap-3 rounded-2xl bg-white/90 p-4 shadow-lg">
              {displayLinks.map((link) => (
                link.type === 'page' ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-ryvie-gray hover:text-ryvie-blue transition-colors duration-200 font-medium py-1"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-ryvie-gray hover:text-ryvie-blue transition-colors duration-200 font-medium py-1"
                  >
                    {link.name}
                  </a>
                )
              ))}
              <a
                href={downloadUrl}
                download
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
                className="flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-ryvie-blue to-blue-600 text-white rounded-full hover:shadow-lg transition-all duration-200 font-medium"
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
                className="px-6 py-2.5 border border-ryvie-blue text-ryvie-blue rounded-full hover:bg-ryvie-blue hover:text-white transition-all duration-200 font-medium text-center bg-white"
              >
                GitHub
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
