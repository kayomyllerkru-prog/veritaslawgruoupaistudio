import React from 'react';

const StepsSection: React.FC = () => {
  const steps = [
    "Consulta Online Gratuita",
    "Análise Técnica do Caso",
    "Ação Judicial ou Administrativa",
    "Recebimento da Indenização"
  ];

  return (
    <section className="bg-primary py-20 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-[40px] font-serif font-bold text-center mb-16">
          Etapas do Atendimento
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white text-primary font-serif font-bold text-3xl flex items-center justify-center mb-6 shadow-lg">
                {index + 1}
              </div>
              <h3 className="font-sans font-bold text-xl">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
