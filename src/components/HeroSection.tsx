"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { primaryWhatsApp, site } from "@/lib/site";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <Image
        src="/images/fundoHDDELTA.webp"
        alt=""
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-azul-delta/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-azul-delta/40 via-transparent to-azul-delta/90" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-white/80">
            Assessoria Contábil
          </p>
          <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            DELTA
          </h1>
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
            {site.tagline}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={primaryWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white px-7 py-3 text-sm font-semibold text-azul-delta transition hover:bg-slate-100"
            >
              Fale conosco
            </a>
            <Link
              href="/Servicos"
              className="inline-flex items-center border border-white/50 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Nossas soluções
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
