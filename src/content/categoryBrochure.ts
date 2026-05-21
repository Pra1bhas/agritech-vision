export interface CategoryBrochureExtra {
  title: string;
  dosage?: string;
  usage?: string;
  crops?: string;
}

export interface CategoryBrochure {
  dosage?: string;
  usage?: string;
  crops?: string;
  extras?: CategoryBrochureExtra[];
  /** Product-specific notes shown under the category block (e.g. Motivo under Fungicide). */
  productNotes?: CategoryBrochureExtra[];
}

/** Brochure-style info shown below each category section on the products page. */
export const categoryBrochure: Record<string, CategoryBrochure> = {
  "sucking-pest": {
    dosage: "250ml per Acre.",
    usage:
      "Prevents from Trips, mites, Aphids, Jassides, white fly and improves growth.",
    crops: "Chilli, Cotton, Citrus, Tomato and All crops.",
  },
  "chewing-pest": {
    dosage: "2-2.5 ml per one litre of water.",
    usage: "Controls all chewing pests.",
    crops: "Red gram, Bengal gram, maize, ground nut, flower and all Vegetable crops.",
  },
  "sucking-and-chewing-pest": {
    dosage: "2 - 2.5 ml per one litre of water.",
    usage:
      "Provides immunity for plants to fight against Thrips, mites, white fly and chewing pest and also provide healthy vegetative and reproductive growth in plants.",
    crops: "Chilli, Cotton, Flowers, Groundnut and all other Vegetable crops.",
  },
  granules: {
    dosage: "4kg per Acre.",
    usage:
      "Helps in preventing all types of chewing pest, enhances productive tillering & growth.",
    crops: "Chilli, Cotton, Citrus, Tomato and All crops.",
    extras: [
      {
        title: "Vishista",
        dosage: "4 kg per one acre.",
        usage:
          "Helps in preventing all types of chewing pest, enhances productive tillering & growth.",
        crops: "Paddy, Chilli, Tomato",
      },
      {
        title: "I-Power",
        dosage: "10 kg per one Acre.",
        usage: "Helps in root development and plant growth.",
        crops: "all crops.",
      },
    ],
  },
  fungicides: {
    productNotes: [
      {
        title: "Motivo",
        dosage: "1-1.5 Grams per litre of water.",
        usage:
          "Improves disease resistance ability of the plant. Improves plant ability against cold and drought resistant situations.",
      },
    ],
  },
};
