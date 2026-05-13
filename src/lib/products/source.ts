import { productsSeed } from "@/content/products";
import type { Product } from "@/content/products";

/**
 * Single data-source entry point for products.
 * Swap the body of these functions with Supabase queries later — the rest of
 * the app already calls them through this module.
 *
 * Example future implementation:
 *
 *   import { supabase } from "@/integrations/supabase/client";
 *   export async function getProducts() {
 *     const { data, error } = await supabase
 *       .from("products")
 *       .select("*")
 *       .order("sort_order");
 *     if (error) throw error;
 *     return data as Product[];
 *   }
 */
export async function getProducts(): Promise<Product[]> {
  return productsSeed;
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  return productsSeed.filter((p) => p.categorySlug === categorySlug);
}

export async function getProduct(slug: string): Promise<Product | null> {
  return productsSeed.find((p) => p.slug === slug) ?? null;
}

export async function searchProducts(query: string): Promise<Product[]> {
  const q = query.trim().toLowerCase();
  if (!q) return productsSeed;
  return productsSeed.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.tagline?.toLowerCase().includes(q) ||
      p.usage?.toLowerCase().includes(q) ||
      p.crops?.some((c) => c.toLowerCase().includes(q)),
  );
}

export type { Product };
