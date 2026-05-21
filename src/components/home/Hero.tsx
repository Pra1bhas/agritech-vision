import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { HeroParticleBackground } from "@/components/home/HeroParticleBackground";
import { HeroWaveDivider } from "@/components/home/HeroWaveDivider";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";

import { useT } from "@/i18n/LanguageProvider";

const slides = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

export function Hero() {
  const { t } = useT();
  const [index, setIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    slides.slice(1).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative -mt-16 flex min-h-svh min-h-[100dvh] items-center overflow-hidden bg-black pt-20 pb-28 text-primary-foreground md:-mt-20 md:pt-24 md:pb-36"
    >
      <AnimatePresence mode="sync">
        <motion.img
          key={index}
          src={slides[index]}
          alt=""
          aria-hidden
          width={1600}
          height={900}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={index === 0 ? "high" : "low"}
          sizes="100vw"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.9, scale: 1.12 }}
          exit={{ opacity: 0, scale: 1.14 }}
          transition={{
            opacity: { duration: 1.6, ease: "easeInOut" },
            scale: { duration: 8, ease: "linear" },
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      <HeroParticleBackground sectionRef={sectionRef} />

      {/* Subtle dark overlay for text readability only — no green tint */}
      <div
        aria-hidden
        className="absolute inset-0 z-[2] bg-gradient-to-t from-black/63 via-black/[0.225] to-black/36"
      />

      <Container className="relative z-10 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-foreground/80 md:text-xs"
          >
            {t.hero.badge}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 font-display font-bold leading-[1.08] text-balance drop-shadow-lg md:mt-6"
            style={{ fontSize: "clamp(2.5rem, 6vw + 0.5rem, 5rem)" }}
          >
            {t.hero.titleA}{" "}
            <span className="text-accent">{t.hero.titleB}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-primary-foreground/90 drop-shadow-md md:mt-10 md:max-w-3xl md:text-xl md:leading-[1.75]"
          >
            {t.hero.subtitle}
          </motion.p>
        </div>
      </Container>

      <HeroWaveDivider />
    </section>
  );
}
