import { type MovieDto } from '../../api'
import { type Movie } from '../../model'

export const responseToMovie = (response: MovieDto): Movie => ({
  actors: response.actors,
  category: response.genre,
  description: response.description,
  duration: response.duration,
  id: response.id,
  previewUrl: response.poster,
  rating: Number(response.rating.toFixed(1)),
  title: response.name,
  trivia: response.trivia,
})
