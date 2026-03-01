<script setup lang="ts"></script>
<template aria-labelledby="Posts">
  <section class="posts">
    <h2 id="Posts">Our Posts</h2>
  </section>
</template>
<style scoped>
.posts {
  > * {
    grid-column: content;
  }
}
</style>
