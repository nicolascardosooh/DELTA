# DELTA — publicação na VPS

Site da Delta Assessoria (`deltars.com.br`). Este arquivo é a referência para subir versão nova sem precisar redescobrir servidor, porta, nginx e senha.

## Servidor

| Item | Valor |
|---|---|
| IP | `72.62.104.148` |
| Usuário SSH | `root` |
| Chave | `C:\Users\nicolas\.ssh\id_ed25519_vps` |
| Código no servidor | `/root/sites/delta` |
| Repositório | https://github.com/nicolascardosooh/DELTA (`main`) |
| Container | `delta_web` |
| Imagem | `delta-web` |
| Porta | **5000** (`5000:5000`) |
| Rede Docker | `shared_net` (externa, a mesma do nginx) |
| Compose | `/root/sites/delta/docker-compose.yml` |
| Senha do site | arquivo `/root/sites/delta/.env`, chave `SITE_ACCESS_PASSWORD` |
| Valor atual da senha | `@D3LT4@0910` |

Não usar as faixas **3000–3010** (homologação) nem **4000–4006** (produção TechPozz). Sites de clientes começam em **5000**.

O firewall da VPS só libera 22, 80 e 443 para a internet. A porta 5000 existe no host para o Docker, mas o acesso público entra pelo nginx.

## Domínio e DNS

Domínio: `deltars.com.br` e `www.deltars.com.br`.

DNS na Cloudflare (nameservers `vin.ns.cloudflare.com` e `monika.ns.cloudflare.com`):

| Registro | Tipo | Conteúdo | Proxy |
|---|---|---|---|
| `deltars.com.br` | A | `72.62.104.148` | **Somente DNS** (nuvem cinza) |
| `www.deltars.com.br` | CNAME | `deltars.com.br` | **Somente DNS** (nuvem cinza) |

A nuvem laranja (Com proxy) faz o navegador ir para IPs da Cloudflare. Desta rede essa ligação estoura o tempo (`ERR_CONNECTION_TIMED_OUT`). Com a nuvem cinza o domínio cai direto na VPS, onde o HTTPS já funciona.

Não alterar os registros de e-mail. Eles continuam na Hostinger:

- MX `mx1.hostinger.com` (prioridade 5) e `mx2.hostinger.com` (prioridade 10)
- TXT SPF `v=spf1 include:_spf.mail.hostinger.com ~all`
- TXT DMARC
- CNAMEs `autoconfig`, `autodiscover` e `hostingermail-*._domainkey`
- `ftp.deltars.com.br` aponta para `31.170.167.199` (Hostinger), não para esta VPS

## Nginx e certificado

Nginx compartilhado da VPS, container `nginx-nginx-1`.

- Config ativa: `/root/nginx/conf.d/deltars.conf`
- Cópia no repositório: `deploy/nginx/deltars.conf`
- A porta 80 entrega o site e o desafio do Let's Encrypt. Não redirecionar 80 → 443 na origem enquanto a Cloudflare estiver no modo Flexible: isso gera loop.
- HTTPS no nginx: `/etc/letsencrypt/live/deltars.com.br/fullchain.pem` e `privkey.pem`
- Certificado atual: Let's Encrypt, `CN=deltars.com.br`, válido de 9 out 2026 até **7 jan 2027**
- Renovação: container `nginx-certbot-1` roda `certbot renew` a cada 12 horas. O nginx recarrega a cada 6 horas e passa a usar o certificado novo.

Recarregar o nginx depois de mudar o `.conf`:

```bash
docker exec nginx-nginx-1 nginx -t && docker exec nginx-nginx-1 nginx -s reload
```

## Senha de pré-visualização

A variável é `SITE_ACCESS_PASSWORD`. O middleware do Next.js grava o valor **no build**. Mudar só o `.env` e reiniciar o container não altera a senha: é preciso `docker compose up -d --build`.

- `.env` vazio publica o site sem a tela `/gate`.
- Sem a variável, o código usa o padrão `@D3LT4@0910`.
- Em produção o arquivo é `/root/sites/delta/.env` (permissão 600). Esse arquivo não entra na imagem (está no `.dockerignore`). O compose lê o `.env` e passa o valor como build-arg e como variável de runtime.

## Subir uma versão que já está no GitHub

Na VPS, preservando a senha:

```bash
cp /root/sites/delta/.env /tmp/delta.env
rm -rf /root/sites/delta-new
git clone --depth 1 https://github.com/nicolascardosooh/DELTA.git /root/sites/delta-new
cp /tmp/delta.env /root/sites/delta-new/.env
chmod 600 /root/sites/delta-new/.env
cd /root/sites/delta-new
docker compose up -d --build
rm -rf /root/sites/delta
mv /root/sites/delta-new /root/sites/delta
```

Do Windows, o SSH é:

```powershell
ssh -i "C:\Users\nicolas\.ssh\id_ed25519_vps" root@72.62.104.148
```

Conferir:

```bash
git -C /root/sites/delta rev-parse --short HEAD
curl -s -o /dev/null -w "%{http_code} %{redirect_url}\n" -H "Host: deltars.com.br" http://127.0.0.1/
```

Sem cookie, a home responde **307** para `/gate?next=/`. A senha certa no `POST /api/gate` responde `{"ok":true}`.
