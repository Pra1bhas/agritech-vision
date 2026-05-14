import { cn } from "@/lib/utils";

/**
 * Premium layered grass-hill divider.
 * Sits flush at the bottom of a section, full-bleed, responsive.
 */
export function GrassDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-x-0 bottom-0 w-full overflow-hidden leading-[0]",
        className,
      )}
    >
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className="block h-[90px] w-full md:h-[140px]"
      >
        <defs>
          <linearGradient id="grassBack" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#0b7a43" />
            <stop offset="100%" stopColor="#085c33" />
          </linearGradient>
          <linearGradient id="grassFront" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#8dc63f" />
            <stop offset="100%" stopColor="#6fae2c" />
          </linearGradient>
        </defs>

        {/* Back hill - dark green */}
        <path
          d="M0,90 C220,30 380,140 620,80 C880,20 1080,120 1260,70 C1340,48 1400,55 1440,65 L1440,160 L0,160 Z"
          fill="url(#grassBack)"
          opacity="0.95"
          className="origin-bottom animate-hill-drift-slow"
        />
        {/* Front hill - fresh grass green */}
        <path
          d="M0,120 C200,80 360,160 600,115 C860,70 1060,150 1280,110 C1360,96 1410,108 1440,112 L1440,160 L0,160 Z"
          fill="url(#grassFront)"
          className="origin-bottom animate-hill-drift drop-shadow-[0_-6px_12px_rgba(11,122,67,0.25)]"
        />
      </svg>
    </div>
  );
}
