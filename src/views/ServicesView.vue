<script setup lang="ts">
import TheHero from '../components/TheHero.vue'
import hero1x from '@/assets/images/services-hero@1x.jpg'
import hero2x from '@/assets/images/services-hero@1x.jpg'
</script>
<template>
  <TheHero :heroBg="[hero1x, hero2x]">
    <h1 class="heading-h1">
      At Jones & Brown Legal, we are committed to exceptional service and successful outcomes with:
    </h1>
  </TheHero>
  <h1>Services</h1>
</template>

<style scoped>
.heading-h1 {
  font-size: var(--header-1);
}
</style>
