import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function EquipePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-azul-delta">
              Equipe
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Profissionais preparados para o seu negócio
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Contadores e especialistas dedicados à conformidade, clareza e
              acompanhamento próximo dos nossos clientes.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <Image
                src="/images/equipe1.png"
                alt="Equipe Delta"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6">
              <p className="leading-relaxed text-slate-600">
                Nossa equipe une experiência prática e atualização constante para
                entregar serviços contábeis com segurança e objetividade — do fiscal ao
                societário.
              </p>
              <div className="grid grid-cols-3 gap-4 border-t border-slate-200 pt-6">
                {[
                  { n: "15+", l: "Anos" },
                  { n: "500+", l: "Clientes" },
                  { n: "Online", l: "e presencial" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="text-2xl font-bold text-azul-delta">{s.n}</p>
                    <p className="text-xs text-slate-500">{s.l}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/Trabalhe-Conosco"
                className="inline-flex border border-azul-delta px-7 py-3 text-sm font-semibold text-azul-delta transition hover:bg-azul-delta hover:text-white"
              >
                Trabalhe conosco
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
