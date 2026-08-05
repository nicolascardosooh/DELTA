"use client";

import { FiTrendingUp, FiUsers } from "react-icons/fi";
import { motion } from "framer-motion";

const values = [
  {
    icon: FiTrendingUp,
    title: "Crescimento Inteligente",
    description:
      "Planejamento contábil e fiscal para decisões mais seguras e resultados sustentáveis.",
  },
  {
    icon: FiUsers,
    title: "Desenvolvimento Contínuo",
    description:
      "Equipes e processos alinhados — capacitação e suporte para o melhor rendimento do seu negócio.",
  },
];

export default function Cards() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-t border-azul-delta/20 pt-8"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center bg-azul-delta/10 text-azul-delta">
                <item.icon className="h-5 w-5" />
              </div>
              <h2 className="mb-3 text-xl font-semibold text-slate-900">{item.title}</h2>
              <p className="text-base leading-relaxed text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
