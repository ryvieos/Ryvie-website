import React from 'react';
import { Play, Video } from 'lucide-react';

const Videos = () => {
  const videos = [
    {
      title: "Vidéo de démarrage",
      description: "Découvrez comment démarrer avec Ryvie en quelques minutes. Installation, configuration et première utilisation.",
      placeholder: "ouverture-app",
      hasVideo: true
    },
    {
      title: "Démonstration de l'App Store",
      description: "Explorez l'App Store Ryvie et apprenez à installer vos applications préférées en un clic.",
      placeholder: "appstore",
      hasVideo: true
    }
  ];

  return (
    <section id="videos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-ryvie-blue to-blue-600 rounded-3xl mb-6 shadow-xl">
            <Video className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Démos <span className="text-gradient">vidéo</span>
          </h2>
          <p className="text-xl text-ryvie-gray leading-relaxed">
            Découvrez Ryvie en action à travers nos vidéos de démonstration
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
            {videos.map((video, index) => (
              <div 
                key={index}
                className="w-full max-w-md bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Video Placeholder */}
                <div className="relative aspect-video bg-gradient-to-br from-ryvie-blue/20 to-blue-600/20 flex items-center justify-center group cursor-pointer">
                  {/* Video réelle (si disponible) */}
                  {video.hasVideo && video.placeholder && (
                    <video 
                      className="absolute inset-0 w-full h-full object-cover hidden"
                      poster={`/videos/${video.placeholder}-poster.jpg`}
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
                      <source src={`/videos/${video.placeholder}.mp4`} type="video/mp4" />
                    </video>
                  )}

                  {/* Placeholder UI */}
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full shadow-xl mb-4 group-hover:scale-110 transition-transform">
                      <Play className="w-10 h-10 text-ryvie-blue ml-1" />
                    </div>
                    <p className="text-ryvie-gray font-medium px-4">
                      Vidéo de démonstration à intégrer ici
                    </p>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-ryvie-dark">{video.title}</h3>
                  <p className="text-ryvie-gray leading-relaxed">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-ryvie-blue/10 to-blue-600/10 rounded-2xl p-8 max-w-2xl">
              <p className="text-lg text-ryvie-gray mb-4">
                <span className="font-semibold text-ryvie-dark">Vous préférez essayer directement ?</span>
              </p>
              <p className="text-ryvie-gray mb-6">
                Testez Ryvie en ligne avec notre démo interactive
              </p>
              <a
                href="https://demo.ryvie.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-ryvie-blue to-blue-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <Play className="w-5 h-5" />
                <span>Accéder à la démo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
