"use client";

import { motion } from "motion/react";
import { assets } from "@/lib/assets";
import { EASE } from "../motion-primitives";

const reveal = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 0.8, ease: EASE, delay: 0.2 + i * 0.06 },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden bg-black text-white"
    >
      {/* background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        src={assets.heroBgVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
      <div className="grain absolute inset-0" />

      {/* top eyebrow row */}
      <div className="relative z-10 flex items-center justify-between px-5 pt-24 md:px-8 md:pt-28">
        <span className="eyebrow opacity-70">(Est. 2019 — Version 1.0.4)</span>
        <div className="hidden flex-col items-end text-right md:flex">
          <span className="eyebrow opacity-70">Strategy before</span>
          <span className="eyebrow opacity-70">pixels</span>
        </div>
      </div>

      {/* center stage */}
      <div className="relative z-10 flex flex-1 flex-col justify-center px-5 md:px-8">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12">
          {/* big logotype */}
          <div className="md:col-span-8">
            <h1 className="display flex flex-wrap items-start leading-[0.85] text-[22vw] md:text-[15vw]">
              <span className="inline-block overflow-hidden">
                <motion.span
                  className="inline-block"
                  variants={reveal}
                  custom={0}
                  initial="hidden"
                  animate="show"
                >
                  Mattis
                </motion.span>
              </span>
              <sup className="ml-2 mt-[2vw] text-[4vw] md:text-[2vw]">®</sup>
              <span className="ml-3 mt-[3vw] text-[5vw] font-normal tracking-tight md:text-[2.4vw]">
                studio
              </span>
            </h1>

            <motion.p
              className="mt-6 max-w-md text-[13px] leading-relaxed text-white/80"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.6 }}
            >
              We align strategy, design, and engineering into a single
              high-performance loop. Your vision, executed with surgical
              precision and conversion-first logic.
            </motion.p>

            {/* author chip */}
            <motion.div
              className="mt-6 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.8 }}
            >
              <img
                src={assets.annaAvatar}
                alt="Anna Schneider"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="leading-tight">
                <div className="text-[13px]">Anna Schneider</div>
                <div className="text-[11px] uppercase tracking-wide text-white/60">
                  CEO
                </div>
              </div>
              {/* orange signature */}
              <svg
                viewBox="0 0 200 60"
                className="ml-2 hidden h-10 w-auto text-orange md:block"
                fill="none"
              >
                <path
                  d="M6 40 C30 8, 40 8, 44 38 C48 16, 70 16, 60 44 C80 18, 96 20, 92 40 C110 14, 140 14, 150 34 C160 50, 178 44, 196 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          </div>

          {/* phone mockup video */}
          <motion.div
            className="md:col-span-4 md:justify-self-end"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
          >
            <div className="mx-auto w-[200px] overflow-hidden rounded-[28px] border border-white/15 shadow-2xl md:w-[230px]">
              <video
                src={assets.heroVideo}
                className="aspect-[375/710] w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* bottom row */}
      <div className="relative z-10 flex items-end justify-between px-5 pb-6 md:px-8 md:pb-8">
        <div className="flex gap-6 text-[15px] md:gap-10">
          {["Design", "Development", "Marketing"].map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.9 + i * 0.08 }}
            >
              {t}
            </motion.span>
          ))}
        </div>
        <div className="hidden flex-col items-end text-right md:flex">
          <span className="eyebrow opacity-60">Slots for Apr:</span>
          <span className="text-[13px]">2 left</span>
        </div>
      </div>
    </section>
  );
}
