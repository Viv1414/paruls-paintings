import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: 'var(--yellow)' }} className="w-full py-4 px-8 flex items-center justify-between sticky top-0 z-50 border-b-2 border-black">
      <Link href="/" className="text-2xl font-bold" style={{ fontFamily: 'Fredoka, sans-serif' }}>
        paintings by parul
      </Link>
      <div className="flex gap-8 text-lg font-semibold">
        <Link href="/gallery" className="hover:underline decoration-2 underline-offset-4 transition">Gallery</Link>
        <Link href="/collections" className="hover:underline decoration-2 underline-offset-4 transition">Collections</Link>
        <Link href="/about" className="hover:underline decoration-2 underline-offset-4 transition">About</Link>
        <Link href="/contact" className="hover:underline decoration-2 underline-offset-4 transition">Contact</Link>
        <Link href="/cart" className="hover:underline decoration-2 underline-offset-4 transition">🛒 Cart</Link>
      </div>
    </nav>
  )
}