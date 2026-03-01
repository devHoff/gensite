"use client";
import { useEffect, useRef } from "react";

type Lang = "pt" | "en";

type Outcome = {
  sector: string;
  title: string;
  story: string;
  impact: string;
  delta: string;
  tags: string[];
};

const copy: Record<Lang, { label: string; headline: string; sub: string; outcomes: Outcome[] }> = {
  pt: {
    label: "Resultados Reais",
    headline: "Impacto visual, não só números frios.",
    sub: "Cada projeto vira uma história de antes e depois. Abaixo, os ganhos mais relevantes por setor.",
    outcomes: [
      {
        sector: "Clínicas Odontológicas",
        title: "Agentes que lembram retorno e triagem",
        story: "Agenda ativa com confirmação automática por WhatsApp, priorização por urgência e reengajamento de pacientes inativos.",
        impact: "Agenda ocupada",
        delta: "+36%",
        tags: ["WhatsApp", "Follow-up", "No-show control"],
      },
      {
        sector: "Marketplace Automotivo",
        title: "Pré-venda com qualificação automática",
        story: "Leads entram, recebem resposta contextual e seguem para o time comercial já segmentados por intenção de compra.",
        impact: "Conversão de lead",
        delta: "+28%",
        tags: ["Lead scoring", "CRM sync", "Venda assistida"],
      },
      {
        sector: "Operações de Campo",
        title: "Despacho inteligente por prioridade",
        story: "Filas operacionais foram reordenadas com regras e IA para reduzir gargalo e tempo médio até atendimento.",
        impact: "Tempo de atendimento",
        delta: "-42%",
        tags: ["Routing", "SLA", "Ops automation"],
      },
      {
        sector: "Suporte Técnico",
        title: "Autoatendimento com contexto completo",
        story: "Base de conhecimento integrada ao histórico do cliente para respostas precisas sem escalonar tudo ao time humano.",
        impact: "Volume escalado",
        delta: "3.4x",
        tags: ["Knowledge base", "Context memory", "Ticket triage"],
      },
    ],
  },
  en: {
    label: "Real Outcomes",
    headline: "Visual impact, not just cold numbers.",
    sub: "Every project becomes a before-and-after story. Here are the strongest gains by segment.",
    outcomes: [
      {
        sector: "Dental Clinics",
        title: "Agents for recalls and smart triage",
        story: "Active scheduling with WhatsApp confirmations, urgency prioritization and reactivation of inactive patients.",
        impact: "Booked agenda",
        delta: "+36%",
        tags: ["WhatsApp", "Follow-up", "No-show control"],
      },
      {
        sector: "Car Marketplace",
        title: "Automated pre-sales qualification",
        story: "Leads are answered with context and handed to sales already segmented by buying intent.",
        impact: "Lead conversion",
        delta: "+28%",
        tags: ["Lead scoring", "CRM sync", "Assisted sales"],
      },
      {
        sector: "Field Operations",
        title: "Priority-based intelligent dispatch",
        story: "Operational queues were reordered with rules and AI to reduce bottlenecks and time-to-service.",
        impact: "Service time",
        delta: "-42%",
        tags: ["Routing", "SLA", "Ops automation"],
      },
      {
        sector: "Technical Support",
        title: "Context-rich self-service",
        story: "Knowledge base connected to customer history for precise answers without escalating every ticket.",
        impact: "Scaled volume",
        delta: "3.4x",
        tags: ["Knowledge base", "Context memory", "Ticket triage"],
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
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="resultados" className="section-wrap" style={{ background: "#111214" }}>
      <div className="site-container">
        <div style={{ marginBottom: "4rem" }}>
          <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
            <span className="section-label">{tx.label}</span>
            <div style={{ width: "40px", height: "1px", background: "#1E2024" }} />
          </div>
          <h2 className="section-headline fade-up" style={{ marginBottom: "0.75rem", transitionDelay: "0.05s" }}>{tx.headline}</h2>
          <p className="body-copy fade-up" style={{ maxWidth: "720px", transitionDelay: "0.1s" }}>{tx.sub}</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
          {tx.outcomes.map((item, i) => (
            <article
              key={item.title}
              className="fade-up"
              style={{
                transitionDelay: `${0.12 + i * 0.06}s`,
                border: "1px solid #1E2024",
                background: "linear-gradient(160deg, #0D0F11 0%, #121418 60%, #0D0F11 100%)",
                padding: "1.5rem",
                minHeight: "290px",
                display: "flex",
                flexDirection: "column",
                gap: "0.9rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                <span className="tag-pill">{item.sector.toUpperCase()}</span>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "1.1rem", color: "#F26522" }}>{item.delta}</span>
              </div>

              <h3 style={{ fontSize: "1.05rem", lineHeight: 1.35 }}>{item.title}</h3>
              <p className="body-sm" style={{ color: "#8C93A0", lineHeight: 1.75 }}>{item.story}</p>

              <div style={{ marginTop: "auto" }}>
                <p className="mono-sm" style={{ marginBottom: "0.4rem" }}>{item.impact.toUpperCase()}</p>
                <div style={{ height: "6px", borderRadius: "999px", background: "#1A1D23", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `calc(52% + ${i * 10}%)`, background: "linear-gradient(90deg, #F26522, #C94E14)", animation: "growBar 1.1s ease" }} />
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginTop: "0.5rem" }}>
                {item.tags.map(tag => <span key={tag} className="tag-pill">{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

