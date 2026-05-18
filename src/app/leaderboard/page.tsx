const mockPlayers = [
  { rank: 1, username: "ArchivistZero", tier: "LEYENDA", lp: 812 },
  { rank: 2, username: "MetaOracle", tier: "RETADOR", lp: 721 },
  { rank: 3, username: "PixelDemon", tier: "RETADOR", lp: 690 },
];

export default function LeaderboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-50">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-black">Leaderboard mundial</h1>
        <p className="mt-3 text-slate-300">Ranking global de temporada.</p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-800">
          <table className="w-full bg-slate-900">
            <thead className="bg-slate-800 text-left text-sm uppercase tracking-wider text-slate-300">
              <tr>
                <th className="p-4">#</th>
                <th className="p-4">Jugador</th>
                <th className="p-4">Rango</th>
                <th className="p-4">LP</th>
              </tr>
            </thead>
            <tbody>
              {mockPlayers.map((player) => (
                <tr key={player.rank} className="border-t border-slate-800">
                  <td className="p-4 font-bold">{player.rank}</td>
                  <td className="p-4">{player.username}</td>
                  <td className="p-4">{player.tier}</td>
                  <td className="p-4">{player.lp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
