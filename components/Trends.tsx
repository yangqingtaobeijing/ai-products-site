import { trends } from "@/data/products";

export default function Trends() {
  return (
    <section id="trends" className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-3xl">📈</span>
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          关键趋势
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent ml-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trends.map((trend, i) => (
          <div
            key={trend.title}
            className="p-5 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">
                {i + 1}
              </span>
              <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                {trend.title}
              </h3>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              {trend.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
