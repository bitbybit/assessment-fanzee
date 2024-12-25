import { fetchMovieById, fetchMovieList, type GetMovieByIdParams } from '../api'
import { type Movie } from './types'
import { responseToMovie } from '../lib'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export { type Movie } from './types'

export const useMovieStore = defineStore('movie', () => {
  const isLoading = ref<boolean>(false)

  const list = ref<Movie[]>([])
  const detail = ref<Movie | null>(null)

  async function getMovieList(): Promise<void> {
    isLoading.value = true

    try {
      const { items } = await fetchMovieList()

      list.value = items.map(responseToMovie)
    } catch (e) {
      console.error(e)
    } finally {
      isLoading.value = false
    }
  }

  async function getMovieById(params: GetMovieByIdParams): Promise<void> {
    isLoading.value = true

    try {
      const response = await fetchMovieById(params)

      detail.value = responseToMovie(response)
    } catch (e) {
      console.error(e)
    } finally {
      isLoading.value = false
    }
  }

  return {
    detail,
    getMovieById,
    getMovieList,
    isLoading,
    list,
  }
})
