"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const benefits = [
  {
    title: "Plano de carreira",
    description: "Desenvolvimento profissional e oportunidades de crescimento.",
  },
  {
    title: "Educação continuada",
    description: "Incentivo a certificações e atualização técnica.",
  },
  {
    title: "Ambiente colaborativo",
    description: "Cultura focada em equipe, ética e qualidade.",
  },
  {
    title: "Atendimento presencial e online",
    description: "Rotina flexível alinhada às necessidades da operação.",
  },
];

export default function TrabalhePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Currículo — ${formData.name || "Candidato"}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nE-mail: ${formData.email}\nTelefone: ${formData.phone}\nÁrea de interesse: ${formData.area}\n\n${formData.message}\n\n(Anexe o currículo ao e-mail.)`
    );
    window.location.href = `${site.email.href}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-azul-delta">
              Carreiras
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Trabalhe conosco
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Faça parte de uma equipe que valoriza ética, qualidade e desenvolvimento
              contínuo.
            </p>
          </div>

          <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="border-t-2 border-azul-delta pt-5">
                <h3 className="mb-2 font-semibold text-slate-900">{b.title}</h3>
                <p className="text-sm text-slate-600">{b.description}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-slate-900">Envie seu currículo</h2>
              <p className="mb-6 text-sm leading-relaxed text-slate-600">
                Preencha o formulário. Você será redirecionado ao e-mail para anexar o
                currículo e concluir o envio para {site.email.display}.
              </p>
              {submitted && (
                <p className="mb-4 border border-azul-delta/30 bg-azul-delta/5 px-4 py-3 text-sm text-azul-delta">
                  Abrindo seu cliente de e-mail… Anexe o currículo antes de enviar.
                </p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 border border-slate-200 p-6 sm:p-8">
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-500">
                  Nome
                </label>
                <input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-azul-delta"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-500">
                    E-mail
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-azul-delta"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-500">
                    Telefone
                  </label>
                  <input
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-azul-delta"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-500">
                  Área de interesse
                </label>
                <input
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="w-full border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-azul-delta"
                  placeholder="Ex.: Contabilidade, Fiscal, DP"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-500">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-azul-delta"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-azul-delta py-3 text-sm font-semibold text-white transition hover:bg-azul-delta-dark"
              >
                Continuar pelo e-mail
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
