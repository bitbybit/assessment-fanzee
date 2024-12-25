<template>
  <div class="flex flex-col gap-[16px]">
    <MovieDescriptionText :description="data.description.value" />
    <MovieTrivia :trivia="data.trivia.value" />
    <MovieActors :actors="data.actors.value" />
  </div>
</template>

<script setup lang="ts">
import { useDetailData } from '../lib'
import MovieDescriptionText from './MovieDescriptionText.vue'
import MovieTrivia from './MovieTrivia.vue'
import MovieActors from './MovieActors.vue'

const data = useDetailData()
</script>
