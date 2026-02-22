<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  heroBg: [string, string]
}>()
const imageSet = computed(() => {
  return `image-set(
  url(${props.heroBg[0]}) 1x,
  url(${props.heroBg[1]}) 2x
)`
})
</script>
<template>
  <section class="page-hero" :style="{ '--hero-bg': imageSet }">
    <div>
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  align-items: end;
  background-image: var(--hero-bg);
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--color-display-1);
  display: flex;
  flex-direction: row;
  grid-column: full;
  justify-content: center;
  min-height: 80rem;

  > div {
    width: var(--content-max-width);
    margin-block-end: 5rem;
    display: flex;
    flex-wrap: wrap;
    column-gap: 5%;
    text-wrap: pretty;
  }
}
</style>
