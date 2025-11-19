import React from 'react';
import { Cloud, Shield, Zap, Wifi, ExternalLink, Play } from 'lucide-react';

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
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="/images/cloud-background.png" 
          alt="" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/90 to-cyan-50/80"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-ryvie-blue/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Decorative 3D clouds */}
      <img 
        src="/images/cloud-3d.png" 
        alt="" 
        className="absolute top-32 right-20 w-48 h-48 opacity-80 animate-float hidden xl:block"
        style={{ animationDelay: '0.5s' }}
      />
      <img 
        src="/images/cloud-3d.png" 
        alt="" 
        className="absolute bottom-40 left-16 w-40 h-40 opacity-70 animate-float hidden xl:block"
        style={{ animationDelay: '1.5s' }}
      />
      <img 
        src="/images/cloud-3d.png" 
        alt="" 
        className="absolute top-1/2 left-1/3 w-36 h-36 opacity-60 animate-float hidden 2xl:block"
        style={{ animationDelay: '2.5s' }}
      />

      <div className="container mx-auto px-6">
        {/* Titre principal centré */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-6 py-2 bg-ryvie-blue/10 rounded-full mb-6">
            <span className="text-ryvie-blue font-semibold">Votre Cloud Personnel</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-ryvie-blue to-blue-600 bg-clip-text text-transparent">Vos données,</span>
            <br />
            <span className="text-ryvie-dark">votre pouvoir.</span>
          </h1>

          <p className="text-xl text-ryvie-gray leading-relaxed max-w-3xl mx-auto mb-12">
            Ryvie est votre cloud personnel qui permet de stocker photos, vidéos, documents et d'installer des applications. 
            <span className="font-semibold text-ryvie-dark"> Les données restent chez vous,</span> accédez-y partout dans le monde.
          </p>
        </div>

        {/* Section principale : Vidéo du logiciel + 2 gammes */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
          
          {/* Vidéo du logiciel - Grande carte à gauche */}
          <div className="lg:col-span-2 animate-fade-in">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-full">
              {/* Placeholder vidéo */}
              <div className="relative aspect-video bg-gradient-to-br from-ryvie-blue/20 to-blue-600/20 flex items-center justify-center">
                <video 
                  className="absolute inset-0 w-full h-full object-cover"
                  poster="/images/capturePC.png"
                  controls
                  loop
                  autoPlay
                  muted
                  playsInline
                  onLoadedData={(e) => {
                    e.target.playbackRate = 1.3;
                    e.target.classList.remove('hidden');
                    e.target.nextSibling.classList.add('hidden');
                  }}
                >
                  <source src="/videos/ouverture-app.mp4" type="video/mp4" />
                </video>
                
                {/* Placeholder UI */}
                <div className="text-center p-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full shadow-xl mb-4 hover:scale-110 transition-transform cursor-pointer">
                    <Play className="w-10 h-10 text-ryvie-blue ml-1" />
                  </div>
                  <p className="text-ryvie-dark font-semibold text-lg mb-2">Découvrez le logiciel Ryvie</p>
                  <p className="text-ryvie-gray">Vidéo de démonstration à intégrer ici</p>
                </div>
              </div>
              
              {/* Description */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-ryvie-dark mb-4">Le logiciel Ryvie</h3>
                <p className="text-ryvie-gray leading-relaxed mb-6">
                  Interface intuitive et moderne pour gérer toutes vos données, installer des applications en un clic, 
                  et accéder à votre cloud personnel depuis n'importe où.
                </p>

                {/* Capture de l'interface Ryvie Desktop */}
                <div className="mb-8 rounded-2xl overflow-hidden border border-gray-100 shadow-md bg-gray-50">
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
                      <span className="text-sm text-ryvie-gray leading-snug">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite : 2 gammes empilées */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            
            {/* Gamme Éco-responsable */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-64 bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-6">
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
                <h3 className="text-xl font-bold text-ryvie-dark mb-2">Gamme Économie Circulaire</h3>
                <p className="text-ryvie-gray text-sm mb-4">
                  Ordinateurs reconditionnés transformés en cloud personnel. Écologique et économique.
                </p>
                <a href="#pricing" className="block text-center px-6 py-2 border-2 border-green-500 text-green-600 rounded-full hover:bg-green-500 hover:text-white transition-all font-semibold">
                  Découvrir la gamme
                </a>
              </div>
            </div>

            {/* Gamme Pro */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-64 bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-6">
                <img 
                  src="/images/ryvie-procloud.png" 
                  alt="Ryvie Pro" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-ryvie-blue to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Pro
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-ryvie-dark mb-2">Gamme Pro</h3>
                <p className="text-ryvie-gray text-sm mb-4">
                  Hardware neuf haute performance avec support IA intégré. Pour les professionnels exigeants.
                </p>
                <a href="#pricing" className="block text-center px-6 py-2 bg-gradient-to-r from-ryvie-blue to-blue-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all font-semibold">
                  Découvrir la gamme
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
