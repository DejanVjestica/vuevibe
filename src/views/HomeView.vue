<script setup lang="ts">
import TheHero from '@/components/TheHero.vue'
import hero1x from '@/assets/images/hero@1x.jpg'
import hero2x from '@/assets/images/hero@2x.jpg'
import AllUsers from '@/components/AllUsers.vue'
</script>
<template>
  <TheHero :heroBg="[hero1x, hero2x]">
    <h1 class="heading-h1">Jones & Brown Legal</h1>
    <h2 class="heading-h2">Deep expertise, decisive courtroom presence</h2>
    <h3 class="heading-h3">
      We've been serving the Los Angeles area with expert legal counsel since 1976.
    </h3>
  </TheHero>
  <h2>List of Users</h2>
  <AllUsers></AllUsers>
</template>
<style scoped>
.heading-h1 {
  grid-column: col;
  font: var(--hero-display);
}

.heading-h2 {
  grid-column: col;
}

.heading-h3 {
  grid-column: col;
}

@media (min-width: 1260px) {
  .heading-h2 {
    grid-column: initial;
  }

  .heading-h3 {
    margin-inline-start: 3rem;
    grid-column: initial;
  }
}
</style>
