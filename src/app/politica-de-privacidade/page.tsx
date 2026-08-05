import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Política de Privacidade da ${site.legalName}.`,
};

const sections: { title: string; items: { n: number; text: string }[] }[] = [
  {
    title: "Diretrizes gerais",
    items: [
      {
        n: 1,
        text: "Esta Política e as correlatas práticas de privacidade e segurança da informação baseadas na Lei Geral de Proteção de Dados, Marco Civil da Internet, Código de Defesa do Consumidor, Código Civil, Constituição Federal, além das demais normas jurídicas aplicáveis, bem como nas boas práticas vigentes no mercado.",
      },
      {
        n: 2,
        text: "As práticas de privacidade da DELTA SERVICOS CONTABEIS LTDA respeitam os princípios da boa-fé, da finalidade, da adequação, da necessidade, do livre acesso, da qualidade dos dados, da transparência, da segurança, da prevenção, da não discriminação e da responsabilização, respeitando-se integralmente as regras vigentes.",
      },
    ],
  },
  {
    title: "Fornecimento de dados livre e esclarecido e opção de revogação de consentimento",
    items: [
      {
        n: 3,
        text: "Ao fornecer espontaneamente informações para contato como nome, email ou número de telefone, o usuário concorda expressamente com o recebimento de comunicação proveniente da DELTA SERVICOS CONTABEIS LTDA, incluindo-se informações relativas a marketing, negócios, estudos de caso, campanhas publicitárias e outros temas, sendo essa a finalidade do tratamento de tais dados.",
      },
      {
        n: 4,
        text: "Assim, os dados tratados pela DELTA SERVICOS CONTABEIS LTDA são, impreterivelmente, livremente fornecidos pelo usuário que optou pelo recebimento de comunicação mediante participação no chat do site, lista de email, WhatsApp, Telegram ou Facebook, dentre outros.",
      },
      {
        n: 5,
        text: "A qualquer momento, o usuário poderá optar pela revogação de consentimento de tratamento de tais dados mediante escolha por sua retirada de quaisquer ferramentas de comunicação utilizadas pela DELTA SERVICOS CONTABEIS LTDA.",
      },
      {
        n: 6,
        text: 'Eventuais conteúdos recebidos pelo usuário contarão sempre com a opção de saída ("opt-out") da respectiva ferramenta de comunicação.',
      },
      {
        n: 7,
        text: "Especificamente quanto aos emails enviados pela DELTA SERVICOS CONTABEIS LTDA, sempre haverá a opção no rodapé da mensagem para cancelamento do recebimento de mensagens e retirada da lista de emails.",
      },
      {
        n: 8,
        text: "Com relação aos demais canais de comunicação utilizados pela DELTA SERVICOS CONTABEIS LTDA, tais como grupo ou página de Facebook, WhatsApp, Telegram, dentre outros, o usuário poderá optar por sua retirada utilizando os canais pertinentes de cada plataforma, não havendo qualquer ingerência da DELTA SERVICOS CONTABEIS LTDA sobre tais mecanismos.",
      },
      {
        n: 9,
        text: 'A DELTA SERVICOS CONTABEIS LTDA utiliza ferramentas de terceiros para o envio de comunicação para seus usuários. Eventualmente, tais mecanismos podem apresentar falhas de ordem técnica relativos à opção pelo não recebimento ("opt-out") de tais emails e mensagens (não havendo qualquer ingerência ou responsabilidade da DELTA SERVICOS CONTABEIS LTDA). Em tais eventualidades, deverá ser enviado um email para GERENCIA@DELTARS.COM.BR para solicitação de auxílio; a DELTA SERVICOS CONTABEIS LTDA intermediará com o prestador do serviço para que a falha técnica seja brevemente solucionada.',
      },
    ],
  },
  {
    title: "Dados fornecidos em transação comercial",
    items: [
      {
        n: 10,
        text: "Eventualmente, o usuário que adquirir nossos serviços deverá fornecer dados pessoais sensíveis como nome completo, número de CPF ou CNPJ, endereço e dados para pagamento, além do email, para a conclusão da transação e a emissão de Nota Fiscal. A DELTA SERVICOS CONTABEIS LTDA salienta que o fornecimento de tais dados é imprescindível para a finalização da transação, sendo que o tratamento de tais dados pessoais sensíveis ocorrerá observando-se estritamente os ditames legais, e apenas em tal situação. Tais dados poderão ser mantidos em base de dados com o único fim de cumprimento de obrigações legais.",
      },
      {
        n: 11,
        text: "Nenhum número de cartão de crédito será armazenado pela DELTA SERVICOS CONTABEIS LTDA.",
      },
    ],
  },
  {
    title: "Anonimização de dados",
    items: [
      {
        n: 12,
        text: "Sempre que possível, o tratamento de dados será realizado mediante procedimento de anonimização.",
      },
    ],
  },
  {
    title: "Confidencialidade, integridade e disponibilidade no tratamento de dados",
    items: [
      {
        n: 13,
        text: "Todo procedimento de tratamento de dado conduzido pela DELTA SERVICOS CONTABEIS LTDA é realizado de maneira confidencial.",
      },
      {
        n: 14,
        text: "O acesso a qualquer informação constante em sua base de dados é permitido apenas à pessoal autorizado que necessite efetuar o tratamento de tais dados, limitando-se o acesso ao estritamente necessário para o desempenho da função correlata.",
      },
      {
        n: 15,
        text: "É vedado o acesso a qualquer dado, por qualquer colaborador ou prestador de serviço terceirizado, sem que haja necessidade para tanto.",
      },
      {
        n: 16,
        text: "Os sistemas informatizados utilizados pela DELTA SERVICOS CONTABEIS LTDA também buscam manter a integridade dos dados, assegurando-se, assim, que as informações disponíveis sejam entregues em sua plenitude.",
      },
    ],
  },
  {
    title: "Utilização de serviços de armazenamento e sistemas informatizados de terceiros",
    items: [
      {
        n: 17,
        text: 'A DELTA SERVICOS CONTABEIS LTDA poderá fazer o uso de serviços de terceiros para o armazenamento de dados, como a modalidade "em nuvem", bem como poderá utilizar sistemas informatizados de terceiros para gestão e comunicação. Em tais situações, serão observadas as boas práticas de segurança da informação baseadas nos parâmetros de confidencialidade, integridade e disponibilidade de dados.',
      },
      {
        n: 18,
        text: "Em nenhuma hipótese será concedida autorização para tratamento de dados diversos da finalidade do serviço contratado sem prévia comunicação e autorização do usuário.",
      },
      {
        n: 19,
        text: "Na eventualidade da ocorrência de falha sistêmica em base de dados de terceiros, a DELTA SERVICOS CONTABEIS LTDA envidará seus melhores esforços para manter a confidencialidade, integridade e disponibilidade dos dados eventualmente afetados. Contudo, por não possuir qualquer tipo de ingerência ou controle sobre tais situações, não poderá ser responsabilizada na eventualidade de danos.",
      },
    ],
  },
  {
    title: "Quebra de protocolo de segurança",
    items: [
      {
        n: 20,
        text: "Caso a DELTA SERVICOS CONTABEIS LTDA sofra qualquer tipo de quebra de protocolo de segurança que resulte na apropriação indevida por terceiros de qualquer parcela de sua base de dados, os usuários afetados serão imediatamente comunicados, alertando-se sobre possível ação maliciosa de terceiros.",
      },
      {
        n: 21,
        text: "Nesta eventualidade, a DELTA SERVICOS CONTABEIS LTDA envidará seus melhores esforços para manter a confidencialidade, integridade e disponibilidade dos dados eventualmente afetados. Entretanto, em tais situações, a DELTA SERVICOS CONTABEIS LTDA não poderá ser responsabilizada por ações decorrentes de tais violações performadas por terceiros, sobre as quais não possua qualquer influência, controle ou ingerência.",
      },
    ],
  },
  {
    title: "Cookies, beacons e tecnologias afins",
    items: [
      {
        n: 22,
        text: "O presente website, assim como toda e qualquer página ou subpágina, domínio ou subdomínio pertencente à DELTA SERVICOS CONTABEIS LTDA, poderá utilizar cookies, beacons e tecnologias afins para a melhoria na experiência do usuário. Em geral, tais dados não individualizam o usuário e são usados para fins de análise estatísticas.",
      },
      {
        n: 23,
        text: "Tais tecnologias poderão ser utilizadas, eventualmente, para campanhas publicitárias promovidas pela DELTA SERVICOS CONTABEIS LTDA, sempre respeitando-se as normas de regência.",
      },
      {
        n: 24,
        text: "Ainda no que tange à tais tecnologias, como pixel do Facebook e tag de Google Analytics, Google Ads, LinkedIn Ads, Bing Ads, Twitter Ads ou quaisquer outras plataformas de anúncios, tais excertos de código de programação são de responsabilidade de seus respectivos proprietários, podendo ser utilizadas tanto para fins de publicidade como de análises estatísticas.",
      },
    ],
  },
  {
    title: "Solicitações",
    items: [
      {
        n: 25,
        text: "O usuário poderá fazer solicitações relativas aos seus próprios dados, nos termos da Lei Geral de Proteção de Dados. Para tanto, será necessário enviar um pedido para GERENCIA@DELTARS.COM.BR, comprovando-se a titularidade dos dados. A resposta ocorrerá em até 15 (quinze) dias úteis.",
      },
    ],
  },
  {
    title: "Atendimento de solicitações de autoridades e cumprimento de regras de regência",
    items: [
      {
        n: 26,
        text: "A DELTA SERVICOS CONTABEIS LTDA poderá fornecer os dados de seus usuários para autoridades públicas como Delegados, Promotores, Juízes, Autoridade Nacional de Proteção de Dados ou outros atores investidos em autoridade para tanto, visando cumprir com norma, processo ou solicitação jurídica. As informações compartilhadas serão, apenas, as solicitadas pela autoridade correspondente, nos termos das regras de regência.",
      },
      {
        n: 27,
        text: "Tais dados poderão ser também utilizados pela DELTA SERVICOS CONTABEIS LTDA na eventualidade de proteger-se contra dano a direitos, propriedade ou a segurança própria, de seus usuários ou o público em geral, conforme solicitado ou permitido por lei.",
      },
    ],
  },
  {
    title: "Redirecionamento para plataformas de terceiros",
    items: [
      {
        n: 28,
        text: "Caso o usuário tenha acesso e seja redirecionado para websites ou plataformas de terceiros, esclarece-se que a DELTA SERVICOS CONTABEIS LTDA não possui qualquer ingerência sobre o conteúdo veiculado ou as práticas e políticas vigentes.",
      },
      {
        n: 29,
        text: "DELTA SERVICOS CONTABEIS LTDA não poderá, de qualquer forma, ser responsabilizada por quaisquer atos ocorridos em sites de terceiros, incluindo a presença de conteúdo malicioso como vírus.",
      },
    ],
  },
  {
    title: "Considerações finais",
    items: [
      {
        n: 30,
        text: "Caso haja o descumprimento de quaisquer cláusulas ou condições destes termos e não sejam adotadas providências imediatas, isso não implica em renúncia a quaisquer direitos existentes (como tomar providências futuras).",
      },
      {
        n: 31,
        text: "Quaisquer outras questões que não estejam expressamente regulamentadas nestes termos seguirão as normas da Lei Geral de Proteção de Dados, Código Civil, Código de Defesa do Consumidor, Marco Civil da Internet e demais normas aplicáveis, além da jurisprudência atualizada dos tribunais.",
      },
      {
        n: 32,
        text: "Fica eleito o Foro da cidade de TRIUNFO/RS, para dirimir qualquer questão relacionada a estes termos.",
      },
    ],
  },
];

export default function PoliticaPrivacidadePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-azul-delta">
            Legal
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Política de Privacidade
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            A presente Política de Privacidade regula a relação entre a empresa{" "}
            <strong className="font-semibold text-slate-800">{site.legalName}</strong>,
            inscrita no CNPJ nº {site.cnpj}, com sede à {site.address.full.toUpperCase()}, e
            os usuários de seus serviços e produtos (consumidores ou demais partes
            interessadas).
          </p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-4 text-lg font-semibold uppercase tracking-wide text-azul-delta">
                  {section.title}
                </h2>
                <ol className="space-y-4">
                  {section.items.map((item) => (
                    <li key={item.n} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                      <span className="shrink-0 font-semibold text-azul-delta">{item.n}.</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>

          <p className="mt-12 border-t border-slate-200 pt-8 text-sm text-slate-500">
            VERSÃO 1.0 — 07/09/2021 · CNPJ {site.cnpj}
          </p>

          <p className="mt-6 text-sm text-slate-600">
            Dúvidas?{" "}
            <Link href="/Contato" className="font-medium text-azul-delta hover:underline">
              Página de contato
            </Link>{" "}
            ou{" "}
            <a
              href={`mailto:${site.privacyEmail}`}
              className="font-medium text-azul-delta hover:underline"
            >
              {site.privacyEmail}
            </a>
            .
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
