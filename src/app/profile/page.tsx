export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-50">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-black">Perfil</h1>
        <p className="mt-3 text-slate-300">Estadísticas competitivas del jugador.</p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-400">Rango</p>
            <p className="mt-2 text-2xl font-bold">Recluta IV</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-400">Precisión</p>
            <p className="mt-2 text-2xl font-bold">0%</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-400">Integridad</p>
            <p className="mt-2 text-2xl font-bold">100</p>
          </div>
        </div>
      </section>
    </main>
  );
}
