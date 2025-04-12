"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { 
  FaLinkedinIn, 
  FaEnvelope, 
  FaCertificate,
  FaUserTie,
  FaUsers,
  FaHandshake
} from "react-icons/fa";

// Dados da equipe
const teamMembers = [
  {
    name: "João Silva",
    role: "Diretor Executivo",
    image: "/images/equipe1.png", // Adicione as imagens correspondentes
    bio: "Mais de 15 anos de experiência em consultoria contábil e gestão empresarial.",
    specialties: ["Gestão Estratégica", "Consultoria Financeira", "Planejamento Tributário"],
    linkedin: "https://linkedin.com/in/joaosilva",
    email: "joao@delta.com"
  },
  // Adicione mais membros da equipe
];

const stats = [
  {
    number: "25+",
    label: "Anos de Experiência",
    icon: FaUserTie,
    color: "from-blue-400 to-sky-500"
  },
  {
    number: "50+",
    label: "Profissionais Especializados",
    icon: FaUsers,
    color: "from-sky-400 to-cyan-500"
  },
  {
    number: "1000+",
    label: "Clientes Satisfeitos",
    icon: FaHandshake,
    color: "from-cyan-400 to-blue-500"
  }
];

export default function EquipePage() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

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
              Conheça nossa{" "}
              <span className="relative inline-block">
                <span className="text-sky-600">Equipe</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-sky-600/30 rounded-full"></span>
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Profissionais altamente qualificados e comprometidos com a excelência 
              em cada projeto e atendimento.
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

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Member Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative p-6">
                    <h3 className="text-xl font-bold text-sky-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sky-600 mb-4">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">
                      {member.bio}
                    </p>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {member.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-sky-50 text-sky-600 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center space-x-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-sky-50 text-sky-600 rounded-full hover:bg-sky-100 transition-colors duration-300"
                      >
                        <FaLinkedinIn className="w-5 h-5" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="p-2 bg-sky-50 text-sky-600 rounded-full hover:bg-sky-100 transition-colors duration-300"
                      >
                        <FaEnvelope className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Certifications Icon */}
                  <div className="absolute top-4 right-4 p-2 bg-white/90 rounded-full">
                    <FaCertificate className="text-sky-600 w-6 h-6" />
                  </div>
                </div>
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
              Quer fazer parte do nosso time?
            </h3>
            <a
              href="/carreiras"
              className="inline-flex items-center px-8 py-3 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Confira nossas vagas
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
    </div>
  );
}
