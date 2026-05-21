import { useEffect, useRef } from "react";
import { initHeroParticleCanvas } from "@/lib/heroParticleCanvas";

type HeroParticleBackgroundProps = {
  sectionRef: React.RefObject<HTMLElement | null>;
};

export function HeroParticleBackground({ sectionRef }: HeroParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    return initHeroParticleCanvas(canvas, section);
  }, [sectionRef]);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      />
      <div aria-hidden className="hero-vignette pointer-events-none absolute inset-0 z-[1]" />
    </>
  );
}
