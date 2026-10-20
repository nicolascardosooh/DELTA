import { NextResponse } from "next/server";
import { createTransport, getMailConfig } from "@/lib/mail";
import { buildContactEmail, getDeltaLogoAttachment } from "@/lib/contact-email";
import { site } from "@/lib/site";

type ContactBody = {
  name?: string;
  company?: string;
  cnpj?: string;
  email?: string;
  phone?: string;
  regime?: string;
  employees?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Dados inválidos." }, { status: 400 });
  }

  const name = body.name?.trim() || "";
  const company = body.company?.trim() || "";
  const phone = body.phone?.trim() || "";

  if (!name || !company || !phone) {
    return NextResponse.json(
      { ok: false, error: "Preencha nome, empresa e telefone." },
      { status: 400 }
    );
  }

  const lead = {
    name,
    company,
    cnpj: body.cnpj?.trim() || "",
    email: body.email?.trim() || "",
    phone,
    regime: body.regime?.trim() || "",
    employees: body.employees?.trim() || "",
    message: body.message?.trim() || "",
  };

  try {
    const { from, to } = getMailConfig();
    const transport = createTransport();
    const { subject, text, html } = buildContactEmail(lead);
    const logo = getDeltaLogoAttachment();

    await transport.sendMail({
      from: `"${site.name}" <${from}>`,
      to,
      replyTo: lead.email || undefined,
      subject,
      text,
      html,
      attachments: logo ? [logo] : [],
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[api/contact]", error);
    return NextResponse.json(
      { ok: false, error: "Não foi possível enviar. Tente novamente." },
      { status: 500 }
    );
  }
}
