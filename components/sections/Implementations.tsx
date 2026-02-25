"use client";
import { useEffect, useRef } from "react";

type Lang = "pt" | "en";

const copy = {
  pt: {
    label: "Implementações",
    headline: "Três implementações. Três contextos críticos.",
    note: "Referências técnicas disponíveis mediante NDA.",
    items: [
      {
        index: "01",
        sector: "Logística & Supply Chain",
        challenge: "Orquestração de 600+ fornecedores em tempo real",
        context: "Ambiente com alta variabilidade de demanda, múltiplos sistemas legados e necessidade de rastreabilidade completa de eventos.",
        architecture: "Event-driven + CQRS + Saga Pattern",
        stack: ["Kafka","Kubernetes","Go","PostgreSQL","Redis"],
        metrics: [
          { value: "87%", label: "Redução de falhas" },
          { value: "4.2×", label: "Throughput" },
          { value: "340ms", label: "Latência média" },
        ],
      },
      {
        index: "02",
        sector: "Manufatura Industrial",
        challenge: "Automação de linha com zero-downtime deployment",
        context: "Linha de produção contínua integrada a sistemas SCADA e modelos de predição de falha em borda.",
        architecture: "Edge Computing + ML Pipeline + SCADA Integration",
        stack: ["Python","TensorFlow Serving","MQTT","TimescaleDB"],
        metrics: [
          { value: "99.97%", label: "SLA" },
          { value: "12×", label: "Velocidade de release" },
          { value: "0", label: "Downtime" },
        ],
      },
      {
        index: "03",
        sector: "Serviços Financeiros",
        challenge: "Processamento de eventos críticos com auditabilidade total",
        context: "Plataforma regulada que processa eventos de decisão em tempo real com obrigação de rastreabilidade imutável.",
        architecture: "Event Sourcing + Immutable Ledger + Real-time Analytics",
        stack: ["Flink","ClickHouse","gRPC","Rust","Vault"],
        metrics: [
          { value: "10⁸", label: "Eventos / dia" },
          { value: "< 50ms", label: "P99 latência" },
          { value: "100%", label: "Rastreabilidade" },
        ],
      },
    ],
  },
  en: {
    label: "Implementations",
    headline: "Three implementations. Three critical contexts.",
    note: "Technical references available under NDA.",
    items: [
      {
        index: "01",
        sector: "Logistics & Supply Chain",
        challenge: "Orchestration of 600+ suppliers in real time",
        context: "High demand variability environment with multiple legacy systems requiring complete event traceability.",
        architecture: "Event-driven + CQRS + Saga Pattern",
        stack: ["Kafka","Kubernetes","Go","PostgreSQL","Redis"],
        metrics: [
          { value: "87%", label: "Failure reduction" },
          { value: "4.2×", label: "Throughput" },
          { value: "340ms", label: "Avg latency" },
        ],
      },
      {
        index: "02",
        sector: "Industrial Manufacturing",
        challenge: "Production line automation with zero-downtime deployment",
        context: "Continuous production line integrated with SCADA systems and edge failure prediction models.",
        architecture: "Edge Computing + ML Pipeline + SCADA Integration",
        stack: ["Python","TensorFlow Serving","MQTT","TimescaleDB"],
        metrics: [
          { value: "99.97%", label: "SLA" },
          { value: "12×", label: "Release velocity" },
          { value: "0", label: "Downtime" },
        ],
      },
      {
        index: "03",
        sector: "Financial Services",
        challenge: "Critical event processing with full auditability",
        context: "Regulated platform processing real-time decision events with immutable traceability obligation.",
        architecture: "Event Sourcing + Immutable Ledger + Real-time Analytics",
        stack: ["Flink","ClickHouse","gRPC","Rust","Vault"],
        metrics: [
          { value: "10⁸", label: "Events / day" },
          { value: "< 50ms", label: "P99 latency" },
          { value: "100%", label: "Traceability" },
        ],
      },
    ],
  },
};

export default function Implementations({ lang = "pt" }: { lang?: Lang }) {
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
    <section ref={ref} id="implementacoes" className="section-wrap" style={{ background: "#0A0B0D", borderTop: "1px solid #1E2024" }}>
      <div className="site-container">

        {/* Section header */}
        <div style={{ marginBottom: "4rem" }}>
          <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
            <span className="section-label">{tx.label}</span>
            <div style={{ width: "40px", height: "1px", background: "#1E2024" }} />
          </div>
          <h2 className="section-headline fade-up" style={{ transitionDelay: "0.05s" }}>
            {tx.headline}
          </h2>
        </div>

        {/* Implementation rows */}
        <div className="fade-up" style={{ transitionDelay: "0.12s" }}>
          {tx.items.map((item, i) => (
            <div key={item.index} className="impl-row">
              <div className="impl-inner">

                {/* Left column */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  {/* Sector + index */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", color: "#2A2D32", letterSpacing: "0.06em" }}>
                      {item.index}
                    </span>
                    <div style={{ width: "1px", height: "12px", background: "#1E2024" }} />
                    <span className="tag-pill">{item.sector.toUpperCase()}</span>
                  </div>

                  {/* Challenge */}
                  <h3 style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: "1.0625rem",
                    fontWeight: 500,
                    color: "#F2F2F2",
                    letterSpacing: "-0.01em",
                    marginBottom: "0.75rem",
                    lineHeight: 1.3,
                  }}>
                    {item.challenge}
                  </h3>

                  {/* Context */}
                  <p className="body-sm" style={{ marginBottom: "1.25rem", maxWidth: "480px", color: "#6B7280", lineHeight: "1.75" }}>
                    {item.context}
                  </p>

                  {/* Architecture */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1.25rem" }}>
                    <span className="mono-sm" style={{ letterSpacing: "0.08em" }}>ARCH</span>
                    <div style={{ width: "1px", height: "12px", background: "#1E2024" }} />
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.75rem", color: "#B8BCC2" }}>
                      {item.architecture}
                    </span>
                  </div>

                  {/* Stack */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                    {item.stack.map(s => <span key={s} className="tag-pill">{s}</span>)}
                  </div>
                </div>

                {/* Right — metrics */}
                <div className="impl-metrics">
                  {item.metrics.map(m => (
                    <div key={m.label} style={{
                      background: "#0D0F11",
                      border: "1px solid #1E2024",
                      borderRadius: "2px",
                      padding: "1.375rem 1.25rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.4rem",
                    }}>
                      <span style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "1.375rem",
                        fontWeight: 300,
                        color: "#F2F2F2",
                        letterSpacing: "-0.025em",
                        lineHeight: 1,
                      }}>
                        {m.value}
                      </span>
                      <span style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "0.6rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#4B5563",
                        lineHeight: 1.4,
                      }}>
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "2.5rem", transitionDelay: "0.2s" }}>
          <div style={{ width: "48px", height: "1px", background: "#1E2024" }} />
          <span className="mono-sm" style={{ letterSpacing: "0.1em" }}>{tx.note.toUpperCase()}</span>
          <div style={{ width: "48px", height: "1px", background: "#1E2024" }} />
        </div>

      </div>

      <style>{`
        .impl-inner {
          display: flex;
          gap: 3rem;
          align-items: flex-start;
        }
        .impl-metrics {
          flex-shrink: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          width: 320px;
          background: #1E2024;
        }
        @media (max-width: 900px) {
          .impl-inner    { flex-direction: column; gap: 2rem; }
          .impl-metrics  { width: 100%; }
        }
      `}</style>
    </section>
  );
}
