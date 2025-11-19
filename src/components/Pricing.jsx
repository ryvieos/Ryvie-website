import React, { useState } from 'react';
import { Recycle, Zap, Code, Check } from 'lucide-react';

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
        "Open source",
        "Communauté active",
        "Documentation complète",
        "Fonctionnalités premium optionnelles"
      ],
      color: "from-purple-500 to-pink-600",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nos <span className="text-gradient">Offres</span>
          </h2>
          <p className="text-xl text-ryvie-gray leading-relaxed">
            Choisissez la solution Ryvie qui correspond à vos besoins et à votre budget
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  plan.popular ? 'ring-4 ring-ryvie-blue' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-ryvie-blue to-blue-600 text-white px-6 py-2 rounded-bl-2xl font-semibold text-sm">
                    Populaire
                  </div>
                )}

                {/* Image de la gamme */}
                {plan.image && (
                  <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
                    <img 
                      src={plan.image}
                      alt={plan.name}
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </div>
                )}

                <div className="p-8">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl mb-6 shadow-lg`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Plan Info */}
                  <h3 className="text-2xl font-bold mb-2 text-ryvie-dark">{plan.name}</h3>
                  <p className="text-sm text-ryvie-blue font-semibold mb-4">{plan.tagline}</p>
                  
                  {/* Indication de tarification sans afficher de montant */}
                  <div className="mb-6">
                    {plan.price === "Gratuit" ? (
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-ryvie-blue/10 text-ryvie-blue text-xs font-semibold uppercase tracking-wide">
                        Gratuit
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-100/80 text-gray-500 text-xs font-medium uppercase tracking-wide">
                        Tarification à venir
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-ryvie-gray mb-6 leading-relaxed">{plan.description}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-ryvie-blue flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-ryvie-gray">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button 
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-ryvie-blue to-blue-600 text-white hover:shadow-xl hover:scale-105'
                        : 'border-2 border-ryvie-blue text-ryvie-blue hover:bg-ryvie-blue hover:text-white'
                    }`}
                    onClick={() => {
                      if (plan.price !== 'Gratuit') {
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
            <div className="inline-block bg-gradient-to-r from-ryvie-blue/10 to-blue-600/10 rounded-2xl p-8 max-w-3xl">
              <p className="text-lg text-ryvie-gray mb-4">
                <span className="font-semibold text-ryvie-dark">Besoin d'aide pour choisir ?</span>
              </p>
              <p className="text-ryvie-gray mb-6">
                Notre équipe est là pour vous conseiller et trouver la solution Ryvie parfaite pour vos besoins.
              </p>
              <a
                href="mailto:contact@ryvie.fr"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-ryvie-blue to-blue-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-200 hover:scale-105"
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
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 p-8 relative">
            <h3 className="text-2xl font-bold text-ryvie-dark mb-3">Pré-commande bientôt disponible</h3>
            <p className="text-ryvie-gray mb-4">
              Les gammes matérielles Ryvie ne sont pas encore disponibles à la vente.
            </p>
            <p className="text-ryvie-gray mb-6">
              Elles arrivent très bientôt. En attendant, vous pouvez nous contacter pour en savoir plus
              ou suivre le projet open source.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
              <a
                href="mailto:contact@ryvie.fr"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-ryvie-blue text-ryvie-blue hover:bg-ryvie-blue hover:text-white transition-all text-sm font-semibold"
              >
                Nous contacter
              </a>
              <button
                onClick={() => setShowPreorderInfo(false)}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gray-900 text-white hover:bg-black transition-all text-sm font-semibold"
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
