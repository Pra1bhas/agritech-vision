import { whatsappLink } from "@/content/site";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface WhatsAppCTAProps {
  message?: string;
  className?: string;
  variant?: "pill" | "ghost" | "floating";
  children?: ReactNode;
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.05 4.91A10 10 0 0 0 4.1 17.5L3 21l3.6-1.07A10 10 0 1 0 19.05 4.9zM12 19.5a7.5 7.5 0 0 1-3.83-1.05l-.27-.16-2.13.63.64-2.08-.18-.28A7.5 7.5 0 1 1 12 19.5zm4.3-5.6c-.24-.12-1.4-.69-1.61-.77-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.13 3.65.58.25 1.03.4 1.38.5.58.18 1.1.16 1.52.1.46-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28z" />
    </svg>
  );
}

export function WhatsAppCTA({
  message,
  className,
  variant = "pill",
  children = "WhatsApp",
}: WhatsAppCTAProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all";
  const styles = {
    pill: "h-11 px-5 rounded-full bg-leaf text-primary-foreground hover:shadow-glow-leaf hover:-translate-y-0.5",
    ghost: "h-11 px-5 rounded-full border border-leaf/40 text-leaf hover:bg-leaf/10",
    floating:
      "fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-leaf text-primary-foreground shadow-glow-leaf hover:scale-105 md:hidden",
  };
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Indian Agritech on WhatsApp"
      className={cn(base, styles[variant], className)}
    >
      <WhatsAppIcon className={variant === "floating" ? "h-6 w-6" : "h-4 w-4"} />
      {variant !== "floating" && <span>{children}</span>}
    </a>
  );
}
