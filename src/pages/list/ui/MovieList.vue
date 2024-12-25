<template>
  <div class="grid justify-center gap-[16px]" :class="$style.list">
    <TheCard class="w-[324px]" v-for="item in store.list" :key="item.id" :movie="item" />
  </div>
</template>

<script setup lang="ts">
import { TheCard } from '@/shared'
import { useMovieStore } from '@/entities/movie/model'
import { onMounted } from 'vue'

const store = useMovieStore()

onMounted(() => {
  store.getMovieList()
})
</script>

<style module lang="scss">
.list {
  grid-template-columns: repeat(auto-fit, minmax(324px, max-content));
}
</style>
