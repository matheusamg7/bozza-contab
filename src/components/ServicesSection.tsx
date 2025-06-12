'use client';

import { useState } from 'react';
import { Calculator, Users, TrendingUp, FileText, Building, Briefcase, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

const services = [
  {
    icon: Calculator,
    title: 'Contabilidade Empresarial',
    description: 'Gestão contábil completa com escrituração, balanços e demonstrações financeiras precisas para sua empresa.',
    features: ['Escrituração digital', 'Balanço patrimonial', 'DRE mensal', 'Análise de indicadores'],
    color: 'primary',
  },
  {
    icon: TrendingUp,
    title: 'Planejamento Tributário',
    description: 'Estratégias legais para reduzir sua carga tributária e maximizar os resultados do seu negócio.',
    features: ['Elisão fiscal', 'Análise de regime', 'Recuperação de impostos', 'Consultoria tributária'],
    color: 'secondary',
  },
  {
    icon: Users,
    title: 'Departamento Pessoal',
    description: 'Gestão completa de folha de pagamento, admissões, rescisões e obrigações trabalhistas.',
    features: ['Folha de pagamento', 'eSocial', 'Gestão de benefícios', 'Cálculos trabalhistas'],
    color: 'primary',
  },
  {
    icon: Briefcase,
    title: 'Consultoria Contábil',
    description: 'Orientação especializada para tomada de decisões estratégicas baseadas em dados financeiros.',
    features: ['Análise financeira', 'Planejamento estratégico', 'Gestão de custos', 'KPIs empresariais'],
    color: 'secondary',
  },
  {
    icon: FileText,
    title: 'Escrituração Fiscal',
    description: 'Cumprimento de todas as obrigações fiscais com segurança e dentro dos prazos legais.',
    features: ['SPED Fiscal', 'EFD Contribuições', 'Livros fiscais', 'Declarações acessórias'],
    color: 'primary',
  },
  {
    icon: Building,
    title: 'Abertura de Empresas',
    description: 'Processo completo e ágil para constituição da sua empresa com toda documentação necessária.',
    features: ['Consultoria de tipo societário', 'Registro na Junta', 'Alvará e licenças', 'Inscrições fiscais'],
    color: 'secondary',
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section id="servicos" className="py-20 bg-bozza-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-bozza-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>
      
      <div className="section-padding relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white relative inline-block">
            Nossos Serviços
            <span className="absolute -bottom-2 left-0 w-16 h-0.5 bg-white/70"></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto pb-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isGreen = index % 2 !== 0; // Alterna entre azul e verde
            
            return (
              <motion.div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer h-full flex flex-col"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 70,
                    damping: 15,
                    delay: index * 0.1
                  }
                }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                  boxShadow: "0 20px 30px rgba(3, 70, 110, 0.13)",
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }
                }}
                whileTap={{
                  scale: 0.98,
                  boxShadow: "0 15px 25px rgba(3, 70, 110, 0.1)",
                  transition: {
                    type: "spring",
                    stiffness: 500,
                    damping: 15
                  }
                }}
                viewport={{ once: true }}
              >
                {/* Colored header */}
                <div className={`${
                  isGreen ? 'bg-bozza-secondary' : 'bg-[#03466e]'
                } p-5 text-white relative flex-shrink-0`}>
                  {/* Bubble detail */}
                  <div className="absolute -top-8 -right-8 w-24 h-24 bg-black/10 rounded-full blur-xl" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-black/5 rounded-full" />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="w-11 h-11 bg-white rounded-lg flex items-center justify-center mb-3"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ 
                        opacity: 1, 
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 100,
                          damping: 15,
                          delay: index * 0.1 + 0.2
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
                      <Icon className={`w-5 h-5 ${isGreen ? 'text-bozza-secondary' : 'text-[#03466e]'}`} />
                    </motion.div>
                    <h3 className="text-lg font-bold">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                {/* White content area */}
                <div className="p-5 bg-white flex-grow flex flex-col -mt-px">
                  <p className="text-gray-600 mb-5 text-sm leading-relaxed flex-grow">
                    {index === 0 && "Serviços contábeis completos para empresas de todos os portes, garantindo conformidade e organização fiscal."}
                    {index === 1 && "Estratégias personalizadas para reduzir a carga tributária de forma legal e maximizar os resultados da sua empresa."}
                    {index === 2 && "Gestão completa de folha de pagamento, admissões, demissões e todas as rotinas trabalhistas."}
                    {index === 3 && "Orientação especializada em impostos e obrigações fiscais para otimizar a carga tributária da sua empresa."}
                    {index === 4 && "Relatórios financeiros detalhados e análises para tomada de decisões estratégicas em seu negócio."}
                    {index === 5 && "Assessoria completa na constituição de empresas, desde o registro até a obtenção de todas as licenças necessárias."}
                  </p>
                  
                  <button 
                    onClick={() => setSelectedService(index)}
                    className={`group/btn relative overflow-hidden ${
                    isGreen ? 'bg-bozza-secondary hover:bg-green-600' : 'bg-[#03466e] hover:bg-[#022c47]'
                  } text-white px-5 py-2 rounded-full font-medium transition-all duration-500 ease-out flex items-center gap-2 text-sm hover:gap-3 self-start`}>
                    <span className="relative z-10">Saiba mais</span>
                    <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {/* Shine effect */}
                    <div className="absolute inset-0 -left-full group-hover/btn:left-full transition-all duration-1000 ease-out">
                      <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                    </div>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="#contato"
            className="inline-block bg-gradient-to-r from-bozza-secondary to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 text-base hover:shadow-lg hover-float"
          >
            Solicite uma Proposta Personalizada
            <svg className="w-5 h-5 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`${
                selectedService % 2 !== 0 ? 'bg-bozza-secondary' : 'bg-[#03466e]'
              } p-8 text-white relative`}>
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                    {React.createElement(services[selectedService].icon, {
                      className: `w-8 h-8 ${selectedService % 2 !== 0 ? 'text-bozza-secondary' : 'text-[#03466e]'}`
                    })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{services[selectedService].title}</h3>
                    <p className="text-white/90">{services[selectedService].description}</p>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-6">O que oferecemos:</h4>
                <ul className="space-y-4 mb-8">
                  {services[selectedService].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className={`w-6 h-6 flex-shrink-0 mt-0.5 ${
                        selectedService % 2 !== 0 ? 'text-bozza-secondary' : 'text-[#03466e]'
                      }`} />
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    setSelectedService(null);
                    const contactSection = document.getElementById('contato');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`w-full ${
                    selectedService % 2 !== 0 ? 'bg-bozza-secondary hover:bg-green-600' : 'bg-[#03466e] hover:bg-[#022c47]'
                  } text-white py-4 px-8 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2`}
                >
                  Solicitar este serviço
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}