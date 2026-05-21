import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/common/Reveal";
import { ImageFrame } from "@/components/common/ImageFrame";
import { Quote } from "lucide-react";
import { site } from "@/content/site";
import { useT } from "@/i18n/LanguageProvider";

export function ChairmanMessage() {
  const { t } = useT();
  return (
    <Section id="chairman" labelledBy="chairman-h">
      <Container className="grid items-center gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <div className="grid grid-cols-2 gap-6">
            <ImageFrame
              alt="Chairman P. Ashok image placeholder"
              ratio="portrait"
              className="w-full"
              label="P. Ashok"
            />
            <ImageFrame
              alt="Managing Director D. Sandeep image placeholder"
              ratio="portrait"
              className="w-full"
              label="D. Sandeep"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-7">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-leaf">
            {t.chairman.eyebrow}
          </p>
          <h2 id="chairman-h" className="text-3xl font-bold md:text-5xl text-balance">
            {t.chairman.title}
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg md:leading-[1.85]">
            <p className="flex gap-3">
              <Quote className="mt-1 h-5 w-5 shrink-0 text-leaf" />
              <span>{t.chairman.body1}</span>
            </p>
            <p>{t.chairman.body2}</p>
          </div>
          <div className="mt-10 border-t border-border pt-6">
            <p className="font-display text-lg font-bold">{site.associate}</p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
