export type CategoryAccent = "leaf" | "soil" | "gold" | "forest";

export interface Category {
  slug: string;
  name: string;
  shortBlurb: string;
  longBlurb: string;
  accent: CategoryAccent;
  highlights: string[];
  /** Path under /public; replace once real assets uploaded. */
  heroImage?: string;
  brochures: { src: string; alt: string; caption?: string }[];
}

export const categories: Category[] = [
  {
    slug: "sucking-pest",
    name: "Sucking Pest",
    shortBlurb: "Targeted control for aphids, thrips, whiteflies and jassids.",
    longBlurb:
      "Specialised insecticides engineered to protect your crop from sucking pests that drain plant sap and spread viral disease.",
    accent: "leaf",
    highlights: ["Fast knockdown", "Long residual", "Crop safe", "Translaminar action"],
    brochures: [],
  },
  {
    slug: "chewing-pest",
    name: "Chewing Pest",
    shortBlurb: "Strong defence against caterpillars, borers and leaf-eaters.",
    longBlurb:
      "Effective control for chewing insects that damage foliage, stems and fruit, helping farmers protect yield from larva and beetle infestations.",
    accent: "forest",
    highlights: ["Larvicidal action", "Quick paralysis", "Trusted by farmers", "Multi-crop"],
    brochures: [],
  },
  {
    slug: "sucking-and-chewing-pest",
    name: "Sucking & Chewing Pest",
    shortBlurb: "Dual-action formulations for combined pest pressure.",
    longBlurb:
      "Broad-spectrum solutions that handle both sucking and chewing pests in a single application — ideal for fields with mixed infestations.",
    accent: "soil",
    highlights: ["Dual mode", "Wide window", "Cost effective", "Resistance management"],
    brochures: [],
  },
  {
    slug: "water-solubles",
    name: "Water Solubles",
    shortBlurb: "Fully soluble nutrient blends for fertigation and foliar spray.",
    longBlurb:
      "High-purity water-soluble fertilisers designed for drip and foliar application, delivering balanced nutrition exactly when crops need it most.",
    accent: "leaf",
    highlights: ["100% soluble", "Drip & foliar", "Quick uptake", "NPK blends"],
    brochures: [],
  },
  {
    slug: "micro-nutrients",
    name: "Micro Nutrients",
    shortBlurb: "Chelated micronutrients for healthy, vigorous crops.",
    longBlurb:
      "Zinc, boron, iron and combination chelates that correct hidden hunger and unlock the full genetic yield potential of every crop.",
    accent: "gold",
    highlights: ["EDTA chelated", "Foliar grade", "Deficiency correction", "Yield boost"],
    brochures: [],
  },
  {
    slug: "granules",
    name: "Granules",
    shortBlurb: "Soil-applied granules for sustained nutrition and pest control.",
    longBlurb:
      "Easy-to-apply granular products for soil treatment, root protection and slow release of essential nutrients across the crop cycle.",
    accent: "soil",
    highlights: ["Slow release", "Soil application", "Root zone protection", "Long lasting"],
    brochures: [],
  },
  {
    slug: "plant-growth-regulators",
    name: "Plant Growth Regulators",
    shortBlurb: "Hormonal solutions for flowering, fruiting and stress recovery.",
    longBlurb:
      "Scientifically formulated PGRs that improve flowering, fruit set, uniform ripening and help crops recover from stress conditions.",
    accent: "gold",
    highlights: ["Flowering boost", "Better fruit set", "Stress relief", "Uniform growth"],
    brochures: [],
  },
  {
    slug: "fungicides",
    name: "Fungicides",
    shortBlurb: "Protect crops from blight, mildew, rust and root rot.",
    longBlurb:
      "Systemic and contact fungicides that prevent and cure fungal diseases, safeguarding both quality and yield across all major crops.",
    accent: "forest",
    highlights: ["Systemic + contact", "Preventive & curative", "Wide spectrum", "Crop safe"],
    brochures: [],
  },
];

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);
