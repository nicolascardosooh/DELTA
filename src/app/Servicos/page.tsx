import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-display text-xs font-semibold tracking-[0.2em] text-azul-delta/60">
            Soluções
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-delta-ink">
            O que fazemos pela sua empresa
          </h1>
          <p className="mt-4 max-w-xl text-lg text-delta-mute">
            Contabilidade, fiscal, folha e consultoria — com acompanhamento próximo.
          </p>

          <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
            {site.servicePillars.map((pillar, i) => (
              <article
                key={pillar.title}
                className="grid gap-4 py-8 sm:grid-cols-[auto_1fr_1.2fr] sm:gap-8"
              >
                <span className="font-display text-sm font-semibold text-azul-delta/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-lg font-semibold text-delta-ink">{pillar.title}</h2>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {pillar.items.map((item) => (
                    <li key={item} className="text-sm text-delta-mute">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-14">
            <Link
              href="/Contato"
              className="inline-flex bg-azul-delta px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-azul-delta-dark"
            >
              Falar com a Delta
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
