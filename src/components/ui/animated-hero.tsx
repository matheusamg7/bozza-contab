'use client';

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = useMemo(
    () => ["contabilidade.", "consultoria.", "assessoria.", "planejamento tributário."],
    []
  );

  useEffect(() => {
    const currentTitle = titles[titleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentTitle.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, titles]);

  return (
    <div className="w-full px-6">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <motion.div 
            className="relative w-full max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="text-center p-6 md:p-10">
              <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] tracking-tight font-bold leading-tight min-h-[90px] sm:min-h-[130px] flex flex-col justify-center">
                <span className="text-[#03466e]">
                  Soluções especializadas
                </span>
                <span className="block mt-2">
                  <span className="text-[#03466e]">em </span>
                  <span className="bg-gradient-to-r from-[#36c03b] via-[#22c55e] to-[#36c03b] bg-clip-text text-transparent">
                    {displayText}
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    className="inline-block w-1 h-8 md:h-12 bg-gradient-to-b from-[#36c03b] to-[#22c55e] ml-1 align-middle rounded-full"
                  />
                </span>
              </h1>

              <motion.p 
                className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Transformando números em estratégias inteligentes para o crescimento do seu negócio.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link
                  href="#contato"
                  className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#03466e] to-[#035994] text-white px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 font-semibold text-base overflow-hidden"
                >
                  <span className="relative z-10">Fale com um Especialista</span>
                  <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#035994] to-[#03466e] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  href="#servicos"
                  className="inline-flex items-center gap-2 text-[#03466e] font-semibold hover:text-[#035994] transition-colors px-6 py-4 text-base"
                >
                  Conheça nossos serviços
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export { Hero };