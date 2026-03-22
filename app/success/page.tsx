import Link from 'next/link'

export default function Success() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ backgroundColor: '#fffef7' }}>
      <div className="rounded-3xl border-2 border-black p-12 max-w-md shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
        style={{ backgroundColor: '#dcfce7' }}>
        <div className="text-6xl mb-4">🎨</div>
        <h1 className="text-4xl font-bold mb-3">Thank you!</h1>
        <p className="text-gray-600 mb-8">
          Your painting is on its way. Parul will be in touch shortly about shipping.
        </p>
        <Link href="/gallery"
          className="inline-block font-bold text-lg px-8 py-3 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          style={{ backgroundColor: '#f9a8c9' }}>
          Back to Gallery
        </Link>
      </div>
    </main>
  )
}