import type { Metadata } from "next";
import LegalLayout from "@/components/ui/LegalLayout";

const DEMO_URL = "https://calendly.com/arthur-renck3/book-demo";
const CONTACT_EMAIL = "contact@akiral.com";

export const metadata: Metadata = {
  title: "Central de Ajuda",
  description:
    "Documentação técnica, orientações de uso e canais de suporte da Akiral.",
  alternates: {
    canonical: "https://akiral.com/ajuda",
  },
  openGraph: {
    title: "Central de Ajuda | Akiral",
    description:
      "Documentação técnica, orientações de uso e canais de suporte da Akiral.",
    url: "https://akiral.com/ajuda",
    siteName: "Akiral",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Central de Ajuda | Akiral",
    description:
      "Documentação técnica, orientações de uso e canais de suporte da Akiral.",
  },
};

/* ── Platform icons ───────────────────────────────────────────── */

function IconSulMotor() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="1" y="11" width="18" height="5" rx="2" stroke="#F26522" strokeWidth="1.2" />
      <path d="M4 11 L6 7 Q7 5 10 5 Q13 5 14 7 L16 11 Z" stroke="#F26522" strokeWidth="1.2" strokeLinejoin="round" />
      <circle cx="5.5" cy="16" r="2" stroke="#F26522" strokeWidth="1.1" />
      <circle cx="14.5" cy="16" r="2" stroke="#F26522" strokeWidth="1.1" />
    </svg>
  );
}

function IconAutodonto() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="14" height="12" rx="2" stroke="#3B82F6" strokeWidth="1.2" />
      <path d="M7 9h6M7 12h4" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M7 6h2" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function IconAgents() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="3" stroke="#10B981" strokeWidth="1.2" />
      <circle cx="3.5" cy="5" r="2" stroke="#10B981" strokeWidth="1" />
      <circle cx="16.5" cy="5" r="2" stroke="#10B981" strokeWidth="1" />
      <circle cx="3.5" cy="15" r="2" stroke="#10B981" strokeWidth="1" />
      <circle cx="16.5" cy="15" r="2" stroke="#10B981" strokeWidth="1" />
      <line x1="5.2" y1="6.2" x2="8" y2="8.5" stroke="#10B981" strokeWidth="0.9" strokeOpacity="0.6" />
      <line x1="14.8" y1="6.2" x2="12" y2="8.5" stroke="#10B981" strokeWidth="0.9" strokeOpacity="0.6" />
      <line x1="5.2" y1="13.8" x2="8" y2="11.5" stroke="#10B981" strokeWidth="0.9" strokeOpacity="0.6" />
      <line x1="14.8" y1="13.8" x2="12" y2="11.5" stroke="#10B981" strokeWidth="0.9" strokeOpacity="0.6" />
    </svg>
  );
}

function IconInfra() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="16" height="4" rx="1.5" stroke="#F26522" strokeWidth="1.2" />
      <rect x="2" y="9" width="16" height="4" rx="1.5" stroke="#F26522" strokeWidth="1.2" strokeOpacity="0.6" />
      <rect x="2" y="15" width="16" height="2.5" rx="1.5" stroke="#F26522" strokeWidth="1.2" strokeOpacity="0.3" />
      <circle cx="15.5" cy="5" r="1" fill="#F26522" />
      <circle cx="15.5" cy="11" r="1" fill="#F26522" fillOpacity="0.6" />
    </svg>
  );
}

function IconIntegration() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="4" cy="10" r="2.5" stroke="#F26522" strokeWidth="1.2" />
      <circle cx="16" cy="10" r="2.5" stroke="#F26522" strokeWidth="1.2" />
      <path d="M6.5 10 Q10 6 13.5 10" stroke="#F26522" strokeWidth="1.1" strokeDasharray="2.5 2" strokeLinecap="round" />
      <path d="M6.5 10 Q10 14 13.5 10" stroke="#F26522" strokeWidth="1.1" strokeDasharray="2.5 2" strokeLinecap="round" />
    </svg>
  );
}

function IconSupport() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 6.5C3 5.12 4.12 4 5.5 4h9C15.88 4 17 5.12 17 6.5v5C17 12.88 15.88 14 14.5 14H11l-4 3v-3H5.5C4.12 14 3 12.88 3 11.5v-5Z" stroke="#F26522" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M7 8.5h6M7 11h4" stroke="#F26522" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="14" height="13" rx="2" stroke="#F26522" strokeWidth="1.2" />
      <path d="M3 8h14" stroke="#F26522" strokeWidth="1.1" />
      <path d="M7 2v4M13 2v4" stroke="#F26522" strokeWidth="1.2" strokeLinecap="round" />
      <rect x="6" y="11" width="3" height="2.5" rx="0.5" fill="#F26522" fillOpacity="0.4" />
    </svg>
  );
}

/* ── Platform card component ─────────────────────────────────── */

interface PlatformCardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
  accentColor: string;
}

function PlatformCard({ icon, name, description, accentColor }: PlatformCardProps) {
  return (
    <div
      className="legal-right-card"
      style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}
    >
      <div className="legal-right-card-header">
        <div
          className="legal-right-card-icon"
          style={{
            background: `${accentColor}12`,
            border: `1px solid ${accentColor}30`,
          }}
        >
          {icon}
        </div>
        <span
          className="legal-right-card-title"
          style={{ color: "#F2F2F2" }}
        >
          {name}
        </span>
      </div>
      <p className="legal-right-card-body">{description}</p>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────── */

export default function AjudaPage() {
  return (
    <LegalLayout
      title="Central de Ajuda"
      subtitle="Documentação técnica, orientações de uso e canais de suporte da Akiral."
      breadcrumb="Central de Ajuda"
      heroActions={
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "2rem" }}>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
            style={{ borderRadius: "6px", padding: "0.7rem 1.5rem" }}
          >
            Agendar reunião
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="btn-ghost"
            style={{ borderRadius: "6px", padding: "0.7rem 1.5rem" }}
          >
            Entrar em contato
          </a>
        </div>
      }
    >

      {/* ── Plataformas ── */}
      <section className="legal-section" id="plataformas">
        <p className="legal-label">Plataformas</p>
        <h2 className="legal-h2">Sistemas desenvolvidos pela Akiral</h2>
        <p className="legal-p">
          A Akiral desenvolve e opera sistemas de infraestrutura tecnológica para diferentes segmentos. Abaixo estão as plataformas atualmente em operação.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "1.5rem" }}>
          <PlatformCard
            icon={<IconSulMotor />}
            name="SulMotor"
            accentColor="#F26522"
            description="Marketplace inteligente para compra e venda de veículos com automação e análise de dados."
          />
          <PlatformCard
            icon={<IconAutodonto />}
            name="Autodonto"
            accentColor="#3B82F6"
            description="Sistema digital para gestão e automação de processos em clínicas odontológicas."
          />
          <PlatformCard
            icon={<IconAgents />}
            name="AI Agents"
            accentColor="#10B981"
            description="Agentes inteligentes responsáveis por automação de tarefas e execução de processos."
          />
          <PlatformCard
            icon={<IconInfra />}
            name="Infraestrutura Akiral"
            accentColor="#F26522"
            description="Base tecnológica que conecta sistemas, automações e plataformas desenvolvidas pela Akiral."
          />
        </div>
      </section>

      {/* ── Integrações ── */}
      <section className="legal-section" id="integracoes">
        <div className="legal-right-card-header" style={{ marginBottom: "1rem" }}>
          <div className="legal-right-card-icon">
            <IconIntegration />
          </div>
          <p className="legal-label" style={{ margin: 0 }}>Integrações</p>
        </div>
        <h2 className="legal-h2">Conectividade com sistemas externos</h2>
        <p className="legal-p">
          Os sistemas da Akiral podem se integrar com plataformas externas através de APIs e automações personalizadas, permitindo conectar bancos de dados, sistemas de gestão e outras infraestruturas digitais.
        </p>
        <p className="legal-p">
          As integrações são configuradas de acordo com os requisitos técnicos de cada projeto. Para discutir uma integração específica, entre em contato com a equipe técnica da Akiral.
        </p>
        <div className="legal-callout">
          <p>
            <strong>APIs e automações</strong> — todas as integrações são implementadas com foco em segurança, rastreabilidade e compatibilidade com os padrões vigentes de comunicação entre sistemas.
          </p>
        </div>
      </section>

      {/* ── Suporte ── */}
      <section className="legal-section" id="suporte">
        <div className="legal-right-card-header" style={{ marginBottom: "1rem" }}>
          <div className="legal-right-card-icon">
            <IconSupport />
          </div>
          <p className="legal-label" style={{ margin: 0 }}>Suporte</p>
        </div>
        <h2 className="legal-h2">Canais de atendimento</h2>
        <p className="legal-p">
          Para dúvidas técnicas, solicitações de suporte ou questões relacionadas às plataformas da Akiral, entre em contato diretamente com a equipe pelo canal oficial.
        </p>
        <p className="legal-p">
          O atendimento é conduzido pela equipe de engenharia, garantindo respostas precisas e alinhadas ao contexto técnico de cada solicitação.
        </p>

        <div className="legal-contact-box">
          <p className="legal-contact-box-title">Canal de suporte — Akiral</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="legal-contact-email"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="legal-p" style={{ marginTop: "1rem", marginBottom: 0, fontSize: "0.875rem" }}>
            Descreva sua dúvida ou necessidade técnica no e-mail e nossa equipe retornará com as orientações adequadas.
          </p>
        </div>

        <div style={{ marginTop: "1.75rem" }}>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="btn-ghost"
            style={{ borderRadius: "6px", padding: "0.7rem 1.5rem" }}
          >
            Entrar em contato
          </a>
        </div>
      </section>

      {/* ── Reuniões ── */}
      <section className="legal-section" id="reunioes">
        <div className="legal-right-card-header" style={{ marginBottom: "1rem" }}>
          <div className="legal-right-card-icon">
            <IconCalendar />
          </div>
          <p className="legal-label" style={{ margin: 0 }}>Reuniões</p>
        </div>
        <h2 className="legal-h2">Sessões técnicas com a equipe</h2>
        <p className="legal-p">
          Para projetos que exigem análise aprofundada, discussão de arquitetura ou avaliação de viabilidade técnica, é possível agendar uma sessão diretamente com os engenheiros da Akiral.
        </p>
        <p className="legal-p">
          As sessões são remotas, com duração de aproximadamente 60 minutos, e conduzidas sem apresentações comerciais — apenas engenharia aplicada ao seu contexto.
        </p>

        <div
          style={{
            background: "linear-gradient(135deg, #111416 0%, #0F1114 100%)",
            border: "1px solid #1E2024",
            borderRadius: "10px",
            padding: "1.75rem 2rem",
            marginTop: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem 3rem",
            }}
          >
            {[
              { label: "Formato", value: "Sessão remota" },
              { label: "Duração", value: "~60 minutos" },
              { label: "Perfil", value: "Engenheiros / CTO / Gestores" },
            ].map(item => (
              <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#4B5563",
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: "0.875rem",
                    color: "#B8BCC2",
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div style={{ width: "100%", height: "1px", background: "#1E2024" }} />

          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
            style={{ borderRadius: "6px", padding: "0.7rem 1.5rem", alignSelf: "flex-start" }}
          >
            Agendar reunião
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7H11M11 7L8 4M11 7L8 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

    </LegalLayout>
  );
}
