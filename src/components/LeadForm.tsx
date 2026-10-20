"use client";

import { useState } from "react";
import { whatsappWithText } from "@/lib/site";

type LeadFormProps = {
  title?: string;
  subtitle?: string;
};

export default function LeadForm({
  title = "Solicitar orçamento",
  subtitle = "Preencha os campos abaixo. A mensagem abre no WhatsApp da Delta.",
}: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    cnpj: "",
    email: "",
    phone: "",
    regime: "",
    employees: "",
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `*Quero ser cliente — Delta*`,
      ``,
      `Nome: ${form.name}`,
      `Empresa: ${form.company}`,
      `CNPJ: ${form.cnpj || "—"}`,
      `E-mail: ${form.email || "—"}`,
      `Telefone: ${form.phone}`,
      `Regime: ${form.regime || "—"}`,
      `Funcionários: ${form.employees || "—"}`,
      form.message ? `\n${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappWithText(text), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const field =
    "mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3.5 py-3 text-sm text-delta-ink outline-none transition placeholder:text-slate-400 focus:border-azul-delta focus:ring-2 focus:ring-azul-delta/20";

  return (
    <div className="border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
      <h2 className="font-display text-2xl font-semibold text-delta-ink">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-delta-mute">{subtitle}</p>
      {submitted && (
        <p className="mt-4 rounded-md border border-azul-delta/30 bg-azul-delta/5 px-4 py-3 text-sm text-azul-delta">
          Abrindo o WhatsApp…
        </p>
      )}
      <form onSubmit={onSubmit} className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-medium text-delta-ink">
            Nome completo *
            <input
              required
              placeholder="Seu nome"
              className={field}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </label>
          <label className="block text-sm font-medium text-delta-ink">
            Empresa *
            <input
              required
              placeholder="Nome da empresa"
              className={field}
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />
          </label>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-medium text-delta-ink">
            CNPJ
            <input
              placeholder="00.000.000/0000-00"
              className={field}
              value={form.cnpj}
              onChange={(e) => setForm({ ...form, cnpj: e.target.value })}
            />
          </label>
          <label className="block text-sm font-medium text-delta-ink">
            E-mail
            <input
              type="email"
              placeholder="seu@email.com"
              className={field}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </label>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-medium text-delta-ink">
            Telefone *
            <input
              required
              placeholder="(51) 90000-0000"
              className={field}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </label>
          <label className="block text-sm font-medium text-delta-ink">
            Forma de tributação
            <select
              className={field}
              value={form.regime}
              onChange={(e) => setForm({ ...form, regime: e.target.value })}
            >
              <option value="">Selecione</option>
              <option value="MEI">MEI</option>
              <option value="Simples Nacional">Simples Nacional</option>
              <option value="Lucro Presumido">Lucro Presumido</option>
              <option value="Lucro Real">Lucro Real</option>
            </select>
          </label>
        </div>
        <label className="block text-sm font-medium text-delta-ink">
          Nº de funcionários
          <input
            placeholder="Ex.: 5"
            className={field}
            value={form.employees}
            onChange={(e) => setForm({ ...form, employees: e.target.value })}
          />
        </label>
        <label className="block text-sm font-medium text-delta-ink">
          Mensagem
          <textarea
            rows={4}
            placeholder="Conte brevemente o que você precisa…"
            className={`${field} resize-y`}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-md bg-azul-delta py-3.5 text-sm font-semibold text-white transition hover:bg-azul-delta-dark"
        >
          Enviar pelo WhatsApp
        </button>
      </form>
    </div>
  );
}
