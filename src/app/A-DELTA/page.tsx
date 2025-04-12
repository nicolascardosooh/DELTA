"use client";
import { motion } from "framer-motion";
import CarouselSection from "@/components/CarrosselSection";
import Navbar from "@/components/Navbar";
import HeroSectionDelta from "@/components/A-DELTA-Components/HeroSection";
import Valores from "@/components/A-DELTA-Components/Valores";
import CarouselImages from "@/components/A-DELTA-Components/CarrouselImages";
import Footer from "@/components/Footer";

export default function Home() {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Main Content */}
        <motion.main
          initial="initial"
          animate="animate"
          variants={stagger}
          className="relative min-h-screen"
        >
          {/* Hero Section */}
          <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #1e4493 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }} />
            </div>

            <div className="max-w-7xl mx-auto">
              <motion.div
                variants={fadeInUp}
                className="text-center md:text-left md:max-w-3xl"
              >
                <h1 className="inline-block text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-800 to-sky-600 mb-4">
                  A DELTA
                </h1>
                <p className="text-2xl md:text-4xl font-light text-sky-900 leading-relaxed">
                  Atuando entre os líderes do segmento em{" "}
                  <span className="font-semibold text-sky-900 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-sky-900/20">
                    Triunfo
                  </span>{" "}
                  e{" "}
                  <span className="font-semibold text-sky-900 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-sky-900/20">
                    General Câmara
                  </span>.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Carousel Section */}
          <motion.section
            variants={fadeInUp}
            className="relative w-full bg-gradient-to-b from-sky-900 to-sky-950"
          >
            <div className="absolute inset-0 opacity-75 mix-blend-overlay">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }} />
            </div>
            <CarouselSection />
          </motion.section>

          {/* Hero Section Delta */}
          <motion.section
            variants={fadeInUp}
            className="relative w-full bg-sky-900"
          >
            <HeroSectionDelta />
          </motion.section>

          {/* Valores Section */}
          <motion.section
            variants={fadeInUp}
            className="relative w-full bg-gradient-to-b from-sky-50 to-white"
          >
            <Valores />
          </motion.section>

          {/* Carousel Images */}
          <motion.section
            variants={fadeInUp}
            className="relative w-full bg-gradient-to-b from-white to-sky-50"
          >
            <CarouselImages />
          </motion.section>
        </motion.main>

        {/* Decorative Elements */}
        <div className="fixed top-1/4 right-0 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="fixed bottom-1/4 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
