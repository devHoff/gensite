"use client";
import { useEffect, useRef } from "react";

type Lang = "pt" | "en";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

const copy: Record<Lang, { label: string; headline: string; sub: string; items: Testimonial[] }> = {
  pt: {
    label: "Depoimentos",
    headline: "O que nossos clientes dizem",
    sub: "Resultados reais em operações reais.",
    items: [
      {
        quote: "A Akiral montou um fluxo completo de captação e confirmação para nossa clínica.",
        author: "Dra. Camila Duarte",
        role: "Diretora Clínica",
        company: "Autodonto",
      },
      {
        quote: "No Sulmotors, o atendimento passou a responder em segundos e o comercial recebe lead pronto.",
        author: "Rafael Schmitt",
        role: "Head de Operações",
        company: "Sulmotors",
      },
      {
        quote: "A automação reduziu retrabalho e trouxe previsibilidade operacional para o time.",
        author: "Felipe Borges",
        role: "CTO",
        company: "LogiCore",
      },
      {
        quote: "A entrega trouxe arquitetura, monitoramento e governança com impacto rápido.",
        author: "Bruna Menezes",
        role: "Gerente de Transformação",
        company: "Nexa Serviços",
      },
    ],
  },
  en: {
    label: "Testimonials",
    headline: "What our clients say",
    sub: "Real outcomes in real operations.",
    items: [
      {
        quote: "Akiral built a full capture and confirmation flow for our clinic.",
        author: "Dr. Camila Duarte",
        role: "Clinical Director",
        company: "Autodonto",
      },
      {
        quote: "At Sulmotors, responses became near-instant and sales receives qualified leads.",
        author: "Rafael Schmitt",
        role: "Operations Lead",
        company: "Sulmotors",
      },
      {
        quote: "Automation reduced rework and brought operational predictability.",
        author: "Felipe Borges",
        role: "CTO",
        company: "LogiCore",
      },
      {
        quote: "Delivery included architecture, monitoring and governance with fast impact.",
        author: "Bruna Menezes",
        role: "Transformation Manager",
        company: "Nexa Services",
      },
    ],
  },
};

export default function Architecture({ lang = "pt" }: { lang?: Lang }) {
  const tx = copy[lang];
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".fade-up");
    if (!els) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="arquitetura" className="section-wrap" style={{ background: "#0A0B0D", borderTop: "1px solid #1E2024" }}>
      <div className="site-container">
        <div style={{ marginBottom: "2.5rem" }}>
          <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.2rem" }}>
            <span className="section-label">{tx.label}</span>
            <div style={{ width: "40px", height: "1px", background: "#1E2024" }} />
          </div>
          <h2 className="section-headline fade-up" style={{ marginBottom: "0.6rem" }}>{tx.headline}</h2>
          <p className="body-copy fade-up">{tx.sub}</p>
        </div>

        <div className="fade-up" style={{ overflowX: "auto" }}>
          <div style={{
            minWidth: "920px",
            border: "1px solid #1E2024",
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(220px, 1fr))",
            background: "#0D0F11",
          }}>
            {tx.items.map((item, i) => (
              <article key={`${item.author}-${i}`} style={{
                padding: "1.2rem 1rem",
                borderRight: i < tx.items.length - 1 ? "1px solid #1E2024" : "none",
                minHeight: "210px",
                display: "flex",
                flexDirection: "column",
              }}>
                <p style={{ color: "#F2F2F2", lineHeight: 1.5, fontSize: "0.95rem", marginBottom: "1rem" }}>
                  “{item.quote}”
                </p>
                <div style={{ marginTop: "auto" }}>
                  <p style={{ color: "#F2F2F2", fontWeight: 500 }}>{item.author}</p>
                  <p className="mono-sm">{item.role} · {item.company}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
