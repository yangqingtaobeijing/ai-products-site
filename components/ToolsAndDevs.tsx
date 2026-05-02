import { tools, developers } from "@/data/products";

export default function ToolsAndDevs() {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Tools */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">⚙️</span>
            <h2 className="text-xl md:text-2xl font-bold text-white">
              常用 AI 编程工具
            </h2>
          </div>
          <div className="space-y-3">
            {tools.map((tool) => (
              <div
                key={tool.category}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <span className="text-sm font-semibold text-purple-300 min-w-[120px]">
                  {tool.category}
                </span>
                <span className="text-sm text-white/60">{tool.items}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Developers */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">👤</span>
            <h2 className="text-xl md:text-2xl font-bold text-white">
              推荐关注的开发者
            </h2>
          </div>
          <div className="space-y-3">
            {developers.map((dev) => (
              <a
                key={dev.name}
                href={`https://twitter.com/${dev.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                  {dev.name[0]}
                </div>
                <div>
                  <div className="text-white font-medium group-hover:text-cyan-300 transition-colors">
                    {dev.name}
                  </div>
                  <div className="text-xs text-white/40">
                    @{dev.twitter} · {dev.products}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
