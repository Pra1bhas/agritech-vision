import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className,
  as: As = "section",
  labelledBy,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "header" | "footer";
  labelledBy?: string;
}) {
  return (
    <As
      id={id}
      aria-labelledby={labelledBy}
      className={cn("relative py-16 md:py-24", className)}
    >
      {children}
    </As>
  );
}
