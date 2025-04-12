"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";
import { FaUsers, FaLightbulb, FaChartLine } from "react-icons/fa";

const images = [
  {
    src: "/images/fundo2.jpg",
    alt: "Equipe Delta",
    caption: "Nossa equipe em ação"
  },
  {
    src: "/images/fundohd.webp",
    alt: "Ambiente de Trabalho",
    caption: "Ambiente colaborativo"
  },
  {
    src: "/images/fundofinancas.jpg",
    alt: "Resultados",
    caption: "Compromisso com resultados"
  }
];

const features = [
  {
    icon: FaUsers,
    title: "Equipe Especializada",
    description: "Profissionais altamente capacitados e em constante atualização"
  },
  {
    icon: FaLightbulb,
    title: "Soluções Inovadoras",
    description: "Abordagem moderna para desafios complexos"
  },
  {
    icon: FaChartLine,
    title: "Resultados Comprovados",
    description: "Histórico de sucesso com nossos clientes"
  }
];

export default function CarouselImages() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #1e4493 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <h2 className="text-4xl font-bold text-sky-900 leading-tight">
              Uma equipe feliz gera mais{" "}
              <span className="relative inline-block">
                <span className="text-sky-600">resultados</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-sky-600/30 rounded-full"></span>
              </span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Contamos com uma equipe experiente e em constante capacitação, 
              preparada para atender, com agilidade, às suas demandas. Somos 
              a extensão do seu negócio, contribuímos para a otimização do seu 
              dia a dia e para definição de estratégias assertivas.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <feature.icon className="text-3xl text-sky-600 mb-4" />
                  <h3 className="text-lg font-semibold text-sky-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="relative h-[620px] rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-lg font-medium">
                      {images[currentIndex].caption}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200"
              >
                <IoIosArrowBack className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200"
              >
                <IoIosArrowForward className="w-6 h-6 text-white" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`transition-all duration-300 ${
                      currentIndex === index 
                        ? "text-white scale-125" 
                        : "text-white/50 hover:text-white/80"
                    }`}
                  >
                    <RxDotFilled className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
    </div>
  );
}
