<template>
  <img
    class="h-[172px] w-full rounded-[8px] object-cover"
    :src="props.movie.previewUrl"
    :alt="props.movie.title"
  />
</template>

<script setup lang="ts">
import { type Props } from './types'

const props = defineProps<Props>()
</script>
