export const site = {
  name: "Delta",
  fullName: "Delta Serviços Contábeis LTDA",
  legalName: "Delta Serviços Contábeis LTDA",
  cnpj: "30.811.606/0001-78",
  tagline:
    "Assessoria contábil em Triunfo/RS — precisão nos números, proximidade no atendimento.",
  heroTitle: "Clareza contábil para decidir com segurança",
  whatsapp: [
    {
      display: "(51) 9209-6630",
      href: "https://wa.me/555192096630",
    },
  ],
  address: {
    line1: "Estrada BR 386, KM 411 - Vendinha",
    line2: "Triunfo - RS, 95840-000",
    full: "Estrada BR 386, KM 411 - Vendinha, Triunfo-RS, 95840-000",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Estrada+BR+386+KM+411+Vendinha+Triunfo+RS",
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.2!2d-51.719258!3d-29.929528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951973ad52ba06ef%3A0x7405e2d4c26c456b!2sBR-386%2C%20km%20411%20-%20Vendinha%2C%20Triunfo%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1712943012345",
  },
  hours: "Segunda a Sexta: 8h às 12h e 13h às 17h",
  instagram: "https://www.instagram.com/deltarscontabilidade/",
  nav: [
    { name: "Início", href: "/" },
    { name: "A Delta", href: "/A-DELTA" },
    { name: "Serviços", href: "/Servicos" },
    { name: "Contato", href: "/Contato" },
  ],
  specialties: [
    {
      title: "Contabilidade para empresas",
      description:
        "Empresas físicas ou online, de produtos ou serviços — assessoria contábil e fiscal eficiente para o seu negócio crescer com segurança.",
    },
    {
      title: "Contabilidade para pessoas físicas",
      description:
        "Pessoa física ou profissional liberal: mantenha-se em dia com as obrigações contábeis e fiscais e foque no que importa no seu dia a dia.",
    },
  ],
  services: [
    {
      title: "Contabilidade",
      description:
        "Consultoria e execução completa para a gestão contábil e planejamento tributário da sua empresa.",
    },
    {
      title: "Financeiro",
      description: "Terceirização do financeiro para organizar o fluxo de caixa e a rotina da empresa.",
    },
    {
      title: "Fiscal",
      description:
        "Consultoria e execução completa para obrigações fiscais e planejamento fiscal.",
    },
    {
      title: "Folha de pagamento",
      description: "Elaboração e processamento completo de folha de pagamento e encargos.",
    },
    {
      title: "Abertura de empresa",
      description:
        "Orientação para MEI, ME, LTDA, S/A e holdings — da escolha do regime à formalização.",
    },
    {
      title: "Registro de marca",
      description: "Proteja os interesses da empresa. Saiba o que é preciso para fazer o registro.",
    },
    {
      title: "Imposto de renda PF",
      description: "Ajuda completa para declarar o imposto de renda de pessoa física.",
    },
    {
      title: "Planejamento tributário",
      description: "Reduza de forma legal a carga tributária e evite penalidades.",
    },
    {
      title: "Regularização societária",
      description: "Agilidade nos processos societários, com praticidade e menor custo.",
    },
  ],
  journey: [
    {
      step: "1",
      title: "Conversa inicial",
      description: "Entendemos o momento da sua empresa e o que precisa ser resolvido.",
    },
    {
      step: "2",
      title: "Transição organizada",
      description: "Cuidamos da mudança de escritório com calma — você acompanha sem atrito.",
    },
    {
      step: "3",
      title: "Rotina com a Delta",
      description: "Processos claros, prazos definidos e um canal direto com a equipe.",
    },
  ],
  essence: [
    {
      title: "Gestão estratégica",
      description:
        "Mais do que números: ajudamos você a tomar decisões com informações ágeis e seguras.",
    },
    {
      title: "Tecnologia",
      description:
        "Ferramentas modernas para otimizar processos e manter a contabilidade atualizada com segurança.",
    },
    {
      title: "Atendimento diferenciado",
      description:
        "Entendemos as dificuldades do seu negócio e oferecemos suporte próximo e objetivo.",
    },
  ],
  stats: [
    { value: "", label: "Anos de empresa" },
    { value: "", label: "Colaboradores" },
    { value: "", label: "Clientes atendidos" },
    { value: "", label: "Satisfação" },
  ],
} as const;

export const primaryWhatsApp = site.whatsapp[0].href;

export function whatsappWithText(text: string) {
  return `${primaryWhatsApp}?text=${encodeURIComponent(text)}`;
}
