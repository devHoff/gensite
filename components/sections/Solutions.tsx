"use client";
import { useState, useEffect, useRef } from "react";

type Lang = "pt" | "en";

const copy = {
  pt: {
    label: "Soluções",
    headline: "O que construímos.",
    cta_text: "Agendar free demo",
    next_case: "sua empresa pode ser nosso próximo case de sucesso",
    cards: [
      {
        id: "sulmotor",
        tag: "MARKETPLACE",
        title: "SulMotors",
        subtitle: "Marketplace de revenda de carros",
        desc: "Plataforma completa de compra e venda de veículos com IA para precificação inteligente, matching entre compradores e vendedores, e gestão de anúncios automatizada.",
        highlights: ["Precificação com IA", "Matching Inteligente", "Gestão Automatizada"],
        color: "#F26522",
      },
      {
        id: "autodonto",
        tag: "AI AGENTS",
        title: "Autodonto",
        subtitle: "Agentes IA para clínicas dentárias",
        desc: "Sistema de agentes inteligentes que automatiza agendamento, lembretes, follow-up de pacientes e gestão de prontuários para clínicas odontológicas.",
        highlights: ["Agendamento Automático", "Follow-up de Pacientes", "Gestão de Prontuários"],
        color: "#3B82F6",
      },
    ],
  },
  en: {
    label: "Solutions",
    headline: "What we build.",
    cta_text: "Book free demo",
    next_case: "your company could be our next success case",
    cards: [
      {
        id: "sulmotor",
        tag: "MARKETPLACE",
        title: "SulMotors",
        subtitle: "Car resale marketplace",
        desc: "Complete vehicle buying and selling platform with AI for intelligent pricing, buyer-seller matching, and automated ad management.",
        highlights: ["AI Pricing", "Smart Matching", "Automated Management"],
        color: "#F26522",
      },
      {
        id: "autodonto",
        tag: "AI AGENTS",
        title: "Autodonto",
        subtitle: "AI agents for dental clinics",
        desc: "Intelligent agent system that automates scheduling, reminders, patient follow-up, and medical record management for dental clinics.",
        highlights: ["Auto Scheduling", "Patient Follow-up", "Records Management"],
        color: "#3B82F6",
      },
    ],
  },
};

/* ── SVG icons ── */
function IconCar() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M8 30 L12 18 Q13 15 16 15 L32 15 Q35 15 36 18 L40 30 L40 36 Q40 38 38 38 L10 38 Q8 38 8 36 Z"
        stroke="#F26522" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
      <circle cx="15" cy="38" r="4" stroke="#F26522" strokeWidth="1.5" fill="none"/>
      <circle cx="33" cy="38" r="4" stroke="#F26522" strokeWidth="1.5" fill="none"/>
      <path d="M12 22 L18 22 L20 16 M28 16 L30 22 L36 22" stroke="#F26522" strokeWidth="1" strokeOpacity="0.5"/>
      <line x1="8" y1="28" x2="40" y2="28" stroke="#F26522" strokeWidth="0.8" strokeOpacity="0.3"/>
    </svg>
  );
}

function IconDental() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M16 10 C10 10 8 15 8 20 C8 26 10 30 14 34 C16 37 18 40 20 40 C22 40 23 37 24 34 C25 37 26 40 28 40 C30 40 32 37 34 34 C38 30 40 26 40 20 C40 15 38 10 32 10 C29 10 27 12 24 12 C21 12 19 10 16 10 Z"
        stroke="#3B82F6" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
      <path d="M20 20 C20 17 22 15 24 15 C26 15 28 17 28 20"
        stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none"/>
      <circle cx="24" cy="22" r="3" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.4" fill="none"/>
    </svg>
  );
}

function IconQuestion({ animating }: { animating: boolean }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
      style={{ transition: "opacity 0.4s", opacity: animating ? 0 : 1 }}>
      <text x="24" y="36" textAnchor="middle"
        fontFamily="'Inter', sans-serif" fontSize="32" fontWeight="300"
        fill="#6B7280">?</text>
    </svg>
  );
}

export default function Solutions({ lang = "pt" }: { lang?: Lang }) {
  const tx = copy[lang];
  const [active, setActive] = useState(0); // 0,1 = real cards; 2 = question mark
  const [questionPhase, setQuestionPhase] = useState<"question" | "fading" | "text">("question");
  const ref = useRef<HTMLElement>(null);
  const total = tx.cards.length + 1; // +1 for the ? card

  /* Reset question animation whenever we navigate away/back */
  useEffect(() => {
    if (active !== 2) {
      setQuestionPhase("question");
    } else {
      // start the animation after a short pause
      const t1 = setTimeout(() => setQuestionPhase("fading"), 1200);
      const t2 = setTimeout(() => setQuestionPhase("text"), 1800);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    }
  }, [active]);

  /* fade-up on scroll */
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

  const prev = () => setActive(a => (a - 1 + total) % total);
  const next = () => setActive(a => (a + 1) % total);

  const isQuestion = active === 2;
  const card = !isQuestion ? tx.cards[active] : null;

  return (
    <section ref={ref} id="solucoes" className="section-wrap"
      style={{ background: "#111214", borderTop: "1px solid #1E2024" }}>
      <div className="site-container">

        {/* Header */}
        <div style={{ maxWidth: "680px", marginBottom: "4rem" }}>
          <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
            <span className="section-label">{tx.label}</span>
            <div style={{ width: "40px", height: "1px", background: "#1E2024" }} />
          </div>
          <h2 className="section-headline fade-up" style={{ transitionDelay: "0.06s" }}>
            {tx.headline}
          </h2>
        </div>

        {/* Card carousel */}
        <div className="fade-up" style={{ transitionDelay: "0.12s" }}>
          <div className="sol-card-wrap">

            {/* Prev button */}
            <button className="sol-nav-btn" onClick={prev} aria-label="Previous">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#3A3D42" strokeWidth="1"/>
                <path d="M11.5 6.5 L8 10 L11.5 13.5" stroke="#B8BCC2" strokeWidth="1.2"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Card body */}
            <div className="sol-card" style={{ position: "relative", overflow: "hidden",
              borderColor: isQuestion ? "#2A2D32" : (card?.color ?? "#1E2024") + "44" }}>

              {/* ── Real cards ── */}
              {!isQuestion && card && (
                <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                  {/* Top bar */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "2rem" }}>
                    <span className="tag-pill" style={{ borderColor: card.color + "44", color: card.color }}>
                      {card.tag}
                    </span>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem",
                      color: "#2A2D32", letterSpacing: "0.06em" }}>
                      {String(active + 1).padStart(2, "0")}/{String(total - 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Icon */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    {active === 0 ? <IconCar /> : <IconDental />}
                  </div>

                  {/* Title */}
                  <h3 style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    fontWeight: 300, color: "#F2F2F2", letterSpacing: "-0.025em",
                    marginBottom: "0.375rem" }}>
                    {card.title}
                  </h3>
                  <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.75rem",
                    color: card.color, letterSpacing: "0.04em", marginBottom: "1.5rem" }}>
                    {card.subtitle}
                  </p>

                  {/* Desc */}
                  <p className="body-copy" style={{ marginBottom: "2rem", flex: 1, color: "#6B7280", lineHeight: "1.75" }}>
                    {card.desc}
                  </p>

                  {/* Highlights */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {card.highlights.map(h => (
                      <span key={h} className="tag-pill"
                        style={{ borderColor: card.color + "30", color: "#B8BCC2" }}>{h}</span>
                    ))}
                  </div>

                  {/* Decorative colored line at bottom */}
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px",
                    background: `linear-gradient(90deg, transparent, ${card.color}55, transparent)` }} />
                </div>
              )}

              {/* ── Question mark card ── */}
              {isQuestion && (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center",
                  justifyContent: "center", height: "100%", textAlign: "center", gap: "1.5rem" }}>

                  {/* Phase: question mark */}
                  {questionPhase === "question" && (
                    <div style={{ animation: "sol-pulse 1.5s ease-in-out infinite" }}>
                      <IconQuestion animating={false} />
                    </div>
                  )}

                  {/* Phase: fading */}
                  {questionPhase === "fading" && (
                    <div style={{ animation: "sol-fade-out 0.6s ease forwards" }}>
                      <IconQuestion animating={true} />
                    </div>
                  )}

                  {/* Phase: text */}
                  {questionPhase === "text" && (
                    <div style={{ animation: "sol-fade-in 0.7s ease forwards", display: "flex",
                      flexDirection: "column", alignItems: "center", gap: "1.75rem" }}>
                      <p style={{ fontFamily: "'Inter', system-ui, sans-serif",
                        fontSize: "clamp(1rem, 2vw, 1.375rem)", fontWeight: 300,
                        color: "#F2F2F2", letterSpacing: "-0.02em", lineHeight: 1.4,
                        maxWidth: "380px" }}>
                        {tx.next_case}
                      </p>
                      <a href="#demo" className="btn-cta" style={{ fontSize: "0.875rem", padding: "0.75rem 1.75rem" }}>
                        {tx.cta_text}
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginLeft: "0.25rem" }}>
                          <path d="M3 7h8M8 4l3 3-3 3" stroke="#fff" strokeWidth="1.2"
                            strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Next button */}
            <button className="sol-nav-btn" onClick={next} aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#3A3D42" strokeWidth="1"/>
                <path d="M8.5 6.5 L12 10 L8.5 13.5" stroke="#B8BCC2" strokeWidth="1.2"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "1.75rem" }}>
            {Array.from({ length: total }).map((_, i) => (
              <button key={i} onClick={() => setActive(i)}
                style={{
                  width: active === i ? "20px" : "6px",
                  height: "6px",
                  borderRadius: "3px",
                  background: active === i ? "#F26522" : "#2A2D32",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "width 0.3s ease, background 0.3s ease",
                }} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .sol-card-wrap {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          max-width: 680px;
          margin: 0 auto;
        }
        .sol-card {
          flex: 1;
          background: #0D0F11;
          border: 1px solid #1E2024;
          border-radius: 8px;
          padding: 2.5rem;
          min-height: 480px;
          transition: border-color 0.4s ease;
        }
        .sol-nav-btn {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          cursor: pointer;
          border-radius: 50%;
          transition: background 0.18s;
        }
        .sol-nav-btn:hover { background: #16181C; }

        @keyframes sol-pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50%       { transform: scale(1.08); opacity: 1; }
        }
        @keyframes sol-fade-out {
          from { opacity: 1; transform: scale(1); }
          to   { opacity: 0; transform: scale(0.85); }
        }
        @keyframes sol-fade-in {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 640px) {
          .sol-card-wrap { gap: 0.75rem; }
          .sol-card { padding: 1.75rem; min-height: 400px; }
        }
      `}</style>
    </section>
  );
}
