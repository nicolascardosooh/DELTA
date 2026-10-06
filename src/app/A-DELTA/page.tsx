import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export default function ADeltaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="border-b border-slate-200 bg-delta-mist pt-32 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="font-display text-xs font-semibold tracking-[0.2em] text-azul-delta/60">
              01 / A Delta
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-delta-ink sm:text-5xl">
              Assessoria contábil com precisão e proximidade
            </h1>
            <p className="mt-6 max-w-xl text-lg text-delta-mute">{site.tagline}</p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center sm:px-6 lg:px-8">
            <div className="relative aspect-[4/3] overflow-hidden bg-delta-mist">
              <Image
                src="/images/fundo2.jpg"
                alt="Delta"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-delta-ink sm:text-3xl">
                Próximos o suficiente para entender o seu negócio
              </h2>
              <p className="mt-4 leading-relaxed text-delta-mute">
                A {site.fullName} une rotina contábil bem feita e orientação clara — atendimento
                presencial e online em Triunfo/RS.
              </p>
              <p className="mt-6 text-xs tracking-wide text-slate-400">
                {site.legalName} · CNPJ {site.cnpj}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-azul-delta py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">Nossa essência</h2>
            <div className="mt-10 divide-y divide-white/15 border-y border-white/15">
              {site.essence.map((item) => (
                <div key={item.title} className="grid gap-3 py-7 md:grid-cols-[240px_1fr]">
                  <h3 className="font-display font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/75">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 text-center">
          <Link
            href="/Contato"
            className="inline-flex bg-azul-delta px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-azul-delta-dark"
          >
            Quero ser cliente
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
