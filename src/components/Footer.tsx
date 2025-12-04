import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  const services = [
    { label: 'Contabilidade Empresarial', href: '#servicos' },
    { label: 'Planejamento Tributário', href: '#servicos' },
    { label: 'Departamento Pessoal', href: '#servicos' },
    { label: 'Consultoria Contábil', href: '#servicos' },
    { label: 'Escrituração Fiscal', href: '#servicos' },
    { label: 'Abertura de Empresas', href: '#servicos' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  return (
    <footer className="bg-bozza-dark text-white relative mt-20">
      {/* Curved top edge - côncava */}
      <svg 
        className="absolute -top-20 left-0 w-full h-20" 
        viewBox="0 0 1200 100" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M0,0 Q600,100 1200,0 L1200,100 L0,100 Z" 
          fill="#111827"
        />
      </svg>
      
      {/* Main Footer */}
      <div className="section-padding py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Image 
                src="/logo-bozza.png" 
                alt="Bozza Contabilidade" 
                width={320} 
                height={90}
                className="h-24 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6">
              Transformando números em estratégias de sucesso para sua empresa 
              há mais de 15 anos.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-bozza-secondary transition-all duration-300 hover-float"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-bozza-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-bozza-secondary transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-bozza-secondary flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  R. André da Rocha, 126<br />
                  Centro - Lagoa Vermelha/RS<br />
                  CEP: 95300-000
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-bozza-secondary flex-shrink-0" />
                <a href="tel:+555433585522" className="text-gray-300 hover:text-bozza-secondary transition-colors">
                  +55 54 3358-5522
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-bozza-secondary flex-shrink-0" />
                <a href="mailto:bozzaedutrcontabilidade@gmail.com" className="text-gray-300 hover:text-bozza-secondary transition-colors break-all">
                  bozzaedutrcontabilidade@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="section-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>© {currentYear} Bozza Contabilidade. Todos os direitos reservados.</p>
              <p className="mt-1">CNPJ: 12.671.001/0001-47</p>
            </div>
            
            {/* Developer Credit */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Desenvolvido por</span>
              <a 
                href="https://amage.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/claude images/logo-amage-web.png" 
                  alt="Amage Web" 
                  width={180} 
                  height={54}
                  className="h-12 w-auto"
                />
              </a>
            </div>
            
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-bozza-secondary transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-gray-400 hover:text-bozza-secondary transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}