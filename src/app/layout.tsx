import type { Metadata } from "next";
import "./globals.css";
import { primaryWhatsApp, site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${site.fullName} | Contabilidade em Triunfo/RS`,
    template: `%s | ${site.fullName}`,
  },
  description:
    "Assessoria contábil completa em Triunfo/RS. Atendimento presencial e online. Contabilidade, fiscal, folha e consultoria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased font-sans">
        {children}
        <a
          href={primaryWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
          aria-label="Falar no WhatsApp"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/wpp.png" alt="WhatsApp" />
        </a>
      </body>
    </html>
  );
}
