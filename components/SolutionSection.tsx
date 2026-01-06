import React from 'react';
import { SectionProps } from '../types';

const SolutionSection: React.FC<SectionProps> = ({ openPopup }) => {
  const solutions = [
    "Revisional de Juros",
    "Exclusão de Negativação Indevida",
    "Restituição de Taxas",
    "Indenização por Danos Morais"
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-[40px] font-serif font-bold text-secondary text-center mb-4">
          Nossa Solução Jurídica
        </h2>
        <p className="text-center font-sans text-lg text-gray-600 mb-12 uppercase tracking-wide">
          Como podemos ajudar você
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <div key={index} className="border-l-4 border-primary bg-gray-50 p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-serif font-bold text-secondary">{solution}</h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={openPopup}
            className="bg-primary text-white font-bold font-sans text-lg md:text-xl py-3 px-8 rounded hover:bg-red-800 transition-colors"
          >
            Quero resolver meu problema
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
