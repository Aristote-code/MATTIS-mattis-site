"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { EASE } from "./motion-primitives";

const LINKS = [
  { label: "Works", href: "#works" },
  { label: "Blog", href: "#articles" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar — pinned, blends against every section background */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className="flex items-center justify-between px-5 py-4 md:px-8 md:py-5"
          style={{ mixBlendMode: "difference", color: "#fff" }}
        >
          <a href="#top" className="flex items-baseline gap-1 text-[15px] font-medium tracking-tight">
            Mattis<sup className="text-[9px]">®</sup>
            <span className="ml-1 hidden text-[10px] font-normal opacity-60 sm:inline">
              studio
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="eyebrow opacity-90 transition-opacity hover:opacity-60"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full border border-white/80 px-4 py-2 text-[11px] uppercase tracking-wide transition-colors hover:bg-white hover:text-black md:inline-block"
          >
            Start a Project
          </a>

          {/* mobile trigger */}
          <button
            onClick={() => setOpen(true)}
            className="eyebrow md:hidden"
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </header>

      {/* Floating round menu trigger (matches the source's centered pill) */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="fixed bottom-6 left-1/2 z-50 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-black text-white shadow-lg md:flex"
      >
        <span className="flex flex-col gap-[3px]">
          <span className="block h-[1.5px] w-4 bg-white" />
          <span className="block h-[1.5px] w-4 bg-white" />
        </span>
      </button>

      {/* Fullscreen menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-black text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="flex items-center justify-between px-5 py-4 md:px-8 md:py-5">
              <span className="text-[15px] font-medium tracking-tight">
                Mattis<sup className="text-[9px]">®</sup>
              </span>
              <button onClick={() => setOpen(false)} className="eyebrow">
                Close
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2 px-5 md:px-8">
              {[{ label: "Home", href: "#top" }, ...LINKS].map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="display text-[14vw] leading-none md:text-[9vw]"
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.1 + i * 0.06 }}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="flex items-center justify-between px-5 py-6 text-[11px] uppercase tracking-wide opacity-60 md:px-8">
              <span>hello@mattistudio.com</span>
              <span>+1 (555) 400 0123</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
