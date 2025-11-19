import React, { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';

const Header = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Produit', href: '#hero' },
    { name: 'Applications', href: '#applications' },
    { name: 'App Store', href: '#appstore' },
    { name: 'Offres', href: '#pricing' },
    { name: 'Démos vidéo', href: '#videos' },
    { name: 'Pour qui ?', href: '#usecases' },
    { name: 'Open Source', href: '#opensource' },
    { name: 'Pourquoi Ryvie ?', href: '#why' },
    { name: 'FAQ & Contact', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/60 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-lg' : 'bg-white/90 backdrop-blur-md shadow-sm'
      }`}
    >
      <nav className="mx-auto pl-4 pr-2 overflow-x-auto">
        {/* Hauteur fixe pour stabiliser la barre */}
        <div className="flex items-center gap-20 h-20">
          {/* Logo à gauche */}
          <a href="#hero" className="flex items-center gap-3 group flex-shrink-0">
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
            <span className="text-3xl font-semibold bg-gradient-to-r from-ryvie-blue to-blue-600 bg-clip-text text-transparent leading-tight tracking-tight">
              Ryvie
            </span>
          </a>

          {/* Navigation centrale moderne */}
          <div className="hidden lg:flex items-center gap-4 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm text-ryvie-gray hover:text-ryvie-blue transition-colors duration-200 font-medium whitespace-nowrap"
              >
                {link.name}
                <span className="pointer-events-none absolute left-1/2 -bottom-1 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-ryvie-blue to-blue-600 opacity-0 transition-all duration-200 group-hover/nav:w-6 group-hover/nav:opacity-100" />
              </a>
            ))}
          </div>

          {/* Boutons à droite */}
          <div className="hidden lg:flex items-center gap-2.5 flex-shrink-0 ml-auto">
            <a
              href="https://demo.ryvie.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-ryvie-blue to-blue-600 text-white rounded-full shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium text-sm whitespace-nowrap"
            >
              <span>Découvrir la démo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="#opensource"
              className="px-4 py-2.5 rounded-full font-medium text-sm whitespace-nowrap border border-black/80 bg-black text-white hover:bg-white hover:text-black hover:border-black transition-all duration-200 flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
              <span>GitHub</span>
            </a>
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
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-ryvie-gray hover:text-ryvie-blue transition-colors duration-200 font-medium py-1"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://demo.ryvie.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-ryvie-blue to-blue-600 text-white rounded-full hover:shadow-lg transition-all duration-200 font-medium mt-2"
              >
                <span>Découvrir la démo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="#opensource"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-2.5 border border-ryvie-blue text-ryvie-blue rounded-full hover:bg-ryvie-blue hover:text-white transition-all duration-200 font-medium text-center bg-white"
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
