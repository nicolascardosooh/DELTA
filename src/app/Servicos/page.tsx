"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FaCalculator,
  FaFileInvoiceDollar,
  FaUserTie,
  FaChartLine,
  FaBalanceScale,
  FaHandshake,
} from "react-icons/fa";
import { primaryWhatsApp } from "@/lib/site";

const services = [
  {
    icon: FaCalculator,
    title: "Contabilidade, Demonstrações e Pareceres",
    topics: [
      "Processamento do Movimento Contábil",
      "Balanço Patrimonial e Consolidações",
      "Demonstrações Contábeis",
      "Declarações Obrigatórias e Obrigações Acessórias",
      "Imposto de Renda Pessoa Jurídica e Física",
      "Controle Patrimonial",
      "Análise Horizontal e Vertical",
      "Indicadores Econômicos e Financeiros",
    ],
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
      "Análise de Benefícios Fiscais",
    ],
  },
  {
    icon: FaUserTie,
    title: "Gestão de Pessoal e Folha",
    topics: [
      "Folha de Pagamento",
      "Admissões e Rescisões",
      "Obrigações Trabalhistas",
      "eSocial e obrigações acessórias",
      "Consultoria em RH",
    ],
  },
  {
    icon: FaChartLine,
    title: "Consultoria Empresarial",
    topics: [
      "Análise de indicadores",
      "Apoio à tomada de decisão",
      "Planejamento financeiro",
      "Relatórios gerenciais",
    ],
  },
  {
    icon: FaBalanceScale,
    title: "Societário e Jurídico Contábil",
    topics: [
      "Abertura e alteração de empresas",
      "Gestão societária",
      "Orientação legal aplicada",
      "Documentação societária",
    ],
  },
  {
    icon: FaHandshake,
    title: "Atendimento e Suporte",
    topics: [
      "Atendimento presencial e online",
      "Canal de ouvidoria",
      "Treinamentos empresariais",
      "Suporte contínuo ao cliente",
    ],
  },
];

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-azul-delta">
              Soluções
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Serviços Delta
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Soluções contábeis e financeiras para impulsionar o sucesso do seu negócio.
            </p>
          </div>

          <div className="space-y-6">
            {services.map((service) => (
              <article
                key={service.title}
                className="border border-slate-200 p-6 sm:p-8 lg:grid lg:grid-cols-2 lg:gap-10"
              >
                <div className="mb-6 flex items-start gap-4 lg:mb-0">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-azul-delta/10 text-azul-delta">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900">{service.title}</h2>
                </div>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {service.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-azul-delta" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-16 border border-azul-delta/20 bg-slate-50 px-6 py-12 text-center">
            <h3 className="mb-6 text-2xl font-semibold text-slate-900">
              Pronto para transformar sua gestão contábil?
            </h3>
            <a
              href={primaryWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-azul-delta px-8 py-3 text-sm font-semibold text-white transition hover:bg-azul-delta-dark"
            >
              Fale com nossos especialistas
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
