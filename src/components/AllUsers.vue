<script setup lang="ts">
import { onMounted } from 'vue'
import type { User } from '../types/user'
import UserCard from './UserCard.vue'
import { useFetch } from '@/composables/useFetch'

const {
  data: users,
  loading,
  error,
  execute,
} = useFetch<User[]>('https://jsonplaceholder.typicode.com/users')

onMounted(async () => {
  execute()
})
</script>
<template>
  <p v-if="loading">... Loading</p>
  <p v-else-if="error">{{ error }}</p>
  <ul v-else class="all-users">
    <li v-for="user in users" :key="user.id"><UserCard :user="user"></UserCard></li>
  </ul>
</template>
<style scoped>
.all-users {
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 25rem), 1fr));
}
</style>
