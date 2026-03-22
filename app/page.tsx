import Link from 'next/link'
import { paintings } from '@/lib/paintings'

export default function Home() {
  const featured = paintings.filter(p => p.favourite).slice(0, 3)

  return (
    <main>

      {/* Hero */}
      <section style={{ backgroundColor: 'var(--pink)' }} className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-24 relative overflow-hidden">
        
        {/* Decorative blobs */}
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-30" style={{ backgroundColor: 'var(--yellow)' }} />
        <div className="absolute bottom-16 right-16 w-48 h-48 rounded-full opacity-20" style={{ backgroundColor: 'var(--green)' }} />
        
        <div className="relative z-10 flex flex-col items-center">
          <div style={{ backgroundColor: 'var(--green-light)' }} className="rounded-3xl px-12 py-8 mb-8 shadow-lg border-2 border-black">
            <h1 className="text-6xl md:text-8xl font-bold" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              Parul's Paintings
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-white font-semibold max-w-2xl mb-4 drop-shadow">
            A 15-year-old collection of abstract artwork for you to admire and purchase.
          </p>
          <p className="text-white/80 text-lg mb-10 italic">
            Every piece is one of a kind — once it's gone, it's gone.
          </p>

          <div className="flex gap-4 flex-wrap justify-center">
            <Link
              href="/gallery"
              style={{ backgroundColor: 'var(--green-light)', fontFamily: 'Fredoka, sans-serif' }}
              className="text-black text-xl font-semibold px-10 py-4 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              View Gallery
            </Link>
            <Link
              href="/collections"
              style={{ backgroundColor: 'var(--yellow)', fontFamily: 'Fredoka, sans-serif' }}
              className="text-black text-xl font-semibold px-10 py-4 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              Browse Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Paintings */}
      {featured.length > 0 && (
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>
            ✨ Featured Pieces
          </h2>
          <p className="text-center text-gray-500 mb-12">Parul's personal favourites from the collection</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {featured.map(p => (
              <Link href={`/gallery/${p.id}`} key={p.id}>
                <div className="group rounded-2xl overflow-hidden border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                  <div className="bg-gray-100 aspect-square overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                  </div>
                  <div style={{ backgroundColor: 'var(--yellow)' }} className="p-4">
                    <h3 className="font-bold text-lg" style={{ fontFamily: 'Fredoka, sans-serif' }}>{p.title}</h3>
                    <p className="text-gray-600 text-sm">{p.medium}</p>
                    <p className="font-bold mt-1">${p.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Why Original Art */}
      <section style={{ backgroundColor: 'var(--pink)' }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white" style={{ fontFamily: 'Fredoka, sans-serif' }}>
            Why buy original art?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { emoji: '🎨', title: 'Truly Unique', desc: 'No prints. No copies. Every painting is the only one in existence.' },
              { emoji: '💛', title: 'Made With Love', desc: 'Each piece took hours of care, thought, and passion to create.' },
              { emoji: '🏡', title: 'Bring Life to Your Space', desc: 'Original art transforms a room in a way nothing else can.' },
            ].map(item => (
              <div key={item.title} style={{ backgroundColor: 'var(--white)' }} className="rounded-2xl p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-xl mb-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Strip */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>Follow Along</h2>
        <p className="text-gray-500 mb-6">See new paintings, works in progress, and behind-the-scenes on Instagram</p>
        
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: 'var(--pink)', fontFamily: 'Fredoka, sans-serif' }}
          className="inline-block text-black font-semibold text-lg px-8 py-3 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
        >
          @parulspaintings →
        </a>
      </section>

    </main>
  )
}