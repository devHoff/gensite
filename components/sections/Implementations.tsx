"use client";
import { useEffect, useRef } from "react";

type Lang = "pt" | "en";

type PlanStep = {
  n: string;
  title: string;
  text: string;
};

const copy: Record<Lang, { label: string; headline: string; sub: string; steps: PlanStep[] }> = {
  pt: {
    label: "Plano de Execução",
    headline: "3 passos para turbinar sua operação.",
    sub: "Direto ao ponto, sem complexidade desnecessária.",
    steps: [
      { n: "1", title: "Mapear", text: "Mapeamos funis, equipe e gargalos." },
      { n: "2", title: "Automatizar", text: "Implementamos fluxos e integrações." },
      { n: "3", title: "Escalar", text: "Otimizações contínuas para crescer." },
    ],
  },
  en: {
    label: "Execution Plan",
    headline: "3 steps to boost your operation.",
    sub: "Straight to the point, no unnecessary complexity.",
    steps: [
      { n: "1", title: "Map", text: "We map funnel, team and bottlenecks." },
      { n: "2", title: "Automate", text: "We implement flows and integrations." },
      { n: "3", title: "Scale", text: "Continuous optimization for growth." },
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
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="implementacoes" className="section-wrap" style={{ background: "#0A0B0D", borderTop: "1px solid #1E2024" }}>
      <div className="site-container">
        <div style={{ marginBottom: "3rem", maxWidth: "760px" }}>
          <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
            <span className="section-label">{tx.label}</span>
            <div style={{ width: "40px", height: "1px", background: "#1E2024" }} />
          </div>
          <h2 className="section-headline fade-up" style={{ marginBottom: "0.7rem", transitionDelay: "0.06s" }}>{tx.headline}</h2>
          <p className="body-copy fade-up" style={{ transitionDelay: "0.12s" }}>{tx.sub}</p>
        </div>

        <div className="fade-up plan-grid" style={{ transitionDelay: "0.18s", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "1rem" }}>
          {tx.steps.map((step, i) => (
            <article key={step.n} style={{ border: "1px solid #1E2024", background: "#0D0F11", padding: "1.2rem", textAlign: "center" }}>
              <div style={{
                width: "58px", height: "58px", borderRadius: "999px", border: "1px solid #F26522", background: "rgba(242,101,34,0.08)", color: "#fff",
                display: "grid", placeItems: "center", margin: "0 auto 0.75rem", fontSize: "1.5rem", opacity: 0, transform: "scale(0.75)",
                animation: `stepPop 0.45s ease ${0.2 + i * 0.35}s forwards`
              }}>{step.n}</div>
              <h3 style={{ fontSize: "1.05rem", marginBottom: "0.35rem" }}>{step.title}</h3>
              <p style={{ color: "#9AA1AF", lineHeight: 1.6 }}>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes stepPop { to { opacity: 1; transform: scale(1); } }
        @media (max-width: 960px) { .plan-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
