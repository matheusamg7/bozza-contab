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
        // Typing
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
        } else {
          // Start deleting after a pause
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting
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
        <div className="flex justify-start">
          <div className="max-w-2xl">
            <div className="text-left">
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl tracking-tight font-bold bg-gradient-to-b from-[#022c47] to-[#0a0a0a] bg-clip-text text-transparent leading-tight">
                Soluções especializadas<br />
                em <span className="bg-gradient-to-b from-[#22c55e] to-[#14532d] bg-clip-text text-transparent">
                  {displayText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className="inline-block w-1 h-10 md:h-12 bg-gradient-to-b from-[#22c55e] to-[#14532d] ml-1"
                />
              </h1>
              
              <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
                Transformando números em estratégias inteligentes para o crescimento do seu negócio.
              </p>
            </div>
            
            <Link
              href="#contato"
              className="inline-block mt-8 bg-gradient-to-r from-[#03466e] to-[#022c47] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-lg hover:from-[#022c47] hover:to-[#011827] transition-all duration-300 hover-float font-semibold text-center text-sm sm:text-base"
            >
              Fale com um Especialista
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };