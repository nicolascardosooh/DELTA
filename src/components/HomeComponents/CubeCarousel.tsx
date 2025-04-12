"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiBookOpen } from "react-icons/bi";
import { GiScales } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BsChatSquareDotsFill, BsFileEarmarkSpreadsheetFill, BsPersonVcard, BsBuildingsFill } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { BiLineChart } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import '../componentes.css';

const cards = [
  {
    id: 1,
    title: "Treinamentos Empresariais",
    description: "Capacitação e desenvolvimento profissional para sua equipe",
    icone: BiBookOpen,
    gradient: "from-blue-400 to-sky-500"
  },
  {
    id: 2,
    title: "Consultoria Jurídica",
    description: "Suporte legal especializado para sua empresa",
    icone: GiScales,
    gradient: "from-indigo-400 to-blue-500"
  },
  {
    id: 3,
    title: "Ouvidoria",
    description: "Canal direto para feedback e melhorias",
    icone: RiCustomerService2Fill,
    gradient: "from-sky-400 to-cyan-500"
  },
  {
    id: 4,
    title: "Atendimento Online",
    description: "Suporte remoto ágil e eficiente",
    icone: BsChatSquareDotsFill,
    gradient: "from-teal-400 to-emerald-500"
  },
  {
    id: 5,
    title: "Contabilidade e Pareceres",
    description: "Gestão contábil completa e transparente",
    icone: BsFileEarmarkSpreadsheetFill,
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    id: 6,
    title: "Gestão de Folha",
    description: "Administração eficiente de recursos humanos",
    icone: BsPersonVcard,
    gradient: "from-purple-400 to-indigo-500"
  },
  {
    id: 7,
    title: "Processamento Fiscal",
    description: "Conformidade fiscal e tributária",
    icone: MdAttachMoney,
    gradient: "from-green-400 to-emerald-500"
  },
  {
    id: 8,
    title: "Gestão Societária",
    description: "Administração estratégica empresarial",
    icone: BsBuildingsFill,
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    id: 9,
    title: "Consultorias",
    description: "Soluções personalizadas para seu negócio",
    icone: BiLineChart,
    gradient: "from-cyan-400 to-blue-500"
  },
];

export default function Carousel() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const cardWidth = 300;
  const containerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      const newPosition = scrollPosition + scrollAmount;

      if (newPosition >= 0 && newPosition <= container.scrollWidth - container.clientWidth) {
        setScrollPosition(newPosition);
        container.scrollTo({
          left: newPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const container = containerRef.current;
        const isAtEnd = scrollPosition >= container.scrollWidth - container.clientWidth;
        
        if (isAtEnd) {
          setScrollPosition(0);
          container.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        } else {
          const newPosition = scrollPosition + cardWidth;
          setScrollPosition(newPosition);
          container.scrollTo({
            left: newPosition,
            behavior: 'smooth'
          });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [scrollPosition]);

  return (
    <div className="relative bg-gradient-to-b from-sky-900 to-sky-950 py-16 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            O que podemos fazer por sua empresa?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl">
            Juntos! Esta é a premissa que adotamos para fornecer soluções completas.
            Tudo para o seu negócio ir além.
          </p>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="relative group">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll('left')}
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300 shadow-lg"
          >
            <IoIosArrowBack className="text-white w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll('right')}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300 shadow-lg"
          >
            <IoIosArrowForward className="text-white w-6 h-6" />
          </motion.button>

          {/* Cards Container */}
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto py-8 px-4 hide-scrollbar"
            style={{
              scrollBehavior: 'smooth',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            {cards.map((card, index) => {
              const IconComponent = card.icone;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 w-[300px] cursor-pointer"
                  onHoverStart={() => setActiveCard(card.id)}
                  onHoverEnd={() => setActiveCard(null)}
                >
                  <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${card.gradient} p-6 h-[400px] shadow-xl`}>
                    {/* Card Content */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
                    <div className="relative z-10 h-full flex flex-col items-center justify-between">
                      <IconComponent className="w-16 h-16 text-white mb-6 transform transition-transform duration-300 group-hover:scale-110" />
                      
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-white mb-3">
                          {card.title}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {card.description}
                        </p>
                      </div>

                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: activeCard === card.id ? 1 : 0 }}
                      >
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
