<script setup lang="ts">
import { computed } from 'vue'
import type { User } from '../../types/user'

const props = defineProps<{ user: User }>()

const formatetTitle = computed(() => {
  const name = props.user.name ? props.user.name : ''
  const nickname = props.user.username ? `<span>@${props.user.username}</span>` : ''

  if (!name && !nickname) return ''
  return `${name} ${nickname}`
})
</script>
<template>
  <article>
    <header v-if="formatetTitle">
      <h2 v-html="formatetTitle"></h2>
    </header>
    <section>
      <address>
        <ul>
          <li>
            <a :href="`mailto:${user.email}`">{{ user.email }}</a>
          </li>
          <li>
            <a :href="`tel:${user.phone}`">{{ user.phone }}</a>
          </li>
          <li>
            <a :href="`https://${user.website}`" target="_blank" rel="noopener">{{
              user.website
            }}</a>
          </li>
        </ul>
      </address>
    </section>
    <footer></footer>
  </article>
</template>
<style scoped></style>
