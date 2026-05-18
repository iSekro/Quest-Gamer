export default function AdminQuestionsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-50">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-black">Admin — Preguntas</h1>
        <p className="mt-3 text-slate-300">
          Panel para crear, revisar, aprobar y publicar preguntas.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-slate-300">
            Próxima tarea de Codex: conectar esta vista a Prisma y crear CRUD real.
          </p>
        </div>
      </section>
    </main>
  );
}
