<script setup lang="ts">
import { computed, ref } from 'vue'
import SiteLogo from './components/SiteLogo.vue'
import SiteNav from './components/SiteNav.vue'
import NotFoundView from './views/NotFoundView.vue'
import ServicesView from './views/ServicesView.vue'
import Home from './views/HomeView.vue'
import ConsultView from './views/ConsultView.vue'

const routes = {
  '/': Home,
  '/Services': ServicesView,
  '/Consult': ConsultView,
} as const

const currentPath = ref(window.location.hash)
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  const path = (currentPath.value.slice(1) || '/') as '/' | '/Services'
  return routes[path] || NotFoundView
})
</script>

<template>
  <header class="header">
    <div>
      <SiteLogo />
      <SiteNav />
    </div>
  </header>

  <main class="main">
    <component :is="currentView" />
  </main>
</template>

<style scoped>
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
}
</style>
