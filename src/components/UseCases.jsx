import React from 'react';
import { Users, Briefcase, Camera, Home } from 'lucide-react';
import BackgroundRibbons from './BackgroundRibbons';

const UseCases = () => {
  const cases = [
    {
      icon: Home,
      title: "Familles",
      description: "Centralisez toutes vos photos, vidéos et documents familiaux. Partagez facilement avec vos proches tout en gardant le contrôle de vos souvenirs.",
      benefits: [
        "Stockage illimité de photos et vidéos",
        "Partage sécurisé avec la famille",
        "Sauvegarde automatique depuis tous les appareils"
      ],
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: Briefcase,
      title: "Freelances & Indépendants",
      description: "Gérez vos projets, documents clients et fichiers de travail en toute sécurité. Accédez à tout depuis n'importe où.",
      benefits: [
        "Confidentialité totale de vos données clients",
        "Accès professionnel depuis partout",
        "Collaboration sécurisée"
      ],
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Users,
      title: "TPE / PME",
      description: "Une solution cloud professionnelle sans les coûts et les risques des solutions traditionnelles. Vos données restent dans votre entreprise.",
      benefits: [
        "Conformité RGPD simplifiée",
        "Réduction des coûts IT",
        "Contrôle total des données"
      ],
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: Camera,
      title: "Créateurs de contenu",
      description: "Stockez et gérez vos projets créatifs, rushes vidéo et fichiers volumineux. Performances optimales pour le montage et le streaming.",
      benefits: [
        "Transfert ultra-rapide de gros fichiers",
        "Stockage extensible",
        "Streaming de contenu personnel"
      ],
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="usecases" className="relative py-24 overflow-hidden">
      <BackgroundRibbons variant="section" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Pour <span className="text-gradient">qui</span> ?
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Ryvie s'adapte à tous les profils et tous les besoins
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((useCase, index) => (
              <div 
                key={index}
                className="glass-effect rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon & Title */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{useCase.title}</h3>
                </div>

                {/* Description */}
                <p className="text-white/80 leading-relaxed mb-6">
                  {useCase.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${useCase.color} mt-2 flex-shrink-0`}></div>
                      <span className="text-sm text-white/75">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block glass-effect rounded-2xl p-8 max-w-2xl">
              <p className="text-lg text-white/80 mb-6">
                <span className="font-semibold text-white">Quel que soit votre profil,</span>
                <br />
                Ryvie s'adapte à vos besoins spécifiques
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-ryvie-electric to-ryvie-blue text-white rounded-full font-semibold hover:shadow-xl transition-all duration-200 hover:scale-105">
                Découvrir toutes les possibilités
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
