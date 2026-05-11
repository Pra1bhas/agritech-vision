import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/common/Reveal";
import { ImageFrame } from "@/components/common/ImageFrame";
import { Quote } from "lucide-react";
import { site } from "@/content/site";
import chairmanImg from "@/assets/chairman.jpg";

export function ChairmanMessage() {
  return (
    <Section id="chairman" labelledBy="chairman-h">
      <Container className="grid items-center gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <div className="relative">
            <ImageFrame
              src={chairmanImg}
              alt={`Portrait of ${site.chairman}, Chairman, Indian Agritech`}
              ratio="portrait"
              className="md:max-w-sm"
            />
            <div className="absolute -bottom-5 -right-3 hidden rounded-2xl border border-border bg-card px-5 py-3 shadow-elevated md:block">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Chairman
              </p>
              <p className="font-display text-base font-bold">{site.chairman}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-7">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-leaf">
            Chairman's Message
          </p>
          <h2 id="chairman-h" className="text-3xl font-bold md:text-5xl text-balance">
            "Our purpose is the prosperity of every Indian farmer."
          </h2>
          <div className="mt-6 space-y-4 text-base text-muted-foreground md:text-lg">
            <p className="flex gap-3">
              <Quote className="mt-1 h-5 w-5 shrink-0 text-leaf" />
              <span>
                At Indian Agritech we don't just deliver products — we deliver
                trust. Every formulation we create is designed to make farming
                simpler, safer and more rewarding.
              </span>
            </p>
            <p>
              We will continue to invest in modern science, honest partnerships
              and on-ground support — so that our farmers and dealers always
              have a brand they can rely on.
            </p>
          </div>
          <div className="mt-8 border-t border-border pt-5">
            <p className="font-display text-lg font-bold">{site.chairman}</p>
            <p className="text-sm text-muted-foreground">Chairman, {site.name}</p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
