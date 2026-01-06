import React from 'react';

const PainSection: React.FC = () => {
  const pains = [
    "Tarifas bancárias sem autorização?",
    "Juros abusivos em empréstimos?",
    "Nome negativado indevidamente?",
    "Seguros embutidos em contratos?"
  ];

  return (
    <section className="bg-primary py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-[40px] font-serif font-bold text-white text-center mb-12">
          Você está passando por isso?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pains.map((pain, index) => (
            <div key={index} className="bg-white p-8 rounded shadow-md h-full flex items-center justify-center text-center">
              <p className="font-sans text-xl md:text-2xl font-bold text-secondary">
                {pain}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;
