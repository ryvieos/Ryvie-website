import React from 'react';
import { Plug, Settings, Download, Globe } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Plug,
      title: "Branchez votre Ryvie",
      description: "Branchez simplement votre Ryvie à votre box Internet."
    },
    {
      icon: Download,
      title: "Téléchargez l'application Ryvie",
      description: "Installez l'application Ryvie sur votre ordinateur, votre smartphone ou votre tablette en quelques clics."
    },
    {
      icon: Settings,
      title: "Profitez de votre Ryvie",
      description: "Profitez de votre Ryvie en installant vos applications en 1 clic et accédez à vos fichiers depuis partout dans le monde."
    }
  ];

  return (
    <section id="how" className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Comment ça <span className="text-gradient">marche</span> ?
          </h2>
          <p className="text-lg text-white/80 mb-2">
            Ryvie est aussi simple à utiliser qu'un smartphone.
          </p>
          <p className="text-lg text-white/80">
            En <span className="font-semibold text-white">3 étapes guidées</span>, votre cloud personnel est prêt à l'emploi.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const numberBg = [
                "bg-white/10 text-ryvie-blue border border-white/10",
                "bg-white/10 text-emerald-300 border border-white/10",
                "bg-white/10 text-purple-300 border border-white/10"
              ][index];

              const iconBg = [
                "from-blue-500 to-sky-500",
                "from-emerald-500 to-teal-500",
                "from-purple-500 to-indigo-500"
              ][index];

              return (
              <div key={index} className="relative">
                <div className="text-center group">
                  {/* Step number */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 font-bold text-xl shadow-sm ${numberBg}`}>
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${iconBg} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                  <p className="text-white/75 leading-relaxed">{step.description}</p>
                </div>
              </div>
              );
            })}
          </div>

          {/* Additional info */}
          <div className="mt-16 text-center">
            <div className="inline-block glass-effect rounded-2xl px-8 py-6 max-w-2xl">
              <p className="text-lg text-white/80">
                <span className="font-semibold text-white">Installation plug-and-play :</span> pas besoin d'être expert, 
                Ryvie vous guide étape par étape jusqu'à votre premier cloud personnel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
