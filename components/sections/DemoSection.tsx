"use client";
import { useEffect, useRef, useState } from "react";
import DataFlowLines from "@/components/animations/DataFlowLines";

type Lang = "pt" | "en";

const copy = {
  pt: {
    label: "Próximo Passo",
    headline: "Avalie se a AKIRAL é a parceira técnica certa.",
    body: "Uma sessão técnica estruturada com nossos engenheiros.\nSem apresentações comerciais. Sem compromissos.\nApenas engenharia aplicada ao seu contexto.",
    cta: "Agendar Demo Técnica",
    format: [
      { label: "Formato",  value: "Sessão remota" },
      { label: "Duração",  value: "60 minutos"    },
      { label: "Perfil",   value: "Engenheiros / CTO" },
    ],
    modal: {
      title: "Contato técnico",
      sub: "Descreva brevemente seu contexto operacional.",
      emailPlaceholder: "seu@email.com",
      msgPlaceholder: "Descreva seu contexto operacional, desafios técnicos e escala atual...",
      send: "Enviar",
      sending: "Enviando...",
      sent: "Mensagem enviada. Retornaremos em breve.",
      error: "Erro ao enviar. Tente novamente ou escreva para contact@akiral.com",
      cancel: "Cancelar",
    },
  },
  en: {
    label: "Next Step",
    headline: "Evaluate if AKIRAL is the right technical partner.",
    body: "A structured technical session with our engineers.\nNo commercial presentations. No commitments.\nJust engineering applied to your context.",
    cta: "Schedule Technical Demo",
    format: [
      { label: "Format",   value: "Remote session"    },
      { label: "Duration", value: "60 minutes"        },
      { label: "Profile",  value: "Engineers / CTO"   },
    ],
    modal: {
      title: "Technical contact",
      sub: "Briefly describe your operational context.",
      emailPlaceholder: "your@email.com",
      msgPlaceholder: "Describe your operational context, technical challenges and current scale...",
      send: "Send",
      sending: "Sending...",
      sent: "Message sent. We'll get back to you shortly.",
      error: "Send error. Try again or write to contact@akiral.com",
      cancel: "Cancel",
    },
  },
};

export default function DemoSection({ lang = "pt" }: { lang?: Lang }) {
  const tx = copy[lang];
  const m  = tx.modal;
  const ref = useRef<HTMLElement>(null);

  const [open,    setOpen]    = useState(false);
  const [email,   setEmail]   = useState("");
  const [message, setMessage] = useState("");
  const [status,  setStatus]  = useState<"idle"|"sending"|"sent"|"error">("idle");

  /* fade-up observer */
  useEffect(() => {
    const els = ref.current?.querySelectorAll(".fade-up");
    if (!els) return;
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* lock scroll when modal open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) return;
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xpwzqraq", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ email, message, _replyto: email, _subject: "AKIRAL — Demo Request" }),
      });
      /* Use mailto fallback regardless so we can always capture */
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
    } catch {
      /* Fallback: open mailto */
      const body = encodeURIComponent(`De: ${email}\n\n${message}`);
      window.open(`mailto:contact@akiral.com?subject=AKIRAL%20Demo%20Request&body=${body}`, "_blank");
      setStatus("sent");
    }
  };

  const closeModal = () => {
    setOpen(false);
    setTimeout(() => { setStatus("idle"); setEmail(""); setMessage(""); }, 300);
  };

  return (
    <>
      <section
        ref={ref}
        id="demo"
        style={{
          position: "relative",
          background: "#111214",
          overflow: "hidden",
          paddingTop: "8rem",
          paddingBottom: "8rem",
        }}
      >
        {/* Top blend */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "130px", background: "linear-gradient(to bottom, #0A0B0D, transparent)", pointerEvents: "none", zIndex: 0 }} />
        {/* Background flow lines */}
        <DataFlowLines variant="section" />
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 70% 100% at 50% 50%, transparent 20%, #111214 90%)",
        }} aria-hidden="true"/>

        <div className="site-container" style={{ position: "relative", zIndex: 10 }}>
          <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>

            {/* Label */}
            <div className="fade-up" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
              <div style={{ width: "40px", height: "1px", background: "#1E2024" }} />
              <span className="section-label">{tx.label}</span>
              <div style={{ width: "40px", height: "1px", background: "#1E2024" }} />
            </div>

            {/* Headline */}
            <h2 className="sub-headline text-balance fade-up" style={{ marginBottom: "1.75rem", transitionDelay: "0.06s" }}>
              {tx.headline}
            </h2>

            {/* Body */}
            <div className="fade-up" style={{ marginBottom: "2.75rem", transitionDelay: "0.12s" }}>
              {tx.body.split("\n").map((line, i) => (
                <p key={i} className="body-copy" style={{ lineHeight: "1.8", textAlign: "center" }}>{line}</p>
              ))}
            </div>

            {/* CTA — Calendly */}
            <div className="fade-up" style={{ marginBottom: "3.5rem", transitionDelay: "0.18s" }}>
              <a
                href="https://calendly.com/arthur-renck3/book-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta"
                style={{ fontSize: "0.9rem", padding: "0.85rem 2rem", borderRadius: "8px",
                  boxShadow: "0 0 30px rgba(242,101,34,0.25)",
                  display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                {tx.cta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7H11M11 7L8 4M11 7L8 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Session format */}
            <div className="fade-up" style={{
              paddingTop: "2.5rem",
              borderTop: "1px solid #1E2024",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "2rem 3.5rem",
              transitionDelay: "0.24s",
            }}>
              {tx.format.map(f => (
                <div key={f.label} style={{ display: "flex", flexDirection: "column", gap: "0.3rem", alignItems: "center" }}>
                  <span className="mono-sm" style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}>{f.label}</span>
                  <span className="body-sm" style={{ color: "#B8BCC2" }}>{f.value}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom blend */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "100px", background: "linear-gradient(to bottom, transparent, #0A0B0D)", pointerEvents: "none" }} />
      </section>

      {/* ── MODAL ── */}
      {open && (
        <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
          <div className="modal-box">

            {/* Close */}
            <button
              onClick={closeModal}
              aria-label="Close"
              style={{ position: "absolute", top: "1.25rem", right: "1.25rem", background: "none", border: "none", cursor: "pointer", color: "#6B7280", padding: "0.25rem" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 3L13 13M13 3L3 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Title */}
            <div style={{ marginBottom: "0.5rem" }}>
              <span className="section-label">{m.title.toUpperCase()}</span>
            </div>
            <p className="body-sm" style={{ marginBottom: "2rem", color: "#6B7280" }}>{m.sub}</p>

            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "2rem 0" }}>
                <div className="status-dot" style={{ margin: "0 auto 1rem" }} />
                <p className="body-sm" style={{ color: "#B8BCC2" }}>{m.sent}</p>
                <button className="btn-ghost" onClick={closeModal} style={{ marginTop: "1.5rem" }}>{m.cancel}</button>
              </div>
            ) : (
              <form onSubmit={handleSend}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

                  {/* Email */}
                  <div>
                    <label style={{ display: "block", marginBottom: "0.4rem" }} className="mono-sm">EMAIL</label>
                    <input
                      type="email"
                      required
                      className="modal-input"
                      placeholder={m.emailPlaceholder}
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ display: "block", marginBottom: "0.4rem" }} className="mono-sm">MENSAGEM</label>
                    <textarea
                      required
                      rows={5}
                      className="modal-input"
                      placeholder={m.msgPlaceholder}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      style={{ minHeight: "120px" }}
                    />
                  </div>

                  {status === "error" && (
                    <p style={{ fontSize: "0.75rem", color: "#C94E14", fontFamily: "'IBM Plex Mono', monospace" }}>{m.error}</p>
                  )}

                  <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-end", marginTop: "0.5rem" }}>
                    <button type="button" className="btn-ghost" onClick={closeModal}>{m.cancel}</button>
                    <button type="submit" className="btn-cta" disabled={status === "sending"}>
                      {status === "sending" ? m.sending : m.send}
                    </button>
                  </div>

                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
