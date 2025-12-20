import React from 'react';

const Partners = () => {
  const partners = [
    { name: 'Euratechnologies', logo: '/images/partenaires/euratechnologies.svg' },
    { name: 'SAP', logo: '/images/partenaires/SAP.png' },
    { name: 'Enactus', logo: '/images/partenaires/enactus.svg' },
    { name: 'Pépite', logo: '/images/partenaires/logo-pepite-2.png' },
    { name: 'Métropole de Lille', logo: '/images/partenaires/metropoledelille.png' },
  ];

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <h2 className="text-2xl font-bold text-center text-white">
          Nos <span className="text-gradient">Partenaires</span>
        </h2>
      </div>

      <div className="bg-white/5 py-6">
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll gap-16">
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: '180px', height: '70px' }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
