<template>
  <h2 class="h2 line-clamp-1">
    {{ props.movie.title }}
  </h2>
</template>

<script setup lang="ts">
import { type Props } from './types'

const props = defineProps<Props>()
</script>
