<script setup lang="ts">
import TheFooter from './components/layout/TheFooter.vue'
import TheHeader from './components/layout/TheHeader.vue'
import TheHeaderPlain from './components/layout/TheHeaderPlain.vue'
</script>

<template>
  <TheHeader v-if="!$route.meta.plainLayout" />
  <TheHeaderPlain v-if="$route.meta.plainLayout" />
  <main class="main">
    <RouterView />
  </main>
  <TheFooter v-if="!$route.meta.plainLayout"></TheFooter>
</template>
