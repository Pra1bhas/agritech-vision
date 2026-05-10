import { ShieldCheck, Users, MapPin, BadgeCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";

const pillars = [
  { icon: ShieldCheck, title: "Quality Assured", desc: "Every batch tested for purity and performance." },
  { icon: Users, title: "Farmer First", desc: "Built around real on-field needs, not lab theory." },
  { icon: MapPin, title: "Pan-India Reach", desc: "A reliable dealer and distribution network." },
  { icon: BadgeCheck, title: "Expert Backed", desc: "Formulated and reviewed by agri-scientists." },
];

export function WhyChooseUs() {
  return (
    <Section id="why" labelledBy="why-h" className="bg-gradient-cream">
      <Container>
        <SectionHeading
          eyebrow="Why choose us"
          id="why-h"
          title="Trusted where it matters most — the field"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="flex h-full gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-leaf/10 text-leaf">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
