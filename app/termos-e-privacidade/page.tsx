import type { Metadata } from "next";
import LegalLayout from "@/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Termos & Privacidade",
  description:
    "Termos de Uso e Política de Privacidade da Akiral. Saiba como coletamos, utilizamos e protegemos seus dados, em conformidade com a LGPD e o Marco Civil da Internet.",
  alternates: {
    canonical: "https://akiral.com/termos-e-privacidade",
  },
  openGraph: {
    title: "Termos & Privacidade | Akiral",
    description:
      "Termos de Uso e Política de Privacidade da Akiral, elaborados em conformidade com a LGPD e o Marco Civil da Internet.",
    url: "https://akiral.com/termos-e-privacidade",
    siteName: "Akiral",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Termos & Privacidade | Akiral",
    description:
      "Termos de Uso e Política de Privacidade da Akiral, elaborados em conformidade com a LGPD e o Marco Civil da Internet.",
  },
};

export default function TermosPrivacidadePage() {
  return (
    <LegalLayout
      title="Termos & Privacidade"
      subtitle="Termos de Uso do site e Política de Privacidade da AKIRAL, elaborados em conformidade com a LGPD e o Marco Civil da Internet."
      lastUpdated="02 de março de 2026"
      breadcrumb="Termos & Privacidade"
    >

      {/* ── Índice ── */}
      <nav className="legal-toc" aria-label="Índice da página">
        <p className="legal-toc-title">Índice</p>
        <ul className="legal-toc-list">
          <li><a href="#termos-de-uso">1. Termos de Uso</a></li>
          <li><a href="#objeto">2. Objeto e Aceitação</a></li>
          <li><a href="#uso-legitimo">3. Uso Legítimo</a></li>
          <li><a href="#propriedade-intelectual">4. Propriedade Intelectual</a></li>
          <li><a href="#responsabilidades">5. Responsabilidades</a></li>
          <li><a href="#atualizacoes">6. Atualizações dos Termos</a></li>
          <li><a href="#politica-privacidade">7. Política de Privacidade</a></li>
          <li><a href="#coleta">8. Coleta de Dados</a></li>
          <li><a href="#finalidade">9. Finalidade do Tratamento</a></li>
          <li><a href="#armazenamento">10. Armazenamento e Segurança</a></li>
          <li><a href="#compartilhamento">11. Compartilhamento</a></li>
          <li><a href="#cookies">12. Cookies</a></li>
          <li><a href="#base-legal">13. Base Legal</a></li>
          <li><a href="#contato-privacidade">14. Contato</a></li>
        </ul>
      </nav>

      {/* ══════════════════════════════════
          PARTE 1 — TERMOS DE USO
      ══════════════════════════════════ */}

      <section className="legal-section" id="termos-de-uso">
        <p className="legal-label">Parte I</p>
        <h2 className="legal-h2">Termos de Uso</h2>
        <p className="legal-p">
          Os presentes Termos de Uso regulam o acesso e a utilização do site institucional da <strong>AKIRAL</strong> (doravante denominada simplesmente "AKIRAL" ou "Empresa"), disponível no domínio akiral.com e seus subdomínios, bem como de quaisquer conteúdos, funcionalidades e serviços disponibilizados por meio dessas plataformas.
        </p>
        <p className="legal-p">
          A utilização deste site está sujeita, ainda, às disposições do <strong>Marco Civil da Internet (Lei nº 12.965/2014)</strong>, do <strong>Código de Defesa do Consumidor (Lei nº 8.078/1990)</strong> e demais legislações aplicáveis ao ordenamento jurídico brasileiro.
        </p>
      </section>

      <section className="legal-section" id="objeto">
        <h2 className="legal-h2">Objeto e aceitação</h2>
        <p className="legal-p">
          O presente instrumento tem por objeto estabelecer as regras e condições para o uso do site da AKIRAL, incluindo a consulta a conteúdos institucionais, o preenchimento de formulários de contato e o agendamento de demonstrações técnicas.
        </p>
        <p className="legal-p">
          Ao acessar ou utilizar qualquer parte deste site, o usuário declara ter lido, compreendido e concordado integralmente com estes Termos de Uso. Caso não concorde com qualquer disposição aqui prevista, o usuário deve abster-se de utilizar o site.
        </p>
        <p className="legal-p">
          A aceitação destes termos é condição necessária para o uso das funcionalidades disponíveis no site, podendo ocorrer de forma expressa — mediante marcação de caixas de consentimento — ou tácita, pelo simples uso continuado da plataforma.
        </p>
      </section>

      <section className="legal-section" id="uso-legitimo">
        <h2 className="legal-h2">Uso legítimo da plataforma</h2>
        <p className="legal-p">
          O usuário compromete-se a utilizar este site exclusivamente para finalidades lícitas, legítimas e em conformidade com a legislação vigente, os presentes Termos de Uso e os bons costumes. São expressamente vedados os seguintes comportamentos:
        </p>
        <ul className="legal-ul">
          <li>Acessar, coletar ou extrair dados do site de forma automatizada, por meio de robôs, scrapers, crawlers ou tecnologias similares, sem autorização prévia e expressa da AKIRAL;</li>
          <li>Tentar acessar áreas restritas do site ou de sistemas associados sem a devida autorização;</li>
          <li>Transmitir, introduzir ou disseminar vírus, malware, spyware ou qualquer outro software malicioso;</li>
          <li>Utilizar o site para a prática de atos ilícitos, fraudulentos ou que causem dano à AKIRAL, a terceiros ou à infraestrutura técnica da plataforma;</li>
          <li>Reproduzir, distribuir, modificar, adaptar, traduzir ou criar obras derivadas com base nos conteúdos protegidos do site sem autorização;</li>
          <li>Realizar atividades que interfiram no funcionamento adequado do site ou sobrecarreguem indevidamente sua infraestrutura.</li>
        </ul>
        <p className="legal-p">
          A AKIRAL reserva-se o direito de tomar as medidas técnicas e jurídicas cabíveis diante de qualquer uso indevido do site, incluindo o bloqueio de acesso e a notificação às autoridades competentes.
        </p>
      </section>

      <section className="legal-section" id="propriedade-intelectual">
        <h2 className="legal-h2">Propriedade intelectual</h2>
        <p className="legal-p">
          Todo o conteúdo disponível neste site — incluindo, mas não se limitando a textos, artigos, logotipos, marcas, identidade visual, layout, código-fonte, interfaces gráficas, ilustrações, ícones, fotografias, vídeos, apresentações e dados — é de propriedade exclusiva da AKIRAL ou de seus licenciantes, sendo protegido pela legislação brasileira e internacional aplicável à propriedade intelectual, em especial pela <strong>Lei nº 9.610/1998 (Lei de Direitos Autorais)</strong> e pela <strong>Lei nº 9.279/1996 (Lei da Propriedade Industrial)</strong>.
        </p>
        <p className="legal-p">
          É expressamente proibida a reprodução, cópia, redistribuição, transmissão, publicação, modificação ou qualquer outra forma de utilização do conteúdo deste site sem a prévia e expressa autorização por escrito da AKIRAL. O uso não autorizado de qualquer material protegido por estes termos poderá configurar violação dos direitos de propriedade intelectual da Empresa e sujeitar o infrator às sanções civis e penais previstas na legislação vigente.
        </p>
        <p className="legal-p">
          O acesso a este site não implica, em nenhuma hipótese, a transferência, cessão ou licenciamento de quaisquer direitos de propriedade intelectual ao usuário.
        </p>
      </section>

      <section className="legal-section" id="responsabilidades">
        <h2 className="legal-h2">Limitação de responsabilidade</h2>
        <p className="legal-p">
          As informações disponibilizadas neste site têm caráter meramente informativo e institucional, podendo ser alteradas a qualquer momento sem aviso prévio. A AKIRAL não garante a completude, atualidade ou exatidão das informações aqui publicadas e não se responsabiliza por eventuais imprecisões que não decorram de dolo ou culpa grave.
        </p>
        <p className="legal-p">
          A AKIRAL não será responsabilizada por danos diretos, indiretos, incidentais, consequenciais ou punitivos decorrentes do uso ou da impossibilidade de uso deste site, incluindo mas não se limitando a perdas de dados, interrupção de negócios ou qualquer outro prejuízo, ressalvados os casos em que tal responsabilidade não possa ser excluída nos termos da legislação aplicável.
        </p>
        <p className="legal-p">
          Este site pode conter links para sites ou plataformas de terceiros. Esses links são disponibilizados por conveniência e não implicam aprovação, respaldo ou responsabilidade da AKIRAL pelo conteúdo, práticas ou políticas dos sites vinculados.
        </p>

        <div className="legal-callout">
          <p>
            <strong>Lei aplicável e foro:</strong> Os presentes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de Porto Alegre/RS para dirimir quaisquer controvérsias decorrentes da interpretação ou execução destes termos, com renúncia a qualquer outro, por mais privilegiado que seja.
          </p>
        </div>
      </section>

      <section className="legal-section" id="atualizacoes">
        <h2 className="legal-h2">Atualizações dos Termos</h2>
        <p className="legal-p">
          A AKIRAL reserva-se o direito de revisar e atualizar estes Termos de Uso a qualquer momento, sem necessidade de aviso prévio individual, sendo recomendável que o usuário verifique periodicamente eventuais alterações. A data da última atualização é indicada no início desta página.
        </p>
        <p className="legal-p">
          O uso continuado do site após a publicação de alterações nos termos constituirá aceitação tácita das modificações realizadas. Caso o usuário não concorde com os termos revisados, deve cessar imediatamente o uso do site.
        </p>
        <p className="legal-p">
          Nas hipóteses em que as alterações forem relevantes e afetarem direitos de usuários que tenham fornecido dados de contato, a AKIRAL enviará comunicação por e-mail notificando as modificações, nos termos do <strong>art. 7º, II e XIII, da Lei nº 12.965/2014 (Marco Civil da Internet)</strong>.
        </p>
      </section>

      {/* ══════════════════════════════════
          PARTE 2 — POLÍTICA DE PRIVACIDADE
      ══════════════════════════════════ */}

      <section className="legal-section" id="politica-privacidade">
        <p className="legal-label">Parte II</p>
        <h2 className="legal-h2">Política de Privacidade</h2>
        <p className="legal-p">
          A AKIRAL tem compromisso genuíno com a privacidade e a proteção dos dados pessoais de seus usuários, clientes e parceiros. A presente Política de Privacidade descreve como coletamos, utilizamos, armazenamos, compartilhamos e protegemos as informações pessoais no âmbito de nossas atividades digitais.
        </p>
        <p className="legal-p">
          Esta Política foi elaborada em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)</strong>, o <strong>Marco Civil da Internet (Lei nº 12.965/2014)</strong> e as diretrizes da <strong>Autoridade Nacional de Proteção de Dados (ANPD)</strong>, e aplica-se a todos os dados pessoais tratados pela AKIRAL em conexão com o uso deste site e dos serviços prestados.
        </p>
        <p className="legal-p">
          Para os efeitos desta Política, entende-se por <strong>dados pessoais</strong> qualquer informação relacionada a pessoa natural identificada ou identificável, nos termos do art. 5º, I, da LGPD.
        </p>
      </section>

      <section className="legal-section" id="coleta">
        <h2 className="legal-h2">Coleta de dados</h2>

        <h3 className="legal-h3">Dados fornecidos voluntariamente</h3>
        <p className="legal-p">
          Coletamos dados pessoais que o usuário nos fornece diretamente ao interagir com os formulários, ferramentas e canais de comunicação disponíveis neste site, incluindo:
        </p>
        <ul className="legal-ul">
          <li><strong>Nome completo</strong> — para identificação do titular e personalização da comunicação;</li>
          <li><strong>Endereço de e-mail</strong> — para envio de comunicações, respostas a solicitações e informações sobre serviços;</li>
          <li><strong>Número de telefone</strong> — quando fornecido para fins de contato direto ou agendamento;</li>
          <li><strong>Nome e segmento da empresa</strong> — quando informados em formulários de contato comercial;</li>
          <li><strong>Mensagens e conteúdo de formulários</strong> — informações inseridas pelo usuário em campos de texto livre, como descrição de necessidades, perguntas ou solicitações;</li>
          <li><strong>Dados de agendamento</strong> — informações inseridas em ferramentas de agendamento de demonstrações técnicas.</li>
        </ul>

        <h3 className="legal-h3">Dados coletados automaticamente</h3>
        <p className="legal-p">
          Durante a navegação no site, coletamos automaticamente determinadas informações técnicas e de uso, necessárias para o funcionamento adequado da plataforma, análise de desempenho e melhoria da experiência:
        </p>
        <ul className="legal-ul">
          <li><strong>Endereço IP</strong> e dados de localização geográfica aproximada;</li>
          <li><strong>Tipo e versão do navegador</strong> e sistema operacional utilizados;</li>
          <li><strong>Páginas visitadas</strong>, tempo de permanência e fluxo de navegação;</li>
          <li><strong>Referência de acesso</strong> (URL de origem da visita);</li>
          <li><strong>Data e hora</strong> do acesso;</li>
          <li><strong>Identificadores de dispositivo</strong> e dados técnicos do ambiente de acesso;</li>
          <li><strong>Dados de cookies e tecnologias similares</strong>, conforme descrito na seção específica desta Política.</li>
        </ul>

        <div className="legal-callout">
          <p>
            A AKIRAL <strong>não coleta dados sensíveis</strong> (conforme definição do art. 5º, II, da LGPD) por meio deste site, como dados de saúde, origem racial, convicção religiosa, opinião política ou orientação sexual, salvo quando expressamente necessário para a prestação de serviços específicos e mediante consentimento explícito do titular.
          </p>
        </div>
      </section>

      <section className="legal-section" id="finalidade">
        <h2 className="legal-h2">Finalidade do tratamento</h2>
        <p className="legal-p">
          Os dados pessoais coletados pela AKIRAL são tratados para finalidades específicas, determinadas e legítimas, não sendo utilizados de forma incompatível com os propósitos para os quais foram coletados. As principais finalidades são:
        </p>

        <h3 className="legal-h3">Comunicação e atendimento</h3>
        <ul className="legal-ul">
          <li>Responder a solicitações, dúvidas e mensagens enviadas por meio dos formulários de contato;</li>
          <li>Realizar o agendamento e a condução de demonstrações técnicas e reuniões comerciais;</li>
          <li>Enviar informações solicitadas pelo usuário sobre os serviços da AKIRAL;</li>
          <li>Comunicar atualizações relevantes sobre projetos em andamento ou mudanças nos termos e políticas.</li>
        </ul>

        <h3 className="legal-h3">Prestação de serviços</h3>
        <ul className="legal-ul">
          <li>Viabilizar a execução dos serviços contratados, incluindo o desenvolvimento de sistemas, automações e integrações;</li>
          <li>Gerenciar o relacionamento contratual com clientes e parceiros;</li>
          <li>Cumprir obrigações decorrentes de contratos de prestação de serviços.</li>
        </ul>

        <h3 className="legal-h3">Melhoria da experiência e análises operacionais</h3>
        <ul className="legal-ul">
          <li>Analisar o comportamento de navegação para identificar oportunidades de melhoria no site;</li>
          <li>Monitorar o desempenho técnico da plataforma;</li>
          <li>Produzir relatórios estatísticos e analíticos de caráter agregado e anonimizado.</li>
        </ul>

        <h3 className="legal-h3">Marketing e comunicação comercial</h3>
        <ul className="legal-ul">
          <li>Enviar conteúdos informativos, novidades e materiais de interesse relacionados aos serviços da AKIRAL, <strong>exclusivamente quando o usuário tiver fornecido consentimento expresso</strong> para esse fim;</li>
          <li>Personalizar comunicações com base no perfil e no histórico de interação do usuário, sempre com fundamento em base legal adequada.</li>
        </ul>

        <h3 className="legal-h3">Cumprimento de obrigações legais</h3>
        <ul className="legal-ul">
          <li>Cumprir determinações legais, regulatórias ou de autoridades competentes;</li>
          <li>Exercer ou defender direitos da AKIRAL em processos judiciais, administrativos ou arbitrais.</li>
        </ul>
      </section>

      <section className="legal-section" id="armazenamento">
        <h2 className="legal-h2">Armazenamento e segurança</h2>
        <p className="legal-p">
          A AKIRAL adota medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acesso não autorizado, uso indevido, alteração, divulgação, perda acidental ou destruição — em conformidade com o art. 46 da LGPD e as boas práticas do setor de tecnologia.
        </p>
        <p className="legal-p">
          As principais salvaguardas implementadas incluem:
        </p>
        <ul className="legal-ul">
          <li><strong>Criptografia em trânsito</strong> — todas as comunicações entre o navegador do usuário e nossos servidores são protegidas por protocolo TLS (HTTPS);</li>
          <li><strong>Criptografia em repouso</strong> — dados armazenados em bancos de dados e sistemas de armazenamento são protegidos por criptografia;</li>
          <li><strong>Controle de acesso granular</strong> — apenas colaboradores com necessidade legítima têm acesso aos dados pessoais, com base no princípio do menor privilégio;</li>
          <li><strong>Monitoramento e logs de acesso</strong> — registros de auditoria permitem rastrear acessos e identificar comportamentos anômalos;</li>
          <li><strong>Procedimentos de resposta a incidentes</strong> — em caso de suspeita de violação de dados, a AKIRAL dispõe de procedimentos formais de contenção, investigação e notificação conforme exigido pela LGPD.</li>
        </ul>
        <p className="legal-p">
          Os dados pessoais são armazenados pelo tempo necessário ao cumprimento das finalidades para as quais foram coletados ou conforme exigido pela legislação aplicável. Após o término do período de retenção, os dados são eliminados de forma segura ou anonimizados, de modo que não seja mais possível a identificação do titular.
        </p>

        <div className="legal-callout">
          <p>
            <strong>Retenção de registros de acesso:</strong> Em conformidade com o art. 15 da Lei nº 12.965/2014 (Marco Civil da Internet), os registros de acesso a aplicações de internet são armazenados pelo prazo mínimo de 6 (seis) meses.
          </p>
        </div>
      </section>

      <section className="legal-section" id="compartilhamento">
        <h2 className="legal-h2">Compartilhamento de dados</h2>
        <p className="legal-p">
          A AKIRAL <strong>não vende, aluga nem comercializa dados pessoais</strong> de seus usuários ou clientes a terceiros. O compartilhamento de dados pessoais ocorre de forma restrita, somente quando estritamente necessário, e sempre com observância da LGPD e dos princípios que a regem.
        </p>
        <p className="legal-p">
          Os dados poderão ser compartilhados nas seguintes hipóteses:
        </p>

        <h3 className="legal-h3">Provedores de serviços e parceiros operacionais</h3>
        <p className="legal-p">
          Compartilhamos dados com fornecedores e prestadores de serviços que nos auxiliam na operação do site e na prestação dos serviços contratados, tais como:
        </p>
        <ul className="legal-ul">
          <li><strong>Provedores de infraestrutura em nuvem</strong> (armazenamento, computação e rede);</li>
          <li><strong>Plataformas de análise de dados</strong> e monitoramento de performance (como Google Analytics);</li>
          <li><strong>Ferramentas de comunicação</strong> (CRM, plataformas de e-mail marketing, sistemas de agendamento);</li>
          <li><strong>Provedores de serviços de segurança</strong> digital e gestão de identidade.</li>
        </ul>
        <p className="legal-p">
          Todos esses parceiros são selecionados com base em critérios de segurança e conformidade, e estão sujeitos a obrigações contratuais de confidencialidade e proteção de dados, sendo utilizados exclusivamente para as finalidades para as quais os dados foram compartilhados.
        </p>

        <h3 className="legal-h3">Cumprimento de obrigações legais</h3>
        <p className="legal-p">
          A AKIRAL poderá divulgar dados pessoais quando necessário para cumprir obrigação legal ou regulatória, atender determinação de autoridade judicial ou administrativa competente, ou exercer e defender direitos da Empresa em processos judiciais, arbitrais ou administrativos.
        </p>

        <h3 className="legal-h3">Transferências internacionais</h3>
        <p className="legal-p">
          Alguns dos provedores de infraestrutura e serviços que utilizamos podem processar ou armazenar dados em servidores localizados fora do Brasil. Nessas situações, a AKIRAL assegura que a transferência ocorre em conformidade com os requisitos dos arts. 33 a 36 da LGPD, mediante cláusulas contratuais adequadas ou pela adoção de outras salvaguardas reconhecidas pela ANPD.
        </p>
      </section>

      <section className="legal-section" id="cookies">
        <h2 className="legal-h2">Cookies e tecnologias similares</h2>
        <p className="legal-p">
          Cookies são pequenos arquivos de texto armazenados no dispositivo do usuário pelo navegador quando da visita a um site. A AKIRAL utiliza cookies e tecnologias de rastreamento similares para garantir o funcionamento adequado do site, analisar o seu uso e aprimorar a experiência de navegação.
        </p>

        <h3 className="legal-h3">Tipos de cookies utilizados</h3>
        <ul className="legal-ul">
          <li>
            <strong>Cookies estritamente necessários</strong> — essenciais para o funcionamento básico do site. Sem eles, funcionalidades fundamentais não estariam disponíveis. Não requerem consentimento.
          </li>
          <li>
            <strong>Cookies de desempenho e análise</strong> — coletam informações sobre como os usuários interagem com o site (páginas visitadas, cliques, tempo de permanência), permitindo melhorias na navegação. Utilizam dados anonimizados ou pseudonimizados.
          </li>
          <li>
            <strong>Cookies de funcionalidade</strong> — permitem que o site lembre preferências do usuário (como idioma selecionado), melhorando a experiência em visitas subsequentes.
          </li>
          <li>
            <strong>Cookies de marketing</strong> — utilizados para acompanhar a eficácia de campanhas e, quando consentido, exibir conteúdo relevante ao perfil do usuário em outras plataformas.
          </li>
        </ul>

        <h3 className="legal-h3">Como gerenciar cookies</h3>
        <p className="legal-p">
          O usuário pode, a qualquer momento, configurar seu navegador para recusar, bloquear ou excluir cookies. A maioria dos navegadores modernos oferece configurações granulares de gestão de cookies nas opções de privacidade e segurança. Note que a desativação de determinados cookies pode afetar o funcionamento de algumas funcionalidades do site.
        </p>
        <p className="legal-p">
          Para mais informações sobre como gerenciar cookies nos principais navegadores, consulte a documentação oficial de cada um: <strong>Chrome</strong>, <strong>Firefox</strong>, <strong>Safari</strong> e <strong>Edge</strong>.
        </p>
      </section>

      <section className="legal-section" id="base-legal">
        <h2 className="legal-h2">Base legal para o tratamento</h2>
        <p className="legal-p">
          Todo tratamento de dados pessoais realizado pela AKIRAL está fundamentado em uma das bases legais previstas no art. 7º da LGPD. As principais bases legais que adotamos são:
        </p>
        <ul className="legal-ul">
          <li><strong>Consentimento (art. 7º, I)</strong> — para envio de comunicações de marketing e utilização de cookies não essenciais, mediante autorização expressa do titular;</li>
          <li><strong>Execução de contrato (art. 7º, V)</strong> — para tratamento necessário ao cumprimento de contrato de prestação de serviços ou de medidas pré-contratuais solicitadas pelo titular;</li>
          <li><strong>Cumprimento de obrigação legal (art. 7º, II)</strong> — para atendimento de exigências legais e regulatórias;</li>
          <li><strong>Legítimo interesse (art. 7º, IX)</strong> — para análise de desempenho do site e melhoria da experiência de navegação, respeitados os interesses e direitos fundamentais do titular;</li>
          <li><strong>Exercício regular de direitos (art. 7º, VI)</strong> — para uso em processos judiciais, administrativos ou arbitrais.</li>
        </ul>
      </section>

      <section className="legal-section" id="contato-privacidade">
        <h2 className="legal-h2">Encarregado de dados e canal de contato</h2>
        <p className="legal-p">
          Em conformidade com o art. 41 da LGPD, a AKIRAL designou um Encarregado pelo Tratamento de Dados Pessoais (DPO — Data Protection Officer), responsável por atuar como canal de comunicação entre a Empresa, os titulares de dados e a Autoridade Nacional de Proteção de Dados (ANPD).
        </p>
        <p className="legal-p">
          Para exercer seus direitos como titular de dados, encaminhar solicitações, dúvidas ou reclamações relacionadas ao tratamento de dados pessoais, utilize o canal abaixo:
        </p>
        <div className="legal-contact-box">
          <p className="legal-contact-box-title">Canal de Privacidade — Encarregado de Dados</p>
          <a href="mailto:contact@akiral.com" className="legal-contact-email">contact@akiral.com</a>
          <p className="legal-p" style={{ marginTop: "0.75rem", marginBottom: 0, fontSize: "0.875rem" }}>
            As solicitações serão respondidas no prazo de até <strong>15 (quinze) dias úteis</strong>, contados do recebimento, prorrogáveis quando houver complexidade ou volume que justifique a extensão do prazo, com comunicação ao titular.
          </p>
        </div>
        <p className="legal-p" style={{ marginTop: "1.5rem" }}>
          Para informações detalhadas sobre seus direitos como titular de dados, acesse nossa página{" "}
          <a href="/seus-direitos-de-privacidade" style={{ color: "#F26522", textDecoration: "none" }}>
            Seus Direitos de Privacidade
          </a>.
        </p>
      </section>

    </LegalLayout>
  );
}
