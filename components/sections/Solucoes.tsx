"use client";
import { useEffect, useRef, useState } from "react";
import type { Lang } from "@/app/page";

const t = {
  pt: {
    label: "Soluções",
    h2: "O que construímos.",
    clickToSee: "CLIQUE PARA VER",
    solutions: [
      {
        tag: "MARKETPLACE",
        tagColor: "#F26522",
        tagBg: "#F2652215",
        tagBorder: "#F2652235",
        name: "SulMotor",
        subtitle: "Marketplace de revenda de carros",
        desc: "Plataforma completa de compra e venda de veículos com IA para precificação inteligente, matching entre compradores e vendedores, e gestão de anúncios automatizada.",
        idx: "01",
      },
      {
        tag: "AI AGENTS",
        tagColor: "#3B82F6",
        tagBg: "#3B82F615",
        tagBorder: "#3B82F635",
        name: "Autodonto",
        subtitle: "Automação para clínicas odontológicas",
        desc: "Agentes de IA que automatizam agendamentos, cobranças, follow-ups com pacientes e gestão de prontuários, integrando com sistemas existentes sem fricção.",
        idx: "02",
      },
    ],
  },
  en: {
    label: "Solutions",
    h2: "What we build.",
    clickToSee: "CLICK TO SEE",
    solutions: [
      {
        tag: "MARKETPLACE",
        tagColor: "#F26522",
        tagBg: "#F2652215",
        tagBorder: "#F2652235",
        name: "SulMotor",
        subtitle: "Car resale marketplace",
        desc: "Complete vehicle buying and selling platform with AI for intelligent pricing, buyer-seller matching, and automated ad management.",
        idx: "01",
      },
      {
        tag: "AI AGENTS",
        tagColor: "#3B82F6",
        tagBg: "#3B82F615",
        tagBorder: "#3B82F635",
        name: "Autodonto",
        subtitle: "Automation for dental clinics",
        desc: "AI agents that automate scheduling, billing, patient follow-ups and records management, integrating with existing systems without friction.",
        idx: "02",
      },
    ],
  },
};

const illustrations = [
  <svg key="sulm" viewBox="0 0 320 180" width="100%" style={{ maxWidth: "320px" }} fill="none">
    <defs>
      <linearGradient id="carGrad" x1="0" y1="0" x2="320" y2="180" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F26522" stopOpacity="0.15" />
        <stop offset="1" stopColor="#F26522" stopOpacity="0.03" />
      </linearGradient>
    </defs>
    <rect x="0" y="148" width="320" height="32" rx="4" fill="#111416" />
    <line x1="60" y1="164" x2="100" y2="164" stroke="#F26522" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="8 6" />
    <line x1="140" y1="164" x2="180" y2="164" stroke="#F26522" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="8 6" />
    <line x1="220" y1="164" x2="260" y2="164" stroke="#F26522" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="8 6" />
    <path d="M40 148 L60 110 Q70 96 90 96 L230 96 Q250 96 262 110 L280 148 Z" fill="url(#carGrad)" stroke="#F26522" strokeWidth="1.5" />
    <path d="M100 96 L120 64 Q130 54 160 54 Q190 54 200 64 L220 96 Z" fill="rgba(242,101,34,0.08)" stroke="#F26522" strokeWidth="1.2" />
    <circle cx="95" cy="148" r="22" fill="#0A0B0D" stroke="#F26522" strokeWidth="1.5" />
    <circle cx="95" cy="148" r="12" fill="none" stroke="#F26522" strokeWidth="0.8" strokeOpacity="0.4" />
    <circle cx="95" cy="148" r="4" fill="#F26522" fillOpacity="0.3" />
    <circle cx="225" cy="148" r="22" fill="#0A0B0D" stroke="#F26522" strokeWidth="1.5" />
    <circle cx="225" cy="148" r="12" fill="none" stroke="#F26522" strokeWidth="0.8" strokeOpacity="0.4" />
    <circle cx="225" cy="148" r="4" fill="#F26522" fillOpacity="0.3" />
    <text x="160" y="30" textAnchor="middle" fontFamily="'IBM Plex Mono', monospace" fontSize="11" fill="#F26522" fillOpacity="0.5" letterSpacing="3">SULM0T0R</text>
  </svg>,
  <svg key="auto" viewBox="0 0 320 180" width="100%" style={{ maxWidth: "320px" }} fill="none">
    <defs>
      <linearGradient id="dentGrad" x1="0" y1="0" x2="320" y2="180" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3B82F6" stopOpacity="0.12" />
        <stop offset="1" stopColor="#3B82F6" stopOpacity="0.03" />
      </linearGradient>
    </defs>
    <rect x="10" y="20" width="300" height="140" rx="8" fill="url(#dentGrad)" stroke="#3B82F630" strokeWidth="1" />
    <rect x="30" y="40" width="80" height="60" rx="4" fill="#3B82F610" stroke="#3B82F640" strokeWidth="0.8" />
    <text x="70" y="65" textAnchor="middle" fontFamily="'IBM Plex Mono'" fontSize="8" fill="#3B82F6" fillOpacity="0.6">AGENDA</text>
    <rect x="120" y="40" width="80" height="60" rx="4" fill="#3B82F610" stroke="#3B82F640" strokeWidth="0.8" />
    <text x="160" y="65" textAnchor="middle" fontFamily="'IBM Plex Mono'" fontSize="8" fill="#3B82F6" fillOpacity="0.6">PACIENTES</text>
    <rect x="210" y="40" width="80" height="60" rx="4" fill="#3B82F610" stroke="#3B82F640" strokeWidth="0.8" />
    <text x="250" y="65" textAnchor="middle" fontFamily="'IBM Plex Mono'" fontSize="8" fill="#3B82F6" fillOpacity="0.6">COBRANÇAS</text>
    <circle cx="160" cy="140" r="16" fill="#3B82F615" stroke="#3B82F6" strokeWidth="1.2" />
    <text x="160" y="144" textAnchor="middle" fontFamily="'IBM Plex Mono'" fontSize="7" fill="#3B82F6">AI</text>
    <line x1="70" y1="100" x2="144" y2="128" stroke="#3B82F6" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="4 3" />
    <line x1="160" y1="100" x2="160" y2="124" stroke="#3B82F6" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="4 3" />
    <line x1="250" y1="100" x2="176" y2="128" stroke="#3B82F6" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="4 3" />
    <text x="160" y="170" textAnchor="middle" fontFamily="'IBM Plex Mono'" fontSize="8" fill="#3B82F6" fillOpacity="0.4" letterSpacing="2">AUT0D0NT0</text>
  </svg>,
];

export default function Solucoes({ lang }: { lang: Lang }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [highlighted, setHighlighted] = useState<string | null>(null);
  const tx = t[lang];
  const total = tx.solutions.length;

  // Handle anchor-based deep-linking: /#sulmotor or /#autodonto
  useEffect(() => {
    const hash = window.location.hash.replace("#", "").toLowerCase();
    if (hash === "sulmotor") {
      setActive(0);
      setHighlighted("sulmotor");
      setTimeout(() => {
        document.getElementById("solucoes")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      setTimeout(() => setHighlighted(null), 2000);
    } else if (hash === "autodonto") {
      setActive(1);
      setHighlighted("autodonto");
      setTimeout(() => {
        document.getElementById("solucoes")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      setTimeout(() => setHighlighted(null), 2000);
    }
  }, []);

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

  const prev = () => setActive(a => (a - 1 + total) % total);
  const next = () => setActive(a => (a + 1) % total);

  const sol = tx.solutions[active];
  const prevIdx = (active - 1 + total) % total;
  const nextIdx = (active + 1) % total;
  const prevSol = tx.solutions[prevIdx];
  const nextSol = tx.solutions[nextIdx];

  return (
    <section
      id="solucoes"
      ref={sectionRef}
      style={{
        background: "#111214",
        paddingTop: "8rem",
        paddingBottom: "8rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to bottom, #0A0B0D, transparent)", pointerEvents: "none" }} />

      <div className="site-container">
        <div style={{ maxWidth: "680px", marginBottom: "4rem" }}>
          <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
            <span className="section-label">{tx.label}</span>
            <div style={{ width: "40px", height: "1px", background: "#1E2024" }} />
          </div>
          <h2 className="section-headline fade-up" style={{ transitionDelay: "0.06s" }}>{tx.h2}</h2>
        </div>

        <div className="fade-up" style={{ transitionDelay: "0.12s" }}>
          {/* ── Desktop 3-column layout ── */}
          <div className="sol-desktop-layout" style={{ display: "flex", gap: "1rem", alignItems: "stretch", maxWidth: "960px", margin: "0 auto" }}>
            {/* Left card (prev) */}
            <div
              onClick={prev}
              style={{
                flex: "0 0 22%", minWidth: 0,
                background: "#0D0F11", border: "1px solid #1E2024", borderRadius: "12px",
                padding: "1.5rem", minHeight: "320px", overflow: "hidden",
                cursor: "pointer", transition: "all 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                opacity: 0.45, transform: "scale(0.92)",
                display: "flex", flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "1rem", padding: "1rem" }}>
                <span style={{
                  fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.625rem", letterSpacing: "0.12em",
                  color: prevSol.tagColor, textTransform: "uppercase",
                  background: prevSol.tagBg, border: `1px solid ${prevSol.tagBorder}`,
                  borderRadius: "4px", padding: "0.25rem 0.625rem",
                }}>{prevSol.tag}</span>
                <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1rem", fontWeight: 600, color: "#6B7280", letterSpacing: "-0.01em", textAlign: "center" }}>
                  {prevSol.name}
                </span>
                <div style={{ width: "24px", height: "1px", background: "#2A2D32" }} />
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.55rem", color: "#3A3D42", letterSpacing: "0.1em" }}>{tx.clickToSee}</span>
              </div>
            </div>

            {/* Main center card */}
            <div
              id={active === 0 ? "sulmotor" : "autodonto"}
              style={{
                flex: "0 0 52%", minWidth: 0,
                background: "#0D0F11",
                border: highlighted
                  ? `1px solid ${sol.tagColor}cc`
                  : `1px solid ${sol.tagColor}55`,
                borderRadius: "12px",
                minHeight: "480px", overflow: "hidden", display: "flex", flexDirection: "column",
                transition: "border-color 0.4s, box-shadow 0.4s",
                boxShadow: highlighted ? `0 0 32px ${sol.tagColor}22` : "none",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                  <span style={{
                    fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.625rem", letterSpacing: "0.14em",
                    color: sol.tagColor, background: sol.tagBg, border: `1px solid ${sol.tagBorder}`,
                    borderRadius: "4px", padding: "0.25rem 0.75rem", textTransform: "uppercase",
                  }}>{sol.tag}</span>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", color: "#2A2D32", letterSpacing: "0.06em" }}>
                    {sol.idx}/{total.toString().padStart(2, "0")}
                  </span>
                </div>
                <h3 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#F2F2F2", letterSpacing: "-0.03em", marginBottom: "0.25rem" }}>
                  {sol.name}
                </h3>
                <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.75rem", color: sol.tagColor, letterSpacing: "0.04em", marginBottom: "1.75rem" }}>
                  {sol.subtitle}
                </p>
                <div style={{
                  flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "1.75rem", padding: "0.5rem",
                  background: `${sol.tagColor}06`, borderRadius: "8px", border: `1px solid ${sol.tagColor}12`,
                }}>
                  {illustrations[active]}
                </div>
                <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.7 }}>
                  {sol.desc}
                </p>
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, height: "3px",
                  background: `linear-gradient(90deg, transparent, ${sol.tagColor}60, transparent)`,
                }} />
              </div>
            </div>

            {/* Right card (next) */}
            <div
              onClick={next}
              style={{
                flex: "0 0 22%", minWidth: 0,
                background: "#0D0F11", border: "1px solid #1E2024", borderRadius: "12px",
                padding: "1.5rem", minHeight: "320px", overflow: "hidden",
                cursor: "pointer", transition: "all 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                opacity: 0.45, transform: "scale(0.92)",
                display: "flex", flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "1rem", padding: "1rem" }}>
                <span style={{
                  fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.625rem", letterSpacing: "0.12em",
                  color: nextSol.tagColor, textTransform: "uppercase",
                  background: nextSol.tagBg, border: `1px solid ${nextSol.tagBorder}`,
                  borderRadius: "4px", padding: "0.25rem 0.625rem",
                }}>{nextSol.tag}</span>
                <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1rem", fontWeight: 600, color: "#6B7280", letterSpacing: "-0.01em", textAlign: "center" }}>
                  {nextSol.name}
                </span>
                <div style={{ width: "24px", height: "1px", background: "#2A2D32" }} />
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.55rem", color: "#3A3D42", letterSpacing: "0.1em" }}>{tx.clickToSee}</span>
              </div>
            </div>
          </div>

          {/* ── Mobile card layout — Instagram style ── */}
          <div className="sol-mobile-layout" style={{ display: "none", flexDirection: "column", gap: "1rem" }}>
            <div
              style={{
                background: "#0D0F11", border: `1px solid ${sol.tagColor}55`, borderRadius: "12px",
                overflow: "hidden", position: "relative",
              }}
            >
              {/* Tag + counter */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem 1.25rem 0" }}>
                <span style={{
                  fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.625rem", letterSpacing: "0.14em",
                  color: sol.tagColor, background: sol.tagBg, border: `1px solid ${sol.tagBorder}`,
                  borderRadius: "4px", padding: "0.25rem 0.75rem", textTransform: "uppercase",
                }}>{sol.tag}</span>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", color: "#2A2D32" }}>
                  {sol.idx}/{total.toString().padStart(2, "0")}
                </span>
              </div>

              {/* Name + subtitle */}
              <div style={{ padding: "0.75rem 1.25rem 1rem" }}>
                <h3 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "#F2F2F2", letterSpacing: "-0.03em", marginBottom: "0.2rem" }}>
                  {sol.name}
                </h3>
                <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.7rem", color: sol.tagColor, letterSpacing: "0.04em" }}>
                  {sol.subtitle}
                </p>
              </div>

              {/* Illustration with LEFT / RIGHT arrow buttons */}
              <div style={{ position: "relative", padding: "0 0", margin: "0 1.25rem 1.25rem" }}>
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: `${sol.tagColor}06`, borderRadius: "8px", border: `1px solid ${sol.tagColor}12`,
                  padding: "1rem",
                  minHeight: "160px",
                  position: "relative",
                }}>
                  {illustrations[active]}

                  {/* Left arrow — Instagram style */}
                  <button
                    onClick={prev}
                    aria-label="Previous"
                    style={{
                      position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)",
                      width: "36px", height: "36px",
                      background: "rgba(0,0,0,0.55)", border: "none", borderRadius: "50%",
                      cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                      backdropFilter: "blur(4px)",
                      zIndex: 2,
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M10 3L6 8l4 5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Right arrow — Instagram style */}
                  <button
                    onClick={next}
                    aria-label="Next"
                    style={{
                      position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)",
                      width: "36px", height: "36px",
                      background: "rgba(0,0,0,0.55)", border: "none", borderRadius: "50%",
                      cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                      backdropFilter: "blur(4px)",
                      zIndex: 2,
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3l4 5-4 5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Bottom accent line */}
              <div style={{
                height: "3px",
                background: `linear-gradient(90deg, transparent, ${sol.tagColor}60, transparent)`,
              }} />
            </div>
          </div>

          {/* ── Nav controls (both desktop + mobile) ── */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.25rem", marginTop: "2rem" }}>
            <button className="sol-nav-btn" aria-label="Previous" onClick={prev}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#3A3D42" strokeWidth="1" />
                <path d="M11.5 6.5L8 10l3.5 3.5" stroke="#B8BCC2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {tx.solutions.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: i === active ? "20px" : "6px",
                    height: "6px", borderRadius: "3px",
                    background: i === active ? "#F26522" : "#2A2D32",
                    border: "none", cursor: "pointer", padding: 0,
                    transition: "width 0.3s, background 0.3s",
                  }}
                />
              ))}
            </div>
            <button className="sol-nav-btn" aria-label="Next" onClick={next}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#3A3D42" strokeWidth="1" />
                <path d="M8.5 6.5L12 10l-3.5 3.5" stroke="#B8BCC2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to bottom, transparent, #0A0B0D)", pointerEvents: "none" }} />
    </section>
  );
}
