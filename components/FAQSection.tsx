import React, { useState } from 'react';
import { SectionProps } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection: React.FC<SectionProps> = ({ openPopup }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como sei se tenho direito a uma revisão de juros?",
      answer: "Se você possui um contrato de financiamento (veículo, empréstimo pessoal, cartão de crédito) e suspeita que as parcelas estão muito altas, nós fazemos uma análise técnica gratuita para identificar cláusulas abusivas."
    },
    {
      question: "Meu nome está negativado indevidamente, o que fazer?",
      answer: "Se você pagou a dívida ou nunca contratou o serviço e seu nome consta no SPC/Serasa, cabe ação para exclusão imediata e pedido de indenização por danos morais."
    },
    {
      question: "Preciso pagar algo antecipado?",
      answer: "Trabalhamos com transparência. A consulta inicial é gratuita. Analisamos seu caso e explicamos os custos de forma clara antes de qualquer contratação."
    },
    {
      question: "O atendimento é apenas presencial?",
      answer: "Não. Somos um escritório digital com atuação em todo o Brasil. Todo o processo pode ser feito via WhatsApp e e-mail, com total segurança."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-sans text-sm font-bold tracking-widest text-gray-500 uppercase mb-2">FAQ</p>
          <h2 className="text-3xl md:text-[40px] font-serif font-bold text-secondary">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-sm rounded overflow-hidden">
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full flex justify-between items-center p-6 text-left transition-colors duration-200 ${openIndex === index ? 'bg-primary text-white' : 'bg-white text-secondary hover:bg-gray-50'}`}
              >
                <span className="font-sans font-bold text-lg pr-4">{faq.question}</span>
                {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>
              
              {openIndex === index && (
                <div className="p-6 bg-white border-t border-gray-100">
                  <p className="font-sans text-gray-700 text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
           <button 
            onClick={openPopup}
            className="bg-primary text-white font-bold font-sans text-lg py-3 px-8 rounded hover:bg-red-800 transition-colors"
          >
            Ainda tenho dúvidas
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
