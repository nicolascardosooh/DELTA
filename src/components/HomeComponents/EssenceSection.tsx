import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

export default function EssenceSection() {
  return (
    <section className="relative overflow-hidden bg-azul-delta py-24 text-white sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 font-display text-[40vw] font-bold leading-none text-white/[0.04]"
      >
        Δ
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <SectionHeading
              index="03"
              eyebrow="A Delta"
              title="Próximos o suficiente para entender o seu negócio"
              light
            />
            <blockquote className="mt-10 max-w-xl border-l border-white/30 pl-5 text-lg leading-relaxed text-white/90 sm:text-xl">
              Números bem cuidados liberam tempo e clareza. Nosso papel é ser o suporte contábil
              que permite à sua empresa crescer com pé no chão.
            </blockquote>
            <p className="mt-6 text-sm tracking-wide text-white/55">
              {site.fullName} · Triunfo / RS
            </p>
          </div>

          <div className="space-y-0 border-t border-white/15">
            {site.essence.map((item) => (
              <div key={item.title} className="border-b border-white/15 py-7">
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
