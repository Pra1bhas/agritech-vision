import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import { Container } from "./Container";
import { LanguageToggle } from "./LanguageToggle";
import { site } from "@/content/site";
import { navLinks } from "@/content/nav";
import { categories } from "@/content/categories";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 bg-gradient-hero text-primary-foreground">
      <div className="leaf-pattern absolute inset-0 opacity-50" aria-hidden />
      <Container className="relative grid gap-12 py-16 md:grid-cols-4 md:py-20">
        <div className="md:col-span-1">
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm text-primary-foreground/75">
            Premium crop protection and plant nutrition built for Indian farmers
            and agriculture businesses.
          </p>
          <div className="mt-5">
            <LanguageToggle tone="light" />
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Explore
          </h3>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Categories
          </h3>
          <ul className="space-y-2.5 text-sm">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link
                  to="/products/$category"
                  params={{ category: c.slug }}
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </h3>
          <address className="not-italic space-y-3 text-sm text-primary-foreground/85">
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
        <Container className="flex flex-col gap-2 py-6 text-xs text-primary-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Crop Protection · Plant Nutrition · Growth Solutions</p>
        </Container>
      </div>
    </footer>
  );
}
