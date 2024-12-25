<template>
  <header class="fixed flex min-h-[100px] w-full items-center bg-gray px-14" :class="$style.header">
    <h1 class="h1">
      <HeaderTitle />
    </h1>
  </header>
</template>

<script setup lang="ts">
import HeaderTitle from './HeaderTitle.vue'
</script>

<style module lang="scss">
.header {
  z-index: 2;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
