import { Sprout, FlaskConical, Headphones, Truck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { useT } from "@/i18n/LanguageProvider";

const icons = [Sprout, FlaskConical, Headphones, Truck];

export function ServicesGrid() {
  const { t } = useT();
  return (
    <Section id="services" labelledBy="services-h" className="bg-gradient-cream">
      <Container>
        <SectionHeading
          eyebrow={t.services.eyebrow}
          id="services-h"
          title={t.services.title}
          description={t.services.description}
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="group h-full rounded-3xl border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-leaf text-primary-foreground shadow-glow-leaf">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold leading-snug">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
