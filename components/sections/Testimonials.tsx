"use client";
import { useEffect, useRef } from "react";

type Lang = "pt" | "en";

/* ── Stars ── */
function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M6 1L7.29 4.26L10.91 4.37L8.18 6.52L9.12 10L6 8.07L2.88 10L3.82 6.52L1.09 4.37L4.71 4.26Z"
            fill={i < count ? "#F26522" : "#2A2D32"} />
        </svg>
      ))}
    </div>
  );
}

/* ── Testimonial data ── */
const testimonials_pt = [
  { name: "Rodrigo Mendes",    role: "CEO, TechFlow",          stars: 5, text: "Implementação impecável. Em 3 semanas tínhamos o sistema rodando em produção com métricas reais. Equipe extremamente competente." },
  { name: "Ana Paula Ferreira",role: "CTO, HealthBridge",      stars: 5, text: "Os agentes de IA reduziram 68% do tempo gasto em tarefas repetitivas. O ROI foi visível no primeiro mês. Recomendo sem reservas." },
  { name: "Marcelo Costa",     role: "Diretor de Ops, LogiXX", stars: 5, text: "Automatizamos toda a gestão de fornecedores. O que levava dias agora é processado em minutos. Impressionante." },
  { name: "Juliana Ramos",     role: "COO, Clinident",         stars: 5, text: "A solução para a nossa clínica superou todas as expectativas. O agendamento automático sozinho economiza 4h por dia da equipe." },
  { name: "Felipe Andrade",    role: "Head of Engineering, NovaBanco", stars: 5, text: "Arquitetura robusta, zero downtime no go-live, suporte excepcional. Difícil encontrar parceiro técnico nesse nível." },
  { name: "Camila Souza",      role: "CEO, MotoMax",           stars: 5, text: "O marketplace foi construído com uma velocidade que não acreditávamos ser possível. Qualidade de código e documentação excelentes." },
  { name: "Rafael Oliveira",   role: "VP de Produto, Smartis", stars: 5, text: "Integraram nossos 12 sistemas legados em uma única camada de orquestração. Algo que nossa equipe interna estimava em 18 meses." },
  { name: "Beatriz Lima",      role: "Fundadora, DentiCare",   stars: 5, text: "Os lembretes automáticos reduziram faltas em 41%. Melhor investimento que fizemos este ano para o negócio." },
];

const testimonials_en = [
  { name: "Rodrigo Mendes",    role: "CEO, TechFlow",          stars: 5, text: "Flawless implementation. In 3 weeks we had the system running in production with real metrics. Extremely competent team." },
  { name: "Ana Paula Ferreira",role: "CTO, HealthBridge",      stars: 5, text: "AI agents reduced 68% of time spent on repetitive tasks. ROI was visible in the first month. Unreservedly recommended." },
  { name: "Marcelo Costa",     role: "Director of Ops, LogiXX",stars: 5, text: "We automated all supplier management. What used to take days is now processed in minutes. Impressive." },
  { name: "Juliana Ramos",     role: "COO, Clinident",         stars: 5, text: "The clinic solution exceeded all expectations. Automatic scheduling alone saves the team 4 hours per day." },
  { name: "Felipe Andrade",    role: "Head of Engineering, NovaBanco", stars: 5, text: "Robust architecture, zero downtime on go-live, exceptional support. Hard to find a technical partner at this level." },
  { name: "Camila Souza",      role: "CEO, MotoMax",           stars: 5, text: "The marketplace was built at a speed we didn't think was possible. Excellent code quality and documentation." },
  { name: "Rafael Oliveira",   role: "VP of Product, Smartis", stars: 5, text: "They integrated our 12 legacy systems into a single orchestration layer. Something our internal team estimated at 18 months." },
  { name: "Beatriz Lima",      role: "Founder, DentiCare",     stars: 5, text: "Automatic reminders reduced no-shows by 41%. Best investment we made this year for the business." },
];

const copy = {
  pt: { label: "Depoimentos", headline: "Empresas que transformaram seus resultados.", items: testimonials_pt },
  en:  { label: "Testimonials", headline: "Companies that transformed their results.", items: testimonials_en },
};

/* ── Single card ── */
function TestimonialCard({ item }: { item: typeof testimonials_pt[0] }) {
  const initials = item.name.split(" ").slice(0, 2).map(n => n[0]).join("").toUpperCase();
  return (
    <div className="testi-card">
      {/* Quote icon */}
      <div style={{ marginBottom: "1rem" }}>
        <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
          <path d="M0 16V9.6C0 4.267 2.933 1.067 8.8 0L9.867 1.867C7.467 2.4 5.733 3.2 4.667 4.267 3.6 5.333 3.067 6.933 3.067 9.067H6.4V16H0ZM11.467 16V9.6C11.467 4.267 14.4 1.067 20.267 0L21.333 1.867C18.933 2.4 17.2 3.2 16.133 4.267 15.067 5.333 14.533 6.933 14.533 9.067H17.867V16H11.467Z"
            fill="#F26522" opacity="0.25"/>
        </svg>
      </div>

      {/* Text */}
      <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "0.875rem",
        color: "#B8BCC2", lineHeight: "1.75", marginBottom: "1.5rem", flex: 1 }}>
        "{item.text}"
      </p>

      {/* Stars */}
      <div style={{ marginBottom: "1.25rem" }}>
        <Stars count={item.stars} />
      </div>

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <div style={{ width: "32px", height: "32px", borderRadius: "50%",
          background: "#1E2024", border: "1px solid #2A2D32",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0 }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem",
            color: "#6B7280", letterSpacing: "0.04em" }}>{initials}</span>
        </div>
        <div>
          <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "0.8125rem",
            fontWeight: 500, color: "#F2F2F2", letterSpacing: "-0.01em" }}>{item.name}</div>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem",
            color: "#4B5563", letterSpacing: "0.04em", marginTop: "1px" }}>{item.role}</div>
        </div>
      </div>
    </div>
  );
}

/* ── Marquee row ── */
function MarqueeRow({ items, reverse = false }: { items: typeof testimonials_pt; reverse?: boolean }) {
  const doubled = [...items, ...items]; // duplicate for seamless loop
  return (
    <div style={{ overflow: "hidden", width: "100%", maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)", WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
      <div className={`testi-track ${reverse ? "testi-track-reverse" : ""}`}
        style={{ display: "flex", gap: "1.25rem", width: "max-content" }}>
        {doubled.map((item, i) => (
          <TestimonialCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials({ lang = "pt" }: { lang?: Lang }) {
  const tx = copy[lang];
  const ref = useRef<HTMLElement>(null);

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

  /* split into two rows */
  const row1 = tx.items.slice(0, 4);
  const row2 = tx.items.slice(4);

  return (
    <section ref={ref} id="depoimentos" style={{
      background: "#0A0B0D",
      overflow: "hidden",
      paddingTop: "8rem",
      paddingBottom: "8rem",
      position: "relative",
    }}>
      {/* Top blend */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "130px", background: "linear-gradient(to bottom, #111214, transparent)", pointerEvents: "none" }} />

      <div className="site-container">
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
            <span className="section-label">{tx.label}</span>
            <div style={{ width: "40px", height: "1px", background: "#1E2024" }} />
          </div>
          <h2 className="section-headline fade-up" style={{ transitionDelay: "0.06s" }}>
            {tx.headline}
          </h2>
        </div>
      </div>

      {/* Full-bleed scrolling rows — outside site-container for edge-to-edge */}
      <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: "1.25rem", transitionDelay: "0.12s" }}>
        <MarqueeRow items={row1} reverse={false} />
        <MarqueeRow items={row2} reverse={true} />
      </div>

      {/* Bottom blend */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "130px", background: "linear-gradient(to bottom, transparent, #111214)", pointerEvents: "none" }} />

      <style>{`
        .testi-card {
          flex-shrink: 0;
          width: 320px;
          background: #0D0F11;
          border: 1px solid #1E2024;
          border-radius: 6px;
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          user-select: none;
          pointer-events: none;
        }

        .testi-track {
          animation: testi-scroll 40s linear infinite;
        }
        .testi-track-reverse {
          animation: testi-scroll-rev 48s linear infinite;
        }

        @keyframes testi-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes testi-scroll-rev {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        @media (max-width: 640px) {
          .testi-card { width: 280px; padding: 1.375rem; }
        }
      `}</style>
    </section>
  );
}
