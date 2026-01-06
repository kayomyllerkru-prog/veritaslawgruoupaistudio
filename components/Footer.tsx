import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left text-lg md:text-xl">
          <div className="flex flex-col gap-2">
            <h4 className="font-bold font-serif mb-2 text-2xl">Endereço</h4>
            <p className="font-sans">Campo Grande - MS</p>
            <a 
              href="https://maps.app.goo.gl/17Y6PL45sp9MAMx98" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline font-bold hover:text-gray-200 mt-2 inline-block"
            >
              VER NO MAPA
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold font-serif mb-2 text-2xl">Contato</h4>
            <p className="font-sans">(67) 99169-8660</p>
            <a href="mailto:erika@rino3.com.br" className="font-sans hover:underline">erika@rino3.com.br</a>
          </div>
        </div>
      </div>
      
      <div className="bg-red-900 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-sans">
          <Link to="/politica-de-privacidade" className="hover:underline text-white">
            Política de Privacidade
          </Link>
          <span className="text-white opacity-90">
            Criado por <a href="https://aceleracaojuridica.com.br/" target="_blank" rel="noopener noreferrer" className="underline font-bold">Aceleração Jurídica</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
