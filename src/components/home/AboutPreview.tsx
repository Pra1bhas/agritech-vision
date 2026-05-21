import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/common/Reveal";
import { ImageFrame } from "@/components/common/ImageFrame";
import { AboutParticlesNetwork } from "@/components/home/AboutParticlesNetwork";
import aboutField from "@/assets/about-field.jpg";
import { useT } from "@/i18n/LanguageProvider";

export function AboutPreview() {
  const { t } = useT();

  return (
    <Section
      id="about-preview"
      labelledBy="about-preview-h"
      className="about-preview-section -mt-px overflow-hidden py-20 text-primary-foreground md:py-28"
    >
      <div className="about-preview-particles-wrap">
        <AboutParticlesNetwork />
      </div>

      <Container className="about-preview-content relative z-10 grid items-center gap-14 md:grid-cols-2">
        <Reveal>
          <ImageFrame
            src={aboutField}
            alt="Farmer holding green seedling in rich soil"
            ratio="portrait"
            className="about-preview-image md:max-w-md"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a5d6a7]">
            {t.about.eyebrow}
          </p>
          <h2
            id="about-preview-h"
            className="about-preview-heading text-3xl font-bold text-balance md:text-5xl"
          >
            {t.about.titleA}{" "}
            <span className="text-[#c8e6c9]">{t.about.titleB}</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-primary-foreground/85 md:text-lg md:leading-[1.85]">
            {t.about.body}
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { v: t.about.stat1V, l: t.about.stat1L },
              { v: t.about.stat2V, l: t.about.stat2L },
              { v: t.about.stat3V, l: t.about.stat3L },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-soft backdrop-blur-sm"
              >
                <p className="font-display text-2xl font-bold text-primary-foreground md:text-3xl">
                  {s.v}
                </p>
                <p className="mt-2 text-xs leading-snug text-primary-foreground/75">{s.l}</p>
              </div>
            ))}
          </div>
          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#c8e6c9] transition-all hover:gap-3"
          >
            {t.about.learnStory} <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
