<template>
  <footer
    class="flex min-h-[98px] flex-wrap items-center justify-between bg-gray px-14"
    :class="$style.footer"
  >
    <FooterCopyright />

    <div>
      <FooterPhone />
      <FooterAddress />
    </div>
  </footer>
</template>

<script setup lang="ts">
import FooterCopyright from './FooterCopyright.vue'
import FooterPhone from './FooterPhone.vue'
import FooterAddress from './FooterAddress.vue'
</script>

<style module lang="scss">
.footer {
  box-shadow: 0 -4px 4px rgba(0, 0, 0, 0.25);
}
</style>
