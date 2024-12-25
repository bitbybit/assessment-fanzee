<template>
  <h2 class="h1">Trivia</h2>

  <ul class="list-inside list-disc">
    <li v-for="(item, itemIndex) in props.trivia" :key="itemIndex">
      {{ item }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { type TriviaProps } from './types'

const props = defineProps<TriviaProps>()
</script>
