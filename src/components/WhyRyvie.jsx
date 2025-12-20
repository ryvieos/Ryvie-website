import React from 'react';
import { TrendingUp, Users, Recycle, Shield } from 'lucide-react';
import BackgroundRibbons from './BackgroundRibbons';

const WhyRyvie = () => {
  const stats = [
    {
      icon: Users,
      value: "60%",
      label: "des Français changent d'ordinateur tous les 3-4 ans"
    },
    {
      icon: Recycle,
      value: "Millions",
      label: "d'ordinateurs inutilisés en France"
    },
    {
      icon: Shield,
      value: "100%",
      label: "de vos données restent chez vous"
    },
    {
      icon: TrendingUp,
      value: "10x",
      label: "plus rapide qu'un cloud traditionnel"
    }
  ];

  return (
    <section id="why" className="relative py-24 overflow-hidden">
      <BackgroundRibbons variant="section" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Pourquoi <span className="text-gradient">Ryvie</span> ?
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Reprenez le contrôle sur vos données tout en participant à l'économie circulaire
          </p>
        </div>

        {/* Problem Statement */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-effect rounded-3xl shadow-xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold mb-6 text-white">Le problème</h3>
            <div className="space-y-4 text-lg text-white/80">
              <p className="flex items-start">
                <span className="text-ryvie-blue mr-3 text-2xl">•</span>
                <span>Vos données personnelles sont dispersées chez les géants du cloud, qui les exploitent à des fins commerciales</span>
              </p>
              <p className="flex items-start">
                <span className="text-ryvie-blue mr-3 text-2xl">•</span>
                <span>Des millions d'ordinateurs parfaitement fonctionnels sont considérés comme "obsolètes" et finissent à la poubelle</span>
              </p>
              <p className="flex items-start">
                <span className="text-ryvie-blue mr-3 text-2xl">•</span>
                <span>Les abonnements cloud s'accumulent et coûtent cher sur le long terme</span>
              </p>
            </div>
          </div>
        </div>

        {/* Solution */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-ryvie-electric to-ryvie-blue rounded-3xl shadow-xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl font-bold mb-6">Notre solution</h3>
            <div className="space-y-4 text-lg">
              <p className="flex items-start">
                <span className="mr-3 text-2xl">✓</span>
                <span>Transformez votre ancien ordinateur en cloud personnel puissant et sécurisé</span>
              </p>
              <p className="flex items-start">
                <span className="mr-3 text-2xl">✓</span>
                <span>Gardez le contrôle total de vos données - elles restent physiquement chez vous</span>
              </p>
              <p className="flex items-start">
                <span className="mr-3 text-2xl">✓</span>
                <span>Réduisez les déchets électroniques en donnant une seconde vie à votre matériel</span>
              </p>
              <p className="flex items-start">
                <span className="mr-3 text-2xl">✓</span>
                <span>Économisez sur les abonnements cloud tout en bénéficiant de performances supérieures</span>
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-ryvie-electric to-ryvie-blue rounded-2xl mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-white/75">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRyvie;
