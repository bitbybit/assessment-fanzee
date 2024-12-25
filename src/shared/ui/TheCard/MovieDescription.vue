<template>
  <div class="line-clamp-2 h-[32px] font-medium leading-[16px]">
    {{ props.movie.description }}
  </div>
</template>

<script setup lang="ts">
import { type Props } from './types'

const props = defineProps<Props>()
</script>
