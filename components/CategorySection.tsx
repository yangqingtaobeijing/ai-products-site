import type { Category } from "@/data/products";
import ProductCard from "./ProductCard";

export default function CategorySection({ category }: { category: Category }) {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-3xl">{category.icon}</span>
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          {category.title}
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent ml-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
}
