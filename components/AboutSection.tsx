import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-secondary text-white overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="victor.png" 
          alt="Escritório Dr. Victor Veritas" 
          className="w-full h-full object-cover opacity-30 object-center"
        />
        {/* Overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 pr-0 md:pr-12">
          <h2 className="text-3xl md:text-[40px] font-serif font-bold mb-6 text-white border-l-4 border-primary pl-4">
            Sobre o Escritório
          </h2>
          <p className="font-sans text-lg md:text-[20px] leading-relaxed text-gray-200">
            Dr. Victor Veritas, graduado pela Mackenzie e pós-graduado pela PUC-SP, com mais de 12 anos de experiência. Fundador do Veritas Law Group, focado em oferecer uma advocacia ética, eficiente e personalizada para defender o consumidor contra abusos bancários.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0 hidden md:block">
           {/* Space reserved if needed, but text is aligned left per layout 'sobre-tema2' */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
