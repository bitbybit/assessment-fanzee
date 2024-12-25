<template>
  <TheBadge><IconTime /> {{ props.movie.duration }}</TheBadge>
</template>

<script setup lang="ts">
import { type Props } from './types'
import { IconTime, TheBadge } from '@/shared'

const props = defineProps<Props>()
</script>
