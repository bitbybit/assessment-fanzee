<template>
  <img
    class="h-[320px] w-full rounded-[8px] object-cover"
    :src="props.previewUrl"
    :alt="props.title"
  />
</template>

<script setup lang="ts">
import { type PreviewProps } from './types'

const props = defineProps<PreviewProps>()
</script>
