"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE, FadeUp, MaskReveal } from "../motion-primitives";

const FAQS = [
  {
    q: "Do you write the copy or do I need to provide it?",
    a: "We can handle it both ways. You can provide your own content, or our copywriters can craft professional, SEO-optimized copy tailored specifically to your brand and goals.",
  },
  {
    q: "Can I see the design before you build it?",
    a: "Absolutely. We don't start the development phase until you have reviewed and fully approved the high-fidelity design mockups in Figma.",
  },
  {
    q: "What happens after launch?",
    a: "We don't just disappear. We provide post-launch technical support, training for your team on how to manage the site, and options for ongoing maintenance and scaling.",
  },
  {
    q: "What if I'm not happy with the result?",
    a: "We work in clear milestones (wireframes, design, development). By requiring your approval at each stage, we ensure the final product aligns perfectly with your vision before it's even finished.",
  },
];

function Item({
  index,
  q,
  a,
  isOpen,
  onToggle,
}: {
  index: string;
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-t border-black/15">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="flex items-center gap-4">
          <span className="text-[11px] uppercase tracking-wide text-black/40">
            {index}
          </span>
          <span className="text-[11px] uppercase tracking-wide text-black/60">
            {q}
          </span>
        </span>
        <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
          <span className="absolute h-[1.5px] w-4 bg-black" />
          <motion.span
            className="absolute h-4 w-[1.5px] bg-black"
            animate={{ scaleY: isOpen ? 0 : 1 }}
            transition={{ duration: 0.3, ease: EASE }}
          />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="max-w-xl pb-8 text-[18px] leading-snug text-black">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative bg-grey py-20 text-black md:py-28">
      <div className="grid grid-cols-1 gap-12 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <FadeUp className="eyebrow text-black/60">FAQ</FadeUp>
          <h2 className="display mt-8 text-[16vw] leading-[0.85] md:text-[5.5vw]">
            <MaskReveal lines={["Before we", "get started."]} />
          </h2>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <div>
            {FAQS.map((f, i) => (
              <Item
                key={f.q}
                index={`0${i + 1}`}
                q={f.q}
                a={f.a}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
            <div className="border-t border-black/15" />
          </div>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-black px-5 py-3 text-[11px] uppercase tracking-wide text-white transition-opacity hover:opacity-80"
          >
            Ask a question
          </a>
        </div>
      </div>
    </section>
  );
}
