'use client'

import { useState } from 'react'
import Link from 'next/link'
import { paintings } from '@/lib/paintings'

type Collection = 'abstract' | 'acrylic'

const collections = [
  { id: 'abstract' as Collection, label: 'Abstract', emoji: '🌀', desc: 'Bold shapes, expressive colour, and feeling over form.' },
  { id: 'acrylic' as Collection, label: 'Acrylic', emoji: '🖌️', desc: 'Vivid, layered acrylic works full of texture and life.' },
]

export default function Collections() {
  const [open, setOpen] = useState<Collection | null>(null)

  const collectionPaintings = open ? paintings.filter(p => p.collection === open) : []

  return (
    <main className="min-h-screen py-16 px-6 max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold text-center mb-3" style={{ fontFamily: 'Fredoka, sans-serif' }}>Collections</h1>
      <p className="text-center text-gray-500 mb-14 text-lg">Browse paintings by style</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {collections.map(col => (
          <button key={col.id} onClick={() => setOpen(col.id)}
            className="group text-left rounded-3xl border-2 border-black p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            style={{ backgroundColor: col.id === 'abstract' ? 'var(--pink)' : 'var(--yellow)' }}>
            <div className="text-6xl mb-4">{col.emoji}</div>
            <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>{col.label}</h2>
            <p className="text-gray-700">{col.desc}</p>
            <p className="mt-4 font-bold underline underline-offset-4">
              {paintings.filter(p => p.collection === col.id).length} paintings →
            </p>
          </button>
        ))}
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={() => setOpen(null)}>
          <div className="bg-white rounded-3xl border-2 border-black max-w-4xl w-full max-h-[85vh] overflow-y-auto p-8"
            onClick={e => e.stopPropagation()}>
            
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                {collections.find(c => c.id === open)?.label} Collection
              </h2>
              <button onClick={() => setOpen(null)} className="text-2xl font-bold hover:opacity-60 transition">✕</button>
            </div>

            {collectionPaintings.length === 0 ? (
              <p className="text-gray-400 text-center py-10">No paintings in this collection yet.</p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {collectionPaintings.map(p => (
                  <Link href={`/gallery/${p.id}`} key={p.id} onClick={() => setOpen(null)}>
                    <div className="group rounded-xl overflow-hidden border-2 border-black hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all">
                      <div className="aspect-square bg-gray-100 overflow-hidden">
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                      </div>
                      <div className="p-2 text-center">
                        <p className="font-bold text-sm" style={{ fontFamily: 'Fredoka, sans-serif' }}>{p.title}</p>
                        <p className="text-xs text-gray-500">{p.sold ? 'Sold' : `$${p.price}`}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  )
}