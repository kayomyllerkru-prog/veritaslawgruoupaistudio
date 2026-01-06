import React, { useState } from 'react';
import { ContactPopupProps } from '../types';
import { X } from 'lucide-react';

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    const currentUrl = window.location.href;
    const mailtoLink = `mailto:erika@rino3.com.br?subject=Contato pelo WhatsApp&body=Nome: ${encodeURIComponent(name)}%0D%0ATelefone: ${encodeURIComponent(phone)}%0D%0AOrigem: ${encodeURIComponent(currentUrl)}`;
    
    // Trigger mailto
    window.location.href = mailtoLink;

    // Redirect to WhatsApp after delay
    setTimeout(() => {
      const whatsappUrl = `https://api.whatsapp.com/send/?phone=5567991698660&text=Olá, meu nome é ${encodeURIComponent(name)} e estou entrando em contato pelo site.&type=phone_number&app_absent=0`;
      window.location.href = whatsappUrl;
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="relative w-full max-w-md bg-white p-8 rounded-lg shadow-2xl m-4">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-secondary hover:text-primary"
          aria-label="Fechar"
        >
          <X size={24} />
        </button>
        
        <h3 className="text-2xl font-serif font-bold text-secondary mb-2 text-center">Fale Conosco</h3>
        <p className="text-center text-gray-600 mb-6 font-sans">
          Preencha seus dados para iniciar o atendimento no WhatsApp.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-secondary mb-1">Nome Completo</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-primary"
              placeholder="Seu nome"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-bold text-secondary mb-1">Telefone / WhatsApp</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-primary"
              placeholder="(00) 00000-0000"
            />
          </div>

          {error && <p className="text-primary text-sm font-bold">{error}</p>}

          <button
            type="submit"
            className="bg-primary text-white font-bold py-3 px-6 rounded hover:bg-red-800 transition-colors mt-2"
          >
            Enviar e continuar no WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPopup;
