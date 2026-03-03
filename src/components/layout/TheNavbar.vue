<script setup lang="ts">
import { useAuthStore } from '@/features/auth/store/authStore'

const authStore = useAuthStore()

const handleLogout = async () => {
  try {
    await authStore.logout()
  } catch (error) {
    console.error('Logout failed:', error)
  }
}
</script>

<template>
  <nav class="nav">
    <ul v-if="authStore.isInitialised">
      <li><RouterLink to="/services">Services</RouterLink></li>
      <li><RouterLink to="/consult">Schedule a Consult</RouterLink></li>
      <li v-if="authStore.user">
        <span>{{ authStore.user.email }}</span>
        <button @click="handleLogout" class="logout-btn">Logout</button>
      </li>
      <li v-else>
        <RouterLink to="/auth/login">Login or register</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  gap: 3.7rem;
  align-items: center;

  ul {
    display: contents;

    li {
      display: contents;
    }
  }
}
</style>
