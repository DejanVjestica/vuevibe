<script setup lang="ts">
import TheHero from '../components/ui/TheHero.vue'
import hero1x from '@/assets/images/consult-hero@1x.jpg'
import hero2x from '@/assets/images/consult-hero@1x.jpg'
</script>
<template>
  <TheHero :heroBg="[hero1x, hero2x]">
    <h1 class="heading-h1">Let us help you</h1>
  </TheHero>
  <h2>schedule-a-consult</h2>
</template>
<style scoped>
.heading-h1 {
  font: var(--hero-display);
  grid-column: col;
}
</style>
