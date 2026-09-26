import Image from "next/image";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import {
  shots,
  SOURCE_HEIGHT,
  SOURCE_WIDTH,
  type Crop,
  type ShotKey,
} from "@/lib/screens";

type ShotTheme = "auto" | "light" | "dark";

interface ProductShotProps {
  shot: ShotKey;
  alt: string;
  /** Rendered width of the cropped region, e.g. "(min-width: 1024px) 640px, 100vw". */
  sizes: string;
  theme?: ShotTheme;
  priority?: boolean;
  className?: string;
}

function cropStyle(crop: Crop) {
  return {
    position: "absolute" as const,
    maxWidth: "none",
    width: `${100 / crop.w}%`,
    height: "auto",
    left: `${(-crop.x / crop.w) * 100}%`,
    top: `${(-crop.y / crop.h) * 100}%`,
  };
}

function aspectOf(crop: Crop) {
  return `${crop.w * SOURCE_WIDTH} / ${crop.h * SOURCE_HEIGHT}`;
}

/** Scales the requested region width up to the full source width for srcset. */
function sourceSizes(sizes: string, crop: Crop) {
  const factor = 1 / crop.w;
  return sizes.replace(/(\d+(?:\.\d+)?)(px|vw)/g, (match, value, unit, offset, whole) => {
    const precededByQuery = whole.slice(0, offset).lastIndexOf("(") > whole.slice(0, offset).lastIndexOf(")");
    if (precededByQuery) return match;
    return `${Math.round(Number(value) * factor)}${unit}`;
  });
}

function ShotImage({
  screen,
  variant,
  crop,
  alt,
  sizes,
  priority,
  className,
}: {
  screen: string;
  variant: "light" | "dark";
  crop: Crop;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={`/screenshots/${variant}/${screen}.webp`}
      alt={alt}
      width={SOURCE_WIDTH}
      height={SOURCE_HEIGHT}
      sizes={sourceSizes(sizes, crop)}
      priority={priority}
      className={className}
      style={cropStyle(crop)}
    />
  );
}

/** A cropped region of a real app screenshot, matched to the site theme. */
export function ProductShot({
  shot,
  alt,
  sizes,
  theme = "auto",
  priority,
  className,
}: ProductShotProps) {
  const { screen, crop } = shots[shot];

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      style={{ aspectRatio: aspectOf(crop) }}
    >
      {theme === "auto" ? (
        <>
          <ShotImage screen={screen} variant="light" crop={crop} alt={alt} sizes={sizes} priority={priority} className="dark:hidden" />
          <ShotImage screen={screen} variant="dark" crop={crop} alt={alt} sizes={sizes} priority={priority} className="hidden dark:block" />
        </>
      ) : (
        <ShotImage screen={screen} variant={theme} crop={crop} alt={alt} sizes={sizes} priority={priority} />
      )}
    </div>
  );
}

interface AppWindowProps extends ProductShotProps {
  /** Overrides the screen name shown in the title bar. */
  title?: string;
  frameClassName?: string;
  compact?: boolean;
  /** Keeps small crops from being enlarged past a crisp size. */
  capToSource?: boolean;
}

/** Screenshots are captured at a high pixel density; this shows them near their natural UI size. */
const NATURAL_SCALE = 0.72;

/** Neutral desktop window chrome around a product shot. */
export function AppWindow({
  title,
  frameClassName,
  compact,
  capToSource,
  theme = "auto",
  ...shotProps
}: AppWindowProps) {
  const t = useTranslations("screens");
  const { screen, crop } = shots[shotProps.shot];
  const maxWidth = capToSource ? Math.round(crop.w * SOURCE_WIDTH * NATURAL_SCALE) : undefined;
  const forcedDark = theme === "dark";
  const forcedLight = theme === "light";

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-xl border",
        forcedDark
          ? "border-scene-border bg-scene"
          : forcedLight
            ? "border-black/10 bg-white"
            : "border-border/80 bg-card",
        frameClassName
      )}
      style={maxWidth ? { maxWidth } : undefined}
    >
      <figcaption
        className={cn(
          "flex items-center gap-2 border-b",
          compact ? "h-7 px-3" : "h-9 px-4",
          forcedDark
            ? "border-white/10 text-white/60"
            : forcedLight
              ? "border-black/10 text-black/55"
              : "border-border/70 text-muted-foreground"
        )}
      >
        <span className="flex gap-1.5" aria-hidden="true">
          {[0, 1, 2].map((dot) => (
            <span
              key={dot}
              className={cn(
                "rounded-full",
                compact ? "size-2" : "size-2.5",
                forcedDark ? "bg-white/15" : forcedLight ? "bg-black/12" : "bg-foreground/12"
              )}
            />
          ))}
        </span>
        <span className={cn("font-medium", compact ? "ml-1 text-[11px]" : "ml-2 text-xs")}>
          {title ?? t(screen)}
        </span>
      </figcaption>
      <ProductShot theme={theme} {...shotProps} />
    </figure>
  );
}
