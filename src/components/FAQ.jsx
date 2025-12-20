import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import BackgroundRibbons from './BackgroundRibbons';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Est-ce compliqué à installer ?",
      answer: "Pas du tout ! Ryvie est conçu pour être aussi simple qu'un smartphone. Branchez le boîtier, suivez l'assistant de configuration guidé, et c'est prêt. Aucune connaissance technique n'est requise. L'installation complète prend généralement moins de 15 minutes."
    },
    {
      question: "Puis-je accéder à mes données depuis mon téléphone ?",
      answer: "Oui, absolument ! Vous pouvez accéder à votre Ryvie depuis n'importe quel appareil : smartphone, tablette, ordinateur. Soit via une application dédiée, soit simplement depuis votre navigateur web. Vos données sont accessibles partout dans le monde."
    },
    {
      question: "Que se passe-t-il si Internet tombe ?",
      answer: "Sur votre réseau local (chez vous), Ryvie fonctionne parfaitement même sans connexion Internet. Vous pouvez accéder à tous vos fichiers et applications depuis n'importe quel appareil connecté à votre réseau domestique. L'accès à distance nécessite bien sûr une connexion Internet."
    },
    {
      question: "Est-ce que le code est disponible ?",
      answer: "Oui ! Le cœur de Ryvie (OpenCore) est Source Available et disponible sur GitHub. Le code est transparent, auditable par tous, et vous pouvez même contribuer au projet. Nous utilisons également de nombreuses applications open source dans notre App Store."
    },
    {
      question: "Puis-je utiliser mon ancien ordinateur comme Ryvie ?",
      answer: "Oui, c'est même l'un des objectifs de Ryvie ! Si vous avez un ordinateur que vous n'utilisez plus, vous pouvez installer le logiciel Ryvie OpenCore gratuitement. Nous proposons aussi des ordinateurs reconditionnés prêts à l'emploi dans notre gamme Économie Circulaire."
    },
    {
      question: "Mes données sont-elles vraiment en sécurité ?",
      answer: "Vos données sont plus sécurisées qu'avec un cloud traditionnel car elles restent physiquement chez vous. Ryvie utilise un chiffrement de bout en bout, l'authentification à deux facteurs, et des connexions sécurisées. Contrairement aux géants du cloud, personne d'autre que vous n'a accès à vos fichiers."
    },
    {
      question: "Quelle est la différence entre les gammes Économie Circulaire et Pro ?",
      answer: "La gamme Économie Circulaire utilise des ordinateurs reconditionnés (~300€), parfaits pour un usage familial standard. La gamme Pro (~600€) utilise du matériel neuf plus puissant, idéal pour les professionnels ou si vous souhaitez utiliser des fonctionnalités IA avancées. Les deux offrent les mêmes fonctionnalités logicielles."
    },
    {
      question: "Puis-je installer n'importe quelle application ?",
      answer: "Vous pouvez installer toutes les applications disponibles dans l'App Store Ryvie (des centaines d'applications). Si vous utilisez OpenCore, vous avez encore plus de liberté pour installer ce que vous voulez. Nous développons aussi des applications sur mesure selon vos besoins spécifiques."
    },
    {
      question: "Comment fonctionne rAI pour protéger mes données ?",
      answer: "rAI agit comme un filtre intelligent entre vous et les services d'IA (ChatGPT, Claude, etc.). Il analyse automatiquement vos requêtes et masque ou supprime les informations sensibles (noms, adresses, données financières, etc.) avant de les envoyer aux IA, garantissant que vos données privées ne quittent jamais votre Ryvie."
    },
    {
      question: "Y a-t-il des frais d'abonnement ?",
      answer: "Non ! Contrairement aux clouds traditionnels, il n'y a pas d'abonnement mensuel. Vous payez une fois pour le matériel (ou utilisez le logiciel gratuitement), et c'est tout. Pas de frais cachés, pas de coûts récurrents. Vous êtes propriétaire de votre cloud."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <BackgroundRibbons variant="subtle" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-ryvie-electric to-ryvie-blue rounded-3xl mb-6 shadow-xl">
            <HelpCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Questions <span className="text-gradient">fréquentes</span>
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Tout ce que vous devez savoir sur Ryvie
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="glass-effect rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-6 h-6 text-ryvie-blue flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-white/75 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Help */}
          <div className="mt-16 text-center">
            <div className="inline-block glass-effect rounded-2xl p-8 max-w-2xl">
              <p className="text-lg text-white/80 mb-6">
                <span className="font-semibold text-white">Vous avez d'autres questions ?</span>
                <br />
                Notre équipe est là pour vous répondre
              </p>
              <a
                href="mailto:contact@ryvie.fr"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-ryvie-electric to-ryvie-blue text-white rounded-full font-semibold hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
