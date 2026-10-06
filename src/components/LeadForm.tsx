"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type LeadFormProps = {
  title?: string;
  subtitle?: string;
};

export default function LeadForm({
  title = "Solicitar proposta",
  subtitle = "Preencha os dados essenciais. Abrimos seu e-mail com a mensagem pronta.",
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
    const subject = encodeURIComponent(`Quero ser cliente — ${form.company || form.name}`);
    const body = encodeURIComponent(
      [
        `Nome: ${form.name}`,
        `Empresa: ${form.company}`,
        `CNPJ: ${form.cnpj}`,
        `E-mail: ${form.email}`,
        `Telefone: ${form.phone}`,
        `Regime: ${form.regime}`,
        `Funcionários: ${form.employees}`,
        "",
        form.message,
      ].join("\n")
    );
    window.location.href = `${site.email.href}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const field =
    "w-full border-0 border-b border-slate-200 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-azul-delta";

  return (
    <div className="bg-delta-mist p-6 sm:p-8 lg:p-10">
      <h2 className="font-display text-2xl font-semibold text-delta-ink">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-delta-mute">{subtitle}</p>
      {submitted && (
        <p className="mt-4 border-l-2 border-azul-delta bg-white px-4 py-3 text-sm text-azul-delta">
          Abrindo seu cliente de e-mail…
        </p>
      )}
      <form onSubmit={onSubmit} className="mt-8 space-y-1">
        <div className="grid gap-1 sm:grid-cols-2 sm:gap-6">
          <input
            required
            placeholder="Nome completo"
            className={field}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            required
            placeholder="Empresa"
            className={field}
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />
        </div>
        <div className="grid gap-1 sm:grid-cols-2 sm:gap-6">
          <input
            placeholder="CNPJ"
            className={field}
            value={form.cnpj}
            onChange={(e) => setForm({ ...form, cnpj: e.target.value })}
          />
          <input
            required
            type="email"
            placeholder="E-mail"
            className={field}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div className="grid gap-1 sm:grid-cols-2 sm:gap-6">
          <input
            required
            placeholder="Telefone"
            className={field}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <select
            className={`${field} text-slate-600`}
            value={form.regime}
            onChange={(e) => setForm({ ...form, regime: e.target.value })}
          >
            <option value="">Forma de tributação</option>
            <option value="Simples Nacional">Simples Nacional</option>
            <option value="Lucro Presumido">Lucro Presumido</option>
            <option value="Lucro Real">Lucro Real</option>
          </select>
        </div>
        <input
          placeholder="Nº de funcionários"
          className={field}
          value={form.employees}
          onChange={(e) => setForm({ ...form, employees: e.target.value })}
        />
        <textarea
          rows={3}
          placeholder="Mensagem (opcional)"
          className={`${field} resize-none`}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button
          type="submit"
          className="mt-6 w-full bg-azul-delta py-3.5 text-sm font-semibold text-white transition hover:bg-azul-delta-dark"
        >
          Enviar solicitação
        </button>
      </form>
    </div>
  );
}
