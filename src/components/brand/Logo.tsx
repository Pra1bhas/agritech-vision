import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

interface LogoProps {
  className?: string;
  variant?: "horizontal" | "square";
  tone?: "dark" | "light";
}

export function Logo({ className, variant = "horizontal" }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="Indian Agritech home"
      className={cn("inline-flex items-center", className)}
    >
      <img
        src={logo}
        alt="Indian Agritech"
        className={cn(
          "w-auto object-contain",
          variant === "square" ? "h-12" : "h-12 md:h-14",
        )}
      />
    </Link>
  );
}
