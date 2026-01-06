import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow max-w-4xl mx-auto px-4 py-16">
        <div className="mb-8">
            <Link to="/" className="text-primary font-bold font-sans hover:underline">← Voltar para o início</Link>
        </div>
        
        <h1 className="text-4xl font-serif font-bold text-secondary mb-8">Política de Privacidade</h1>
        
        <div className="prose prose-lg text-gray-700 font-sans">
          <p>
            Esta Política de Privacidade descreve como o Veritas Law Group coleta, usa e protege suas informações pessoais ao utilizar nosso site.
          </p>
          <p>
            <strong>1. Coleta de Dados</strong><br/>
            Coletamos apenas as informações necessárias para entrar em contato com você, especificamente seu nome e número de telefone, quando fornecidos voluntariamente através de nossos formulários de contato.
          </p>
          <p>
            <strong>2. Uso das Informações</strong><br/>
            As informações coletadas são utilizadas exclusivamente para fins de atendimento jurídico inicial e comunicação via WhatsApp ou E-mail. Não compartilhamos seus dados com terceiros para fins de marketing.
          </p>
          <p>
            <strong>3. Segurança</strong><br/>
            Adotamos medidas adequadas para proteger seus dados contra acesso não autorizado.
          </p>
          <p>
            <strong>4. Contato</strong><br/>
            Para questões relacionadas a esta política, entre em contato pelo e-mail erika@rino3.com.br.
          </p>
          <p className="mt-8 italic text-sm">
            Última atualização: Outubro 2023.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
