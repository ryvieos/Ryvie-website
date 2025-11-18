import React from 'react';
import { Store, Image, Video, FolderKanban, Lock, Home, Zap, Briefcase, CheckCircle } from 'lucide-react';

const AppStore = () => {
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
    "Applications open source vérifiées",
    "Mises à jour automatiques",
    "Support communautaire"
  ];

  return (
    <section id="appstore" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-ryvie-blue to-blue-600 rounded-3xl mb-6 shadow-xl">
            <Store className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            App Store <span className="text-gradient">Ryvie</span>
          </h2>
          <p className="text-xl text-ryvie-gray leading-relaxed">
            Des centaines d'applications open source installables en un clic. 
            Créez votre cloud sur mesure selon vos besoins.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Categories Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-ryvie-dark">Catégories d'applications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {categories.map((category, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-sm font-medium text-ryvie-gray text-center group-hover:text-ryvie-dark transition-colors">
                    {category.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* App Store Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-ryvie-dark">Open Source & Transparent</h3>
              <p className="text-ryvie-gray mb-6 leading-relaxed">
                Toutes les applications de l'App Store Ryvie sont open source. 
                Le code est transparent, audité par la communauté, et vous gardez le contrôle total.
              </p>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-ryvie-blue flex-shrink-0" />
                    <span className="text-ryvie-gray">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-ryvie-blue to-blue-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Applications sur mesure</h3>
              <p className="mb-6 leading-relaxed opacity-95">
                Besoin d'une application spécifique pour votre entreprise, votre collectivité ou vos besoins personnels ?
              </p>
              <p className="mb-6 leading-relaxed opacity-95">
                L'équipe Ryvie développe des applications sur mesure adaptées à vos besoins spécifiques.
              </p>
              <button className="px-6 py-3 bg-white text-ryvie-blue rounded-full font-semibold hover:shadow-xl transition-all duration-200 hover:scale-105">
                Nous contacter
              </button>
            </div>
          </div>

          {/* App Showcase Placeholder */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 border border-gray-100">
            <h3 className="text-2xl font-bold mb-8 text-center text-ryvie-dark">Aperçu de l'App Store</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[...Array(12)].map((_, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl mb-3 group-hover:scale-110 transition-transform shadow-md flex items-center justify-center">
                    <img 
                      src={`/images/apps/app-${index + 1}.png`}
                      alt={`App ${index + 1}`}
                      className="w-full h-full rounded-2xl object-cover hidden"
                      onLoad={(e) => {
                        e.target.classList.remove('hidden');
                        e.target.parentElement.classList.add('p-0');
                      }}
                    />
                    <Store className="w-8 h-8 text-gray-400" />
                  </div>
                  <span className="text-xs text-ryvie-gray text-center">App {index + 1}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button className="px-8 py-3 bg-gradient-to-r from-ryvie-blue to-blue-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-200 hover:scale-105">
                Explorer l'App Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppStore;
