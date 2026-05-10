import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/common/Reveal";
import { CTASection } from "@/components/home/CTASection";
import { categories } from "@/content/categories";
import { buildMeta } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: buildMeta({
      title: "Products & Categories",
      description:
        "Explore Indian Agritech's product categories — sucking and chewing pest control, water solubles, micronutrients, granules, plant growth regulators and fungicides.",
      path: "/products",
    }),
  }),
  component: ProductsPage,
});

const accentMap: Record<string, string> = {
  leaf: "from-leaf/90 to-primary",
  forest: "from-primary to-primary/80",
  soil: "from-soil to-soil/80",
  gold: "from-accent to-leaf",
};

function ProductsPage() {
  return (
    <>
      <Section className="bg-gradient-hero text-primary-foreground">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Products
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl text-balance">
            A complete portfolio for every crop, every season.
          </h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/80 md:text-lg">
            Browse our 8 product categories and reach out for detailed product
            information, brochures and dealer pricing.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4">
            {categories.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 4) * 0.06}>
                <Link
                  to="/products/$category"
                  params={{ category: c.slug }}
                  className="group relative block overflow-hidden rounded-3xl shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
                >
                  <div
                    className={cn(
                      "aspect-[4/5] bg-gradient-to-br p-5 text-primary-foreground",
                      accentMap[c.accent],
                    )}
                  >
                    <div className="flex h-full flex-col justify-between">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
                          {String(i + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
                        </p>
                        <h2 className="mt-3 font-display text-xl font-bold leading-tight md:text-2xl">
                          {c.name}
                        </h2>
                      </div>
                      <div className="flex items-end justify-between gap-3">
                        <p className="max-w-[14rem] text-xs text-primary-foreground/85 md:text-sm">
                          {c.shortBlurb}
                        </p>
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary-foreground/15 backdrop-blur transition-all group-hover:bg-primary-foreground/30">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
