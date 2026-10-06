import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPage() {
  const slots = Array.from({ length: 3 }, (_, i) => i);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-display text-xs font-semibold tracking-[0.2em] text-azul-delta/60">
            04 / Blog
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-delta-ink">
            Conteúdo útil para a gestão
          </h1>
          <p className="mt-4 max-w-xl text-lg text-delta-mute">
            Artigos e avisos entram aqui. Publicamos com o tempo.
          </p>

          <div className="mt-14 divide-y divide-slate-200 border-y border-slate-200">
            {slots.map((i) => (
              <article key={i} className="grid gap-4 py-8 sm:grid-cols-[120px_1fr]">
                <span className="font-display text-sm text-azul-delta/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-300">Categoria</p>
                  <h2 className="mt-2 font-display text-xl font-semibold text-slate-300">
                    Título do artigo
                  </h2>
                  <p className="mt-2 text-sm text-slate-300">Resumo em breve.</p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-12 text-sm text-delta-mute">
            Dúvidas?{" "}
            <Link href="/Contato" className="font-medium text-azul-delta hover:underline">
              Fale conosco
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
