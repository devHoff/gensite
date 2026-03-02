"use client";
import { useEffect, useRef } from "react";
import type { Lang } from "@/app/page";

const DEMO_URL = "https://calendly.com/arthur-renck3/book-demo";

const t = {
  pt: {
    label: "Como Funciona",
    h2: "3 passos para escalar sua empresa.",
    sub: "Do primeiro contato ao resultado real.",
    steps: [
      {
        num: "01", label: "INÍCIO", title: "Agende sua\nFree Demo",
        desc: "Em 30 minutos mapeamos seus processos, identificamos gargalos e apresentamos um diagnóstico técnico sem compromisso.",
        items: ["Diagnóstico gratuito", "Mapeamento de processos", "ROI estimado"],
        cta: "Agendar Free Demo", nodeClass: "roadmap-node--up", color: "#F26522",
      },
      {
        num: "02", label: "EXECUÇÃO", title: "Implementamos\na Solução",
        desc: "Agentes de IA, automações e integrações construídas sob medida. Primeiros resultados em 72 horas.",
        items: ["Agentes de IA custom", "Integrações nativas", "Infraestrutura resiliente"],
        cta: null, nodeClass: "roadmap-node--down", color: "#3B82F6",
      },
      {
        num: "03", label: "RESULTADO", title: "Sua Empresa\nEscala",
        desc: "Processos automatizados, equipe focada em estratégia, métricas crescendo. Resultado mensurável.",
        items: ["Custos reduzidos", "Time focado em crescimento", "Escala sem atrito"],
        cta: null, nodeClass: "roadmap-node--up", color: "#10B981",
      },
    ],
  },
  en: {
    label: "How It Works",
    h2: "3 steps to scale your company.",
    sub: "From first contact to real results.",
    steps: [
      {
        num: "01", label: "START", title: "Schedule your\nFree Demo",
        desc: "In 30 minutes we map your processes, identify bottlenecks and present a technical diagnosis with no commitment.",
        items: ["Free diagnosis", "Process mapping", "Estimated ROI"],
        cta: "Schedule Free Demo", nodeClass: "roadmap-node--up", color: "#F26522",
      },
      {
        num: "02", label: "EXECUTION", title: "We Implement\nthe Solution",
        desc: "Custom AI agents, automations and integrations built to measure. First results in 72 hours.",
        items: ["Custom AI agents", "Native integrations", "Resilient infrastructure"],
        cta: null, nodeClass: "roadmap-node--down", color: "#3B82F6",
      },
      {
        num: "03", label: "RESULT", title: "Your Company\nScales",
        desc: "Automated processes, team focused on strategy, metrics growing. Measurable results.",
        items: ["Reduced costs", "Team focused on growth", "Frictionless scaling"],
        cta: null, nodeClass: "roadmap-node--up", color: "#10B981",
      },
    ],
  },
};

const icons = [
  <svg key="1" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="3" y="6" width="22" height="19" rx="2" stroke="#F26522" strokeWidth="1.3" fill="none" />
    <line x1="3" y1="12" x2="25" y2="12" stroke="#F26522" strokeWidth="1" strokeOpacity="0.5" />
    <line x1="9" y1="3" x2="9" y2="9" stroke="#F26522" strokeWidth="1.3" strokeLinecap="round" />
    <line x1="19" y1="3" x2="19" y2="9" stroke="#F26522" strokeWidth="1.3" strokeLinecap="round" />
    <rect x="8" y="15" width="4" height="4" rx="0.5" fill="#F26522" opacity="0.35" />
    <rect x="14" y="15" width="4" height="4" rx="0.5" fill="#F26522" opacity="0.6" />
    <rect x="20" y="15" width="4" height="4" rx="0.5" fill="#F26522" opacity="0.2" />
  </svg>,
  <svg key="2" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="10" cy="11" r="4.5" stroke="#3B82F6" strokeWidth="1.3" fill="none" />
    <circle cx="10" cy="11" r="2" stroke="#3B82F6" strokeWidth="0.9" fill="none" strokeOpacity="0.5" />
    <circle cx="20" cy="18" r="3.5" stroke="#3B82F6" strokeWidth="1.3" fill="none" />
    <circle cx="20" cy="18" r="1.5" stroke="#3B82F6" strokeWidth="0.8" fill="none" strokeOpacity="0.5" />
    <path d="M10 6.5 L10 5M10 17 L10 18M5.5 11 L4 11M15 11 L16.5 11M7 8 L5.8 6.8M14.2 14.5 L13 13" stroke="#3B82F6" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.6" />
    <path d="M20 14.5 L20 13M20 22 L20 23.5M16.5 18 L15 18M24 18 L25.5 18" stroke="#3B82F6" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.6" />
  </svg>,
  <svg key="3" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M14 3 C14 3 20 5.5 22 13 L17 18 L11 18 L6 13 C8 5.5 14 3 14 3 Z" stroke="#10B981" strokeWidth="1.3" fill="none" strokeLinejoin="round" />
    <circle cx="14" cy="11" r="2.5" stroke="#10B981" strokeWidth="1" fill="none" strokeOpacity="0.55" />
    <path d="M8 17 L5 20 L7 22 L10 21M20 17 L23 20 L21 22 L18 21" stroke="#10B981" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.45" />
    <path d="M11.5 18 L10 24 L14 22 L18 24 L16.5 18" stroke="#10B981" strokeWidth="1" strokeLinejoin="round" strokeOpacity="0.5" />
  </svg>,
];

export default function ComoFunciona({ lang }: { lang: Lang }) {
  const sectionRef = useRef<HTMLElement>(null);
  const tx = t[lang];

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".fade-up");
    if (!els) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="como-funciona"
      ref={sectionRef}
      style={{
        background: "#0A0B0D",
        paddingTop: "8rem",
        paddingBottom: "8rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to bottom, #111214, transparent)", pointerEvents: "none" }} />

      <div className="site-container">
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <div className="fade-up" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
            <span className="section-label">{tx.label}</span>
            <div style={{ width: "40px", height: "1px", background: "#1E2024" }} />
          </div>
          <h2 className="section-headline fade-up" style={{ marginBottom: "0.75rem", transitionDelay: "0.06s" }}>
            {tx.h2}
          </h2>
          <p className="mono-sm fade-up" style={{ transitionDelay: "0.1s" }}>{tx.sub}</p>
        </div>

        <div className="fade-up roadmap-map-wrap" style={{ transitionDelay: "0.14s", position: "relative" }}>
          {/* Connecting arrows SVG (desktop) */}
          <svg
            className="roadmap-svg"
            viewBox="0 0 900 340"
            preserveAspectRatio="none"
            fill="none"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 }}
          >
            <defs>
              <marker id="arrow1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M1 2 L6 4 L1 6" stroke="#F26522" strokeWidth="1.2" strokeLinecap="round" fill="none" />
              </marker>
              <marker id="arrow2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M1 2 L6 4 L1 6" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" fill="none" />
              </marker>
            </defs>
            <path d="M 200 120 C 350 120, 350 220, 500 220" stroke="#F26522" strokeWidth="1.5" strokeDasharray="6 5" strokeOpacity="0.5" markerEnd="url(#arrow1)" />
            <path d="M 570 220 C 720 220, 720 120, 860 120" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="6 5" strokeOpacity="0.5" markerEnd="url(#arrow2)" />
          </svg>

          <div className="roadmap-zigzag">
            {tx.steps.map((step, idx) => (
              <div key={step.num} className={`roadmap-node ${step.nodeClass}`} style={{ zIndex: 2, position: "relative" }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "50%",
                  border: `2px solid ${step.color}`,
                  background: `${step.color}15`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "1.25rem",
                  boxShadow: `0 0 20px ${step.color}25`,
                  flexShrink: 0,
                }}>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.875rem", fontWeight: 500, color: step.color }}>
                    {step.num}
                  </span>
                </div>

                <div style={{
                  background: "#0D0F11",
                  border: `1px solid ${step.color}25`,
                  borderRadius: "10px",
                  padding: "1.75rem",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                    <span style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.55rem", letterSpacing: "0.14em",
                      textTransform: "uppercase", color: step.color,
                      background: `${step.color}12`, border: `1px solid ${step.color}25`,
                      borderRadius: "3px", padding: "0.2rem 0.5rem",
                    }}>
                      {step.label}
                    </span>
                    {icons[idx]}
                  </div>

                  <h3 style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: "1.125rem", fontWeight: 600, color: "#F2F2F2",
                    letterSpacing: "-0.018em", lineHeight: 1.25,
                    marginBottom: "0.875rem", whiteSpace: "pre-line",
                  }}>
                    {step.title}
                  </h3>

                  <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "0.8125rem", color: "#6B7280", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                    {step.desc}
                  </p>

                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: step.cta ? "1.5rem" : 0 }}>
                    {step.items.map(item => (
                      <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: step.color, opacity: 0.7, flexShrink: 0 }} />
                        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6875rem", color: "#4B5563", letterSpacing: "0.04em" }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {step.cta && (
                    <a
                      href={DEMO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-cta"
                      style={{ width: "100%", justifyContent: "center", fontSize: "0.875rem", borderRadius: "6px" }}
                    >
                      {step.cta}
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7h8M8 4l3 3-3 3" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  )}

                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: "2px",
                    background: `linear-gradient(90deg, transparent, ${step.color}60, transparent)`,
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
