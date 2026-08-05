"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaBookOpen, FaCalculator, FaChartLine, FaBalanceScale, FaHandshake } from "react-icons/fa";

const categories = [
  { name: "Contabilidade", icon: FaBookOpen },
  { name: "Fiscal e Tributário", icon: FaCalculator },
  { name: "Gestão Financeira", icon: FaChartLine },
  { name: "Legislação", icon: FaBalanceScale },
  { name: "Empreendedorismo", icon: FaHandshake },
];

const posts = [
  {
    title: "Como escolher o regime tributário ideal para sua empresa?",
    excerpt:
      "Entenda as diferenças entre Simples Nacional, Lucro Presumido e Lucro Real e o que observar na escolha.",
    category: "Fiscal e Tributário",
    date: "2024-03-15",
  },
  {
    title: "Guia prático sobre folha de pagamento",
    excerpt:
      "Pontos essenciais sobre cálculos, encargos e obrigações do departamento pessoal.",
    category: "Contabilidade",
    date: "2024-03-14",
  },
];

const faq = [
  {
    q: "O que é o Simples Nacional?",
    a: "É um regime tributário simplificado voltado a micro e pequenas empresas, unificando o pagamento de diversos tributos.",
  },
  {
    q: "Qual a diferença entre Lucro Presumido e Lucro Real?",
    a: "No Lucro Presumido a base de cálculo usa percentuais definidos pela legislação; no Lucro Real, o imposto incide sobre o lucro efetivo apurado.",
  },
];

export default function BlogPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-azul-delta">
              Blog
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Conteúdo para sua empresa
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Orientação objetiva sobre contabilidade, fiscal e gestão.
            </p>
          </div>

          <div className="mb-12 flex flex-wrap gap-2">
            {categories.map((c) => (
              <span
                key={c.name}
                className="inline-flex items-center gap-2 border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600"
              >
                <c.icon className="h-3.5 w-3.5 text-azul-delta" />
                {c.name}
              </span>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <article key={post.title} className="border border-slate-200 p-6">
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-azul-delta">
                  {post.category}
                </p>
                <h2 className="mb-3 text-xl font-semibold text-slate-900">{post.title}</h2>
                <p className="mb-4 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
                <p className="text-xs text-slate-400">
                  {new Date(post.date).toLocaleDateString("pt-BR")}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 max-w-3xl">
            <h2 className="mb-6 text-2xl font-semibold text-slate-900">Perguntas frequentes</h2>
            <div className="divide-y divide-slate-200 border border-slate-200">
              {faq.map((item, i) => (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-slate-900"
                  >
                    {item.q}
                    <span className="text-azul-delta">{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && (
                    <p className="px-5 pb-4 text-sm leading-relaxed text-slate-600">{item.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <p className="mt-12 text-sm text-slate-500">
            Tem uma dúvida específica?{" "}
            <Link href="/Contato" className="font-medium text-azul-delta hover:underline">
              Fale conosco
            </Link>
            .
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
