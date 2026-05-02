import { trends } from "@/data/products";

export default function Trends() {
  return (
    <section id="trends" className="mb-20">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">关键趋势</h2>
        <p className="text-sm text-zinc-500">2025 年个人开发者 AI 产品的核心趋势</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {trends.map((trend) => (
          <div
            key={trend.number}
            className="group p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-300"
          >
            <span className="text-xs font-mono text-indigo-400/60 mb-3 block">
              {trend.number}
            </span>
            <h3 className="text-base font-semibold text-white mb-2">
              {trend.title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {trend.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
