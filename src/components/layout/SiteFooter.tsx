import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import { Container } from "./Container";
import { LanguageToggle } from "./LanguageToggle";
import { site } from "@/content/site";
import { navLinks } from "@/content/nav";
import { categories } from "@/content/categories";
import { Mail, MapPin, Phone } from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";

const navKey: Record<string, "home" | "about" | "services" | "products" | "contact"> = {
  "/": "home",
  "/about": "about",
  "/services": "services",
  "/products": "products",
  "/contact": "contact",
};

export function SiteFooter() {
  const { t } = useT();
  return (
    <footer className="relative mt-24 bg-gradient-hero text-primary-foreground">
      <div className="leaf-pattern absolute inset-0 opacity-50" aria-hidden />
      <Container className="relative grid gap-14 py-20 md:grid-cols-4 md:py-24">
        <div className="md:col-span-1">
          <Logo tone="light" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-primary-foreground/80">
            {t.footer.tagline}
          </p>
          <div className="mt-6">
            <LanguageToggle tone="light" />
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            {t.footer.explore}
          </h3>
          <ul className="space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  {t.nav[navKey[l.to]]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            {t.footer.categories}
          </h3>
          <ul className="space-y-3 text-sm">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link
                  to="/products/$category"
                  params={{ category: c.slug }}
                  className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  {t.cats.names[c.slug] ?? c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            {t.footer.contact}
          </h3>
          <address className="not-italic space-y-3.5 text-sm leading-relaxed text-primary-foreground/85">
            <a href={`tel:${site.phoneRaw}`} className="flex items-start gap-2 hover:text-primary-foreground">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-start gap-2 hover:text-primary-foreground">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" /> {site.email}
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                {site.address.line1}<br/>
                {site.address.line2}<br/>
                {site.address.line3}<br/>
                {site.address.region}
              </span>
            </div>
          </address>
        </div>
      </Container>
      <div className="relative border-t border-primary-foreground/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-primary-foreground/65 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. {t.footer.rights}</p>
          <p>{t.footer.smallTag}</p>
        </Container>
      </div>
    </footer>
  );
}
