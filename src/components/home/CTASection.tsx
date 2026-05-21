import { Phone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/common/Reveal";
import { site } from "@/content/site";
import { useT } from "@/i18n/LanguageProvider";

export function CTASection() {
  const { t } = useT();
  return (
    <Section className="py-16 md:py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-hero p-10 text-primary-foreground shadow-elevated md:p-16">
            <div className="leaf-pattern absolute inset-0 opacity-60" aria-hidden />
            <div
              aria-hidden
              className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
            />
            <div className="relative grid gap-10 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                  {t.cta.eyebrow}
                </p>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight md:text-5xl">
                  {t.cta.title}
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 md:text-lg md:leading-[1.8]">
                  {t.cta.body}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold tracking-wide text-accent-foreground transition-colors hover:opacity-90 md:h-14"
                >
                  <Phone className="h-4 w-4" /> {t.common.callUs}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
