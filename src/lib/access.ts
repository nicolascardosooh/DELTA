export const ACCESS_COOKIE = "delta_preview_access";
export const ACCESS_COOKIE_VALUE = "delta-preview-ok";

/**
 * Senha de pré-visualização.
 * Vazio = site público (sem /gate).
 * Defina SITE_ACCESS_PASSWORD no .env apenas se quiser fechar o preview de novo.
 */
export function getSitePassword() {
  return process.env.SITE_ACCESS_PASSWORD || "";
}

export const ACCESS_MAX_AGE = 60 * 60 * 24 * 30; // 30 dias
