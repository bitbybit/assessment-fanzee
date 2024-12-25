<template>
  <div
    class="inline-flex items-center gap-1 rounded-[8px] px-[8px] py-[2px] text-sm"
    :class="cssClassVariant"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { type Props } from './types'
import { computed } from 'vue'

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})

const cssClassVariant = computed<string>(() => {
  switch (props.variant) {
    case 'danger':
      return 'bg-red'

    case 'success':
      return 'bg-green'

    case 'info':
      return 'bg-blue'

    default:
      return 'bg-purple'
  }
})
</script>
