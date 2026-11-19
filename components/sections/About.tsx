"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { assets } from "@/lib/assets";
import { FadeUp, MaskReveal } from "../motion-primitives";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-18%"]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-orange py-20 text-white md:py-28"
    >
      <div className="grain absolute inset-0" />

      {/* top labels */}
      <div className="relative z-10 grid grid-cols-2 gap-4 px-5 md:grid-cols-4 md:px-8">
        <FadeUp className="eyebrow">Launched</FadeUp>
        <FadeUp className="eyebrow" delay={0.06}>
          24+ Projects
        </FadeUp>
        <div className="hidden md:block" />
        <FadeUp className="eyebrow md:text-right" delay={0.12}>
          2019-26©
        </FadeUp>
      </div>

      {/* giant heading, right aligned */}
      <div className="relative z-10 mt-14 px-5 md:mt-20 md:px-8">
        <h2 className="display ml-auto text-right text-[18vw] leading-[0.82] md:text-[10vw]">
          <MaskReveal lines={["Strategy", "before", "pixels."]} />
        </h2>
      </div>

      {/* paragraph (left) + parallax image (center) */}
      <div className="relative z-10 mt-16 grid grid-cols-1 gap-12 px-5 md:mt-24 md:grid-cols-12 md:px-8">
        <FadeUp className="max-w-sm self-end text-[13px] leading-relaxed text-white/80 md:col-span-4">
          People decide if they trust your site before they read a word on it.
          That&apos;s not a metaphor. Visual credibility forms almost instantly,
          and it&apos;s shaped by spacing, typography, image quality, and
          structure.
        </FadeUp>

        <div className="md:col-span-4 md:col-start-6">
          <div className="relative aspect-[3/4] overflow-hidden">
            <motion.img
              src={assets.aboutRunner}
              alt=""
              style={{ y }}
              className="absolute inset-0 h-[130%] w-full object-cover mix-blend-luminosity opacity-90"
            />
            <div className="absolute inset-0 bg-orange/40 mix-blend-color" />
          </div>
        </div>
      </div>

      {/* bottom row */}
      <div className="relative z-10 mt-16 flex items-end justify-between px-5 md:mt-24 md:px-8">
        <a
          href="#works"
          className="eyebrow inline-flex items-center gap-1 transition-opacity hover:opacity-60"
        >
          About us <span aria-hidden>↗</span>
        </a>
        <div className="flex items-end gap-4 text-right">
          <span className="max-w-[160px] text-[11px] uppercase leading-tight text-white/70">
            Industries where our sites consistently outperform benchmarks
          </span>
          <FadeUp
            as="span"
            className="display text-[14vw] leading-none md:text-[5vw]"
          >
            12+
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
