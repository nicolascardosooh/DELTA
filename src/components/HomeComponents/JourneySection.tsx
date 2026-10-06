import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

export default function JourneySection() {
  return (
    <section className="bg-delta-mist py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="Como começa"
          title="Sua jornada com a Delta"
          description="Um processo simples — da primeira conversa ao acompanhamento contínuo."
        />

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-azul-delta/20 md:block"
          />
          <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
            {site.journey.map((item) => (
              <li key={item.step} className="relative">
                <div className="mb-5 flex h-14 w-14 items-center justify-center border border-azul-delta/25 bg-white font-display text-xl font-semibold text-azul-delta">
                  {item.step}
                </div>
                <h3 className="font-display text-xl font-semibold text-delta-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-delta-mute">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14">
          <Link
            href="/Contato"
            className="inline-flex items-center gap-2 text-sm font-semibold text-azul-delta"
          >
            Quero ser cliente Delta
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
