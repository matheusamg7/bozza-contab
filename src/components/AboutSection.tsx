'use client';

import { Award, Target, Heart, Lightbulb } from 'lucide-react';

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

const differentials = [
  {
    number: '01',
    title: 'Atendimento Personalizado',
    description: 'Cada cliente tem um consultor dedicado que conhece profundamente seu negócio e suas necessidades específicas.',
  },
  {
    number: '02',
    title: 'Tecnologia de Ponta',
    description: 'Sistemas integrados e automatizados que garantem agilidade, segurança e precisão em todos os processos.',
  },
  {
    number: '03',
    title: 'Equipe Certificada',
    description: 'Profissionais qualificados e em constante atualização para oferecer as melhores soluções contábeis.',
  },
  {
    number: '04',
    title: 'Resultados Comprovados',
    description: 'Histórico de sucesso com redução significativa de impostos e otimização da gestão empresarial.',
  },
];

export default function AboutSection() {
  return (
    <>
      <section id="diferenciais" className="pt-10 pb-20 bg-gradient-to-b from-white to-bozza-light-gray">
        <div className="section-padding">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bozza-dark relative inline-block">
              Por que escolher a Bozza?
              <span className="absolute -bottom-2 left-0 w-16 h-0.5 bg-bozza-dark/50"></span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover-float"
              >
                <div className="flex items-start gap-6">
                  <span className="text-5xl font-bold text-bozza-primary/30 group-hover:text-bozza-secondary/30 transition-colors">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-bozza-dark mb-3">
                      {item.title}
                    </h3>
                    <p className="text-bozza-gray">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}