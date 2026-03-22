'use client'

type Props = {
  paintingId: string
  title: string
  price: number
  image: string
}

export default function BuyButton({ paintingId, title, price, image }: Props) {
  async function handleBuy() {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ paintingId, title, price, image }),
    })

    const data = await res.json()
    if (data.url) {
      window.location.href = data.url
    }
  }

  return (
    <div className="rounded-2xl border-2 border-black p-6" style={{ backgroundColor: '#dcfce7' }}>
      <p className="text-3xl font-bold mb-4">${price}</p>
      <button
        onClick={handleBuy}
        className="w-full py-4 rounded-xl border-2 border-black font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
        style={{ backgroundColor: '#f9a8c9' }}
      >
        Buy Now 🛒
      </button>
    </div>
  )
}