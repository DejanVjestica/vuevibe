<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  heroBg: [string, string]
}>()
const imageSet = computed(() => {
  const [oneX, twoX] = props.heroBg
  return `image-set(
  url(${oneX}) 1x,
  url(${twoX}) 2x
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
  background-image: var(--hero-bg);
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--color-display-1);
  display: grid;
  grid-column: full;
  grid-template-columns: subgrid;
  height: 60rem;

  > div {
    grid-column: content;
    margin-block-end: 5rem;
    text-wrap: pretty;
    align-content: flex-end;
    display: grid;
    grid-template-columns: [col-start] 1fr 1fr [col-end];
  }
}
</style>
