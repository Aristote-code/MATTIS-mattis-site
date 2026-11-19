"use client";

import { FadeUp, MaskReveal } from "../motion-primitives";

const SOCIALS = ["Instagram", "Twitter / X", "LinkedIn", "Dribbble"];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-black pt-24 text-white">
      <div className="grain absolute inset-0" />

      <div className="relative z-10 px-5 md:px-8">
        <FadeUp className="eyebrow text-white/60">Get in touch</FadeUp>

        <h2 className="display mt-8 text-[15vw] leading-[0.85] md:text-[10vw]">
          <MaskReveal lines={["Let's work", "together."]} />
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-white/15 pt-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="eyebrow text-white/50">Contact</div>
            <a
              href="tel:+15554000123"
              className="mt-3 block text-[18px] transition-opacity hover:opacity-70"
            >
              +1 (555) 400 0123
            </a>
            <a
              href="mailto:hello@mattistudio.com"
              className="block text-[18px] transition-opacity hover:opacity-70"
            >
              hello@mattistudio.com
            </a>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow text-white/50">Socials</div>
            <ul className="mt-3 space-y-1.5">
              {SOCIALS.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-[14px] text-white/80 transition-opacity hover:opacity-60"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 md:text-right">
            <div className="eyebrow text-white/50">Studio</div>
            <p className="mt-3 max-w-xs text-[14px] text-white/80 md:ml-auto">
              A conversion-first design & development studio. Est. 2019.
            </p>
            <a
              href="mailto:hello@mattistudio.com"
              className="mt-4 inline-block rounded-full border border-white/40 px-5 py-2.5 text-[11px] uppercase tracking-wide transition-colors hover:bg-white hover:text-black"
            >
              Start a Project ↗
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 py-8 text-[11px] uppercase tracking-wide text-white/50 md:flex-row md:items-center">
          <span>Mattis® Studio — 2019-26©</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* oversized wordmark */}
        <div className="display select-none pb-6 text-center text-[26vw] leading-none text-white/5">
          Mattis®
        </div>
      </div>
    </footer>
  );
}
