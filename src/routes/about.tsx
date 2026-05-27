import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { ChairmanMessage } from "@/components/home/ChairmanMessage";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CTASection } from "@/components/home/CTASection";
import { buildMeta } from "@/lib/seo";
import { site } from "@/content/site";
import { Leaf, Target, Award } from "lucide-react";
import aboutHeroBg from "@/assets/about-hero-bg.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: buildMeta({
      title: "About Us",
      description:
        "Indian Agritech is a modern Indian agriculture brand delivering trusted crop protection, plant nutrition and growth solutions for farmers across the country.",
      path: "/about",
    }),
  }),
  component: AboutPage,
});

const values = [
  { icon: Leaf, title: "Sustainable Science", desc: "Modern, responsible formulations." },
  { icon: Target, title: "Farmer Outcomes", desc: "Yield, quality and income that matter." },
  { icon: Award, title: "Uncompromised Quality", desc: "Tested at every step of production." },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <img
          src={aboutHeroBg}
          alt=""
          aria-hidden
          width={1600}
          height={900}
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div aria-hidden className="absolute inset-0 bg-black/40" />
        <Container className="relative py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            About {site.name}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl text-balance">
            A modern Indian agri-tech brand built on trust, science and the farmer.
          </h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/80 md:text-lg">
            We bring together agricultural science and on-ground expertise to
            deliver crop solutions that perform — season after season.
          </p>
        </Container>
      </section>

      <Section>
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title="Rooted in Telangana, growing across India."
              description="From our base in Rangareddy, Telangana, we serve farmers, dealers and distributors with a complete portfolio of crop protection and plant nutrition products."
            />
            <div className="mt-8 space-y-4 text-muted-foreground">
              <p>
                Indian Agritech was founded with a simple promise — to deliver
                the kind of agricultural products our own farming community
                deserves. Honest, effective and affordable.
              </p>
              <p>
                Today, our products help farmers protect their crops from pests
                and disease, nourish their soil and boost yields — all backed by
                a network of trusted partners.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-gradient-cream">
        <Container>
          <SectionHeading
            eyebrow="What we stand for"
            title="Our values"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-leaf text-primary-foreground shadow-glow-leaf">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <ChairmanMessage />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
