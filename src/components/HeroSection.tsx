"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <Image
        src="/images/fundoHDDELTA.webp"
        alt=""
        fill
        className="object-cover scale-105"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-[#0a1f4d]/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-azul-delta via-azul-delta/50 to-transparent" />

      {/* Brand watermark — Delta signature */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 bottom-0 select-none font-display text-[28vw] font-bold leading-none tracking-tighter text-white/[0.04] sm:text-[22vw]"
      >
        Δ
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:justify-center sm:px-6 sm:pb-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="mb-5 font-display text-sm font-semibold tracking-[0.35em] text-white">
            DELTA
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-[3.75rem]">
            {site.heroTitle}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
            {site.tagline}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/Contato"
              className="bg-white px-7 py-3.5 text-sm font-semibold text-azul-delta transition hover:bg-delta-mist"
            >
              Quero ser cliente
            </Link>
            <a
              href="#servicos"
              className="group inline-flex items-center gap-2 text-sm font-medium text-white/90"
            >
              Ver soluções
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-14 hidden items-center gap-8 border-t border-white/15 pt-6 text-xs uppercase tracking-[0.16em] text-white/55 sm:flex"
        >
          <span>Triunfo · RS</span>
          <span className="h-px w-8 bg-white/25" />
          <span>Presencial e online</span>
          <span className="h-px w-8 bg-white/25" />
          <span>{site.hours.replace("Segunda a Sexta: ", "")}</span>
        </motion.div>
      </div>
    </section>
  );
}
