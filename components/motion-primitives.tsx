"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

/**
 * Exact easings/durations captured from mattis.framer.website
 * (reference/mattis/motion/motion-specs.md).
 *   primary easing: cubic-bezier(0.68, 0, 0, 1)
 *   reveal duration: 600ms, stagger step: 80ms
 */
export const EASE = [0.68, 0, 0, 1] as const;
export const EASE_INOUT = [0.44, 0, 0.56, 1] as const;
export const REVEAL_DURATION = 0.6;
export const STAGGER_STEP = 0.08;

const viewport = { once: true, amount: 0.15 } as const;

/** Section eyebrow / generic fade-up that fires when scrolled into view. */
export function FadeUp({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span" | "p" | "li";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: REVEAL_DURATION, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}

/** Container that staggers its FadeUp/StaggerItem children. */
export function Stagger({
  children,
  className,
  step = STAGGER_STEP,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  step?: number;
  delay?: number;
}) {
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: step, delayChildren: delay },
    },
  };
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: REVEAL_DURATION, ease: EASE },
  },
};

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

/**
 * Big display heading that reveals line-by-line with a clipping mask —
 * the signature Framer "lines slide up behind a mask" effect.
 * Pass an array of lines.
 */
const maskContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: STAGGER_STEP } },
};

const maskLine: Variants = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: REVEAL_DURATION, ease: EASE },
  },
};

export function MaskReveal({
  lines,
  className,
  lineClassName,
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
}) {
  return (
    <motion.span
      className={className}
      style={{ display: "block" }}
      variants={maskContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {lines.map((line, i) => (
        <span
          key={i}
          style={{ display: "block", overflow: "hidden", paddingBottom: "0.05em" }}
        >
          <motion.span
            style={{ display: "block" }}
            className={lineClassName}
            variants={maskLine}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
