"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Transition } from '@headlessui/react';
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'A Delta', href: '/A-DELTA' },
    { name: 'Clientes', href: '/Clientes' },
    { name: 'Serviços', href: '/Servicos' },
    { name: 'Equipe', href: '/Equipe' },
    { name: 'Blog', href: '/Blog' },
    { name: 'Trabalhe Conosco', href: '/Trabalhe-Conosco' },
    { name: 'Contato', href: '/Contato' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1 }}
            className="flex-shrink-0"
          >
            <Link href="/">
              <div className="relative group">
                <Image
                  src="/images/logodelta.png"
                  alt="Logo"
                  width={50}
                  height={120}
                  className="rounded-full transition-transform duration-100 group-hover:scale-105"
                  style={{ width: 'auto' }}
                />
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-sky-400 opacity-0 group-hover:opacity-20 transition-opacity duration-100" />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {navigationItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`relative group px-3 py-2 text-sm font-medium tracking-wider ${
                        scrolled ? 'text-gray-900' : 'text-white'
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      
                      {/* Hover Effect */}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-sky-400 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                      
                      {/* Active Indicator */}
                      {isActive && (
                        <motion.span
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-sky-400"
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden scrooltop">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`hamburger-button ${isMenuOpen ? 'opened' : ''} ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
     {/* Mobile Menu */}
     <Transition
        show={isMenuOpen}
        enter="transition-opacity duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 z-[150] min-h-screen w-full overflow-y-auto">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-black opacity-95" />
          
          <nav className="relative min-h-screen flex flex-col items-center justify-center">
            {/* Botão de fechar no topo */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-white hover:text-blue-400 transition-colors duration-300"
              aria-label="Fechar menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Links do menu */}
            <div className="px-4 py-8 w-full max-w-md mx-auto">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="block mb-8"
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group relative block text-center"
                  >
                    <span className="text-white text-2xl font-medium tracking-wider hover:text-blue-400 transition-colors duration-300">
                      {item.name}
                    </span>
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-sky-400 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </nav>
        </div>
      </Transition>
    </nav>
  );
}
