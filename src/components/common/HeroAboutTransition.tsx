import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Premium organic transition between the dark-green Hero and the
 * warm cream About section. Layered SVG waves with gradients, blur
 * and scroll-driven parallax for a cinematic agri feel.
 */
export function HeroAboutTransition({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Track scroll progress as the divider moves through the viewport.
  // 0 = divider just entering bottom of viewport, 1 = leaving top.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Each layer drifts at a different speed/direction → depth.
  const yForest = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -60]);
  const yLeaf = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -38]);
  const yOlive = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -18]);
  const ySun = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -10]);
  const yCream = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 12]);
  const fadeTop = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.6]);

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        "relative -mt-24 md:-mt-32 lg:-mt-40 w-full overflow-hidden leading-[0] pointer-events-none select-none",
        className,
      )}
      style={{ zIndex: 5 }}
    >
      {/* Top fade: hero green → cream */}
      <motion.div
        className="absolute inset-x-0 top-0 h-[55%]"
        style={{
          opacity: fadeTop,
          background:
            "linear-gradient(to bottom, oklch(0.32 0.08 150 / 0) 0%, oklch(0.30 0.08 150 / 0.55) 35%, oklch(0.96 0.02 90 / 0) 100%)",
        }}
      />

      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="relative block h-[180px] w-full md:h-[260px] lg:h-[320px]"
      >
        <defs>
          <linearGradient id="hat-forest" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#0d4a2b" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#0b3a23" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="hat-leaf" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#2f7a3f" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#2a6b38" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="hat-olive" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#8dc063" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#a8c97a" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="hat-cream" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#f5efe1" stopOpacity="1" />
            <stop offset="100%" stopColor="#faf6ec" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="hat-sun" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#f5d791" stopOpacity="0" />
            <stop offset="50%" stopColor="#f5d791" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#f5d791" stopOpacity="0" />
          </linearGradient>
          <filter id="hat-blur-soft" x="-5%" y="-5%" width="110%" height="120%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <filter id="hat-blur-faint" x="-5%" y="-5%" width="110%" height="120%">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>
        </defs>

        {/* Distant blurred forest layer (slowest, deepest parallax) */}
        <motion.path
          style={{ y: yForest }}
          d="M0,180 C180,120 340,210 560,165 C800,115 1000,205 1220,160 C1320,140 1390,150 1440,158 L1440,320 L0,320 Z"
          fill="url(#hat-forest)"
          filter="url(#hat-blur-soft)"
          className="origin-bottom animate-hill-drift-slow"
        />

        {/* Mid leaf-green hill */}
        <motion.path
          style={{ y: yLeaf }}
          d="M0,215 C200,160 380,250 620,205 C880,155 1080,245 1280,210 C1360,196 1410,206 1440,212 L1440,320 L0,320 Z"
          fill="url(#hat-leaf)"
          filter="url(#hat-blur-faint)"
          className="origin-bottom animate-hill-drift"
        />

        {/* Front olive grass hill */}
        <motion.path
          style={{ y: yOlive }}
          d="M0,255 C220,210 400,290 640,250 C900,205 1100,285 1300,255 C1370,244 1410,250 1440,254 L1440,320 L0,320 Z"
          fill="url(#hat-olive)"
          className="origin-bottom animate-hill-drift-slow drop-shadow-[0_-10px_18px_rgba(11,58,35,0.35)]"
        />

        {/* Golden sunlight kiss across the front ridge */}
        <motion.path
          style={{ y: ySun }}
          d="M0,255 C220,210 400,290 640,250 C900,205 1100,285 1300,255 C1370,244 1410,250 1440,254 L1440,262 L0,262 Z"
          fill="url(#hat-sun)"
          opacity="0.9"
        />

        {/* Cream base merging into About background (drifts opposite) */}
        <motion.path
          style={{ y: yCream }}
          d="M0,295 C260,275 520,310 760,295 C1020,278 1240,308 1440,298 L1440,320 L0,320 Z"
          fill="url(#hat-cream)"
        />
      </svg>
    </div>
  );
}
