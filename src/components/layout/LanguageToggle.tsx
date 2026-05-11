"use client";
import { cn } from "@/lib/utils";
import { useT } from "@/i18n/LanguageProvider";

export function LanguageToggle({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const { lang, setLang } = useT();
  const base =
    "inline-flex items-center rounded-full border text-xs font-semibold tracking-wide";
  const wrap =
    tone === "light"
      ? "border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground"
      : "border-border bg-card text-foreground";
  return (
    <div className={cn(base, wrap, className)} role="group" aria-label="Language">
      {(["en", "te"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          className={cn(
            "h-8 rounded-full px-3 transition-colors",
            lang === l
              ? "bg-leaf text-primary-foreground"
              : "opacity-70 hover:opacity-100",
          )}
          aria-pressed={lang === l}
        >
          {l === "en" ? "EN" : "తెలుగు"}
        </button>
      ))}
    </div>
  );
}
