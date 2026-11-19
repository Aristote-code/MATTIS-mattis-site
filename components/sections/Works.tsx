"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { assets } from "@/lib/assets";
import { FadeUp } from "../motion-primitives";

type Project = {
  index: string;
  title: string;
  tags: string[];
  year: string;
  image: string;
};

const PROJECTS: Project[] = [
  {
    index: "(01)",
    title: "Box mode",
    tags: ["Branding", "Development"],
    year: "2026",
    image: assets.boxMode,
  },
  {
    index: "(02)",
    title: "Nomad Stays",
    tags: ["Web design", "Development"],
    year: "2026",
    image: assets.nomadStays,
  },
  {
    index: "(03)",
    title: "We run brand",
    tags: ["Web design", "Branding"],
    year: "2026",
    image: assets.weRunBrand,
  },
];

function ProjectRow({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <div ref={ref} className="group relative">
      <div className="relative aspect-[16/10] overflow-hidden md:aspect-[16/7]">
        <motion.img
          src={project.image}
          alt={project.title}
          style={{ y }}
          className="absolute inset-0 h-[130%] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* overlay metadata */}
        <div className="absolute inset-0 flex flex-col justify-between p-5 text-white md:p-8">
          <div className="flex items-start justify-between">
            <span className="eyebrow">{project.index}</span>
            <div className="flex gap-3">
              {project.tags.map((t) => (
                <span key={t} className="eyebrow opacity-80">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-end justify-between">
            <h3 className="display text-[12vw] leading-none md:text-[6vw]">
              {project.title}
            </h3>
            <div className="flex flex-col items-end gap-1 text-right">
              <span className="eyebrow opacity-80">{project.year}</span>
              <span className="eyebrow opacity-80">Portfolio</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Works() {
  return (
    <section id="works" className="relative bg-grey py-20 text-black md:py-24">
      <div className="mb-10 flex items-center justify-between px-5 md:px-8">
        <FadeUp className="eyebrow text-black/60">Selected work</FadeUp>
        <FadeUp className="eyebrow text-black/60" delay={0.06}>
          (2024 — 2026)
        </FadeUp>
      </div>
      <div className="flex flex-col gap-4 px-5 md:gap-6 md:px-8">
        {PROJECTS.map((p) => (
          <ProjectRow key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
