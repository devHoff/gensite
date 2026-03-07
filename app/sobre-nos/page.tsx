import type { Metadata } from "next";
import LegalLayout from "@/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Sobre Nós — AKIRAL",
  description:
    "Conheça a AKIRAL: empresa de infraestrutura tecnológica especializada em automação de processos, integração de sistemas e soluções digitais para empresas que buscam escala real.",
};

export default function SobreNosPage() {
  return (
    <LegalLayout
      title="Sobre a AKIRAL"
      subtitle="Infraestrutura tecnológica de classe enterprise para empresas que precisam escalar com precisão e confiança."
      breadcrumb="Sobre Nós"
    >

      {/* ── Quem Somos ── */}
      <section className="legal-section" id="quem-somos">
        <p className="legal-label">Identidade</p>
        <h2 className="legal-h2">Quem somos</h2>
        <p className="legal-p">
          A <strong>AKIRAL</strong> é uma empresa brasileira de infraestrutura tecnológica especializada no desenvolvimento, integração e operação de soluções digitais para organizações de todos os portes. Atuamos na intersecção entre engenharia de software, automação inteligente e arquitetura de sistemas — entregando tecnologia que funciona no mundo real, com métricas verificáveis e impacto operacional mensurável.
        </p>
        <p className="legal-p">
          Fundada com o propósito de eliminar a distância entre a ambição empresarial e a capacidade técnica de execução, a AKIRAL posiciona-se como parceira de longo prazo para negócios que necessitam de infraestrutura digital robusta, escalável e integrada ao seu modelo operacional.
        </p>
        <p className="legal-p">
          Nosso portfólio abrange desde o desenvolvimento de websites institucionais e plataformas digitais até a implementação de agentes de inteligência artificial, automação de processos de negócio (BPA), integrações entre sistemas legados e modernos, e soluções de comunicação e atendimento automatizado. Cada projeto é construído com foco em performance, segurança e aderência aos objetivos estratégicos do cliente.
        </p>

        <div className="legal-callout">
          <p>
            <strong>Enterprise Technological Infrastructure</strong> — não é apenas um posicionamento. É a síntese do que entregamos: infraestrutura de nível corporativo, independentemente do tamanho do cliente.
          </p>
        </div>
      </section>

      {/* ── Missão ── */}
      <section className="legal-section" id="missao">
        <p className="legal-label">Propósito</p>
        <h2 className="legal-h2">Nossa missão</h2>
        <p className="legal-p">
          Capacitar empresas e organizações a operarem com a eficiência e a inteligência que a tecnologia atual torna possível — construindo sistemas que automatizam o operacional, integram o fragmentado e liberam as equipes para o que realmente importa: crescimento, estratégia e resultado.
        </p>
        <p className="legal-p">
          Acreditamos que acesso a tecnologia de qualidade não deve ser um privilégio de grandes corporações. Por isso, desenhamos soluções que escalam junto com o negócio do cliente — do primeiro sistema implantado à infraestrutura que suporta centenas de milhões de eventos por dia.
        </p>
      </section>

      {/* ── Visão ── */}
      <section className="legal-section" id="visao">
        <p className="legal-label">Direção</p>
        <h2 className="legal-h2">Nossa visão</h2>
        <p className="legal-p">
          Ser reconhecida como a principal referência em infraestrutura tecnológica para empresas em crescimento no Brasil — uma empresa que não apenas entrega sistemas, mas transforma a forma como organizações operam, decidem e escalam.
        </p>
        <p className="legal-p">
          Vislumbramos um futuro em que a complexidade operacional deixa de ser um obstáculo ao crescimento empresarial. Cada processo repetitivo que automatizamos, cada integração que implementamos e cada sistema que construímos é um passo concreto nessa direção.
        </p>
      </section>

      {/* ── Valores ── */}
      <section className="legal-section" id="valores">
        <p className="legal-label">Princípios</p>
        <h2 className="legal-h2">Nossos valores</h2>

        <h3 className="legal-h3">Precisão técnica</h3>
        <p className="legal-p">
          Entregamos o que prometemos, com a qualidade que o ambiente de produção exige. Cada linha de código, cada integração e cada sistema implementado passa por rigoroso processo de validação antes de chegar ao cliente. Não medimos esforços para garantir que a solução funcione com a estabilidade e a performance que o negócio do cliente depende.
        </p>

        <h3 className="legal-h3">Transparência radical</h3>
        <p className="legal-p">
          Comunicação clara e honesta em todas as etapas do projeto. Compartilhamos diagnósticos reais, estimativas fundamentadas e, quando surgem imprevistos, comunicamos imediatamente com proposta de solução. Não existe espaço para jargão que obscurece a realidade técnica do que está sendo construído.
        </p>

        <h3 className="legal-h3">Resultado mensurável</h3>
        <p className="legal-p">
          Tecnologia sem impacto é despesa. Cada solução que desenvolvemos é desenhada com KPIs claros, métricas de acompanhamento e critérios objetivos de sucesso. O retorno sobre o investimento tecnológico deve ser visível, rastreável e comunicável para a liderança do cliente.
        </p>

        <h3 className="legal-h3">Segurança por design</h3>
        <p className="legal-p">
          Segurança não é uma camada adicionada ao final do projeto — é um requisito fundamental que permeia todas as decisões de arquitetura. Adotamos princípios de segurança desde a concepção das soluções, aplicando boas práticas de proteção de dados, controle de acesso, criptografia e conformidade regulatória em todos os sistemas que desenvolvemos e operamos.
        </p>

        <h3 className="legal-h3">Parceria de longo prazo</h3>
        <p className="legal-p">
          Não somos fornecedores de projeto pontual. Construímos relações de parceria contínua com nossos clientes, acompanhando a evolução dos sistemas, adaptando a arquitetura às mudanças do negócio e garantindo que a infraestrutura tecnológica continue sendo um ativo estratégico ao longo do tempo.
        </p>

        <h3 className="legal-h3">Responsabilidade com os dados</h3>
        <p className="legal-p">
          Operamos com total conformidade às legislações de proteção de dados vigentes no Brasil, em especial a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018). O tratamento responsável das informações de nossos clientes e usuários é um compromisso inegociável, refletido em nossas práticas técnicas, contratuais e operacionais.
        </p>
      </section>

      {/* ── O que fazemos ── */}
      <section className="legal-section" id="solucoes">
        <p className="legal-label">Soluções</p>
        <h2 className="legal-h2">O que construímos</h2>
        <p className="legal-p">
          A AKIRAL atua em quatro grandes verticais de entrega, que podem ser contratadas de forma independente ou combinadas em projetos de transformação digital abrangente:
        </p>

        <h3 className="legal-h3">Desenvolvimento de websites e plataformas digitais</h3>
        <p className="legal-p">
          Desenvolvemos desde landing pages institucionais de alta conversão até plataformas digitais complexas com autenticação, painéis administrativos, integrações com APIs externas e arquitetura orientada à performance. Utilizamos tecnologias modernas como Next.js, React, TypeScript e infraestrutura em nuvem de alta disponibilidade.
        </p>

        <h3 className="legal-h3">Automação de processos e agentes de IA</h3>
        <p className="legal-p">
          Implementamos agentes de inteligência artificial e fluxos de automação que substituem tarefas manuais repetitivas por execução autônoma, precisa e auditável. Nossas automações cobrem atendimento ao cliente, gestão de agendamentos, processamento de cobranças, follow-up com leads, gestão de fornecedores e muito mais — com integração nativa aos sistemas já utilizados pelo cliente.
        </p>

        <h3 className="legal-h3">Integração de sistemas e APIs</h3>
        <p className="legal-p">
          Conectamos sistemas que não conversam entre si — ERPs, CRMs, plataformas de comunicação, gateways de pagamento, sistemas legados e soluções SaaS — criando fluxos de dados coerentes, seguros e em tempo real. Eliminamos silos de informação e garantimos que cada parte do negócio opere com dados atualizados e confiáveis.
        </p>

        <h3 className="legal-h3">Soluções de comunicação e atendimento automatizado</h3>
        <p className="legal-p">
          Construímos infraestruturas de comunicação que permitem às empresas escalar o atendimento sem escalar a equipe na mesma proporção. Chatbots inteligentes, assistentes virtuais, sistemas de notificação automatizada por múltiplos canais (WhatsApp, e-mail, SMS) e centrais de atendimento com triagem inteligente são algumas das soluções que implementamos para nossos clientes.
        </p>
      </section>

      {/* ── Clientes ── */}
      <section className="legal-section" id="clientes">
        <p className="legal-label">Quem atendemos</p>
        <h2 className="legal-h2">Nossos clientes</h2>
        <p className="legal-p">
          A AKIRAL atende organizações em diferentes estágios de maturidade digital e segmentos de mercado. Nossa abordagem é flexível o suficiente para se adaptar à realidade de cada cliente, sem abrir mão dos padrões técnicos que garantem resultados consistentes.
        </p>
        <ul className="legal-ul">
          <li><strong>Pequenas e médias empresas</strong> que buscam modernizar suas operações e ganhar eficiência sem estruturar um departamento de tecnologia interno.</li>
          <li><strong>Clínicas, consultórios e prestadores de saúde</strong> que necessitam de automação de agendamentos, prontuários digitais e comunicação com pacientes.</li>
          <li><strong>Academias, estúdios e negócios de serviço</strong> que precisam digitalizar a jornada do cliente, desde a captação até a retenção.</li>
          <li><strong>Empresas de médio e grande porte</strong> que precisam integrar sistemas complexos, escalar operações e implementar governança de dados.</li>
          <li><strong>Startups em crescimento acelerado</strong> que necessitam de infraestrutura tecnológica sólida para suportar a expansão sem acumular dívida técnica.</li>
        </ul>
      </section>

      {/* ── Compromisso com segurança ── */}
      <section className="legal-section" id="seguranca">
        <p className="legal-label">Compromisso</p>
        <h2 className="legal-h2">Tecnologia e segurança</h2>
        <p className="legal-p">
          A AKIRAL opera com um compromisso inabalável com a segurança dos sistemas que desenvolve e das informações que processa. Nossas práticas de segurança são baseadas em frameworks reconhecidos internacionalmente e adaptadas às exigências regulatórias do mercado brasileiro.
        </p>
        <p className="legal-p">
          Adotamos arquiteturas que minimizam a superfície de ataque, implementamos controles de acesso granulares, utilizamos criptografia em trânsito e em repouso, e mantemos processos formais de resposta a incidentes. Todos os sistemas que construímos são projetados para operar com <strong>disponibilidade, confidencialidade e integridade</strong> como requisitos não-negociáveis.
        </p>
        <p className="legal-p">
          Em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)</strong>, adotamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais tratados em nossa atividade, tanto os dados de nossos clientes quanto os dados dos usuários finais dos sistemas que operamos.
        </p>

        <div className="legal-callout">
          <p>
            Para informações sobre como tratamos dados pessoais, consulte nossa{" "}
            <strong>
              <a href="/termos-e-privacidade" style={{ color: "#F26522", textDecoration: "none" }}>
                Política de Privacidade
              </a>
            </strong>{" "}
            e nossa página sobre{" "}
            <strong>
              <a href="/seus-direitos-de-privacidade" style={{ color: "#F26522", textDecoration: "none" }}>
                Seus Direitos de Privacidade
              </a>
            </strong>.
          </p>
        </div>
      </section>

      {/* ── Contato ── */}
      <section className="legal-section" id="contato">
        <p className="legal-label">Contato</p>
        <h2 className="legal-h2">Fale conosco</h2>
        <p className="legal-p">
          Para saber mais sobre como a AKIRAL pode ajudar sua empresa a crescer com tecnologia, agende uma conversa técnica com nossa equipe. Sem apresentações comerciais genéricas — apenas engenharia aplicada ao seu contexto.
        </p>
        <div className="legal-contact-box">
          <p className="legal-contact-box-title">Contato geral</p>
          <a href="mailto:contato@akiral.com" className="legal-contact-email">contato@akiral.com</a>
          <p className="legal-p" style={{ marginTop: "0.5rem", marginBottom: 0, fontSize: "0.875rem" }}>
            Ou agende diretamente uma{" "}
            <a href="https://calendly.com/arthur-renck3/book-demo" target="_blank" rel="noopener noreferrer" style={{ color: "#F26522", textDecoration: "none" }}>
              Demo Técnica gratuita →
            </a>
          </p>
        </div>
      </section>

    </LegalLayout>
  );
}
