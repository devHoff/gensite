import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://akiral.com";

export const metadata: Metadata = {
  /* ── Core ──────────────────────────────────────────────── */
  title: {
    default: "Akiral",
    template: "%s | Akiral",
  },
  description:
    "Akiral develops intelligent AI agents and technological infrastructure that automate processes, scale operations and power modern digital platforms.",
  keywords: [
    "Akiral",
    "AI agents",
    "artificial intelligence automation",
    "AI infrastructure",
    "enterprise automation",
    "intelligent systems",
    "Akiral technology",
  ],
  authors: [{ name: "Akiral", url: BASE_URL }],
  creator: "Akiral",
  publisher: "Akiral",

  /* ── Robots ─────────────────────────────────────────────── */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* ── Canonical ───────────────────────────────────────────── */
  alternates: {
    canonical: BASE_URL,
  },

  /* ── Open Graph ──────────────────────────────────────────── */
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Akiral",
    title: "Akiral",
    description:
      "Enterprise technological infrastructure powered by intelligent AI agents.",
    locale: "pt_BR",
    images: [
      {
        url: `${BASE_URL}/logo.png`,
        width: 400,
        height: 174,
        alt: "Akiral",
      },
    ],
  },

  /* ── Twitter Card ────────────────────────────────────────── */
  twitter: {
    card: "summary_large_image",
    title: "Akiral",
    description:
      "Enterprise technological infrastructure powered by intelligent AI agents.",
    images: [`${BASE_URL}/logo.png`],
  },

  /* ── Icons ───────────────────────────────────────────────── */
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  /* ── Verification placeholders ───────────────────────────── */
  // Uncomment and fill once Google Search Console is set up:
  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_TOKEN",
  // },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Akiral",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    "Akiral builds intelligent AI agents and enterprise technological infrastructure.",
  sameAs: [] as string[],
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Akiral",
  url: BASE_URL,
  description:
    "Akiral develops intelligent AI agents and technological infrastructure that automate processes, scale operations and power modern digital platforms.",
  inLanguage: "pt-BR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Charset & viewport — Next.js injects these automatically,
            but declaring them here ensures compatibility with all crawlers */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Canonical (also set via metadata.alternates above for Next.js) */}
        <link rel="canonical" href={BASE_URL} />

        {/* Font preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=IBM+Plex+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />

        {/* JSON-LD Structured Data — Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        {/* JSON-LD Structured Data — WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
