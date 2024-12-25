import { type MovieDto, type MovieListDto } from './types'
import { API } from '../constants/api.ts'

export { type MovieDto } from './types'

export const fetchMovieList = async (): Promise<MovieListDto> => {
  const response = await fetch(API.LIST)

  return (await response.json()) as MovieListDto
}

export type GetMovieByIdParams = {
  id: number
}

export const fetchMovieById = async ({ id }: GetMovieByIdParams): Promise<MovieDto> => {
  const response = await fetch(`${API.DETAIL}?id=${id}`)

  return (await response.json()) as MovieDto
}
