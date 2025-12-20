import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Zap, Wifi } from 'lucide-react';
import BackgroundRibbons from './BackgroundRibbons';

const Hero = () => {
  const benefits = [
    {
      icon: Shield,
      text: "Les fichiers restent chez vous, personne ne les exploite"
    },
    {
      icon: Zap,
      text: "Jusqu'à 10x plus rapide qu'un cloud traditionnel"
    },
    {
      icon: Cloud,
      text: "Pas de cumuls d'abonnements mensuels"
    },
    {
      icon: Wifi,
      text: "Fonctionne même sans Internet sur le réseau local"
    }
  ];

  return (
    <section id="hero" className="relative flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="/images/cloud-background.png" 
          alt="" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ryvie-navy/90 via-ryvie-navy-2/80 to-ryvie-navy/90"></div>
        <BackgroundRibbons variant="hero" />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-ryvie-electric/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-ryvie-blue/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Decorative 3D clouds - z-50 pour être au premier plan */}
      <img 
        src="/images/cloud-3d.png" 
        alt="" 
        className="absolute top-32 right-20 w-48 h-48 opacity-80 animate-float hidden xl:block z-50 pointer-events-none"
        style={{ animationDelay: '0.5s' }}
      />
      <img 
        src="/images/cloud-3d.png" 
        alt="" 
        className="absolute bottom-40 left-16 w-40 h-40 opacity-70 animate-float hidden xl:block z-50 pointer-events-none"
        style={{ animationDelay: '1.5s' }}
      />
      <img 
        src="/images/cloud-3d.png" 
        alt="" 
        className="absolute top-1/2 left-1/3 w-36 h-36 opacity-60 animate-float hidden 2xl:block z-50 pointer-events-none"
        style={{ animationDelay: '2.5s' }}
      />

      <div className="container mx-auto px-6">
        {/* Titre principal centré */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-block px-6 py-2 bg-white/10 border border-white/10 rounded-full mb-6">
            <span className="text-ryvie-blue font-semibold">Votre Cloud Personnel</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-ryvie-electric to-ryvie-blue bg-clip-text text-transparent">Vos données,</span>
            <br />
            <span className="text-white">votre pouvoir.</span>
          </h1>

          <p className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto mb-8">
            Ryvie est votre cloud personnel qui permet de stocker photos, vidéos, documents et d'installer des applications. 
            <span className="font-semibold text-white"> Les données restent chez vous,</span> accédez-y partout dans le monde.
          </p>
        </div>

        {/* Section principale : Vidéo du logiciel + 2 gammes */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
          
          {/* Vidéo du logiciel - Grande carte à gauche */}
          <div className="lg:col-span-2 animate-fade-in">
            <div className="glass-effect rounded-3xl shadow-2xl overflow-hidden h-full">
              {/* Placeholder vidéo */}
              <div className="relative aspect-video bg-gradient-to-br from-ryvie-blue/20 to-blue-600/20 flex items-center justify-center">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/videos/ouverture-app.mp4"
                  poster="/images/capturePC.png"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  onError={(e) => {
                    e.target.controls = true;
                  }}
                  onLoadedData={(e) => {
                    e.target.playbackRate = 1.0;
                    const p = e.target.play();
                    if (p && typeof p.catch === 'function') {
                      p.catch(() => {
                        e.target.controls = true;
                      });
                    }
                  }}
                />
              </div>
              
              {/* Description */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Le logiciel Ryvie</h3>
                <p className="text-white/75 leading-relaxed mb-6">
                  Interface intuitive et moderne pour gérer toutes vos données, installer des applications en un clic, 
                  et accéder à votre cloud personnel depuis n'importe où.
                </p>

                {/* Capture de l'interface Ryvie Desktop */}
                <div className="mb-8 rounded-2xl overflow-hidden border border-white/10 shadow-md bg-white/5">
                  <img
                    src="/images/capturePC.png"
                    alt="Interface Ryvie Desktop"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <benefit.icon className="w-5 h-5 text-ryvie-blue flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/75 leading-snug">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite : 2 gammes empilées */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            
            {/* Gamme Éco-responsable */}
            <div className="glass-effect rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-64 bg-white/5 flex items-center justify-center p-6">
                <img 
                  src="/images/ryvie-ecocloud.png" 
                  alt="Ryvie Éco-responsable" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Éco-responsable
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Gamme Économie Circulaire</h3>
                <p className="text-white/75 text-sm mb-4">
                  Ordinateurs reconditionnés transformés en cloud personnel. Écologique et économique.
                </p>
                <Link to="/offres" className="block text-center px-6 py-2 border-2 border-green-500 text-green-600 rounded-full hover:bg-green-500 hover:text-white transition-all font-semibold">
                  Découvrir la gamme
                </Link>
              </div>
            </div>

            {/* Gamme Pro */}
            <div className="glass-effect rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-64 bg-white/5 flex items-center justify-center p-6">
                <img 
                  src="/images/ryvie-procloud.png" 
                  alt="Ryvie Pro" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-ryvie-electric to-ryvie-blue text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Pro
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Gamme Pro</h3>
                <p className="text-white/75 text-sm mb-4">
                  Hardware neuf haute performance avec support IA intégré. Pour les professionnels exigeants.
                </p>
                <Link to="/offres" className="block text-center px-6 py-2 bg-gradient-to-r from-ryvie-electric to-ryvie-blue text-white rounded-full hover:shadow-lg hover:scale-105 transition-all font-semibold">
                  Découvrir la gamme
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
