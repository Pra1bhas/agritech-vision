import { Beaker, Leaf, Sprout } from "lucide-react";
import type { CategoryBrochure, CategoryBrochureExtra } from "@/content/categoryBrochure";
import { Reveal } from "@/components/common/Reveal";
import { cn } from "@/lib/utils";

interface Props {
  brochure: CategoryBrochure;
  className?: string;
}

export function CategoryInfoBlock({ brochure, className }: Props) {
  const hasMain = brochure.dosage || brochure.usage || brochure.crops;
  const hasExtras =
    (brochure.extras?.length ?? 0) > 0 || (brochure.productNotes?.length ?? 0) > 0;

  if (!hasMain && !hasExtras) return null;

  return (
    <Reveal>
      <div
        className={cn(
          "mt-8 rounded-3xl border border-border/60 bg-gradient-to-br from-card/80 via-background/60 to-leaf/5 p-6 shadow-soft md:p-8",
          className,
        )}
      >
        {hasMain && (
          <div className="grid gap-4 sm:grid-cols-3">
            {brochure.dosage && <InfoRow icon={Beaker} label="Dosage" value={brochure.dosage} />}
            {brochure.usage && <InfoRow icon={Sprout} label="Usage" value={brochure.usage} />}
            {brochure.crops && <InfoRow icon={Leaf} label="Crops" value={brochure.crops} />}
          </div>
        )}

        {brochure.extras?.map((extra) => (
          <ExtraBlock key={extra.title} extra={extra} className={hasMain ? "mt-6" : undefined} />
        ))}

        {brochure.productNotes?.map((note) => (
          <ExtraBlock key={note.title} extra={note} className={hasMain ? "mt-6" : undefined} />
        ))}
      </div>
    </Reveal>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Beaker;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-border/50 bg-background/50 p-4">
      <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-leaf">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-foreground/90">{value}</p>
    </div>
  );
}

function ExtraBlock({
  extra,
  className,
}: {
  extra: CategoryBrochureExtra;
  className?: string;
}) {
  return (
    <div className={cn("rounded-2xl border border-leaf/20 bg-leaf/5 p-5", className)}>
      <p className="font-display text-lg font-bold text-primary">{extra.title}</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {extra.dosage && (
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Dosage
            </p>
            <p className="mt-1 text-sm">{extra.dosage}</p>
          </div>
        )}
        {extra.usage && (
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Usage
            </p>
            <p className="mt-1 text-sm">{extra.usage}</p>
          </div>
        )}
        {extra.crops && (
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Crops
            </p>
            <p className="mt-1 text-sm">{extra.crops}</p>
          </div>
        )}
      </div>
    </div>
  );
}
