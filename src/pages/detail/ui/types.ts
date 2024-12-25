import { type Movie } from '@/entities/movie/model'

export interface TitleProps {
  title: Movie['title']
}

export interface PreviewProps {
  previewUrl: Movie['previewUrl']
  title: Movie['title']
}

export interface DescriptionProps {
  description: Movie['description']
}

export interface TriviaProps {
  trivia: Movie['trivia']
}

export interface ActorsProps {
  actors: Movie['actors']
}
