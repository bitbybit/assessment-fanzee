<template>
  <LayoutBase>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </LayoutBase>
</template>

<script setup lang="ts">
import { LayoutBase } from './layouts'
</script>

<style>
@import './styles/index.scss';
</style>
