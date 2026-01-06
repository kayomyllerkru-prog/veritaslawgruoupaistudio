import React from 'react';
import { Scale, Clock, Search, Target } from 'lucide-react';

const ValuesSection: React.FC = () => {
  const values = [
    { name: "Ética", icon: Scale },
    { name: "Eficiência", icon: Clock },
    { name: "Transparência", icon: Search },
    { name: "Foco em Resultados", icon: Target }
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-[40px] font-serif font-bold text-secondary text-center mb-12">
          Nossos Valores
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 border border-gray-100 shadow-sm rounded">
              <val.icon className="w-12 h-12 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="font-sans font-bold text-xl text-secondary">{val.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
