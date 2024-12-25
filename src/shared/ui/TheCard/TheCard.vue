<template>
  <router-link
    class="relative left-0 top-0 block rounded-[16px] bg-gray p-[12px] hover:-left-[8px] hover:-top-[8px] hover:shadow-[8px_8px_0_#702bfe]"
    :to="toMovie"
  >
    <MoviePreview class="mb-[12px]" :movie="props.movie" />
    <MovieTitle class="mb-[8px]" :movie="props.movie" />
    <MovieDescription class="mb-[12px]" :movie="props.movie" />

    <TheMeta :movie="props.movie" />
  </router-link>
</template>

<script setup lang="ts">
import { type Props } from './types'
import MoviePreview from './MoviePreview.vue'
import MovieTitle from './MovieTitle.vue'
import MovieDescription from './MovieDescription.vue'
import { TheMeta } from '@/shared'
import { computed } from 'vue'

const props = defineProps<Props>()

const toMovie = computed(() => ({
  name: 'movie',
  params: {
    id: props.movie.id,
  },
}))
</script>
