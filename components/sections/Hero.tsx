"use client";
import { useEffect, useRef } from "react";
import type { Lang } from "@/app/page";

const DEMO_URL = "https://calendly.com/arthur-renck3/book-demo";

const t = {
  pt: {
    h1a: "Automatize Processos,",
    h1b: "Escale 10x mais Rápido",
    h1c: "com Agentes de IA.",
    sub: "Faça em 3 dias o que levaria 1 mês. Agentes de IA constroem funcionalidades, executam automações e entregam resultados enquanto você foca na estratégia.",
    cta: "Agendar Free Demo →",
    trust: ["Sem cartão de crédito", "Onboarding 1-a-1 incluso", "Primeiros resultados em 72h"],
    stats: [
      { value: "5+", label: "Sistemas Desenvolvidos" },
      { value: "~30%", label: "Mais Respostas" },
      { value: "< 0.2s", label: "Tempo de Resposta" },
      { value: "24/7", label: "Disponibilidade" },
    ],
  },
  en: {
    h1a: "Automate Processes,",
    h1b: "Scale 10x Faster",
    h1c: "with AI Agents.",
    sub: "Do in 3 days what would take 1 month. AI agents build features, run automations and deliver results while you focus on strategy.",
    cta: "Book Free Demo →",
    trust: ["No credit card required", "1-on-1 onboarding included", "First results in 72h"],
    stats: [
      { value: "5+", label: "Systems Built" },
      { value: "~30%", label: "More Responses" },
      { value: "< 0.2s", label: "Response Time" },
      { value: "24/7", label: "Availability" },
    ],
  },
};

export default function Hero({ lang }: { lang: Lang }) {
  const sectionRef = useRef<HTMLElement>(null);
  const tx = t[lang];

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".fade-up");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.08 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "calc(100svh - 64px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        background: "#0A0B0D",
      }}
    >
      {/* Orange glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(242,101,34,0.18) 0%, rgba(242,101,34,0.06) 40%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div className="tech-grid" />
      <div className="tech-grid tech-grid-fine" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, rgba(10,11,13,0.25) 60%, #0A0B0D 100%)",
        }}
      />

      <div className="site-container" style={{ position: "relative", zIndex: 10, padding: "2rem 1.5rem 3rem" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>

          {/* Headline */}
          <h1
            className="fade-up"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "clamp(2.2rem, 6.5vw, 5rem)",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              color: "#F2F2F2",
              marginBottom: "1.25rem",
              transitionDelay: "0.1s",
              textWrap: "balance",
            }}
          >
            {tx.h1a}
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #F26522 0%, #FF9A5C 50%, #F26522 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {tx.h1b}
            </span>
            <br />
            {tx.h1c}
          </h1>

          {/* Subtitle */}
          <p
            className="fade-up"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)",
              color: "#9CA3AF",
              lineHeight: 1.75,
              maxWidth: "600px",
              margin: "0 auto 2rem",
              transitionDelay: "0.18s",
            }}
          >
            {tx.sub}
          </p>

          {/* CTA */}
          <div className="fade-up" style={{ marginBottom: "1.5rem", transitionDelay: "0.26s" }}>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.625rem",
                padding: "1rem 2.25rem",
                background: "#F26522",
                color: "#fff",
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "1rem",
                fontWeight: 600,
                letterSpacing: "-0.01em",
                borderRadius: "8px",
                textDecoration: "none",
                boxShadow: "0 0 40px rgba(242,101,34,0.35), 0 4px 20px rgba(242,101,34,0.25)",
                transition: "background 0.18s, box-shadow 0.18s, transform 0.14s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#ff7a1a"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#F26522"; }}
            >
              {tx.cta}
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="fade-up"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.5rem 1.75rem",
              marginBottom: "1.75rem",
              transitionDelay: "0.34s",
            }}
          >
            {tx.trust.map(txt => (
              <div key={txt} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6.5" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.4)" strokeWidth="0.8" />
                  <path d="M4.5 7L6.5 9L9.5 5.5" stroke="#10B981" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "0.8125rem", color: "#6B7280" }}>{txt}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div
            className="fade-up"
            style={{
              paddingTop: "2rem",
              borderTop: "1px solid #1E2024",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2rem 4rem",
              transitionDelay: "0.44s",
            }}
          >
            {tx.stats.map(stat => (
              <div key={stat.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "clamp(1.1rem, 2.5vw, 1.625rem)", fontWeight: 300, color: "#F2F2F2", letterSpacing: "-0.02em" }}>
                  {stat.value}
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.11em", textTransform: "uppercase", color: "#4B5563" }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          background: "linear-gradient(to bottom, transparent, #111214)",
          pointerEvents: "none",
        }}
      />

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          opacity: 0.2,
          zIndex: 5,
        }}
      >
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em", color: "#B8BCC2" }}>SCROLL</span>
        <div style={{ width: "1px", height: "28px", background: "linear-gradient(to bottom, #B8BCC2, transparent)" }} />
      </div>
    </section>
  );
}
