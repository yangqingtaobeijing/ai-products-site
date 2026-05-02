export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-grid">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs text-zinc-400 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          2025 个人开发者 AI 产品案例研究
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="text-white">AI Web Coding</span>
          <br />
          <span className="text-gradient">产品案例汇总</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          深入分析 14+ 个由个人开发者用 AI 编程工具打造的商业化 Web 产品。
          <br className="hidden md:block" />
          从零到百万美元，探索「一人公司」的真实路径。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            className="px-8 py-3.5 rounded-lg bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors"
          >
            浏览产品案例
          </a>
          <a
            href="#business"
            className="px-8 py-3.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white font-medium text-sm hover:bg-white/[0.06] transition-colors"
          >
            查看商业模式
          </a>
        </div>
      </div>
    </section>
  );
}
