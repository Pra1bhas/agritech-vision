"use client";
import { useMemo, useState } from "react";
import { Search, X, AlertCircle, PackageOpen, LayoutGrid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { ProductDetailDialog } from "./ProductDetailDialog";
import { CategoryInfoBlock } from "./CategoryInfoBlock";
import { getCategoryIcon } from "@/content/categoryIcons";
import type { Product } from "@/content/products";
import { categories, getCategory, type Category } from "@/content/categories";
import { categoryBrochure } from "@/content/categoryBrochure";
import { cn } from "@/lib/utils";

const accentMap: Record<string, string> = {
  leaf: "from-leaf/90 to-primary",
  forest: "from-primary to-primary/80",
  soil: "from-soil to-soil/80",
  gold: "from-accent to-leaf",
};

interface Props {
  products: Product[];
  activeCategorySlug: string | null;
  fetchError?: string | null;
}

export function ProductsByCategory({ products, activeCategorySlug, fetchError }: Props) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Product | null>(null);

  const activeCategory = activeCategorySlug ? getCategory(activeCategorySlug) : undefined;

  const categoryProducts = useMemo(() => {
    if (!activeCategorySlug) return [];
    return products.filter((p) => p.categorySlug === activeCategorySlug);
  }, [products, activeCategorySlug]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return categoryProducts;
    return categoryProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.tagline?.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q),
    );
  }, [categoryProducts, query]);

  const isEmpty = products.length === 0;
  const noCategory = !activeCategorySlug;
  const noResults = !!activeCategorySlug && !isEmpty && filtered.length === 0;

  const displayCategory: Category | undefined =
    activeCategory ??
    (activeCategorySlug
      ? {
          slug: activeCategorySlug,
          name: activeCategorySlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
          shortBlurb: "",
          longBlurb: "",
          accent: "leaf",
          highlights: [],
          brochures: [],
        }
      : undefined);

  const CategoryIcon = activeCategorySlug ? getCategoryIcon(activeCategorySlug) : LayoutGrid;

  return (
    <div id="products-grid">
      {fetchError && (
        <div
          role="alert"
          className="mb-6 flex items-start gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <p>{fetchError}</p>
        </div>
      )}

      {noCategory ? (
        <PickCategoryState />
      ) : (
        <>
          <div className="sticky top-16 z-30 -mx-4 mb-10 border-b border-border/60 bg-background/80 px-4 py-4 backdrop-blur-xl md:top-20 md:mx-0 md:rounded-2xl md:border md:px-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={`Search in ${displayCategory?.name ?? "category"}…`}
                  className="h-12 w-full rounded-full border border-border bg-background/80 pl-11 pr-10 text-sm outline-none transition-colors focus:border-leaf"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full hover:bg-muted"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
              <p className="text-xs font-medium text-muted-foreground md:ml-3">
                {filtered.length} product{filtered.length === 1 ? "" : "s"}
              </p>
            </div>
          </div>

          {isEmpty ? (
            <EmptyState
              title="No products yet"
              description="Our product catalogue is being updated. Please check back soon or contact us for availability."
            />
          ) : noResults ? (
            <EmptyState title="No products found" description="Try a different search term." />
          ) : displayCategory ? (
            <section className="scroll-mt-28">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span
                    className={cn(
                      "grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br text-primary-foreground shadow-soft",
                      accentMap[displayCategory.accent] ?? accentMap.leaf,
                    )}
                  >
                    <CategoryIcon className="h-6 w-6" strokeWidth={2} aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
                      {(() => {
                        const idx = categories.findIndex((c) => c.slug === displayCategory.slug);
                        return idx >= 0 ? String(idx + 1).padStart(2, "0") : "—";
                      })()}
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-bold md:text-4xl">
                      {filtered[0]?.categoryLabel ?? displayCategory.name}
                    </h2>
                    {displayCategory.shortBlurb ? (
                      <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
                        {displayCategory.shortBlurb}
                      </p>
                    ) : null}
                  </div>
                </div>
                <span
                  className={cn(
                    "hidden h-1 w-24 rounded-full bg-gradient-to-r md:block",
                    accentMap[displayCategory.accent] ?? accentMap.leaf,
                  )}
                />
              </div>

              <motion.div
                layout
                className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4"
              >
                <AnimatePresence mode="popLayout">
                  {filtered.map((p, i) => (
                    <ProductCard
                      key={p.id}
                      product={p}
                      index={i}
                      onClick={(prod) => setSelected(prod)}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>

              {categoryBrochure[displayCategory.slug] ? (
                <CategoryInfoBlock brochure={categoryBrochure[displayCategory.slug]} />
              ) : null}
            </section>
          ) : null}
        </>
      )}

      <ProductDetailDialog
        product={selected}
        open={!!selected}
        onOpenChange={(o) => !o && setSelected(null)}
      />
    </div>
  );
}

function PickCategoryState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-dashed border-border bg-card/40 p-12 text-center"
    >
      <LayoutGrid className="mx-auto h-10 w-10 text-leaf/70" />
      <p className="mt-4 font-display text-xl font-bold">Choose a category</p>
      <p className="mt-2 text-sm text-muted-foreground">
        Select a product category above to view its range — products are shown one category at a
        time.
      </p>
    </motion.div>
  );
}

function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-3xl border border-dashed border-border bg-card/40 p-12 text-center"
    >
      <PackageOpen className="mx-auto h-10 w-10 text-muted-foreground/60" />
      <p className="mt-4 font-display text-xl font-bold">{title}</p>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
}
