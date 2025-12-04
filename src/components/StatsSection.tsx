'use client';

import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  {
    number: 15,
    suffix: '+',
    label: 'Anos de Experiência'
  },
  {
    number: 500,
    suffix: '+',
    label: 'Clientes Ativos'
  },
  {
    number: 12,
    suffix: 'M+',
    label: 'Economizados em Impostos'
  },
  {
    number: 98,
    suffix: '%',
    label: 'Taxa de Satisfação'
  }
];

function Counter({ end, suffix, duration = 2.5 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
      const easedProgress = easeOutQuart(progress);
      
      setCount(Math.floor(easedProgress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    
    requestAnimationFrame(animateCount);
  }, [end, duration, isInView]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-10 bg-white relative overflow-hidden">
      <div className="section-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-bozza-secondary via-[#2da832] to-[#22c55e] rounded-[3rem] p-12 md:p-16 relative overflow-hidden"
          >
            {/* Background Pattern inside card */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                    <Counter end={stat.number} suffix={stat.suffix} />
                  </h3>
                  <p className="text-sm md:text-base font-medium text-white/90">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}