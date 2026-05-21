import { categories } from "@/content/categories";
import type { Product } from "@/content/products";
import { resolveCategorySlug } from "./categoryNormalize";

export interface SupabaseProductRow {
  id: string;
  name: string;
  slug: string;
  category: string | null;
  image: string | null;
  description: string | null;
  featured: boolean | null;
  language: string | null;
  created_at?: string | null;
}

const accentBySlug = Object.fromEntries(categories.map((c) => [c.slug, c.accent]));

export function mapSupabaseProduct(row: SupabaseProductRow): Product {
  const categorySlug = resolveCategorySlug(row.category);
  const description = row.description?.trim() || undefined;

  return {
    id: String(row.id),
    slug: row.slug?.trim() || String(row.id),
    name: row.name?.trim() || "Unnamed product",
    categorySlug,
    categoryLabel: row.category?.trim() || undefined,
    imageUrl: row.image?.trim() || undefined,
    description,
    tagline: description,
    isFeatured: Boolean(row.featured),
    accent: accentBySlug[categorySlug] ?? "leaf",
    sortOrder: row.created_at ? new Date(row.created_at).getTime() : 0,
  };
}
