import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

export default function ServicesPillars() {
  return (
    <section id="servicos" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 border-b border-slate-200 pb-10 lg:flex-row lg:items-end">
          <SectionHeading
            index="01"
            eyebrow="Soluções"
            title="O que fazemos pela sua empresa"
            description="Da rotina contábil à consultoria — com acompanhamento próximo e linguagem objetiva."
          />
          <Link
            href="/Servicos"
            className="shrink-0 text-sm font-semibold text-azul-delta underline-offset-4 hover:underline"
          >
            Ver todas as soluções →
          </Link>
        </div>

        <div className="mt-2 divide-y divide-slate-200">
          {site.servicePillars.map((pillar, i) => (
            <article
              key={pillar.title}
              className="group grid gap-4 py-8 sm:grid-cols-[auto_1fr_1.2fr] sm:items-start sm:gap-8"
            >
              <span className="font-display text-sm font-semibold text-azul-delta/40 transition group-hover:text-azul-delta">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-lg font-semibold text-delta-ink sm:pt-0">
                {pillar.title}
              </h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {pillar.items.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-delta-mute">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-10 sm:flex-row sm:items-center">
          <p className="text-delta-mute">Pronto para organizar a contabilidade da sua empresa?</p>
          <Link
            href="/Contato"
            className="bg-azul-delta px-7 py-3 text-sm font-semibold text-white transition hover:bg-azul-delta-dark"
          >
            Falar com a Delta
          </Link>
        </div>
      </div>
    </section>
  );
}
