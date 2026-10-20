import fs from "fs";
import path from "path";
import { site } from "@/lib/site";

export type ContactLead = {
  name: string;
  company: string;
  cnpj: string;
  email: string;
  phone: string;
  regime: string;
  employees: string;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string) {
  const safe = escapeHtml(value || "—");
  return `
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #e8eaee;width:34%;vertical-align:top;font-size:12px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;color:#6b7280;font-family:Arial,Helvetica,sans-serif;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:12px 16px;border-bottom:1px solid #e8eaee;vertical-align:top;font-size:15px;color:#1c2430;font-family:Arial,Helvetica,sans-serif;line-height:1.45;">
        ${safe}
      </td>
    </tr>`;
}

export function getDeltaLogoAttachment() {
  const candidates = [
    path.join(process.cwd(), "public", "images", "logodelta.png"),
    path.join(process.cwd(), "images", "logodelta.png"),
  ];
  for (const filePath of candidates) {
    if (fs.existsSync(filePath)) {
      return {
        filename: "logodelta.png",
        path: filePath,
        cid: "delta-logo",
      };
    }
  }
  return null;
}

export function buildContactEmail(lead: ContactLead) {
  const when = new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    dateStyle: "short",
    timeStyle: "short",
  });

  const subject = `Nova solicitação — ${lead.company}`;

  const text = [
    `${site.fullName}`,
    `Nova solicitação pelo site`,
    ``,
    `Nome: ${lead.name}`,
    `Empresa: ${lead.company}`,
    `CNPJ: ${lead.cnpj || "—"}`,
    `E-mail: ${lead.email || "—"}`,
    `Telefone: ${lead.phone}`,
    `Tributação: ${lead.regime || "—"}`,
    `Funcionários: ${lead.employees || "—"}`,
    ``,
    `Mensagem:`,
    lead.message || "—",
    ``,
    `Recebido em: ${when}`,
    `WhatsApp Delta: ${site.whatsapp[0].display}`,
  ].join("\n");

  const logoBlock = getDeltaLogoAttachment()
    ? `<img src="cid:delta-logo" alt="${escapeHtml(site.name)}" width="56" height="56" style="display:block;border:0;border-radius:50%;background:#ffffff;padding:4px;" />`
    : `<div style="width:56px;height:56px;border-radius:50%;background:#ffffff;color:#3a4f6f;font-family:Arial,Helvetica,sans-serif;font-weight:700;font-size:18px;line-height:56px;text-align:center;">Δ</div>`;

  const messageHtml = lead.message
    ? escapeHtml(lead.message).replace(/\n/g, "<br/>")
    : "—";

  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background:#eef0f3;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef0f3;padding:28px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;background:#ffffff;border:1px solid #dde1e7;overflow:hidden;">
          <tr>
            <td style="background:#3a4f6f;padding:28px 28px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="64" valign="middle">${logoBlock}</td>
                  <td valign="middle" style="padding-left:14px;">
                    <div style="font-family:Arial,Helvetica,sans-serif;font-size:22px;font-weight:700;letter-spacing:0.12em;color:#ffffff;">DELTA</div>
                    <div style="margin-top:4px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:rgba(255,255,255,0.75);">Serviços Contábeis</div>
                  </td>
                </tr>
              </table>
              <div style="margin-top:22px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:rgba(255,255,255,0.65);">
                Site · Contato
              </div>
              <div style="margin-top:8px;font-family:Arial,Helvetica,sans-serif;font-size:22px;font-weight:700;color:#ffffff;line-height:1.25;">
                Nova solicitação de cliente
              </div>
              <div style="margin-top:8px;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:rgba(255,255,255,0.8);">
                Recebido em ${escapeHtml(when)}
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:28px 28px 8px;">
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:#3a4f6f;">
                Dados do lead
              </div>
              <div style="margin-top:6px;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#6b7280;line-height:1.5;">
                Informações enviadas pelo formulário do site.
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:12px 28px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8eaee;background:#fafbfc;">
                ${row("Nome", lead.name)}
                ${row("Empresa", lead.company)}
                ${row("CNPJ", lead.cnpj)}
                ${row("E-mail", lead.email)}
                ${row("Telefone", lead.phone)}
                ${row("Tributação", lead.regime)}
                ${row("Funcionários", lead.employees)}
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:20px 28px 8px;">
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:#3a4f6f;">
                Mensagem
              </div>
              <div style="margin-top:10px;padding:16px 18px;border-left:3px solid #3a4f6f;background:#f4f6f9;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#1c2430;line-height:1.6;">
                ${messageHtml}
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:24px 28px 28px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#3a4f6f;">
                    <a href="${site.whatsapp[0].href}" style="display:inline-block;padding:12px 20px;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;color:#ffffff;text-decoration:none;">
                      Falar no WhatsApp ${escapeHtml(site.whatsapp[0].display)}
                    </a>
                  </td>
                </tr>
              </table>
              ${
                lead.email
                  ? `<div style="margin-top:12px;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#6b7280;">
                      Responder ao lead: <a href="mailto:${escapeHtml(lead.email)}" style="color:#3a4f6f;text-decoration:none;font-weight:600;">${escapeHtml(lead.email)}</a>
                    </div>`
                  : ""
              }
            </td>
          </tr>

          <tr>
            <td style="background:#f4f6f9;border-top:1px solid #e8eaee;padding:18px 28px;">
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;color:#3a4f6f;">
                ${escapeHtml(site.fullName)}
              </div>
              <div style="margin-top:4px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#6b7280;line-height:1.5;">
                ${escapeHtml(site.address.full)}<br/>
                CNPJ ${escapeHtml(site.cnpj)} · ${escapeHtml(site.hours)}
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, text, html };
}
