import { Sprout, FlaskConical, Headphones, Truck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";

const services = [
  {
    icon: Sprout,
    title: "Crop Protection",
    desc: "Insecticides, fungicides and pest management for healthy fields.",
  },
  {
    icon: FlaskConical,
    title: "Plant Nutrition",
    desc: "Water solubles, micronutrients and granules for stronger crops.",
  },
  {
    icon: Headphones,
    title: "Farmer Advisory",
    desc: "Direct support and guidance from our agri-experts.",
  },
  {
    icon: Truck,
    title: "Distribution Network",
    desc: "Reliable supply through our pan-India dealer ecosystem.",
  },
];

export function ServicesGrid() {
  return (
    <Section id="services" labelledBy="services-h" className="bg-gradient-cream">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          id="services-h"
          title="End-to-end agriculture solutions"
          description="From the seed in the soil to the produce in the market — we support farmers across the journey."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="group h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-leaf text-primary-foreground shadow-glow-leaf">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
