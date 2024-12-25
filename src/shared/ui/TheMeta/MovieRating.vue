<template>
  <TheBadge :variant="variant"><IconStar /> {{ props.movie.rating }}</TheBadge>
</template>

<script setup lang="ts">
import { type Props } from './types'
import { type Props as BadgeProps } from '@/shared/ui/TheBadge/types'
import { IconStar, TheBadge } from '@/shared'
import { computed } from 'vue'
import { useRating } from '@/shared/lib'

const props = defineProps<Props>()

const rating = useRating(props.movie.rating)

const variant = computed<BadgeProps['variant']>(() => {
  switch (true) {
    case rating.value.isLow:
      return 'danger'

    case rating.value.isHigh:
      return 'success'

    default:
      return 'default'
  }
})
</script>
