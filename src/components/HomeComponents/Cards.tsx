"use client";
import { FiTrendingUp, FiUsers, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import '../componentes.css';

export default function Cards() {
  const cards = [
    {
      icon: FiTrendingUp,
      title: "Crescimento Inteligente",
      description: "Invista em inteligência e planejamento e ganhe dinheiro.",
      color: "from-green-500 to-emerald-600",
      delay: 0.2
    },
    {
      icon: FiUsers,
      title: "Desenvolvimento Contínuo",
      description: "Seus colaboradores sempre atualizados para obter o melhor rendimento.",
      color: "from-green-400 to-teal-500",
      delay: 0.4
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative overflow-hidden bg-gradient-to-b from-sky-900 to-sky-950 py-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: card.delay, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-800/50 to-sky-900/50 p-8 backdrop-blur-sm border border-sky-700/20 shadow-xl">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                {/* Icon Container */}
                <div className="relative flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${card.color} shadow-lg`}>
                    <card.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-white tracking-wide">
                    {card.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <p className="text-lg text-gray-200 leading-relaxed tracking-wide">
                    {card.description}
                  </p>
             
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-sky-500/10 to-transparent rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-gradient-to-tr from-green-500/10 to-transparent rounded-full blur-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Shapes */}
        <div className="absolute top-10 right-10 w-20 h-20 border-2 border-sky-400/20 rounded-full animate-pulse" />
        <div className="absolute bottom-10 left-10 w-32 h-32 border-2 border-green-400/20 rounded-full animate-ping opacity-20" />
      </div>
    </motion.div>
  );
}
