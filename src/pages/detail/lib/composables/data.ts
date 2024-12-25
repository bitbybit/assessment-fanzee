import { type Movie, useMovieStore } from '@/entities/movie/model'
import { computed } from 'vue'

export const useDetailData = () => {
  const store = useMovieStore()

  const title = computed<Movie['title']>(() => store.detail?.title ?? '')

  const previewUrl = computed<Movie['previewUrl']>(() => store.detail?.previewUrl ?? '')

  const description = computed<Movie['description']>(() => store.detail?.description ?? '')

  const trivia = computed<Movie['trivia']>(() => store.detail?.trivia ?? [])

  const actors = computed<Movie['actors']>(() => store.detail?.actors ?? [])

  return {
    actors,
    description,
    previewUrl,
    title,
    trivia,
  }
}
