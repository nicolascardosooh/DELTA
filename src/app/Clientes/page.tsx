"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { primaryWhatsApp } from "@/lib/site";

export default function ClientesPage() {
  const logos = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-azul-delta">
              Clientes
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Empresas que confiam na Delta
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Parcerias sólidas e resultados consistentes para quem faz a diferença na
              região.
            </p>
          </div>

          <div className="mb-16 grid grid-cols-2 gap-6 border-y border-slate-200 py-10 sm:grid-cols-3">
            {[
              { n: "500+", l: "Empresas parceiras" },
              { n: "15+", l: "Anos de experiência" },
              { n: "98%", l: "Satisfação dos clientes" },
            ].map((s) => (
              <div key={s.l} className="text-center sm:text-left">
                <p className="text-3xl font-bold text-azul-delta">{s.n}</p>
                <p className="mt-1 text-sm text-slate-600">{s.l}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {logos.map((i) => (
              <div
                key={i}
                className="flex aspect-[4/3] items-center justify-center border border-slate-200 bg-slate-50 p-6"
              >
                <Image
                  src="/images/logo.jpeg"
                  alt="Logo de cliente"
                  width={120}
                  height={80}
                  className="max-h-16 w-auto object-contain opacity-80 grayscale"
                />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href={primaryWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-azul-delta px-8 py-3 text-sm font-semibold text-white transition hover:bg-azul-delta-dark"
            >
              Quero ser cliente Delta
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
