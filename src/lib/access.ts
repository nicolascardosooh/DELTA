export const ACCESS_COOKIE = "delta_preview_access";
export const ACCESS_COOKIE_VALUE = "delta-preview-ok";

/**
 * Senha de pré-visualização.
 * Sem a variável, mantém a senha local de preview.
 * SITE_ACCESS_PASSWORD vazio publica o site sem a tela de senha.
 */
export function getSitePassword() {
  if (process.env.SITE_ACCESS_PASSWORD !== undefined) {
    return process.env.SITE_ACCESS_PASSWORD;
  }
  return "@D3LT4@0910";
}

export const ACCESS_MAX_AGE = 60 * 60 * 24 * 30; // 30 dias
