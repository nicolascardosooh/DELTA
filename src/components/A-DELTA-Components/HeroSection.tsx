"use client";
import { motion } from "framer-motion";
import { 
  FaArrowRight, 
  FaCalculator, 
  FaChartLine, 
  FaMoneyBillWave,
  FaCheckCircle 
} from "react-icons/fa";

export default function HeroSectionDelta() {
  const achievements = [
    { number: "25+", text: "Anos de Experiência" },
    { number: "5000+", text: "Clientes Atendidos" },
    { number: "150+", text: "Sistemas Integrados" },
    { number: "98%", text: "Satisfação dos Clientes" },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="relative py-20 w-full bg-gradient-to-b from-sky-900 via-sky-900 to-sky-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Tenha um braço forte para a gestão da contabilidade do seu negócio.
              Conte com a{" "}
              <span className="relative inline-block">
                <span className="text-sky-400">Delta!</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-sky-400/30 rounded-full"></span>
              </span>
            </h2>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-transform duration-300"
                >
                  <p className="text-3xl font-bold text-sky-400 mb-2">
                    {achievement.number}
                  </p>
                  <p className="text-sm text-gray-300">
                    {achievement.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <p className="text-gray-300 leading-relaxed">
                A Delta é uma das maiores empresas do segmento em Triunfo e General Câmara. 
                Com 25 anos de mercado, temos como principais pilares a confiança, agilidade 
                e eficiência para atingir níveis de excelência em tudo o que fazemos.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Equipe especializada em integrações de sistemas",
                  "Mais de 150 sistemas integrados",
                  "Processos automatizados e eficientes",
                  "Atendimento nacional e internacional",
                  "Soluções completas em contabilidade",
                  "Gestão societária e fiscal especializada"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <FaCheckCircle className="text-sky-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="https://wa.me/555192096630"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-sky-400 text-white rounded-full hover:bg-sky-500 transition-all duration-300 transform hover:scale-105 group"
          >
            <span className="text-lg font-medium tracking-wider">FALE COM A DELTA</span>
            <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
    </div>
  );
}
