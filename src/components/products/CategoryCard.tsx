import { ArrowUpRight } from "lucide-react";
import { getCategoryIcon } from "@/content/categoryIcons";
import type { Category } from "@/content/categories";
import { cn } from "@/lib/utils";

const accentMap: Record<string, string> = {
  leaf: "from-leaf/90 to-primary",
  forest: "from-primary to-primary/80",
  soil: "from-soil to-soil/80",
  gold: "from-accent to-leaf",
};

type CategoryCardProps = {
  category: Category;
  index: number;
  active?: boolean;
  onSelect: (slug: string) => void;
};

export function CategoryCard({ category, index, active, onSelect }: CategoryCardProps) {
  const Icon = getCategoryIcon(category.slug);

  return (
    <button
      type="button"
      onClick={() => onSelect(category.slug)}
      aria-pressed={active}
      className={cn(
        "group relative w-full overflow-hidden rounded-2xl bg-gradient-to-br p-4 text-left text-primary-foreground shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated",
        accentMap[category.accent],
        active && "ring-2 ring-primary-foreground ring-offset-2 ring-offset-background",
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
          {String(index + 1).padStart(2, "0")}
        </p>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary-foreground/15 backdrop-blur-sm">
          <Icon className="h-5 w-5 opacity-95" strokeWidth={2} aria-hidden />
        </span>
      </div>
      <p className="mt-3 font-display text-base font-bold leading-tight md:text-lg">
        {category.name}
      </p>
      {category.shortBlurb ? (
        <p className="mt-1.5 line-clamp-2 text-[11px] leading-snug text-primary-foreground/75">
          {category.shortBlurb}
        </p>
      ) : null}
      <ArrowUpRight
        className={cn(
          "mt-3 h-4 w-4 opacity-80 transition-transform",
          active ? "translate-x-0.5 -translate-y-0.5" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
        )}
        aria-hidden
      />
    </button>
  );
}
