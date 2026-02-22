<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import hero1x from '@/assets/images/hero@1x.jpg'
import hero2x from '@/assets/images/hero@2x.jpg'
</script>
<template>
  <PageHero :heroBg="[hero1x, hero2x]">
    <h1 class="heading-h1">Jones & Brown Legal</h1>
    <h2 class="heading-h2">Deep expertise, decisive courtroom presence</h2>
    <h3 class="heading-h3">
      We've been serving the Los Angeles area with expert legal counsel since 1976.
    </h3>
  </PageHero>
  <h1>Home</h1>
</template>
<style scoped>
.heading-h1 {
  font-size: 4.2rem;
}

.heading-h2 {
  font-size: var(--header-1);
}

.heading-h3 {
  font-size: var(--header-1s);
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
    flex-basis: 60%;
  }

  .heading-h3 {
    flex-basis: 35%;
  }
}
</style>
