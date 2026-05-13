import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/common/Reveal";
import { CTASection } from "@/components/home/CTASection";
import { ProductsExplorer } from "@/components/products/ProductsExplorer";
import { categories } from "@/content/categories";
import { getProducts } from "@/lib/products/source";
import { buildMeta } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: buildMeta({
      title: "Products & Categories",
      description:
        "Explore Indian Agritech's full portfolio — pest control, water solubles, micronutrients, granules, plant growth regulators and fungicides.",
      path: "/products",
    }),
  }),
  loader: async () => {
    const products = await getProducts();
    return { products };
  },
  component: ProductsPage,
});

const accentMap: Record<string, string> = {
  leaf: "from-leaf/90 to-primary",
  forest: "from-primary to-primary/80",
  soil: "from-soil to-soil/80",
  gold: "from-accent to-leaf",
};

function ProductsPage() {
  const { products } = Route.useLoaderData();

  return (
    <>
      {/* Premium hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="leaf-pattern absolute inset-0 opacity-50" />
        <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-leaf/30 blur-3xl" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <Container className="relative py-20 md:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em]">
              Product Portfolio
            </span>
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] md:text-6xl lg:text-7xl text-balance">
            A complete portfolio for every crop, every season.
          </h1>
          <p className="mt-6 max-w-2xl text-primary-foreground/80 md:text-lg">
            Premium crop protection, plant nutrition and growth solutions —
            engineered for Indian fields. Search, filter and explore our complete
            product range.
          </p>
        </Container>
      </section>

      {/* Categories rail */}
      <Section className="py-10 md:py-14">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-display text-2xl font-bold md:text-3xl">
                Browse by category
              </h2>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {categories.map((c, i) => (
                <Link
                  key={c.slug}
                  to="/products/$category"
                  params={{ category: c.slug }}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl bg-gradient-to-br p-4 text-primary-foreground shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated",
                    accentMap[c.accent],
                  )}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 font-display text-base font-bold leading-tight md:text-lg">
                    {c.name}
                  </p>
                  <ArrowUpRight className="mt-4 h-4 w-4 opacity-80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Explorer */}
      <Section className="pt-2">
        <Container>
          <ProductsExplorer products={products} />
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
