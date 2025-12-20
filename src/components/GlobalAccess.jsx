import React from 'react';
import { Globe, Smartphone, Monitor, Tablet, MapPin, Plane, Coffee, Home } from 'lucide-react';
import BackgroundRibbons from './BackgroundRibbons';

const GlobalAccess = () => {
  const devices = [
    { icon: Monitor, name: "Ordinateur" },
    { icon: Smartphone, name: "Smartphone" },
    { icon: Tablet, name: "Tablette" }
  ];

  const scenarios = [
    {
      icon: Home,
      title: "Chez vous",
      description: "Accès ultra-rapide sur votre réseau local"
    },
    {
      icon: Coffee,
      title: "Au bureau",
      description: "Travaillez avec vos fichiers personnels en toute sécurité"
    },
    {
      icon: Plane,
      title: "En voyage",
      description: "Retrouvez toutes vos données où que vous soyez"
    },
    {
      icon: MapPin,
      title: "Chez la famille",
      description: "Partagez vos photos et vidéos facilement"
    }
  ];

  return (
    <section id="access" className="py-24 relative overflow-hidden">
      <BackgroundRibbons variant="subtle" />
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ryvie-electric/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ryvie-blue/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-ryvie-electric to-ryvie-blue rounded-3xl mb-6 shadow-xl">
            <Globe className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Accès <span className="text-gradient">partout dans le monde</span>
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Connectez-vous à votre Ryvie et à toutes vos applications depuis n'importe quel appareil, 
            n'importe où dans le monde, en toute sécurité.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Devices Section */}
          <div className="mb-16">
            <div className="glass-effect rounded-3xl shadow-xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-8 text-center text-white">
                Tous vos appareils, synchronisés
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {devices.map((device, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-ryvie-electric to-ryvie-blue rounded-2xl flex items-center justify-center mb-4">
                      <device.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-lg font-semibold text-white">{device.name}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-white/70">
                  Accédez via une application dédiée ou simplement depuis votre navigateur web
                </p>
              </div>
            </div>
          </div>

          {/* Scenarios Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {scenarios.map((scenario, index) => (
              <div 
                key={index}
                className="glass-effect rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-ryvie-electric to-ryvie-blue rounded-xl flex items-center justify-center mb-4">
                  <scenario.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">{scenario.title}</h4>
                <p className="text-sm text-white/75 leading-relaxed">{scenario.description}</p>
              </div>
            ))}
          </div>

          {/* Key Features */}
          <div className="bg-gradient-to-br from-ryvie-electric to-ryvie-blue rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">🔒</div>
                <h4 className="text-xl font-bold mb-2">Connexion sécurisée</h4>
                <p className="opacity-90">Chiffrement de bout en bout pour toutes vos données</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">⚡</div>
                <h4 className="text-xl font-bold mb-2">Accès instantané</h4>
                <p className="opacity-90">Vos fichiers disponibles en quelques secondes</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">🌍</div>
                <h4 className="text-xl font-bold mb-2">Sans frontières</h4>
                <p className="opacity-90">Accessible depuis n'importe quel pays</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalAccess;
