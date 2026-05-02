import type { Category } from "@/data/products";
import ProductCard from "./ProductCard";

export default function CategorySection({ category }: { category: Category }) {
  return (
    <section className="mb-20">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">{category.title}</h2>
        <p className="text-sm text-zinc-500">{category.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
}
