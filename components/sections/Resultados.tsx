"use client";
import { useEffect, useRef } from "react";
import type { Lang } from "@/app/page";

const t = {
  pt: {
    label: "Resultados Mensuráveis",
    h2: "Sistemas que entregam números.",
    sub: "Engenharia aplicada. Impacto verificável.",
    metrics: [
      { tag: "LOGÍSTICA", value: "87%", title: "Redução de falhas operacionais", desc: "Após orquestração centralizada com rastreabilidade de eventos em tempo real." },
      { tag: "MANUFATURA", value: "99.97%", title: "Disponibilidade", desc: "Ambiente de manufatura crítica com zero downtime planejado em 18 meses." },
      { tag: "FINANCEIRO", value: "10⁸", title: "Eventos processados por dia", desc: "Plataforma de decisão em tempo real para serviços financeiros regulados." },
      { tag: "INFRAESTRUTURA", value: "< 200ms", title: "Tempo de resposta", desc: "Inferência em borda com pipeline de dados otimizado para latência crítica." },
    ],
  },
  en: {
    label: "Measurable Results",
    h2: "Systems that deliver numbers.",
    sub: "Applied engineering. Verifiable impact.",
    metrics: [
      { tag: "LOGISTICS", value: "87%", title: "Reduction in operational failures", desc: "After centralized orchestration with real-time event traceability." },
      { tag: "MANUFACTURING", value: "99.97%", title: "Availability", desc: "Critical manufacturing environment with zero planned downtime in 18 months." },
      { tag: "FINANCIAL", value: "10⁸", title: "Events processed per day", desc: "Real-time decision platform for regulated financial services." },
      { tag: "INFRASTRUCTURE", value: "< 200ms", title: "Response time", desc: "Edge inference with data pipeline optimized for critical latency." },
    ],
  },
};

export default function Resultados({ lang }: { lang: Lang }) {
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
      id="resultados"
      ref={sectionRef}
      style={{
        background: "#111214",
        position: "relative",
        overflow: "hidden",
        paddingTop: "8rem",
        paddingBottom: "8rem",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "130px", background: "linear-gradient(to bottom, #0A0B0D, transparent)", pointerEvents: "none" }} />

      <div className="site-container">
        <div style={{ marginBottom: "4rem" }}>
          <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
            <span className="section-label">{tx.label}</span>
            <div style={{ width: "40px", height: "1px", background: "#1E2024" }} />
          </div>
          <h2 className="section-headline fade-up" style={{ marginBottom: "0.75rem", transitionDelay: "0.05s" }}>
            {tx.h2}
          </h2>
          <p className="mono-sm fade-up" style={{ transitionDelay: "0.1s" }}>
            {tx.sub}
          </p>
        </div>

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
          {tx.metrics.map(m => (
            <div
              key={m.tag}
              className="metric-card"
              style={{ background: "#0D0F11", padding: "2.5rem 2rem" }}
            >
              <div style={{ marginBottom: "1.75rem" }}>
                <span className="tag-pill">{m.tag}</span>
              </div>
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  fontWeight: 300,
                  letterSpacing: "-0.03em",
                  color: "#F2F2F2",
                  lineHeight: 1,
                  marginBottom: "1.5rem",
                }}
              >
                {m.value}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  color: "#F2F2F2",
                  letterSpacing: "-0.01em",
                  marginBottom: "0.875rem",
                  lineHeight: 1.3,
                }}
              >
                {m.title}
              </div>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "0.8125rem", color: "#6B7280", lineHeight: 1.7 }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "130px", background: "linear-gradient(to bottom, transparent, #111214)", pointerEvents: "none" }} />
    </section>
  );
}
