"use client";
import { useEffect, useRef } from "react";

type Lang = "pt" | "en";

const CALENDLY = "https://calendly.com/arthur-renck3/book-demo";

const copy = {
  pt: {
    label: "Como Funciona",
    headline: "3 passos para escalar sua empresa.",
    sub: "Do primeiro contato ao resultado real.",
    steps: [
      {
        number: "01",
        tag: "INÍCIO",
        title: "Agende sua\nFree Demo",
        desc: "Em 30 minutos mapeamos seus processos, identificamos gargalos e apresentamos um diagnóstico técnico sem compromisso.",
        details: ["Diagnóstico gratuito", "Mapeamento de processos", "ROI estimado"],
        color: "#F26522",
        cta: true,
      },
      {
        number: "02",
        tag: "EXECUÇÃO",
        title: "Implementamos\na Solução",
        desc: "Agentes de IA, automações e integrações construídas sob medida. Primeiros resultados em 72 horas.",
        details: ["Agentes de IA custom", "Integrações nativas", "Infraestrutura resiliente"],
        color: "#3B82F6",
        cta: false,
      },
      {
        number: "03",
        tag: "RESULTADO",
        title: "Sua Empresa\nEscala",
        desc: "Processos automatizados, equipe focada em estratégia, métricas crescendo. Resultado mensurável.",
        details: ["Custos reduzidos", "Time focado em crescimento", "Métricas em tempo real"],
        color: "#10B981",
        cta: false,
      },
    ],
  },
  en: {
    label: "How It Works",
    headline: "3 steps to scale your company.",
    sub: "From first contact to real results.",
    steps: [
      {
        number: "01",
        tag: "START",
        title: "Book Your\nFree Demo",
        desc: "In 30 minutes we map your processes, identify bottlenecks and present a no-commitment technical diagnosis.",
        details: ["Free diagnosis", "Process mapping", "ROI estimate"],
        color: "#F26522",
        cta: true,
      },
      {
        number: "02",
        tag: "EXECUTION",
        title: "We Implement\nthe Solution",
        desc: "Custom AI agents, automations and integrations built to fit. First results in 72 hours.",
        details: ["Custom AI agents", "Native integrations", "Resilient infrastructure"],
        color: "#3B82F6",
        cta: false,
      },
      {
        number: "03",
        tag: "RESULT",
        title: "Your Company\nScales",
        desc: "Automated processes, team focused on strategy, metrics growing. Measurable, auditable results.",
        details: ["Reduced costs", "Team focused on growth", "Real-time metrics"],
        color: "#10B981",
        cta: false,
      },
    ],
  },
};

/* ── Icons ── */
function IconCalendar({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="6" width="22" height="19" rx="2" stroke={color} strokeWidth="1.3" fill="none"/>
      <line x1="3" y1="12" x2="25" y2="12" stroke={color} strokeWidth="1" strokeOpacity="0.5"/>
      <line x1="9" y1="3" x2="9" y2="9" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="19" y1="3" x2="19" y2="9" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
      <rect x="8" y="15" width="4" height="4" rx="0.5" fill={color} opacity="0.35"/>
      <rect x="14" y="15" width="4" height="4" rx="0.5" fill={color} opacity="0.6"/>
      <rect x="20" y="15" width="4" height="4" rx="0.5" fill={color} opacity="0.2"/>
    </svg>
  );
}
function IconBuild({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="10" cy="11" r="4.5" stroke={color} strokeWidth="1.3" fill="none"/>
      <circle cx="10" cy="11" r="2" stroke={color} strokeWidth="0.9" fill="none" strokeOpacity="0.5"/>
      <circle cx="20" cy="18" r="3.5" stroke={color} strokeWidth="1.3" fill="none"/>
      <circle cx="20" cy="18" r="1.5" stroke={color} strokeWidth="0.8" fill="none" strokeOpacity="0.5"/>
      <path d="M10 6.5 L10 5M10 17 L10 18M5.5 11 L4 11M15 11 L16.5 11M7 8 L5.8 6.8M14.2 14.5 L13 13"
        stroke={color} strokeWidth="1" strokeLinecap="round" strokeOpacity="0.6"/>
      <path d="M20 14.5 L20 13M20 22 L20 23.5M16.5 18 L15 18M24 18 L25.5 18"
        stroke={color} strokeWidth="1" strokeLinecap="round" strokeOpacity="0.6"/>
    </svg>
  );
}
function IconRocket({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 3 C14 3 20 5.5 22 13 L17 18 L11 18 L6 13 C8 5.5 14 3 14 3 Z"
        stroke={color} strokeWidth="1.3" fill="none" strokeLinejoin="round"/>
      <circle cx="14" cy="11" r="2.5" stroke={color} strokeWidth="1" fill="none" strokeOpacity="0.55"/>
      <path d="M8 17 L5 20 L7 22 L10 21M20 17 L23 20 L21 22 L18 21"
        stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.45"/>
      <path d="M11.5 18 L10 24 L14 22 L18 24 L16.5 18"
        stroke={color} strokeWidth="1" strokeLinejoin="round" strokeOpacity="0.5"/>
    </svg>
  );
}
const icons = [IconCalendar, IconBuild, IconRocket];

export default function Roadmap({ lang = "pt" }: { lang?: Lang }) {
  const tx = copy[lang];
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".fade-up");
    if (!els) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.06 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="como-funciona" style={{
      background: "#0A0B0D",
      paddingTop: "8rem", paddingBottom: "8rem",
      position: "relative", overflow: "hidden",
    }}>
      {/* Blend from previous section */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "120px",
        background: "linear-gradient(to bottom, #111214, transparent)",
        pointerEvents: "none",
      }} />

      <div className="site-container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <div className="fade-up" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
            <span className="section-label">{tx.label}</span>
            <div style={{ width: "40px", height: "1px", background: "#1E2024" }} />
          </div>
          <h2 className="section-headline fade-up" style={{ marginBottom: "0.75rem", transitionDelay: "0.06s" }}>
            {tx.headline}
          </h2>
          <p className="mono-sm fade-up" style={{ transitionDelay: "0.1s" }}>{tx.sub}</p>
        </div>

        {/* Map layout */}
        <div className="fade-up roadmap-map-wrap" style={{ transitionDelay: "0.14s", position: "relative" }}>

          {/* SVG connector paths */}
          <svg
            className="roadmap-svg"
            viewBox="0 0 900 340"
            preserveAspectRatio="none"
            fill="none"
            style={{
              position: "absolute", top: 0, left: 0,
              width: "100%", height: "100%",
              pointerEvents: "none", zIndex: 1,
            }}
          >
            <defs>
              <marker id="arrow1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M1 2 L6 4 L1 6" stroke="#F26522" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
              </marker>
              <marker id="arrow2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M1 2 L6 4 L1 6" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
              </marker>
            </defs>
            {/* Path 1 → 2: curves down-right */}
            <path
              d="M 200 120 C 350 120, 350 220, 500 220"
              stroke="#F26522"
              strokeWidth="1.5"
              strokeDasharray="6 5"
              strokeOpacity="0.5"
              markerEnd="url(#arrow1)"
            />
            {/* Path 2 → 3: curves up-right */}
            <path
              d="M 570 220 C 720 220, 720 120, 860 120"
              stroke="#3B82F6"
              strokeWidth="1.5"
              strokeDasharray="6 5"
              strokeOpacity="0.5"
              markerEnd="url(#arrow2)"
            />
          </svg>

          {/* 3 cards positioned in zigzag */}
          <div className="roadmap-zigzag">
            {tx.steps.map((step, i) => {
              const Icon = icons[i];
              const isMiddle = i === 1;
              return (
                <div
                  key={step.number}
                  className={`roadmap-node ${isMiddle ? "roadmap-node--down" : "roadmap-node--up"}`}
                  style={{ zIndex: 2, position: "relative" }}
                >
                  {/* Number bubble */}
                  <div style={{
                    width: "44px", height: "44px",
                    borderRadius: "50%",
                    border: `2px solid ${step.color}`,
                    background: step.color + "15",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1.25rem",
                    boxShadow: `0 0 20px ${step.color}25`,
                    flexShrink: 0,
                  }}>
                    <span style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.875rem", fontWeight: 500,
                      color: step.color,
                    }}>{step.number}</span>
                  </div>

                  {/* Card */}
                  <div style={{
                    background: "#0D0F11",
                    border: `1px solid ${step.color}25`,
                    borderRadius: "10px",
                    padding: "1.75rem",
                    position: "relative",
                    overflow: "hidden",
                    transition: "border-color 0.3s, box-shadow 0.3s",
                  }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = step.color + "55";
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${step.color}15`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = step.color + "25";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    {/* Tag + icon row */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                      <span style={{
                        fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.55rem",
                        letterSpacing: "0.14em", textTransform: "uppercase",
                        color: step.color, background: step.color + "12",
                        border: `1px solid ${step.color}25`, borderRadius: "3px",
                        padding: "0.2rem 0.5rem",
                      }}>{step.tag}</span>
                      <Icon color={step.color} />
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: "1.125rem", fontWeight: 600,
                      color: "#F2F2F2", letterSpacing: "-0.018em",
                      lineHeight: 1.25, marginBottom: "0.875rem",
                      whiteSpace: "pre-line",
                    }}>{step.title}</h3>

                    {/* Description */}
                    <p style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: "0.8125rem", color: "#6B7280",
                      lineHeight: "1.7", marginBottom: "1.25rem",
                    }}>{step.desc}</p>

                    {/* Detail bullets */}
                    <ul style={{ listStyle: "none", padding: 0, margin: 0,
                      display: "flex", flexDirection: "column", gap: "0.4rem",
                      marginBottom: step.cta ? "1.5rem" : 0,
                    }}>
                      {step.details.map(d => (
                        <li key={d} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <div style={{ width: "4px", height: "4px", borderRadius: "50%",
                            background: step.color, opacity: 0.7, flexShrink: 0 }} />
                          <span style={{
                            fontFamily: "'IBM Plex Mono', monospace",
                            fontSize: "0.6875rem", color: "#4B5563", letterSpacing: "0.04em",
                          }}>{d}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    {step.cta && (
                      <a
                        href={CALENDLY}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-cta"
                        style={{ width: "100%", justifyContent: "center", fontSize: "0.875rem", borderRadius: "6px" }}
                      >
                        {lang === "pt" ? "Agendar Free Demo" : "Book Free Demo"}
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M3 7h8M8 4l3 3-3 3" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    )}

                    {/* Bottom color line */}
                    <div style={{
                      position: "absolute", bottom: 0, left: 0, right: 0, height: "2px",
                      background: `linear-gradient(90deg, transparent, ${step.color}60, transparent)`,
                    }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom blend */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "120px",
        background: "linear-gradient(to bottom, transparent, #111214)",
        pointerEvents: "none",
      }} />

      <style>{`
        .roadmap-map-wrap {
          max-width: 1000px;
          margin: 0 auto;
        }
        .roadmap-zigzag {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          padding: 2.5rem 0;
        }
        .roadmap-node--up   { margin-top: 0;      }
        .roadmap-node--down { margin-top: 80px;   }

        @media (max-width: 900px) {
          .roadmap-zigzag {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .roadmap-node--down { margin-top: 0; }
          .roadmap-svg { display: none; }
        }
      `}</style>
    </section>
  );
}
