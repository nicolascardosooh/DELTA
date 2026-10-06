import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClientesPage() {
  const slots = Array.from({ length: 16 }, (_, i) => i);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-display text-xs font-semibold tracking-[0.2em] text-azul-delta/60">
            02 / Clientes
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-delta-ink">
            Empresas que caminham com a Delta
          </h1>
          <p className="mt-4 max-w-xl text-lg text-delta-mute">
            Espaço reservado para logos e cases. Preenchemos com o tempo.
          </p>

          <div className="mt-14 grid grid-cols-2 gap-px bg-slate-200 sm:grid-cols-3 md:grid-cols-4">
            {slots.map((i) => (
              <div key={i} className="flex aspect-[5/3] items-center justify-center bg-white">
                {i === 0 ? (
                  <Image
                    src="/images/logo.jpeg"
                    alt=""
                    width={120}
                    height={80}
                    className="max-h-12 w-auto object-contain opacity-35 grayscale"
                  />
                ) : (
                  <span className="font-display text-[11px] tracking-[0.2em] text-slate-300">
                    LOGO
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link
              href="/Contato"
              className="inline-flex bg-azul-delta px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-azul-delta-dark"
            >
              Quero ser cliente Delta
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
