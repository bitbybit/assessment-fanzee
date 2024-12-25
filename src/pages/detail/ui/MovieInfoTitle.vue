<template>
  <h1 class="h1">
    {{ props.title }}
  </h1>
</template>

<script setup lang="ts">
import { type TitleProps } from './types'

const props = defineProps<TitleProps>()
</script>
