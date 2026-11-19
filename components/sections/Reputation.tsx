"use client";

import { assets } from "@/lib/assets";
import { FadeUp, MaskReveal } from "../motion-primitives";

function StatCard({
  value,
  label,
  cta,
  className = "",
}: {
  value: string;
  label: string;
  cta: string;
  className?: string;
}) {
  return (
    <FadeUp
      className={`relative flex aspect-square flex-col justify-between rounded-[10px] bg-black p-6 text-white md:p-8 ${className}`}
    >
      <p className="max-w-[200px] text-[13px] leading-snug">{label}</p>
      <div className="flex items-end justify-between">
        <span className="display text-[14vw] leading-none md:text-[4.5vw]">
          {value}
        </span>
        <a
          href="#contact"
          className="eyebrow inline-flex items-center gap-1 whitespace-nowrap transition-opacity hover:opacity-60"
        >
          {cta} <span aria-hidden>↗</span>
        </a>
      </div>
    </FadeUp>
  );
}

export default function Reputation() {
  return (
    <section className="relative bg-grey pb-24 pt-8 text-black md:pb-32">
      <div className="px-5 md:px-8">
        <FadeUp className="eyebrow text-black/60">Why us?</FadeUp>
      </div>

      <div className="mt-6 px-5 md:px-8">
        <h2 className="display text-right text-[16vw] leading-[0.85] md:text-[9vw]">
          <MaskReveal lines={["Built on", "reputation"]} />
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 px-5 md:grid-cols-2 md:gap-6 md:px-8">
        <StatCard
          value="/4.9+"
          label="Average client rating on Google & Clutch"
          cta="Our Reviews"
        />
        <StatCard
          value="/89%"
          label="Business comes from direct referrals"
          cta="Start a Project"
          className="md:mt-24"
        />
      </div>

      <div className="mt-10 flex justify-center px-5 md:px-8">
        <img
          src={assets.reviewer}
          alt=""
          className="h-24 w-24 rounded-full object-cover grayscale"
        />
      </div>
    </section>
  );
}
