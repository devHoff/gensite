"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const DEMO_URL = "https://calendly.com/arthur-renck3/book-demo";

type Lang = "pt" | "en";

interface HeaderProps {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export default function Header({ lang, setLang }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  const navItems = [
    { label: lang === "pt" ? "Soluções" : "Solutions", href: "#solucoes" },
    { label: lang === "pt" ? "Depoimentos" : "Testimonials", href: "#depoimentos" },
    { label: lang === "pt" ? "Como Funciona" : "How It Works", href: "#como-funciona" },
    { label: lang === "pt" ? "Empresa" : "Company", href: "#empresa" },
  ];

  return (
    <>
      {/* Fixed header — column layout so dropdown pushes below the bar */}
      <header
        className={`site-header ${scrolled ? "scrolled" : "top"}`}
        style={{
          flexDirection: "column",
          alignItems: "stretch",
          height: "auto",        /* override the 64px fixed height */
        }}
      >
        {/* ── Top bar ── */}
        <div
          className="site-container"
          style={{ width: "100%", padding: "0 1rem" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "64px",
              width: "100%",
              gap: "0.5rem",
            }}
          >
            {/* Logo — always far left */}
            <a
              href="#hero"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                flexShrink: 0,
                minWidth: 0,
              }}
              aria-label="AKIRAL"
            >
              <Image
                src="/logo.png"
                alt="AKIRAL"
                width={110}
                height={48}
                style={{ height: "30px", width: "auto", objectFit: "contain" }}
                priority
              />
            </a>

            {/* Desktop nav — hidden on mobile */}
            <nav
              className="hidden-mobile"
              style={{ display: "flex", alignItems: "center", gap: "2rem", flex: 1, justifyContent: "center" }}
            >
              {navItems.map(item => (
                <a key={item.href} href={item.href} className="nav-link">{item.label}</a>
              ))}
            </nav>

            {/* Desktop right: lang + CTA — hidden on mobile */}
            <div className="hidden-mobile" style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
                <button className={`lang-btn${lang === "pt" ? " active" : ""}`} onClick={() => setLang("pt")}>PT</button>
                <span className="lang-sep">|</span>
                <button className={`lang-btn${lang === "en" ? " active" : ""}`} onClick={() => setLang("en")}>EN</button>
              </div>
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta"
                style={{ padding: "0.55rem 1.125rem", fontSize: "0.8rem", borderRadius: "6px" }}
              >
                {lang === "pt" ? "Agendar Demo" : "Book Demo"}
              </a>
            </div>

            {/* Mobile hamburger — always far right, never overlaps logo */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Menu"
              aria-expanded={menuOpen}
              className="mobile-only"
              style={{
                display: "none",          /* overridden to flex by .mobile-only CSS */
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "10px",
                flexShrink: 0,
                marginLeft: "auto",       /* pushes to far right */
                width: "40px",
                height: "40px",
              }}
            >
              <span
                style={{
                  display: "block", width: "22px", height: "1.5px",
                  background: "#B8BCC2", borderRadius: "2px",
                  transition: "transform 0.25s",
                  transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
                }}
              />
              <span
                style={{
                  display: "block", width: "22px", height: "1.5px",
                  background: "#B8BCC2", borderRadius: "2px",
                  transition: "opacity 0.25s, transform 0.25s",
                  opacity: menuOpen ? 0 : 1,
                  transform: menuOpen ? "scaleX(0)" : "none",
                }}
              />
              <span
                style={{
                  display: "block", width: "22px", height: "1.5px",
                  background: "#B8BCC2", borderRadius: "2px",
                  transition: "transform 0.25s",
                  transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </div>

        {/* ── Mobile dropdown — slides DOWN from header bottom ── */}
        <div
          className="mobile-only-block"
          style={{
            maxHeight: menuOpen ? "380px" : "0",
            overflow: "hidden",
            transition: "max-height 0.32s cubic-bezier(0.4,0,0.2,1)",
            borderTop: menuOpen ? "1px solid #1E2024" : "1px solid transparent",
            background: "rgba(10,11,13,0.98)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          <div
            style={{
              padding: "1.25rem 1rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.875rem",
            }}
          >
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                style={{ fontSize: "1rem", padding: "0.25rem 0" }}
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}

            <div style={{
              display: "flex", alignItems: "center", gap: "0.4rem",
              paddingTop: "0.5rem", borderTop: "1px solid #1E2024",
            }}>
              <button className={`lang-btn${lang === "pt" ? " active" : ""}`} onClick={() => setLang("pt")}>PT</button>
              <span className="lang-sep">|</span>
              <button className={`lang-btn${lang === "en" ? " active" : ""}`} onClick={() => setLang("en")}>EN</button>
            </div>

            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
              style={{ justifyContent: "center", textAlign: "center", borderRadius: "6px", fontSize: "0.875rem" }}
              onClick={handleNavClick}
            >
              {lang === "pt" ? "Agendar Demo" : "Book Demo"}
            </a>
          </div>
        </div>
      </header>

      {/* Spacer so fixed header doesn't cover content */}
      <div style={{ height: "64px" }} aria-hidden="true" />
    </>
  );
}
