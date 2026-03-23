import { supabase } from './supabase'

export type Painting = {
  id: string
  title: string
  price: number
  medium: string
  dimensions: string
  description: string
  image_url: string | null
  sold: boolean
  favourite: boolean
  colours: string[]
  date: string
  collection: string
}

export async function getPaintings(): Promise<Painting[]> {
  const { data, error } = await supabase
    .from('paintings')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching paintings:', error)
    return []
  }

  return data
}

export async function getPainting(id: string): Promise<Painting | null> {
  const { data, error } = await supabase
    .from('paintings')
    .select('*')
    .eq('id', id)
    .single()

  if (error) return null
  return data
}