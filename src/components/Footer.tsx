import Image from "next/image";
import Link from "next/link";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaClock,
} from "react-icons/fa";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-azul-delta text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logodelta.png"
                alt={site.fullName}
                width={44}
                height={44}
                className="h-11 w-11 rounded-full bg-white object-contain p-0.5"
              />
              <div>
                <p className="text-lg font-semibold tracking-wide">DELTA</p>
                <p className="text-xs text-white/70">Assessoria Contábil</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/75">
              Escritório de contabilidade com atendimento presencial e online.
              {` ${site.hours}.`}
            </p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition hover:bg-white/10"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Links
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              {site.nav.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/politica-de-privacidade" className="transition hover:text-white">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li>
                <a
                  href={site.phone.href}
                  className="inline-flex items-center gap-2.5 transition hover:text-white"
                >
                  <FaPhone className="shrink-0 opacity-80" />
                  {site.phone.display}
                </a>
              </li>
              {site.whatsapp.map((w) => (
                <li key={w.href}>
                  <a
                    href={w.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 transition hover:text-white"
                  >
                    <FaWhatsapp className="shrink-0 opacity-80" />
                    {w.display}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.email.href}
                  className="inline-flex items-center gap-2.5 transition hover:text-white"
                >
                  <FaEnvelope className="shrink-0 opacity-80" />
                  {site.email.display}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <FaClock className="shrink-0 opacity-80" />
                {site.hours}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Localização
            </h4>
            <a
              href={site.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 text-sm text-white/75 transition hover:text-white"
            >
              <FaMapMarkerAlt className="mt-0.5 shrink-0 opacity-80" />
              <address className="not-italic">
                {site.address.line1}
                <br />
                {site.address.line2}
              </address>
            </a>
            <p className="mt-4 text-xs text-white/55">
              {site.legalName}
              <br />
              CNPJ {site.cnpj}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-8 text-sm text-white/60 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>
          <Link
            href="/politica-de-privacidade"
            className="transition hover:text-white"
          >
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
