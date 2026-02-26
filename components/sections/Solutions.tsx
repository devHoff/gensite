"use client";
import { useState, useEffect, useRef } from "react";

type Lang = "pt" | "en";

const CALENDLY = "https://calendly.com/arthur-renck3/book-demo";

const copy = {
  pt: {
    label: "Soluções",
    headline: "O que construímos.",
    cta_text: "Agendar free demo",
    next_case: "Sua empresa pode ser nosso próximo case de sucesso",
    next_sub: "Vamos construir algo incrível juntos.",
  },
  en: {
    label: "Solutions",
    headline: "What we build.",
    cta_text: "Book free demo",
    next_case: "Your company could be our next success story",
    next_sub: "Let's build something amazing together.",
  },
};

/* ── SVG Illustrations ── */
function IllustrationCar() {
  return (
    <svg viewBox="0 0 320 180" width="100%" style={{ maxWidth: 320 }} fill="none">
      <defs>
        <linearGradient id="carGrad" x1="0" y1="0" x2="320" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F26522" stopOpacity="0.15"/>
          <stop offset="1" stopColor="#F26522" stopOpacity="0.03"/>
        </linearGradient>
      </defs>
      {/* Road */}
      <rect x="0" y="148" width="320" height="32" rx="4" fill="#111416"/>
      <line x1="60" y1="164" x2="100" y2="164" stroke="#F26522" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="8 6"/>
      <line x1="140" y1="164" x2="180" y2="164" stroke="#F26522" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="8 6"/>
      <line x1="220" y1="164" x2="260" y2="164" stroke="#F26522" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="8 6"/>
      {/* Car body */}
      <path d="M40 148 L60 110 Q70 96 90 96 L230 96 Q250 96 262 110 L280 148 Z"
        fill="url(#carGrad)" stroke="#F26522" strokeWidth="1.5"/>
      {/* Roof */}
      <path d="M100 96 L120 64 Q130 54 160 54 Q190 54 200 64 L220 96 Z"
        fill="rgba(242,101,34,0.08)" stroke="#F26522" strokeWidth="1.2"/>
      {/* Windows */}
      <path d="M112 93 L126 67 Q132 60 155 60 Q178 60 184 67 L198 93 Z"
        fill="rgba(242,101,34,0.12)" stroke="#F26522" strokeWidth="0.8" strokeOpacity="0.6"/>
      <line x1="160" y1="60" x2="160" y2="93" stroke="#F26522" strokeWidth="0.6" strokeOpacity="0.4"/>
      {/* Wheels */}
      <circle cx="95" cy="148" r="22" fill="#0A0B0D" stroke="#F26522" strokeWidth="1.5"/>
      <circle cx="95" cy="148" r="12" fill="none" stroke="#F26522" strokeWidth="0.8" strokeOpacity="0.4"/>
      <circle cx="95" cy="148" r="4" fill="#F26522" fillOpacity="0.3"/>
      <circle cx="225" cy="148" r="22" fill="#0A0B0D" stroke="#F26522" strokeWidth="1.5"/>
      <circle cx="225" cy="148" r="12" fill="none" stroke="#F26522" strokeWidth="0.8" strokeOpacity="0.4"/>
      <circle cx="225" cy="148" r="4" fill="#F26522" fillOpacity="0.3"/>
      {/* Headlight */}
      <ellipse cx="275" cy="126" rx="8" ry="5" fill="#F26522" fillOpacity="0.6"/>
      <path d="M283 126 L310 118 L310 134 Z" fill="#F26522" fillOpacity="0.08"/>
      {/* Detail lines */}
      <line x1="120" y1="122" x2="200" y2="122" stroke="#F26522" strokeWidth="0.5" strokeOpacity="0.25"/>
      <text x="160" y="30" textAnchor="middle" fontFamily="'IBM Plex Mono', monospace" fontSize="11"
        fill="#F26522" fillOpacity="0.5" letterSpacing="3">SULM0T0RS</text>
    </svg>
  );
}

function IllustrationDental() {
  return (
    <svg viewBox="0 0 320 180" width="100%" style={{ maxWidth: 320 }} fill="none">
      <defs>
        <linearGradient id="dentalGrad" x1="0" y1="0" x2="320" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" stopOpacity="0.15"/>
          <stop offset="1" stopColor="#3B82F6" stopOpacity="0.03"/>
        </linearGradient>
      </defs>
      {/* Big tooth */}
      <path d="M100 30 C80 30 64 44 64 64 C64 84 68 100 76 116 C80 126 86 138 94 138 C100 138 104 130 110 120 C116 130 120 138 126 138 C134 138 140 126 144 116 C152 100 156 84 156 64 C156 44 140 30 120 30 C115 30 110 33 110 33 C110 33 105 30 100 30 Z"
        fill="url(#dentalGrad)" stroke="#3B82F6" strokeWidth="1.5"/>
      {/* Tooth roots */}
      <path d="M94 138 L90 160 M110 120 L110 165 M126 138 L130 160"
        stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round"/>
      {/* AI brain/circuit overlay */}
      <circle cx="220" cy="80" r="48" fill="rgba(59,130,246,0.06)" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.3"/>
      <circle cx="220" cy="80" r="30" fill="rgba(59,130,246,0.06)" stroke="#3B82F6" strokeWidth="0.8" strokeOpacity="0.4"/>
      {/* Circuit lines */}
      <line x1="172" y1="80" x2="190" y2="80" stroke="#3B82F6" strokeWidth="0.8" strokeOpacity="0.5"/>
      <line x1="250" y1="80" x2="268" y2="80" stroke="#3B82F6" strokeWidth="0.8" strokeOpacity="0.5"/>
      <line x1="220" y1="32" x2="220" y2="50" stroke="#3B82F6" strokeWidth="0.8" strokeOpacity="0.5"/>
      <line x1="220" y1="110" x2="220" y2="128" stroke="#3B82F6" strokeWidth="0.8" strokeOpacity="0.5"/>
      {/* AI dots */}
      {[[210,70],[230,70],[215,85],[225,85],[220,75]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="2.5" fill="#3B82F6" fillOpacity="0.5"/>
      ))}
      {/* Connection lines */}
      <line x1="210" y1="70" x2="230" y2="70" stroke="#3B82F6" strokeWidth="0.6" strokeOpacity="0.4"/>
      <line x1="210" y1="70" x2="215" y2="85" stroke="#3B82F6" strokeWidth="0.6" strokeOpacity="0.4"/>
      <line x1="230" y1="70" x2="225" y2="85" stroke="#3B82F6" strokeWidth="0.6" strokeOpacity="0.4"/>
      <line x1="215" y1="85" x2="220" y2="75" stroke="#3B82F6" strokeWidth="0.6" strokeOpacity="0.4"/>
      {/* Connecting arrow tooth->AI */}
      <path d="M158 80 Q175 80 185 80" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="4 3"/>
      <path d="M182 76 L186 80 L182 84" stroke="#3B82F6" strokeWidth="0.8" strokeOpacity="0.5" strokeLinecap="round"/>
      <text x="160" y="20" textAnchor="middle" fontFamily="'IBM Plex Mono', monospace" fontSize="10"
        fill="#3B82F6" fillOpacity="0.5" letterSpacing="2">AUT0D0NT0</text>
    </svg>
  );
}

interface CardData {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  desc: string;
  color: string;
  illustration: React.ReactNode;
}

const cards_pt: CardData[] = [
  {
    id: "sulmotor",
    tag: "MARKETPLACE",
    title: "SulMotors",
    subtitle: "Marketplace de revenda de carros",
    desc: "Plataforma completa de compra e venda de veículos com IA para precificação inteligente, matching entre compradores e vendedores, e gestão de anúncios automatizada.",
    color: "#F26522",
    illustration: <IllustrationCar />,
  },
  {
    id: "autodonto",
    tag: "AI AGENTS",
    title: "Autodonto",
    subtitle: "Agentes IA para clínicas dentárias",
    desc: "Sistema de agentes inteligentes que automatiza agendamento, lembretes, follow-up de pacientes e gestão de prontuários para clínicas odontológicas.",
    color: "#3B82F6",
    illustration: <IllustrationDental />,
  },
];

const cards_en: CardData[] = [
  {
    id: "sulmotor",
    tag: "MARKETPLACE",
    title: "SulMotors",
    subtitle: "Car resale marketplace",
    desc: "Complete vehicle buying and selling platform with AI for intelligent pricing, buyer-seller matching, and automated ad management.",
    color: "#F26522",
    illustration: <IllustrationCar />,
  },
  {
    id: "autodonto",
    tag: "AI AGENTS",
    title: "Autodonto",
    subtitle: "AI agents for dental clinics",
    desc: "Intelligent agent system that automates scheduling, reminders, patient follow-up, and medical record management for dental clinics.",
    color: "#3B82F6",
    illustration: <IllustrationDental />,
  },
];

/* ── Question card ── */
function QuestionCard({ label }: { label: string }) {
  const [phase, setPhase] = useState<"question" | "transition" | "text">("question");

  useEffect(() => {
    setPhase("question");
    const t1 = setTimeout(() => setPhase("transition"), 2000);
    const t2 = setTimeout(() => setPhase("text"), 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div style={{
      width: "100%", height: "100%", display: "flex",
      flexDirection: "column", alignItems: "center", justifyContent: "center",
      textAlign: "center", padding: "2rem",
    }}>
      {/* Question mark phase */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        opacity: phase === "question" ? 1 : 0,
        transform: phase === "question" ? "scale(1)" : "scale(0.6)",
        pointerEvents: "none",
      }}>
        <span style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: "clamp(6rem, 15vw, 10rem)",
          fontWeight: 700,
          color: "#2A2D32",
          lineHeight: 1,
          animation: phase === "question" ? "qpulse 2s ease-in-out infinite" : "none",
          userSelect: "none",
        }}>?</span>
      </div>

      {/* Text phase */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "2.5rem",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        opacity: phase === "text" ? 1 : 0,
        transform: phase === "text" ? "translateY(0)" : "translateY(20px)",
      }}>
        <p style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
          fontWeight: 600,
          color: "#F2F2F2",
          letterSpacing: "-0.02em",
          lineHeight: 1.3,
          marginBottom: "0.75rem",
        }}>{label === "pt"
          ? "Sua empresa pode ser nosso próximo case de sucesso"
          : "Your company could be our next success story"
        }</p>
        <p style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "0.75rem",
          color: "#4B5563",
          letterSpacing: "0.06em",
          marginBottom: "2rem",
        }}>{label === "pt" ? "VAMOS CONSTRUIR JUNTOS" : "LET'S BUILD TOGETHER"}</p>
        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta"
          style={{ fontSize: "0.9rem", padding: "0.75rem 1.75rem", borderRadius: "6px" }}
        >
          {label === "pt" ? "Agendar free demo" : "Book free demo"}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginLeft: "0.25rem" }}>
            <path d="M3 7h8M8 4l3 3-3 3" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Solutions({ lang = "pt" }: { lang?: Lang }) {
  const tx = copy[lang];
  const cards = lang === "pt" ? cards_pt : cards_en;
  const [active, setActive] = useState(0);
  const total = cards.length + 1; // real cards + question card
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".fade-up");
    if (!els) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.07 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const prev = () => setActive(a => (a - 1 + total) % total);
  const next = () => setActive(a => (a + 1) % total);

  // visible indices: prev, active, next
  const prevIdx = (active - 1 + total) % total;
  const nextIdx = (active + 1) % total;

  const getCardData = (idx: number): CardData | null =>
    idx < cards.length ? cards[idx] : null;

  function renderCard(idx: number, position: "prev" | "center" | "next") {
    const cardData = getCardData(idx);
    const isQuestion = idx >= cards.length;
    const isCenter = position === "center";
    const color = isQuestion ? "#6B7280" : (cardData?.color ?? "#F26522");

    return (
      <div
        key={`${idx}-${position}`}
        onClick={() => !isCenter && setActive(idx)}
        style={{
          flex: position === "center" ? "0 0 52%" : "0 0 22%",
          minWidth: 0,
          background: "#0D0F11",
          border: `1px solid ${isCenter ? color + "55" : "#1E2024"}`,
          borderRadius: "12px",
          padding: isCenter ? "0" : "1.5rem",
          minHeight: isCenter ? "480px" : "320px",
          position: "relative",
          overflow: "hidden",
          cursor: isCenter ? "default" : "pointer",
          transition: "all 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
          opacity: isCenter ? 1 : 0.45,
          transform: isCenter ? "scale(1)" : "scale(0.92)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Side card — simple preview */}
        {!isCenter && (
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "center",
            justifyContent: "center", height: "100%", gap: "1rem",
            padding: "1rem",
          }}>
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.625rem",
              letterSpacing: "0.12em", color: color, textTransform: "uppercase",
              background: color + "15", border: `1px solid ${color}30`,
              borderRadius: "4px", padding: "0.25rem 0.625rem",
            }}>
              {isQuestion ? "?" : (cardData?.tag ?? "")}
            </span>
            <span style={{
              fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1rem",
              fontWeight: 600, color: "#6B7280", letterSpacing: "-0.01em",
              textAlign: "center",
            }}>
              {isQuestion ? "?" : (cardData?.title ?? "")}
            </span>
            <div style={{ width: "24px", height: "1px", background: "#2A2D32" }} />
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.55rem",
              color: "#3A3D42", letterSpacing: "0.1em",
            }}>CLIQUE PARA VER</span>
          </div>
        )}

        {/* Center card — full content */}
        {isCenter && !isQuestion && cardData && (
          <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "2rem" }}>
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
              <span style={{
                fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.625rem",
                letterSpacing: "0.14em", color: color, background: color + "15",
                border: `1px solid ${color}35`, borderRadius: "4px", padding: "0.25rem 0.75rem",
                textTransform: "uppercase",
              }}>{cardData.tag}</span>
              <span style={{
                fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem",
                color: "#2A2D32", letterSpacing: "0.06em",
              }}>{String(active + 1).padStart(2,"0")}/{String(total - 1).padStart(2,"0")}</span>
            </div>

            {/* Title */}
            <h3 style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              fontWeight: 700, color: "#F2F2F2", letterSpacing: "-0.03em",
              marginBottom: "0.25rem",
            }}>{cardData.title}</h3>
            <p style={{
              fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.75rem",
              color: color, letterSpacing: "0.04em", marginBottom: "1.75rem",
            }}>{cardData.subtitle}</p>

            {/* Illustration — center stage */}
            <div style={{
              flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: "1.75rem", padding: "0.5rem",
              background: color + "06", borderRadius: "8px",
              border: `1px solid ${color}12`,
            }}>
              {cardData.illustration}
            </div>

            {/* Description */}
            <p style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "0.875rem", color: "#6B7280", lineHeight: "1.7",
            }}>{cardData.desc}</p>

            {/* Bottom gradient line */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0, height: "3px",
              background: `linear-gradient(90deg, transparent, ${color}60, transparent)`,
            }} />
          </div>
        )}

        {/* Center card — question */}
        {isCenter && isQuestion && (
          <QuestionCard label={lang} />
        )}
      </div>
    );
  }

  return (
    <section ref={ref} id="solucoes" style={{
      background: "#111214",
      paddingTop: "8rem", paddingBottom: "8rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Top seamless blend from hero */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "120px",
        background: "linear-gradient(to bottom, #0A0B0D, transparent)",
        pointerEvents: "none",
      }} />

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

        {/* 3-card layout */}
        <div className="fade-up" style={{ transitionDelay: "0.12s" }}>
          <div style={{
            display: "flex", gap: "1rem", alignItems: "stretch",
            maxWidth: "960px", margin: "0 auto",
          }}>
            {renderCard(prevIdx, "prev")}
            {renderCard(active, "center")}
            {renderCard(nextIdx, "next")}
          </div>

          {/* Nav buttons below */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: "1.25rem", marginTop: "2rem",
          }}>
            <button onClick={prev} className="sol-nav-btn" aria-label="Previous">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#3A3D42" strokeWidth="1"/>
                <path d="M11.5 6.5L8 10l3.5 3.5" stroke="#B8BCC2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Dots */}
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {Array.from({ length: total }).map((_, i) => (
                <button key={i} onClick={() => setActive(i)} style={{
                  width: active === i ? "20px" : "6px", height: "6px",
                  borderRadius: "3px",
                  background: active === i ? "#F26522" : "#2A2D32",
                  border: "none", cursor: "pointer", padding: 0,
                  transition: "width 0.3s, background 0.3s",
                }} />
              ))}
            </div>

            <button onClick={next} className="sol-nav-btn" aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#3A3D42" strokeWidth="1"/>
                <path d="M8.5 6.5L12 10l-3.5 3.5" stroke="#B8BCC2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom blend */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "120px",
        background: "linear-gradient(to bottom, transparent, #0A0B0D)",
        pointerEvents: "none",
      }} />

      <style>{`
        .sol-nav-btn {
          width: 40px; height: 40px;
          display: flex; align-items: center; justify-content: center;
          background: transparent; border: none; cursor: pointer;
          border-radius: 50%; transition: background 0.18s;
        }
        .sol-nav-btn:hover { background: #16181C; }

        @keyframes qpulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.04); }
        }

        @media (max-width: 768px) {
          /* On mobile show only center card + partial sides */
        }
      `}</style>
    </section>
  );
}
