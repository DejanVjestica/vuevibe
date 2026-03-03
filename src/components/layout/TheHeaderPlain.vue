<script setup lang="ts">
import TheLogo from '../ui/TheLogo.vue'
</script>
<template>
  <header class="header-plain">
    <TheLogo />
  </header>
</template>
<style scoped>
.header-plain {
  grid-template-rows: 10rem;
  color: var(--color-background-2);
  display: grid;
  place-items: center;
}
</style>
