import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { WhatsAppCTA } from "@/components/layout/WhatsAppCTA";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { useT } from "@/i18n/LanguageProvider";

export function Hero() {
  const { t } = useT();
  return (
    <section className="relative -mt-16 flex min-h-[92vh] items-center overflow-hidden bg-gradient-hero pt-16 text-primary-foreground md:-mt-20 md:pt-20">
      <img
        src={heroBg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-primary/90"
      />
      <div
        aria-hidden
        className="absolute inset-0 leaf-pattern opacity-30"
      />
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

      <Container className="relative grid items-center gap-12 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-7">
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
            className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 md:text-lg md:leading-[1.8]"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
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
            className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-8"
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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:col-span-5 md:block"
        >
          <div className="relative aspect-square rounded-[2.5rem] border border-primary-foreground/10 bg-primary-foreground/5 p-3 backdrop-blur-md shadow-elevated">
            <div className="leaf-pattern relative h-full w-full overflow-hidden rounded-[2rem] bg-gradient-leaf">
              <svg
                viewBox="0 0 200 200"
                className="absolute inset-0 h-full w-full text-primary-foreground/30"
                fill="none"
              >
                <path
                  d="M150 30c-50 0-90 40-90 90 0 15 4 28 12 38 40 0 80-30 80-90 0-15 0-38-2-38z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path d="M70 170c14-40 35-70 75-100" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-background/95 p-5 text-foreground shadow-elevated">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-leaf">
                  {t.hero.featured}
                </p>
                <p className="mt-2 font-display text-lg font-bold">
                  {t.hero.featuredTitle}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {t.hero.featuredSub}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
