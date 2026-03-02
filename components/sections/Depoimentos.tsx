"use client";
import { useEffect, useRef } from "react";
import type { Lang } from "@/app/page";

const t = {
  pt: {
    label: "Depoimentos",
    h2: "Empresas que transformaram seus resultados.",
    rows: [
      [
        { quote: "Implementação impecável. Em 3 semanas tínhamos o sistema rodando em produção com métricas reais. Equipe extremamente competente.", name: "Rodrigo Mendes", role: "CEO, TechFlow", initials: "RM" },
        { quote: "Os agentes de IA reduziram 68% do tempo gasto em tarefas repetitivas. O ROI foi visível no primeiro mês. Recomendo sem reservas.", name: "Ana Paula Ferreira", role: "CTO, HealthBridge", initials: "AP" },
        { quote: "Automatizamos toda a gestão de fornecedores. O que levava dias agora é processado em minutos. Impressionante.", name: "Marcelo Costa", role: "Diretor de Ops, LogiXX", initials: "MC" },
        { quote: "A solução para a nossa clínica superou todas as expectativas. O agendamento automático sozinho economizou 20h por semana.", name: "Juliana Ramos", role: "COO, Clinident", initials: "JR" },
      ],
      [
        { quote: "A integração com nossos sistemas legados foi perfeita. Zero fricção. A equipe da AKIRAL entregou além do escopo prometido.", name: "Felipe Souza", role: "Head of Engineering, NovaBanco", initials: "FS" },
        { quote: "Triplicamos o volume de atendimento sem adicionar headcount. Os agentes de IA são literalmente nosso melhor funcionário.", name: "Lucas Andrade", role: "CEO, MotoMax", initials: "LA" },
        { quote: "A precisão do sistema de precificação com IA superou qualquer ferramenta que testamos antes. Game changer para o nosso mercado.", name: "Camila Torres", role: "VP de Produto, Smartis", initials: "CT" },
        { quote: "Automatizar o fluxo de cobranças foi transformador. Reduzimos inadimplência em 40% no primeiro trimestre.", name: "Beatriz Lima", role: "Fundadora, DentiCare", initials: "BL" },
      ],
    ],
  },
  en: {
    label: "Testimonials",
    h2: "Companies that transformed their results.",
    rows: [
      [
        { quote: "Flawless implementation. In 3 weeks we had the system running in production with real metrics. Extremely competent team.", name: "Rodrigo Mendes", role: "CEO, TechFlow", initials: "RM" },
        { quote: "AI agents reduced 68% of time spent on repetitive tasks. ROI was visible in the first month. I recommend without reservation.", name: "Ana Paula Ferreira", role: "CTO, HealthBridge", initials: "AP" },
        { quote: "We automated all supplier management. What used to take days is now processed in minutes. Impressive.", name: "Marcelo Costa", role: "Ops Director, LogiXX", initials: "MC" },
        { quote: "The solution for our clinic exceeded all expectations. The automatic scheduling alone saved 20 hours per week.", name: "Juliana Ramos", role: "COO, Clinident", initials: "JR" },
      ],
      [
        { quote: "The integration with our legacy systems was perfect. Zero friction. The AKIRAL team delivered beyond the promised scope.", name: "Felipe Souza", role: "Head of Engineering, NovaBanco", initials: "FS" },
        { quote: "We tripled the service volume without adding headcount. The AI agents are literally our best employee.", name: "Lucas Andrade", role: "CEO, MotoMax", initials: "LA" },
        { quote: "The accuracy of the AI pricing system surpassed any tool we tested before. Game changer for our market.", name: "Camila Torres", role: "VP of Product, Smartis", initials: "CT" },
        { quote: "Automating the billing flow was transformative. We reduced default rates by 40% in the first quarter.", name: "Beatriz Lima", role: "Founder, DentiCare", initials: "BL" },
      ],
    ],
  },
};

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M6 1L7.29 4.26L10.91 4.37L8.18 6.52L9.12 10L6 8.07L2.88 10L3.82 6.52L1.09 4.37L4.71 4.26Z" fill="#F26522" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
      <path
        d="M0 16V9.6C0 4.267 2.933 1.067 8.8 0L9.867 1.867C7.467 2.4 5.733 3.2 4.667 4.267 3.6 5.333 3.067 6.933 3.067 9.067H6.4V16H0ZM11.467 16V9.6C11.467 4.267 14.4 1.067 20.267 0L21.333 1.867C18.933 2.4 17.2 3.2 16.133 4.267 15.067 5.333 14.533 6.933 14.533 9.067H17.867V16H11.467Z"
        fill="#F26522"
        opacity="0.25"
      />
    </svg>
  );
}

function TestiCard({ quote, name, role, initials }: { quote: string; name: string; role: string; initials: string }) {
  return (
    <div className="testi-card">
      <div style={{ marginBottom: "1rem" }}>
        <QuoteIcon />
      </div>
      <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "0.875rem", color: "#B8BCC2", lineHeight: 1.75, marginBottom: "1.5rem", flex: 1 }}>
        &ldquo;{quote}&rdquo;
      </p>
      <div style={{ marginBottom: "1.25rem" }}>
        <div style={{ display: "flex", gap: "2px" }}>
          {[0, 1, 2, 3, 4].map(i => <StarIcon key={i} />)}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <div style={{
          width: "32px", height: "32px", borderRadius: "50%",
          background: "#1E2024", border: "1px solid #2A2D32",
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", color: "#6B7280", letterSpacing: "0.04em" }}>
            {initials}
          </span>
        </div>
        <div>
          <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "0.8125rem", fontWeight: 500, color: "#F2F2F2", letterSpacing: "-0.01em" }}>
            {name}
          </div>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", color: "#4B5563", letterSpacing: "0.04em", marginTop: "1px" }}>
            {role}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Depoimentos({ lang }: { lang: Lang }) {
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

  const doubleRow1 = [...tx.rows[0], ...tx.rows[0]];
  const doubleRow2 = [...tx.rows[1], ...tx.rows[1]];

  return (
    <section
      id="depoimentos"
      ref={sectionRef}
      style={{
        background: "#0A0B0D",
        overflow: "hidden",
        paddingTop: "8rem",
        paddingBottom: "8rem",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "130px", background: "linear-gradient(to bottom, #111214, transparent)", pointerEvents: "none" }} />

      <div className="site-container">
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
            <span className="section-label">{tx.label}</span>
            <div style={{ width: "40px", height: "1px", background: "#1E2024" }} />
          </div>
          <h2 className="section-headline fade-up" style={{ transitionDelay: "0.06s" }}>
            {tx.h2}
          </h2>
        </div>
      </div>

      <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: "1.25rem", transitionDelay: "0.12s" }}>
        {/* Row 1 - scrolls left */}
        <div style={{
          overflow: "hidden", width: "100%",
          maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}>
          <div className="testi-track" style={{ display: "flex", gap: "1.25rem", width: "max-content" }}>
            {doubleRow1.map((c, i) => <TestiCard key={i} {...c} />)}
          </div>
        </div>

        {/* Row 2 - scrolls right */}
        <div style={{
          overflow: "hidden", width: "100%",
          maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}>
          <div className="testi-track-reverse" style={{ display: "flex", gap: "1.25rem", width: "max-content" }}>
            {doubleRow2.map((c, i) => <TestiCard key={i} {...c} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
