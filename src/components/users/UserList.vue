<script setup lang="ts">
import { onMounted, watch, onUnmounted, computed, ref } from 'vue'
import type { User } from '../../types/user'
import UserCard from './UserCard.vue'
import { useFetch } from '@/composables/useFetch'
import UserSearchForm from './UserSearchForm.vue'
import { useRoute, useRouter } from 'vue-router'

const apiURL = `${import.meta.env.VITE_API_BASE_URL}/users`

const route = useRoute()
const router = useRouter()

const filters = ref({
  name_like: (route.query.name_like as string) || '',
})

const {
  data: users,
  loading,
  error,
  execute,
  abort,
} = useFetch<User[]>(apiURL, { params: filters })

const userLength = computed(() => users.value?.length.toString() ?? 0)

watch(
  filters,
  (newFilters) => {
    const query = Object.fromEntries(Object.entries(newFilters).filter(([, value]) => value !== ''))
    router.push({ query })
    execute()
  },
  { deep: true },
)

watch(
  () => route.query,
  (newQuery) => {
    filters.value = {
      name_like: (newQuery.name_like as string) || '',
    }
  },
)

onMounted(() => {
  execute()
})

onUnmounted(() => {
  abort()
})
</script>
<template>
  <section class="all-users" aria-labelledby="Users">
    <h2 id="Users">User overview</h2>
    <p>there is {{ userLength }} users</p>

    <UserSearchForm v-model="filters"></UserSearchForm>

    <p v-if="loading">... Loading</p>
    <p v-else-if="error">{{ error }}</p>
    <ul v-else>
      <li v-for="user in users" :key="user.id">
        <UserCard :user="user"></UserCard>
      </li>
    </ul>
  </section>
</template>
<style scoped>
.all-users {
  > h2 {
    margin-block-end: 1rem;
  }

  > ul {
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 25rem), 1fr));
  }
}
</style>
