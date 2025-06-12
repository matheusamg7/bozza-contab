'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Mail } from 'lucide-react';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="section-padding">
          <nav className="flex items-center justify-between py-1 md:py-2">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo-bozza.png" 
                alt="Bozza Contabilidade" 
                width={400} 
                height={112}
                className="h-20 md:h-24 w-auto"
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center gap-8 flex-1">
              <div className="flex items-center gap-8 flex-1 justify-center">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`relative transition-colors font-medium group ${
                      isScrolled ? 'text-bozza-dark hover:text-bozza-primary' : 'text-gray-700 hover:text-bozza-primary'
                    }`}
                  >
                    {item.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-bozza-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </div>
              
              <Link
                href="#contato"
                className="bg-[#03466e] text-white px-6 py-3 rounded-full hover:shadow-lg hover:bg-[#022c47] transition-all duration-300 hover-float font-semibold flex items-center gap-2"
              >
                <Phone size={18} />
                Fale Conosco
              </Link>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-bozza-primary p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white border-t border-gray-100">
            <div className="section-padding py-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 text-bozza-dark hover:text-bozza-primary transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ))}
              
              <Link
                href="#contato"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center gap-2 mt-4 bg-[#03466e] text-white px-6 py-3 rounded-full hover:shadow-lg hover:bg-[#022c47] transition-all duration-300 font-semibold"
              >
                <Phone size={18} />
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </header>
  );
}