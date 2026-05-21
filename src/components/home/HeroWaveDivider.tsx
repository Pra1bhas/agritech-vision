/** Layered SVG wave divider — pure CSS animation, no JS */

const WAVE_PATH =
  "M0,72 C200,108 400,36 600,72 C800,108 1000,36 1200,72 C1400,108 1600,36 1800,72 C2000,108 2200,36 2400,72 L2400,120 L0,120 Z";

function WaveLayer({
  layer,
  fill,
  opacity,
}: {
  layer: 1 | 2 | 3;
  fill: string;
  opacity: number;
}) {
  const bobClass = layer === 2 ? " hero-wave-layer--bob" : "";

  return (
    <div
      className={`hero-wave-layer hero-wave-layer--${layer}${bobClass}`}
      style={{ opacity }}
      aria-hidden
    >
      <div className={`hero-wave-track hero-wave-track--${layer}`}>
        <svg
          className="hero-wave-svg"
          viewBox="0 0 2400 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={WAVE_PATH} fill={fill} />
        </svg>
      </div>
    </div>
  );
}

function SeedIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 20"
      width="14"
      height="18"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="8" cy="12" rx="4" ry="6" fill="currentColor" opacity="0.85" />
      <path
        d="M8 2 C5 6 5 10 8 12 C11 10 11 6 8 2Z"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
  );
}

function LeafIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 18 18"
      width="16"
      height="16"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 2 C4 6 3 11 9 16 C15 11 14 6 9 2Z"
        fill="currentColor"
        opacity="0.8"
      />
      <path
        d="M9 5 L9 14"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

const FLOATING_ICONS = [
  { type: "leaf" as const, className: "hero-wave-float hero-wave-float--1" },
  { type: "seed" as const, className: "hero-wave-float hero-wave-float--2" },
  { type: "leaf" as const, className: "hero-wave-float hero-wave-float--3" },
  { type: "seed" as const, className: "hero-wave-float hero-wave-float--4" },
  { type: "leaf" as const, className: "hero-wave-float hero-wave-float--5" },
];

export function HeroWaveDivider() {
  return (
    <div className="hero-waves" aria-hidden>
      <div className="hero-waves__floats">
        {FLOATING_ICONS.map((icon, i) =>
          icon.type === "leaf" ? (
            <LeafIcon key={i} className={icon.className} />
          ) : (
            <SeedIcon key={i} className={icon.className} />
          ),
        )}
      </div>
      <WaveLayer layer={1} fill="#013220" opacity={0.55} />
      <WaveLayer layer={2} fill="#013220" opacity={0.82} />
      <WaveLayer layer={3} fill="#013220" opacity={1} />
    </div>
  );
}
