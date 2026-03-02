"use client";
import { useEffect, useRef } from "react";
import type { Lang } from "@/app/page";

const DEMO_URL = "https://calendly.com/arthur-renck3/book-demo";

const t = {
  pt: {
    label: "Próximo Passo",
    h2: "Avalie se a AKIRAL é a parceira técnica certa.",
    lines: [
      "Uma sessão técnica estruturada com nossos engenheiros.",
      "Sem apresentações comerciais. Sem compromissos.",
      "Apenas engenharia aplicada ao seu contexto.",
    ],
    cta: "Agendar Demo Técnica",
    details: [
      { label: "Formato", value: "Sessão remota" },
      { label: "Duração", value: "60 minutos" },
      { label: "Perfil", value: "Engenheiros / CTO" },
    ],
  },
  en: {
    label: "Next Step",
    h2: "Evaluate if AKIRAL is the right technical partner.",
    lines: [
      "A structured technical session with our engineers.",
      "No sales pitches. No commitments.",
      "Just engineering applied to your context.",
    ],
    cta: "Schedule Technical Demo",
    details: [
      { label: "Format", value: "Remote session" },
      { label: "Duration", value: "60 minutes" },
      { label: "Profile", value: "Engineers / CTO" },
    ],
  },
};

export default function Demo({ lang }: { lang: Lang }) {
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
      id="demo"
      ref={sectionRef}
      style={{
        position: "relative",
        background: "#111214",
        overflow: "hidden",
        paddingTop: "8rem",
        paddingBottom: "8rem",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "130px", background: "linear-gradient(to bottom, #0A0B0D, transparent)", pointerEvents: "none", zIndex: 0 }} />
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 70% 100% at 50% 50%, transparent 20%, #111214 90%)",
        }}
      />

      <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <div className="fade-up" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <div style={{ width: "40px", height: "1px", background: "#1E2024" }} />
            <span className="section-label">{tx.label}</span>
            <div style={{ width: "40px", height: "1px", background: "#1E2024" }} />
          </div>

          <h2 className="sub-headline text-balance fade-up" style={{ marginBottom: "1.75rem", transitionDelay: "0.06s" }}>
            {tx.h2}
          </h2>

          <div className="fade-up" style={{ marginBottom: "2.75rem", transitionDelay: "0.12s" }}>
            {tx.lines.map(line => (
              <p key={line} className="body-copy" style={{ lineHeight: 1.8, textAlign: "center" }}>{line}</p>
            ))}
          </div>

          <div className="fade-up" style={{ marginBottom: "3.5rem", transitionDelay: "0.18s" }}>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
              style={{
                fontSize: "0.9rem", padding: "0.85rem 2rem", borderRadius: "8px",
                boxShadow: "0 0 30px rgba(242,101,34,0.25)",
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
              }}
            >
              {tx.cta}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7H11M11 7L8 4M11 7L8 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div
            className="fade-up"
            style={{
              paddingTop: "2.5rem", borderTop: "1px solid #1E2024",
              display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "2rem 3.5rem",
              transitionDelay: "0.24s",
            }}
          >
            {tx.details.map(item => (
              <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: "0.3rem", alignItems: "center" }}>
                <span className="mono-sm" style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}>{item.label}</span>
                <span className="body-sm" style={{ color: "#B8BCC2" }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "100px", background: "linear-gradient(to bottom, transparent, #0A0B0D)", pointerEvents: "none" }} />
    </section>
  );
}
