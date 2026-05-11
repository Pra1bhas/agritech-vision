import { ShieldCheck, Users, MapPin, BadgeCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { useT } from "@/i18n/LanguageProvider";

const icons = [ShieldCheck, Users, MapPin, BadgeCheck];

export function WhyChooseUs() {
  const { t } = useT();
  return (
    <Section id="why" labelledBy="why-h" className="bg-gradient-cream">
      <Container>
        <SectionHeading
          eyebrow={t.why.eyebrow}
          id="why-h"
          title={t.why.title}
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.items.map((p, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="flex h-full gap-4 rounded-3xl border border-border bg-card p-7 shadow-soft">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-leaf/10 text-leaf">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold leading-snug">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
