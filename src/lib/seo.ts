import { site } from "@/content/site";

export interface MetaInput {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export const buildMeta = ({ title, description, path = "/", image }: MetaInput) => {
  const fullTitle = title.includes(site.name) ? title : `${title} — ${site.name}`;
  const url = `${site.url}${path}`;
  const og = image ?? `${site.url}/og-default.jpg`;
  return [
    { title: fullTitle },
    { name: "description", content: description },
    { name: "author", content: site.name },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: og },
    { property: "og:site_name", content: site.name },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: og },
  ];
};
