import React from 'react';
import { SectionProps } from '../types';

const AreasSection: React.FC<SectionProps> = ({ openPopup }) => {
  const areas = [
    "Cobranças de Tarifas Bancárias",
    "Empréstimos não Autorizados",
    "Juros Abusivos em Contratos",
    "Danos Morais por Negativação"
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-[40px] font-serif font-bold text-secondary mb-12">
          Áreas de Atuação
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {areas.map((area, index) => (
            <div key={index} className="bg-offwhite p-6 rounded border border-gray-200 flex flex-col items-center justify-center min-h-[160px]">
              <div className="w-12 h-1 bg-primary mb-4"></div>
              <h3 className="font-sans font-bold text-xl text-secondary">{area}</h3>
            </div>
          ))}
        </div>

        <button 
          onClick={openPopup}
          className="bg-primary text-white font-bold font-sans text-lg md:text-xl py-3 px-8 rounded hover:bg-red-800 transition-colors"
        >
          Solicitar Análise do Meu Caso
        </button>
      </div>
    </section>
  );
};

export default AreasSection;
