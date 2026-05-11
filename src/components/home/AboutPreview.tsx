import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/common/Reveal";
import { ImageFrame } from "@/components/common/ImageFrame";
import aboutField from "@/assets/about-field.jpg";

export function AboutPreview() {
  return (
    <Section id="about-preview" labelledBy="about-preview-h">
      <Container className="grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <ImageFrame
            src={aboutField}
            alt="Farmer holding green seedling in rich soil"
            ratio="portrait"
            className="md:max-w-md"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-leaf">
            About Indian Agritech
          </p>
          <h2 id="about-preview-h" className="text-3xl font-bold md:text-5xl text-balance">
            Built on trust. <span className="text-leaf">Grown with farmers.</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            We craft scientifically engineered crop solutions that protect plants
            and improve yields — combining modern agri-science with deep respect
            for the Indian farmer.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { v: "8+", l: "Product Categories" },
              { v: "100%", l: "Quality Tested" },
              { v: "Pan-India", l: "Distribution" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-border bg-card p-4 shadow-soft"
              >
                <p className="font-display text-2xl font-bold text-primary md:text-3xl">{s.v}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-leaf hover:gap-3 transition-all"
          >
            Learn our story <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
