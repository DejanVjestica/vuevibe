<script setup lang="ts">
import TheLogo from '../ui/TheLogo.vue'
import TheNavbar from './TheNavbar.vue'
</script>
<template>
  <header class="header">
    <div>
      <TheLogo />
      <TheNavbar />
    </div>
  </header>
</template>
<style scoped>
.header {
  background-color: var(--color-background-3);
  color: var(--color-paragraph-2);
  grid-template-rows: 6.7rem;

  > div {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
}
</style>
