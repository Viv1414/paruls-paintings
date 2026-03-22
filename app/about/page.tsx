export default function About() {
  return (
    <main className="min-h-screen py-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold text-center mb-16" style={{ fontFamily: 'Fredoka, sans-serif' }}>About Parul</h1>

      {/* Intro */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="rounded-2xl overflow-hidden border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] aspect-square bg-gray-100">
          <img src="/about/parul.jpg" alt="Parul Garg" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Fredoka, sans-serif' }}>Hi, I'm Parul 👋</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            I've been painting for over 15 years, exploring colour, texture, and emotion through abstract and acrylic work. 
            Each painting starts as a feeling and becomes something entirely its own.
          </p>
        </div>
      </div>

      {/* Process Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Fredoka, sans-serif' }}>The Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl border-2 border-black overflow-hidden">
            <div className="bg-gray-100 aspect-video">
              <img src="/about/process1.jpg" alt="Work in progress" className="w-full h-full object-cover" />
            </div>
            <div className="p-5" style={{ backgroundColor: 'var(--yellow)' }}>
              <p className="text-gray-700">Every painting begins with a blank canvas and an emotion — not a plan. The colours find each other.</p>
            </div>
          </div>
          <div className="rounded-2xl border-2 border-black overflow-hidden">
            <div className="bg-gray-100 aspect-video">
              <img src="/about/process2.jpg" alt="Finished painting" className="w-full h-full object-cover" />
            </div>
            <div className="p-5" style={{ backgroundColor: 'var(--green-light)' }}>
              <p className="text-gray-700">Layers build slowly. Some paintings take an afternoon. Others take weeks of returning and stepping away.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Instagram */}
      <div className="text-center rounded-3xl border-2 border-black p-12" style={{ backgroundColor: 'var(--pink)' }}>
        <p className="text-5xl mb-4">📸</p>
        <h2 className="text-3xl font-bold mb-3 text-white" style={{ fontFamily: 'Fredoka, sans-serif' }}>Follow on Instagram</h2>
        <p className="text-white/80 mb-6">Works in progress, new pieces, and the occasional behind-the-scenes</p>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
          className="inline-block font-bold text-lg px-8 py-3 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          style={{ backgroundColor: 'var(--white)', fontFamily: 'Fredoka, sans-serif' }}>
          @parulspaintings
        </a>
      </div>
    </main>
  )
}