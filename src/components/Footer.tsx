import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[#0a1f4d] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logodelta.png"
                alt={site.fullName}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full bg-white object-contain p-0.5"
              />
              <div>
                <p className="font-display text-lg font-semibold tracking-[0.14em]">DELTA</p>
                <p className="text-[11px] text-white/50">Assessoria Contábil</p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
              Contabilidade com precisão e atendimento próximo em Triunfo/RS.
            </p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-9 w-9 items-center justify-center border border-white/20 text-white/80 transition hover:border-white/50 hover:text-white"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
              Navegação
            </p>
            <ul className="space-y-2.5 text-sm text-white/70">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/Trabalhe-Conosco" className="hover:text-white">
                  Trabalhe conosco
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
              Legal
            </p>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/politica-de-privacidade" className="hover:text-white">
                  Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
              Contato
            </p>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>{site.address.line1}</li>
              <li>{site.address.line2}</li>
              <li>
                <a href={site.phone.href} className="hover:text-white">
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a href={site.email.href} className="hover:text-white">
                  {site.email.display}
                </a>
              </li>
              <li className="text-white/45">{site.hours}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>
          <p>
            {site.legalName} · CNPJ {site.cnpj}
          </p>
        </div>
      </div>
    </footer>
  );
}
