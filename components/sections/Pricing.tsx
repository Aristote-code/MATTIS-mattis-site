"use client";

import { assets } from "@/lib/assets";
import { FadeUp, MaskReveal } from "../motion-primitives";

const TIERS = [
  { name: "Foundation", price: "$4,800", highlight: false },
  { name: "Growth", price: "$9,600", highlight: true },
  { name: "Scale", price: "$15,900", highlight: false },
];

type Cell = boolean | string;
const ROWS: { feature: string; values: [Cell, Cell, Cell] }[] = [
  { feature: "Strategy & behavioral audit", values: [true, true, true] },
  { feature: "Number of pages", values: ["Up to 5", "Up to 10", "Unlimited"] },
  { feature: "Conversion wireframes", values: [true, true, true] },
  { feature: "Copywriting support", values: [false, "Direction", "Full"] },
  { feature: "Brand identity system", values: [false, true, true] },
  { feature: "A/B testing setup", values: ["Basic", "Advanced", "Advanced + reports"] },
  { feature: "Timeline", values: ["3–4 weeks", "5–7 weeks", "Custom"] },
  { feature: "Ongoing support", values: [false, true, true] },
];

function CellView({ value }: { value: Cell }) {
  if (value === true)
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-white" fill="none">
        <path d="M5 12l5 5L19 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  if (value === false) return <span className="text-white/30">—</span>;
  return <span className="text-[13px] text-white/80">{value}</span>;
}

export default function Pricing() {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white md:py-28">
      <div className="grain absolute inset-0" />

      {/* Quote */}
      <div className="relative z-10 px-5 md:px-8">
        <FadeUp className="eyebrow text-white/60">How we think</FadeUp>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
          <FadeUp className="md:col-span-3 md:col-start-4">
            <div className="flex items-center gap-3">
              <img
                src={assets.annaPortrait}
                alt="Anna Schneider"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div className="leading-tight">
                <div className="text-[14px]">Anna Schneider</div>
                <div className="text-[11px] text-white/70">
                  Head of Sales at <span className="font-medium">Mattis®</span>
                </div>
              </div>
              <svg viewBox="0 0 160 50" className="ml-1 h-9 w-auto text-orange" fill="none">
                <path
                  d="M4 34 C24 6, 34 6, 38 32 C42 12, 60 12, 52 38 C70 14, 84 16, 80 34 C96 10, 124 12, 134 30 C144 44, 156 38, 158 22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </FadeUp>

          <FadeUp className="md:col-span-6 md:col-start-4" delay={0.1}>
            <p className="mt-6 text-[22px] leading-snug md:text-[26px]">
              &ldquo;The hardest part of building a website isn&apos;t the code —
              it&apos;s knowing what to leave out. Every element that doesn&apos;t
              serve the visitor is working against you.&rdquo;
            </p>
            <p className="mt-6 text-[12px] text-white/60">
              Our team treats simplicity as a discipline, not a shortcut.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Pricing heading */}
      <div className="relative z-10 mt-24 px-5 md:px-8">
        <h2 className="display text-[18vw] leading-none md:text-[9vw]">
          <MaskReveal lines={["Pricing."]} />
        </h2>
      </div>

      {/* Pricing table */}
      <div className="relative z-10 mt-12 px-5 md:px-8">
        {/* header */}
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] items-end gap-4 border-b border-white/15 pb-6">
          <span className="eyebrow text-white/60">Feature</span>
          {TIERS.map((t) => (
            <div key={t.name}>
              <div className="text-[12px] text-white/60">{t.name}</div>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-[18px] md:text-[22px]">{t.price}</span>
                <span className="text-[11px] text-white/50">/month</span>
              </div>
            </div>
          ))}
        </div>

        {/* rows */}
        {ROWS.map((row) => (
          <FadeUp
            key={row.feature}
            y={12}
            className="grid grid-cols-[1.5fr_1fr_1fr_1fr] items-center gap-4 border-b border-white/10 py-4"
          >
            <span className="text-[13px] text-white/80">{row.feature}</span>
            {row.values.map((v, i) => (
              <span key={i} className="flex items-center">
                <CellView value={v} />
              </span>
            ))}
          </FadeUp>
        ))}

        {/* CTA row */}
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] items-center gap-4 pt-8">
          <span />
          {TIERS.map((t) => (
            <a
              key={t.name}
              href="#contact"
              className={`inline-block rounded-full px-4 py-2.5 text-center text-[11px] uppercase tracking-wide transition-opacity hover:opacity-80 ${
                t.highlight ? "bg-orange text-white" : "bg-white text-black"
              }`}
            >
              Get started
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
