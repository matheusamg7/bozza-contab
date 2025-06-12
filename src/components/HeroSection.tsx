'use client';

import { Hero } from '@/components/ui/animated-hero';
import Image from 'next/image';
import { TrendingUp, Users } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden min-h-[70vh] md:min-h-screen flex items-center pt-20 md:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/50 to-white/70 md:from-transparent md:via-white/30 md:to-white/50" />
      </div>
      
      <div className="relative z-10 w-full">
        <div className="flex items-center justify-center min-h-[calc(70vh-5rem)] md:min-h-screen">
          <Hero />
        </div>
      </div>
      {/* Wave Transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none -mb-px">
        <svg className="relative block w-full h-24 md:h-32" viewBox="0 0 1440 120" preserveAspectRatio="none">
          {/* Blue wave primary */}
          <path
            fill="#03466e"
            fillOpacity="0.3"
            d="M0,80L60,82.7C120,85,240,90,360,85.3C480,81,600,67,720,64C840,61,960,69,1080,72C1200,75,1320,73,1380,72L1440,71L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          />
          {/* Blue wave solid */}
          <path
            fill="#03466e"
            d="M0,96L60,93.3C120,91,240,85,360,82.7C480,80,600,80,720,82.7C840,85,960,91,1080,90.7C1200,91,1320,85,1380,82L1440,80L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}