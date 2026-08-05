"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaHandshake, FaBalanceScale, FaCheckCircle, FaLightbulb } from "react-icons/fa";
import { primaryWhatsApp } from "@/lib/site";

const valores = [
  {
    icon: FaHandshake,
    title: "Comprometimento",
    description:
      "Atendimento especializado, esclarecendo benefícios e eventuais riscos de cada serviço, sempre valorizando os interesses do cliente.",
  },
  {
    icon: FaBalanceScale,
    title: "Ética",
    description:
      "Processos transparentes em cada etapa do trabalho e na relação com o cliente.",
  },
  {
    icon: FaCheckCircle,
    title: "Qualidade",
    description:
      "Dedicação da equipe, atualização constante e experiência nas diferentes áreas da contabilidade e da consultoria empresarial.",
  },
  {
    icon: FaLightbulb,
    title: "Inovação",
    description:
      "Soluções práticas e eficientes, amparadas na experiência dos nossos profissionais.",
  },
];

const gallery = [
  { src: "/images/fundo2.jpg", alt: "Estrutura Delta" },
  { src: "/images/fundohd.webp", alt: "Ambiente Delta" },
  { src: "/images/fundofinancas.jpg", alt: "Serviços Delta" },
];

export default function ADeltaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <section className="border-b border-slate-100 bg-slate-50 pt-32 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-azul-delta">
              Empresa
            </p>
            <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Atuando entre os líderes do segmento em Triunfo e região.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              A Delta é um braço forte para a gestão contábil do seu negócio — com
              atendimento presencial e online, foco em clareza e conformidade.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
            {gallery.map((img) => (
              <div key={img.src} className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-azul-delta py-16 text-white sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Conte com a Delta na gestão da sua empresa.
                </h2>
                <p className="mt-4 text-white/80 leading-relaxed">
                  Contabilidade, fiscal, folha e consultoria — com linguagem clara e
                  acompanhamento próximo.
                </p>
                <a
                  href={primaryWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex bg-white px-7 py-3 text-sm font-semibold text-azul-delta transition hover:bg-slate-100"
                >
                  Falar com a equipe
                </a>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { n: "15+", t: "Anos de experiência" },
                  { n: "500+", t: "Clientes atendidos" },
                  { n: "98%", t: "Satisfação" },
                  { n: "1000+", t: "Projetos concluídos" },
                ].map((s) => (
                  <div key={s.t} className="border border-white/20 p-5">
                    <p className="text-3xl font-bold">{s.n}</p>
                    <p className="mt-1 text-sm text-white/70">{s.t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 max-w-2xl text-3xl font-semibold tracking-tight text-slate-900">
              Valores que norteiam nossa equipe
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {valores.map((v) => (
                <div key={v.title} className="border-t-2 border-azul-delta pt-6">
                  <v.icon className="mb-4 h-6 w-6 text-azul-delta" />
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
