import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/common/Reveal";
import { CTASection } from "@/components/home/CTASection";
import { CategoryCard } from "@/components/products/CategoryCard";
import { ProductsByCategory } from "@/components/products/ProductsByCategory";
import { categories } from "@/content/categories";
import { getProducts, ProductsFetchError } from "@/lib/products/source";
import { buildMeta } from "@/lib/seo";

type ProductsSearch = {
  category?: string;
};

export const Route = createFileRoute("/products")({
  validateSearch: (search: Record<string, unknown>): ProductsSearch => ({
    category: typeof search.category === "string" ? search.category : undefined,
  }),
  head: () => ({
    meta: buildMeta({
      title: "Products & Categories",
      description:
        "Explore Indian Agritech's full portfolio — pest control, water solubles, micronutrients, granules, plant growth regulators and fungicides.",
      path: "/products",
    }),
  }),
  loader: async () => {
    try {
      const products = await getProducts();
      return { products, fetchError: null as string | null };
    } catch (err) {
      const message =
        err instanceof ProductsFetchError
          ? err.message
          : "Unable to load products. Please try again later.";
      return { products: [] as Awaited<ReturnType<typeof getProducts>>, fetchError: message };
    }
  },
  pendingComponent: ProductsPagePending,
  component: ProductsPage,
});

function ProductsPagePending() {
  return (
    <Section className="pt-2">
      <Container>
        <div className="space-y-8">
          <div className="h-24 animate-pulse rounded-2xl bg-muted/40" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-[4/5] animate-pulse rounded-3xl bg-muted/40" />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ProductsPage() {
  const { products, fetchError } = Route.useLoaderData();
  const { category: categoryFromUrl } = Route.useSearch();
  const navigate = Route.useNavigate();

  const activeCategory =
    categoryFromUrl && categories.some((c) => c.slug === categoryFromUrl)
      ? categoryFromUrl
      : null;

  const selectCategory = (slug: string) => {
    navigate({
      to: "/products",
      search: { category: slug },
      hash: "products-grid",
    });
  };

  return (
    <>
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
            Premium crop protection, plant nutrition and growth solutions — engineered for Indian
            fields. Choose a category to explore products.
          </p>
        </Container>
      </section>

      <Section className="py-10 md:py-14">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-display text-2xl font-bold md:text-3xl">Browse by category</h2>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {categories.map((c, i) => (
                <CategoryCard
                  key={c.slug}
                  category={c}
                  index={i}
                  active={activeCategory === c.slug}
                  onSelect={selectCategory}
                />
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="pt-2">
        <Container>
          <ProductsByCategory
            products={products}
            activeCategorySlug={activeCategory}
            fetchError={fetchError}
          />
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
