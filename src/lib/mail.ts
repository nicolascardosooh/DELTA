import nodemailer from "nodemailer";

export function getMailConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.EMAIL_FROM || user;
  const to = process.env.CONTACT_TO || "nicolascardoso1989@gmail.com";

  if (!host || !user || !pass || !from) {
    throw new Error("SMTP não configurado (SMTP_HOST, SMTP_USER, SMTP_PASS, EMAIL_FROM).");
  }

  return { host, port, user, pass, from, to };
}

export function createTransport() {
  const { host, port, user, pass } = getMailConfig();
  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}
