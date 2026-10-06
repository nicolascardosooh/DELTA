"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Transition } from "@headlessui/react";
import { site } from "@/lib/site";

type NavbarProps = {
  transparentOnTop?: boolean;
};

export default function Navbar({ transparentOnTop = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen) document.body.classList.add("menu-open");
    else document.body.classList.remove("menu-open");
    return () => document.body.classList.remove("menu-open");
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solid = scrolled || !transparentOnTop || isMenuOpen;
  const light = transparentOnTop && !scrolled && !isMenuOpen;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "border-b border-slate-200/70 bg-white/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Image
            src="/images/logodelta.png"
            alt={site.fullName}
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            priority
          />
          <div className="leading-none">
            <span
              className={`font-display block text-[15px] font-semibold tracking-[0.12em] ${
                light ? "text-white" : "text-azul-delta"
              }`}
            >
              DELTA
            </span>
            <span
              className={`mt-0.5 hidden text-[10px] tracking-wide sm:block ${
                light ? "text-white/60" : "text-delta-mute"
              }`}
            >
              Assessoria Contábil
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {site.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-[13px] font-medium transition-colors ${
                  light
                    ? active
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                    : active
                      ? "text-azul-delta"
                      : "text-slate-500 hover:text-azul-delta"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <Link
          href="/Contato"
          className={`hidden text-sm font-semibold lg:inline-flex ${
            light
              ? "border border-white/40 px-4 py-2 text-white hover:bg-white hover:text-azul-delta"
              : "bg-azul-delta px-4 py-2 text-white hover:bg-azul-delta-dark"
          } transition`}
        >
          Quero ser cliente
        </Link>

        <button
          type="button"
          onClick={() => setIsMenuOpen((o) => !o)}
          className={`lg:hidden p-2 ${light ? "text-white" : "text-azul-delta"}`}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.75"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      <Transition
        show={isMenuOpen}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 z-[150] lg:hidden">
          <div className="absolute inset-0 bg-[#0a1f4d]" />
          <div className="relative flex min-h-full flex-col px-6 pb-12 pt-6">
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-semibold tracking-[0.14em] text-white">
                DELTA
              </span>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-white"
                aria-label="Fechar menu"
              >
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="mt-14 flex flex-col">
              {site.nav.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-baseline gap-4 border-b border-white/10 py-4"
                >
                  <span className="font-display text-xs text-white/35">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-2xl font-medium text-white">{item.name}</span>
                </Link>
              ))}
              <Link
                href="/Contato"
                onClick={() => setIsMenuOpen(false)}
                className="mt-10 bg-white py-3.5 text-center text-sm font-semibold text-azul-delta"
              >
                Quero ser cliente
              </Link>
            </nav>
          </div>
        </div>
      </Transition>
    </nav>
  );
}
