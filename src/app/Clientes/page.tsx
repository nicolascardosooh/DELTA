"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { FaBuilding, FaHandshake, FaChartLine } from "react-icons/fa";

export default function Empresas() {
  const [hoveredLogo, setHoveredLogo] = useState<number | null>(null);

  const stats = [
    {
      number: "500+",
      label: "Empresas Parceiras",
      icon: FaBuilding,
      color: "from-blue-400 to-sky-500"
    },
    {
      number: "15+",
      label: "Anos de Experiência",
      icon: FaHandshake,
      color: "from-sky-400 to-cyan-500"
    },
    {
      number: "98%",
      label: "Satisfação dos Clientes",
      icon: FaChartLine,
      color: "from-cyan-400 to-blue-500"
    }
  ];

  // Substitua com os logos reais
  const logos = Array(15).fill("/images/logo.jpeg");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navbar />

        <main className="relative pt-32 pb-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #1e4493 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h1 className="text-4xl font-bold text-sky-900 mb-6">
                Empresas que confiam na{" "}
                <span className="relative inline-block">
                  <span className="text-sky-600">Delta</span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-sky-600/30 rounded-full"></span>
                </span>
              </h1>
              <p className="text-lg text-gray-600">
                Construindo parcerias sólidas e entregando resultados excepcionais para empresas que fazem a diferença.
              </p>
            </motion.div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-10 rounded-full -mr-12 -mt-12`} />
                  <stat.icon className="text-4xl text-sky-600 mb-4" />
                  <h3 className="text-3xl font-bold text-sky-900 mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Logos Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center"
            >
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onHoverStart={() => setHoveredLogo(index)}
                  onHoverEnd={() => setHoveredLogo(null)}
                  className="relative group"
                >
                  <div className="relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                    <img
                      src={logo}
                      alt={`Logo Parceiro ${index + 1}`}
                      className="w-full h-24 object-contain relative z-10 filter group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center mt-20"
            >
              <h3 className="text-2xl font-semibold text-sky-900 mb-6">
                Quer fazer parte dessa história de sucesso?
              </h3>
             <a
                      href="https://wa.me/555192096630"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 bg-sky-400 text-white rounded-full hover:bg-sky-500 transition-all duration-300 transform hover:scale-105 group"
                    >
                      <span className="text-lg font-medium tracking-wider">FALE COM A DELTA</span>
                    </a>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
        </main>

        <Footer />
      </div>
    </>
  );
}
