'use client';

import { Hero } from '@/components/ui/animated-hero';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
          sizes="100vw"
        />
        {/* Gradient Overlay mais moderno */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#03466e]/40 via-transparent to-[#36c03b]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>

      {/* Elementos decorativos flutuantes */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-[#03466e]/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#36c03b]/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-48 h-48 bg-[#03466e]/5 rounded-full blur-2xl"
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <Hero />
      </div>
    </section>
  );
}