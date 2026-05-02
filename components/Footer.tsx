export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">AI</span>
            </div>
            <span className="text-sm text-zinc-500">
              AI Web Coding 产品案例汇总 · 2025
            </span>
          </div>
          <p className="text-xs text-zinc-600">
            数据来源于公开信息，收入数字为开发者自报或第三方估算
          </p>
        </div>
      </div>
    </footer>
  );
}
