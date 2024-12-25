<template>
  <div class="sticky top-[132px]">
    <MovieInfoTitle class="mb-[24px]" :title="data.title.value" />

    <MovieInfoPreview
      class="mb-[24px]"
      :preview-url="data.previewUrl.value"
      :title="data.title.value"
    />

    <TheMeta v-if="store.detail !== null" :movie="store.detail" />
  </div>
</template>

<script setup lang="ts">
import { TheMeta } from '@/shared'
import { useMovieStore } from '@/entities/movie/model'
import { useDetailData } from '../lib'
import MovieInfoTitle from './MovieInfoTitle.vue'
import MovieInfoPreview from './MovieInfoPreview.vue'

const store = useMovieStore()
const data = useDetailData()
</script>
