<template>
  <div class="flex h-full flex-col justify-between">
    <BaseHeader />

    <div class="mt-[100px] flex-1 px-12 py-9">
      <slot />
    </div>

    <BaseFooter />
  </div>
</template>

<script setup lang="ts">
import { BaseHeader, BaseFooter } from '@/widgets'
</script>
