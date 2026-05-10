import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "horizontal" | "square";
  tone?: "dark" | "light";
}

/**
 * Temporary typography-based logo placeholder.
 * Reserves space for final uploaded logo asset.
 */
export function Logo({ className, variant = "horizontal", tone = "dark" }: LogoProps) {
  const color = tone === "light" ? "text-primary-foreground" : "text-foreground";
  const accent = tone === "light" ? "text-accent" : "text-leaf";

  return (
    <Link
      to="/"
      aria-label="Indian Agritech home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span
        aria-hidden
        className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-leaf shadow-glow-leaf"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5 text-primary-foreground"
        >
          <path
            d="M17 4c-7 0-11 5-11 11 0 2 .5 3.5 1.5 5 5 0 10-4 10-11 0-2 0-5-.5-5z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 20c2-5 5-9 10-13"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      {variant === "horizontal" && (
        <span className="flex flex-col leading-none">
          <span className={cn("font-display text-lg font-bold tracking-tight", color)}>
            INDIAN
          </span>
          <span
            className={cn(
              "text-[10px] font-semibold uppercase tracking-[0.28em]",
              accent,
            )}
          >
            Agritech
          </span>
        </span>
      )}
    </Link>
  );
}
