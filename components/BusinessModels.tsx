import { businessModels } from "@/data/products";

export default function BusinessModels() {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-3xl">💡</span>
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          商业模式总结
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent ml-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {businessModels.map((bm) => (
          <div
            key={bm.model}
            className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all duration-300"
          >
            <h3 className="text-lg font-bold text-purple-300 mb-2">
              {bm.model}
            </h3>
            <p className="text-sm text-white/60 mb-3">{bm.description}</p>
            <p className="text-xs text-white/40">
              案例: <span className="text-white/60">{bm.examples}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
