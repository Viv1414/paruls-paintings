import { getPaintings } from '@/lib/getPaintings'
import GalleryClient from '@/app/components/GalleryClient'

export default async function Gallery() {
  const paintings = await getPaintings()
  return <GalleryClient paintings={paintings} />
}