"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";

const images = [
  {
    src: "/images/fundo2.jpg",
    alt: "Estrutura Delta",
    caption: "Ambiente moderno e profissional"
  },
  {
    src: "/images/fundohd.webp",
    alt: "Equipe Delta",
    caption: "Equipe especializada"
  },
  {
    src: "/images/fundofinancas.jpg",
    alt: "Serviços Delta",
    caption: "Soluções financeiras completas"
  },
];

export default function CarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Controle de navegação
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto play com pause no hover
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Variantes de animação
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Texto à esquerda */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h2 className="text-4xl font-bold text-white leading-tight">
            <span className="text-sky-400">25 anos</span> de trabalho com confiança e excelência em nossos serviços.
          </h2>
          <p className="text-xl text-gray-300 tracking-wide">
            Conheça a estrutura da Delta e descubra como podemos ajudar seu negócio a crescer.
          </p>
        
        </motion.div>

        {/* Carrossel à direita */}
        <div 
          className="w-full md:w-1/2 relative h-[620px]"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Container do Carrossel */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence initial={false} custom={currentIndex}>
              <motion.div
                key={currentIndex}
                custom={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
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
        </div>
      </div>
    </div>
  );
}
