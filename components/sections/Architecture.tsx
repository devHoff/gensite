"use client";
import { useEffect, useRef } from "react";

type Lang = "pt" | "en";

const copy = {
  pt: {
    label: "Arquitetura",
    headline: "Arquitetura antes da automação.",
    body: "Engenharia aplicada para operações críticas.\nProjetamos e operamos sistemas de automação em ambientes onde falha, latência e indisponibilidade têm impacto mensurável.",
    blocks: [
      { index: "01", title: "Dados & Infraestrutura",  desc: "Ingestão, processamento e persistência para ambientes críticos.", tags: ["Event Streaming","Data Mesh","Fault Tolerance"] },
      { index: "02", title: "Lógica & Automação",       desc: "Orquestração, regras e inteligência sobre fluxos operacionais.",   tags: ["Rules Engine","Workflow Orchestration","ML Inference"] },
      { index: "03", title: "Execução & Escala",        desc: "Operação distribuída, monitoramento contínuo, evolução controlada.", tags: ["Auto-scaling","Observability","Zero-downtime"] },
    ],
  },
  en: {
    label: "Architecture",
    headline: "Architecture before automation.",
    body: "Applied engineering for critical operations.\nWe design and operate automation systems in environments where failure, latency and unavailability have measurable impact.",
    blocks: [
      { index: "01", title: "Data & Infrastructure",  desc: "Ingestion, processing and persistence for critical environments.", tags: ["Event Streaming","Data Mesh","Fault Tolerance"] },
      { index: "02", title: "Logic & Automation",      desc: "Orchestration, rules and intelligence over operational flows.",   tags: ["Rules Engine","Workflow Orchestration","ML Inference"] },
      { index: "03", title: "Execution & Scale",       desc: "Distributed operation, continuous monitoring, controlled evolution.", tags: ["Auto-scaling","Observability","Zero-downtime"] },
    ],
  },
};

/* Geometric SVG icons — pure SVG, monochromaticm one per block */
const icons = [
  /* Layered rects — data storage layers */
  <svg key="icon0" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="4"  y="7"  width="28" height="6"  rx="1" stroke="#B8BCC2" strokeWidth="0.7" opacity="0.45" fill="none"/>
    <rect x="4"  y="15" width="28" height="6"  rx="1" stroke="#B8BCC2" strokeWidth="0.7" opacity="0.3"  fill="none"/>
    <rect x="4"  y="23" width="28" height="6"  rx="1" stroke="#B8BCC2" strokeWidth="0.7" opacity="0.18" fill="none"/>
    <line x1="10" y1="7" x2="10" y2="29" stroke="#B8BCC2" strokeWidth="0.4" opacity="0.2"/>
    <line x1="18" y1="7" x2="18" y2="29" stroke="#B8BCC2" strokeWidth="0.4" opacity="0.2"/>
    <line x1="26" y1="7" x2="26" y2="29" stroke="#B8BCC2" strokeWidth="0.4" opacity="0.2"/>
  </svg>,
  /* Triangle node graph — logic/decision */
  <svg key="icon1" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="8"  cy="11" r="3" stroke="#B8BCC2" strokeWidth="0.7" fill="none" opacity="0.5"/>
    <circle cx="28" cy="11" r="3" stroke="#B8BCC2" strokeWidth="0.7" fill="none" opacity="0.5"/>
    <circle cx="18" cy="27" r="3" stroke="#B8BCC2" strokeWidth="0.7" fill="none" opacity="0.5"/>
    <line x1="11" y1="11" x2="25" y2="11" stroke="#B8BCC2" strokeWidth="0.7" opacity="0.3"/>
    <line x1="10" y1="13.5" x2="16.5" y2="24.5" stroke="#B8BCC2" strokeWidth="0.7" opacity="0.3"/>
    <line x1="26" y1="13.5" x2="19.5" y2="24.5" stroke="#B8BCC2" strokeWidth="0.7" opacity="0.3"/>
    <circle cx="18" cy="11" r="1.5" fill="#B8BCC2" opacity="0.2"/>
  </svg>,
  /* Bar chart ascending — scale/execution */
  <svg key="icon2" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="4"  y="20" width="7" height="11" rx="1" stroke="#B8BCC2" strokeWidth="0.7" fill="none" opacity="0.28"/>
    <rect x="14.5" y="13" width="7" height="18" rx="1" stroke="#B8BCC2" strokeWidth="0.7" fill="none" opacity="0.42"/>
    <rect x="25" y="6"  width="7" height="25" rx="1" stroke="#B8BCC2" strokeWidth="0.7" fill="none" opacity="0.6"/>
    <path d="M6 18 L18 11 L28 5" stroke="#B8BCC2" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.25"/>
  </svg>,
];

export default function Architecture({ lang = "pt" }: { lang?: Lang }) {
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
    <section ref={ref} id="arquitetura" className="section-wrap" style={{ background: "#0A0B0D", borderTop: "1px solid #1E2024" }}>
      <div className="site-container">

        {/* Two-column layout: text LEFT, blocks RIGHT — equal height */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "stretch" }}
          className="arch-layout">

          {/* Left — text */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
              <span className="section-label">{tx.label}</span>
              <div style={{ width: "40px", height: "1px", background: "#1E2024" }} />
            </div>

            <h2 className="section-headline fade-up" style={{ marginBottom: "2rem", transitionDelay: "0.06s" }}>
              {tx.headline}
            </h2>

            {/* Body text — exact spec copy, split on \n */}
            <div className="fade-up" style={{ transitionDelay: "0.12s" }}>
              {tx.body.split("\n").map((line, i) => (
                <p key={i} className="body-copy" style={{
                  lineHeight: "1.8",
                  marginBottom: i === 0 ? "0.75rem" : 0,
                  fontStyle: i === 0 ? "normal" : "normal",
                }}>
                  {line}
                </p>
              ))}
            </div>

            {/* Abstract layer diagram */}
            <div className="fade-up" style={{ marginTop: "3rem", transitionDelay: "0.18s" }}>
              <svg viewBox="0 0 500 140" style={{ width: "100%", maxWidth: "420px" }} aria-label="Layer diagram">
                <defs>
                  <linearGradient id="bandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="#B8BCC2" stopOpacity="0"/>
                    <stop offset="12%"  stopColor="#B8BCC2" stopOpacity="0.07"/>
                    <stop offset="88%"  stopColor="#B8BCC2" stopOpacity="0.07"/>
                    <stop offset="100%" stopColor="#B8BCC2" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                {[14, 54, 94].map((y, i) => (
                  <g key={y}>
                    <rect x="40" y={y} width="420" height="28" rx="1" fill="url(#bandGrad)" opacity={0.9 - i * 0.2}/>
                    <line x1="40"  y1={y}      x2="460" y2={y}      stroke="#B8BCC2" strokeWidth="0.4" strokeOpacity="0.12"/>
                    <line x1="40"  y1={y + 28} x2="460" y2={y + 28} stroke="#B8BCC2" strokeWidth="0.4" strokeOpacity="0.12"/>
                    <text x="10" y={y + 18} fontFamily="'IBM Plex Mono', monospace" fontSize="7" fill="#4B5563" letterSpacing="1">
                      {["DATA","LOGIC","EXEC"][i]}
                    </text>
                  </g>
                ))}
                {[90, 160, 240, 340, 430].map((x, i) => (
                  <g key={x}>
                    <line x1={x} y1="42" x2={x} y2="54" stroke="#B8BCC2" strokeWidth="0.5" strokeOpacity="0.18"/>
                    <line x1={x} y1="82" x2={x} y2="94" stroke="#B8BCC2" strokeWidth="0.5" strokeOpacity="0.18"/>
                    <circle cx={x} cy="42" r="1.5" fill="#B8BCC2" opacity="0.14"/>
                    <circle cx={x} cy="54" r="1.5" fill="#B8BCC2" opacity="0.14"/>
                    <circle cx={x} cy="82" r="1.5" fill="#B8BCC2" opacity="0.14"/>
                    <circle cx={x} cy="94" r="1.5" fill="#B8BCC2" opacity="0.14"/>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          {/* Right — blocks (equal height via CSS grid self-stretch) */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#1E2024" }}
            className="fade-up" >
            {tx.blocks.map((b, i) => (
              <div key={b.index} className="arch-block" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Header row */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                  <div style={{ padding: "0.5rem", border: "1px solid #1E2024", background: "#16181C", borderRadius: "2px" }}>
                    {icons[i]}
                  </div>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", color: "#2A2D32", letterSpacing: "0.06em" }}>
                    {b.index}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "0.9375rem", fontWeight: 500, color: "#F2F2F2", letterSpacing: "-0.01em", marginBottom: "0.625rem" }}>
                  {b.title}
                </h3>

                {/* Desc */}
                <p className="body-sm" style={{ marginBottom: "1.25rem", flex: 1, color: "#6B7280" }}>
                  {b.desc}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                  {b.tags.map(tag => <span key={tag} className="tag-pill">{tag}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .arch-layout { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
