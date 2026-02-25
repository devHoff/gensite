"use client";
import { useEffect, useState } from "react";

interface Props {
  variant?: "hero" | "section";
  className?: string;
}

export default function DataFlowLines({ variant = "hero", className = "" }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  /* ── Stroke colour — #C94E14 at low opacity, NO gradient ── */
  const LINE   = "#C94E14";
  const BLUR   = "url(#lineBlur)";
  const DASH   = "2800";

  if (variant === "section") {
    return (
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 1440 240" preserveAspectRatio="none"
          className="w-full h-full" style={{ opacity: 1 }}>
          <defs>
            <filter id="sectionBlur">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>
          {/* blur halo */}
          <path
            d="M-100,80 C300,55 650,140 1000,90 C1200,60 1360,115 1540,80"
            stroke={LINE} strokeWidth="10" fill="none" strokeOpacity="0.04"
            filter="url(#sectionBlur)"
          />
          {/* crisp line */}
          <path
            d="M-100,80 C300,55 650,140 1000,90 C1200,60 1360,115 1540,80"
            stroke={LINE} strokeWidth="0.9" fill="none" strokeOpacity="0.08"
            strokeDasharray={DASH} className="flow-line-1"
          />
          {/* blur halo 2 */}
          <path
            d="M-100,160 C350,130 700,200 1050,155 C1260,125 1400,178 1540,155"
            stroke={LINE} strokeWidth="8" fill="none" strokeOpacity="0.03"
            filter="url(#sectionBlur)"
          />
          <path
            d="M-100,160 C350,130 700,200 1050,155 C1260,125 1400,178 1540,155"
            stroke={LINE} strokeWidth="0.7" fill="none" strokeOpacity="0.06"
            strokeDasharray={DASH} className="flow-line-3"
          />
        </svg>
      </div>
    );
  }

  /* ── HERO variant — 5 lines desktop, animates based on viewport ── */
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        style={{ opacity: 1 }}
      >
        <defs>
          {/* single shared blur — no colour change, just softens edge */}
          <filter id="lineBlur" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* ── BLUR HALOS (painted first, behind) ── */}
        <path d="M-200,310 C220,270 520,410 820,340 C1060,280 1260,390 1640,315"
          stroke={LINE} strokeWidth="14" fill="none" strokeOpacity="0.04"
          filter={BLUR} />
        <path d="M-200,490 C260,455 590,570 900,500 C1110,445 1310,530 1640,490"
          stroke={LINE} strokeWidth="12" fill="none" strokeOpacity="0.035"
          filter={BLUR} />
        <path d="M-200,175 C310,148 660,245 960,195 C1210,152 1390,228 1640,185"
          stroke={LINE} strokeWidth="10" fill="none" strokeOpacity="0.025"
          filter={BLUR} />
        <path d="M-200,650 C350,615 700,715 1010,655 C1210,615 1390,680 1640,645"
          stroke={LINE} strokeWidth="10" fill="none" strokeOpacity="0.025"
          filter={BLUR} />
        <path d="M-200,740 C400,695 760,790 1100,730 C1310,690 1460,755 1640,735"
          stroke={LINE} strokeWidth="8"  fill="none" strokeOpacity="0.02"
          filter={BLUR} />

        {/* ── CRISP LINES (painted on top) ── */}
        {/* line 1 — primary */}
        <path
          d="M-200,310 C220,270 520,410 820,340 C1060,280 1260,390 1640,315"
          stroke={LINE} strokeWidth="1.0" fill="none"
          strokeOpacity="0.10" strokeDasharray={DASH}
          className="flow-line-1"
        />
        {/* line 2 */}
        <path
          d="M-200,490 C260,455 590,570 900,500 C1110,445 1310,530 1640,490"
          stroke={LINE} strokeWidth="0.85" fill="none"
          strokeOpacity="0.08" strokeDasharray={DASH}
          className="flow-line-2"
        />
        {/* line 3 — upper subtle */}
        <path
          d="M-200,175 C310,148 660,245 960,195 C1210,152 1390,228 1640,185"
          stroke={LINE} strokeWidth="0.65" fill="none"
          strokeOpacity="0.07" strokeDasharray={DASH}
          className="flow-line-3"
        />
        {/* line 4 — lower band */}
        <path
          d="M-200,650 C350,615 700,715 1010,655 C1210,615 1390,680 1640,645"
          stroke={LINE} strokeWidth="0.7" fill="none"
          strokeOpacity="0.06" strokeDasharray={DASH}
          className="flow-line-4"
        />
        {/* line 5 — deep lower */}
        <path
          d="M-200,740 C400,695 760,790 1100,730 C1310,690 1460,755 1640,735"
          stroke={LINE} strokeWidth="0.55" fill="none"
          strokeOpacity="0.06" strokeDasharray={DASH}
          className="flow-line-5"
        />

        {/* ── NODES (intersection hints) ── */}
        {[
          { cx: 820,  cy: 340  },
          { cx: 520,  cy: 410  },
          { cx: 1100, cy: 500  },
          { cx: 355,  cy: 200  },
          { cx: 1210, cy: 280  },
        ].map(({ cx, cy }) => (
          <circle key={`${cx}-${cy}`}
            cx={cx} cy={cy} r="2"
            fill={LINE} strokeOpacity="0"
            className="flow-node"
          />
        ))}
      </svg>
    </div>
  );
}
