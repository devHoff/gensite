"use client";
import { useEffect, useRef, useState } from "react";

type Lang = "pt" | "en";

const BOOK_DEMO_URL = "https://calendly.com/arthur-renck3/book-demo";

type Step = { number: string; title: string; text: string };

const copy: Record<Lang, { label: string; headline: string; sub: string; steps: Step[]; next: string; cta: string }> = {
  pt: {
    label: "Soluções Anteriores",
    headline: "Como construímos cada projeto em produção.",
    sub: "Fluxo simples e claro: 1, 2, 3, e depois escala.",
    steps: [
      { number: "1", title: "Diagnóstico", text: "Entendemos o gargalo real do negócio." },
      { number: "2", title: "Implementação", text: "Conectamos canais, regras e automações." },
      { number: "3", title: "Otimização", text: "Ajustamos métricas para aumentar resultado." },
    ],
    next: "Sua empresa pode ser a próxima.",
    cta: "Book Demo",
  },
  en: {
    label: "Previous Solutions",
    headline: "How we build each project in production.",
    sub: "Simple and clear flow: 1, 2, 3, then scale.",
    steps: [
      { number: "1", title: "Diagnosis", text: "We identify the real bottleneck." },
      { number: "2", title: "Implementation", text: "We connect channels, rules and automations." },
      { number: "3", title: "Optimization", text: "We tune metrics for outcomes." },
    ],
    next: "Your company could be the next one.",
    cta: "Book Demo",
  },
};

export default function AutomationLayers({ lang = "pt" }: { lang?: Lang }) {
  const tx = copy[lang];
  const ref = useRef<HTMLElement>(null);
  const [revealNext, setRevealNext] = useState(false);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".fade-up");
    if (!els) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          setTimeout(() => setRevealNext(true), 650);
        }
      }),
      { threshold: 0.2, rootMargin: "0px 0px -20px 0px" }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="solucoes" className="section-wrap" style={{ background: "#111214", borderTop: "1px solid #1E2024" }}>
      <div className="site-container">
        <div style={{ maxWidth: "760px", marginBottom: "3rem" }}>
          <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.2rem" }}>
            <span className="section-label">{tx.label}</span>
            <div style={{ width: "40px", height: "1px", background: "#1E2024" }} />
          </div>
          <h2 className="section-headline fade-up" style={{ marginBottom: "0.7rem" }}>{tx.headline}</h2>
          <p className="body-copy fade-up">{tx.sub}</p>
        </div>

        <div className="fade-up" style={{
          position: "relative",
          minHeight: "460px",
          border: "1px solid #1E2024",
          background: "#0D0F11",
          overflow: "hidden",
          padding: "1rem",
        }}>
          <svg viewBox="0 0 1000 460" preserveAspectRatio="none" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.5 }}>
            <path fill="none" stroke="rgba(184,188,194,0.42)" strokeWidth="1.3" strokeDasharray="5 12" d="M160,80 C350,80 420,160 520,220 C610,275 610,350 520,380 C430,410 340,370 200,350" />
            <path fill="none" stroke="rgba(184,188,194,0.3)" strokeWidth="1.3" strokeDasharray="5 12" d="M520,220 C670,200 760,240 860,300" />
          </svg>

          <div style={{ position: "absolute", top: "56px", left: "42px", display: "flex", gap: "0.8rem", alignItems: "center" }}>
            <div style={{ width: "60px", height: "60px", border: "2px solid #F26522", display: "grid", placeItems: "center", color: "#F2F2F2", fontSize: "1.75rem" }}>1</div>
            <div><h3 style={{ marginBottom: "0.3rem" }}>{tx.steps[0].title}</h3><p className="body-sm">{tx.steps[0].text}</p></div>
          </div>

          <div style={{ position: "absolute", top: "180px", left: "48%", transform: "translateX(-50%)", display: "flex", gap: "0.8rem", alignItems: "center" }}>
            <div style={{ width: "60px", height: "60px", border: "2px solid #F26522", display: "grid", placeItems: "center", color: "#F2F2F2", fontSize: "1.75rem" }}>2</div>
            <div><h3 style={{ marginBottom: "0.3rem" }}>{tx.steps[1].title}</h3><p className="body-sm">{tx.steps[1].text}</p></div>
          </div>

          <div style={{ position: "absolute", top: "320px", left: "42px", display: "flex", gap: "0.8rem", alignItems: "center" }}>
            <div style={{ width: "60px", height: "60px", border: "2px solid #F26522", display: "grid", placeItems: "center", color: "#F2F2F2", fontSize: "1.75rem" }}>3</div>
            <div><h3 style={{ marginBottom: "0.3rem" }}>{tx.steps[2].title}</h3><p className="body-sm">{tx.steps[2].text}</p></div>
          </div>

          <div style={{ position: "absolute", right: "42px", top: "286px", display: "flex", alignItems: "center", gap: "0.8rem" }}>
            <div style={{ width: "62px", height: "62px", borderRadius: "50%", border: "1px solid rgba(242,101,34,0.7)", display: "grid", placeItems: "center", color: "#F26522", fontSize: "2rem" }}>?</div>
            <div style={{ opacity: revealNext ? 1 : 0, transform: revealNext ? "translateY(0)" : "translateY(8px)", transition: "all 0.5s ease" }}>
              <p style={{ marginBottom: "0.7rem" }}>{tx.next}</p>
              <a href={BOOK_DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-cta">{tx.cta}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
