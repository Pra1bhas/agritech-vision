import { productsSeed } from "@/content/products";
import type { Product } from "@/content/products";
import { supabase } from "@/lib/supabase";
import { mapSupabaseProduct, type SupabaseProductRow } from "./mapFromSupabase";

/** PostgREST exposes PostgreSQL table names in lowercase (`products`). */
const PRODUCTS_TABLE = "products";
let connectionVerified = false;

function logSupabaseStatus(payload: {
  ok: boolean;
  count?: number;
  error?: string;
  sample?: Pick<SupabaseProductRow, "id" | "name" | "category">[];
}) {
  if (import.meta.env.PROD) return;
  if (payload.ok) {
    console.info("[Supabase] Products connection OK", {
      count: payload.count,
      sample: payload.sample,
    });
  } else {
    console.error("[Supabase] Products fetch failed:", payload.error);
  }
}

async function fetchFromSupabase(): Promise<Product[]> {
  const { data, error } = await supabase
    .from(PRODUCTS_TABLE)
    .select("id, name, slug, category, image, description, featured, language, created_at")
    .order("created_at", { ascending: true });

  if (!connectionVerified) {
    connectionVerified = true;
    if (error) {
      logSupabaseStatus({ ok: false, error: error.message });
    } else {
      logSupabaseStatus({
        ok: true,
        count: data?.length ?? 0,
        sample: (data ?? []).slice(0, 3).map((row) => ({
          id: row.id,
          name: row.name,
          category: row.category,
        })),
      });
    }
  }

  if (error) throw new Error(error.message);
  if (!data?.length) return [];

  return (data as SupabaseProductRow[]).map(mapSupabaseProduct);
}

export class ProductsFetchError extends Error {
  constructor(
    message: string,
    readonly cause?: unknown,
  ) {
    super(message);
    this.name = "ProductsFetchError";
  }
}

/**
 * Single data-source entry point for products (Supabase-backed).
 */
export async function getProducts(): Promise<Product[]> {
  try {
    const products = await fetchFromSupabase();
    if (products.length > 0) return products;
    if (import.meta.env.DEV) {
      console.warn("[Supabase] No rows in Products table — using local seed data.");
    }
    return productsSeed;
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to load products";
    if (import.meta.env.DEV) {
      console.warn("[Supabase] Falling back to seed data:", message);
      return productsSeed;
    }
    throw new ProductsFetchError(message, err);
  }
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  const products = await getProducts();
  return products.filter((p) => p.categorySlug === categorySlug);
}

export async function getProduct(slug: string): Promise<Product | null> {
  const products = await getProducts();
  return products.find((p) => p.slug === slug) ?? null;
}

export async function searchProducts(query: string): Promise<Product[]> {
  const products = await getProducts();
  const q = query.trim().toLowerCase();
  if (!q) return products;
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.tagline?.toLowerCase().includes(q) ||
      p.description?.toLowerCase().includes(q) ||
      p.usage?.toLowerCase().includes(q) ||
      p.crops?.some((c) => c.toLowerCase().includes(q)),
  );
}

export type { Product };
