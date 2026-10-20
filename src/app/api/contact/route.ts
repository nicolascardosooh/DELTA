import { NextResponse } from "next/server";
import { createTransport, getMailConfig } from "@/lib/mail";

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

  try {
    const { from, to } = getMailConfig();
    const transport = createTransport();

    const lines = [
      `Nome: ${name}`,
      `Empresa: ${company}`,
      `CNPJ: ${body.cnpj?.trim() || "—"}`,
      `E-mail do lead: ${body.email?.trim() || "—"}`,
      `Telefone: ${phone}`,
      `Regime: ${body.regime?.trim() || "—"}`,
      `Funcionários: ${body.employees?.trim() || "—"}`,
      "",
      body.message?.trim() || "",
    ].join("\n");

    await transport.sendMail({
      from: `"Delta Site" <${from}>`,
      to,
      replyTo: body.email?.trim() || undefined,
      subject: `Quero ser cliente — ${company}`,
      text: lines,
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
