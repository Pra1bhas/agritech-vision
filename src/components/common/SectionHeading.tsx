import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  id?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-leaf">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="text-3xl font-bold text-balance text-foreground md:text-5xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg md:leading-[1.8]">
          {description}
        </p>
      )}
    </div>
  );
}
