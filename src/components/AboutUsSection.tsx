'use client';

import { Award, Target, Heart, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    icon: Award,
    title: 'Excelência',
    description: 'Comprometimento com a qualidade e precisão em cada serviço prestado.',
  },
  {
    icon: Target,
    title: 'Foco no Cliente',
    description: 'Soluções personalizadas que atendem às necessidades específicas de cada empresa.',
  },
  {
    icon: Heart,
    title: 'Transparência',
    description: 'Relacionamento baseado em confiança, ética e comunicação clara.',
  },
  {
    icon: Lightbulb,
    title: 'Inovação',
    description: 'Tecnologia e processos modernos para resultados mais eficientes.',
  },
];

export default function AboutUsSection() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bozza-dark relative inline-block">
              Sobre a Bozza Contabilidade
              <span className="absolute -bottom-2 left-0 w-16 h-0.5 bg-bozza-dark/50"></span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Text */}
            <div>
              <p className="text-lg text-bozza-gray mb-6 leading-relaxed">
                Há mais de 15 anos no mercado, a Bozza Contabilidade nasceu com o propósito 
                de revolucionar a forma como as empresas lidam com suas obrigações contábeis 
                e fiscais.
              </p>
              
              <p className="text-lg text-bozza-gray mb-12 leading-relaxed">
                Combinamos expertise técnica, tecnologia de ponta e atendimento humanizado 
                para entregar soluções que vão além dos números, impactando positivamente 
                os resultados dos nossos clientes.
              </p>

              {/* Values in minimalist grid */}
              <div className="grid grid-cols-2 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={index} className="group">
                      <motion.div 
                        className="w-10 h-10 bg-bozza-secondary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-bozza-secondary/20 transition-colors"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ 
                          opacity: 1, 
                          scale: 1,
                          transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            delay: index * 0.1
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
                        <Icon size={20} className="text-bozza-secondary" />
                      </motion.div>
                      <h4 className="font-semibold text-bozza-dark mb-1">{value.title}</h4>
                      <p className="text-sm text-bozza-gray leading-relaxed">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Image with Minimalist Frame */}
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-bozza-secondary/30 rounded-tl-3xl z-10" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-bozza-primary/30 rounded-br-3xl z-10" />
              
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg group">
                <div className="aspect-square relative">
                  <img
                    src="/claude images/Image_fx.jpg"
                    alt="Escritório de contabilidade moderno"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bozza-dark/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}