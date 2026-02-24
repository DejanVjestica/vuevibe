<script setup lang="ts">
import TheHero from '../components/TheHero.vue'
import hero1x from '@/assets/images/hero@1x.jpg'
import hero2x from '@/assets/images/hero@2x.jpg'
</script>
<template>
  <TheHero :heroBg="[hero1x, hero2x]">
    <h1 class="heading-h1">Jones & Brown Legal</h1>
    <h2 class="heading-h2">Deep expertise, decisive courtroom presence</h2>
    <h3 class="heading-h3">
      We've been serving the Los Angeles area with expert legal counsel since 1976.
    </h3>
  </TheHero>
  <h1>Home</h1>
</template>
<style scoped>
.heading-h1 {
  font-size: 4.2rem;
  grid-column: col;
}

.heading-h2 {
  font-size: var(--header-1);
  grid-column: col;
}

.heading-h3 {
  font-size: var(--header-1s);
  grid-column: col;
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

  .heading-h2 {
    grid-column: initial;
  }

  .heading-h3 {
    margin-inline-start: 3rem;
    grid-column: initial;
  }
}
</style>
