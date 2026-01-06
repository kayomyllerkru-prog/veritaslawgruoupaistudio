import React from 'react';
import { SectionProps } from '../types';

const HeroSection: React.FC<SectionProps> = ({ openPopup }) => {
  return (
    <section className="bg-white min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-16 relative">
      {/* Logo Placeholder */}
      <div className="mb-8 w-[180px] md:w-[230px]">
        {/* Ideally this is an <img> tag. Using a text block for fallback if image is missing, but structured as requested. */}
        <div className="w-full aspect-[3/1] bg-gray-100 flex items-center justify-center text-secondary font-serif font-bold text-xl border-2 border-primary">
          VERITAS LOGO
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-[40px] leading-tight font-bold font-serif text-secondary mb-6">
          Cobranças indevidas de bancos? <br/>
          <span className="text-primary">Recupere seu dinheiro com o Veritas Law Group</span>
        </h1>
        
        <p className="text-lg md:text-[20px] font-sans text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
          Especialista em Direito do Consumidor Bancário. Recupere taxas abusivas e garanta sua indenização com atendimento 100% digital em todo o Brasil.
        </p>

        <button 
          onClick={openPopup}
          className="bg-primary text-white font-bold font-sans text-lg md:text-xl py-4 px-10 rounded shadow-lg hover:bg-red-800 transition-colors"
        >
          Falar com Dr. Victor agora
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
