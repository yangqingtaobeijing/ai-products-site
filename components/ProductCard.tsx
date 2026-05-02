import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/10"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
          {product.name}
        </h3>
        <span className="text-xs text-white/40 group-hover:text-white/60 transition-colors">
          →
        </span>
      </div>

      <p className="text-sm text-white/50 mb-4">
        by {product.developer}
        {product.developerTwitter && (
          <span className="ml-1 text-purple-400/70">
            @{product.developerTwitter}
          </span>
        )}
      </p>

      <p className="text-white/70 text-sm leading-relaxed mb-4">
        {product.description}
      </p>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
            {product.monetization}
          </span>
        </div>
        <p className="text-sm font-semibold text-cyan-400">
          💰 {product.revenue}
        </p>
      </div>
    </a>
  );
}
