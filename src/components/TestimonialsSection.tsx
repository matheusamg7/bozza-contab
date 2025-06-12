'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'João Silva',
    company: 'Silva Construções',
    image: '/testimonial-1.jpg',
    text: 'A Bozza tem sido um parceiro fundamental no nosso dia a dia. Tivemos diversos riscos reduzidos e um ganho no resultado das nossas operações.',
  },
  {
    name: 'Maria Santos',
    company: 'Comércio MS',
    image: '/testimonial-2.jpg',
    text: 'Toda confiança com o time da Bozza sempre! O nosso foco é vender e crescer, o papel deles é organizar nosso financeiro e nossas obrigações.',
  },
  {
    name: 'Carlos Oliveira',
    company: 'Oliveira Indústria',
    image: '/testimonial-3.jpg',
    text: 'A Bozza sempre nos passa a gestão com atendimento muito personalizado quando precisamos. Indicamos para quem busca evoluir nos negócios.',
  },
  {
    name: 'Ana Paula Costa',
    company: 'AP Varejo',
    image: '/testimonial-4.jpg',
    text: 'Excelente atendimento e suporte completo. A equipe da Bozza sempre está disponível para esclarecer dúvidas e nos orientar nas melhores decisões.',
  },
  {
    name: 'Roberto Mendes',
    company: 'Mendes Logística',
    image: '/testimonial-5.jpg',
    text: 'Parceria de sucesso há mais de 5 anos. A Bozza cuida de toda nossa parte fiscal e contábil com muita competência e profissionalismo.',
  },
  {
    name: 'Fernanda Lima',
    company: 'FL Consultoria',
    image: '/testimonial-6.jpg',
    text: 'Recomendo a Bozza para todas as empresas que buscam uma contabilidade moderna, ágil e que realmente entende as necessidades do cliente.',
  },
  {
    name: 'Pedro Almeida',
    company: 'Almeida Tech',
    image: '/testimonial-7.jpg',
    text: 'A Bozza transformou nossa gestão financeira. Hoje temos relatórios precisos e conseguimos tomar decisões estratégicas com segurança.',
  },
];

export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Detectar se é mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const testimonialsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 50;
    
    if (info.offset.x > swipeThreshold) {
      prevPage();
    } else if (info.offset.x < -swipeThreshold) {
      nextPage();
    }
  };
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background image with blue overlay */}
      <div className="absolute inset-0">
        <Image
          src="/claude images/computadoressala.jpg"
          alt="Escritório"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-bozza-primary/80" />
      </div>
      
      <div className="section-padding relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          O que falam de nós?
        </motion.h2>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8 cursor-grab active:cursor-grabbing"
              animate={{ x: `-${currentPage * 100}%` }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 0.8
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className={`min-w-full grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-8 ${isMobile ? 'px-4' : ''}`}>
                  {testimonials
                    .slice(
                      pageIndex * testimonialsPerPage,
                      (pageIndex + 1) * testimonialsPerPage
                    )
                    .map((testimonial, index) => (
                      <motion.div
                        key={index}
                        className="group relative"
                        initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 100
                        }}
                      >
                        {/* Card without border */}
                        <div className="relative h-full bg-white rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                          <div className="p-6 h-full flex flex-col">
                            {/* Top section with avatar and quote */}
                            <div className="flex items-start gap-4 mb-6">
                              {/* Avatar */}
                              <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-bozza-primary to-[#022c47] rounded-full flex items-center justify-center text-white font-bold text-xl">
                                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <Quote className="w-6 h-6 text-bozza-secondary absolute -bottom-2 -right-2 bg-white rounded-full p-1" />
                              </div>
                              
                              {/* Name and company */}
                              <div className="flex-grow">
                                <h4 className="font-bold text-bozza-primary text-lg leading-tight">
                                  {testimonial.name}
                                </h4>
                                <p className="text-gray-500 text-sm">
                                  {testimonial.company}
                                </p>
                              </div>
                            </div>
                            
                            {/* Testimonial text */}
                            <div className="relative flex-grow">
                              <div className="absolute -top-4 -left-2 text-6xl text-bozza-secondary/10 font-serif">"</div>
                              <p className="text-gray-700 leading-relaxed relative z-10 pl-4">
                                {testimonial.text}
                              </p>
                              <div className="absolute -bottom-2 right-2 text-6xl text-bozza-secondary/10 font-serif rotate-180">"</div>
                            </div>
                            
                          </div>
                        </div>
                        
                        {/* Hover effect background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-bozza-secondary/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                      </motion.div>
                    ))}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation buttons - responsivos */}
          {!isMobile && (
            <>
              <button
                onClick={prevPage}
                className="absolute -left-20 top-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-bozza-secondary hover:text-white group"
              >
                <ChevronLeft className="w-6 h-6 text-bozza-primary group-hover:text-white transition-colors" />
              </button>
              <button
                onClick={nextPage}
                className="absolute -right-20 top-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-bozza-secondary hover:text-white group"
              >
                <ChevronRight className="w-6 h-6 text-bozza-primary group-hover:text-white transition-colors" />
              </button>
            </>
          )}
        </div>

        {/* Page indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentPage === index
                  ? 'w-8 bg-bozza-secondary'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="#contato"
            className="inline-block bg-bozza-secondary hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover-float"
          >
            Fale com um Especialista
          </a>
        </motion.div>
      </div>
    </section>
  );
}