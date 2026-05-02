import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] card-hover"
    >
      <div className="flex items-start gap-4 mb-4">
        <img
          src={product.logo}
          alt={product.name}
          className="w-10 h-10 rounded-lg logo-img flex-shrink-0"
          loading="lazy"
        />
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-white group-hover:text-indigo-400 transition-colors truncate">
            {product.name}
          </h3>
          <p className="text-xs text-zinc-500 truncate">
            {product.developer}
            {product.developerTwitter && (
              <span className="text-zinc-600 ml-1">
                @{product.developerTwitter}
              </span>
            )}
          </p>
        </div>
      </div>

      <p className="text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-2">
        {product.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {product.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] text-zinc-500 border border-white/[0.06]"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-sm font-semibold text-emerald-400">
          {product.revenue}
        </span>
      </div>
    </a>
  );
}
