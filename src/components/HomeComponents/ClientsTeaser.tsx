import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ClientsTeaser() {
  const slots = Array.from({ length: 8 }, (_, i) => i);

  return (
    <section className="bg-delta-mist py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            index="05"
            eyebrow="Clientes"
            title="Empresas que caminham com a Delta"
            description="Logos e cases entram aqui. Por enquanto, o espaço fica reservado."
          />
          <Link
            href="/Clientes"
            className="shrink-0 text-sm font-semibold text-azul-delta hover:underline"
          >
            Ver clientes →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px bg-slate-200 sm:grid-cols-4">
          {slots.map((i) => (
            <div
              key={i}
              className="flex aspect-[5/3] items-center justify-center bg-white"
            >
              {i === 0 ? (
                <Image
                  src="/images/logo.jpeg"
                  alt=""
                  width={100}
                  height={56}
                  className="max-h-10 w-auto object-contain opacity-35 grayscale"
                />
              ) : (
                <span className="font-display text-[11px] tracking-[0.2em] text-slate-300">
                  LOGO
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
