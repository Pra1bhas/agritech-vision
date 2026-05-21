import type { CategoryAccent } from "./categories";

/**
 * Product schema is Supabase-ready.
 * Future Supabase table:
 *   products(id, slug, name, name_te, category_slug, tagline, tagline_te,
 *            description, description_te, image_url, pdf_url, dosage,
 *            usage, crops text[], highlights text[], is_featured, sort_order,
 *            created_at)
 *
 * The `getProducts` / `getProduct` functions in
 * `src/lib/products/source.ts` are the only data entry points — swap them
 * to Supabase later without touching components.
 */
export interface Product {
  id: string;
  slug: string;
  name: string;
  /** Optional Telugu name */
  name_te?: string;
  categorySlug: string;
  /** Raw category label from the database (source of truth for display). */
  categoryLabel?: string;
  tagline?: string;
  tagline_te?: string;
  description?: string;
  description_te?: string;
  /** Public image URL or undefined → placeholder rendered */
  imageUrl?: string;
  /** Brochure / PDF URL */
  pdfUrl?: string;
  dosage?: string;
  usage?: string;
  crops?: string[];
  highlights?: string[];
  accent?: CategoryAccent;
  isFeatured?: boolean;
  sortOrder?: number;
}

/** Seed data — placeholder until Supabase rows exist. */
const seed: Product[] = [
  // Sucking pest
  ...["Vajram", "Mudra", "Ascar", "Jwala", "Bazooka", "Lukka", "Power Play", "Eva", "Azaad", "PS-1", "Exomax", "Checkmate", "Rakshak", "Asura"].map(
    (n, i): Product => ({
      id: `sp-${i}`,
      slug: `sp-${n.toLowerCase().replace(/\s+/g, "-")}`,
      name: n,
      categorySlug: "sucking-pest",
      tagline: "Targeted sucking pest control",
      dosage: "250 ml per acre",
      usage: "Prevents thrips, mites, aphids, jassids, whitefly and improves growth.",
      crops: ["Chilli", "Cotton", "Citrus", "Tomato", "All crops"],
      accent: "leaf",
      isFeatured: i < 3,
      sortOrder: i,
    }),
  ),
  // Chewing pest
  ...["Brahmastra", "Dragon", "AV Gold", "Liger", "Rudhra", "Kaizer", "Transformer", "Asguard", "Temper", "Fighter", "Platinum", "Dynamite"].map(
    (n, i): Product => ({
      id: `cp-${i}`,
      slug: `cp-${n.toLowerCase().replace(/\s+/g, "-")}`,
      name: n,
      categorySlug: "chewing-pest",
      tagline: "Powerful chewing pest defence",
      dosage: "2 – 2.5 ml per litre of water",
      usage: "Controls all chewing pests across major crops.",
      crops: ["Red gram", "Bengal gram", "Maize", "Groundnut", "Vegetables"],
      accent: "forest",
      sortOrder: i,
    }),
  ),
  // Sucking & chewing
  ...["Astra Shastra", "Mantra Yantra", "Sardhar", "Star War", "Terron", "Lagaan", "5 Star", "Punch Pataka", "Trishool", "Khadgam", "Wonder", "Benfit"].map(
    (n, i): Product => ({
      id: `scp-${i}`,
      slug: `scp-${n.toLowerCase().replace(/\s+/g, "-")}`,
      name: n,
      categorySlug: "sucking-and-chewing-pest",
      tagline: "Dual-action pest immunity",
      dosage: "2 – 2.5 ml per litre of water",
      usage: "Builds plant immunity against thrips, mites, whitefly and chewing pests.",
      crops: ["Chilli", "Cotton", "Flowers", "Groundnut", "Vegetables"],
      accent: "soil",
      sortOrder: i,
    }),
  ),
  // Granules
  ...["Kia", "Safari Gold", "Vishista", "I-Power"].map((n, i): Product => ({
    id: `gr-${i}`,
    slug: `gr-${n.toLowerCase().replace(/\s+/g, "-")}`,
    name: n,
    categorySlug: "granules",
    tagline: "Soil-applied sustained nutrition",
    dosage: "4 – 10 kg per acre",
    usage: "Prevents chewing pests, enhances tillering, root development and growth.",
    crops: ["Paddy", "Chilli", "Tomato", "All crops"],
    accent: "soil",
    sortOrder: i,
  })),
  // PGRs
  ...["Magnum", "Sattva", "Florus", "Stimubi", "Humi Shakthi"].map((n, i): Product => ({
    id: `pgr-${i}`,
    slug: `pgr-${n.toLowerCase().replace(/\s+/g, "-")}`,
    name: n,
    categorySlug: "plant-growth-regulators",
    tagline: "Hormonal growth & flowering boost",
    usage: "Improves flowering, fruit set, root strength and stress recovery.",
    accent: "gold",
    sortOrder: i,
  })),
  // Fungicides
  ...["Ovitom", "Motivo"].map((n, i): Product => ({
    id: `fg-${i}`,
    slug: `fg-${n.toLowerCase().replace(/\s+/g, "-")}`,
    name: n,
    categorySlug: "fungicides",
    tagline: "Disease resistance & protection",
    dosage: "1 – 1.5 grams per litre of water",
    usage: "Improves disease resistance and tolerance to cold and drought.",
    accent: "forest",
    sortOrder: i,
  })),
  // Water solubles
  ...["Insta-19:19:19", "Insta-12:61:0", "Insta-13:0:45", "Insta-0:0:50", "Insta-0:52:34", "Insta-13:40:13"].map((n, i): Product => ({
    id: `ws-${i}`,
    slug: `ws-${n.toLowerCase().replace(/[:\s]+/g, "-")}`,
    name: n,
    categorySlug: "water-solubles",
    tagline: "100% soluble NPK fertiliser",
    usage: "High-quality water-soluble fertiliser for fertigation and foliar spray.",
    accent: "leaf",
    sortOrder: i,
  })),
  // Micro nutrients
  ...["Insta Max F4", "Insta Mag", "Insta Phal F6", "Insta Bor", "Insta Min F7", "Insta Zion"].map((n, i): Product => ({
    id: `mn-${i}`,
    slug: `mn-${n.toLowerCase().replace(/\s+/g, "-")}`,
    name: n,
    categorySlug: "micro-nutrients",
    tagline: "Chelated micronutrients",
    usage: "Corrects deficiencies and unlocks crop yield potential.",
    accent: "gold",
    sortOrder: i,
  })),
];

export const productsSeed = seed;
