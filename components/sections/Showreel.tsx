"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { assets } from "@/lib/assets";
import { FadeUp, MaskReveal } from "../motion-primitives";

export default function Showreel() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);

  return (
    <section
      id="showreel"
      ref={ref}
      className="relative bg-grey py-20 text-black md:py-28"
    >
      <div className="flex justify-end px-5 md:px-8">
        <span className="eyebrow text-black/60">2019-26©</span>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 px-5 md:mt-20 md:grid-cols-12 md:px-8">
        {/* heading */}
        <div className="md:col-span-7">
          <h2 className="display text-[18vw] leading-[0.82] md:text-[7.5vw]">
            <span className="block text-right md:pr-[14%]">
              <MaskReveal lines={["We"]} />
            </span>
            <span className="block text-right md:pr-[2%]">
              <MaskReveal lines={["Build"]} />
            </span>
            <span className="block">
              <MaskReveal lines={["Websites."]} />
            </span>
          </h2>
        </div>

        {/* caption + media */}
        <div className="md:col-span-5">
          <FadeUp className="max-w-xs text-[13px] leading-relaxed">
            <span className="text-black/60">where moving forward feels </span>
            <span className="font-medium">obvious, natural</span>
            <span className="text-black/60">, and </span>
            <span className="font-medium">impossible to overthink.</span>
          </FadeUp>

          <div className="relative mt-8 aspect-[3/2] overflow-hidden">
            <motion.img
              src={assets.showreel}
              alt="Showreel"
              style={{ y }}
              className="absolute inset-0 h-[130%] w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* bottom controls */}
      <div className="mt-16 flex items-center justify-between px-5 md:px-8">
        <a href="#works" className="eyebrow text-black/60 hover:text-black">
          ↓ See the work
        </a>
        <div className="flex items-center gap-3">
          <span className="text-[13px]">Showreel</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
            <svg viewBox="0 0 24 24" className="h-3 w-3 fill-white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
}
