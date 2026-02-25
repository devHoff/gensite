"use client";
import { useEffect, useRef } from "react";

type Lang = "pt" | "en";

const copy = {
  pt: {
    label: "Resultados Mensuráveis",
    headline: "Sistemas que entregam números.",
    sub: "Engenharia aplicada. Impacto verificável.",
    metrics: [
      {
        value: "87%",
        unit: "",
        title: "Redução de falhas operacionais",
        desc: "Após orquestração centralizada com rastreabilidade de eventos em tempo real.",
        sector: "Logística",
      },
      {
        value: "99.97%",
        unit: "",
        title: "Disponibilidade",
        desc: "Ambiente de manufatura crítica com zero downtime planejado em 18 meses.",
        sector: "Manufatura",
      },
      {
        value: "10⁸",
        unit: "",
        title: "Eventos processados por dia",
        desc: "Plataforma de decisão em tempo real para serviços financeiros regulados.",
        sector: "Financeiro",
      },
      {
        value: "< 200ms",
        unit: "",
        title: "Tempo de resposta",
        desc: "Inferência em borda com pipeline de dados otimizado para latência crítica.",
        sector: "Infraestrutura",
      },
    ],
  },
  en: {
    label: "Measurable Results",
    headline: "Systems that deliver numbers.",
    sub: "Applied engineering. Verifiable impact.",
    metrics: [
      {
        value: "87%",
        unit: "",
        title: "Reduction in operational failures",
        desc: "After centralized orchestration with real-time event traceability.",
        sector: "Logistics",
      },
      {
        value: "99.97",
        unit: "%",
        title: "SLA availability",
        desc: "Critical manufacturing environment with zero planned downtime in 18 months.",
        sector: "Manufacturing",
      },
      {
        value: "10⁸",
        unit: "",
        title: "Events processed per day",
        desc: "Real-time decision platform for regulated financial services.",
        sector: "Financial",
      },
      {
        value: "< 50ms",
        unit: "",
        title: "P99 decision latency",
        desc: "Edge inference with data pipeline optimized for critical latency.",
        sector: "Infrastructure",
      },
    ],
  },
};

export default function Results({ lang = "pt" }: { lang?: Lang }) {
  const tx = copy[lang];
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".fade-up");
    if (!els) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.07, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="resultados" className="section-wrap" style={{ background: "#111214", borderTop: "1px solid #1E2024" }}>
      <div className="site-container">

        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
            <span className="section-label">{tx.label}</span>
            <div style={{ width: "40px", height: "1px", background: "#1E2024" }} />
          </div>
          <h2 className="section-headline fade-up" style={{ marginBottom: "0.75rem", transitionDelay: "0.05s" }}>
            {tx.headline}
          </h2>
          <p className="mono-sm fade-up" style={{ transitionDelay: "0.1s" }}>{tx.sub}</p>
        </div>

        {/* Metric cards grid — spacious, number-first */}
        <div
          className="fade-up"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1px",
            background: "#1E2024",
            transitionDelay: "0.14s",
          }}
        >
          {tx.metrics.map((m, i) => (
            <div key={i} className="metric-card" style={{ background: "#0D0F11", padding: "2.5rem 2rem" }}>
              {/* Sector badge */}
              <div style={{ marginBottom: "1.75rem" }}>
                <span className="tag-pill">{m.sector.toUpperCase()}</span>
              </div>

              {/* Value — protagonist */}
              <div style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 300,
                letterSpacing: "-0.03em",
                color: "#F2F2F2",
                lineHeight: 1,
                marginBottom: "1.5rem",
              }}>
                {m.value}
              </div>

              {/* Title */}
              <div style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 500,
                color: "#F2F2F2",
                letterSpacing: "-0.01em",
                marginBottom: "0.875rem",
                lineHeight: 1.3,
              }}>
                {m.title}
              </div>

              {/* Description — smaller, separated */}
              <p style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "0.8125rem",
                color: "#6B7280",
                lineHeight: "1.7",
              }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
