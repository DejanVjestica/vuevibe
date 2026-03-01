<script setup lang="ts">
import { onMounted, ref, watch, onUnmounted, computed } from 'vue'
import type { User } from '../../types/user'
import UserCard from './UserCard.vue'
import { useFetch } from '@/composables/useFetch'
import { useDebounce } from '@/composables/useDebounce'
import SearchUsersForm from './SearchUsersForm.vue'

const apiURL = `${import.meta.env.VITE_API_BASE_URL}/users`

const queryParams = ref({
  name_like: '',
})

const {
  data: users,
  loading,
  error,
  execute,
  abort,
} = useFetch<User[]>(apiURL, { params: queryParams })

const userLength = computed(() => users.value?.length.toString() ?? 0)
const debouncedExecute = useDebounce(execute, 500)

watch(
  () => queryParams.value.name_like,
  () => {
    debouncedExecute()
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

    <SearchUsersForm v-model="queryParams"></SearchUsersForm>

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
