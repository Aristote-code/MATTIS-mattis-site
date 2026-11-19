"use client";

import { assets } from "@/lib/assets";
import { FadeUp, MaskReveal, Stagger, StaggerItem } from "../motion-primitives";

const ARTICLES = [
  {
    title: "Why most redesigns fail — and what to do instead",
    date: "Mar 31, 2026",
    image: assets.article1,
    ratio: "aspect-[3/4]",
  },
  {
    title: "How to write a landing page that actually converts",
    date: "Mar 31, 2026",
    image: null,
    ratio: "aspect-[3/4]",
  },
  {
    title: "How we cut bounce rate by 34% with one layout change",
    date: "Mar 30, 2026",
    image: assets.article2,
    ratio: "aspect-[3/4]",
  },
  {
    title: "Small defaults, big outcomes: lessons from behavioral design",
    date: "Mar 25, 2026",
    image: assets.article3,
    ratio: "aspect-[3/4]",
  },
];

export default function Articles() {
  return (
    <section id="articles" className="relative bg-grey py-20 text-black md:py-28">
      <div className="flex items-start justify-between px-5 md:px-8">
        <a
          href="#"
          className="rounded-full bg-black px-4 py-2 text-[11px] uppercase tracking-wide text-white transition-opacity hover:opacity-80"
        >
          See more
        </a>
        <h2 className="display text-right text-[12vw] leading-[0.85] md:text-[5vw]">
          <MaskReveal lines={["News and", "updates."]} />
        </h2>
      </div>

      <Stagger
        className="mt-14 grid grid-cols-2 gap-4 px-5 md:grid-cols-4 md:gap-6 md:px-8"
        step={0.08}
      >
        {ARTICLES.map((a) => (
          <StaggerItem key={a.title} className="group">
            <div
              className={`relative ${a.ratio} overflow-hidden rounded-[8px] bg-black/5`}
            >
              {a.image ? (
                <img
                  src={a.image}
                  alt={a.title}
                  className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-[40px] text-black/15">↗</span>
                </div>
              )}
            </div>
            <h3 className="mt-4 text-[16px] leading-snug">{a.title}</h3>
            <div className="mt-2 text-[12px] text-black/60">{a.date}</div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
