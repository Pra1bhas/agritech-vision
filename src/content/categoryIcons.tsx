import type { LucideIcon } from "lucide-react";
import {
  Bug,
  Leaf,
  Layers,
  FlaskConical,
  Atom,
  CircleDot,
  Sprout,
  Shield,
} from "lucide-react";

export const categoryIconMap: Record<string, LucideIcon> = {
  "sucking-pest": Bug,
  "chewing-pest": Leaf,
  "sucking-and-chewing-pest": Layers,
  "water-solubles": FlaskConical,
  "micro-nutrients": Atom,
  granules: CircleDot,
  "plant-growth-regulators": Sprout,
  fungicides: Shield,
};

export function getCategoryIcon(slug: string): LucideIcon {
  return categoryIconMap[slug] ?? Sprout;
}
