import { marcLouProducts } from "@/data/products";

export default function MarcLouTable() {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-3xl">📊</span>
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Marc Lou 产品矩阵
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent ml-4" />
      </div>
      <p className="text-white/60 mb-6">
        一人运营的产品组合月收入总计{" "}
        <span className="text-cyan-400 font-bold">$66.3K/月</span>（约
        $80万/年）
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-3 px-4 text-white/50 font-medium text-sm">
                产品
              </th>
              <th className="py-3 px-4 text-white/50 font-medium text-sm">
                月收入
              </th>
              <th className="py-3 px-4 text-white/50 font-medium text-sm">
                网址
              </th>
            </tr>
          </thead>
          <tbody>
            {marcLouProducts.map((p) => (
              <tr
                key={p.name}
                className="border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <td className="py-3 px-4 text-white font-medium">{p.name}</td>
                <td className="py-3 px-4 text-cyan-400 font-semibold">
                  {p.revenue}
                </td>
                <td className="py-3 px-4">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 text-sm transition-colors"
                  >
                    {p.url.replace("https://", "")}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
