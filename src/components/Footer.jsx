import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Accueil', href: '/', type: 'page' },
      { name: 'Applications', href: '/#applications', type: 'anchor' },
      { name: 'Offres', href: '/offres', type: 'page' },
    ],
    resources: [
      { name: 'Démos vidéo', href: '/#videos', type: 'anchor' },
      { name: 'FAQ & Contact', href: '/#faq', type: 'anchor' },
      { name: 'Documentation', href: '#', type: 'anchor' },
    ],
    company: [
      { name: 'À propos', href: '#', type: 'anchor' },
      { name: 'Mentions légales', href: '#', type: 'anchor' },
      { name: 'Politique de confidentialité', href: '#', type: 'anchor' },
    ],
    community: [
      { name: 'GitHub', href: 'https://github.com/ryvieos', external: true },
      { name: 'Open Source', href: '/opensource', type: 'page' },
      { name: 'Contribuer', href: 'https://github.com/ryvieos', external: true },
    ],
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ryvieos', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/ryvie', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/ryvie', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@ryvie.fr', label: 'Email' },
  ];

  return (
    <footer id="footer" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/images/logo.png" 
                alt="Ryvie Logo" 
                className="h-10 w-10"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="h-10 w-10 bg-gradient-to-br from-ryvie-blue to-blue-600 rounded-xl items-center justify-center hidden">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-bold">Ryvie</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Votre cloud personnel à la maison. Vos données, votre pouvoir.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-ryvie-blue rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Produit</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  {link.type === 'page' ? (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-ryvie-blue transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-ryvie-blue transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Ressources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  {link.type === 'page' ? (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-ryvie-blue transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-ryvie-blue transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Entreprise</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  {link.type === 'page' ? (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-ryvie-blue transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-ryvie-blue transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Communauté</h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link, index) => (
                <li key={index}>
                  {link.type === 'page' ? (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-ryvie-blue transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-gray-400 hover:text-ryvie-blue transition-colors duration-200 flex items-center space-x-1"
                    >
                      <span>{link.name}</span>
                      {link.external && <ExternalLink className="w-3 h-3" />}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Demo Link Banner */}
        <div className="bg-gradient-to-r from-ryvie-blue to-blue-600 rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Essayez Ryvie dès maintenant</h3>
          <p className="mb-6 opacity-95">Découvrez notre démo en ligne et testez toutes les fonctionnalités</p>
          <a
            href="https://demo.ryvie.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-white text-ryvie-blue rounded-full font-semibold hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            <span>Accéder à la démo</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Ryvie. Tous droits réservés.
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Fait avec</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>pour reprendre le contrôle de vos données</span>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Ryvie est un projet open source qui respecte votre vie privée et vos données personnelles.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
