export default function Home() {
  return (
    <main className="min-h-screen bg-blue-100 bg-green-200 bg-red-200">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Parul's Paintings
        </h1>
        
        <p className="text-xl text-gray-500 max-w-xl mb-8">
          Handcrafted oil and watercolour paintings available for purchase.
          Each piece is one of a kind.
        </p>
        
        <a
          href="/gallery"
          className="bg-black text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800 transition"
        >
          View Gallery
        </a>
      </section>

    </main>
  )
}