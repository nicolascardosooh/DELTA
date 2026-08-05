"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Transition } from "@headlessui/react";
import { site } from "@/lib/site";

type NavbarProps = {
  /** When true, nav links start white (for dark hero backgrounds). */
  transparentOnTop?: boolean;
};

export default function Navbar({ transparentOnTop = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const useLightText = transparentOnTop && !scrolled && !isMenuOpen;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || !transparentOnTop
          ? "bg-white/95 border-b border-slate-200/80 backdrop-blur-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logodelta.png"
            alt={site.fullName}
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
            priority
          />
          <span
            className={`hidden text-sm font-semibold tracking-wide sm:block ${
              useLightText ? "text-white" : "text-azul-delta"
            }`}
          >
            DELTA
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                  useLightText
                    ? isActive
                      ? "text-white"
                      : "text-white/85 hover:text-white"
                    : isActive
                      ? "text-azul-delta"
                      : "text-slate-600 hover:text-azul-delta"
                }`}
              >
                {item.name}
                {isActive && (
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-0.5 ${
                      useLightText ? "bg-white" : "bg-azul-delta"
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((o) => !o)}
          className={`lg:hidden rounded-md p-2 ${
            useLightText ? "text-white" : "text-azul-delta"
          }`}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
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
          <div className="absolute inset-0 bg-azul-delta" />
          <div className="relative flex min-h-full flex-col px-6 pb-12 pt-6">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-white">DELTA</span>
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
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="mt-16 flex flex-col gap-2">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`border-b border-white/15 py-4 text-xl font-medium tracking-wide ${
                    pathname === item.href ? "text-white" : "text-white/80"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </Transition>
    </nav>
  );
}
