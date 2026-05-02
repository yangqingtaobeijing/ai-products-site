import { marcLouProducts } from "@/data/products";

export default function MarcLouTable() {
  const total = 66335;

  return (
    <section className="mb-20">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">
          Marc Lou 产品矩阵
        </h2>
        <p className="text-sm text-zinc-500">
          一人运营 8 个产品，月收入总计{" "}
          <span className="text-emerald-400 font-medium">$66,335</span>（约
          $80万/年）
        </p>
      </div>

      <div className="rounded-xl border border-white/[0.06] overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-white/[0.02]">
              <th className="py-3 px-5 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                产品
              </th>
              <th className="py-3 px-5 text-xs font-medium text-zinc-500 uppercase tracking-wider text-right">
                月收入
              </th>
              <th className="py-3 px-5 text-xs font-medium text-zinc-500 uppercase tracking-wider text-right hidden md:table-cell">
                占比
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.04]">
            {marcLouProducts.map((p) => {
              const revenueNum =
                parseInt(p.revenue.replace(/[$,]/g, "")) || 0;
              const pct = ((revenueNum / total) * 100).toFixed(1);
              return (
                <tr
                  key={p.name}
                  className="hover:bg-white/[0.02] transition-colors"
                >
                  <td className="py-3.5 px-5">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white hover:text-indigo-400 transition-colors font-medium"
                    >
                      {p.name}
                    </a>
                  </td>
                  <td className="py-3.5 px-5 text-right">
                    <span className="text-sm font-semibold text-emerald-400">
                      {p.revenue}
                    </span>
                  </td>
                  <td className="py-3.5 px-5 text-right hidden md:table-cell">
                    <div className="flex items-center justify-end gap-3">
                      <div className="w-20 h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="text-xs text-zinc-500 w-10 text-right">
                        {pct}%
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
