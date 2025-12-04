'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('bozzaedutrcontabilidade@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '+55 54 3358-5522',
      link: 'tel:+555433585522',
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'bozzaedutrcontabilidade@gmail.com',
      link: 'mailto:bozzaedutrcontabilidade@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'R. André da Rocha, 126 - Centro, Lagoa Vermelha - RS',
      link: 'https://maps.google.com/?q=R.+André+da+Rocha,+126+-+Centro,+Lagoa+Vermelha+-+RS,+95300-000',
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Seg a Sex: 8h às 18h',
      link: '#',
    },
  ];

  return (
    <section id="contato" className="py-20 pb-24 bg-white">
      <div className="section-padding">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {/* Map Section (Left Column - replaces Form) */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl overflow-hidden h-full min-h-[500px]">
            <div className="relative h-full w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.8847324373!2d-51.53194492383559!3d-28.058677276020454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951f2b3f3c3c3c3f%3A0x0!2sR.+André+da+Rocha%2C+126+-+Centro%2C+Lagoa+Vermelha+-+RS%2C+95300-000!5e0!3m2!1spt-BR!2sbr!4v1623456789012!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
              {/* Click overlay to open in Google Maps */}
              <a
                href="https://maps.google.com/?q=R.+André+da+Rocha,+126+-+Centro,+Lagoa+Vermelha+-+RS,+95300-000"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/10 transition-colors group pointer-events-none"
              >
                <div className="bg-white px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto">
                  <span className="text-bozza-dark font-semibold">Ver no Google Maps →</span>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6 flex flex-col justify-center">
            {/* Quick Contact Card */}
            <div className="bg-bozza-primary text-white rounded-3xl p-6 md:p-8 shadow-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Atendimento Rápido</h3>
              <p className="mb-4 md:mb-6 opacity-90 text-sm md:text-base">
                Precisa de uma resposta imediata? Entre em contato através do WhatsApp
                e fale diretamente com nossos consultores.
              </p>
              <a
                href="https://wa.me/555433585522"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-bozza-secondary text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full hover:bg-green-600 transition-all duration-300 hover-float font-semibold text-sm md:text-base"
              >
                Chamar no WhatsApp
              </a>
            </div>

            {/* Contact Info Card */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-bozza-dark mb-6 md:mb-8">
                Informações de Contato
              </h3>
              <div className="space-y-4 md:space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const isEmail = info.icon === Mail;

                  return (
                    <div key={index} className="group">
                      <div className="flex items-start gap-3 md:gap-4 -mx-2 p-2 rounded-lg hover:bg-bozza-light-gray/50 transition-all">
                        <a
                          href={info.link}
                          className="flex items-start gap-3 md:gap-4 flex-1 min-w-0"
                        >
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-bozza-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-bozza-primary/20 transition-colors">
                            <Icon size={18} className="text-bozza-primary md:hidden" />
                            <Icon size={22} className="text-bozza-primary hidden md:block" />
                          </div>
                          <div className="flex-1 min-w-0 pt-0.5 md:pt-1">
                            <p className="text-xs text-bozza-gray mb-0.5 md:mb-1">{info.title}</p>
                            <p className="font-medium text-bozza-dark text-xs md:text-sm leading-relaxed break-words">
                              {info.content}
                            </p>
                          </div>
                        </a>

                        {isEmail && (
                          <button
                            onClick={copyEmail}
                            className="flex-shrink-0 w-8 h-8 bg-bozza-primary/10 hover:bg-bozza-primary/20 rounded-lg flex items-center justify-center transition-all group/copy"
                            title="Copiar e-mail"
                          >
                            {emailCopied ? (
                              <Check size={16} className="text-green-600" />
                            ) : (
                              <Copy size={16} className="text-bozza-primary group-hover/copy:scale-110 transition-transform" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}