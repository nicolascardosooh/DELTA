import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EquipePage() {
  const slots = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-display text-xs font-semibold tracking-[0.2em] text-azul-delta/60">
            03 / Equipe
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-delta-ink">
            Pessoas por trás dos números
          </h1>
          <p className="mt-4 max-w-xl text-lg text-delta-mute">
            Fotos e nomes entram aqui. Por enquanto, o espaço fica reservado.
          </p>

          <div className="mt-14 grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {slots.map((i) => (
              <div key={i} className="bg-white">
                <div className="relative aspect-[4/3] bg-delta-mist">
                  {i === 0 ? (
                    <Image
                      src="/images/equipe1.png"
                      alt="Equipe Delta"
                      fill
                      className="object-cover"
                      sizes="33vw"
                    />
                  ) : null}
                </div>
                <div className="border-t border-slate-100 px-5 py-4">
                  <p className="font-display text-sm font-medium text-slate-300">Nome</p>
                  <p className="text-xs text-slate-300">Cargo</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <Link
              href="/Trabalhe-Conosco"
              className="inline-flex border border-azul-delta px-7 py-3 text-sm font-semibold text-azul-delta transition hover:bg-azul-delta hover:text-white"
            >
              Trabalhe conosco
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
