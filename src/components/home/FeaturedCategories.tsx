import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { categories } from "@/content/categories";
import { cn } from "@/lib/utils";

const accentMap: Record<string, string> = {
  leaf: "from-leaf/90 to-primary",
  forest: "from-primary to-primary/80",
  soil: "from-soil to-soil/80",
  gold: "from-accent to-leaf",
};

export function FeaturedCategories() {
  return (
    <Section id="categories" labelledBy="categories-h">
      <Container>
        <SectionHeading
          eyebrow="Our Solutions"
          id="categories-h"
          title="Featured Product Categories"
          description="A complete portfolio for crop protection, plant nutrition and growth — built for every season."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 4) * 0.06}>
              <Link
                to="/products/$category"
                params={{ category: c.slug }}
                className="group relative block overflow-hidden rounded-3xl shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
              >
                <div
                  className={cn(
                    "aspect-[4/5] bg-gradient-to-br p-5 text-primary-foreground",
                    accentMap[c.accent],
                  )}
                >
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
                        Category {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-3 font-display text-xl font-bold leading-tight md:text-2xl">
                        {c.name}
                      </h3>
                    </div>
                    <div className="flex items-end justify-between">
                      <p className="max-w-[14rem] text-xs text-primary-foreground/80 md:text-sm">
                        {c.shortBlurb}
                      </p>
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-primary-foreground/15 backdrop-blur transition-all group-hover:bg-primary-foreground/30">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
