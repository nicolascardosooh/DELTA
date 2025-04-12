"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { 
  FaRocket, 
  FaCalculator, 
  FaFileInvoiceDollar, 
  FaUserTie,
  FaChartLine,
  FaBalanceScale,
  FaFileContract,
  FaHandshake
} from "react-icons/fa";

const services = [
  {
    icon: FaCalculator,
    title: "Contabilidade, Demonstrações e Pareceres",
    topics: [
      "Processamento do Movimento Contábil",
      "Balanço Patrimonial e Consolidações",
      "Demonstrações Contábeis",
      "Declarações Obrigatórias e Obrigações Acessórias",
      "Imposto de Renda Pessoa Jurídica e Pessoa Física",
      "Controle Patrimonial",
      "Análise Horizontal e Vertical das Demonstrações Contábeis",
      "Indicadores Econômicos e Financeiros"
    ]
  },
  {
    icon: FaFileInvoiceDollar,
    title: "Gestão Fiscal e Tributária",
    topics: [
      "Planejamento Tributário",
      "Apuração de Impostos",
      "Consultoria Fiscal",
      "Regularização Fiscal",
      "Acompanhamento de Processos",
      "Análise de Benefícios Fiscais"
    ]
  },
  {
    icon: FaFileInvoiceDollar,
    title: "Gestão Fiscal e Tributária",
    topics: [
      "Planejamento Tributário",
      "Apuração de Impostos",
      "Consultoria Fiscal",
      "Regularização Fiscal",
      "Acompanhamento de Processos",
      "Análise de Benefícios Fiscais"
    ]
  },
  {
    icon: FaFileInvoiceDollar,
    title: "Gestão Fiscal e Tributária",
    topics: [
      "Planejamento Tributário",
      "Apuração de Impostos",
      "Consultoria Fiscal",
      "Regularização Fiscal",
      "Acompanhamento de Processos",
      "Análise de Benefícios Fiscais"
    ]
  },
  {
    icon: FaFileInvoiceDollar,
    title: "Gestão Fiscal e Tributária",
    topics: [
      "Planejamento Tributário",
      "Apuração de Impostos",
      "Consultoria Fiscal",
      "Regularização Fiscal",
      "Acompanhamento de Processos",
      "Análise de Benefícios Fiscais"
    ]
  },
  {
    icon: FaFileInvoiceDollar,
    title: "Gestão Fiscal e Tributária",
    topics: [
      "Planejamento Tributário",
      "Apuração de Impostos",
      "Consultoria Fiscal",
      "Regularização Fiscal",
      "Acompanhamento de Processos",
      "Análise de Benefícios Fiscais"
    ]
  },
  {
    icon: FaFileInvoiceDollar,
    title: "Gestão Fiscal e Tributária",
    topics: [
      "Planejamento Tributário",
      "Apuração de Impostos",
      "Consultoria Fiscal",
      "Regularização Fiscal",
      "Acompanhamento de Processos",
      "Análise de Benefícios Fiscais"
    ]
  },
  {
    icon: FaFileInvoiceDollar,
    title: "Gestão Fiscal e Tributária",
    topics: [
      "Planejamento Tributário",
      "Apuração de Impostos",
      "Consultoria Fiscal",
      "Regularização Fiscal",
      "Acompanhamento de Processos",
      "Análise de Benefícios Fiscais"
    ]
  },
  
  // Adicione mais serviços conforme necessário
];

export default function ServicosPage() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
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
              Serviços{" "}
              <span className="relative inline-block">
                <span className="text-sky-600">Delta</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-sky-600/30 rounded-full"></span>
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Conheça nossa gama completa de soluções contábeis e financeiras 
              para impulsionar o sucesso do seu negócio.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-gradient-to-r from-sky-900 to-sky-800 rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                
                <div className="relative p-8">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    {/* Left Section */}
                    <div className="w-full md:w-1/2 space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="p-4 bg-white/10 rounded-xl">
                          <service.icon className="text-4xl text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-1/2">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.topics.map((topic, topicIndex) => (
                          <motion.li
                            key={topicIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: topicIndex * 0.1 }}
                            className="flex items-center gap-2 text-white"
                          >
                            <div className="w-2 h-2 bg-sky-400 rounded-full" />
                            <span>{topic}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-sky-600/0 to-sky-600/0 hover:from-sky-600/10 hover:to-sky-600/10 transition-all duration-300" />
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-20"
          >
            <h3 className="text-2xl font-semibold text-sky-900 mb-6">
              Pronto para transformar sua gestão contábil?
            </h3>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Fale com nossos especialistas
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
      </main>

      <Footer />
    </div>
  );
}
