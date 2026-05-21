"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Sprout, ArrowUpRight } from "lucide-react";
import type { Product } from "@/content/products";
import { cn } from "@/lib/utils";

const accentBg: Record<string, string> = {
  leaf: "from-leaf/30 via-primary/10 to-transparent",
  forest: "from-primary/30 via-leaf/10 to-transparent",
  soil: "from-soil/30 via-accent/10 to-transparent",
  gold: "from-accent/40 via-leaf/10 to-transparent",
};

interface Props {
  product: Product;
  onClick?: (product: Product) => void;
  index?: number;
}

export function ProductCard({ product, onClick, index = 0 }: Props) {
  const accent = product.accent ?? "leaf";
  const [imageError, setImageError] = useState(false);
  const showImage = Boolean(product.imageUrl) && !imageError;

  return (
    <motion.button
      type="button"
      onClick={() => onClick?.(product)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.04, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={cn(
        "group relative flex w-full flex-col overflow-hidden rounded-3xl border border-border/60",
        "bg-card/60 backdrop-blur-xl text-left shadow-soft transition-shadow",
        "hover:shadow-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      )}
    >
      <div
        className={cn(
          "relative aspect-[4/5] overflow-hidden bg-gradient-to-br",
          accentBg[accent],
        )}
      >
        {showImage ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            loading="lazy"
            decoding="async"
            width={400}
            height={500}
            onError={() => setImageError(true)}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <ProductImagePlaceholder />
        )}

        <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/70 text-foreground shadow-soft backdrop-blur transition-transform group-hover:rotate-45">
          <ArrowUpRight className="h-4 w-4" />
        </div>

        {product.isFeatured && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent-foreground shadow-soft">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <p className="font-display text-lg font-bold uppercase tracking-tight md:text-xl">
          {product.name}
        </p>
        {product.tagline && (
          <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
            {product.tagline}
          </p>
        )}
      </div>
    </motion.button>
  );
}

function ProductImagePlaceholder() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="flex flex-col items-center gap-3 text-primary/70">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-background/70 shadow-soft backdrop-blur">
          <Sprout className="h-7 w-7" />
        </div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary/60">
          Product
        </p>
      </div>
    </div>
  );
}
