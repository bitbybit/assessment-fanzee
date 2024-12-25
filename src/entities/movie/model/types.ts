export interface Actor {
  name: string
  imdb_id: string
}

export interface Movie {
  actors: Actor[]
  category: string
  description: string
  duration: string
  id: number
  previewUrl: string
  rating: number
  title: string
  trivia: string[]
}
