"use client";
import { useEffect, useRef } from "react";

type Lang = "pt" | "en";

const copy = {
  pt: {
    label: "Camadas de Automação",
    headline: "Quatro camadas. Um sistema.",
    sub: "Independentes por design. Coesas por arquitetura.",
    status: { systems: "40+ sistemas integrados", layers: "4 camadas ativas", uptime: "99.98% uptime médio" },
    layers: [
      { index: "01", title: "Orquestração de Sistemas",  badge: "CRITICAL", desc: "Coordenação de sistemas heterogêneos através de um plano de controle unificado. Estado consistente. Execução determinística.", tags: ["Distributed Coordination","State Management","Circuit Breaker"] },
      { index: "02", title: "Automação Inteligente",     badge: "CRITICAL", desc: "Substituição de intervenção humana em fluxos operacionais. Decisão baseada em dados. Ação com rastreabilidade completa.",   tags: ["Rule-based Execution","ML-assisted Decision","Process Mining"] },
      { index: "03", title: "Infraestrutura Resiliente", badge: "HIGH",     desc: "Fundação tecnológica capaz de absorver falhas, escalar horizontalmente e operar sem degradação.",                           tags: ["Self-healing","Immutable Infra","Multi-region","SLA 99.99%"] },
      { index: "04", title: "Inteligência Operacional",  badge: "HIGH",     desc: "Observabilidade profunda em cada camada. Correlação de eventos. Diagnóstico proativo antes da falha.",                       tags: ["Full Observability","Predictive Alerting","Log Correlation"] },
    ],
  },
  en: {
    label: "Automation Layers",
    headline: "Four layers. One system.",
    sub: "Independent by design. Cohesive by architecture.",
    status: { systems: "40+ integrated systems", layers: "4 active layers", uptime: "99.98% avg uptime" },
    layers: [
      { index: "01", title: "System Orchestration",    badge: "CRITICAL", desc: "Coordination of heterogeneous systems through a unified control plane. Consistent state. Deterministic execution.", tags: ["Distributed Coordination","State Management","Circuit Breaker"] },
      { index: "02", title: "Intelligent Automation",  badge: "CRITICAL", desc: "Replacement of human intervention in operational flows. Data-driven decision. Action with full traceability.",       tags: ["Rule-based Execution","ML-assisted Decision","Process Mining"] },
      { index: "03", title: "Resilient Infrastructure",badge: "HIGH",     desc: "Technological foundation capable of absorbing failures, scaling horizontally and operating without degradation.",       tags: ["Self-healing","Immutable Infra","Multi-region","SLA 99.99%"] },
      { index: "04", title: "Operational Intelligence",badge: "HIGH",     desc: "Deep observability across every layer. Event correlation. Proactive diagnosis before failure materialises.",         tags: ["Full Observability","Predictive Alerting","Log Correlation"] },
    ],
  },
};

export default function AutomationLayers({ lang = "pt" }: { lang?: Lang }) {
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
    <section ref={ref} id="solucoes" className="section-wrap" style={{ background: "#111214", borderTop: "1px solid #1E2024" }}>
      <div className="site-container">

        {/* Header */}
        <div style={{ maxWidth: "680px", marginBottom: "4rem" }}>
          <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
            <span className="section-label">{tx.label}</span>
            <div style={{ width: "40px", height: "1px", background: "#1E2024" }} />
          </div>
          <h2 className="section-headline fade-up" style={{ marginBottom: "0.875rem", transitionDelay: "0.06s" }}>
            {tx.headline}
          </h2>
          <p className="body-copy fade-up" style={{ transitionDelay: "0.1s" }}>{tx.sub}</p>
        </div>

        {/* Layers list */}
        <div className="fade-up" style={{ borderTop: "1px solid #1E2024", transitionDelay: "0.14s" }}>
          {tx.layers.map((layer) => (
            <div key={layer.index} className="impl-row">
              <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>

                {/* Index */}
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", color: "#2A2D32", letterSpacing: "0.06em", marginTop: "0.25rem", flexShrink: 0, width: "1.5rem" }}>
                  {layer.index}
                </span>

                {/* V-rule */}
                <div style={{ width: "1px", alignSelf: "stretch", background: "#1E2024", flexShrink: 0 }} />

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.625rem", marginBottom: "0.625rem" }}>
                    <h3 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "0.9375rem", fontWeight: 500, color: "#F2F2F2", letterSpacing: "-0.01em", margin: 0 }}>
                      {layer.title}
                    </h3>
                    <span className="complexity-badge">{layer.badge}</span>
                  </div>

                  <p className="body-sm" style={{ marginBottom: "1rem", maxWidth: "560px", color: "#6B7280", lineHeight: "1.75" }}>
                    {layer.desc}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                    {layer.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Status bar */}
        <div className="fade-up" style={{
          marginTop: "2.5rem",
          padding: "1.25rem 1.5rem",
          background: "#0D0F11",
          border: "1px solid #1E2024",
          borderRadius: "2px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          transitionDelay: "0.2s",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
            <div className="status-dot" />
            <span className="mono-sm" style={{ letterSpacing: "0.08em" }}>SISTEMA OPERACIONAL</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem 3rem" }}>
            {[tx.status.systems, tx.status.layers, tx.status.uptime].map(s => (
              <span key={s} style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6875rem", color: "#4B5563" }}>{s}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
