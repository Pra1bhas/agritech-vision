import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/common/Reveal";
import { WhatsAppCTA } from "@/components/layout/WhatsAppCTA";
import { site } from "@/content/site";
import { buildMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: buildMeta({
      title: "Contact Us",
      description:
        "Reach Indian Agritech for product inquiries, dealership and on-ground support. Based in Rangareddy, Telangana.",
      path: "/contact",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: site.name,
          telephone: site.phone,
          email: site.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: `${site.address.line1}, ${site.address.line2}`,
            addressLocality: "Abdullapurmet",
            addressRegion: "Telangana",
            postalCode: "501505",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Section className="bg-gradient-hero text-primary-foreground">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl text-balance">
            We're a message away.
          </h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/80 md:text-lg">
            Talk to our team for product inquiries, brochures, dealership and
            agronomy support.
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-5">
            <Reveal>
              <a
                href={`tel:${site.phoneRaw}`}
                className="group flex items-start gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated"
              >
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-leaf/10 text-leaf">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Phone</p>
                  <p className="mt-1 font-display text-lg font-bold">{site.phone}</p>
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.06}>
              <a
                href={`mailto:${site.email}`}
                className="group flex items-start gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated"
              >
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-leaf/10 text-leaf">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
                  <p className="mt-1 font-display text-lg font-bold break-all">{site.email}</p>
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex items-start gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-leaf/10 text-leaf">
                  <MapPin className="h-5 w-5" />
                </div>
                <address className="not-italic">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Visit</p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground">
                    {site.address.line1}<br/>
                    {site.address.line2}<br/>
                    {site.address.line3}<br/>
                    {site.address.region}<br/>
                    {site.address.country}
                  </p>
                </address>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <WhatsAppCTA
                message="Hello Indian Agritech, I have an inquiry."
                className="h-14 w-full"
              >
                Chat on WhatsApp
              </WhatsAppCTA>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <form className="rounded-3xl border border-border bg-card p-7 shadow-soft md:p-10">
              <h2 className="font-display text-2xl font-bold">Send us a message</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                We typically respond within one business day.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Full name" id="name" />
                <Field label="Phone" id="phone" type="tel" />
                <div className="sm:col-span-2">
                  <Field label="Email" id="email" type="email" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="msg" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="msg"
                    rows={5}
                    placeholder="How can we help?"
                    className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/20"
                  />
                </div>
              </div>
              <button
                type="button"
                className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-all hover:bg-leaf hover:-translate-y-0.5"
              >
                Send Inquiry
              </button>
              <p className="mt-3 text-xs text-muted-foreground">
                Form submissions activate when Lovable Cloud is enabled in V2.
              </p>
            </form>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

function Field({
  label,
  id,
  type = "text",
}: {
  label: string;
  id: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="mt-2 h-12 w-full rounded-2xl border border-input bg-background px-4 text-sm outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/20"
      />
    </div>
  );
}
