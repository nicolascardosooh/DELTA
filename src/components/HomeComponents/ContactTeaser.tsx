import LeadForm from "@/components/LeadForm";
import SectionHeading from "@/components/ui/SectionHeading";
import { primaryWhatsApp, site } from "@/lib/site";

export default function ContactTeaser() {
  return (
    <section className="border-t border-slate-200 bg-white py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeading
            index="07"
            eyebrow="Contato"
            title="Vamos conversar"
            description="Conte um pouco da sua empresa. Retornamos com uma proposta objetiva."
          />
          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-delta-mute">Endereço</dt>
              <dd className="mt-1 text-delta-ink">{site.address.full}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-delta-mute">Telefone</dt>
              <dd className="mt-1">
                <a href={site.phone.href} className="text-delta-ink hover:text-azul-delta">
                  {site.phone.display}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-delta-mute">WhatsApp</dt>
              <dd className="mt-1">
                <a
                  href={primaryWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-delta-ink hover:text-azul-delta"
                >
                  {site.whatsapp[0].display}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-delta-mute">E-mail</dt>
              <dd className="mt-1">
                <a href={site.email.href} className="text-delta-ink hover:text-azul-delta">
                  {site.email.display}
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
