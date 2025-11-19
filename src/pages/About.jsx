import React from 'react';
import { Shield, Heart, Code, Users, Zap, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Vie privée d'abord",
      description: "Vos données restent chez vous, personne ne les exploite. Nous croyons que vos fichiers personnels doivent rester personnels."
    },
    {
      icon: Heart,
      title: "Écologie",
      description: "Donnons une seconde vie aux ordinateurs dits « obsolètes ». Notre gamme Économie Circulaire transforme du matériel reconditionné en cloud personnel."
    },
    {
      icon: Code,
      title: "Open Source",
      description: "Le cœur de Ryvie est open source. Transparence totale sur le code, contributions bienvenues, et communauté au centre du projet."
    },
    {
      icon: Users,
      title: "Pour tous",
      description: "Que vous soyez particulier, famille, ou professionnel, Ryvie s'adapte à vos besoins avec simplicité et puissance."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Jusqu'à 10x plus rapide qu'un cloud traditionnel grâce à l'accès local et à l'optimisation réseau."
    },
    {
      icon: Globe,
      title: "Accessible partout",
      description: "Accédez à vos fichiers depuis n'importe où dans le monde, tout en gardant le contrôle total de vos données."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-ryvie-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              À propos de <span className="text-gradient">Ryvie</span>
            </h1>
            <p className="text-xl text-ryvie-gray leading-relaxed mb-8">
              Ryvie est né d'une conviction simple : vos données personnelles doivent rester <span className="font-semibold text-ryvie-dark">chez vous</span>, 
              tout en restant accessibles partout dans le monde.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              Notre <span className="text-gradient">Mission</span>
            </h2>
            
            <div className="prose prose-lg max-w-none text-ryvie-gray">
              <p className="text-lg leading-relaxed mb-6">
                Dans un monde où les géants du cloud exploitent vos données personnelles, 
                où les abonnements s'accumulent et où la vie privée devient un luxe, 
                <strong className="text-ryvie-dark"> Ryvie propose une alternative</strong>.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Nous croyons que chacun devrait pouvoir héberger son propre cloud personnel, 
                simplement, sans compétences techniques particulières. Un cloud qui respecte 
                votre vie privée, qui ne vous enferme pas dans des abonnements coûteux, 
                et qui donne une seconde vie à du matériel informatique.
              </p>

              <p className="text-lg leading-relaxed">
                <strong className="text-ryvie-dark">Ryvie, c'est votre cloud, vos règles.</strong> 
                Stockez vos photos, vidéos, documents, installez vos applications préférées en un clic, 
                et accédez à tout depuis n'importe où. Le tout en gardant le contrôle total.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
            Nos <span className="text-gradient">Valeurs</span>
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-ryvie-blue to-blue-600 rounded-2xl mb-6 shadow-lg">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-ryvie-dark mb-3">{value.title}</h3>
                <p className="text-ryvie-gray leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              L'histoire de <span className="text-gradient">Ryvie</span>
            </h2>
            
            <div className="space-y-6 text-ryvie-gray text-lg leading-relaxed">
              <p>
                Ryvie est né de la frustration face aux solutions cloud actuelles : 
                abonnements qui s'accumulent, données exploitées par les géants de la tech, 
                dépendance totale à des services tiers, et matériel informatique jeté alors qu'il fonctionne encore.
              </p>

              <p>
                Nous avons voulu créer une solution différente : un cloud personnel que chacun peut 
                installer chez soi, sur du matériel reconditionné ou neuf, avec une interface simple 
                et moderne, et un écosystème d'applications installables en un clic.
              </p>

              <p>
                Le projet est <strong className="text-ryvie-dark">100% open source</strong>, 
                car nous croyons en la transparence et en la collaboration. 
                Chaque ligne de code est accessible, auditable, et améliorable par la communauté.
              </p>

              <p>
                Aujourd'hui, Ryvie propose deux gammes de produits : 
                <strong className="text-ryvie-dark"> Économie Circulaire</strong> (ordinateurs reconditionnés) 
                et <strong className="text-ryvie-dark">Pro</strong> (matériel neuf haute performance), 
                ainsi qu'une version logicielle gratuite pour ceux qui veulent installer Ryvie sur leur propre matériel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-ryvie-blue to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Rejoignez le mouvement
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Reprenez le contrôle de vos données. Suivez-nous sur LinkedIn pour ne rien manquer du projet.
          </p>
          <a
            href="https://www.linkedin.com/company/ryvie"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-ryvie-blue rounded-full font-semibold hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            Suivre Ryvie sur LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
