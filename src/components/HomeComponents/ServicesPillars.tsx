import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";
import {
  FaCalculator,
  FaChartLine,
  FaFileInvoiceDollar,
  FaUsers,
  FaBuilding,
  FaTrademark,
  FaFileAlt,
  FaBalanceScale,
  FaHandshake,
} from "react-icons/fa";
import type { IconType } from "react-icons";

const icons: IconType[] = [
  FaCalculator,
  FaChartLine,
  FaFileInvoiceDollar,
  FaUsers,
  FaBuilding,
  FaTrademark,
  FaFileAlt,
  FaBalanceScale,
  FaHandshake,
];

export default function ServicesPillars() {
  return (
    <section id="servicos" className="bg-delta-mist py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          eyebrow="Serviços"
          title="O que fazemos"
          description="As melhores soluções para você ou o seu negócio — com acompanhamento próximo e linguagem objetiva."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.specialties.map((item) => (
            <article
              key={item.title}
              className="border border-slate-200/80 bg-white p-7 sm:col-span-1 lg:col-span-1"
            >
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-azul-delta">
                Especialidade
              </p>
              <h3 className="font-display text-xl font-semibold text-delta-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-delta-mute">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((service, i) => {
            const Icon = icons[i] ?? FaCalculator;
            return (
              <article
                key={service.title}
                className="group border border-slate-200/80 bg-white p-7 transition hover:border-azul-delta/40 hover:shadow-sm"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center bg-azul-delta/10 text-azul-delta transition group-hover:bg-azul-delta group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-delta-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-delta-mute">{service.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-300/70 pt-10 sm:flex-row sm:items-center">
          <p className="text-delta-mute">
            E muito mais — entre em contato para saber como podemos ajudar.
          </p>
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
