import React, { useState } from 'react';
import { Recycle, Zap, Code, Check } from 'lucide-react';
import { analytics } from '../utils/analytics';
import BackgroundRibbons from './BackgroundRibbons';

const Pricing = () => {
  const [showPreorderInfo, setShowPreorderInfo] = useState(false);

  const plans = [
    {
      icon: Recycle,
      name: "Économie Circulaire",
      tagline: "Écologique & Économique",
      price: "~300€",
      description: "Cloud personnel créé à partir d'ordinateurs dits « obsolètes »",
      image: "/images/ryvie-ecocloud.png",
      features: [
        "Ordinateur reconditionné",
        "Réduit les déchets électroniques",
        "Performances optimisées",
        "Installation complète",
        "Support technique",
        "Toutes les applications Ryvie"
      ],
      color: "from-green-500 to-emerald-600",
      popular: true
    },
    {
      icon: Zap,
      name: "Ryvie Pro",
      tagline: "Performance & Puissance",
      price: "~600€",
      description: "Hardware neuf avec plus de puissance et possibilité d'intégrer de l'IA",
      image: "/images/ryvie-procloud.png",
      features: [
        "Matériel neuf haute performance",
        "Support IA intégré",
        "Stockage extensible",
        "Garantie constructeur",
        "Support prioritaire",
        "Toutes les applications Ryvie",
        "Capacités d'extension"
      ],
      color: "from-ryvie-blue to-blue-600",
      popular: false
    },
    {
      icon: Code,
      name: "OpenCore (Logiciel)",
      tagline: "Pour les experts",
      price: "Gratuit",
      description: "Logiciel Ryvie installable sur n'importe quel serveur",
      image: "/images/capturePC.png",
      features: [
        "Cœur du logiciel gratuit",
        "Installation sur votre matériel",
        "Source Available",
        "Communauté active",
        "Documentation complète",
        "Fonctionnalités premium optionnelles"
      ],
      color: "from-purple-500 to-pink-600",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      <BackgroundRibbons variant="section" />
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nos <span className="text-gradient">Offres</span>
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Choisissez la solution Ryvie qui correspond à vos besoins et à votre budget
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative glass-effect rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  plan.popular ? 'ring-2 ring-ryvie-blue/60' : ''
                } flex flex-col h-full`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 z-20 bg-gradient-to-r from-ryvie-electric to-ryvie-blue text-white px-6 py-2 rounded-bl-2xl font-semibold text-sm">
                    Populaire
                  </div>
                )}

                {/* Image de la gamme */}
                {plan.image && (
                  <div className="relative z-10 h-64 bg-white/5 flex items-center justify-center p-6">
                    <img 
                      src={plan.image}
                      alt={plan.name}
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl mb-6 shadow-lg`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Plan Info */}
                  <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                  <p className="text-sm text-ryvie-blue font-semibold mb-4">{plan.tagline}</p>
                  
                  {/* Indication de tarification sans afficher de montant */}
                  <div className="mb-6">
                    {plan.price === "Gratuit" ? (
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-ryvie-blue text-xs font-semibold uppercase tracking-wide border border-white/10">
                        Gratuit
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 text-white/70 text-xs font-medium uppercase tracking-wide border border-white/10">
                        Tarification à venir
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-white/75 mb-6 leading-relaxed">{plan.description}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-ryvie-blue flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/75">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button 
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-ryvie-electric to-ryvie-blue text-white hover:shadow-xl hover:scale-105'
                        : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
                    } mt-auto`}
                    onClick={() => {
                      if (plan.price !== 'Gratuit') {
                        analytics.clickPreorder(plan.name);
                        setShowPreorderInfo(true);
                      }
                    }}
                  >
                    {plan.price === "Gratuit" ? "Télécharger" : "Pré-commander"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="inline-block glass-effect rounded-2xl p-8 max-w-3xl">
              <p className="text-lg text-white/80 mb-4">
                <span className="font-semibold text-white">Besoin d'aide pour choisir ?</span>
              </p>
              <p className="text-white/70 mb-6">
                Notre équipe est là pour vous conseiller et trouver la solution Ryvie parfaite pour vos besoins.
              </p>
              <a
                href="mailto:contact@ryvie.fr"
                onClick={() => analytics.clickContact('pricing_section')}
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-ryvie-electric to-ryvie-blue text-white rounded-full font-semibold hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Preorder info overlay */}
      {showPreorderInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="glass-effect rounded-3xl shadow-2xl max-w-md w-full mx-4 p-8 relative">
            <h3 className="text-2xl font-bold text-white mb-3">Pré-commande bientôt disponible</h3>
            <p className="text-white/75 mb-4">
              Les gammes matérielles Ryvie ne sont pas encore disponibles à la vente.
            </p>
            <p className="text-white/75 mb-6">
              Elles arrivent très bientôt. En attendant, vous pouvez nous contacter pour en savoir plus
              ou suivre le projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
              <a
                href="mailto:contact@ryvie.fr"
                onClick={() => analytics.clickContact('preorder_modal')}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 transition-all text-sm font-semibold"
              >
                Nous contacter
              </a>
              <button
                onClick={() => setShowPreorderInfo(false)}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-ryvie-electric to-ryvie-blue text-white hover:shadow-xl transition-all text-sm font-semibold"
              >
                Compris
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;
