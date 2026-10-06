import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import GoogleMaps from "@/components/GoogleMaps";
import { primaryWhatsApp, site } from "@/lib/site";

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-display text-xs font-semibold tracking-[0.2em] text-azul-delta/60">
            05 / Contato
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-delta-ink">
            Vamos conversar
          </h1>
          <p className="mt-4 max-w-xl text-lg text-delta-mute">
            Preencha o formulário ou fale direto pelos canais abaixo.
          </p>

          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            <LeadForm
              title="Quero ser cliente"
              subtitle="Dados essenciais da empresa. Enviamos a solicitação para o e-mail da Delta."
            />
            <div className="space-y-8">
              <dl className="space-y-5 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-delta-mute">Endereço</dt>
                  <dd className="mt-1 text-delta-ink">{site.address.full}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-delta-mute">Telefone</dt>
                  <dd className="mt-1">
                    <a href={site.phone.href} className="hover:text-azul-delta">
                      {site.phone.display}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-delta-mute">WhatsApp</dt>
                  <dd className="mt-1 space-y-1">
                    {site.whatsapp.map((w) => (
                      <a
                        key={w.href}
                        href={w.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:text-azul-delta"
                      >
                        {w.display}
                      </a>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-delta-mute">E-mail</dt>
                  <dd className="mt-1">
                    <a href={site.email.href} className="hover:text-azul-delta">
                      {site.email.display}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-delta-mute">Horário</dt>
                  <dd className="mt-1 text-delta-ink">{site.hours}</dd>
                </div>
              </dl>
              <a
                href={primaryWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-azul-delta px-6 py-3 text-sm font-semibold text-white transition hover:bg-azul-delta-dark"
              >
                Abrir WhatsApp
              </a>
              <GoogleMaps heightClass="h-64" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
