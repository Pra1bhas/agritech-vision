"use client";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Sprout, FileText, Phone, Sprout as Crop, Beaker } from "lucide-react";
import type { Product } from "@/content/products";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

interface Props {
  product: Product | null;
  open: boolean;
  onOpenChange: (o: boolean) => void;
}

const accentBg: Record<string, string> = {
  leaf: "from-leaf/40 via-primary/10 to-transparent",
  forest: "from-primary/40 via-leaf/10 to-transparent",
  soil: "from-soil/40 via-accent/10 to-transparent",
  gold: "from-accent/40 via-leaf/10 to-transparent",
};

export function ProductDetailDialog({ product, open, onOpenChange }: Props) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [product?.id]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl overflow-hidden rounded-3xl border-border/60 bg-card/95 p-0 backdrop-blur-2xl">
        {product && (
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div
              className={cn(
                "relative aspect-square bg-gradient-to-br md:aspect-auto",
                accentBg[product.accent ?? "leaf"],
              )}
            >
              {product.imageUrl && !imageError ? (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  onError={() => setImageError(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center">
                  <div className="grid h-24 w-24 place-items-center rounded-full bg-background/70 text-primary shadow-soft backdrop-blur">
                    <Sprout className="h-10 w-10" />
                  </div>
                </div>
              )}
            </div>

            {/* Body */}
            <div className="flex flex-col gap-4 p-6 md:p-8">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-leaf">
                  Indian Agritech
                </p>
                <DialogTitle className="mt-1 font-display text-3xl font-bold uppercase leading-tight tracking-tight">
                  {product.name}
                </DialogTitle>
                {(product.description || product.tagline) && (
                  <DialogDescription className="mt-2 text-sm leading-relaxed">
                    {product.description || product.tagline}
                  </DialogDescription>
                )}
              </div>

              <dl className="space-y-3 text-sm">
                {product.dosage && (
                  <Row icon={<Beaker className="h-4 w-4" />} label="Dosage" value={product.dosage} />
                )}
                {product.usage && (
                  <Row icon={<Sprout className="h-4 w-4" />} label="Usage" value={product.usage} />
                )}
                {product.crops?.length ? (
                  <Row
                    icon={<Crop className="h-4 w-4" />}
                    label="Crops"
                    value={product.crops.join(", ")}
                  />
                ) : null}
              </dl>

              <div className="mt-2 flex flex-wrap gap-2">
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground hover:opacity-90"
                >
                  <Phone className="h-4 w-4" /> Call to inquire
                </a>
                {product.pdfUrl && (
                  <a
                    href={product.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-secondary px-5 text-sm font-semibold text-secondary-foreground hover:bg-secondary/80"
                  >
                    <FileText className="h-4 w-4" /> Brochure
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Row({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/50 p-3">
      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-leaf/15 text-leaf">
        {icon}
      </span>
      <div>
        <dt className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          {label}
        </dt>
        <dd className="mt-0.5 text-sm leading-relaxed">{value}</dd>
      </div>
    </div>
  );
}
