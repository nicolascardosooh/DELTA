"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import "./componentes.css";

export default function HeroSection() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-900/90 to-transparent z-10" />
      
      {/* Animated Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-slide" />

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/fundohddelta.webp"
          alt="Imagem de fundo"
          fill
          className="object-cover rounded-bl-[100px] transition-transform duration-[3s] hover:scale-105"
          priority
          quality={100}
        />
      </div>

      {/* Left Border Decoration */}
      <div className="absolute left-0 top-0 h-full w-20 bg-sky-900 z-20">
        <div className="h-full w-full bg-gradient-to-b from-sky-800 to-sky-950 opacity-50" />
      </div>

      {/* Bottom Border Decoration */}
      <div className="absolute left-0 bottom-0 h-20 w-full bg-sky-900 z-20">
        <div className="h-full w-full bg-gradient-to-r from-sky-800 to-sky-950 opacity-50" />
      </div>

      {/* Main Content */}
      <div className="relative z-30 h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto space-y-8"
        >
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-sky-50 text-xl md:text-2xl font-bold tracking-wider mb-4"
          >
            Bem-vindo à
          </motion.p>

          {/* Company Name */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-sky-400 mb-6"
          >
            DELTA
          </motion.h2>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl md:text-4xl font-semibold font-sans tracking-wider leading-relaxed"
          >
            Na Delta, a contabilidade é a chave para{" "}
            <span className="text-sky-400">decisões financeiras</span>{" "}
            precisas e seguras.
          </motion.h1>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12"
          >
            <button
              onClick={scrollToContent}
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition-all bg-white rounded-full hover:bg-white group-hover:bg-opacity-90"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-sky-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-sky-900 transition-colors duration-300 ease-in-out group-hover:text-white flex items-center justify-center gap-2">
                Saiba Mais
                <FaArrowDown className="animate-bounce" />
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-32 right-8 z-20">
        <div className="w-32 h-32 border-2 border-sky-400/20 rounded-full animate-pulse" />
      </div>
      <div className="absolute top-32 left-32 z-20">
        <div className="w-16 h-16 border-2 border-sky-400/20 rounded-full animate-ping" />
      </div>
    </div>
  );
}
