export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Competitive Gaming Trivia
          </p>
          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            Sube de rango demostrando conocimiento gamer real.
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            GamerRank combina trivia de alta velocidad, rangos, temporadas,
            ranking mundial, banco masivo de preguntas y anti-cheat server-side.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="text-xl font-bold">Ranked</h2>
            <p className="mt-2 text-slate-400">20 preguntas, LP, MMR oculto y rangos competitivos.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="text-xl font-bold">Banco brutal</h2>
            <p className="mt-2 text-slate-400">Facts y variantes para reducir repeticiones y farmeo.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="text-xl font-bold">Anti-cheat</h2>
            <p className="mt-2 text-slate-400">Tokens, tiempos de servidor y detección de anomalías.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
