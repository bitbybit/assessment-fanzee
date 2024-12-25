<template>
  <div class="flex gap-[8px]">
    <MovieRating :movie="props.movie" />
    <MovieCategory :movie="props.movie" />
    <MovieDuration :movie="props.movie" />
  </div>
</template>

<script setup lang="ts">
import { type Props } from './types'
import MovieRating from './MovieRating.vue'
import MovieCategory from './MovieCategory.vue'
import MovieDuration from './MovieDuration.vue'

const props = defineProps<Props>()
</script>
