import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesGrid } from "@/components/home/ServicesGrid";

import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CTASection } from "@/components/home/CTASection";
import { ContactPreview } from "@/components/home/ContactPreview";
import { buildMeta } from "@/lib/seo";
import { site } from "@/content/site";
import heroSlide1 from "@/assets/hero-slide-1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: buildMeta({
      title: `${site.name} — ${site.tagline}`,
      description: site.description,
      path: "/",
    }),
    links: [
      { rel: "preload", as: "image", href: heroSlide1, fetchpriority: "high" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesGrid />
      
      <WhyChooseUs />
      <CTASection />
      <ContactPreview />
    </>
  );
}
