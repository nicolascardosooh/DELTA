export const site = {
  name: "Delta",
  fullName: "Delta Assessoria Contábil",
  legalName: "DELTA SERVICOS CONTABEIS LTDA",
  cnpj: "30.811.606/0001-78",
  tagline: "Contabilidade para decisões financeiras precisas e seguras.",
  phone: {
    display: "(51) 3657-1013",
    href: "tel:+555136571013",
  },
  whatsapp: [
    {
      display: "(51) 98243-7533",
      href: "https://wa.me/5551982437533",
    },
    {
      display: "(51) 99405-7534",
      href: "https://wa.me/5551994057534",
    },
  ],
  email: {
    display: "contato@deltars.com.br",
    href: "mailto:contato@deltars.com.br",
  },
  privacyEmail: "GERENCIA@DELTARS.COM.BR",
  address: {
    line1: "Estrada BR 386, KM 410 - Vendinha",
    line2: "Triunfo - RS, 95840-000",
    full: "Estrada BR 386, KM 410 - Vendinha, Triunfo-RS, 95840-000",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Estrada+BR+386+KM+410+Vendinha+Triunfo+RS",
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.2!2d-51.719258!3d-29.929528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951973ad52ba06ef%3A0x7405e2d4c26c456b!2sBR-386%2C%20km%20410%20-%20Vendinha%2C%20Triunfo%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1712943012345",
  },
  hours: "Segunda a Sexta: 8h às 17h",
  instagram: "https://www.instagram.com/deltarscontabilidade/",
  nav: [
    { name: "Home", href: "/" },
    { name: "A Delta", href: "/A-DELTA" },
    { name: "Clientes", href: "/Clientes" },
    { name: "Serviços", href: "/Servicos" },
    { name: "Equipe", href: "/Equipe" },
    { name: "Blog", href: "/Blog" },
    { name: "Trabalhe Conosco", href: "/Trabalhe-Conosco" },
    { name: "Contato", href: "/Contato" },
  ],
  services: [
    {
      title: "Treinamentos Empresariais",
      description: "Capacitação e desenvolvimento profissional para sua equipe",
    },
    {
      title: "Consultoria Jurídica",
      description: "Suporte legal especializado para sua empresa",
    },
    {
      title: "Ouvidoria",
      description: "Canal direto para feedback e melhorias",
    },
    {
      title: "Atendimento Online",
      description: "Suporte remoto ágil e eficiente",
    },
    {
      title: "Contabilidade e Pareceres",
      description: "Gestão contábil completa e transparente",
    },
    {
      title: "Gestão de Folha",
      description: "Administração eficiente de recursos humanos",
    },
    {
      title: "Processamento Fiscal",
      description: "Conformidade fiscal e tributária",
    },
    {
      title: "Gestão Societária",
      description: "Administração estratégica empresarial",
    },
    {
      title: "Consultorias",
      description: "Soluções personalizadas para seu negócio",
    },
  ],
} as const;

export const primaryWhatsApp = site.whatsapp[0].href;
