import { Sprout, FlaskConical, Headphones, Truck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { useT } from "@/i18n/LanguageProvider";
import cropProtectionBg from "@/assets/card-crop-protection.jpg";
import plantNutritionBg from "@/assets/card-plant-nutrition.jpg";
import farmerAdvisoryBg from "@/assets/card-farmer-advisory.jpg";
import distributionBg from "@/assets/card-distribution.jpg";

const icons = [Sprout, FlaskConical, Headphones, Truck];
const backgrounds = [cropProtectionBg, plantNutritionBg, farmerAdvisoryBg, distributionBg];

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
            const bg = backgrounds[i];
            return (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-border shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated">
                  {/* Background image */}
                  <img
                    src={bg}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Dark gradient overlay for text legibility */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/30"
                  />
                  <div className="relative p-8">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-leaf text-primary-foreground shadow-glow-leaf">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-bold leading-snug text-white drop-shadow">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/90 drop-shadow">
                      {s.desc}
                    </p>
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
