<template>
  <TheBadge variant="info">
    <IconMovie />

    <span class="capitalize">
      {{ props.movie.category }}
    </span>
  </TheBadge>
</template>

<script setup lang="ts">
import { type Props } from './types'
import { IconMovie, TheBadge } from '@/shared'

const props = defineProps<Props>()
</script>
