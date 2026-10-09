"use client";

import { FormEvent, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

function GateForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/gate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Senha incorreta.");
        setLoading(false);
        return;
      }
      const next = searchParams.get("next") || "/";
      router.replace(next.startsWith("/") ? next : "/");
      router.refresh();
    } catch {
      setError("Não foi possível validar. Tente novamente.");
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a1f4d] px-4">
      <div className="w-full max-w-sm">
        <div className="mb-10 text-center">
          <Image
            src="/images/logodelta.png"
            alt="Delta"
            width={56}
            height={56}
            className="mx-auto h-14 w-14 object-contain"
            priority
          />
          <p className="mt-4 font-display text-sm font-semibold tracking-[0.3em] text-white">
            DELTA
          </p>
          <p className="mt-3 text-sm text-white/60">Acesso restrito à pré-visualização</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 bg-white p-6 sm:p-8">
          <label className="block">
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-delta-mute">
              Senha
            </span>
            <input
              type="password"
              autoFocus
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full border-0 border-b border-slate-200 bg-transparent py-3 text-sm outline-none focus:border-azul-delta"
              placeholder="Digite a senha"
            />
          </label>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-azul-delta py-3.5 text-sm font-semibold text-white transition hover:bg-azul-delta-dark disabled:opacity-60"
          >
            {loading ? "Validando…" : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function GatePage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#0a1f4d] text-white/60">
          Carregando…
        </div>
      }
    >
      <GateForm />
    </Suspense>
  );
}
