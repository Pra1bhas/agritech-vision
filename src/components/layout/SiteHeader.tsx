"use client";
import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { LanguageToggle } from "./LanguageToggle";
import { Container } from "./Container";
import { navLinks } from "@/content/nav";
import { cn } from "@/lib/utils";
import { useT } from "@/i18n/LanguageProvider";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const { t } = useT();
  const navKey: Record<string, keyof typeof t.nav> = {
    "/": "home",
    "/about": "about",
    "/services": "services",
    "/products": "products",
    "/contact": "contact",
  };

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/40 bg-white shadow-sm transition-shadow duration-300">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Logo />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 md:flex"
        >
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              activeProps={{
                className:
                  "text-leaf bg-leaf/10",
              }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {t.nav[navKey[l.to]]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 z-30 origin-top overflow-hidden border-b border-border/40 bg-white transition-all duration-300 md:hidden",
          open ? "max-h-[80vh] border-b border-border" : "max-h-0",
        )}
      >
        <Container className="flex flex-col gap-1 py-6">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-2xl px-4 py-4 text-lg font-semibold text-foreground hover:bg-secondary"
              activeProps={{ className: "bg-leaf/10 text-leaf" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {t.nav[navKey[l.to]]}
            </Link>
          ))}
          <div className="mt-4">
            <LanguageToggle />
          </div>
        </Container>
      </div>
    </header>
  );
}
