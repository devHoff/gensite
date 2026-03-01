"use client";
import { useEffect, useRef } from "react";
import DataFlowLines from "@/components/animations/DataFlowLines";

type Lang = "pt" | "en";

const BOOK_DEMO_URL = "https://calendly.com/arthur-renck3/book-demo";

const copy = {
  pt: {
    label: "Próximo Passo",
    headline: "Pronto para ver isso funcionando no seu negócio?",
    body: "Agende uma demo estratégica e técnica.",
    body2: "Mapeamos seu cenário e mostramos a melhor arquitetura para começar.",
    cta: "Agendar Demo",
    format: [
      { label: "Formato", value: "Sessão remota" },
      { label: "Duração", value: "15 minutos" },
      { label: "Perfil", value: "Fundador / CTO / Operações" },
    ],
  },
  en: {
    label: "Next Step",
    headline: "Ready to see this running in your business?",
    body: "Book a strategic and technical demo.",
    body2: "We map your context and show the best architecture to start.",
    cta: "Book Demo",
    format: [
      { label: "Format", value: "Remote session" },
      { label: "Duration", value: "15 minutes" },
      { label: "Profile", value: "Founder / CTO / Ops" },
    ],
  },
};

export default function DemoSection({ lang = "pt" }: { lang?: Lang }) {
  const tx = copy[lang];
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".fade-up");
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
      ref={ref}
      id="demo"
      style={{
        position: "relative",
        background: "#111214",
        
        overflow: "hidden",
        paddingTop: "7rem",
        paddingBottom: "7rem",
      }}
    >
      <DataFlowLines variant="section" />
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 70% 100% at 50% 50%, transparent 20%, #111214 90%)",
      }} aria-hidden="true"/>

      <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <div className="fade-up" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <div style={{ width: "40px", height: "1px", background: "#1E2024" }} />
            <span className="section-label">{tx.label}</span>
            <div style={{ width: "40px", height: "1px", background: "#1E2024" }} />
          </div>

          <h2 className="sub-headline text-balance fade-up" style={{ marginBottom: "1.75rem", transitionDelay: "0.06s" }}>{tx.headline}</h2>

          <div className="fade-up" style={{ marginBottom: "2.75rem", transitionDelay: "0.12s" }}>
            <p className="body-copy" style={{ lineHeight: "1.8", textAlign: "center" }}>{tx.body}</p>
            <p className="body-copy" style={{ lineHeight: "1.8", textAlign: "center" }}>{tx.body2}</p>
          </div>

          <div className="fade-up" style={{ marginBottom: "3.5rem", transitionDelay: "0.18s" }}>
            <a className="btn-cta" href={BOOK_DEMO_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.875rem", padding: "0.75rem 1.75rem" }}>
              {tx.cta}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7H11M11 7L8 4M11 7L8 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="fade-up" style={{
            paddingTop: "2.5rem",
            
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "2rem 3.5rem",
            transitionDelay: "0.24s",
          }}>
            {tx.format.map(f => (
              <div key={f.label} style={{ display: "flex", flexDirection: "column", gap: "0.3rem", alignItems: "center" }}>
                <span className="mono-sm" style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}>{f.label}</span>
                <span className="body-sm" style={{ color: "#B8BCC2" }}>{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

