import { tools, developers } from "@/data/products";

export default function ToolsAndDevs() {
  return (
    <section id="tools" className="mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Tools */}
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              常用 AI 编程工具
            </h2>
            <p className="text-sm text-zinc-500">Vibe Coding 工具栈</p>
          </div>
          <div className="space-y-2">
            {tools.map((tool) => (
              <div
                key={tool.category}
                className="flex items-center gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/[0.06]"
              >
                <span className="text-xs font-medium text-zinc-500 w-28 flex-shrink-0">
                  {tool.category}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {tool.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Developers */}
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              推荐关注的开发者
            </h2>
            <p className="text-sm text-zinc-500">
              #buildinpublic 代表人物
            </p>
          </div>
          <div className="space-y-2">
            {developers.map((dev) => (
              <a
                key={dev.name}
                href={dev.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {dev.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-white group-hover:text-indigo-400 transition-colors">
                      {dev.name}
                    </span>
                    <span className="text-xs text-zinc-600">{dev.handle}</span>
                  </div>
                  <p className="text-xs text-zinc-500 truncate">
                    {dev.products}
                  </p>
                </div>
                <span className="text-xs text-emerald-400/80 font-medium flex-shrink-0">
                  {dev.revenue}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
