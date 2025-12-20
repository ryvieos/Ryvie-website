import React from 'react';
import { Play, Video } from 'lucide-react';
import BackgroundRibbons from './BackgroundRibbons';

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
    <section id="videos" className="relative py-24 overflow-hidden">
      <BackgroundRibbons variant="subtle" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-ryvie-electric to-ryvie-blue rounded-3xl mb-6 shadow-xl">
            <Video className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Démos <span className="text-gradient">vidéo</span>
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Découvrez Ryvie en action à travers nos vidéos de démonstration
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center">
            {videos.map((video, index) => (
              <div 
                key={index}
                className="w-full max-w-xl glass-effect rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Video Placeholder */}
                <div
                  className="relative aspect-video bg-white/5 flex items-center justify-center group overflow-hidden"
                  onClick={(e) => {
                    const videoEl = e.currentTarget.querySelector('video');
                    if (!videoEl) return;
                    const p = videoEl.play();
                    if (p && typeof p.catch === 'function') {
                      p.catch(() => {
                        videoEl.controls = true;
                      });
                    }
                  }}
                >
                  {/* Video réelle (si disponible) */}
                  {video.hasVideo && video.placeholder && (
                    <video 
                      className="absolute inset-0 w-full h-full object-contain"
                      poster="/images/capturePC.png"
                      controls
                      loop
                      autoPlay
                      muted
                      playsInline
                      preload="metadata"
                      onError={(e) => {
                        e.target.controls = true;
                      }}
                      onLoadedData={(e) => {
                        e.target.playbackRate = 1.1;
                        const tryPlay = e.target.play();
                        if (tryPlay && typeof tryPlay.catch === 'function') {
                          tryPlay.catch(() => {
                            e.target.controls = true;
                          });
                        }
                      }}
                    >
                      <source src={`/videos/${video.placeholder}.mp4`} type="video/mp4" />
                    </video>
                  )}
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{video.title}</h3>
                  <p className="text-white/75 leading-relaxed">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="inline-block glass-effect rounded-2xl p-8 max-w-2xl">
              <p className="text-lg text-white/80 mb-4">
                <span className="font-semibold text-white">Vous préférez essayer directement ?</span>
              </p>
              <p className="text-white/70 mb-6">
                Testez Ryvie en ligne avec notre démo interactive
              </p>
              <a
                href="https://demo.ryvie.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-ryvie-electric to-ryvie-blue text-white rounded-full font-semibold hover:shadow-xl transition-all duration-200 hover:scale-105"
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
