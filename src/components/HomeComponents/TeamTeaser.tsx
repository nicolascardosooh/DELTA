import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TeamTeaser() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              index="06"
              eyebrow="Equipe"
              title="Pessoas por trás dos números"
              description="Profissionais próximos, em constante capacitação — a extensão do seu negócio."
            />
            <Link
              href="/Equipe"
              className="mt-8 inline-flex border border-azul-delta px-6 py-3 text-sm font-semibold text-azul-delta transition hover:bg-azul-delta hover:text-white"
            >
              Conhecer a equipe
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="relative col-span-2 row-span-2 aspect-[4/5] overflow-hidden bg-delta-mist">
              <Image
                src="/images/equipe1.png"
                alt="Equipe Delta"
                fill
                className="object-cover"
                sizes="40vw"
              />
            </div>
            <div className="relative aspect-square overflow-hidden bg-delta-mist">
              <Image src="/images/fundo2.jpg" alt="" fill className="object-cover" sizes="20vw" />
            </div>
            <div className="relative aspect-square overflow-hidden bg-delta-mist">
              <Image
                src="/images/fundohd.webp"
                alt=""
                fill
                className="object-cover"
                sizes="20vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
