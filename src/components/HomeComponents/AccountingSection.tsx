"use client";
import { motion } from "framer-motion";
import { 
  FaChartLine, 
  FaShieldAlt, 
  FaRegClock, 
  FaRegHandshake,
  FaCalculator,
  FaRegFileAlt
} from "react-icons/fa";
import CountUp from 'react-countup';

export default function AccountingSection() {
  const stats = [
    { number: 15, suffix: "+", text: "Anos de Experiência" },
    { number: 500, suffix: "+", text: "Clientes Atendidos" },
    { number: 98, suffix: "%", text: "Taxa de Satisfação" },
    { number: 1000, suffix: "+", text: "Projetos Concluídos" },
  ];

  const services = [
    {
      icon: FaCalculator,
      title: "Contabilidade Fiscal",
      description: "Gestão completa de obrigações fiscais e tributárias para sua empresa."
    },
    {
      icon: FaRegFileAlt,
      title: "Demonstrações Contábeis",
      description: "Elaboração e análise de balanços e demonstrativos financeiros."
    },
    {
      icon: FaChartLine,
      title: "Planejamento Tributário",
      description: "Estratégias para otimização fiscal e redução legal de impostos."
    },
    {
      icon: FaShieldAlt,
      title: "Compliance Fiscal",
      description: "Adequação às normas e regulamentações contábeis vigentes."
    },
    {
      icon: FaRegClock,
      title: "Gestão Financeira",
      description: "Controle e análise de fluxo de caixa e indicadores financeiros."
    },
    {
      icon: FaRegHandshake,
      title: "Consultoria Empresarial",
      description: "Orientação estratégica para tomada de decisões corporativas."
    }
  ];

  return (
    <div className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #1e4493 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Excelência em Contabilidade
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções contábeis completas e personalizadas para 
            impulsionar o sucesso do seu negócio com segurança e eficiência.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-6 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl font-bold text-sky-900 mb-2">
                <CountUp end={stat.number} duration={2.5} />
                {stat.suffix}
              </div>
              <p className="text-gray-600">{stat.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-100 to-transparent rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="inline-block p-4 bg-sky-100 rounded-2xl mb-6 group-hover:bg-sky-200 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-sky-900" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>

            
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Pronto para transformar a contabilidade da sua empresa?
          </h3>
          <a href="https://wa.me/555192096630" target="_blank">
          <button className="inline-flex items-center px-8 py-3 bg-sky-900 text-white font-medium rounded-full hover:bg-sky-800 transition-colors duration-300">
            Fale com um especialista
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
