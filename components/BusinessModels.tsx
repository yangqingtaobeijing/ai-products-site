import { businessModels } from "@/data/products";

export default function BusinessModels() {
  return (
    <section id="business" className="mb-20">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">商业模式</h2>
        <p className="text-sm text-zinc-500">
          个人开发者最常用的 6 种变现方式
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {businessModels.map((bm) => (
          <div
            key={bm.model}
            className="group p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-10 rounded-lg bg-white/[0.04] flex items-center justify-center text-lg">
                {bm.icon}
              </span>
              <h3 className="text-base font-semibold text-white">
                {bm.model}
              </h3>
            </div>
            <p className="text-sm text-zinc-400 mb-3 leading-relaxed">
              {bm.description}
            </p>
            <p className="text-xs text-zinc-600">
              {bm.examples}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
