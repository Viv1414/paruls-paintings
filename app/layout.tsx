import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/app/components/Navbar'

export const metadata: Metadata = {
  title: "Parul's Paintings",
  description: 'Original paintings for sale',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}