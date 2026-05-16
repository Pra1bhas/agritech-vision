import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { WhatsAppCTA } from "@/components/layout/WhatsAppCTA";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";

import { useT } from "@/i18n/LanguageProvider";

const slides = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

export function Hero() {
  const { t } = useT();
  const [index, setIndex] = useState(0);

  // Preload non-LCP slides after mount so transitions are instant on mobile too
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
    <section className="relative -mt-16 flex min-h-[92vh] items-center overflow-hidden bg-gradient-hero pt-16 text-primary-foreground md:-mt-20 md:pt-20">
      {/* Slideshow */}
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
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 0.55, scale: 1.15 }}
          exit={{ opacity: 0, scale: 1.18 }}
          transition={{ opacity: { duration: 1.6, ease: "easeInOut" }, scale: { duration: 7, ease: "linear" } }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      {/* Tint — reduced ~20% */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-primary/65 via-primary/50 to-primary/75"
      />
      <div
        aria-hidden
        className="absolute inset-0 leaf-pattern opacity-20"
      />
      {/* animated drifting orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-accent/70 blur-[1px] animate-float-slow" />
        <span className="absolute left-[30%] top-[70%] h-1.5 w-1.5 rounded-full bg-primary-foreground/60 animate-float-slower" />
        <span className="absolute left-[70%] top-[35%] h-2.5 w-2.5 rounded-full bg-accent/50 blur-[1px] animate-float-slow" />
        <span className="absolute left-[85%] top-[65%] h-1.5 w-1.5 rounded-full bg-primary-foreground/50 animate-float-slower" />
        <span className="absolute left-[55%] top-[15%] h-1 w-1 rounded-full bg-accent animate-float-slow" />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.82_0.16_85_/_0.2),_transparent_55%)]"
      />
      {/* decorative circles */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-leaf/25 blur-3xl"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
      />

      <Container className="relative py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-bold text-balance md:text-6xl lg:text-7xl"
            style={{ fontSize: "clamp(2.25rem, 5vw + 1rem, 4.5rem)" }}
          >
            {t.hero.titleA} <span className="text-accent">{t.hero.titleB}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/85 md:text-lg md:leading-[1.8]"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <Link
              to="/products"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold tracking-wide text-accent-foreground transition-all hover:-translate-y-0.5 hover:shadow-elevated md:h-14 md:px-8 md:text-base"
            >
              {t.hero.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <WhatsAppCTA
              message="Hello Indian Agritech, I'd like to know more about your products."
              className="md:h-14 md:px-7 md:text-base"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
