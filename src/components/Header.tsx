'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#home' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
    >
      <div
        className={`bg-white border border-gray-100 shadow-sm transition-all duration-300 w-full max-w-7xl mx-auto relative ${isMenuOpen ? 'rounded-3xl' : 'rounded-2xl'
          } py-0`}
      >
        <nav className="flex items-center justify-between px-8 md:px-12 relative z-20">
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logo-bozza.png"
              alt="Bozza Contabilidade"
              width={400}
              height={112}
              className="w-auto object-contain h-28 md:h-32"
              priority
            />
          </Link>

          {/* Centered Nav Items */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative font-medium group text-base tracking-wide text-gray-700 hover:text-[#03466e] transition-all duration-300 px-3 py-1.5"
              >
                <span className="absolute inset-0 bg-[#03466e]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
                <span className="relative">{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-5">
            <a
              href="https://www.instagram.com/bozzacontabilidade"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#E1306C] transition-all duration-300 hover:rotate-[5deg] hover:scale-110"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#25D366] transition-all duration-300 hover:rotate-[5deg] hover:scale-110"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C6.48 2 2 6.28 2 11.5c0 1.66.44 3.22 1.2 4.58L2 22l6.18-1.17c1.33.67 2.84 1.05 4.44 1.05h.01c5.51 0 9.99-4.27 10-9.52C22.64 6.78 17.98 2 12 2z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.5 14.38c-.25-.13-1.47-.73-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.74-.36-1.54-.66-2.15-1.57-.41-.57-.85-1.27-.95-1.45-.1-.18-.01-.28.08-.37.08-.08.18-.21.27-.32.09-.11.12-.18.18-.31.06-.12.03-.23-.01-.32-.05-.09-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43-.15-.01-.32-.01-.49-.01-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.4 1.01 2.57.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-bozza-primary p-2"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[400px] opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}>
          <div className="px-6 pt-2 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-bozza-dark hover:text-bozza-primary transition-colors font-medium border-b border-gray-100 last:border-0"
              >
                {item.label}
              </Link>
            ))}

            <div className="flex items-center justify-center gap-8 mt-4">
              <a
                href="https://www.instagram.com/bozzacontabilidade"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-[#E1306C] transition-all duration-300 hover:rotate-[5deg] hover:scale-110"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-[#25D366] transition-all duration-300 hover:rotate-[5deg] hover:scale-110"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C6.48 2 2 6.28 2 11.5c0 1.66.44 3.22 1.2 4.58L2 22l6.18-1.17c1.33.67 2.84 1.05 4.44 1.05h.01c5.51 0 9.99-4.27 10-9.52C22.64 6.78 17.98 2 12 2z" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.5 14.38c-.25-.13-1.47-.73-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.74-.36-1.54-.66-2.15-1.57-.41-.57-.85-1.27-.95-1.45-.1-.18-.01-.28.08-.37.08-.08.18-.21.27-.32.09-.11.12-.18.18-.31.06-.12.03-.23-.01-.32-.05-.09-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43-.15-.01-.32-.01-.49-.01-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.4 1.01 2.57.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}