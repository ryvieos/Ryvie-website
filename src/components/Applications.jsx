import React from 'react';
import { Image, Send, Smartphone, HardDrive, Brain } from 'lucide-react';

const Applications = () => {
  const apps = [
    {
      name: "rPictures",
      icon: Image,
      description: "Stocker, organiser et partager les photos en toute simplicité, pour toute la famille.",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "rTransfer",
      icon: Send,
      description: "Transférer facilement de gros fichiers, sans aucune limite de taille (ou presque).",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "rDrop",
      icon: Smartphone,
      description: "Transférer des fichiers, photos et vidéos entre ses appareils, aussi simplement qu'avec AirDrop.",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "rDrive",
      icon: HardDrive,
      description: "Récupérer et synchroniser tous ses fichiers stockés chez Google, Microsoft ou Apple directement chez soi.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="applications" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Applications <span className="text-gradient">Ryvie</span>
          </h2>
          <p className="text-xl text-ryvie-gray">
            Des applications développées spécialement pour Ryvie, pensées pour la simplicité et la performance
          </p>
        </div>

        {/* Main Apps Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {apps.map((app, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex items-start space-x-6">
                {/* App Icon Placeholder */}
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 bg-gradient-to-br ${app.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <app.icon className="w-10 h-10 text-white" />
                  </div>
                  {/* Placeholder for actual logo */}
                  <img 
                    src={`/images/apps/${app.name.toLowerCase()}-logo.png`}
                    alt={`${app.name} logo`}
                    className="w-20 h-20 rounded-2xl shadow-lg hidden"
                    onLoad={(e) => {
                      e.target.classList.remove('hidden');
                      e.target.previousSibling.classList.add('hidden');
                    }}
                  />
                </div>

                {/* App Info */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-ryvie-dark">{app.name}</h3>
                  <p className="text-ryvie-gray leading-relaxed">{app.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* rAI Special Section */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-1 shadow-2xl">
            <div className="bg-white rounded-3xl p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
                {/* rAI Icon */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-xl">
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                  {/* Placeholder for actual logo */}
                  <img 
                    src="/images/apps/rai-logo.png"
                    alt="rAI logo"
                    className="w-24 h-24 rounded-3xl shadow-xl hidden"
                    onLoad={(e) => {
                      e.target.classList.remove('hidden');
                      e.target.previousSibling.classList.add('hidden');
                    }}
                  />
                </div>

                {/* rAI Info */}
                <div className="flex-1">
                  <div className="inline-block px-4 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full mb-4">
                    <span className="text-indigo-700 font-semibold text-sm">Intelligence Artificielle Sécurisée</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-ryvie-dark">rAI</h3>
                  <p className="text-lg text-ryvie-gray leading-relaxed mb-4">
                    Connectez-vous à des dizaines d'IA (ChatGPT, Claude, Gemini, etc.) tout en protégeant vos données sensibles.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center space-x-2 bg-indigo-50 px-4 py-2 rounded-full">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                      <span className="text-sm font-medium text-indigo-900">Filtrage des données sensibles</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-purple-50 px-4 py-2 rounded-full">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-sm font-medium text-purple-900">Protection de la vie privée</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-pink-50 px-4 py-2 rounded-full">
                      <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                      <span className="text-sm font-medium text-pink-900">Cybersécurité renforcée</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;
