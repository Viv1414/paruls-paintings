export type Painting = {
  id: string
  title: string
  price: number
  medium: string
  dimensions: string
  description: string
  image: string
  sold: boolean
  favourite: boolean
  colours: string[]
  date: string
  collection: 'abstract' | 'acrylic'
}

export const paintings: Painting[] = [
  {
    id: "1",
    title: "Morning Light",
    price: 280,
    medium: "Oil on canvas",
    dimensions: '16" x 20"',
    description: "A warm study of early morning sunlight filtering through a window.",
    image: "/paintings/1.jpg",
    sold: false,
    favourite: true,
    colours: ["yellow", "orange", "white"],
    date: "2021",
    collection: "abstract",
  },
  {
    id: "2",
    title: "Still Life with Flowers",
    price: 320,
    medium: "Watercolour",
    dimensions: '12" x 16"',
    description: "Vibrant wildflowers arranged in a ceramic vase.",
    image: "/paintings/2.jpg",
    sold: false,
    favourite: false,
    colours: ["pink", "green", "purple"],
    date: "2020",
    collection: "acrylic",
  },
  {
    id: "3",
    title: "Autumn Path",
    price: 450,
    medium: "Oil on canvas",
    dimensions: '20" x 24"',
    description: "A quiet trail lined with trees in full autumn colour.",
    image: "/paintings/3.jpg",
    sold: true,
    favourite: true,
    colours: ["orange", "brown", "red"],
    date: "2019",
    collection: "abstract",
  },
]