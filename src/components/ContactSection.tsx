'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    otherService: '',
    message: '',
  });
  
  const [emailCopied, setEmailCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Obrigado pelo contato! Retornaremos em breve.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
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
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-bozza-dark relative inline-block">
            Entre em Contato
            <span className="absolute -bottom-2 left-0 w-16 h-0.5 bg-bozza-dark/50"></span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl p-6 md:p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-8">
              <motion.div 
                className="w-12 h-12 bg-bozza-secondary/10 rounded-lg flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.2
                  }
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 10
                  }
                }}
                viewport={{ once: true }}
              >
                <MessageSquare className="text-bozza-secondary" size={24} />
              </motion.div>
              <h3 className="text-2xl font-bold text-bozza-dark">
                Solicite uma Proposta
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-bozza-dark mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bozza-primary focus:border-bozza-primary transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-bozza-dark mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bozza-primary focus:border-bozza-primary transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-bozza-dark mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bozza-primary focus:border-bozza-primary transition-all"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-bozza-dark mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bozza-primary focus:border-bozza-primary transition-all"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-bozza-dark mb-2">
                  Serviço de Interesse *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bozza-primary focus:border-bozza-primary transition-all"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="contabilidade">Contabilidade Empresarial</option>
                  <option value="planejamento">Planejamento Tributário</option>
                  <option value="departamento-pessoal">Departamento Pessoal</option>
                  <option value="consultoria">Consultoria Contábil</option>
                  <option value="escrituracao">Escrituração Fiscal</option>
                  <option value="abertura">Abertura de Empresas</option>
                  <option value="todos">Todos os Serviços</option>
                  <option value="outro" className="font-semibold">➤ Outro (especificar abaixo)</option>
                </select>
              </div>

              {/* Other Service Field - Shows when "outro" is selected */}
              {formData.service === 'outro' && (
                <div className="col-span-2">
                  <label htmlFor="otherService" className="block text-sm font-medium text-bozza-dark mb-2">
                    Especifique o serviço desejado *
                  </label>
                  <input
                    type="text"
                    id="otherService"
                    name="otherService"
                    required
                    value={formData.otherService}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bozza-primary focus:border-bozza-primary transition-all"
                    placeholder="Descreva o serviço que você precisa"
                  />
                </div>
              )}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-bozza-dark mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bozza-primary focus:border-bozza-primary transition-all resize-none"
                  placeholder="Conte-nos mais sobre suas necessidades..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-bozza-primary text-white py-4 rounded-lg hover:bg-bozza-primary/90 transition-all duration-300 font-semibold flex items-center justify-center gap-2 hover-float"
              >
                Enviar Mensagem
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
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
        
        {/* Google Maps Integration */}
        <div className="mt-16">
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-bozza-dark relative inline-block mb-4">
              Localização
              <span className="absolute -bottom-2 left-0 w-16 h-0.5 bg-bozza-dark/50"></span>
            </h3>
            <p className="text-bozza-gray mt-6">
              Visite nosso escritório em Lagoa Vermelha/RS
            </p>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <div className="relative h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.8847324373!2d-51.53194492383559!3d-28.058677276020454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951f2b3f3c3c3c3f%3A0x0!2sR.+André+da+Rocha%2C+126+-+Centro%2C+Lagoa+Vermelha+-+RS%2C+95300-000!5e0!3m2!1spt-BR!2sbr!4v1623456789012!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: 'none' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className=""
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bozza-dark/20 to-transparent" />
              {/* Click overlay to open in Google Maps */}
              <a 
                href="https://maps.google.com/?q=R.+André+da+Rocha,+126+-+Centro,+Lagoa+Vermelha+-+RS,+95300-000"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/10 transition-colors group"
              >
                <div className="bg-white px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-bozza-dark font-semibold">Ver no Google Maps →</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}