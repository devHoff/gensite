"use client";
import Image from "next/image";
import type { Lang } from "@/app/page";

const t = {
  pt: {
    scheduleDemo: "Agendar Demo",
    systems: "SISTEMAS OPERACIONAIS",
    company: "Company",
    companyLinks: [
      { label: "Sobre Nós", href: "/sobre-nos" },
      { label: "Termos & Privacidade", href: "/termos-e-privacidade" },
      { label: "Seus direitos de privacidade", href: "/seus-direitos-de-privacidade" },
    ],
    akiralFor: "Akiral para",
    akiralLinks: [
      { label: "Enterprise", href: "#solucoes" },
      { label: "Pequenas Empresas", href: "/#sulmotor" },
      { label: "Pessoal", href: "/#autodonto" },
    ],
    resources: "Recursos",
    resourceLinks: [
      { label: "Central de Ajuda", href: "#" },
      { label: "Programas de parceiros", href: "#" },
    ],
  },
  en: {
    scheduleDemo: "Book Demo",
    systems: "SYSTEMS OPERATIONAL",
    company: "Company",
    companyLinks: [
      { label: "About Us", href: "/sobre-nos" },
      { label: "Terms & Privacy", href: "/termos-e-privacidade" },
      { label: "Your privacy rights", href: "/seus-direitos-de-privacidade" },
    ],
    akiralFor: "Akiral for",
    akiralLinks: [
      { label: "Enterprise", href: "#solucoes" },
      { label: "Small Business", href: "/#sulmotor" },
      { label: "Personal", href: "/#autodonto" },
    ],
    resources: "Resources",
    resourceLinks: [
      { label: "Help Center", href: "#" },
      { label: "Partner programs", href: "#" },
    ],
  },
};

export default function Footer({ lang }: { lang: Lang }) {
  const tx = t[lang];

  return (
    <footer id="empresa" style={{ background: "#0A0B0D", borderTop: "1px solid #16181C" }}>
      <div className="site-container" style={{ padding: "5rem 1.5rem 4rem" }}>
        {/* Logo + tagline */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", marginBottom: "1rem" }}>
            <Image
              src="/logo.png"
              alt="AKIRAL"
              width={120}
              height={52}
              style={{ height: "28px", width: "auto", objectFit: "contain", opacity: 0.35 }}
            />
          </div>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6875rem", letterSpacing: "0.06em", color: "#3A3D42" }}>
            Enterprise Technological Infrastructure
          </p>
        </div>

        {/* Links grid */}
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "3rem 6rem", marginBottom: "4rem" }}>
          <div style={{ minWidth: "130px" }}>
            <h4 style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.625rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#3A3D42", marginBottom: "1.25rem" }}>
              {tx.company}
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column" }}>
              {tx.companyLinks.map(l => <li key={l.label}><a href={l.href} className="footer-link">{l.label}</a></li>)}
            </ul>
          </div>
          <div style={{ minWidth: "130px" }}>
            <h4 style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.625rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#3A3D42", marginBottom: "1.25rem" }}>
              {tx.akiralFor}
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column" }}>
              {tx.akiralLinks.map(l => <li key={l.label}><a href={l.href} className="footer-link">{l.label}</a></li>)}
            </ul>
          </div>
          <div style={{ minWidth: "130px" }}>
            <h4 style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.625rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#3A3D42", marginBottom: "1.25rem" }}>
              {tx.resources}
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column" }}>
              {tx.resourceLinks.map(l => <li key={l.label}><a href={l.href} className="footer-link">{l.label}</a></li>)}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: "1px", background: "#16181C", marginBottom: "2.5rem" }} />

        {/* Bottom bar */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "1.25rem 2.5rem" }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.625rem", letterSpacing: "0.05em", color: "#2A2D32" }}>
            © 2026 AKIRAL. Enterprise Technological Infrastructure.
          </span>
          <div style={{ width: "1px", height: "12px", background: "#1E2024" }} />
          <a
            href="#demo"
            style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "0.75rem", color: "#3A3D42", textDecoration: "none", transition: "color 0.14s" }}
          >
            {tx.scheduleDemo}
          </a>
          <div style={{ width: "1px", height: "12px", background: "#1E2024" }} />
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div className="status-dot" style={{ width: "5px", height: "5px" }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", color: "#2A2D32" }}>
              {tx.systems}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
