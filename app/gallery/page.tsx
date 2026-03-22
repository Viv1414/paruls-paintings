'use client'

import { useState } from 'react'
import Link from 'next/link'
import { paintings } from '@/lib/paintings'

const allColours = ['pink', 'yellow', 'orange', 'green', 'purple', 'blue', 'red', 'brown', 'white', 'black']
const allSizes = ['Small (under 12")', 'Medium (12"–20")', 'Large (20"+)']

function getSize(dimensions: string) {
  const match = dimensions.match(/\d+/)
  const n = match ? parseInt(match[0]) : 0
  if (n < 12) return 'Small (under 12")'
  if (n <= 20) return 'Medium (12"–20")'
  return 'Large (20"+")'
}

export default function Gallery() {
  const [styleFilter, setStyleFilter] = useState('All')
  const [sizeFilter, setSizeFilter] = useState('All')
  const [colourFilter, setColourFilter] = useState('All')
  const [maxPrice, setMaxPrice] = useState(1000)

  const filtered = paintings.filter(p => {
    if (styleFilter !== 'All' && p.collection !== styleFilter.toLowerCase()) return false
    if (sizeFilter !== 'All' && getSize(p.dimensions) !== sizeFilter) return false
    if (colourFilter !== 'All' && !p.colours.includes(colourFilter.toLowerCase())) return false
    if (p.price > maxPrice) return false
    return true
  })

  return (
    <main className="min-h-screen py-16 px-6 max-w-7xl mx-auto">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-3" style={{ fontFamily: 'Fredoka, sans-serif' }}>Gallery</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto italic">
          Each piece was finished with care, love and after several hours of hard work. Paintings by Parul Garg.
        </p>
      </div>

      {/* Filters */}
      <div style={{ backgroundColor: 'var(--yellow)' }} className="rounded-2xl border-2 border-black p-6 mb-10 flex flex-wrap gap-6 items-end">
        
        <div>
          <label className="block text-sm font-bold mb-1">Style</label>
          <select value={styleFilter} onChange={e => setStyleFilter(e.target.value)}
            className="border-2 border-black rounded-xl px-4 py-2 bg-white font-medium">
            <option>All</option>
            <option>Abstract</option>
            <option>Acrylic</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold mb-1">Size</label>
          <select value={sizeFilter} onChange={e => setSizeFilter(e.target.value)}
            className="border-2 border-black rounded-xl px-4 py-2 bg-white font-medium">
            <option>All</option>
            {allSizes.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold mb-1">Colour</label>
          <select value={colourFilter} onChange={e => setColourFilter(e.target.value)}
            className="border-2 border-black rounded-xl px-4 py-2 bg-white font-medium">
            <option>All</option>
            {allColours.map(c => <option key={c} className="capitalize">{c.charAt(0).toUpperCase() + c.slice(1)}</option>)}
          </select>
        </div>

        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-bold mb-1">Max Price: ${maxPrice}</label>
          <input type="range" min={50} max={1000} step={10} value={maxPrice}
            onChange={e => setMaxPrice(Number(e.target.value))}
            className="w-full accent-black" />
        </div>

        <button onClick={() => { setStyleFilter('All'); setSizeFilter('All'); setColourFilter('All'); setMaxPrice(1000) }}
          className="text-sm underline font-medium">
          Clear filters
        </button>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-center text-gray-400 mt-20 text-lg">No paintings match your filters.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(p => (
            <Link href={`/gallery/${p.id}`} key={p.id}>
              <div className="group rounded-2xl overflow-hidden border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer">
                <div className="bg-gray-100 aspect-square overflow-hidden relative">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                  {p.favourite && (
                    <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full border-2 border-black" style={{ backgroundColor: 'var(--pink)' }}>
                      ⭐ Favourite
                    </span>
                  )}
                  {p.sold && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="text-white font-bold text-2xl" style={{ fontFamily: 'Fredoka, sans-serif' }}>Sold</span>
                    </div>
                  )}
                </div>
                <div className="p-4 bg-white">
                  <h2 className="font-bold text-xl mb-1" style={{ fontFamily: 'Fredoka, sans-serif' }}>{p.title}</h2>
                  <p className="text-gray-500 text-sm">{p.medium} · {p.dimensions}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="font-bold text-lg">{p.sold ? <span className="text-red-400">Sold</span> : `$${p.price}`}</p>
                    <div className="flex gap-1">
                      {p.colours.slice(0, 3).map(c => (
                        <span key={c} className="text-xs px-2 py-0.5 rounded-full border border-gray-300 text-gray-500 capitalize">{c}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  )
}