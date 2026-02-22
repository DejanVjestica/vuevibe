<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import hero1x from '@/assets/images/consult-hero@1x.jpg'
import hero2x from '@/assets/images/consult-hero@1x.jpg'
</script>
<template>
  <PageHero :heroBg="[hero1x, hero2x]">
    <h1 class="heading-h1">Let us help you</h1>
  </PageHero>
  <h1>schedule-a-consult</h1>
</template>
<style scoped>
.heading-h1 {
  font-size: 4.2rem;
}
@media (min-width: 768px) {
  .heading-h1 {
    font-size: var(--display-3);
  }
}
@media (min-width: 1260px) {
  .heading-h1 {
    font-size: var(--hero-display);
  }
}
</style>
