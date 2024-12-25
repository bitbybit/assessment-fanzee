export interface Actor {
  name: string
  imdb_id: string
}

export interface MovieDto {
  actors: Actor[]
  description: string
  duration: string
  genre: string
  id: number
  name: string
  poster: string
  rating: number
  trivia: string[]
}

export interface MovieListDto {
  items: MovieDto[]
}
