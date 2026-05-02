import { stats } from "@/data/products";

export default function StatsBar() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10"
          >
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              {stat.value}
              <span className="text-lg">{stat.suffix}</span>
            </div>
            <div className="text-sm text-white/50">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
