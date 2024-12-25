<template>
  <h2 class="h1">Actors</h2>

  <ul class="list-inside list-disc">
    <li v-for="{ name, imdb_id } in props.actors" :key="imdb_id">
      <a
        class="underline hover:no-underline"
        :href="`https://www.imdb.com/name/${imdb_id}/`"
        target="_blank"
        >{{ name }}</a
      >
    </li>
  </ul>
</template>

<script setup lang="ts">
import { type ActorsProps } from './types'

const props = defineProps<ActorsProps>()
</script>
