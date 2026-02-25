import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AKIRAL — Enterprise Technological Infrastructure",
  description:
    "Projetamos, implementamos e operamos sistemas de automação inteligente com foco em escala operacional.",
  authors: [{ name: "AKIRAL" }],
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=IBM+Plex+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
