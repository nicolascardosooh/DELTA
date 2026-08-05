"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleMaps from "@/components/GoogleMaps";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
} from "react-icons/fa";
import { primaryWhatsApp, site } from "@/lib/site";

export default function ContatoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const contactCards = [
    {
      icon: FaPhoneAlt,
      title: "Telefone",
      info: site.phone.display,
      href: site.phone.href,
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      info: site.whatsapp.map((w) => w.display).join(" · "),
      href: primaryWhatsApp,
    },
    {
      icon: FaEnvelope,
      title: "E-mail",
      info: site.email.display,
      href: site.email.href,
    },
    {
      icon: FaMapMarkerAlt,
      title: "Endereço",
      info: site.address.full,
      href: site.address.mapsUrl,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || `Contato site — ${formData.name}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nE-mail: ${formData.email}\nTelefone: ${formData.phone}\n\n${formData.message}`
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
              Contato
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Entre em contato conosco
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Não importa qual será sua dúvida — será um prazer ajudar você.
            </p>
          </div>

          <div className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="border border-slate-200 p-5 transition hover:border-azul-delta/40"
              >
                <c.icon className="mb-3 h-5 w-5 text-azul-delta" />
                <h3 className="mb-1 text-sm font-semibold text-slate-900">{c.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{c.info}</p>
              </a>
            ))}
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 flex items-center gap-2 text-sm text-slate-600">
                <FaClock className="text-azul-delta" />
                {site.hours}
              </div>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-azul-delta hover:underline"
              >
                <FaInstagram />
                @deltarscontabilidade
              </a>
              <GoogleMaps heightClass="h-72" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 border border-slate-200 p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-slate-900">Envie uma mensagem</h2>
              <p className="text-sm text-slate-500">
                O envio abre seu e-mail com a mensagem pronta para {site.email.display}.
              </p>
              {submitted && (
                <p className="border border-azul-delta/30 bg-azul-delta/5 px-4 py-3 text-sm text-azul-delta">
                  Abrindo seu cliente de e-mail…
                </p>
              )}
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
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-azul-delta"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-500">
                  Assunto
                </label>
                <input
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-azul-delta"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-500">
                  Mensagem
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-azul-delta"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-azul-delta py-3 text-sm font-semibold text-white transition hover:bg-azul-delta-dark"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
