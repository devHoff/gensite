"use client";
import { useEffect, useRef } from "react";
import DataFlowLines from "@/components/animations/DataFlowLines";

type Lang = "pt" | "en";

const copy = {
  pt: {
    tag: "status: live",
    headline: "Infraestrutura tecnológica para automação em escala.",
    sub: "Projetamos, implementamos e operamos sistemas de automação inteligente com foco em escala operacional.",
    cta: "Agendar Demo",
    metrics: [
      { value: "+1M$", label: "Valor agregado"   },
      { value: "~308%",    label: "Mais respostas"   },
      { value: "< 0.2s",label: "Tempo de resposta"  },
      { value: "+100M",    label: "Eventos / dia"         },
    ],
  },
  en: {
    tag: "OPERATIONAL TECHNOLOGICAL INFRASTRUCTURE",
    headline: "Technological infrastructure for automation at scale.",
    sub: "We design, implement and operate intelligent automation systems focused on operational scale.",
    cta: "Schedule Demo",
    metrics: [
      { value: "99.98%", label: "SLA Availability"      },
      { value: "12×",    label: "Overhead reduction"    },
      { value: "< 200ms",label: "Operational latency"   },
      { value: "10⁸",    label: "Events / day"          },
    ],
  },
};

export default function Hero({ lang = "pt" }: { lang?: Lang }) {
  const tx = copy[lang];
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".fade-up");
    if (!els) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.05 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: "64px",
        background: "#0A0B0D",
      }}
    >
      {/* Technical grid */}
      <div className="tech-grid" />
      <div className="tech-grid tech-grid-fine" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      {/* Animated data flow lines */}
      <DataFlowLines variant="hero" />

      {/* Vignette */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 65% 75% at 48% 46%, transparent 0%, rgba(10,11,13,0.35) 55%, #0A0B0D 100%)",
      }} aria-hidden="true" />

      {/* Content */}
      <div className="site-container" style={{ position: "relative", zIndex: 10, padding: "5rem 1.5rem 4rem" }}>
        <div style={{ maxWidth: "860px" }}>

          {/* Tag */}
          <div
            className="fade-up"
            style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2.5rem", animationDelay: "0.05s" }}
          >
            <div className="status-dot" />
            <span className="label-tag">{tx.tag}</span>
            <div style={{ width: "48px", height: "1px", background: "#1E2024" }} />
          </div>

          {/* Headline */}
          <h1
            className="hero-headline text-balance fade-up"
            style={{ marginBottom: "2rem", animationDelay: "0.18s" }}
          >
            {tx.headline}
          </h1>

          {/* Subheadline — +24% spacing from headline */}
          <p
            className="body-copy text-balance fade-up"
            style={{
              maxWidth: "560px",
              marginBottom: "3.25rem", /* +16–20% from sub to CTA */
              lineHeight: "1.8",
              fontSize: "1.0625rem",
              animationDelay: "0.3s",
            }}
          >
            {tx.sub}
          </p>

          {/* CTA */}
          <div className="fade-up" style={{ animationDelay: "0.42s" }}>
            <a href="#demo" className="btn-cta" style={{ fontSize: "0.875rem", padding: "0.75rem 1.625rem" }}>
              {tx.cta}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7H11M11 7L8 4M11 7L8 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Metrics row */}
          <div
            className="fade-up"
            style={{
              marginTop: "5rem",
              paddingTop: "2.5rem",
              borderTop: "1px solid #1E2024",
              display: "flex",
              flexWrap: "wrap",
              gap: "2.5rem 4rem",
              animationDelay: "0.56s",
            }}
          >
            {tx.metrics.map(m => (
              <div key={m.label} style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <span style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "1.375rem",
                  fontWeight: 300,
                  color: "#F2F2F2",
                  letterSpacing: "-0.02em",
                }}>
                  {m.value}
                </span>
                <span style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.625rem",
                  letterSpacing: "0.11em",
                  textTransform: "uppercase",
                  color: "#6B7280",
                }}>
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
        opacity: 0.22,
      }} aria-hidden="true">
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em", color: "#B8BCC2" }}>SCROLL</span>
        <div style={{ width: "1px", height: "32px", background: "linear-gradient(to bottom, #B8BCC2, transparent)" }} />
      </div>
    </section>
  );
}
