import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

export default function StatsSection() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow="Resultados"
          title="Números que contam a nossa história"
          description="Espaço para indicadores reais — vamos preenchendo com o tempo."
        />

        <div className="mt-14 grid grid-cols-2 border-y border-slate-200 md:grid-cols-4">
          {site.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-4 py-10 ${i % 2 === 1 ? "border-l border-slate-200" : ""} ${
                i >= 2 ? "border-t border-slate-200 md:border-t-0" : ""
              } md:border-l md:border-slate-200 md:first:border-l-0`}
            >
              <p className="font-display text-4xl font-semibold tracking-tight text-azul-delta sm:text-5xl">
                {stat.value || "—"}
              </p>
              <p className="mt-3 text-sm text-delta-mute">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
