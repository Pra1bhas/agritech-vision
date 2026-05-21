import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { getCategory } from "@/content/categories";

/** Legacy category URLs → main products page with category filter */
export const Route = createFileRoute("/products/$category")({
  beforeLoad: ({ params }) => {
    const cat = getCategory(params.category);
    if (!cat) throw notFound();
    throw redirect({
      to: "/products",
      search: { category: cat.slug },
      hash: "products-grid",
    });
  },
});
