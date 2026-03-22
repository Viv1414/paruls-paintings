import BuyButton from '@/app/components/BuyButton'
import { paintings } from '@/lib/paintings'

type Props = { params: Promise<{ id: string }> }

export default async function PaintingPage({ params }: Props) {
  const { id } = await params
  const painting = paintings.find(p => p.id === id)
  
  if (!painting) return <p className="p-20 text-center text-gray-400 text-xl">Painting not found.</p>

  return (
    <main className="min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* Image */}
        <div className="rounded-2xl overflow-hidden border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] aspect-square bg-gray-100">
          <img src={painting.image} alt={painting.title} className="w-full h-full object-cover" />
        </div>

        {/* Details */}
        <div>
          {painting.favourite && (
            <span className="inline-block text-sm font-bold px-4 py-1 rounded-full border-2 border-black mb-4" style={{ backgroundColor: 'var(--pink)' }}>
              ⭐ Parul's Favourite
            </span>
          )}

          <h1 className="text-4xl font-bold mb-1" style={{ fontFamily: 'Fredoka, sans-serif' }}>{painting.title}</h1>
          <p className="text-gray-500 mb-6 italic">{painting.date}</p>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed">{painting.description}</p>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {[
              { label: 'Medium', value: painting.medium },
              { label: 'Dimensions', value: painting.dimensions },
              { label: 'Collection', value: painting.collection.charAt(0).toUpperCase() + painting.collection.slice(1) },
              { label: 'Year', value: painting.date },
            ].map(item => (
              <div key={item.label} className="rounded-xl border-2 border-black p-3" style={{ backgroundColor: 'var(--yellow)' }}>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">{item.label}</p>
                <p className="font-semibold mt-0.5">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Colours */}
          <div className="mb-8">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Primary Colours</p>
            <div className="flex gap-2 flex-wrap">
              {painting.colours.map(c => (
                <span key={c} className="px-3 py-1 rounded-full border-2 border-black text-sm font-medium capitalize" style={{ backgroundColor: 'var(--green-light)' }}>{c}</span>
              ))}
            </div>
          </div>

          {/* Buy Button */}
          {painting.sold ? (
            <div className="rounded-2xl border-2 border-black p-6 text-center" style={{ backgroundColor: '#f9a8c9' }}>
              <p className="font-bold text-xl">This painting has been sold 💛</p>
              <p className="text-gray-600 mt-1">Browse the gallery to find your next favourite.</p>
            </div>
          ) : (
            <BuyButton
              paintingId={painting.id}
              title={painting.title}
              price={painting.price}
              image={painting.image}
            />
          )}
        </div>
      </div>
    </main>
  )
}