'use client';

import { motion } from 'framer-motion';

const values = [
  {
    title: 'Excelência',
    description: 'Comprometimento com a qualidade e precisão em cada serviço prestado.',
  },
  {
    title: 'Foco no Cliente',
    description: 'Soluções personalizadas que atendem às necessidades específicas de cada empresa.',
  },
  {
    title: 'Transparência',
    description: 'Relacionamento baseado em confiança, ética e comunicação clara.',
  },
  {
    title: 'Inovação',
    description: 'Tecnologia e processos modernos para resultados mais eficientes.',
  },
];

export default function AboutUsSection() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Título em cima, à esquerda */}
          <div className="mb-12 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-bozza-dark mb-4">
              Sobre a Bozza Contabilidade
            </h2>
            <div className="w-20 h-1.5 bg-bozza-secondary rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Text */}
            <div className="order-1">
              <p className="text-lg text-bozza-gray mb-6 leading-relaxed">
                Há mais de 15 anos no mercado, a Bozza Contabilidade nasceu com o propósito
                de revolucionar a forma como as empresas lidam com suas obrigações contábeis
                e fiscais.
              </p>

              <p className="text-lg text-bozza-gray mb-10 leading-relaxed">
                Combinamos expertise técnica, tecnologia de ponta e atendimento humanizado
                para entregar soluções que vão além dos números, impactando positivamente
                os resultados dos nossos clientes.
              </p>

              {/* Values */}
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: index * 0.1 }
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="text-bozza-secondary font-bold text-lg">•</span>
                    <div>
                      <span className="font-bold text-bozza-secondary text-lg">{value.title}</span>
                      <span className="text-gray-600 text-base"> — {value.description}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative order-2">
              <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-bozza-secondary/30 rounded-tl-3xl z-10" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-bozza-primary/30 rounded-br-3xl z-10" />
              <div className="relative rounded-3xl overflow-hidden shadow-lg group">
                <div className="aspect-[4/5] relative">
                  <img
                    src="/claude images/Image_fx.jpg"
                    alt="Escritório de contabilidade moderno"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
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