"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { 
  FaBriefcase, 
  FaGraduationCap, 
  FaUsers, 
  FaRocket,
  FaMedal,
  FaHeartbeat,
  FaBookReader,
  FaMoneyBillWave,
  FaCoffee,
  FaHandshake,
  FaMapMarkerAlt
} from "react-icons/fa";

const benefits = [
  {
    icon: FaMedal,
    title: "Plano de Carreira",
    description: "Desenvolvimento profissional estruturado e oportunidades de crescimento"
  },
  {
    icon: FaHeartbeat,
    title: "Plano de Saúde",
    description: "Assistência médica e odontológica para você e dependentes"
  },
  {
    icon: FaBookReader,
    title: "Educação Continuada",
    description: "Incentivo a certificações e cursos de especialização"
  },
  {
    icon: FaMoneyBillWave,
    title: "Participação nos Lucros",
    description: "Programa de PLR semestral baseado em metas"
  },
  {
    icon: FaCoffee,
    title: "Ambiente Flexível",
    description: "Horário flexível e day-off no aniversário"
  },
  {
    icon: FaHandshake,
    title: "Cultura Colaborativa",
    description: "Ambiente inclusivo e focado no desenvolvimento em equipe"
  }
];

const openPositions = [
  {
    title: "Contador(a) Sênior",
    type: "Tempo Integral",
    location: "Triunfo - RS",
    department: "Contabilidade",
    requirements: [
      "Formação em Ciências Contábeis",
      "CRC ativo",
      "5+ anos de experiência",
      "Conhecimento em IFRS"
    ]
  },
  {
    title: "Analista Fiscal",
    type: "Tempo Integral",
    location: "General Câmara - RS",
    department: "Fiscal",
    requirements: [
      "Formação em Contabilidade ou áreas afins",
      "3+ anos de experiência",
      "Conhecimento em tributos"
    ]
  },
  // Adicione mais vagas conforme necessário
];

export default function TrabalhePage() {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData({ ...formData, resume: file });
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de envio
  };
  
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: null as File | null,
    message: ""
  });

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
              Faça Parte da Nossa{" "}
              <span className="relative inline-block">
                <span className="text-sky-600">Equipe</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-sky-600/30 rounded-full"></span>
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Junte-se a nós e faça parte de uma equipe apaixonada por 
              excelência e inovação em contabilidade
            </p>
          </motion.div>

          {/* Culture Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-6">
                  <FaBriefcase className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Excelência Profissional
                </h3>
                <p className="text-gray-600">
                  Buscamos profissionais comprometidos com a qualidade e 
                  desenvolvimento contínuo.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-6">
                  <FaGraduationCap className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Aprendizado Constante
                </h3>
                <p className="text-gray-600">
                  Investimos no desenvolvimento profissional e pessoal de 
                  nossa equipe.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-6">
                  <FaUsers className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Ambiente Colaborativo
                </h3>
                <p className="text-gray-600">
                  Valorizamos o trabalho em equipe e a troca de conhecimentos.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Benefits Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-sky-900 mb-12 text-center">
              Benefícios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-6">
                    <benefit.icon className="w-6 h-6 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Open Positions */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-sky-900 mb-12 text-center">
              Vagas Abertas
            </h2>
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <FaBriefcase className="mr-2" />
                          {position.type}
                        </span>
                        <span className="flex items-center">
                          <FaMapMarkerAlt className="mr-2" />
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <FaUsers className="mr-2" />
                          {position.department}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedPosition(index)}
                      className="px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors duration-300"
                    >
                      Candidatar-se
                    </button>
                  </div>

                  {selectedPosition === index && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-4">
                        Requisitos:
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex}>{req}</li>
                        ))}
                      </ul>

                      <form className="mt-6 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Nome completo
                            </label>
                            <input
                              type="text"
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500
                              focus:border-transparent"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              E-mail
                            </label>
                            <input
                              type="email"
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Telefone
                            </label>
                            <input
                              type="tel"
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              LinkedIn (opcional)
                            </label>
                            <input
                              type="url"
                              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Currículo (PDF)
                          </label>
                          <div className="flex items-center justify-center w-full">
                            <label className="w-full flex flex-col items-center px-4 py-6 bg-white rounded-lg border-2 border-dashed border-gray-300 cursor-pointer hover:border-sky-500">
                              <FaRocket className="w-8 h-8 text-gray-400" />
                              <span className="mt-2 text-sm text-gray-500">
                                Clique para upload ou arraste seu arquivo
                              </span>
                              <input type="file" className="hidden" accept=".pdf" required />
                            </label>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Carta de Apresentação
                          </label>
                          <textarea
                            rows={4}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                            placeholder="Conte-nos um pouco sobre você e suas expectativas..."
                            required
                          ></textarea>
                        </div>

                        <div className="flex items-center gap-4">
                          <button
                            type="submit"
                            className="px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors duration-300"
                          >
                            Enviar Candidatura
                          </button>
                          <button
                            type="button"
                            onClick={() => setSelectedPosition(null)}
                            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                          >
                            Cancelar
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center bg-gradient-to-r from-sky-900 to-sky-800 rounded-2xl p-12 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Não encontrou a vaga ideal?
            </h2>
            <p className="text-sky-100 mb-8 max-w-2xl mx-auto">
              Envie seu currículo para nosso banco de talentos e entraremos em contato 
              assim que surgir uma oportunidade que combine com seu perfil.
            </p>
            <button className="px-8 py-3 bg-white text-sky-900 rounded-full hover:bg-sky-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Cadastrar Currículo
            </button>
          </motion.section>

          {/* Additional Info */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Processo Seletivo
              </h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Análise Curricular</h4>
                    <p className="text-gray-600">Avaliação do perfil e experiências</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Entrevista Online</h4>
                    <p className="text-gray-600">Conversa inicial com RH</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Teste Técnico</h4>
                    <p className="text-gray-600">Avaliação de conhecimentos específicos</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Entrevista Final</h4>
                    <p className="text-gray-600">Conversa com gestores e proposta</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Por que trabalhar conosco?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                  <span className="text-gray-600">Ambiente de trabalho colaborativo e dinâmico</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                  <span className="text-gray-600">Oportunidades de crescimento e desenvolvimento</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                  <span className="text-gray-600">Pacote de benefícios competitivo</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                  <span className="text-gray-600">Programas de treinamento e capacitação</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                  <span className="text-gray-600">Equilíbrio entre vida profissional e pessoal</span>
                </li>
              </ul>
            </div>
          </motion.section>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
      </main>
    </div>
  );
}
