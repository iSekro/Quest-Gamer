export default function RankedPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-50">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-black">Ranked</h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          Partida competitiva de 20 preguntas. El score, LP y MMR se calculan en servidor.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Rango actual</p>
          <h2 className="mt-2 text-3xl font-bold">Recluta IV — 0 LP</h2>
          <button className="mt-6 rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950">
            Iniciar ranked
          </button>
        </div>
      </section>
    </main>
  );
}
