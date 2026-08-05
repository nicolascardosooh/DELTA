"use client";

import { motion } from "framer-motion";
import {
  FaChartLine,
  FaShieldAlt,
  FaRegClock,
  FaRegHandshake,
  FaCalculator,
  FaRegFileAlt,
} from "react-icons/fa";
import CountUp from "react-countup";
import { primaryWhatsApp } from "@/lib/site";

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
    description: "Gestão completa de obrigações fiscais e tributárias para sua empresa.",
  },
  {
    icon: FaRegFileAlt,
    title: "Demonstrações Contábeis",
    description: "Elaboração e análise de balanços e demonstrativos financeiros.",
  },
  {
    icon: FaChartLine,
    title: "Planejamento Tributário",
    description: "Estratégias para otimização fiscal e redução legal de impostos.",
  },
  {
    icon: FaShieldAlt,
    title: "Compliance Fiscal",
    description: "Adequação às normas e regulamentações contábeis vigentes.",
  },
  {
    icon: FaRegClock,
    title: "Gestão Financeira",
    description: "Controle e análise de fluxo de caixa e indicadores financeiros.",
  },
  {
    icon: FaRegHandshake,
    title: "Consultoria Empresarial",
    description: "Orientação estratégica para tomada de decisões corporativas.",
  },
];

export default function AccountingSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h2 className="mb-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Excelência em Contabilidade
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Soluções contábeis completas e personalizadas para impulsionar o sucesso do seu
            negócio com segurança e eficiência.
          </p>
        </motion.div>

        <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.text}
              className="border-t-2 border-azul-delta pt-5 text-center md:text-left"
            >
              <div className="text-3xl font-bold text-azul-delta sm:text-4xl">
                <CountUp end={stat.number} duration={2} enableScrollSpy scrollSpyOnce />
                {stat.suffix}
              </div>
              <p className="mt-1 text-sm text-slate-600">{stat.text}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.25) }}
              className="border border-slate-200 p-6"
            >
              <service.icon className="mb-4 h-6 w-6 text-azul-delta" />
              <h3 className="mb-2 text-base font-semibold text-slate-900">{service.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 border border-azul-delta/20 bg-slate-50 px-6 py-12 text-center sm:px-10">
          <h3 className="mb-6 text-2xl font-semibold text-slate-900">
            Pronto para transformar a contabilidade da sua empresa?
          </h3>
          <a
            href={primaryWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-azul-delta px-8 py-3 text-sm font-semibold text-white transition hover:bg-azul-delta-dark"
          >
            Fale com um especialista
          </a>
        </div>
      </div>
    </section>
  );
}
