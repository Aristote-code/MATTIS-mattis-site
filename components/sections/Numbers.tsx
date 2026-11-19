"use client";

import { assets } from "@/lib/assets";
import { FadeUp, MaskReveal, Stagger, StaggerItem } from "../motion-primitives";

const STATS = [
  { value: "31+", label: "Projects shipped with measurable conversion lift" },
  { value: "3.1s", label: "Average time to first meaningful action on our sites" },
  { value: "31%", label: "Of clients come from direct referrals" },
];

export default function Numbers() {
  return (
    <section className="relative overflow-hidden bg-orange py-20 text-white md:py-28">
      <div className="grain absolute inset-0" />
      <div className="relative z-10 px-5 md:px-8">
        <FadeUp className="eyebrow text-white/70">How we do it</FadeUp>

        <div className="mt-12 grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">
          {/* stats */}
          <Stagger className="flex flex-col gap-12 md:col-span-5 md:gap-16" step={0.1}>
            {STATS.map((s) => (
              <StaggerItem key={s.value} className="relative">
                <span className="mb-4 block h-1.5 w-1.5 rounded-full bg-white" />
                <div className="display text-[16vw] leading-none md:text-[5.5vw]">
                  {s.value}
                </div>
                <p className="mt-3 max-w-[220px] text-[12px] uppercase leading-snug text-white/70">
                  {s.label}
                </p>
              </StaggerItem>
            ))}
          </Stagger>

          {/* heading */}
          <div className="md:col-span-6 md:col-start-7">
            <h2 className="display text-[12vw] leading-[0.85] md:text-[5.4vw]">
              <MaskReveal
                lines={[
                  "Every",
                  "result here",
                  "started with",
                  "a problem",
                  "worth solving.",
                ]}
              />
            </h2>

            <FadeUp className="mt-16 max-w-md text-[12px] leading-relaxed text-white/70">
              <span className="font-medium text-white">
                We don&apos;t chase volume.
              </span>{" "}
              We take on projects where our process can make a{" "}
              <span className="font-medium text-white">
                measurable difference.
              </span>{" "}
              Most clients stay for years.
            </FadeUp>

            <FadeUp className="mt-6 flex items-center gap-3" delay={0.1}>
              <img
                src={assets.jennifer}
                alt="Jennifer Peterson"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="leading-tight">
                <div className="text-[14px]">Jennifer Peterson</div>
                <div className="text-[11px] text-white/80">
                  Head of Sales at <span className="font-medium">Mattis®</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
