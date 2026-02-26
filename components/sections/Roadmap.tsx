"use client";
import { useEffect, useRef } from "react";

type Lang = "pt" | "en";

const copy = {
  pt: {
    label: "Como Funciona",
    headline: "Escale sua empresa em 3 passos.",
    sub: "Do diagnóstico ao resultado mensurável.",
    steps: [
      {
        number: "1",
        tag: "PONTO DE PARTIDA",
        title: "Agende uma demo gratuita",
        desc: "Em uma sessão de 30 minutos mapeamos seus processos, identificamos os maiores gargalos operacionais e apresentamos um diagnóstico técnico sem compromisso.",
        cta: true,
        cta_text: "Agendar free demo",
        details: ["Diagnóstico técnico gratuito", "Mapeamento de processos", "Estimativa de ROI personalizada"],
        icon_color: "#F26522",
      },
      {
        number: "2",
        tag: "NOSSA ENTREGA",
        title: "Implementamos a solução",
        desc: "Projetamos e construímos a automação sob medida para o seu contexto. Sistemas de IA, agentes inteligentes, integrações e infraestrutura resiliente — entregues em semanas, não meses.",
        cta: false,
        cta_text: "",
        details: ["Agentes de IA customizados", "Integrações com sistemas existentes", "Infraestrutura escalável", "Documentação completa"],
        icon_color: "#3B82F6",
      },
      {
        number: "3",
        tag: "RESULTADO FINAL",
        title: "Sua empresa escala",
        desc: "Com os processos automatizados e os sistemas rodando, sua equipe foca no que importa. Os resultados são mensuráveis, auditáveis e crescem com o negócio.",
        cta: false,
        cta_text: "",
        details: ["Redução de custos operacionais", "Equipe focada em estratégia", "Métricas em tempo real", "Crescimento sustentável"],
        icon_color: "#10B981",
      },
    ],
  },
  en: {
    label: "How It Works",
    headline: "Scale your company in 3 steps.",
    sub: "From diagnosis to measurable results.",
    steps: [
      {
        number: "1",
        tag: "STARTING POINT",
        title: "Schedule a free demo",
        desc: "In a 30-minute session we map your processes, identify the biggest operational bottlenecks and present a technical diagnosis with no commitment.",
        cta: true,
        cta_text: "Book free demo",
        details: ["Free technical diagnosis", "Process mapping", "Personalised ROI estimate"],
        icon_color: "#F26522",
      },
      {
        number: "2",
        tag: "OUR DELIVERY",
        title: "We implement the solution",
        desc: "We design and build automation tailored to your context. AI systems, intelligent agents, integrations and resilient infrastructure — delivered in weeks, not months.",
        cta: false,
        cta_text: "",
        details: ["Custom AI agents", "Integrations with existing systems", "Scalable infrastructure", "Full documentation"],
        icon_color: "#3B82F6",
      },
      {
        number: "3",
        tag: "FINAL RESULT",
        title: "Your company scales",
        desc: "With processes automated and systems running, your team focuses on what matters. Results are measurable, auditable and grow with the business.",
        cta: false,
        cta_text: "",
        details: ["Reduced operational costs", "Team focused on strategy", "Real-time metrics", "Sustainable growth"],
        icon_color: "#10B981",
      },
    ],
  },
};

/* ── Step icons ── */
function IconCalendar({ color }: { color: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="4" y="7" width="24" height="21" rx="2" stroke={color} strokeWidth="1.2" fill="none"/>
      <line x1="4" y1="13" x2="28" y2="13" stroke={color} strokeWidth="1" strokeOpacity="0.5"/>
      <line x1="11" y1="4" x2="11" y2="10" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="21" y1="4" x2="21" y2="10" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
      <rect x="9" y="17" width="4" height="4" rx="0.5" fill={color} opacity="0.3"/>
      <rect x="15" y="17" width="4" height="4" rx="0.5" fill={color} opacity="0.6"/>
      <rect x="21" y="17" width="4" height="4" rx="0.5" fill={color} opacity="0.2"/>
    </svg>
  );
}

function IconGears({ color }: { color: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="12" cy="13" r="5" stroke={color} strokeWidth="1.2" fill="none"/>
      <circle cx="12" cy="13" r="2" stroke={color} strokeWidth="1" fill="none" opacity="0.5"/>
      <circle cx="22" cy="20" r="4" stroke={color} strokeWidth="1.2" fill="none"/>
      <circle cx="22" cy="20" r="1.5" stroke={color} strokeWidth="1" fill="none" opacity="0.5"/>
      <path d="M12 8 L12 6 M12 20 L12 18 M7 13 L5 13 M19 13 L17 13 M8.5 9.5 L7.1 8.1 M16.4 17.5 L15 16"
        stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
      <path d="M22 16 L22 14.5 M22 24 L22 25 M18 20 L16.5 20 M26 20 L27.5 20"
        stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
    </svg>
  );
}

function IconRocket({ color }: { color: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 4 C16 4 22 6 24 14 L18 20 L14 20 L8 14 C10 6 16 4 16 4 Z"
        stroke={color} strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
      <circle cx="16" cy="13" r="2.5" stroke={color} strokeWidth="1" fill="none" opacity="0.6"/>
      <path d="M10 18 L6 22 L8 24 L12 22 M22 18 L26 22 L24 24 L20 22"
        stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
      <path d="M14 20 L12 26 L16 24 L20 26 L18 20"
        stroke={color} strokeWidth="1" strokeLinejoin="round" opacity="0.5"/>
    </svg>
  );
}

const stepIcons = [IconCalendar, IconGears, IconRocket];

export default function Roadmap({ lang = "pt" }: { lang?: Lang }) {
  const tx = copy[lang];
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".fade-up");
    if (!els) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="como-funciona" className="section-wrap"
      style={{ background: "#0A0B0D", borderTop: "1px solid #1E2024" }}>
      <div className="site-container">

        {/* Header */}
        <div style={{ marginBottom: "5rem" }}>
          <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
            <span className="section-label">{tx.label}</span>
            <div style={{ width: "40px", height: "1px", background: "#1E2024" }} />
          </div>
          <h2 className="section-headline fade-up" style={{ marginBottom: "0.75rem", transitionDelay: "0.05s" }}>
            {tx.headline}
          </h2>
          <p className="mono-sm fade-up" style={{ transitionDelay: "0.1s" }}>{tx.sub}</p>
        </div>

        {/* Steps */}
        <div className="roadmap-grid fade-up" style={{ transitionDelay: "0.14s" }}>
          {tx.steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <div key={step.number} className="roadmap-step" style={{ position: "relative" }}>

                {/* Connector line between steps */}
                {i < tx.steps.length - 1 && (
                  <div className="roadmap-connector">
                    <svg width="100%" height="2" viewBox="0 0 100 2" preserveAspectRatio="none">
                      <line x1="0" y1="1" x2="100" y2="1"
                        stroke="#1E2024" strokeWidth="1" strokeDasharray="4 4"/>
                    </svg>
                    <div className="roadmap-arrow">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M2 1L6 4L2 7" stroke="#3A3D42" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className="roadmap-card" style={{ borderColor: step.icon_color + "22" }}>

                  {/* Number badge */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%",
                      border: `1px solid ${step.icon_color}44`,
                      background: step.icon_color + "11",
                      display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.875rem",
                        fontWeight: 400, color: step.icon_color, letterSpacing: "0" }}>
                        {step.number}
                      </span>
                    </div>
                    <span className="tag-pill" style={{ borderColor: step.icon_color + "30",
                      color: step.icon_color, fontSize: "0.5625rem" }}>
                      {step.tag}
                    </span>
                  </div>

                  {/* Icon */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <Icon color={step.icon_color} />
                  </div>

                  {/* Title */}
                  <h3 style={{ fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: "1.125rem", fontWeight: 500,
                    color: "#F2F2F2", letterSpacing: "-0.015em",
                    marginBottom: "0.875rem", lineHeight: 1.3 }}>
                    {step.title}
                  </h3>

                  {/* Desc */}
                  <p className="body-sm" style={{ color: "#6B7280", lineHeight: "1.75", marginBottom: "1.75rem" }}>
                    {step.desc}
                  </p>

                  {/* Detail list */}
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: step.cta ? "2rem" : 0,
                    display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {step.details.map(d => (
                      <li key={d} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                        <div style={{ width: "5px", height: "5px", borderRadius: "50%",
                          background: step.icon_color, opacity: 0.6, flexShrink: 0 }} />
                        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6875rem",
                          color: "#4B5563", letterSpacing: "0.04em" }}>{d}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA for step 1 */}
                  {step.cta && (
                    <a href="#demo" className="btn-cta" style={{ width: "100%", justifyContent: "center",
                      marginTop: "auto", fontSize: "0.875rem" }}>
                      {step.cta_text}
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7h8M8 4l3 3-3 3" stroke="#fff" strokeWidth="1.2"
                          strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )}

                  {/* Bottom color accent */}
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px",
                    background: `linear-gradient(90deg, transparent, ${step.icon_color}50, transparent)`,
                    borderRadius: "0 0 8px 8px" }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .roadmap-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          position: relative;
          align-items: start;
        }

        .roadmap-step {
          position: relative;
        }

        .roadmap-card {
          background: #0D0F11;
          border: 1px solid #1E2024;
          border-radius: 8px;
          padding: 2rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s ease, background 0.3s ease;
        }
        .roadmap-card:hover {
          background: #111416;
        }

        .roadmap-connector {
          display: none; /* hidden — arrows are visual on desktop via CSS grid alignment */
        }

        @media (max-width: 960px) {
          .roadmap-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .roadmap-connector { display: none; }
        }
      `}</style>
    </section>
  );
}
