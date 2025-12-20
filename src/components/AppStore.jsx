import React, { useState, useEffect } from 'react';
import { Store, Image, Video, FolderKanban, Lock, Home, Zap, Briefcase, CheckCircle } from 'lucide-react';
import BackgroundRibbons from './BackgroundRibbons';
import { fetchAppsFromGitHub } from '../services/githubAppService';

const AppStore = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadApps = async () => {
      try {
        setLoading(true);
        const fetchedApps = await fetchAppsFromGitHub();
        setApps(fetchedApps);
        setError(null);
      } catch (err) {
        console.error('Erreur chargement apps:', err);
        setError('Impossible de charger les applications');
      } finally {
        setLoading(false);
      }
    };

    loadApps();
  }, []);

  const categories = [
    { icon: Image, name: "Photos & Médias", color: "bg-purple-500" },
    { icon: Video, name: "Streaming", color: "bg-red-500" },
    { icon: FolderKanban, name: "Gestion de projet", color: "bg-blue-500" },
    { icon: Lock, name: "Mots de passe", color: "bg-green-500" },
    { icon: Home, name: "Domotique", color: "bg-orange-500" },
    { icon: Zap, name: "Automatisation", color: "bg-yellow-500" },
    { icon: Briefcase, name: "Outils pro", color: "bg-indigo-500" },
  ];

  const features = [
    "Installation en un clic",
    "Applications vérifiées",
    "Mises à jour automatiques",
    "Support communautaire"
  ];

  return (
    <section id="appstore" className="relative py-16 overflow-hidden">
      <BackgroundRibbons variant="subtle" />
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-ryvie-electric to-ryvie-blue rounded-3xl mb-6 shadow-xl">
            <Store className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            App Store <span className="text-gradient">Ryvie</span>
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Des centaines d'applications installables en un clic. 
            Créez votre cloud sur mesure selon vos besoins.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Categories Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-white">Catégories d'applications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {categories.map((category, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center p-6 glass-effect rounded-2xl hover:bg-white/10 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white/75 text-center group-hover:text-white transition-colors">
                    {category.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* App Store Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Transparent & Sécurisé</h3>
              <p className="text-white/75 mb-6 leading-relaxed">
                Toutes les applications de l'App Store Ryvie sont vérifiées et sécurisées. 
                Le code est transparent, audité par la communauté, et vous gardez le contrôle total.
              </p>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-ryvie-blue flex-shrink-0" />
                    <span className="text-white/75">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-ryvie-electric to-ryvie-blue rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Applications sur mesure</h3>
              <p className="mb-6 leading-relaxed opacity-95">
                Besoin d'une application spécifique pour votre entreprise, votre collectivité ou vos besoins personnels ?
              </p>
              <p className="mb-6 leading-relaxed opacity-95">
                L'équipe Ryvie développe des applications sur mesure adaptées à vos besoins spécifiques.
              </p>
              <a
                href="mailto:contact@ryvie.fr"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/10 border border-white/20 text-white rounded-full font-semibold hover:bg-white/15 hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Nous contacter
              </a>
            </div>
          </div>

          {/* App Showcase */}
          <div className="glass-effect rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold mb-8 text-center text-white">Aperçu de l'App Store</h3>
            
            {loading && (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-ryvie-blue"></div>
                <p className="text-white/60 mt-4">Chargement des applications depuis GitHub...</p>
              </div>
            )}

            {error && (
              <div className="text-center py-12">
                <p className="text-red-400 mb-4">{error}</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="px-6 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
                >
                  Réessayer
                </button>
              </div>
            )}

            {!loading && !error && apps.length > 0 && (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {apps.map((app) => (
                    <div 
                      key={app.id}
                      className="flex flex-col items-center group cursor-pointer"
                      title={app.description}
                    >
                      <div className="w-20 h-20 bg-white/10 border border-white/10 rounded-2xl mb-3 group-hover:scale-110 transition-transform shadow-md overflow-hidden">
                        <img 
                          src={app.icon}
                          alt={app.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center"><svg class="w-8 h-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg></div>';
                          }}
                        />
                      </div>
                      <span className="text-xs text-white/75 text-center font-medium">{app.name}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <p className="text-sm text-white/60 mb-4">
                    <a href="https://github.com/ryvieos/Ryvie-Apps" target="_blank" rel="noopener noreferrer" className="text-ryvie-blue hover:underline">ryvieos/Ryvie-Apps</a>
                  </p>
                  <button className="px-8 py-3 bg-gradient-to-r from-ryvie-electric to-ryvie-blue text-white rounded-full font-semibold hover:shadow-xl transition-all duration-200 hover:scale-105">
                    Explorer l'App Store
                  </button>
                </div>
              </>
            )}

            {!loading && !error && apps.length === 0 && (
              <div className="text-center py-12">
                <p className="text-white/60">Aucune application disponible pour le moment.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppStore;
