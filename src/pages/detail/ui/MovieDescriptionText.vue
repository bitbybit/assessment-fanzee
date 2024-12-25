<template>
  <h2 class="h1">Description</h2>

  <div>{{ props.description }}</div>
</template>

<script setup lang="ts">
import { type DescriptionProps } from './types'

const props = defineProps<DescriptionProps>()
</script>
