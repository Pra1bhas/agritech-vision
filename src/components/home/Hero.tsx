import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { WhatsAppCTA } from "@/components/layout/WhatsAppCTA";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
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
            <Sparkles className="h-3.5 w-3.5" /> Trusted Indian Agri-Tech Brand
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] text-balance md:text-6xl lg:text-7xl"
            style={{ fontSize: "clamp(2.25rem, 5vw + 1rem, 4.5rem)" }}
          >
            Modern Crop Solutions <span className="text-accent">for Indian Farmers.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-xl text-base text-primary-foreground/80 md:text-lg"
          >
            Premium crop protection, plant nutrition and growth solutions —
            engineered for real fields, trusted by farmers, dealers and
            distributors across India.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/products"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:shadow-elevated md:h-14 md:px-7 md:text-base"
            >
              Explore Products
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
              { v: "8+", l: "Categories" },
              { v: "Pan-India", l: "Network" },
              { v: "100%", l: "Quality Tested" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-2xl font-bold text-accent md:text-3xl">{s.v}</p>
                <p className="mt-1 text-xs text-primary-foreground/70 uppercase tracking-widest">{s.l}</p>
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
                <p className="text-xs font-semibold uppercase tracking-widest text-leaf">
                  Featured
                </p>
                <p className="mt-1 font-display text-lg font-bold">
                  Plant Nutrition · Crop Protection
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Engineered for the Indian climate.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
