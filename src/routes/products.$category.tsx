import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check, Phone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/common/Reveal";
import { ImageFrame } from "@/components/common/ImageFrame";
import { WhatsAppCTA } from "@/components/layout/WhatsAppCTA";
import { categories, getCategory } from "@/content/categories";
import { site } from "@/content/site";
import { buildMeta } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products/$category")({
  loader: ({ params }) => {
    const cat = getCategory(params.category);
    if (!cat) throw notFound();
    return { category: cat };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.category;
    if (!c) return { meta: [] };
    return {
      meta: buildMeta({
        title: `${c.name} — Products`,
        description: c.longBlurb,
        path: `/products/${c.slug}`,
      }),
    };
  },
  errorComponent: ({ error, reset }) => (
    <div className="grid min-h-[60vh] place-items-center px-5 text-center">
      <div>
        <p className="font-display text-xl font-bold">Couldn't load this category</p>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={reset}
          className="mt-4 h-11 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
        >
          Try again
        </button>
      </div>
    </div>
  ),
  notFoundComponent: () => (
    <div className="grid min-h-[60vh] place-items-center px-5 text-center">
      <div>
        <p className="font-display text-2xl font-bold">Category not found</p>
        <Link to="/products" className="mt-4 inline-flex h-11 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground">
          Browse all categories
        </Link>
      </div>
    </div>
  ),
  component: CategoryPage,
});

const accentMap: Record<string, string> = {
  leaf: "from-leaf to-primary",
  forest: "from-primary to-soil",
  soil: "from-soil to-primary",
  gold: "from-accent to-leaf",
};

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const others = categories.filter((c) => c.slug !== category.slug).slice(0, 4);

  return (
    <>
      {/* Breadcrumb + back */}
      <div className="border-b border-border bg-background/60">
        <Container className="flex items-center justify-between gap-4 py-5">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> All Products
          </Link>
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="hover:text-foreground">Home</Link></li>
              <li>/</li>
              <li><Link to="/products" className="hover:text-foreground">Products</Link></li>
              <li>/</li>
              <li className="text-foreground">{category.name}</li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className={cn("bg-gradient-to-br text-primary-foreground", accentMap[category.accent])}>
        <Container className="grid items-center gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
              Product Category
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl text-balance">
              {category.name}
            </h1>
            <p className="mt-5 max-w-xl text-primary-foreground/85 md:text-lg">
              {category.longBlurb}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppCTA
                message={`Hello Indian Agritech, I'm interested in your ${category.name} products.`}
                className="h-12 px-6"
              />
              <a
                href={`tel:${site.phoneRaw}`}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-primary-foreground/30 px-6 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
              >
                <Phone className="h-4 w-4" /> Call us
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <ImageFrame
              alt={`${category.name} product imagery`}
              ratio="square"
              label={category.name}
              className="md:max-w-md"
            />
          </div>
        </Container>
      </section>

      {/* Highlights */}
      <Section>
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-bold md:text-4xl">
              Key highlights
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {category.highlights.map((h: string) => (
                <div
                  key={h}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-leaf/10 text-leaf">
                    <Check className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-medium">{h}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Brochure showcase */}
      <Section className="bg-gradient-cream">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-leaf">
                Product showcase
              </p>
              <h2 className="font-display text-2xl font-bold md:text-4xl">
                {category.name} brochures
              </h2>
            </div>
          </div>
          {category.brochures.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {category.brochures.map((b: { src: string; alt: string; caption?: string }, i: number) => (
                <Reveal key={i} delay={(i % 3) * 0.06}>
                  <ImageFrame src={b.src} alt={b.alt} ratio="portrait" />
                  {b.caption && (
                    <p className="mt-3 text-sm font-medium">{b.caption}</p>
                  )}
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="mt-8 rounded-3xl border border-dashed border-border bg-card/60 p-10 text-center">
                <p className="font-display text-xl font-bold">
                  Detailed brochures coming soon.
                </p>
                <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                  Reach out on WhatsApp for the full {category.name.toLowerCase()} catalogue,
                  pricing and dealer details.
                </p>
                <div className="mt-5 inline-block">
                  <WhatsAppCTA
                    message={`Hello Indian Agritech, please share the ${category.name} brochure.`}
                    className="h-12 px-6"
                  >
                    Request brochure
                  </WhatsAppCTA>
                </div>
              </div>
            </Reveal>
          )}
        </Container>
      </Section>

      {/* Other categories */}
      <Section>
        <Container>
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            Explore other categories
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4">
            {others.map((c) => (
              <Link
                key={c.slug}
                to="/products/$category"
                params={{ category: c.slug }}
                className={cn(
                  "group relative block overflow-hidden rounded-2xl bg-gradient-to-br p-5 text-primary-foreground shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated",
                  accentMap[c.accent],
                )}
              >
                <p className="font-display text-base font-bold md:text-lg">{c.name}</p>
                <ArrowUpRight className="mt-6 h-5 w-5 opacity-80 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
