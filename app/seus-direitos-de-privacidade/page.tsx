import type { Metadata } from "next";
import LegalLayout from "@/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Seus Direitos de Privacidade — AKIRAL",
  description:
    "Conheça os direitos garantidos pela LGPD (Lei nº 13.709/2018) sobre seus dados pessoais e saiba como exercê-los junto à AKIRAL.",
};

/* ── Icon SVGs ─────────────────────────────────────────────── */
function IconConfirm() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7.5" stroke="#F26522" strokeWidth="1.2" />
      <path d="M5.5 9.5L7.5 11.5L12.5 6.5" stroke="#F26522" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconAccess() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2.5" y="4.5" width="13" height="10" rx="1.5" stroke="#F26522" strokeWidth="1.2" />
      <path d="M6 8.5h6M6 11h4" stroke="#F26522" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
function IconEdit() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3.5 14.5L6.5 13L13.5 6L12 4.5L5 11.5L3.5 14.5Z" stroke="#F26522" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M12 4.5L13.5 6" stroke="#F26522" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
function IconAnon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="7" r="3.5" stroke="#F26522" strokeWidth="1.2" />
      <path d="M3.5 15c0-3.038 2.462-5.5 5.5-5.5s5.5 2.462 5.5 5.5" stroke="#F26522" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M12.5 3.5L14.5 5.5M13 5L15 3" stroke="#F26522" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
function IconPort() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3.5 9H14.5M10.5 5L14.5 9L10.5 13" stroke="#F26522" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconDelete() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M4.5 6.5h9M7.5 6.5V4.5h3v2M8 9v4M10 9v4" stroke="#F26522" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 6.5l.75 8h6.5l.75-8" stroke="#F26522" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconShare() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="14" cy="4" r="2" stroke="#F26522" strokeWidth="1.2" />
      <circle cx="4" cy="9" r="2" stroke="#F26522" strokeWidth="1.2" />
      <circle cx="14" cy="14" r="2" stroke="#F26522" strokeWidth="1.2" />
      <path d="M6 8L12 5M6 10L12 13" stroke="#F26522" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
function IconRevoke() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 3.5C6.515 3.5 4.5 5.515 4.5 8" stroke="#F26522" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M4.5 8V5.5H2" stroke="#F26522" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 14.5c2.485 0 4.5-2.015 4.5-4.5" stroke="#F26522" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M13.5 10v2.5H16" stroke="#F26522" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5 11.5L11.5 6.5" stroke="#F26522" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
function IconPetition() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="3.5" y="2.5" width="11" height="13" rx="1.5" stroke="#F26522" strokeWidth="1.2" />
      <path d="M6.5 6h5M6.5 8.5h5M6.5 11h3" stroke="#F26522" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
function IconOppose() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7.5" stroke="#F26522" strokeWidth="1.2" />
      <path d="M6 6l6 6M12 6l-6 6" stroke="#F26522" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

const rights = [
  {
    icon: <IconConfirm />,
    article: "Art. 18, I",
    title: "Confirmação da existência de tratamento",
    short: "Direito de saber se seus dados são tratados",
    body: "Você tem o direito de obter da AKIRAL a confirmação de que seus dados pessoais são ou não objeto de tratamento. Isso inclui o direito de saber se a AKIRAL coleta, armazena, utiliza, compartilha ou realiza qualquer outra operação com informações que possam identificá-lo direta ou indiretamente.",
    detail: "Esse direito existe independentemente de qualquer outro — é o ponto de partida para o exercício de todos os demais. A confirmação pode ser solicitada de forma simplificada ou completa, e deve ser respondida de imediato ou no prazo de 15 dias úteis, conforme a ANPD regulamentar.",
  },
  {
    icon: <IconAccess />,
    article: "Art. 18, II",
    title: "Acesso aos dados pessoais",
    short: "Direito de consultar os dados que temos sobre você",
    body: "Você pode solicitar à AKIRAL acesso completo aos dados pessoais que mantemos sobre você. Isso inclui informações sobre quais dados são tratados, como foram coletados, onde estão armazenados, por quanto tempo serão mantidos e com quem foram compartilhados.",
    detail: "Mediante solicitação, forneceremos uma cópia dos seus dados pessoais em formato claro e legível, sem custos para o titular, salvo nas hipóteses em que as solicitações sejam manifestamente infundadas, excessivas ou repetitivas, conforme previsto na LGPD.",
  },
  {
    icon: <IconEdit />,
    article: "Art. 18, III",
    title: "Correção de dados incompletos, inexatos ou desatualizados",
    short: "Direito de corrigir informações incorretas",
    body: "Caso identifique que os dados pessoais que a AKIRAL mantém sobre você estão incorretos, incompletos ou desatualizados, você tem o direito de solicitar sua correção ou atualização imediata.",
    detail: "A AKIRAL adotará as providências necessárias para corrigir os dados de forma ágil e proporcional, comunicando eventuais dificuldades técnicas ou operacionais que possam impactar o prazo de atendimento da solicitação. A manutenção de dados precisos é também do interesse da Empresa, pois garante a qualidade dos serviços prestados.",
  },
  {
    icon: <IconAnon />,
    article: "Art. 18, IV",
    title: "Anonimização, bloqueio ou eliminação de dados desnecessários",
    short: "Direito de limitar o uso de dados excessivos",
    body: "Você pode solicitar a anonimização, o bloqueio ou a eliminação de dados pessoais que sejam desnecessários, excessivos ou tratados em desconformidade com as disposições da LGPD. Isso se aplica especialmente a dados coletados com base em consentimento e que não sejam mais necessários para a finalidade original.",
    detail: "A AKIRAL avaliará a solicitação à luz das finalidades do tratamento e das obrigações legais vigentes. Caso exista obrigação legal de manutenção dos dados, informaremos o titular sobre a impossibilidade de eliminar ou anonimizar determinados dados, indicando o fundamento jurídico aplicável.",
  },
  {
    icon: <IconPort />,
    article: "Art. 18, V",
    title: "Portabilidade dos dados",
    short: "Direito de transferir seus dados para outro prestador",
    body: "Você tem o direito de solicitar a portabilidade dos seus dados pessoais a outro fornecedor de serviço ou produto, mediante requisição expressa, observados os segredos comercial e industrial da AKIRAL e as regulamentações da ANPD.",
    detail: "A portabilidade será realizada em formato estruturado, de uso comum e leitura automatizada, permitindo que o titular leve seus dados consigo ao migrar para outro prestador de serviços compatível. Esse direito contribui para a livre concorrência e para a autonomia do titular sobre suas informações.",
  },
  {
    icon: <IconDelete />,
    article: "Art. 18, VI",
    title: "Eliminação de dados tratados com consentimento",
    short: "Direito de pedir a exclusão de dados baseados no seu consentimento",
    body: "Quando o tratamento de dados pessoais tiver como base legal o consentimento do titular, você pode solicitar a eliminação desses dados a qualquer momento, independentemente da apresentação de justificativa.",
    detail: "Após o recebimento da solicitação, a AKIRAL procederá com a eliminação dos dados no prazo regulamentar, salvo nas hipóteses em que a lei exija ou autorize a manutenção dos dados, como para cumprimento de obrigação legal, exercício regular de direitos ou legítimo interesse, casos em que o titular será devidamente informado.",
  },
  {
    icon: <IconShare />,
    article: "Art. 18, VII",
    title: "Informação sobre compartilhamento de dados",
    short: "Direito de saber com quem seus dados foram compartilhados",
    body: "Você tem o direito de obter informações claras e completas sobre as entidades públicas e privadas com as quais a AKIRAL compartilhou ou pode compartilhar seus dados pessoais.",
    detail: "Mediante solicitação, informaremos a identidade dos destinatários dos dados, as finalidades do compartilhamento, as bases legais utilizadas e as garantias de proteção exigidas dos destinatários. Essa transparência é fundamental para que o titular compreenda o fluxo de suas informações e possa exercer seus demais direitos com embasamento.",
  },
  {
    icon: <IconRevoke />,
    article: "Art. 18, IX",
    title: "Revogação do consentimento",
    short: "Direito de retirar seu consentimento a qualquer momento",
    body: "Quando o tratamento de dados for realizado com base no seu consentimento, você tem o direito de revogá-lo a qualquer momento, de forma gratuita e facilitada, sem que isso prejudique a licitude do tratamento realizado anteriormente.",
    detail: "A revogação do consentimento produz efeitos a partir do momento em que é comunicada à AKIRAL, não retroagindo para tornar ilícito o tratamento realizado antes da revogação. Nos casos em que o tratamento seja necessário para execução de contrato ou cumprimento de obrigação legal, o término do consentimento não impedirá a AKIRAL de continuar tratando os dados com fundamento nessas outras bases legais.",
  },
  {
    icon: <IconOppose />,
    article: "Art. 18, § 2º",
    title: "Oposição ao tratamento",
    short: "Direito de se opor ao uso dos seus dados",
    body: "Você pode se opor ao tratamento de seus dados pessoais quando este for realizado com base no legítimo interesse da AKIRAL ou em outras hipóteses legais que não exijam seu consentimento, nos casos em que o tratamento não observe as disposições da LGPD.",
    detail: "A AKIRAL avaliará a solicitação de oposição e, salvo se demonstrar que existem motivos legítimos e imperiosos para o tratamento que se sobreponham aos interesses, direitos e liberdades do titular, cessará o tratamento dos dados objeto da oposição.",
  },
  {
    icon: <IconPetition />,
    article: "Art. 18, § 1º",
    title: "Petição à Autoridade Nacional de Proteção de Dados",
    short: "Direito de recorrer à ANPD",
    body: "Caso considere que seus direitos como titular de dados não estão sendo adequadamente respeitados pela AKIRAL, você tem o direito de peticionar à Autoridade Nacional de Proteção de Dados (ANPD), órgão federal responsável pela fiscalização e pela aplicação da LGPD no Brasil.",
    detail: "A ANPD é o órgão competente para receber denúncias, investigar práticas de tratamento de dados e aplicar sanções administrativas nos casos de infração à LGPD. O exercício desse direito não depende de esgotamento das instâncias internas da Empresa e pode ser realizado diretamente no portal oficial da ANPD (gov.br/anpd).",
  },
];

export default function SeusDireitosPage() {
  return (
    <LegalLayout
      title="Seus Direitos de Privacidade"
      subtitle="Conheça os direitos que a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018) garante a você como titular de dados pessoais."
      lastUpdated="02 de março de 2026"
      breadcrumb="Direitos de Privacidade"
    >

      {/* ── Intro ── */}
      <section className="legal-section" id="introducao">
        <p className="legal-label">LGPD — Lei nº 13.709/2018</p>
        <h2 className="legal-h2">Você é o titular dos seus dados</h2>
        <p className="legal-p">
          A <strong>Lei Geral de Proteção de Dados (LGPD)</strong>, em vigor desde setembro de 2020, estabelece um conjunto robusto de direitos para toda pessoa natural cujos dados pessoais são tratados por empresas e organizações no Brasil. Esses direitos refletem o princípio fundamental de que os dados pessoais pertencem ao seu titular — não à empresa que os coleta ou utiliza.
        </p>
        <p className="legal-p">
          A AKIRAL reconhece e respeita plenamente esses direitos. Esta página explica de forma clara e objetiva cada um dos direitos garantidos pela LGPD e como você pode exercê-los junto à nossa Empresa.
        </p>

        <div className="legal-callout">
          <p>
            <strong>Art. 17 da LGPD:</strong> Toda pessoa natural tem assegurada a titularidade de seus dados pessoais e garantidos os direitos fundamentais de liberdade, de intimidade e de privacidade, nos termos desta Lei.
          </p>
        </div>
      </section>

      {/* ── Rights cards ── */}
      <section className="legal-section" id="direitos">
        <p className="legal-label">Direitos garantidos</p>
        <h2 className="legal-h2">Os 10 direitos do titular de dados</h2>
        <p className="legal-p" style={{ marginBottom: "2rem" }}>
          O art. 18 da LGPD assegura ao titular os seguintes direitos em relação aos seus dados pessoais tratados pela AKIRAL:
        </p>

        {rights.map((r, i) => (
          <div key={i} className="legal-right-card" id={`direito-${i + 1}`}>
            <div className="legal-right-card-header">
              <div className="legal-right-card-icon">
                {r.icon}
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.2rem" }}>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.12em", color: "#F26522", background: "rgba(242,101,34,0.08)", border: "1px solid rgba(242,101,34,0.2)", borderRadius: "3px", padding: "0.15rem 0.45rem" }}>
                    {r.article}
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em", color: "#4B5563" }}>
                    Direito {i + 1}/10
                  </span>
                </div>
                <p className="legal-right-card-title">{r.title}</p>
              </div>
            </div>
            <p className="legal-right-card-body">{r.body}</p>
            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "0.8125rem", color: "#6B7280", lineHeight: 1.75, marginTop: "0.75rem", paddingTop: "0.75rem", borderTop: "1px solid #16181C" }}>
              {r.detail}
            </p>
          </div>
        ))}
      </section>

      {/* ── Prazos e processo ── */}
      <section className="legal-section" id="como-exercer">
        <p className="legal-label">Como agir</p>
        <h2 className="legal-h2">Como exercer seus direitos</h2>
        <p className="legal-p">
          O exercício dos direitos listados acima é simples, gratuito e pode ser realizado a qualquer momento. Para enviar uma solicitação à AKIRAL relacionada ao tratamento dos seus dados pessoais, utilize exclusivamente o canal oficial de privacidade:
        </p>

        <div className="legal-contact-box">
          <p className="legal-contact-box-title">Canal Oficial de Privacidade — DPO / Encarregado de Dados</p>
          <a href="mailto:privacidade@akiral.com" className="legal-contact-email">privacidade@akiral.com</a>
          <p className="legal-p" style={{ marginTop: "0.875rem", marginBottom: 0, fontSize: "0.875rem" }}>
            Inclua na sua mensagem: <strong>nome completo</strong>, <strong>e-mail de contato</strong>, <strong>tipo de solicitação</strong> (ex: acesso, correção, exclusão) e, quando aplicável, uma descrição clara do que está sendo solicitado.
          </p>
        </div>

        <h3 className="legal-h3">Prazos de resposta</h3>
        <ul className="legal-ul">
          <li><strong>Confirmação e acesso simplificado:</strong> resposta imediata ou no primeiro formato de resposta disponível, conforme art. 19, I, da LGPD;</li>
          <li><strong>Acesso completo, correção, portabilidade e demais direitos:</strong> até <strong>15 (quinze) dias úteis</strong> a partir do recebimento da solicitação;</li>
          <li><strong>Casos complexos ou de alto volume:</strong> o prazo poderá ser prorrogado mediante comunicação expressa ao titular, com justificativa.</li>
        </ul>

        <h3 className="legal-h3">O que acontece após a solicitação</h3>
        <p className="legal-p">
          Após o recebimento da solicitação, a AKIRAL poderá solicitar a confirmação da identidade do titular por meio de verificação de e-mail ou apresentação de documento, visando garantir a segurança dos dados e prevenir solicitações fraudulentas. A verificação de identidade é uma medida de proteção ao próprio titular, não um obstáculo ao exercício de seus direitos.
        </p>
        <p className="legal-p">
          A AKIRAL responderá a todas as solicitações, mesmo quando não for possível atendê-las integralmente. Nesse caso, informaremos o motivo da impossibilidade e, quando aplicável, indicaremos os fundamentos legais que justificam a manutenção do tratamento dos dados.
      </p>

        <h3 className="legal-h3">Gratuidade</h3>
        <p className="legal-p">
          O exercício dos direitos previstos na LGPD é <strong>gratuito</strong> para o titular. A AKIRAL não cobra qualquer taxa para processar solicitações de acesso, correção, eliminação, portabilidade ou qualquer outro direito previsto no art. 18 da LGPD, salvo nas hipóteses de solicitações manifestamente infundadas, excessivas ou repetitivas, situação em que poderá ser cobrada taxa razoável ou recusado o atendimento, nos termos da legislação aplicável.
        </p>
      </section>

      {/* ── ANPD ── */}
      <section className="legal-section" id="anpd">
        <p className="legal-label">Regulação</p>
        <h2 className="legal-h2">Autoridade Nacional de Proteção de Dados</h2>
        <p className="legal-p">
          A <strong>Autoridade Nacional de Proteção de Dados (ANPD)</strong> é o órgão federal responsável por zelar pela proteção dos dados pessoais e por garantir a aplicação da LGPD em todo o território nacional. A ANPD possui poderes normativos, investigatórios e sancionatórios em relação ao tratamento de dados pessoais por entidades públicas e privadas.
        </p>
        <p className="legal-p">
          Caso considere que seus direitos não foram devidamente observados após contato com a AKIRAL, você poderá registrar sua solicitação ou reclamação diretamente à ANPD, sem necessidade de esgotamento prévio dos meios internos da Empresa.
        </p>

        <div className="legal-callout">
          <p>
            <strong>Portal da ANPD:</strong>{" "}
            <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" style={{ color: "#F26522", textDecoration: "none" }}>
              gov.br/anpd
            </a>
            {" "}— Acesse para registrar reclamações, consultar regulamentações e acompanhar os atos normativos da Autoridade.
          </p>
        </div>
      </section>

      {/* ── Glossário ── */}
      <section className="legal-section" id="glossario">
        <p className="legal-label">Referência</p>
        <h2 className="legal-h2">Glossário essencial</h2>
        <p className="legal-p">Termos técnicos utilizados nesta página, conforme definições da LGPD (art. 5º):</p>

        <h3 className="legal-h3">Dado pessoal</h3>
        <p className="legal-p">Informação relacionada a pessoa natural identificada ou identificável — como nome, e-mail, CPF, endereço IP ou qualquer combinação de dados que permita identificar alguém.</p>

        <h3 className="legal-h3">Dado pessoal sensível</h3>
        <p className="legal-p">Dado sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico.</p>

        <h3 className="legal-h3">Titular</h3>
        <p className="legal-p">Pessoa natural a quem se referem os dados pessoais que são objeto de tratamento — ou seja, você, o usuário.</p>

        <h3 className="legal-h3">Controlador</h3>
        <p className="legal-p">Pessoa natural ou jurídica, de direito público ou privado, a quem competem as decisões referentes ao tratamento de dados pessoais. No contexto deste site, o controlador é a AKIRAL.</p>

        <h3 className="legal-h3">Tratamento</h3>
        <p className="legal-p">Qualquer operação realizada com dados pessoais: coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação, modificação, comunicação, transferência ou extração.</p>

        <h3 className="legal-h3">Consentimento</h3>
        <p className="legal-p">Manifestação livre, informada e inequívoca pela qual o titular concorda com o tratamento de seus dados pessoais para uma finalidade determinada.</p>

        <h3 className="legal-h3">Anonimização</h3>
        <p className="legal-p">Utilização de meios técnicos razoáveis e disponíveis no momento do tratamento que resulta no fato de um dado perder a possibilidade de associação, direta ou indireta, a um indivíduo.</p>

        <h3 className="legal-h3">Encarregado (DPO)</h3>
        <p className="legal-p">Pessoa indicada pelo controlador para atuar como canal de comunicação entre o controlador, os titulares dos dados e a Autoridade Nacional de Proteção de Dados (ANPD).</p>
      </section>

      {/* ── Final CTA ── */}
      <section className="legal-section" id="contato-final">
        <p className="legal-label">Contato</p>
        <h2 className="legal-h2">Precisa de ajuda?</h2>
        <p className="legal-p">
          Nossa equipe de privacidade está disponível para responder suas dúvidas, orientar sobre o exercício dos seus direitos e processar suas solicitações com agilidade e transparência.
        </p>
        <div className="legal-contact-box">
          <p className="legal-contact-box-title">Encarregado de Proteção de Dados — AKIRAL</p>
          <a href="mailto:privacidade@akiral.com" className="legal-contact-email">privacidade@akiral.com</a>
          <p className="legal-p" style={{ marginTop: "0.75rem", marginBottom: 0, fontSize: "0.875rem" }}>
            Tempo de resposta: até <strong>15 dias úteis</strong>. Atendimento em português.
          </p>
        </div>
        <p className="legal-p" style={{ marginTop: "1.5rem" }}>
          Consulte também nossa{" "}
          <a href="/termos-e-privacidade" style={{ color: "#F26522", textDecoration: "none" }}>
            Política de Privacidade completa
          </a>{" "}
          para entender em detalhe como tratamos seus dados pessoais.
        </p>
      </section>

    </LegalLayout>
  );
}
