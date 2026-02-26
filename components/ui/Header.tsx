"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const t = {
  pt: {
    solutions:    "Soluções",
    testimonials: "Depoimentos",
    howItWorks:   "Como Funciona",
    company:      "Empresa",
    cta:          "Agendar Demo",
  },
  en: {
    solutions:    "Solutions",
    testimonials: "Testimonials",
    howItWorks:   "How It Works",
    company:      "Company",
    cta:          "Book Demo",
  },
};

type Lang = "pt" | "en";
interface HeaderProps { lang: Lang; setLang: (l: Lang) => void; }

export default function Header({ lang, setLang }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const tx = t[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: tx.solutions,    href: "#solucoes"      },
    { label: tx.testimonials, href: "#depoimentos"   },
    { label: tx.howItWorks,   href: "#como-funciona" },
    { label: tx.company,      href: "#empresa"       },
  ];

  return (
    <header className={`site-header ${scrolled ? "scrolled" : "top"}`}>
      <div className="site-container w-full">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>

          {/* Logo */}
          <a href="#hero" style={{ display: "flex", alignItems: "center", textDecoration: "none" }} aria-label="AKIRAL">
            <Image
              src="/logo.png"
              alt="AKIRAL"
              width={110}
              height={48}
              style={{ height: "32px", width: "auto", objectFit: "contain" }}
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden-mobile">
            {navItems.map(item => (
              <a key={item.label} href={item.href} className="nav-link">{item.label}</a>
            ))}
          </nav>

          {/* Right cluster */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.2rem" }} className="hidden-mobile">
              <button className={`lang-btn${lang === "pt" ? " active" : ""}`} onClick={() => setLang("pt")}>PT</button>
              <span className="lang-sep">|</span>
              <button className={`lang-btn${lang === "en" ? " active" : ""}`} onClick={() => setLang("en")}>EN</button>
            </div>

            <a
              href="https://calendly.com/arthur-renck3/book-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta hidden-mobile"
              style={{ padding: "0.55rem 1.125rem", fontSize: "0.8rem", borderRadius: "6px" }}
            >
              {tx.cta}
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              style={{ display: "none", flexDirection: "column", gap: "5px", background: "none", border: "none", cursor: "pointer", padding: "6px" }}
              className="mobile-only"
            >
              <span style={{ display: "block", width: "20px", height: "1px", background: "#B8BCC2", transition: "all 0.2s", transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none" }} />
              <span style={{ display: "block", width: "20px", height: "1px", background: "#B8BCC2", transition: "all 0.2s", opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: "block", width: "20px", height: "1px", background: "#B8BCC2", transition: "all 0.2s", transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none" }} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div style={{
        maxHeight: menuOpen ? "360px" : "0",
        overflow: "hidden",
        transition: "max-height 0.3s ease",
        borderTop: menuOpen ? "1px solid #1E2024" : "1px solid transparent",
        background: "rgba(10,11,13,0.96)",
      }} className="mobile-only-block">
        <div className="site-container" style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {navItems.map(item => (
            <a key={item.label} href={item.href} className="nav-link" style={{ fontSize: "1rem" }} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", paddingTop: "0.25rem" }}>
            <button className={`lang-btn${lang === "pt" ? " active" : ""}`} onClick={() => setLang("pt")}>PT</button>
            <span className="lang-sep">|</span>
            <button className={`lang-btn${lang === "en" ? " active" : ""}`} onClick={() => setLang("en")}>EN</button>
          </div>
          <a
            href="https://calendly.com/arthur-renck3/book-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
            style={{ textAlign: "center", justifyContent: "center", marginTop: "0.5rem", borderRadius: "6px" }}
            onClick={() => setMenuOpen(false)}
          >
            {tx.cta}
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile     { display: flex !important; }
          .mobile-only       { display: none  !important; }
          .mobile-only-block { display: none  !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile     { display: none  !important; }
          .mobile-only       { display: flex  !important; }
          .mobile-only-block { display: block !important; }
        }
      `}</style>
    </header>
  );
}
