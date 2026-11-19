"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE, FadeUp } from "../motion-primitives";

type Service = {
  title: string;
  price: string;
  body: string[];
};

const SERVICES: Service[] = [
  {
    title: "Strategy & Research",
    price: "$2,900",
    body: [
      "Matter Studio opens every project with an audit of your current customer journey. We identify the moments where users lose context or delay a decision, then restructure the flow so each next step feels like the obvious thing to do. Behavioral patterns backed by data.",
      "This approach reduces drop-offs before design even begins. It builds an environment where choosing you becomes the path of least resistance for your customer.",
    ],
  },
  {
    title: "Design & Prototyping",
    price: "$3,900",
    body: [
      "We translate strategic insights into high-fidelity interfaces that prioritize clarity and visual impact. Every element is tested through interactive prototypes, ensuring that the user experience is intuitive, seamless, and perfectly aligned with your brand's unique identity.",
      "By prototyping before coding, we eliminate guesswork and ensure technical feasibility. You get a pixel-perfect preview of the final product, allowing for rapid iteration and a design that truly resonates with your target audience.",
    ],
  },
  {
    title: "Development",
    price: "$4,500",
    body: [
      "Our development process focuses on clean, scalable code and high-performance engineering. We build responsive websites and custom web applications using modern frameworks that ensure fast loading times, robust security, and a future-proof architecture.",
      "We bridge the gap between complex functionality and effortless performance. The result is a high-speed digital product that functions flawlessly across all devices, providing a rock-solid foundation for your business to scale and grow.",
    ],
  },
  {
    title: "Support & Growth",
    price: "$1,200",
    body: [
      "Launching is just the beginning. We provide proactive monitoring, security updates, and performance tuning to keep your platform running at peak efficiency. Our team remains available to implement new features and refine the UX based on real-world user data.",
      "This continuous optimization ensures your site evolves alongside your business needs. We minimize downtime and technical debt, giving you the peace of mind to focus on your core operations while we handle the technical heavy lifting.",
    ],
  },
  {
    title: "SEO",
    price: "$990",
    body: [
      "Our SEO strategy goes beyond keywords; we optimize the technical architecture and content hierarchy for maximum visibility. We ensure search engines can crawl, index, and rank your site effectively, driving high-quality organic traffic directly to your platform.",
      "Visibility leads to authority. By aligning your site with search intent, we help you capture high-intent leads and maintain a competitive edge. It's about building a sustainable traffic source that grows in value over time.",
    ],
  },
];

function Row({ service, isOpen, onToggle }: { service: Service; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-t border-white/15">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="text-[16px] md:text-[20px]">{service.title}</span>
        <span className="flex items-center gap-6">
          <span className="hidden text-right md:block">
            <span className="block text-[11px] uppercase tracking-wide text-white/60">
              Price: from
            </span>
            <span className="text-[16px]">{service.price}</span>
          </span>
          <span className="relative flex h-4 w-4 items-center justify-center">
            <span className="absolute h-[1.5px] w-4 bg-white" />
            <motion.span
              className="absolute h-4 w-[1.5px] bg-white"
              animate={{ scaleY: isOpen ? 0 : 1 }}
              transition={{ duration: 0.3, ease: EASE }}
            />
          </span>
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
            <div className="grid grid-cols-1 gap-6 pb-8 md:grid-cols-2 md:gap-12">
              {service.body.map((p, i) => (
                <p key={i} className="text-[14px] leading-relaxed text-white/60">
                  {p}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="relative bg-black py-20 text-white md:py-28">
      <div className="grain absolute inset-0" />
      <div className="relative z-10 px-5 md:px-8">
        <FadeUp className="eyebrow text-white/60">Services</FadeUp>

        <FadeUp className="mt-10 max-w-3xl text-[22px] leading-snug md:text-[28px]">
          Every project starts with understanding how your customers make
          decisions — and what&apos;s stopping them from making one right now.
        </FadeUp>

        <div className="mt-14">
          {SERVICES.map((s, i) => (
            <Row
              key={s.title}
              service={s}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
          <div className="border-t border-white/15" />
        </div>
      </div>
    </section>
  );
}
