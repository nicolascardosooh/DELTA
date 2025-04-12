"use client";
import { motion } from "framer-motion";
import { 
  FaHandshake, 
  FaBalanceScale, 
  FaCheckCircle, 
  FaLightbulb,
  FaQuoteLeft 
} from "react-icons/fa";

export default function Valores() {
  const valores = [
    {
      icon: FaHandshake,
      title: "Comprometimento",
      description: "Atendimento especializado, esclarecendo benefícios e eventuais riscos de cada serviço, sempre valorizando os interesses do cliente.",
      color: "from-blue-400 to-sky-500"
    },
    {
      icon: FaBalanceScale,
      title: "Ética",
      description: "Com processos transparentes em cada etapa que envolva o dia a dia de trabalho e a relação com o cliente.",
      color: "from-sky-400 to-cyan-500"
    },
    {
      icon: FaCheckCircle,
      title: "Qualidade",
      description: "Dedicação plena de todos os colaboradores, treinamentos de atualização para sua equipe, associados à experiência nas mais diferentes áreas da contabilidade e da consultoria empresarial.",
      color: "from-cyan-400 to-teal-500"
    },
    {
      icon: FaLightbulb,
      title: "Inovação",
      description: "Com soluções criativas e menos onerosas para os clientes, amparadas na experiência de nossos profissionais.",
      color: "from-teal-400 to-emerald-500"
    }
  ];

  return (
    <div className="relative py-24 overflow-hidden">
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <FaQuoteLeft className="text-4xl text-sky-400/20 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-sky-900 mb-6">
            Conheça os valores que norteiam a equipe da{" "}
            <span className="relative inline-block">
              <span className="text-sky-500">Delta</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-sky-500/30 rounded-full"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Nossa missão é entregar excelência em cada serviço, guiados por valores sólidos e compromisso com resultados.
          </p>
        </motion.div>

        {/* Valores Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valores.map((valor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Icon Container */}
                <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br ${valor.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <valor.icon className="text-white text-2xl" />
                </div>

                {/* Content */}
                <div className="mt-8 text-center">
                  <h3 className="text-xl font-bold text-sky-900 mb-4">
                    {valor.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {valor.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-sky-50 to-transparent rounded-full -mr-12 -mt-12 opacity-50" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
    </div>
  );
}
