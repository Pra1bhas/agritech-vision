export const site = {
  name: "Indian Agritech",
  tagline: "Modern Crop Solutions for Indian Farmers",
  description:
    "Indian Agritech delivers premium crop protection, plant nutrition and growth solutions trusted by farmers, dealers and distributors across India.",
  url: "https://indianagritech.lovable.app",
  phone: "+91 7997669504",
  phoneRaw: "+917997669504",
  whatsappRaw: "917997669504",
  email: "indianagritech20@gmail.com",
  chairman: "MD Sir D. Sandeep",
  associate: "P. Ashok",
  address: {
    line1: "Plot No: 141 & 142, South part",
    line2: "Near Bus Stop, Pasumamula (V)",
    line3: "Abdullapurmet (M), Rangareddy (D)",
    region: "Telangana - 501505",
    country: "India",
  },
} as const;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsappRaw}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;
