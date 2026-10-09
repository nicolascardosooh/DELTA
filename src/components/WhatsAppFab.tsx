"use client";

import { usePathname } from "next/navigation";
import { primaryWhatsApp } from "@/lib/site";

export default function WhatsAppFab() {
  const pathname = usePathname();
  if (pathname?.startsWith("/gate")) return null;

  return (
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
  );
}
