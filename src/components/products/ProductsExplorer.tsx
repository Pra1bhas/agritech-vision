"use client";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { ProductDetailDialog } from "./ProductDetailDialog";
import type { Product } from "@/content/products";
import { categories } from "@/content/categories";
import { cn } from "@/lib/utils";

interface Props {
  products: Product[];
  initialCategory?: string;
  showCategoryFilter?: boolean;
}

export function ProductsExplorer({
  products,
  initialCategory = "all",
  showCategoryFilter = true,
}: Props) {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>(initialCategory);
  const [selected, setSelected] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      if (activeCat !== "all" && p.categorySlug !== activeCat) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.tagline?.toLowerCase().includes(q) ||
        p.usage?.toLowerCase().includes(q) ||
        p.crops?.some((c) => c.toLowerCase().includes(q))
      );
    });
  }, [products, query, activeCat]);

  return (
    <div>
      {/* Controls */}
      <div className="sticky top-16 z-30 -mx-4 mb-8 border-b border-border/60 bg-background/80 px-4 py-4 backdrop-blur-xl md:top-20 md:mx-0 md:rounded-2xl md:border md:px-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, crops, usage…"
              className="h-12 w-full rounded-full border border-border bg-background/80 pl-11 pr-10 text-sm outline-none transition-colors focus:border-leaf"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full hover:bg-muted"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
          <p className="text-xs font-medium text-muted-foreground md:ml-3">
            {filtered.length} of {products.length}
          </p>
        </div>

        {showCategoryFilter && (
          <div className="mt-3 flex flex-nowrap gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <FilterChip active={activeCat === "all"} onClick={() => setActiveCat("all")}>
              All
            </FilterChip>
            {categories.map((c) => (
              <FilterChip
                key={c.slug}
                active={activeCat === c.slug}
                onClick={() => setActiveCat(c.slug)}
              >
                {c.name}
              </FilterChip>
            ))}
          </div>
        )}
      </div>

      {/* Grid */}
      <AnimatePresence mode="popLayout">
        {filtered.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="rounded-3xl border border-dashed border-border bg-card/40 p-12 text-center"
          >
            <p className="font-display text-xl font-bold">No products found</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a different search term or category.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            layout
            className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4"
          >
            {filtered.map((p, i) => (
              <ProductCard
                key={p.id}
                product={p}
                index={i}
                onClick={(prod) => setSelected(prod)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <ProductDetailDialog
        product={selected}
        open={!!selected}
        onOpenChange={(o) => !o && setSelected(null)}
      />
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "h-9 shrink-0 rounded-full border px-4 text-xs font-semibold uppercase tracking-wider transition-all",
        active
          ? "border-primary bg-primary text-primary-foreground shadow-soft"
          : "border-border bg-background/60 text-muted-foreground hover:border-leaf/50 hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}
