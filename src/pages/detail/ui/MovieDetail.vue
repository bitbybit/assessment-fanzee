<template>
  <div class="flex flex-wrap gap-[64px]">
    <div class="w-[240px] max-w-full">
      <MovieInfo />
    </div>

    <div class="flex-1">
      <MovieDescription />
    </div>
  </div>
</template>

<script setup lang="ts">
import MovieInfo from './MovieInfo.vue'
import MovieDescription from './MovieDescription.vue'
import { useMovieStore } from '@/entities/movie/model'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const store = useMovieStore()

onMounted(() => {
  store.getMovieById({
    id: Number(route.params.id),
  })
})
</script>
