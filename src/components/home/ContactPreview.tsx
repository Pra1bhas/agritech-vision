import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/common/Reveal";
import { site } from "@/content/site";
import { useT } from "@/i18n/LanguageProvider";

export function ContactPreview() {
  const { t } = useT();
  const items = [
    { icon: Phone, label: t.contactPrev.call, value: site.phone, href: `tel:${site.phoneRaw}` },
    { icon: Mail, label: t.contactPrev.email, value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: t.contactPrev.visit, value: `${site.address.line2}, ${site.address.region}` },
  ];

  return (
    <Section id="contact-preview" className="bg-gradient-cream">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-7">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-leaf">
              {t.contactPrev.eyebrow}
            </p>
            <h2 className="text-3xl font-bold md:text-5xl text-balance">
              {t.contactPrev.title}
            </h2>
          </Reveal>
          <Reveal className="md:col-span-5 md:text-right">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-leaf transition-all hover:gap-3"
            >
              {t.contactPrev.visitContact} <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={i * 0.06}>
              {it.href ? (
                <a
                  href={it.href}
                  className="group flex h-full items-start gap-4 rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
                >
                  <CardInner icon={it.icon} label={it.label} value={it.value} />
                </a>
              ) : (
                <div className="flex h-full items-start gap-4 rounded-3xl border border-border bg-card p-7 shadow-soft">
                  <CardInner icon={it.icon} label={it.label} value={it.value} />
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function CardInner({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
}) {
  return (
    <>
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-leaf/10 text-leaf">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </p>
        <p className="mt-2 font-display text-base font-bold leading-snug">{value}</p>
      </div>
    </>
  );
}
