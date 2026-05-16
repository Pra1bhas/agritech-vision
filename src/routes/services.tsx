import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { CTASection } from "@/components/home/CTASection";
import { buildMeta } from "@/lib/seo";
import servicesHeroBg from "@/assets/services-hero-bg.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: buildMeta({
      title: "Services & Solutions",
      description:
        "Crop protection, plant nutrition, farmer advisory and pan-India distribution — discover the full range of Indian Agritech services.",
      path: "/services",
    }),
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <img
          src={servicesHeroBg}
          alt=""
          aria-hidden
          width={1600}
          height={900}
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/55 to-primary/80" />
        <Container className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Services & Solutions
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl text-balance">
            Complete agriculture support, from soil to harvest.
          </h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/80 md:text-lg">
            We help farmers, dealers and distributors with a full toolkit of
            modern crop solutions and reliable on-ground support.
          </p>
        </Container>
      </Section>

      <ServicesGrid />

      <Section>
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="A simple, farmer-friendly process"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-4">
            {[
              { n: "01", t: "Identify", d: "Understand the crop, soil and pest pressure." },
              { n: "02", t: "Recommend", d: "Suggest the right product from our portfolio." },
              { n: "03", t: "Deliver", d: "Quick supply through our dealer network." },
              { n: "04", t: "Support", d: "Stay with you across the crop cycle." },
            ].map((s) => (
              <div
                key={s.n}
                className="rounded-3xl border border-border bg-card p-7 shadow-soft"
              >
                <p className="font-display text-3xl font-bold text-leaf">{s.n}</p>
                <h3 className="mt-3 font-display text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FeaturedCategories />
      <CTASection />
    </>
  );
}
