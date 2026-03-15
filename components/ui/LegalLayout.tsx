"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  breadcrumb?: string;
  heroActions?: React.ReactNode;
}

export default function LegalLayout({
  children,
  title,
  subtitle,
  lastUpdated,
  breadcrumb,
  heroActions,
}: LegalLayoutProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ background: "#0A0B0D", minHeight: "100vh" }}>
      {/* ── Header ── */}
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(10,11,13,0.96)" : "rgba(10,11,13,0.85)",
          borderBottom: scrolled ? "1px solid #1E2024" : "1px solid transparent",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          transition: "background 0.3s, border-color 0.3s",
        }}
      >
        <div
          className="site-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
            padding: "0 1.5rem",
          }}
        >
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <Image
              src="/logo.png"
              alt="AKIRAL"
              width={110}
              height={48}
              style={{ height: "30px", width: "auto", objectFit: "contain" }}
              priority
            />
          </Link>
          <Link
            href="/"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.6875rem",
              letterSpacing: "0.08em",
              color: "#6B7280",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              transition: "color 0.15s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#F2F2F2")}
            onMouseLeave={e => (e.currentTarget.style.color = "#6B7280")}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M7.5 2L3.5 6l4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Voltar ao site
          </Link>
        </div>
      </header>

      {/* ── Hero banner ── */}
      <div
        style={{
          position: "relative",
          paddingTop: "120px",
          paddingBottom: "5rem",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse at center, rgba(242,101,34,0.10) 0%, rgba(242,101,34,0.03) 50%, transparent 75%)",
            pointerEvents: "none",
          }}
        />
        {/* Tech grid */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(#f2f2f203 1px, transparent 1px), linear-gradient(90deg, #f2f2f203 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        <div className="site-container" style={{ position: "relative", zIndex: 2 }}>
          {/* Breadcrumb */}
          {breadcrumb && (
            <div style={{ marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Link href="/" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.12em", color: "#3A3D42", textDecoration: "none", textTransform: "uppercase" }}>
                Akiral
              </Link>
              <span style={{ color: "#2A2D32", fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem" }}>/</span>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.12em", color: "#F26522", textTransform: "uppercase" }}>
                {breadcrumb}
              </span>
            </div>
          )}

          {/* Title */}
          <h1
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              color: "#F2F2F2",
              lineHeight: 1.1,
              marginBottom: subtitle ? "1.25rem" : "0",
              maxWidth: "720px",
            }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "1rem",
                color: "#6B7280",
                lineHeight: 1.7,
                maxWidth: "560px",
                marginBottom: "0",
              }}
            >
              {subtitle}
            </p>
          )}

          {heroActions && heroActions}

          {lastUpdated && (
            <div
              style={{
                marginTop: "2rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(242,101,34,0.06)",
                border: "1px solid rgba(242,101,34,0.15)",
                borderRadius: "4px",
                padding: "0.3rem 0.75rem",
              }}
            >
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#F26522", opacity: 0.7 }} />
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", color: "#B8BCC2", textTransform: "uppercase" }}>
                Atualizado em {lastUpdated}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ── Divider ── */}
      <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, #1E2024 30%, #1E2024 70%, transparent)" }} />

      {/* ── Body content ── */}
      <main style={{ paddingTop: "4rem", paddingBottom: "6rem" }}>
        <div
          className="site-container"
          style={{ maxWidth: "860px" }}
        >
          {children}
        </div>
      </main>

      {/* ── Footer ── */}
      <footer style={{ borderTop: "1px solid #16181C", background: "#0A0B0D" }}>
        <div className="site-container" style={{ padding: "3rem 1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            <Image src="/logo.png" alt="AKIRAL" width={80} height={34} style={{ height: "22px", width: "auto", opacity: 0.25 }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.06em", color: "#2A2D32" }}>
              © 2026 AKIRAL. Enterprise Technological Infrastructure.
            </span>
          </div>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[
              { label: "Sobre Nós", href: "/sobre-nos" },
              { label: "Termos & Privacidade", href: "/termos-e-privacidade" },
              { label: "Direitos de Privacidade", href: "/seus-direitos-de-privacidade" },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "0.75rem", color: "#3A3D42", textDecoration: "none", transition: "color 0.14s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#B8BCC2")}
                onMouseLeave={e => (e.currentTarget.style.color = "#3A3D42")}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
