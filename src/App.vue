<script setup lang="ts">
import SiteLogo from './components/SiteLogo.vue'
import SiteNav from './components/SiteNav.vue'
</script>

<template>
  <header class="header">
    <div>
      <SiteLogo />
      <SiteNav />
    </div>
  </header>

  <main class="main">
    <RouterView />
  </main>
</template>

<style>
.header {
  background-color: var(--color-background-3);
  color: var(--color-paragraph-2);
  display: grid;
  grid-template-columns: var(--grid-template-columns);
  grid-template-rows: 6.7rem;

  > div {
    align-items: center;
    display: flex;
    grid-column: content;
    justify-content: space-between;
    max-width: var(--content-max-width);
  }
}

.main {
  display: grid;
  grid-template-columns: var(--grid-template-columns);

  > * {
    grid-column: content;
  }
}
</style>
