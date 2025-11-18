import React from 'react';
import { Shield, Lock, Eye, Server, WifiOff, CheckCircle } from 'lucide-react';

const Security = () => {
  const features = [
    {
      icon: Shield,
      title: "Vos fichiers restent chez vous",
      description: "Contrairement aux clouds traditionnels, vos données ne quittent jamais votre domicile. Personne ne peut les exploiter à des fins commerciales.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lock,
      title: "Plus sécurisé qu'un cloud traditionnel",
      description: "Pas de serveurs centralisés vulnérables aux attaques massives. Vos données sont protégées chez vous, sous votre contrôle.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: WifiOff,
      title: "Fonctionne sans Internet",
      description: "Sur votre réseau local, accédez à toutes vos données même si Internet est coupé. Autonomie totale garantie.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Eye,
      title: "Protection de la vie privée",
      description: "Aucune collecte de données, aucun tracking, aucune publicité ciblée. Votre vie privée est respectée.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const securityPoints = [
    "Chiffrement de bout en bout",
    "Authentification à deux facteurs",
    "Connexions sécurisées (HTTPS/SSL)",
    "Mises à jour de sécurité automatiques",
    "Contrôle d'accès granulaire",
    "Logs d'activité détaillés"
  ];

  return (
    <section id="security" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-ryvie-blue to-blue-600 rounded-3xl mb-6 shadow-xl">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Cybersécurité & <span className="text-gradient">Confidentialité</span>
          </h2>
          <p className="text-xl text-ryvie-gray leading-relaxed">
            Avec Ryvie, vos données sont protégées par conception. 
            Reprenez le contrôle total de votre vie numérique.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:border-ryvie-blue hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-ryvie-dark">{feature.title}</h3>
                <p className="text-ryvie-gray leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* rAI Security Highlight */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white mb-16">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-lg rounded-3xl flex items-center justify-center">
                  <Server className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4">rAI : IA sécurisée et privée</h3>
                <p className="text-lg opacity-95 leading-relaxed mb-4">
                  Utilisez les IA les plus puissantes (ChatGPT, Claude, Gemini...) sans compromettre vos données sensibles.
                </p>
                <p className="text-lg opacity-95 leading-relaxed">
                  rAI filtre automatiquement les informations critiques avant de les envoyer aux services d'IA, 
                  garantissant que vos données personnelles et professionnelles restent confidentielles.
                </p>
              </div>
            </div>
          </div>

          {/* Security Measures */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
            <h3 className="text-2xl font-bold mb-8 text-center text-ryvie-dark">
              Mesures de sécurité intégrées
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityPoints.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100"
                >
                  <CheckCircle className="w-6 h-6 text-ryvie-blue flex-shrink-0" />
                  <span className="text-ryvie-gray font-medium">{point}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-ryvie-gray italic">
                "La sécurité n'est pas une option, c'est une priorité absolue dans la conception de Ryvie"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
