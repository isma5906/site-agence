export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">
          Okla Agency 🚀
        </h1>
        <p className="text-gray-400 text-lg">
          On crée des sites modernes pour booster ton business
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-black rounded-xl">
          Nous contacter
        </button>
      </section>

      {/* SERVICES */}
      <section className="grid md:grid-cols-3 gap-8 px-10 py-20">
        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">💻 Création de site</h2>
          <p className="text-gray-400">
            Sites rapides, modernes et optimisés SEO
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">📱 Design</h2>
          <p className="text-gray-400">
            Interfaces stylées qui convertissent
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">🚀 Marketing</h2>
          <p className="text-gray-400">
            Stratégies pour attirer des clients
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4">
          Prêt à lancer ton projet ?
        </h2>
        <button className="px-6 py-3 bg-white text-black rounded-xl">
          Démarrer
        </button>
      </section>

    </main>
  );
}
