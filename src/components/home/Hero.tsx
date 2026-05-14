import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { WhatsAppCTA } from "@/components/layout/WhatsAppCTA";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import slide1 from "@/assets/hero-slide-1.jpg";
import slide2 from "@/assets/hero-slide-2.jpg";
import slide3 from "@/assets/hero-slide-3.jpg";
import slide4 from "@/assets/hero-slide-4.jpg";

import { useT } from "@/i18n/LanguageProvider";

const HERO_SLIDES = [slide1, slide2, slide3, slide4];

export function Hero() {
  const { t } = useT();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative -mt-16 flex min-h-[92vh] items-center overflow-hidden bg-gradient-hero pt-16 text-primary-foreground md:-mt-20 md:pt-20">
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.img
            key={index}
            src={HERO_SLIDES[index]}
            alt=""
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.55, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ opacity: { duration: 1.8, ease: "easeInOut" }, scale: { duration: 6.5, ease: "easeOut" } }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/65 to-primary/90"
      />
      <div
        aria-hidden
        className="absolute inset-0 leaf-pattern opacity-25"
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
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.82_0.16_85_/_0.25),_transparent_55%)]"
      />
      {/* decorative circles */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-leaf/30 blur-3xl"
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
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" /> {t.hero.badge}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 font-display text-4xl font-bold text-balance md:text-6xl lg:text-7xl"
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-8"
          >
            {[
              { v: t.hero.statCategoriesV, l: t.hero.statCategoriesL },
              { v: t.hero.statNetworkV, l: t.hero.statNetworkL },
              { v: t.hero.statQualityV, l: t.hero.statQualityL },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-2xl font-bold text-accent md:text-3xl">{s.v}</p>
                <p className="mt-2 text-[11px] text-primary-foreground/75 uppercase tracking-[0.18em]">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
