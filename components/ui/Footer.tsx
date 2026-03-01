"use client";
import Image from "next/image";

type Lang = "pt" | "en";

const BOOK_DEMO_URL = "https://calendly.com/arthur-renck3/book-demo";

const copy = {
  pt: {
    tagline: "Enterprise Technological Infrastructure",
    columns: [
      {
        heading: "Company",
        links: [
          { label: "About Us", href: "#empresa" },
          { label: "Terms & Privacy", href: "#" },
          { label: "Your privacy rights", href: "#" },
        ],
      },
      {
        heading: "Akiral for",
        links: [
          { label: "Enterprise", href: "#solucoes" },
          { label: "Small Business", href: "#solucoes" },
          { label: "Personal", href: "#solucoes" },
        ],
      },
      {
        heading: "Resources",
        links: [
          { label: "Help Center", href: "#" },
          { label: "Partner programs", href: "#" },
        ],
      },
    ],
    demo: "Agendar Demo",
    copy: "Enterprise Technological Infrastructure.",
  },
  en: {
    tagline: "Enterprise Technological Infrastructure",
    columns: [
      {
        heading: "Company",
        links: [
          { label: "About Us", href: "#empresa" },
          { label: "Terms & Privacy", href: "#" },
          { label: "Your privacy rights", href: "#" },
        ],
      },
      {
        heading: "Akiral for",
        links: [
          { label: "Enterprise", href: "#solucoes" },
          { label: "Small Business", href: "#solucoes" },
          { label: "Personal", href: "#solucoes" },
        ],
      },
      {
        heading: "Resources",
        links: [
          { label: "Help Center", href: "#" },
          { label: "Partner programs", href: "#" },
        ],
      },
    ],
    demo: "Schedule Demo",
    copy: "Enterprise Technological Infrastructure.",
  },
};

export default function Footer({ lang = "pt" }: { lang?: Lang }) {
  const tx = copy[lang];
  const year = new Date().getFullYear();

  return (
    <footer id="empresa" style={{ background: "#0A0B0D", borderTop: "1px solid #16181C" }}>
      <div className="site-container" style={{ padding: "5rem 1.5rem 4rem" }}>
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
          <p style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.6875rem",
            letterSpacing: "0.06em",
            color: "#3A3D42",
          }}>
            {tx.tagline}
          </p>
        </div>

        <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "3rem 6rem",
          marginBottom: "4rem",
        }}>
          {tx.columns.map(col => (
            <div key={col.heading} style={{ minWidth: "130px" }}>
              <h4 style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.625rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#3A3D42",
                marginBottom: "1.25rem",
              }}>
                {col.heading}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column" }}>
                {col.links.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ width: "100%", height: "1px", background: "#16181C", marginBottom: "2.5rem" }} />

        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "1.25rem 2.5rem" }}>
          <span style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.625rem",
            letterSpacing: "0.05em",
            color: "#2A2D32",
          }}>
            © {year} AKIRAL. {tx.copy}
          </span>

          <div style={{ width: "1px", height: "12px", background: "#1E2024" }} />

          <a href={BOOK_DEMO_URL} target="_blank" rel="noopener noreferrer" style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "0.75rem",
            color: "#3A3D42",
            textDecoration: "none",
            transition: "color 0.14s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "#6B7280")}
          onMouseLeave={e => (e.currentTarget.style.color = "#3A3D42")}
          >
            {tx.demo}
          </a>

          <div style={{ width: "1px", height: "12px", background: "#1E2024" }} />

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div className="status-dot" style={{ width: "5px", height: "5px" }} />
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              color: "#2A2D32",
            }}>
              SISTEMAS OPERACIONAIS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
