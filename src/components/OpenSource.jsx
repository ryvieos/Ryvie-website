import React from 'react';
import { Github, Code, Users, Heart, ExternalLink } from 'lucide-react';

const OpenSource = () => {
  const benefits = [
    {
      icon: Code,
      title: "Transparence totale",
      description: "Le code source est ouvert et auditable par tous"
    },
    {
      icon: Users,
      title: "Communauté active",
      description: "Rejoignez une communauté de développeurs passionnés"
    },
    {
      icon: Heart,
      title: "Contribution libre",
      description: "Participez au développement et proposez vos idées"
    }
  ];

  return (
    <section id="opensource" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl mb-6 shadow-xl">
            <Github className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Open Source & <span className="text-gradient">GitHub</span>
          </h2>
          <p className="text-xl text-ryvie-gray leading-relaxed">
            Ryvie s'appuie sur l'open source et contribue activement à l'écosystème
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-ryvie-dark">Notre engagement Open Source</h3>
              <div className="space-y-4 text-ryvie-gray leading-relaxed">
                <p>
                  Chez Ryvie, nous croyons fermement aux valeurs de l'open source : 
                  <span className="font-semibold text-ryvie-dark"> transparence, collaboration et partage</span>.
                </p>
                <p>
                  Une grande partie de notre projet est publiée sur GitHub, permettant à chacun 
                  de consulter le code, de proposer des améliorations et de contribuer au développement.
                </p>
                <p>
                  Nous utilisons également de nombreux projets open source et nous nous engageons 
                  à redonner à la communauté en contribuant à ces projets et en partageant nos innovations.
                </p>
              </div>
            </div>

            {/* Right Column - Benefits */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-ryvie-blue to-blue-600 rounded-xl flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-ryvie-dark">{benefit.title}</h4>
                      <p className="text-ryvie-gray">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white text-center">
            <Github className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h3 className="text-3xl font-bold mb-4">Rejoignez-nous sur GitHub</h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Suivez le développement de Ryvie, consultez le code source, 
              signalez des bugs, proposez des fonctionnalités ou contribuez directement au projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/ryvie"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <Github className="w-5 h-5" />
                <span>Voir le projet sur GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/ryvie/ryvie/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200"
              >
                <Users className="w-5 h-5" />
                <span>Rejoindre la communauté</span>
              </a>
            </div>
          </div>

          {/* Developer Section */}
          <div className="mt-12 bg-gradient-to-r from-ryvie-blue/10 to-blue-600/10 rounded-2xl p-8 text-center">
            <p className="text-lg text-ryvie-gray">
              <span className="font-semibold text-ryvie-dark">Vous êtes développeur ?</span>
              <br />
              Consultez notre documentation technique et nos guides de contribution sur GitHub
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
