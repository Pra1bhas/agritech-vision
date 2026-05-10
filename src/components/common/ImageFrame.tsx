import { cn } from "@/lib/utils";

interface ImageFrameProps {
  src?: string;
  alt: string;
  ratio?: "square" | "video" | "portrait" | "wide";
  className?: string;
  rounded?: string;
  /** Optional placeholder label when no src */
  label?: string;
}

const ratioMap: Record<NonNullable<ImageFrameProps["ratio"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/9]",
};

export function ImageFrame({
  src,
  alt,
  ratio = "video",
  className,
  rounded = "rounded-2xl",
  label,
}: ImageFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-leaf shadow-soft",
        ratioMap[ratio],
        rounded,
        className,
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
      ) : (
        <div className="leaf-pattern absolute inset-0 flex items-center justify-center">
          <div className="text-center text-primary-foreground/80">
            <div className="mx-auto mb-2 h-10 w-10 rounded-full border-2 border-primary-foreground/40" />
            <p className="text-xs font-medium uppercase tracking-widest">
              {label ?? alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
