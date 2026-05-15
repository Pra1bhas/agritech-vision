import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { HeroAboutTransition } from "@/components/common/HeroAboutTransition";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesGrid } from "@/components/home/ServicesGrid";

import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ChairmanMessage } from "@/components/home/ChairmanMessage";
import { CTASection } from "@/components/home/CTASection";
import { ContactPreview } from "@/components/home/ContactPreview";
import { buildMeta } from "@/lib/seo";
import { site } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: buildMeta({
      title: `${site.name} — ${site.tagline}`,
      description: site.description,
      path: "/",
    }),
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
      <ChairmanMessage />
      <CTASection />
      <ContactPreview />
    </>
  );
}
