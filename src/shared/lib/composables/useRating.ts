import { computed } from 'vue'
import { RATING } from '@/shared/constants/rating'

export const useRating = (rating: number) =>
  computed(() => ({
    isLow: rating < RATING.LOW,
    isHigh: rating >= RATING.HIGH,
  }))
