"use client";
import { useEffect, useRef } from "react";

type Lang = "pt" | "en";

const BOOK_DEMO_URL = "https://calendly.com/arthur-renck3/book-demo";

const copy = {
  pt: {
    tag: "status: live",
    headline: "Infraestrutura tecnológica para automação em escala.",
    sub: "Projetamos, implementamos e operamos sistemas de automação inteligente com foco em escala operacional.",
    cta: "Agendar Demo",
  },
  en: {
    tag: "OPERATIONAL TECHNOLOGICAL INFRASTRUCTURE",
    headline: "Technological infrastructure for automation at scale.",
    sub: "We design, implement and operate intelligent automation systems focused on operational scale.",
    cta: "Book Demo",
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
        alignItems: "center",
        overflow: "hidden",
        paddingTop: "64px",
        background: "#0A0B0D",
      }}
    >
      <div className="tech-grid" />
      <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: "760px" }}>
          <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.8rem" }}>
            <div className="status-dot" />
            <span className="label-tag">{tx.tag}</span>
          </div>

          <h1 className="hero-headline fade-up" style={{ marginBottom: "1.3rem" }}>{tx.headline}</h1>
          <p className="body-copy fade-up" style={{ marginBottom: "2rem", fontSize: "1rem", maxWidth: "620px" }}>{tx.sub}</p>

          <a href={BOOK_DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-cta fade-up">
            {tx.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
