"use client";

import { assets } from "@/lib/assets";
import { FadeUp, MaskReveal } from "../motion-primitives";

export default function Testimonials() {
  return (
    <section className="relative bg-grey py-20 text-black md:py-28">
      <div className="px-5 md:px-8">
        <h2 className="display text-[14vw] leading-[0.85] md:text-[5.5vw]">
          <MaskReveal lines={["What our", "clients say."]} />
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* quote */}
          <div className="md:col-span-6">
            <FadeUp className="eyebrow text-black/60">Client stories</FadeUp>
            <FadeUp className="mt-4 max-w-sm text-[12px] leading-relaxed text-black/60" delay={0.06}>
              We let the results speak. But sometimes the people behind them have
              something to add.
            </FadeUp>

            <div className="mt-12">
              <span className="block text-[64px] leading-none text-black/20">
                &ldquo;
              </span>
              <FadeUp className="-mt-6 max-w-md text-[22px] leading-snug">
                We launched in two weeks and had paying customers by week three.
                I&apos;ve worked with agencies that took months to deliver half
                of this.
              </FadeUp>
              <FadeUp className="mt-8" delay={0.1}>
                <div className="text-[14px]">Sophie Andersen</div>
                <div className="text-[12px] text-black/60">Co-founder</div>
              </FadeUp>
            </div>
          </div>

          {/* portrait */}
          <FadeUp className="md:col-span-5 md:col-start-8" delay={0.1}>
            <div className="relative aspect-square overflow-hidden">
              <img
                src={assets.sophie}
                alt="Sophie Andersen"
                className="h-full w-full object-cover grayscale"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
