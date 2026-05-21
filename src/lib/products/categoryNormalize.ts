import { categories } from "@/content/categories";

/** Maps messy DB category labels to site category slugs. */
const CATEGORY_ALIASES: Record<string, string> = {
  "sucking pest": "sucking-pest",
  "sucking pests": "sucking-pest",
  "chewing pest": "chewing-pest",
  "chewing pests": "chewing-pest",
  "sucking & chewing pest": "sucking-and-chewing-pest",
  "sucking and chewing pest": "sucking-and-chewing-pest",
  "sucking & chewing": "sucking-and-chewing-pest",
  "sucking and chewing": "sucking-and-chewing-pest",
  "water solubles": "water-solubles",
  "water soluble": "water-solubles",
  "water-soluble": "water-solubles",
  "micro nutrients": "micro-nutrients",
  "micronutrients": "micro-nutrients",
  "micro-nutrient": "micro-nutrients",
  granules: "granules",
  "plant growth regulators": "plant-growth-regulators",
  "plant growth regulator": "plant-growth-regulators",
  pgr: "plant-growth-regulators",
  pgrs: "plant-growth-regulators",
  fungicide: "fungicides",
  fungicides: "fungicides",
};

function normalizeKey(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const slugByNormalizedName = new Map(
  categories.map((c) => [normalizeKey(c.name), c.slug]),
);

/**
 * Resolve a database category string to a known category slug.
 * Database values are the source of truth for display names; slugs drive layout.
 */
export function resolveCategorySlug(rawCategory: string | null | undefined): string {
  if (!rawCategory?.trim()) return "uncategorized";

  const key = normalizeKey(rawCategory);
  if (CATEGORY_ALIASES[key]) return CATEGORY_ALIASES[key];
  if (slugByNormalizedName.has(key)) return slugByNormalizedName.get(key)!;

  for (const [alias, slug] of Object.entries(CATEGORY_ALIASES)) {
    if (key.includes(alias) || alias.includes(key)) return slug;
  }

  for (const cat of categories) {
    const catKey = normalizeKey(cat.name);
    if (key.includes(catKey) || catKey.includes(key)) return cat.slug;
  }

  return key.replace(/\s+/g, "-");
}
